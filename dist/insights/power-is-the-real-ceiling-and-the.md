# Power Is the Real Ceiling — and the Fastest Megawatt Is Already Plugged In

> Not for lack of capital — but because capital could not turn into usable megawatts fast enough.

- Author: Jim (Junming) Li, Founder & CEO, NextGenergy
- Published: 2026-07-06
- Web page: https://nextgenergy.ai/insights/power-is-the-real-ceiling-and-the
- First published: https://everywattcounts.substack.com/p/power-is-the-real-ceiling-and-the
- Tags: power, grid, retrofit

---

![](https://substackcdn.com/image/fetch/$s_!gQId!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff6f0a80b-e6b5-4c46-9c65-3baab858d77d_1672x941.png)

Two headlines, read together, say more than any AI-capex announcement.

**First:** a data center campus large enough to draw small-city-scale power stalled out. QTS moved to terminate the Prince William Digital Gateway project in Virginia and withdraw its associated filings — a roughly 2,000-acre, 22-million-square-foot site that could have become one of the largest data center campuses ever proposed. What stopped it wasn’t money. It was years of local opposition, litigation and regulatory review, stacking up and holding the project back before it ever delivered a megawatt.

**Second:** Brookfield and Bloom Energy expanded the financing framework behind their AI-infrastructure power projects from $5 billion to $25 billion — part of Brookfield’s roughly $100 billion AI Infrastructure Fund. In other words, capital is moving closer to the data center because the grid cannot move fast enough.

One project where capital could not become capacity. One financing framework built to move generation closer to load. Both point at the same truth the AI-capex headlines keep missing:

**The ceiling on AI isn’t the chip. It isn’t even the cooling. It’s the power** — and, more precisely, how fast you can get usable megawatts to the rack.

## The math nobody is doing

When people talk about the AI race, they count GPUs, parameters and funding rounds. But what actually stalls a gigawatt-scale campus is the stuff that never makes the headlines:

-   In the US, the average wait for a grid interconnection is about **four years**. In Northern Virginia, connecting a 100 MW load averages about **seven years**. _(iMasons SOTI 2026)_
    
-   In 2025, more than **$150 billion** of disclosed US data-center investment was blocked, delayed or caught up in local opposition, moratoriums and litigation. _(Data Center Watch)_
    
-   Lead times for transformers and generators are now measured in **years**.
    
-   AI has compressed project timelines from 24–36 months down to 12–18 — while the interconnection queue only gets longer.
    

Capital markets can announce a $25 billion financing framework in a day. Nobody can conjure the megawatts on the same timeline.

![](https://substackcdn.com/image/fetch/$s_!tYCj!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcc87bb10-ce97-4ac7-8c6f-9d959f0fc43d_1672x941.png)

## Path A: bring your own supply — the capital-heavy path

When the grid cannot connect fast enough and capital will not wait, the richest players’ answer is to bring power closer to the load.

The industry already has a blunt name for it: **BYOP — Bring Your Own Power** (a direction Vertiv’s Peter Panfil has repeatedly championed): UPS, batteries and fuel cells wired into an always-on microgrid. And the giants go further — they’re turning into energy companies. Alphabet has completed a roughly **$4.75 billion** acquisition (cash plus assumed debt) of Intersect Power, binding data centers, generation and land development more tightly together. Google has signed for up to **500 MW** of advanced nuclear from Kairos (first units targeted for 2030, more through 2035). Meta has nuclear agreements totaling up to **6.6 GW** (out to 2035). Microsoft, via Constellation, is backing the 835 MW restart of Three Mile Island Unit 1 / the Crane Clean Energy Center. Amazon has secured up to **1.92 GW** from Talen’s Susquehanna plant and is funding X-energy’s small modular reactors.

Worth naming an honest tension: even Google, which has long championed 24/7 carbon-free energy, is — according to reporting from Axios and others — evaluating more natural gas as AI power demand outruns the pace of clean supply. That’s how scarce power has become.

This path can route around part of the interconnection bottleneck (fuel cells and mobile turbines can even beat the grid). But it is not a free lunch: fuel supply, emissions permits, equipment delivery, paralleling and protection, long-term offtake or asset recovery — each costs money, time and a specialist team. A 350 MW gas plant is a hundreds-of-millions-of-dollars project; once you add gas interconnection, permitting, EPC, operations and asset recovery, it stops being “bridge power” and becomes a long-term energy asset. Nuclear and geothermal timelines run years out; fusion is even further from near-term supply. Fundamentally, this path turns capital into power supply — but only with time, permits, fuel, equipment and execution risk attached.

So what about everyone who isn’t that rich — and can’t wait a decade?

## Path B: reuse the power that already exists (the lighter, faster one)

This is the path still hiding in plain sight: **stop conjuring new power. Use the power that already exists, more intelligently.** There are three ways to do it.

![](https://substackcdn.com/image/fetch/$s_!DavS!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F698e0aa9-7892-4515-a7d9-d40688a8cfd2_1672x941.png)

### 1\. Reuse the site — a Stranded Compute Grid

Many legacy data centers already have the hardest assets to secure: **power, interconnection, land and a usable facility shell**. What they lack usually isn’t power — it’s the upgrade to high-density distribution, liquid cooling, structure, networking and operations.

When the site passes the audit, retrofitting can be far faster and far cheaper than building new:

-   By one public retrofit benchmark (STL Partners), a liquid-cooling retrofit runs about **$2M/MW** versus roughly **$11M/MW** for new greenfield capacity — a headline capex reduction of about **80%**. Real outcomes still depend on downtime, migration, structural reinforcement and piping.
    
-   As an industry-reported example, a pharmaceutical company retrofitted a 2008-vintage hall to run 800 NVIDIA H100s for about **$4.2M**, versus roughly **$35M** to build new. (A single case, not an average.)
    
-   Most important: an existing site is **already interconnected**, so a retrofit skips the four-to-seven-year queue.
    

One level up: use **IP over DWDM / DCI (data center interconnect)** to link several nearby sites into a single, centrally orchestrated compute pool. The point is _not_ to disguise them as one low-latency training cluster — synchronous pre-training across a wide-area network has real latency and bandwidth limits. The point is to turn scattered, stranded capacity into an orchestrated **distributed AI compute pool**: ideal for inference, fine-tuning, batch jobs, elastic training and any splittable workload. Physically dispersed, logically scheduled.

I call this a **Stranded Compute Grid**: older data centers that already have power, interconnection and land — but lag on density, cooling and power architecture — revived through liquid-cooling retrofits, power upgrades, DCI links and unified orchestration into a distributed AI compute network.

In one line: **Don’t wait for new megawatts. Reclaim the ones already plugged in.**

None of this is a coat of paint. A legacy floor may only carry 150 psf, while a liquid-cooled rack tops 3,000 lb; piping, leak detection, heat-reuse tie-ins and structural reinforcement all have to be designed in. That’s exactly why this is an engineering problem, not a procurement one — and why whether a site _can_ be converted depends on whether someone actually knows how.

### 2\. Reuse the redundancy — hot-standby economics

This one is more counterintuitive. To achieve redundancy, many high-availability data centers carry a second power path, backup generation, UPS or storage. The problem: those redundant assets sit **underused most of the time** — pure cost.

In some site designs, you can pair **on-site generation, storage and a fully interruptible load**: in normal operation, the interruptible load absorbs that power and lets the idle backup asset earn its keep; the moment primary supply falters, the system sheds that load per its protection scheme and hands the power to critical IT without interrupting the critical load.

**So backup capacity that used to be pure cost becomes a schedulable, monetizable hot standby.** This isn’t a swap for certified Tier III design — the Tier definitions and certification are strict. It’s a new resilience-and-economics design: turning backup from a cost line into an asset you can dispatch and monetize. (How, another day.)

### 3\. Reuse the watt — more compute per megawatt

The first two are about getting _more usable power_. This one is about making _each watt you already have_ do more work.

-   **Power decides how many watts you get; cooling decides how many of them become compute.** When total power is capped, PUE isn’t a vanity number — it’s how you allocate IT load. On a site capped at 100 MW, all else equal, taking PUE from 1.20 to 1.10 raises the supportable IT load from about **83 MW to about 91 MW** — roughly **8 MW of additional IT load**. That is GPU capacity you recovered without building a single new megawatt.
    
-   Rack density is climbing from 15 kW toward 600 kW, forcing power delivery from 415 V AC toward 800 V DC. By NVIDIA’s published figures, the same copper carries about **85%** more power at up to about **5%** better end-to-end efficiency — pointing straight at the 1 MW+ rack.
    
-   And there’s heat: when power is this expensive, turning reject heat from a disposal cost into a sellable output (district heating, process loads) stops being a sustainability footnote and becomes part of the power economics.
    

## The questions actually worth asking

-   Is your next AI project bottlenecked on compute, on cooling — or on that four-to-seven-year interconnection queue?
    
-   Do you have a “stranded” older site sitting on power and land, one retrofit away from useful AI capacity?
    
-   Is your idle backup redundancy pure cost, or could it become a revenue-generating hot standby?
    
-   When power is the ceiling, are you treating compute-per-watt — cooling, PUE, heat reuse — as your second power source?
    

Chips will keep getting faster, generation after generation. The power that runs them will not multiply overnight.

**Capital builds power slowly. Engineering reuses it now.** In the AI era, the winner will not be whoever buys the most GPUs. It will be whoever turns the same megawatt into the most useful compute.

Make every watt count.

_— Jim Li, founder of NextGenergy, focuses on power, cooling, and energy reuse for AI compute infrastructure. He is working to move next-generation AI data centers beyond single-point equipment optimization toward integrated system design across power, liquid cooling, and heat recovery._

##### Sources & Notes

_– QTS moved to terminate the Prince William Digital Gateway and withdraw associated filings; ~2,000 acres / 22M+ sq ft, “among the largest campuses ever proposed”; background of years-long local opposition, litigation and regulatory review — WTOP, Reuters, Washington Times (July 2026)._

_– Brookfield × Bloom Energy expanded the financing framework for AI-infrastructure power projects from $5B to $25B (June 30, 2026; part of Brookfield’s ~$100B AI Infrastructure Fund — not “already deployed”) — Bloom Energy press release, DCD._

_– US interconnect ~4y / Northern Virginia 100 MW ~7y; rack density 15 kW → 600 kW → 1,500 kW; timelines 24–36 → 12–18 months — iMasons, State of the Digital Infrastructure Industry 2026 (see report body)._

_– 800 VDC: per NVIDIA’s published 800 VDC guidance — same copper carries ~85% more power at up to ~5% end-to-end efficiency gain, pointing toward 1 MW+ racks._

_– $150B+ of disclosed US data-center investment blocked, delayed or caught in local pushback in 2025 — Data Center Watch (disclosed-investment basis, not “spent”)._

_– Retrofit ~$2M/MW vs greenfield ~$11M/MW (~80% lower headline; real cost depends on downtime, migration, structure, piping) — STL Partners; Data Centre Review (June 2026). Pharma $4.2M vs $35M / 800× H100 is an industry-reported single case._

_– Hyperscaler energy moves: Alphabet completed its ~$4.75B acquisition of Intersect Power (cash + assumed debt; definitive agreement Dec 22, 2025; closed Mar 10, 2026; Intersect kept as a separate brand under Sheldon Kimber; Google previously held a minority stake) — Cleary Gottlieb, Alphabet IR. Google–Kairos up to 500 MW (2030, through 2035); Meta up to 6.6 GW nuclear (through 2035); Microsoft/Constellation TMI Unit 1 / Crane 835 MW restart; Amazon Talen/Susquehanna up to 1.92 GW + X-energy SMRs. Google evaluating more natural gas — reported by Axios and others (April 2026)._

_– IP over DWDM / DCI links multiple sites into an orchestrated compute pool (not a low-latency training cluster) — Nokia/Huawei/RAD DCI; arXiv geo-distributed AI training._

_– BYOP — Vertiv (Peter Panfil, VP Global Power) + Generate Capital “Bring Your Own Power & Cooling.”_

_– Honest boundaries: Tier definitions and certification are strict — “reuse the redundancy” is a new resilience-and-economics design, not a replacement for certified Tier III; nuclear and geothermal timelines run years out and fusion is further from near-term supply; retrofits are constrained by floor loading, piping, structure, networking and operations. Any project economics should be re-run site by site — public benchmarks are directional, not universal._
