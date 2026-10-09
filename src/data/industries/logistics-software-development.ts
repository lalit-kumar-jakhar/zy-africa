import type { IndustryPageData } from "./types";

export const heroSection = {
  eyebrow: "Industries · Logistics & distribution",
  title: "Logistics software development for ",
  titleHighlight: "distribution and FMCG operators",
  description:
    "Scheme and claim engines, offline van sales apps, warehouse pick and pack flows, retailer portals, and the ERP and e-invoicing integration underneath. Built for distributors in Oman and the wider Gulf.",
  features: [
    "National Distribution, Oman",
    "Al Amri Express, Oman",
    "Fawtara and Bayan aware",
    "Offline first field apps",
  ],
  scrollTarget: "#essence",
  ctaText: "Book a scoping call",
  bgImage: "/static/assets/industries/logistics-industries.webp",
};

export const seo = {
  primaryKeyword: "logistics software development",
  intent: "commercial",
  secondaryKeywords: [
    "supply chain software development",
    "warehouse management system development",
  ],
  competingUrl: null,
} as const;

export const essence = {
  title: "The short version",
  description:
    "The six things buyers ask before they book a call, answered before you scroll. Supply chain software development and warehouse management system development are the usual entry points, and the scheme engine is what tends to follow. The tiles cover: Typical integration set, Phase one timeline, Rate band, Phase one range, Stack we actually use and Our commitment.",
  tiles: [
    {
      label: "Typical integration set",
      value:
        "ERP or accounting, e-invoicing service provider, payment gateway, mapping, WhatsApp and SMS, carrier APIs, and EDI wherever a modern trade retailer is involved.",
    },
    {
      label: "Phase one timeline",
      value:
        "Three to five months, based on a team of five delivering around 600 useful hours a month.",
    },
    {
      label: "Rate band",
      value:
        "$40 to $100 per hour by role. QA and junior implementation near the floor, solution architecture and integration engineering near the ceiling. Mixed teams blend to $60 to $70.",
    },
    {
      label: "Phase one range",
      value:
        "$101,000 to $179,000 at a $65 blend, before a stated 15 to 20 percent contingency. The arithmetic is further down the page.",
    },
    {
      label: "Stack we actually use",
      value:
        "Next.js, TypeScript, Node, React Native, Laravel, MySQL, Elasticsearch, AWS.",
    },
    {
      label: "Our commitment",
      value:
        "No fixed quote before discovery. Anyone who quotes firm on a first call has either padded it heavily or plans to reprice you at change request time.",
    },
  ],
};

export const anchors = [
  { id: "who-this-is-for", label: "Who this is for" },
  { id: "sub-verticals", label: "Your sub vertical" },
  { id: "systems", label: "Systems we connect" },
  { id: "retail-boundary", label: "EDI and GS1" },
  { id: "compliance", label: "Standards and compliance" },
  { id: "our-work", label: "Our work" },
  { id: "what-goes-wrong", label: "What goes wrong" },
  { id: "build-or-buy", label: "Build or buy" },
  { id: "cost", label: "Cost" },
];

export const segments = {
  title: "Who this is for",
  description:
    "Six kinds of operation, and the one system each is usually missing. Not a fit: if what you need is a packaged WMS configured and rolled out, a specialist integrator will do that faster and cheaper than we will, and we will tell you so on the first call.",
  items: [
    {
      title: "Brand principal or national distributor",
      line: "Hundreds of SKUs, suppliers spread across twenty or more countries, and no outlet level view of what actually sold through.",
    },
    {
      title: "3PL or bonded warehouse operator",
      line: "Salalah, Sohar, Al Mazunah or Duqm. Multiple clients in one building, and activity billing rebuilt by hand after month end.",
    },
    {
      title: "Cash and carry wholesaler",
      line: "Counter sales and delivered sales fighting over one stock pool, with credit exposure nobody enforces at the moment of order entry.",
    },
    {
      title: "Cold chain operator",
      line: "Dairy, meat, frozen and produce, most of it imported, and every claim dispute needs excursion evidence that lives on paper.",
    },
    {
      title: "Quick commerce and grocery delivery",
      line: "Dark stores, rider fleets, and cash on delivery that takes two days to reconcile against what the riders actually banked.",
    },
    {
      title: "Freight forwarder or customs broker",
      line: "Filing on Bayan, re-keying the same document into three places, and no reliable view of profit per shipment file.",
    },
  ],
};

export const subVerticals = {
  title: "Find your operation",
  description:
    "Each of these is a different business wearing the same word. What breaks is different, so what we build is different. The operations covered here are: FMCG distribution, 3PL and fulfilment, Cold chain and perishables, Wholesale and cash and carry, Van sales and direct store delivery and Last mile and quick commerce.",
  items: [
    {
      title: "FMCG distribution",
      breaks:
        "Slab, QPS, combo, free goods, display and retro schemes get computed in spreadsheets. Claims against the principal sit for sixty to ninety days, and by then nobody can prove the number.",
      build:
        "A configurable scheme engine that applies at order entry rather than after invoicing. Automatic claim generation, reconciliation against principal credit notes, credit limit blocking at capture, and a secondary sales upload that runs whether or not somebody remembers.",
    },
    {
      title: "3PL and fulfilment",
      breaks:
        "Pallet day, per pick, per carton and kitting tariffs get reconstructed manually at month end. Value added work goes unbilled because nobody logged it at the time.",
      build:
        "Multi tenant WMS with client level putaway, allocation and pick strategy. A metering engine that prices every logged transaction, and a client portal so your customer stops emailing you for stock reports.",
    },
    {
      title: "Cold chain and perishables",
      breaks:
        "Shrinkage from expiry and temperature excursions runs at two to five percent of revenue across the industry. When a claim is disputed, the evidence is a hunt through paper.",
      build:
        "FEFO with per customer minimum remaining shelf life rules, so a modern trade account that rejects under 75 percent life and a wholesaler that accepts 50 are both handled at allocation. Catch weight, telemetry bound to the consignment, and mock recall with one up one down genealogy.",
    },
    {
      title: "Wholesale and cash and carry",
      breaks:
        "Counter discounting with no guardrails. Aging that nobody blocks against. Case, inner and each conversions that go wrong quietly and show up as a stock variance.",
      build:
        "A pricing hierarchy of customer group, then customer, then SKU, then deal. Margin floors with an approval step at order entry, aging based order blocking, one stock pool across counter and delivered, and UOM conversion that holds under pressure.",
    },
    {
      title: "Van sales and direct store delivery",
      breaks:
        "Day end cash, van stock, returns, damages and empties never tie out. Check ins get recorded from somewhere that is not the outlet.",
      build:
        "An offline first field app with journey plans, on vehicle invoicing carrying 5 percent VAT, a structured day end settlement, and geofenced check in with photo proof of delivery.",
    },
    {
      title: "Last mile and quick commerce",
      breaks:
        "Failed deliveries, addresses that amount to a landmark and a phone number, cash on delivery reconciliation, and returns to origin quietly eating the margin.",
      build:
        "Sub minute inventory sync to the storefront, zone or batch picking, rider auto allocation and batching, websocket live tracking, OTP and photo proof of delivery, and pin drop geocoding, because Oman street addressing is not reliably validatable.",
    },
  ],
};

export const systems = {
  title: "Systems we connect to",
  description:
    "A distribution build is mostly an integration project wearing a product costume. Here is the estate we expect to meet. The estates we expect to meet are: Warehouse management, Transport, split three ways, ERP for distributors and The rest of the estate.",
  groups: [
    {
      group: "Warehouse management",
      body: "Enterprise: Manhattan Active Warehouse Management, Blue Yonder WMS, Infios (Korber Supply Chain Software, rebranded March 2025), SAP EWM, Oracle WMS Cloud, Infor CloudSuite WMS. Mid market: Softeon, Deposco, Tecsys, Generix, Logiwa, Extensiv, Mantis.",
    },
    {
      group: "Transport, split three ways",
      body: "Buyers conflate these and they are not the same data model. Shipper TMS: Oracle OTM, Blue Yonder TMS, Manhattan Active TM, SAP TM, e2open, Alpega. Carrier and broker operational TMS: McLeod LoadMaster and PowerBroker, Trimble TMW.Suite. Real time visibility: project44, FourKites, Shippeo, Descartes MacroPoint, which are aggregation layers over carrier and telematics feeds, not execution systems.",
    },
    {
      group: "ERP for distributors",
      body: "SAP S/4HANA, Oracle Fusion and Dynamics 365 Finance and Operations at enterprise level. NetSuite, Dynamics 365 Business Central, SAP Business One and Odoo across the cloud mid market. Focus Softnet is a genuine Dubai headquartered regional player, and TallyPrime is pervasive at SME trading company level. Treat that as partner density we have observed, not as measured market share.",
    },
    {
      group: "The rest of the estate",
      body: "POS and retail: LS Central on Business Central, Oracle Retail Xstore, Retail Pro. Telematics: Samsara, Geotab, Motive, Webfleet, noting that fleets in Saudi Arabia must stream to the national WASL platform under TGA rules. Regional carriers: Aramex, SMSA, Naqel, iMile, with EasyPost, Shippo, nShift or Descartes for multi carrier abstraction. Middleware: Boomi, MuleSoft, Workato, Celigo, Azure Logic Apps.",
    },
  ],
  distinction: {
    title: "The distinction that saves projects",
    body: "Odoo Inventory, Zoho Inventory, NetSuite native WMS and Cin7 handle locations and stock moves. They do not do wave planning, task interleaving, slotting or labour management. Selling one of them as a WMS to a 40,000 SKU distributor is a failure mode, and we will tell you that before you buy rather than after.",
  },
  pairs: [
    {
      pair: "ERP plus WMS",
      body: "Who owns stock truth, and exactly when the goods receipt posts. Get this wrong and the two systems argue forever.",
    },
    {
      pair: "WMS plus TMS",
      body: "Dock and yard slotting against the load tender, so the pick wave and the truck arrival are the same plan.",
    },
    {
      pair: "DMS plus ERP",
      body: "Getting secondary sales back to the principal without asking a distributor to key it twice.",
    },
    {
      pair: "Field app plus accounting",
      body: "Gap free invoice numbering per device when the van has no signal, which is a tax requirement before it is an engineering one.",
    },
  ],
};

export const retailBoundary = {
  title: "The retail boundary: EDI, GS1 and the ASN",
  description:
    "If you sell into modern trade, this is where projects are won or quietly lost. Almost nobody writes this section honestly, so here it is.",
  edi: [
    { x12: "850 / 860 / 855", edifact: "ORDERS / ORDCHG / ORDRSP", use: "Purchase order, change, acknowledgement" },
    { x12: "856", edifact: "DESADV", use: "Advance ship notice, carrying the SSCC hierarchy" },
    { x12: "810 / 820", edifact: "INVOIC / REMADV", use: "Invoice and remittance" },
    { x12: "846 / 852", edifact: "INVRPT / SLSRPT", use: "Inventory position and point of sale sell through" },
    { x12: "940 / 945", edifact: "", use: "Warehouse shipping order and shipping advice, for 3PL" },
    { x12: "943 / 944 / 947", edifact: "", use: "Stock transfer ship, receipt and adjustment" },
    { x12: "204 / 214 / 210", edifact: "IFTMIN / IFTSTA", use: "Load tender, shipment status, freight invoice" },
    { x12: "894 / 895", edifact: "", use: "Direct store delivery, delivery and return" },
    { x12: "997", edifact: "CONTRL", use: "Functional acknowledgement" },
  ],
  whyEdi: {
    title: "Why REST did not replace it",
    points: [
      "It is a contract term, not an architecture choice. Retailer vendor agreements attach chargebacks and OTIF penalties to a late or mismatched ASN, and the supplier does not get a vote.",
      "AS2 signed MDN receipts plus a 997 give non repudiation that a bare REST 200 does not.",
      "Migration cost scales with the number of partners, not with the number of systems, because every partner has its own flavour encoded in maps.",
    ],
  },
  gs1: {
    title: "The keys, and what each is actually for",
    points: [
      "GTIN-13 and GTIN-12 identify the consumer item. GTIN-14 adds an indicator digit for the case or pallet configuration.",
      "GLN identifies the party and the location, down to the specific ship to door.",
      "SSCC is the licence plate of a logistic unit, and the join key between the 856 and the physical pallet. A mismatch here is the most common receiving scan failure and chargeback cause we see.",
      "EAN-13 and UPC-A are point of sale only. ITF-14 survives coarse print on corrugate. GS1-128 carries the Application Identifiers that make the rest possible: (00) SSCC, (01) GTIN, (10) batch, (17) expiry, (3202) net weight.",
    ],
  },
  engineering: {
    title: "Four rules that show a team has shipped this before",
    points: [
      "Store the GTIN as a string. Leading zeros are significant and an integer column will silently destroy them.",
      "Validate the mod 10 check digit at capture, not at the retailer.",
      "Handle FNC1 correctly for variable length AI fields, or your parser will run two fields together.",
      "Treat an expiry AI (17) with DD set to 00 as end of month, which is legal and will otherwise fail your date parser.",
    ],
  },
  onboarding:
    "One planning note that catches people out: every retailer runs its own certification cycle, typically four to twelve weeks, and it runs on their calendar rather than yours.",
};

export const compliance = {
  title: "Standards and compliance",
  description:
    "Five standards carry the questionnaires a distributor and its retail customers will send you, so they get a row each. Everything after them is jurisdiction, which decides the build but only where you actually trade, so it sits in one row and the FAQ goes deeper. We hold none of these ourselves. We build the traceability and the controls that let you pass the audit.",
  rows: [
    {
      item: "ISO/IEC 27001:2022",
      detail:
        "The information security standard, 93 Annex A controls in 4 themes. The transition from the 2013 version closed 31 October 2025, so a 2013 certificate is now void. Increasingly asked for by the retail groups and principals you are supplying, not just by your own board.",
    },
    {
      item: "HACCP, ISO 22000 and the GFSI schemes",
      detail:
        "HACCP, ISO 22000:2018, and the GFSI recognised FSSC 22000 or BRCGS. These are the ones your retail customers audit you against, and they matter to software because the traceability records the audit asks for are a design input at the start rather than a report bolted on at the end.",
    },
    {
      item: "Incoterms 2020 and HS 2022",
      detail:
        "Incoterms 2020, including the DAT to DPU rename, with CIP requiring Institute Cargo Clauses (A) while CIF stays at (C). Store HS 2022 codes versioned, so a historical shipment keeps the code that was valid at the time rather than being silently reclassified by a later update.",
    },
    {
      item: "GDPR and UK GDPR",
      detail:
        "Applies on the basis of your EU and UK data subjects rather than your incorporation, and it reaches driver and rep data as much as customer data. Article 30 records, Article 33 breach notice inside 72 hours, data subject requests inside a month, and a documented position on transfers out.",
    },
    {
      item: "SOC 1 and SOC 2",
      detail:
        "SOC 2 covers security and availability and turns up from principals and larger retail groups. SOC 1 covers controls feeding your customers' financial reporting, which is the one that appears once you are running settlement, scheme claims or consignment stock that lands on someone else's books.",
    },
    {
      item: "Regional rules, by where you trade",
      detail:
        "Oman: VAT at 5 percent since 16 April 2021 with mandatory registration at OMR 38,500 and Arabic or bilingual invoices; Fawtara e-invoicing on Peppol PINT OM, Phase 1 August 2026 through Phase 4 for B2G in August 2028; Bayan single window, where 12 digit GCC tariff codes have been required since January 2025 and 8 digit declarations are auto rejected; PDPL under Royal Decree 6/2022, binding since the transition closed 5 February 2026; and In-Country Value scoring, which affects tender evaluation for government linked and energy buyers, with JSRS registration needed to bid for PDO, OQ and Oxy work. Saudi Arabia and the UAE if you sell across borders: ZATCA Fatoora Phase 2 in waves, and Peppol PINT AE through an accredited provider. GCC-wide: GSO 9:2022 labelling with mandatory Arabic printed on the original pack, and conformity through SABER, ECAS, MoIAT or DGSM.",
    },
  ],
};

export const ourWork = {
  title: "Our work in this sector",
  description:
    "Three builds in this sector. We would rather describe real work than show a wall of logos.",
  items: [
    {
      client: "National Distribution Company",
      href: "/case-studies/fmcg-distribution-oman-ndc",
      place: "Oman",
      line: "An FMCG distribution platform covering product catalogue, brand partnerships, media delivery and buyer enquiry, for an operation running 400 plus products, 300 plus employees and partnerships across more than 20 countries.",
      stack: ["Next.js", "TypeScript", "Node.js", "CMS", "Cloud hosting"],
    },
    {
      client: "Al Amri Express",
      href: "/case-studies/grocery-delivery-oman-al-amri-express",
      place: "Oman",
      line: "Grocery and daily essentials delivery across iOS and Android, with search and filtering, one tap reordering, and live order tracking over websockets.",
      stack: ["React Native", "Laravel", "Elasticsearch", "MySQL", "AWS"],
    },
    {
      client: "Al Amri Express Partner",
      place: "Oman",
      line: "The internal operations app behind the storefront. Order processing, picking, packing and ready for dispatch stages, with access separated by role across admin, packer and delivery staff.",
      stack: ["React Native", "Laravel", "MySQL", "AWS", "Push Notifications"],
    },
  ],
};

export const whatGoesWrong = {
  title: "What goes wrong in distribution software projects",
  description:
    "Ten failure modes we have either hit or inherited. Naming them is more useful than a list of reasons to choose us. The first three below are: Integration is scoped as a few APIs, Master data treated as a data load and Offline bolted on late.",
  items: [
    {
      title: "Integration is scoped as a few APIs",
      line: "It is routinely 30 to 50 percent of total effort, and the failure mode is point to point wiring with no idempotency, no retry design and no reconciliation report, so failed messages go unnoticed until the stock figure is wrong. Budget integration as a third of the project and ship the reconciliation report as a deliverable.",
    },
    {
      title: "Master data treated as a data load",
      line: "Wrong UOM conversions and case packs, missing weights and dimensions, unmapped barcodes, duplicate outlet records. Cleansing needs to be a funded workstream with a named owner and a quality threshold that gates go live.",
    },
    {
      title: "Offline bolted on late",
      line: "Offline first is an architecture, not a feature flag. It needs conflict resolution, gap free invoice numbering per device, delta sync and an agreed stale data window.",
    },
    {
      title: "Floor adoption assumed",
      line: "A picker paid on rate will scan at the end of the aisle and share logins if the handheld adds keystrokes. Design to the scan sequence, and make productivity an explicit acceptance criterion.",
    },
    {
      title: "Retailer EDI onboarding treated as technical",
      line: "It is a customer project with a four to twelve week test cycle that runs on the retailer's calendar. Plan it as a dependency, not a task.",
    },
    {
      title: "The as-is documented from workshops",
      line: "Walk the floor instead. WhatsApp orders, driver held stock and informal credit approvals never appear in a meeting room, and all three turn up on day one of go live.",
    },
    {
      title: "Big bang cutover on untrusted opening stock",
      line: "No wall to wall count, no transaction freeze, no rollback, and it gets scheduled near peak. Count wall to wall, freeze transactions, write the rollback before you need it, and move the date away from peak.",
    },
    {
      title: "Pricing, scheme and tax logic hard coded",
      line: "Every rate change or new scheme then becomes a change request. Configuration is more work up front and cheaper by month four.",
    },
    {
      title: "Performance never tested at real volume",
      line: "Allocation, wave release and route optimization behave politely on 5,000 rows and fall over on five million. Test with three years of history before user acceptance, not after.",
    },
    {
      title: "No owner for the operating metric",
      line: "Baseline lines per hour, OTIF, claim cycle time, cost per order and fill rate before the project starts. Otherwise nobody can say whether it worked.",
    },
  ],
};

export const buildOrBuy = {
  title: "Build, buy, or buy the core and build the edge",
  description:
    "The honest answer is usually the third one, and sometimes the answer is that you should not hire us for this part. The components judged here are: Packaged enterprise WMS, Packaged TMS, ERP, Scheme and claim engine, Offline field and van sales app, E-invoicing transmission and Retailer portal and the integration fabric.",
  rows: [
    {
      option: "Packaged enterprise WMS",
      best: "Buy",
      verdict:
        "Genuinely best at wave planning, labour standards, slotting and task interleaving. Do not commission a custom WMS to compete with Blue Yonder or Manhattan on their own ground.",
    },
    {
      option: "Packaged TMS",
      best: "Buy the core, build the edge",
      verdict:
        "Genuinely best at multi leg planning, rating and carrier settlement. Buy it if you are running that complexity. If your operation is single country on an owned fleet, build only the dispatch layer.",
    },
    {
      option: "ERP",
      best: "Buy the core, build the edge",
      verdict:
        "Genuinely best at ledger, tax, procurement and financial close. Where NetSuite, Business Central or Odoo already covers around 70 percent of the requirement, extend it rather than rebuild it.",
    },
    {
      option: "Scheme and claim engine",
      best: "Build",
      verdict:
        "This is where custom earns its money. The regional trade terms are not modelled by the packaged market, because the products that exist were built for a different market's trade structure.",
    },
    {
      option: "Offline field and van sales app",
      best: "Build",
      verdict:
        "Journey plans, settlement and on vehicle invoicing. Either route works, and either way the offline behaviour is the hard part and worth designing deliberately rather than retrofitting.",
    },
    {
      option: "E-invoicing transmission",
      best: "Buy",
      verdict:
        "Only an accredited Service Provider may transmit to Fawtara. We integrate to one and build the document mapping. We do not transmit, and neither should your development partner claim to.",
    },
    {
      option: "Retailer portal and the integration fabric",
      best: "Build",
      verdict:
        "Nobody sells the glue between your specific estate. This is the layer that ties together the systems that are not going to be replaced, and it is the one nobody else can supply off the shelf.",
    },
  ],
};

export const cost = {
  title: "What logistics software development costs, with the arithmetic shown",
  description:
    "Every competitor publishes a total with no hours behind it. Here is the rate, the hours, and the multiplication, so you can argue with any line of it. What moves the number: Each integration, Offline capability, Multi warehouse over single site, Real time tracking, Multi currency and multi language, Each distinct user role and Catalogue size.",
  drivers: [
    { driver: "Each integration", hours: "60 to 160 hours", note: "Documented API at the low end, reverse engineered CSV drop at the high end" },
    { driver: "Offline capability", hours: "adds 40 to 60 percent", note: "Applied to that app's hours, not to the project" },
    { driver: "Multi warehouse over single site", hours: "120 to 250 hours", note: "Allocation and transfer logic, not just a dropdown" },
    { driver: "Real time tracking", hours: "120 to 240 hours", note: "Sockets, presence, and the reconnect path" },
    { driver: "Multi currency and multi language", hours: "100 to 220 hours", note: "Arabic and right to left rendering included" },
    { driver: "Each distinct user role", hours: "40 to 90 hours", note: "Its own screens, permissions and audit trail" },
    { driver: "Catalogue size", hours: "80 to 200 hours", note: "Irrelevant until search relevance and query performance start to matter" },
  ],
  modules: [
    { module: "Platform foundations", hours: "300 to 500" },
    { module: "Product catalogue", hours: "180 to 320" },
    { module: "Order management", hours: "320 to 560" },
    { module: "Warehouse basics", hours: "400 to 700" },
    { module: "Dispatch and route", hours: "300 to 560" },
    { module: "Offline partner or driver app", hours: "400 to 700" },
    { module: "Retailer portal, reporting and the first integration", hours: "440 to 880" },
  ],
  math: {
    title: "Phase one, added up",
    points: [
      "A phase one scope comes to roughly 1,550 hours at the low end and 2,760 at the high end.",
      "At a $65 blended rate that is about $101,000 to $179,000, plus a stated 15 to 20 percent contingency rather than padding hidden inside the module numbers.",
      "Five people at around 600 useful hours a month puts phase one at three to five months.",
      "A full platform including the offline app, dispatch and multi warehouse runs roughly 2,500 to 4,700 hours, which is about $160,000 to $310,000. For reference, published market figures for a custom warehouse system of average complexity sit in the $200,000 to $400,000 range.",
      "Budget maintenance at 15 to 20 percent of build cost per year, which matches the industry norm.",
    ],
  },
};

export const engagement = {
  title: "How we can work together",
  description: "Four models for logistics software development, each with the downside stated. The models are: Fixed scope phase one, Discovery led rollout, Dedicated squad, monthly and Engineers into your team. Pick by how settled the scope actually is, not by preference.",
  items: [
    {
      title: "Fixed scope phase one",
      good: "Budget certainty and light management overhead. You know the number before you start, and the delivery risk on the signed scope sits with us rather than with you.",
      bad: "You pay a risk premium inside the number, and every change becomes a negotiation. Suits a bounded phase with a signed specification, not a platform.",
    },
    {
      title: "Discovery led rollout",
      good: "Billed on time and materials, so you pay for work done, see the logged hours, and can redirect scope mid flight as the floor tells you something new.",
      bad: "You carry the overrun risk and you have to actually read the reports. Best fit where warehouse reality will reshape the requirements, which it usually does.",
    },
    {
      title: "Dedicated squad, monthly",
      good: "The same people accumulate your domain knowledge and the team flexes in size.",
      bad: "It needs a real product owner on your side. Without one it drifts.",
    },
    {
      title: "Engineers into your team",
      good: "Cheapest per head, and it slots into a team you already run without changing how that team works.",
      bad: "Only sensible when you already have an engineering lead supplying architecture and accountability.",
    },
  ],
  recommendation:
    "What we usually suggest: a fixed price discovery, credited against phase one, then time and materials or a dedicated team for the build itself.",
};

export const operations = {
  title: "Where distribution software earns its keep",
  description:
    "The stages an order moves through, and the build behind each one. Nothing on this map is a capability we have not shipped. The stages run: Partnerships, Catalogue, Warehouse, Dispatch, Retailer channel and Performance. Each one is a place a system either holds the fact or loses it.",
  stages: [
    "Partnerships",
    "Catalogue",
    "Warehouse",
    "Dispatch",
    "Retailer channel",
    "Performance",
  ],
    image: {
      src: "/static/assets/industries/logistics-operations-map.svg",
      alt: "Two band distribution map covering partnerships, catalogue and warehouse, then dispatch, retailer channel and performance, built for NDC and Al Amri Express.",
    },
};

export const costHighlights = [
  { label: "Phase one range", value: "$101k to $179k", note: "At a $65 blended rate" },
  { label: "Typical timeline", value: "3 to 5 months", note: "Five people, ~600 hrs/month" },
  { label: "Useful hours", value: "1,550 to 2,760", note: "Before 15 to 20% contingency" },
];

export const delivery = {
  title: "How we deliver logistics software development",
  description:
    "Five phases, each named by what it produces. A generic waterfall diagram would tell you nothing. The phases are: Integration inventory, Label and scan specification, Volume tested build, Cutover runbook and Adoption pack. Each is named by the artifact it hands you, so you can ask to see one.",
  items: [
    {
      phase: "Integration inventory",
      line: "A floor walk of the distribution centre and two days out with reps, because the as-is documented from a meeting room misses driver held stock and WhatsApp orders. Output is an integration inventory with a named owner per system, and a data quality baseline.",
    },
    {
      phase: "Label and scan specification",
      line: "SSCC and GS1-128 label specification, a scan sequence storyboard for the handheld, the scheme matrix, and a permission matrix by role.",
    },
    {
      phase: "Volume tested build",
      line: "A volume test with three years of history and peak day concurrency before user acceptance sign off, not after it.",
    },
    {
      phase: "Cutover runbook",
      line: "Wall to wall count, transaction freeze, rollback plan, and site by site waves with a stabilisation window. Never near peak, and in this region never during the inventory build ahead of Ramadan.",
    },
    {
      phase: "Adoption pack",
      line: "A superuser network, a short dual running period, productivity as an explicit acceptance criterion, and a named owner for the operating metric.",
    },
  ],
};

export const nonFunctional = {
  title: "The technical buyer's checklist",
  description:
    "The things that decide whether this works in year three, which rarely appear on a landing page. The groups are: Connectivity, Data integrity, Security controls, Certifications, stated honestly, Exit and portability and Interfaces for the actual workforce. Copy any line straight into your own requirements document.",
  groups: [
    {
      group: "Connectivity",
      body: "Radio dead zones in racked aisles and cold stores are normal. Delta sync, an agreed stale data window, and conflict resolution on reconnect are requirements, not refinements.",
    },
    {
      group: "Data integrity",
      body: "Idempotency keys, retry with backoff, a dead letter queue, and a daily reconciliation report between ERP and warehouse stock positions. That last control is the one most projects skip and most operations need.",
    },
    {
      group: "Security controls",
      body: "Role based access control, segregation of duties on inventory adjustments, an immutable audit log of who changed what and when, seal number, container number and driver identity captured at despatch, encryption in transit and at rest, configurable hosting region, and retention and deletion controls.",
    },
    {
      group: "Certifications, stated honestly",
      body: "ISO/IEC 27001:2022 and SOC 2 Type I or Type II are what your procurement team and your customs audits will ask about. We build to support those controls. We do not claim certifications Zyneto does not hold, and you should ask any vendor who implies otherwise to show the certificate.",
    },
    {
      group: "Exit and portability",
      body: "Code in your repository, infrastructure as code, credentials in your accounts, and a documented export of master data and transaction history. Changing supplier should be a commercial decision rather than a technical hostage situation, and the time to establish that is before you sign.",
    },
    {
      group: "Interfaces for the actual workforce",
      body: "Warehouse and delivery teams across the Gulf are largely expatriate and multilingual. Icon led flows, and bilingual Arabic and English with proper right to left rendering, are functional requirements rather than preferences.",
    },
  ],
};

export const faqs = [
  {
    question: "Can you integrate with TallyPrime, Focus Softnet, NetSuite or Dynamics 365 Business Central?",
    answer:
      "Yes, and the effort varies more than people expect. A documented REST API sits near 60 hours. A nightly CSV drop that has to be reverse engineered, reconciled and monitored sits nearer 160. We scope each integration separately rather than quoting one number for all of them.",
  },
  {
    question: "Is Odoo Inventory enough, or do we need a real WMS?",
    answer:
      "Odoo Inventory handles locations and stock moves well, and the gap is everything that makes a picker efficient rather than merely correct. If you are running a few thousand SKUs from one site it is often the right answer. At 40,000 SKUs across multiple sites with productivity targets, it is not, and stretching it there is a failure mode we have been called in to fix.",
  },
  {
    question: "What is an 856 ASN, and why do retailers issue chargebacks against it?",
    answer:
      "It is the advance ship notice, and it carries the SSCC hierarchy that tells the retailer what is on each pallet before the truck arrives. If the SSCC on the label does not match the one in the message, the receiving scan fails, the goods get handled manually, and the cost comes back to you as a chargeback under the vendor agreement.",
  },
  {
    question: "How is FEFO different from FIFO, and why does a modern trade customer care?",
    answer:
      "FIFO ships the oldest received stock. FEFO ships the earliest expiring stock, which is not always the same thing. Modern trade accounts often contract a minimum remaining shelf life, so an account may reject anything under 75 percent life while a wholesaler accepts 50. Your allocation logic has to know the rule per customer, or you will ship stock that is legally fine and contractually rejected.",
  },
  {
    question: "Will the field app work with no signal in a cold store or on a rural beat?",
    answer:
      "It has to, and that shapes the architecture rather than a setting. Offline first means local storage, delta sync, conflict resolution on reconnect, and gap free invoice numbering per device so the tax sequence survives. Retrofitting this later is close to a rewrite of that app.",
  },
  {
    question: "What does Fawtara mean for our invoicing?",
    answer:
      "Oman is moving to a Peppol based e-invoicing model, XML UBL 2.1 per PINT OM alongside a PDF/A-3, phasing from large taxpayers in August 2026 through to all remaining VAT registered businesses by August 2027 and B2G in 2028. Practically, invoicing stops being something your system prints and becomes something it transmits and gets acknowledged. Confirm the current phase dates before you plan around them.",
  },
  {
    question: "Why might Bayan be rejecting our declarations?",
    answer:
      "The most common cause since January 2025 is tariff code length. Bayan requires 12 digit GCC Integrated Customs Tariff codes, and 8 digit declarations are auto rejected. If your product master still carries 8 digit codes, that is a data problem rather than a filing problem.",
  },
  {
    question: "Do you handle Arabic invoices, right to left layout and Arabic product names?",
    answer:
      "Yes. Oman requires invoices in Arabic or bilingual form, with an Arabic version producible on request, and consumer packs carry mandatory Arabic labelling. Right to left is a layout and data concern from the first sprint, not a translation pass at the end.",
  },
  {
    question: "What does phase one cost, how many hours is that, and how long does it take?",
    answer:
      "Roughly 1,550 to 2,760 hours, which at a $65 blended rate is about $101,000 to $179,000 before a 15 to 20 percent contingency. With a team of five at around 600 useful hours a month, that is three to five months. The module by module breakdown is on this page so you can check the arithmetic against your own scope.",
  },
  {
    question: "Who owns the code, the data and the hosting account?",
    answer:
      "Ask this of every vendor you speak to, and get the answer in the contract rather than in an email. Our position is that the client should hold the hosting account and the repository, so that changing supplier is a commercial decision rather than a technical hostage situation. Confirm the specifics with us in writing before you sign.",
  },
];

export const nextSteps = {
  title: "What happens next",
  description:
    "No quote without discovery. Here is the actual sequence.",
  items: [
    { step: "You get a reply within one business day", line: "From someone who has read what you sent, not a scheduling link." },
    { step: "A 45 minute scoping call", line: "Systems that must stay, roles, sites, whether the field works offline, and which e-invoicing regime applies." },
    { step: "A written estimate with hour ranges per module", line: "The same format as the table on this page, applied to your scope." },
    { step: "A fixed price discovery proposal", line: "Credited against phase one if you proceed." },
  ],
};

export const hubLinks = {
  title: "Go deeper",
  groups: [
    {
      group: "Build and automate",
      links: [
        { label: "AI workflow automation", href: "/services/ai-workflow-automation-services", note: "Where automation meets decisions" },
        { label: "POS software development", href: "/services/pos-software-development", note: "Counter and van sales at the point of order" },
        { label: "IoT app development", href: "/services/iot-app-development", note: "Vehicle, cold chain and warehouse telemetry" },
      ],
    },
    {
      group: "Data and decisions",
      links: [
        { label: "Predictive analytics", href: "/services/predictive-analytics-development", note: "Demand and replenishment forecasting" },
        { label: "Database development", href: "/services/database-development", note: "The stores and pipelines behind the reporting" },
        { label: "Web scraping and data extraction", href: "/services/web-scraping-data-extraction-services", note: "Getting data out of systems that will not share" },
      ],
    },
    {
      group: "Other sectors",
      links: [
        {
          label: "Retail and commerce",
          href: "/industries/retail-software-development",
          note: "Where the stock lands and who promises it",
        },
        {
          label: "Automotive and mobility",
          href: "/industries/automotive-software-development",
          note: "Fleet, parts and the aftersales tail",
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
    title: "Which stage of your operation is costing you most?",
    description:
      "Bring us the part that still runs on spreadsheets and phone calls. That is usually where a first release pays for itself.",
    ctaText: "Book a scoping call",
  },
  end: {
    title: "Talk to an engineer, not a salesperson",
    description:
      "Tell us what your operation runs on today, and we will tell you what is worth rebuilding and what is not.",
    ctaText: "Book a scoping call",
    assurances: [
      "No fixed quote before discovery",
      "Reply within one business day",
      "$40 to $100 per hour, by role",
    ],
  },
};

export const relatedPosts = [
  "web-scraping-guide-for-2025-how-it-works-types-legality-tools-etc",
  "ai-in-everyday-business",
  "top-ai-use-cases-you-cant-ignore",
  "how-much-does-ai-development-cost",
  "best-methods-to-scrape-page-information-and-add-it-to-excel",
  "ai-for-fraud-detection-a-quick-guide",
  "mobile-app-development-guide",
];

export const industry: IndustryPageData = {
  heroSection,
  seo,
  essence,
  anchors,
  segments,
  subVerticals,
  operations,
  systems,
  retailBoundary,
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
      "Automation, analytics and data work that applies directly to distribution operations.",
  },
};
