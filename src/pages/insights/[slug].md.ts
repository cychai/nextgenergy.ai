/** Markdown twin of every article: /insights/<slug>.md. Linked from the HTML page via <link rel="alternate" type="text/markdown">. */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '@/data/site';

export async function getStaticPaths() {
  const posts = await getCollection('insights', (p) => !p.data.draft);
  return posts.map((p) => ({ params: { slug: p.id }, props: { p } }));
}

export const articleMarkdown = (p: { id: string; body?: string; data: { title: string; subtitle?: string; date: Date; updated?: Date; canonical?: string; sourceUrl?: string; tags: string[] } }) => {
  const d = (x: Date) => x.toISOString().slice(0, 10);
  const body = (p.body ?? '').replace(/<!--[\s\S]*?-->/g, '').trim();
  const meta = [
    `- Author: Jim (Junming) Li, Founder & CEO, NextGenergy`,
    `- Published: ${d(p.data.date)}` + (p.data.updated ? ` · Updated: ${d(p.data.updated)}` : ''),
    `- Web page: ${site.url}/insights/${p.id}`,
    p.data.canonical && p.data.canonical !== `${site.url}/insights/${p.id}` ? `- First published: ${p.data.canonical}` : '',
    p.data.tags.length ? `- Tags: ${p.data.tags.join(', ')}` : '',
  ].filter(Boolean).join('\n');
  return `# ${p.data.title}\n\n${p.data.subtitle ? `> ${p.data.subtitle}\n\n` : ''}${meta}\n\n---\n\n${body}\n`;
};

export const GET: APIRoute = ({ props }) => new Response(articleMarkdown(props.p), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
