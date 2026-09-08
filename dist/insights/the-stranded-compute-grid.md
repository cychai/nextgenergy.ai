# The Stranded Compute Grid

> The AI industry is obsessed with the data centers it has not built yet. The bigger story may lie in sites where the power position is already secured, but the compute capacity has yet to be unlocked.

- Author: Jim (Junming) Li, Founder & CEO, NextGenergy
- Published: 2026-07-13
- Web page: https://nextgenergy.ai/insights/the-stranded-compute-grid
- First published: https://everywattcounts.substack.com/p/the-stranded-compute-grid
- Tags: power, grid, siting

---

![](https://substackcdn.com/image/fetch/$s_!1CLp!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2531767e-f7f7-4a1b-844f-ff03da748762_1672x941.png)

## The inventory nobody brags about

Every week brings another rendering of a gigawatt campus — the image is finished; the power and the campus may not arrive until around 2029. By iMasons’ count, the industry plans to build more capacity in the next three years than it built in the past thirty. Meanwhile, almost nobody talks about what it built in those thirty.

Two numbers, deliberately kept apart because they measure different things. By Cloudscene’s directory count, there are more than **11,700 operating data center listings** worldwide, about 5,427 of them in the United States — a count of sites, which says nothing about how big each one is or whether it can be upgraded. On the capacity side, JLL estimates global data center capacity at about **103 GW in 2025**, heading toward 200 GW by 2030. Different yardsticks, same message: the AI era is not starting from a blank page. A vast base of facilities and power already exists.

One structural shift inside that base: by Synergy’s capacity measure, the share of global capacity held by enterprise-owned facilities has fallen from about 56% around 2018 to 32% at the end of 2025. Some of that aging, low-density enterprise stock is being released by cloud migration and consolidation. Whether any given site is worth reusing is a separate question — one that has to be answered site by site, based on power availability, structural capacity, cooling and network connectivity.

## What this essay is actually about

Before going further, a definition — because the opportunity is broader than old server halls. The asset pool this series cares about is any site with a verifiable, executable power position: legacy data centers, crypto-mining facilities, retired industrial sites, and development sites that have secured a power path but have not yet been built out. They are very different asset types. What they share is the resource AI projects now find hardest to secure quickly: electricity already delivered — or a locked-in, executable path to it. Traditional data centers are the most tangible, and most overlooked, subset of that pool — and the one this essay starts with.

## An aging fleet entering its renewal window

In Uptime Institute’s 2024 survey sample, the average facility is 11.3 years old and 48% of sites have been running for more than a decade; weighted by IT capacity, the share is 38%. Either way, a substantial part of the installed base is entering a systematic renewal window — the point at which owners begin to face major replacement decisions about power and cooling systems, regardless of what AI does.

Now set that against what AI hardware asks for. In Uptime’s 2025 survey, 82% of surveyed operators reported having no rack above 30 kW anywhere in their facility, and the most common rack density averaged about 9 kW across the sample. A GB300 NVL72 rack runs at roughly 132–135 kW nominal, with peaks around 155 kW depending on OEM and configuration. The gap between what these buildings were built for and what the market now pays for is not a gap. It is a canyon — and it has to be assessed site by site.

But watch what owners are already doing: among surveyed owners and operators already hosting AI workloads, 52% have upgraded power distribution and 51% have upgraded cooling (Uptime, 2025). The retrofit wave is not a forecast. It is underway.

![](https://substackcdn.com/image/fetch/$s_!Lf4b!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F06c8de01-85dd-4c9b-99bd-b90ae09a88af_1448x1086.png)

## Why location still matters

There is a second asset much of the existing fleet has that money cannot quickly buy: location. These buildings grew up around cities and network exchange points — which is why Northern Virginia alone holds about 4,040 MW, roughly 3.5 times all U.S. secondary markets combined, with a vacancy rate of about 0.5% (CBRE, H2 2025). New training campuses, meanwhile, chase power: in Bloom Energy’s 2025 industry survey, 84% of respondents ranked power availability among their top three siting criteria.

Training site selection is rarely constrained by end-user latency. Inference is different — shaped by user experience, data gravity, sovereignty and network cost. JLL expects inference to become the dominant AI demand by 2027; Deloitte estimates it will account for about two-thirds of AI compute as early as 2026. That does not mean inference will all move to the edge: large regional centers, colocation facilities, on-premises AI factories and edge nodes will share the load. What it does mean is that regional sites close to users and network hubs — with verifiable power — are being repriced.

## The market has already voted

If this sounds like a thesis waiting for evidence, look at who signed the biggest AI infrastructure deals of the past twelve months — and read the megawatts carefully, because gross site power and critical IT load are different numbers.

Three deals tell the story — one for each asset type.

**The first: a decommissioned industrial site.** On July 6, 2026, TeraWulf signed a 20-year lease with Anthropic covering 401 MW of critical IT load and expected to generate roughly $19 billion in contracted revenue. The project will occupy the former Century Aluminum smelter site in Hawesville, Kentucky, where approximately 480 MW of power is already available. Initial capacity is targeted for the second half of 2027.

**The second: a mining conversion.** The same day, Galaxy announced completion of phase one of Helios, a converted West Texas mining site: approximately 200 MW of gross site power supporting 133 MW of critical IT load delivered to CoreWeave, as part of 526 MW of IT capacity contracted under 15-year leases. Galaxy’s CEO calls AI-ready power a structural shift, not a cycle.

**The third: development land with a locked-in power path.** AWS signed two 15-year leases with Cipher Mining, worth approximately $7.5 billion combined — Black Pearl, announced at 300 MW capacity, and Stingray, estimated from public project-debt disclosures at approximately 100 MW gross and 70 MW critical IT. The latter was signed while the site was still undeveloped: AWS was not leasing a finished building; it was leasing a locked-in power path (per Measured AI’s public teardown of the project filings).

The pattern repeats across the year’s other major deals: IREN’s roughly $9.7 billion agreement with Microsoft; Hut 8’s approximately $7 billion lease with Fluidstack, backed financially by Google and supporting Anthropic workloads; and Applied Digital’s approximately $11 billion in expected lease revenue from CoreWeave. The market is paying long-term premiums for deliverable power, speed to deployment and critical IT capacity. Many of the companies in this ecosystem began in crypto mining — CoreWeave itself started with mining infrastructure in 2017 and reported a $99.4 billion revenue backlog as of March 31, 2026; Applied Digital was literally named Applied Blockchain until 2022. Wall Street’s new job title for them: the power landlords of AI.

Look at the mix of asset types: a converted mining site, a retired smelter, power-secured development land. They are not the same kind of asset; what they share is a shorter, bankable path to power. Capital in these deals is also buying land, permits, fiber, build capability and credit — but the power position increasingly anchors the asset’s value. A caution before moving on: these deals prove the premium on power positions. They do not automatically prove that every old building is worth retrofitting. Whether the building itself can carry high density is the next calculation.

## What density actually buys you

Here is arithmetic worth doing carefully, because it is strong enough without exaggeration.

Under legacy data-hall assumptions — 150 watts per square foot and 5 kW per rack — 1 MW of IT load requires approximately 6,700 square feet of white space and 200 racks. On a static TDP basis, deploying the same 1 MW of IT load with liquid-cooled AI racks rated at approximately 132–135 kW would require only **seven or eight compute racks**. Rack count — and much of the white-space requirement — can shrink by an order of magnitude. The whole building does not: power distribution, CDUs, pumps, maintenance aisles, structural reinforcement and redundancy all claim space back. The honest claim is that 200 racks can become eight — not that four floors can become half a floor.

![](https://substackcdn.com/image/fetch/$s_!u-lB!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb74c4063-d2ac-450b-945f-52f7f2fab37e_1672x941.png)

Real projects are testing exactly this. Patmos is converting the Kansas City Star’s 400,000-square-foot printing plant into a planned 100 MW-class high-density facility. The site is being brought online in stages and is designed to support racks of up to 100 kW. Digital Realty says more than half of its roughly 170 data centers support liquid cooling; Equinix has announced deployments across about 100 facilities in 45 cities. And the weight matters: a fully configured GB300 NVL72 weighs in at about 1.5 metric tons (HPE figure). On a raised floor, that creates a point-load issue that every project must verify against OEM specifications. Cases so far show that some structurally suitable older buildings can carry high density with targeted reinforcement. Whether any specific one can is, again, a site-by-site question.

One more number to keep us honest: Galaxy’s Helios phase one pairs about 200 MW of gross site power with 133 MW of critical IT load — a planned configuration ratio of roughly 1.5. **That is not a PUE, and it does not mean 67 MW is continuously consumed by cooling**: the difference covers power-distribution architecture, redundancy, auxiliary systems and design margin. Density is half the story. How much of a site’s gross power becomes sellable IT load is the other half. That is the focus of Issue 12.

## Naming the pattern: the Stranded Compute Grid

Put the pieces together — but keep the assets distinct. Legacy data centers offer urban locations, network connectivity and existing buildings. Mining sites and retired industrial plants offer large-scale power access, land and heavy electrical infrastructure. Power-secured development land comes with the hardest things to replicate: permits and a defined delivery timeline. They are not the same asset, and they do not share every advantage. What connects them is one scarce resource: a power position that can be converted into critical IT load within a predictable, bankable timeframe.

I call this dispersed asset network the **Stranded Compute Grid (SCG)**. The Grid is a metaphor for an asset network, not the electric grid. And what is stranded is not installed GPUs — it is power and facility capabilities that could become compute, but has not yet been physically unlocked.

Four locks hold it in place: whether power is truly deliverable; whether heat can be rejected; whether structure and space can carry the load; and whether the network, operational and commercial layers can aggregate dispersed sites into a sellable service. Only when all four are unlocked can a collection of sites be turned into sellable, schedulable, SLA-grade AI-ready capacity.

That is the real scarcity in AI infrastructure: not just new campuses, but power positions that can be converted into critical IT load within a predictable timeframe. The world already has a large stock of them. Trapped, not absent.

## A parallel path

None of this is an argument against building new. Gigawatt-scale campuses will still be built, and the largest players are pushing past the power ceiling through on-site generation and nuclear power agreements. But the conventional path is constrained at both ends: JLL estimates average grid-access waits in major data center markets now exceed four years, while upstream, LBNL’s count of the U.S. generation interconnection queue — a different queue — stood at 1,312 GW of generation plus 749 GW of storage at the end of 2025. Separately, Data Center Watch’s compilation of public projects tallies over $150 billion of proposed investment blocked or delayed by local opposition in 2025. Waiting for new power, new transmission and new campuses to align is getting less predictable, not more. These stranded assets are not a replacement for greenfield development. They are a parallel path — often a faster one.

Two honest caveats. Retrofits still have to earn community acceptance: in July 2026, the Planning and Zoning Commission in Tyler, Texas, denied a permit for a mining-site data center, while a proposed big-box conversion in Milwaukee triggered community opposition and a stricter zoning review. Power-secured land is scarce; power-secured land that communities will accept is scarcer. And making an old site AI-ready is physical work — power, liquid cooling, retrofit design, heat recovery. The network and aggregation layers above it will come from operators and platforms across the industry. Our work and this series sit at the physical layer: enabling power-secured sites to support high-density compute, deploy liquid cooling and recover heat — and ultimately become AI-ready.

Not every old building qualifies. Some sites hold stranded capacity; others are simply dead weight. Distinguishing between the two before writing the check is a discipline. Next issue: **the Retrofit Readiness Stack** — the seven-layer site audit that separates the two.

**The fastest megawatt is often the one already plugged in. Don’t just build the next compute grid — unlock the one that is already stranded.**

**Make every watt count.** If this series is useful, subscribe. Issue 11 is next: a seven-layer audit for determining whether an old site can actually be retrofitted.

_— Jim Li, founder of NextGenergy, focuses on power, cooling, and energy reuse for AI compute infrastructure. He is working to move next-generation AI data centers beyond single-point equipment optimization toward integrated system design across power, liquid cooling, and heat recovery._

##### _Sources & Notes_

_\- MW glossary used throughout: utility capacity = contracted grid supply; gross (site) power = total site electrical capacity; critical IT load = power deliverable to IT equipment. Contract figures are labeled as contract value, expected contracted lease revenue, or revenue backlog, using each company’s own terminology. These measures are not interchangeable._

_\- Fleet count: Cloudscene directory (11,700+ operating listings; ~5,427 U.S.), via Statista (2025). Directory entries reflect site counts, not capacity or retrofit value. Capacity: JLL 2026 Global Data Center Outlook (103 GW in 2025 → ~200 GW by 2030). Enterprise share: Synergy Research, by MW (about 56% around 2018 → 32% end-2025). Three-year-versus-thirty-year construction comparison: iMasons State of the Digital Infrastructure Industry 2026._

_\- Age and density: Uptime Institute Global Data Center Survey 2024 (average 11.3 years; 48% of sites >10 years; 38% weighted by IT capacity; survey sample, not a global census) and 2025 Annual Survey (82% of surveyed operators report no rack above 30 kW; average of the most commonly reported rack densities: ~9 kW). Upgrades: Uptime AI Infrastructure Survey 2025 (among owners/operators already hosting AI, n≈71: 52% upgraded power distribution, 51% upgraded cooling). Equipment service-life ranges (UPS ~10–12 yrs, chillers ~20 yrs) are common industry planning ranges, not fixed end-of-life._

_\- Location and inference: CBRE North America Data Center Trends H2 2025 (Northern Virginia 4,039.6 MW inventory; vacant capacity ~21.5 MW, vacancy rate ~0.5%); Bloom Energy 2025 Data Center Power Report (84% of surveyed industry decision-makers). Inference outlook: JLL 2026 Outlook (inference dominant by 2027); Deloitte TMT Predictions 2026 (~two-thirds of AI compute in 2026, with most inference still in large data centers and on-prem AI factories, not edge devices)._

_\- Deals, per company releases and SEC filings: CoreWeave Q1 2026 ($99.4B revenue backlog as of March 31, 2026); IREN 8-K (Microsoft, ~$9.7B, 5 years, ~200 MW IT, November 2025); Hut 8 release (245 MW IT, 15 years, ~$7.0B contract value; Google financial backing; Anthropic workloads, December 2025); Cipher–AWS: Black Pearl 300 MW capacity per Cipher SEC filing (~$5.5B), Stingray ~100 MW gross / 70 MW critical IT and combined ~$7.5B per Measured AI’s public reconstruction of project-debt disclosures (measuredai.substack.com, July 2026) — reconstructed, not company-published; Applied Digital release (400 MW critical IT across three CoreWeave leases; ~$11B expected contracted lease revenue); Galaxy release dated July 6, 2026 (Helios phase one completion announced: ~200 MW gross / 133 MW critical IT delivered to CoreWeave; 526 MW IT / 800 MW gross under 15-year leases); TeraWulf release and 8-K (Anthropic, 401 MW critical IT, 20 years, ~$19B expected contracted revenue, July 6, 2026; former Century Aluminum site in Hawesville, ~480 MW of existing power availability at the site, initial capacity targeted for 2H 2027). Note: CoreWeave’s proposed acquisition of Core Scientific was terminated by shareholder vote in October 2025._

_\- Density arithmetic: legacy assumptions ~150 W/sq ft and ~5 kW racks (Schneider/APC white papers; Uptime surveys); GB300 NVL72 ~132–135 kW nominal / ~155 kW peak and ~1.5 metric tons in a full configuration per Lenovo and HPE product guides — the 1 MW worked example (200 racks vs 7–8 racks) is illustrative white-space arithmetic only; support space, structure and redundancy are additive. Future rack roadmaps point to several-hundred-kW and MW-class racks (NVIDIA 800 VDC roadmap, from 2027); product timing may change. Patmos / Kansas City Star conversion per Business Wire (November 2024) and trade coverage (staged delivery; racks up to 100 kW). Digital Realty: more than half of ~170 data centers support liquid cooling (Reuters, 2025). Equinix: announced deployments across ~100 data centers in 45 cities (December 2023)._

_\- Queues and opposition: JLL 2026 Outlook (average grid-access wait in major data center markets exceeds four years); LBNL Queued Up 2026 (generation interconnection queue: 1,312 GW generation + 749 GW storage at end-2025; median application-to-COD for completed projects >5 years — a generation-side queue, distinct from data center load interconnection); Data Center Watch (2025 compilation of public projects, $150B+ blocked or delayed, disclosed-investment basis). Tyler, TX: planning and zoning commission denied special-use permit 5–2 (July 2026); Milwaukee former-Walmart conversion facing community opposition and stricter zoning review (July 2026), outcome pending. Public benchmarks are directional, not universal._
