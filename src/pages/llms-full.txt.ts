/** /llms-full.txt — the core pages (definitions, FAQ, leak points, published claims, team) and every article, as one Markdown document. Generated at build time so it cannot drift from the HTML. */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '@/data/site';
import { corePages, definitions, faqs } from '@/data/geo';
import { leakPoints } from '@/data/leakPoints';
import { claims } from '@/data/claims';
import { people } from '@/data/team';
import { articleMarkdown } from './insights/[slug].md';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('insights', (p) => !p.data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const out: string[] = [];
  out.push(`# ${site.name} — full text for language models`, '', `> ${site.headline}. ${site.description}`, '', `Source: ${site.url} · Generated at build time · Short index: ${site.url}/llms.txt`, '');

  out.push('## Glossary (definitions used on this site)', '');
  for (const [path, d] of Object.entries(definitions)) out.push(`### ${d.term}`, '', d.text, '', `Page: ${site.url}${path}`, '');

  out.push('## Core pages', '');
  for (const g of corePages) {
    for (const [path, title, summary] of g.pages) {
      const qa = faqs[path];
      out.push(`### ${title}`, '', `${summary} (${site.url}${path})`, '');
      if (path === '/evidence/leak-points') {
        for (const l of leakPoints) out.push(`${l.n}. **${l.t}** (${l.group}). ${l.p}${l.r ? ` Record: ${l.r}` : ''}`);
        out.push('');
      }
      if (qa) { for (const i of qa) out.push(`**Q: ${i.q}**`, '', `A: ${i.a}${i.href ? ` (${site.url}${i.href})` : ''}`, ''); }
    }
  }

  out.push('## Numbers with their boundaries', '', 'Every performance number on the site is published with its condition and source. Items marked conditional appear on the site only together with their condition.', '');
  for (const c of Object.values(claims)) {
    if (c.status === 'retired') continue;
    out.push(`- **${c.value}** — ${c.statement} Condition: ${c.condition} Source: ${c.source}${c.status === 'under-review' ? ' Status: under review; not used as a headline.' : ''}`);
  }
  out.push('');

  out.push('## Leadership', '');
  for (const p of people) out.push(`- **${p.name}**, ${p.role}. ${p.bio}${p.linkedin ? ` LinkedIn: ${p.linkedin}` : ''}`);
  out.push('');

  out.push('## Articles', '');
  for (const p of posts) out.push(articleMarkdown(p), '', '---', '');
  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
