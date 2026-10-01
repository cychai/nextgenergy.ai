/**
 * Company news. One entry per item, newest first after sorting. Rendered at /company/news (list)
 * and /company/news/<slug> (detail). Body paragraphs are trusted HTML (links only).
 * Rule: state only facts already public on this site or the linked sites. No figures, customers or
 * partnerships that are not published elsewhere first.
 */
export interface NewsItem {
  slug: string;
  title: string;
  /** ISO date, Toronto local date of publication. */
  date: string;
  summary: string;
  body: string[];
  links?: [string, string][];
}

const items: NewsItem[] = [
  {
    slug: 'gdcc-canada-2026-booth-a20',
    title: 'NextGenergy at GDCC Canada 2026, Booth A20',
    date: '2026-10-01',
    summary: 'NextGenergy will exhibit at Global Data Centre & Cloud Expo Canada 2026 on 20–21 October at the International Centre in Mississauga, booth A20.',
    body: [
      'Toronto, 1 October 2026. NextGenergy will exhibit at Global Data Centre &amp; Cloud Expo Canada 2026 (GDCC Canada), held on 20 and 21 October at the International Centre in Mississauga, Ontario. The company will be at booth A20.',
      'The booth covers two subjects. The first is operations for liquid-cooling infrastructure: commissioning, inspection, fluid sampling and records for the liquid loop, delivered across equipment brands, on systems NextGenergy supplied and on systems it did not. The second is prefabricated liquid cooling: skids, coolant distribution units (CDUs) and ORv3 racks, specified and integrated as one package, with interfaces and acceptance criteria agreed before manufacture.',
      'NextGenergy writes the specification and the acceptance criteria and holds the records. Regulated site work on its projects is carried out by licensed and insured partner companies.',
      'Visitors can book a time at the booth in advance through the <a href="/company/contact?topic=gdcc#form">contact page</a>, stating which day suits them and what they would like to discuss. A system diagram, an equipment list or an existing turnover package is a useful starting point for the conversation.',
    ],
    links: [
      ['/company/contact?topic=gdcc#form', 'Book a time at booth A20'],
      ['/services/field', 'Field testing and operations'],
      ['/platform', 'Prefabricated liquid cooling products'],
    ],
  },
  {
    slug: 'liquid-cooling-academy-registration',
    title: 'Liquid Cooling Academy opens registration',
    date: '2026-10-01',
    summary: 'The Liquid Cooling Academy at lca.nextgenergy.ai is open for registration. The Level 1 technician course is free and offered in English and Chinese.',
    body: [
      'Toronto, 1 October 2026. NextGenergy has opened registration for the Liquid Cooling Academy (LCA) at <a href="https://lca.nextgenergy.ai">lca.nextgenergy.ai</a>, an online training programme for people who work, or want to work, on liquid-cooled data centre systems. The first course, Level 1 (L1) for technicians, is free and is offered in English and Chinese.',
      'Participants study online and complete an assessment at the end of the course. Those who pass join NextGenergy\'s talent pool and are recommended first when NextGenergy and its partner companies look for people for liquid-cooling field work.',
      'Any certificate issued by the Academy records the completion of a NextGenergy course. It is not a licence or a trade certification, and it does not on its own qualify anyone to carry out site work. Regulated work on site still requires the licences that apply in the jurisdiction concerned, held by the person or company doing the work.',
      'Visitors to NextGenergy\'s booth A20 at GDCC Canada 2026, on 20–21 October at the International Centre in Mississauga, can register by scanning the QR code at the booth.',
    ],
    links: [
      ['https://lca.nextgenergy.ai', 'Liquid Cooling Academy (lca.nextgenergy.ai)'],
      ['/company/news/gdcc-canada-2026-booth-a20', 'NextGenergy at GDCC Canada 2026'],
    ],
  },
  {
    slug: 'liquid-cooling-simulator-online',
    title: 'Free liquid cooling simulator now online',
    date: '2026-09-14',
    summary: 'NextGenergy has published a free, browser-based liquid cooling simulator at sim.nextgenergy.ai, in English and Chinese.',
    body: [
      'Toronto, 14 September 2026. NextGenergy has published a free liquid cooling simulator at <a href="https://sim.nextgenergy.ai">sim.nextgenergy.ai</a>. It runs in the browser and is available in English and Chinese.',
      'The simulator models the liquid loop from the chip to heat rejection with a four-node transient thermal model. Users choose a rack platform, a climate and a pipework layout, then watch junction temperature, flow, pressure drop and pPUE settle, and can stress the design with load steps, pump loss or fouling.',
      'Since going online the simulator has added equipment selection, a 3D view, an annual weather profile for the chosen location, N-1 failure scenarios and a total cost of ownership (TCO) comparison.',
      'All figures are model values. They are intended for comparing options and for early screening, not as a substitute for manufacturer data, project design calculations or acceptance testing.',
      'Feedback is welcome, including cases where the model gives a result you believe is wrong. Write to <a href="mailto:sales@nextgenergy.ai">sales@nextgenergy.ai</a> or use the <a href="/company/contact">contact page</a>.',
    ],
    links: [
      ['https://sim.nextgenergy.ai', 'Open the simulator'],
      ['/tools', 'All engineering tools'],
    ],
  },
  {
    slug: 'canada-data-centre-principles-measurement',
    title: "What Canada's data centre principles ask to be measured, and who measures it",
    date: '2026-09-12',
    summary: "NextGenergy has published a page and a guide for municipal staff on the power, water and heat figures that Canada's Responsible Data Centre Development Principles ask for.",
    body: [
      'Toronto, 12 September 2026. On 3 September 2026 the Government of Canada and the Federation of Canadian Municipalities published five principles for responsible data centre development, and 23 companies signed. The principles are voluntary and are addressed to developers and operators.',
      'Two of the five ask for measurement. Principle 3 asks that water consumption and environmental impacts be measured and transparently reported using recognised standards. Principle 4 asks for independently verifiable information on local impacts, including power and water use. Neither says who produces the figures or what the record should contain.',
      'NextGenergy has published a page setting out what it measures as a supplier on every project it delivers in Canada, where, and who signs: electricity at the point of connection, with the metering boundary drawn on a single-line diagram; water withdrawn and consumed; heat available and delivered at the site boundary; and the method, including the ISO/IEC 30134 metrics and the commissioning agent\'s sign-off.',
      'A four-page guide for municipal staff, <a href="/downloads/reading-data-centre-numbers.pdf">Reading a Data Centre\'s Power, Water and Heat Numbers</a>, ends in a fourteen-line evidence schedule that can be attached to a development agreement. It is free to copy and adapt.',
    ],
    links: [
      ['/evidence/canada-principles', "The numbers Canada's principles ask for"],
      ['/downloads/reading-data-centre-numbers.pdf', 'Guide for municipal staff (PDF)'],
    ],
  },
];

export const news: NewsItem[] = [...items].sort((a, b) => b.date.localeCompare(a.date));
export const newsDate = (iso: string) => new Date(`${iso}T12:00:00-04:00`);
export const fmtNewsDate = (iso: string) => newsDate(iso).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Toronto' });
