# The Three Ledgers of Liquid Cooling

> CapEx, OpEx, Reuse. How many times can one kilowatt-hour be sold? In the old low-density world, liquid cooling looks like an added cost. Under high-density AI — at system-level CapEx, where the heat c

- Author: Jim (Junming) Li, Founder & CEO, NextGenergy
- Published: 2026-07-01
- Web page: https://nextgenergy.ai/insights/the-three-ledgers-of-liquid-cooling
- First published: https://everywattcounts.substack.com/p/the-three-ledgers-of-liquid-cooling
- Tags: liquid-cooling, economics, heat-reuse

---

![](https://substackcdn.com/image/fetch/$s_!yUto!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F54978c46-a807-47bd-9de5-ac2520f5dc51_1672x941.png)

For most of its history, the industry has judged a data center on two ledgers: what it costs to build, and what it costs to run. The heat was a line item outside both — you made it, then paid again to throw it away.

Liquid cooling doesn’t just change a pipe, and it isn’t only about PUE. It changes the bookkeeping. The build ledger gets re-priced per unit of useful compute. The operating ledger gets re-priced across visible power-and-water and hidden availability. And a third ledger — one the air-cooled era never had — moves the heat from the liability column to the revenue column. This is the fifth issue in a series on warm-water AI infrastructure; the first four were about physics, water, and heat. This one is about the accounting. Let me state the conclusion up front, with its boundary attached: under high-density AI, at system-level cost, where the heat can be reused, all three ledgers — CapEx, OpEx, Reuse — turn in liquid’s favor.

(One number everyone knows: the industry-average PUE has hovered around 1.55 for six years with no real improvement. PUE isn’t wrong — it just measures facility overhead. It says nothing about useful compute produced, or about the value of heat sent out the door.)

## Ledger 1 — CapEx: one rack now does the work of ten

Let me open with a retrofit we actually did (an internal case, illustrative, not a published benchmark).

A 5 MW legacy air-cooled data center once needed four full floors to house its compute. Converted to liquid, the same 5 MW fit into half of one floor — roughly one-eighth of the original footprint. Put plainly: one high-density liquid-cooled rack now does the work of about ten air-cooled ones.

![](https://substackcdn.com/image/fetch/$s_!I7id!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F21b504e7-600f-4d75-bb97-6fcfa816bd75_1672x941.png)

That picture punctures the trap in the first ledger. This ledger looks at a single number: day-one capital. On that number, liquid is genuinely higher — you’ve added cold plates, a CDU (coolant distribution unit), rack manifolds, and a warm-water loop. The air-cooled ledger reads that line and rests its case: too expensive.

But that’s the wrong denominator. The question isn’t “cost per watt” — it’s cost per unit of useful compute. And that’s exactly where density flips the math.

![](https://substackcdn.com/image/fetch/$s_!zeg3!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F05ee6b2c-f940-4c72-80e5-3333c08a02a1_1600x1160.png)

The mechanism lives in that half-floor. Air cooling spreads compute thinly across a sea of low-density racks: more racks, more floors, more electrical and mechanical plant, more building. Past roughly 100 kW per rack, air simply can’t hold the load, and liquid becomes the main path. Liquid packs hundreds of kilowatts into a single rack — so the same mechanical, electrical, and building investment now carries far more compute.

Schneider Electric’s white paper WP282 (a system-level immersion model) quantified it: at the same rack density (its baseline is a 10 kW/rack immersion design), liquid essentially breaks even — about $6.98/W versus $7.02/W for air. And once you use density to compact, liquid gets cheaper: about $6.33/W at 20 kW/rack and $6.02/W at 40 kW/rack — roughly 14% below the air case. (Boundary: that study is a 2019/2020, system-level, same-compute immersion model; don’t generalize it to every DLC or GB200 project.)

Ledger 1, settled: under high-density AI, liquid isn’t an “added cost” — it’s the cheaper main path. Higher per watt on the surface; lower per unit of useful compute once one rack does the work of ten.

## Ledger 2 — OpEx: the wall of fans you no longer need

Start with a sound. Walk into an older air-cooled hall and what hits you is a wall of fan noise — CRACs, in-row units, server fans, layer upon layer pushing cold air in and dragging hot air out. Behind that noise is a striking fact: cooling often eats three to four tenths of a data center’s total electricity (consistent with a PUE of 1.5–1.8 — every kilowatt of IT power carries roughly another 0.5–0.8 kW of facility overhead, cooling being the bulk of it).

A liquid hall is a different world: quiet. No wall of fans — just liquid moving through pipes, carrying the heat away directly instead of blowing it around. In a well-designed immersion or warm-water system, that overhead can shrink to a PUE premium of 0.03–0.08 — though not every liquid project gets there automatically; it depends on the heat-rejection back end and the climate.

![](https://substackcdn.com/image/fetch/$s_!ilzh!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff1389f2b-6f60-4d42-9e89-c4af52b97948_1672x941.png)

And that’s only the visible layer. This ledger has two, and most people count only the power and water they can see — missing the more valuable hidden account. On both, liquid comes out ahead:

![](https://substackcdn.com/image/fetch/$s_!6b_F!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F50949dd3-baee-47ef-8abb-2eb66c751238_1600x1160.png)

The hidden layer is the one people underrate. A $30,000–$40,000 GPU is a depreciating financial asset. Liquid won’t change its technology generation, but a cooler, cleaner, lower-thermal-stress environment lets it age more slowly and hold more resale value. Put the two layers together: system-level modeling shows an immersion design landing roughly 20% below air on 10-year TCO, with high-density payback as fast as 1.6–2.2 years (again dependent on power price, load factor, and whether heat revenue is counted).

Ledger 2, settled: that wall of fans is cost the air-cooled era simply burned. Liquid tears it down — saving power and water in the open, and downtime and depreciation underneath.

## Ledger 3 — Reuse: computing AI on one side, heating a greenhouse on the other

The third ledger is the strongest, because the air-cooled era never had it at all. Here’s the picture.

Imagine a data center whose GPUs are crunching AI around the clock — and, right next door, a vegetable greenhouse in the dead of winter: minus-ten outside, warm as spring inside, tomatoes and lettuce growing as usual. What keeps that greenhouse warm is the waste heat from the GPUs next door: warm water, concentrated in a pipe, flowing into the greenhouse and holding winter at bay.

![](https://substackcdn.com/image/fetch/$s_!MX4A!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F40de48fc-94f7-4082-89a0-4e350596624e_1672x941.png)

For the same heat, the air and liquid eras run in opposite directions — a sign flip:

![](https://substackcdn.com/image/fetch/$s_!Fqm1!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8eedb32f-2764-4446-b05a-294d7a9d31d9_1600x1160.png)

Heat has a grade, and the grade is temperature. Air cooling rejects the low-grade kind — lukewarm, diffuse — and upgrading it to something a buyer can use usually costs more than the heat is worth, so it gets thrown away. Liquid concentrates the heat into water at roughly 50–60 °C (direct-to-chip typically captures about 70–80% of the white-space heat load; full-platform vendor solutions may claim more), landing near what a 4th-generation low-temperature district-heating network wants — usable directly, or with a small lift, in district or greenhouse settings. That’s what finally makes reuse accessible.

And that greenhouse isn’t hypothetical: in Sweden (public projects around Boden/Östersund), the Hive Data Center already pipes waste heat straight into a 10,000 m² greenhouse operated by Agtira, and Sweden’s RISE has studied greenhouse heating from data-center waste heat directly. Studies and project estimates suggest a large enough greenhouse can meet close to two-thirds of its heating from waste heat; conservatively, a 1 MW IT load can offset roughly a third of an adjacent greenhouse’s heating. Beyond that:

\- In European district-heating settings, recovery plant costs well below building new heat sources — some estimates put it at roughly €0.19–0.25M/MW versus about €0.73M+/MW for new gas CHP;

\- Within 1–2 km of a district-heating main, heat-network payback often lands inside 8–10 years;

\- Where the temperature falls short, a heat-pump lift opens second-tier uses: absorption cooling, dehumidification, domestic hot-water preheat.

The cross-building, cross-owner model already works: Amazon’s Denny Triangle campus in Seattle heats several office towers using waste heat from the neighboring Westin Building Exchange data center. The point isn’t “someone’s own data center” — it’s that a data center’s waste heat can become a city’s heat source.

Ledger 3, settled: the same heat that the air-cooled era paid to dump, the liquid era sells — moved from the liability column to the revenue column. That’s not a cost saving; it’s a change in the business model, and a ledger the air-cooled era never had.

## Three ledgers, one insight: a kilowatt-hour no longer settles just once

Once all three ledgers turn, a deeper thing surfaces — how many times that one kilowatt-hour gets settled.

Air cooling: a kWh settles once. Power → compute (paid once) → nearly all of it becomes heat → treated as cost, then paid again to throw away (a negative).

Liquid cooling: the value of the same kWh is monetized two to three times.

\- First, as compute — the same power yields more useful compute;

\- Second, as heat — the energy that leaves the IT almost entirely as heat, if concentrated in usable-temperature water, flips from liability to revenue (that greenhouse);

\- Third, as cascade — after space heating, it steps down to preheat and aquaculture, and lower still (with enough temperature, or a heat-pump lift) to absorption cooling. The heat pump is a multiplier here: at a COP of 2.5–3.5, one kWh of electricity moves 2.5–3.5 kWh of heat.

To be precise: the kilowatt-hour is not physically sold three times, and energy conservation is untouched. What changes is how its value is recovered — first as compute revenue, then, since it leaves the IT almost entirely as heat, as heat revenue if captured in usable-temperature water, then cascaded down the temperature grades for heating, preheat, greenhouses, or aquaculture. The electron isn’t copied; the value is recovered at more than one point.

## Closing: from a cost snapshot to a three-page ledger

Four floors become half a floor; the wall of fans comes down; the greenhouse next door stays green through winter — those three pictures are the three ledgers.

In the air-cooled era there were two ledgers, both cost: build and run, throw the heat away, settle the kilowatt-hour once. In the liquid era — under high-density AI, where the heat can be reused — all three turn: the build ledger cheaper per unit of useful compute, the operating ledger better across both layers, and the reuse ledger moving heat from liability to revenue. So the kilowatt-hour settles twice, sometimes three times.

PUE measures waste; the AI era has to measure value. More precisely: PUE only measures facility overhead — not useful compute, and not the value of exported heat. A cost snapshot told us cooling was an expense to cut. The three ledgers, read together, tell us that — under the right boundary — it was an asset all along.

Make every watt count — and count how many times that watt creates value.

— Jim Li, founder of NextGenergy. Power, cooling, and heat recovery for AI data centers, designed as one system.

##### _References & Notes_

_• PUE: Uptime Institute, Global Data Center Survey 2024/2025 — average PUE ~1.56 (2024), ~1.54 (2025), little improvement for years (~1.55). PUE = total facility energy ÷ IT equipment energy, ≥ 1.0 by definition; it measures facility overhead only, not useful compute or exported-heat value._

_• Rack density (reported/expected): NVIDIA’s GB200 NVL72 is a rack-scale liquid-cooled design (36 Grace CPUs + 72 Blackwell GPUs); the ~120 kW figure comes from industry teardowns/supply-chain reporting, not an official spec page. Rubin Ultra NVL576 (~600 kW, H2 2027) per Data Center Dynamics (2025) is roadmap/reporting — treat as expected, not final (recent reports suggest possible design changes). Megawatt-class racks are a planning horizon before 2030, not a fixed spec. Air cooling is common at 5–15 kW/rack, with 30–40 kW a high-density/optimized edge; 100 kW+ makes liquid the main path._

_• CapEx: Schneider Electric, “Capital Cost Analysis of Immersive Liquid-Cooled vs. Air-Cooled Large Data Centers” (WP282) — system-level immersion model at 10/20/40 kW/rack, 2019/2020 cost basis: $6.98/W vs $7.02/W at equal density; $6.33/W (20 kW) and $6.02/W (40 kW) via compaction (~14% below air). Not generalizable to every project._

_• OpEx/TCO: PUE 1.5–1.8 implies ~0.5–0.8 kW facility overhead per kW-IT (cooling the bulk; industry figures put cooling at ~25–40% of total power). Well-designed liquid can reach PUE 1.03–1.08, depending on heat-rejection back end and climate. At 1 MW and $0.10/kWh, annual savings ~$0.40–0.63M depending on baseline PUE (~$0.50M at 0.57 kW/kW). On-site water savings of 90–98% apply when shifting from evaporative to low/zero-evaporation designs. System-level modeling shows immersion ~20% below air on 10-year TCO; high-density payback 1.6–2.2 years. Economic life/residual value “may improve” — no fixed year count claimed._

_• Reuse: ~100% of electricity ends up as heat; direct-to-chip typically captures ~70–80% of white-space heat load into ~50–60 °C water (full solutions may claim higher). European district-heating estimates: recovery plant ~€0.19–0.25M/MW vs ~€0.73M+/MW for new gas CHP; payback under 8–10 years within 1–2 km of a heat main. Greenhouse: studies/project estimates show large greenhouses meeting close to two-thirds of heating from waste heat (a 1 MW IT load ≈ one-third of an adjacent greenhouse, conservatively); Sweden’s Hive × Agtira 10,000 m² greenhouse is a public case, and RISE has related research. Amazon’s Denny Triangle (Seattle) heats offices using waste heat from the neighboring Westin Building Exchange data center. (The Green Grid; ScienceDirect; RISE; Amazon public materials)_

_• Metrics: ERE = (1 − ERF) × PUE, which can fall below 1.0 (The Green Grid WP#29); WUE and CUE are Green Grid xUE metrics (WUE denominator is IT equipment energy, in L/kWh); TUE = ITUE × PUE originates in lab/research work and is not a mainstream Green Grid metric._

_• Regulation (a European example; more in the power issue): Germany’s Energy Efficiency Act (EnEfG) sets minimum ERF for new data centers commissioned after 2026/2027/2028 at 10%/15%/20% (applies at ≥300 kW, with technical/economic-feasibility and compliance detail). (White & Case / Cundall)_

_• NextGenergy: warm-water systems since 2020; large-scale heat delivery since 2021; >1 GW deployed are internal totals. This follows “45°C Inlet Water,” “Warm Water, Longer Life,” and “Waste Heat Becomes an Asset.”_
