/**
 * JSON-LD node builders. Each function returns one node for the `@graph` that Base.astro emits.
 * Pages pass the nodes through the `ld` prop; Base merges them with Organization / WebSite / WebPage.
 */
import { site } from '@/data/site';

export type LdNode = Record<string, unknown>;
export interface FaqItem { q: string; a: string; href?: string; label?: string }
export interface Definition { term: string; alt?: string[]; text: string }

const ORG = { '@id': `${site.url}/#org` };
export const JIM = {
  '@type': 'Person',
  '@id': `${site.url}/company/leadership#jim-li`,
  name: 'Jim (Junming) Li',
  alternateName: ['Jim Li', 'Junming Li', '李俊明'],
  jobTitle: 'Founder & CEO',
  worksFor: ORG,
  sameAs: ['https://www.linkedin.com/in/junming-li-liquid-cooling/', site.substack],
};

const abs = (path: string) => new URL(path, site.url).href;

export function definedTermLd(path: string, d: Definition): LdNode {
  return {
    '@type': 'DefinedTerm',
    '@id': `${abs(path)}#term`,
    name: d.term,
    ...(d.alt?.length ? { alternateName: d.alt } : {}),
    description: d.text,
    url: abs(path),
    inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'NextGenergy liquid-cooling glossary', url: abs('/llms.txt') },
  };
}

export function techArticleLd(path: string, o: { headline: string; description: string; about?: string; published?: string; modified?: string }): LdNode {
  return {
    '@type': 'TechArticle',
    '@id': `${abs(path)}#article`,
    headline: o.headline,
    description: o.description,
    ...(o.about ? { about: { '@id': `${abs(path)}#term` } } : {}),
    author: { '@id': JIM['@id'] },
    publisher: ORG,
    mainEntityOfPage: abs(path),
    inLanguage: 'en',
    datePublished: o.published ?? '2026-09-05',
    dateModified: o.modified ?? o.published ?? '2026-09-08',
  };
}

export function faqLd(path: string, items: FaqItem[]): LdNode {
  return {
    '@type': 'FAQPage',
    '@id': `${abs(path)}#faq`,
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.href ? `${i.a} See ${abs(i.href)}` : i.a },
    })),
  };
}

export function articleLd(path: string, o: { headline: string; description?: string; published: Date; modified?: Date; author?: string; canonical?: string; tags?: string[] }): LdNode {
  return {
    '@type': 'Article',
    '@id': `${abs(path)}#article`,
    headline: o.headline,
    ...(o.description ? { description: o.description } : {}),
    author: { '@id': JIM['@id'] },
    publisher: ORG,
    mainEntityOfPage: o.canonical ?? abs(path),
    url: abs(path),
    inLanguage: 'en',
    datePublished: o.published.toISOString(),
    dateModified: (o.modified ?? o.published).toISOString(),
    ...(o.tags?.length ? { keywords: o.tags.join(', ') } : {}),
    isAccessibleForFree: true,
  };
}

export function softwareLd(path: string, o: { name: string; description: string }): LdNode {
  return {
    '@type': 'SoftwareApplication',
    '@id': `${abs(path)}#app`,
    name: o.name,
    description: o.description,
    url: abs(path),
    applicationCategory: 'EngineeringApplication',
    operatingSystem: 'Any (runs in the browser)',
    browserRequirements: 'Requires JavaScript',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: ORG,
    publisher: ORG,
  };
}

export function personLd(p: { id: string; name: string; alternateName?: string[]; jobTitle: string; description: string; image?: string; sameAs?: string[] }): LdNode {
  return {
    '@type': 'Person',
    '@id': `${abs('/company/leadership')}#${p.id}`,
    name: p.name,
    ...(p.alternateName?.length ? { alternateName: p.alternateName } : {}),
    jobTitle: p.jobTitle,
    description: p.description,
    worksFor: ORG,
    ...(p.image ? { image: abs(p.image) } : {}),
    ...(p.sameAs?.length ? { sameAs: p.sameAs } : {}),
    url: abs('/company/leadership'),
  };
}
