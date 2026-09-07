---
title: "Liquid Cooling Is Running Ahead of Its Own Rulebook"
subtitle: "The ten terms behind certification, interoperability — and the white space where project risk actually lives"
date: 2026-08-03
source: substack
sourceUrl: "https://everywattcounts.substack.com/p/liquid-cooling-is-running-ahead-of"
canonical: "https://everywattcounts.substack.com/p/liquid-cooling-is-running-ahead-of"
tags: [liquid-cooling, standards, commissioning]
related: [/evidence/standards, /evidence/commissioning, /evidence/turnover]
---

<!-- substack-body -->
![](https://substackcdn.com/image/fetch/$s_!4-mo!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdcb41e03-efd5-49a3-9d6b-f8ed2603b674_1024x1536.png)

_The three layers of liquid-cooling compliance — safety, interoperability, and the white space where the real risk lives._

Ask whether a liquid-cooling system is certified and the answer will often be yes.

The pump may be Recognized. The control panel may be Listed. The CDU may have been tested to a defined standard. The rack may align with an OCP specification. And the assembled installation may still have no approval path acceptable to the local authority.

Every one of those statements can be true at the same time.

That is the problem with the word certified: it compresses several different kinds of evidence into one reassuring — but incomplete — answer.

So “Is it certified?” is the wrong opening question. The useful questions are:

-   What exactly was evaluated?
    
-   Against which standard and edition?
    
-   At component, panel, product or installed-system level?
    
-   Under what fluid, pressure, temperature and fault conditions?
    
-   What remains outside the evaluation?
    
-   And, ultimately, will the authority having jurisdiction accept the installation?
    

Liquid-cooling compliance is easier to understand when divided into three layers. The first is mature but largely borrowed. The second is liquid-specific but still forming. The third is the white space: the issues most characteristic of liquid cooling, where no single mark closes the risk.

## **Layer 1: Safety — mature, but largely borrowed**

![](https://substackcdn.com/image/fetch/$s_!ev8r!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fec3f69de-7b03-4fa5-82b0-076cff8076d2_1536x1024.png)

_Certification does not transfer up the chain. A certified component, a Listed product and an installed system are different objects — and only the AHJ approves the installation itself._

The established safety system is not disappearing. Liquid cooling inherits it.

That is useful: decades of electrical-product safety, fire protection, pressure-system practice and code enforcement provide a functioning route to approval. But it also creates a trap. A familiar logo can be mistaken for coverage of an unfamiliar complete system.

### **1\. AHJ: the final decision is local**

The Authority Having Jurisdiction, or AHJ, is the organization, office or individual responsible for enforcing the applicable code and approving the installation.

Depending on the project and location, that may involve an electrical inspector, fire marshal, building official or another designated authority. The AHJ does not merely check whether a logo is present. The AHJ considers whether the certification applies to the actual equipment, configuration and intended use.

This is why early engagement matters. Discovering at energization that the available documentation covers a component — but not the assembled skid, controls or field modifications — is an expensive way to learn what the AHJ requires.

### **2\. NRTL: an organization, not a generic mark**

In the United States, a Nationally Recognized Testing Laboratory is an organization recognized by OSHA to certify products within a defined scope and against specific test standards. UL Solutions, Intertek and CSA Group are examples; each uses its own certification marks.

This distinction matters because “UL” is often used casually as if it meant “certified.” It does not. UL Solutions is one certification organization. ETL is a certification mark used by Intertek. The relevant questions are which organization performed the evaluation, which mark was applied, and which standard and product category sit behind it.

### **3\. Listed versus Recognized: end product versus building block**

A Listed product is evaluated as an end product for a defined use and installation context. A Recognized Component is evaluated as a part intended to be incorporated into another product, subject to stated Conditions of Acceptability.

That component status is valuable, but it is not transferable by assembly. A recognized pump, power supply, controller, connector or heat exchanger does not make the finished CDU Listed. A certified industrial control panel does not necessarily certify the pumps, valves, piping and cooling equipment it commands. Field-added parts may also change the configuration that was originally evaluated.

_Certified parts do not automatically create a certified system._

### **4\. UL/IEC/CSA 62368-1: safety is not cooling performance**

IEC 62368-1, with national versions such as UL 62368-1 and CSA C22.2 No. 62368-1, is widely relevant to audio/video and information and communication technology equipment. It is an equipment-safety standard based on identifying energy sources and applying safeguards against pain, injury and property damage.

But it does not, by itself, certify that a complete liquid-cooling installation will deliver the required thermal performance. Nor does it prove fluid compatibility across every wetted material, the absence of leaks over the project life, or successful integration between facility water, CDU controls, rack manifolds and IT equipment. Safety and performance evidence answer different questions. A project needs both.

### **5\. Field Evaluation: the route for what was built, modified or customized**

Liquid-cooling systems are often assembled as skids, modified for a site or integrated from multiple suppliers. The final configuration may not match a factory-Listed product.

A Field Evaluation provides a site-specific assessment of unlabeled, modified or custom equipment. A qualified field-evaluation body examines the installed configuration, applicable requirements, construction and testing, then supplies findings or a field label for the AHJ’s consideration. It is not a universal certificate for every future copy of the system — it is a practical route for the equipment at that location, and it should not be treated as a late-stage rescue plan.

## **Layer 2: Interoperability — still forming**

![](https://substackcdn.com/image/fetch/$s_!KRf4!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0b909e98-e3e0-4645-a677-2b61ccf715bb_1536x1024.png)

_Conceptual illustration; operating values shown are illustrative only. The interoperability layer: fluids, quick disconnects, CDUs, manifolds and cold plates, defined through specifications and test conditions — not through a single universal certification._

Safety asks whether equipment can be used without unacceptable risk. Interoperability asks whether equipment from different parties will work together predictably.

Liquid cooling needs both, but interoperability is where the rulebook is still being written. The industry is developing specifications, guidelines and test methodologies for fluids, quick disconnects, cold plates, CDUs and immersion systems. These documents are real and increasingly important. They should not, however, be confused with one universal liquid-cooling certification.

### **6\. PG25: a test fluid is not a universal answer**

PG25 means a mixture containing 25% propylene glycol. It appears as a validation fluid in some OCP specifications and is familiar in single-phase cooling discussions. But the shorthand can conceal the engineering that matters.

“PG25” alone does not fully specify water quality, inhibitor chemistry, corrosion protection, biological control, conductivity, elastomer compatibility or long-term stability. Two fluids described with the same glycol percentage may not behave identically in a loop. The useful evidence is therefore not the name alone. It is the fluid specification, test method, test conditions and measured results.

_Conformance data is essential. It is not a safety mark._

### **7\. OCP Cooling Environments: specifications and recognition, not NRTL safety certification**

The Open Compute Project’s Cooling Environments work is helping build a common technical language around cold-plate cooling, immersion, facility interfaces, fluids, quick disconnects and test methods. That work includes different document types at different maturity levels: approved specifications, design guidelines, white papers, test methodologies and active drafts. They should not all be described simply as “guidelines,” and a draft should not be presented as if it were an approved specification.

Products can separately obtain OCP Accepted™ recognition by demonstrating alignment with an approved OCP contribution. That recognition is meaningful for openness and specification alignment. It is not a substitute for an NRTL product-safety certification, code compliance or AHJ acceptance. OCP has moved to consolidate product recognition under OCP Accepted™ and retire the OCP Inspired™ designation.

The distinction is not semantic. One mark may address alignment with an open technical contribution; another may address safety against a defined standard. A project must know which question each piece of evidence actually answers.

## **Layer 3: The white space — where the real risk lives**

![](https://substackcdn.com/image/fetch/$s_!7oQ0!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F184dc5e3-9969-425a-9553-f39b4df4d5aa_1536x1024.png)

_The white space: leak response, fluid life cycle and heat reuse — detect, recover, return value. The issues most characteristic of liquid cooling, where no single mark closes the risk._

The third layer is where liquid cooling stops looking like an electrical product with pipes attached and starts behaving like an operational system. Here, no single certificate resolves the complete risk. Responsibility crosses IT hardware, facility systems, water chemistry, controls, maintenance, environmental regulation and energy infrastructure.

This white space should not be mistaken for freedom from compliance. It means the burden shifts from checking a mark to designing the evidence, interfaces and operating responsibility.

My view is that this is where the next generation of liquid-cooling companies will be differentiated — not by claiming that the gaps have disappeared, but by turning them into explicit system architecture: measurable leak response, recoverable fluid and useful heat with a credible destination.

### **8\. Leak detection: there is no universal “leak-proof” certificate**

OCP’s Leak Detection and Intervention white paper provides classifications, detection approaches, intervention strategies and guidance for risk analysis. It also states clearly that it is “not intended as a specification to be used in design.” That sentence captures the current gap.

A supplier can provide valuable test evidence: hydrostatic testing, pressure-decay testing, burst testing, helium testing, connector-cycle testing and sensor verification. Yet no universal mark proves that the final installed system — across every joint, hose, cold plate, manifold, valve, sensor and control action — will remain leak-free throughout operation. The project therefore needs a leak strategy, not merely a component claim:

-   Where can a leak occur, and how quickly can it be detected?
    
-   Which sensors are direct and which are inferred?
    
-   What alarm thresholds and voting logic are used?
    
-   What shuts down: a server, rack, row or loop?
    
-   Are valves fail-safe on loss of power or communication?
    
-   How is the affected volume isolated, drained and repaired?
    
-   Who owns the response across IT and facilities teams?
    

_Leak detection without intervention logic is an alarm. It is not risk control._

### **9\. Coolant recovery and end of life: the fluid has a second life — or a disposal problem**

Coolant eventually leaves the loop. It may be replaced because of contamination, inhibitor depletion, material degradation, equipment changes or decommissioning. There is no single global, liquid-cooling-specific end-of-life standard that answers every case. Classification, handling, transport, recycling and disposal depend on the chemistry, contamination history, supplier instructions and local environmental rules.

These are questions easy to postpone during design: Can the fluid be tested and reconditioned, or downgraded to another use? How will it be captured during maintenance, and who owns it once removed? What documentation and waste classification are required? Is the supplier offering a recovery program — or only selling replacement fluid? The operational cost and environmental story of liquid cooling do not end at the drain valve.

### **10\. Heat reuse: the strongest teeth may be legal, not technical**

Liquid cooling can produce warmer, more concentrated heat than conventional air-cooling systems, improving the technical potential for heat recovery. But recoverable heat is not automatically useful heat. Value depends on temperature, distance to demand, seasonal coincidence, heat-pump requirements, commercial agreements and responsibility for the connecting infrastructure. A high recovery percentage in a design model means little if there is no durable heat customer.

Regulation is beginning to push this issue from aspiration into obligation. Germany’s Energy Efficiency Act, EnEfG §11, requires qualifying data centers entering operation from July 2026 to achieve a minimum reused-energy share of 10%. The threshold rises to 15% for those entering operation from July 2027 and 20% from July 2028, with defined conditions, timelines and exemptions. At EU level, reporting obligations under Delegated Regulation 2024/1364 apply to data centers with at least 500 kW of installed IT power. Separately, Article 26(6) of the Energy Efficiency Directive requires Member States to ensure that data centers with a total rated energy input exceeding 1 MW utilize waste heat or other recovery applications, unless technical or economic infeasibility can be demonstrated.

The mistake is to treat heat reuse as a sustainability feature added after the cooling architecture is fixed. By then, supply temperature, site boundaries and commercial responsibility may already have made useful recovery uneconomic. Heat reuse has to enter the design before the site is frozen — not after the heat has already been rejected.

## **The certification question a project should actually ask**

By the time a project reaches procurement, “Is it certified?” should have been replaced by an evidence matrix. For each part of the system, record:

1\. **Object —** component, control panel, end product, packaged system or installed assembly.

2\. **Claim —** Listed, Recognized, field evaluated, specification-conformant or independently tested.

3\. **Issuer —** who made or verified the claim.

4\. **Basis —** exact standard, specification, test method and edition.

5\. **Conditions —** fluid, concentration, temperature, pressure, flow, materials and fault states.

6\. **Exclusions —** what the evaluation did not cover.

7\. **Interface owner —** who is responsible where subsystems meet.

8\. **AHJ path —** the approval route and documentation required locally.

9\. **Operational proof —** commissioning tests, alarms, intervention logic and maintenance procedures.

10\. **End-of-life path —** fluid recovery, disposal and heat-use obligations.

This is less convenient than asking for a mark. It is also much closer to the way liquid-cooling risk actually behaves.

## **The gap is the risk — and the opportunity**

Liquid cooling is not operating without rules. It is operating across several rulebooks that were written for different purposes and are maturing at different speeds. The safety layer is established, but much of it is inherited from existing electrical, product-safety and mechanical frameworks. The interoperability layer is becoming more coherent through OCP and other industry efforts, but specifications, guidelines, drafts, test methodologies and product-recognition programs must be distinguished carefully.

The white space is the layer that will decide winners: leaks across the installed system, the fluid’s full life cycle and the conversion of rejected heat into value someone will actually use. These are the problems no borrowed mark closes — and precisely the ones a serious liquid-cooling company should be able to answer before a customer has to ask.

**That is the bet I am making.** The next advantage in this industry will not come from collecting more marks. It will come from closing the spaces between them: treating leak response as architecture, fluid recovery as part of the operating model, and rejected heat as a potential output rather than unavoidable overhead.

Standards will continue to catch up. Projects cannot wait for them to finish. The companies that matter will be the ones that can build responsibly in that interval — making the evidence, interfaces and ownership clear before the AHJ, the operator or the community has to ask.

The next time someone asks, “Is it certified?”, the best answer may be another question:

_Which layer — and what exactly do you need the evidence to prove?_

_Which layer creates the most friction in your projects: safety approval, interoperability — or the white space after the marks run out?_

_— Jim Li, founder of NextGenergy, focuses on power, cooling, and energy reuse for AI compute infrastructure. He is working to move next-generation AI data centers beyond single-point equipment optimization toward integrated system design across power, liquid cooling, and heat recovery._

#### _**Primary sources**_

_[OSHA — NRTL Program](https://www.osha.gov/nationally-recognized-testing-laboratory-program/)_

_[UL Solutions — Component Recognition](https://www.ul.com/industries/components)_

_[UL Solutions — Field Evaluations](https://www.ul.com/services/field-evaluations)_

_[OCP — Streamlining OCP Product Recognition](https://www.opencompute.org/index.php/blog/evolving-with-purpose-streamlining-ocp-product-recognition)_

_[OCP — Leak Detection and Intervention](https://www.opencompute.org/documents/acs-cold-plate-leak-detection-and-intervention-white-paper-pdf-1)_

_[Germany — Energy Efficiency Act (EnEfG) §11](https://www.gesetze-im-internet.de/enefg/__11.html)_

_[EU — Energy Efficiency Directive 2023/1791](https://eur-lex.europa.eu/eli/dir/2023/1791/oj)_

_[EU — Delegated Regulation 2024/1364](https://eur-lex.europa.eu/eli/reg_del/2024/1364/oj)_
