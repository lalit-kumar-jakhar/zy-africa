import type { IndustryPageData } from "./types";

export const heroSection = {
  eyebrow: "Industries · Retail & commerce",
  title: "Retail operations software development that ",
  titleHighlight: "keeps one stock number honest",
  description:
    "Storefront and checkout, order routing and available to promise, store and dark store picking apps, and the ERP, POS and e-invoicing integration underneath. Built for retailers in Oman and the wider Gulf, and for brands selling into India, where ZATCA, Fawtara, PINT AE, DPDP and the RBI authentication rules change the order flow rather than just the paperwork.",
  features: [
    "Al Amri Express, Oman",
    "Stylebank, B2B apparel",
    "ZATCA and Fawtara aware",
    "$40 to $100 per hour",
  ],
  scrollTarget: "#essence",
  ctaText: "Book a 30 minute technical call",
  bgImage: "/static/assets/industries/retail-ecommerce-industries.webp",
};

export const seo = {
  primaryKeyword: "retail operations software development",
  intent: "commercial",
  secondaryKeywords: [
    "omnichannel inventory software",
    "retail software development",
  ],
  competingUrl: "/solutions/ecommerce-app-development",
} as const;

export const essence = {
  title: "The short version",
  description:
    "The six numbers a buyer wants before booking a call, answered before you scroll. Most retail software development here begins as omnichannel inventory software, because the stock number is the thing every channel argues about. They are: Typical integration set, Phase one timeline, Rate band, Phase one range, with the arithmetic, Stack we actually use and Our commitment.",
  tiles: [
    {
      label: "Typical integration set",
      value:
        "Four to nine systems on a normal build: ERP or accounting, POS, WMS or 3PL, PIM, payment gateway, an accredited e-invoicing service provider, a carrier or aggregator, and a marketplace channel manager.",
    },
    {
      label: "Phase one timeline",
      value:
        "10 to 16 weeks to a launchable slice, with a mid October to mid January freeze written into the contract. Retail's calendar does not move because a sprint slipped.",
    },
    {
      label: "Rate band",
      value:
        "$40 to $100 per hour by role. $40 to $55 for front end, CMS and content operations. $75 to $100 for integration architecture, payments and compliance engineering. Mixed teams blend to $60 to $70.",
    },
    {
      label: "Phase one range, with the arithmetic",
      value:
        "Lean slice: 850 build hours plus 170 QA at 20 percent plus 60 DevOps equals 1,080 hours. At $60 that is about $65,000. Full slice: 1,300 build plus 325 QA at 25 percent plus 120 DevOps equals 1,745 hours. At $70 that is about $122,000.",
    },
    {
      label: "Stack we actually use",
      value:
        "React and Next.js, React Native, Laravel, Python with Django, MySQL, Elasticsearch, Redis, Celery, AWS, websockets for live tracking, Sentry for error tracking, and WordPress or WooCommerce where that is genuinely the right answer.",
    },
    {
      label: "Our commitment",
      value:
        "No fixed price before discovery. Any figure quoted before the integration inventory exists is fiction. Two things we are not: an accredited e-invoicing Service Provider in the UAE, Oman or Saudi Arabia, and a payment institution. We integrate to accredited providers.",
    },
  ],
};

export const anchors = [
  { id: "who-this-is-for", label: "Is this us?" },
  { id: "sub-verticals", label: "What breaks in our operation?" },
  { id: "systems", label: "Will you talk to our stack?" },
  { id: "compliance", label: "Which standards will we be asked for?" },
  { id: "our-work", label: "What have you built?" },
  { id: "what-goes-wrong", label: "What usually goes wrong?" },
  { id: "build-or-buy", label: "Build or buy?" },
  { id: "cost", label: "What will it cost?" },
];

export const operations = {
  title: "Where commerce systems earn their keep",
  description:
    "The stages an order moves through, and what we build at each one The arc is: Catalogue and enrichment, Inventory position, Order capture, Allocation and sourcing, Fulfilment and returns and Settlement and margin. Each one is a place a system either holds the fact or loses it.",
  stages: [
    "Catalogue and enrichment",
    "Inventory position",
    "Order capture",
    "Allocation and sourcing",
    "Fulfilment and returns",
    "Settlement and margin",
  ],
  image: {
    src: "/static/assets/industries/retail-ecommerce-operations-map.svg",
    alt: "Two band commerce map covering catalogue, inventory and order capture, then allocation, fulfilment and settlement.",
  },
};

export const segments = {
  title: "Who this is for",
  description:
    "Six company shapes, and the one system each is usually missing. Not a fit: if you want a template storefront with no back office integration, a platform partner will be faster and cheaper, and we will say so on the first call.",
  items: [
    {
      title: "Gulf retail group, ERP anchored",
      line: "SAP, Oracle Retail or LS Central on Business Central already owns price, stock and customer master, and you want the storefront and order routing changed without anyone touching the nightly batch.",
    },
    {
      title: "Saudi merchant on Salla or Zid",
      line: "You have outgrown the template and need custom partner apps written against the platform APIs, with mada routing and ZATCA clearance already handled underneath you.",
    },
    {
      title: "India D2C on Shopify or Woo",
      line: "You have hit the three option variant ceiling, you are paying for return to origin on cash on delivery orders, and the April 2026 RBI authentication rules land on your card not present flow.",
    },
    {
      title: "Apparel brand or garment manufacturer",
      line: "Your product is style, then style and colour, then style, colour and size, with a PLM behind it and a cost structure that changes every season. No generic platform models that shape.",
    },
    {
      title: "Grocery and quick commerce operator",
      line: "Dark stores or store picked delivery, where out of stock handling and substitution logic decide your app rating more than any screen does.",
    },
    {
      title: "B2B wholesaler or brand owner",
      line: "Reps, contract price lists, quantity breaks, EDI and punchout sessions, and a stock figure that is really two numbers and a date.",
    },
  ],
};

export const subVerticals = {
  title: "Find your operation",
  description:
    "Six operations wearing the same word. What breaks is different, so what we build is different. Each operation below breaks differently, and they are: Multi store omnichannel, D2C brand, Marketplace seller, B2B wholesale and distribution, Grocery, perishables and quick commerce and Multi vendor marketplace operator.",
  items: [
    {
      title: "Multi store omnichannel",
      breaks:
        "Phantom inventory ruins click and collect pick success. Orders route to a store that is short staffed or already closing. Price changes reach the web before the POS, so the shelf label and the till disagree. Associates get blamed for cancellations the routing engine caused.",
      build:
        "Distributed order routing with sourcing rules you can read, ATP with per node safety buffers, a store fulfilment app for pick, pack and handoff on a handheld, cycle count and RFID tooling, and endless aisle.",
    },
    {
      title: "D2C brand",
      breaks:
        "Slow largest contentful paint and forced account creation take a bite out of checkout conversion. There is no swap, skip or pause, so subscribers cancel instead of pausing. Failed cards are never retried. The 3PL knows the stock is gone and the product page does not.",
      build:
        "Headless or platform hosted storefront, subscription billing with dunning and pre billing notices, server side conversion events, CDP and lifecycle flows, 3PL API sync, and a returns portal customers can use without emailing anyone.",
    },
    {
      title: "Marketplace seller",
      breaks:
        "Repricers race each other to zero margin. Listing suppressions and broken variation families go unnoticed for days. Aged inventory quietly accrues storage fees. Reimbursements go unclaimed. Channel stock double sells against your own site.",
      build:
        "Channel inventory allocation, rules based repricing with margin floors, a PIM with per channel attribute mapping, reimbursement audit tooling, and connectors to Amazon SP-API and regional channels.",
    },
    {
      title: "B2B wholesale and distribution",
      breaks:
        "Customer specific pricing and freight rules that generic catalogue logic cannot express. EDI 850, 855, 856 and 810 re-keyed by hand. Punchout sessions failing silently and losing the cart. Stock shown as a number when the truth is twelve now and four hundred on a purchase order arriving on the eighteenth.",
      build:
        "Account hierarchies and contract pricing, quote and RFQ workflow, EDI and EDIFACT middleware, cXML and OCI punchout endpoints, an ERP authoritative pricing service, and credit and terms integration.",
    },
    {
      title: "Grocery, perishables and quick commerce",
      breaks:
        "Substitution logic offering absurd swaps. Weight variable items charged on an estimate and then adjusted at capture, which surprises everybody. Pickers guessing locations from slotting data that went stale a month ago. Delivery slots oversold against actual picker headcount.",
      build:
        "A batch picking app with scan and voice, substitution rules that remember customer preferences, slot capacity and dispatch, authorise then capture for weight variable pricing, and FEFO with expiry tracking.",
    },
    {
      title: "Multi vendor marketplace operator",
      breaks:
        "Payouts running in spreadsheets. Funds held in a way that turns into a money transmission problem. Duplicate SKUs fragmenting search results. No automated risk gate on new sellers. No bulk upload, so supply never scales past the sellers you personally onboarded.",
      build:
        "A vendor portal with CSV and API ingestion, catalogue matching with a moderation queue, split settlement through a licensed platform provider, a ledger with daily reconciliation, and seller scorecards.",
    },
  ],
};

export const systems = {
  title: "Systems we connect to, and the arithmetic underneath",
  description:
    "A retail build is mostly an integration project wearing a product costume. Here is the estate we expect to meet, and the inventory mathematics that decides whether any of it holds at peak. The groups are: Commerce platforms, Order, inventory and warehouse, POS and store systems, Product data, search and content, Payments and schemes and Channels, carriers and after sales.",
  groups: [
    {
      group: "Commerce platforms",
      body: "Salesforce Commerce Cloud, Adobe Commerce 2.4.7 to 2.4.9, SAP Commerce Cloud, commercetools, Shopify Plus, VTEX, Medusa, Saleor, Odoo, WooCommerce, and in Saudi Arabia, Salla and Zid.",
    },
    {
      group: "Order, inventory and warehouse",
      body: "Manhattan Active Omni, Fluent Commerce, IBM Sterling OMS, Blue Yonder, Kibo, Deposco, Cin7, Linnworks. Across India: Unicommerce, Increff, Vinculum, Ginesys, EasyEcom, ClickPost and Shiprocket.",
    },
    {
      group: "POS and store systems",
      body: "LS Central on Dynamics 365 Business Central, Cegid Retail, Oracle Xstore, Oracle MICROS, Aptos, Shopify POS, Lightspeed, Foodics, Rewaa, Ginesys POS, GoFrugal, TallyPrime.",
    },
    {
      group: "Product data, search and content",
      body: "Akeneo, Pimcore, Salsify, inriver, Plytix, Stibo STEP. Bynder and Cloudinary for assets. Algolia, Constructor, Bloomreach, Elasticsearch and OpenSearch, Typesense for search. Contentful, Sanity, Storyblok, Strapi and Contentstack for content.",
    },
    {
      group: "Payments and schemes",
      body: "Network International, Amazon Payment Services, Checkout.com, Tap Payments, PayTabs, HyperPay, Moyasar, Geidea, MyFatoorah, Thawani, Amwal, Razorpay, PayU, Cashfree, Juspay. Schemes that decide your checkout shape: mada, KNET, BENEFIT, Jaywan, UPI and UPI AutoPay, Apple Pay. Buy now pay later through Tabby and Tamara.",
    },
    {
      group: "Channels, carriers and after sales",
      body: "noon, Namshi, Amazon.ae and Amazon.sa, Ounass, Talabat, Amazon.in, Flipkart, Myntra, Ajio and Meesho. Aramex, SMSA, Naqel, Barq, iMile, Shipa and Asyad Express. Talon.One, Capillary, Loop Returns, Narvar and AfterShip.",
    },
  ],
  distinction: {
    title: "The distinction that saves projects",
    body: "On hand is not availability, and the system that displays stock is never the system that owns it. Every retail programme that oversold at peak made the same choice somewhere: it published a warehouse quantity as if it were a promise. Availability is a computed number with a formula, a scope and an owner. Write all three down before anyone opens a design file.",
  },
  pairs: [
    {
      pair: "The ATP formula, written down",
      body: "Availability to promise is computed per node and per channel: on hand minus reserved minus safety buffer minus allocated out. Inbound purchase order quantity is added only inside a stated promise window, and only where backorder is permitted. The safety buffer is per channel and per node, never global, because a marketplace cancellation does not carry the same penalty as one on your own site. If nobody has written that line down and agreed who owns each term, you do not have an inventory design. You have a number on a page.",
    },
    {
      pair: "The reservation lifecycle",
      body: "Add to cart takes a soft reserve with a time to live. Payment authorisation promotes it to a hard reserve, and an authorisation that succeeds after the TTL expired needs an explicit compensating action rather than an exception in a log. Abandonment releases the reserve, and that release must be idempotent because the sweeper and the user can both fire it. Fulfilment converts the hard reserve to allocated out and then to a decrement, where double decrement on webhook redelivery is the single most common oversell cause. Cancellation restocks to sellable or to quarantine, and restocking a damaged return to sellable is a finance problem before it is an inventory one.",
    },
    {
      pair: "The event rules",
      body: "Webhooks arrive out of order and more than once. That is normal, not a vendor defect. Every inventory mutation carries an idempotency key and a monotonic version, and the write is a compare and set against that version rather than a blind overwrite. Last write wins is correct for absolute snapshots and wrong for deltas, and mixing the two in one handler is how a stock figure drifts for six weeks before anyone notices. Verify signatures with HMAC-SHA256 and a replay window, and put failures in a dead letter queue with a replay procedure an on call engineer can follow at two in the morning.",
    },
    {
      pair: "The variant grid",
      body: "Style carries marketing copy, imagery and season code. Style and colour carries colourway assets and the per channel listing. Style, colour and size carries GTIN, on hand, country of origin, fibre composition and care instructions. Most platforms model two of those three levels well. Size plus colour plus fit plus length is four options and it does not fit a three option ceiling. Wholesale also ships ratio packs, a prepack such as 2-2-2-1 across S, M, L and XL, which is a different unit of measure to retail eaches and an expensive bug when mapped as though it were one.",
    },
    {
      pair: "Units, money and identity",
      body: "OMR has three decimal places, and any integer minor unit assumption built around two decimals corrupts totals, refunds and reconciliation quietly. VAT inclusive display pricing is mandatory in Saudi Arabia and the UAE while storage is usually exclusive, so rounding has to be defined at exactly one layer and enforced there. Gulf addresses often have no postcode, phone number is identity in this region rather than email, and Arabic bidirectional text breaks PDF rendering and thermal label output at print time rather than in your test suite.",
    },
    {
      pair: "OMS against ERP",
      body: "The ERP owns cost, price master and financial stock. The OMS owns the promise: ATP by node and channel, routing, splits and allocation. Confusing the two produces an ERP customisation project nobody scoped or budgeted.",
    },
    {
      pair: "PIM against ERP",
      body: "PIM holds style level marketing content, Arabic attributes, imagery and per channel mapping. ERP holds the size and colour grid and the cost versions per season. Apparel programmes break when one of them is asked to be both.",
    },
    {
      pair: "Gateway against orchestration",
      body: "Tap, PayTabs, HyperPay and Razorpay are gateways. Orchestration sits above several gateways for routing, retries and tokenised one click. You need orchestration once mada, KNET, BENEFIT and Jaywan routing plus buy now pay later all have to coexist in one checkout.",
    },
  ],
};

export const compliance = {
  title: "Standards and compliance",
  description:
    "Five standards carry almost every buyer and partner questionnaire, so they get a row each. Everything after them is jurisdiction, which decides the build but only in the markets you actually sell into, so it sits in one row and the FAQ goes deeper on the ones that change your order flow. We hold none of these ourselves. We build to the controls and hand you the evidence.",
  rows: [
    {
      item: "ISO/IEC 27001:2022",
      detail:
        "The information security standard, 93 Annex A controls in 4 themes, and the one Gulf and Indian buyers weight most heavily. The transition from the 2013 version closed 31 October 2025, so a 2013 certificate is now void, which is worth checking on your platform and 3PL vendors as well as on yourself.",
    },
    {
      item: "SOC 1 and SOC 2",
      detail:
        "SOC 2 covers security and availability and is the default ask from US partners and marketplaces. SOC 1 covers controls feeding your customers' financial reporting, which is the one that appears once you are handling settlement, marketplace payouts or consignment stock on someone else's books.",
    },
    {
      item: "GDPR and UK GDPR",
      detail:
        "Applies on the basis of your EU and UK shoppers, not where you are incorporated. Article 30 records, Article 33 breach notice inside 72 hours, data subject requests inside a month, standard contractual clauses for transfers out, and consent handling that survives contact with a marketing stack running server-side events.",
    },
    {
      item: "PCI DSS v4.0.1",
      detail:
        "Future dated requirements have been mandatory since 31 March 2025. Requirement 6.4.3 script inventory, authorisation and integrity checks and requirement 11.6.1 tamper detection both reach the payment page even where you use provider hosted fields, so SAQ A reduces your scope rather than removing it.",
    },
    {
      item: "European Accessibility Act",
      detail:
        "Applying since 28 June 2025 to e-commerce serving EU consumers regardless of where you are based. Conformity is presumed through EN 301 549, which incorporates WCAG 2.1 AA, and it reaches checkout and account pages rather than stopping at the marketing site.",
    },
    {
      item: "Regional rules, by where you sell",
      detail:
        "Oman: PDPL with the transition closed 5 February 2026, Fawtara e-invoicing on Peppol PINT OM where B2C invoices carry a QR and must reach the provider within 24 hours, and a MoCIIP licence with Maroof verification rendered in your footer. Saudi Arabia: PDPL under SDAIA with no adequacy list, and ZATCA Fatoora Phase 2, where Wave 25 drops the threshold to SAR 187,500 with integration by 1 February 2027. UAE: PINT AE through an accredited service provider, appointed by 30 October 2026 above AED 50m. GCC-wide: Arabic labelling and G-Mark, which makes Arabic a first class PIM field. India: DPDP, RBI authentication from 1 April 2026, GST e-invoicing, the Legal Metrology country of origin filter from 1 July 2026, and the CCPA dark patterns list. The FAQ takes the ones that change the order flow.",
    },
  ],
};

export const ourWork = {
  title: "Our work in this sector",
  description:
    "Five builds and one client statement. We would rather describe real things than show a wall of logos.",
  items: [
    {
      client: "Al Amri Express",
      href: "/case-studies/grocery-delivery-oman-al-amri-express",
      place: "Oman",
      line: "Grocery and daily essentials delivery across iOS and Android. Product search and filtering, one tap reordering, and live order tracking over websockets.",
      stack: ["React Native", "Laravel", "Elasticsearch", "MySQL", "AWS"],
    },
    {
      client: "Al Amri Express Partner",
      place: "Oman",
      line: "The operations app behind the storefront. Role separated access across admin, packer and delivery, with picking, packing and ready for dispatch states, so the floor sees a work queue rather than an admin panel.",
      stack: ["React Native", "Laravel", "MySQL", "AWS", "Push Notifications"],
    },
    {
      client: "G4Girl",
      href: "/case-studies/fashion-ecommerce-india-g4girl",
      place: "India",
      line: "Women's fashion e-commerce. The founder's published review on Clutch reports a fivefold sales increase, less manual work in daily operations, and delivery inside four months. That is the client's account of their own business, taken from their published review, not a Zyneto performance figure.",
      stack: ["WordPress", "PHP", "MySQL", "AWS", "Sentry"],
    },
    {
      client: "Stylebank",
      href: "/case-studies/multi-tenant-apparel-platform-stylebank",
      place: "India",
      line: "A B2B apparel catalogue and replenishment platform, integrating EasyEcom so that a single catalogue and stock position reaches Myntra, Nykaa, Flipkart, Amazon Vendor Central Dropship and Ajio.",
      stack: ["Django", "MySQL", "Redis", "Celery", "BigQuery", "OpenRouter"],
    },
    {
      client: "DoraDori",
      href: "/case-studies/garment-erp-doradori",
      place: "India",
      line: "A garment ERP built on FastAPI and PostgreSQL, integrated with Zoho and the client's internal CRM, publishing the item summary and fabric valuation reads that the apparel catalogue consumes.",
      stack: ["FastAPI", "Python", "PostgreSQL", "Zoho", "Internal CRM"],
    },
    {
      client: "Cheersagar",
      href: "/case-studies/garment-accounting-reporting-cheersagar",
      place: "India",
      line: "Garment accounting and reporting, with Zoho on one side and the client's internal CRM on the other, covering job work movement, GST and stock valuation.",
      stack: ["FastAPI", "Python", "PostgreSQL", "Zoho", "Internal CRM"],
    },
  ],
};

export const whatGoesWrong = {
  title: "What goes wrong",
  description:
    "Ten failure modes we have hit or inherited. Naming them is more useful than a list of reasons to choose us. The opening three are: Inventory is never defined, Go live scheduled into peak and Promotions treated as configuration. Each is written plainly enough that you can check whether yours is already happening.",
  items: [
    {
      title: "Inventory is never defined",
      line: "One availability number ships and ATP was never specified. Write the formula into the spec, set per channel and per node buffers, give reservations a TTL and a compensating action, and publish oversell rate as a measured service level objective.",
    },
    {
      title: "Go live scheduled into peak",
      line: "A three week slip lands on Black Friday or the festive season, and there is no way to move either. Launch in the trough and put a mid October to mid January freeze in the contract.",
    },
    {
      title: "Promotions treated as configuration",
      line: "Stacking, exclusions, buy one get one, tiered thresholds, gift cards and loyalty burn interact combinatorially, and finance finds the margin leak in month three. Run a promotions matrix workshop, then put 80 to 120 golden basket scenarios in CI.",
    },
    {
      title: "Product data not ready",
      line: "Orphaned variants, missing attributes and no image standard, all discovered during user acceptance testing. Gate the build on a data readiness report, run enrichment in parallel, and name a taxonomy owner on the client side.",
    },
    {
      title: "SEO equity destroyed at replatform",
      line: "URL patterns change, redirects are partial, structured data quietly disappears. Build the redirect map from live server logs, check canonical, schema and pagination parity, and make Search Console monitoring a named workstream with an owner.",
    },
    {
      title: "Big bang cutover with no rollback",
      line: "The whole estate moves on one night and there is no way back if the opening stock is wrong. Use the strangler pattern, run two weeks of read only dual run on inventory and orders, cut over in cohorts by region or store, and write the reverse cutover with named trigger conditions.",
    },
    {
      title: "The ERP is the real project and it is out of scope",
      line: "The storefront is the visible half; the ERP work underneath it is the half nobody budgeted. Write contract first integration specs, put idempotency keys and retry queues on every mutation, and name the ERP owner in the RACI before kick off rather than after the first failure.",
    },
    {
      title: "Store and picker experience designed at a desk",
      line: "Then used one handed on a rugged scanner, with gloves, in a chiller, on bad Wi-Fi. Shadow a shift before wireframing, test on the actual device, and build offline first with queued sync.",
    },
    {
      title: "Returns scoped as phase two",
      line: "Refund timing, disposition and return fraud are financial controls, not a nice to have screen. Model RMA, disposition, restock to sellable and refund triggers in phase one.",
    },
    {
      title: "Payments, tax and compliance underestimated",
      line: "3DS, local wallets, partial capture, capture on ship, marketplace VAT and PCI scope. Get a payment and tax matrix per market signed by finance, use provider hosted fields so you stay in SAQ A, and run a tax engine instead of hand coded rate tables.",
    },
  ],
};

export const buildOrBuy = {
  title: "Build, buy, or buy the core and build the edge",
  description:
    "The honest answer is usually the third one, and sometimes the answer is that you should not hire us for this part. The calls are: Payment acceptance and card data, E-invoicing transmission, UAE and Oman, Tax calculation across markets, Commerce engine and checkout, Search and merchandising, ATP, order routing and allocation and Store and dark store picking apps.",
  rows: [
    {
      option: "Payment acceptance and card data",
      best: "Buy",
      verdict:
        "Provider hosted fields keep you in SAQ A and keep the card number out of your database entirely.",
    },
    {
      option: "E-invoicing transmission, UAE and Oman",
      best: "Buy",
      verdict:
        "Only an accredited Service Provider may transmit. We integrate to one. We do not transmit.",
    },
    {
      option: "Tax calculation across markets",
      best: "Buy",
      verdict:
        "Rate tables age badly and hand coded rates fail audits in a way that is expensive to unwind.",
    },
    {
      option: "Commerce engine and checkout",
      best: "Buy the core",
      verdict:
        "Chosen by market and catalogue shape, whether that is a hosted platform, a composable engine or a regional Arabic first option.",
    },
    {
      option: "Search and merchandising",
      best: "Buy the core, build the edge",
      verdict:
        "A search engine underneath with your ranking and filter logic on top. Deep catalogue filtering is exactly the shape of the edge.",
    },
    {
      option: "ATP, order routing and allocation",
      best: "Build",
      verdict:
        "This is where your margin and your cancel rate live, and no vendor default matches your node economics.",
    },
    {
      option: "Store and dark store picking apps",
      best: "Build",
      verdict: "The device, the glove, the chiller and the network are yours specifically.",
    },
    {
      option: "Product information management",
      best: "Buy the core, build the edge",
      verdict: "Buy the PIM and build only the syndication mapping to your channels.",
    },
    {
      option: "Loyalty and promotions",
      best: "Buy the core, build the edge",
      verdict: "A rules engine with a custom layer and the golden basket regression suite.",
    },
    {
      option: "Marketplace split payouts",
      best: "Buy",
      verdict:
        "A licensed platform provider handles settlement. You keep the ledger and the reconciliation.",
    },
  ],
};

export const cost = {
  title: "What retail operations software development costs, with the arithmetic shown",
  description:
    "Every competitor publishes a total with no hours behind it. Here is the rate, the hours and the multiplication, so you can argue with any line of it. Priced against: Number and quality of integrations and SKU and variant cardinality plus data readiness.",
  drivers: [
    {
      driver: "Number and quality of integrations",
      hours: "Highest impact",
      note: "Integration count multiplies QA cost, not just build cost, because every new system adds contract tests, failure paths and a reconciliation report.",
    },
    { driver: "Pricing and promotion complexity", hours: "High" },
    { driver: "Fulfilment nodes and channels", hours: "High" },
    {
      driver: "SKU and variant cardinality plus data readiness",
      hours: "High",
    },
    { driver: "Markets, languages and tax regimes", hours: "Medium" },
    { driver: "Peak concurrency", hours: "Medium" },
    { driver: "Real time against batch inventory truth", hours: "Medium" },
    { driver: "Legacy data migration", hours: "Variable" },
  ],
  modules: [
    { module: "Discovery and integration contracts", hours: "80 to 180" },
    { module: "Catalogue, PIM, search and merchandising", hours: "220 to 520" },
    { module: "Storefront, checkout, payments and tax", hours: "160 to 360" },
    { module: "Subscriptions and dunning", hours: "120 to 300" },
    { module: "Order management: ATP, routing and allocation", hours: "250 to 600" },
    { module: "ERP, POS and inventory integration", hours: "330 to 870" },
    { module: "Picking, dark store app and returns", hours: "290 to 680" },
    { module: "B2B, marketplace and the customer mobile app", hours: "800 to 1,880" },
  ],
  math: {
    title: "Three worked examples",
    points: [
      "On top of whichever rows apply, every build carries the same cross-cutting lines: admin, CMS, reporting, consent and analytics 90 to 200, accounts, loyalty and wallet 80 to 200, data migration 60 to 260, peak load hardening 60 to 160, DevOps and CI/CD 60 to 160, and QA, UAT and hypercare at 20 to 25 percent of build.",
      "D2C launch or single channel B2B portal: 700 to 1,400 hours. At a $60 to $70 blend that is roughly $42,000 to $98,000.",
      "Mid market omnichannel covering web, POS, one ERP, click and collect and returns: 1,800 to 3,500 hours. At the same blend that is roughly $108,000 to $245,000.",
      "Quick commerce add on: the picking and dark store app at 200 to 460 hours plus slot capacity and dispatch, added to a storefront you already own rather than replacing it. This is the cheapest useful project in this sector and the one most often skipped.",
      "These are ranges derived from module hours, not a quote. Discovery converts one of them into a fixed price.",
    ],
  },
};

export const costHighlights = [
  {
    label: "Phase one range",
    value: "$65,000 to $122,000",
    note: "Lean slice at a $60 blend, full slice at $70.",
  },
  {
    label: "Typical timeline",
    value: "10 to 16 weeks",
    note: "To a launchable slice, scheduled outside the freeze.",
  },
  {
    label: "Useful hours",
    value: "1,080 to 1,745",
    note: "Build, plus QA at 20 to 25 percent, plus DevOps.",
  },
];

export const engagement = {
  title: "Engagement models",
  description:
    "Four models for retail operations software development, each with the downside stated in the same breath. In order of how settled the scope is, they are: Fixed scope phase one, Dedicated squad, monthly, Integration only engagement and Support, hypercare and peak standby.",
  items: [
    {
      title: "Fixed scope phase one",
      good: "You get a fixed price and a fixed date, both derived from the discovery artifacts rather than from a guess.",
      bad: "Everything outside the signed spec becomes a change request, so the spec has to be frozen and somebody on your side has to own that freeze and defend it.",
    },
    {
      title: "Dedicated squad, monthly",
      good: "A standing team, re-prioritised each sprint. Best where the roadmap is genuinely unknown and will be discovered by shipping.",
      bad: "You carry the utilisation risk, and it only works if your product owner gives it real hours every week rather than a status call.",
    },
    {
      title: "Integration only engagement",
      good: "We build and own the middleware between ERP, OMS, POS and channels while your existing team keeps the storefront.",
      bad: "We do not control the storefront roadmap, so the blame boundary has to be written down before anything breaks rather than negotiated after.",
    },
    {
      title: "Support, hypercare and peak standby",
      good: "Named response targets through the freeze window and the peak season, with a rota you can see.",
      bad: "This is not a discovery vehicle, and during the freeze the honest answer to most feature requests is January.",
    },
  ],
  recommendation:
    "What we usually suggest: a paid, fixed price discovery credited against phase one, then fixed scope for the first slice and a dedicated squad after go live.",
};

export const delivery = {
  title: "How we deliver retail operations software development",
  description:
    "Five phases, each named by the artifact it produces. A generic waterfall diagram would tell you nothing. In order, they are: Integration contract pack, Data readiness report, Vertical slice in production, Cutover runbook and Peak readiness pack. Each is named by the artifact it hands you, so you can ask to see one.",
  items: [
    {
      phase: "Integration contract pack",
      line: "Request and response contracts per system, the ATP formula agreed in writing by the people who own each term, idempotency and retry rules, and a RACI that names the ERP owner. 80 to 180 hours.",
    },
    {
      phase: "Data readiness report",
      line: "A variant grid audit, attribute completeness by channel, image standards, country of origin and Arabic attribute coverage, and a named taxonomy owner. Build does not start until this passes, which is occasionally an unpopular sentence and always the right one.",
    },
    {
      phase: "Vertical slice in production",
      line: "One complete order path live end to end, running read only dual run against the existing system for two weeks, on one cohort or one store.",
    },
    {
      phase: "Cutover runbook",
      line: "A redirect map built from live server logs rather than from a sitemap, a canonical and schema parity checklist, the cohort schedule, and a documented reverse cutover with the decision owner and trigger conditions named.",
    },
    {
      phase: "Peak readiness pack",
      line: "Load test report at a stated multiple of business as usual peak, the oversell SLO dashboard, the promotions regression suite result, the freeze calendar and the hypercare rota.",
    },
  ],
};

export const nonFunctional = {
  title: "The technical buyer's checklist",
  description:
    "Grade any vendor quoting for retail operations software development with this, including us. They are grouped as: Correctness, Performance, Integration hygiene, Auth, secrets and the payment page, Privacy and residency, Accessibility, Operability, Exit and Certifications, stated plainly. Copy any line straight into your own requirements document.",
  groups: [
    {
      group: "Correctness",
      body: "An oversell rate service level objective with a numeric target. Stated ATP recompute latency. A daily reconciliation job comparing orders across commerce, ERP and payment provider, with an exception report somebody actually reads.",
    },
    {
      group: "Performance",
      body: "A p95 checkout latency budget. A largest contentful paint budget on the product page. Load tested at a stated multiple of peak. Defined cache and queue behaviour under a flash sale.",
    },
    {
      group: "Integration hygiene",
      body: "Idempotency keys on every mutation. HMAC-SHA256 verification with a replay window. A dead letter queue with a replay runbook. Contract tests running in CI, not in a document.",
    },
    {
      group: "Auth, secrets and the payment page",
      body: "OAuth 2.0 with PKCE for platform apps, client credentials for server to server, mTLS for bank and ZATCA integrations, JWKS rotation, and no secrets in the repository. On checkout specifically, PCI DSS v4.0.1 requirement 6.4.3 script inventory and integrity checks and requirement 11.6.1 tamper detection, plus content security policy and subresource integrity.",
    },
    {
      group: "Privacy and residency",
      body: "Consent log versioning, a DSAR workflow, a 72 hour breach notification path, India payment data localisation, and a documented cross border transfer position for Oman.",
    },
    {
      group: "Accessibility",
      body: "EN 301 549 and WCAG 2.1 AA if you sell into the EU, plus a published accessibility statement.",
    },
    {
      group: "Operability",
      body: "Sentry or equivalent, correlation IDs that survive across systems, structured logs, blue green or canary deploys, feature flags, and a rollback procedure someone has rehearsed.",
    },
    {
      group: "Exit",
      body: "Code in your repository, infrastructure as code, credentials in your accounts. Changing supplier should be a commercial decision, not a technical hostage situation.",
    },
    {
      group: "Certifications, stated plainly",
      body: "Zyneto holds no certifications. We are not ISO 27001 certified, not SOC 2 attested, not a PCI DSS assessed entity, and not an accredited e-invoicing Service Provider anywhere. We build to the controls, document them, and hand you the evidence for your own audit. Ask any vendor who implies otherwise to show you the certificate and its expiry date.",
    },
  ],
};

export const faqs = [
  {
    question: "We are a Saudi retailer. Are we already in ZATCA Phase 2 scope?",
    answer:
      "Wave 25, announced 24 July 2026, drops the threshold to SAR 187,500 of VAT subject revenue in any year from 2022 to 2025, with integration required by 1 February 2027. Phase 2 needs cryptographic stamping, a UUID, hash chaining and API clearance or reporting. A compliant looking PDF is not Phase 2.",
  },
  {
    question: "What does Oman's Fawtara require from our commerce and POS stack?",
    answer:
      "Peppol five corner, UBL 2.1 XML plus a Tax Data Document, routed through an accredited Service Provider. Phase 1 went live August 2026, Phase 2 February 2027, Phase 3 August 2027, B2G August 2028. B2C invoices carry a QR code and must reach the Service Provider within 24 hours, which ends nightly batch invoicing as a practice.",
  },
  {
    question: "Can a three option platform handle apparel with size, colour, fit and length?",
    answer:
      "Not in one product. A three option ceiling means four dimensions requires either splitting the product or modelling the grid outside the platform. Variant limits and API generation also matter: older REST admin integrations degrade well before the documented variant ceiling, so check the API version your apps are on, not just the platform tier.",
  },
  {
    question: "We are on Adobe Commerce 2.4.6. Do we have to move?",
    answer:
      "Less urgently than the headline date suggests, and the answer differs by licence. 2.4.6 hit end of support on 11 August 2026, which is a hard stop for Magento Open Source. Paid Adobe Commerce carries a further year of quality and security patches on 2.4.6 at no extra cost, so you have room to plan rather than to scramble. 2.4.7 has regular support to 31 May 2027 and extended support to 31 May 2028. The upgrade that actually needs thought is Adobe Commerce as a Cloud Service, which removes filesystem access, so module based customisations do not port across as they are.",
  },
  {
    question: "Do we need a local platform to sell in Saudi Arabia?",
    answer:
      "Not required. Salla and Zid are Arabic first and ZATCA ready, and both expose partner APIs using OAuth 2.0 with PKCE, which is why they are common choices there. Assume a local gateway is still required whichever platform you pick, because scheme routing rather than platform choice decides your checkout shape.",
  },
  {
    question: "What changes for our Indian checkout in 2026?",
    answer:
      "The RBI Authentication Directions, issued 25 September 2025, take effect 1 April 2026: at least two factors with one dynamic for card not present, plus risk based authentication. Cross border card not present mechanisms follow by 1 October 2026. Card on file tokenisation has barred merchants from storing PAN, CVV and expiry since 1 October 2022.",
  },
  {
    question: "Is a country of origin line in the product description enough in India?",
    answer:
      "No. Rule 6(10A) of the Legal Metrology (Packaged Commodities) Amendment Rules 2026, notified 13 February 2026 and in force from 1 July 2026, requires a searchable and sortable filter for imported products. That makes origin a structured, indexed attribute wired into your search facets, not a sentence in the copy.",
  },
  {
    question: "Can we keep our countdown timer and the pre-ticked insurance add on?",
    answer:
      "The CCPA dark patterns guidelines of 2023 name thirteen patterns, including false urgency, basket sneaking, confirm shaming and drip pricing. The advisory of 5 June 2025 asked platforms to self audit within three months and publish a declaration. Read your checkout against that list before someone else does.",
  },
  {
    question: "We use hosted payment fields, so is PCI our provider's problem?",
    answer:
      "Only partly. Under PCI DSS v4.0.1, all future dated requirements have been mandatory since 31 March 2025, and requirements 6.4.3 and 11.6.1 apply to the payment page even for SAQ A merchants. You still owe a script inventory and client side tamper detection.",
  },
  {
    question: "Is Zyneto ISO 27001 or SOC 2 certified?",
    answer:
      "No, and we will not imply otherwise. What we do instead is build to the controls and hand you an evidence pack your own auditor can sample, which is the part that carries over whichever certification you eventually pursue. One thing worth knowing when you assess other vendors: the ISO/IEC 27001 transition from the 2013 standard to the 2022 standard ended on 31 October 2025, so a 2013 certificate is now void.",
  },
  {
    question:
      "What does a phase one cost, how many hours is that, and how long does it take?",
    answer:
      "A lean slice is 850 build hours plus 170 of QA at 20 percent plus 60 of DevOps, so 1,080 hours, which at a $60 blend is about $65,000. A full slice is 1,300 build plus 325 QA at 25 percent plus 120 DevOps, so 1,745 hours, about $122,000 at $70. Calendar is 10 to 16 weeks to a launchable slice. We will give you a band on the first call and a fixed price only after discovery, because the integration inventory moves the number more than the feature list does.",
  },
  {
    question: "Who owns the code, the data and the accounts?",
    answer:
      "You do, from day one rather than at handover. Code sits in your repository, infrastructure is defined as code, and cloud, gateway and provider credentials are in your accounts and your name. Two relationships stay directly yours because they cannot be ours: we are not an accredited e-invoicing Service Provider in the UAE, Oman or Saudi Arabia, and we are not a payment institution. Replacing us should cost you a notice period, never a rebuild.",
  },
];

export const nextSteps = {
  title: "What happens next",
  description:
    "You get a reply within one business day, from someone who has read what you sent rather than a scheduling link.",
  items: [
    {
      step: "A 30 minute technical call",
      line: "You describe the estate. We tell you which of the ten failure modes above you are currently exposed to, and which of them we would fix first.",
    },
    {
      step: "The integration inventory",
      line: "A short questionnaire listing every system that owns price, stock, customer or invoice, and the name of the person who owns each one inside your business.",
    },
    {
      step: "Paid discovery",
      line: "Two to four weeks. Output is the integration contract pack, the data readiness report and a fixed phase one price. Credited against phase one if you proceed.",
    },
    {
      step: "Phase one starts",
      line: "Scheduled deliberately to avoid the mid October to mid January freeze.",
    },
  ],
};

export const hubLinks = {
  title: "Go deeper",
  groups: [
    {
      group: "Build and integrate",
      links: [
        {
          label: "Web development",
          href: "/services/web-development",
          note: "Storefront, checkout and catalogue",
        },
        {
          label: "Mobile app development",
          href: "/services/mobile-app-development",
          note: "Customer apps, picker apps and store handhelds",
        },
        {
          label: "POS software development",
          href: "/services/pos-software-development",
          note: "The till, and the stock it moves",
        },
      ],
    },
    {
      group: "Data and decisions",
      links: [
        {
          label: "Database development",
          href: "/services/database-development",
          note: "The stores and pipelines behind the reporting",
        },
        {
          label: "Predictive analytics",
          href: "/services/predictive-analytics-development",
          note: "Demand, replenishment and markdown signals",
        },
        {
          label: "Artificial intelligence",
          href: "/services/artificial-intelligence",
          note: "Recommendations and search relevance",
        },
      ],
    },
    {
      group: "Other sectors",
      links: [
        {
          label: "Food service",
          href: "/industries/food-service-software-development",
          note: "The same order model, cooked to order",
        },
        {
          label: "Logistics and distribution",
          href: "/industries/logistics-software-development",
          note: "Replenishment and the stock number behind it",
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
    title: "Not sure whether your stock number is a promise or a guess?",
    description:
      "Send us the list of systems that own price, stock, customer and invoice. We will tell you where the oversell is coming from before you commit to anything.",
    ctaText: "Book a 30 minute technical call",
  },
  end: {
    title: "Start with the integration inventory, not the wireframes",
    description:
      "Paid discovery runs two to four weeks and produces the integration contract pack, the data readiness report and a fixed phase one price. It is credited against phase one if you proceed.",
    ctaText: "Book a 30 minute technical call",
    assurances: [
      "No fixed quote before discovery",
      "Reply within one business day",
      "$40 to $100 per hour, by role",
    ],
  },
};

export const relatedPosts = [
  "ai-agents-for-business",
  "classified-app-development-guide",
  "mobile-app-development-guide",
  "mobile-app-backend-development-things-to-consider",
  "how-much-does-ai-development-cost",
  "top-ai-use-cases-you-cant-ignore",
  "best-methods-to-scrape-page-information-and-add-it-to-excel",
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
      "Integration, analytics and app work that applies directly to retail and commerce operations.",
  },
};
