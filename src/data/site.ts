export const site = {
  name: 'NextGenergy',
  url: 'https://nextgenergy.ai',
  tagline: 'Prefabricated liquid cooling and field services for AI data centres',
  headline: 'Prefabricated Liquid Cooling and Field Services for AI Data Centres',
  legalName: 'NextGenergy Technology Inc.',
  foundingDate: '2025',
  description:
    'NextGenergy plans and designs liquid-cooled AI data centres and delivers them as prefabricated skids, CDUs, ORv3 racks and cooling plant. Across North America it also provides field testing, commissioning and operations for the liquid cooling loop, with the evidence for every boundary.',
  email: 'sales@nextgenergy.ai',
  linkedin: 'https://www.linkedin.com/company/nextgenergyai',
  substack: 'https://everywattcounts.substack.com',
  location: 'Toronto, Canada',
};

export const nav: { href: string; label: string; match?: string[] }[] = [
  { href: '/platform', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/resources', label: 'Resources', match: ['/resources', '/approach', '/evidence', '/tools', '/insights'] },
  { href: '/company/about', label: 'Company', match: ['/company'] },
];

export const footerNav = [
  {
    title: 'What we do',
    links: [
      ['/platform', 'Products: skids, racks, CDUs, cooling plant'],
      ['/services/field', 'Field testing and operations'],
      ['/solutions', 'Solutions by project type'],
      ['/resources', 'Resources: approach, evidence, tools, insights'],
    ],
  },
  {
    title: 'Evidence',
    links: [
      ['/evidence/commissioning', 'Commissioning criteria'],
      ['/evidence/turnover', 'The turnover package'],
      ['/evidence/samples', 'Sample records'],
      ['/evidence/leak-points', 'Ten leak points'],
      ['/evidence/standards', 'Standards work'],
      ['/evidence/canada-principles', "Canada's principles"],
    ],
  },
  {
    title: 'Tools',
    links: [
      ['https://sim.nextgenergy.ai', 'Liquid cooling simulator'],
      ['/tools/return-water', 'Return-water → heat buyers'],
      ['/tools/approach-temp', 'CDU approach & free cooling'],
      ['/tools/leak-checklist', 'Turnover self-check'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['/company/about', 'About'],
      ['/company/leadership', 'Leadership'],
      ['/company/track-record', 'Track record'],
      ['/company/partners', 'Partners'],
      ['/company/contact', 'Contact'],
      ['/company/privacy', 'Privacy'],
    ],
  },
];
