# Waste Heat Becomes an Asset

> How warm-water AI data centers turn cooling from a cost into a revenue line — and what we learned heating real buildings with it.

- Author: Jim (Junming) Li, Founder & CEO, NextGenergy
- Published: 2026-06-29
- Web page: https://nextgenergy.ai/insights/waste-heat-becomes-an-asset
- First published: https://everywattcounts.substack.com/p/waste-heat-becomes-an-asset
- Tags: heat-reuse, return-water, community

---

![](https://substackcdn.com/image/fetch/$s_!wwKH!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9c68c192-08de-435b-bbff-8e2e69477a6b_1672x941.png)

This is the third of a trilogy. The first issue argued warm water is cheaper to run; the second, that it’s kinder to the hardware. This one is about the third return — the one that changes a data center’s place in the world: the reject heat itself can become a product.

We learned that early. We began using recovered data-center heat in 2020, and by 2021 we were delivering it at larger scale into real buildings — community housing in a town, a kindergarten, a hospital, and industrial facilities — through real winters. Not a concept diagram, not a pilot loop on a slide. Real pipes, real buildings, real people walking on warm floors. The photo below with the infrared gun is one of those floors, measured warm under bare feet. Not a render.

![](https://substackcdn.com/image/fetch/$s_!CeMH!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdeb5b3af-7546-4134-bcd8-287b51db6279_1672x941.png)

Caption: A home floor warmed by recovered data-center heat — measured under bare feet, in a real winter. Since 2020.

These experiences changed how I think about these buildings. Thermodynamically, a data center is a giant electric heater that happens to do math on the way through. The question was never whether the heat exists — it’s whether it leaves as a low-grade waste stream you pay to throw away, or as a useful product someone nearby can actually use. For decades the business model was simple: buy power, make heat, then pay again to throw the heat away. The reason isn’t the amount of heat — it’s the grade of the heat.

## Why air cooling wastes the heat

Heat has a quality, not just a quantity, and the quality is temperature. High-grade heat — hot, concentrated, in a pipe — is worth something. Low-grade heat — lukewarm, diffuse, spread through a moving wall of air — is worth very little, because by the time you’ve upgraded it to something a buyer can use, you’ve often spent more on the upgrade than the heat is worth.

Air cooling tends to produce the low-grade kind. It pulls heat off the chips into a large volume of air, and what leaves the back of the hall is diluted and below the temperature band most heat buyers want. You can still recover it — Meta’s Odense facility does exactly this, lifting low-grade air-side heat with heat pumps to feed a district network — but the heat-pump lift costs electricity, and that extra cost is what has kept most air-cooled sites from bothering. So the heat is rejected to ambient through a cooling tower, dry cooler, or other heat-rejection equipment, and the data center stays what it has always been on the books: a pure cost center that also happens to be a heat island.

> The heat was always there. Air cooling made it diffuse, low-grade, and hard to monetize.

![](https://substackcdn.com/image/fetch/$s_!1wP8!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F38fe6a22-aeb6-4925-ae95-9f96c1d376bb_1672x941.png)

## Warm water is what makes the heat worth capturing

This is the quiet payoff of the warm-water architecture from the first two issues. Cool with liquid instead of air and you don’t dilute the heat — you keep it concentrated in a pipe, at a temperature you can actually do something with.

But let’s be precise. Warm water doesn’t make heat valuable by magic. It keeps the heat concentrated, hot enough, metered, and contractable — so someone else can use it. Cold-plate loops carry heat away as hot water around 50–60°C; in our own systems we deliver it at about 55°C, and immersion can return fluid above 60°C. Modern low-temperature district networks — the 4th-generation systems being built across Europe — typically want supply somewhere around 50–70°C. Exact numbers vary by network, season, and how old the buildings are, but the direction is unmistakable: warm-water output often lands inside the band a buyer wants, with little or no heat-pump lift. The same architectural choice that lowered your power bill and extended your hardware just turned your reject heat from a liability into a feedstock.

![](https://substackcdn.com/image/fetch/$s_!kuNR!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff3ab3604-adc0-4d27-9726-8207971d1cb0_1672x941.png)

## We didn’t wait for a mandate

We built our first immersion systems in 2020 and moved into large-scale heat delivery in 2021. Those deployments taught us three things the brochures skip.

**First, temperature alone isn’t the story.** A properly designed building-side system can use steady ~55°C water even through extreme cold — including −30°C winters — because the supply is continuous. The point isn’t that the water is scalding; it’s that the heat is stable, predictable, and available twenty-four hours a day. Conventional heat sources cycle or modulate with load; data-center heat acts more like a steady baseload — the servers don’t take a winter holiday, so neither does the heat. (This assumes the building-side terminals, insulation, heat exchange and controls are designed around that temperature — 55°C continuous is a system design, not a promise that any radiator anywhere will do.)

**Second, heat reuse is control, not dumping.** A greenhouse or an aquaculture tank doesn’t want “as much heat as possible” — it wants the right heat, at the right temperature, at the right time. Overshoot and you stress the plants or the fish. So a heat-reuse system still needs a rejection path — a cooling tower or dry cooler — to bleed off the excess and protect the buyer. More on that in the trade-offs.

**Third, the best heat buyer isn’t always the biggest — it’s the one that shows up every day.** A buyer with year-round, flat demand beats a bigger one who only wants heat in February: greenhouses, aquaculture, an industrial process that takes heat every day. Finding that match is half the project.

Put those together and the claim sharpens. 55°C water isn’t just a cooling output. Steady, metered, controlled, and matched to the right local demand, it becomes an energy product.

![](https://substackcdn.com/image/fetch/$s_!Cb--!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc1c6b5a8-f322-4ecd-ad8d-d3ea642de9d1_1672x941.png)

_Our heat-recovery plant: the units that turn server heat into usable hot water._

![](https://substackcdn.com/image/fetch/$s_!KGpX!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2c735cdf-5035-4afc-b40e-c205841a4e02_1672x941.png)

_A year-round buyer: greenhouse crops grown on recovered heat._

![](https://substackcdn.com/image/fetch/$s_!hGiE!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F955c817e-ec35-4157-bec5-5098360d3d8e_1672x941.png)

_Constant-temperature aquaculture — warm water held in a narrow band, fed by reject heat._

## Where else the heat goes

Beyond our own deployments, the public examples are piling up. Meta’s Odense plant supplies surplus heat to its Danish district network; Stockholm’s data-park program and a Microsoft–Fortum project near Helsinki put server heat into city heating at meaningful scale. And beyond municipal heating there’s a longer list that matters most where there’s no dense heat grid: greenhouses, aquaculture, industrial pre-heating, laundries, food processing, pool and building heat — and, in some cases, absorption cooling, which can even turn heat back into cold.

The point isn’t that every site does all of these. It’s that a high-grade heat stream is a tradable output — and the moment it’s tradable, the cooling system stops being only a cost.

![](https://substackcdn.com/image/fetch/$s_!rOND!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F77d0501c-ae08-4acd-b59e-40e32c985adc_1672x941.png)

## The trade-offs you have to engineer for

Here’s the honest part. Whenever I post about this, the sharpest reply is always the same: great idea — so what are the obstacles? It’s the right question, **because heat reuse is not a cooling feature. It is a local energy project,** and treating it like a bolt-on is how a good idea becomes a stranded pipe. Five constraints decide whether it works.

**Heat is local.** Unlike electricity, hot water loses both temperature and money over distance — if the buyer is far away, the business case leaks away with the temperature. The economics live or die on having a buyer — a network, a grower, a factory — close to the site. This is a siting decision, not an afterthought. The cheapest heat-reuse project is the one where you put the data center next to the demand on purpose.

**Demand swings with the weather.** Space heating wants your heat in February and far less in August, and winter itself isn’t one number — it’s −5°C one week and −30°C the next. Your servers, meanwhile, produce heat at a flat rate every hour. A credible project plans for that mismatch: thermal storage, or — better — a buyer whose demand is flat. The most valuable offtaker is one who will take hot water all year, or who just needs a steady base temperature: a greenhouse, an aquaculture operation, an industrial process. Finding that scenario is half the work.

**You can also send too much heat**. This surprises people. Greenhouses and fish tanks have tight temperature limits — overshoot and you cook the crop or stress the stock. So you meter exactly what the buyer needs and bleed the rest off through a cooling tower or dry cooler. Which flips how you think about that equipment:

> Free heat that arrives uncontrolled isn’t a gift — it’s a liability. In heat reuse, the cooling tower stops being a waste device and becomes a control device.

**It has to be designed in, not bolted on**. Capturing high-grade heat, plumbing it to the property line, and metering it for sale all belong in the architecture from day one. Retrofitting recovery onto a hall built to dump heat is the expensive way to learn this.

**And it’s a partnership, not just a pipe**. Selling heat means a counterparty, a contract, a price, and shared infrastructure with someone outside your fence. That’s a different muscle than running IT — and it’s why the regulations below leave an escape hatch for when no buyer will take the heat.

None of these are reasons not to do it. They’re the reasons it pays to engineer it deliberately.

## The accounting is changing — and so is the law

For most of the industry’s history none of this showed up on a balance sheet, because nobody measured it. That’s changing — first in Europe — on two fronts.

**The metric exists.** Under the EU’s Energy Efficiency Directive, data centers above 500 kW of IT load must report a standard set of indicators every year — PUE, water use, renewable share, and the Energy Reuse Factor (ERF), a 0-to-1 measure of how much of the energy drawn is reused as useful heat. The first EU-wide numbers are stark: across all reporting data centers, only about 1.8% of energy is currently reused as heat. Even among the data centers that do reuse heat, the average ERF is about 0.20 — and the best-performing member state reaches 0.46. So the average site reuses almost none of its heat, and even the ones that try sit far below the frontier. ERF turns “we waste our heat” from a vague complaint into a number on a public report.

**The mandate is arriving.** Germany has gone furthest: under its Energy Efficiency Act, new data centers must hit a minimum ERF — 10% for sites starting up from mid-2026, rising to 15% in 2027 and 20% in 2028 — with an exemption where no heat network will take the energy. (As of 2026, Germany is debating a draft amendment that softens some reporting and PUE duties to court AI build-out; the ERF minimums for new sites still stand for now.) This is still EU/Germany out in front, not a global rule. But the direction is set: in those markets, waste-heat reuse is moving from “nice ESG story” to a condition of building at all, and the architecture that produces high-grade heat is the architecture that clears the bar.

Put it together and the cost-center framing breaks. Heat reuse is becoming, at once, a revenue line, a reported KPI, and in some markets a permit requirement. The data centers being designed today for 2028 are being designed as heat suppliers, not just heat producers.

![](https://substackcdn.com/image/fetch/$s_!74G2!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbc65fff2-a3b7-4c9b-b548-21a0a6dd03f1_1672x941.png)

## One loop, three returns

Step back and the three issues are one argument. The same warm-water loop, chosen once, does three things: it cuts the energy and water spent on cooling, it keeps the most expensive hardware healthier and worth more for longer, and it turns the reject heat into something you can use or sell. Lower cost, longer life, new revenue — not three projects, but three returns from a single architectural decision.

That’s the shift worth naming. A data center has always been treated as a load on the grid and a heat island on the map. Built around warm water, it becomes something else: an energy node that takes in power, does the computation the world is paying for, and hands the heat back to the town, the farm, or the factory next door. The cheapest, greenest watt is the one you don’t waste twice — once to make the heat, and again to throw it away.

Make every watt count. And make the heat count too.

_— Jim Li, founder of NextGenergy. Power, cooling, and heat recovery for AI data centers, designed as one system._

##### References & notes

-   _Reporting: under the EU Energy Efficiency Directive (Commission Delegated Regulation (EU) 2024/1364), data centers >500 kW IT report PUE, WUE, ERF and Renewable Energy Factor annually; ERF is defined in ISO/IEC 50600-4-6 on a 0–1 scale. Per the European Commission’s July 2025 assessment: across ALL reporting data centers the average ERF is ~0.018 (~1.8%); among only the data centers that do reuse heat the average is ~0.205, with the highest member-state value ~0.457._
    
-   _Mandate: Germany’s Energy Efficiency Act (EnEfG) sets minimum ERF for new data centers (≥300 kW): ~10% from 1 July 2026, ~15% from 1 July 2027, ~20% from 1 July 2028, with exemptions where no heat-network offtaker accepts the heat. In April 2026 Germany published a draft amendment that would scale back some waste-heat reporting and ease PUE targets for existing sites; the new-build ERF minimums still stand, but the framework is evolving — re-check before publishing._
    
-   _Grade matching: 4th-generation low-temperature district heating supplies at roughly 50–70°C (varies by network, season and retrofit); cold-plate loops typically ~50–60°C and immersion can exceed 60°C, so liquid-cooled output often needs little or no heat-pump lift. Air-cooled exhaust is typically diluted and below the band most networks want._
    
-   _Public examples: Meta’s Odense (Denmark) facility supplies surplus heat to the municipal district network (using heat pumps to upgrade low-grade air-side heat); Stockholm’s data-park program and a Microsoft–Fortum project near Helsinki supply a significant share of local district heat._
    
-   _NextGenergy: warm-water systems since 2020; large-scale heat delivery since 2021 into community/space heating, greenhouses and constant-temperature aquaculture; >1 GW deployed and >2,000,000 m² of recovered-heat delivery are internal deployment totals. This issue follows “45°C Inlet Water” (energy/water) and “Warm Water, Longer Life” (hardware longevity)._
