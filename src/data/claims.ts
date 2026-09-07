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
    statement: 'Cold-plate loops we have delivered return water at roughly 55 °C.',
    condition: 'Secondary-loop return at rated IT load; direct-to-chip cold plate; facility-side approach not included.',
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
  'rack-range': {
    id: 'rack-range',
    value: '10 kW – 1 MW',
    statement: 'The platform is engineered across a range from single high-density racks to megawatt-class pods.',
    condition: 'Range of thermal design points, not a single product rating. Each deployment is rated at its own supply temperature, flow and approach.',
    source: 'NextGenergy platform design envelope.',
    status: 'conditional',
  },
};

export const claim = (id: keyof typeof claims) => claims[id];
