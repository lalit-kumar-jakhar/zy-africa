import type { CaseStudy } from "./types";

export const seo = {
  primaryKeyword: "ai work os development",
  intent: "commercial",
  secondaryKeywords: [
    "work management platform development",
    "ai productivity platform",
  ],
  competingUrl: "/industries/saas-platform-development",
} as const;

export const kroolo: CaseStudy = {
  slug: "ai-work-os-platform-kroolo",
  clientName: "Kroolo",
  confidentiality: "named-no-metrics",
  approvalRecord:
    "Drafted 2026-08-07 from portfolio.ts and public store listings, coded 2026-08-13. No client approval sought. No metric or quote claimed. BLOCKING BEFORE live: true, all flagged in the draft as inference rather than record: (1) which runtime carries model serving versus the API, which decision 1 rests on; (2) whether MongoDB is the primary store or sits beside something relational, which decision 2 rests on; (3) whether a vector store exists and which one; (4) how Kubernetes is hosted, self-managed or EKS, GKE or AKS; (5) engagement dates, duration and team shape by role; (6) what was explicitly out of scope; (7) whether Zyneto built the whole product or a defined slice, the highest-risk assumption on the page since it currently reads as full ownership because portfolio.ts does; (8) whether evaluation and cost metering were in fact instrumented, because if they were, the openQuestions admission is wrong and must be replaced. CONFIRMED 2026-08-20 by the user: engagement model is a dedicated team, and Zyneto built DEFINED SLICES rather than the whole product, which resolves the highest-risk assumption on this page; the standfirst was corrected accordingly. Client holds the account, domain, hosting and store listings; Zyneto sets up, configures and manages. SLICES NAMED 2026-08-20 by the user: the AI features, prompt to project generation, the agents and the automations. The standfirst and two scopeFacts were rewritten so the page no longer reads as full product authorship; the four buildBlocks all sit inside that slice and were left as written. STILL BLOCKING: items 1, 2, 3, 4, 6 and 8 of the list above.",

  h1: "AI work OS development for Kroolo: multi-tenant SaaS with AI inside the product",
  metaTitle: "Kroolo: AI Work OS Development Case Study | Zyneto",
  metaDescription:
    "AI work OS development for Kroolo: tenant scoped retrieval, agent permissions and model cost accounted inside the product, on web, Android and iOS.",
  standfirst:
    "Kroolo is an AI work operating system: projects, tasks, goals and documents in one workspace, with generation and agents built into the work itself. We sat with Kroolo's team for the length of the project and built the AI layer inside it: prompt to project generation, the agent catalogue and the automations that write back into the workspace, across web, Android and iOS. The brief sat between work management platform development and AI productivity platform work, and the tenant boundary decided both.",
  coverImage: "/static/assets/portfolio/kroolo.webp",

  author: { name: "Zyneto engineering", role: "Delivery team" },
  datePublished: "2026-08-13",
  lastReviewedDate: "2026-08-13",

  rail: {
    sector: "AI and productivity software",
    market: "Global",
    engagementType: "Dedicated team",
    platforms: ["Web", "Android", "iOS"],
    stack: ["React", "Next.js", "Node.js", "Python", "MongoDB", "GenAI", "Docker", "Kubernetes"],
    liveLinks: [
      { label: "kroolo.com", url: "https://kroolo.com" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.kroolo.app" },
      { label: "App Store", url: "https://apps.apple.com/app/id6740263578" },
    ],
  },

  domainContext: {
    heading: "What makes AI work OS development hard inside a multi-tenant product",
    blocks: [
      {
        title: "The tenant boundary has to survive retrieval",
        body: "In a relational store the tenant filter is one predicate the ORM will not let you forget. Move that data into a vector index and the boundary becomes a metadata filter, and a filter applied after the nearest neighbour search is weaker than one applied inside it. Embeddings are derived copies, so deletion and permission changes have to reach the index, not just the row.",
      },
      {
        title: "Inference cost follows behaviour, seats do not",
        body: "Per seat pricing assumes cost per account stays flat. Put a model call inside a feature people use all day and cost tracks usage instead, with a thin slice of accounts generating most of it. You need metering at the unit the price is set on, a budget enforceable mid request, and a degraded answer rather than a failure when it is hit.",
      },
      {
        title: "Non-deterministic output breaks the test suite",
        body: "The same input will not return the same answer twice, so assertions stop being the safety net. A fixed evaluation set scored before release replaces them, plus production signals: how often a draft gets edited, regenerated or abandoned. None of it is attributable unless prompt and model version are stored with the output. Latency counts here too, because a call inside a click has the interaction's budget, not the API's.",
      },
      {
        title: "Autonomy is a permissions design first",
        body: "An agent that creates tasks and edits documents needs its own identity, scoped to what the person invoking it could already do, never a service account. Every action wants an audit row naming the agent and the human behind it. And whatever an agent does, a human has to be able to reverse.",
      },
    ],
  },

  situation:
    "Kroolo sells an AI work operating system to teams anywhere: projects, tasks, goals, documents and collaboration in one workspace, on the web and both mobile stores. What separates it from a task tracker is where the AI sits. Each workspace is its own tenant, and the retrieval behind an answer has to read that workspace and nothing past it. Multi-tenant SaaS problem and AI infrastructure problem at once, and the two refuse to separate.",

  buildBlocks: [
    {
      heading: "Prompt to project generation",
      body: "Turns a written brief into structured work: tasks, sub-tasks, owners and dates written as real records in the workspace, not chat text a user copies out.",
    },
    {
      heading: "Conversational retrieval over workspace content",
      body: "The surface behind Chat with Anything, answering from a user's own projects, tasks and documents, scoped to the asking workspace.",
    },
    {
      heading: "The agent layer",
      body: "Agents that act on work items rather than describe them: drafting, updating, summarising, writing results back into the workspace.",
    },
    {
      heading: "Dashboards over the live work graph",
      body: "Analytics computed from the records the agents write, plus workflow that adapts to observed team patterns. One graph, both directions.",
    },
  ],

  decisions: [
    {
      decision: "Python next to Node rather than one runtime",
      alternativeRejected: "Everything in Node, calling models over HTTP",
      reason:
        "The model side moves at its own pace in a Python ecosystem, so an inference change need not force an API release.",
      tradeoffAccepted:
        "Two runtimes, two dependency chains, a boundary crossed on a hot path.",
    },
    {
      decision: "MongoDB as the primary store for the work graph",
      alternativeRejected: "A relational schema per entity type",
      reason:
        "Projects, tasks, goals and documents are heterogeneous, and generated content adds shapes no schema anticipated.",
      tradeoffAccepted:
        "Relational guarantees now enforced in application code, and cross-entity reporting that costs more than a join.",
    },
    {
      decision: "Kubernetes rather than a managed platform",
      alternativeRejected: "A PaaS with per service scaling",
      reason:
        "Model serving and CRUD have different resource profiles, so splitting them at pod level stops a burst of generation starving the app.",
      tradeoffAccepted:
        "A cluster to run, upgrade and secure, a standing cost paid every quarter.",
    },
  ],

  reusableArtifact: {
    heading: "Tenant isolation checkpoints for an AI feature",
    intro:
      "Six layers where a multi-tenant AI feature can leak, and what escapes at each one if the check is missing.",
    columns: ["Layer", "What enforces isolation", "What leaks if you skip it"],
    rows: [
      ["Request", "Workspace resolved server side", "A client-supplied workspace id"],
      ["Retrieval", "Tenant id as a pre-filter, not a post-filter", "Neighbours from another tenant, silently ranked"],
      ["Prompt assembly", "Chunk permissions re-checked at query time", "A document revoked yesterday, quoted today"],
      ["Model call", "No cache keyed on prompt text alone", "One tenant's answer served to another"],
      ["Agent action", "Agent inherits the invoking user's rights", "An agent writing where the human cannot"],
      ["Deletion", "Embeddings on the record's delete path", "Data outliving its own deletion request"],
    ],
    note: "Retrieval is the row most often missed, because a post-filter looks correct in every test that only queries one tenant.",
  },

  shipped: {
    capabilities: [
      "Prompt to project generation, written as real records",
      "Conversational query over projects and documents",
      "Agent automation writing back into the workspace",
      "Live dashboards, document creation and search",
    ],
    scopeFacts: [
      "One workspace across projects, tasks, goals, documents and collaboration, built with Kroolo's team throughout, with the AI layer as our build scope",
      "More than forty agents in the catalogue",
      "Generation from a prompt in around ten seconds",
      "The AI features ship on web, Android and iOS, sold globally",
    ],
  },

  riskAndHandover: [
    {
      title: "Isolation",
      body: "A retrieval bug in a multi-tenant product is a disclosure, not a display fault, so isolation is tested at every layer in the table above.",
    },
    {
      title: "Ownership",
      body: "The product and both store listings sit with Kroolo, and running on Kubernetes keeps the deployment portable rather than tied to one vendor's primitives.",
    },
    {
      title: "Handover",
      body: "The split between API services and model serving is also the handover line.",
    },
  ],

  commercials: [
    { label: "Engagement model", value: "Dedicated team" },
    { label: "Rate band", value: "40 to 100 USD per hour by role, blending to 60 to 70" },
    {
      label: "How we quote",
      value:
        "No fixed price before discovery, which for AI features has to produce the retrieval scope, expected calls per active user, and the evaluation criteria",
    },
  ],

  openQuestions:
    "Evaluation is what we would do differently. We treated it as something to add once the AI features settled, which is backwards: a frozen evaluation set is cheapest to build while a feature is new and people are still arguing about what a good answer looks like. Retrofit it and you are reconstructing intent from prompts already in production. Cost attribution is the other gap: spend per feature per workspace is what pricing needs, and one user action can fan out into several calls.",

  faqs: [
    {
      question: "Which platforms did Kroolo ship on?",
      answer:
        "Three. Web at kroolo.com, Android as com.kroolo.app, iOS as App Store id6740263578. All three are public listings, so the claim is checkable without asking us.",
    },
    {
      question: "How do you stop an AI feature reading another tenant's data?",
      answer:
        "Filter during the search, not after it. A tenant predicate applied to the results of a nearest neighbour query is weaker than one applied inside it. Then re-check document permissions at query time rather than trusting index time.",
    },
    {
      question: "How do you test a feature that answers differently every time?",
      answer:
        "You score instead of asserting. A fixed input set with graded expectations, run every release, plus what users do next: edits, regenerations, abandonment. Store prompt and model version or a regression cannot be traced.",
    },
  ],

  links: {
    service: { label: "AI agent development", href: "/services/ai-agent-development" },
    industry: { label: "SaaS and productivity", href: "/industries/saas-platform-development" },
    blogs: [],
  },

  relatedCaseStudies: [
    { label: "Al Amri Express", href: "/case-studies/grocery-delivery-oman-al-amri-express", note: "Grocery delivery in Oman" },
    { label: "Stylebank", href: "/case-studies/multi-tenant-apparel-platform-stylebank", note: "Multi-tenant apparel operations" },
  ],
};
