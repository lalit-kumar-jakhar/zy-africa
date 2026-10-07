import type { IndustryPageData } from "./types";

export const heroSection = {
  eyebrow: "Industries · Education & edtech",
  title: "Education software development for ",
  titleHighlight: "schools, universities and edtech",
  description:
    "The systems an institution actually runs on: admissions and counsellor workflow, fees, attendance, timetabling, gradebooks that survive a curriculum change, and the LTI and rostering standards a procurement team will hold you to. Session-scoped data is the thing that makes education software different, and it is the thing most platforms get wrong in year one.",
  features: [
    "LTI 1.3 Advantage aware",
    "DPDP, FERPA and COPPA",
    "WCAG 2.1 AA",
    "$40 to $100 per hour",
  ],
  scrollTarget: "#essence",
  ctaText: "Book a 30 minute technical call",
  bgImage: "/static/assets/industries/education-edtech-industries.webp",
};

export const seo = {
  primaryKeyword: "education software development",
  intent: "commercial",
  secondaryKeywords: [
    "edtech app development",
    "learning management system development",
  ],
  competingUrl: null,
} as const;

export const essence = {
  title: "The short version",
  description:
    "The commercial facts in one block, so you never have to hunt for them. In practice that means edtech app development and learning management system development, joined to whatever student record already holds the truth. They are: Typical integration set, Phase one timeline, Rate band, Phase one range, with the arithmetic, Stack we actually use and Our commitment.",
  tiles: [
    {
      label: "Typical integration set",
      value:
        "An LMS over LTI 1.3, a rostering feed on OneRoster, an identity provider on SAML or OIDC, a payment gateway on local rails, and whatever the incumbent SIS will export. Plus the spreadsheet the registrar actually trusts.",
    },
    {
      label: "Phase one timeline",
      value:
        "3 to 5 months for a K-12 operations platform. The pacing constraint is the academic calendar rather than engineering: nothing lands mid-term, and a fees or gradebook cutover has exactly one safe window a year.",
    },
    {
      label: "Rate band",
      value:
        "$40 to $100 per hour by role. Admin screens and reporting near the floor, timetable constraint solving and assessment integrity near the ceiling. Mixed teams blend to around $65.",
    },
    {
      label: "Phase one range, with the arithmetic",
      value:
        "Discovery 90 plus tenancy 130 plus records 170 plus admissions 190 plus fees 220 plus attendance 180 plus grades 230 plus migration 110 equals 1,320 hours. That runs $52,800 at $40 and $132,000 at $100, about $85,800 at a $65 blend. Full span 910 to 1,820.",
    },
    {
      label: "Stack we actually use",
      value:
        "Postgres for the student record, because every query is relational and every row is versioned by academic year and term. Python or Node for services. Your existing identity provider. We do not replace an LMS that works; we integrate with it over LTI.",
    },
    {
      label: "Our commitment",
      value:
        "No quote before discovery, and no firm price on a first call. A number quoted before anyone has seen your role list and your term structure has either been padded heavily or will be repriced at change-request time.",
    },
  ],
};

export const anchors = [
  { id: "who-this-is-for", label: "Is this us?" },
  { id: "sub-verticals", label: "What breaks for us?" },
  { id: "systems", label: "Which standards apply?" },
  { id: "compliance", label: "Which rules apply to us?" },
  { id: "our-work", label: "Your work?" },
  { id: "what-goes-wrong", label: "What goes wrong?" },
  { id: "build-or-buy", label: "Build it or buy it?" },
  { id: "cost", label: "What does it cost?" },
];

export const operations = {
  title: "Where student systems earn their keep",
  description:
    "The stages a student record moves through, and what we build at each one. The arc is: Enquiry and admission, Enrolment and rostering, Timetable and attendance, Teaching and assessment, Gradebook and reporting and Certificates and records. Each one is a place a system either holds the fact or loses it.",
  stages: [
    "Enquiry and admission",
    "Enrolment and rostering",
    "Timetable and attendance",
    "Teaching and assessment",
    "Gradebook and reporting",
    "Certificates and records",
  ],  image: {
    src: "/static/assets/industries/education-edtech-operations-map.svg",
    alt: "Two band student map covering enquiry, enrolment and timetabling, then teaching, gradebook and records.",
  },
};

export const segments = {
  title: "Who this is for",
  description:
    "Six institution shapes and the record each one cannot currently produce on demand. Not a fit: if you want a consumer learning app built from scratch, that is a product build rather than an institutional system. Written for: Your SIS breaks on a curriculum change, Admissions runs on spreadsheets, An RFP demanded LTI Advantage and Fees reconciliation takes a week.",
  items: [
    {
      title: "Your SIS breaks on a curriculum change",
      line: "Change a subject structure and last year's results stop rendering correctly, because the data was never scoped to an academic session. We start by versioning every record by year and term, which is the single decision that makes history stay true.",
    },
    {
      title: "Admissions runs on spreadsheets",
      line: "Enquiries arrive across five channels, counsellors track them privately, and nobody can say which source produced admitted students. We start with a counsellor CRM whose stages match how your team actually works.",
    },
    {
      title: "An RFP demanded LTI Advantage",
      line: "Procurement specified LTI Advantage Complete and the answer to whether you support it is currently no. We start by scoping Core plus Deep Linking, NRPS and AGS, and by being honest that certification is an annual membership cost on someone else's calendar.",
    },
    {
      title: "Fees reconciliation takes a week",
      line: "Instalments, concessions, late fees and part payments live in three systems and none of them agree at month end. We start with one fee ledger that models the concession rather than adjusting the invoice after the fact.",
    },
    {
      title: "Accessibility came up in procurement",
      line: "A public institution asked for WCAG conformance and a VPAT, and nobody has tested with a screen reader. We start with an audit against the level actually required, which for US public entities is WCAG 2.1 AA rather than 2.2.",
    },
    {
      title: "You are admitting under-18 users",
      line: "The DPDP Rules make everyone under 18 a child, requiring verifiable parental consent with no behavioural tracking. We start by mapping which of your flows need guardian consent and building the consent ledger that proves it.",
    },
  ],
};

export const subVerticals = {
  title: "Find your operation",
  description:
    "Education is one word for six institutions with different failure modes. What breaks is different, so what we build is different. Each operation below breaks differently, and they are: K-12 schools and groups, Higher education, Online and distance, Test prep and assessment, Corporate training and L&D and Marketplaces and discovery.",
  items: [
    {
      title: "K-12 schools and groups",
      breaks:
        "Parents are a first-class user nobody scoped, attendance is a daily legal record rather than a report, and a school group needs tenant-level overrides on almost every policy.",
      build:
        "One tenancy model with per-school overrides, a parent app that is a real surface rather than a portal link, and attendance captured as an auditable daily record.",
    },
    {
      title: "Higher education",
      breaks:
        "Credit accumulation under multiple entry and exit, electives that break timetabling, and an exam controller whose process exists nowhere in software. Departmental autonomy defeats a single rigid model.",
      build:
        "Credit logic inside the student record rather than in a spreadsheet, constraint-based timetabling, and department-scoped configuration that stops short of letting every department fork the schema.",
    },
    {
      title: "Online and distance",
      breaks:
        "Content delivery, video egress and DRM are the recurring cost nobody modelled, and completion tracking has to satisfy a regulator rather than a dashboard.",
      build:
        "A content pipeline with egress modelled from day one, plus SCORM and xAPI capture into an LRS so completion is evidence rather than an assertion.",
    },
    {
      title: "Test prep and assessment",
      breaks:
        "Assessment integrity is invisible in a demo and obvious in production. Client-side timing, non-resumable attempts and no exposure control all fail on the first high-stakes exam day.",
      build:
        "Server-authoritative timing, resumable attempts that survive a dropped connection, and item exposure control across an item bank.",
    },
    {
      title: "Corporate training and L&D",
      breaks:
        "The buyer is HR, the standard is cmi5 or SCORM, and completion has to reconcile to a compliance obligation rather than a grade.",
      build:
        "A cmi5 or SCORM runtime with completion records that map to the compliance framework the customer is actually audited against.",
    },
    {
      title: "Marketplaces and discovery",
      breaks:
        "Catalogue freshness is the product. Fees, cutoffs and placement data change constantly, and stale data is worse than missing data because a student acts on it.",
      build:
        "A catalogue with source and freshness on every field, plus search that stays fast while the underlying data churns.",
    },
  ],
};

export const systems = {
  title: "The standards layer, and where education projects are quietly lost",
  description:
    "This layer is imposed rather than chosen. RFPs specify LTI Advantage Complete the way a retailer specifies an ASN, and the vendor does not get a vote. It is also where the estimate that said it integrates with a few APIs goes wrong.",
  groups: [
    {
      group: "Learning interoperability",
      body: "LTI 1.3 Core is an OIDC third-party-initiated login followed by an RS256-signed JWT validated against a rotating JWKS endpoint. LTI Advantage Complete adds Deep Linking 2.0 for content selection, NRPS 2.0 for rosters and AGS 2.0 for grade passback. Certification requires paid 1EdTech membership and recurs annually.",
    },
    {
      group: "Content and activity records",
      body: "SCORM 1.2 and SCORM 2004 4th Edition are two incompatible data models and a package built for one will behave differently on the other. xAPI statements go to an LRS and are immutable: a wrong statement is corrected by voiding it, never by editing. cmi5 is the xAPI profile that defines the launch.",
    },
    {
      group: "Rostering and identity",
      body: "OneRoster 1.2 REST with OAuth 2.0 client credentials is the target; 1.1 is sunset for new certification and its OAuth 1.0a body-hash signing is a legacy landmine. SAML 2.0 federated login through InCommon or eduGAIN needs auto-refreshing metadata, or every login in the federation breaks on certificate rotation.",
    },
  ],
  distinction: {
    title: "The distinction that saves projects",
    body: "LTI 1.1 and LTI 1.3 are not versions of the same thing, they are different trust models. 1.1 rests on a shared secret between platform and tool, which is why 1EdTech has published a deprecation schedule for it and why institutions increasingly refuse non-1.3 tools outright. 1.3 replaces that with asymmetric keys and a JWKS endpoint the platform rotates on its own schedule. A tool built against 1.1 is not upgraded by changing a version string; the entire launch, key management and per-tenant registration model is different work. Scope it as 1.3 from the first commit or scope it twice.",
  },
  pairs: [
    {
      pair: "client_id versus deployment_id",
      body: "One platform can carry several deployments, so these are not interchangeable and a tool keyed only on client_id will cross tenants. Every multi-tenant LTI bug we have inherited lives in that confusion.",
    },
    {
      pair: "Iframe launch versus third-party cookies",
      body: "Safari ITP and Chrome both block third-party cookies, which breaks an iframe launch outright. Set SameSite=None with Secure and implement either the Storage Access API or the 1EdTech platform-storage postMessage pattern before you meet a Safari user, not after.",
    },
    {
      pair: "Server validation versus client validation",
      body: "Nonce and state must be validated on the server. A client-side check is not a check, and this is the one people skip because the launch appears to work without it.",
    },
    {
      pair: "Per-tenant keys versus one shared key",
      body: "Registering a single key across institutions reintroduces exactly the shared-secret failure LTI 1.3 exists to remove. Register per tenant even when it is more work at onboarding.",
    },
  ],
};

export const compliance = {
  title: "Which rules apply to you",
  description:
    "Dated obligations a procurement team can check. Several of these have already moved once, so confirm current status before you contract against them. We hold none of these certifications; we build the records that let you satisfy them. The items are: India, DPDP Act 2023 and DPDP Rules 2025 and India, academic identity and payments.",
  rows: [
    {
      item: "India, DPDP Act 2023 and DPDP Rules 2025",
      detail:
        "Rules were notified on 14 November 2025 and phase in: the Data Protection Board immediately, Consent Manager registration from November 2026, and full obligations by 13 May 2027. Everyone under 18 is a child, which requires verifiable parental consent with no behavioural tracking and no targeted advertising to children. For an Indian edtech product this is the largest single build item on this page: age assurance, guardian consent capture and an auditable consent ledger.",
    },
    {
      item: "India, academic identity and payments",
      detail:
        "APAAR ID, the Academic Bank of Credits and NAD all ride on DigiLocker, and higher education institutions have been directed to upload credit data to the ABC portal. NEP 2020 multiple entry and exit means credit accumulation belongs inside the student record rather than in a spreadsheet. On payments, RBI card tokenisation has been mandatory since October 2022 so never store card numbers, and e-mandate pre-debit notification applies to recurring fees.",
    },
    {
      item: "Gulf, Oman and Saudi data protection",
      detail:
        "Oman's PDPL came from Royal Decree 6/2022 and is now fully enforceable, regulated by MTCIT, with data subject rights inside 45 days, breach notification inside 72 hours and a named DPO. Children's and biometric data need a permit before processing. Saudi's PDPL sits under SDAIA with implementing regulations in force, expecting a DPIA for high-risk processing and a transfer risk assessment before data leaves the Kingdom. In-Kingdom hosting for student records is a routine buyer requirement rather than an exception.",
    },
    {
      item: "United States, student privacy",
      detail:
        "FERPA governs the education record, including the school-official exception, annual notification and 45-day record access. The amended COPPA Rule broadens what counts as personal information and requires separate parental consent for third-party disclosure, a written retention policy and prescriptive security. Confirm the exact compliance dates against the Federal Register before planning against them.",
    },
    {
      item: "Accessibility",
      detail:
        "The DOJ's ADA Title II rule sets WCAG 2.1 AA, not 2.2, for public schools and universities. An interim final rule on 20 April 2026 extended compliance to 26 April 2027 for populations of 50,000 or more and 26 April 2028 for smaller entities, with the technical standard unchanged. In Europe EN 301 549 maps to WCAG 2.1 AA and the European Accessibility Act has applied since 28 June 2025, reaching private e-learning sold to EU consumers. In India the RPwD Act 2016, GIGW 3.0 and IS 17802 apply. Section 508 procurement expects a VPAT.",
    },
    {
      item: "EU AI Act in education",
      detail:
        "Education AI is high risk under Annex III, covering admission decisions, evaluation of learning outcomes, level determination and monitoring for prohibited behaviour during tests. Prohibitions and AI literacy duties have applied since 2 February 2025, including the ban on emotion inference in education, which rules out stress-detection proctoring. Transparency duties mean disclosing AI involvement to the student.",
    },
  ],
};

export const ourWork = {
  title: "Our work in this sector",
  description:
    "One build, described properly. We would rather write up a single platform in depth than show a wall of logos.",
  items: [
    {
      client: "GetMyUni",
      place: "India",
      line: "A college discovery platform backed by Times Internet and part of the CollegeDekho Group. It consolidates what a student otherwise assembles from a dozen tabs: courses, fee structures, placement records, entrance exam details and cutoffs, in a catalogue that has to stay searchable while it changes constantly. On top sits the decision layer, student-generated reviews and campus infrastructure insight rather than brochure copy, plus real-time exam alerts so a deadline does not pass quietly. The institution side is the other half: recruitment and analytics that tell a university where its admitted students actually came from. The platform's published reach is over 40 million students a year across more than 200 universities, which is the client's figure for the size of the system rather than an outcome we claim.",
      stack: ["PHP", "Yii", "PostgreSQL", "Meilisearch", "Paytm"],
    },
  ],
};

export const whatGoesWrong = {
  title: "What goes wrong",
  description:
    "Ten failure modes with the counter-practice attached. Naming them is more useful than a list of reasons to pick us. The opening three are: Data is not scoped to an academic session, Parents were never modelled as users and LTI scoped as 1.1 and sold as Advantage.",
  items: [
    {
      title: "Data is not scoped to an academic session",
      line: "Change a curriculum and last year's records stop making sense, because nothing was versioned by year and term. Version from the first migration; retrofitting it means reinterpreting every historical result.",
    },
    {
      title: "Parents were never modelled as users",
      line: "They arrive as an afterthought with their own permissions, their own notifications and their own app, halfway through the build. Put every role on the list in discovery, including the ones who never attend the meetings.",
    },
    {
      title: "LTI scoped as 1.1 and sold as Advantage",
      line: "The trust model is different, so a version bump does not deliver it and procurement will test the difference. Scope 1.3 with per-tenant keys from the first commit.",
    },
    {
      title: "Assessment timing trusted to the client",
      line: "A browser clock and a non-resumable attempt survive a demo and fail on the first high-stakes exam day. Server-authoritative timing and resumable attempts, always.",
    },
    {
      title: "Video egress not modelled",
      line: "The build cost is quoted and the recurring bandwidth bill arrives in year two, larger than the maintenance line. Model egress at the volumes you actually expect before choosing a delivery approach.",
    },
    {
      title: "Concessions handled by editing the invoice",
      line: "Reconciliation then cannot explain why two students paid different amounts for the same programme. Model the concession as its own object against the fee, so the ledger stays explicable.",
    },
    {
      title: "Accessibility treated as a final QA pass",
      line: "It is architectural, and retrofitting keyboard order and focus management across a finished product costs more than building it right. Audit against the level actually required, early.",
    },
    {
      title: "One rigid model across autonomous departments",
      line: "Departments route around software that does not fit, and shadow spreadsheets return. Allow scoped configuration, and be clear about where configuration stops and forking begins.",
    },
    {
      title: "Cutover attempted mid-term",
      line: "Fees and gradebook migrations have one safe window a year and it is not November. Plan the cutover against the academic calendar before the engineering plan exists.",
    },
    {
      title: "Consent captured but not evidenced",
      line: "Under the DPDP Rules a guardian consent you cannot reproduce on demand is the same as no consent. Keep an auditable consent ledger, versioned like everything else.",
    },
  ],
};

export const buildOrBuy = {
  title: "Build, buy, or buy the core and build the edge",
  description:
    "The honest answer is usually the third one. Worth stating plainly: we are not an LMS vendor and we are not an accreditation body, so the platform choice and the academic approval stay with you in every row below. The calls are: The LMS itself, The student record and institutional workflow and Assessment and proctoring.",
  rows: [
    {
      option: "The LMS itself",
      best: "Buy",
      verdict:
        "Course delivery, content runtime and the standards surface are solved and heavily certified. Building your own means owning SCORM, xAPI and LTI conformance permanently, for no differentiation.",
    },
    {
      option: "The student record and institutional workflow",
      best: "Build",
      verdict:
        "This is where your institution differs from every other, and it is the part no packaged product models correctly once departments have their own rules. It is also the cheapest thing to get right early and the most expensive to retrofit.",
    },
    {
      option: "Assessment and proctoring",
      best: "Buy the core, build the edge",
      verdict:
        "Buy the proctoring service and the delivery runtime, which are commodities with real compliance overhead. Build the item bank, exposure control and the integrity rules, because those encode your academic policy.",
    },
  ],
};

export const cost = {
  title: "What education software development costs, with the arithmetic shown",
  description:
    "Every competitor publishes a total with no hours behind it. Here is the rate, the hours and the multiplication, so you can argue with any line of it. The scope priced here is a K-12 operations platform. Priced against: How many distinct user roles, Session-scoped data, Each integration, Report card and certificate templates and Data migration from the incumbent.",
  drivers: [
    {
      driver: "How many distinct user roles",
      hours: "40 to 90 each",
      note: "Student, parent, teacher, head of department, registrar, exam controller, finance, counsellor, admin. Each carries its own screens, permissions and audit trail, multiplied by tenant-level overrides.",
    },
    {
      driver: "Session-scoped data",
      hours: "Adds 15 to 25%",
      note: "Applied across every affected module. Each record versioned by academic year and term, with history that stays accurate after a curriculum change.",
    },
    {
      driver: "Each integration",
      hours: "60 to 160 each",
      note: "A documented REST API at the low end; a nightly batch that has to be reverse engineered and reconciled at the high end.",
    },
    {
      driver: "Report card and certificate templates",
      hours: "60 to 140",
      note: "Beyond the base gradebook, because every institution wants its own layout and will not accept a generic one.",
    },
    {
      driver: "Data migration from the incumbent",
      hours: "Rarely small",
      note: "It usually arrives as inconsistent spreadsheets with no stable identifier, so identity resolution comes before loading anything.",
    },
    {
      driver: "Assessment integrity",
      hours: "Invisible in a demo",
      note: "Server-authoritative timing, resumable attempts and exposure control. Expensive to do properly and unmistakable when it was not.",
    },
    {
      driver: "Accessibility level required",
      hours: "60 to 140",
      note: "WCAG 2.1 AA is the level US public entities are held to. Building to it costs far less than retrofitting to it.",
    },
    {
      driver: "The academic calendar",
      hours: "Schedule, not hours",
      note: "It does not change the total, it changes when the total can be delivered. One safe cutover window a year is a real constraint on the plan.",
    },
  ],
  modules: [
    { module: "Discovery", hours: "60 to 120" },
    { module: "Multi-tenancy, SSO and permissions", hours: "90 to 180" },
    { module: "Student and staff master data", hours: "120 to 220" },
    { module: "Admissions and counsellor CRM", hours: "140 to 260" },
    { module: "Fees, concessions and instalments", hours: "160 to 300" },
    { module: "Attendance and timetabling", hours: "120 to 260" },
    { module: "Gradebook and report cards", hours: "160 to 320" },
    { module: "Data migration", hours: "60 to 160" },
  ],
  math: {
    title: "Phase one, added up",
    points: [
      "Discovery 90 plus tenancy 130 plus master data 170 plus admissions 190 plus fees 220 plus attendance 180 plus gradebook 230 plus migration 110 equals 1,320 hours. Every one of the eight sits inside its own published range above, so you can move any line and see what it does to the total.",
      "At $40 per hour that is $52,800. At $100 per hour it is $132,000. At a $65 blended rate, about $85,800. The full span across the eight modules is 910 hours at every minimum to 1,820 at every maximum. Five people at roughly 600 useful hours a month puts a phase one at about three to five months.",
      "Deliberately outside that number: QA and project management, which we quote at 20 to 30% and 10 to 15% rather than hiding inside the module figures; a 15 to 20% contingency stated openly; and the assessment engine, proctoring, video delivery and mobile apps, each of which is its own decision. Budget maintenance at 15 to 20% of build cost a year.",
    ],
  },
};

export const costHighlights = [
  {
    label: "Phase one range",
    value: "$52,800 to $132,000",
    note: "The 1,320 hour worked example at the ends of the rate band, about $85,800 at a $65 blend.",
  },
  {
    label: "Typical timeline",
    value: "3 to 5 months",
    note: "Paced by the academic calendar as much as by engineering. One safe cutover window a year.",
  },
  {
    label: "Useful hours",
    value: "910 to 1,820",
    note: "Every module at its minimum, through to every module at its maximum. QA and PM quoted separately.",
  },
];

export const engagement = {
  title: "Engagement models",
  description:
    "Four models for education software development, each with the downside stated in the same breath. In order of how settled the scope is, they are: Discovery and role map, Phase one build, Build and hand over at cutover and Ongoing engineering.",
  items: [
    {
      title: "Discovery and role map",
      good: "Three to four weeks producing the full role list, the term structure and a scoped build with hours attached. On this vertical it regularly halves the surprise later, because the role list is always longer than anyone says.",
      bad: "You pay for a document, and it frequently reports a larger scope than you hoped. That is the point of it, and it is not comfortable.",
    },
    {
      title: "Phase one build",
      good: "The eight modules above against a written scope, delivered to a cutover window agreed with your academic calendar.",
      bad: "It is an operations platform, not a full institutional suite. Assessment, video and mobile are later phases and pretending otherwise would be a worse trade for you than saying so now.",
    },
    {
      title: "Build and hand over at cutover",
      good: "We stay through the one window that matters, which is when migration defects actually surface.",
      bad: "More expensive per hour of output than a clean handover, and it ties a chunk of our team to your calendar rather than your backlog.",
    },
    {
      title: "Ongoing engineering",
      good: "A standing allocation across terms, which suits an institution adding departments or campuses steadily.",
      bad: "It works when there is a genuine backlog and quietly wastes money when there is not. We will tell you when there is not.",
    },
  ],
  recommendation:
    "What we usually suggest: discovery and a role map first, then a fixed scope phase one on master data, admissions and fees, with the gradebook cutover aligned to the next safe window rather than the next sprint.",
};

export const delivery = {
  title: "How we deliver education software development",
  description:
    "Five phases, each named by the artifact it produces rather than by a stage in a generic waterfall. In order, they are: Role and term map, Session-scoped model, Admissions and fees, Teaching records and Cutover pack. Each is named by the artifact it hands you, so you can ask to see one.",
  items: [
    {
      phase: "Role and term map",
      line: "Every user role written down with its permissions and audit needs, alongside the term structure and the academic calendar. This artifact decides the size of everything after it and is the one most projects skip.",
    },
    {
      phase: "Session-scoped model",
      line: "The student record versioned by academic year and term, agreed on paper before anything is built against it. Retrofitting this is a rewrite rather than a migration.",
    },
    {
      phase: "Admissions and fees",
      line: "Counsellor workflow and the fee ledger with concessions modelled as objects, because these two carry the money and the disputes.",
    },
    {
      phase: "Teaching records",
      line: "Attendance, timetabling and the gradebook, with report card templates that an institution can change without an engineer.",
    },
    {
      phase: "Cutover pack",
      line: "Migration, reconciliation reports and a rollback plan, executed inside the one safe window the calendar allows.",
    },
  ],
};

export const nonFunctional = {
  title: "The technical buyer's checklist",
  description:
    "Copy this and run it against us, or against anyone else quoting for education software development. They are grouped as: The record and its history, Standards and tenancy and Consent, access and evidence. Copy any line straight into your own requirements document.",
  groups: [
    {
      group: "The record and its history",
      body: "Every record scoped to an academic session, with history that stays correct after a curriculum change. A written answer on what happens to a student's record when they leave, return, or transfer between campuses in the same group.",
    },
    {
      group: "Standards and tenancy",
      body: "LTI 1.3 with keys registered per tenant, not one shared key. OneRoster 1.2 rather than 1.1. Documented handling of client_id against deployment_id, and an iframe launch that works in Safari with third-party cookies blocked.",
    },
    {
      group: "Consent, access and evidence",
      body: "Guardian consent captured, versioned and reproducible on demand rather than implied by a checkbox. WCAG 2.1 AA verified with a screen reader rather than an automated scan alone, and a VPAT or ACR if you sell into US public procurement.",
    },
  ],
};

export const faqs = [
  {
    question: "Do we need to replace our LMS?",
    answer:
      "Almost never, and we will say so. Course delivery and the standards runtime are solved problems with heavy certification behind them. What institutions actually lack is the record system around the LMS: admissions, fees, attendance and a gradebook that survives a curriculum change. We integrate over LTI rather than replacing what works.",
  },
  {
    question: "What does it cost, and how do you price it?",
    answer:
      "Hours times $40 to $100 per hour by role. The module table gives the range for each of the eight modules and the worked example shows 1,320 hours coming to about $85,800 at a $65 blend. QA at 20 to 30% and project management at 10 to 15% are quoted separately rather than hidden inside the module figures, and contingency is stated at 15 to 20% rather than padded in.",
  },
  {
    question: "Who owns the code, the student data and the integrations?",
    answer:
      "You do. The code is yours on delivery, student records live in your infrastructure rather than ours, and the integrations are yours to keep running or hand to another supplier. We do not retain a copy of student data, and there is no arrangement under which it becomes training material.",
  },
  {
    question: "Why do you keep talking about academic sessions?",
    answer:
      "Because it is the difference between education software and everything else. A student's marks, fees, class and even their name belong to a specific year and term. Store them flat and the first curriculum change makes history unreadable, with no way back short of reinterpreting every record you have issued.",
  },
  {
    question: "Can you get us LTI Advantage certified?",
    answer:
      "We can build to the specification and prepare the submission. Certification itself runs through 1EdTech, requires paid membership and recurs annually, so it is a standing cost on their calendar rather than a one-off task on ours. We scope 1.3 with per-tenant keys from the start, because an LTI 1.1 tool is not upgraded by changing a version string.",
  },
  {
    question: "How does the DPDP Act affect an Indian edtech product?",
    answer:
      "Substantially, because everyone under 18 is a child under the Rules, which means verifiable parental consent, no behavioural tracking and no targeted advertising to them. Rules were notified 14 November 2025 and phase through to full obligations by 13 May 2027. The build items are age assurance, guardian consent capture and a consent ledger you can reproduce on demand.",
  },
  {
    question: "Which accessibility level do we actually need?",
    answer:
      "For US public schools and universities the DOJ Title II rule sets WCAG 2.1 AA, not 2.2, and an interim final rule on 20 April 2026 moved compliance to 26 April 2027 or 26 April 2028 depending on population. In Europe EN 301 549 maps to the same level. Build to it rather than retrofitting; the retrofit costs more than the build.",
  },
  {
    question: "Can you migrate from our current SIS?",
    answer:
      "Yes, and the honest part is that migration is rarely small. It usually arrives as inconsistent spreadsheets with no stable identifier, so identity resolution comes before any loading. We also plan the cutover against your academic calendar, because fees and gradebook have one safe window a year.",
  },
  {
    question: "Do you build proctoring?",
    answer:
      "We integrate it rather than building it, and we would steer you away from emotion or stress detection entirely. The EU AI Act prohibits emotion inference in education, which rules that category out for anyone selling into Europe regardless of how it demos.",
  },
  {
    question: "You have one education client. Why should we trust the rest?",
    answer:
      "Fair question, and we would rather answer it than pad the page. GetMyUni is the one education platform we have built and it is described in full above. Everything else on this page is standards work, regulation and failure modes, which are checkable independently of us. If you want references beyond that, ask and we will tell you honestly what we can and cannot offer.",
  },
];

export const nextSteps = {
  title: "What happens next",
  description:
    "Four steps with a shape attached to each, so booking a call is a known quantity.",
  items: [
    {
      step: "A 30 minute technical call",
      line: "Bring your role list, your term structure, and the one report your registrar currently builds by hand. Those three things size the project faster than an hour of description.",
    },
    {
      step: "The session-scoping test",
      line: "We look at whether your current system can still render last year's results correctly after a curriculum change. The answer tells us whether this is an integration or a rebuild.",
    },
    {
      step: "A written scope within a week",
      line: "The modules, the hour ranges and the arithmetic, with QA, project management and contingency shown separately rather than folded in. If the honest answer is that your LMS already covers most of it, the document says that.",
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
          note: "Where the session-scoped student record lives",
        },
        {
          label: "Web development",
          href: "/services/web-development",
          note: "Registrar, counsellor and parent surfaces",
        },
        {
          label: "Mobile app development",
          href: "/services/mobile-app-development",
          note: "Parent and student apps",
        },
      ],
    },
    {
      group: "Adjacent capabilities",
      links: [
        {
          label: "AI document management",
          href: "/services/ai-document-management-system",
          note: "Transcripts, certificates and records",
        },
        {
          label: "AI agent development",
          href: "/services/ai-agent-development",
          note: "Enquiry triage and counsellor assistance",
        },
        {
          label: "UI and UX design",
          href: "/services/ui-ux-design",
          note: "Accessibility built in rather than retrofitted",
        },
      ],
    },
    {
      group: "Other sectors",
      links: [
        {
          label: "Social and community",
          href: "/industries/community-app-development",
          note: "Moderation and identity for student cohorts",
        },
        {
          label: "SaaS and productivity",
          href: "/industries/saas-platform-development",
          note: "Many institutions on one multi-tenant platform",
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
    title: "Send us one report your registrar builds by hand",
    description:
      "Whichever spreadsheet gets rebuilt every term tells us more about your data model than a requirements document does. We will tell you what it would take for the system to produce it, and whether that is an integration or a rebuild.",
    ctaText: "Book a 30 minute technical call",
  },
  end: {
    title: "Start with the term structure, not the feature list",
    description:
      "Almost every question on this page resolves to whether your records are scoped to an academic session. We will check that, tell you which regulations actually bind you, and give you the hours either way.",
    ctaText: "Book a 30 minute technical call",
  },
};

export const relatedPosts = [
  "ai-agents-for-business",
  "how-much-does-ai-development-cost",
  "ai-copilots-for-business",
  "chat-with-your-documents",
  "top-ai-use-cases-you-cant-ignore",
  "ai-for-fraud-detection-a-quick-guide",
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
      "Automation, document and assistant work that applies directly to institutional systems.",
  },
};
