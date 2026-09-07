import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '@/data/site';

export async function GET(context: APIContext) {
  const posts = (await getCollection('insights', (p) => !p.data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: `${site.name} Insights · Every Watt Counts`,
    description: 'Power, liquid cooling and heat reuse for AI infrastructure.',
    site: context.site!,
    items: posts.map((p) => ({ title: p.data.title, description: p.data.subtitle, pubDate: p.data.date, link: `/insights/${p.id}`, categories: p.data.tags })),
  });
}
