---
title: "From 25 Tonnes a Day to Zero: The Real Water Math Behind AI Cooling"
subtitle: "The AI water panic gets the scale wrong, but the local constraint is real. What we learned moving from open cooling towers to warm-water heat reuse."
date: 2026-06-30
source: substack
sourceUrl: "https://everywattcounts.substack.com/p/from-25-tonnes-a-day-to-zero-the"
canonical: "https://everywattcounts.substack.com/p/from-25-tonnes-a-day-to-zero-the"
tags: [water, metrics, evidence]
related: [/approach/return-water]
---

<!-- substack-body -->
![](https://substackcdn.com/image/fetch/$s_!6wWv!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7bd9a98e-f134-41f0-9975-0d814a0ae4b3_1733x907.png)

This is the fourth of a series. The first three argued that warm water is cheaper to run, kinder to the hardware, and able to turn reject heat into an asset. This one is about the resource everyone is suddenly worried AI is draining: water.

Your feed has been telling you that AI is about to drink your city dry. I’ve spent the last several years actually metering that water — across four cooling architectures, through real summers. So let me start with the number on my own meter, not the one in the headline.

## 𝗧𝗵𝗲 𝗺𝗲𝘁𝗲𝗿: 𝟮𝟱 𝘁𝗼𝗻𝗻𝗲𝘀 𝗮 𝗱𝗮𝘆

On a single ~600 kW cooling load, in summer peak heat, running an open cooling tower, we metered makeup water as high as ~25 tonnes a day — about 6,600 gallons. Per tower. (That figure is makeup water — evaporation plus blowdown and drift — not pure evaporation.)

Convert it into a unit that travels across cooling architectures: 25,000 L/day ÷ (600 kW × 24 h) ≈ 𝟭.𝟳 𝗹𝗶𝘁𝗲𝗿𝘀 𝗽𝗲𝗿 𝗸𝗪𝗵 of heat rejected. Strictly speaking, that’s a 𝘀𝗶𝘁𝗲 𝗰𝗼𝗼𝗹𝗶𝗻𝗴-𝘄𝗮𝘁𝗲𝗿 𝗶𝗻𝘁𝗲𝗻𝘀𝗶𝘁𝘆, not the formal Green Grid WUE (whose denominator is IT-equipment energy). But it tracks exactly the operational problem WUE is meant to expose. (For scale: this is a single open tower at summer peak — much higher than a typical U.S. annual average WUE, which LBNL estimates near 0.45–0.48 L/kWh.)

So data centers do use real water. The honest question is not whether, but how much, where, and at what trade.

## 𝗔 𝗾𝘂𝗶𝗰𝗸 𝘀𝗰𝗮𝗹𝗲 𝗰𝗵𝗲𝗰𝗸

![](https://substackcdn.com/image/fetch/$s_!Iq74!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff1f7600a-3365-43b3-8f3e-03d063c542d9_1448x1086.png)

Of the world’s freshwater withdrawals, agriculture takes roughly 70%, industry about 19%, and 𝗺𝘂𝗻𝗶𝗰𝗶𝗽𝗮𝗹 / 𝗱𝗼𝗺𝗲𝘀𝘁𝗶𝗰 use about 12% (FAO AQUASTAT — “municipal” is broader than just homes). Direct data-center water consumption is much smaller: on a direct-consumption basis, current U.S. estimates put it 𝘄𝗲𝗹𝗹 𝗯𝗲𝗹𝗼𝘄 𝟬.𝟭% of total national withdrawals. The exact number moves with the boundary — withdrawals vs consumption, direct cooling water vs the water embedded in electricity — but direct cooling water is not the top-line driver of national water use.

The reason it dominates the headlines anyway is not the mass balance — it’s that “irrigation, same as last year” doesn’t drive clicks, while “AI is coming for your tap” does. As Aquatech’s Michael Lesniak has argued, the job is to separate a genuine engineering constraint from an outrage cycle that monetizes anxiety. The algorithm optimizes outrage; the mass balance does not.

## 𝗦𝗺𝗮𝗹𝗹 𝘀𝗵𝗮𝗿𝗲, 𝗻𝗼𝘁 𝘇𝗲𝗿𝗼 𝗿𝗲𝘀𝗽𝗼𝗻𝘀𝗶𝗯𝗶𝗹𝗶𝘁𝘆

But “small globally” is the wrong place to rest, because water is local. A facility whose national footprint rounds to a rounding error can still be the single largest new draw on one stressed aquifer in Arizona or Spain. National averages don’t cool your data center; the river next door does. At the watershed level, a single site can absolutely become a first-order constraint.

So the responsibility is real even when the global number is small: design for zero liquid discharge where you can, use reclaimed municipal wastewater instead of potable, and treat the local watershed as a hard constraint. The point of the scale check isn’t “relax.” It’s “worry about the right thing, at the right scale, and then actually engineer for it.”

## 𝗧𝗵𝗲 𝗳𝗼𝘂𝗿-𝘀𝘁𝗮𝗴𝗲 𝗷𝗼𝘂𝗿𝗻𝗲𝘆: 𝗵𝗼𝘄 𝘄𝗲 𝗴𝗼𝘁 𝗳𝗿𝗼𝗺 𝟮𝟱 𝘁𝗼𝗻𝗻𝗲𝘀 𝘁𝗼𝘄𝗮𝗿𝗱 𝘇𝗲𝗿𝗼

![](https://substackcdn.com/image/fetch/$s_!Uxcb!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4993769f-bab3-4155-809f-7d70580e5b06_1448x1086.png)

Here is what the brochures skip. In the conventional path, almost every step that cut on-site water pushed cost or risk onto the power side instead. We didn’t theorize that trade-off — we walked down it, one architecture at a time.

𝗦𝘁𝗮𝗴𝗲 𝗼𝗻𝗲 — 𝘁𝗵𝗲 𝗼𝗽𝗲𝗻 𝗰𝗼𝗼𝗹𝗶𝗻𝗴 𝘁𝗼𝘄𝗲𝗿. Most of the industry still lives here, and the water bill is brutal. An open tower rejects heat by evaporating water into the air: ~25 tonnes/day on that 600 kW load at summer peak, ~1.7 L/kWh of site cooling-water intensity. Cheap on power, ruinous on water.

𝗦𝘁𝗮𝗴𝗲 𝘁𝘄𝗼 — 𝘁𝗵𝗲 𝗰𝗹𝗼𝘀𝗲𝗱-𝗰𝗶𝗿𝗰𝘂𝗶𝘁 𝘁𝗼𝘄𝗲𝗿. Sealing the loop and spraying the coil’s outside cut the worst of it: cleaner water, less blowdown, roughly 20% less — about 20 tonnes/day, ~1.4 L/kWh at peak (site-specific). Better. But “20% less than brutal” is still brutal.

𝗦𝘁𝗮𝗴𝗲 𝘁𝗵𝗿𝗲𝗲 — 𝗱𝗿𝘆 𝗰𝗼𝗼𝗹𝗲𝗿𝘀 𝘄𝗶𝘁𝗵 𝗮𝗱𝗶𝗮𝗯𝗮𝘁𝗶𝗰 𝗽𝗮𝗱𝘀. Now we attacked the water directly: reject most of the heat dry, and wet the incoming air only on the hottest days. On-site water fell off a cliff — but a meter we’d ignored lit up: power. A dry cooler can’t bring the fluid below ambient dry-bulb, so on hot days the fans work harder, the loop runs warmer, and PUE climbs. This is exactly what WUEsource is meant to expose: drive on-site water toward zero by going dry, and on a water-intensive grid some of that water simply moves upstream to the power plant. Depending on grid and boundary, a data center’s indirect, electricity-embedded water can become the majority of its true footprint. A 2018 study found ~three-quarters came from indirect dependencies; LBNL 2024 puts U.S. data centers’ 2023 indirect water near 800 billion liters, far above the ~66 billion liters of direct consumption. We hadn’t solved the problem — we’d moved it, from the water meter to the power meter.

𝗦𝘁𝗮𝗴𝗲 𝗳𝗼𝘂𝗿 — 𝘄𝗲 𝘀𝘁𝗼𝗽𝗽𝗲𝗱 𝘁𝗵𝗿𝗼𝘄𝗶𝗻𝗴 𝘁𝗵𝗲 𝗵𝗲𝗮𝘁 𝗮𝘄𝗮𝘆. The step change wasn’t a more efficient way to reject heat. It was a different customer for the heat. Run a warm-water loop, deliver the reject heat to a buyer — district heat, greenhouses, aquaculture, industry — and the water problem and the energy problem collapse together. On those sites we run at zero on-site evaporative makeup water. And because the heat now leaves as a useful product, the facility’s energy story stops being something PUE can even describe.

𝗙𝗼𝘂𝗿 𝘀𝘁𝗮𝗴𝗲𝘀. 𝗢𝗽𝗲𝗻 𝘁𝗼𝘄𝗲𝗿, 𝗰𝗹𝗼𝘀𝗲𝗱 𝘁𝗼𝘄𝗲𝗿, 𝗱𝗿𝘆-𝗽𝗹𝘂𝘀-𝗮𝗱𝗶𝗮𝗯𝗮𝘁𝗶𝗰, 𝗵𝗲𝗮𝘁 𝗿𝗲𝘂𝘀𝗲. 𝗧𝗵𝗲 𝗳𝗶𝗿𝘀𝘁 𝘁𝗵𝗿𝗲𝗲 𝗲𝗮𝗰𝗵 𝗯𝗼𝘂𝗴𝗵𝘁 𝗹𝗲𝘀𝘀 𝘄𝗮𝘁𝗲𝗿 𝗮𝘁 𝘁𝗵𝗲 𝗽𝗿𝗶𝗰𝗲 𝗼𝗳 𝗺𝗼𝗿𝗲 𝗽𝗼𝘄𝗲𝗿. 𝗢𝗻𝗹𝘆 𝘁𝗵𝗲 𝗳𝗼𝘂𝗿𝘁𝗵 𝗯𝗿𝗼𝗸𝗲 𝘁𝗵𝗲 𝘁𝗿𝗮𝗱𝗲.

## 𝗪𝗵𝘆 𝗿𝗲𝘂𝘀𝗲 𝗯𝗿𝗲𝗮𝗸𝘀 𝘁𝗵𝗲 𝘁𝗿𝗮𝗱𝗲-𝗼𝗳𝗳

![](https://substackcdn.com/image/fetch/$s_!GPma!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd8c2d4a6-858e-4988-a8fa-b3ac4d0b1549_1448x1086.png)

It breaks it because it changes what “cooling” is for. The first three stages all ask: how do we get rid of this heat as cheaply as possible? Stage four asks a different question: who needs this heat?

The enabler is temperature. A warm-water loop (the 45°C-class architecture from earlier issues) keeps the reject heat concentrated and high-grade — hot enough to hand to a buyer with little or no heat-pump lift — and widens the free-cooling window, so you lean on evaporation far less to begin with. Less heat to the sky, more heat sold to a neighbor.

This is why I keep saying it: “𝘄𝗮𝘁𝗲𝗿 𝗳𝗼𝗿 𝗔𝗜” 𝗮𝗻𝗱 “𝗵𝗲𝗮𝘁 𝗳𝗿𝗼𝗺 𝗔𝗜” 𝗮𝗿𝗲 𝘁𝗵𝗲 𝘀𝗮𝗺𝗲 𝗳𝗹𝗼𝘄𝘀𝗵𝗲𝗲𝘁, 𝗿𝗲𝗮𝗱 𝗳𝗿𝗼𝗺 𝘁𝘄𝗼 𝗲𝗻𝗱𝘀. Solve it as disposal and you fight it forever; solve it as delivery and it pays you. But heat reuse is a local energy project, with three constraints: the buyer has to be close; demand has to match a year-round heat supply; and the temperature grade has to fit. Any universal “AI water use” number almost certainly omits the variables that decide it: location, climate, grid, water source, cooling architecture, and system boundary.

## 𝗧𝗵𝗲 𝘀𝗰𝗼𝗿𝗲𝗯𝗼𝗮𝗿𝗱 𝗻𝗲𝗲𝗱𝘀 𝘁𝗵𝗿𝗲𝗲 𝗹𝗲𝗻𝘀𝗲𝘀, 𝗻𝗼𝘁 𝗼𝗻𝗲

![](https://substackcdn.com/image/fetch/$s_!eUqD!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Feec1b716-eb27-47da-b5e0-f1e5572001f7_1448x1086.png)

PUE measures total facility energy over IT energy. By definition it can never go below 1.0 — and it gives no credit for useful heat that leaves the control boundary. Worse, it moves the wrong way: add the pumps to recover and deliver heat, and PUE gets worse precisely as you start turning waste into value.

So the water story needs three lenses: 𝗪𝗨𝗘 (more precisely, site cooling-water intensity) tells you how much water you burn — across our four stages, ~1.7 L/kWh to zero. 𝗣𝗨𝗘 tells you how heavy the overhead is, but is blind to anything leaving the building. 𝗘𝗥𝗘 — Energy Reuse Effectiveness, (Total − Reuse)/IT = (1−ERF)×PUE — is the one metric here that can fall below 1.0 once exported heat is metered; documented sites report ERE ~0.77 and ~0.90.

Two things, kept separate. First, the metric: with properly metered exported heat, ERE can fall below 1.0 — a rigorous figure needs PUE and ERF, not a cost ratio. Second, the economics: at our heat-selling sites, heat revenue offsets ~35% of the electricity cost, so the 𝗻𝗲𝘁 𝗲𝗻𝗲𝗿𝗴𝘆 𝗲𝗰𝗼𝗻𝗼𝗺𝗶𝗰𝘀 𝗹𝗮𝗻𝗱 𝗻𝗲𝗮𝗿 𝟬.𝟲𝟱. An energy metric and an economic result — same direction, different formula.

The journey from 25 tonnes of water a day toward zero is the same journey that turned the facility from “another cooling load” into “an energy node that gives something back” — and you only see the destination once you stop scoring it with PUE alone.

𝗪𝗮𝘁𝗲𝗿-𝗻𝗲𝘂𝘁𝗿𝗮𝗹 𝗶𝘀 𝘁𝗵𝗲 𝗳𝗹𝗼𝗼𝗿. 𝗘𝗻𝗲𝗿𝗴𝘆-𝗽𝗼𝘀𝗶𝘁𝗶𝘃𝗲 𝗶𝘀 𝘁𝗵𝗲 𝗰𝗲𝗶𝗹𝗶𝗻𝗴. 𝗔𝗻𝗱 𝘁𝗵𝗲 𝗺𝗼𝘃𝗲 𝘁𝗵𝗮𝘁 𝗿𝗲𝗮𝗰𝗵𝗲𝘀 𝗯𝗼𝘁𝗵 𝗶𝘀 𝘁𝗵𝗲 𝘀𝗮𝗺𝗲 𝗼𝗻𝗲: 𝘀𝘁𝗼𝗽 𝘁𝗵𝗿𝗼𝘄𝗶𝗻𝗴 𝘁𝗵𝗲 𝗵𝗲𝗮𝘁 𝗮𝘄𝗮𝘆.

𝗠𝗮𝗸𝗲 𝗲𝘃𝗲𝗿𝘆 𝘄𝗮𝘁𝘁 𝗰𝗼𝘂𝗻𝘁.

— Jim Li, founder of NextGenergy. Power, cooling, and heat recovery for AI data centers, designed as one system.

##### _——— References & notes ———_

_FAO AQUASTAT (global split); USGS 2015 (~322 Bgal/day U.S. withdrawals); LBNL 2024 U.S. Data Center Energy Usage Report (2023 direct ~66B L, indirect ~800B L, avg indirect ~4.52 L/kWh; direct consumption well below 0.1% of national withdrawals); Siddik et al. 2021 (indirect ~3/4 of operational footprint; ~1.8 m³/MWh); cooling-tower makeup ~1.4–1.8 L/kWh (evap + blowdown + drift). Metrics — The Green Grid: WUE = Site Water / IT energy; PUE = Total Facility / IT energy (≥1.0); ERE = (Total − Reuse)/IT = (1−ERF)×PUE (can be <1.0). Stage figures (25/20 t/day; zero on-site evaporative water; ~35% cost offset; net economics ≈0.65) are first-hand, site-/load-/season-/architecture-/boundary-specific. On outrage vs engineering: Aquatech’s Michael Lesniak._
