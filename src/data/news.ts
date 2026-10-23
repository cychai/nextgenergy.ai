/**
 * Company news. One entry per item, newest first after sorting. Rendered at /company/news (list)
 * and /company/news/<slug> (detail). Body paragraphs are trusted HTML (links only).
 * Rule: state only facts already public on this site or the linked sites. No figures, customers or
 * partnerships that are not published elsewhere first.
 */
/** Body block: string = paragraph (trusted HTML, links only); { h2 } = subheading; { img } = figure (site-absolute path under public/). */
export type NewsImage = { img: string; alt: string; caption?: string; w?: number; h?: number };
export type NewsBlock = string | { h2: string } | NewsImage;
export interface NewsItem {
  slug: string;
  title: string;
  /** ISO date, Toronto local date of publication. */
  date: string;
  summary: string;
  legalAttribution?: string;
  body: NewsBlock[];
  /** Optional cover: list thumbnail and og:image. */
  cover?: NewsImage;
  links?: [string, string][];
}
export const isPara = (b: NewsBlock): b is string => typeof b === 'string';
export const isH2 = (b: NewsBlock): b is { h2: string } => typeof b === 'object' && 'h2' in b;
export const isImg = (b: NewsBlock): b is NewsImage => typeof b === 'object' && 'img' in b;
/** Plain-text body: paragraphs only, tags stripped. */
export const newsPlain = (n: NewsItem) => n.body.filter(isPara).map((p) => p.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&')).join('\n\n');

// Task 04 first production publication date: America/Toronto, 2026-10-07.
// Keep historical entries at their original publication dates.
const items: NewsItem[] = [
{
  slug: 'gdcc-canada-2026-recap',
  title: 'NextGenergy at GDCC 2026',
  date: '2026-10-23',
  summary: "At Booth A20, NextGenergy presented prefabricated liquid cooling and a whole-system view of data centre infrastructure, from core equipment and on-site verification to heat reuse and simulation.",
  cover: { img: '/news/gdcc-2026/booth.jpg', alt: 'Visitors at NextGenergy’s Booth A20, GDCC Canada 2026', w: 1600, h: 720 },
  body: [
    { img: '/news/gdcc-2026/booth.jpg', alt: "Visitors in discussion at NextGenergy’s Booth A20, with the Liquid Cooling Simulator on the screen at left", caption: "Visitors in discussion at NextGenergy’s Booth A20. The screen on the left shows the Liquid Cooling Simulator. Photographed at Booth A20, GDCC Canada 2026. Source: NextGenergy.", w: 1600, h: 720 },
    "Global Data Centre &amp; Cloud Expo Canada (GDCC) took place on 20 and 21 October 2026 at The International Centre in Mississauga, Ontario. Co-located with POWERING AI, the event brought together professionals from the data centre, cloud computing, AI infrastructure and energy sectors to discuss the power, cooling and infrastructure needed to support growing demand for computing capacity.",
    "NextGenergy exhibited at Booth A20, presenting prefabricated liquid cooling infrastructure, core equipment supply, on-site commissioning and acceptance testing, and system simulation. A scale model of the wider infrastructure, a liquid cooling demonstration model and interactive demonstrations connected individual equipment with data centre deployment, operation and heat reuse.",
    "The showcase followed a practical project pathway: how equipment becomes a deployable module, how cooling circuits connect, how readiness is verified after installation, and how design options can be compared before construction. Physical models and simulation provided a shared reference for discussing system boundaries and project requirements.",
    { h2: "Modular integration and equipment delivery" },
    { img: '/news/gdcc-2026/team.jpg', alt: "The NextGenergy team at the scale model, explaining prefabricated liquid cooling to visitors", caption: "The NextGenergy team uses the scale model to explain prefabricated liquid cooling and system integration. Photographed at Booth A20, GDCC Canada 2026. Source: NextGenergy.", w: 1532, h: 1047 },
    "High-density computing infrastructure requires coordinated decisions about rack loads, cooling capacity, piping interfaces and delivery schedules. NextGenergy’s prefabricated liquid-cooled data centre skids bring equipment and interfaces into a coordinated modular configuration, clarifying the connections between engineering, manufacturing, transport and on-site installation.",
    "Depending on the project scope, a prefabricated solution can integrate racks, coolant distribution units (CDUs), pump assemblies, piping, valves and associated controls. Moving more assembly and verification into the factory can help identify interface and layout issues earlier, reduce repeated coordination on site, and establish clear module boundaries for phased deployment, capacity expansion and maintenance.",
    "NextGenergy also presented ORv3 racks, CDUs and supporting cooling equipment available with short lead times. Racks provide the physical platform for integrating computing equipment; CDUs connect facility-side and IT-side cooling circuits; and supporting cooling equipment is selected to suit the heat load, ambient conditions and operating requirements. Together, these elements form a coordinated thermal management system.",
    "Rapid delivery depends on more than equipment availability. Specifications, interfaces and project schedules also need to be defined early. NextGenergy coordinates equipment supply with system configuration to support selection, procurement and deployment. The supply scope, technical specifications, quantities and lead times are confirmed for each project so that deliveries align with site activities.",
    { h2: "Commissioning and documented acceptance" },
    "Once equipment has been delivered and installed, commissioning and acceptance testing are needed to establish the system’s condition and readiness. At GDCC, NextGenergy introduced its Liquid Cooling Commissioning &amp; Site Acceptance Testing services, connecting installation checks, functional verification and handover records within a continuous process.",
    "Depending on the agreed scope, activities can include interface and installation inspections, flushing and cleanliness checks, pressure and leak testing, flow and differential pressure verification, temperature control and load response testing, and checks of alarms, interlocks and control sequences. Test coverage is defined by the project design, equipment requirements and acceptance boundaries, with traceable records supporting handover.",
    "Interfaces between equipment and suppliers are a critical part of site coordination. CDUs, pump assemblies, valves, sensors and control systems need to be verified together under actual operating conditions. Clearly defined procedures, responsibilities and acceptance criteria help project teams identify issues, organise corrective work and determine whether the system meets the agreed conditions for operation.",
    "The service can support equipment supplied by NextGenergy as well as liquid cooling systems supplied by others, subject to the agreed scope. NextGenergy coordinates commissioning, testing and acceptance documentation. Regulated site work is carried out by licensed and insured partner companies. Service boundaries and responsibilities are established before implementation, and site activities follow applicable local requirements.",
    "Complete handover documentation is part of the verification process. Test conditions, instrument details, results, outstanding issues and corrective actions need to be tied to specific equipment and circuits so that owners, engineering teams and operators can retrieve them after handover. Preparing acceptance evidence alongside maintenance information creates a usable baseline for ongoing operation.",
    { h2: "Following power and heat through the infrastructure" },
    { img: '/news/gdcc-2026/sandbox.jpg', alt: "Visitors discussing equipment and applications around the infrastructure scale model", caption: "Visitors discuss equipment and applications around the infrastructure scale model. Photographed at Booth A20, GDCC Canada 2026. Source: NextGenergy.", w: 1532, h: 919 },
    "The scale model was a central element of the exhibition. It brought energy sources, electrical distribution, computing loads, liquid cooling and heat reuse into one physical setting. Equipment models and connecting routes allowed visitors to follow the movement of electricity and heat through the wider infrastructure.",
    "The energy and power section depicted solar photovoltaic, wind, hydroelectric, gas-fired and diesel generation, together with prefabricated power modules, transformers, and high-, medium- and low-voltage electrical distribution systems. These elements illustrated the energy infrastructure surrounding a data centre; they did not represent a claim that NextGenergy supplies or builds every generation and electrical system shown.",
    "The cooling section featured CDUs, prefabricated liquid cooling skids, chillers and dry coolers, showing how heat passes from computing equipment into cooling circuits and then to external heat rejection or heat recovery systems. Placing these stages within the overall architecture provided a basis for discussing equipment configurations, temperature requirements, heat exchange interfaces and operating strategies.",
    "Heat reuse extended the perspective beyond the data centre. The model illustrated potential applications in greenhouses, industrial-scale temperature-controlled aquaculture and building heating. A viable project requires assessment of available heat, supply and return temperatures, distance to heat users, seasonal demand and any required heat pumps, together with coordination of data centre and heat-user operating requirements.",
    "NextGenergy’s related solutions focus on liquid cooling infrastructure, system integration and interfaces with heat recovery. Showing the broader energy landscape helps customers understand where these capabilities fit and establish project-specific supply scopes, partner interfaces and engineering responsibilities.",
    { h2: "Connecting system configurations with operating response" },
    { img: '/news/gdcc-2026/simulator-demo.jpg', alt: "The NextGenergy team demonstrating the Liquid Cooling Simulator to visitors", caption: "The team demonstrates the Liquid Cooling Simulator and discusses configurations and operating conditions. Photographed at Booth A20, GDCC Canada 2026. Source: NextGenergy.", w: 1600, h: 1035 },
    "Simulation added an operational perspective to the physical displays. NextGenergy’s browser-based <a href=\"https://sim.nextgenergy.ai\">Liquid Cooling Simulator</a> supports Chinese and English and helps users compare how configurations and operating conditions affect system behaviour within the stated model assumptions. It takes technical discussions beyond static layouts to dynamic system response.",
    "Users can explore rack platforms, climate conditions and piping layouts while observing modelled changes in chip junction temperature, flow rate, pressure drop and partial power usage effectiveness (pPUE). Scenarios such as step changes in load, pump failure and fouling allow users to compare responses. The demonstration connected circuit layouts, equipment parameters and results to support discussion of selection, operating conditions and design trade-offs.",
    "The simulator is intended for option comparison and preliminary screening. All results are model outputs; they do not replace manufacturer data, project-specific engineering calculations or acceptance testing. Actual projects still require calculations based on equipment information and design conditions, followed by commissioning and site testing. Comparing predictions with measured results can also inform further analysis.",
    "At GDCC, NextGenergy brought prefabricated integration, core equipment supply, on-site verification and system simulation into a common framework, illustrating the connections from early design exploration through delivery and acceptance. The company will continue working with customers and partners on liquid cooling infrastructure and heat reuse projects, with clearly defined technical requirements and delivery boundaries.",
    "The showcase also established a practical basis for follow-up discussions: customers can use the scale model to define system scope, explore configuration choices through simulation, and translate their requirements into equipment, interface and testing specifications. Connecting information across these stages can help reduce misunderstandings as a concept moves into engineering and implementation."
  ],
  links: [
    ['https://sim.nextgenergy.ai', 'Liquid Cooling Simulator'],
    ['/company/news/gdcc-canada-2026-booth-a20', 'Booth A20 announcement, 1 October 2026'],
    ['/services/field', 'Field testing and operations'],
    ['https://gdcc-expo.com', 'GDCC event website'],
  ],
},
{
  "slug": "nvidia-inception-membership",
  "title": "NextGenergy joins NVIDIA Inception",
  "date": "2026-10-07",
  "summary": "NextGenergy joined NVIDIA Inception on 30 September 2026. The Toronto-based company provides prefabricated liquid cooling and field services for AI data centres.",
  "body": [
    "NextGenergy joined NVIDIA Inception on 30 September 2026.",
    "The NVIDIA Inception program is designed to help startups accelerate innovation and growth.",
    "NextGenergy plans and designs liquid-cooled AI data centres and delivers prefabricated skids, coolant distribution units (CDUs), ORv3 racks and cooling equipment. Across North America, it also provides testing, commissioning and maintenance for liquid-cooling loops. Regulated on-site work is carried out by licensed partners.",
    "NextGenergy also operates the Liquid Cooling Academy at <a href=\"https://lca.nextgenergy.ai\">lca.nextgenergy.ai</a> and provides a liquid cooling simulator at <a href=\"https://sim.nextgenergy.ai\">sim.nextgenergy.ai</a>. The Academy’s Level 1 technician course is free. The simulator's results are model values, intended for comparing options and for early screening, not as a substitute for manufacturer data, project design calculations or acceptance testing.",
    "NextGenergy is based in Toronto, Canada."
  ],
  "links": [
    [
      "https://www.nvidia.com/en-us/startups/",
      "NVIDIA Inception"
    ],
    [
      "/platform",
      "Products and systems"
    ],
    [
      "/services/field",
      "Field testing and operations"
    ],
    [
      "https://lca.nextgenergy.ai",
      "Liquid Cooling Academy"
    ],
    [
      "https://sim.nextgenergy.ai",
      "Liquid cooling simulator"
    ]
  ],
  "legalAttribution": "© 2025 NVIDIA, the NVIDIA logo, and NVIDIA Inception are trademarks and/or registered trademarks of NVIDIA Corporation in the U.S. and other countries."
},
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
