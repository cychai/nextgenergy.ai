---
title: "45°C Inlet Water: Another Milestone for Liquid-Cooled Data Centers"
subtitle: "Hotter than a hot tub — and one of the biggest efficiency leaps in the history of the data center."
date: 2026-06-27
source: substack
sourceUrl: "https://everywattcounts.substack.com/p/45c-inlet-water-another-milestone"
canonical: "https://everywattcounts.substack.com/p/45c-inlet-water-another-milestone"
tags: [liquid-cooling, free-cooling, cdu]
related: [/tools/approach-temp, /platform/cdu]
---

<!-- substack-body -->
NVIDIA just raised the coolant inlet temperature of its AI servers to 45°C — hotter than a household hot tub (38–40°C). It sounds backwards. Yet that higher temperature is one of the biggest efficiency leaps in the history of the data center. In one move it changes three things at once: how much energy cooling burns, how much water it uses, and whether the leftover heat becomes an asset.

On June 21, NVIDIA published a blog post titled “Hotter Than a Hot Tub”: the new Rubin architecture is the industry’s first 100% liquid-cooled AI infrastructure — every chip and every networking component has its heat carried away by liquid in a closed loop, with not a single fan in the entire system. Its coolant runs at an inlet temperature of 45°C (113°F).

After it published, several peers reached out with the same three questions:

> One. Why can we now run a 45°C inlet, when it used to be around 20°C?
> 
> Two. Won’t such a high temperature damage the chips?
> 
> Three. Why call this a milestone?

These are really three faces of the same shift: cooling is moving from a support function to core infrastructure. Let me take them one at a time.

## 1\. Why is a higher inlet temperature better?

Start with a number most people overlook: cooling has historically consumed as much as ~40% of a data center’s electricity. So if you want to cut power and lower PUE, the place to operate isn’t the chip — it’s the cooling system itself.

The single biggest energy hog in cooling is the chiller’s compressor. What it does, fundamentally, is pump heat from a low temperature up to a higher one — like pumping water uphill. The bigger the temperature lift, the more energy it burns. Traditional liquid cooling holds the supply water at around 20°C — at or below the outdoor air temperature — so you’re forced to run compressors to actively chill it.

Now raise the loop to 45°C in / 55°C out. That temperature is higher than the outdoor air for most of the year in most climates. Heat now flows “downhill” to the outside on its own — no compressor needed. You place rows of dry coolers outdoors and let fans push air across them. This is free cooling. As a rule of thumb, every 1°C you raise the cooling-water temperature drops cooling energy by roughly 2–4%. In short, hotter water reduces or eliminates the temperature lift the chillers have to create.

Going from ~20°C to 45°C is more than 20 degrees of headroom — which turns the compressor from “running all year” into “almost never on.” NVIDIA’s Ali Heydari notes their dry-cooler DSX reference design reaches near-zero water consumption, with a chiller needed in some climates only ~1% of the year. In dollars and gallons (illustrative figures — actual savings depend on power and water prices, climate, run-hours, and chiller backup):

-   A 50 MW data center, by moving to warm-water liquid cooling, can save on the order of $4 million a year in cooling power and water.
    
-   Facility water use can fall from ~2.6 million gallons per MW per year (vs evaporative cooling towers) to near zero.
    
-   Jensen Huang said the shift could help save roughly 6% of the world’s data-center electricity.
    

“Hotter is cheaper” doesn’t defy physics — it works with it.

![](https://substackcdn.com/image/fetch/$s_!Aw9Z!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6a20dbac-c687-4014-84ad-25bb9102fdf9_1448x1086.png)

## 2\. Won’t such a high temperature damage the chips?

The answer is no — and it rests on a piece of common sense the industry has misread for decades: what a chip fears has never been “warm coolant.” What it actually fears is its own junction temperature (the temperature of the silicon die inside) running out of control:

Junction temperature ≈ coolant temperature + heat load × thermal resistance (die → thermal interface material → cold plate → coolant)

Warm coolant doesn’t automatically mean hot chips; what matters is whether the thermal path is efficient enough to keep the junction temperature in range. The temperature rise from coolant to junction is set by thermal resistance and power — not by how cold the coolant is. The cold plate sits directly against the bare die, with very low resistance, and fast-flowing coolant pulls the heat away in real time. So even at a 45°C inlet, the junction stays inside its validated window (these chips typically sit around 85–90°C); raising the inlet only spends part of that margin. Performance is untouched.

Why is liquid so capable? A plain physical fact: by volume, water carries roughly 3,500× the heat capacity of air and conducts heat about 24× better. A thin film of liquid against the chip does what air needs hurricane-force airflow to accomplish. And air cooling hit the wall long ago:

-   The practical ceiling for air cooling is about 30 kW per rack.
    
-   Today’s NVIDIA Blackwell racks already draw ~120 kW.
    
-   On the roadmap, Rubin Ultra “Kyber” targets ~600 kW in 2027.
    
-   Beyond that, megawatt-class racks are on the horizon.
    

To remove more heat with air you must move more air, and fan power scales roughly with the cube of airflow — a losing spiral of hotter chips, more airflow, exploding fan power, and 85+ dB of noise. As Motivair’s Richard Whitmore put it: once watts-per-chip cross a threshold, liquid cooling moves from optional to mandatory. The real reason “45°C won’t damage the chips”: the workhorse of heat removal has shifted from “blowing cold air” to “pulling heat off the die with liquid.” In this new paradigm, a high inlet temperature is an advantage, not a risk.

![](https://substackcdn.com/image/fetch/$s_!cIV6!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fff178c38-4719-420e-b0e0-31ed7297d216_1448x1086.png)

## 3\. Why is this a milestone?

If you only see “saves power” and “saves water,” you’ve grasped half of it. What earns the word milestone is that it crosses three thresholds at once.

**The paradigm is locked in.**

Rubin is natively 100% liquid-cooled, with zero fans — so every operator that deploys it is pulled into liquid cooling. In one launch, NVIDIA turned warm-water liquid cooling from a fringe option into the industry default.

**Efficiency takes a structural step up.**

Going from “use less energy” to “no chiller, near-zero water” isn’t tuning — it’s a structural rewrite of the cooling system.

**Waste heat goes from liability to asset — the deepest threshold.**

Heat in the air-cooling era was low-grade: too cool, too diffuse, barely usable. A closed loop at 45°C in / 55°C out is the first time that heat becomes concentrated, steady, hot enough, and genuinely useful. The same stream can feed district energy, greenhouses, aquaculture, industrial preheat — and at the frontier, desalination or carbon capture. A data center stops being the thing communities resist and becomes infrastructure that gives back.

![](https://substackcdn.com/image/fetch/$s_!HmkQ!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffeaf0641-cb14-4648-aac1-a401bd973cca_1448x1086.png)

The economics already pencil out. Microsoft heats ~6,000 homes in Denmark (250,000 people planned in Finland); Google’s Hamina site meets ~80% of local heating; Meta’s Odense facility heats 12,000+ homes; an AWS site in Dublin supplies ~92% of a campus’s heat. Recovered heat is delivered at ~€12–30/MWh versus €35–55 for a gas boiler; capital cost runs about €190,000–250,000/MW against €730,000+ for new gas cogeneration — roughly 60% less. Denmark and Germany are legislating reuse, and the Open Compute Project published its “Data Center Heat Reuse Reference Design 1.0” in March 2025.

![](https://substackcdn.com/image/fetch/$s_!Kjv4!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F95e940eb-e6f3-488b-8fa0-ba550106a21a_1448x1086.png)

## We’ve been on this road for years

As early as 2020 we began building liquid cooling and waste-heat recovery for high-density compute — and putting the captured heat to work for real communities. On technology refined since then, our systems are deployed across more than 1 GW of installed capacity and have delivered clean heat to over 2,000,000 m² — homes, greenhouses, industry. We design high-density AI infrastructure as one system: power, cooling, and heat recovery together.

Back to the three questions — why 45°C is possible, why the chips are safe, why it’s a milestone. They’re three faces of one fact: the relationship between data centers and the energy system is being redefined. The real opportunity isn’t moving heat away — that’s step one. It’s deciding, now, what that heat is for.

Make every watt count.

— Jim Li, founder of NextGenergy. Power, cooling, and heat recovery for AI data centers, designed as one system.

##### _References & notes_

_• “Hotter Than a Hot Tub,” NVIDIA blog, June 21, 2026._

_• Cooling as a share of data-center electricity (historically as high as ~40%): widely cited industry figure; varies with design, climate, and PUE._

_• ~2–4% cooling-energy reduction per 1°C of higher water temperature: industry rule of thumb._

_• ~6% of global data-center electricity: Jensen Huang (NVIDIA) public remarks._

_• $4M/yr and 2.6M gal/MW/yr: illustrative; baseline is evaporative cooling towers, and figures vary with power/water prices, climate and run-hours._

_• Heat-reuse cases: Microsoft (Denmark; Finland planned), Google (Hamina, Finland), Meta (Odense, Denmark), AWS (Dublin); cost ranges from European district-energy data._

_• Open Compute Project, “Data Center Heat Reuse Reference Design 1.0,” March 2025._
