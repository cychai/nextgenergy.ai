// nextgenergy.ai Worker: serves the static site from ./dist and handles POST /api/contact,
// POST /api/whitepaper and GET /download/commissioning-white-paper[-zh] (gated white paper, English and Chinese editions, see the second half of this file).
//
// Contact flow: browser form → here → Gmail SMTP (worker/mail.js) → CONTACT_TO (default sales@nextgenergy.ai).
// Nothing is stored; the enquiry lives only in the company mailbox.
// Secrets on the Worker (Cloudflare → Workers → nextgenergy-ai → Settings → Variables and secrets):
//   GMAIL_USER          jim.li@nextgenergy.ai (the account that owns the app password)
//   GMAIL_APP_PASSWORD  a Google app password (Secret)
//   REPORT_FROM         optional From address, default sales@nextgenergy.ai (an alias of GMAIL_USER)
//   CONTACT_TO          optional recipient, default sales@nextgenergy.ai
// Until GMAIL_USER and GMAIL_APP_PASSWORD exist the endpoint answers 503 not_configured and the page falls back to mailto.
// Spam controls: same-origin check, hidden honeypot field, minimum fill time, field length limits. No third-party script.

import { sendMail } from './mail.js';

const ALLOWED_HOSTS = /^(nextgenergy\.ai|www\.nextgenergy\.ai|[a-z0-9-]+\.workers\.dev|localhost(:\d+)?|127\.0\.0\.1(:\d+)?)$/i;
const TOPICS = new Set([
  'Product enquiry or quote', 'Field testing or operations', 'New build', 'Retrofit', 'Heat reuse',
  'Commissioning or verification of an existing system', 'Partnership', 'Meeting at GDCC Canada 2026', 'Something else',
]);
const MAX_BODY = 16 * 1024;
const MIN_FILL_MS = 3000;
const EMAIL_RE = /^[^\s@<>",;]+@[^\s@<>",;]+\.[^\s@<>",;]+$/;
// eslint-disable-next-line no-control-regex

const STRIP = new RegExp('[\\x00-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F-\\x9F\\u200B-\\u200F\\u2028\\u2029\\uFEFF]', 'g');

const HEADERS = { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' };
const json = (status, body) => new Response(JSON.stringify(body), { status, headers: HEADERS });
const clean = (v, max) => (typeof v === 'string' ? v.replace(STRIP, '').trim().slice(0, max) : '');
const oneLine = (s) => s.replace(/[\r\n]+/g, ' ');

function sameOrigin(request) {
  const src = request.headers.get('Origin') || request.headers.get('Referer');
  if (!src) return false;
  try { return ALLOWED_HOSTS.test(new URL(src).host); } catch { return false; }
}

async function contact(request, env) {
  if (request.method !== 'POST') return json(405, { ok: false, error: 'method' });
  if (!sameOrigin(request)) return json(403, { ok: false, error: 'origin' });
  const len = Number(request.headers.get('Content-Length') || 0);
  if (len > MAX_BODY) return json(413, { ok: false, error: 'too_large' });
  let d;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY) return json(413, { ok: false, error: 'too_large' });
    d = JSON.parse(raw);
  } catch { return json(400, { ok: false, error: 'bad_json' }); }

  // Bots: a filled honeypot or an instant submit is accepted silently and dropped.
  if (clean(d.website, 200) || !(Number(d.elapsed) >= MIN_FILL_MS)) return json(200, { ok: true });

  const name = oneLine(clean(d.name, 120));
  const org = oneLine(clean(d.org, 160));
  const email = clean(d.email, 200);
  const topic = clean(d.topic, 80);
  const message = clean(d.message, 5000);
  const errors = [];
  if (!name) errors.push('name');
  if (!EMAIL_RE.test(email)) errors.push('email');
  if (!TOPICS.has(topic)) errors.push('topic');
  if (message.length < 10) errors.push('message');
  if (errors.length) return json(400, { ok: false, error: 'validation', fields: errors });

  if (!env.GMAIL_USER || !env.GMAIL_APP_PASSWORD) return json(503, { ok: false, error: 'not_configured' });
  // Optional project details (all may be empty). Each is one line, at most 200 characters.
  const DETAILS = [['load', 'IT load'], ['site', 'Site / location'], ['timing', 'Planned timing'], ['water', 'Supply / return conditions'], ['scope', 'Scope of supply'], ['day', 'Preferred day'], ['slot', 'Preferred time']];
  const details = DETAILS.map(([k, label]) => [label, oneLine(clean(d[k], 200))]).filter(([, v]) => v);
  const now = new Date();
  const ref = `NG-${now.toISOString().slice(2, 10).replace(/-/g, '')}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  const subject = `[nextgenergy.ai] ${topic} — ${name}${org ? ', ' + org : ''} [${ref}]`;
  const detailText = details.length ? `\n\nProject details\n${details.map(([l, v]) => `${l}: ${v}`).join('\n')}` : '';
  const text = `${message}${detailText}\n\n—\nReference: ${ref}\nName: ${name}\nOrganisation: ${org || '(not given)'}\nEmail: ${email}\nTopic: ${topic}\nSent from the contact form at nextgenergy.ai on ${now.toISOString()}\n`;
  try {
    await sendMail(env, { to: env.CONTACT_TO || 'sales@nextgenergy.ai', replyTo: email, subject, text });
    console.log(JSON.stringify({ t: 'contact', ok: true, topic }));
    return json(200, { ok: true, ref, at: now.toISOString() });
  } catch (e) {
    console.log(JSON.stringify({ t: 'contact', ok: false, err: String((e && e.message) || e).slice(0, 80) }));
    return json(502, { ok: false, error: 'upstream' });
  }
}

// ---- Gated white paper ----
// Flow: form on /resources/commissioning-white-paper → POST /api/whitepaper → lead email to the sales mailbox
// (and a short confirmation to the reader) → JSON with a signed link /download/<paper id>?t=<token>.
// The token is `<expiry unix seconds>.<HMAC-SHA256(DOWNLOAD_SECRET, "<paper id>:<expiry>") base64url>`, valid 7 days.
// The PDF is read from the R2 bucket bound as GATED_FILES if present, else from dist/_gated/; wrangler.jsonc sends
// /_gated/* to this Worker first and it answers 404 there, so the file is reachable only through the download route.
// The PDF is not committed (the GitHub repository is public); see .gitignore. Nothing is stored: the lead exists only as the email.
// Extra secret: DOWNLOAD_SECRET (any long random string). Without it, or without the Gmail secrets,
// POST /api/whitepaper answers 503 not_configured and the page asks the reader to email the sales mailbox.
//
// Two editions: `edition` 'en' (default) or 'zh' in the POST body picks the paper id.
// Chinese site: www.tsingchain.cn (Alibaba Cloud ECS) has no Worker of its own for this. Its nginx proxies
// /api/whitepaper and /download/ to https://nextgenergy.ai, so the browser's Origin is the Chinese site.
// Requests from that Origin send the lead to CONTACT_TO_CN (default sales@tsingchain.cn) with Chinese labels and
// a Chinese confirmation; the returned link stays relative (/download/...) so it resolves through the same proxy.
// Field sets: the English form sends first/last/country; the Chinese form sends name/phone/region. Both are accepted.

const PAPERS = {
  'commissioning-white-paper': {
    asset: '/_gated/commissioning-white-paper.pdf',
    filename: 'NextGenergy-Liquid-Cooling-Commissioning-White-Paper.pdf',
    title: 'Liquid Cooling Commissioning and Site Acceptance',
    titleZh: '液冷系统调试与现场验收（英文版）',
    lang: 'en',
  },
  'commissioning-white-paper-zh': {
    asset: '/_gated/commissioning-white-paper-zh.pdf',
    filename: 'NextGenergy-Liquid-Cooling-Commissioning-White-Paper-ZH.pdf',
    filenameUtf8: 'NextGenergy-液冷系统调试与现场验收白皮书.pdf',
    title: 'Liquid Cooling Commissioning and Site Acceptance (Chinese edition)',
    titleZh: '液冷系统调试与现场验收（中文版）',
    lang: 'zh',
  },
};
const EDITIONS = { en: 'commissioning-white-paper', zh: 'commissioning-white-paper-zh' };
const PAPER_PAGE = '/resources/commissioning-white-paper';
const CN_HOSTS = /^(www\.)?tsingchain\.cn$/i;
const LINK_TTL_S = 7 * 24 * 3600;
const COUNTRIES = new Set(['Canada', 'United States', 'Other']);
const REGIONS_CN = new Set(['中国大陆', '港澳台', '北美', '其他']);
const PHONE_RE = /^[+\d][\d\s()+-]{4,29}$/;
const LABELS = {
  en: { first: 'First name', last: 'Last name', name: 'Name', email: 'Work email', org: 'Organisation', title: 'Job title', phone: 'Mobile', country: 'Country/region', region: 'Region', work: 'Working on' },
  zh: { first: '名', last: '姓', name: '姓名', email: '工作邮箱', org: '单位', title: '职务', phone: '手机', country: '国家/地区', region: '所在地区', work: '项目' },
};
const b64url = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const unb64url = (s) => {
  const bin = atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4));
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
};
const hmacKey = (secret, usage) => crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [usage]);
const srcHost = (request) => {
  const src = request.headers.get('Origin') || request.headers.get('Referer');
  try { return src ? new URL(src).host : ''; } catch { return ''; }
};

async function signToken(secret, id, exp) {
  const sig = await crypto.subtle.sign('HMAC', await hmacKey(secret, 'sign'), new TextEncoder().encode(`${id}:${exp}`));
  return `${exp}.${b64url(sig)}`;
}
// true only for an unexpired token signed with this secret for this paper. subtle.verify compares in constant time.
async function checkToken(secret, id, token) {
  const m = /^(\d{9,11})\.([A-Za-z0-9_-]{43})$/.exec(token || '');
  if (!m) return false;
  if (Number(m[1]) < Math.floor(Date.now() / 1000)) return false;
  try {
    return await crypto.subtle.verify('HMAC', await hmacKey(secret, 'verify'), unb64url(m[2]), new TextEncoder().encode(`${id}:${m[1]}`));
  } catch { return false; }
}

async function whitepaper(request, env) {
  if (request.method !== 'POST') return json(405, { ok: false, error: 'method' });
  const host = srcHost(request);
  const fromCn = CN_HOSTS.test(host);
  if (!fromCn && !sameOrigin(request)) return json(403, { ok: false, error: 'origin' });
  const len = Number(request.headers.get('Content-Length') || 0);
  if (len > MAX_BODY) return json(413, { ok: false, error: 'too_large' });
  let d;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY) return json(413, { ok: false, error: 'too_large' });
    d = JSON.parse(raw);
  } catch { return json(400, { ok: false, error: 'bad_json' }); }
  if (!d || typeof d !== 'object') return json(400, { ok: false, error: 'bad_json' });

  // Bots: a filled honeypot or an instant submit gets an ok with no link and nothing is sent.
  if (clean(d.website, 200) || !(Number(d.elapsed) >= MIN_FILL_MS)) return json(200, { ok: true });

  // Chinese form: one name field, optional phone, region. English form: first/last, country.
  const cnForm = typeof d.name === 'string' && d.first === undefined;
  const f = {};
  const errors = [];
  if (cnForm) {
    f.name = oneLine(clean(d.name, 120));
    if (!f.name) errors.push('name');
  } else {
    f.first = oneLine(clean(d.first, 80));
    f.last = oneLine(clean(d.last, 80));
    if (!f.first) errors.push('first');
    if (!f.last) errors.push('last');
  }
  f.email = clean(d.email, 200);
  f.org = oneLine(clean(d.org, 160));
  f.title = oneLine(clean(d.title, 120));
  if (!EMAIL_RE.test(f.email)) errors.push('email');
  if (!f.org) errors.push('org');
  if (!f.title) errors.push('title');
  if (cnForm) {
    f.phone = oneLine(clean(d.phone, 40));
    f.region = clean(d.region, 20);
    if (f.phone && !PHONE_RE.test(f.phone)) errors.push('phone');
    if (!REGIONS_CN.has(f.region)) errors.push('region');
  } else {
    f.country = clean(d.country, 40);
    if (!COUNTRIES.has(f.country)) errors.push('country');
  }
  f.work = clean(d.work, 1000);
  const edition = d.edition === undefined || d.edition === '' ? 'en' : clean(d.edition, 4);
  if (!EDITIONS[edition]) errors.push('edition');
  if (d.consent !== true) errors.push('consent');
  if (errors.length) return json(400, { ok: false, error: 'validation', fields: errors });

  // Local testing only: with DEV_SKIP_MAIL=1 in .dev.vars and a localhost URL, no email is sent and the link is still issued.
  const devNoMail = env.DEV_SKIP_MAIL === '1' && /^(localhost|127\.0\.0\.1)$/.test(new URL(request.url).hostname);
  if (!env.DOWNLOAD_SECRET || (!devNoMail && (!env.GMAIL_USER || !env.GMAIL_APP_PASSWORD))) return json(503, { ok: false, error: 'not_configured' });

  const id = EDITIONS[edition];
  const paper = PAPERS[id];
  const now = new Date();
  const exp = Math.floor(now.getTime() / 1000) + LINK_TTL_S;
  const link = `/download/${id}?t=${await signToken(env.DOWNLOAD_SECRET, id, exp)}`;
  // Absolute URLs in emails point at the site the reader used (the Chinese site reaches this Worker through its proxy).
  const base = fromCn ? `https://${host.toLowerCase()}` : new URL(request.url).origin;
  const abs = base + link;
  const pageAbs = base + PAPER_PAGE;
  const until = new Date(exp * 1000).toISOString().slice(0, 10);
  const name = f.name || `${f.first} ${f.last}`;
  const ref = `WP-${now.toISOString().slice(2, 10).replace(/-/g, '')}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  const lang = fromCn ? 'zh' : 'en';
  const L = LABELS[lang];
  const keys = cnForm ? ['name', 'email', 'org', 'title', 'phone', 'region', 'work'] : ['first', 'last', 'email', 'org', 'title', 'country', 'work'];
  const none = fromCn ? '（未填）' : '(not given)';
  const rows = keys.map((k) => `${L[k]}: ${f[k] || none}`).join('\n');
  const leadTo = fromCn ? (env.CONTACT_TO_CN || 'sales@tsingchain.cn') : (env.CONTACT_TO || 'sales@nextgenergy.ai');
  const subject = fromCn
    ? `[白皮书线索] ${paper.titleZh} — ${name}，${f.org} [${ref}]`
    : `[Whitepaper lead] ${paper.title} — ${name}, ${f.org} [${ref}]`;
  const text = fromCn
    ? `白皮书下载申请\n\n白皮书: ${paper.titleZh}\n${rows}\n同意就本白皮书及相关业务联系: 是\n\n—\n编号: ${ref}\n已发下载链接，${until} 前有效\n来源: ${host} ${PAPER_PAGE}（经 nginx 转发到 nextgenergy.ai），${now.toISOString()}\n`
    : `White paper download request\n\nPaper: ${paper.title}\n${rows}\nConsent to email about this paper and related work: yes\n\n—\nReference: ${ref}\nDownload link issued, valid until ${until}\nSent from ${PAPER_PAGE} at nextgenergy.ai on ${now.toISOString()}\n`;
  const confirm = fromCn ? {
    to: f.email,
    replyTo: leadTo,
    subject: `下载链接：《${paper.titleZh.replace(/（.+）$/, '')}》白皮书`,
    text: `${name}，您好：\n\n感谢您关注《${paper.titleZh.replace(/（.+）$/, '')}》白皮书${paper.lang === 'zh' ? '（中文版）' : '（英文版）'}。下载链接 ${until} 前有效：\n\n${abs}\n\n链接过期后，可在 ${pageAbs} 重新获取。对白皮书有任何问题，直接回复本邮件即可。\n\nNextGenergy（北美平台）· 清链科技\n${host.toLowerCase()}\n`,
  } : {
    to: f.email,
    subject: `Your copy: ${paper.title}`,
    text: `Hello ${f.first || name},\n\nThank you for your interest in "${paper.title}". Your download link is valid until ${until}:\n\n${abs}\n\nIf the link has expired, request a new one at ${pageAbs}. Questions about the paper: reply to this email.\n\nNextGenergy\nnextgenergy.ai\n`,
  };
  if (devNoMail) {
    console.log(JSON.stringify({ t: 'whitepaper-dev', ref, until, edition, site: lang, to: leadTo }));
    // Local testing only: echo what would have been sent, so the Chinese branch can be checked without SMTP.
    return json(200, { ok: true, link, until, mailed: false, ref, dev: { to: leadTo, subject, text, confirm } });
  }
  try {
    await sendMail(env, { to: leadTo, replyTo: f.email, subject, text });
  } catch (e) {
    console.log(JSON.stringify({ t: 'whitepaper', ok: false, site: lang, err: String((e && e.message) || e).slice(0, 80) }));
    return json(502, { ok: false, error: 'upstream' });
  }
  // Confirmation to the reader with the same link. Best effort: the page already shows the link.
  let mailed = false;
  try {
    const r = await sendMail(env, confirm);
    mailed = Boolean(r && r.sent);
  } catch (e) {
    console.log(JSON.stringify({ t: 'whitepaper-confirm', ok: false, site: lang, err: String((e && e.message) || e).slice(0, 80) }));
  }
  console.log(JSON.stringify({ t: 'whitepaper', ok: true, edition, site: lang, mailed }));
  return json(200, { ok: true, link, until, mailed, ref });
}

const page = (status, heading, body, lang = 'en') => new Response(
  `<!doctype html><html lang="${lang === 'zh' ? 'zh-CN' : 'en'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${heading} | NextGenergy</title><style>body{font:16px/1.6 system-ui,sans-serif;max-width:36rem;margin:12vh auto;padding:0 16px;color:#1b2430}a{color:#0b5fa5}</style></head><body><h1>${heading}</h1><p>${body}</p></body></html>`,
  { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', 'X-Robots-Tag': 'noindex', 'Referrer-Policy': 'no-referrer', 'Content-Security-Policy': "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'" } },
);

async function download(request, env, id) {
  const paper = PAPERS[id];
  // Pages for the Chinese edition are in Chinese. X-Forwarded-Host is set by the Chinese site's nginx and only picks
  // which mailbox the error page shows; it grants nothing.
  const zh = paper.lang === 'zh';
  const viaCn = CN_HOSTS.test(request.headers.get('X-Forwarded-Host') || '');
  const mbox = viaCn ? 'sales@tsingchain.cn' : 'sales@nextgenergy.ai';
  const mail = `<a href="mailto:${mbox}">${mbox}</a>`;
  if (request.method !== 'GET' && request.method !== 'HEAD') return zh ? page(405, '不支持的请求', '请在浏览器中打开下载链接。', 'zh') : page(405, 'Method not allowed', 'Open the download link in your browser.');
  const back = zh ? `<a href="${PAPER_PAGE}">重新获取链接</a>，或发邮件到 ${mail} 索取。` : `<a href="${PAPER_PAGE}">Request a new link</a> or email ${mail} for a copy.`;
  if (!env.DOWNLOAD_SECRET) return zh ? page(503, '暂时无法下载', `下载暂不可用。请发邮件到 ${mail} 索取。`, 'zh') : page(503, 'Download unavailable', `Downloads are not available right now. Email ${mail} for a copy.`);
  const t = new URL(request.url).searchParams.get('t');
  if (!(await checkToken(env.DOWNLOAD_SECRET, id, t))) return zh ? page(403, '链接已过期或无效', `下载链接 7 天内有效。${back}`, 'zh') : page(403, 'This link has expired or is not valid', `Download links are valid for seven days. ${back}`);
  // Source of the file: the private R2 bucket bound as GATED_FILES when it exists (key = file name under /_gated/),
  // otherwise the static asset. The GitHub repository is public, so the PDF is kept out of git (.gitignore) either way.
  let body = null, size = null;
  const obj = env.GATED_FILES ? await env.GATED_FILES.get(paper.asset.replace('/_gated/', '')) : null;
  if (obj) { body = obj.body; size = obj.size; }
  else {
    const asset = await env.ASSETS.fetch(new Request(new URL(paper.asset, request.url), { method: 'GET' }));
    if (asset.ok && (asset.headers.get('Content-Type') || '').includes('pdf')) { body = asset.body; size = asset.headers.get('Content-Length'); }
  }
  if (!body) return zh ? page(404, '找不到文件', back, 'zh') : page(404, 'File not found', back);
  // ASCII filename for old clients, RFC 5987 UTF-8 filename* for the rest.
  const disp = `attachment; filename="${paper.filename}"${paper.filenameUtf8 ? `; filename*=UTF-8''${encodeURIComponent(paper.filenameUtf8)}` : ''}`;
  return new Response(request.method === 'HEAD' ? null : body, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': disp,
      'Cache-Control': 'private, no-store',
      'X-Content-Type-Options': 'nosniff',
      'X-Robots-Tag': 'noindex, nofollow',
      'Referrer-Policy': 'no-referrer',
      ...(size ? { 'Content-Length': String(size) } : {}),
    },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let path = url.pathname;
    try { path = decodeURIComponent(path); } catch {}
    if (path.toLowerCase().startsWith('/_gated')) {
      const nf = await env.ASSETS.fetch(new Request(new URL('/404', url), { method: 'GET' }));
      return new Response(nf.body, { status: 404, headers: nf.headers });
    }
    if (url.pathname === '/api/contact') return contact(request, env);
    if (url.pathname === '/api/whitepaper') return whitepaper(request, env);
    const dl = /^\/download\/([a-z0-9-]+)$/.exec(url.pathname);
    if (dl && PAPERS[dl[1]]) return download(request, env, dl[1]);
    return env.ASSETS.fetch(request);
  },
};
