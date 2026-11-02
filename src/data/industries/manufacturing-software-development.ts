import type { IndustryPageData } from "./types";

export const heroSection = {
  eyebrow: "Industries · Apparel & manufacturing",
  title: "Manufacturing software development for ",
  titleHighlight: "apparel and garment makers",
  description:
    "Style, colour and size held as three levels rather than one item master. Cost sheets that survive the marker, job work that comes back reconciled, and fabric valued on a method you can defend. Built for garment makers and exporters in India, and for the buyers they ship to in the US, the EU and the Gulf.",
  features: [
    "DoraDori, garment ERP",
    "Cheersagar, garment books",
    "Three levels, not one SKU",
    "$40 to $100 per hour",
  ],
  scrollTarget: "#essence",
  ctaText: "Book a 30 minute technical call",
  bgImage: "/static/assets/industries/manufacturing-apparel-industries.webp",
};

export const seo = {
  primaryKeyword: "manufacturing software development",
  intent: "commercial",
  secondaryKeywords: [
    "apparel erp development",
    "garment costing software development",
  ],
  competingUrl: null,
} as const;

export const essence = {
  title: "The short version",
  description:
    "The commercial facts in one block, so you never have to hunt for them. Apparel ERP development and garment costing software development are the two we are asked for most, and costing is the one that decides the margin. Those tiles are: Typical integration set, Phase one timeline, Rate band and Phase one range, with the arithmetic.",
  tiles: [
    {
      label: "Typical integration set",
      value:
        "Accounting or ERP (Tally, Zoho Books, Focus, SAP Business One), a PLM or tech pack tool, CAD and marker software, the job worker's own paperwork, a GSP for GST and e-invoicing, and a channel or B2B portal if you also sell finished goods.",
    },
    {
      label: "Phase one timeline",
      value:
        "12 to 20 weeks to a slice the floor actually uses, because adoption is decided on the cutting table and the sewing line rather than in user acceptance testing.",
    },
    {
      label: "Rate band",
      value:
        "$40 to $100 per hour by role. Front end and reporting near the floor, costing logic, valuation and integration architecture near the ceiling. Mixed teams blend to $60 to $70.",
    },
    {
      label: "Phase one range, with the arithmetic",
      value:
        "Three level model 140 plus costing and BOM 260 plus cut order, marker and bundles 240 plus job work 220 plus fabric store 180 plus valuation and documents 180 plus reporting and integrations 180 equals 1,400 hours. At a $65 blend that is about $91,000, and $56,000 to $140,000 across the rate band.",
    },
    {
      label: "Stack we actually use",
      value:
        "Python with FastAPI and Django, PostgreSQL and MySQL, Redis and Celery, React and Next.js, BigQuery for reporting, OpenRouter where a model earns its place, and integrations to Zoho, Tally and an internal CRM.",
    },
    {
      label: "Our commitment",
      value:
        "No fixed price before discovery, and on apparel work that discovery is mostly an inventory of what the floor already does and in what units. Two things we are not: a GST Suvidha Provider, and an accredited e-invoicing service provider. Filing and transmission run through a licensed party in your name, and we integrate to both.",
    },
  ],
};

export const anchors = [
  { id: "who-this-is-for", label: "Is this us?" },
  { id: "sub-verticals", label: "What breaks in our operation?" },
  { id: "systems", label: "How does apparel actually model?" },
  { id: "compliance", label: "Which standards will we be asked for?" },
  { id: "our-work", label: "What have you built?" },
  { id: "what-goes-wrong", label: "What usually goes wrong?" },
  { id: "build-or-buy", label: "Build it or buy it?" },
  { id: "cost", label: "What does phase one cost?" },
];

export const operations = {
  title: "Where apparel systems earn their keep",
  description:
    "The stages a style moves through, and what we build at each one In sequence, the stages are: Style and specification, Costing and quotation, Order confirmation, Material and job work, Production and quality and Despatch and documents. Each one is a place a system either holds the fact or loses it.",
  stages: [
    "Style and specification",
    "Costing and quotation",
    "Order confirmation",
    "Material and job work",
    "Production and quality",
    "Despatch and documents",
  ],
  image: {
    src: "/static/assets/industries/manufacturing-apparel-operations-map.svg",
    alt: "Two band apparel map covering style, costing and order confirmation, then materials, production and export documents.",
  },
};

export const segments = {
  title: "Who this is for",
  description:
    "Six company shapes, and the one number each is usually missing. Not a fit: if you want a packaged garment ERP configured and rolled out, an implementation partner for that product will be faster and cheaper than we will, and we will say so on the first call.",
  items: [
    {
      title: "Export house on cost sheets",
      line: "Costing lives in spreadsheets per buyer, the marker never feeds back into it, and nobody can say after shipment whether the style made money or the order did.",
    },
    {
      title: "Domestic brand using job work",
      line: "Fabric goes out to a cutter, a stitcher and a finisher, comes back as pieces, and the difference between what left and what returned is argued rather than calculated.",
    },
    {
      title: "Vertically integrated manufacturer",
      line: "Knitting, dyeing, cutting and sewing under one roof, with each stage keeping its own units and its own spreadsheet, so shade and yield never reconcile end to end.",
    },
    {
      title: "Buying house or sourcing agent",
      line: "You carry the buyer's tech pack and the vendor's capacity, and you are the only party who can see both. None of it is in a system either side can read.",
    },
    {
      title: "Fabric or trims supplier",
      line: "Stock is rolls and shades, not pieces. Every downstream customer asks for availability in a unit you do not hold it in, and relaxation loss is discovered after issue.",
    },
    {
      title: "Brand bringing production in house",
      line: "You have run on vendors and now own a floor. The costing you inherited assumes a purchase price, not a standard allowed minute, and nothing tracks a bundle.",
    },
  ],
};

export const subVerticals = {
  title: "Find your operation",
  description:
    "Same trade, six different businesses. What breaks is different, so what we build is different. This page covers: Cut, make and trim, Fabric and yarn, Job work networks, Costing and merchandising, Export documentation and Finished goods and returns. Find yours before reading the cost section.",
  items: [
    {
      title: "Cut, make and trim",
      breaks:
        "The order is booked at style level and cut at variant level, so the cut order plan is rebuilt by hand from a size ratio somebody typed twice. Bundle tickets are printed but never closed, so percentage complete at a stage is a guess. Rejects are logged against the order rather than the operation, which means nobody can tell you which machine or which operator to look at.",
      build:
        "Cut order planning from the size curve, marker and lay records tied to the cut order, bundle identity carried from cutting through to finishing, operation level reject capture, and standard allowed minutes against actual line output so efficiency is measured rather than asserted.",
    },
    {
      title: "Fabric and yarn",
      breaks:
        "Stock is held in rolls with a shade and a dyelot, and issued in metres against a plan written in pieces. Relaxation loss shows up after the fabric is already cut. Remnants accumulate in a corner and in nobody's ledger, and the valuation method changes depending on who ran the report.",
      build:
        "Roll level stock with dyelot and shade identity, relaxation recorded as its own step rather than absorbed into wastage, a remnant register that can be issued from, and one valuation method stated in the specification and enforced in code rather than chosen per report.",
    },
    {
      title: "Job work networks",
      breaks:
        "Material leaves on a challan and comes back short, and the shortfall is settled by argument because the expected return was never computed. Nobody is tracking the statutory clock on goods held outside, which under GST runs one year for inputs and three for capital goods before the dispatch becomes a deemed supply. Rates differ per vendor and per operation and live in a WhatsApp thread.",
      build:
        "Challan out and in with expected return computed from the cut order BOM rather than agreed after the fact, an ageing view on goods at the job worker, a rate card per vendor and operation, and the periodic job work return produced from the same movement records instead of assembled at quarter end.",
    },
    {
      title: "Costing and merchandising",
      breaks:
        "The cost sheet is built once at quotation and never revisited, so the post shipment number is a different document produced by a different person. Fabric is costed per garment when consumption is size dependent. Nobody separates a yield problem from a marker problem from a labour problem.",
      build:
        "A cost sheet versioned against the tech pack, consumption computed per size from the marker rather than averaged, and the five variance lines reported separately so each one lands on the person who can fix it.",
    },
    {
      title: "Export documentation",
      breaks:
        "Invoice, packing list and the buyer's own formats are typed three times from the same shipment, and the packing list disagrees with what physically went into the carton because the ratio pack was assembled after the document was printed.",
      build:
        "One shipment record producing every document, carton level packing built from actual assembly rather than the plan, buyer specific templates versioned per season, and the export paperwork generated from the same movement data as the GST return.",
    },
    {
      title: "Finished goods and returns",
      breaks:
        "Finished stock is reported at style level, so it reads healthy while the sizes that would actually fill the order are gone. Channel and B2B customers are promised from the same pool with no allocation, and returns come back as pieces with no route into a sellable state.",
      build:
        "Variant level availability with allocation per channel, size curve aware replenishment suggestions, and a returns path that grades and either restocks or writes down rather than leaving cartons in receiving.",
    },
  ],
};

export const systems = {
  title: "Systems we connect to, and how apparel actually models",
  description:
    "An apparel build is an integration project with a data model problem underneath it. Here is the estate we expect to meet, and the modelling that decides whether any of it holds. None of this needs a client name to verify; it is how the trade works.",
  groups: [
    {
      group: "Accounting and ERP",
      body: "Tally and TallyPrime, which is XML over HTTP or ODBC rather than a modern API. Zoho Books and Zoho Inventory. Focus, Marg and Busy in the Indian mid market. SAP Business One and Business ByDesign, Oracle NetSuite and Dynamics 365 Business Central where the group is larger. Garment specific products such as WFX, Datatex, ApparelMagic and Stage.",
    },
    {
      group: "Product development and CAD",
      body: "PLM and tech pack tools including Centric, Backbone, WFX and Bamboo Rose. CAD and marker making from Gerber AccuMark, Lectra Modaris and Diamino, Optitex, Tukatech and Richpeace. The marker report is the file that decides your fabric line, so getting it into the costing engine matters more than any dashboard.",
    },
    {
      group: "Shop floor and quality",
      body: "Bundle and operation tracking through Methods Workshop, GSD, Datatex and the shop floor modules of the garment ERPs. Barcode and RFID on bundle tickets. Quality capture at the operation, usually as defects per hundred units, and inline rather than end of line if you want the number to be actionable.",
    },
    {
      group: "Tax, statutory and trade",
      body: "GST through a GST Suvidha Provider such as ClearTax or Cygnet, including e-invoicing and the periodic job work return. E-way bills for movement. For exports, the invoice and packing list set, certificate of origin, and the buyer's own document formats. Gulf buyers pull you into ZATCA Fatoora in Saudi Arabia, Fawtara on Peppol PINT OM in Oman and PINT AE in the UAE.",
    },
    {
      group: "Selling the finished goods",
      body: "Channel and marketplace managers such as EasyEcom, Unicommerce, Increff and Vinculum. Shopify or WooCommerce for direct, and a B2B catalogue where the buyer is a retailer rather than a consumer. Ratio packs and prepacks are a different unit of measure from retail eaches and are an expensive bug when mapped as though they were one.",
    },
  ],
  distinction: {
    title: "The distinction that saves projects",
    body: "There is no flat item master in apparel, there are three levels, and every failed apparel implementation collapsed them. A style carries the tech pack, bill of materials, cost sheet and season code. Style and colour, the colourway, is what the trade calls the SKU and the level merchandisers plan and buy at. Only style, colour and size physically exists, so it is the only level that can be barcoded or counted. A shirt in 12 colours and 7 sizes is 1 style, 12 SKUs and 84 variants. Denim multiplies faster, because size there is waist by inseam. Decide which level each screen, each report and each integration speaks at, and write it down, before anyone opens a design file.",
  },
  pairs: [
    {
      pair: "Size curves and broken runs",
      body: "Demand across a size run follows a curve, say 1-2-3-3-2-1. Buy against the wrong one and units remain but not in sellable sizes. The damage is not that you are short, it is that your stock on hand reads healthy while the order cannot be filled. Roll the number up to style level and the problem disappears from the report entirely, which is exactly why the stock view has to stay at variant level even when the person asking for the report wants one number.",
    },
    {
      pair: "Cost is decided on the cutting table",
      body: "Fabric is the largest line on most cost sheets, and its number comes off the marker, the nesting of pattern pieces across the cuttable width. Marker efficiency moves that line further than price negotiation does, which is the opposite of where most sourcing effort goes. Consumption is size dependent, so a single per garment figure is already wrong before you multiply it. Wastage then compounds through end loss, splice loss, relaxation shrinkage, cutting waste and sewing rejects, and a costing engine that models one blended wastage percentage cannot tell you which of the five to attack.",
    },
    {
      pair: "The five variances: yield, marker, shrinkage",
      body: "Generic ERP posts one material variance against the order, which tells nobody what to do. Apparel needs five, because they have different owners and different fixes. Fabric yield isolates consumption against the cost sheet, computed from issue against the cut order BOM, and what you change is the costing assumption or the BOM itself. Marker isolates nesting efficiency from the marker report per size ratio, and what you change is the marker, the ratio or the fabric width. Shrinkage isolates relaxation loss, relaxed length against received length, and points at the fabric spec, the supplier or the relaxation time.",
    },
    {
      pair: "The five variances: labour and rework",
      body: "Labour efficiency isolates minutes earned against minutes worked, standard allowed minutes against line output, and what you change is line balancing or skill mix. Rework isolates the cost of pieces returned, from rejects logged at the operation rather than at the order, and what you change is the operation, not the order. That last distinction is the one most systems get wrong: a reject count against an order tells a merchandiser something happened, while a reject count against an operation tells a floor supervisor which machine to stand next to this afternoon.",
    },
    {
      pair: "Bundles, and why percentage complete is not tracking",
      body: "After cutting, pieces are numbered and bundled, and the bundle ticket becomes what the floor tracks and often what an operator is paid on. A system that reports a stage as sixty percent complete is not tracking anything; it is averaging. Bundle identity has to survive from the cutting table through every operation to finishing, because that is the only granularity at which you can answer where a specific order actually is, and the only one on which a piece rate can be settled without argument.",
    },
    {
      pair: "Shade has to survive the cut",
      body: "Every panel of one garment must come from the same dyelot, or the piece is a reject whatever the ledger says. That makes dyelot and shade identity a property of the roll, carried into the lay, carried into the bundle, and it is why fabric stock cannot be a single quantity per fabric code. Systems that hold fabric as one number per code discover this at the finishing table, after the labour is spent, which is the most expensive possible moment to find out.",
    },
    {
      pair: "Job work is a movement problem, not an accounting one",
      body: "The expected return from a job worker is computable rather than negotiable, because the cut order BOM already states what a given quantity in a given size ratio consumes. Most implementations settle the shortfall by negotiation anyway, because nobody wrote the expectation down at issue time, which converts an arithmetic question into a relationship question. Goods held outside also run a statutory clock, so the ageing view is not a nicety. Build the movement record first and let the periodic return fall out of it, rather than assembling the return at quarter end from paperwork.",
    },
    {
      pair: "Valuation method against report convenience",
      body: "Weighted average, FIFO and standard cost give different answers on the same fabric stock, and apparel makes the gap wide because relaxation loss, remnants and stock sitting at a third party all have to be included or excluded deliberately. Pick one method, write it into the specification, and enforce it in code. The failure mode is not choosing wrong, it is that the method quietly varies by report, so finance and the floor argue about a number that both of them computed correctly.",
    },
  ],
};

export const compliance = {
  title: "Standards and compliance",
  description:
    "Two different things land on the same questionnaire. Standards are what a buyer asks you to hold, and in apparel the buyer is a brand with its own audit programme rather than a procurement team. Statutes bind you whether anyone asks or not. Standards first, because that is the order a sourcing audit works in. We hold none of these ourselves. We build the records that let you pass.",
  rows: [
    {
      item: "Social and labour audits",
      detail:
        "SEDEX with the SMETA methodology, amfori BSCI, WRAP and SA8000, plus Higg for the environmental and social facility modules. These are not software standards, but they decide what your system has to be able to produce on demand: working hour and wage records per worker, subcontractor disclosure, and a supplier list that goes deeper than tier one.",
    },
    {
      item: "Chemical compliance",
      detail:
        "ZDHC MRSL, which brands increasingly require wet processing suppliers to demonstrate conformance against, OEKO-TEX STANDARD 100 for the finished article and ECO PASSPORT for the chemistry going in, and REACH SVHC screening for anything entering the EU. What the system has to hold is a chemical inventory per supplier with certificate identity and expiry, not a folder of PDFs.",
    },
    {
      item: "Forced labour traceability",
      detail:
        "The US UFLPA has been in force since 21 June 2022, cotton apparel is a named category, and the presumption is rebuttable only on clear and convincing evidence. That evidence is a full supply chain trace back through every tier to the raw input, with sourcing documents, transport records and employment records. It is the most demanding traceability requirement in apparel, it is a software problem, and an EU forced labour regulation is following the same shape.",
    },
    {
      item: "EU due diligence and the digital product passport",
      detail:
        "Corporate sustainability due diligence obligations reach large brands first and then their supply chains by contract, which is how they arrive on an Indian manufacturer. Separately, textiles and clothing are a priority group in the ESPR working plan, so a digital product passport carrying fibre level traceability is the direction of travel, with delegated acts expected late 2026 and enforcement following. The part that cannot be retrofitted is identity: supplier, lot and certificate have to be first class fields on stock from the start.",
    },
    {
      item: "ISO/IEC 27001:2022",
      detail:
        "The information security standard, 93 Annex A controls in 4 themes. It reaches apparel through the buyer, because a tech pack, a cost sheet and a price list are the most commercially sensitive documents either side holds. The 2013 transition closed 31 October 2025, so a 2013 certificate is now invalid.",
    },
    {
      item: "Regional rules, by where you trade",
      detail:
        "India, where you make: GST with e-invoicing above the turnover threshold, the periodic job work return, e-way bills for movement, and DPDP with consent manager provisions from 13 November 2026 and substantive obligations from 13 May 2027. Worker data on the floor sits under DPDP, and under GDPR as well if the buyer's contract pulls it there. Exports: the invoice and packing list set, certificate of origin, and the buyer's own document formats, which change by season and by buyer. Gulf buyers pull you into their e-invoicing: ZATCA Fatoora in Saudi Arabia, Fawtara on Peppol PINT OM in Oman with Phase 1 from August 2026, and PINT AE in the UAE with mandatory Phase 1 from 1 January 2027, each routed through an accredited provider rather than posted directly.",
    },
  ],
};

export const ourWork = {
  title: "Our work in this sector",
  description:
    "Three builds in apparel. We would rather describe real work than show a wall of logos.",
  items: [
    {
      client: "DoraDori",
      href: "/case-studies/garment-erp-doradori",
      place: "India",
      line: "A garment ERP built on FastAPI and PostgreSQL, integrated with Zoho and the client's internal CRM. Two published reads carry most of its integration surface: item summary, covering bill of materials and stock, and fabric stock valuation. Three years on dedicated resources.",
      stack: ["FastAPI", "Python", "PostgreSQL", "Zoho", "Internal CRM"],
    },
    {
      client: "Cheersagar",
      href: "/case-studies/garment-accounting-reporting-cheersagar",
      place: "India",
      line: "Garment accounting and reporting, with Zoho on one side and the client's internal CRM on the other, covering job work movement, GST and stock valuation. A separate product from the ERP, on the same house stack, run over three years.",
      stack: ["FastAPI", "Python", "PostgreSQL", "Zoho", "Internal CRM"],
    },
    {
      client: "Stylebank",
      href: "/case-studies/multi-tenant-apparel-platform-stylebank",
      place: "India",
      line: "A B2B apparel catalogue and replenishment platform, consuming the garment ERP's item summary and fabric valuation reads, and pushing a single catalogue and stock position out to Myntra, Nykaa, Flipkart, Amazon Vendor Central Dropship and Ajio.",
      stack: ["Django", "MySQL", "Redis", "Celery", "BigQuery", "OpenRouter"],
    },
  ],
};

export const whatGoesWrong = {
  title: "What goes wrong",
  description:
    "Ten failure modes we have hit or inherited. Naming them is more useful than a list of reasons to pick us. It starts with: Three levels collapsed into one item master, Stock reported at style level and One blended wastage percentage.",
  items: [
    {
      title: "Three levels collapsed into one item master",
      line: "Style, colourway and variant get flattened because the ERP being configured only has one, and every report afterwards answers at the wrong altitude. Model the three levels in week one and write down which level each screen, report and integration speaks at.",
    },
    {
      title: "Stock reported at style level",
      line: "The number reads healthy while the sizes that would fill the order are gone, and the shortage only surfaces at packing. Keep availability at variant level and make the rolled up figure the derived view, never the stored one.",
    },
    {
      title: "One blended wastage percentage",
      line: "End loss, splice loss, relaxation, cutting waste and sewing rejects get averaged into a single number, so nobody can tell which one moved. Model the five separately from the start, because splitting them later means re-costing history.",
    },
    {
      title: "The marker never reaches the cost sheet",
      line: "Fabric is costed per garment from an average while the real consumption is size dependent and comes off the marker. Feed the marker report into costing, and compute consumption per size rather than per piece.",
    },
    {
      title: "Job work settled by argument",
      line: "Material goes out on a challan and the shortfall on return is negotiated, because the expected return was never computed. Compute it from the cut order BOM at issue time, and age the goods sitting outside so the statutory clock is visible.",
    },
    {
      title: "Bundle tracking that is really averaging",
      line: "A stage reports sixty percent complete, which is not tracking, and piece rate settlement then has nothing to stand on. Carry bundle identity from the cutting table to finishing, and capture rejects at the operation rather than the order.",
    },
    {
      title: "Fabric held as one number per code",
      line: "Dyelot and shade get lost, and the mismatch is discovered at the finishing table after the labour is spent. Hold stock at roll level with shade identity, and carry it into the lay and the bundle.",
    },
    {
      title: "Valuation method that varies by report",
      line: "Weighted average, FIFO and standard cost each give a defensible answer, and finance and the floor end up arguing about a number both computed correctly. Make finance own the choice, then enforce it in one place rather than in each report that asks for it.",
    },
    {
      title: "Tally treated as an API",
      line: "It is XML over HTTP or ODBC, it is usually on someone's desktop, and it will be the slowest integration on the project. Scope it as its own workstream with a named owner, and never put it on the critical path for a go live date.",
    },
    {
      title: "The floor never asked",
      line: "Screens designed at a desk get used by an operator on a rate, standing, with a scanner, and they get bypassed within a week. Walk the cutting table and the line before wireframing, and make adoption on the floor an explicit acceptance criterion rather than a hope.",
    },
  ],
};

export const buildOrBuy = {
  title: "Build, buy, or buy the core and build the edge",
  description:
    "The honest answer is usually the third one, and sometimes the answer is that you should not hire us for this part. Assessed below: Accounting and the ledger, CAD and marker making, Costing and the five variances, Job work movement and reconciliation, PLM and tech packs, Shop floor and bundle tracking and Fabric store, dyelot and valuation.",
  rows: [
    {
      option: "Accounting and the ledger",
      best: "Buy",
      verdict:
        "Tally, Zoho Books or Business Central already do this and your auditor already knows them. Build the movement records that feed them, not a replacement for them.",
    },
    {
      option: "CAD and marker making",
      best: "Buy",
      verdict:
        "Genuinely best at nesting and pattern work, and nobody should commission a custom marker engine. What you build is the path that gets the marker report into costing.",
    },
    {
      option: "Costing and the five variances",
      best: "Build",
      verdict:
        "This is where custom earns its money. Every packaged product averages the variances, and the whole value is in keeping them separate and attached to an owner.",
    },
    {
      option: "Job work movement and reconciliation",
      best: "Build",
      verdict:
        "The expected return computed from the BOM is specific to how your cut orders are structured, and no product models your vendor rate card. This is the highest return module in most apparel builds.",
    },
    {
      option: "PLM and tech packs",
      best: "Buy the core, build the edge",
      verdict:
        "Centric, Backbone or WFX for the core. What you build is the mapping that keeps the tech pack, the BOM and the cost sheet versioned against each other rather than drifting apart.",
    },
    {
      option: "Shop floor and bundle tracking",
      best: "Buy the core, build the edge",
      verdict:
        "Buy the scanning and the terminals. Build the bundle identity model and the operation level reject capture, because that is what makes the data worth collecting.",
    },
    {
      option: "Fabric store, dyelot and valuation",
      best: "Build",
      verdict:
        "No packaged product holds fabric the way an apparel floor does, at roll level with shade identity carried into the lay. The valuation method is a finance decision, and enforcing it in one place is the build.",
    },
    {
      option: "GST, e-invoicing and e-way bills",
      best: "Buy",
      verdict:
        "Only a GST Suvidha Provider can file, and only an accredited service provider can transmit a Gulf e-invoice. We integrate to one and build the document mapping. We do not file or transmit, and neither should your development partner claim to.",
    },
    {
      option: "Channel and marketplace sync",
      best: "Buy",
      verdict:
        "EasyEcom, Unicommerce or Increff handle the connectors and keep up with the channels. Build only the mapping from your variant model to theirs, which is where ratio packs go wrong.",
    },
  ],
};

export const cost = {
  title: "What manufacturing software development costs, with the arithmetic shown",
  description:
    "Every competitor publishes a total with no hours behind it. Here is the rate, the hours and the multiplication, so you can argue with any line of it. The drivers are: Whether the three level model already exists, Number of job work stages and vendors, Whether the floor is tracked at bundle level and Fabric complexity, dyelot, shade and remnants.",
  drivers: [
    {
      driver: "Whether the three level model already exists",
      hours: "Highest impact",
      note: "Retrofitting style, colourway and variant into a system that stored one item master means re-costing history, not adding a column. This decision moves the number more than any feature does.",
    },
    { driver: "Number of job work stages and vendors", hours: "High" },
    { driver: "Whether the floor is tracked at bundle level", hours: "High" },
    { driver: "Fabric complexity, dyelot, shade and remnants", hours: "High" },
    { driver: "Integration count, and whether Tally is one", hours: "Medium" },
    { driver: "Export document formats per buyer", hours: "Medium" },
    { driver: "Historic data migration and its unit consistency", hours: "Variable" },
  ],
  modules: [
    { module: "Style, colourway and variant model", hours: "120 to 260" },
    { module: "Costing, BOM and the five variances", hours: "220 to 460" },
    { module: "Cut order, lay, marker and bundle identity", hours: "220 to 460" },
    { module: "Job work challans and reconciliation", hours: "200 to 420" },
    { module: "Fabric store, dyelot, shade and remnants", hours: "160 to 340" },
    { module: "Valuation, GST and export documents", hours: "180 to 400" },
    { module: "Reporting, admin and integrations", hours: "160 to 360" },
  ],
  math: {
    title: "Phase one, added up",
    points: [
      "Three level model 140 plus costing and BOM 260 plus cut order, marker and bundles 240 plus job work 220 plus fabric store 180 plus valuation and documents 180 plus reporting and integrations 180 equals 1,400 hours. Every one of the seven sits inside its own published range above, so you can move any line and see what it does to the total.",
      "At $40 per hour that is $56,000. At $100 per hour it is $140,000. At a $65 blended rate, about $91,000. The realistic phase-one band across the scopes we see is 1,000 to 1,900 hours, because a domestic maker with no export documents and a single job worker sits well below a vertically integrated exporter.",
      "Deliberately not in that number, each its own decision: shop floor terminals and bundle scanning, a channel or B2B selling surface, and any migration of more than one season of history.",
      "Recurring rather than build: hosting, and the GSP or accredited provider fees for filing and transmission, which are per document and belong in your operating cost rather than the build estimate. The rule stands: no quote before discovery, but you get a band on the first call.",
    ],
  },
};

export const costHighlights = [
  {
    label: "Phase one range",
    value: "$56,000 to $140,000",
    note: "The 1,400 hour worked example at the ends of the rate band, about $91,000 at a $65 blend.",
  },
  {
    label: "Typical timeline",
    value: "12 to 20 weeks",
    note: "To a slice the floor uses, because adoption is decided on the line rather than in user acceptance.",
  },
  {
    label: "Useful hours",
    value: "1,000 to 1,900",
    note: "The realistic band across the scopes we see, or $40,000 to $190,000.",
  },
];

export const engagement = {
  title: "Engagement models",
  description:
    "Four models for manufacturing software development, each with the downside stated in the same breath. Those four are: Fixed scope phase one, Discovery led rollout, Dedicated squad, monthly and Costing engine only. Pick by how settled the scope actually is, not by preference.",
  items: [
    {
      title: "Fixed scope phase one",
      good: "A fixed price and a fixed date against a written scope, both derived from the discovery artifacts rather than from a guess, with the delivery risk on the signed scope sitting with us.",
      bad: "The fixed price carries a risk premium, and anything the floor reveals mid build becomes a change order rather than absorbed work. On apparel that is a real risk, because the floor usually reveals something.",
    },
    {
      title: "Discovery led rollout",
      good: "Billed on time and materials, so you pay for work done, see the logged hours, and can redirect scope as the cutting table tells you something the spreadsheet did not.",
      bad: "You carry the overrun risk and somebody on your side has to read the reports. Best fit where the as-is is genuinely unknown, which it usually is when costing lives in spreadsheets.",
    },
    {
      title: "Dedicated squad, monthly",
      good: "A standing team at the blended rate, accumulating your domain knowledge instead of relearning your size curves and vendor rates every engagement.",
      bad: "You carry utilisation risk and you have to supply decisions every week, including from people who are on the floor rather than at a desk. A sprint where nobody was available to decide is still billed.",
    },
    {
      title: "Costing engine only",
      good: "We build the cost sheet, the five variances and the marker feed, and leave your existing ERP and accounting exactly where they are. The shortest route to knowing whether a style made money.",
      bad: "It does not fix stock, job work or the floor, so the numbers it produces are only as good as the movement data upstream. If that data is not there, this is the second project, not the first.",
    },
  ],
  recommendation:
    "What we usually suggest: a paid discovery that inventories what the floor already does and in what units, then a fixed scope phase one on costing and job work, and a dedicated squad after that.",
};

export const delivery = {
  title: "How we deliver manufacturing software development",
  description:
    "Five phases, each named by the artifact it produces. A generic waterfall diagram would tell you nothing. Those phases are: Unit and level inventory, Costing specification, One order, end to end, Reconciliation pack and Handover pack. Each is named by the artifact it hands you, so you can ask to see one.",
  items: [
    {
      phase: "Unit and level inventory",
      line: "A written record of every unit the business already uses, metres against pieces against bundles against cartons, and which of the three levels each system and each report currently speaks at. This is the artifact that decides the rest of the project, and it is produced on the floor rather than in a meeting room.",
    },
    {
      phase: "Costing specification",
      line: "The cost sheet structure, the five variance definitions with a named owner each, the consumption method per size, and the valuation method written down and agreed by finance before any code exists.",
    },
    {
      phase: "One order, end to end",
      line: "A single real order carried from cost sheet through cut order, marker, bundle, job work and back to valuation, running alongside the existing process rather than replacing it. This is the first thing the floor sees.",
    },
    {
      phase: "Reconciliation pack",
      line: "Job work expected against actual, fabric issued against consumed, and the five variances reported separately for a closed season, checked against whatever the business currently believes.",
    },
    {
      phase: "Handover pack",
      line: "Runbooks, the valuation method and its edge cases documented, source in your repositories from day one, credentials in your accounts, and the GSP and provider relationships in your name rather than ours.",
    },
  ],
};

export const nonFunctional = {
  title: "The technical buyer's checklist",
  description:
    "Copy this and run it against us, or against anyone else quoting for manufacturing software development. Three groups cover: The data model, Costing correctness, Valuation, Job work, Integration hygiene, Floor usability, Statutory and audit, Exit and Certifications, stated plainly. Copy any line straight into your own requirements document.",
  groups: [
    {
      group: "The data model",
      body: "Style, colourway and variant as three real levels. Stock stored at variant and rolled up only for display. Dyelot and shade as properties of the roll. Bundle identity carried from cutting to finishing.",
    },
    {
      group: "Costing correctness",
      body: "Consumption computed per size from the marker. The five variances reported separately with a named owner each. Cost sheet versioned against the tech pack. Post shipment costing produced from the same structure as the quotation.",
    },
    {
      group: "Valuation",
      body: "One method stated in the specification and enforced in code. A documented position on remnants, relaxation loss and stock held at a third party. The same number whichever report asks for it.",
    },
    {
      group: "Job work",
      body: "Expected return computed from the cut order BOM at issue time. Ageing on goods held outside. A rate card per vendor and operation. The periodic return produced from movement records rather than assembled at quarter end.",
    },
    {
      group: "Integration hygiene",
      body: "Idempotency keys on every mutation. A dead letter queue with a replay runbook. Contract tests running in CI. Tally scoped as its own workstream and kept off the critical path.",
    },
    {
      group: "Floor usability",
      body: "Tested on the actual device, in the actual light, by someone on a rate. Offline tolerance where the network is thin. Scan sequences designed around the physical movement rather than the screen order.",
    },
    {
      group: "Statutory and audit",
      body: "GST and e-invoicing through a GSP, e-way bills on movement, and traceability records that survive a SMETA or WRAP audit. Chain of custody for certified fibre that survives blending.",
    },
    {
      group: "Exit",
      body: "Code in your repository, infrastructure as code, credentials in your accounts, and an export of master data and transaction history in the units you actually use.",
    },
    {
      group: "Certifications, stated plainly",
      body: "Zyneto holds no certifications. Not ISO 27001, not SOC 2, and we are not a GST Suvidha Provider or an accredited e-invoicing service provider anywhere. We build the controls and the records, and hand you the evidence for your own audit. Ask any vendor who implies otherwise to produce the certificate and its scope statement.",
    },
  ],
};

export const faqs = [
  {
    question:
      "Our ERP has one item master. How much work is it to move to three levels?",
    answer:
      "More than adding a column and less than a rewrite, and the size of it depends entirely on how much history you need to keep correct. New transactions can be modelled at variant immediately. The expensive part is historic stock and historic costing, because a style level quantity cannot be split back into sizes after the fact without inventing the split. The usual answer is to model the three levels going forward, keep history read only at the level it was captured, and be explicit in reporting about where the boundary is.",
  },
  {
    question: "Why do you insist on five variances instead of one material variance?",
    answer:
      "Because they have different owners and different fixes. Fabric yield points at the costing assumption or the BOM. Marker points at the marker, the size ratio or the fabric width. Shrinkage points at the fabric spec, the supplier or the relaxation time. Labour efficiency points at line balancing or skill mix. Rework points at a specific operation. A single combined number tells you the order lost money, which you already knew, and gives nobody an action.",
  },
  {
    question: "Can you integrate with TallyPrime?",
    answer:
      "Yes, and plan for it to be the slowest integration on the project. Tally is XML over HTTP or ODBC rather than a modern API, it is frequently on a desktop rather than a server, and the shape of the data depends on how your accountant set it up. We scope it as its own workstream with a named owner on your side, and we keep it off the critical path for any go live date.",
  },
  {
    question: "How do you compute what should come back from a job worker?",
    answer:
      "From the cut order bill of materials at the moment of issue, not by agreement afterwards. If a cut order consumes a known quantity per size and you issue against it, the expected return in pieces and in remaining fabric is arithmetic. Most disputes exist because nobody wrote the expectation down at issue time, which turns an arithmetic question into a relationship question. We also age the goods sitting outside, because there is a statutory clock on them.",
  },
  {
    question: "Which fabric valuation method should we use?",
    answer:
      "Weighted average, FIFO and standard cost are all defensible, and the choice is finance's rather than ours. What matters more is that one is chosen, written into the specification and enforced in code. Apparel widens the gap between them because relaxation loss, remnants and stock held at a third party all have to be deliberately included or excluded. The failure we see is not a wrong method, it is a method that quietly varies by report.",
  },
  {
    question: "Do we need bundle tracking, or is stage completion enough?",
    answer:
      "If you settle piece rates or need to answer where a specific order actually is, you need bundle identity. A stage reported as sixty percent complete is an average, not a location, and it cannot support a payment. Bundle identity has to be created at cutting and survive every operation to finishing. If you do not settle piece rates and your lines are short, stage completion may genuinely be enough, and we will say so.",
  },
  {
    question: "Our buyer sends a SMETA audit. What does our system need to produce?",
    answer:
      "Traceability to the supplier, working hour and wage records, and a chain of custody for certified fibre that survives blending. These are not software standards, but they decide what has to be capturable, and capture is the part that cannot be retrofitted. Treat supplier, lot and certificate identity as first class fields now, because adding identity to historic stock later is the thing that genuinely cannot be done.",
  },
  {
    question: "We ship to the Gulf. Does their e-invoicing land on us?",
    answer:
      "It lands on whoever raises the invoice in that jurisdiction. If you invoice from India to a Gulf buyer, your obligation is Indian GST and the export document set, and their obligation is theirs. If you have an entity there, then ZATCA Fatoora in Saudi Arabia, Fawtara on Peppol PINT OM in Oman with Phase 1 from August 2026, and PINT AE in the UAE with mandatory Phase 1 from 1 January 2027 all apply, and in each you route through an accredited provider rather than posting directly.",
  },
  {
    question: "Can we keep our spreadsheets alongside the new system?",
    answer:
      "For a while, and deliberately. We run one real order end to end through the new path while the spreadsheet continues, and compare. That is how you find out whether the system is right rather than whether it is finished. What does not work is keeping both permanently, because the moment two costing numbers exist, the one that is easier to change becomes the one people trust.",
  },
  {
    question: "Is Zyneto ISO 27001 or SOC 2 certified?",
    answer:
      "No, and we will not imply otherwise. We are also not a GST Suvidha Provider and not an accredited e-invoicing service provider anywhere, so filing and transmission run through a licensed party in your name. What we do is build to the controls and hand you an evidence pack your own auditor can sample. One thing worth knowing when you assess other vendors: the ISO/IEC 27001 transition from the 2013 standard to the 2022 standard closed on 31 October 2025, so a 2013 certificate is now void.",
  },
  {
    question:
      "What does a phase one cost, how many hours is that, and how long does it take?",
    answer:
      "The worked example on this page is 1,400 hours, which is $56,000 to $140,000 at the ends of the rate band and about $91,000 at a $65 blend. Real scopes land between 1,000 and 1,900 hours. Calendar is 12 to 20 weeks to a slice the floor actually uses, which is a deliberately different milestone from a slice that passes user acceptance. We will give you a band on the first call and a fixed price only after discovery.",
  },
  {
    question: "Who owns the code, the data and the accounts?",
    answer:
      "You do, from day one rather than at handover. Code sits in your repository, infrastructure is defined as code, and hosting and provider credentials are in your accounts and your name. The GSP and any accredited e-invoicing relationship is contracted by you directly, because it has to be. If you take the system in house or move it elsewhere, nothing about the architecture is designed to make that expensive.",
  },
];

export const nextSteps = {
  title: "What happens next",
  description:
    "Four steps with a time attached to each, so booking a call has a known shape.",
  items: [
    {
      step: "A 30 minute technical call",
      line: "Bring a cost sheet, a cut order and the last job work reconciliation you argued about. Those three documents tell us more than an hour of description. No slides from us.",
    },
    {
      step: "A written read within three working days",
      line: "At no charge. One page on which of the three levels your systems currently speak at, where the units stop agreeing, and an hour band for phase one. If it says you do not need us yet, it will say so.",
    },
    {
      step: "A paid discovery on the floor",
      line: "Two to three weeks, fixed fee, and mostly spent at the cutting table and the line rather than in a meeting room. Output is the unit and level inventory, the costing specification and a costed plan. This is where the quote comes from.",
    },
    {
      step: "One order, end to end",
      line: "Phase one starts by carrying a single real order from cost sheet to valuation alongside your existing process, so you see the numbers agree before anything is switched off.",
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
          label: "FastAPI development",
          href: "/services/fastapi-development-company",
          note: "The stack behind both garment builds",
        },
        {
          label: "Database development",
          href: "/services/database-development",
          note: "Where the three level model actually lives",
        },
        {
          label: "Web development",
          href: "/services/web-development",
          note: "Costing screens and the floor interface",
        },
      ],
    },
    {
      group: "Data and decisions",
      links: [
        {
          label: "Predictive analytics",
          href: "/services/predictive-analytics-development",
          note: "Size curves, demand and replenishment signals",
        },
        {
          label: "Artificial intelligence",
          href: "/services/artificial-intelligence",
          note: "Defect classification and costing anomalies",
        },
        {
          label: "Web scraping and data extraction",
          href: "/services/web-scraping-data-extraction-services",
          note: "Getting data out of systems with no API",
        },
      ],
    },
    {
      group: "Adjacent builds",
      links: [
        {
          label: "Logistics and distribution",
          href: "/industries/logistics-software-development",
          note: "Finished goods leaving the plant",
        },
        {
          label: "Energy and utilities",
          href: "/industries/energy-software-development",
          note: "Load, tariff and what a line costs to run",
        },
        {
          label: "Mobile app development",
          href: "/services/mobile-app-development",
          note: "Handhelds on the cutting table and the line",
        },
      ],
    },
  ],
};

export const ctaBands = {
  mid: {
    title: "Send us a cost sheet and the last job work argument",
    description:
      "Those two documents tell us where your units stop agreeing faster than any discovery call does. We will tell you which of the five variances you cannot currently see, before you commit to anything.",
    ctaText: "Book a 30 minute technical call",
  },
  end: {
    title: "Start with the units, not the screens",
    description:
      "Paid discovery runs two to three weeks, mostly on the floor, and produces the unit and level inventory, the costing specification and a costed phase-one plan. It is credited against phase one if you proceed.",
    ctaText: "Book a 30 minute technical call",
    assurances: [
      "No fixed quote before discovery",
      "A written read within three working days",
      "$40 to $100 per hour, by role",
    ],
  },
};

export const relatedPosts = [
  "best-practices-in-fastapi-architecture",
  "python-api-development-with-fastapi",
  "best-methods-to-scrape-page-information-and-add-it-to-excel",
  "how-much-does-ai-development-cost",
  "ai-agents-for-business",
  "top-ai-use-cases-you-cant-ignore",
  "ai-in-everyday-business",
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
      "Architecture, data extraction and analytics work that applies directly to apparel and manufacturing systems.",
  },
};
