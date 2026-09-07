---
title: "The Three Kinds of Liquid Cooling — and the Thousand Cabinets Nobody Wanted"
subtitle: "Liquid cooling isn't one technology — it's three, with completely different temperaments. Let me explain them through a decision I still don't love talking about."
date: 2026-07-02
source: substack
sourceUrl: "https://everywattcounts.substack.com/p/the-three-kinds-of-liquid-cooling"
canonical: "https://everywattcounts.substack.com/p/the-three-kinds-of-liquid-cooling"
tags: [liquid-cooling, cold-plate, immersion]
related: [/platform/cold-plates, /approach/return-water]
---

<!-- substack-body -->
![](https://substackcdn.com/image/fetch/$s_!WtQk!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F42580874-bcd1-4a40-94d3-b9349ee246e4_1448x1086.png)

The earlier issues of Every Watt Counts were all about the “why.” This is the sixth. So far, the series has covered physics, water, heat, and the economics of liquid cooling. Today we get concrete: how do you actually tell the kinds of liquid cooling apart?

And I’m not going to do it from a textbook. I’ll do it through a decision I made four years ago — one that cost me more than any other.

## 1\. The most expensive decision I ever made: to give the cabinets away

In 2020, I was a true believer in liquid cooling. Believer enough that I built over a thousand immersion-cooling units and stacked them in a warehouse, waiting for the market to come.

Nobody came. Not a single unit sold.

I watched those brand-new cabinets gather dust, week after week. So on May 1, 2021, I made a hard decision — one that looked, at the time, plain stupid.

Give them away.

I shipped units, free, to roughly a dozen major operators, asking for one thing in return: try it. If it works for you, buy it. If it doesn’t, ship it back — I’ll cover the freight both ways.

The result? Only two ever powered a unit on.

The rest just sat there. Untouched.

## 2\. They weren’t blind — back then, liquid cooling really was “too much trouble”

I eventually understood: I couldn’t blame them. For a data center used to air, that early immersion setup was absurdly high-friction.

Before you could rack a server, you had to pull every fan and clean out the dust. Some servers wouldn’t even boot once the fans were gone — they’d throw alarms — so you had to install fan emulators just to fool the board’s monitoring. And the worst part was maintenance: once the system was live, the surface of the coolant sat north of 50°C. When a server failed, you had to fish it out of that 50-degree oil, let it drip dry, and only then start the repair. Hot, greasy, slow.

Meanwhile, air cooling? Plug it in, the fans spin, it runs.

Here’s the first lesson those giveaway cabinets taught me: being technically right doesn’t make it a product; being a product doesn’t make it operable. However good the technology, if you’re ten times the hassle of the incumbent, the market won’t pick you just because you’re right.

## 3\. So why start with the hardest one — immersion?

You might be wondering: if cold plate is the easiest and most mainstream today, why didn’t we do cold plate in 2020? Why grind away at the hardest path?

The answer lives in the conditions of the time. Cold plate wasn’t new — HPC had walked that path years earlier. But in 2020, for the commodity and second-hand servers we could actually buy at volume and retrofit, there was no mature, repeatable, serviceable cold-plate ecosystem yet. It hadn’t become something an ordinary data center could simply buy and operate. (Cold plate, for the uninitiated: the coolant runs through a metal plate pressed against the chip — it never touches the electronics directly.)

Nearly every machine on the market was built for air. To go liquid, all we could do was take servers apart one by one — pull fans, clean out dust, and clear alarms. Immersion, it turned out, was the only way to force an air-cooled server into liquid.

![](https://substackcdn.com/image/fetch/$s_!KaY5!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F13e545da-b3a3-4229-977e-a9de14fa953e_1086x1448.png)

![](https://substackcdn.com/image/fetch/$s_!zIV0!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F34e946f2-c1c3-46bb-b492-069b397004f0_1448x1086.png)

_caption: “In 2020, we retrofitted servers one by one — pulling fans, clearing dust, then bringing each machine up in liquid.”_

I did try the shortcut. I wore myself out lobbying server makers: could you build a line of servers designed for immersion from the start? The answer was almost always no. Everyone was waiting for someone else to move first.

That’s the pioneer’s tax: you’re not just selling a cabinet — you’re dragging an entire supply chain, inch by inch, toward a future nobody believes in yet.

## 4\. How many kinds of liquid cooling are there? Three temperaments

First, let’s scope this. Today we’re only talking about server / IT-side liquid cooling — how coolant pulls heat off the chips and out of the rack. Facility-side approaches like rear-door heat exchangers and chilled-water plants aren’t on this map. And to be clear: many real deployments are hybrid — only part of the heat leaves in liquid, the rest still goes to air.

With that scoped, two questions are all you need: Does the coolant directly touch the electronics? Does it boil?

Look at three pictures first, and their different temperaments click into place —

![](https://substackcdn.com/image/fetch/$s_!3buT!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fda444074-9bf3-4909-a84e-6554056915ae_1448x1086.png)

_caption: “Immersion — the most complete contact with heat, and the most physical maintenance experience.”_

![](https://substackcdn.com/image/fetch/$s_!DB-l!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd654000a-8aee-4e15-8d5f-941147015bb0_1448x1086.png)

_caption: “Cold plate — the mainstream path: less dramatic than immersion, but much easier to fit into existing operations.”_

![](https://substackcdn.com/image/fetch/$s_!5nxM!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F50f41be4-d349-4ad5-a0c8-f15832b06723_1448x1086.png)

_caption: “Spray — technically elegant, but still waiting for a broader ecosystem.”_

① Immersion — the whole server goes into the coolant, cooling by direct contact. The most thorough cooling and the best space efficiency; but the heaviest maintenance temperament — when a machine fails, you fish it out. The coolant comes in single-phase (never boils) and two-phase (boils and changes phase, moving heat via latent heat — with very high heat-transfer potential).

② Cold plate (Direct-to-Chip, DTC) — coolant never touches the electronics directly; it flows through a metal plate pressed against the heat source, exchanging heat across that layer. It may not be the outright cooling champion, but its supply chain and operations are the smoothest: server-side maintenance feels close to air cooling — the rack side just adds a water loop and a monitoring system (CDU, quick-disconnects, leak detection, bleed, pressure). That’s why, by the GB200 / GB300 generation, mainstream AI rack-scale designs have clearly shifted to a DTC / cold-plate-centric architecture. Traditional cold plate has one built-in trait: it prioritizes the regular, big heat sources — CPUs and GPUs — while the memory, power, storage and board-level heat still ride out on air, so it’s usually “liquid + air” running side by side. The newest AI racks, though, are extending liquid coverage to more components — NICs, NVSwitches — pushing that remaining air burden lower.

③ Spray — coolant is misted precisely onto the hot components, exchanging heat as it lands. Plenty of engineering imagination, but the weakest ecosystem and the hardest to scale — the least used of the three.

Four years on, a reality check: cold plate is the mainstream; immersion is coming back, with rising interest in pilots and special high-density deployments, but in mainstream AI rack-scale delivery, cold plate is still the steadier bet. And two-phase immersion hit a snag these past couple of years — the low-boiling-point fluorinated fluids it leans on (like 3M’s Novec family) are PFAS “forever chemicals,” and 3M announced back in 2022 it would exit PFAS manufacturing by the end of 2025. Add tightening regulation in the US and EU, and the coolant base that two-phase depends on has entered a replacement window. So for anything you’re deploying today, the pragmatic center of gravity is still single-phase.

Look across those three pictures and you’ll notice: the difference isn’t only in how the heat travels — it’s in how a human fixes it when it breaks. And that’s exactly why the market didn’t end up ranking these by raw cooling power. It ranked them by operational friction + supply-chain maturity + policy pressure. The most thorough cooler — immersion — isn’t today’s mainstream. The one with the smoothest supply chain and lightest operations — cold plate — is.

## 5\. The plot twist: the cabinets sold out

Remember those cabinets I couldn’t give away on May 1?

Not long after — from the middle of that May onward — the wind shifted, fast. A wave of efficiency regulation tightened almost overnight. PUE stopped being a metric on an engineer’s slide and became the red line that decided whether a facility could keep running and whether customers dared keep investing. A huge swath of still-air-cooled rooms suddenly risked falling on the wrong side of the new bar — or at least stopped looking safe to invest in. And those “nobody wanted them” liquid cabinets in my warehouse happened to fit the moment perfectly.

They sold out in under a week.

The factory went to three shifts and still couldn’t keep up. Before long, customers were paying in full for delivery slots six months out. In under a year, we’d built our immersion footprint to about 200 MW.

Here’s the part that’s easy to misread: policy didn’t suddenly make liquid cooling “right.” It made air cooling suddenly expensive, hard to justify, and potentially non-compliant. The demand had been there all along; policy just released it early.

That was the first time I truly felt it: a technology cycle and a policy cycle can collide, at one exact moment, with a “snap.” Before the inflection point, you look like a fool. After it, you’re a pioneer.

## 6\. The people who said “no” came back to ask how

The next year, at a major industry conference, I found myself sitting with the VP of a leading thermal-management company and the chief data-center architect of one of the largest cloud operators, talking about how liquid cooling was actually landing.

I mentioned, almost offhand: “We went through 2,000 tonnes of coolant last year.”

The room went quiet.

Because at that point, most of the industry was still debating whether to try liquid cooling at all. Two thousand tonnes of coolant in a single year meant we were long past demos and POCs — we were running a real, commercial-scale business.

After that conversation, the architect had one of his technical leads call me — for two full hours — asking the same question over and over: how did you actually do it?

From “two out of ten will even power one on” to “the biggest players are chasing you to ask how” took a little over a year. The technology hadn’t changed. What changed was that someone had outlasted the doubt.

Closing: the market doesn’t reward being right first

Look back at those “nobody dared power them on” cabinets, and they were pointed the right way all along — just a few years early.

Today, servers built for liquid cooling have moved from a handful of HPC niches into high-density AI racks; cold plate is the mainstream direction, immersion is returning, hybrid architectures are taking shape. That old bet — that liquid cooling would become the physical foundation of AI — turned out to be right.

I just paid for the lesson with a thousand-plus cabinets gathering dust: the market doesn’t reward being right first. It rewards being still standing when the timing finally arrives.

Classification is only the map. The hard part is standing in front of it and choosing: which path is right for your case?

Back then, the question everyone actually asked was blunt — “Are you doing water, or oil?” In plain terms, water mostly meant cold plate; oil meant immersion. Pick the wrong path and you don’t lose a single machine — you lose the whole system.

Next issue, we take that choice apart: water or oil, cold plate or immersion — and how to avoid choosing the wrong system.

— Jim Li, founder of NextGenergy. Power, cooling, and heat recovery for AI data centers, designed as one system.

##### _Sources & Notes_

-   _This is a personal account. The scale figures — a thousand-plus units, ~200 MW deployed, ~2,000 tonnes of coolant in a year — are the author’s own operating history, shared as experience, not industry statistics._
    
-   _Cold plate is mainstream for current AI racks: NVIDIA’s GB200 NVL72 is a rack-scale, liquid-cooled design; Lenovo’s GB300 NVL72 materials describe hybrid liquid-air cooling with roughly 90% liquid / 10% air at the rack level, with cold plates on CPU, GPU, NVSwitch and NIC._
    
-   _Hybrid is the norm, not the exception: LBNL’s data-center efficiency work notes many liquid-cooling deployments are hybrid — only part of the heat load leaves in liquid, the rest via air. Traditional cold plate covers the big heat sources (CPU/GPU); the newest racks extend liquid to more components._
    
-   _Two-phase / PFAS: 3M announced in December 2022 it would exit PFAS manufacturing — including fluorinated fluids — by the end of 2025. With tightening US and EU regulation, the fluid base two-phase immersion depends on has entered a replacement window; single-phase remains the pragmatic default today._
    
-   _PUE = total facility energy ÷ IT equipment energy (≥ 1.0 by definition); it measures facility overhead. Efficiency mandates keyed to PUE exist across multiple markets._
    
-   _Series: follows the physics, water, heat, and economics issues of Every Watt Counts. Next issue: choosing the coolant — water-based vs. oil/dielectric._
