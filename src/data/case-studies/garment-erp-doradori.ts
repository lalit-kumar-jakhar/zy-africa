import type { CaseStudy } from "./types";

export const seo = {
  primaryKeyword: "garment erp implementation",
  intent: "commercial",
  secondaryKeywords: [
    "garment manufacturing erp",
    "cut order and marker software",
  ],
  competingUrl: "/industries/manufacturing-software-development",
} as const;

export const doradori: CaseStudy = {
  slug: "garment-erp-doradori",
  clientName: "DoraDori",
  confidentiality: "named-no-metrics",
  approvalRecord:
    "Drafted 2026-08-07 and rewritten the same day when the stack was corrected, coded 2026-08-13. Confirmed facts only: a garment ERP on FastAPI and PostgreSQL, integrated with Zoho and an internal CRM, consumed by the Stylebank platform for item summary and fabric stock valuation, three years on dedicated resources. CONTAMINATION RULE IN FORCE: nothing from the Stylebank architecture document or its Django codebase may appear here. An earlier draft carried Django, MySQL and a multi-tenant framing, all of it Stylebank's; it was deleted rather than reworded, along with three decisions built on it. No client approval sought. No metric, quote or outcome claimed, because none exists. EITHER-OR: never ship this page alongside the anonymised garment ERP study. They are one engagement, and two pages describing one three year garment ERP build, one named and one withheld, identify the withheld client on sight. BLOCKING BEFORE live: true: team composition by role, since dedicated resources gives the model and not the shape; and confirmation that the two openQuestions admissions are recorded history rather than design judgement inferred from the architecture. A page where nothing went wrong is a fabrication tell, so an inferred admission is not good enough. Portfolio screenshot is a placeholder pending a real asset. CONFIRMED 2026-08-20 by the user: engagement model is a dedicated team, corrected from the inferred dedicated resources on time and materials. STILL BLOCKING: team composition by role, and confirmation that the two openQuestions admissions are recorded history rather than inference from the architecture. ADMISSIONS CONFIRMED 2026-08-20 by the user: both openQuestions admissions are recorded history, not inference from the architecture, so they stand as written. TEAM CONFIRMED 2026-08-20 by the user: 3 backend, 2 frontend, 1 QA, 0.5 DevOps and a part time project manager. The same composition was supplied for cheersagar and doradori together, since they were asked as a pair. NOTHING BLOCKING remains on this study. The either-or rule remains in force: never ship this page alongside the anonymised garment ERP study.",

  h1: "A garment ERP implementation on FastAPI and PostgreSQL: apparel costing for DoraDori",
  metaTitle: "DoraDori: Garment ERP Implementation | Zyneto",
  metaDescription:
    "Garment ERP implementation for DoraDori on FastAPI and PostgreSQL: item summary over bill of materials and stock, plus fabric stock valuation.",
  standfirst:
    "DoraDori is a garment ERP on FastAPI and PostgreSQL, integrated with Zoho and the client's internal CRM. Two published reads carry most of its integration surface: item summary, covering bill of materials and stock, and fabric stock valuation. Garment manufacturing ERP work lives or dies on cut order and marker software, because that is where fabric turns into cost.",

  author: { name: "Zyneto engineering", role: "Delivery team" },
  datePublished: "2026-08-13",
  lastReviewedDate: "2026-08-13",
  coverImage: "/static/assets/portfolio/dora-dori.webp",

  rail: {
    sector: "Apparel manufacturing",
    market: "Garment manufacturers and exporters",
    engagementType: "Dedicated resources",
    platforms: ["Web"],
    stack: ["FastAPI", "Python", "PostgreSQL", "Zoho integration", "Internal CRM integrations"],
    liveLinks: [],
    deliveryFacts: [
      { label: "Duration", value: "Three years" },
      { label: "Public links", value: "None. Internal manufacturing software." },
    ],
  },

  domainContext: {
    heading: "What makes a garment ERP implementation hard",
    blocks: [
      {
        title: "No SKU list, three levels",
        body: "There is no flat item master in apparel, there are three levels. A style carries the tech pack, bill of materials, cost sheet and season code. Style and colour, the colourway, is what the trade calls the SKU and what merchandisers plan at. Only style, colour and size physically exists, so it is the only countable level. A shirt in 12 colours and 7 sizes is 1 style, 12 SKUs, 84 variants, and denim multiplies faster because size there is waist by inseam.",
      },
      {
        title: "Size curves and broken runs",
        body: "Demand across a size run follows a curve, say 1-2-3-3-2-1. Buy against the wrong one and units remain but not in sellable sizes, so stock reads healthy while the order cannot be filled. Roll that to style level and the problem vanishes from the report, which is why the stock view stays at variant level.",
      },
      {
        title: "Cost is decided on the cutting table",
        body: "Fabric is the largest line on most cost sheets, and its number comes off the marker, the nesting of pattern pieces across the cuttable width. Consumption is size dependent, so one figure per garment is already wrong, and wastage compounds: end loss, splice loss, relaxation shrinkage, cutting waste, sewing rejects. Labour costs in standard allowed minutes against a target line efficiency.",
      },
      {
        title: "Bundles, and shade that has to survive the cut",
        body: "After cutting, pieces are numbered and bundled, and the bundle ticket is what the floor tracks and often what an operator is paid on. Shade must survive the cut too: every panel of one garment from the same dyelot, or the piece is a reject whatever the ledger says.",
      },
    ],
  },

  situation:
    "Three years of dedicated resources is long enough that an ERP stops being a project and becomes the thing other systems ask questions of. Two of those questions matter most: what a style is made of and what is on hand, which is the item summary, and what fabric is worth rather than how much there is, which is the fabric stock valuation. Both are read from outside, so they are a contract rather than an internal function. The books are the third boundary: accounting in Zoho, commercial context in an internal CRM, and the ERP has to agree with both without becoming either.",

  buildBlocks: [
    {
      heading: "A standalone service with its own schema",
      body: "FastAPI over PostgreSQL, owned end to end rather than added as a module inside a general platform. Three levels, a size dimension and yield driven costing are expensive to bolt onto a flat item master.",
    },
    {
      heading: "Item summary, where the bill of materials meets stock",
      body: "One read answers both halves: what a style consumes, and what exists underneath it. The BOM hangs off the style and the count sits at variant, so the summary crosses that boundary rather than pretending the catalogue is flat.",
    },
    {
      heading: "Fabric stock valuation as a separate read",
      body: "Fabric behaves like bulk material, not a countable item: rolls in, issued against a marker, remnants back. This read is what other systems take when fabric has to be money rather than metres.",
    },
    {
      heading: "Zoho and the internal CRM on either side of the ledger",
      body: "Accounting reconciles against Zoho, commercial records against the CRM, so the ERP holds the physical truth and neither has to be rebuilt inside it.",
    },
  ],

  decisions: [
    {
      decision: "Build DoraDori as its own service on its own PostgreSQL schema",
      alternativeRejected: "Apparel as a vertical module inside a general product",
      reason:
        "Three levels, size curves and yield costing touch the item master, the stock model and the costing engine at once, forcing those changes onto products with no use for them.",
      tradeoffAccepted:
        "Tenancy, access control and deployment are solved again rather than inherited, and two codebases get patched instead of one.",
    },
    {
      decision: "Expose item summary as one read joining bill of materials to stock",
      alternativeRejected: "Separate BOM and stock endpoints, each caller joining them",
      reason:
        "The join is where the hierarchy knowledge lives, and pushing it out spreads apparel rules into systems with no reason to hold them.",
      tradeoffAccepted: "A wider contract that moves when either side does, and a heavier read than a plain stock lookup.",
    },
    {
      decision: "Keep fabric valuation as its own read, not a column on stock",
      alternativeRejected: "One stock view carrying value for everything",
      reason: "Fabric and finished goods do not value the same way, and a merged view is defensible for neither.",
      tradeoffAccepted: "Two views that have to agree, and a reconciliation every time they do not.",
    },
  ],

  reusableArtifact: {
    heading: "The five variances an apparel cost sheet needs",
    intro:
      "Generic ERP posts one material variance against the order. Apparel needs five: different owners, different fixes, and a combined figure tells nobody which to work on.",
    columns: ["Variance", "What it isolates", "Where the number comes from", "What you change"],
    rows: [
      ["Fabric yield", "Consumption against cost sheet", "Issue against cut order BOM", "Costing assumption, or the BOM"],
      ["Marker", "Nesting efficiency", "Marker report per size ratio", "Marker making, ratio, fabric width"],
      ["Shrinkage", "Relaxation loss", "Relaxed against received length", "Fabric spec, supplier, relaxation time"],
      ["Labour efficiency", "Minutes earned against worked", "Standard allowed minutes against line output", "Line balancing, skill mix"],
      ["Rework", "Cost of pieces returned", "Rejects logged at the operation", "The operation, not the order"],
    ],
    note: "If a costing system cannot say which of these lost the money, the post mortem is an argument about opinions.",
  },

  shipped: {
    capabilities: [
      "A garment ERP on FastAPI and PostgreSQL, maintained over three years",
      "Item summary covering bill of materials and stock in one read",
      "Fabric stock valuation exposed to integrating systems",
      "Zoho for accounting, internal CRM for commercial records",
    ],
    scopeFacts: [
      "Scope, not results: two ERP reads published for outside consumption",
      "Three year engagement on dedicated resources",
    ],
  },

  riskAndHandover: [
    {
      title: "The reads are a contract",
      body: "Item summary and fabric valuation are consumed outside DoraDori, so altering either shape alters somebody else's system. Neither moves on the ERP's own schedule.",
    },
    {
      title: "Two systems hold parts of the same truth",
      body: "Zoho holds the books, the CRM the commercial record. When a figure is disputed the ERP is not automatically the winner, and knowing which system settles which question is part of running it.",
    },
    {
      title: "What transfers at handover",
      body: "Not the codebase alone. The product model and costing assumptions: which level each number lives at, and what the valuation counts as issued.",
    },
  ],

  commercials: [
    { label: "Engagement model", value: "Dedicated team" },
    { label: "Team", value: "3 backend, 2 frontend, 1 QA, 0.5 DevOps and a part time project manager" },
    { label: "Rate band", value: "40 to 100 USD per hour by role, blending to 60 to 70" },
    {
      label: "How we quote",
      value:
        "No fixed price before discovery, which on ERP work is mostly an inventory of what the floor already does, and in what units.",
    },
  ],

  openQuestions:
    "The item summary says what is on hand without saying whether it is sellable, because sellable in apparel means a complete size run rather than a total. We would put size run completeness into that read at the start rather than leave each caller to work it out. The second is the Zoho boundary, drawn once early and never revisited, so a handful of figures have two plausible homes and which is authoritative is convention rather than design.",

  faqs: [
    {
      question: "Why not model apparel with standard ecommerce product variants?",
      answer:
        "The variant ceiling is rarely the binding constraint, the option count is. Shopify raised its variant limit to 2,048 in October 2025, but the cap of three options per product did not move. Size, colour and one more is the budget, and denim needs waist, inseam, fit and wash.",
    },
    {
      question: "What does item summary mean in a garment ERP?",
      answer:
        "One read returning what a style is made of and what exists underneath it. The BOM hangs off the style and stock exists only at style, colour and size, so it joins two levels. A flat item lookup cannot answer it.",
    },
    {
      question: "Why does marker efficiency turn up in a costing conversation?",
      answer:
        "Because fabric is usually the biggest line in the cost sheet, and the nesting of pattern pieces across the cuttable width decides how much a garment consumes.",
    },
  ],

  links: {
    service: { label: "FastAPI development", href: "/services/fastapi-development-company" },
    industry: { label: "Retail and e-commerce", href: "/industries/retail-software-development" },
    blogs: [],
  },

  relatedCaseStudies: [
    {
      label: "Cheersagar",
      href: "/case-studies/garment-accounting-reporting-cheersagar",
      note: "Garment accounting and reporting",
    },
    {
      label: "Stylebank",
      href: "/case-studies/multi-tenant-apparel-platform-stylebank",
      note: "The platform that consumes these reads",
    },
  ],
};
