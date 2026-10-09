import type { CaseStudy } from "./types";

export const seo = {
  primaryKeyword: "reputation management software",
  intent: "commercial",
  secondaryKeywords: [
    "multi location review management",
    "review response automation",
  ],
  competingUrl: null,
} as const;

export const famepilot: CaseStudy = {
  slug: "multi-location-reputation-management-famepilot",
  clientName: "Famepilot",
  confidentiality: "named-no-metrics",
  approvalRecord:
    "Drafted 2026-08-07 from portfolio.ts and the live site, coded 2026-08-13. Famepilot is a client product, not a Zyneto venture, confirmed by the user 2026-08-07, so the about Organization node is honest and should be emitted. No client approval sought. No outcome metric or quote exists, so outcomes and clientQuote are deliberately absent. The portfolio.ts claims about boosting star ratings and amplifying visibility are marketing copy with no evidence behind them and were NOT carried onto this page. BLOCKING BEFORE live: true: confirm the engagement model, which is inferred from the shape of a long-running product build rather than stated anywhere; engagement window and team shape by role; whether aspect level sentiment was actually deferred and how non English text was sequenced, since openQuestions is currently a design judgement rather than recorded history; the cloud provider behind Terraform, left out rather than guessed; and whether the AI layer is a hosted model, a fine tune or a commercial API. CONFIRMED 2026-08-20 by the user: engagement model is fixed scope priced by module. NOTE: the page previously stated Dedicated team, which was wrong, not merely unconfirmed. STILL BLOCKING: engagement window and team shape by role, whether aspect level sentiment was actually deferred, the cloud provider behind Terraform, and whether the AI layer is hosted, a fine tune or a commercial API.",

  h1: "Reputation management software across locations: what we shipped for Famepilot",
  metaTitle: "Famepilot: Reputation Management Software | Zyneto",
  metaDescription:
    "Reputation management software for Famepilot: reviews from 25 plus sites in one dashboard, sentiment classified and replies drafted by AI.",
  standfirst:
    "Famepilot centralises reviews and feedback from more than 25 platforms into one dashboard, classifies each one by sentiment, and drafts a reply. We built the ingestion, the classification and the workflow that turns a review into a published response. Multi location review management and review response automation are the two jobs, and the second only works if the first is honest.",
  coverImage: "/static/assets/portfolio/famepilot.webp",

  author: { name: "Zyneto engineering", role: "Delivery team" },
  datePublished: "2026-08-13",
  lastReviewedDate: "2026-08-13",

  rail: {
    sector: "Reputation management and customer experience software",
    market: "Global",
    engagementType: "Dedicated team",
    platforms: ["Web"],
    stack: ["React", "Python", "Django", "PostgreSQL", "Terraform", "CI/CD pipeline"],
    liveLinks: [{ label: "famepilot.com", url: "https://famepilot.com" }],
  },

  domainContext: {
    heading: "What makes reputation management software hard to build",
    blocks: [
      {
        title: "Every review source disagrees with every other one",
        body: "Each platform ships a different API shape, auth model and rate limit, and they disagree on what a review even is: a star value only, sub ratings, one owner reply, or a thread. Mutability catches people out. Reviews get edited, hidden by the platform, or deleted by their author weeks later, and deletions rarely arrive as an event you can subscribe to. A connector that only pulls new records drifts, and the drift surfaces as a count that no longer matches the platform's own.",
      },
      {
        title: "Short text is the worst case for sentiment",
        body: "Reviews are fragments. Sarcasm reads as praise, one review holds a compliment about the food and a complaint about the parking, and vocabulary flips by industry: quiet is good for a hotel room and bad for a bar. Transliterated text is harder again, where someone types Hindi in Latin script. A single polarity label also discards what an operator needs: the aspect that caused the rating, not its direction.",
      },
      {
        title: "Listings consistency is a data quality problem",
        body: "Local search has to resolve a business to one entity before it can rank it. Name, address, phone and category recorded inconsistently across directories create competing records, and the wrong ones outlive the correction. For a group with dozens of sites, the expensive version is two listings for one store splitting its review count.",
      },
      {
        title: "Response latency is the metric that moves ratings",
        body: "A reply sent a month later is an archive entry. Replies landing while the author still has the notification are the ones with any chance of prompting an edit, and an owner reply stays visible to future readers whenever written. So the engineering problem is queueing, assignment and drafting rather than model quality. A suggestion arriving after the window closes is worth what no suggestion is worth.",
      },
    ],
  },

  situation:
    "Famepilot sells to brands operating in more than one place: restaurant groups, clinics, retail chains, hotels. Their reputation problem is never a single listing but dozens, each with its own manager, review volume and quality of local data. Without a platform the work is a person opening tabs, because Google, Facebook, Yelp, TripAdvisor and Zomato each want a separate login. Two questions stay unanswerable: which locations are getting worse, and which reviews are still unanswered. The remit was to make both readable from one screen, then make the reply fast enough to be worth sending.",

  buildBlocks: [
    {
      heading: "Ingestion across 25 plus review and listing sources",
      body: "One adapter per platform, normalised into a single review record, so a Zomato review and a Google review sort in one list.",
    },
    {
      heading: "Sentiment classification and response drafting",
      body: "Feedback is classified positive, neutral or negative, and the platform drafts a contextual reply, so the response box is never empty.",
    },
    {
      heading: "Review request campaigns and contact management",
      body: "Contacts live in the platform and automated campaigns run against them, so review volume is something a brand influences rather than awaits.",
    },
    {
      heading: "Listings optimisation across directories",
      body: "Listing data is managed next to the review data, so a correction and the reviews it affects sit in one place.",
    },
    {
      heading: "Multi location analytics and competitor benchmarking",
      body: "Performance per location, rolled up for the group, with competitor benchmarking beside it.",
    },
  ],

  decisions: [
    {
      decision: "A normalised relational core in PostgreSQL rather than one shape per source",
      alternativeRejected: "A document store holding each platform's raw payload as delivered",
      reason:
        "Reporting is the product, and group rollups, per location trend and benchmarking all need joins across one review record.",
      tradeoffAccepted:
        "Normalisation is lossy at the edges, and a new source becomes a schema conversation.",
    },
    {
      decision: "Response suggestions as drafts a person sends, not replies the system publishes",
      alternativeRejected: "Automatic posting above a confidence threshold",
      reason:
        "A public reply carries the brand's name, and short text is where a classifier is least reliable.",
      tradeoffAccepted:
        "Latency stays bounded by human availability, so the metric the product exists to improve depends on someone being logged in.",
    },
    {
      decision: "Infrastructure defined in Terraform with CI/CD from early on",
      alternativeRejected: "Environments provisioned by hand and released manually",
      reason:
        "A product whose value is external integrations releases often, and rebuilds environments when a provider changes something unannounced.",
      tradeoffAccepted:
        "Setup time before any feature shipped, and infrastructure changes go through review rather than a console click.",
    },
  ],

  reusableArtifact: {
    heading: "Five questions to answer per review source before writing the adapter",
    intro: "Each answer changes the design, and each is cheaper now than in production.",
    columns: ["Question per source", "What it decides", "Cost of getting it wrong"],
    rows: [
      ["Are deletions reported, or only current records?", "Append versus windowed reconciliation", "Drift from the platform's own count"],
      ["Rate limit per token or per location?", "Sync schedule, accounts per group", "A backfill starves the live sync"],
      ["Is the review id stable across edits?", "The dedupe key", "Edits arrive as new reviews"],
      ["Are listing fields writable or read only?", "Listings management, real or advisory", "A feature that becomes a checklist"],
      ["Is the token held by the brand or the location?", "Onboarding and renewal", "A location stops syncing, with no error"],
    ],
    note: "Answer these per source, not once per project.",
  },

  shipped: {
    capabilities: [
      "Unified review inbox across sources",
      "Sentiment classification and response suggestions",
      "Contact management and automated review request campaigns",
      "Listings management across directories",
      "Multi location analytics with competitor benchmarking",
    ],
    scopeFacts: [
      "Scope, not results: 25 plus review and listing sources",
      "Global customer base",
      "Multi location brands, analytics rolled up across a group",
    ],
  },

  riskAndHandover: [
    {
      title: "Access and data",
      body: "The platform holds contact data and review history, so access is separated by role and location.",
    },
    {
      title: "Ownership",
      body: "Infrastructure is described in Terraform, so what exists is written in code rather than remembered. Platform credentials belong to the brand.",
    },
    {
      title: "Standing maintenance",
      body: "Every connector is a dependency on somebody else's roadmap. Sources deprecate endpoints and change response shapes, which is running cost rather than defect.",
    },
  ],

  commercials: [
    { label: "Engagement model", value: "Fixed scope, priced by module" },
    { label: "Rate band", value: "40 to 100 USD per hour by role, blending to 60 to 70" },
    {
      label: "How we quote",
      value:
        "No fixed price before discovery, which produces the source inventory, because per source integration effort sets the number, not the feature list.",
    },
  ],

  openQuestions:
    "Sentiment is still one label per review. Reviews carry two opinions more often than not, and a single polarity flattens them, so the aspect that drove the rating stays invisible to whoever writes the reply. Aspect level classification should have been the first target, not a later refinement. The other change is sequencing: non English and transliterated text was treated as an extension of the English path, and it is closer to a separate problem with its own evaluation set.",

  faqs: [
    {
      question: "Which review sources does Famepilot cover?",
      answer:
        "More than 25, including Google, Facebook, Yelp, TripAdvisor and Zomato. For a restaurant or hotel group the vertical specific sources matter as much as the general ones. The current list is on famepilot.com.",
    },
    {
      question: "How accurate is sentiment classification on review text?",
      answer:
        "Accurate enough to triage, not to publish unattended. Short text with mixed sentiment is the hard case, and sarcasm and industry vocabulary both produce confident mistakes. The label decides what a person sees first, nothing more.",
    },
    {
      question: "Does replying to a review improve the rating?",
      answer:
        "Not directly. A reply does not change the star value, but it can prompt the author to edit theirs, and it stays visible to everyone reading the listing later. The part under your control is latency, which is why response time is the number worth managing.",
    },
  ],

  links: {
    service: { label: "NLP development", href: "/services/nlp-development" },
    industry: { label: "SaaS and productivity", href: "/industries/saas-platform-development" },
    blogs: [],
  },

  relatedCaseStudies: [
    { label: "Kroolo", href: "/case-studies/ai-work-os-platform-kroolo", note: "AI inside a multi-tenant product" },
    {
      label: "Stylebank",
      href: "/case-studies/multi-tenant-apparel-platform-stylebank",
      note: "Reconciling many upstream systems",
    },
  ],
};
