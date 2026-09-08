# CoolIT Just Sold for $4.75B — and It Tells You Why Cold Plate Won the New-Build AI Rack

> A water-and-chemistry giant just bought a cold-plate company. The number says less about who removes heat most aggressively — and more about where the real moat is moving.

- Author: Jim (Junming) Li, Founder & CEO, NextGenergy
- Published: 2026-07-03
- Web page: https://nextgenergy.ai/insights/coolit-just-sold-for-475b-and-it
- First published: https://everywattcounts.substack.com/p/coolit-just-sold-for-475b-and-it
- Tags: liquid-cooling, market, cold-plate

---

![](https://substackcdn.com/image/fetch/$s_!VhVR!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8cba1eb5-506e-4d91-86cf-15f9ebfee83d_1280x1280.jpeg)

On July 2, Ecolab closed its roughly $4.75 billion all-cash acquisition of CoolIT — ahead of schedule.

That deal tells you more about where new-build AI-rack cooling is heading than any spec sheet.

The buyer is Ecolab (NYSE: ECL, headquartered in St. Paul, Minnesota) — a global leader in water, hygiene and chemistry services, with about $16B in annual sales, ~48,000 employees, and operations across 170+ countries and 40+ industries. The seller is CoolIT — a company that grew from PC/HPC liquid cooling into a data-center direct liquid-cooling platform, today focused on cold plates, CDUs (Coolant Distribution Units), rack manifolds and field service. The price is roughly 29x CoolIT’s next-12-month adjusted EBITDA, and its year-to-date sales are up more than 100%.

A water, chemistry and service giant paid nearly 30x forward EBITDA to bet on direct-to-chip cold-plate cooling. That price tag carries two messages — and neither is about who removes heat most aggressively.

## What this acquisition is really saying

**First: in new-build AI, cold-plate DTC has become the default path for many new AI racks — and this deal just put a price on it.**

Look at who CoolIT is: a company that went from PC/HPC liquid cooling to data-center direct-to-chip (DTC), 25 years deep in liquid cooling, now focused on cold plates, CDUs, rack manifolds and field service. It has shipped 5 million-plus cold plates, deployed across 300+ data centers; its ecosystem spans server makers like Dell, HPE, GIGABYTE and Supermicro, with support across NVIDIA, Intel and AMD chip platforms. In June 2026 it launched its first 15kW cold plate — nearly 4x the previous generation of single-phase direct liquid cooling.

A buyer does not pay 29x forward EBITDA for a lab curiosity. It pays that price for a path that has entered the mass-deployment window — and that is being designed natively into this generation of AI servers.

**Second, the deeper thesis: the next moat isn’t the cold plate — it’s water and chemistry.**

Notice who the buyer is: not another thermal-hardware company, but a water-and-chemistry company with a sales-and-service network across 170+ countries. In Ecolab’s own words, the deal combines CoolIT’s CDUs and cold plates with Ecolab’s 3D TRASAR digital monitoring, advanced coolants and global service into an end-to-end “Cooling-as-a-Service” — managing everything from the chip-level thermal interface to the facility-level water loop, keeping thousands of liquid loops running across the server’s life while holding down corrosion, fouling, leaks, water-quality drift and maintenance risk.

In other words: liquid cooling is turning from a hardware business into a chemistry-and-service business. The cold plate is just the ticket; keeping the fluid healthy and the service running is what that $4.75B actually bought.

## Why cold plate won the new-build AI rack — a look back at something I wrote four years ago

![](https://substackcdn.com/image/fetch/$s_!pxxi!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F44d26370-7eae-4648-94cb-ff60091bfed4_1448x1086.png)

Here’s the twist: four years ago, this outcome wasn’t obvious.

In 2022 I wrote a piece comparing “water cooling (cold plate) vs. oil cooling (immersion)” — a note on names: back then the industry casually called cold plate “water cooling” and single-phase immersion “oil cooling.” At the time, in the retrofit market we were seeing, immersion and cold plate felt almost evenly split. And if you only ran the retrofit math of that era — moving existing air-cooled servers into liquid — immersion was the cheaper one:

— Retrofit cost: converting an existing air-cooled server to oil immersion just meant cleaning it and adding a fan emulator; converting to cold plate meant custom cold plates and tubing for every server — roughly an order of magnitude more, in our 2022 retrofit deployments.

— Flexibility: immersion is a tank — it holds servers by volume, and swapping in differently-shaped machines needs no re-engineering (within the tank’s volume); cold plate needs a custom plate per server, for life.

— PUE: fully immersed, oil cooling needs almost no extra mechanical cooling — PUE under 1.1, even 1.02–1.04 in cold climates (in our deployments); cold plate, because memory/PSU/NIC heat can’t sit on a plate and still needs air, is a liquid-plus-air hybrid, with real-world PUE around 1.15–1.25.

(These are field notes from 2022 brownfield-retrofit projects — not an industry average for 2026 new-build AI racks; see below.)

By that retrofit math, immersion should have won. But in new-build AI clusters, cold plate won. Why?

Because the ruler the market sorts by was never “who cools hardest” or “who has the prettiest PUE” — it’s “who lets me run for a full year and scale a whole fleet without drama”:

1\. Serviceability: when a cold-plate node fails, you close a valve, pull it, and fix it on the spot; with immersion you fish the server out of the oil, let it drip, clean it, then work. At 2am replacing a dead GPU, that difference is everything.

2\. The servers are already designed for cold plate: on a new rack like GB300 NVL72, roughly 90% of the heat is carried by liquid at the rack level and about 10% still goes to air. Liquid cooling has gone from a retrofit add-on to a factory design choice. CoolIT’s 300+ data centers and its roster of server-OEM relationships are the evidence this is now the default; immersion’s “cheaper to retrofit” edge simply doesn’t apply to new-build.

3\. Supply chain and standards: the cold-plate ecosystem is the most mature — quick disconnects (QDs), CDU interfaces and OCP reference designs are all moving toward standardization; immersion’s ecosystem is shallower, and “oil-soaked” gear still faces resale/warranty acceptance friction.

4\. Compliance: two-phase immersion has the highest heat-transfer potential, but is most exposed to PFAS/fluorinated-fluid compliance and supply shifts — 3M exited PFAS manufacturing (including fluorinated fluids) by the end of 2025, reducing long-term certainty for Novec-type fluids; replacements are emerging but still need scale validation.

In one line: in new-build AI, cold plate isn’t the one that cools hardest — it’s the one easiest to operate at scale. That’s the real reason it became mainstream.

## So is immersion done? No — its home turf just got clearer

Cold plate won the new-build mainstream, but immersion isn’t out; its home turf just got clearer:

— Brownfield retrofit & high density: a hall full of existing air-cooled servers going liquid — single-phase immersion is cheaper to convert, needs no server-specific cold plates, is more hardware-agnostic at the tank level, and offers very high space utilization. This is exactly its old stronghold from four years ago.

— Frontier extreme heat flux: two-phase immersion has the highest heat-transfer ceiling, good for frontier high-density pilots; compliant coolant is its barrier to scale.

— Heat-reuse grade: immersion can push return water above 60°C and lift the sellable value of waste heat — but today’s high-temperature cold plate / warm-water DTC can also deliver fairly high-grade heat (CoolIT’s 15kW cold plate cites a 45°C warm-water environment), so this one has to be re-run per project.

And a counter-intuitive point worth saying in immersion’s defense: physical reversion can actually be easier. Cold plate is custom per server, for life, and swapping or reselling often means re-engineering; reverting immersion to air means reinstalling fans and cleaning off the dielectric fluid. Note: that is the physical recovery path, not the market residual value — the real friction is not technical, but the secondhand market’s acceptance of gear that has been immersed.

So this isn’t “who kills whom” — it's matching. New-build designed for liquid points to cold plate; a hall of air-cooled servers means running the immersion math first; extreme heat flux and high-grade heat reuse each shift the answer — the full picture is in the matrix below.

![](https://substackcdn.com/image/fetch/$s_!ybxB!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5159fbe2-bbc8-4bdb-90d3-d23e9a7e70dd_1448x1086.png)

## The real takeaway

![](https://substackcdn.com/image/fetch/$s_!sz3m!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6fc44ac5-23ac-4de8-94ae-74536ac4ef6b_1672x941.png)

Ecolab’s acquisition of CoolIT makes two things clear at once.

First, cold plate became mainstream in new-build AI not because it transfers the most heat, but because it carries the least operational friction. Public research consistently lists cost, deployment complexity, leak risk, lack of standards and ops skills as the main barriers to liquid-cooling adoption — none of them is “cooling capacity.” The market rewards the path that runs for ten years without drama, not the one that’s fiercest in the lab.

Second, winning the route is only step one; the next contest is in the fluid and the service. Ecolab didn’t just buy cold plates — it bought the ability to package hardware, fluids, water chemistry, monitoring and global service together. Which is exactly what I keep arguing: when cold plate / DTC can push supply and return temperatures higher, a data center gets the chance to cut make-up water with dry coolers while — in the right climate and system design — holding a decent PUE; and the higher the return-water temperature, the more waste heat can move from an “ESG story” to “heat you can sell.” (Per the reference model in OCP’s Reference Designs for Data Center Heat Reuse, raising supply-water temperature by ~15K improves the heat-reuse business case by roughly 30% — see Appendix III.)

Four years ago, I was running the retrofit math: who could move existing air-cooled servers into liquid fastest and cheapest — and immersion clearly won. What Ecolab/CoolIT is telling us today is a different ledger: when servers ship designed for liquid, what the market buys isn’t “cheap to retrofit” — it’s “stable for ten years, serviceable worldwide, fluid you can manage.”

Cold plate won this round of new-build. But the real race just shifted from “whose cold plate is best” to “whose fluid and service you can trust to run for ten years.” And that’s exactly what a water company just paid $4.75 billion to tell everyone.

## Before you pick a side

Next time someone asks you “cold plate or immersion?”, don’t rush to pick a team. Ask three questions first:

1\. New-build, or retrofitting existing kit? (New-build designed for liquid → cold plate; a hall of air-cooled servers → run the immersion math first.)

2\. Who maintains the fluid and water quality? (If your team cannot handle retrieval, cleaning, fluid management and chemistry control, don’t force immersion.)

3\. Is waste heat a revenue stream, or just an ESG story? (If revenue: look hard at supply temperature, annual heat load and distance to the heat user; single-phase immersion and high-temp DTC both need to be re-run.)

The right cooling method is never the one that cools hardest — it’s the one that matches your constraints.

I break down one “heat and power” topic like this every week in Every Watt Counts. If this was useful, subscribe — the next one is on why power, not the chip, is the real ceiling.

##### Sources & Notes

_\- Ecolab / CoolIT acquisition: Ecolab press releases on the March 20 announcement and July 2 closing (~$4.75B, all-cash, from funds managed by KKR; ~29x next-12-month EBITDA; Ecolab targets $4B High-Tech sales by 2030)._

_\- CoolIT operating metrics: CoolIT company materials, including 5M+ cold plates shipped, 300+ data centers, and the June 2026 15kW cold plate announcement._

_\- GB300 NVL72 thermal split: OEM rack guide indicating roughly 90% liquid / 10% air heat capture at rack level._

_\- PFAS / fluorinated fluids: 3M PFAS exit announcement and related fluorinated-fluid supply context._

_\- Heat reuse: OCP, Reference Designs for Data Center Heat Reuse, Appendix III._

_\- 2022 retrofit cost and PUE figures are my field notes from brownfield retrofit projects, not 2026 new-build industry averages._
