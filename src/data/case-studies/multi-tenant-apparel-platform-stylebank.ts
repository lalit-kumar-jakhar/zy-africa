import type { CaseStudy } from "./types";

export const seo = {
  primaryKeyword: "multi tenant apparel platform",
  intent: "commercial",
  secondaryKeywords: [
    "apparel platform development",
    "wholesale apparel software",
  ],
  competingUrl: "/industries/manufacturing-software-development",
} as const;

export const stylebank: CaseStudy = {
  slug: "multi-tenant-apparel-platform-stylebank",
  clientName: "Stylebank",
  confidentiality: "named-no-metrics",
  approvalRecord:
    "Drafted 2026-08-07 from a client-supplied architecture document plus the live site, coded 2026-08-13. No client approval sought. No outcome metric and no quote published, so none is claimed. DELIBERATE OMISSION: the draft named the four tenants and the internal project name. Both are withheld here. Two of those names are companies that appear nowhere else in the repo, so publishing them discloses client relationships nobody approved, and the internal project name cross-links to a separate client. Restore only on written approval. ALSO WITHHELD per the 2026-08-07 instruction: database size and table distribution. BLOCKING BEFORE live: true: engagement window and team shape by role; the before state, which is the strongest thing this page could gain; what the LLM actually receives and returns; confirmation of the India market claim, which is inferred from the channel and tooling list; test, CI, monitoring and security tooling; and hosting beyond S3. CONFIRMED 2026-08-20 by the user: engagement model is a dedicated team, which matches what the page already stated. STILL BLOCKING: engagement window and team shape by role, the before state, what the LLM receives and returns, the India market claim, test, CI, monitoring and security tooling, and hosting beyond S3.",

  h1: "A multi-tenant apparel platform: what we built for Stylebank",
  metaTitle: "Stylebank: Multi Tenant Apparel Platform | Zyneto",
  metaDescription:
    "Multi tenant apparel platform for Stylebank on Django: marketplace orders, factory costing and replenishment planning for four apparel businesses.",
  standfirst:
    "Stylebank runs four apparel businesses on one Django codebase, each with its own database, S3 bucket and Redis namespace. It pulls marketplace orders, factory production and accounting into one place, then plans replenishment against it. Apparel platform development at this shape is really wholesale apparel software, with four businesses sharing one schema.",
  coverImage: "/static/assets/portfolio/stylebank.webp",

  author: { name: "Zyneto engineering", role: "Delivery team" },
  datePublished: "2026-08-13",
  lastReviewedDate: "2026-08-13",

  rail: {
    sector: "Apparel wholesale, manufacturing and marketplace retail",
    market: "India, selling through national marketplaces",
    engagementType: "Dedicated team",
    platforms: ["Web"],
    stack: [
      "Python", "Django", "MySQL", "Redis", "Celery", "django-crontab",
      "AWS S3", "Google BigQuery", "OpenRouter", "collectfasta",
    ],
    liveLinks: [{ label: "stylebank.io", url: "https://stylebank.io" }],
  },

  domainContext: {
    heading: "What makes a multi-tenant apparel platform hard",
    blocks: [
      {
        title: "One codebase, several companies, and where you draw the wall",
        body: "Each business in a group carries its own buyers, factories and books. The cheap option is a tenant column on every table, which holds until one query misses the filter and a company reads a rival's cost sheet. Isolating by database makes it an infrastructure problem instead, and buys per company restore, retention and job windows.",
      },
      {
        title: "Marketplace data arrives late, then arrives again",
        body: "Channel data restates itself. An order cancels after picking, a return lands weeks after the sale, settlement follows on its own cycle with commission attached. Channels do not share vocabulary either: a return to origin is not a customer return, although both reduce the same figure. Ingest that as an append and you double count. Pulls upsert on the channel's identifier and carry a snapshot date, so you can answer what you believed on the day you decided.",
      },
      {
        title: "Replenishment is a fabric question before it is a stock question",
        body: "You do not replenish finished goods, you replenish the ability to make them. A plan needs rate of sale at style, colour and size, stock at the warehouse and each channel, work in progress on the floor, and fabric on hand including greige not yet dyed. Lead time is a chain: dyeing, cutting, sewing and finishing each hold a queue. B2B and ecom diverge: one plans against an order book and pack ratios, the other against days of cover and a size curve.",
      },
      {
        title: "History tables grow faster than anyone plans for",
        body: "A row per style per day per channel per metric compounds quietly, and nothing in the application tells you. You find out when a backup stops fitting its window, or an ALTER becomes an outage rather than a migration. Archiving buys time; the structural fix is to stop mixing an append only fact stream with operational state.",
      },
    ],
  },

  situation:
    "Stylebank is the operating platform for four apparel businesses, each manufacturing, selling wholesale and selling through marketplaces. The commercial picture sat in systems with no reason to talk to each other: channel orders, inventory, returns and GRN in an aggregator fronting five marketplaces; production, defects and costing in a factory ERP; item summary, BOM and fabric stock valuation in a materials ERP; invoices, sale orders and credit notes in Zoho Books; buying and sourcing in a spreadsheet. The people who needed the answers were in none of them, reading the day's numbers in a messaging group. Nobody asked for a new system of record, only for one place where those sources reconcile daily.",

  buildBlocks: [
    {
      heading: "One Django project, four isolated tenants",
      body: "One codebase serves all four. Each tenant runs on its own MySQL database, S3 bucket and Redis database number, so records, media and queues never share a namespace.",
    },
    {
      heading: "The integration layer",
      body: "Connectors for the channel aggregator, factory ERP, materials ERP and Zoho Books, each with its own auth and refresh path, plus Apps Script sheet imports, Drive images and marketplace style stats.",
    },
    {
      heading: "Planning: replenishment, buying, PO and factory WIP",
      body: "Replenishment splits into B2B and ecom across fabric and finished goods, beside a greige sourcing tracker, planning PO with factory WIP, and an SCM tracker carrying PPM reports.",
    },
    {
      heading: "Costing and margin",
      body: "Daily factory cost against target, fed by an Apps Script webhook and pushed to the messaging group, with a production PnL dashboard carrying marketplace style stats, ads and CM2.",
    },
    {
      heading: "The pipeline, the reports and the per style AI read",
      body: "Celery workers on Redis run the ETL into BigQuery, including replenishment pushes and per style LLM analysis through OpenRouter. Around 35 django-crontab jobs schedule the rest; reports leave as Excel and PDF to Slack, messaging groups and email.",
    },
  ],

  decisions: [
    {
      decision: "A database per tenant, not a tenant column",
      alternativeRejected: "One database with row level filtering on a tenant id",
      reason:
        "Separate factories and books, and per tenant ETL heavy enough that one should not slow another.",
      tradeoffAccepted:
        "Every migration runs four times, connection pools multiply, and no cross tenant question survives a JOIN.",
    },
    {
      decision: "Scheduled pulls with idempotent upserts, not event driven ingestion",
      alternativeRejected: "Webhooks and streaming from each upstream system",
      reason:
        "Several sources publish on their own batch schedule with no usable event stream, and a re-runnable pull recovers more cheaply than a missed event.",
      tradeoffAccepted:
        "Data is only as fresh as its cron window, and roughly 35 jobs need watching, hence the run tracker.",
    },
    {
      decision: "BigQuery for analysis, MySQL for operations",
      alternativeRejected: "Read replicas and heavier indexes on the primary",
      reason:
        "The operational database carries a large append only history stream, so analytical scans compete with the write path.",
      tradeoffAccepted:
        "A second copy with its own lag, and two places a number could be computed, so definitions pin in the pipeline.",
    },
  ],

  reusableArtifact: {
    heading: "Which system owns which number",
    intro:
      "Every multi system apparel stack argues with itself eventually. The ownership map underneath:",
    columns: ["System", "Owns", "Do not ask it for", "How the data arrives"],
    rows: [
      ["Channel aggregator", "Channel orders, inventory sync, returns, GRN, putaway", "Landed margin, factory cost", "Continuous pull, returns restate for weeks"],
      ["Factory ERP", "Production output, GRN summary, defects, cost per unit", "What actually sold", "Daily, after shift close"],
      ["Materials ERP", "Item summary, BOM, stock, fabric valuation", "Finished goods at the channel", "Daily batch"],
      ["Zoho Books", "Invoices, sale orders, credit notes, customer master", "Physical stock", "On document creation, token expires"],
      ["Marketplace direct", "Style stats, ads, CM2 inputs", "Order truth, cancellation restates it", "Reporting lag of days"],
      ["BigQuery warehouse", "Reconciled history everyone reports off", "Anything live or operational", "Whenever the ETL last ran"],
    ],
    note: "The system that owns the event owns the number, and reconciliation belongs in the pipeline, never in each dashboard.",
  },

  shipped: {
    capabilities: [
      "Returns reconciliation with package sync and warehouse dashboard",
      "Marketplace analytics covering style stats, ads and CM2",
    ],
    scopeFacts: [
      "Scope, not results: 4 tenants, each with own database, S3 bucket and Redis DB",
      "9 Django apps in one project",
      "15 external systems integrated",
      "5 marketplaces through one aggregator",
      "Around 35 scheduled jobs on django-crontab",
    ],
  },

  riskAndHandover: [
    {
      title: "Access and data",
      body: "An IP whitelist middleware geolocates the caller, with per profile activity tracking behind it. Records and media stay in the tenant's own database and bucket.",
    },
    {
      title: "Ownership",
      body: "Because isolation is physical rather than a query filter, separating one business is a copy, not an extraction. Marketplace, accounting and messaging credentials stay in the client's accounts.",
    },
    {
      title: "Operational visibility",
      body: "Nobody watches 35 jobs by eye, so a report status page records every cron run and allows a re-trigger. A failed job shows as a row, not an email nobody received.",
    },
  ],

  commercials: [
    { label: "Engagement model", value: "Dedicated team" },
    { label: "Rate band", value: "40 to 100 USD per hour by role, blending to 60 to 70" },
    {
      label: "How we quote",
      value:
        "No fixed price before discovery. The integration inventory is the estimate, because every upstream system brings its own auth, rate limit and way of failing quietly.",
    },
  ],

  openQuestions:
    "The style history table should have been append only and partitioned from the start, with a short retention window in MySQL and the long tail in BigQuery. It grew inside the operational database instead, so a schema change is now a scheduling exercise rather than a migration. Two schedulers is one too many: django-crontab and Celery overlap. The per style AI read stays advisory, because we have not earned the right to let it move a number.",

  faqs: [
    {
      question: "Why give each tenant its own database instead of a tenant column?",
      answer:
        "Because a shared table with a tenant filter puts every future query one mistake away from exposing another company's costing. Separate databases make isolation an infrastructure property, with per business backup and retention. The cost is real: every migration runs four times, and cross tenant questions need a warehouse.",
    },
    {
      question: "Why does marketplace data need reconciliation rather than a straight import?",
      answer:
        "Because a marketplace sale is not final when placed. Cancellations, returns to origin, customer returns and settlement adjustments all restate it, sometimes weeks later. Pulls upsert on the channel's identifier, so a restatement corrects the row instead of adding one.",
    },
    {
      question: "What does the AI actually do here?",
      answer:
        "Inside the ETL pipeline, not the request path. Celery workers assemble the data for a style, send it through OpenRouter, and store the result where planners see it. It suggests; a person decides what to repeat, discount or drop.",
    },
  ],

  links: {
    service: { label: "Django development", href: "/services/django-development" },
    industry: { label: "Retail and e-commerce", href: "/industries/retail-software-development" },
    blogs: [],
  },

  relatedCaseStudies: [
    {
      label: "Al Amri Express",
      href: "/case-studies/grocery-delivery-oman-al-amri-express",
      note: "Grocery delivery and warehouse operations in Oman",
    },
    { label: "Kroolo", href: "/case-studies/ai-work-os-platform-kroolo", note: "Multi-tenant SaaS with AI inside" },
  ],
};
