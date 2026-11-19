// nextgenergy.ai Worker: serves the static site from ./dist and handles POST /api/contact,
// POST /api/whitepaper and GET /download/commissioning-white-paper (gated white paper, see the second half of this file).
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
// Flow: form on /resources/commissioning-white-paper → POST /api/whitepaper → lead email to CONTACT_TO
// (and a short confirmation to the reader) → JSON with a signed link /download/commissioning-white-paper?t=<token>.
// The token is `<expiry unix seconds>.<HMAC-SHA256(DOWNLOAD_SECRET, "<paper id>:<expiry>") base64url>`, valid 7 days.
// The PDF is read from the R2 bucket bound as GATED_FILES if present, else from dist/_gated/; wrangler.jsonc sends
// /_gated/* to this Worker first and it answers 404 there, so the file is reachable only through the download route.
// The PDF is not committed (the GitHub repository is public); see .gitignore. Nothing is stored: the lead exists only as the email.
// Extra secret: DOWNLOAD_SECRET (any long random string). Without it, or without the Gmail secrets,
// POST /api/whitepaper answers 503 not_configured and the page asks the reader to email sales@nextgenergy.ai.

const PAPERS = {
  'commissioning-white-paper': {
    asset: '/_gated/commissioning-white-paper.pdf',
    filename: 'NextGenergy-Liquid-Cooling-Commissioning-White-Paper.pdf',
    title: 'Liquid Cooling Commissioning and Site Acceptance',
    page: '/resources/commissioning-white-paper',
  },
};
const LINK_TTL_S = 7 * 24 * 3600;
const COUNTRIES = new Set(['Canada', 'United States', 'Other']);
const b64url = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const unb64url = (s) => {
  const bin = atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4));
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
};
const hmacKey = (secret, usage) => crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [usage]);

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
  if (!sameOrigin(request)) return json(403, { ok: false, error: 'origin' });
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

  const first = oneLine(clean(d.first, 80));
  const last = oneLine(clean(d.last, 80));
  const email = clean(d.email, 200);
  const org = oneLine(clean(d.org, 160));
  const title = oneLine(clean(d.title, 120));
  const country = clean(d.country, 40);
  const work = clean(d.work, 1000);
  const errors = [];
  if (!first) errors.push('first');
  if (!last) errors.push('last');
  if (!EMAIL_RE.test(email)) errors.push('email');
  if (!org) errors.push('org');
  if (!title) errors.push('title');
  if (!COUNTRIES.has(country)) errors.push('country');
  if (d.consent !== true) errors.push('consent');
  if (errors.length) return json(400, { ok: false, error: 'validation', fields: errors });

  // Local testing only: with DEV_SKIP_MAIL=1 in .dev.vars and a localhost URL, no email is sent and the link is still issued.
  const devNoMail = env.DEV_SKIP_MAIL === '1' && /^(localhost|127\.0\.0\.1)$/.test(new URL(request.url).hostname);
  if (!env.DOWNLOAD_SECRET || (!devNoMail && (!env.GMAIL_USER || !env.GMAIL_APP_PASSWORD))) return json(503, { ok: false, error: 'not_configured' });

  const id = 'commissioning-white-paper';
  const paper = PAPERS[id];
  const now = new Date();
  const exp = Math.floor(now.getTime() / 1000) + LINK_TTL_S;
  const link = `/download/${id}?t=${await signToken(env.DOWNLOAD_SECRET, id, exp)}`;
  const abs = new URL(link, request.url).href;
  const until = new Date(exp * 1000).toISOString().slice(0, 10);
  const name = `${first} ${last}`;
  const ref = `WP-${now.toISOString().slice(2, 10).replace(/-/g, '')}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
  const subject = `[Whitepaper lead] ${paper.title} — ${name}, ${org} [${ref}]`;
  const text = `White paper download request\n\nPaper: ${paper.title}\nFirst name: ${first}\nLast name: ${last}\nWork email: ${email}\nOrganisation: ${org}\nJob title: ${title}\nCountry/region: ${country}\nWorking on: ${work || '(not given)'}\nConsent to email about this paper and related work: yes\n\n—\nReference: ${ref}\nDownload link issued, valid until ${until}\nSent from ${paper.page} at nextgenergy.ai on ${now.toISOString()}\n`;
  if (devNoMail) {
    console.log(JSON.stringify({ t: 'whitepaper-dev', ref, until }));
    return json(200, { ok: true, link, until, mailed: false, ref });
  }
  try {
    await sendMail(env, { to: env.CONTACT_TO || 'sales@nextgenergy.ai', replyTo: email, subject, text });
  } catch (e) {
    console.log(JSON.stringify({ t: 'whitepaper', ok: false, err: String((e && e.message) || e).slice(0, 80) }));
    return json(502, { ok: false, error: 'upstream' });
  }
  // Confirmation to the reader with the same link. Best effort: the page already shows the link.
  let mailed = false;
  try {
    const r = await sendMail(env, {
      to: email,
      subject: `Your copy: ${paper.title}`,
      text: `Hello ${first},\n\nThank you for your interest in "${paper.title}". Your download link is valid until ${until}:\n\n${abs}\n\nIf the link has expired, request a new one at ${new URL(paper.page, request.url).href}. Questions about the paper: reply to this email.\n\nNextGenergy\nnextgenergy.ai\n`,
    });
    mailed = Boolean(r && r.sent);
  } catch (e) {
    console.log(JSON.stringify({ t: 'whitepaper-confirm', ok: false, err: String((e && e.message) || e).slice(0, 80) }));
  }
  console.log(JSON.stringify({ t: 'whitepaper', ok: true, country, mailed }));
  return json(200, { ok: true, link, until, mailed, ref });
}

const page = (status, heading, body) => new Response(
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${heading} | NextGenergy</title><style>body{font:16px/1.6 system-ui,sans-serif;max-width:36rem;margin:12vh auto;padding:0 16px;color:#1b2430}a{color:#0b5fa5}</style></head><body><h1>${heading}</h1><p>${body}</p></body></html>`,
  { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', 'X-Robots-Tag': 'noindex', 'Referrer-Policy': 'no-referrer', 'Content-Security-Policy': "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'" } },
);

async function download(request, env, id) {
  if (request.method !== 'GET' && request.method !== 'HEAD') return page(405, 'Method not allowed', 'Open the download link in your browser.');
  const paper = PAPERS[id];
  const back = `<a href="${paper.page}">Request a new link</a> or email <a href="mailto:sales@nextgenergy.ai">sales@nextgenergy.ai</a> for a copy.`;
  if (!env.DOWNLOAD_SECRET) return page(503, 'Download unavailable', `Downloads are not available right now. Email <a href="mailto:sales@nextgenergy.ai">sales@nextgenergy.ai</a> for a copy.`);
  const t = new URL(request.url).searchParams.get('t');
  if (!(await checkToken(env.DOWNLOAD_SECRET, id, t))) return page(403, 'This link has expired or is not valid', `Download links are valid for seven days. ${back}`);
  // Source of the file: the private R2 bucket bound as GATED_FILES when it exists (key = file name under /_gated/),
  // otherwise the static asset. The GitHub repository is public, so the PDF is kept out of git (.gitignore) either way.
  let body = null, size = null;
  const obj = env.GATED_FILES ? await env.GATED_FILES.get(paper.asset.replace('/_gated/', '')) : null;
  if (obj) { body = obj.body; size = obj.size; }
  else {
    const asset = await env.ASSETS.fetch(new Request(new URL(paper.asset, request.url), { method: 'GET' }));
    if (asset.ok && (asset.headers.get('Content-Type') || '').includes('pdf')) { body = asset.body; size = asset.headers.get('Content-Length'); }
  }
  if (!body) return page(404, 'File not found', back);
  return new Response(request.method === 'HEAD' ? null : body, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${paper.filename}"`,
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
