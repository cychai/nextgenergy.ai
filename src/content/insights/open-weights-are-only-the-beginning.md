---
title: "Open Weights Are Only the Beginning: Expensive Tokens and Scarce Megawatts"
subtitle: "Models Can Be Downloaded. The Compute, Power, and Cooling Needed to Make AI Broadly Accessible Cannot."
date: 2026-07-27
source: substack
sourceUrl: "https://everywattcounts.substack.com/p/open-weights-are-only-the-beginning"
canonical: "https://everywattcounts.substack.com/p/open-weights-are-only-the-beginning"
tags: [power, ai-economics]
related: [/approach/thermal-path]
---

<!-- substack-body -->
**The model may be open. The tokens are still metered. And every megawatt still has to be built.**

## A Comment Viewed More Than 100,000 Times

After Jensen Huang shared “Open Weights and American AI Leadership” on LinkedIn, I read the letter carefully. It had been signed by a broad coalition of technology companies, investors, and open-source organizations.

What resonated with me most was not an ideological argument between open and closed systems, but a practical principle of efficiency: reserve frontier-scale compute for genuine frontier problems, and run more efficient, specialized models everywhere else.

I commented beneath Huang’s LinkedIn post: Open weights can let a factory, hospital, or farm run right-sized models on its own infrastructure—but that infrastructure still has to be powered and cooled. Model democratization addresses the software half of sovereignty. Making every watt that supports those models count is the half determined by the physical world.

In less than 24 hours, the comment received more than 104,000 views, 66 reactions, and 21 replies. A LinkedIn comment cannot prove an industry thesis, of course. But it was a signal: open models, compute efficiency, and AI infrastructure are touching a real and growing anxiety.

![Image: image1.png](https://substackcdn.com/image/fetch/$s_!YGRw!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3d40bc74-1641-4da5-8b3d-a89fb545654e_740x600.png)

_**Figure 1 | After Jensen Huang shared the open-weights coalition letter, the author’s comment received 104,794 views in less than 24 hours.**_

**If open weights are making advanced models more accessible, why is AI still so expensive to use?**

## Twenty-Five Years in IT: How Openness Changes Technology

Since entering the IT industry in 2001, I have watched open architectures, open-source software, and cloud-native technologies expand entire ecosystems. For more than eight years, my work has focused on infrastructure for high-density compute facilities.

Looking back, openness is not the only path to technological success. Closed systems can also produce exceptional products, powerful platforms, and outstanding experiences. Yet one pattern keeps recurring: when a technology must move beyond a single company, develop a broad ecosystem, and spread across industries, open standards, open interfaces, and open implementations often become critical accelerators.

Introduced in 1981, the IBM PC used a relatively open architecture, off-the-shelf components, and published technical reference materials, enabling other companies to develop compatible software and peripherals. In 1993, CERN placed the core World Wide Web software in the public domain and later released it under an open license, helping turn the Web from a laboratory project into a shared foundation for global innovation.

Linux, Apache, and MySQL lowered the foundational cost of building internet businesses. Hadoop, Spark, containers, and Kubernetes brought distributed computing and cloud-native capabilities to a much wider community of developers and enterprises. TensorFlow, PyTorch, and Hugging Face lowered the barriers to AI research, collaboration, and model adoption.

These technologies are not equally open. Some are open standards; some are open source; some expose open interfaces; others provide open weights. They should not be treated as equivalent. What they share is that openness reduces the coordination cost of participating in an ecosystem, allowing more people to build on a common foundation.

**Closed systems can create exceptional products. But open interfaces and ecosystems are often what allow a technology to move beyond one company and spread across society.**

## What Do Open Weights Actually Open?

“Open Weights and American AI Leadership” argues that a nation’s leadership in AI should not be judged solely by its single most capable frontier model, but by whether it can build a strong, open AI ecosystem that spreads across every sector.

Open weights can help drive that diffusion. Enterprises no longer need to train every model from scratch. Developers can fine-tune, quantize, and optimize models for specific tasks. Regulated organizations can keep data under their own control and within their own environments. Users do not have to lock all of their knowledge, workflows, and capabilities into a single API provider.

More importantly, open weights give organizations the option to match each task with the right model instead of calling the most powerful—and most expensive—model every time: frontier models for genuine frontier problems, and smaller, faster, more specialized models for routine work.

This may be the sustainable path to billions of everyday AI tasks. But open weights primarily address model availability. They do not fully solve token affordability, and they certainly do not solve infrastructure deployability by themselves.

## CA$158.20 per Month—and Nearing a Model-Specific Limit in Two Days

I subscribe to Claude Max at CA$158.20 per month.

![Image: image2.png](https://substackcdn.com/image/fetch/$s_!Z1Ao!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F30fff958-f749-4c51-ab6a-928bce52a980_1420x602.png)

_**Figure 2 | The author’s Claude billing page shows three consecutive monthly charges of CA$158.20.**_

After roughly two days of intensive use, the limits page showed 59% usage for “All models” and 93% for the category labeled “Fable” (the notice identifies it as “Fable 5”), putting that model-specific weekly allowance close to its limit.

![Image: image3.png](https://substackcdn.com/image/fetch/$s_!5Ta5!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fed1d42f8-b7b3-4a77-97fe-367944cff453_1510x644.png)

_**Figure 3 | After roughly two days of intensive use: All models at 59% and Fable at 93%; the notice identifies the model as “Fable 5.”**_

This is not an argument that Claude is a poor product. Quite the opposite: I continue to pay for it because it has become a valuable productivity tool. Nor is this a comprehensive review of the plan. Actual consumption varies with model selection, context length, reasoning effort, agentic workloads, and system rules.

But the experience reveals a more fundamental economic reality. AI may look like a software service, yet underneath it remains a metered product constrained by scarce physical resources. Even at more than CA$150 per month, a heavy user must still manage allowances, model choice, and usage patterns. That is true for individual professionals—and even more so for startups embedding millions of AI calls into their products.

## Startups Are Not Looking for the Strongest Model. They Are Looking for the Cheapest Model That Is Good Enough.

In recent conversations with U.S. founders and AI product teams, I have noticed a clear shift. Many teams no longer ask only, “Which model is the best?” They ask, “Which model can complete this task reliably at the lowest cost?”

This is not a retreat from technical ambition. It is the inevitable maturation of AI as it enters commercial operations. More systems are adopting model routing:

-   Send complex reasoning to frontier models, while assigning classification, extraction, and simple generation to smaller models;
    
-   Serve repeated requests from cache and compress long contexts;
    
-   Use fine-tuned, quantized, or distilled models for specialized tasks;
    
-   Self-host open-weight models when utilization is high enough.
    

Open weights therefore create a commercially meaningful choice: an organization can buy, call, route, or self-host. But self-hosting is not a free lunch. An API bill may simply become spending on GPUs, engineering teams, power, cooling, networking, operations, and responsibility for reliability.

**Open weights do not eliminate cost. They change who bears it, where it appears, and whether an enterprise can control it.**

## A Token Is a Software Unit—and a Receipt for Physical Resources

In a user interface, a token looks like a measure of text length or an API billing unit. Economically, however, every token represents a metered claim on physical infrastructure:

-   Accelerator compute time and high-bandwidth memory;
    
-   Interconnect traffic between chips, storage, and data transfer;
    
-   Electrical power;
    
-   Heat rejection and cooling-system capacity.
    

**A token may look like a software unit. Economically, it is a metered claim on physical infrastructure.**

This is why token prices do not automatically fall to zero as more models become open. A model developer can publish weights, but a download cannot replicate GPU manufacturing capacity, grid capacity, substations, liquid-cooling systems, or data centers.

## You Can Download the Model. You Cannot Download a Megawatt.

The coalition letter calls for AI to spread into manufacturing, healthcare, agriculture, education, and everyday commercial settings. I agree with that direction. But what looks like a software proposition at the surface ultimately becomes a physical-infrastructure proposition.

An organization can download a model in minutes. It cannot obtain, in minutes:

-   One megawatt of reliable power;
    
-   A facility capable of supporting high-density GPU systems;
    
-   A liquid-cooling and heat-rejection system;
    
-   A substation;
    
-   A team capable of integration, commissioning, and long-term operations;
    
-   A destination that can absorb the heat continuously.
    

**You can download the model in minutes. You cannot download a megawatt, a cooling system, or a place for the heat to go.**

Open weights do not eliminate AI’s bottlenecks. To some extent, they move the constraint from the model layer to the compute layer—and then from compute to megawatts, the grid, and cooling systems.

![](https://substackcdn.com/image/fetch/$s_!LMXU!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffe5a9a38-7712-497d-b024-3d4b202aafa3_1672x941.png)

_**Figure 4 | Open weights can be downloaded, but GPU compute, power, liquid cooling, and a productive destination for recovered heat must still be built in the physical world.**_

## From Model Sovereignty to Infrastructure Sovereignty

Owning the weights matters. It allows an organization to inspect, modify, and deploy a model while reducing dependence on a single platform. But possessing a model file is not the same as having the capability to operate that model continuously.

Meaningful control over AI includes at least the ability to:

-   Access and modify the model;
    
-   Control one’s own data;
    
-   Decide where the model runs;
    
-   Afford sustained inference and post-training costs;
    
-   Secure the necessary compute and energy;
    
-   Power the equipment reliably and reject the resulting heat.
    

**Owning model weights without the ability to run them is not full AI sovereignty. It is a software right, not a physical capability.**

## Distributed AI Does Not Need Miniature Hyperscale Data Centers

Open weights may lead to more distributed AI deployment. Hyperscale training clusters will not disappear, but we are likely to see more private enterprise AI clusters, deployments in regulated industries, regional AI factories, specialized models at manufacturing sites, and inference infrastructure located closer to the source of the data.

These environments usually cannot copy a hyperscaler’s infrastructure model. A hospital basement, factory equipment room, or regional data center cannot each build a scaled-down hyperscale chilled-water plant. They face constraints in space, power, water, construction schedules, and operating expertise.

AI infrastructure therefore requires a different delivery model:

-   Smaller, repeatable modular systems;
    
-   Factory prefabrication, integration, and acceptance testing;
    
-   Closed-loop designs with minimal on-site water use;
    
-   Co-design of power, liquid cooling, and controls;
    
-   Compatibility across chip and server platforms;
    
-   Fewer field interfaces, with more testing and pre-commissioning completed before delivery.
    

AI equipment is changing, and the way we deploy it must change as well.

## The Physical Layer Is Not Only a Constraint. It Can Also Create Value.

Discussions of AI infrastructure often treat power and heat as burdens. But when a system is designed from the outset around appropriate return-fluid temperatures and a productive destination for the heat, data-center heat can support space heating, domestic hot water, greenhouses, and low-temperature industrial processes. Under suitable conditions, it can also drive absorption cooling.

In hospitals, factories, or agricultural settings, AI compute may be more than a new electrical load; it may become part of the local energy system. Of course, heat recovery is not economically viable for every project. Source temperature, distance, seasonality, load matching, and commercial responsibility all require engineering evaluation.

**Heat is waste heat only when the system has not designed a productive destination for it.**

## Twenty-Five Years in IT and Six Years in Liquid Cooling Revealed the Same Pattern

Since entering IT while at university in 2001, twenty-five years across software, the internet, and infrastructure have taught me that software spreads through open interfaces. More than eight years working on infrastructure for high-density compute facilities have taught me that physical infrastructure scales only through engineered interfaces. Since 2020, I have focused more specifically on liquid cooling.

The software world values compatibility, portability, composability, and freedom from lock-in. The physical world must contend with supply and return coolant temperatures, flow rates and pressure drop, quick-disconnect couplings, coolant distribution units (CDUs), distribution manifolds, electrical interfaces, control logic, factory acceptance testing (FAT), on-site commissioning, and clearly defined long-term responsibilities.

Openness cannot stop at the model layer. If AI is truly to enter every industry, we also need interoperable rack-level architectures, more standardized liquid-cooling interfaces, repeatable prefabricated infrastructure, more transparent accounting for power and water, and clear responsibility for systems integration and service.

**Open weights determine who can participate in model innovation. Infrastructure determines where that innovation can actually run.**

## Open Weights Are a Starting Point, Not the Finish Line

The open-source era taught us that innovation accelerates when more people can participate in building. Open weights may bring the same force to AI. They can expand choice, strengthen competition, reduce model lock-in, and give more organizations AI capabilities of their own.

This time, however, the software is not running on idle servers under office desks. It runs on infrastructure measured in megawatts. It requires rack-level cooling, high-density power delivery, and high-speed networking, and it is constrained by the grid, water resources, land, and the carrying capacity of surrounding communities.

Open weights address the first barrier to making AI broadly accessible, not the last. If AI is truly to reach factories, hospitals, farms, schools, and Main Street businesses, we must solve model availability, token affordability, and compute-infrastructure deployability at the same time.

**The model may be open. The tokens are still metered. And every megawatt still has to be built.**

_— Jim Li, founder of NextGenergy, focuses on power, cooling, and energy reuse for AI compute infrastructure. He is working to move next-generation AI data centers beyond single-point equipment optimization toward integrated system design across power, liquid cooling, and heat recovery._

#### _References_

-   _[“Open Weights and American AI Leadership,” July 24, 2026, Microsoft official page (the same letter is also available as an NVIDIA PDF).](https://www.microsoft.com/en-us/corporate-responsibility/topics/open-weight/)_
    
-   _[IBM History: “The IBM PC.”](https://www.ibm.com/history/personal-computer)_
    
-   _[CERN: “The Birth of the Web”; CERN placed the Web software in the public domain on April 30, 1993, and later released it under an open license.](https://home.cern/science/computing/the-birth-of-the-web/)_
    
-   _[Kubernetes Blog: “10 Years of Kubernetes.”](https://kubernetes.io/blog/2024/06/06/10-years-of-kubernetes/)_
    
-   _[Anthropic Help Center: Claude Max is offered in US$100 and US$200 monthly tiers (for plan context; the CA$158.20 figure comes from the author’s invoice).](https://support.anthropic.com/en/articles/11049762-choosing-a-claude-plan)_
    
-   _Author’s LinkedIn comment, Claude invoice, and usage-limit screenshots, July 2026 (primary-source materials)._
