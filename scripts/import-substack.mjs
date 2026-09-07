#!/usr/bin/env node
/**
 * Import Every Watt Counts (Substack) posts into src/content/insights as Markdown.
 * Usage: node scripts/import-substack.mjs [--feed URL] [--force]
 * Existing files are skipped unless --force. Front-matter `tags`/`related` edits survive re-import
 * because we only rewrite the body below the "<!-- substack-body -->" marker.
 */
import { writeFile, readFile, mkdir, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import TurndownService from 'turndown';

const args = process.argv.slice(2);
const feedUrl = args.includes('--feed') ? args[args.indexOf('--feed') + 1] : 'https://everywattcounts.substack.com/feed';
const force = args.includes('--force');
const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'content', 'insights');
await mkdir(outDir, { recursive: true });

const res = await fetch(feedUrl, { headers: { 'user-agent': 'Mozilla/5.0 (NextGenergy site importer)' } });
if (!res.ok) throw new Error(`Feed fetch failed: ${res.status}`);
const xml = await res.text();

const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
td.remove(['script', 'style']);
// Substack wraps images in <div class="captioned-image-container"><figure>...; keep figure + caption.
td.addRule('figure', {
  filter: (n) => n.nodeName === 'FIGURE',
  replacement: (_c, node) => {
    const img = node.querySelector('img');
    const cap = node.querySelector('figcaption');
    if (!img) return '';
    const src = img.getAttribute('src') || '';
    const alt = (img.getAttribute('alt') || cap?.textContent || '').replace(/"/g, "'").trim();
    return `\n\n![${alt}](${src})${cap ? `\n*${cap.textContent.trim()}*` : ''}\n\n`;
  },
});
// Drop Substack subscribe / share widgets
td.addRule('widgets', {
  filter: (n) => n.nodeName === 'P' && /subscription-widget|button-wrapper|share/i.test(n.getAttribute('class') || ''),
  replacement: () => '',
});
td.addRule('subscribeDivs', {
  filter: (n) => n.nodeName === 'DIV' && /subscription-widget|button-wrapper|subscribe/i.test(n.getAttribute('class') || ''),
  replacement: () => '',
});

const named = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: '\u00a0', mdash: '\u2014', ndash: '\u2013', hellip: '\u2026', ldquo: '\u201c', rdquo: '\u201d', lsquo: '\u2018', rsquo: '\u2019' };
const decodeEntities = (s) => s.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16))).replace(/&([a-z]+);/gi, (m, n) => named[n] ?? m);
const unescape = (s) => decodeEntities(s.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, ''));
const pick = (block, tag) => { const m = block.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`)); return m ? unescape(m[1].trim()) : ''; };
const yaml = (s) => JSON.stringify(s);

const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
let written = 0, skipped = 0;
for (const it of items) {
  const title = pick(it, 'title');
  const subtitle = pick(it, 'description');
  const link = pick(it, 'link').split('?')[0];
  const date = new Date(pick(it, 'pubDate'));
  const html = (it.match(/<content:encoded>([\s\S]*?)<\/content:encoded>/)?.[1] || '').replace(/^\s*<!\[CDATA\[/, '').replace(/\]\]>\s*$/, '');
  const slug = link.split('/p/')[1]?.replace(/\/$/, '') || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const file = join(outDir, `${slug}.md`);
  const body = td.turndown(html)
    .replace(/\n{3,}/g, '\n\n')
    .replace(/\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)/g, '') // linked image thumbnails (share cards)
    .replace(/^# /gm, '## ') // Substack section headings arrive as h1; the page title is the only h1
    .replace(/<(?!\/?(sub|sup|br)\b)[^>]*>/gi, '') // strip any raw HTML except sub/sup/br: no scripts, iframes, handlers
    .replace(/\]\((?!https?:\/\/|\/|#|mailto:)[^)]*\)/g, '](#)') // neutralise javascript:/data: link targets
    .trim();

  let front = null;
  try { await access(file); const cur = await readFile(file, 'utf8'); front = cur.split('<!-- substack-body -->')[0]; } catch {}
  if (front && !force) { skipped++; continue; } // with --force the body is rewritten but the front matter (tags, related) is kept
  const fm = front ?? `---
title: ${yaml(title)}
subtitle: ${yaml(subtitle)}
date: ${date.toISOString().slice(0, 10)}
source: substack
sourceUrl: ${yaml(link)}
canonical: ${yaml(link)}
tags: []
related: []
---

`;
  await writeFile(file, `${fm}<!-- substack-body -->\n${body}\n`);
  written++;
}
console.log(`Substack import: ${written} written, ${skipped} skipped (already present). Use --force to overwrite bodies.`);
