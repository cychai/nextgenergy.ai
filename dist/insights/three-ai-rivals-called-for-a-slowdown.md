# Three AI Rivals Called for a Slowdown. Here Is What Our Side of the Industry Owes.

> The frontier safety debate reaches beyond the lab door. Energy responsibility, failure testing and fault containment belong on the infrastructure agenda now.

- Author: Jim (Junming) Li, Founder & CEO, NextGenergy
- Published: 2026-09-13
- Web page: https://nextgenergy.ai/insights/three-ai-rivals-called-for-a-slowdown
- First published: https://everywattcounts.substack.com/p/three-ai-rivals-called-for-a-slowdown
- Tags: ai-safety, commissioning, heat-reuse, failure-testing, leak-containment

---

![](https://substackcdn.com/image/fetch/$s_!Ucr8!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff6bb9e42-c666-434e-9cab-b44575e40539_894x596.png)

Dario Amodei has called for slowing the advance of frontier AI capabilities so safety work can keep up, and committed Anthropic to embedded third-party evaluators with employee-level access. Sam Altman backed the call and said OpenAI will bring in independent evaluators with employee-like access. Elon Musk also voiced agreement. [Reporting on the statements](https://apnews.com/article/d59552edcb27892d8ee4d98a48397706).

Three competitors, one position, inside twenty-four hours. That is a significant moment. It is not yet an agreement to stop model development — in his essay, Amodei is explicit that pacing is not halting training.

I have no standing in the alignment debate and will not pretend otherwise. But I noticed something in the proposal that our industry should recognize immediately.

**A disclosure before we go further: I lead NextGenergy, a business focused on liquid cooling and heat reuse. I have a commercial interest in these technologies; the requirements below should apply to our solutions too.**

---

## The labs are formalizing something our industry already learned

Step one of Amodei's plan is to let outside evaluators work inside the company with employee-level access — desks, badges, laptops, the same tools the internal risk team uses — under a contract that lets them publish what they find.

Data center professionals will recognize the principle immediately: independent commissioning, witnessed integrated systems testing, third-party certification. Uptime Institute's constructed-facility certification, for example, includes performance demonstrations after commissioning. [Uptime Institute's description](https://journal.uptimeinstitute.com/tiercertificationpreparation/).

These arrangements are not equivalent to permanent evaluators with employee-like access and the right to publish. Scope, duration and authority all differ. But the underlying claim is the same one our industry accepted decades ago: **a builder's assurance needs evidence that someone else can examine.**

Which means we are not speculating about how this behaves under pressure. We have run the experiment, and we know where it gets weak:

- The evaluator is engaged and paid by the party being evaluated. That does not automatically compromise independence, but it determines who can end the engagement.
- Test conditions get scheduled when they are most likely to pass.
- Findings raised late, under handover pressure, get reclassified from defects to observations.
- Nobody owns the failure that lands on the boundary between two vendors' scopes.

The questions that matter are therefore narrow and answerable: can the reviewer report an unfavourable result, does it reach the decision-maker, and can an unresolved failure actually prevent acceptance?

**Independence lasts exactly as long as the authority to make a finding count.** A contract is where that starts; access, competence, reporting routes and enforcement decide whether it holds.

So if outside scrutiny is the right answer inside the lab, the same standard applies to the systems that supply the electricity, circulate the coolant, and keep the equipment inside its operating limits.

My position is that AI capacity should be delivered with three obligations built in: **use energy responsibly, demonstrate how the facility behaves under failure, and contain faults before they spread.**

---

![](https://substackcdn.com/image/fetch/$s_!Dd9z!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F982fdf22-a6ab-4b47-8c97-cc77b018a9e6_1536x1024.png)

## 1. Energy responsibility is becoming a delivery issue

Start with the commercial reality rather than the moral one.

In July 2026, QTS said it would terminate its Digital Gateway project in Prince William County, Virginia, and withdraw associated filings, following a prolonged legal dispute. This is a project-specific example of how planning and litigation can stop development; it does not establish that capital was irrelevant. [QTS statement reported by Bisnow](https://www.bisnow.com/news/washington-dc/data-center-development/blackstones-qts-abandons-digital-gateway-project-ends-lawsuit-135295).

Days earlier, Brookfield and Bloom Energy announced an expansion of their financing framework for AI power projects from $5 billion to $25 billion. That is a financing framework, not evidence that the full amount has been deployed. [June 30 announcement](https://www.bloomenergy.com/news/brookfield-and-bloom-energy-expand-ai-infrastructure-partnership/).

Together, these examples support a narrower but important conclusion: **access to capital does not secure permission to build.**

Canada's Responsible Data Centre Development Principles encourage waste heat recovery and transparent, independently verifiable local-impact information. They are principles, not a blanket statutory heat-reuse requirement. [Federal principles](https://ised-isde.canada.ca/site/ised/en/canadas-responsible-data-centre-development-principles).

In August 2026 Oakville became the first Ontario municipality to enact a one-year interim control by-law pausing data centre development. Mississauga council has directed staff to prepare a similar by-law, scheduled for council consideration on 16 September; as of this article's date those are different stages. Elsewhere the outcome has gone the other way — Burlington and Hamilton councils rejected moratoriums, and a motion in Sault Ste. Marie was withdrawn before a vote. New Brunswick's proposed framework is under consultation until 2 October. [Oakville](https://www.oakville.ca/town-hall/news-notices/2026-news-releases-archive/oakville-council-approves-interim-control-by-law-to-support-further-study-related-to-data-centres/), [Mississauga](https://www.mississauga.ca/city-of-mississauga-news/news/mississauga-moves-to-pause-data-centre-development/), [New Brunswick](https://www.gnb.ca/en/gov/engagement-consultation/data-centre.html).

The pattern is not that municipalities are closing the door. It is that the door now has a question behind it.

None of this means heat reuse guarantees approval. It means resource use and community benefit belong in the delivery plan, with evidence behind the claims.

So at the design table the question is what useful value the site returns per kWh: how efficiently it supports computation, how much the cooling system consumes, and whether recoverable heat has a practical destination.

Heat reuse extends that value — Microsoft's project in Høje-Taastrup, Denmark connects a data center to local district heating — but only where there is a real customer for the heat. Temperature, distance, seasonal demand, and the cost of connecting all matter. Where a heat pump is needed to raise the temperature, its electricity belongs in the assessment too; Microsoft's own diagram includes that step.

Assess this early, while site selection and cooling architecture are still open. Retrofitting a useful heat outlet after those decisions harden leaves very few options.

And answer the unattractive question: **what happens when the heat customer cannot accept heat?** The facility needs a validated way to reject its load under that condition. Heat reuse should create community value, not an unmanaged dependency for computing operations.

### A word about the numbers we publish

There is a failure mode here I walked into myself, and it is the one most likely to discredit this whole agenda.

Earlier this year I published a water-use figure from a cooling tower we operated, in [*From 25 Tonnes a Day to Zero*](https://everywattcounts.substack.com/p/from-25-tonnes-a-day-to-zero-the). Later I went back and checked it the way a reviewer would. I expected to find an arithmetic error. There wasn't one — and that was worse.

One set of assumptions implied cycles of concentration of about 3.7, an entirely ordinary number. Moving the assumptions slightly — the latent heat value appropriate to tower temperatures rather than boiling, the latent fraction from all of it to eighty-five percent, then again for cool weather — produced estimates from 2.8 to 12.8. Those are sensitivity calculations, not measured operating values. But they are not error bars either. A plant at the bottom of that range and a plant at the top are running different water programmes entirely. Same make-up figure. Same nominal load. Same sentence in my newsletter.

The number was never shown to be wrong. **The boundary was missing.** I had not said whether load meant nameplate, peak or a daily average, which water streams the meter covered, or what period the reading represented.

**A number that is compatible with every story tells you nothing about which story is true.**

If we intend to ask the labs for verifiable claims, our own energy and water figures have to carry their measurement boundary, their operating conditions, and a name. A calculation that fits an anecdote cannot reconstruct a missing operating record.

![](https://substackcdn.com/image/fetch/$s_!Uk_O!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0c9bd108-ab78-4651-be95-6271c78f8168_1536x1024.png)

## 2. Safety starts in design and has to survive integrated testing

The pressure to bring capacity online is understandable. The danger is letting a completion date stand in for demonstrated operating readiness.

Two incidents make the distinction concrete, and the details matter more than the summaries.

In July 2026, a facility supporting Google Cloud services in the Netherlands saw **a three-millisecond voltage drop** on the utility feed. The chiller controller dropped offline during the transient; distribution pumps stopped and failed to restart. The side-A backup DRUPS did not take over the data hall load, due to electrical component failures. Data hall temperatures reached **44°C**, crossed the safe machine threshold, and equipment shut down protectively.

One line in that report deserves to be read twice. The redundant source, it says, "was not available due to known ongoing construction work at the facility."

Known. Ongoing. The site was carrying production load while its redundancy was compromised by work that had not finished. A three-millisecond event then found the gap. That is the distinction between a completion date and demonstrated operating readiness, stated in a single sentence by the operator themselves. [Google incident report](https://status.cloud.google.com/incidents/3BvH3LVGcupoYqV6F4Nw).

In November 2025, an Azure West Europe incident followed the same shape: a voltage sag stopped cooling units, and a previously unknown hardware fault prevented their automatic restart. Temperatures rose, storage scale units powered down, and recovery took roughly **nine and a half hours**, with sequential storage validation contributing to the extended recovery. [Azure incident review](https://azure.status.microsoft/status/history/?trackingId=2LGD-9VG).

These reports do not show that rushed construction caused either outage. They show something more useful: that **redundancy is not the same as recoverability**. Both sites had backup. In one, the backup itself did not pick up the load. In the other, the equipment could not restart. Neither failure would appear in a test that only asked whether the redundant unit exists.

Rack-scale liquid cooling makes these shared dependencies harder to ignore. Standing in front of a Wiwynn implementation of AMD Helios earlier this year, the part I kept looking at was not the GPU count. It was the boundary between the rack and the building — specifically, a manifold supplying coolant to compute trays and switch trays alike. [AMD's architecture description](https://www.amd.com/en/products/rackscale-solutions/helios.html).

When the switching fabric is liquid-cooled, cooling stops being an auxiliary utility serving the compute and becomes part of the compute fabric. **The thermal architecture has entered the reliability architecture**, and the review has to establish which compute and network functions remain available when an affected cooling section is isolated.

So the design review question is specific:

**How much IT load can the site sustain at its agreed summer design conditions, with one critical cooling component out of service?**

That is where coolant temperatures, outdoor heat rejection and redundancy turn an announced capacity figure into an operating limit. A headline density number alone is not a complete thermal specification — the specification is an operating envelope: steady load, load steps, redundancy state, fluid temperatures, flow, pressure drop, and behaviour during faults.

The answer has to state the conditions and the failure being considered. A spare pump does not answer what happens if the controls needed to start it are unavailable. A successful power transfer does not demonstrate that cooling circulation recovers in time.

The acceptance plan should cover loss of power, restart behaviour, unavailable equipment, and the sequence for restoring load. It should name who owns each test and who resolves a failure at the boundary between equipment packages.

**An acceptance result with no name on it does not tell you who authorized operation.** The record should identify who measured, under which conditions, against which standard or agreed project criterion, and who witnessed it — and it should name the owner's representative who accepts the outcome and any residual risk. A signature does not substitute for evidence. It establishes who stands behind it.

No design eliminates every risk. The obligation is to identify credible failure scenarios, establish acceptable responses, and verify them before the facility accepts the corresponding IT load.

---

![](https://substackcdn.com/image/fetch/$s_!h9Px!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F305a0b1f-1c4e-4988-a376-1d7d5ec751d6_1536x1024.png)

## 3. Liquid-cooling operations must keep faults local

Liquid cooling connects IT equipment through shared fluid circuits, so maintenance has to account for the system as well as the device being serviced. Air-cooled facilities have shared dependencies too; the difference is that servicing liquid-cooled equipment can involve disconnecting a fluid interface, with consequences for isolation, containment and restoration.

My requirement is simple: **a local leak should remain a local incident.**

That is a design objective to prove, not a property to assume. The right response depends on the architecture and the location of the fault, and protecting equipment may mean taking a server, a rack, or a larger section out of service.

It also helps to stop treating "leak" as one risk. It is one word doing three different jobs, and the three are discovered at different times, solved in different ways, and owned by different parties: **manufacturing** defects to screen for before factory release; **delivery** damage from shipping, rigging and installation; and **service life** failures from corrosion, vibration, thermal cycling and maintenance error. These are risk origins and control stages, not guaranteed discovery times: a manufacturing defect may only emerge in service. Each stage needs its own evidence and assigned responsibilities.

Define the acceptance criterion before selecting a leak-test method. Asking "helium or pressure decay?" before defining the allowable leak rate turns a process question into a purchasing question. The criterion has to specify the allowable rate, test medium, pressure, temperature, duration and detection capability, governed by the applicable component limits and project requirements.

Assembly-level verification matters just as much: a component test says nothing about the connections made later during installation. Any newly made or disturbed connection needs a verification procedure before return to service. And strength testing and leak-tightness testing answer different questions — a pressure multiplier copied from a general reference is not a complete test specification.

For the fault itself, OCP's Leak Detection and Intervention white paper treats detection and intervention as related engineering decisions, including electrical shutdown and fluid isolation. Detecting liquid is only the beginning of the response.

Four questions belong in the review:

- Can the selected sensors detect the actual coolant at the locations that matter?
- What section can be isolated, and which unaffected equipment is intended to keep running?
- How are fluid isolation, electrical protection and the cooling response coordinated?
- What checks authorize returning the affected section to service?

Those answers have to reach the operator's procedure. Before a server is disconnected, the operator should know which boundary is being opened, how the section is made safe, and how it will be checked before reconnection.

The practical measure of resilience is the consequence of a fault: what is affected, how quickly it is contained, and what is required to recover.

---

## We can act before the frontier debate is settled

Model safety and infrastructure safety involve different hazards and should not be treated as interchangeable. A delayed data center cannot be counted on to buy the evaluation time AI researchers are asking for. A site delay alone does not establish the pace of frontier capability gains or how any additional time will be used.

But the debate creates a useful moment for our industry to say what responsible delivery means.

For me it means assessing heat reuse while it can still influence the design, and publishing numbers that carry their boundaries. It means proving failure response across the power and cooling interfaces, and putting a name on the result. It means defining isolation boundaries and making safe maintenance possible in practice.

The call for outside evaluation makes the demand for verifiable evidence explicit. Our industry should apply that demand to its own energy claims, failure tests and operating procedures.

**We do not need to wait for an AI pause to recover useful heat, validate failure response, and prevent local faults from cascading.**

Which of these needs more attention in the projects you see: heat reuse, integrated failure testing, or liquid-loop isolation?

---

### Further reading

- [Amodei: We Must Pace the Frontier](https://darioamodei.com/post/we-must-pace-the-frontier)
- [OCP: Leak Detection and Intervention](https://www.opencompute.org/documents/acs-cold-plate-leak-detection-and-intervention-white-paper-pdf-1)
- [Microsoft: Høje-Taastrup heat-reuse project](https://local.microsoft.com/blog/datacenter_heat_repurposed/)
- [Microsoft: heat-reuse system diagram](https://download.microsoft.com/download/6/b/5/6b584695-4958-446b-811b-60569743b0c6/FINAL_Azure_HeatReUse_Infographic.pdf)
- [Canada's Responsible Data Centre Development Principles](https://ised-isde.canada.ca/site/ised/en/canadas-responsible-data-centre-development-principles)

Earlier in this newsletter:

- [*Power Is the Real Ceiling — and the Fastest Megawatt Is Already Plugged In*](https://everywattcounts.substack.com/p/power-is-the-real-ceiling-and-the) — QTS Prince William, Brookfield and Bloom, and why the fastest megawatt is the one already connected.
- [*From AMD Advancing AI 2026: Helios Is More Than a New Rack*](https://everywattcounts.substack.com/p/from-amd-advancing-ai-2026-helios) — the operating envelope behind a headline rack density.
- [*The Biggest Risk in Liquid Cooling Is Not Whether It Leaks. It Is When.*](https://everywattcounts.substack.com/p/the-biggest-risk-in-liquid-cooling) — manufacturing, delivery and service life: three windows, three owners, three bodies of evidence.
- [*From 25 Tonnes a Day to Zero: The Real Water Math Behind AI Cooling*](https://everywattcounts.substack.com/p/from-25-tonnes-a-day-to-zero-the) — the water figure I later went back and re-checked.
