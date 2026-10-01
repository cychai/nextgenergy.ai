/**
 * Every performance number on the site lives here, with its boundary attached.
 * Rule: a number goes out with its condition and source, or it does not go out.
 *
 * status:
 *   published    — condition + source are complete; may appear anywhere.
 *   conditional  — may appear only with its condition inline (the <Claim> component enforces this).
 *   under-review — must NOT appear as a headline. Rendered as "under review" with the reason.
 *   retired      — removed from the site; kept here so the history is visible.
 */
export type ClaimStatus = 'published' | 'conditional' | 'under-review' | 'retired';

export interface Claim {
  id: string;
  value: string;          // the number as it should read, e.g. "55 °C"
  statement: string;      // the sentence the number supports
  condition: string;      // test conditions / boundary / basis of comparison
  source: string;         // where the number comes from
  verifiedBy?: string;    // who checked it (third party, standard, internal log)
  status: ClaimStatus;
  note?: string;          // why it is in its current status
}

export const claims: Record<string, Claim> = {
  'supply-55c': {
    id: 'supply-55c',
    value: '≈55 °C',
    statement: 'Cold-plate loops built on the product platform our founding team created return water at roughly 55 °C.',
    condition: 'Secondary-loop return at rated IT load; direct-to-chip cold plate; facility-side approach not included. Delivered by the founding team on their earlier product platform, before NextGenergy.',
    source: 'Every Watt Counts, "Waste Heat Becomes an Asset" (June 2026).',
    verifiedBy: 'Operating logs; not third-party audited.',
    status: 'conditional',
  },
  'district-heat-50-70': {
    id: 'district-heat-50-70',
    value: '50–60 °C',
    statement: 'Fourth-generation low-temperature district heating networks are defined by supply temperatures of roughly 50–60 °C, rising to about 70 °C in winter.',
    condition: 'Per the 4GDH definition (Lund et al., 2014: < 50–60 °C, 70 °C in winter); varies by network, season and building stock, and some ultra-low-temperature networks run below 45 °C.',
    source: 'Lund et al., 4th Generation District Heating (4GDH), Energy 2014; ScienceDirect topic review.',
    status: 'published',
  },
  'cooling-tower-latent': {
    id: 'cooling-tower-latent',
    value: '≈2.4 MJ/kg',
    statement: 'A cooling tower rejects heat mainly by evaporation, at about 2.4 MJ per kilogram of water at tower temperatures.',
    condition: 'Latent heat at typical tower water temperature, not at boiling; latent share of rejection is typically 75–90 %.',
    source: 'Standard psychrometric data; worked through in "When Better PUE Makes the Energy System Worse".',
    status: 'published',
  },
  'pue-1-02': {
    id: 'pue-1-02',
    value: 'PUE 1.02',
    statement: 'Legacy headline from the previous site: "PUE as low as 1.02".',
    condition: 'Unknown. Ambient, wet-bulb, IT load level, measurement period and metering boundary were never recorded.',
    source: 'Previous nextgenergy.ai single-page site (2025).',
    status: 'under-review',
    note: 'Withdrawn from headlines. Reinstated only with a metered boundary (IT vs facility power, period, climate) that we can show.',
  },
  'heat-extraction-82': {
    id: 'heat-extraction-82',
    value: '82 % better heat extraction',
    statement: 'Legacy headline from the previous site comparing microchannel cold plates with air cooling.',
    condition: 'Undefined comparison. "Better" was never tied to a metric (thermal resistance? heat captured to liquid? fan energy?) or a test setup.',
    source: 'Previous nextgenergy.ai single-page site (2025).',
    status: 'retired',
    note: 'Retired. A percentage without a defined metric and baseline cannot be defended. Replaced by the liquid-capture ratio, which is stated per project with its measurement boundary.',
  },
  'cold-climate-minus-40': {
    id: 'cold-climate-minus-40',
    value: '−40 °C',
    statement: 'Our cold-climate designs are specified for ambient down to −40 °C.',
    condition: 'Design ambient for outdoor heat-rejection equipment and fluid selection; not a demonstrated continuous-operation record at that temperature.',
    source: 'NextGenergy design basis for cold-climate deployments.',
    status: 'conditional',
  },
  'deployed-1000mw': {
    id: 'deployed-1000mw',
    value: 'Nearly 1,000 MW',
    statement: 'Our founding team has delivered nearly 1,000 MW of liquid cooling.',
    condition: 'Cumulative capacity of liquid-cooling equipment (immersion and direct-to-chip systems, CDUs and heat-recovery units) delivered by the founding team through the company they built before NextGenergy, counted to the first quarter of 2026 and rated by the IT heat load it serves; equipment delivered, not capacity currently in operation, and not a NextGenergy installed base; not third-party audited.',
    source: 'Founding team project records; see /company/track-record.',
    verifiedBy: 'Internal records; not third-party audited.',
    status: 'conditional',
  },
  'founding-8-years': {
    id: 'founding-8-years',
    value: '6 years',
    statement: 'Our founding team has worked on liquid cooling for six years, immersion first and then direct-to-chip.',
    condition: 'Counted from 2020, when the founding team\'s company entered liquid cooling, to 2026; immersion first, then direct-to-chip. Describes the team\'s experience, not NextGenergy, which was incorporated in 2025.',
    source: 'Founding team history; see /company/leadership.',
    status: 'conditional',
  },
  'liquid-loss-24pct': {
    id: 'liquid-loss-24pct',
    value: '≈24 %',
    statement: 'About a quarter of total data-centre loss cost in a fifteen-year FM review was liquid-related.',
    condition: 'All liquid-related loss categories in the review, across data centres generally; not a direct-to-chip liquid-cooling failure rate and not a NextGenergy measurement.',
    source: 'Swiss Re Institute, sigma insights 07/2026, citing FM loss data over fifteen years.',
    status: 'conditional',
  },
  'rack-range': {
    id: 'rack-range',
    value: '10 kW – 1 MW',
    statement: 'The platform is engineered across a range from single high-density racks to megawatt-class pods.',
    condition: 'Range of thermal design points, not a single product rating. Each deployment is rated at its own supply temperature, flow and approach.',
    source: 'NextGenergy platform design envelope.',
    status: 'conditional',
  },
  'cdu-approach-4k': {
    id: 'cdu-approach-4k',
    value: '≤ 4 K',
    statement: 'Published CDU approach-temperature targets cluster at 3–4 K.',
    condition: 'Approach between facility supply and secondary (TCS) supply. One primary specification and two manufacturer statements: Project Deschutes lists 3 K at a 2,000 kW thermal load with 500 gpm on both loops; KAORI cites ≤ 4 K as a common design target for brazed-plate heat exchangers; AVC states its CDUs are designed to 4 K. A quoted approach is comparable only with its load fraction, the flow on both sides and the fluid stated.',
    source: 'OCP APAC Summit 2026, Cooling Environments: Google, "Project Deschutes Update V1.0" (E. Kung); KAORI, "Enabling High-Density Data Center Cooling: The Critical Role of Brazed Plate Heat Exchangers" (M. Lu); AVC, "Advanced Thermal Management for High-Density AI Servers: Cold Plate Optimization and CDU Specification Requirements" (F. Lin).',
    status: 'conditional',
    note: 'Two of the three sources are manufacturer statements, not independent tests.',
  },
  'tcs-filtration-25um': {
    id: 'tcs-filtration-25um',
    value: '25 µm',
    statement: 'Full-flow filtration on the secondary (TCS) loop is moving to 25 µm, replacing the earlier 50 µm default.',
    condition: 'Full-flow filter rating on the technology-cooling loop. AVC describes 25 µm as the new CDU standard; Cooler Master gives 25–50 µm full-flow plus side-stream filtration below 5 µm on about 10 % of flow; Google\'s Project Deschutes 2 MW CDU adds a 0.2 µm side-stream loop. Manufacturer statements; the efficiency basis of the rating must be stated per filter.',
    source: 'OCP APAC Summit 2026, Cooling Environments: AVC, "Advanced Thermal Management for High-Density AI Servers" (F. Lin); Cooler Master, "CDU Filter Health & Reducer-Induced Bubble Formation" (R. Hsieh).',
    status: 'conditional',
    note: 'Manufacturer statements. No efficiency basis (for example a beta ratio under ISO 16889) is cited until a source for it is confirmed.',
  },
  'design-velocity-3ms': {
    id: 'design-velocity-3ms',
    value: '3 m/s',
    statement: 'Liquid-cooling distribution pipework is sized to a target velocity of about 3 m/s, with 6 m/s as the upper limit.',
    condition: 'Design guidance for CDU-to-rack distribution piping, to limit erosion; a design target, not a measured operating value. Water-hammer and transient checks are separate and depend on pipe size and valve closure times.',
    source: 'OCP APAC Summit 2026, Cooling Environments: nVent, "From Rack to Facility: Designing Scalable CDU-Based Liquid Cooling System" (M. Tien, M. Archibald).',
    status: 'conditional',
    note: 'One manufacturer\'s design guidance. Further sources for the transient-analysis threshold are not cited until verified.',
  },
  'ul-jacket-elongation': {
    id: 'ul-jacket-elongation',
    value: '−99 % vs −14 %',
    statement: 'Three power cords with the same 105 °C oil-resistant rating lost between 14 % and 99 % of their elongation at break in the same coolant.',
    condition: 'UL Solutions preliminary study for single-phase immersion: SJEOOW (thermoplastic elastomer) −99 %, SJTOW (PVC) −90 %, SJOOW (thermoset rubber) −14 %, after 12 weeks in a formulated PAO-ester blend at 105 °C (test plan 80 °C and 105 °C, 4/8/12 weeks). Immersion fluids, not water or glycol; cold-plate loops expose materials under different conditions.',
    source: 'OCP APAC Summit 2026, Cooling Environments: UL Solutions, "Material Compatibility, Reliability, and Safety Risks in Single-Phase Immersion Cooling" (J. Shih).',
    status: 'conditional',
  },
  'dry-cooler-wue-0': {
    id: 'dry-cooler-wue-0',
    value: 'WUE 0',
    statement: 'A dry cooler uses no water for evaporation at the heat-rejection boundary, at the cost of higher fan energy.',
    condition: 'On-site evaporation at the heat-rejection equipment only; make-up water for sampling, leaks and fluid replacement is counted separately. Same comparison: cooling tower WUE 1.8–3.0, hybrid tower 0.2–0.5, adiabatic 0.05–0.5 L/kWh. Manufacturer selection guidance, not a site measurement.',
    source: 'OCP APAC Summit 2026, Cooling Environments: Supermicro, "Optimizing Heat Rejection in Liquid-Cooled Data Centers" (M. Zhuang).',
    status: 'conditional',
  },
};

export const claim = (id: keyof typeof claims) => claims[id];
