import type { CaseStudy } from "./types";

export const seo = {
  primaryKeyword: "garment accounting software",
  intent: "commercial",
  secondaryKeywords: [
    "job work reconciliation software",
    "fabric valuation reporting",
  ],
  competingUrl: "/industries/manufacturing-software-development",
} as const;

export const cheersagar: CaseStudy = {
  slug: "garment-accounting-reporting-cheersagar",
  clientName: "Cheersagar",
  confidentiality: "named-no-metrics",
  approvalRecord:
    "Drafted 2026-08-07 and rewritten the same day when the stack was corrected, coded 2026-08-13. Confirmed facts only: a separate product on FastAPI and PostgreSQL, integrated with Zoho and an internal CRM, with reporting and AI based business decisions on top, three years on dedicated resources. CONTAMINATION RULE IN FORCE: the first draft described BigQuery, Celery over Redis, django-crontab, an OpenRouter call, Periskope delivery, roughly 35 scheduled jobs and two Zoho accounts. Every one of those is Stylebank's, taken from its architecture document while the three products were wrongly believed to be one platform. All of it was deleted rather than reworded. No client approval sought. No metric, quote or outcome claimed. STATUTORY CONTENT: the GST material was cross-checked 2026-08-13 against every other page; no other page states SAC 9988, ITC-04 or the 2,500 rupee threshold, so there is nothing to contradict, and manufacturing-apparel already disclaims being a GST Suvidha Provider, which is consistent with the positioning here. Re-verify the rates and dates before go-live, since tax slabs move. BLOCKING BEFORE live: true: team composition by role, since dedicated resources gives the model and not the shape; and confirmation that the openQuestions admissions are recorded history rather than inferred design judgement. Portfolio screenshot is a placeholder pending a real asset. CONFIRMED 2026-08-20 by the user: engagement model is fixed scope, corrected from the inferred dedicated resources on time and materials. STILL BLOCKING: team composition by role, and confirmation that the openQuestions admissions are recorded history rather than inferred design judgement. ADMISSIONS CONFIRMED 2026-08-20 by the user: the openQuestions admissions are recorded history, not design judgement inferred from the architecture, so they stand as written. TEAM CONFIRMED 2026-08-20 by the user: 3 backend, 2 frontend, 1 QA, 0.5 DevOps and a part time project manager. The same composition was supplied for cheersagar and doradori together, since they were asked as a pair. NOTHING BLOCKING remains on this study.",

  h1: "Garment accounting software and reporting: what we built for Cheersagar",
  metaTitle: "Cheersagar: Garment Accounting Software | Zyneto",
  metaDescription:
    "Garment accounting software for Cheersagar: Zoho and CRM integration, job work reconciliation and AI decision support on FastAPI and PostgreSQL.",
  standfirst:
    "Cheersagar keeps its books in Zoho and its customer relationships in an internal CRM. We built the layer between them on FastAPI and PostgreSQL: the integrations, the reporting the business runs on, and an AI layer that writes the read on a number without ever producing the number. Job work reconciliation software and fabric valuation reporting are the two halves that decide whether a margin figure survives scrutiny.",

  author: { name: "Zyneto engineering", role: "Delivery team" },
  datePublished: "2026-08-13",
  lastReviewedDate: "2026-08-13",
  coverImage: "/static/assets/portfolio/cheersagar.webp",
  rail: {
    sector: "Garment manufacturing and trade",
    market: "India",
    engagementType: "Dedicated resources",
    platforms: ["Web"],
    stack: ["FastAPI", "Python", "PostgreSQL", "Zoho integration", "Internal CRM integrations"],
    liveLinks: [],
    deliveryFacts: [
      { label: "Duration", value: "Three years" },
      { label: "Public links", value: "None. Internal finance software." },
    ],
  },

  domainContext: {
    heading: "What makes garment accounting software hard",
    blocks: [
      {
        title: "Goods move without a sale",
        body: "Under Section 143 of the CGST Act a principal sends inputs or capital goods to a job worker without paying tax. They travel on a delivery challan under Rule 45, not an invoice, so the system has to issue a document that carries quantity and value but posts no revenue. Returns are declared in ITC-04, half yearly above 5 crore aggregate turnover and annually at or below. Inputs have one year to come back and capital goods three, or the dispatch is deemed a supply.",
      },
      {
        title: "The rate depends on the piece, not the customer",
        body: "Textile and apparel job work sits at a concessional 5 percent under SAC 9988, while residual job work went to 18 percent under the two slab change effective 22 September 2025. Garments are 5 percent up to 2,500 rupees per piece and 18 percent above. The threshold is per piece, so one invoice line can cross it while the line under it does not, and rate has to resolve from unit price at posting.",
      },
      {
        title: "Compliance runs on clocks",
        body: "E-invoicing applies from 5 crore aggregate annual turnover, and since 1 April 2025 taxpayers at 10 crore and above have 30 days to report a document to the IRP, after which no IRN is issued. E-way bills are needed above 50,000 rupees, including challan based job work movement, which most generic ERPs never emit.",
      },
      {
        title: "Valuation is where the errors hide",
        body: "Closing stock has to cover work in progress mid line with partial labour absorbed, goods at a third party, and fabric in transit. Consumption posts at actual issue against a cut order. Backflushing on finished goods receipt back-calculates from standard, erasing every yield variance the season had to teach.",
      },
    ],
  },

  situation:
    "Cheersagar keeps its books in Zoho and its customer relationships in an internal CRM that predates the accounting move, and neither system knew the other existed. Any question crossing the two, which style is earning, which customer is slow, how this month reads against the last, meant exporting from both and joining by hand in a spreadsheet. The second problem was that nobody wanted a new place to look: the people who need these numbers are not the people who log into either system, and a garment business runs on a morning figure rather than an interactive one. So the brief was not a dashboard. It was to make the joined view exist, keep it current, and put a defensible read on top of it.",

  buildBlocks: [
    {
      heading: "The Zoho integration and its token problem",
      body: "One service owns everything that talks to Zoho: invoices, sale orders, credit notes, customers. It holds the OAuth refresh, so no other part carries a credential and rotating access is one change.",
    },
    {
      heading: "The internal CRM on the other side",
      body: "The CRM holds what the accounting entries do not explain: who the customer is to the business, what was agreed, what is in flight. That is what turns a ledger row into something a person can act on.",
    },
    {
      heading: "A reporting model over PostgreSQL, not over either source",
      body: "Accounting and CRM extracts land in one schema and join there, so reports read from a shape designed for reporting rather than two systems designed for transactions.",
    },
    {
      heading: "AI based business decisions, with the model kept off the arithmetic",
      body: "The figures are computed first. The model then reads a completed row set and writes what moved, what it means and what to look at. It never produces the number it describes.",
    },
  ],

  decisions: [
    {
      decision: "Zoho stays the book of record. The platform never posts the primary entry",
      alternativeRejected: "A ledger inside the product, with Zoho as one more destination",
      reason:
        "Statutory accounting has to live where the returns are filed from, and a second ledger creates a reconciliation nobody asked for.",
      tradeoffAccepted:
        "Every figure the platform shows is a derived copy, only as fresh as its last sync, so a report compared against Zoho mid afternoon can differ without either being wrong.",
    },
    {
      decision: "The model writes commentary over aggregates it did not compute",
      alternativeRejected: "Letting the model query and calculate",
      reason:
        "A language model drafts good narrative over a number that is already correct. It is not an arithmetic engine, and a wrong figure in a finance report costs more than a missing paragraph.",
      tradeoffAccepted:
        "Every number the commentary might cite has to exist before the model runs, so a new angle of analysis means a new aggregate, not a new prompt.",
    },
    {
      decision: "Join accounting to CRM once, centrally, rather than per report",
      alternativeRejected: "Each system reporting on itself, the join left to the reader",
      reason: "Every question worth asking crosses the two, and a join repeated per report is a join that disagrees with itself.",
      tradeoffAccepted:
        "A Zoho customer to CRM account mapping somebody has to maintain. When it drifts, the failure is a quietly missing row rather than an error.",
    },
  ],

  reusableArtifact: {
    heading: "Garment movements, and the document each one actually needs",
    intro: "Most accounting packages can only emit an invoice.",
    columns: ["Movement", "Document", "Rate", "Also required"],
    rows: [
      ["Inputs out to a job worker", "Delivery challan, Rule 45", "No tax on the movement", "E-way bill above 50,000; ITC-04 as sent"],
      ["Processed goods returning", "Challan against the original", "No tax", "ITC-04 as received; back in one year, three for capital goods"],
      ["Job work billed back", "Job worker's tax invoice", "5 percent textile and apparel, SAC 9988; 18 percent residual", "Nothing further"],
      ["Garment sold, 2,500 rupees or less per piece", "Tax invoice", "5 percent", "IRN from 5 crore AATO"],
      ["Garment sold, above 2,500 rupees per piece", "Tax invoice", "18 percent", "IRN from 5 crore AATO"],
    ],
    note: "Row one is where stock leaves the books entirely if the system can only emit invoices.",
  },

  shipped: {
    capabilities: [
      "Zoho integration covering invoices, sale orders, credit notes and customers, with OAuth refresh held in one service",
      "Internal CRM integration, bringing the commercial record next to the accounting record",
      "A reporting model on PostgreSQL where the two sources join",
      "Operational and financial reports the business runs on",
      "AI written commentary over completed figures",
    ],
    scopeFacts: [
      "Scope, not results: two source systems reconciled into one reporting model",
      "Three year engagement on dedicated resources",
    ],
  },

  riskAndHandover: [
    {
      title: "Credentials",
      body: "Zoho authentication and token refresh sit in one service, so rotating access is one change in one place.",
    },
    {
      title: "Book of record",
      body: "Zoho stays the book of record and the reporting model is a derived copy, so a disputed figure is settled in Zoho, never in a report.",
    },
    {
      title: "Handover",
      body: "What transfers is the mapping and the definitions: how a Zoho customer resolves to a CRM account, and what each reported figure counts. The code is the smaller half.",
    },
  ],

  commercials: [
    { label: "Engagement model", value: "Fixed scope" },
    { label: "Team", value: "3 backend, 2 frontend, 1 QA, 0.5 DevOps and a part time project manager" },
    { label: "Rate band", value: "40 to 100 USD per hour by role, blending to 60 to 70" },
    {
      label: "How we quote",
      value: "No fixed price before a discovery that produces the integration inventory and the report list.",
    },
  ],

  openQuestions:
    "The customer mapping between Zoho and the CRM is maintained by hand, and it should have had an owner and an exception report on day one rather than after the first argument about a missing account. It is the quietest failure in the system, because a broken mapping produces a report that is complete looking and wrong. Second, the commentary is only as good as the figures beneath it: given a style with thin history the model still writes a confident paragraph. A minimum evidence gate is the next change.",

  faqs: [
    {
      question: "Why send goods to a job worker on a challan instead of an invoice?",
      answer:
        "Section 143 of the CGST Act lets a principal move inputs or capital goods without paying tax, and Rule 45 makes the delivery challan the document. An invoice would record a sale that never happened and take stock off the books while the principal still owns it. The movement goes into ITC-04 instead.",
    },
    {
      question: "Does the AI produce the numbers in these reports?",
      answer:
        "No. Every figure is computed before the model is called, and the model writes over a finished aggregate. Once a model computes a number in a finance report, nobody downstream can tell a rounding error from an invention.",
    },
    {
      question: "Why does the same garment carry two different GST rates?",
      answer:
        "The threshold is per piece: 5 percent at or below 2,500 rupees, 18 percent above. Rate resolves from unit price at posting, not from a customer or item setting.",
    },
  ],

  links: {
    service: { label: "Database development", href: "/services/database-development" },
    industry: { label: "Retail and e-commerce", href: "/industries/retail-software-development" },
    blogs: [],
  },

  relatedCaseStudies: [
    { label: "DoraDori", href: "/case-studies/garment-erp-doradori", note: "The garment ERP alongside it" },
    {
      label: "Stylebank",
      href: "/case-studies/multi-tenant-apparel-platform-stylebank",
      note: "Apparel operations at platform scale",
    },
  ],
};
