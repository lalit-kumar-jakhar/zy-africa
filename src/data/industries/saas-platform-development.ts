import type { IndustryPageData } from "./types";

export const heroSection = {
  eyebrow: "Industries · SaaS & productivity",
  title: "Custom SaaS platform development that ",
  titleHighlight: "survives the security review",
  description:
    "Workspaces and permission matrices, tenant isolation you can prove to an auditor, the enterprise identity bundle procurement asks for, metered billing that reconciles, and per-tenant AI budgets so inference does not quietly eat your margin. Built from India, delivered for Oman first, then the UAE, Saudi Arabia and India.",
  features: [
    "Kroolo, an AI work OS",
    "Famepilot, 25+ review sites",
    "Stylebank, tenant isolation",
    "SSO, SCIM, metered billing",
  ],
  scrollTarget: "#essence",
  ctaText: "Book a 30 minute technical call",
  bgImage: "/static/assets/industries/saas-productivity-industries.webp",
};

export const seo = {
  primaryKeyword: "custom saas platform development",
  intent: "commercial",
  secondaryKeywords: [
    "multi-tenant saas development",
    "b2b saas product development",
  ],
  competingUrl: null,
} as const;

export const essence = {
  title: "The short version",
  description:
    "The commercial facts in one block, so you never have to hunt for them. Multi-tenant SaaS development and B2B SaaS product development are the same build until procurement asks how you prove tenant isolation. The tiles cover: Typical integration set, Phase one timeline, Rate band, Phase one range, with the arithmetic, Stack we actually use and Our commitment.",
  tiles: [
    {
      label: "Typical integration set",
      value:
        "Identity through Entra ID, Okta, Keycloak, UAE PASS and Nafath. Billing and metering through Stripe Billing, Chargebee, Paddle, Orb and Lago. Payments by market: HyperPay, Moyasar, Tap or PayTabs for mada in Saudi Arabia, Thawani and Bank Muscat in Oman, Razorpay, PayU, Cashfree and UPI in India. Business systems: SAP S/4HANA, Dynamics 365, NetSuite, Zoho, Odoo and Tally.",
    },
    {
      label: "Phase one timeline",
      value:
        "1,240 hours across a four person squad, at about 30 productive hours each per week, is roughly 10 to 11 weeks of build. Add discovery and hardening and the calendar is 16 to 24 weeks.",
    },
    {
      label: "Rate band",
      value:
        "$40 to $100 per hour by seniority. QA and junior implementation near the floor, tenancy architecture and identity engineering near the ceiling. Mixed squads blend to $60 to $70.",
    },
    {
      label: "Phase one range, with the arithmetic",
      value:
        "Tenancy and permissions 270 plus core objects, views and search 370 plus billing and reporting 220 plus connectors and migration 190 plus admin, onboarding and hardening 190 equals 1,240 hours. That worked example costs $49,600 to $124,000 at the ends of the rate band, or about $80,600 at a $65 blend. Real scopes land between 900 and 1,400 hours, so read the wider band as the honest number and the example as the arithmetic behind it.",
    },
    {
      label: "Stack we actually use",
      value:
        "React, Next.js, Node.js, Python and Django, MongoDB, PostgreSQL, GenAI, Docker, Kubernetes, Terraform, CI/CD.",
    },
    {
      label: "Our commitment",
      value:
        "No quote before discovery. Tenancy model and permission depth move the number more than feature count does, so a firm price on a first call is either padded or headed for a repricing at change request time. Hosting, per-tenant backups and model inference are recurring cost and belong in your pricing model, not in the build estimate.",
    },
  ],
};

export const anchors = [
  { id: "who-this-is-for", label: "Is this us?" },
  { id: "sub-verticals", label: "What breaks in our kind of SaaS?" },
  { id: "systems", label: "How is tenant data separated?" },
  { id: "compliance", label: "Which standards will we be asked for?" },
  { id: "our-work", label: "What have you built?" },
  { id: "what-goes-wrong", label: "What usually goes wrong?" },
  { id: "build-or-buy", label: "Build it or buy it?" },
  { id: "cost", label: "What does phase one cost?" },
];

export const operations = {
  title: "Where multi-tenant systems earn their keep",
  description:
    "The stages a tenant moves through, and what we build at each one The stages run: Tenant provisioning, Identity and access, Product usage, Metering and entitlement, Billing and dunning and Audit and evidence. Each one is a place a system either holds the fact or loses it.",
  stages: [
    "Tenant provisioning",
    "Identity and access",
    "Product usage",
    "Metering and entitlement",
    "Billing and dunning",
    "Audit and evidence",
  ],
  image: {
    src: "/static/assets/industries/saas-productivity-operations-map.svg",
    alt: "Two band SaaS map covering provisioning, identity and usage, then metering, billing and the audit trail.",
  },
};

export const segments = {
  title: "Who this is for",
  description:
    "Six triggers, and the one system each buyer is usually missing. Not a fit: if you want a fixed price before anyone has written down your permission matrix, we are the wrong agency. Say so now and we will both save a fortnight.",
  items: [
    {
      title: "Founder chasing enterprise logos",
      line: "A $60k deal is parked on a security questionnaire because there is no SAML, no SCIM and no audit log a customer can export themselves.",
    },
    {
      title: "CTO with a regulated anchor tenant",
      line: "A bank or a ministry asked for isolation evidence, and there is no way to produce it without rewriting the data access layer for every other customer too.",
    },
    {
      title: "Operator productising a tool",
      line: "Three customers want what you built for yourself, and the data model has exactly one tenant, no config engine, and no import path off Excel and Tally.",
    },
    {
      title: "Product leader watching AI margin",
      line: "Inference is variable cost sitting underneath a flat seat price, and nobody can answer which tenant spent what.",
    },
    {
      title: "Multi-location or franchise owner",
      line: "Per-location token refresh, rate limits set by a platform you do not control, and no franchise-level permission model.",
    },
    {
      title: "Public-sector or white-label buyer",
      line: "In-country residency is on the tender, and the current vendor cannot pin a tenant to a region.",
    },
  ],
};

export const subVerticals = {
  title: "Find your operation",
  description:
    "Same word, six different businesses. What breaks is different, so what we build is different. The operations covered here are: Work and project management, Documents and knowledge, Vertical SaaS, Multi-location and reputation, Workflow automation and no-code and API-first and usage-metered.",
  items: [
    {
      title: "Work and project management",
      breaks:
        "The permission matrix is role by object by scope, plus guests and client portals, and it is almost always designed after the UI. Board queries go N+1 somewhere past roughly 50,000 items in a workspace, and the notification firehose trains users to mute the product inside a month. Recurring items drift across timezones and daylight saving.",
      build:
        "Inherited object-level ACLs with an explicit sharing model, a denormalised board index rebuilt on write, a digest notification service with quiet defaults, and per-workspace search on OpenSearch or Meilisearch rather than LIKE queries against the primary database.",
    },
    {
      title: "Documents and knowledge",
      breaks:
        "CRDT documents only grow, so a page that opened instantly in month one takes seconds by month nine. You end up storing both the binary CRDT state and a rendered copy for search and export, and the two disagree. Scaling the websocket relay needs Redis pub/sub plus an authoritative backend, not just more instances.",
      build:
        "Per-page subdocuments loaded lazily, snapshot and compact on a schedule, presence kept in the awareness channel and never written into the document, and export fidelity treated as a tested feature. Vocabulary we expect you to recognise: ProseMirror, Lexical, Tiptap, Yjs, state vectors.",
    },
    {
      title: "Vertical SaaS",
      breaks:
        "A customer-specific request becomes a code fork, and by customer twelve you are maintaining twelve products. Migration off Tally or Excel gets handed to support. Then a statutory document format changes on a deadline you did not track.",
      build:
        "A tenant-scoped config engine covering feature flags plus a form and field builder, a staged import pipeline with dry-run, validation report and rollback, and document templates versioned per jurisdiction so a filing format change is a template release rather than a sprint.",
    },
    {
      title: "Multi-location and reputation",
      breaks:
        "The product is really a scheduler living inside other platforms' quotas. Google Business Profile is federated across several APIs with different scopes and base URLs, per-profile edit limits sit well below the volume a multi-location platform wants, and quota increases are granted case by case rather than on request. Duplicate ingest silently doubles your review counts.",
      build:
        "Token refresh per location, 429 backoff with jitter and a quota-aware scheduler, deduplication at ingest keyed on the source identifier, and franchise-level permissions so a franchisee sees their store and nobody else's.",
    },
    {
      title: "Workflow automation and no-code",
      breaks:
        "A replay double-executes a side effect, which means a second invoice or a second payout. Then one tenant's runaway loop starves every other tenant's queue, and editing a live automation rewrites runs that are still in flight.",
      build:
        "Idempotency keys on every action, a dead letter queue with an operator-visible replay UI, per-tenant concurrency ceilings, and immutable workflow versions so in-flight runs finish on the definition they started with.",
    },
    {
      title: "API-first and usage-metered",
      breaks:
        "Revenue leakage, and it is rarely dramatic. Meter events arrive late or not at all, entitlement logic gets duplicated across the gateway, the app and the billing provider, and nobody reconciles the invoice against the raw usage that produced it.",
      build:
        "Idempotent meter ingest with a declared late-arrival window, one entitlement service consulted at the edge, and a usage versus invoice reconciliation job that has to pass green before an invoice run is allowed to send.",
    },
  ],
};

export const systems = {
  title: "Systems we connect to, and the mechanics underneath",
  description:
    "A SaaS build is a product with an integration project living inside it. Here is the estate we expect to meet, and the three mechanisms that decide whether your product can be sold to a regulated buyer at all. Every claim below is checkable in about ten minutes without contacting us.",
  groups: [
    {
      group: "Identity and directory",
      body: "Enterprise IdPs: Microsoft Entra ID, Okta, Ping Identity, Google Workspace, Keycloak. Vendor-side identity platforms: Auth0, WorkOS, Frontegg, Stytch, Descope, Cognito, Zitadel, Ory. National identity providers matter regionally: UAE PASS runs OIDC over OAuth 2.0 with a sandbox stage before production approval, Nafath is SDAIA-operated and supports OIDC and SAML 2.0, and India brings DigiLocker and offline Aadhaar eKYC.",
    },
    {
      group: "Billing, metering and payments",
      body: "Subscription engines: Stripe Billing, Chargebee, Paddle, Lemon Squeezy, Recurly, Zuora, Maxio. Metering: Orb, Metronome, m3ter, Lago, Togai. Acquiring is local and it is not optional: HyperPay, Moyasar, PayTabs, Tap, Amazon Payment Services and SADAD in Saudi Arabia; Thawani, Bank Muscat and OmanNet in Oman; Network International, Telr, Checkout.com and Ziina in the UAE; Razorpay, PayU, Cashfree, CCAvenue, BillDesk, UPI and eNACH in India.",
    },
    {
      group: "Business systems",
      body: "SAP S/4HANA over OData, BAPI or CPI. Oracle Fusion and NetSuite. Dynamics 365. Salesforce, Zoho, Odoo, Focus ERP. Tally, which is XML over HTTP or ODBC and not a modern API. GSTN through a GSP such as ClearTax or Cygnet, ZATCA Fatoora in Saudi Arabia, and a Peppol access point for PINT OM in Oman.",
    },
    {
      group: "Product infrastructure",
      body: "Vector and search: pgvector, Qdrant, Weaviate, Pinecone, OpenSearch kNN, Azure AI Search. Evals and tracing: Langfuse, LangSmith, Braintrust, Ragas. Model gateways: LiteLLM, Portkey, Helicone. Product analytics: PostHog, Amplitude. Warehouse: dbt on Snowflake or BigQuery. Revenue reporting: ChartMogul, Baremetrics.",
    },
    {
      group: "Import and invoice formats",
      body: "UBL 2.1 and Peppol BIS, because e-invoicing is a transmission problem rather than a rendering one. CSV and fixed-width over SFTP, because that is still how an enterprise customer hands you their historic data and how they want the export back. Whatever the incumbent tool exports, which in this region is as likely to be a Tally dump or a spreadsheet as an API. Migration is a module in the cost table for exactly this reason.",
    },
  ],
  distinction: {
    title: "The distinction that saves projects",
    body: "Authentication is not provisioning. SSO tells you who is at the door. SCIM tells you who still works there. Teams ship SAML, mark the enterprise bundle done, then fail the security review on deprovisioning, because the customer's real question was whether a leaver loses access within minutes of HR closing their record. Budget them as two pieces of work. Always.",
  },
  pairs: [
    {
      pair: "Isolation you can prove",
      body: "Your buyer's architect already uses the AWS SaaS Factory vocabulary, so use it back. Pool means shared tables with a tenant column and row-level security, which fits high-volume self-serve and costs you noisy neighbours plus per-tenant backup, restore, export and erasure as engineering problems rather than support tickets. Bridge means shared compute with a schema or database per tenant, which fits mid-market anchor tenants and makes migrations O(tenants): at a couple of thousand schemas, pg_dump, autovacuum and catalog bloat degrade noticeably, and that threshold is our observed experience rather than a documented limit. Silo means dedicated database, storage and often a dedicated deployment, which is what the bank, the ministry and the tender with residency on it are asking for, and your pricing has to cover the deployment fan-out explicitly. Real deployments are hybrid.",
    },
    {
      pair: "The two traps that do most of the damage",
      body: "PostgreSQL row-level security is bypassed by the table owner, and ALTER TABLE with FORCE ROW LEVEL SECURITY is what subjects the owner to its own policies. The part teams get wrong is what FORCE does not reach: superusers and roles carrying BYPASSRLS always bypass row security, and no setting on the table changes that. So an application connecting as the owner has no isolation until you force it, and an application connecting as a superuser has no isolation you can fix that way at all. Neither case raises an error. The practical rule is that the application role owns no tables and holds no BYPASSRLS. Separately, if you sit behind PgBouncer in transaction pooling mode, session-level SET and set_config state leaks across tenants, so set tenant context with set_config and its local flag, or SET LOCAL, inside an explicit transaction every time. The counter-practice we ship on every pooled build is a CI test that fails the build for any query issued without tenant context. It is cheap, it is boring, and it is the only control that keeps working after the team changes.",
    },
    {
      pair: "The SSO handshake",
      body: "Enterprises ask for SP-initiated SSO with an enforced session length, SAML 2.0 even where OIDC exists, JWT with JWKS, mTLS for machine-to-machine, and increasingly WebAuthn and passkeys. Entra ID dominance across Gulf enterprise and Indian IT services follows Microsoft 365 dominance; Keycloak turns up in Gulf government and Indian public-sector stacks where on-premise is a requirement. Key accounts on the IdP's immutable identifier, the Entra object ID claim or the OIDC sub, and never on email: a SAML NameID that carries an email address changes when the user's email changes, and the account orphans. The classic 2am incident has exactly two causes and both are preventable, assertion clock skew and signing certificate rotation with no overlap window.",
    },
    {
      pair: "SCIM 2.0 the way it actually arrives",
      body: "RFC 7643 and RFC 7644 are the contract, and the two IdPs that matter disagree inside it. On group membership PATCH, Entra ID sends value as an object and Okta sends it as an array, so a naive endpoint passes one vendor's certification and fails the other's. A user leaving the company normally arrives as a PATCH setting active to false rather than a DELETE, so products that only handle DELETE leave leavers with working access, which is precisely what the security review tests. Group to role mapping gets asked for in the same breath as an exportable, tenant-scoped audit log. One commercial note: procurement has a name for pricing SSO into the top tier, the SSO tax, and increasingly pushes back on it, so decide your packaging before the deal rather than during it.",
    },
    {
      pair: "The multi-tenant AI leak",
      body: "The classic bug is one line long: chunks embedded into a shared vector index without a tenant filter, so one customer's document surfaces inside another customer's answer. Filter at the index level, not after retrieval. Post-filtering still puts the wrong content in the model's context window, and once it is in the prompt it can be in the answer. Retrieval that survives contact with enterprise documents means hybrid BM25 plus vector, then a reranker such as Cohere Rerank or bge before you consider changing vector store.",
    },
    {
      pair: "The token ledger",
      body: "Inference is variable cost of goods sold sitting under a fixed seat price, so build the per-tenant token ledger on day one: a small model by default with routing to a larger one, prompt and semantic caching, hard caps, and credit-based pricing for AI actions. Evals and tracing are part of the build rather than a later idea, and Langfuse being self-hostable matters when residency is on the contract. Buyers now cite the governance standards by name: the OWASP Top 10 for LLM Applications, the NIST AI Risk Management Framework, ISO/IEC 42001, and the EU AI Act for anyone with EU users. In the Gulf, government buyers increasingly ask for sovereign hosting through Core42 or G42 in the UAE and HUMAIN in Saudi Arabia rather than a direct call to a US model provider. Two things get asked for in writing almost every time: an opt-out from model training, and a token and data-flow disclosure.",
    },
    {
      pair: "SAML 2.0 against OIDC",
      body:
        "Enterprise procurement still asks for SAML by name even when OIDC is on the table, so plan for both rather than betting on the newer one. Prefer SP-initiated flows: IdP-initiated SSO has no CSRF protection by design, which is a property of the flow rather than a bug in your code, so it cannot be patched around.",
    },
    {
      pair: "Gateway, billing engine and merchant of record",
      body:
        "Razorpay and Moyasar move money. Stripe Billing and Chargebee model subscriptions, proration and dunning. Paddle and Lemon Squeezy take the VAT and GST liability onto their own books, which makes them a tax decision your finance lead owns rather than an engineering choice. Confusing the three is how a billing rebuild gets scoped as an integration.",
    },
    {
      pair: "E-invoicing clearance against printing a PDF",
      body:
        "ZATCA Fatoora wants UBL 2.1 XML with a cryptographic stamp and QR, cleared or reported against ZATCA. Oman's Fawtara uses the Peppol five corner model with the PINT OM specification. India needs an IRN and a signed QR from the IRP. None of the three accepts an emailed PDF as an invoice, so invoicing stops being something your system prints and becomes something it transmits and gets acknowledged.",
    },
    {
      pair: "Vector store against search index",
      body:
        "pgvector or Qdrant answer what is similar. OpenSearch or Meilisearch answer what matched. On enterprise documents hybrid BM25 plus vector beats pure vector almost every time, and adding a reranker usually improves answers more than swapping vector stores does, which is the cheaper experiment to run first.",
    },
  ],
};

export const compliance = {
  title: "Standards and compliance",
  description:
    "Five standards carry almost every enterprise questionnaire you will be sent, so they get a row each. Everything after them is jurisdiction, which matters enormously but only in the markets you actually sell into, so it sits in one row and the FAQ goes deeper. We hold none of these ourselves. We build the controls and the evidence that let you hold them.",
  rows: [
    {
      item: "ISO/IEC 27001:2022",
      detail:
        "The information security standard, 93 Annex A controls in 4 themes, and the one that carries most weight with Gulf and Indian buyers. The 2013 transition closed 31 October 2025, so a 2013 certificate is now invalid, worth checking on your vendors as well as yourself. ISO/IEC 27017 and 27018 add cloud and personal-data scope to it rather than certifying separately.",
    },
    {
      item: "SOC 1 and SOC 2",
      detail:
        "SOC 2 is the default US ask. Type I is a point in time and reads as unfinished; Type II needs a 3 to 12 month observation window, so it starts earlier than anyone plans. SOC 1 is the forgotten one: it covers controls feeding your customers' financial reporting, and you get asked the moment your product touches their books.",
    },
    {
      item: "GDPR and UK GDPR",
      detail:
        "Applies on the basis of your EU and UK users, not your incorporation, and it is what most B2B SaaS contracts are actually written against. Article 28 processor terms and subprocessor notice, Article 30 records, Article 33 breach notice inside 72 hours, data subject requests inside a month, and standard contractual clauses plus a transfer assessment for anything leaving the EEA.",
    },
    {
      item: "ISO/IEC 42001 and the EU AI Act",
      detail:
        "ISO/IEC 42001:2023 is the AI management standard now appearing in GCC due diligence for anything with a model in it, and it asks for AI risk assessment, data and model governance and a documented lifecycle. The EU AI Act adds Article 50 transparency duties from 2 August 2026 and machine-readable marking of generated content for existing systems by 2 December 2026.",
    },
    {
      item: "PCI DSS v4.0.1",
      detail:
        "In scope only if you touch card data, and provider-hosted fields keep you in SAQ A with the card number out of your database entirely. The future-dated requirements became mandatory 31 March 2025 and reach the payment page even for SAQ A, so client-side script integrity and change detection stay yours.",
    },
    {
      item: "Regional rules, by where you sell",
      detail:
        "Oman: PDPL under Royal Decree 6/2022, transition closed 5 February 2026, needing verifiable consent records, Arabic notices, a 45 day data subject request workflow and 72 hour breach notice, and where unlawful cross-border transfer carries OMR 100,000 to 500,000, the band a SaaS architecture is most exposed to. Also Fawtara e-invoicing on Peppol PINT OM from August 2026, and the Cloud First policy for public-sector deals. Saudi Arabia: PDPL under SDAIA, NCA ECC-2:2024 with the CCC-2 cloud tracks that make you provider and tenant at once, and ZATCA Fatoora. UAE: PINT AE e-invoicing, with DIFC and ADGM as separate regimes. India: DPDP with consent managers from 13 November 2026 and full obligations 13 May 2027, CERT-In log residency, and card tokenisation. The FAQ takes the ones that change the build.",
    },
  ],
};

export const ourWork = {
  title: "Our work in this sector",
  description:
    "Three platforms. We would rather describe three real builds than show a wall of logos.",
  items: [
    {
      client: "Kroolo",
      href: "/case-studies/ai-work-os-platform-kroolo",
      place: "AI work operating system",
      line: "40+ AI agents, AI project generation from a prompt in about ten seconds, and chat across projects and documents, shipped as web plus iOS and Android. What it proves: we have built an AI-native product surface across three clients on an orchestrated container stack, which is the same shape as the intelligence layer most productivity platforms are now adding.",
      stack: ["React", "Next.js", "Node.js", "Python", "MongoDB", "Kubernetes"],
    },
    {
      client: "Famepilot",
      href: "/case-studies/multi-location-reputation-management-famepilot",
      place: "AI reputation management",
      line: "Aggregates reviews from 25+ review sites. What it proves: we have built a product whose central engineering difficulty is other people's API quotas and token lifecycles, and we run it on infrastructure as code rather than a hand-configured server.",
      stack: ["React", "Django", "PostgreSQL", "Terraform", "CI/CD"],
    },
    {
      client: "Stylebank",
      href: "/case-studies/multi-tenant-apparel-platform-stylebank",
      place: "Multi-tenant B2B platform",
      line: "A Django platform where each tenant runs its own database, its own S3 bucket and its own Redis database number. Celery and django-crontab run roughly 35 daily jobs, a BigQuery warehouse sits behind the reporting, and an OpenRouter LLM handles per-style analysis. What it proves: siloed tenancy taken all the way down through storage and cache, with scheduled work and an LLM feature operating inside those boundaries. This is the architecture a regulated anchor tenant asks for, built rather than described.",
      stack: ["Django", "MySQL", "Redis", "Celery", "BigQuery", "OpenRouter"],
    },
  ],
};

export const whatGoesWrong = {
  title: "What goes wrong",
  description:
    "Ten failure modes we have hit or inherited. Naming them is more useful than a list of reasons to pick us. The first three below are: Tenancy decided late, The enterprise gate discovered during procurement and Billing bolted on after launch.",
  items: [
    {
      title: "Tenancy decided late",
      line: "An enterprise asks for isolation and the answer turns out to be a rewrite of every data access path. Decide in week one, enable FORCE ROW LEVEL SECURITY on pooled tables, and add the CI test that fails any query issued without tenant context.",
    },
    {
      title: "The enterprise gate discovered during procurement",
      line: "SSO, SCIM deprovisioning, audit logs and role granularity arrive on a questionnaire instead of the roadmap. Schedule the bundle as a named phase, and buy identity rather than hand-rolling SAML in the middle of a deal cycle.",
    },
    {
      title: "Billing bolted on after launch",
      line: "Proration and entitlement checks scatter across the codebase, and failed cards turn into involuntary churn that nobody notices for two quarters. One entitlement service, idempotent metered ingest, dunning and smart retries configured before the first paid signup.",
    },
    {
      title: "AI features priced into a flat seat",
      line: "Usage is unbounded and the price is not, so margin erodes fastest on your happiest customers. Per-tenant token ledger, model routing, hard caps, and credit-based pricing for the expensive actions.",
    },
    {
      title: "A demo-driven data model",
      line: "One workspace, one role, no guests, because that was what the pitch needed. Get the permission matrix and object hierarchy signed off as an artifact before any UI work starts.",
    },
    {
      title: "The notification firehose",
      line: "Large workspaces generate more notification rows than domain rows, and users respond by muting the product. Digests, fan-out on read above a workspace size threshold, and quiet defaults.",
    },
    {
      title: "Migration treated as onboarding's problem",
      line: "Whether an account ever activates is usually decided by the import from Excel, Tally, Jira or the incumbent tool. The importer is a module with a mapping UI, dry-run, validation report and rollback, not a support macro.",
    },
    {
      title: "No per-tenant observability",
      line: "The app is slow is an unanswerable complaint when logs are not tenant-tagged. Put tenant_id on every log line, span and metric, run per-tenant p95 dashboards, and throttle noisy neighbours automatically.",
    },
    {
      title: "Integrations counted as one line item",
      line: "Each connector is its own small product: OAuth refresh, quota handling, webhook replay, backfill, error surfacing, and a marketplace review queue that runs on someone else's calendar. Build the first one completely as a template, then price the rest at real hours.",
    },
    {
      title: "Onboarding and activation built last",
      line: "No template workspace, no seed data, and empty states that read as bugs to a trial user. Define the activation moment, instrument it in PostHog or Amplitude before launch, and ship templates with release one.",
    },
  ],
};

export const buildOrBuy = {
  title: "Build, buy, or buy the core and build the edge",
  description:
    "The honest answer is usually the third one, and occasionally the answer is that you should not hire us for that part. The components judged here are: SSO and SCIM, Subscription billing, Entitlements, Usage metering, Permissions and sharing, Real-time collaboration, Search, AI plumbing, Compliance evidence, E-invoicing and Revenue analytics.",
  rows: [
    {
      option: "SSO and SCIM",
      best: "Buy",
      verdict:
        "WorkOS, Frontegg, Auth0, Stytch, Descope, Cognito or Keycloak. Getting it wrong costs 250 to 400 hours hand-rolled against 100 to 200 with a provider, plus certification failures against Entra ID or Okta that surface inside a live deal.",
    },
    {
      option: "Subscription billing",
      best: "Buy",
      verdict:
        "Stripe Billing, Chargebee, which is strong in India with good RBI e-mandate support, or Paddle and Lemon Squeezy if you want the VAT and GST liability off your books. Getting it wrong means proration and credit-note bugs that finance discovers at year end.",
    },
    {
      option: "Entitlements",
      best: "Build",
      verdict:
        "One service, yours. Duplicate the entitlement logic across gateway, app and billing and revenue leaks without anyone noticing.",
    },
    {
      option: "Usage metering",
      best: "Buy the core, build the edge",
      verdict:
        "Orb, Metronome, m3ter, Lago or Togai for the engine, and you build the idempotent ingest and the reconciliation. Otherwise you get dropped or duplicated meter events and invoices nobody can reconcile against raw usage.",
    },
    {
      option: "Permissions and sharing",
      best: "Build",
      verdict:
        "This is your product, not infrastructure. A generic ACL library will not model guests, client portals and scope inheritance.",
    },
    {
      option: "Real-time collaboration",
      best: "Buy the core, build the edge",
      verdict:
        "Yjs, Tiptap, ProseMirror or Lexical for the core. Persistence, compaction, export fidelity and relay scaling are the hard parts and none of them come in the box.",
    },
    {
      option: "Search",
      best: "Buy the core, build the edge",
      verdict:
        "OpenSearch or Meilisearch underneath. Per-tenant indexing, filters and relevance tuning are where the work is.",
    },
    {
      option: "AI plumbing",
      best: "Buy the core, build the edge",
      verdict:
        "LiteLLM, Portkey, Helicone and Langfuse for gateway and tracing. Without your own token ledger, evals and guardrail policy you cannot answer a margin question or a security question.",
    },
    {
      option: "Compliance evidence",
      best: "Buy",
      verdict:
        "Vanta, Drata, Sprinto, Scrut or Secureframe. We help you feed these platforms. We do not certify anything, and neither does any development agency.",
    },
    {
      option: "E-invoicing",
      best: "Buy the core, build the edge",
      verdict:
        "A Peppol access point for PINT OM, ClearTax or Cygnet for GSTN, and you build the document mapping. Building a clearance integration from scratch to meet a statutory date is a bad trade every time.",
    },
    {
      option: "Revenue analytics",
      best: "Buy",
      verdict:
        "ChartMogul or Baremetrics first, then a dbt model on Snowflake or BigQuery. Move when metric definitions start causing arguments in board decks, not before.",
    },
  ],
};

export const cost = {
  title: "What custom SaaS platform development costs, with the arithmetic shown",
  description:
    "Every competitor publishes a total with no hours behind it. Here is the rate, the hours and the multiplication, so you can argue with any line of it. What moves the number: Tenancy model and Billing complexity, flat seats against hybrid metered.",
  drivers: [
    {
      driver: "Tenancy model",
      hours: "Highest impact",
      note: "Pool, bridge and silo produce different builds, not different configurations. This single decision moves the number more than any feature does.",
    },
    { driver: "Permission depth", hours: "High" },
    { driver: "Real-time against polled collaboration", hours: "High" },
    { driver: "Number of live integrations", hours: "High" },
    {
      driver: "Billing complexity, flat seats against hybrid metered",
      hours: "Medium",
    },
    { driver: "Residency and white-label requirements", hours: "Variable" },
  ],
  modules: [
    { module: "Tenancy, identity and permissions", hours: "200 to 400" },
    { module: "Core object model, views and search", hours: "370 to 720" },
    { module: "Billing, entitlements and reporting", hours: "220 to 440" },
    { module: "Connectors and data migration", hours: "140 to 390" },
    { module: "AI layer and the per-tenant token ledger", hours: "120 to 280" },
    { module: "Admin console, onboarding and hardening", hours: "190 to 400" },
  ],
  math: {
    title: "Phase one, added up",
    points: [
      "Tenancy, identity and permissions 270 plus core object model, views and search 370 plus billing, entitlements and reporting 220 plus connectors and data migration 190 plus admin console, onboarding and hardening 190 equals 1,240 hours. Every one of those sits inside its own published range above, so you can move any line and see what it does to the total.",
      "At $40 per hour that is $49,600. At $100 per hour it is $124,000. At a $65 blended rate, about $80,600. The realistic phase-one band across the scopes we see is 900 to 1,400 hours.",
      "Deliberately not in that number, each its own decision rather than a checkbox: the AI layer at 120 to 280, real-time collaboration at 180 to 350, an automation engine at 150 to 300, the enterprise identity bundle at 100 to 200 through a provider or 250 to 400 hand-rolled, and mobile parity.",
      "Recurring rather than build: hosting, per-tenant backups and model inference. Inference scales with usage rather than headcount, which is why it belongs in your pricing model instead of your build budget. The rule stands: no quote before discovery, but you get a band on the first call.",
    ],
  },
};

export const costHighlights = [
  {
    label: "Phase one range",
    value: "$49,600 to $124,000",
    note: "The 1,240 hour worked example at the ends of the rate band, about $80,600 at a $65 blend.",
  },
  {
    label: "Typical timeline",
    value: "16 to 24 weeks",
    note: "Build alone is 10 to 11 weeks. The rest is discovery and hardening.",
  },
  {
    label: "Useful hours",
    value: "900 to 1,400",
    note: "The realistic band across the scopes we see, or $36,000 to $140,000.",
  },
];

export const engagement = {
  title: "Engagement models",
  description:
    "Four models for custom SaaS platform development, each with the downside stated in the same breath. The models are: Discovery sprint, Fixed scope phase one, Dedicated squad, monthly and Enterprise readiness engagement. Pick by how settled the scope actually is, not by preference.",
  items: [
    {
      title: "Discovery sprint",
      good: "Two to three weeks, fixed fee. You get the tenancy decision record, the permission matrix, an integration inventory and a costed phase-one plan.",
      bad: "It produces documents, not software. If your tenancy model and permission matrix are already signed off, you would be paying us for something you already own.",
    },
    {
      title: "Fixed scope phase one",
      good: "900 to 1,400 hours against a written scope, with a fixed price and a fixed date derived from the discovery artifacts rather than from a guess.",
      bad: "The fixed price carries a risk premium inside it, and anything discovered mid-build becomes a change order rather than absorbed work. Scope discipline becomes your job as well as ours.",
    },
    {
      title: "Dedicated squad, monthly",
      good: "A standing team at the blended rate, accumulating your domain knowledge instead of relearning it every engagement.",
      bad: "You carry utilisation risk and you have to supply product decisions every week. A sprint where nobody on your side was available to decide is still a billed sprint.",
    },
    {
      title: "Enterprise readiness engagement",
      good: "RBAC, then audit logs, then SSO, then SCIM. Roughly 100 to 200 hours using an identity provider, aimed squarely at the questionnaire blocking your deal.",
      bad: "It unblocks procurement but ships nothing a customer can see, so for six to eight weeks your roadmap looks stalled to everyone outside the deal. Tell your board before you start, not after.",
    },
  ],
  recommendation:
    "What we usually suggest: a fixed-fee discovery, credited against phase one, then a dedicated squad for the build.",
};

export const delivery = {
  title: "How we deliver custom SaaS platform development",
  description:
    "Five phases, each named by what it produces. A generic waterfall diagram would tell you nothing. The phases are: Tenancy decision record, Interface contract, Walking skeleton, Release candidate and Handover pack. Each is named by the artifact it hands you, so you can ask to see one.",
  items: [
    {
      phase: "Tenancy decision record",
      line: "Silo, pool or bridge, chosen and justified in writing. The permission matrix as role by object by scope, including guests and client portals. A residency plan per tenant. The CI tenant-context test specified before anyone writes a query.",
    },
    {
      phase: "Interface contract",
      line: "OpenAPI 3.1 for REST, AsyncAPI for events, RFC 9457 problem details for errors, cursor pagination, an Idempotency-Key header on POSTs, webhook signing as HMAC-SHA256 over timestamp and payload with dual-secret rotation, a retry and dead letter policy, and static egress IPs agreed now rather than retrofitted into a serverless architecture halfway through an enterprise deal.",
    },
    {
      phase: "Walking skeleton",
      line: "Deployed, tenant-aware, auth working end to end, one core object, one connector, per-tenant tracing live. This is the first thing you can put in front of a customer.",
    },
    {
      phase: "Release candidate",
      line: "Importer with dry-run and rollback, entitlement service, dunning, activation instrumentation, a load test report at your target tenant sizes, and per-tenant p95 dashboards.",
    },
    {
      phase: "Handover pack",
      line: "Runbooks, documented RPO and RTO, a data map and subprocessor list ready to attach to a DPA, an escrow-ready build, and source in your repositories from day one rather than ours.",
    },
  ],
};

export const nonFunctional = {
  title: "The technical buyer's checklist",
  description:
    "Copy this and run it against us, or against anyone else quoting for custom SaaS platform development. The groups are: Isolation, Identity, API and webhooks, Observability and performance, Data protection, AI, Accessibility, Procurement evidence and Certifications, stated plainly. Copy any line straight into your own requirements document.",
  groups: [
    {
      group: "Isolation",
      body: "FORCE ROW LEVEL SECURITY on pooled tables. A CI test that fails untenanted queries. Per-tenant backup, restore, export and erasure paths. Region pinning per tenant.",
    },
    {
      group: "Identity",
      body: "SP-initiated SAML 2.0 and OIDC with enforced session length. Accounts keyed on the IdP's immutable identifier, the Entra object ID claim or the OIDC sub, never on email. SCIM 2.0 tested against both Entra ID and Okta. Deprovisioning honoured when active is set to false. SCIM group to role mapping. An exportable, tenant-scoped audit log.",
    },
    {
      group: "API and webhooks",
      body: "An OpenAPI 3.1 contract. RFC 9457 errors. Cursor pagination. An Idempotency-Key header. 429 with Retry-After. HMAC over timestamp and payload with dual-secret rotation. At-least-once and unordered delivery semantics documented rather than assumed. Static egress IPs and mTLS callbacks available on request.",
    },
    {
      group: "Observability and performance",
      body: "tenant_id on every log line, span and metric. Per-tenant p95 dashboards. Noisy-neighbour throttling. A named load target, for example board queries at 50,000 items in a workspace.",
    },
    {
      group: "Data protection",
      body: "A data subject request workflow meeting Oman's 45 day SLA. A 72 hour breach notification path. Consent stored as a record with timestamp, purpose, notice version and actor. Arabic notices. 180 days of logs held inside India for CERT-In.",
    },
    {
      group: "AI",
      body: "An opt-out from model training in writing. Per-tenant token ledger and caps. Tenant filter applied at the vector index rather than after retrieval. An eval suite and documented guardrails. A mapping against the OWASP Top 10 for LLM Applications.",
    },
    {
      group: "Accessibility",
      body: "WCAG 2.1 AA through EN 301 549 v3.2.1 if you sell to EU consumers.",
    },
    {
      group: "Procurement evidence",
      body: "A third-party penetration test within the last 12 months, documented RPO and RTO, a subprocessor list with change notice, a breach notification SLA written into the contract, source code escrow readiness, a right-to-audit clause, and the ability to answer SIG Lite, SIG Core and CAIQ v4 without a two week scramble.",
    },
    {
      group: "Certifications, stated plainly",
      body: "Zyneto holds no certifications. Not SOC 2, not ISO 27001, not ISO 42001, not PCI DSS. We build the controls and the evidence pipelines that let you get yours, usually alongside Vanta, Drata, Sprinto or Scrut, and we will happily sit in your auditor's calls. Any agency implying it is certified on your behalf should be asked to produce the certificate and the scope statement.",
    },
  ],
};

export const faqs = [
  {
    question:
      "Should we build pooled, siloed or bridge multi-tenancy, and can we change later?",
    answer:
      "Pooled means shared tables with a tenant column. Siloed means dedicated infrastructure per tenant. Bridge sits between, usually shared compute with a schema or database per tenant. The AWS SaaS Factory documentation defines all three, and most real products end up hybrid: pooled for the self-serve book, siloed for the one regulated tenant who pays for it. Changing later is a rewrite of the data access layer rather than a migration, which is why we make this a week one decision.",
  },
  {
    question:
      "Does PostgreSQL row-level security actually isolate tenants if our app connects as the table owner?",
    answer:
      "No, and forcing it only half solves the problem. The table owner bypasses RLS until you run ALTER TABLE with FORCE ROW LEVEL SECURITY, which subjects the owner to its own policies. Superusers and roles with BYPASSRLS bypass row security always, and FORCE does not reach them, so if your application connects as a superuser the table setting will not save you. Nothing errors in either case. Have the application role own no tables and hold no BYPASSRLS, then open a psql session and test it yourself in ten minutes. While you are there, check your connection pooler: under PgBouncer transaction pooling, session-level SET state leaks across tenants, so set tenant context with set_config and its local flag, or SET LOCAL, inside an explicit transaction.",
  },
  {
    question: "We support OIDC. Do we still need SAML 2.0?",
    answer:
      "In practice, yes. Enterprise procurement asks for SAML by name, and Entra ID and Okta dominance means most of your enterprise prospects arrive with a SAML playbook already written. Keycloak shows up where Gulf government and Indian public-sector buyers need on-premise. Start from service provider initiated flows wherever the buyer allows it. The IdP-initiated variant ships with no CSRF defence at all, and because that hole sits in the specification rather than in your implementation, hardening your own code does not close it.",
  },
  {
    question:
      "Why does our SCIM endpoint pass Okta's certification and fail Entra ID's?",
    answer:
      "Because the two send PATCH bodies with different shapes, most visibly value as an object rather than an array on group membership operations. RFC 7643 and RFC 7644 leave enough room for both readings. The second common failure is deprovisioning: it normally arrives as a PATCH setting active to false, not a DELETE, so an endpoint that only handles DELETE leaves former employees with working access.",
  },
  {
    question: "Can we use Stripe to charge customers in Saudi Arabia and India?",
    answer:
      "In Saudi Arabia, most consumer cards are mada-branded and international-only gateways decline them, so you need a local acquirer such as HyperPay, Moyasar, PayTabs, Tap or Amazon Payment Services. In India, Stripe remains invite-only and general signup has not resumed, so plan on Razorpay, PayU, Cashfree, CCAvenue or BillDesk. UPI and eNACH matter more than cards there, no entity except issuers and networks may store card PANs, recurring card mandates need additional factor authentication above the general 15,000 rupee threshold, and a pre-debit notification goes out 24 hours ahead.",
  },
  {
    question:
      "What does Oman's PDPL actually require our software to do, and by when?",
    answer:
      "Royal Decree 6/2022, with Executive Regulations under Ministerial Decision 34/2024 and a grace period that ended 5 February 2026. Practically: verifiable consent records, Arabic notices, a data subject request workflow inside 45 days, breach notification within 72 hours, cross-border transfer gated on explicit consent with Cyber Defence Centre approval for sensitive categories, and a named DPO with published contact details. Fines are modest. Suspension of your processing permit is the penalty that actually stops the business.",
  },
  {
    question: "If we invoice Omani customers, is a PDF enough?",
    answer:
      "No. Fawtara starts with Phase 1 in August 2026 for the notified large taxpayers, then Phase 2 in February 2027 and Phase 3 in August 2027. Oman uses the Peppol five corner model, the Oman Tax Authority became a Peppol Authority in January 2026, and the PINT OM specification was published in April 2026. You need structured XML and an access point, which moves invoicing out of your reporting layer and into your integration layer, with a receipt to prove it landed.",
  },
  {
    question: "Where do we host if a customer demands data stays in Oman?",
    answer:
      "We are not aware of a hyperscaler region inside Oman, so the practical route is a local provider such as Oman Data Park, with the deployment designed so that one tenant can be pinned there without forking the product. The nearest regional options are AWS Bahrain and UAE, Azure UAE North and Central with Saudi Arabia East slated for Q4 2026, Google Cloud Dammam and Doha, and Oracle in Jeddah, Riyadh, Abu Dhabi and Dubai. Confirm current region availability with the provider before you write it into a contract.",
  },
  {
    question: "How do we stop AI features eating our gross margin?",
    answer:
      "Treat inference as variable cost of goods sold sitting under a fixed seat price, and instrument it accordingly. A per-tenant token ledger from day one, a small model by default with routing to a larger one only when needed, prompt and semantic caching, hard caps per tenant, and credit-based pricing for the expensive actions. Gateways such as LiteLLM, Portkey or Helicone give you the routing and the spend data in one place. Langfuse gives you tracing, and it self-hosts, which matters when residency is on the contract.",
  },
  {
    question: "Do we need SOC 2 Type II or ISO 27001 to sell in the Gulf and India?",
    answer:
      "ISO/IEC 27001:2022 carries more weight regionally. SOC 2 is US-centric and Type I is usually rejected as unfinished. The transition from the 2013 version closed on 31 October 2025, so a 2013 certificate is now invalid and worth checking on your own vendors too. SOC 2 Type II needs a 3 to 12 month observation window, which is why it has to start earlier than anyone plans for. ISO/IEC 42001:2023 is now appearing in GCC due diligence for AI-featured SaaS. To be plain about it: Zyneto holds no certifications. We build the controls and evidence pipelines that let you get yours.",
  },
  {
    question:
      "What does a phase one cost, and how soon can we put it in front of a customer?",
    answer:
      "The worked example on this page is 1,240 hours, which is $49,600 to $124,000 at the ends of the rate band and about $80,600 at a $65 blend. Real scopes land between 900 and 1,400 hours. A four person squad at roughly 30 productive hours each puts the build at 10 to 11 weeks, and 16 to 24 weeks once discovery and hardening are included. You do not wait until the end to see it: the walking skeleton is deployed and tenant-aware in the first phase, and that is the thing you demo.",
  },
  {
    question: "Who owns the code, and what happens if we stop working with you?",
    answer:
      "Source sits in your repositories from day one, infrastructure is defined as code, and cloud and provider credentials are in your accounts. The handover pack is a named deliverable rather than a favour: runbooks, documented RPO and RTO, a data map and subprocessor list ready to attach to a DPA, and an escrow-ready build. If you take the product in house or move it elsewhere, nothing about the architecture is designed to make that expensive.",
  },
];

export const nextSteps = {
  title: "What happens next",
  description:
    "Four steps with a time attached to each, so booking a call has a known shape.",
  items: [
    {
      step: "A 30 minute technical call",
      line: "Bring your current tenancy model, the security questionnaire you are stuck on, or your integration list. No slides from us.",
    },
    {
      step: "A written read within three working days",
      line: "At no charge. One page covering tenancy, the enterprise identity gap, residency exposure and an hour band for phase one. If it says you do not need us yet, it will say so.",
    },
    {
      step: "A discovery sprint",
      line: "Two to three weeks, fixed fee. Output is the tenancy decision record plus a costed plan. This is where the quote comes from, and the fee is credited against phase one.",
    },
    {
      step: "Build starts with the walking skeleton",
      line: "Deployed and tenant-aware, so you see running software in the first phase rather than at the end of the last one.",
    },
  ],
};

export const hubLinks = {
  title: "Go deeper",
  groups: [
    {
      group: "Build the platform",
      links: [
        {
          label: "Web development",
          href: "/services/web-development",
          note: "The product surface and the admin console",
        },
        {
          label: "Next.js development",
          href: "/services/nextjs-development",
          note: "The application front end",
        },
        {
          label: "Django development",
          href: "/services/django-development",
          note: "The multi-tenant backend and the permission model",
        },
      ],
    },
    {
      group: "Data, AI and automation",
      links: [
        {
          label: "Database development",
          href: "/services/database-development",
          note: "Tenancy, isolation and the reporting store",
        },
        {
          label: "AI agent development",
          href: "/services/ai-agent-development",
          note: "The intelligence layer, with a token ledger under it",
        },
        {
          label: "Chat with documents",
          href: "/services/chat-with-documents-solution",
          note: "Retrieval that filters at the index, not after it",
        },
      ],
    },
    {
      group: "Other sectors",
      links: [
        {
          label: "Professional services",
          href: "/industries/professional-services-software-development",
          note: "Time, billing and the services arm",
        },
        {
          label: "Media and entertainment",
          href: "/industries/media-software-development",
          note: "Rights and catalogue as a tenant scoped problem",
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
    title: "Bring us the security questionnaire you are stuck on",
    description:
      "Send it over with your current tenancy model and your integration list. We will tell you which answers need a build and which ones you can already give, before you commit to anything.",
    ctaText: "Book a 30 minute technical call",
  },
  end: {
    title: "Start with the tenancy decision, not the wireframes",
    description:
      "A discovery sprint runs two to three weeks and produces the tenancy decision record, the permission matrix, an integration inventory and a costed phase-one plan. The fee is credited against phase one if you proceed.",
    ctaText: "Book a 30 minute technical call",
    assurances: [
      "No quote before discovery, but a band on the first call",
      "A written read within three working days",
      "$40 to $100 per hour, by seniority",
    ],
  },
};

export const relatedPosts = [
  "best-practices-in-fastapi-architecture",
  "python-api-development-with-fastapi",
  "chat-with-your-documents",
  "ai-memory",
  "ai-agents-for-business",
  "how-much-does-ai-development-cost",
  "top-devops-best-practices-for-2024",
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
      "Architecture, retrieval and delivery work that applies directly to multi-tenant SaaS platforms.",
  },
};
