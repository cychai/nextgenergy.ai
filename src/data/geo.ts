/**
 * GEO content: definition blocks and FAQ items, keyed by page path.
 * Rules (from the GEO framework, section 1): a definition starts with the term itself, contains one number or
 * range, avoids "we", and means the same thing as its Chinese twin on tsingchain.ai. An answer gives the
 * conclusion in 2–3 sentences; every number carries its condition.
 */
import type { Definition, FaqItem } from '@/lib/ld';

export const definitions: Record<string, Definition> = {
  '/approach/thermal-path': {
    term: 'The whole thermal path',
    alt: ['thermal path', '整条热通路'],
    text: 'The whole thermal path is the route heat takes in a liquid-cooled data centre, from the chip to the point where it leaves the site, drawn as six boundaries: facility water interface, heat rejection and reuse, CDU and secondary loop, rack manifold and quick disconnects, hoses and fittings, cold plate and chip. Each boundary has a maker, a test, an acceptance criterion and a record owner.',
  },
  '/approach/return-water': {
    term: 'Return-water grade',
    alt: ['回水品位'],
    text: 'Return-water grade is the temperature at which a liquid-cooling loop hands its heat over at the data-centre boundary. Before load profile, distance or price, it decides which off-takers can use the heat without a heat pump: greenhouses and low-temperature district heating typically need 45 °C or more; pools and heat-pump sources can take less.',
  },
  '/approach/three-clocks': {
    term: 'The three clocks',
    alt: ['three clocks of liquid-cooling leaks', '三个时钟'],
    text: 'The three clocks are the three timelines on which a liquid-cooling leak is created: manufacturing (a defect that leaves the factory), commissioning (a joint disturbed or left untested during installation) and service life (hoses, elastomers and fluid chemistry that age out). Each clock has a different owner and leaves different evidence, so a leak sensor reports where liquid arrived, not who created the risk.',
  },
  '/evidence/leak-points': {
    term: 'The ten leak points',
    alt: ['ten leak points', '十大漏点'],
    text: 'The ten leak points are the ten places a liquid-cooling loop can leak, listed in the order the coolant travels from chip to facility: cold-plate joints, quick disconnects, hose crimps, manifold branches, elastomeric seals, threaded and compression fittings, CDU internal boundaries, field welds, balancing and isolation valves, and fill, drain, vent and sample ports. For each, a turnover package should say whether it was tested, against which criterion, and where the record is.',
  },
  '/evidence/turnover': {
    term: 'The turnover package',
    alt: ['turnover package', '交付资料包'],
    text: 'The turnover package is the set of records handed over with a liquid-cooling system at commissioning. In its minimum form it answers three questions for each of the ten leak points, thirty answers in all: was the boundary tested, against what acceptance criterion, and where is the record. It also carries the metering boundary drawing, fluid chemistry at fill, flow balance per branch and the CDU approach at a stated load.',
  },
  '/evidence/commissioning': {
    term: 'Commissioning and acceptance criteria',
    alt: ['liquid-cooling commissioning', '调试与验收准则'],
    text: 'Commissioning and acceptance criteria are the tests and pass/fail thresholds agreed in writing before a liquid-cooling system is built, then checked at four gates: factory release, before the loop is filled, before compute is energised, and before handover. A criterion agreed after the test only describes what happened; one agreed before the work is a specification.',
  },
};

export const faqs: Record<string, FaqItem[]> = {
  '/approach/return-water': [
    { q: 'Who can buy data-centre waste heat, and what temperature do they need?', a: 'Buyers are sorted by the supply temperature they need, not by how much heat you have. Greenhouses and fourth-generation district heating typically need 45 °C or more (4GDH is defined around 50–60 °C supply, up to 70 °C in winter); swimming pools, aquaculture and heat-pump sources can take less. A cold-plate loop returning around 55 °C at rated IT load can serve the first group directly; a 30 °C loop needs a heat pump for almost all of them.', href: '/tools/return-water', label: 'Check your own return temperature' },
    { q: 'Why can heat recovery make PUE worse?', a: 'PUE counts the export pump and heat exchanger as facility energy but gives no credit for the heat delivered, so a site that starts selling heat can see its PUE rise while its total energy system improves. Report the Energy Reuse Factor (ERF, ISO/IEC 30134-6) next to PUE and state the metering boundary for both.', href: '/evidence/standards', label: 'Which metrics and standards apply' },
    { q: 'What does a 45 °C inlet liquid-cooled data centre mean?', a: 'It means the coolant entering the servers may be as warm as 45 °C, so the facility can reject heat with dry coolers in most climates for most of the year and the loop returns water warm enough to sell. The figure is the OEM\'s stated inlet limit at rated load; the return temperature is higher by the loop\'s temperature rise across the servers, which the OEM states for its rated flow.', href: '/insights/45c-inlet-water-another-milestone', label: 'Read the 45 °C article' },
  ],
  '/approach/thermal-path': [
    { q: 'How do you choose between cold-plate and immersion liquid cooling?', a: 'Start from the chip\'s stated inlet limit and the return-water grade you want to sell, then from the serviceability the operator can live with. Cold plates keep servers air-serviceable and return roughly 45–60 °C under OEM inlet limits; single-phase immersion removes the fan and hose-crimp leak points but changes every service procedure; two-phase can return above 60 °C but ties the site to the fluid\'s saturation temperature. The choice is a system decision across all six boundaries, not a rack-level one.', href: '/solutions', label: 'Solutions by deployment type' },
    { q: 'Where is reused heat measured?', a: 'At the data-centre boundary where the heat is handed off for use outside, not at the chip and not from the IT load. Commission Delegated Regulation (EU) 2024/1364 requires this for EU data centres with at least 500 kW installed IT demand; outside the EU it is still the only boundary a heat buyer will pay against.', href: '/approach/return-water', label: 'Return-water grade' },
    { q: 'Who is responsible for each boundary of a liquid-cooling system?', a: 'Each of the six boundaries is usually made by a different party: the facility mechanical contractor, the heat-rejection or heat-buyer side, the CDU maker, the rack integrator and quick-disconnect supplier, the hose assembler, and the cold-plate maker or server OEM. Responsibility stops at each vendor\'s flange unless the contract names one party for the whole path and one turnover package for all ten leak points.', href: '/evidence/turnover', label: 'The turnover package' },
  ],
  '/approach/three-clocks': [
    { q: 'How is liquid-cooling leak risk classified, and who is responsible?', a: 'By the clock on which the risk was created. Manufacturing leaks (a void in a braze, a crimp out of tolerance) belong to the factory and its acceptance-test records; commissioning leaks (a quick disconnect disturbed during install, a weld never passivated) belong to the integrator and commissioning agent; service-life leaks (aged hoses, hardened elastomers, depleted inhibitor) belong to the operator and its trend data.', href: '/evidence/leak-points', label: 'Ten leak points' },
    { q: 'What does a leak sensor actually tell you?', a: 'That liquid has arrived at the sensor. It cannot tell you which of the three clocks created the risk, so the evidence for that has to exist before the leak: factory test records traceable to serial numbers, a connection log for every joint disturbed on site, and fluid-quality trends in service.', href: '/evidence/commissioning', label: 'Commissioning and acceptance criteria' },
    { q: 'What evidence should exist for each clock?', a: 'Clock one: factory leak-test records per serial, crimp process parameters and material certificates. Clock two: a connection log for every joint made or disturbed, flush and passivation records, and a pressure test of the assembled loop. Clock three: fluid-chemistry trends, performance trends against commissioning baselines, and a service log per boundary.', href: '/evidence/turnover', label: 'What the turnover package contains' },
  ],
  '/evidence/leak-points': [
    { q: 'What records should a liquid-cooled room hand over at turnover?', a: 'At minimum, an answer to three questions for each of the ten leak points: was it tested, against what acceptance criterion, and where is the record. Add IT and facility sub-metering, supply and return temperature and flow per loop, the CDU approach at a stated load, and the isolation-procedure test record.', href: '/evidence/turnover', label: 'The turnover package' },
    { q: 'Are the ten leak points a ranking?', a: 'No. They are listed in the order the coolant travels from chip to facility, so a commissioning team can walk the path and score each one. Which point matters most on a given site depends on how often it is disturbed: quick disconnects and manifold branches are touched at every server swap, field welds usually only once.', href: '/tools/leak-checklist', label: 'Score your last project' },
    { q: 'Which leak point is disturbed most often?', a: 'Quick disconnects, because they are the highest-count removable joint in the rack and are separated every time a server is replaced. A disconnected quick disconnect is not automatically a sealed one, so each mate and de-mate after fill belongs in the connection log.', href: '/approach/three-clocks', label: 'Why commissioning is its own clock' },
  ],
  '/evidence/turnover': [
    { q: 'What should a liquid-cooling turnover package contain?', a: 'For each of the ten leak points: the test that was done, the acceptance criterion it was judged against, and where the record lives. Plus the single-line diagram with the metering boundary signed, fluid chemistry at fill, flow balance per branch, the CDU approach at a stated load, and the connection log closed out for every disturbance since fill.', href: '/tools/leak-checklist', label: 'Self-check your package' },
    { q: 'How is a turnover package scored?', a: 'Three questions for each of ten boundaries gives a maximum of 30 points. Count only what could be handed to an auditor today, not what is believed to have been done. A boundary that was tested but has no retrievable record scores one, not three.', href: '/tools/leak-checklist', label: 'Turnover self-check tool' },
    { q: 'What if a boundary was tested but the record is missing?', a: 'Treat it as untested for acceptance purposes and re-test before handover if the boundary can still be isolated; if it cannot, record the gap explicitly in the package so the operator\'s service-life clock starts from a known state rather than an assumed one.', href: '/evidence/commissioning', label: 'How the acceptance criteria are written' },
  ],
  '/evidence/commissioning': [
    { q: 'When is a liquid-cooled hall ready to carry an AI training run?', a: 'When the acceptance criteria agreed before the work have been tested and recorded at all four gates: factory release, before fill, before compute is energised, and before handover. Powered-on and walked-through is not the same as AI-ready; the difference is a set of numbers in the contract and the records that show they were met.', href: '/services/commissioning', label: 'Commissioning as a service' },
    { q: 'What are the four commissioning gates for liquid cooling?', a: 'Gate 1, before release from the factory: pressure and leak tests per skid and CDU, cleanliness class verified by sample, material certificates against the named fluid. Gate 2, before fill: weld map complete, flush and passivation confirmed separately, all ports capped and logged. Gate 3, before compute is energised: fluid chemistry at fill, flow balance per branch, CDU approach measured. Gate 4, before handover: baselines recorded at a stated load and the turnover package assembled.', href: '/evidence/turnover', label: 'The turnover package the gates produce' },
    { q: 'Who writes the acceptance criteria, and when?', a: 'They are written into the contract before the work, by the party accountable for the whole thermal path, and reviewed by the operator and the commissioning agent. A criterion agreed after a test only describes what happened; one agreed before is a specification that a supplier can be held to.', href: '/approach/thermal-path', label: 'The whole thermal path' },
  ],
  '/evidence/standards': [
    { q: 'Which standards apply to liquid-cooling heat reuse and metering?', a: 'The Energy Reuse Factor (ERF) in ISO/IEC 30134-6 and EN 50600-4-6, the Energy Reuse Effectiveness (ERE) from The Green Grid, and the metering-boundary requirement in Commission Delegated Regulation (EU) 2024/1364 for EU data centres with at least 500 kW installed IT demand. For the thermal environment itself, ASHRAE\'s W-classes give the facility-water temperature envelopes.', href: '/approach/return-water', label: 'Return-water grade' },
    { q: 'Is there an open specification for liquid-cooling commissioning evidence?', a: 'Not yet a complete one. The Open Compute Project\'s Cooling Environments workstream publishes drafts on rack, CDU and facility interfaces; the record structure this site uses, three questions for each of ten leak points, fills the gap where those drafts are silent on what a turnover package must contain.', href: '/evidence/turnover', label: 'The turnover package' },
  ],
  '/tools/return-water': [
    { q: 'What supply temperature does each kind of heat buyer need?', a: 'Fourth-generation district heating typically wants 45–70 °C supply and legacy networks 70–95 °C; greenhouses 35–60 °C depending on the emitter; aquaculture, pools and low-temperature building heating a 30–55 °C source; a heat pump can use almost any grade above 10 °C. The tool compares the temperature you can deliver after the heat exchanger with each buyer\'s window.', href: '/approach/return-water', label: 'Why return-water grade comes first' },
    { q: 'Does the tool account for the heat-exchanger approach?', a: 'Yes. You enter the approach across the export heat exchanger, and the tool subtracts it from your return temperature before comparing with each buyer\'s supply window. A 55 °C return with a 5 K approach delivers 50 °C, which is why a few kelvin of approach can move a buyer from direct to heat-pump lift.' },
    { q: 'If the temperature matches, will a heat buyer sign?', a: 'Not on temperature alone. Temperature is the first screen; whether a contract closes depends on load profile and seasonality, distance and pumping cost, availability and back-up, and the commercial terms. The tool tells you which buyers are physically possible so those conversations start with the right ones.', href: '/solutions/heat-reuse', label: 'Heat-reuse solutions' },
  ],
  '/tools/approach-temp': [
    { q: 'How much does CDU approach temperature affect free-cooling hours?', a: 'Every kelvin of approach across the CDU, and every kelvin across the dry cooler, lowers the outdoor temperature at which the site can free-cool by about one kelvin. How many hours that costs depends on the local climate curve, which is why the tool shows the change against a stated climate profile rather than a single number.', href: '/approach/thermal-path', label: 'Where the CDU sits on the thermal path' },
    { q: 'What are the ASHRAE W-classes?', a: 'ASHRAE liquid-cooling classes for IT equipment, W17, W27, W32, W40, W45 and W+, named for the maximum facility-water supply temperature in °C the equipment is declared for. A class is an operating envelope the equipment tolerates, not a set-point to run at.' },
    { q: 'Why does the tool call its climate data illustrative?', a: 'Because it uses a normalised 8,760-hour temperature distribution for each climate type, not a measured file for your site. Use it to see the direction and rough size of the effect, then rerun the calculation with a TMY file for the actual location before sizing equipment.' },
  ],
  '/tools/leak-checklist': [
    { q: 'Where does my score go?', a: 'Nowhere. The checklist runs entirely in your browser; nothing is sent to NextGenergy or anyone else. Reloading the page clears it.' },
    { q: 'What counts as a record?', a: 'Something you could hand to an auditor today: a test sheet with a date, a technician and a result, a factory certificate indexed to a serial number, a connection log entry. A verbal assurance or a line in a schedule saying the test was planned does not count.', href: '/evidence/turnover', label: 'The turnover package, boundary by boundary' },
  ],
};

/** Core pages listed in /llms.txt, grouped by section, each with a one-line summary. */
export const corePages: { section: string; pages: [string, string, string][] }[] = [
  { section: 'Approach', pages: [
    ['/approach/thermal-path', 'The whole thermal path', 'Six boundaries from facility water interface to chip, who makes each and the question its record must answer.'],
    ['/approach/return-water', 'Return-water grade', 'Why the temperature a loop returns at, not PUE, decides whether waste heat has a buyer.'],
    ['/approach/three-clocks', 'Three clocks', 'Leak risk as three failures on three timelines: manufacturing, commissioning, service life.'],
  ] },
  { section: 'Evidence', pages: [
    ['/evidence/leak-points', 'Ten leak points', 'The ten places a loop can leak, in coolant order, with the record each should have.'],
    ['/evidence/turnover', 'The turnover package', 'Three questions for each of ten boundaries: tested, against what, where is the record.'],
    ['/evidence/commissioning', 'Commissioning and acceptance criteria', 'Four gates from factory release to handover, with criteria written before the work.'],
    ['/evidence/standards', 'Standards work', 'ERF, ERE, EU 2024/1364, ASHRAE W-classes and OCP drafts, and what is asked of them.'],
  ] },
  { section: 'Tools', pages: [
    ['/tools/return-water', 'Return-water grade → heat buyers', 'Enter return temperature and heat-exchanger approach; see which off-takers can use the heat directly.'],
    ['/tools/approach-temp', 'Approach temperature → CDU sizing', 'How CDU and dry-cooler approach move the facility supply temperature and free-cooling hours.'],
    ['/tools/leak-checklist', 'Turnover self-check', 'Score a turnover package out of 30 in the browser; nothing is uploaded.'],
  ] },
  { section: 'Company', pages: [
    ['/solutions', 'Solutions', 'Liquid cooling by deployment type, from retrofit halls to greenfield AI factories, and heat reuse.'],
    ['/platform', 'Platform', 'CDU, manifolds, cold plates, fluids and monitoring, chosen and integrated as one system.'],
    ['/services', 'Services', 'Design, integration, commissioning and service-life programmes.'],
    ['/company/about', 'About NextGenergy', 'Toronto-based; designs, integrates and commissions liquid cooling for AI data centres and does not manufacture components.'],
    ['/company/leadership', 'Leadership', 'Jim (Junming) Li, Founder & CEO; Chenli Wang, CSO; Ping (Richard) Li, COO.'],
    ['/insights', 'Insights', 'Articles from Every Watt Counts on liquid cooling, heat reuse and commissioning.'],
  ] },
];
