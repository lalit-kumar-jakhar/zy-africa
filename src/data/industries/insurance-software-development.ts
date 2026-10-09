import type { IndustryPageData } from "./types";

export const heroSection = {
  eyebrow: "Industries · Insurance",
  title: "Insurance software development for ",
  titleHighlight: "insurers and brokers",
  description:
    "Most insurance software problems are not interface problems. They are modelling problems that surface years later, when a claim has to be judged against a policy as it stood on the loss date and nobody kept that version. We build the parts where getting the model wrong is expensive to undo.",
  features: [
    "Versioned policy records",
    "Reserve history, not totals",
    "ACORD, FHIR and NHCX",
    "$40 to $100 per hour",
  ],
  scrollTarget: "#essence",
  ctaText: "Book a 30 minute technical call",
  bgImage: "/static/assets/industries/insurance-industries.webp",
};

export const seo = {
  primaryKeyword: "insurance software development",
  intent: "commercial",
  secondaryKeywords: [
    "policy administration system development",
    "claims management software development",
  ],
  competingUrl: null,
} as const;

export const essence = {
  title: "The short version",
  description: "The commercial facts in one block, before any of the detail. Policy administration system development and claims management software development are the two engagements this page is written for, and they meet at versioning. They are: Typical integration set, Phase one timeline, Rate band, Phase one range, Stack we actually use and Our commitment.",
  tiles: [
    {
      label: "Typical integration set",
      value:
        "A core policy or claims system you are keeping, a payment gateway, a document store, ACORD AL3 or XML feeds to and from broker systems, HL7 FHIR where health claims are in scope, and the regulator's own portal.",
    },
    {
      label: "Phase one timeline",
      value:
        "16 to 24 weeks for the worked example below, run as a squad rather than a single developer. Regulatory dates are the constraint that moves it, and those belong to somebody else's calendar.",
    },
    {
      label: "Rate band",
      value:
        "$40 to $100 per hour by role and seniority. Reporting and extracts near the floor, the policy model and reserve ledger near the ceiling. Mixed teams blend to around $65.",
    },
    {
      label: "Phase one range",
      value:
        "1,420 hours in the worked example, which is $56,800 to $142,000 across the rate band and about $92,300 at the blend. The cost section shows every module and its range, so you can argue with any line of it.",
    },
    {
      label: "Stack we actually use",
      value:
        "Python with FastAPI, Node, PostgreSQL and Next.js, with Terraform for infrastructure and Grafana and Prometheus for metrics. Postgres carries the versioned policy and the reserve ledger, because both are append problems before they are product ones.",
    },
    {
      label: "Our commitment",
      value:
        "No quote before a discovery that produces the integration inventory and the policy model decision. Two things we are not: we do not carry underwriting risk, and we do not transmit statutory filings or e-invoices on your behalf.",
    },
  ],
};

export const anchors = [
  { id: "who-this-is-for", label: "Is this us?" },
  { id: "sub-verticals", label: "What breaks for us?" },
  { id: "systems", label: "How does a policy change?" },
  { id: "compliance", label: "Which rules apply?" },
  { id: "what-goes-wrong", label: "What goes wrong?" },
  { id: "build-or-buy", label: "Build it or buy it?" },
  { id: "cost", label: "What does it cost?" },
];

export const operations = {
  title: "Where policy and claims systems earn their keep",
  description:
    "The stages a policy and a claim move through, and what we build at each one. The arc is: Quote and bind, Endorse and version, Notify loss, Reserve and revise, Adjudicate against the version in force and Settle, recover and close.",
  stages: [
    "Quote and bind",
    "Endorse and version",
    "Notify loss",
    "Reserve and revise",
    "Adjudicate against the version in force",
    "Settle, recover and close",
  ],  image: {
    src: "/static/assets/industries/insurance-operations-map.svg",
    alt: "Two band insurance map covering quote, endorsement and versioning, then notification, reserving and settlement.",
  },
};

export const segments = {
  title: "Who this is for",
  description:
    "Six positions we are usually called from, and the thing each one is missing. Not a fit: if you want a core system replaced end to end inside a quarter, or a partner who will carry the underwriting risk or file your statutory returns for you, we are the wrong firm and would rather say so on the first call.",
  items: [
    {
      title: "Insurer on a legacy core",
      line: "The policy administration system works and cannot be extended at the speed the product team wants. What is missing is a service layer that adds products and channels without a core upgrade cycle behind every one of them.",
    },
    {
      title: "MGA or cover holder",
      line: "You underwrite on someone else's paper and report to them on their schedule. What is missing is a bordereau pipeline that satisfies the carrier without three people rebuilding it monthly in a spreadsheet.",
    },
    {
      title: "Broker or agency",
      line: "You hold the client relationship and the carrier holds the data. What is missing is ACORD integration in both directions, so submissions and policy documents stop moving as email attachments.",
    },
    {
      title: "TPA or claims administrator",
      line: "You adjudicate for several payers, each with its own rules and formats. What is missing is one intake and reserve model that can serve all of them without a fork per client.",
    },
    {
      title: "Health insurer facing NHCX",
      line: "The cashless pathway was built portal by portal, hospital by hospital. What is missing is an FHIR claims interface, plus internal adjudication that can answer at the speed a standardised exchange invites.",
    },
    {
      title: "Embedded or affinity seller",
      line: "You sell cover alongside something else and the insurer's API decides your checkout. What is missing is a quote and bind layer that fails gracefully when theirs does, rather than blocking the sale.",
    },
  ],
};

export const subVerticals = {
  title: "Find your operation",
  description:
    "Insurance is one word for six businesses. What breaks is different in each, so what we build is different. Each operation below breaks differently, and they are: Motor and mobility, Health and benefits, Life and annuity, Commercial lines, Broking and MGA and Reinsurance and treaty.",
  items: [
    {
      title: "Motor and mobility",
      breaks:
        "Third party liability behaves nothing like own damage. In India the Motor Vehicles Act 1988 makes third party cover compulsory, liability for death or bodily injury is unlimited and set by a Motor Accident Claims Tribunal, and property damage carries a statutory cap. Section 149 is the part that breaks software: the insurer must satisfy an award in favour of a third party even where the insured breached a policy condition, then recover from the insured separately. A binary valid or declined state cannot express that.",
      build:
        "A claim state model where liability to the third party and recoverability from the insured are separate axes rather than one flag. Salvage and subrogation as ledger entries against the claim. Surveyor workflow with photographs attached to the estimate line they justify.",
    },
    {
      title: "Health and benefits",
      breaks:
        "Cashless authorisation was built one hospital portal at a time, so the same clinical question is answered differently depending on who asks. Group and individual books now diverge on tax as well: individual life and health premiums became exempt from GST on 22 September 2025 while group policies stayed at 18 percent, and exempt is not zero rated, so input tax has to be apportioned rather than claimed.",
      build:
        "An HL7 FHIR interface to the National Health Claims Exchange covering eligibility, pre-authorisation, submission, adjudication, payment and reconciliation as one flow. Adjudication rules held as versioned data, so a decision can be replayed against the rules that were live when it was made.",
    },
    {
      title: "Life and annuity",
      breaks:
        "A life contract outlives several generations of the system administering it, so the real requirement is that a policy issued decades ago still computes correctly under whatever engine is current. Bonus, surrender value and paid up calculations are contract specific and often documented only in the code implementing them.",
      build:
        "A product definition layer where contract terms are configuration with an effective dated history, so an old product keeps its own arithmetic instead of being approximated by the current one. Migration tooling that proves value equivalence policy by policy before anything is cut over.",
    },
    {
      title: "Commercial lines",
      breaks:
        "Commercial risks are schedules rather than single items, and rating depends on the composition of the schedule. Claims made wordings add a retroactive date, so the trigger is when the claim was made bounded by a date that can sit earlier than the policy itself. Certificates of insurance are issued in volume and are usually the least controlled document in the estate.",
      build:
        "A schedule aware rating and endorsement model where adding a location or a vehicle is a versioned change with its own premium effect. Retroactive date carried as a field on the coverage rather than as wording nobody parses. Certificate generation from the version in force, with a revocation path.",
    },
    {
      title: "Broking and MGA",
      breaks:
        "The submission goes out as a spreadsheet, the quote comes back as a PDF, and the bordereau is rebuilt monthly because no two carriers ask for the same columns. ACORD exists precisely for this and is usually implemented in one direction only.",
      build:
        "ACORD AL3 and XML in both directions, with a mapping layer per carrier rather than a fork per carrier. Bordereau generated from the policy and claims record rather than from an export. Commission calculated where the placement lives, so a query resolves in one system.",
    },
    {
      title: "Reinsurance and treaty",
      breaks:
        "Cessions are computed after the fact from a report, so the ceded position is a monthly estimate rather than a current figure. Treaty terms, layers, retentions and reinstatements live in documents, and the system applying them holds a simplified copy that drifts away from them.",
      build:
        "Treaty terms as structured data with layers and retentions modelled, so cession is computed when the risk is written rather than reconstructed later. A ceded ledger where every entry ties back to the individual risk that produced it.",
    },
  ],
};

export const systems = {
  title: "How a policy actually changes, and why a claim is judged against a version",
  description:
    "An endorsement carries its own effective date rather than the date somebody asked for it, and it can be backdated. A vehicle added on the twelfth and recorded on the twentieth was covered from the twelfth, so a system stamping changes with entry time has already lost the fact that matters. Adjudication then has to reconstruct a past state on demand and defend it. Here is the estate we expect to meet, and the modelling decisions that determine whether any of it can answer that question.",
  groups: [
    {
      group: "Enterprise property and casualty",
      body: "Guidewire PolicyCenter, Duck Creek Policy and Insurity are what large property and casualty carriers consolidate on. They are configurable rather than programmable, so the work is almost always integration and extension rather than replacement, and the constraint that decides the plan is which extension points the vendor supports at your version rather than at the current one.",
    },
    {
      group: "Life, annuity and mid market",
      body: "Sapiens, Majesco, FINEOS and Equisoft cover life and annuity, with Majesco also serving mid market carriers on a cloud delivery model. Life systems hold decades of product definitions, so the integration question is less about the API surface and more about which product variants are still genuinely computable.",
    },
    {
      group: "Cloud native, MGA and embedded",
      body: "Socotra, EIS, Instec, BriteCore, INSTANDA and Origami Risk are built for faster product launch and are common under digital MGAs and embedded programmes. They give up depth on reinsurance and complex products in exchange, which is a reasonable trade until the programme grows into the part that was given up.",
    },
  ],
  distinction: {
    title: "The distinction that saves projects",
    body: "A policy administration system, a rating engine and a claims system are three products, and buying one does not give you the other two. Nearly every rescue we are called into traces back to a plan that assumed a core purchase covered claims, or that the rating engine inside the core could price a product it was never designed for. The licence is the thing to read before the roadmap is written, not after the date has been committed, because the gap surfaces at exactly the point in the plan where there is no time left to close it.",
  },
  pairs: [
    {
      pair: "A policy record against a policy version",
      body: "One row per policy answers what cover is in force now. It cannot answer what cover was in force on a date in the past, which is the only question a claim actually asks. Versioning is not an audit feature bolted alongside the record, it is the record: the current state is simply the latest version rather than a separate thing kept in step with one. Retrofitting this later means reconstructing history from endorsement documents, and the reconstruction is only ever as good as the documents. Building it in costs more in the first month and less in every month after.",
    },
    {
      pair: "A case reserve against a reserve history",
      body: "A case reserve is what the handler currently expects a claim to cost. The history is every value it has held and when it changed. Actuaries build loss development triangles from that movement, and compare paid loss against case reserves to judge whether a book habitually under-reserves. A system that updates the reserve in place gives a correct current balance and destroys the input to both, which is why so many reserving exercises run off a spreadsheet extract nobody can tie back to the system. Append the movements; the current value is the latest entry.",
    },
    {
      pair: "ACORD AL3 against ACORD XML",
      body: "AL3 is a flat file, one way and batch, and it carries policy and commission data from carrier to agency. XML is request and response, built for real time transactions between rating, policy administration, underwriting, certificate generation and regulatory systems. They are not versions of each other. A broker integration needing a quote back inside a session cannot be built on AL3 however current the file layout is, and a nightly commission feed does not need XML. Choosing by age rather than by the shape of the interaction is expensive in both directions.",
    },
    {
      pair: "Adjudication rules in code against rules as versioned data",
      body: "Rules written into application code are quick to ship and impossible to replay, because the deployment that made a decision two years ago is long gone. Held as data with effective dates, the same rules let you answer why a claim was declined under the logic that was live at the time. The cost is a rule authoring and testing surface that has to be built and maintained, which is real work, and it is smaller than the cost of one regulator asking a question the system cannot answer.",
    },
  ],
};

export const compliance = {
  title: "Which rules apply to you",
  description:
    "Five standards a buyer in this sector asks for by name, then every regional instrument in one place. Tax slabs and regulatory dates move, so verify the regional row before contracting. The items are: ISO/IEC 27001, SOC 1 and SOC 2, GDPR and UK GDPR, DORA, PCI DSS and Everything regional, in one place.",
  rows: [
    {
      item: "ISO/IEC 27001",
      detail:
        "The information security management certification procurement asks for by name. For insurance work the scope statement matters more than the certificate itself, because the question actually being asked is whether policyholder and claims data sit inside the certified boundary or immediately next to it.",
    },
    {
      item: "SOC 1 and SOC 2",
      detail:
        "SOC 2 covers security and availability and is the standard ask from partners. SOC 1 covers controls feeding your customers' financial reporting, and it is the one that appears once you handle premium, claim payments or anything landing in a ceding company's accounts.",
    },
    {
      item: "GDPR and UK GDPR",
      detail:
        "Insurance processing runs on special category data almost by default, since health data, and often criminal conviction data, sit inside underwriting and claims. Lawful basis and retention are decided per data category rather than per system, and retention here is long because the liability tail is long.",
    },
    {
      item: "DORA",
      detail:
        "The Digital Operational Resilience Act was published in the Official Journal on 27 December 2022 and applies from 17 January 2025, covering insurers and reinsurers within the scope of Solvency II. Intermediaries come into scope above 250 staff, 50 million euro turnover or a 43 million euro balance sheet, with smaller ones exempt. On the same date EIOPA revoked its own guidelines on information and communication technology security and governance and on cloud outsourcing, so DORA replaced them rather than sitting beside them.",
    },
    {
      item: "PCI DSS",
      detail:
        "It applies wherever card data touches premium collection, and the useful move is almost always to keep it out of your estate entirely by tokenising at the gateway. Worth deciding deliberately, because a renewal flow that stores a card for convenience pulls the whole platform into scope.",
    },
    {
      item: "Everything regional, in one place",
      detail:
        "In India the Insurance Regulatory and Development Authority governs the surface. The Sabka Bima Sabki Raksha (Amendment of Insurance Laws) Act, 2025 received assent on 20 December 2025, raising foreign direct investment in insurers from 74 to 100 percent, cutting the reinsurer net owned fund requirement and introducing one time licensing for intermediaries; composite licences were not part of it. The Bima Sugam Insurance Electronic Marketplace Regulations, 2024 were notified on 21 March 2024 and require insurers to list products and offer servicing, claims and grievance handling through the marketplace, with the first phase live from December 2025. Every new policy has been issued electronically into an e-insurance account since 1 April 2024, held at one of four registered repositories. The Insurance Fraud Monitoring Framework Guidelines were issued on 9 October 2025 and come into force on 1 April 2026, replacing a 2013 circular and requiring a board approved anti-fraud policy, a fraud monitoring committee and an independent fraud monitoring unit. Health claims run over the National Health Claims Exchange on HL7 FHIR, live since June 2024 and not yet mandatory. Individual life and health premiums became exempt from GST on 22 September 2025 while group policies stayed at 18 percent. Ind AS 117 was notified by the Ministry of Corporate Affairs on 12 August 2024, though insurer adoption follows the regulator's own roadmap rather than that date. In Oman the Financial Services Authority replaced the Capital Market Authority under Royal Decree 20/2024 on 25 March 2024 and now supervises insurance, and the national health insurance platform Dhamani has been live since 1 January 2025, making cover compulsory for private sector employees, expatriates and visitors with the employer paying the premium. In the European Union, Solvency II sets the perimeter DORA uses and the Insurance Distribution Directive governs how cover is sold.",
    },
  ],
};

export const whatGoesWrong = {
  title: "What goes wrong",
  description:
    "Ten failure modes with the counter-practice attached. Naming them is more useful than a list of reasons to pick us. The opening three are: The policy stored as one mutable row, Endorsements stamped with the entry date and The case reserve updated in place.",
  items: [
    {
      title: "The policy stored as one mutable row",
      line: "Coverage history then exists only in the documents you generated, and a disputed claim is defended by searching a file share. Model the policy as versions with effective dates from the first sprint, because retrofitting it means rebuilding history out of PDFs.",
    },
    {
      title: "Endorsements stamped with the entry date",
      line: "Backdated changes apply from when somebody typed them, which is neither what the customer bought nor what the wording says. Carry the effective date as its own field and never derive it from a timestamp.",
    },
    {
      title: "The case reserve updated in place",
      line: "The current balance stays right while the development history disappears, and the actuarial team quietly moves to a spreadsheet. Append reserve movements instead, so the current value is simply the latest entry.",
    },
    {
      title: "A core purchase assumed to cover claims and rating",
      line: "Three products get budgeted as one, and the gap surfaces at the point in the plan with no time left in it. Inventory what the licence actually includes before the roadmap is committed.",
    },
    {
      title: "ACORD implemented in one direction",
      line: "Submissions flow out and everything coming back is rekeyed, so the integration halves the work and keeps all of the errors. Build both directions, or describe it honestly as a feed rather than an integration.",
    },
    {
      title: "Adjudication rules written into application code",
      line: "Nobody can replay a decision from two years ago because the deployment that made it is gone. Hold the rules as data with effective dates, and accept the authoring surface that comes with them.",
    },
    {
      title: "Third party liability modelled as one flag",
      line: "Under Section 149 an insurer can owe the third party while retaining recovery against the insured, and a single valid or declined field cannot hold both facts. Separate liability from recoverability in the state model.",
    },
    {
      title: "Migration validated on counts",
      line: "Policy counts match, premium totals match, and individual contracts are quietly wrong in ways that surface at renewal. Validate value equivalence per contract variety rather than reconciling on batch totals.",
    },
    {
      title: "Fraud scoring with no case management behind it",
      line: "Alerts accumulate and nothing routes, which is precisely the gap the fraud monitoring unit requirement exists to close. Build the queue, the disposition and the audit trail first, then attach the model to them.",
    },
    {
      title: "Certificates generated from current state",
      line: "They are the highest volume document in commercial lines and the least controlled, so one issued today can misstate cover that changed last week. Generate from the version in force on the certificate date and keep a revocation path.",
    },
  ],
};

export const buildOrBuy = {
  title: "Build, buy, or buy the core and build the edge",
  description:
    "The honest answer is usually the third one. Two judgements sit outside this table because they are not ours to make: we do not carry underwriting risk, and we are not an accredited service provider for e-invoicing or statutory filing.",
  rows: [
    {
      option: "Core policy administration",
      best: "Buy",
      verdict:
        "Configurable products with decades of edge cases already handled. Building one is a decade of somebody else's bug reports that you have not read yet.",
    },
    {
      option: "Rating engine and product definitions",
      best: "Buy the core",
      verdict:
        "Buy the engine, then build the product definitions on top of it. The engine is commodity; how your products price is not, and that is where the commercial difference actually lives.",
    },
    {
      option: "Policy versioning and effective dating",
      best: "Build",
      verdict:
        "Only where your core does not do it properly. If it does, use it. If it does not, this is the one thing worth building rather than working around, because every question the system will ever be asked depends on it.",
    },
    {
      option: "Claims intake and adjudication",
      best: "Buy the core, build the edge",
      verdict:
        "Buy the case management. Build the rule layer, the reserve ledger and the integrations, because those are exactly where your book differs from the vendor's assumptions about an average one.",
    },
    {
      option: "Fraud detection",
      best: "Buy the core, build the edge",
      verdict:
        "Buy the scoring. Build the case management, disposition and audit trail around it, which is the part the regulator is actually asking about under the 2026 framework.",
    },
    {
      option: "Document generation",
      best: "Buy",
      verdict:
        "Mature, cheap and dull. The only part worth building is the resolution of which policy version a given document renders from.",
    },
    {
      option: "ACORD integration",
      best: "Buy the core, build the edge",
      verdict:
        "Buy the parser and the schema tooling. Build the per carrier mapping, because no two carriers use the standard in quite the same way and that variance is permanent.",
    },
    {
      option: "Payments and card handling",
      best: "Buy",
      verdict:
        "Tokenise at the gateway and keep card data out of your estate entirely. This is a scope decision rather than a feature decision, and it is far cheaper taken early.",
    },
    {
      option: "GST e-invoicing transmission",
      best: "Buy",
      verdict:
        "Only an accredited service provider may transmit to the portal. We build the data that goes into it and integrate with the provider you appoint. We are not one and will not present ourselves as one.",
    },
    {
      option: "Regulatory returns and filings",
      best: "Buy the core",
      verdict:
        "Buy the filing tooling and build the extracts feeding it. The filing itself stays yours, and any supplier telling you otherwise is describing a liability they cannot hold.",
    },
    {
      option: "Portals and agent consoles",
      best: "Build",
      verdict:
        "The interface is where you differentiate and where vendor defaults cost the most. It is also the cheapest thing on this table to build well.",
    },
  ],
};

export const cost = {
  title: "What insurance software development costs, with the arithmetic shown",
  description:
    "Every competitor publishes a total with no hours behind it. Here is the rate, the hours and the multiplication, so you can argue with any line. The scope priced here is a general insurer keeping its core and taking claims in house.",
  drivers: [
    {
      driver: "How many products, and how variable the rating",
      hours: "High impact",
      note: "One motor product prices very differently from a schedule rated commercial book, and the difference lands in rating configuration rather than in the interface.",
    },
    {
      driver: "Whether the policy model already versions",
      hours: "The largest swing",
      note: "If it does, this is integration work. If it does not, effective dating has to be introduced underneath everything else, and nothing on this page costs more to add late.",
    },
    {
      driver: "Which lines are in scope",
      hours: "Adds real scope",
      note: "Claims made wordings add a retroactive date, which is a second axis on coverage resolution that occurrence wordings simply do not have.",
    },
    {
      driver: "Which core you keep, and what it really exposes",
      hours: "80 to 200 each",
      note: "Vendor API surface at your specific version, not at the version in the current documentation. This is the single most common source of a mid-build surprise.",
    },
    {
      driver: "Claims volume, and whether reserve history exists",
      hours: "220 to 380",
      note: "Building the ledger is bounded work. Reconstructing history that was overwritten is not bounded, and is sometimes simply not possible.",
    },
    {
      driver: "How many regulators, and which returns",
      hours: "Medium",
      note: "One jurisdiction is a section of work. Three is a programme with its own reporting model, provided the extract layer was kept out of the transaction path.",
    },
    {
      driver: "How many in force policies migrate",
      hours: "Rarely small",
      note: "Value equivalence testing scales with contract variety rather than with policy count, so a small book of unusual contracts can cost more than a large uniform one.",
    },
  ],
  modules: [
    { module: "Policy data model with versioning and effective dating", hours: "200 to 320" },
    { module: "Product and rating configuration", hours: "180 to 300" },
    { module: "Quote and bind flow", hours: "140 to 240" },
    { module: "Claims intake, reserve ledger and adjudication", hours: "220 to 380" },
    { module: "Document generation and the repository path", hours: "100 to 180" },
    { module: "Integrations: core, payments, ACORD or FHIR", hours: "180 to 320" },
    { module: "Reporting, regulatory extracts and audit trail", hours: "140 to 240" },
  ],
  math: {
    title: "Phase one, added up",
    points: [
      "Policy data model 260 plus rating configuration 220 plus quote and bind 180 plus claims and reserve ledger 280 plus documents 110 plus integrations 220 plus reporting and audit trail 150 equals 1,420 hours. Every one of the seven sits inside its own published range above, so you can move any line and see what it does to the total.",
      "At $40 per hour that is $56,800. At $100 per hour it is $142,000. At a $65 blended rate, about $92,300. The full span across the seven modules is 1,160 hours at every minimum to 1,980 at every maximum.",
      "Outside that number, with their ranges intact: quality assurance at 20 to 25 percent of build, environments and deployment at 80 to 160, security review and penetration testing at 60 to 120, actuarial reporting extracts at 100 to 200, fraud monitoring unit tooling at 120 to 240, and treaty and cession modelling at 160 to 320. The last three are usually phase two, and they are listed rather than dropped because this page argues for all of them.",
    ],
  },
};

export const costHighlights = [
  {
    label: "Phase one range",
    value: "$56,800 to $142,000",
    note: "The 1,420 hour worked example at the ends of the rate band, about $92,300 at a $65 blend.",
  },
  {
    label: "Typical timeline",
    value: "16 to 24 weeks",
    note: "As a squad. A regulatory deadline inside the window compresses scope rather than the calendar.",
  },
  {
    label: "Useful hours",
    value: "1,160 to 1,980",
    note: "Every module at its minimum, through to every module at its maximum.",
  },
];

export const engagement = {
  title: "Engagement models",
  description:
    "Four models for insurance software development, each with the downside stated in the same breath. In order of how settled the scope is, they are: Fixed scope phase one, Dedicated squad, monthly, Core integration and migration and Regulatory change retainer.",
  items: [
    {
      title: "Fixed scope phase one",
      good: "A defined scope, a fixed number and a date. It works best after discovery has produced the integration inventory, because that is the point at which scope is genuinely knowable.",
      bad: "Change costs more than it would hourly, and insurance scope moves whenever a regulator does, which is not something either of us controls.",
    },
    {
      title: "Dedicated squad, monthly",
      good: "A standing team that keeps the domain knowledge in the room, billed on time and materials so you pay for work actually done. Long integration and migration work suits this shape.",
      bad: "You carry the utilisation risk, and a quiet month still costs a month. We will tell you when there is not enough work to justify it.",
    },
    {
      title: "Core integration and migration",
      good: "Scoped to moving between systems, priced on contract variety rather than policy count, with value equivalence testing built into the plan rather than bolted on at the end.",
      bad: "Discovery is unusually long here, and it can conclude that your migration is bigger than you were hoping to hear.",
    },
    {
      title: "Regulatory change retainer",
      good: "Capacity held for changes you do not control, with the standards work already understood, so a deadline is a piece of planned work rather than a scramble.",
      bad: "You are paying for availability, and in a quarter where nothing changes that feels a lot like paying for nothing.",
    },
  ],
  recommendation:
    "What we usually suggest: a fixed scope phase one covering the policy model and the reserve ledger, moving to a dedicated squad once a second product has proved the model holds.",
};

export const delivery = {
  title: "How we deliver insurance software development",
  description:
    "Five phases, each named by the artifact it produces rather than by a stage in a generic waterfall. In order, they are: Policy model decision record, Interface and data contract, Rated and versioned build, Migration runbook and Regulatory evidence pack.",
  items: [
    {
      phase: "Policy model decision record",
      line: "How the policy handles time, decided and written down before anything is built on top of it. What is versioned, what is not, and why each call was made. Every later argument resolves against this document.",
    },
    {
      phase: "Interface and data contract",
      line: "Every integration point named, with the payload, the direction, the failure behaviour and the owner of each mapping. Agreed before the first integration is written rather than discovered during it.",
    },
    {
      phase: "Rated and versioned build",
      line: "The core build, with rating configuration and effective dating present from the start. Adding either later is the most expensive change available on this page.",
    },
    {
      phase: "Migration runbook",
      line: "Value equivalence results per contract variety, the cutover sequence, and an explicit rollback position at each step. Counts and totals are not the test.",
    },
    {
      phase: "Regulatory evidence pack",
      line: "The extracts, audit trails and control documentation your compliance function will be asked for, produced as part of the build rather than assembled afterwards under time pressure.",
    },
  ],
};

export const nonFunctional = {
  title: "The technical buyer's checklist",
  description:
    "Copy this and run it against us, or against anyone else quoting for insurance software development. They are grouped as: Time, history and replay, Data protection and residency and Resilience, evidence and scope. Copy any line straight into your own requirements document.",
  groups: [
    {
      group: "Time, history and replay",
      body: "Can the system return a policy as it stood on an arbitrary past date, as a query rather than a reconstruction? Is every reserve movement retained with its timestamp and author, so a loss triangle can be built from the database alone? Can an adjudication decision be re-run against the rules that were live when it was made?",
    },
    {
      group: "Data protection and residency",
      body: "Where does policyholder data physically sit, and does that answer survive a failover to your disaster recovery region? Is retention set per data category against the liability tail rather than one blanket policy? Are health and criminal conviction data segregated with their own access model, or are they simply more columns on a table?",
    },
    {
      group: "Resilience, evidence and scope",
      body: "Under DORA the register of information and the exit plan are artifacts rather than intentions, so ask to see them. Is the audit trail append only, and exportable in a form a regulator will accept? And confirm the boundary: we do not carry underwriting risk and we do not transmit statutory filings or e-invoices for you, so establish who does before the plan depends on it.",
    },
  ],
};

export const faqs = [
  {
    question: "What does a phase one cost, how many hours, and how long does it take?",
    answer:
      "The worked example is 1,420 hours, which is $56,800 to $142,000 across our $40 to $100 rate band and about $92,300 at a $65 blend, landing in 16 to 24 weeks with a squad. The module ranges sum to 1,160 to 1,980 hours, so a smaller or larger phase one is a question of which modules are in it. We do not quote a fixed number before a discovery that produces the integration inventory.",
  },
  {
    question: "Who owns the code, the data and the accounts?",
    answer:
      "You do, all three, from the first commit. Repositories, cloud accounts, domains and third party service accounts are in your name or transferred to it at handover. What transfers alongside them is the policy model decision record and the interface contracts, which is the part that makes the code readable by whoever comes after us.",
  },
  {
    question: "Why is versioning the policy such a big deal?",
    answer:
      "Because a claim is adjudicated against the policy as it stood on the loss date. A system holding one current row per policy can tell you what is in force today and cannot defend a decision made about last March. Building it in costs more in the first month and less in every month after, and retrofitting it means reconstructing history out of documents.",
  },
  {
    question: "Can you work with our existing Guidewire or Duck Creek installation?",
    answer:
      "Yes, and that is the more common shape of this work. The first question is which extension points your specific version supports, because vendor documentation describes the current release and you may not be on it. We would much rather find that out in discovery than in build.",
  },
  {
    question: "What is the difference between ACORD AL3 and ACORD XML?",
    answer:
      "AL3 is a flat file, one way and batch, historically carrier to agency, carrying policy and commission data. XML is request and response for real time transactions between rating, policy, underwriting, certificate and regulatory systems. Choose by the interaction you need rather than by which one is newer.",
  },
  {
    question: "Do we have to be on NHCX?",
    answer:
      "It is not formally mandatory. It has been live since June 2024, built by the National Health Authority with IRDAI under the Ayushman Bharat Digital Mission, and it standardises eligibility, pre-authorisation, submission, adjudication, payment and reconciliation on HL7 FHIR. The practical argument is that a hospital which integrates once will prefer counterparties who accept that one integration.",
  },
  {
    question: "What does the fraud monitoring framework actually require of a system?",
    answer:
      "The guidelines were issued on 9 October 2025 and come into force on 1 April 2026. They require a board approved anti-fraud policy reviewed annually, a fraud monitoring committee, and an independent fraud monitoring unit, with accountability reaching across the distribution chain. In system terms that is less about a detection model and more about case management: a queue, dispositions, documentation, and an audit trail showing what was done about each alert.",
  },
  {
    question: "Does the GST exemption on individual policies simplify anything?",
    answer:
      "It complicates the accounting. Individual life and health premiums became exempt on 22 September 2025 while group policies stayed taxable at 18 percent. Exempt is not zero rated, so there is no input tax credit on the exempt book and input tax has to be apportioned between the two rather than claimed. That is a billing and ledger change rather than a rate change.",
  },
  {
    question: "Can you file our returns or transmit our e-invoices?",
    answer:
      "No. Only an accredited service provider may transmit to the e-invoicing portal, and statutory filings are yours to make. We build the data that feeds both and integrate with whichever provider you appoint. This page repeats that in several places on purpose, because it is the assumption most likely to be made silently.",
  },
  {
    question: "How do you handle migration from a legacy policy system?",
    answer:
      "Value equivalence per contract variety rather than reconciliation on totals. Matching policy counts and premium sums is the check that passes while individual contracts are wrong, and those surface at renewal, which is the worst possible moment to find them. The runbook carries a rollback position at every step.",
  },
  {
    question: "You have no insurance client. Why should we trust this page?",
    answer:
      "We do not have one, and we would rather say so than stretch an unrelated project to fit. Everything here is domain mechanics, regulation and failure modes, all of which you can verify independently of us. Judge it on whether it describes your problem accurately, and bring hard questions to the call.",
  },
];

export const nextSteps = {
  title: "What happens next",
  description:
    "Four steps with a shape attached to each, so booking a call is a known quantity.",
  items: [
    {
      step: "A 30 minute technical call",
      line: "Bring how your policy record handles time, and one claim you had to defend. Those two answers size the project faster than an hour of description would.",
    },
    {
      step: "The versioning question",
      line: "We establish whether your policy record can reproduce a past state, and what it currently costs you when it cannot. The answer usually explains most of the symptoms you called about.",
    },
    {
      step: "A costed phase one",
      line: "Module by module against the ranges published on this page, with anything excluded named as excluded. If your core already does most of it, the document says so.",
    },
    {
      step: "You decide",
      line: "With the scope in hand you choose whether we build it, your team does, or your incumbent extends. The document is useful in all three cases and it is yours either way.",
    },
  ],
};

export const hubLinks = {
  title: "Go deeper",
  groups: [
    {
      group: "Build the system",
      links: [
        {
          label: "Database development",
          href: "/services/database-development",
          note: "The versioned policy store and the reserve ledger",
        },
        {
          label: "Web development",
          href: "/services/web-development",
          note: "Portals, agent consoles and quote flows",
        },
        {
          label: "Python development",
          href: "/services/python-development",
          note: "Rating, adjudication rules and reporting extracts",
        },
      ],
    },
    {
      group: "Adjacent capabilities",
      links: [
        {
          label: "AI document management",
          href: "/services/ai-document-management-system",
          note: "Claim documents and submission packs",
        },
        {
          label: "Predictive analytics",
          href: "/services/predictive-analytics-development",
          note: "Reserving signals and fraud scoring",
        },
        {
          label: "AI workflow automation",
          href: "/services/ai-workflow-automation-services",
          note: "Adjudication queues and case routing",
        },
      ],
    },
    {
      group: "Other sectors",
      links: [
        {
          label: "Fintech and banking",
          href: "/industries/fintech-banking-software-development",
          note: "Payment rails and the ledger under a premium",
        },
        {
          label: "Real estate",
          href: "/industries/real-estate-software-development",
          note: "Property risk and the policy written against it",
        },
        {
          label: "All industries",
          href: "/industries",
          note: "Every sector we build for, in one place",
        },
      ],
    },
  ],
};

export const ctaBands = {
  mid: {
    title: "Bring the policy model question, not the feature list",
    description:
      "The most useful hour of a first call is usually spent on how your policy record handles time. Almost everything else on this page follows from that one answer, including the cost.",
    ctaText: "Book a 30 minute technical call",
  },
  end: {
    title: "Start with the policy model",
    description:
      "Bring your current policy record and one claim you had to defend. Thirty minutes on those two usually tells both of us whether this is a fit, and you leave with the hours either way.",
    ctaText: "Book a 30 minute technical call",
  },
};

export const relatedPosts = [
  "ai-for-fraud-detection-a-quick-guide",
  "ai-in-cybersecurity",
  "chat-with-your-documents",
  "ai-agents-for-business",
  "ai-copilots-for-business",
  "how-much-does-ai-development-cost",
];

export const industry: IndustryPageData = {
  heroSection,
  seo,
  essence,
  anchors,
  operations,
  segments,
  subVerticals,
  systems,
  compliance,
  whatGoesWrong,
  buildOrBuy,
  cost,
  costHighlights,
  engagement,
  delivery,
  nonFunctional,
  faqs,
  nextSteps,
  hubLinks,
  ctaBands,
  relatedPosts,
  relatedHeading: {
    title: "Related Insights",
    description:
      "Fraud, automation and document work that applies directly to policy and claims systems.",
  },
};
