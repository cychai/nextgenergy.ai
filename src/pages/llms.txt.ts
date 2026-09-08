/** /llms.txt — a short, link-first map of the site for answer engines (llmstxt.org convention). Kept under 50 lines. */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '@/data/site';
import { corePages } from '@/data/geo';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('insights', (p) => !p.data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const lines: string[] = [
    `# ${site.name}`,
    '',
    `> ${site.headline}. ${site.description}`,
    '',
    `${site.name} (${site.legalName}) is based in ${site.location}, founded ${site.foundingDate} by Jim (Junming) Li. It does not manufacture components; it designs, integrates and commissions liquid cooling across the whole thermal path and hands over a turnover package with a test, an acceptance criterion and a record for each of ten leak points. Chinese sister site: 清链科技 (Tsingchain Global), https://tsingchain.ai. Contact: ${site.email}.`,
    '',
    `Terms used consistently on this site: the whole thermal path; return-water grade; the three clocks (manufacturing / commissioning / service life); the ten leak points; the turnover package; numbers with boundaries.`,
    '',
  ];
  for (const g of corePages) {
    lines.push(`## ${g.section}`);
    for (const [path, title, summary] of g.pages) lines.push(`- [${title}](${site.url}${path}): ${summary}`);
    lines.push('');
  }
  lines.push('## Insights (latest)');
  for (const p of posts.slice(0, 8)) lines.push(`- [${p.data.title}](${site.url}/insights/${p.id}.md): ${p.data.date.toISOString().slice(0, 10)}${p.data.subtitle ? ` — ${p.data.subtitle}` : ''}`);
  lines.push('');
  lines.push('## Optional');
  lines.push(`- [Full text of the core pages and all articles](${site.url}/llms-full.txt)`);
  lines.push(`- [RSS](${site.url}/insights/rss.xml)`);
  lines.push(`- [Sitemap](${site.url}/sitemap-index.xml)`);
  lines.push(`- Every article has a Markdown twin at /insights/<slug>.md`);
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
