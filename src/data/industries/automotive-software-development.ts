import type { IndustryPageData } from "./types";

export const heroSection = {
  eyebrow: "Industries · Automotive & mobility",
  title: "Automotive software development for ",
  titleHighlight: "dealers, fleets and aftersales",
  description:
    "The systems behind the vehicle rather than the listing: dealer and inventory management, workshop scheduling, parts catalogues that survive supersession, telematics ingest, and warranty claims that reconcile. If what you want is a marketplace or listings product, the classified app page is the one you want.",
  features: [
    "UNECE R155 and R156 aware",
    "EU Data Act, Sept 2025",
    "VIN as the spine",
    "$40 to $100 per hour",
  ],
  scrollTarget: "#essence",
  ctaText: "Book a 30 minute technical call",
  bgImage: "/static/assets/industries/automotive-mobility-industries.webp",
};

export const seo = {
  primaryKeyword: "automotive software development",
  intent: "commercial",
  secondaryKeywords: [
    "dealer management system development",
    "fleet management software development",
  ],
  competingUrl: "/solutions/classified-app-development",
} as const;

export const essence = {
  title: "The short version",
  description:
    "The commercial facts in one block, so you never have to hunt for them. Most of it arrives as dealer management system development or fleet management software development, and the two rarely stay separate for long. The tiles cover: Typical integration set, Phase one timeline, Rate band, Phase one range, with the arithmetic, Stack we actually use and Our commitment.",
  tiles: [
    {
      label: "Typical integration set",
      value:
        "A dealer management system, an OEM parts feed, a telematics provider, a payment provider, and whatever the workshop currently books appointments in. Plus the warranty portal, which is almost always a separate login nobody has automated.",
    },
    {
      label: "Phase one timeline",
      value:
        "12 to 18 weeks. The long pole is rarely the integration. It is agreeing that the vehicle, the asset and the customer are three different objects, and unpicking the systems that currently treat them as one.",
    },
    {
      label: "Rate band",
      value:
        "$40 to $100 per hour by role. Catalogue and reporting work near the floor, telematics ingest and warranty reconciliation near the ceiling. Mixed teams blend to around $65.",
    },
    {
      label: "Phase one range, with the arithmetic",
      value:
        "Dealer 100 plus workshop 160 plus parts 130 plus telematics 170 plus warranty 100 plus fiscal 90 equals 750 hours. That runs $30,000 at $40 and $75,000 at $100, about $48,750 at a $65 blend. The full span across the six modules is 510 to 980 hours.",
    },
    {
      label: "Stack we actually use",
      value:
        "Whatever your DMS exposes, which is the binding constraint. Python or Node for ingest, Postgres for the vehicle and service history because the queries are relational and long-lived, and a queue in front of telematics because the feed does not stop when your database does.",
    },
    {
      label: "Our commitment",
      value:
        "No quote before discovery. We will also tell you when the answer is a DMS module you already pay for rather than a build, which happens more often on this vertical than on any other we work in.",
    },
  ],
};

export const anchors = [
  { id: "who-this-is-for", label: "Is this us?" },
  { id: "sub-verticals", label: "What breaks in our operation?" },
  { id: "systems", label: "How does vehicle identity work?" },
  { id: "compliance", label: "Which rules apply to us?" },
  { id: "what-goes-wrong", label: "What usually goes wrong?" },
  { id: "build-or-buy", label: "Build it or buy it?" },
  { id: "cost", label: "What does phase one cost?" },
];

export const operations = {
  title: "Where dealer and fleet systems earn their keep",
  description:
    "The stages a vehicle moves through, and what we build at each one. The stages run: Vehicle and stock, Sale and finance, Service booking, Workshop and parts, Warranty and claims and Fleet and telematics. Each one is a place a system either holds the fact or loses it.",
  stages: [
    "Vehicle and stock",
    "Sale and finance",
    "Service booking",
    "Workshop and parts",
    "Warranty and claims",
    "Fleet and telematics",
  ],  image: {
    src: "/static/assets/industries/automotive-mobility-operations-map.svg",
    alt: "Two band automotive map covering stock, sale and service booking, then workshop, warranty and fleet telematics.",
  },
};

export const segments = {
  title: "Who this is for",
  description:
    "Six operator shapes and the question each one currently cannot answer. Not a fit: if you want a vehicle marketplace or listings product built, that is the classified app page, linked at the foot of this one. This page is written for: Your DMS cannot see the workshop, Parts supersession broke the catalogue and Telematics data goes nowhere useful.",
  items: [
    {
      title: "Your DMS cannot see the workshop",
      line: "Sales and service run on systems that share a customer record and nothing else, so nobody can tell you what a vehicle has actually cost across its life. We start by making the VIN the spine rather than the customer account.",
    },
    {
      title: "Parts supersession broke the catalogue",
      line: "An OEM replaced a part number and your catalogue now has orphaned stock, failed lookups and quotes that cannot be fulfilled. We start with a supersession chain that keeps history rather than overwriting it.",
    },
    {
      title: "Telematics data goes nowhere useful",
      line: "The fleet feed arrives and lands in a dashboard nobody opens, unjoined to service records. We start by joining telemetry to the service history on the VIN, which is where predictive maintenance actually becomes possible.",
    },
    {
      title: "Warranty claims are a manual month",
      line: "Someone re-keys claims into an OEM portal and rejections come back weeks later with no pattern anybody tracks. We start by capturing claim-grade data at the point of repair instead of reconstructing it afterwards.",
    },
    {
      title: "You are opening connected services",
      line: "The moment a service reads or writes vehicle data two-way, the EU Data Act is in scope and so is R155. We start by mapping which of your planned features actually cross that line, which is usually fewer than feared.",
    },
    {
      title: "Multi-site and nobody agrees on stock",
      line: "Each branch runs its own view of vehicles and parts, and transfers are phone calls. We start with one stock model across sites, because every reporting question downstream depends on it.",
    },
  ],
};

export const subVerticals = {
  title: "Find your operation",
  description:
    "Automotive is one word for six businesses. What breaks is different in each, so what we build is different. The operations covered here are: Franchised dealer group, Independent workshop network, Fleet and leasing operators, Parts distribution, Mobility and rental and EV charging and energy.",
  items: [
    {
      title: "Franchised dealer group",
      breaks:
        "OEM systems, your DMS and your own reporting disagree, and the OEM's numbers are the ones that decide your margin. Sales and aftersales are effectively separate companies sharing a car park.",
      build:
        "One vehicle record spanning sale, finance, service and parts, reconciled against the OEM feed rather than maintained alongside it.",
    },
    {
      title: "Independent workshop network",
      breaks:
        "No OEM feed, so parts identification depends on the person at the counter and the catalogue is whatever the supplier last emailed. Job history is per site, not per vehicle.",
      build:
        "A parts catalogue with supersession and cross-reference at its centre, and service history keyed to the VIN so it survives a customer moving branch.",
    },
    {
      title: "Fleet and leasing operators",
      breaks:
        "The asset, the contract and the vehicle are three different things and most systems model one. Utilisation, maintenance cost and residual value each live somewhere else.",
      build:
        "Asset and contract modelled separately from the vehicle, with telematics and workshop cost joined on the VIN so whole-life cost is a query rather than a project.",
    },
    {
      title: "Parts distribution",
      breaks:
        "Supersession, supersession chains and superseded-by-superseded make catalogue integrity the whole job, and a wrong cross-reference is a returned part and a lost customer.",
      build:
        "A catalogue that stores the chain rather than the endpoint, so a lookup on an obsolete number still resolves and still explains itself.",
    },
    {
      title: "Mobility and rental",
      breaks:
        "Vehicles move between locations and states faster than any nightly batch, and availability is the product. Damage and cleaning states are as important as mechanical ones.",
      build:
        "Real-time vehicle state with location and condition as first-class fields, and availability computed rather than maintained.",
    },
    {
      title: "EV charging and energy",
      breaks:
        "Sessions, tariffs and roaming agreements make billing the hard part, not the hardware. Reconciling a session across networks is where the money quietly leaks.",
      build:
        "Session records with tariff and roaming context attached at capture, so reconciliation is possible without reconstructing intent months later.",
    },
  ],
};

export const systems = {
  title: "Systems we connect to, and how vehicle identity actually works",
  description:
    "An automotive build is an identity problem before it is an integration problem. Here is the estate we expect to meet, and the modelling decision that determines whether any of it joins up. The estates we expect to meet are: Dealer management systems, OEM feeds and portals and Telematics and connected services.",
  groups: [
    {
      group: "Dealer management systems",
      body: "The system of record for the transaction, and the constraint on the whole project. Its API surface ranges from a documented interface to a nightly export, and the answer decides the shape of everything after it. Establish it in week one.",
    },
    {
      group: "OEM feeds and portals",
      body: "Parts catalogues, warranty submission, technical data and recall notices, usually delivered through separate portals with separate credentials. Rarely designed for machine access, frequently the source of the numbers that decide your margin.",
    },
    {
      group: "Telematics and connected services",
      body: "A continuous feed keyed to the vehicle rather than to the customer. Volume is high and value is low per message, so the design question is what you keep, at what resolution, and for how long.",
    },
  ],
  distinction: {
    title: "The distinction that saves projects",
    body: "The vehicle, the asset and the customer are three different objects, and most systems collapse them into one. A vehicle is a VIN and it outlives every relationship attached to it. An asset is a financial position with a contract, a depreciation schedule and an owner who may not be the driver. A customer is a person or company whose connection to that vehicle starts and ends. Model them as one and you cannot answer what a vehicle cost across two owners, cannot separate a lease from the car it names, and cannot keep a service history when the customer changes. Separating them in week one is unglamorous and it is the decision that makes every later report possible.",
  },
  pairs: [
    {
      pair: "VIN versus registration",
      body: "A registration is a label a jurisdiction attaches to a vehicle and it changes with a plate transfer, an export or a re-registration. The VIN does not. Keying anything durable to the registration is how service history detaches from the car it belongs to.",
    },
    {
      pair: "Part number versus supersession chain",
      body: "A part number is a point in time, not an identity. Storing only the current number means yesterday's quote no longer resolves and superseded stock becomes invisible. Store the chain and every historical lookup keeps working.",
    },
    {
      pair: "Telemetry versus service history",
      body: "Telematics knows how the vehicle is used. The workshop knows what was done to it. Predictive maintenance is the join between them, and in most estates that join has never been made because the two live under different keys.",
    },
    {
      pair: "Reading data versus two-way services",
      body: "Reading data off a vehicle and operating a service that writes back are different regulatory positions. The second brings the EU Data Act's related-services scope and the R155 management system into play, and it is worth knowing which side of that line a feature sits on before it is built.",
    },
  ],
};

export const compliance = {
  title: "Which rules apply to you",
  description:
    "Type approval, data access, card handling and fiscal reporting land on four different teams and end up in the same system. This is the map with the dates that matter. We hold none of these approvals; we build the systems and the records that let you satisfy them.",
  rows: [
    {
      item: "UNECE R155 and R156",
      detail:
        "R155 governs the Cyber Security Management System and R156 the Software Update Management System. Since July 2024 both apply to all new vehicles regardless of when the type approval was obtained, across the 64 UNECE contracting parties including the whole EU, Japan, South Korea and Australia, as a precondition of type approval. For a dealer or fleet operator these bind the manufacturer rather than you directly, but they determine what an OEM will let your systems touch and how software updates reach vehicles you service.",
    },
    {
      item: "EU Data Act",
      detail:
        "In effect since 12 September 2025, with Commission guidance on vehicle data adopted the same day. It covers connected products including vehicles, and related services involving bidirectional data exchange such as predictive maintenance, remote control and dynamic route optimisation. Traditional aftermarket services stay out of scope unless they involve digital two-way data use. Manufacturers must be transparent about what data exists, provide raw and pre-processed data, give it free to the vehicle user, and charge data recipients such as workshops and parts distributors only fair, reasonable and non-discriminatory fees.",
    },
    {
      item: "Owner permission is the gate",
      detail:
        "The Data Act is user-mediated rather than automatic. A workshop or distributor gets access because the vehicle owner granted it, which makes consent capture and revocation a product surface rather than a contract clause. Systems that assume access is a commercial arrangement between businesses will find the permission is missing at the point it matters.",
    },
    {
      item: "PCI DSS v4.0.1",
      detail:
        "All 51 future-dated requirements became mandatory on 31 March 2025, and multi-factor authentication is now required for all access to the cardholder data environment rather than only administrative accounts. Deposits, service payments and parts counter sales all touch this. The practical move is shrinking the environment so card data never reaches your own systems.",
    },
    {
      item: "India, GST e-invoicing",
      detail:
        "Mandatory where aggregate annual turnover exceeds Rs 5 crore, effective 1 August 2023, with a 30 day Invoice Registration Portal window above Rs 10 crore. The scope is B2B, which for this sector means fleet contracts, trade parts sales and inter-branch transfers rather than the retail service invoice.",
    },
    {
      item: "The architectural consequence",
      detail:
        "Type approval, data access and fiscal output all change on their own timetable and none of them should be threaded through the vehicle record. Keep each behind its own adapter. It costs more in week three and it is why a new market or a new OEM requirement becomes an adapter rather than a migration.",
    },
  ],
};

export const whatGoesWrong = {
  title: "What goes wrong",
  description:
    "Ten failure modes with the counter-practice attached. Naming them is more useful than a list of reasons to pick us. The first three below are: The customer is the primary key, Registration used as the durable identifier and Parts catalogue stores only the current number.",
  items: [
    {
      title: "The customer is the primary key",
      line: "Service history hangs off the account, so it vanishes when the car is sold and cannot answer anything about the vehicle itself. Make the VIN the spine and attach relationships to it, not the reverse.",
    },
    {
      title: "Registration used as the durable identifier",
      line: "A plate transfer or a re-registration silently splits one vehicle into two records. Key on the VIN and treat the registration as an attribute with a history.",
    },
    {
      title: "Parts catalogue stores only the current number",
      line: "Supersession overwrites the old number and every historical quote, job and stock line stops resolving. Store the chain, not the endpoint.",
    },
    {
      title: "Telematics kept at full resolution forever",
      line: "Storage grows without bound and nobody deletes anything because nobody agreed what it was for. Decide the retention and the resolution per signal before the first feed is connected.",
    },
    {
      title: "Warranty data reconstructed after the fact",
      line: "Claims are assembled from a job card written for a technician, not for an OEM assessor, and rejections arrive weeks later. Capture claim-grade fields at the point of repair.",
    },
    {
      title: "Asset and vehicle modelled as one object",
      line: "A lease cannot be transferred, a vehicle cannot change contract, and whole-life cost cannot be computed across either. Separate the financial position from the physical car.",
    },
    {
      title: "Two-way services shipped without checking scope",
      line: "A remote feature is built and only then does anyone ask whether the Data Act's related-services definition applies. Establish which side of that line a feature sits on during design.",
    },
    {
      title: "Consent treated as a contract clause",
      line: "Third-party data access is arranged commercially and the owner permission the Data Act requires was never captured. Build consent capture and revocation as a product surface.",
    },
    {
      title: "Each branch keeps its own stock view",
      line: "Transfers happen by phone and group-level reporting is a reconciliation exercise every month. One stock model across sites, with location as an attribute.",
    },
    {
      title: "Buying a build that the DMS already ships",
      line: "A module you already pay for gets rebuilt because nobody read the licence. We check what your DMS already does before scoping anything, and we will tell you when the answer is a configuration change.",
    },
  ],
};

export const buildOrBuy = {
  title: "Build, buy, or buy the core and build the edge",
  description:
    "The honest answer is usually the third one. Worth stating plainly: we are not a DMS vendor and we are not accredited to certify anyone against R155 or PCI DSS, so type approval and card scope stay with your OEM and your assessor in every row below.",
  rows: [
    {
      option: "The dealer management system",
      best: "Buy",
      verdict:
        "Transaction processing, OEM integration and compliance reporting are a solved and heavily regulated problem. There is no version where writing your own is the cheaper answer for a dealer or a workshop group.",
    },
    {
      option: "The vehicle and service data model",
      best: "Build",
      verdict:
        "This is the part every packaged product models for its own convenience rather than yours, and it is the part that makes whole-life cost, predictive maintenance and group reporting answerable. It is also the cheapest thing to get right early and the most expensive to retrofit.",
    },
    {
      option: "Telematics ingest and analytics",
      best: "Buy the core, build the edge",
      verdict:
        "Buy the device estate and the raw feed, which are commodities. Build the join to your service history, because no telematics vendor knows what your workshop did and that join is where the value sits.",
    },
  ],
};

export const cost = {
  title: "What automotive software development costs, with the arithmetic shown",
  description:
    "Every competitor publishes a total with no hours behind it. Here is the rate, the hours and the multiplication, so you can argue with any line of it. What moves the number: What your DMS can actually expose, Whether the VIN is already the spine, OEM feeds in scope, Telematics volume and retention and Single site or group.",
  drivers: [
    {
      driver: "What your DMS can actually expose",
      hours: "Highest impact",
      note: "A documented API and a nightly export are the same requirement and a different project. Establish this first; every other number here depends on it.",
    },
    {
      driver: "Whether the VIN is already the spine",
      hours: "High",
      note: "If history hangs off the customer account, this is a data migration with a business-rules problem attached, not a schema change.",
    },
    {
      driver: "OEM feeds in scope",
      hours: "High",
      note: "Each OEM is a separate portal, format and credential. The first is a build, the third is cheaper, and none of them are self-service.",
    },
    {
      driver: "Telematics volume and retention",
      hours: "Medium",
      note: "Ingest is straightforward. Deciding resolution and retention per signal is the part that gets deferred and then costs storage forever.",
    },
    {
      driver: "Single site or group",
      hours: "Medium",
      note: "A group adds one stock model across locations, inter-branch transfers and consolidated reporting, none of which a single site needs.",
    },
    {
      driver: "Connected or two-way services",
      hours: "Low to medium",
      note: "Read-only telemetry is comparatively simple. Anything writing back to a vehicle brings consent capture and a regulatory scoping exercise with it.",
    },
  ],
  modules: [
    { module: "Dealer and inventory model", hours: "80 to 160" },
    { module: "Service scheduling and workshop", hours: "100 to 190" },
    { module: "Parts catalogue and supersession", hours: "90 to 170" },
    { module: "Telematics ingest and join", hours: "110 to 200" },
    { module: "Warranty and claims", hours: "70 to 140" },
    { module: "Fiscal and compliance output", hours: "60 to 120" },
  ],
  math: {
    title: "Phase one, added up",
    points: [
      "Dealer and inventory 100 plus service and workshop 160 plus parts catalogue 130 plus telematics 170 plus warranty 100 plus fiscal output 90 equals 750 hours. Every one of the six sits inside its own published range above, so you can move any line and see what it does to the total.",
      "At $40 per hour that is $30,000. At $100 per hour it is $75,000. At a $65 blended rate, about $48,750. The full span across the six modules is 510 hours at every minimum to 980 at every maximum.",
      "Deliberately not in that number: the DMS licence, telematics hardware, and any type approval or PCI assessment fee. The first two are yours to buy and the third belongs to an accredited body, not to us.",
    ],
  },
};

export const costHighlights = [
  {
    label: "Phase one range",
    value: "$30,000 to $75,000",
    note: "The 750 hour worked example at the ends of the rate band, about $48,750 at a $65 blend.",
  },
  {
    label: "Typical timeline",
    value: "12 to 18 weeks",
    note: "The long pole is separating the vehicle, the asset and the customer, not the integration work.",
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
    "Four models for automotive software development, each with the downside stated in the same breath. The models are: DMS capability read, Phase one build, Rollout across sites and Ongoing engineering. Pick by how settled the scope actually is, not by preference.",
  items: [
    {
      title: "DMS capability read",
      good: "Two weeks establishing exactly what your dealer management system can expose and what it already does, ending in a written plan. It regularly removes work from the scope rather than adding it.",
      bad: "You pay for a document, and the answer is sometimes that a module you already licence covers most of it. That is a good outcome and a small invoice for us.",
    },
    {
      title: "Phase one build",
      good: "The six modules above against a written scope, ending with the VIN as the spine and reporting that spans sales, service and parts.",
      bad: "It is a foundation, not a platform. Finance attach, CRM and marketing automation are later phases and saying otherwise would be a worse trade for you than saying so now.",
    },
    {
      title: "Rollout across sites",
      good: "We stay through the first branches going live, which is when per-site data divergence actually surfaces.",
      bad: "More expensive per hour of output than a clean handover, and it only pays if your operations people are in the room.",
    },
    {
      title: "Ongoing engineering",
      good: "A standing allocation against a roadmap, which suits a group adding OEM feeds and sites steadily.",
      bad: "It works when there is a genuine backlog and quietly wastes money when there is not. We will tell you when there is not.",
    },
  ],
  recommendation:
    "What we usually suggest: a DMS capability read first, then a fixed scope phase one on the vehicle model and reporting, with rollout support only for the first two or three sites.",
};

export const delivery = {
  title: "How we deliver automotive software development",
  description:
    "Five phases, each named by the artifact it produces rather than by a stage in a generic waterfall. The phases are: Capability read, Identity model, Catalogue and supersession, Workshop and warranty and Joined reporting. Each is named by the artifact it hands you, so you can ask to see one.",
  items: [
    {
      phase: "Capability read",
      line: "A written statement of what the DMS, the OEM feeds and the telematics provider can each expose and accept, produced by calling the interfaces rather than by reading a brochure. This artifact decides everything after it.",
    },
    {
      phase: "Identity model",
      line: "Vehicle, asset and customer separated on paper, with the VIN as the spine and registration demoted to an attribute with history. Agreed before anything is built against it.",
    },
    {
      phase: "Catalogue and supersession",
      line: "A parts catalogue that stores the chain rather than the endpoint, so obsolete numbers still resolve and still explain themselves.",
    },
    {
      phase: "Workshop and warranty",
      line: "Scheduling, job capture and claim-grade fields recorded at the point of repair instead of reconstructed for a portal weeks later.",
    },
    {
      phase: "Joined reporting",
      line: "Telemetry joined to service history on the VIN, with fiscal output behind its own adapter, so whole-life cost is a query.",
    },
  ],
};

export const nonFunctional = {
  title: "The technical buyer's checklist",
  description:
    "Copy this and run it against us, or against anyone else quoting for automotive software development. The groups are: Identity and history, Consent and data access and Feed resilience and retention. Copy any line straight into your own requirements document.",
  groups: [
    {
      group: "Identity and history",
      body: "VIN as the durable key, registration held as an attribute with history. Service history that survives an ownership change. A documented answer on what happens to a record when a vehicle is exported or written off.",
    },
    {
      group: "Consent and data access",
      body: "Owner permission captured and revocable as a product surface rather than a contract clause, because the EU Data Act makes third-party access user-mediated. An audit trail of who accessed which vehicle's data and under whose permission.",
    },
    {
      group: "Feed resilience and retention",
      body: "Telematics queued so the feed does not stop when your database does, and idempotent on the provider's message id. Retention and resolution decided per signal and written down, not deferred until the storage bill arrives.",
    },
  ],
};

export const faqs = [
  {
    question: "Do we need to replace our DMS?",
    answer:
      "Usually not, and on this vertical more than any other the honest answer is often that a module you already licence covers a good part of what you want. We read the DMS capability first and check the licence before scoping a build. Replacement is a multi-site retraining project with revenue risk attached; integration is cheaper and reversible.",
  },
  {
    question: "What does it cost, and how do you price it?",
    answer:
      "Hours times $40 to $100 per hour by role. The module table gives the range for each of the six modules and the worked example shows 750 hours coming to about $48,750 at a $65 blend. The DMS licence, telematics hardware and any assessment fee are excluded and named as excluded. We do not quote before discovery.",
  },
  {
    question: "Who owns the code, the vehicle data and the integrations?",
    answer:
      "You do. The code is yours on delivery, the vehicle and service data lives in your infrastructure rather than ours, and the integrations are yours to keep running or hand to another supplier. We do not retain a copy of your customer or telematics data.",
  },
  {
    question: "Does the EU Data Act apply to us?",
    answer:
      "It has been in effect since 12 September 2025 and it covers connected products including vehicles, plus related services involving two-way data exchange such as predictive maintenance or remote control. Traditional aftermarket work stays out of scope unless it involves digital two-way data use. The practical test is whether a feature writes back to the vehicle or merely reads a record you already hold.",
  },
  {
    question: "Are R155 and R156 our problem or the manufacturer's?",
    answer:
      "Directly, they bind the manufacturer as a precondition of type approval, and they have applied to all new vehicles since July 2024 across the 64 UNECE contracting parties. Indirectly they are very much your problem, because they determine what an OEM will permit your systems to touch and how software updates reach the vehicles you service.",
  },
  {
    question: "Why do you keep insisting on the VIN?",
    answer:
      "Because it is the only identifier that outlives everything else attached to the car. Registrations change with plate transfers and exports, customers sell the vehicle, contracts end. Key the history to the VIN and it survives all of that; key it to the account and it disappears at the first sale.",
  },
  {
    question: "Can you work with our existing telematics provider?",
    answer:
      "Generally yes, and we would rather. The value is not in the feed, which is a commodity, but in joining it to your service history on the VIN. That join is the thing no telematics vendor can do for you because they do not know what your workshop did.",
  },
  {
    question: "How do you handle parts supersession?",
    answer:
      "By storing the chain rather than the endpoint. A part number is a point in time, not an identity, so overwriting it breaks every historical quote, job and stock line that referenced the old one. Keeping the chain means an obsolete lookup still resolves and can explain why.",
  },
  {
    question: "Can you help with warranty claim approval rates?",
    answer:
      "We can change what data reaches the claim, not how an OEM assesses it. Most rejections we see trace to a job card written for a technician rather than for an assessor. Capturing claim-grade fields at the point of repair is the part that is in your control.",
  },
  {
    question: "We are a fleet operator, not a dealer. Is this still relevant?",
    answer:
      "Yes, and the modelling matters more for you, because the asset, the contract and the vehicle genuinely are three different things in a leasing business. Most systems collapse them and then cannot answer what a vehicle cost across two contracts.",
  },
];

export const nextSteps = {
  title: "What happens next",
  description:
    "Four steps with a shape attached to each, so booking a call is a known quantity.",
  items: [
    {
      step: "A 30 minute technical call",
      line: "Bring the name of your DMS, your OEM list, and one question about a vehicle you currently cannot answer. Those three things tell us more than an hour of description.",
    },
    {
      step: "The capability and licence read",
      line: "We find out what your DMS can expose and what it already does, because on this vertical the second question removes scope surprisingly often.",
    },
    {
      step: "A written scope within a week",
      line: "The modules, the hour ranges and the arithmetic, not a headline price. If the honest answer is a configuration change, the document will say that.",
    },
    {
      step: "You decide",
      line: "With the scope in hand you choose whether we build it, your team does, or your DMS vendor does. The document is useful in all three cases and it is yours either way.",
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
          note: "Vehicle identity and service history live here",
        },
        {
          label: "Web development",
          href: "/services/web-development",
          note: "Workshop, counter and group reporting",
        },
        {
          label: "IoT app development",
          href: "/services/iot-app-development",
          note: "Telematics ingest and device estate",
        },
      ],
    },
    {
      group: "Adjacent capabilities",
      links: [
        {
          label: "Predictive analytics",
          href: "/services/predictive-analytics-development",
          note: "Maintenance prediction on the telemetry join",
        },
        {
          label: "AI document management",
          href: "/services/ai-document-management-system",
          note: "Warranty packs and supplier paperwork",
        },
        {
          label: "Classified app development",
          href: "/solutions/classified-app-development",
          note: "The vehicle marketplace and listings product",
        },
      ],
    },
    {
      group: "Other sectors",
      links: [
        {
          label: "Manufacturing and apparel",
          href: "/industries/manufacturing-software-development",
          note: "Where the part is made before it is fitted",
        },
        {
          label: "Logistics and distribution",
          href: "/industries/logistics-software-development",
          note: "Parts distribution and the dealer supply chain",
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
    title: "Send us one question you cannot answer about a vehicle",
    description:
      "Pick a car that has been through two owners and ask what it has cost across its life, or which parts on it are superseded. Whether your systems can answer tells us where the identity model broke, usually within an afternoon.",
    ctaText: "Book a 30 minute technical call",
  },
  end: {
    title: "Start with the VIN, not the dashboard",
    description:
      "Almost every question on this page resolves to whether the vehicle is your spine or an attribute of a customer record. We will read your DMS capability, tell you which it is, and give you the hours either way.",
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
      "Analytics, automation and document work that applies directly to dealer and fleet operations.",
  },
};
