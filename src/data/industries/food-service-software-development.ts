import type { IndustryPageData } from "./types";

export const heroSection = {
  eyebrow: "Industries · Food service",
  title: "Food service software development for ",
  titleHighlight: "multi-location kitchens and franchises",
  description:
    "The back of house, not the customer app. One order moving through dine-in, takeaway, drive-through and three aggregators, and everything that has to stay true at every hop: menu and availability, kitchen routing, payment, and the franchise numbers that have to reconcile at the end of the week. If what you want is the consumer ordering app itself, the restaurant app page is the one you want.",
  features: [
    "POS and KDS integration",
    "Aggregator channels",
    "PCI DSS v4.0.1",
    "$40 to $100 per hour",
  ],
  scrollTarget: "#essence",
  ctaText: "Book a 30 minute technical call",
  bgImage: "/static/assets/industries/food-service-restaurants-industries.webp",
};

export const seo = {
  primaryKeyword: "food service software development",
  intent: "commercial",
  secondaryKeywords: [
    "kitchen display system development",
    "restaurant franchise software",
  ],
  competingUrl: "/solutions/restaurant-app-development-company",
} as const;

export const essence = {
  title: "The short version",
  description:
    "The commercial facts in one block, so you never have to hunt for them. Kitchen display system development and restaurant franchise software are the two we are asked for most, and they meet at the order model. The tiles cover: Typical integration set, Phase one timeline, Rate band, Phase one range, with the arithmetic and Stack we actually use.",
  tiles: [
    {
      label: "Typical integration set",
      value:
        "Your POS, a kitchen display system, two or three delivery aggregators, a payment provider, and whatever the finance team currently reconciles in. Plus a menu source of truth, which in most operations turns out not to exist yet.",
    },
    {
      label: "Phase one timeline",
      value:
        "10 to 16 weeks. The slow part is almost never the integration. It is agreeing what a menu item is across four channels that each model it differently, and getting one definition of availability that all of them respect.",
    },
    {
      label: "Rate band",
      value:
        "$40 to $100 per hour by role. Channel integration and reporting near the floor, order-state modelling and reconciliation near the ceiling. Mixed teams blend to around $65.",
    },
    {
      label: "Phase one range, with the arithmetic",
      value:
        "Menu 100 plus POS and payments 150 plus kitchen display 120 plus aggregators 140 plus franchise reporting 110 plus fiscal output 80 equals 700 hours. That runs $28,000 at $40 and $70,000 at $100, about $45,500 at a $65 blend. The full span across the six modules is 510 to 980 hours.",
    },
    {
      label: "Stack we actually use",
      value:
        "Whatever your POS vendor exposes, which is the real constraint. Python or Node for the integration layer, Postgres for order state because reconciliation is a relational problem, and a queue in front of every aggregator webhook because they will retry and they will duplicate.",
    },
    {
      label: "Our commitment",
      value:
        "No quote before discovery. We also will not tell you to replace a working POS: the integration is usually the cheaper answer and we will say so even when the rebuild is the larger project for us.",
    },
  ],
};

export const anchors = [
  { id: "who-this-is-for", label: "Is this us?" },
  { id: "sub-verticals", label: "What breaks in our operation?" },
  { id: "systems", label: "How does an order actually flow?" },
  { id: "compliance", label: "Which rules apply to us?" },
  { id: "what-goes-wrong", label: "What usually goes wrong?" },
  { id: "build-or-buy", label: "Build it or buy it?" },
  { id: "cost", label: "What does phase one cost?" },
];

export const operations = {
  title: "Where kitchen and POS systems earn their keep",
  description:
    "The stages an order moves through, and what we build at each one. The stages run: Menu and availability, Order capture, Kitchen routing, Fulfilment, Payment and fiscal and Franchise reporting. Each one is a place a system either holds the fact or loses it.",
  stages: [
    "Menu and availability",
    "Order capture",
    "Kitchen routing",
    "Fulfilment",
    "Payment and fiscal",
    "Franchise reporting",
  ],  image: {
    src: "/static/assets/industries/food-service-restaurants-operations-map.svg",
    alt: "Two band restaurant map covering menu, order capture and kitchen routing, then fulfilment, payment and reporting.",
  },
};

export const segments = {
  title: "Who this is for",
  description:
    "Six operator shapes and the number each one cannot currently produce. Not a fit: if you want the consumer ordering app built, that is the restaurant app page, linked at the foot of this one. This page is written for: Your third aggregator broke reporting, You are franchising and cannot see in and The kitchen is the bottleneck.",
  items: [
    {
      title: "Your third aggregator broke reporting",
      line: "Each channel reconciles on its own terms and none of them agree with the POS. Nobody can say what a single site actually sold last week without a spreadsheet and an argument. We start by making order state one machine instead of four.",
    },
    {
      title: "You are franchising and cannot see in",
      line: "Franchisees run their own tills and send numbers when they remember. Royalty calculation is retrospective and disputed. We start with the reporting contract: what every site must emit, in what shape, and by when.",
    },
    {
      title: "The kitchen is the bottleneck",
      line: "Tickets arrive from four channels in four formats and the pass has no single view of what is actually cooking. We start with routing and the display, because that is where minutes are lost and minutes are the product.",
    },
    {
      title: "Menu changes take a week",
      line: "A price change means editing it in the POS, three aggregator portals and a PDF. Someone always misses one. We start with a menu source of truth that publishes outward rather than being maintained in parallel.",
    },
    {
      title: "Card compliance came up in audit",
      line: "PCI DSS v4.0.1 turned 51 best practices into requirements in March 2025 and your last assessment predates that. We start by scoping the cardholder data environment, which is usually smaller than people fear once the POS is doing the tokenising.",
    },
    {
      title: "You are opening in a new country",
      line: "Different fiscal rules, different receipt requirements, different e-invoicing clock. We start by separating what is genuinely local from what your team assumes is local, which is usually most of it.",
    },
  ],
};

export const subVerticals = {
  title: "Find your operation",
  description:
    "Food service is one phrase for six operations. What breaks is different in each, so what we build is different. The operations covered here are: Quick service and drive-through, Casual dining with table service, Cloud kitchens and multi-brand, Franchise networks, Catering and contract food and Coffee and grab-and-go.",
  items: [
    {
      title: "Quick service and drive-through",
      breaks:
        "Throughput is the whole business and the drive-through timer is the metric nobody is allowed to miss. A slow channel integration does not just annoy, it backs up the lane and the loss is measurable in cars.",
      build:
        "Order capture that never blocks on a remote call, with aggregator traffic queued and reconciled asynchronously so the lane is never waiting on somebody else's API.",
    },
    {
      title: "Casual dining with table service",
      breaks:
        "Covers, courses and split bills do not fit an order model designed for takeaway. Fire timing between courses lives in a server's head, and the kitchen display shows a flat list.",
      build:
        "Order state that understands a cover and a course, with kitchen routing that holds and fires by seat rather than dumping the whole table at once.",
    },
    {
      title: "Cloud kitchens and multi-brand",
      breaks:
        "One kitchen, five brands, five aggregator storefronts, and a shared prep line. Stock depletes across brands that the systems treat as unrelated businesses.",
      build:
        "A shared inventory model beneath separate brand catalogues, so selling a burger under one brand depletes the bun count for all five.",
    },
    {
      title: "Franchise networks",
      breaks:
        "Head office cannot see a site's real numbers without asking. Royalty is calculated from a submitted figure rather than an observed one, which makes every dispute unresolvable.",
      build:
        "A reporting contract each site emits automatically, with the franchisor computing royalty from observed sales instead of reported ones.",
    },
    {
      title: "Catering and contract food",
      breaks:
        "The order is a schedule, not a transaction, and the customer is an account with terms. Nothing in a restaurant POS models a recurring delivery against a contract price.",
      build:
        "Standing orders against contracted rates, with the invoicing path separated from the till entirely because this side is genuinely B2B.",
    },
    {
      title: "Coffee and grab-and-go",
      breaks:
        "Volume is high, ticket value is low, and loyalty is the actual product. Every second at the till is a real cost and every loyalty edge case becomes a queue.",
      build:
        "Loyalty resolved locally with reconciliation afterwards, so a network problem slows nothing down at the counter.",
    },
  ],
};

export const systems = {
  title: "Systems we connect to, and how an order actually flows",
  description:
    "A food service build is an integration project with a state machine at the centre of it. Here is the estate we expect to meet, and the one modelling decision that determines whether any of it reconciles. The estates we expect to meet are: Point of sale, Kitchen display and production and Aggregator channels.",
  groups: [
    {
      group: "Point of sale",
      body: "The system of record for money. Its API surface is the real constraint on the project, and it varies from a documented REST interface to a nightly file drop. Establish what it can actually emit in week one, because every later estimate depends on the answer.",
    },
    {
      group: "Kitchen display and production",
      body: "The system of record for time. It knows when a ticket was fired, bumped and completed, which is the data the operations side actually manages against and which almost never reaches head office.",
    },
    {
      group: "Aggregator channels",
      body: "Each one has its own menu model, its own order shape and its own retry behaviour. They will send the same order twice and they will change a menu schema without telling you. Treat every one as untrusted input behind a queue.",
    },
  ],
  distinction: {
    title: "The distinction that saves projects",
    body: "The POS is the system of record for money and the kitchen display is the system of record for time, and neither can answer the other's question. Projects that pick one as the single source of truth end up either with financial figures that cannot explain a slow service, or operational figures that do not reconcile to a bank statement. The order is one object with two authorities over different fields, and deciding that explicitly in week one is what makes reporting possible in month six.",
  },
  pairs: [
    {
      pair: "Menu versus availability",
      body: "A menu is what you sell. Availability is what you can sell right now at this site. Systems that store them as one field force a price change and a sold-out toggle through the same publishing path, which is why the burger is still orderable an hour after the buns ran out.",
    },
    {
      pair: "Order state versus channel state",
      body: "An aggregator has its own idea of an order's lifecycle and it does not match yours. Map their states onto one internal machine rather than letting four external vocabularies leak into your database, or every report has to know four dialects.",
    },
    {
      pair: "Reported sales versus observed sales",
      body: "A franchisee submitting a weekly figure is reported. A till emitting every transaction is observed. Royalty computed from the first is permanently disputable and royalty computed from the second is not, and the difference is a reporting contract rather than a trust problem.",
    },
    {
      pair: "Integration versus replacement",
      body: "Most operators are told they need a new POS when what they need is the existing one to emit its data reliably. Replacement is a multi-site retraining project with a revenue risk attached. Integration is usually cheaper, faster and reversible, and we will say so even when it is the smaller job for us.",
    },
  ],
};

export const compliance = {
  title: "Which rules apply to you",
  description:
    "Card handling, fiscal reporting and food safety land on different teams and all three end up in the same system. This is the map with the dates that matter. We hold none of these certifications ourselves; we build the systems and the records that let you satisfy them.",
  rows: [
    {
      item: "PCI DSS v4.0.1",
      detail:
        "All 51 future-dated requirements became mandatory on 31 March 2025, having been published in March 2022 as best practices. Multi-factor authentication is now required for all access to the cardholder data environment rather than only administrative accounts. Requirement 6.4.3 covers payment-page script authorisation and integrity and 11.6.1 covers payment-page tamper detection, both aimed at e-skimming. The practical move for most operators is shrinking the environment rather than hardening it: if the POS tokenises and card data never reaches your systems, the scope of what has to comply shrinks dramatically.",
    },
    {
      item: "India, GST e-invoicing",
      detail:
        "Mandatory where aggregate annual turnover exceeds Rs 5 crore, effective 1 August 2023, and once the threshold has been crossed in any year since FY 2017-18 the obligation persists even if turnover later falls. At Rs 10 crore and above, an invoice must reach the Invoice Registration Portal within 30 days of issue. The scope is B2B and exports, so counter sales to consumers are out of it. For a franchise network that matters: the exposure is the franchisor-to-franchisee invoicing, not the till.",
    },
    {
      item: "Oman, VAT and Fawtara",
      detail:
        "VAT has applied at 5% since April 2021, and Fawtara e-invoicing phases in from August 2026. For a multi-country operator the useful discipline is separating the fiscal output layer from the order system entirely, so a new country is a new adapter rather than a change to how orders work.",
    },
    {
      item: "Food safety and traceability",
      detail:
        "Named deliberately as a category rather than with specifics. Licence tiers, certification schemes and allergen labelling rules differ by jurisdiction and change, and we will not print a threshold on a page that somebody might rely on. What the system side has to provide is consistent: batch and supplier traceability from goods-in through prep, temperature and time records that are captured rather than transcribed, and allergen data attached to the menu item rather than to a printed sheet.",
    },
    {
      item: "Payment data in the kitchen estate",
      detail:
        "Kitchen displays, tablets and aggregator terminals accumulate in the back of house and are frequently outside whatever the last audit looked at. Any device that can display a full order should be inside the access model, and none of them should ever hold card data. This is the most common gap we find and it is usually an inventory problem rather than a technical one.",
    },
    {
      item: "The architectural consequence",
      detail:
        "Card scope, fiscal output and food traceability pull in the same direction: keep the regulated concern in its own layer with its own adapter, rather than threading it through the order path. It costs more in week three and it is the reason a new country or a new card requirement is an adapter rather than a migration.",
    },
  ],
};

export const whatGoesWrong = {
  title: "What goes wrong",
  description:
    "Ten failure modes with the counter-practice attached. Naming them is more useful than a list of reasons to pick us. The first three below are: Four order models instead of one, Menu and availability are the same field and Aggregator webhooks trusted on arrival.",
  items: [
    {
      title: "Four order models instead of one",
      line: "Each channel gets its own path because each was added under time pressure, and nothing can be reported across them afterwards. Map every channel onto one internal state machine at the boundary, before the order reaches your database.",
    },
    {
      title: "Menu and availability are the same field",
      line: "A sold-out item needs a menu publish, so nobody does it during service and the kitchen absorbs the cancellations. Separate what you sell from what you can sell right now, with different publishing paths and different permissions.",
    },
    {
      title: "Aggregator webhooks trusted on arrival",
      line: "They retry, they duplicate and they arrive out of order, so the same order is cooked twice on a busy Friday. Queue everything, make the handler idempotent on their order id, and never let a channel call block the till.",
    },
    {
      title: "Royalty computed from reported figures",
      line: "The franchisee submits a number and head office has no way to check it, so every dispute is unwinnable. Compute from observed transactions emitted by each site, and make the reporting contract part of the franchise agreement rather than a request.",
    },
    {
      title: "The kitchen display is treated as a screen",
      line: "It shows tickets and stores nothing, so the only record of how long anything took disappears at the end of service. It is the system of record for time and its data belongs in reporting alongside the money.",
    },
    {
      title: "Cardholder scope is never shrunk",
      line: "The whole estate is treated as in scope because nobody has established where card data actually goes. Scope it properly, push tokenisation to the POS, and most of the estate falls out of the assessment.",
    },
    {
      title: "Fiscal rules threaded through the order path",
      line: "A new country means changing how orders work, which means retesting everything. Keep fiscal output in its own layer behind an adapter so a new jurisdiction is additive.",
    },
    {
      title: "Stock modelled per brand in a shared kitchen",
      line: "Five virtual brands deplete five separate inventories from one physical shelf, so the system reports stock that is not there. Model inventory against the kitchen, and brands as catalogues above it.",
    },
    {
      title: "Reporting built on the POS export alone",
      line: "It reconciles to the bank and cannot explain a bad service, so operations and finance argue from different numbers. Join money from the POS to time from the kitchen on the same order id and both questions become answerable.",
    },
    {
      title: "Integration deferred until after the rebuild",
      line: "The operator is sold a replacement POS and spends a year retraining sites while the reporting problem stays exactly where it was. Fix the data flow first; it is cheaper, reversible, and it frequently removes the reason for the rebuild.",
    },
  ],
};

export const buildOrBuy = {
  title: "Build, buy, or buy the core and build the edge",
  description:
    "The honest answer is usually the third one. Worth stating plainly: we are not a POS vendor and we are not accredited to certify anyone against PCI DSS, so the assessment and the card scope decision stay with your QSA in every row below.",
  rows: [
    {
      option: "Point of sale itself",
      best: "Buy",
      verdict:
        "Building a till is a solved problem with a long tail of payment certification, hardware support and staff training behind it. There is no version of this where writing your own is the cheaper answer for an operator.",
    },
    {
      option: "Order state and the reporting layer",
      best: "Build",
      verdict:
        "This is where your operation differs from everyone else's, and it is the part no packaged product models correctly once you have more than two channels. It is also the part that makes every other system's data usable.",
    },
    {
      option: "Aggregator and channel integration",
      best: "Buy the core, build the edge",
      verdict:
        "Middleware handles the common channels cheaply and will not handle your exceptions, your fifth channel or your reconciliation rules. Buy the connectors, own the mapping and the idempotency logic.",
    },
  ],
};

export const cost = {
  title: "What food service software development costs, with the arithmetic shown",
  description:
    "Every competitor publishes a total with no hours behind it. Here is the rate, the hours and the multiplication, so you can argue with any line of it. What moves the number: What your POS can actually emit, How many channels you run, Whether a menu source of truth exists, Single operator or franchise network and Number of fiscal jurisdictions.",
  drivers: [
    {
      driver: "What your POS can actually emit",
      hours: "Highest impact",
      note: "A documented API and a nightly CSV are the same requirement and a different project. Establish this in week one; every other estimate on this page depends on it.",
    },
    {
      driver: "How many channels you run",
      hours: "High",
      note: "The second aggregator is expensive because it forces the abstraction. The fourth is cheap because the abstraction already exists.",
    },
    {
      driver: "Whether a menu source of truth exists",
      hours: "High",
      note: "In most operations it does not, and building one means reconciling four channel catalogues that have quietly diverged for years.",
    },
    {
      driver: "Single operator or franchise network",
      hours: "Medium",
      note: "A franchise network adds the reporting contract, per-site permissions and royalty computation, none of which a single operator needs.",
    },
    {
      driver: "Number of fiscal jurisdictions",
      hours: "Medium",
      note: "The first is a build, each additional one is an adapter, provided the fiscal layer was kept separate from the order path.",
    },
    {
      driver: "Table service or counter only",
      hours: "Low to medium",
      note: "Covers, courses and fire timing add real modelling. Counter-only operations skip that entirely.",
    },
  ],
  modules: [
    { module: "Menu and availability model", hours: "70 to 140" },
    { module: "POS and payment integration", hours: "110 to 200" },
    { module: "Kitchen display and routing", hours: "90 to 170" },
    { module: "Aggregator channel integration", hours: "100 to 190" },
    { module: "Franchise reporting and reconciliation", hours: "80 to 160" },
    { module: "Fiscal and compliance output", hours: "60 to 120" },
  ],
  math: {
    title: "Phase one, added up",
    points: [
      "Menu and availability 100 plus POS and payments 150 plus kitchen display 120 plus aggregators 140 plus franchise reporting 110 plus fiscal output 80 equals 700 hours. Every one of the six sits inside its own published range above, so you can move any line and see what it does to the total.",
      "At $40 per hour that is $28,000. At $100 per hour it is $70,000. At a $65 blended rate, about $45,500. The full span across the six modules is 510 hours at every minimum to 980 at every maximum.",
      "Deliberately not in that number: a POS replacement, hardware, and any PCI DSS assessment fee. The first two are yours to buy and the third belongs to a qualified assessor, not to us.",
    ],
  },
};

export const costHighlights = [
  {
    label: "Phase one range",
    value: "$28,000 to $70,000",
    note: "The 700 hour worked example at the ends of the rate band, about $45,500 at a $65 blend.",
  },
  {
    label: "Typical timeline",
    value: "10 to 16 weeks",
    note: "The slow part is agreeing one menu definition across four channels, not the integration work.",
  },
  {
    label: "Useful hours",
    value: "510 to 980",
    note: "Every module at its minimum, through to every module at its maximum.",
  },
];

export const engagement = {
  title: "Engagement models",
  description:
    "Four models for food service software development, each with the downside stated in the same breath. The models are: POS capability read, Phase one build, Site rollout support and Ongoing engineering. Pick by how settled the scope actually is, not by preference.",
  items: [
    {
      title: "POS capability read",
      good: "Two weeks establishing exactly what your point of sale can emit and what it cannot, ending in a written integration plan. It is the cheapest way to de-risk everything downstream.",
      bad: "You pay for a document and the answer is sometimes that your POS cannot support what you want, which is worth knowing and is not what anybody hopes to hear.",
    },
    {
      title: "Phase one build",
      good: "The six modules above against a written scope, ending with one order model, reconciled reporting and a fiscal output layer.",
      bad: "It is a foundation rather than a finished platform. Loyalty, workforce and forecasting are all later phases and pretending otherwise would be a worse trade for you than saying so now.",
    },
    {
      title: "Site rollout support",
      good: "We stay through the first sites going live, which is when the exceptions nobody documented actually surface.",
      bad: "More expensive per hour of output than a clean handover, and it only pays if your operations team is in the room using the time.",
    },
    {
      title: "Ongoing engineering",
      good: "A standing allocation against a roadmap, which suits an operator adding channels and countries steadily.",
      bad: "It works when there is a genuine backlog and quietly wastes money when there is not. We will tell you when there is not.",
    },
  ],
  recommendation:
    "What we usually suggest: a POS capability read first, then a fixed scope phase one on the order model and reporting, with rollout support only for the first two or three sites.",
};

export const delivery = {
  title: "How we deliver food service software development",
  description:
    "Five phases, each named by the artifact it produces rather than by a stage in a generic waterfall. The phases are: Capability read, Order model, Menu spine, Kitchen and fulfilment and Reconciled reporting. Each is named by the artifact it hands you, so you can ask to see one.",
  items: [
    {
      phase: "Capability read",
      line: "A written statement of what every system in the estate can emit and accept, produced by calling the APIs rather than by reading the vendor's brochure. This artifact decides the shape of everything after it.",
    },
    {
      phase: "Order model",
      line: "One state machine that every channel maps onto, agreed on paper before anything is built against it. Channel vocabularies stop at the boundary and never reach the database.",
    },
    {
      phase: "Menu spine",
      line: "A single source of truth for what you sell, publishing outward to the POS and every channel, with availability as a separate and faster path.",
    },
    {
      phase: "Kitchen and fulfilment",
      line: "Routing, display and completion, with time data captured as a first-class record rather than discarded at the end of service.",
    },
    {
      phase: "Reconciled reporting",
      line: "Money from the POS joined to time from the kitchen on one order id, with the fiscal output layer behind its own adapter.",
    },
  ],
};

export const nonFunctional = {
  title: "The technical buyer's checklist",
  description:
    "Copy this and run it against us, or against anyone else quoting for food service software development. The groups are: Service must not stop, Idempotency and reconciliation and Card scope and device inventory. Copy any line straight into your own requirements document.",
  groups: [
    {
      group: "Service must not stop",
      body: "The till cannot block on a remote call, ever. Offline behaviour at the counter defined and tested rather than assumed. Aggregator traffic queued so a channel outage degrades reporting rather than stopping trade.",
    },
    {
      group: "Idempotency and reconciliation",
      body: "Every channel handler idempotent on the external order id, because duplicates are certain rather than possible. A daily reconciliation that names discrepancies instead of silently absorbing them, and an owner for the exception queue.",
    },
    {
      group: "Card scope and device inventory",
      body: "A written boundary for the cardholder data environment and evidence that card data never reaches your own systems. Every back-of-house device that can display a full order inside the access model, which is the gap we find most often.",
    },
  ],
};

export const faqs = [
  {
    question: "Do we need to replace our POS?",
    answer:
      "Usually not, and we will tell you when the honest answer is yes. Most operators are sold a replacement when what they actually need is the existing till to emit its data reliably. Replacement is a multi-site retraining project with revenue risk attached; integration is cheaper, faster and reversible. We establish what your POS can emit in the first two weeks and the answer decides the project.",
  },
  {
    question: "What does it cost, and how do you price it?",
    answer:
      "Hours times $40 to $100 per hour by role. The module table above gives the range for each of the six modules, and the worked example shows 700 hours coming to about $45,500 at a $65 blend. A POS replacement, hardware and any PCI assessment fee are excluded and named as excluded. We do not quote before discovery.",
  },
  {
    question: "Who owns the code, the data and the integrations?",
    answer:
      "You do. The code is yours on delivery, the order and sales data lives in your infrastructure rather than ours, and the channel integrations are yours to keep running or to hand to another supplier. We do not hold a copy of your transaction data and there is no arrangement under which it becomes anything else.",
  },
  {
    question: "How long does phase one take?",
    answer:
      "Usually 10 to 16 weeks. The slow part is almost never the integration work. It is getting agreement on what a menu item is across four channels that each model it differently, and on one definition of availability that all of them respect.",
  },
  {
    question: "Can you make us PCI compliant?",
    answer:
      "No, and nobody building software can. Compliance is assessed by a qualified assessor. What we do is shrink and document the cardholder data environment so that the assessment is smaller and cheaper, which in practice means making sure card data never reaches your own systems at all.",
  },
  {
    question: "We use three delivery aggregators. Is that the hard part?",
    answer:
      "The second one is the hard part, because it forces you to build the abstraction. The third and fourth are comparatively cheap once every channel maps onto one internal order model at the boundary. If you are on your first aggregator and planning a second, that is the right moment to call.",
  },
  {
    question: "Can head office see franchisee numbers without them submitting?",
    answer:
      "Yes, and that is the difference between reported and observed sales. Each site emits transactions automatically under a reporting contract, and the franchisor computes royalty from what happened rather than from what was submitted. It removes the category of dispute rather than adjudicating it.",
  },
  {
    question: "Do you handle food safety certification?",
    answer:
      "No. Licence tiers, certification schemes and allergen rules differ by jurisdiction and we will not print thresholds somebody might rely on. What we build is the system side: batch and supplier traceability, temperature and time records captured rather than transcribed, and allergen data attached to the menu item.",
  },
  {
    question: "What happens when an aggregator changes their API?",
    answer:
      "They will, usually without much notice. That is why channel mapping lives at the boundary in its own adapter rather than spread through the order path. A schema change becomes one adapter to update instead of a regression across reporting.",
  },
  {
    question: "Can you work with our existing kitchen display system?",
    answer:
      "Generally yes. The question is whether it can emit fired, bumped and completed events with timestamps, because that data is the reason the KDS matters to reporting. If it only draws tickets on a screen, we will tell you what you are giving up by keeping it.",
  },
];

export const nextSteps = {
  title: "What happens next",
  description:
    "Four steps with a shape attached to each, so booking a call is a known quantity.",
  items: [
    {
      step: "A 30 minute technical call",
      line: "Bring the name of your POS, your channel list, and one week of numbers that did not reconcile. Those three things tell us more than an hour of description does.",
    },
    {
      step: "The capability question",
      line: "We find out what your POS can actually emit, by reading its API documentation and where possible by calling it. This is the fastest way to know whether the project is small or large.",
    },
    {
      step: "A written scope within a week",
      line: "The modules, the hour ranges and the arithmetic, not a headline price. If the honest answer is that middleware covers you, the document will say that instead.",
    },
    {
      step: "You decide",
      line: "With the scope in hand you choose whether we build it, your team does, or you buy a product. The document is useful in all three cases and it is yours either way.",
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
          note: "Order state and reconciliation live here",
        },
        {
          label: "Web development",
          href: "/services/web-development",
          note: "Head office reporting and site dashboards",
        },
        {
          label: "AI workflow automation",
          href: "/services/ai-workflow-automation-services",
          note: "Exception queues and reconciliation chores",
        },
      ],
    },
    {
      group: "Adjacent capabilities",
      links: [
        {
          label: "AI agent development",
          href: "/services/ai-agent-development",
          note: "Demand and prep forecasting on your own data",
        },
        {
          label: "AI document management",
          href: "/services/ai-document-management-system",
          note: "Supplier invoices and traceability records",
        },
        {
          label: "Restaurant app development",
          href: "/solutions/restaurant-app-development-company",
          note: "The consumer ordering app itself",
        },
      ],
    },
    {
      group: "Other sectors",
      links: [
        {
          label: "Retail and commerce",
          href: "/industries/retail-software-development",
          note: "The same point of sale estate, a different basket",
        },
        {
          label: "Travel and hospitality",
          href: "/industries/travel-software-development",
          note: "Hospitality, where the kitchen sits inside a hotel",
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
    title: "Send us one week that did not reconcile",
    description:
      "Pick a week where the POS total, the aggregator statements and the bank did not agree, and send us the three numbers. Where they diverge tells us which part of your order model is missing, usually within an afternoon and always faster than a discovery call does.",
    ctaText: "Book a 30 minute technical call",
  },
  end: {
    title: "Start with what your till can emit",
    description:
      "Almost every question on this page resolves to that one. We will read your POS capability, tell you whether the project is an integration or a rebuild, and give you the hours either way.",
    ctaText: "Book a 30 minute technical call",
  },
};

export const relatedPosts = [
  "ai-for-fraud-detection-a-quick-guide",
  "ai-agents-for-business",
  "how-much-does-ai-development-cost",
  "ai-copilots-for-business",
  "top-ai-use-cases-you-cant-ignore",
  "chat-with-your-documents",
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
      "Automation, forecasting and reconciliation work that applies directly to multi-site food service.",
  },
};
