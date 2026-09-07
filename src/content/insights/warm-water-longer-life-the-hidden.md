---
title: "Warm Water, Longer Life: The Hidden ROI of Liquid Cooling"
subtitle: "The industry argues about two numbers: dollars per GPU, and tokens per second."
date: 2026-06-28
source: substack
sourceUrl: "https://everywattcounts.substack.com/p/warm-water-longer-life-the-hidden"
canonical: "https://everywattcounts.substack.com/p/warm-water-longer-life-the-hidden"
tags: [liquid-cooling, economics, heat-reuse]
related: [/approach/return-water, /platform/coolants]
---

<!-- substack-body -->
![](https://substackcdn.com/image/fetch/$s_!PUnr!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F091135bb-acc4-4348-ae5b-b28c24194032_1672x941.png)

The industry argues about two numbers: dollars per GPU, and tokens per second. But a third quietly decides the economics of an AI cluster: how long each GPU keeps earning.

At $30,000–40,000 a card, a GPU isn’t just a component. It’s a depreciating financial asset. One of the biggest controllable factors in how long it stays useful is the thermal environment it lives in — not just peak temperature, but thermal stability, cleanliness, and vibration.

That’s the hidden ROI of warm-water liquid cooling. The payoff isn’t only a smaller power bill. It’s fewer faults, higher residual value, and — in the right applications — hardware that stays useful for longer.

One clarification up front, because the topic invites it: the lever here isn’t “hotter.” It’s letting the silicon run in a more stable, cleaner, lower-resistance environment. This is the natural sequel to the last issue — if warm water is cheaper to run, is it also kinder to the hardware? It can be, when it’s engineered well. Here’s the clear-eyed version, trade-offs included, from a team that’s lived with them since 2020.

### What actually kills a GPU

A chip rarely dies in one moment. It wears out along three paths, and heat sits behind all of them.

Electromigration. Current pushes metal atoms along the die’s interconnects over time, until a wire thins and fails — at a rate that climbs exponentially with junction temperature (Arrhenius). As a rule of thumb, every ~10°C rise roughly doubles a semiconductor’s reverse leakage current (about 8–11°C for modern CMOS). And for many supporting components — especially electrolytic capacitors in the power chain — the related “10-degree rule” says life roughly halves for every 10°C. Heat doesn’t age hardware linearly; it compounds.

Thermal cycling. Every ramp from idle to full load and back expands and contracts silicon, solder, substrate and board at different rates, working the solder joints and the ball-grid array like a paperclip bent back and forth until something cracks. The damage comes less from peak temperature than from the size and frequency of the swing.

Environment. Air-side cooling moves large volumes of air through the room and across equipment; depending on filtration and economizer design, dust, humidity, contaminants and fan vibration become reliability variables — feeding oxidation, corrosion, static, and slow mechanical wear.

Notice the pattern: **the enemy isn’t “warm.” The enemy is hot, unstable, and dirty.**

![](https://substackcdn.com/image/fetch/$s_!yn6K!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F56e8532b-604b-4012-b8be-85ba15b1c54c_1672x941.png)

### Stability is the real unlock

This is where warm-water cooling pays a second time — and the word that matters is stability, not cold.

Stability. Liquid carries far more heat capacity than air, and that thermal mass acts like a shock absorber, damping the idle-to-load swings that fatigue solder. The chip sits in a narrow, steady band instead of on a roller-coaster. Fewer, gentler cycles mean slower mechanical aging — value you collect every year, not just at refresh.

Junction temperature, done right. As I argued last time, what a chip fears isn’t how cold the coolant is — it’s its own junction temperature, set by the thermal path (resistance × power), not the inlet number. But this is conditional: warm-water operation is a reliability gain only when the thermal path — cold plate, TIM, flow, control — is engineered well enough to keep the junction in spec and the swings small. A 45°C inlet doesn’t extend life by itself; good engineering around it does.

A cleaner environment — and here the two architectures differ. Immersion puts the whole board in a single, clean, uniform medium: no dust, no humidity swings, no static. Cold-plate cooling keeps the heat path in a sealed liquid loop and sharply reduces airflow, fans and vibration even where some air remains. Both move the hardware into a kinder world. In comparable deployments and operating conditions, we’ve measured system-level temperatures up to about 20°C below air-cooled baselines — and designed around exactly the reliability numbers above. It shows up as a lower fault rate.

![](https://substackcdn.com/image/fetch/$s_!QVva!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd9a4de86-57aa-440b-b55a-20e169e9486f_1672x941.png)

### The trade-offs you have to engineer for

Most “liquid cooling lasts longer” pieces stop here. Liquid cooling brings its own failure modes, and pretending otherwise is how pilots become expensive lessons. Two are worth naming.

Material compatibility — especially in immersion. The governing principle is “like dissolves like”: non-polar hydrocarbon coolants can, over time, swell or attack non-polar polymers and leach the plasticizers (phthalate/terephthalate esters) out of materials like PVC, leaving cable jackets brittle or gummy and seals swollen. No coolant should be treated as universally compatible. The discipline is to qualify each wetted material against the exact fluid, temperature, exposure time and service condition — using solubility-parameter (Hansen) matching and standardized testing such as ASTM D471 — then monitor it in service. Some engineered fluids are gentler on common polymers than raw mineral oil, but they carry their own cost, supply-chain, environmental or regulatory trade-offs. There’s no universal fluid; there’s disciplined qualification.

Heat and evaporation in the room. A 45°C loop — or an open immersion bath — can raise the ambient temperature of the space, and volatile or two-phase fluids can evaporate, creating fluid loss, vapor to manage, and for certain fluorochemicals, real environmental and regulatory exposure (GWP and PFAS scrutiny). The answer is design discipline: sealed, low- or non-volatile fluids; loops that carry the heat out to the facility side — ideally to reuse — rather than into the room; and proper containment and monitoring. Design discipline is what turns these risks back into reliability.

![](https://substackcdn.com/image/fetch/$s_!2rCw!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa754deec-89c1-4386-bc82-3e82ae04bc78_1672x941.png)

### The economics — start with what you can underwrite

Lead with the returns that don’t depend on heroic assumptions.

Reliability, now: fewer thermal faults and less RMA churn means less unplanned downtime — value you capture inside the current refresh window, not some hypothetical fifth year. Residual value: a card that lived in a warm, stable, clean loop is worth far more resold or redeployed to inference and edge than one thermally cycled and oxidized in an air hall. The long tail: outside the frontier — inference, enterprise, sovereign and edge fleets — last-generation hardware stays useful for years, and there the calendar genuinely extends.

Only then the headline model, labeled as exactly that. As an illustrative model — not a forecast — a 100,000-GPU cluster making on the order of $2B/yr in compute that stretched its refresh from three to five years would book billions in post-depreciation output. The logic is sound, but it’s a ceiling: at the frontier, GPUs are usually retired for obsolescence long before they wear out. So the honest claim isn’t “liquid cooling makes your GPUs last five years.” It’s: liquid cooling improves the quality of every operating year, and the value of the asset at exit.

### One loop, three returns

The same warm-water loop does three things from one decision: it cuts cooling energy and water, it makes the reject heat hot enough to reuse, and it keeps the most expensive hardware healthier and worth more for longer. Power, cooling, heat recovery, and hardware life aren’t separate decisions — they’re connected returns from one architectural choice.

![](https://substackcdn.com/image/fetch/$s_!67l0!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F72cda4d3-224b-403e-ae70-b996dcaa96c6_1672x941.png)

We didn’t arrive at this from the sidelines. We built our first immersion systems in 2020, moved cold-plate into volume the following year, and have since deployed across more than 1 GW of installed capacity — delivering recovered heat into district heating, greenhouses and aquaculture, over 2,000,000 m² of it. The longevity case, the reliability numbers, and the trade-offs above aren’t theory to us; they’re what we engineered around to make those systems run.

**The cheapest GPU — and the greenest one — is the one you don’t have to replace.** Make every watt count. And make every chip last.

— Jim Li, founder of NextGenergy. Power, cooling, and heat recovery for AI data centers, designed as one system.

* * *

##### _References & notes_

-   _Leakage current rises exponentially with temperature (Arrhenius); ~doubling every 8–11°C for modern CMOS. The electrolytic-capacitor “10-degree rule” (life ~halves per +10°C) is a widely used reliability heuristic; 2022–2024 manufacturer data remains consistent._
    
-   _Solder-joint / BGA thermal-cycling fatigue is driven by the magnitude and frequency of swings, not peak temperature alone._
    
-   _Material compatibility follows solubility-parameter (Hansen) matching; non-polar fluids swell/attack non-polar polymers and leach plasticizers from PVC. Standardized fluid-immersion chemical-resistance testing: ASTM D471._
    
-   _Volatility/GWP/PFAS concerns apply mainly to volatile and two-phase fluorochemical fluids._
    
-   _System temperatures “up to ~20°C below air-cooled baselines” are internal deployment observations under comparable conditions; the 3→5-year refresh and $2B figures are an illustrative model, not a forecast._
    
-   _Junction temperature ≈ coolant temperature + heat load × thermal resistance — see the prior issue, “45°C Inlet Water.”_
