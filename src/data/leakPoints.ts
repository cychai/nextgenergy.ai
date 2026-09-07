export interface LeakPoint { n: number; group: string; t: string; p: string; r?: string; }
export const leakPoints: LeakPoint[] = [
  { n: 1, group: 'At the server', t: 'Cold plate joints', p: 'Brazed seams, friction-stir welds, covers and ports. Voids, incomplete bonding and microcracks sit upstream of the smallest flow passages.' },
  { n: 2, group: 'At the server', t: 'Quick disconnects', p: 'Often the highest-count removable connection in the rack. A disconnected QD is not automatically a sealed one. One particle on the poppet seat may be enough.', r: 'First-fill cleanliness is leak prevention, not housekeeping.' },
  { n: 3, group: 'At the server', t: 'Hose crimps', p: 'Crimp dimensions, concentricity, hose variation and material relaxation all matter. Once the sleeve is on, most defects are invisible.', r: 'A crimp is a controlled manufacturing process, not an assembly step.' },
  { n: 4, group: 'In the rack', t: 'Manifold branches', p: 'Every server connection adds another boundary, and every server replacement disturbs it again.' },
  { n: 5, group: 'In the rack', t: 'Elastomeric seals', p: 'They sit inside QDs, valves, adapters and manifolds. Compression set, hardening, temperature and fluid incompatibility can turn a dry joint into a future leak.', r: '"Compatible with water" is not a material specification.' },
  { n: 6, group: 'In the rack', t: 'Threaded, compression and adapter fittings', p: 'Preparation, alignment, support and torque all matter.', r: 'Looking dry at commissioning is not evidence of how a fitting was assembled or tested.' },
  { n: 7, group: 'In the CDU', t: 'Internal boundaries', p: 'Pump seals, heat-exchanger gaskets, valve stems, filter housings and service covers. All enclosed, so a small leak may remain hidden until it reaches the cabinet floor or a sensor.' },
  { n: 8, group: 'Between the CDU and the facility', t: 'Field welds and hot work', p: 'A weld is both a pressure boundary and a water-chemistry event.', r: 'Flushing removes transportable debris. It does not, by itself, passivate.' },
  { n: 9, group: 'Between the CDU and the facility', t: 'Balancing and isolation valves', p: 'Bodies, stems, unions and serviceable closures. Several boundaries at every location, operated during commissioning and then largely left alone.' },
  { n: 10, group: 'Between the CDU and the facility', t: 'Fill, drain, vent and sample ports', p: 'Small connections, frequently disturbed: temporary hoses connected and removed, caps replaced, valves reopened.' },
];
