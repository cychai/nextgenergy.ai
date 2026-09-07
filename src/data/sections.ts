export interface Sub { slug: string; title: string; summary: string; body: string[]; asks?: string[]; related?: { href: string; label: string; kind: 'evidence' | 'tool' | 'approach' | 'insight' }[]; }

export const solutions: Sub[] = [
  { slug: 'new-build', title: 'New-build AI data centre', summary: 'Set the return-water grade, the CDU approach and the acceptance criteria before the first rack lands.',
    body: [
      'A new build is the only time the whole thermal path is designed by one hand. Every decision made here, from facility supply temperature to the metering boundary at the fence, is close to free on paper and close to impossible to change once the hall is live.',
      'We start from the outside in. What return-water grade does the site want to produce, and for whom? What facility supply temperature does that imply, and how many free-cooling hours does the climate give at that temperature? Only then do we work inward to CDU approach, secondary-loop design, manifold layout and cold-plate selection.',
      'The acceptance criteria are written at design stage and attached to procurement. Every supplier knows what their boundary must prove before it is released. The commissioning plan is the same document, run in reverse.'],
    asks: ['Target return-water grade and intended heat off-taker, if any', 'Facility supply temperature and free-cooling hours at that temperature', 'CDU approach at rated load with fouling allowance', 'Metering boundary drawn before the mechanical drawings are frozen'],
    related: [{ href: '/approach/return-water', label: 'Why return-water grade comes first', kind: 'approach' }, { href: '/evidence/commissioning', label: 'Acceptance criteria, gate by gate', kind: 'evidence' }, { href: '/tools/approach-temp', label: 'Approach temperature tool', kind: 'tool' }] },
  { slug: 'retrofit', title: 'Retrofit of an existing hall', summary: 'Liquid on an air-cooled floor without rebuilding the chiller plant, and without inheriting an undocumented loop.',
    body: [
      'Most retrofits are constrained by three things: the existing chilled-water temperature, the floor loading, and the fact that the hall cannot go dark. Direct-to-chip liquid tolerates much warmer water than the air side ever did, which is the opening: a technology-cooling loop designed for a facility water supply in the 30–45 °C range can, in many climates, be served by dry coolers for most of the year. Whether the existing chiller plant can be left untouched depends on design ambient, dry-cooler approach, peak load and the redundancy the owner requires, and we calculate that before promising it.',
      'Factory-built skids keep hot work out of the live hall. Field joints are reduced to a countable number, each with a test and a record. Where a field weld is unavoidable it is flushed, passivated and sampled as a separate step, because flushing alone does not passivate.',
      'The retrofit turnover package is held to the same ten-boundary structure as a new build. An operator should not be able to tell from the records which one they are reading.'],
    asks: ['Existing chilled-water supply temperature and available capacity', 'Floor loading and routing for skids', 'Change windows in the live hall', 'Water chemistry of the existing loop before anything is connected to it'],
    related: [{ href: '/platform/skids', label: 'Factory-built skids', kind: 'approach' }, { href: '/evidence/leak-points', label: 'Ten leak points', kind: 'evidence' }] },
  { slug: 'cold-climate', title: 'Cold-climate deployment', summary: 'Dry heat rejection and fluid selection for design ambients down to −40 °C. Where we started, now one case among several.',
    body: [
      'Cold climates give liquid cooling its easiest thermodynamics and its hardest fluids problem. Free cooling is available most of the year. The heat rejection equipment, the outdoor piping and the fluid itself have to survive the rest of it.',
      'Our cold-climate designs use dry heat rejection sized for the summer design day and freeze-protected for the winter one, with fluid selection driven by the coldest surface in the system rather than by the average ambient. Glycol concentration, pump sizing and heat-exchanger derating are calculated together, because each of them costs something and they trade against each other.',
      'The cold-climate advantage is real, and it is not the whole story. A cold-climate site often has a heat demand nearby that a warmer climate does not: greenhouses, buildings, process users. We screen demand and distance before fixing the rejection strategy, and design for reuse first and rejection second where a buyer exists.'],
    asks: ['Design ambient, summer and winter, from a named station', 'Coldest exposed surface in the loop', 'Glycol concentration and its effect on heat-exchanger performance, stated'],
    related: [{ href: '/platform/coolants', label: 'Coolants and water chemistry', kind: 'approach' }, { href: '/solutions/heat-reuse', label: 'Heat reuse in cold climates', kind: 'approach' }] },
  { slug: 'heat-reuse', title: 'Heat reuse and community licence', summary: 'Turn reject heat into a metered product at the fence line, and into the argument that gets the next site permitted.',
    body: [
      'Communities are no longer asking data centres to be efficient. They are asking what the building gives back. Warm water at a usable grade, delivered to a named buyer through a contract-grade meter, is the most concrete answer available.',
      'We design for the buyer, not for the metric. A greenhouse, an aquaculture operation, a district network and an absorption chiller each have a temperature window, a load profile and a season. The loop is designed to return water inside the window of the buyer whose annual load profile and contracted availability best match the site, and the hand-off is metered at the data-centre boundary, as the EU\'s reporting regulation now requires for larger data centres there.',
      'Heat recovery can make your PUE worse: if export pumps and exchangers are counted as facility energy, PUE rises, and the exported heat is nowhere in the ratio. We report the Energy Reuse Factor (ERF) alongside PUE so the improvement to the energy system is visible in a number someone can audit.'],
    asks: ['Candidate off-takers within pumping distance and their temperature windows', 'Return-water grade at the hand-off point, by season', 'Metering boundary and meter class', 'ERF reported alongside PUE'],
    related: [{ href: '/tools/return-water', label: 'Return-water grade to feasible buyers', kind: 'tool' }, { href: '/approach/return-water', label: 'Return-water grade', kind: 'approach' }, { href: '/insights/waste-heat-becomes-an-asset', label: 'Waste Heat Becomes an Asset', kind: 'insight' }] },
  { slug: 'edge', title: 'Edge and small-scale', summary: 'Single-rack to small-pod liquid cooling where there is no facilities team to hand the binder to.',
    body: [
      'At the edge the thermal path is short and the operator is far away. Whatever was not tested before the container left the factory will not be tested at all. Our small-scale designs are therefore built almost entirely as factory-tested units: closed secondary loop, integrated CDU, dry rejection, and a field scope that is limited to power, network and two pipe connections.',
      'The turnover package for an edge unit is the factory test package, plus a remote baseline recorded at first energisation. Fluid quality is sampled on a schedule that matches how often anyone will physically visit.'],
    asks: ['Field scope reduced to a countable number of connections', 'Remote baseline at first energisation', 'Fluid sampling interval matched to visit frequency'],
    related: [{ href: '/platform/skids', label: 'Factory-built skids', kind: 'approach' }] },
];

export const platform: Sub[] = [
  { slug: 'skids', title: 'Factory-built skids', summary: 'CDU, pumps, valves, filtration and controls assembled and tested under controlled conditions, so the field scope is countable.',
    body: [
      'One of the most effective ways to reduce leak risk is to make fewer joints in the field. A skid moves the CDU, pumps, balancing and isolation valves, filtration, sample ports and controls into a factory where each boundary can be pressure-tested, flushed to a cleanliness class and released against written criteria, with the record attached to the serial.',
      'We design the skid around the project\'s acceptance criteria and have it built by manufacturing partners we have qualified. We do not own the factory. We own the specification and the factory acceptance test, and we are accountable for how the skid performs in the line within the agreed scope and acceptance criteria.'],
    asks: ['FAT protocol agreed before build', 'Cleanliness class stated and sampled', 'Field connections limited to flanges with a test plan'] },
  { slug: 'cdu', title: 'CDU and secondary loop', summary: 'Selection by approach temperature and turndown, not by nameplate capacity.',
    body: [
      'A CDU\'s nameplate capacity is a number at one approach temperature. The approach is what matters: it sets how warm the secondary loop runs for a given facility supply, which sets your free-cooling hours and your return-water grade at the same time. A few kelvin of approach can be worth hundreds of hours a year in a temperate climate.',
      'We select CDUs from several manufacturers against the project\'s approach, turndown and redundancy requirements, and we require the manufacturer\'s FAT for pump seals, heat-exchanger gaskets and filter housings, the enclosed boundaries that leak quietly.'],
    asks: ['Approach at rated load, with fouling allowance', 'Turndown range and pump staging logic', 'FAT for internal boundaries'],
    related: [{ href: '/tools/approach-temp', label: 'Approach temperature tool', kind: 'tool' }] },
  { slug: 'manifolds', title: 'Rack manifolds and quick disconnects', summary: 'The highest-count removable boundary in the system, and the one disturbed most often.',
    body: [
      'Every server adds two quick disconnects. Every server swap disturbs them again. A disconnected QD is not automatically a sealed one, and one particle on the poppet seat may be enough. We specify manifolds and QDs together, with the QD standard, the cleanliness class at first fill and the re-test procedure after any disturbance written into the operator\'s procedures, not left to the rack integrator.'],
    asks: ['QD standard and interoperability stated', 'Cleanliness at first fill sampled', 'Re-test after every disturbance logged'] },
  { slug: 'cold-plates', title: 'Cold plates and direct-to-chip', summary: 'Selected with the server OEM, verified by factory pressure test traceable to serial.',
    body: [
      'Cold plates are usually specified by the server OEM and we rarely get to choose them. What we can do is require the evidence: a factory pressure or helium test traceable to the plate\'s serial, and a thermal performance figure stated at a flow and inlet temperature that match the loop we are designing, not the datasheet\'s best case.',
      'Thermal performance at the plate depends on everything upstream. A plate rated at 1.5 L/min and 30 °C inlet will not deliver the same case temperature at 40 °C inlet in a loop that has fouled. We design the loop to the plate\'s real operating point and record that point at commissioning.'],
    asks: ['Factory test traceable to serial', 'Thermal performance at the project\'s flow and inlet temperature', 'Fouling allowance stated'] },
  { slug: 'coolants', title: 'Coolants and water chemistry', summary: 'The fluid is a component with a service life. It is specified, sampled and trended like one.',
    body: [
      'Most secondary loops run treated water or a glycol solution. The inhibitor package, biocide, pH and conductivity windows are set against the wetted materials in the loop, and "compatible with water" is not a specification for any of them. In cold climates glycol concentration is set by the coldest exposed surface, and its penalty on heat-exchanger performance and pump power is calculated, not assumed.',
      'Fluid quality is the third clock. We hand over a sampling schedule, the acceptance windows and the baseline result, so the operator is trending against something rather than waiting for a symptom.'],
    asks: ['Fluid specification against the named wetted materials', 'Baseline sample at fill', 'Sampling schedule and acceptance windows in the operator\'s hands'] },
];

export const services: Sub[] = [
  { slug: 'design', title: 'Thermal design and selection', summary: 'From the return-water grade you want to the components that will deliver it, with the acceptance criteria attached.',
    body: ['We design the thermal path outside-in: heat off-taker, facility supply temperature, free-cooling hours, CDU approach, secondary loop, manifold, plate operating point. The output is a design basis, an equipment selection with alternatives, and the acceptance criteria each boundary must meet before it is released. The criteria go into procurement, so every supplier is bidding to the same test.'] },
  { slug: 'integration', title: 'Integration and factory pre-assembly', summary: 'We specify, source and pre-assemble with manufacturing partners we qualify. We do not own the factory. We are accountable for the assembled result within the agreed scope.',
    body: ['Skids, manifolds and CDUs are assembled and tested by partners we qualify against our FAT protocols. We witness or audit the factory tests, hold the records, and remain the accountable integration lead for how the assembled path performs in service, within the agreed scope and acceptance criteria. The customer gets one accountable engineering party for a system built from several manufacturers\' components.'] },
  { slug: 'commissioning', title: 'Commissioning and verification', summary: 'Available standalone. Bring us a loop somebody else built and we will tell you what it can prove.',
    body: ['We commission our own systems against the criteria written at design stage, gate by gate. We also commission and verify systems we did not design or build: a written set of acceptance criteria, a test plan, the tests, and a turnover package in the ten-boundary structure. Where a loop is already live we start with a records audit and a fluid sample, and tell the owner honestly which boundaries can be proven and which can only be described.'] },
  { slug: 'operations', title: 'Operations and long-term support', summary: 'Trended baselines, fluid sampling, disturbance logging and a standing engineer for the third clock.',
    body: ['Service life is the clock most projects leave uncovered. We hand over baselines rather than binders, and we stay: scheduled fluid sampling against acceptance windows, performance trending against commissioning baselines, and a logged re-test for every boundary the operator disturbs. When a server swap disturbs a quick disconnect in year three, there is a procedure and there is a record.'] },
];
