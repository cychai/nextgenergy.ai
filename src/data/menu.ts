/**
 * Header menu: the second level under each primary nav item (desktop dropdown, phone accordion).
 * Every label here is an existing page title or an existing footer/hub label; nothing is named anew.
 * Kept out of site.ts so `nav` and everything generated from it (llms.txt, JSON-LD) stay unchanged.
 * The one-line `lede` under each Resources group is the sentence already printed for that group on /resources
 * (src/pages/resources.astro); keep the two in step.
 */
import { footerNav } from './site';
import { platform, services, solutions } from './sections';
import { corePages } from './geo';

type Link = [href: string, label: string];
export interface MenuGroup { title?: string; href?: string; lede?: string; links: Link[] }

const foot = (title: string) => (footerNav.find((c) => c.title === title)?.links ?? []) as Link[];
const subs = (base: string, items: { slug: string; title: string }[]): Link[] => items.map((s) => [`${base}/${s.slug}`, s.title]);

export const menu: Record<string, MenuGroup[]> = {
  '/platform': [{ links: subs('/platform', platform) }],
  '/services': [{ links: [foot('What we do')[1], ...subs('/services', services)] }],
  '/solutions': [{ links: subs('/solutions', solutions) }],
  '/resources': [
    { title: 'Approach', href: '/approach', lede: 'How we decide what to build, what to test and what to write down.', links: corePages[0].pages.map(([h, t]) => [h, t]) },
    { title: 'Evidence', href: '/evidence', lede: 'What we hand over, and the criteria it is tested against.', links: foot('Evidence') },
    { title: 'Tools', href: '/tools', lede: 'Check your own numbers before you bring them to us or anyone else.', links: foot('Tools') },
    { title: 'Insights', href: '/insights', lede: 'Every Watt Counts: long-form writing on power, liquid cooling and heat reuse.', links: [] },
  ],
  '/company/about': [{ links: foot('Company').filter(([h]) => h !== '/company/privacy') }],
};
