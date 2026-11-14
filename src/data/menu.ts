/**
 * Header menu: the second level under each primary nav item (desktop dropdown, phone accordion).
 * Every label here is an existing page title or an existing footer/hub label; nothing is named anew.
 * Kept out of site.ts so `nav` and everything generated from it (llms.txt, JSON-LD) stay unchanged.
 */
import { footerNav } from './site';
import { platform, services, solutions } from './sections';
import { corePages } from './geo';

type Link = [href: string, label: string];
export interface MenuGroup { title?: string; href?: string; links: Link[] }

const foot = (title: string) => (footerNav.find((c) => c.title === title)?.links ?? []) as Link[];
const subs = (base: string, items: { slug: string; title: string }[]): Link[] => items.map((s) => [`${base}/${s.slug}`, s.title]);

export const menu: Record<string, MenuGroup[]> = {
  '/platform': [{ links: subs('/platform', platform) }],
  '/services': [{ links: [foot('What we do')[1], ...subs('/services', services)] }],
  '/solutions': [{ links: subs('/solutions', solutions) }],
  '/resources': [
    { title: 'Approach', href: '/approach', links: corePages[0].pages.map(([h, t]) => [h, t]) },
    { title: 'Evidence', href: '/evidence', links: foot('Evidence') },
    { title: 'Tools', href: '/tools', links: foot('Tools') },
    { title: 'Insights', href: '/insights', links: [] },
  ],
  '/company/about': [{ links: foot('Company').filter(([h]) => h !== '/company/privacy') }],
};
