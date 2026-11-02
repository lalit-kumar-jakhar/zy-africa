import type { IndustryPageData } from "./types";

export const heroSection = {
  eyebrow: "Industries · Healthcare & life sciences",
  title: "Healthcare software development for ",
  titleHighlight: "clinics, labs and device makers",
  description:
    "The systems a provider actually runs on: patient master and MRN merge, scheduling against provider and room rules, clinical documentation, HL7 and FHIR interfaces, and the eligibility and claims path that decides whether the work gets paid. Access control, audit and retention are first-sprint requirements here rather than a hardening pass later.",
  features: [
    "HL7 v2 and FHIR R4",
    "Oman PDPL and Dhamani",
    "HIPAA and GDPR Article 9",
    "$40 to $100 per hour",
  ],
  scrollTarget: "#essence",
  ctaText: "Book a 30 minute technical call",
  bgImage: "/static/assets/industries/healthcare-life-sciences-industries.webp",
};

export const seo = {
  primaryKeyword: "healthcare software development",
  intent: "commercial",
  secondaryKeywords: [
    "clinical software development",
    "telemedicine app development",
  ],
  competingUrl: null,
} as const;

export const essence = {
  title: "The short version",
  description:
    "The commercial facts in one block, so you never have to hunt for them. Clinical software development and telemedicine app development share one constraint: the patient index has to be right before anything else can be. Those tiles are: Typical integration set, Phase one timeline, Rate band, Phase one range, with the arithmetic, Stack we actually use and Our commitment.",
  tiles: [
    {
      label: "Typical integration set",
      value:
        "An existing HIS or EHR over HL7 v2, a lab or imaging feed, an insurer channel such as Dhamani or NPHIES, an identity provider, and a payment rail. Plus the portal your billing team currently re-keys into by hand.",
    },
    {
      label: "Phase one timeline",
      value:
        "3 to 5 months for a clinic or polyclinic operations scope. Certification is calendar rather than hours: NPHIES conformance, HIE sign-off and ABDM M1 to M3 consume weeks nobody bills and everybody waits for.",
    },
    {
      label: "Rate band",
      value:
        "$40 to $100 per hour by role. Portal and reporting work near the floor, interface engineering, claims logic and validation near the ceiling. Mixed teams blend to around $65.",
    },
    {
      label: "Phase one range, with the arithmetic",
      value:
        "Discovery 90 plus identity 240 plus patient master 160 plus scheduling 290 plus documentation 350 plus interfaces 120 plus eligibility 210 plus compliance 180 equals 1,640 hours. That runs $65,600 at $40 and $164,000 at $100, about $106,600 at a $65 blend. Full span 1,160 to 2,270.",
    },
    {
      label: "Stack we actually use",
      value:
        "Postgres for the clinical record, because audit and retention are relational problems. An interface engine in front of every HL7 feed rather than parsing in application code. Your existing identity provider, with break-glass access modelled explicitly.",
    },
    {
      label: "Our commitment",
      value:
        "No quote before discovery. We are not a notified body, a QMS auditor or your regulatory consultant, and we will tell you when a scope crosses into medical device territory rather than discovering it at certification.",
    },
  ],
};

export const anchors = [
  { id: "who-this-is-for", label: "Is this us?" },
  { id: "sub-verticals", label: "What breaks for us?" },
  { id: "systems", label: "How does data move?" },
  { id: "compliance", label: "What is forcing our hand?" },
  { id: "our-work", label: "Your work?" },
  { id: "what-goes-wrong", label: "What goes wrong?" },
  { id: "build-or-buy", label: "Build it or buy it?" },
  { id: "cost", label: "What does it cost?" },
];

export const operations = {
  title: "Where clinical systems earn their keep",
  description:
    "The stages a patient encounter moves through, and what we build at each one. In sequence, the stages are: Registration and identity, Eligibility check, Scheduling, Encounter and documentation, Orders and results and Claims and remittance. Each one is a place a system either holds the fact or loses it.",
  stages: [
    "Registration and identity",
    "Eligibility check",
    "Scheduling",
    "Encounter and documentation",
    "Orders and results",
    "Claims and remittance",
  ],  image: {
    src: "/static/assets/industries/healthcare-life-sciences-operations-map.svg",
    alt: "Two band clinical map covering identity, eligibility and scheduling, then the encounter, orders and claims.",
  },
};

export const segments = {
  title: "Who this is for",
  description:
    "Six organisations and the system each is usually missing. Not a fit: if you need a consumer wellness app, that is a product build rather than a clinical system, and the constraints on this page will only slow you down.",
  items: [
    {
      title: "Your HIS never had to talk to Dhamani",
      line: "Eligibility, pre-authorisation and remittance still move by portal re-keying, so a claim's status lives in someone's memory between screens. We start by mapping which of those steps can be a machine call rather than a person.",
    },
    {
      title: "HIE integration is a licence condition",
      line: "NABIDH, Malaffi or Riayati is a condition of operating rather than a roadmap item, each with its own regulator and pre-production test. We start with the conformance path rather than the feature list.",
    },
    {
      title: "Lab orders arrive as faxes",
      line: "Orders get re-keyed on arrival and no result feed goes back to the ordering clinician, so the loop closes by phone. We start with an ORM in, ORU out interface and the accessioning identity that makes it safe.",
    },
    {
      title: "Two patient records for one person",
      line: "Duplicate MRNs accumulate quietly and merge is treated as an admin task rather than a clinical safety event. We start with deterministic matching, a review queue and a merge that is reversible.",
    },
    {
      title: "Your product may be a medical device",
      line: "Clinical decision support crosses into regulated territory sooner than most teams expect, and finding out at certification is expensive. We start by determining regulated scope in discovery, in writing.",
    },
    {
      title: "Audit came back on access control",
      line: "Everyone can see everything because roles were never modelled against the care relationship, and break-glass does not exist. We start with the access model, because retrofitting it touches every screen.",
    },
  ],
};

export const subVerticals = {
  title: "Find your operation",
  description:
    "Healthcare is one word for six operations with different failure modes. What breaks is different, so what we build is different. This page covers: Hospitals and polyclinics, Clinics and practices, Diagnostics and imaging, Digital health and SaMD, Life sciences and trials and Home care and field visits.",
  items: [
    {
      title: "Hospitals and polyclinics",
      breaks:
        "Departments run their own workflows, the insurer channel is a portal, and the patient index carries years of duplicates nobody dares merge.",
      build:
        "One patient master with a safe merge path, department-scoped workflow above it, and eligibility and claims as machine calls rather than re-keying.",
    },
    {
      title: "Clinics and practices",
      breaks:
        "Scheduling is the whole business and the rules are real: provider availability, room and equipment, recall and waitlist. Off-the-shelf calendars model none of it.",
      build:
        "Scheduling with provider, room and resource constraints, plus recall and waitlist that fill cancellations automatically.",
    },
    {
      title: "Diagnostics and imaging",
      breaks:
        "Accessioning identity is the safety-critical step and it is usually a label printer plus hope. Reflex rules and result release live in someone's head.",
      build:
        "Chain of custody from accession to release, reflex rules encoded rather than remembered, and an ORU feed back to the ordering clinician.",
    },
    {
      title: "Digital health and SaMD",
      breaks:
        "Regulated scope is discovered late, and a validation package that was never planned arrives as a surprise cost with a calendar attached.",
      build:
        "Regulated scope determined in discovery, with a traceability matrix and validation evidence produced alongside the build rather than reconstructed after it.",
    },
    {
      title: "Life sciences and trials",
      breaks:
        "Electronic records and signatures carry evidentiary requirements that ordinary product engineering does not meet, and every subsequent release inherits them.",
      build:
        "An EDC and document control layer with an audit trail designed for inspection, and a release process that keeps the qualification current.",
    },
    {
      title: "Home care and field visits",
      breaks:
        "Connectivity is unreliable at the point of care, and visit verification is an evidentiary record rather than a convenience feature.",
      build:
        "An offline-first visit app with conflict resolution on sync, and visit verification captured as evidence rather than as a checkbox.",
    },
  ],
};

export const systems = {
  title: "How clinical data actually moves, and where projects break",
  description:
    "Healthcare integration is an identity problem wearing a messaging protocol. Here is the estate we expect to meet, and the modelling decision that determines whether any of it is safe. Grouped as: HL7 v2, which still carries the traffic, FHIR, which did not replace it and Identity and codes.",
  groups: [
    {
      group: "HL7 v2, which still carries the traffic",
      body: "ADT for admissions and demographics, ORM for orders, ORU for results, SIU for scheduling, DFT for charges. Pipe-delimited, decades old, and the format most of your estate speaks today. Put an interface engine in front of it rather than parsing segments in application code.",
    },
    {
      group: "FHIR, which did not replace it",
      body: "FHIR R4 is the API layer for new integration and the mandated format for channels such as NPHIES with its Saudi profiles. It sits alongside HL7 v2 rather than removing it, so plan for both and for a mapping layer between them that somebody owns.",
    },
    {
      group: "Identity and codes",
      body: "MRN is local, national identifiers are jurisdictional, and neither is globally unique. Codes are not interchangeable: SNOMED CT for clinical findings, LOINC for observations and lab, ICD for diagnosis and billing, and a local drug code such as the Dubai Drug Code where the regulator mandates it.",
    },
  ],
  distinction: {
    title: "The distinction that saves projects",
    body: "The patient, the identity and the record are three different things, and healthcare systems that collapse them cause clinical harm rather than reporting inconvenience. A patient is a person. An identity is a number a specific system assigned them, and one person accumulates several: an MRN here, a national ID there, an insurer member number, a lab accession. A record is a clinical document written at a point in time that must remain attributable even after identities are merged. Build a master index that maps identities to a patient without destroying them, and make merge reversible, because a wrong merge that cannot be undone is the worst outcome in this domain.",
  },
  pairs: [
    {
      pair: "Deterministic versus probabilistic matching",
      body: "Deterministic matching on strong identifiers is safe and misses duplicates. Probabilistic matching finds them and occasionally proposes a wrong merge. Use deterministic for automatic action and probabilistic only to populate a human review queue, never to merge unattended.",
    },
    {
      pair: "Merge versus link",
      body: "Linking two identities to one patient is reversible. Merging records destroys provenance. Prefer link, keep the source identities intact, and treat merge as a clinical safety event with an approver and an undo path.",
    },
    {
      pair: "Role-based versus relationship-based access",
      body: "A role says what a clinician can do. The care relationship says which patients they may do it to. Systems with only roles let every doctor read every chart, which passes a demo and fails an audit. Model both, and add break-glass with a review obligation attached.",
    },
    {
      pair: "Audit log versus application log",
      body: "An application log helps engineers. An audit log is evidence: who accessed which record, when, and under what justification, immutable and retained to a schedule. They are different systems with different retention and different access, and conflating them is the most common finding in a healthcare access review.",
    },
  ],
};

export const compliance = {
  title: "What is forcing your hand, and by when",
  description:
    "Regulation is the least promotional reason to start a project and currently the most pressing one. Each row is dated and says what the software has to do as a result. Verify current status before contracting; several of these dates have already moved once.",
  rows: [
    {
      item: "Oman PDPL and data residency",
      detail:
        "Royal Decree 6/2022 came into force on 13 February 2023, a year after publication, with Executive Regulations under Ministerial Decision 34/2024 and the transition period since expired. Health data is sensitive personal data and processing it requires an MTCIT permit. Build purpose-scoped written consent with withdrawal, 45-day data subject responses, 72-hour breach notification and a named DPO. Cross-border transfer needs express consent plus an adequacy assessment, so default to in-country hosting and gate every offshore analytics call, support tool and model prompt explicitly, because each one is a transfer.",
    },
    {
      item: "Oman Dhamani",
      detail:
        "The unified mandatory health insurance scheme, in force from January 2023 and regulated by the Financial Services Authority. Its e-platform is the mandated channel for eligibility linked to Civil ID, pre-authorisation, e-claims, remittance reconciliation and denial handling. Portal re-keying is precisely the thing being replaced, and the value of the integration is measured in days of billing cycle rather than in screens.",
    },
    {
      item: "Oman medical devices",
      detail:
        "Circular 161/2025 issued 6 July 2025 under Ministerial Decree 113/2020, with the e-portal live from 11 August 2025. Since 1 July 2026, Class C and Class D devices including IVDs cannot clear customs without MOH registration, and the quality management requirement is ISO 13485:2016. Software that qualifies as a medical device is in scope, which surprises product teams who did not think the rule applied to them.",
    },
    {
      item: "Saudi Arabia, NPHIES and PDPL",
      detail:
        "NPHIES is governed by the Council of Health Insurance and mandatory for licensed facilities, on FHIR R4 with Saudi profiles, using CHI-issued digital signature certificates that must be renewed annually. Conformance testing against every profile precedes production connectivity. Saudi PDPL sits under SDAIA with the grace period long ended and a Data Transfer Regulation in force, so govern cross-border flows explicitly and expect NCA controls in vendor questionnaires.",
    },
    {
      item: "United Arab Emirates",
      detail:
        "NABIDH in Dubai, Malaffi in Abu Dhabi and Riayati federally are licensing conditions rather than roadmap items, each with its own regulator and pre-production test. Federal Decree-Law 45/2021 is the general data protection law and processing UAE health data outside the UAE without approval is restricted, which is an architectural constraint rather than a policy paragraph. E-prescription and claims run through DHPO and eClaimLink using the Dubai Drug Code, and mandatory health insurance extended across all seven emirates from 1 January 2025.",
    },
    {
      item: "India, and if you serve EU or US patients",
      detail:
        "India's DPDP Rules were notified on 14 November 2025, with Consent Manager registration from November 2026 and full obligations by 13 May 2027, so consent artefacts and withdrawal have to be first-class objects. ABDM certification runs M1 to M3 and is the practical requirement for PM-JAY empanelment. For Europe, health data is special category under GDPR Article 9 with 72-hour breach notice, and EU MDR Rule 11 pushes most clinical decision support to Class IIa or higher and therefore to a notified body. HIPAA brings business associate agreements, minimum necessary and audit logging.",
    },
  ],
};

export const ourWork = {
  title: "Our work in this sector",
  description:
    "One platform described properly, and one client statement. We would rather write up a single build in depth than show a wall of logos. The statement below is from Doron Harel, CCO of Mego Afek AC Ltd. in Israel, published on GoodFirms: “Zyneto worked closely with our team to develop a custom web platform and software automation solutions for our medical device business. Their team was highly professional, responsive, and proactive, ensuring all deliverables were completed on time. The solutions improved operational efficiency and enhanced the user experience.”",
  items: [
    {
      client: "iCareHeal",
      place: "India",
      line: "A practice management platform for clinics and independent practitioners: appointment scheduling with automated reminders, telemedicine consultations, electronic health records and secure patient messaging. Around the clinical core sits the practice's digital presence, its website, business profile, reputation and analytics. The constraint that shaped the build is the one this whole page is about: patient records set the bar for access control, audit and retention from the first sprint rather than in a later hardening pass.",
      stack: ["Flutter", "Dart", "SolidJS", "Flask", "MongoDB"],
    },
  ],
};

export const whatGoesWrong = {
  title: "What goes wrong",
  description:
    "Ten failure modes with the counter-practice attached. Naming them is more useful than a list of reasons to pick us. It starts with: Merge treated as an admin action, Probabilistic matching allowed to act and Roles without the care relationship.",
  items: [
    {
      title: "Merge treated as an admin action",
      line: "Two records for one patient get combined by whoever noticed, with no approver and no undo. Make merge reversible, require an approver, and keep the source identities rather than destroying them.",
    },
    {
      title: "Probabilistic matching allowed to act",
      line: "A fuzzy match merges two different people and the error surfaces clinically rather than in a report. Probabilistic matching populates a review queue; only deterministic matching acts unattended.",
    },
    {
      title: "Roles without the care relationship",
      line: "Every clinician can read every chart because access was modelled on job title alone. Model the relationship as well, and add break-glass with a review obligation rather than an open door.",
    },
    {
      title: "Audit log conflated with application log",
      line: "The evidence a regulator wants is mixed with debug output, with the wrong retention and the wrong access. They are different systems; separate them before the first access review.",
    },
    {
      title: "HL7 parsed in application code",
      line: "Segment handling spreads through the codebase and every new feed becomes a regression risk. Put an interface engine at the boundary so a feed change is one mapping, not a release.",
    },
    {
      title: "Regulated scope discovered at certification",
      line: "Clinical decision support crosses into device territory and the validation package was never planned. Determine regulated scope in discovery, in writing, and price the validation openly.",
    },
    {
      title: "Cross-border transfer treated as a policy question",
      line: "An offshore analytics call or a model prompt moves health data out of the country without anyone calling it a transfer. Gate each one explicitly and make region pinning real rather than nominal.",
    },
    {
      title: "Eligibility left as a portal step",
      line: "The integration stops at claims and eligibility stays manual, so the billing cycle keeps the delay it always had. Automate the check first; it is the step that touches every encounter.",
    },
    {
      title: "Offline treated as an edge case",
      line: "A field visit app assumes connectivity and loses documentation at the point of care. Offline-first with explicit conflict resolution, decided before the first screen is designed.",
    },
    {
      title: "Certification time left out of the plan",
      line: "Conformance testing and enrolment consume weeks nobody billed and everybody waits for, so the launch slips without anyone having been slow. Put certification on the calendar as its own dependency.",
    },
  ],
};

export const buildOrBuy = {
  title: "Build, buy, or buy the core and build the edge",
  description:
    "The honest answer is usually the third one. Worth stating plainly: we are not a notified body, we are not accredited to certify a quality management system, and we are not your regulatory consultant. Those judgements stay outside this table.",
  rows: [
    {
      option: "The core HIS or EHR",
      best: "Buy",
      verdict:
        "Clinical documentation, order management and the certification surface are solved, heavily regulated and expensive to own. Building your own means carrying conformance and validation permanently for no differentiation.",
    },
    {
      option: "The integration and identity layer",
      best: "Build",
      verdict:
        "Your patient index, your access model and your mapping between systems are where your organisation differs and where packaged products fit worst. This is also the layer that decides whether anything else can be trusted.",
    },
    {
      option: "Claims and eligibility",
      best: "Buy the core, build the edge",
      verdict:
        "Buy the channel connectivity, which is commodity work with real certification overhead. Build the denial worklist and the rules that reflect how your organisation actually chases money, because no vendor knows that.",
    },
  ],
};

export const cost = {
  title: "What healthcare software development costs, with the arithmetic shown",
  description:
    "Every competitor publishes a total with no hours behind it. Here is the rate, the hours and the multiplication, so you can argue with any line. The scope priced here is a clinic or polyclinic operations phase one. The drivers are: Whether the scope is regulated, HIPAA in scope, Number of HL7 feeds and Duplicate rate in the patient index.",
  drivers: [
    {
      driver: "Whether the scope is regulated",
      hours: "Adds 25 to 40%",
      note: "GxP or medical device scope adds that up front and 15 to 30% on every subsequent release, permanently. This is the largest single multiplier on the page and it is decided in discovery.",
    },
    {
      driver: "HIPAA in scope",
      hours: "Adds 10 to 15%",
      note: "Applied across the board rather than to one module, because business associate agreements, minimum necessary and audit logging touch everything.",
    },
    {
      driver: "Number of HL7 feeds",
      hours: "80 to 160 each",
      note: "Including mapping and certification. The second feed is where the interface engine pays for itself; the fifth is comparatively cheap.",
    },
    {
      driver: "Duplicate rate in the patient index",
      hours: "Drives the merge work",
      note: "A legacy index with years of duplicates needs a review queue, an approver flow and a reversible merge, none of which a clean index needs.",
    },
    {
      driver: "Insurer channels",
      hours: "150 to 300 each",
      note: "Dhamani, NPHIES and the UAE channels each have their own conformance path. Connectivity is the small part; passing their test is the calendar.",
    },
    {
      driver: "Offline requirement",
      hours: "Adds around 30%",
      note: "To the affected app only. Conflict resolution on sync is the cost, not the local database.",
    },
    {
      driver: "Validation package where regulated",
      hours: "150 to 400",
      note: "IQ, OQ, PQ and a traceability matrix, produced alongside the build. Reconstructing it afterwards costs more and convinces nobody.",
    },
    {
      driver: "Certification calendar",
      hours: "Schedule, not hours",
      note: "NPHIES conformance, HIE sign-off, ABDM M1 to M3 and eRx enrolment consume weeks that nobody bills. They change when you launch, not what you pay.",
    },
  ],
  modules: [
    { module: "Discovery and regulated-scope determination", hours: "60 to 120" },
    { module: "Identity, access model and audit log", hours: "180 to 320" },
    { module: "Patient master with MRN merge", hours: "120 to 220" },
    { module: "Scheduling with provider and room rules", hours: "200 to 400" },
    { module: "Clinical documentation and charge capture", hours: "250 to 500" },
    { module: "HL7 v2 interfaces, first two feeds", hours: "80 to 160" },
    { module: "Eligibility and prior authorisation", hours: "150 to 300" },
    { module: "Compliance layer, retention and legal hold", hours: "120 to 250" },
  ],
  math: {
    title: "Phase one, added up",
    points: [
      "Discovery 90 plus identity and audit 240 plus patient master 160 plus scheduling 290 plus clinical documentation 350 plus HL7 interfaces 120 plus eligibility 210 plus compliance layer 180 equals 1,640 hours. Every one of the eight sits inside its own published range above, so you can move any line and see what it does to the total.",
      "At $40 per hour that is $65,600. At $100 per hour it is $164,000. At a $65 blended rate, about $106,600. The full span across the eight modules is 1,160 hours at every minimum to 2,270 at every maximum. Five to six people at 600 to 700 useful hours a month puts phase one at roughly three to five months.",
      "Deliberately outside that number and stated rather than buried: the regulated and HIPAA multipliers above, claims generation and remittance posting, lab accessioning, EDC and trial systems, the patient portal, telehealth and any offline mobile app. Each is its own decision with its own calendar.",
    ],
  },
};

export const costHighlights = [
  {
    label: "Phase one range",
    value: "$65,600 to $164,000",
    note: "The 1,640 hour worked example at the ends of the rate band, about $106,600 at a $65 blend.",
  },
  {
    label: "Typical timeline",
    value: "3 to 5 months",
    note: "Plus certification weeks that nobody bills. Those change the launch date rather than the price.",
  },
  {
    label: "Useful hours",
    value: "1,160 to 2,270",
    note: "Every module at its minimum, through to every module at its maximum. Multipliers quoted separately.",
  },
];

export const engagement = {
  title: "Engagement models",
  description:
    "Four models for healthcare software development, each with the downside stated in the same breath. Those four are: Discovery and scope determination, Phase one build, Build and carry through certification and Ongoing engineering. Pick by how settled the scope actually is, not by preference.",
  items: [
    {
      title: "Discovery and scope determination",
      good: "Three to four weeks producing a PHI data-flow map, an interface inventory and a written determination of whether any of it is regulated. On this vertical that last document is the one that prevents a very expensive surprise.",
      bad: "You pay for a document, and it sometimes reports that your product is a medical device. That is worth knowing early and it is never welcome news.",
    },
    {
      title: "Phase one build",
      good: "The eight modules above against a written scope, ending with an access model, a patient index and an eligibility path that works.",
      bad: "It is an operations foundation, not a full clinical suite. Claims, lab and trial systems are later phases and saying otherwise would be a worse trade for you than saying so now.",
    },
    {
      title: "Build and carry through certification",
      good: "We stay through conformance testing and sign-off, which is when interface assumptions actually get tested by someone else.",
      bad: "It ties our team to a regulator's calendar rather than your backlog, and that calendar is not ours to accelerate.",
    },
    {
      title: "Ongoing engineering",
      good: "A standing allocation, which suits a provider adding sites, channels or feeds steadily.",
      bad: "It works when there is a genuine backlog and quietly wastes money when there is not. We will tell you when there is not.",
    },
  ],
  recommendation:
    "What we usually suggest: discovery with a written regulated-scope determination first, then a fixed scope phase one on identity, patient master and eligibility, with claims and lab held as separate decisions.",
};

export const delivery = {
  title: "How we deliver healthcare software development",
  description:
    "Five phases, each named by the artifact it produces rather than by a stage in a generic waterfall. Those phases are: Data-flow map, Access model, Patient index, Interfaces and Revenue path. Each is named by the artifact it hands you, so you can ask to see one.",
  items: [
    {
      phase: "Data-flow map",
      line: "Every place PHI enters, rests and leaves, written down with the interface inventory and a determination of what is regulated. This artifact decides the size and the risk of everything after it.",
    },
    {
      phase: "Access model",
      line: "Roles, care relationships, break-glass and the audit log as a separate system with its own retention. Agreed before any screen is built, because retrofitting it touches all of them.",
    },
    {
      phase: "Patient index",
      line: "Deterministic matching, a human review queue for probabilistic candidates, and a merge that is reversible with an approver.",
    },
    {
      phase: "Interfaces",
      line: "An interface engine at the boundary with the first feeds mapped and certified, so a later feed is a mapping rather than a release.",
    },
    {
      phase: "Revenue path",
      line: "Eligibility and prior authorisation as machine calls, with the denial worklist reflecting how your team actually chases money.",
    },
  ],
};

export const nonFunctional = {
  title: "The technical buyer's checklist",
  description:
    "Copy this and run it against us, or against anyone else quoting for healthcare software development. The groups are identity and safety, then access and evidence, then residency and transfer. Each line is a question with a right answer rather than a preference, so a vendor either meets it or tells you plainly why not.",
  groups: [
    {
      group: "Identity and safety",
      body: "Deterministic matching for unattended action and probabilistic only into a review queue. Merge reversible, with an approver and preserved source identities. A written answer on what happens to documentation attributed to a record that is later merged.",
    },
    {
      group: "Access and evidence",
      body: "Access modelled on the care relationship as well as the role, with break-glass carrying a review obligation. An audit log separate from application logging, immutable, retained to a schedule and queryable by patient and by user.",
    },
    {
      group: "Residency and transfer",
      body: "Region pinning that is real rather than nominal, with every offshore analytics call, support tool and model prompt enumerated and gated, because each is a cross-border transfer. Retention and legal hold that survive a deletion request.",
    },
  ],
};

export const faqs = [
  {
    question: "Do we need to replace our HIS?",
    answer:
      "Usually not. The core clinical system is heavily certified and expensive to own, and what most providers actually lack is the layer around it: a trustworthy patient index, an access model that survives an audit, and machine calls to the insurer instead of portal re-keying. We integrate over HL7 and FHIR rather than replacing what already passes inspection.",
  },
  {
    question: "What does it cost, and how do you price it?",
    answer:
      "Hours times $40 to $100 per hour by role. The module table gives the range for each of the eight modules and the worked example shows 1,640 hours coming to about $106,600 at a $65 blend. The regulated and HIPAA multipliers are stated separately rather than folded in, because they apply across the board and would otherwise hide inside every line.",
  },
  {
    question: "Who owns the code, the patient data and the interfaces?",
    answer:
      "You do. The code is yours on delivery, patient data lives in your infrastructure rather than ours, and the interfaces are yours to keep running or hand to another supplier. We do not retain a copy of clinical data, and there is no arrangement under which it becomes training material for anything.",
  },
  {
    question: "Is our product a medical device?",
    answer:
      "Possibly, and it is the question worth answering first. Clinical decision support crosses into regulated territory sooner than most teams expect, and EU MDR Rule 11 pushes much of it to Class IIa or higher and therefore to a notified body. We determine regulated scope during discovery and put it in writing. We are not a notified body and cannot certify you; we can make sure you are not surprised.",
  },
  {
    question: "Can you connect us to Dhamani or NPHIES?",
    answer:
      "Yes, and the honest part is that connectivity is the small half. Each channel has a conformance path that has to be passed before production, NPHIES on FHIR R4 with Saudi profiles and certificates renewed annually. Budget those weeks as calendar rather than as hours, because nobody bills them and everybody waits for them.",
  },
  {
    question: "How do you handle duplicate patient records?",
    answer:
      "Deterministic matching acts automatically, probabilistic matching only proposes into a human review queue, and merge is reversible with an approver. A wrong merge that cannot be undone is the worst outcome in this domain, so the design starts from that rather than from throughput.",
  },
  {
    question: "Does health data have to stay in the country?",
    answer:
      "In Oman, cross-border transfer of sensitive data needs express consent plus an adequacy assessment, so in-country hosting is the sane default. The UAE restricts processing health data outside the country without approval. The practical consequence is that every offshore analytics call, support tool and model prompt is a transfer and has to be gated explicitly.",
  },
  {
    question: "We only have one healthcare build. Is that enough?",
    answer:
      "We have iCareHeal, described in full above, and a client statement from a medical device business. That is what we have and we would rather say so than pad the page. Everything else here is protocol, regulation and failure modes, which you can verify independently of us.",
  },
  {
    question: "Can you produce our validation package?",
    answer:
      "We can produce IQ, OQ, PQ and a traceability matrix alongside the build, which is far cheaper and more convincing than reconstructing them afterwards. Approval of that package belongs to your quality function and your auditor, not to us.",
  },
  {
    question: "What happens to our data if we stop working with you?",
    answer:
      "It never leaves your infrastructure, so nothing has to be handed back. We document the interfaces and the mappings as part of delivery specifically so another supplier can pick them up without us, which is the test of whether documentation was real.",
  },
];

export const nextSteps = {
  title: "What happens next",
  description:
    "Four steps with a shape attached to each, so booking a call is a known quantity.",
  items: [
    {
      step: "A 30 minute technical call",
      line: "Bring your HIS name, your insurer channels, and one thing your billing team currently re-keys. Those three size the project faster than an hour of description.",
    },
    {
      step: "The scope question",
      line: "We establish whether anything you are planning is regulated as a medical device, in writing. It is a short conversation that occasionally changes the entire plan.",
    },
    {
      step: "A written scope within a week",
      line: "The modules, the hour ranges and the arithmetic, with the regulated and HIPAA multipliers shown separately. If the answer is that your HIS vendor should do this, the document says that.",
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
          note: "Patient index, audit log and retention",
        },
        {
          label: "Web development",
          href: "/services/web-development",
          note: "Clinician, front desk and patient surfaces",
        },
        {
          label: "Mobile app development",
          href: "/services/mobile-app-development",
          note: "Offline-first field and visit apps",
        },
      ],
    },
    {
      group: "Adjacent capabilities",
      links: [
        {
          label: "AI document management",
          href: "/services/ai-document-management-system",
          note: "Clinical documents, retention and legal hold",
        },
        {
          label: "AI agent development",
          href: "/services/ai-agent-development",
          note: "Triage and denial worklist assistance",
        },
        {
          label: "Chat with documents",
          href: "/services/chat-with-documents-solution",
          note: "Retrieval over policy and protocol libraries",
        },
      ],
    },
    {
      group: "Other sectors",
      links: [
        {
          label: "Insurance",
          href: "/industries/insurance-software-development",
          note: "Claims, adjudication and the payer side",
        },
        {
          label: "Education and edtech",
          href: "/industries/education-software-development",
          note: "Records scoped to a session, and consent",
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
    title: "Send us one thing your billing team re-keys",
    description:
      "Whichever step moves by portal today, eligibility, pre-authorisation or remittance, tells us where the billing cycle is losing days. We will tell you whether it can be a machine call and what that would take in hours.",
    ctaText: "Book a 30 minute technical call",
  },
  end: {
    title: "Start with the data-flow map, not the feature list",
    description:
      "Almost every question on this page resolves to where PHI goes and who may see it. We will map that, tell you whether any of your scope is regulated, and give you the hours either way.",
    ctaText: "Book a 30 minute technical call",
  },
};

export const relatedPosts = [
  "ai-agents-for-business",
  "chat-with-your-documents",
  "how-much-does-ai-development-cost",
  "ai-copilots-for-business",
  "ai-for-fraud-detection-a-quick-guide",
  "top-ai-use-cases-you-cant-ignore",
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
  ourWork,
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
      "Document, retrieval and assistant work that applies directly to clinical and administrative systems.",
  },
};
