import type { IndustryPageData } from "./types";

export const heroSection = {
  eyebrow: "Industries · Professional Services",
  title: "Professional services software development for ",
  titleHighlight: "consultancies and firms",
  description:
    "Recorded, billable, billed and collected are four different states of the same hour, and most systems hold one field plus a boolean. Leakage lives in the gap the schema cannot express, and work in progress becomes a guess that finance defends once a month. We build the parts underneath that argument.",
  features: [
    "Time is a claim, not hours",
    "WIP, not invoiced revenue",
    "IFRS 15 and ASC 606",
    "$40 to $100 per hour",
  ],
  scrollTarget: "#essence",
  ctaText: "Book a 30 minute technical call",
  bgImage: "/static/assets/industries/professional-services-industries.webp",
};

export const seo = {
  primaryKeyword: "professional services software development",
  intent: "commercial",
  secondaryKeywords: [
    "practice management software development",
    "time and billing software development",
  ],
  competingUrl: null,
} as const;

export const essence = {
  title: "The short version",
  description: "The commercial facts in one block, before any of the detail. Practice management software development and time and billing software development are the same system from two ends, with revenue recognition between them. The tiles cover: Typical integration set, Phase one timeline, Rate band, Phase one range, Stack we actually use and Our commitment.",
  tiles: [
    {
      label: "Typical integration set",
      value:
        "An accounting ledger you are keeping, a payments provider, single sign on and directory for staff and clients, a document store with e-signature, an e-invoicing path where the jurisdiction requires one, and whichever delivery tools your practice already runs on.",
    },
    {
      label: "Phase one timeline",
      value:
        "14 to 22 weeks for the worked example below, run as a squad rather than a single developer. A financial year end inside the window compresses scope rather than the calendar, because nobody changes a revenue schedule in the week before close.",
    },
    {
      label: "Rate band",
      value:
        "$40 to $100 per hour by role and seniority. Portals and reporting near the floor, the engagement model and the revenue schedule near the ceiling. Mixed teams blend to around $65.",
    },
    {
      label: "Phase one range",
      value:
        "1,180 hours in the worked example, which is $47,200 to $118,000 across the rate band and about $76,700 at the blend. The cost section shows every module and its range, so you can argue with any line of it.",
    },
    {
      label: "Stack we actually use",
      value:
        "Python with FastAPI, Node, PostgreSQL and Next.js, with Terraform for infrastructure and Grafana and Prometheus for metrics. Postgres carries the engagement, the rate card history and the revenue schedule, because all three are append problems before they are product ones.",
    },
    {
      label: "Our commitment",
      value:
        "No quote before a discovery that produces the integration inventory and the engagement model decision. Three things we are not: we do not provide legal, tax or audit advice, we do not hold client money, and we are not an accredited service provider for e-invoicing or statutory filing.",
    },
  ],
};

export const anchors = [
  { id: "who-this-is-for", label: "Is this us?" },
  { id: "sub-verticals", label: "What breaks for us?" },
  { id: "systems", label: "What is an hour worth?" },
  { id: "compliance", label: "Which rules apply?" },
  { id: "what-goes-wrong", label: "What goes wrong?" },
  { id: "build-or-buy", label: "Build it or buy it?" },
  { id: "cost", label: "What does it cost?" },
];

export const operations = {
  title: "Where time and billing systems earn their keep",
  description:
    "The stages an engagement moves through, and what we build at each one. The stages run: Take on and check conflicts, Agree scope and rate card, Record time and expense, Value the work in progress, Bill, adjust and collect and Recognise revenue over time.",
  stages: [
    "Take on and check conflicts",
    "Agree scope and rate card",
    "Record time and expense",
    "Value the work in progress",
    "Bill, adjust and collect",
    "Recognise revenue over time",
  ],  image: {
    src: "/static/assets/industries/professional-services-operations-map.svg",
    alt: "Two band professional services map covering take on, scope and time capture, then work in progress, billing and revenue.",
  },
};

export const segments = {
  title: "Who this is for",
  description:
    "Six positions we are usually called from, and the thing each one is missing. Not a fit: if you want a practice management platform replaced end to end inside a quarter, or a partner who will give legal, tax or audit advice or hold client money for you, we are the wrong firm and would rather say so on the first call.",
  items: [
    {
      title: "Firms outgrowing spreadsheets",
      line: "Time comes in from a tool, rates live in a workbook, and the invoice run is a person. What is missing is one engagement record that the rate, the bill and the revenue schedule all read from.",
    },
    {
      title: "Agencies with retainer sprawl",
      line: "Retainers roll over, overage is negotiated per client, and nobody can say which retainers are underwater until quarter end. What is missing is drawdown modelled as a ledger rather than as a monthly reset.",
    },
    {
      title: "Practices holding client money",
      line: "Money held for a client is not the firm's money, and proving that on a past date is the question that matters. What is missing is a per matter position rather than a reconciled bank balance.",
    },
    {
      title: "Firms selling fixed fees",
      line: "A fixed fee still consumes time, and profitability is invisible unless recorded time is valued against the fee. What is missing is the arithmetic that turns hours into a margin per engagement rather than a utilisation figure.",
    },
    {
      title: "Engineering firms on milestones",
      line: "Billing follows certified milestones while effort follows the programme, and the two rarely line up in the same month. What is missing is a revenue schedule that is separate from the billing schedule.",
    },
    {
      title: "Firms whose WIP is a guess",
      line: "Work in progress is assembled by hand and defended in a meeting every month. What is missing is a valuation computed from the engagement, the rate card as at the date, and the write off policy applied consistently.",
    },
  ],
};

export const subVerticals = {
  title: "Find your operation",
  description:
    "Professional services is one phrase for six businesses. What breaks is different in each, so what we build is different. The operations covered here are: Consultancies, Agencies and studios, Legal practices, Accounting and audit, Engineering and AEC and Managed services.",
  items: [
    {
      title: "Consultancies",
      breaks:
        "The commercial structure and the delivery structure are different trees, and most systems only have one. A single contract can carry several engagements, an engagement can run several workstreams, and a cap or a fixed fee can sit above all of them. Rate cards are negotiated per client, per grade and per year, and a renegotiation with retroactive effect re-values time already recorded, which a system storing the rate on the timesheet row simply cannot do.",
      build:
        "A three level model where contract, engagement and project are distinct objects with their own commercial terms, so a cap can sit at any of them. Rate cards as dated reference data keyed to client, grade and period, with the timesheet holding the grade rather than the rate. Re-rating as a supported operation with a record of what changed and why, instead of a bulk update nobody can reverse.",
    },
    {
      title: "Agencies and studios",
      breaks:
        "Retainers are sold as a monthly amount and consumed unevenly, so the interesting number is the drawdown position rather than the invoice. Rollover rules differ per client, overage is negotiated after the fact, and pass through costs from suppliers arrive late and are marked up differently depending on the agreement. Meanwhile creative rework is real effort that nobody wants to record against a client.",
      build:
        "Retainer drawdown as a ledger with grants, consumption, rollover and expiry each recorded, so the position is derived rather than reset. Pass through costs modelled with their markup rule and their recoverability, arriving late without breaking a closed period. A rework category that is recorded and reported rather than absorbed silently, because the alternative is a margin problem nobody can locate.",
    },
    {
      title: "Legal practices",
      breaks:
        "Money held for a client is not the firm's money, and the question that matters is what a given matter's balance was on a past date rather than whether the bank reconciles today. Conflicts checking has to happen before work starts and against parties who may not be clients. Time is recorded against matters that can run for years, be transferred between fee earners, and be billed on a basis that changes partway through.",
      build:
        "A per matter client money position that can be produced for any past date, held separately from office money with movements that cannot be netted. Conflicts as a searchable party graph checked at take on and re-checked when parties change. Matter level history that survives a fee earner transfer, so a billing narrative reconstructs from records rather than from whoever remembers.",
    },
    {
      title: "Accounting and audit",
      breaks:
        "Independence is a systems requirement, not a policy poster: the platform has to know which clients the firm may not serve and which staff may not be assigned. Fixed fee compliance work is priced annually and delivered in a compressed season, so profitability is invisible until the season ends. Recurring engagements roll forward and the scope quietly drifts year on year without the fee moving.",
      build:
        "Restrictions as data enforced at assignment and at take on, rather than checked by a person at the point of least attention. Fixed fee engagements valued continuously against recorded time so the margin is visible in February rather than in July. Roll forward that copies scope explicitly and shows the difference against last year, making drift a decision instead of an accident.",
    },
    {
      title: "Engineering and AEC",
      breaks:
        "Billing follows certified milestones and effort follows the programme, so the two diverge every month and the gap is exactly the work in progress. Variations are instructed verbally and papered later, which means real effort is spent against a scope that does not formally exist yet. Subconsultants sit inside the fee, and their invoices arrive on their own timetable rather than yours.",
      build:
        "A revenue schedule separate from the billing schedule, with progress measured by an input method against the contract so recognition does not wait for a certificate. Variations as first class objects that can carry recorded time before they are approved, with their status visible in the margin. Subconsultant commitments held against the engagement so committed cost is known before the invoice arrives.",
    },
    {
      title: "Managed services",
      breaks:
        "The commercial model is a subscription, the delivery model is a ticket queue, and neither system knows about the other. Service level credits are calculated in a spreadsheet from data the ticketing tool holds, and applied as manual invoice adjustments. Contracted volumes are exceeded quietly because nobody compares consumption against entitlement until renewal.",
      build:
        "Entitlement and consumption modelled against the contract so overage is visible during the month rather than at renewal. Service credits computed from the same records the client sees, so a dispute is about the rule and not about the data. A single client record that the subscription, the queue and the invoice all reference rather than three that get reconciled.",
    },
  ],
};

export const systems = {
  title: "What an hour is actually worth, and why billing and revenue are two different schedules",
  description:
    "An hour recorded on Tuesday has no value until it is attached to an engagement, priced against the rate card that applied on Tuesday, tested against a cap, and either billed or written off under a policy. Then, separately, it contributes to revenue recognised over the life of the contract, which is not the same event as the invoice. Here is the estate we expect to meet, and the decisions that determine whether work in progress is a computed number or a monthly argument.",
  groups: [
    {
      group: "Practice and professional services automation",
      body: "Kantata, Certinia, Deltek, Unit4, Projectworks and Scoro cover mid market and larger firms, usually bundling time, billing and resourcing. The bundling is the thing to check, because a product that models one commercial level will not grow a second one, and firms discover that at the point where a cap needs to sit above several engagements.",
    },
    {
      group: "Sector specific practice management",
      body: "Clio, Actionstep and LEAP sit under legal practices, IRIS, Karbon and CCH under accounting firms, and Deltek and Newforma under engineering and design. These carry the sector obligations natively, which is worth a great deal, and they tend to be the least flexible about the commercial model in exchange.",
    },
    {
      group: "The ledger and everything around it",
      body: "Xero, QuickBooks, NetSuite, Sage Intacct and Tally carry the accounting underneath most of this, with Stripe, GoCardless and Razorpay on collection and an e-invoicing path where the jurisdiction requires one. The integration question is rarely the API and nearly always which system is authoritative for the invoice and which merely reports it.",
    },
  ],
  distinction: {
    title: "The distinction that saves projects",
    body: "A practice management system, a resourcing tool and a general ledger are three products, and buying one does not give you the other two. The gap that catches firms is narrower than that: almost every practice management product will produce an invoice, and almost none will produce a revenue schedule that is independent of it. Under IFRS 15 and ASC 606 a services contract satisfied over time is recognised as progress is made, which is not when the invoice goes out, so a firm that models only billing has no work in progress figure it can compute rather than assemble. Establish which system owns the revenue schedule before anything is bought, because retrofitting it means restating periods that are already closed.",
  },
  pairs: [
    {
      pair: "A timesheet entry against a billable claim",
      body: "Recorded, billable, billed and collected are four states, and the transitions between them are where a firm's margin actually goes. A system holding hours plus a billable boolean can tell you utilisation and nothing about realisation, because the value of what was recorded and the value of what was billed are never both stored. Model the entry with its engagement, its grade, its status and every transition it has been through, including write offs with their reason and their author. Leakage then becomes a number you can attribute to a client, a partner or a type of work, rather than a gap that appears in the management accounts with no explanation attached.",
    },
    {
      pair: "An invoice against recognised revenue",
      body: "An invoice is a demand for payment on a billing schedule that was negotiated. Recognised revenue is a measure of progress against a performance obligation, and under IFRS 15 and ASC 606 the two are deliberately separate: progress is measured by an input method such as costs incurred or labour hours, or by an output method such as milestones delivered. A monthly retainer billed evenly against work delivered unevenly recognises unevenly, and the difference is work in progress or deferred income depending on direction. Systems that treat the invoice as the revenue event force finance to rebuild that difference by hand every month, which is why so many firms cannot close quickly.",
    },
    {
      pair: "A rate against a rate card at a date",
      body: "A rate belongs to a combination of client, grade and period, not to a person, and the same fee earner is billed at different rates on different engagements in the same week. Rate cards are renegotiated late and applied retroactively, which re-values time that has already been recorded and sometimes already billed. If the rate is copied onto the timesheet row at entry, that restatement is a bulk update with no memory of what it overwrote. Hold the card as dated reference data and store the grade on the entry, and a retroactive change becomes a re-rate with a record of what moved, which is also the only form of it that an auditor will accept.",
    },
    {
      pair: "A project against an engagement against a contract",
      body: "Delivery and commerce are two trees and most systems ship one. A contract carries commercial terms and can span several engagements; an engagement carries the scope, the rate card and often the cap; a project is how delivery organises the work and can be created and closed without any commercial event at all. Collapsing these means a cap can only sit where the schema allows rather than where it was negotiated, and firms respond by creating fake projects to hold commercial terms, which then pollutes every delivery report. Model all three, allow terms at each level, and resist the temptation to let one of them stand in for the others.",
    },
  ],
};

export const compliance = {
  title: "Which rules apply to you",
  description:
    "Five standards a buyer in this sector asks for by name, then every regional instrument in one place. Thresholds and tax rates move, so verify the regional row before contracting. The rules in scope are: ISO/IEC 27001, SOC 1 and SOC 2, GDPR and UK GDPR, IFRS 15 and ASC 606, PCI DSS and Everything regional, in one place.",
  rows: [
    {
      item: "ISO/IEC 27001",
      detail:
        "The information security management certification procurement asks for by name, and in this sector it is frequently contractual rather than optional, because your clients are passing you their own confidential material. The scope statement matters more than the certificate: the question is whether client deliverables and working papers sit inside the certified boundary or immediately next to it.",
    },
    {
      item: "SOC 1 and SOC 2",
      detail:
        "SOC 2 covers security and availability and is the standard ask from clients running vendor assessments. SOC 1 covers controls feeding your clients' financial reporting, and it appears as soon as any part of your service touches their books, which for managed accounting or outsourced finance work is immediately.",
    },
    {
      item: "GDPR and UK GDPR",
      detail:
        "Client files carry personal data about people who are not your clients, which makes controller and processor roles a per engagement question rather than a company wide answer. Retention collides with professional record keeping obligations that outlast the engagement by years, so it is set per data category, and privileged or otherwise protected material needs its own access model rather than a role on a shared folder.",
    },
    {
      item: "IFRS 15 and ASC 606",
      detail:
        "Revenue from Contracts with Customers is the standard that governs when your work becomes revenue. IFRS 15 applies to annual reporting periods beginning on or after 1 January 2018. ASC 606 applies to public entities for annual reporting periods beginning after 15 December 2017 and to private companies and non-profits after 15 December 2018. Where a performance obligation is satisfied over time, progress is measured by an input method such as costs incurred or labour hours, or an output method such as milestones, and that choice is a system requirement rather than a note in the accounts.",
    },
    {
      item: "PCI DSS",
      detail:
        "It applies wherever card data touches fee collection, and the useful move is nearly always to keep it out of your estate entirely by tokenising at the gateway. Worth deciding deliberately, because a client portal that stores a card for convenience pulls your whole delivery platform into scope alongside it.",
    },
    {
      item: "Everything regional, in one place",
      detail:
        "In India electronic invoicing under GST is mandatory for business to business supplies and exports where aggregate turnover exceeds ₹5 crore, in force since 1 August 2023, and since 1 April 2025 taxpayers with an annual aggregate turnover of ₹10 crore or more must upload an invoice to the Invoice Registration Portal within 30 days of issue, which turns late billing into a tax problem rather than only a cash flow one. Tax deducted at source under section 194J of the Income Tax Act runs at 10 percent on professional services, royalty and director remuneration and 2 percent on technical services, with the threshold raised to ₹50,000 per financial year, applied to each category of service independently, from 1 April 2025; because that deduction lands against the invoice rather than against the engagement, a system that cannot reconcile deducted amounts back to specific invoices will spend every year end doing it manually. For regulated practices generally, money held for a client is not the firm's money and the obligation is to prove the position per matter rather than per bank account, with the detail set by whichever regulator licenses you, so confirm the accounts rules that apply to your practice before designing the ledger. Firms operating across more than one jurisdiction should expect the electronic invoicing question to be answered differently in each and should treat the transmission path as a per entity decision rather than a platform wide one.",
    },
  ],
};

export const whatGoesWrong = {
  title: "What goes wrong",
  description:
    "Ten failure modes with the counter-practice attached. Naming them is more useful than a list of reasons to pick us. The first three below are: The rate is copied onto the timesheet, Billable is a boolean and The invoice is treated as the revenue event.",
  items: [
    {
      title: "The rate is copied onto the timesheet",
      line: "A retroactive rate change then becomes a bulk update with no memory of what it overwrote, which no auditor will accept. Store the grade on the entry and hold the rate card as dated reference data, so a re-rate is an operation with a record rather than an overwrite.",
    },
    {
      title: "Billable is a boolean",
      line: "Utilisation is then measurable and realisation is not, so leakage shows up in the management accounts with nothing to attribute it to. Model recorded, billable, billed and collected as states with transitions, and write offs with a reason and an author.",
    },
    {
      title: "The invoice is treated as the revenue event",
      line: "Under IFRS 15 and ASC 606 a contract satisfied over time recognises as progress is made, not when a document is sent. Keep the revenue schedule as its own object on the contract, or finance will rebuild the difference by hand every month.",
    },
    {
      title: "Commercial terms are hung on projects",
      line: "When contract, engagement and project are one table, a cap can only sit where the schema allows rather than where it was negotiated, and people invent fake projects to hold terms. Model all three levels and allow terms at each.",
    },
    {
      title: "Retainers reset monthly",
      line: "Rollover, overage and unused balance are all invisible if the model starts each month from zero, and the client will remember what you have forgotten. Hold drawdown as a ledger and derive the position rather than resetting it.",
    },
    {
      title: "Work in progress is assembled by hand",
      line: "A number defended in a meeting is a number that changes depending on who prepares it. Compute the valuation from the engagement, the rate card as at the date and a written write off policy, so the monthly conversation is about the policy rather than the arithmetic.",
    },
    {
      title: "Conflicts and independence are a policy document",
      line: "Checking at take on by asking a person puts the control at the point of least attention, and the failure is not recoverable once work has started. Hold restrictions as data and enforce them at assignment and at take on, with a re-check when parties change.",
    },
    {
      title: "Client money shares a ledger with office money",
      line: "A reconciled bank balance says the bank agrees, not whose money it is, and the question is always about a past date. Keep a per matter position that cannot be netted against office balances and can be produced for any date.",
    },
    {
      title: "Late billing is treated as a cash flow problem",
      line: "In India an invoice from a taxpayer above the ₹10 crore threshold has to reach the Invoice Registration Portal within 30 days of issue, so delay stops being commercial and starts being fiscal. Put the reporting clock in the billing workflow where the person delaying can see it.",
    },
    {
      title: "Migration is signed off on the WIP total",
      line: "Matching the work in progress figure on cutover day proves the sum, not the entries or the rates behind it. Replay a full past year of time and billing per engagement and compare entry by entry, because a compensating pair of errors will always agree at the total.",
    },
  ],
};

export const buildOrBuy = {
  title: "Build, buy, or buy the core and build the edge",
  description:
    "The honest answer is usually the third one. Three judgements sit outside this table because they are not ours to make: we do not provide legal, tax or audit advice, we do not hold client money, and we are not an accredited service provider for e-invoicing or statutory filing.",
  rows: [
    {
      option: "General ledger and statutory accounts",
      best: "Buy",
      verdict:
        "Tax logic, filing formats and audit expectations are already inside these products and they track the changes for you. Building one is a compliance backlog you would maintain forever.",
    },
    {
      option: "Time and expense capture",
      best: "Buy the core, build the edge",
      verdict:
        "Buy the capture surface, because people will use whatever is fastest, then build the validation and the engagement rules behind it. The form is commodity; what a valid entry means on your engagements is not.",
    },
    {
      option: "The engagement and rate card model",
      best: "Build",
      verdict:
        "This is where your commercial difference lives and it is the piece every other system needs to read. Owning it is what lets a cap sit where it was negotiated rather than where a vendor's schema allows.",
    },
    {
      option: "Billing, work in progress and the invoice run",
      best: "Buy the core, build the edge",
      verdict:
        "Buy the invoice generation and the ledger posting, build the valuation and the write off policy. The document is commodity; how an hour becomes a defensible figure is the whole job.",
    },
    {
      option: "Revenue recognition schedule",
      best: "Build",
      verdict:
        "Almost no practice management product produces a revenue schedule independent of billing, and that independence is exactly what the standard requires. This is the gap that most often needs building.",
    },
    {
      option: "Resourcing and capacity planning",
      best: "Buy",
      verdict:
        "Scheduling people against demand is a solved problem with good products behind it. Integrate one and feed it your engagement data rather than rebuilding a calendar.",
    },
    {
      option: "Conflicts, independence and information barriers",
      best: "Build",
      verdict:
        "The rules are yours, the party graph is yours, and enforcement has to sit inside assignment and take on. No product knows which clients you may not serve, and neither should it be guessing.",
    },
    {
      option: "Client money ledger where you hold it",
      best: "Buy",
      verdict:
        "A regulated ledger with audit expectations attached. Use an established one and integrate to it, because the failure mode here is not a bug, it is a finding.",
    },
    {
      option: "E-invoicing and statutory transmission",
      best: "Buy",
      verdict:
        "Only an accredited service provider may transmit, so this is not a build decision at all. Establish who yours is before the plan depends on the date.",
    },
    {
      option: "Document assembly and e-signature",
      best: "Buy the core, build the edge",
      verdict:
        "Buy the signature and storage layer, then generate from the engagement record so an engagement letter and the system cannot drift apart.",
    },
    {
      option: "Client portal and delivery reporting",
      best: "Build",
      verdict:
        "This is the surface your client judges the relationship through, and a bundled portal shows them the vendor's data model rather than your service. Building it is bounded work with a visible return.",
    },
  ],
};

export const cost = {
  title: "What professional services software development costs, with the arithmetic shown",
  description:
    "Every competitor publishes a total with no hours behind it. Here is the rate, the hours and the multiplication, so you can argue with any line. The scope priced here is a firm keeping its accounting ledger and taking engagement, time, billing and revenue recognition in house.",
  drivers: [
    {
      driver: "How many commercial levels you need",
      hours: "High impact",
      note: "A single project with a rate is a different model from contracts carrying several engagements with caps at more than one level, and the difference is structural rather than cosmetic.",
    },
    {
      driver: "Whether rate cards are already dated",
      hours: "The largest swing",
      note: "If rates are held as dated reference data this is integration work. If they are copied onto timesheet rows, retroactive re-rating has to be introduced underneath a live billing history.",
    },
    {
      driver: "Whether revenue recognition is in scope",
      hours: "Adds real scope",
      note: "A revenue schedule independent of billing is a second model rather than a report on the first, and it is the module most often discovered late.",
    },
    {
      driver: "Which ledger you keep, and what it exposes",
      hours: "80 to 200 each",
      note: "Vendor API surface at your specific version, not at the version in the current documentation. This is the most common source of a mid-build surprise.",
    },
    {
      driver: "Whether client money is held",
      hours: "150 to 260",
      note: "A per matter position that can be produced for a past date is bounded work. Reconstructing one from a pooled history is not bounded, and is sometimes not possible at all.",
    },
    {
      driver: "How many entities, currencies and tax regimes",
      hours: "Medium",
      note: "One is a section of work. Three is a programme with its own consolidation model, and it stays affordable only if the tax logic was kept out of the transaction path.",
    },
    {
      driver: "How much history migrates",
      hours: "Rarely small",
      note: "Replay testing scales with the variety of your engagement and rate structures rather than with headcount, so a small firm with unusual terms can cost more than a large uniform one.",
    },
  ],
  modules: [
    { module: "Engagement, contract and rate card model", hours: "160 to 280" },
    { module: "Time and expense capture with validation", hours: "120 to 220" },
    { module: "Billing, work in progress and the invoice run", hours: "180 to 320" },
    { module: "Revenue recognition and the schedule", hours: "160 to 280" },
    { module: "Resourcing, capacity and forecasting", hours: "140 to 260" },
    { module: "Integrations: ledger, payments, identity, e-invoicing", hours: "160 to 280" },
    { module: "Client portal, reporting and audit trail", hours: "120 to 220" },
  ],
  math: {
    title: "Phase one, added up",
    points: [
      "Engagement and rate card 180 plus time and expense 150 plus billing and work in progress 210 plus revenue recognition 180 plus resourcing 160 plus integrations 180 plus portal and reporting 120 equals 1,180 hours. Every one of the seven sits inside its own published range above, so you can move any line and see what it does to the total.",
      "At $40 per hour that is $47,200. At $100 per hour it is $118,000. At a $65 blended rate, about $76,700. The full span across the seven modules is 1,040 hours at every minimum to 1,860 at every maximum.",
      "Outside that number, with their ranges intact: quality assurance at 20 to 25 percent of build, environments and deployment at 80 to 160, security review and penetration testing at 60 to 120, conflicts and information barrier controls at 100 to 200, multi entity and multi currency consolidation at 120 to 240, and document assembly and e-signature at 80 to 160. The last three are usually phase two, and they are listed rather than dropped because this page argues for all of them.",
    ],
  },
};

export const costHighlights = [
  {
    label: "Phase one range",
    value: "$47,200 to $118,000",
    note: "The 1,180 hour worked example at the ends of the rate band, about $76,700 at a $65 blend.",
  },
  {
    label: "Typical timeline",
    value: "14 to 22 weeks",
    note: "As a squad. A year end inside the window compresses scope rather than the calendar.",
  },
  {
    label: "Useful hours",
    value: "1,040 to 1,860",
    note: "Every module at its minimum, through to every module at its maximum.",
  },
];

export const engagement = {
  title: "Engagement models",
  description:
    "Four models for professional services software development, each with the downside stated in the same breath. The models are: Fixed scope phase one, Dedicated squad, monthly, Practice migration and cutover and Year end readiness window. Pick by how settled the scope actually is, not by preference.",
  items: [
    {
      title: "Fixed scope phase one",
      good: "A defined scope, a fixed number and a date. It works best after discovery has produced the integration inventory and the engagement model decision, because that is the point at which scope is genuinely knowable.",
      bad: "Change costs more than it would hourly, and an accounting policy decision taken mid build can move scope without either of us choosing it.",
    },
    {
      title: "Dedicated squad, monthly",
      good: "A standing team that keeps the domain knowledge in the room, billed on time and materials so you pay for work actually done. Long integration and migration work suits this shape.",
      bad: "You carry the utilisation risk, and a quiet month still costs a month. We will tell you when there is not enough work to justify it.",
    },
    {
      title: "Practice migration and cutover",
      good: "Scoped to moving between practice platforms, priced on the variety of your engagement and rate structures rather than on headcount, with time and billing replay built into the plan rather than bolted on at the end.",
      bad: "Discovery is unusually long here, and it can conclude that some of your historic rates cannot be reconstructed at all.",
    },
    {
      title: "Year end readiness window",
      good: "Capacity held around your reporting calendar, so revenue recognition and consolidation work lands before close rather than during it.",
      bad: "You are paying for availability against a date that only matters once a year, and outside that window the arrangement is poor value.",
    },
  ],
  recommendation:
    "What we usually suggest: a fixed scope phase one covering the engagement model and the rate card, moving to a dedicated squad once revenue recognition or a second entity has proved the model holds.",
};

export const delivery = {
  title: "How we deliver professional services software development",
  description:
    "Five phases, each named by the artifact it produces rather than by a stage in a generic waterfall. The phases are: Engagement decision record, Rate card and billing rules, Revenue schedule design, Time replay test pack and Adoption and control pack.",
  items: [
    {
      phase: "Engagement decision record",
      line: "How contract, engagement and project relate, where commercial terms may sit, and what a cap applies to. Written down before anything is built on top of it, because every later argument resolves against this document.",
    },
    {
      phase: "Rate card and billing rules",
      line: "Every rate dimension, every write off reason, and exactly what a retroactive change does to time already recorded and already billed. This is the document a disputed invoice is defended from.",
    },
    {
      phase: "Revenue schedule design",
      line: "How progress is measured per contract type, how the billing schedule and the revenue schedule differ, and what happens at period close. Agreed with whoever signs your accounts rather than shown to them afterwards.",
    },
    {
      phase: "Time replay test pack",
      line: "A full past year of time and billing replayed per engagement against the new model and compared entry by entry, with the differences explained rather than netted off. The work in progress total is not the test.",
    },
    {
      phase: "Adoption and control pack",
      line: "The runbooks, the write off policy as implemented, and the control documentation your finance team and your auditor will ask for, produced as part of the build rather than assembled afterwards under time pressure.",
    },
  ],
};

export const nonFunctional = {
  title: "The technical buyer's checklist",
  description:
    "Copy this and run it against us, or against anyone else quoting for professional services software development. The groups are: Time, rates and replay, Billing, revenue and proof and Restrictions, change and scope. Copy any line straight into your own requirements document.",
  groups: [
    {
      group: "Time, rates and replay",
      body: "Can the system value a past week of recorded time using the rate card that applied then, as a query rather than a reconstruction? Is every state change on a time entry retained with its reason and its author, so a write off can be attributed? Can a retroactive rate change be applied as a re-rate with a record of what moved, rather than as a bulk update?",
    },
    {
      group: "Billing, revenue and proof",
      body: "Is the revenue schedule a separate object from the billing schedule on the same contract, and can both be produced for a closed period? Can work in progress be computed from the engagement, the rate card and a written policy without anyone assembling it? Where client money is held, can a per matter position be produced for any past date without netting against office balances?",
    },
    {
      group: "Restrictions, change and scope",
      body: "Are conflicts and independence restrictions held as data and enforced at assignment and at take on, rather than checked by a person? Are tax thresholds, deduction rates and reporting windows held as dated configuration so a rule change is a data change rather than a release? And confirm the boundary: we do not provide legal, tax or audit advice, we do not hold client money, and we do not transmit statutory filings or e-invoices for you.",
    },
  ],
};

export const faqs = [
  {
    question: "What does a phase one cost, how many hours, and how long does it take?",
    answer:
      "The worked example is 1,180 hours, which is $47,200 to $118,000 across our $40 to $100 rate band and about $76,700 at a $65 blend, landing in 14 to 22 weeks with a squad. The module ranges sum to 1,040 to 1,860 hours, so a smaller or larger phase one is a question of which modules are in it. We do not quote a fixed number before a discovery that produces the integration inventory.",
  },
  {
    question: "Who owns the code, the data and the accounts?",
    answer:
      "You do, all three, from the first commit. Repositories, cloud accounts, domains and third party service accounts are in your name or transferred to it at handover. What transfers alongside them is the engagement decision record and the rate card and billing rules, which is the part that makes the code readable by whoever comes after us.",
  },
  {
    question: "Why is the revenue schedule separate from billing?",
    answer:
      "Because under IFRS 15 and ASC 606 a services contract satisfied over time is recognised as progress is made, and progress is measured by an input method such as costs incurred or labour hours, or an output method such as milestones. A retainer billed evenly against work delivered unevenly recognises unevenly, and the difference is work in progress or deferred income. If your system treats the invoice as the revenue event, finance rebuilds that difference by hand every month, which is usually the real reason a close takes two weeks.",
  },
  {
    question: "Can you make our work in progress figure defensible?",
    answer:
      "That is usually the actual brief, whatever the request says on the first call. It means computing the valuation from the engagement, the rate card as it stood at the date, and a write off policy that is written down and applied consistently, rather than assembling it in a spreadsheet. The test is whether last quarter's figure can be reproduced today without anyone remembering how it was prepared.",
  },
  {
    question: "You have no professional services clients on this page. Why should we take you seriously?",
    answer:
      "Because we would rather say that than describe a software client as a practice and hope nobody checks. What is on this page instead is the modelling, the standard and the arithmetic, all of which you can verify without trusting us. The code, decision records and specifications are yours from the first commit, which is the part that holds whether or not we turn out to be a fit.",
  },
  {
    question: "Can you work with our existing Kantata, Clio or Deltek installation?",
    answer:
      "Yes, and that is the more common shape of this work. The first question is how many commercial levels your specific product models, because a platform that only understands a project cannot hold a cap that was negotiated across several engagements, and everything built beside it becomes a workaround. We would much rather establish that in discovery than in build.",
  },
  {
    question: "How do you handle a rate change agreed with retroactive effect?",
    answer:
      "As a re-rate rather than an update. Because the timesheet holds the grade and the rate card is dated reference data, applying a new card from a past date regenerates the value of the affected entries and records what moved and why. Anything already billed becomes an adjustment with a traceable cause rather than a credit note nobody can explain, which is also the only version an auditor will accept.",
  },
  {
    question: "Do you cover client money for regulated practices?",
    answer:
      "We build to the requirement and we do not hold the money. The requirement in practice is a per matter position that can be produced for any past date and that cannot be netted against office balances, which is a modelling problem before it is a banking one. The specific accounts rules depend on whichever regulator licenses your practice, so confirm those with them before the ledger is designed rather than after.",
  },
  {
    question: "What does India e-invoicing mean for a firm that bills late?",
    answer:
      "It turns a cash flow habit into a tax problem. Electronic invoicing is mandatory for business to business supplies and exports above ₹5 crore of aggregate turnover, in force since 1 August 2023, and since 1 April 2025 taxpayers at ₹10 crore or above must upload an invoice to the Invoice Registration Portal within 30 days of issue. The practical build consequence is putting that clock inside the billing workflow, where the person holding the invoice can see it, rather than in a finance report they never open.",
  },
  {
    question: "How do you prove a migration worked?",
    answer:
      "By replaying it. A full past year of time and billing is regenerated per engagement under the new model and compared entry by entry against what the old system produced. Matching the work in progress total is not the test, because it says nothing about which entries or which rates produced it, and a compensating pair of errors always agrees at the total.",
  },
  {
    question: "Can you enforce conflicts and independence rules?",
    answer:
      "We build the enforcement; the rules are yours. In practice that means holding restrictions as data rather than as a policy document, checking them at take on against a party graph that includes parties who are not clients, enforcing them again at assignment, and re-checking when parties change on a live matter. What we will not do is decide which engagements you may accept, which is a professional judgement and not a software one.",
  },
];

export const nextSteps = {
  title: "What happens next",
  description:
    "Four steps with a shape attached to each, so booking a call is a known quantity.",
  items: [
    {
      step: "A 30 minute technical call",
      line: "Bring how your system decides what an hour is worth, and how last month's work in progress figure was produced. Those two answers size the project faster than an hour of description would.",
    },
    {
      step: "The valuation question",
      line: "We establish whether your rate cards are dated and whether work in progress is computed or assembled. The answer usually explains most of the symptoms you called about.",
    },
    {
      step: "A costed phase one",
      line: "Module by module against the ranges published on this page, with anything excluded named as excluded. If your platform already does most of it, the document says so.",
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
          note: "Engagement, rate card history and the ledger",
        },
        {
          label: "Web development",
          href: "/services/web-development",
          note: "Client portals and practice consoles",
        },
        {
          label: "Python development",
          href: "/services/python-development",
          note: "Valuation, recognition and reporting runs",
        },
      ],
    },
    {
      group: "Adjacent capabilities",
      links: [
        {
          label: "AI document management",
          href: "/services/ai-document-management-system",
          note: "Engagement letters and working papers",
        },
        {
          label: "AI workflow automation",
          href: "/services/ai-workflow-automation-services",
          note: "Billing review and approval routing",
        },
        {
          label: "Predictive analytics",
          href: "/services/predictive-analytics-development",
          note: "Pipeline, capacity and margin forecasting",
        },
      ],
    },
    {
      group: "Other sectors",
      links: [
        {
          label: "SaaS and productivity",
          href: "/industries/saas-platform-development",
          note: "Productising a practice into a platform",
        },
        {
          label: "Fintech and banking",
          href: "/industries/fintech-banking-software-development",
          note: "Trust accounts and reconciliation",
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
    title: "Bring the valuation question, not the feature list",
    description:
      "The most useful hour of a first call is usually spent on how your system decides what a recorded hour is worth. Almost everything else on this page follows from that one answer, including the cost.",
    ctaText: "Book a 30 minute technical call",
  },
  end: {
    title: "Start with what an hour is worth",
    description:
      "Bring one engagement and how last month's work in progress figure was produced. Thirty minutes on those two usually tells both of us whether this is a fit, and you leave with the hours either way.",
    ctaText: "Book a 30 minute technical call",
  },
};

export const relatedPosts = [
  "chat-with-your-documents",
  "ai-agents-for-business",
  "ai-copilots-for-business",
  "how-much-does-ai-development-cost",
  "ai-in-cybersecurity",
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
      "Document, automation and cost work that applies directly to time, billing and delivery systems.",
  },
};
