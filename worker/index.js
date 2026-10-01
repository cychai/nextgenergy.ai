// nextgenergy.ai Worker: serves the static site from ./dist and handles one endpoint, POST /api/contact.
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

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/contact') return contact(request, env);
    return env.ASSETS.fetch(request);
  },
};
