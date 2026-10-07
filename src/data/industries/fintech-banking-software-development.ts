import type { IndustryPageData } from "./types";

export const heroSection = {
  eyebrow: "Fintech and banking",
  title: "Fintech and banking software development that ",
  titleHighlight: "survives reconciliation",
  description:
    "Core integration, payment rails, a double-entry ledger, three-way reconciliation, KYC and AML, lending and card issuing. Built for banks and licensed fintechs across Oman, the UAE, Saudi Arabia and India.",
  features: [
    "ISO 20022 native, not MT",
    "Three-decimal Gulf currency",
    "Penny test in month one",
    "Discovery before any number",
  ],
  ctaText: "Book a 30 minute scoping call",
  scrollTarget: "#essence",
  bgImage: "/static/assets/industries/fintech-banking-industries.webp",
};

export const seo = {
  primaryKeyword: "fintech and banking software development",
  intent: "commercial",
  secondaryKeywords: [
    "fintech software development",
    "banking software development",
    "payment gateway development",
  ],
  competingUrl: null,
} as const;

export const essence = {
  title: "The short version",
  description: "The commercial facts in one block, before you scroll. That covers fintech software development, banking software development and payment gateway development, which differ far more in licensing than in code. Those tiles are: Typical integration set, Phase one timeline, Rate band, Phase one range, with the arithmetic, Stack we actually use and Our commitment.",
  tiles: [
    {
      label: "Typical integration set",
      value:
        "A core such as Oracle FLEXCUBE, Infosys Finacle, Temenos Transact, TCS BaNCS or Azentio iMAL. One or more rails from Oman RTGS and MPCSS, UAE Aani and UAEFTS, Saudi sarie and mada, India UPI and NACH, or SWIFT through Alliance Access. Screening through World-Check or ComplyAdvantage, and identity through Mala'a, UAE PASS, Nafath or Aadhaar eKYC.",
    },
    {
      label: "Phase one timeline",
      value:
        "14 to 22 weeks, from a signed integration register to a penny test on one live rail. That assumes sandbox credentials exist on day one. Where they do not, the clock starts when they arrive rather than when the contract is signed.",
    },
    {
      label: "Rate band",
      value:
        "$40 to $100 per hour by role. QA and junior implementation near the floor, ledger design and rail integration near the ceiling. Mixed squads blend to roughly $60 to $70.",
    },
    {
      label: "Phase one range, with the arithmetic",
      value:
        "Onboarding 250, plus ledger 400, plus one rail 180, plus reconciliation 250, plus back office 300, equals 1,380 hours at the floor. QA and partner certification at 15 to 25 percent lifts it to 1,587. At the ceiling the same five modules reach 3,250 hours, so the band is $95,000 to $227,500 at a $60 to $70 blend.",
    },
    {
      label: "Stack we actually use",
      value:
        "Next.js, Node.js, PostgreSQL, Terraform, Grafana and Prometheus, across web and Android. That is the stack running on BankSathi, not an aspirational list.",
    },
    {
      label: "Our commitment",
      value:
        "No quote before discovery. Rail count and migration data quality move the total by more than double, and neither is knowable from a requirements document. Vendor pass-through costs for identity verification, credit bureau, KYB data and processing are quoted on a separate line and never folded into engineering hours.",
    },
  ],
};

export const anchors = [
  { id: "who-this-is-for", label: "Is any of this us?" },
  { id: "sub-verticals", label: "What breaks in our operation?" },
  { id: "systems", label: "How does money become a ledger entry?" },
  { id: "compliance", label: "Which standards will we be asked for?" },
  { id: "our-work", label: "What have you actually built?" },
  { id: "what-goes-wrong", label: "What usually goes wrong?" },
  { id: "build-or-buy", label: "Build it or buy it?" },
  { id: "cost", label: "What does phase one cost?" },
];

export const operations = {
  title: "Where payment systems earn their keep",
  description:
    "The stages a transaction moves through, and what we build at each one In sequence, the stages are: Onboarding and KYC, Screening and risk, Authorisation, Clearing and settlement, Ledger posting and Reconciliation and reporting. Each one is a place a system either holds the fact or loses it.",
  stages: [
    "Onboarding and KYC",
    "Screening and risk",
    "Authorisation",
    "Clearing and settlement",
    "Ledger posting",
    "Reconciliation and reporting",
  ],
  image: {
    src: "/static/assets/industries/fintech-banking-operations-map.svg",
    alt: "Two band payments map covering onboarding, screening and authorisation, then clearing, ledger posting and reconciliation.",
  },
};

export const segments = {
  title: "Who this is for",
  description:
    "Six operations, and the one system each is usually missing. Not a fit: pre-licence and pre-funding, with no sponsor relationship and no core to integrate against. Come back when you have a rail and a regulator, because until then there is nothing for us to build against.",
  items: [
    {
      title: "Conventional bank, Oman or the UAE",
      line: "Head of digital or CIO. The core is FLEXCUBE, Finacle or iMAL, and every channel change becomes a core change request. The gap is an orchestration layer that owns its own state instead of asking the core for permission.",
    },
    {
      title: "Licensed or applying fintech",
      line: "Founder or CTO with a sponsor relationship or a licence application in flight. You have no ledger of record that can prove whose money is whose without reading the sponsor bank's statement.",
    },
    {
      title: "NBFC or digital lender, India",
      line: "You sit inside the RBI Digital Lending Directions perimeter and your apps are reported on CIMS. Credit policy still ships as code, so every change waits on a release.",
    },
    {
      title: "PSP, acquirer or issuer-processor",
      line: "You route mada, Jaywan or RuPay, run an ISO 8583 switch and fight chargebacks against network deadlines. Nothing in the estate gives you a settlement break queue with an age and a named owner on every open item.",
    },
    {
      title: "Islamic bank or takaful operator",
      line: "Your products are Murabaha, Ijarah, Tawarruq or a participants' risk fund. Underneath sits a conventional loan engine with the labels changed, where the product needs a schedule engine built for profit rate and ibra'.",
    },
    {
      title: "Wealth, brokerage or insurance",
      line: "FSA Decision 80/2023 puts the platform itself in scope for approval in Oman. No positions and lot engine ties to the custodian file every night.",
    },
  ],
};

export const subVerticals = {
  title: "Find your operation",
  description:
    "Fintech is six different businesses wearing one word. What breaks is different, so what we build is different. This page covers: Digital banks and BaaS, Lending and Islamic finance, Acquiring and PSPs, Card issuing, Wealth and takaful and AML and screening.",
  items: [
    {
      title: "Digital banks and BaaS",
      breaks:
        "You run the app and the brand while a sponsor bank holds the deposits, so you operate the sub-ledger that says whose money is whose inside a pooled account. Sub-ledger drift against the bank core goes unnoticed for weeks. Returns arrive unmatched. There is no daily balance proof on the morning an examiner asks for one, and in Oman the licensing frame you are building against is CBO Decision 25/2025.",
      build:
        "An append-only double-entry core ledger with balances derived from postings. Three-way reconciliation across the processor file, the bank statement and the internal ledger, running daily from the first transaction. A break queue with aging and one named owner per open item.",
    },
    {
      title: "Lending and Islamic finance",
      breaks:
        "An origination system runs application, bureau pull, decision, stips, documents and funding. A servicing system runs amortisation, payment allocation order, delinquency buckets, payoff quotes and charge-off. The handoff between them is where product rules stop surviving the transfer and allocation order gets rebuilt by hand against a different set of assumptions.",
      build:
        "An externalised, versioned decision policy with champion, challenger and shadow mode, so credit strategy changes without a release. A servicing engine where the schedule is derived rather than imported, including profit-rate products with ibra' early settlement rebate and Hijri accrual where the product calls for it.",
    },
    {
      title: "Acquiring and PSPs",
      breaks:
        "Merchant underwriting and boarding, MID and TID provisioning, auth and capture, batch settlement, funding, interchange qualification and chargeback representment. Residual and interchange errors overpay agents for months before anyone notices. A prohibited MCC gets boarded. Reserve logic starves a good merchant's cash flow.",
      build:
        "A boarding workflow with risk scoring, interchange-aware billing and a residual engine that can be recalculated and explained. A dispute case manager keyed to network deadlines rather than to your sprint calendar.",
    },
    {
      title: "Card issuing",
      breaks:
        "BIN sponsorship, program setup, real-time authorisation, just-in-time funding against a spend policy, 3-D Secure 2.x step-up and controls by MCC. Auth-stream latency budget overruns push you into stand-in or decline. Holds and clears drift apart. Partial reversals and force posts arrive with no matching authorisation.",
      build:
        "A low-latency authorisation service with a deterministic fallback rather than a timeout. A hold and clear reconciliation layer. A policy engine written in operator language, and network tokens through Visa VTS or Mastercard MDES.",
    },
    {
      title: "Wealth and takaful",
      breaks:
        "Suitability at onboarding, custodian integration, model portfolios, rebalancing, tax-lot accounting, corporate actions and performance reporting. Cost basis breaks across transfers, corporate actions get processed by hand, and performance numbers do not tie to the custodian statement.",
      build:
        "A positions and lot engine reconciled nightly against custodian files, and a rebalancer with drift bands. For takaful, a separate participants' risk fund with wakala or mudarabah fee accounting and surplus distribution.",
    },
    {
      title: "AML and screening",
      breaks:
        "Sanctions and PEP screening at onboarding and per payment, transaction monitoring, alert triage, escalation to case, and STR narrative and filing. Alert volume arrives that no team can clear, and fuzzy-match thresholds either flood the queue or quietly miss.",
      build:
        "Case management with an immutable audit trail. Thresholds tuned and back-tested against your own history rather than a vendor default. goAML XML output validated against the current country schema, because the UAE and Oman version theirs independently.",
    },
  ],
};

export const systems = {
  title: "Systems we connect to, and how money becomes a ledger entry",
  description:
    "A regulated build is mostly an integration project wearing a product costume. This is the estate we expect to meet, and the mechanics underneath it that cannot be bluffed. Grouped as: Cores and lending platforms, Rails, switches and hardware, Financial crime, screening and filing, Identity, bureau and decisioning and Issuing, BaaS and insurance platforms.",
  groups: [
    {
      group: "Cores and lending platforms",
      body: "Temenos Transact, Oracle FLEXCUBE with OBDX, Infosys Finacle, TCS BaNCS, Finastra Fusion Essence and Loan IQ, Intellect Design iGCB, Azentio iMAL, ICS BANKS, Codebase Digibanc, Mambu, Thought Machine Vault, 10x Banking, Backbase, Nucleus FinnOne Neo, Lentra, nCino and TurnKey Lender. FLEXCUBE exposes SOAP gateways over JMS and MDB plus a Java and EJB layer, Finacle goes through Finacle Integrator, and BaNCS is web services. REST is usually a wrapper somebody built. Every core holds an end-of-day and beginning-of-day blackout window that rejects writes, and that window shapes the design more than the protocol does.",
    },
    {
      group: "Rails, switches and hardware",
      body: "SWIFT FIN, InterAct and FileAct through Alliance Access or Lite2, with mandatory annual attestation under the Customer Security Programme. Oman RTGS, MPCSS, OmanNet and the Direct Debit System. UAE Aani, UAEFTS, UAEDDS, Jaywan and the WPS payroll file. Saudi sarie, mada over SPAN and SADAD. Buna and AFAQ cross-border. India UPI, IMPS, NEFT, RTGS, NACH with e-mandate, Bharat Connect, AePS and RuPay. ISO 8583 over NFS, Thales payShield 10K and Utimaco hardware security modules, Visa VTS and Mastercard MDES. Each rail carries its own certification calendar, and that calendar belongs on the project plan before the architecture diagram does.",
    },
    {
      group: "Financial crime, screening and filing",
      body: "Oracle FCCM, NICE Actimize, SAS AML, FICO Siron, Fiserv AML Risk Manager, Eastnets, Temenos FCM, Tookitaki, Silent Eight, Napier AI, ComplyAdvantage and Azentio AMLOCK. Screening data from LSEG World-Check, Dow Jones Risk and Compliance, Moody's Grid and LexisNexis Bridger. Filing through goAML for the UAE and Oman financial intelligence units, and FINnet for India. The vendor gives you matches. Threshold tuning, disposition workflow and the audit trail are yours to build.",
    },
    {
      group: "Identity, bureau and decisioning",
      body: "Mala'a National Digital Onboarding Registry, UAE PASS with Emirates ID through ICP, Nafath and Absher, Elm Yakeen and Wathq, Aadhaar eKYC through AUA, KUA and ASA, DigiLocker, CKYCR at CERSAI, and video KYC built to the RBI process. Bureaus: SIMAH, Bayan, AECB, Mala'a, CIBIL, Experian, Equifax and CRIF High Mark. Decision engines: FICO Blaze Advisor, Experian PowerCurve, Provenir, ACTICO, GDS Link, and Drools or DMN where budget is tight.",
    },
    {
      group: "Issuing, BaaS and insurance platforms",
      body: "NymCard, Network International, Magnati, Geidea, HyperPay, PayTabs, Checkout.com, Tap Payments, Moyasar, MyFatoorah, Thawani, Marqeta, Galileo, Thredd, Nium, M2P Fintech, Zeta, Setu, Decentro, Razorpay, Cashfree and Juspay. Insurance and takaful: Guidewire, Duck Creek, Sapiens, Majesco, Socotra, INSTANDA, Novidea, Azentio Beyontec and EbixCash.",
    },
  ],
  distinction: {
    title: "The distinction that saves projects",
    body: "A DIFC or ADGM entity is not under CBUAE onshore rules. DIFC runs Data Protection Law No. 5 of 2020 under its own Commissioner. ADGM runs the Data Protection Regulations 2021, in force from 14 February 2021. Onshore runs Federal PDPL 45/2021 with CBUAE supervision over financial institutions. Teams that treat the UAE as one regime build one data model, one consent flow and one hosting plan, then rebuild all three. The free zone boundary has to be in the architecture from the first diagram rather than discovered at the security review.",
  },
  pairs: [
    {
      pair: "Origination against servicing",
      body: "Origination ends at funding. Servicing starts at the first schedule. Different vendors build them, and the handoff is where product rules and payment allocation order get quietly reinvented by whoever writes the mapping.",
    },
    {
      pair: "Core against engagement layer",
      body: "Temenos Transact, FLEXCUBE, Finacle and iMAL hold the accounts of record. Backbase is an engagement layer. Buying an engagement layer gives you channels, not a ledger, and the difference shows up at the first reconciliation.",
    },
    {
      pair: "Conventional loan engine against Islamic product logic",
      body: "Murabaha, Ijarah and Tawarruq run on profit rates, not interest. Early settlement goes through an ibra' rebate, accrual may follow the Hijri calendar, and the schedule needs Sharia board sign-off. That is not a configuration change to a conventional engine.",
    },
    {
      pair: "Bilateral open banking against a central hub",
      body: "The UK, the EU and Saudi Arabia connect third-party providers to banks bilaterally under a directory and a FAPI profile. The UAE routes every licensed financial institution and provider through Nebras Open Finance LLC, the CBUAE-owned hub. India has no PSD2 equivalent and uses the RBI Account Aggregator framework with a signed consent artefact and ReBIT schemas. Same product idea, three different integration estates.",
    },
    {
      pair: "The ISO 20022 message set, and what each one is for",
      body: "pain.001 is customer initiation from your channel into the bank, and field-level validation happens there or it happens later as a rejection. pacs.008 is the interbank credit transfer, where the end-to-end transaction reference is minted and has to survive every hop. pacs.002 is the status report, and pending is a state rather than a failure, which is why treating it as one causes duplicate sends. pacs.004 is a payment return, an accounting event distinct from a new payment in the other direction. camt.052 is intraday and useful for liquidity but not authoritative. camt.053 is the end-of-day statement you actually reconcile against. camt.054 is advice, not proof of settlement. MT940, MT942 and BAI2 are the legacy statement formats you will still be handed, often as positional extracts from a mainframe.",
    },
    {
      pair: "The five fields that break implementations",
      body: "Structured postal address: hybrid is permitted today, fully unstructured addresses are decommissioned in November 2026, and town name plus country code have to sit in structured fields. If your customer records store an address as three free-text lines, that is a data migration rather than a mapping exercise. The end-to-end transaction reference is your only trace identifier across gpi, and if it is not persisted on the posting you cannot answer where a payment is right now. Purpose codes are read by regulators and screening rules, so defaulting every payment to one code makes a screening ruleset useless. Structured remittance information is where reconciliation data lives or dies. Currency minor units carry ISO 4217 exponent 3 for OMR, KWD and BHD, so one rial is 1,000 baisa, and any code that multiplies by 100 corrupts Gulf money silently.",
    },
    {
      pair: "The payment state machine and idempotency",
      body: "Money APIs need an idempotency key on every mutating call and an explicit state machine with terminal states. A retry loop is not a state machine. Duplicate callbacks, late reversals, UPI deemed-success and the return cycles on card rails all produce the same shape of incident: two debits, one intent, and no evidence about which attempt was real. A retry without an idempotency key is a double debit you cannot later prove was accidental.",
    },
    {
      pair: "The ledger of record",
      body: "An append-only double-entry journal, with balances derived from postings rather than stored and updated in place. Corrections go in as reversing entries with effective dates, so a backdated dispute is representable rather than argued about. Every posting carries the external reference, the transaction reference where one exists, and an effective date separate from the booking date. At 400 to 800 hours this is the single highest-risk module on a regulated build, and it is the one teams try to shortcut into a balances table.",
    },
    {
      pair: "Three-way reconciliation and break management",
      body: "Three sides: the internal ledger, the processor or switch file, and the bank statement as camt.053 or MT940. Daily and automated, from the first transaction rather than from the first complaint. A break queue with aging, one named owner per break, and a documented match rate you can show an examiner. Budget 250 to 450 hours. A commonly cited industry rule of thumb puts exception handling at 50 to 60 percent of all money-movement effort; we have not measured that ourselves, so treat it as a planning heuristic and not as our figure. Defer this module and month three arrives with thousands of unmatched items and nobody able to say which side is wrong.",
    },
    {
      pair: "Regional rail specifics that change the design",
      body: "sarie is ISO 20022 native with alias resolution by mobile number or national ID. Aani and MPCSS resolve by alias and QR. Oman's RTGS runs 24/7 with no batch window, so batch-era reconciliation design does not work there. IBAN has been mandatory on inbound and outbound international transfers in Oman since 1 July 2025 and banks reject non-IBAN transfers, so validate structurally at capture rather than at submission. UPI runs JSON and XML APIs through a sponsor bank with X.509 signing. Card switching is still ISO 8583 over a persistent TCP socket with a two-byte message-length header and echo handling. AFAQ uses MT at the national interface and MX internally, so structured party data has to survive a translation hop without truncation.",
    },
  ],
};

export const compliance = {
  title: "Standards and compliance",
  description:
    "Five standards a financial buyer's procurement pack asks for by name, and one row for every regional rule that changes what the software has to do. Covered here: ISO/IEC 27001, SOC 1 and SOC 2, PCI DSS v4.0.1, GDPR and UK GDPR, DORA, Regulation (EU) 2022/2554 and The regional rules that change the build.",
  rows: [
    {
      item: "ISO/IEC 27001",
      detail:
        "The information security management certification procurement asks for first. It certifies the organisation running the system, not the software. We build to the controls and produce the evidence, and your assessor certifies you.",
    },
    {
      item: "SOC 1 and SOC 2",
      detail:
        "SOC 2 covers security, availability and confidentiality of the service. SOC 1 covers controls that feed your customers' financial reporting, which is the one that appears once you are running settlement, custody or a sub-ledger that lands on someone else's books.",
    },
    {
      item: "PCI DSS v4.0.1",
      detail:
        "All 51 future-dated requirements have been mandatory since 31 March 2025, including 6.4.3 payment-page script inventory and authorisation, and 11.6.1 tamper and change detection. Tokenise at the edge, keep a written scope map, and assume merchants who previously self-assessed lightly are now caught by it.",
    },
    {
      item: "GDPR and UK GDPR",
      detail:
        "Reaches you through EU or UK customers and through data processed on their behalf. Lawful basis, subject access, erasure and breach notification have to be operable by a person rather than described in a policy document nobody has tested.",
    },
    {
      item: "DORA, Regulation (EU) 2022/2554",
      detail:
        "Applying since 17 January 2025. Where it reaches you as an ICT third party, it wants a maintained register, contractual resilience terms, and tested evidence rather than an assertion that failover exists.",
    },
    {
      item: "The regional rules that change the build",
      detail:
        "Oman: Banking Law Royal Decree 2/2025 defines a digital bank in primary legislation, CBO Decision 25/2025 effective 1 June 2025 sets category 1 at OMR 30m and category 2 at OMR 10m paid-up capital, the Open Banking Framework was approved on 29 December 2024, IBAN has been mandatory on international transfers since 1 July 2025, RTGS has been ISO 20022 native and 24/7 since 18 June 2023, PDPL Royal Decree 6/2022 became fully enforceable on 5 February 2026, and FSA Decision 80/2023 requires approval of the electronic insurance platform itself. Saudi Arabia: the Open Banking Framework launched in November 2022 with account information live in 2023 and payment initiation in September 2024, SAMA's Cyber Security Framework and NCA ECC-1:2018 cascade contractually to vendors, PDPL has been in force since 14 September 2023, and SDAIA's transfer regulation and standard contractual clauses were issued in September 2024 with no adequacy list. UAE onshore: Open Finance Regulation Circular 7 of 2023, updated by Circular 3 of 2025 in force 10 July 2025, adds service-initiation rights and routes everything through Nebras Open Finance LLC, under Federal PDPL 45/2021. DIFC runs Data Protection Law No. 5 of 2020 and ADGM the Data Protection Regulations 2021, both separate from onshore. India: payment data localisation from the April 2018 circular, card-on-file tokenisation since 1 October 2022, RBI Digital Lending Directions dated 8 May 2025 with CIMS reporting from 1 November 2025, the Authentication Mechanisms Directions from 1 April 2026, DPDP Rules notified 14 November 2025, and CERT-In six-hour breach reporting with 180-day in-country log retention. SWIFT CBPR+ MT and MX coexistence ended on 22 November 2025, so MX is the baseline and translation is contingency only.",
    },
  ],
};

export const ourWork = {
  title: "Our work in this sector",
  description:
    "One build in the sector and two adjacent engagements. We would rather describe real work and say where it stops than show a wall of logos.",
  items: [
    {
      client: "BankSathi",
      place: "India",
      line: "A fintech platform where users browse, compare and apply for credit cards, savings accounts, loans, insurance and investments across multiple banks. The distinctive part is the advisor model: users earn commission recommending products with no initial investment, supported by financial education, live training and marketing tools. It demonstrates multi-partner product catalogues, application capture across several product types, an agent and commission model, and a production stack with infrastructure as code and metrics attached.",
      stack: ["Next.js", "Node.js", "PostgreSQL", "Terraform", "Grafana", "Prometheus"],
    },
    {
      client: "Up in the Air",
      place: "Financial reporting",
      line: "A web-based financial dashboard for data analysis and reporting, with real-time data integration and customisable reporting. Described by Paul Van Alfen, Managing Director, through TechBehemoths. The review reports a reduction in manual reporting time; we do not hold a verified figure for it and will not attach one.",
      stack: ["Web application", "Real-time integration", "Reporting"],
    },
    {
      client: "Moneteo",
      place: "Custom platform",
      line: "A custom web platform for a financial services company, with modules for workflow automation, API integration and comprehensive testing. Described by Krystian Chlebek, Founder and CEO, through TechBehemoths. This was an internal operations platform rather than a customer-facing financial product, and it is listed as what it was.",
      stack: ["Full-stack web", "Workflow automation", "API integration"],
    },
  ],
};

export const whatGoesWrong = {
  title: "What goes wrong",
  description:
    "Ten failure modes we have hit or inherited. Naming them is more useful than a list of reasons to choose us. It starts with: Three-decimal currencies handled as two, The ledger is really a balances table and Reconciliation deferred until after launch.",
  items: [
    {
      title: "Three-decimal currencies handled as two",
      line: "OMR, KWD and BHD carry ISO 4217 exponent 3, and code that assumes two minor units corrupts Gulf money quietly while the error compounds through every downstream report. Hold the exponent in a data table, keep integer minor units end to end, and add a test that fails the build on a hardcoded 100.",
    },
    {
      title: "The ledger is really a balances table",
      line: "A running balance that gets updated in place cannot represent a backdated correction or a disputed transaction, so the first serious dispute becomes an argument rather than a lookup. Post append-only double-entry entries, derive balances from them, and record corrections as reversing entries with effective dates.",
    },
    {
      title: "Reconciliation deferred until after launch",
      line: "Build the three-way reconciliation before the first live transaction, not after the first complaint. Teams that defer it reach month three with thousands of unmatched items, no aged break queue and no way to say which of the three sides is wrong.",
    },
    {
      title: "Money APIs that are not idempotent",
      line: "A retried call double-debits, and nothing in the system afterwards proves which attempt was the real one. Every mutating call needs an idempotency key, an explicit state machine with terminal states, and reconciliation standing as the arbiter when the two disagree.",
    },
    {
      title: "The exception catalogue arrives last",
      line: "Returns, reversals, insufficient funds, chargebacks and provisional credit rewrite the data model after launch, because the happy path was specified and the rest was assumed. Model the full exception set before the first transfer and treat that catalogue as the specification.",
    },
    {
      title: "Structured data truncated into legacy fields",
      line: "ISO 20022 party and remittance data gets squeezed into 35-character legacy fields, or lost entirely at an MT and MX translation hop such as AFAQ. The fix is end-to-end field-level contract tests where truncation fails the build rather than logging a warning nobody reads.",
    },
    {
      title: "Sanctions screening tuned only for Latin script",
      line: "Arabic name transliteration produces false negatives and a false-positive queue no team can clear, and the vendor default threshold is rarely right for your book. Tune and back-test thresholds against your own history, with transliteration variants included in the test set.",
    },
    {
      title: "Calendar and cutoff blindness",
      line: "The UAE runs a Saturday and Sunday weekend, Saudi Arabia and Oman run Friday and Saturday, Islamic profit accrual may follow the Hijri calendar, and cores hold blackout windows that reject writes. Treat the settlement calendar as configuration, and record every blackout window in the integration register before design starts.",
    },
    {
      title: "PCI and PII scope creep",
      line: "Card numbers turn up in application logs, support screenshots and analytics payloads, and real customer data turns up in test environments, which under PDPL and DPDP is an exposure rather than a hygiene issue. Tokenise at the edge, keep a written scope map, assert log scrubbing in CI, and generate synthetic test data.",
    },
    {
      title: "Certification lead time treated as a sprint",
      line: "Regulator no-objection for cloud or outsourcing in Saudi Arabia and the UAE is measured in months, card network certification windows do not move for you, sandboxes do not reproduce production cutoffs, and mTLS certificates expire mid-project. Schedule backwards from the certification date and put every certificate expiry on the release calendar.",
    },
  ],
};

export const buildOrBuy = {
  title: "Build, buy, or buy the core and build the edge",
  description:
    "The honest answer is usually the third one, and sometimes the answer is that you should not hire us for this part. Assessed below: Core banking platform, Ledger of record for your own product, Payment rail connectivity, Screening and sanctions data, Card issuing and processing, Reconciliation and break management, Credit decision and policy engine and Back office and operations console.",
  rows: [
    {
      option: "Core banking platform",
      best: "Buy",
      verdict:
        "Temenos Transact, FLEXCUBE, Finacle, BaNCS and iMAL give you the regulatory surface on day one. Building one is 6,000 to 12,000 hours and you own every certification. Buy it, and expect the channel roadmap to outrun the core release cycle.",
    },
    {
      option: "Ledger of record for your own product",
      best: "Build",
      verdict:
        "This is where your differentiation and your audit evidence both live, and no vendor will sell you the version that matches your product. Cloud-native cores such as Mambu, Thought Machine Vault and 10x Banking give you a ledger primitive, but the orchestration around it is still yours.",
    },
    {
      option: "Payment rail connectivity",
      best: "Buy the core, build the edge",
      verdict:
        "Take the gateway or processor connection from a provider. Build the state machine, the idempotency layer, the return and reversal handling and the posting logic, because that is what the provider does not own and what breaks at three in the morning.",
    },
    {
      option: "Screening and sanctions data",
      best: "Buy",
      verdict:
        "World-Check, Dow Jones, ComplyAdvantage and Moody's Grid sell the list and the matching. Nobody sensible rebuilds that. Threshold tuning, disposition workflow and the audit trail remain yours to build.",
    },
    {
      option: "Card issuing and processing",
      best: "Buy the core, build the edge",
      verdict:
        "NymCard, M2P, Zeta, Marqeta, Galileo and Thredd get you to market fast, and the partner owns the economics and the roadmap. Their sandbox will not reproduce production settlement timing, so plan a limited live pilot rather than trusting the pilot environment.",
    },
    {
      option: "Reconciliation and break management",
      best: "Build",
      verdict:
        "Every vendor assumes someone else owns this, which is why four vendors each end up owning a slice of the audit trail and none owns the whole. It is 250 to 450 hours and it is the module that proves your numbers to an examiner.",
    },
    {
      option: "Credit decision and policy engine",
      best: "Buy the core, build the edge",
      verdict:
        "Blaze Advisor, PowerCurve, Provenir and ACTICO are worth buying where budget allows, with Drools or DMN where it does not. Either way, build the versioning, the champion and challenger harness and the shadow mode, because that is what lets policy change without a release.",
    },
    {
      option: "Back office and operations console",
      best: "Build",
      verdict:
        "The module most often left out of a quote and the one your operations team lives in all day. Role-based access, maker-checker and dual control on every money action, with an audit log that survives examination.",
    },
    {
      option: "e-invoicing transmission",
      best: "Buy",
      verdict:
        "Only an accredited Service Provider may transmit in the UAE, Oman and Saudi Arabia. We are not one and cannot become one on your behalf. We build the integration to your chosen provider and the evidence that the document was accepted.",
    },
  ],
};

export const cost = {
  title: "What fintech and banking software development costs, with the arithmetic shown",
  description:
    "Every competitor publishes a total with no hours behind it. Here is the rate, the hours and the multiplication, so you can argue with any line of it. The drivers are: Number of money rails, Migration data quality, Core system and its integration surface, Conventional or Islamic product logic and Number of markets in scope.",
  drivers: [
    { driver: "Number of money rails", hours: "180 to 350 each", note: "Plus that rail's certification calendar, which is a schedule cost before it is a money cost" },
    { driver: "Migration data quality", hours: "300 to 900", note: "Legacy balances carry accrued interest, escrow, partial payments and memo codes nobody can currently explain" },
    { driver: "Core system and its integration surface", hours: "150 to 400", note: "SOAP over JMS, a file drop or a modern API changes the work more than the vendor name does" },
    { driver: "Conventional or Islamic product logic", hours: "120 to 350", note: "Profit rate, ibra' rebate and Hijri accrual are engine changes rather than configuration" },
    { driver: "Number of markets in scope", hours: "100 to 300 each", note: "Each regulator adds its own reporting, residency and consent obligations" },
  ],
  modules: [
    { module: "KYC and KYB onboarding with identity orchestration", hours: "250 to 450", note: "Add 100 or more for a manual review console" },
    { module: "Double-entry ledger and posting engine", hours: "400 to 800", note: "The highest-risk module on the page" },
    { module: "Payment rail integration, one rail", hours: "180 to 350", note: "Returns and exceptions included. Each additional rail is the same again" },
    { module: "Reconciliation and break management", hours: "250 to 450", note: "Three-way, daily, from day one" },
    { module: "Back office console with access control and audit log", hours: "300 to 550", note: "The module most often left out of quotes" },
  ],
  math: {
    title: "The control core, and what sits outside it",
    points: [
      "These five modules are the control core: the smallest thing that can move money and prove it afterwards. At the floor that is 250 plus 400 plus 180 plus 250 plus 300, which equals 1,380 hours. At $40 per hour that is $55,200, at $100 it is $138,000, and at a $65 blend $89,700.",
      "At the ceiling the same five reach 450 plus 800 plus 350 plus 450 plus 550, which is 2,600 hours.",
      "QA, user acceptance testing and partner certification run at 15 to 25 percent of build and are not optional on a regulated rail. That adds 207 at the floor and 650 at the ceiling, so the control core delivered is 1,587 to 3,250 hours, or $95,000 to $227,500 at a $60 to $70 blend. That is the phase one band quoted at the top of this page.",
      "Everything else is priced the same way and sits outside that example rather than hidden inside it. Lending origination with a decision engine is 400 to 700 and servicing with delinquency is 500 to 900. Customer web and mobile is 600 to 1,200. Card issuing with the authorisation stream and just-in-time funding is 350 to 650, and disputes and chargeback lifecycle is 200 to 400.",
      "AML monitoring, alerts, case management and filing is 300 to 550. Regulatory and tax reporting is 150 to 400. Security and compliance engineering is 200 to 500. Core or legacy migration with a parity harness is 300 to 900, the widest range here for good reason.",
      "An Oman digital lender wanting a full first release adds lending and customer channels to the control core: 1,500 to 2,800 more before QA, so 1,725 to 3,500 additional hours, or $103,500 to $245,000.",
      "Identity verification, credit bureau, KYB data and processor fees are vendor pass-through costs. They are quoted on a separate line and never buried inside engineering hours.",
    ],
  },
};

export const costHighlights = [
  { label: "Phase one range", value: "$95,000 to $227,500", note: "The control core at a $60 to $70 blended rate" },
  { label: "Typical timeline", value: "14 to 22 weeks", note: "Signed integration register to a penny test on one live rail" },
  { label: "Useful hours", value: "1,587 to 3,250", note: "The control core after the QA and certification uplift" },
];

export const engagement = {
  title: "How we can work together",
  description:
    "Four models for fintech and banking software development, each with the downside stated in the same breath. Those four are: Discovery and architecture sprint, Fixed scope phase one, Dedicated squad, monthly and Run and certification retainer. Pick by how settled the scope actually is, not by preference.",
  items: [
    {
      title: "Discovery and architecture sprint",
      good: "Two to four weeks at a fixed fee, producing the integration register, the exception catalogue, the target architecture and a costed phase one. The output is yours whether or not you build with us.",
      bad: "It produces a document rather than running software, and sometimes the honest conclusion is that you should buy rather than build.",
    },
    {
      title: "Fixed scope phase one",
      good: "Scope frozen at the end of discovery, with a fixed price and a fixed date, which is the model procurement and a board are most comfortable approving.",
      bad: "Change costs a change order, and regulators move things mid-build, so this model is least comfortable exactly where the rules are changing fastest.",
    },
    {
      title: "Dedicated squad, monthly",
      good: "A named team at a predictable monthly cost, absorbing scope change without renegotiation, which suits a roadmap that is still moving.",
      bad: "You carry the scope risk and must supply a decision-maker every week. The cost is predictable, the delivery date is not guaranteed.",
    },
    {
      title: "Run and certification retainer",
      good: "Ongoing operations, reconciliation break support, and cover for calendar-bound work such as SWIFT standards releases, network certification windows and assessment evidence.",
      bad: "A retainer is capacity rather than an incident response commitment, and embedded engineers cannot compensate for weak environments or missing test data.",
    },
  ],
  recommendation:
    "In all four, the code, the infrastructure definitions and the runbooks are yours, in your repositories, from the first commit.",
};

export const delivery = {
  title: "How we deliver fintech and banking software development",
  description:
    "Five phases, each named by the artifact it produces. A generic waterfall diagram would tell you nothing. Those phases are: Integration register, Ledger and message contract, Penny test evidence pack, Parity report and Evidence pack and handover. Each is named by the artifact it hands you, so you can ask to see one.",
  items: [
    {
      phase: "Integration register",
      line: "Every system, its protocol, its authentication, its sandbox status, its cutoff and blackout windows, its certificate expiry dates, and the minor-unit table for every currency in scope. Signed by both sides before design starts.",
    },
    {
      phase: "Ledger and message contract",
      line: "Chart of accounts, posting rules, the payment state machine with terminal states, the idempotency policy, the ISO 20022 field map and the full exception catalogue. Delivered as a document plus machine-readable schemas, so tests assert against it rather than against someone's memory of a meeting.",
    },
    {
      phase: "Penny test evidence pack",
      line: "Real money moved on one live rail, with real credentials against real cutoffs, inside the first month of build where the partner allows it. The evidence is the message trace, the posting, the statement line and the matched reconciliation record.",
    },
    {
      phase: "Parity report",
      line: "Where a migration or replacement is in scope, run both systems in parallel, replay a month of history through a parity harness, and require balance-to-the-penny sign-off before cutover. There is no cutover without this report.",
    },
    {
      phase: "Evidence pack and handover",
      line: "Reconciliation runbook, break queue owners, access matrix, data flow diagrams, retention policy, log-scrub assertions in CI, disaster recovery test results, infrastructure definitions in Terraform and dashboards in Grafana. This is what your auditor, your regulator and your next engineer all read.",
    },
  ],
};

export const nonFunctional = {
  title: "The technical buyer's checklist",
  description:
    "Paste this into your RFP. These are the defaults we build to, and the last group is the one most vendors are vague about. Three groups cover: Ledger and correctness, Availability and timing, Authentication, transport and key handling, Audit, immutability and access control, Data protection and residency and Certifications, stated plainly.",
  groups: [
    {
      group: "Ledger and correctness",
      body: "Append-only postings with derived balances. Effective dating and reversing entries. Integer minor units against a data-driven exponent table. Idempotency keys on every mutating call and explicit terminal states. Daily three-way reconciliation with an aged break queue and named owners.",
    },
    {
      group: "Availability and timing",
      body: "An authorisation-stream latency budget with a deterministic fallback rather than a timeout. 24/7 operation with no assumed batch window on rails such as Oman RTGS. Documented recovery point and recovery time objectives, with disaster recovery tested and the evidence retained.",
    },
    {
      group: "Authentication, transport and key handling",
      body: "mTLS with a certificate inventory and expiry alarms. OAuth2 client credentials with private_key_jwt. FAPI 1.0 Advanced including pushed authorisation requests where the regime requires it. Detached JWS request signing, X.509 signing for UPI, HMAC webhook signatures, and SFTP with PGP and IP allowlisting for file rails. Tokenise at the edge with network tokens through Visa VTS or Mastercard MDES, and run hardware security module key ceremonies on payShield 10K or Utimaco.",
    },
    {
      group: "Audit, immutability and access control",
      body: "Hash-chained audit logs. Write-once object storage using S3 Object Lock in compliance mode. Role-based access with maker-checker and dual control on every back-office money action. A disposition record that survives examination rather than one assembled afterwards.",
    },
    {
      group: "Data protection and residency",
      body: "Residency applied to backups, logs and observability, not only to the application tier. Six-hour breach reporting and 180-day in-country log retention for India. Consent captured with versioning, revocation and a consent audit ledger. No real personal data in any non-production environment.",
    },
    {
      group: "Certifications, stated plainly",
      body: "Buyers commonly require ISO/IEC 27001, SOC 2 Type II, a PCI DSS attestation of compliance as a service provider, ISO 22301, ISO 27701, and in region evidence of SAMA Cyber Security Framework and NCA ECC alignment. Zyneto holds none of them. We build to those controls and produce the evidence artifacts for your assessment, and your assessor certifies you rather than us. Ask any vendor who implies otherwise for the certificate number.",
    },
  ],
};

export const faqs = [
  {
    question: "Do you hold PCI DSS, SOC 2 or ISO 27001 certification?",
    answer:
      "No. We hold none of them, and you can verify that by asking us for an attestation of compliance or a report, which we do not have. We build to those controls, produce the evidence artifacts and support your assessment. Anyone in our position claiming otherwise should be asked for a certificate number.",
  },
  {
    question: "Who owns the code, the data and the accounts?",
    answer:
      "You do, from the first commit rather than at handover. Code sits in your repository, infrastructure is defined as code in Terraform, and cloud, rail, screening and identity vendor accounts are created in your name. Two relationships stay directly yours because they cannot be ours: we are not a licensed financial institution, and we are not an accredited e-invoicing Service Provider in the UAE, Oman or Saudi Arabia. Replacing us should cost you a notice period, never a rebuild.",
  },
  {
    question: "What does phase one cost, how many hours is that, and how long does it take?",
    answer:
      "A control core of onboarding, ledger, one rail, reconciliation and back office is 1,587 to 3,250 hours after the QA and certification uplift, which is $95,000 to $227,500 at a $60 to $70 blended rate, over 14 to 22 weeks. The two variables that move it most are the number of money rails, at 180 to 350 hours each plus that rail's certification calendar, and migration data quality, at 300 to 900 hours for a parity harness. The full arithmetic is in the cost section above.",
  },
  {
    question: "What changed on 22 November 2025, and what does it mean if we still send MT?",
    answer:
      "SWIFT CBPR+ MT and MX coexistence ended, so MT 1xx, 2xx and 9xx no longer meet CBPR+. Translation exists as contingency, not as an architecture. The follow-on date is November 2026, when fully unstructured postal addresses are decommissioned and town name plus country code must sit in structured fields.",
  },
  {
    question: "In the UAE, do we integrate every bank separately for open finance?",
    answer:
      "No. The CBUAE model is centralised, so all licensed financial institutions and third-party providers connect through Nebras Open Finance LLC. The governing rule is the Open Finance Regulation, Circular 7 of 2023, updated by Circular 3 of 2025 in force 10 July 2025, which also added service-initiation rights.",
  },
  {
    question: "Our core is FLEXCUBE, iMAL or Finacle and it has no REST API. Can you still integrate?",
    answer:
      "Yes, and that is the normal case. FLEXCUBE exposes SOAP gateways over JMS and MDB plus a Java and EJB layer, Finacle uses Finacle Integrator, BaNCS is web services, and older estates use file drops over SFTP. The real design constraint is not the protocol, it is the end-of-day and beginning-of-day blackout window where the core rejects writes.",
  },
  {
    question: "How do you handle Omani rial amounts?",
    answer:
      "As integer minor units against a data-driven ISO 4217 exponent table. OMR, KWD and BHD carry exponent 3, so one rial is 1,000 baisa. Any codebase that multiplies by 100 is already wrong for these currencies, and the failure is silent rather than loud, which is what makes it expensive.",
  },
  {
    question: "Can our data leave Oman, Saudi Arabia or India?",
    answer:
      "Each answer is different. Oman's PDPL under Royal Decree 6/2022 became fully enforceable on 5 February 2026, with cross-border transfer controlled by MTCIT. Saudi Arabia has no adequacy list, so transfers out need SDAIA standard contractual clauses issued in September 2024 or approved binding rules. India's RBI April 2018 circular requires full end-to-end payment data in India, and where it is processed abroad it must be deleted overseas and repatriated within 24 hours or one business day, whichever is earlier.",
  },
  {
    question: "Can we store card numbers for our Indian product?",
    answer:
      "No. Since 1 October 2022 no entity other than card issuers and networks may store card-on-file data, so you tokenise. Separately, PCI DSS v4.0.1 has required 6.4.3 script inventory and authorisation and 11.6.1 tamper detection on payment pages since 31 March 2025, which now catches merchants who previously self-assessed lightly.",
  },
  {
    question: "Do we need a licence before we start building?",
    answer:
      "You need to know your licence category before you design. Oman's CBO framework for digital banks, Decision 25/2025 effective 1 June 2025, sets category 1 at OMR 30m and category 2 at OMR 10m paid-up capital, with different permitted activities behind each. Separately, regulator no-objection for cloud or outsourcing in Saudi Arabia and the UAE is measured in months, so it belongs on the plan before the first sprint.",
  },
  {
    question: "Can you build Murabaha or Ijarah on our existing loan engine?",
    answer:
      "Not by configuration. Islamic products use profit rates rather than interest, early settlement runs through an ibra' rebate, accrual may follow the Hijri calendar, and the schedule needs Sharia board sign-off. Shipping product logic before that sign-off is how a schedule engine gets rewritten twice.",
  },
  {
    question: "Have you migrated a core banking platform or delivered a live SWIFT integration?",
    answer:
      "No to both, and you should weigh that. We have built a multi-partner fintech platform, a financial reporting dashboard and an operations platform for a financial services company. What we are offering you to judge us on is the reasoning above on messages, the ledger and reconciliation. If your requirement is a vendor who has already migrated a FLEXCUBE estate, that is reasonable and we are not it.",
  },
];

export const nextSteps = {
  title: "What happens next",
  description: "Four steps, and we will not send you a number before the third.",
  items: [
    {
      step: "A 30 minute scoping call",
      line: "Bring three things: your core system name, your rail list and your regulator. We will tell you on that call whether we are the right fit, including when the answer is no.",
    },
    {
      step: "A written question list",
      line: "Within two business days, along with the integration register template. Yours to keep, and yours to send to other vendors if you want a like-for-like comparison.",
    },
    {
      step: "A paid discovery sprint",
      line: "Two to four weeks at a fixed fee. Output is the signed integration register, the exception catalogue, the target architecture and a costed phase one with the arithmetic shown. You keep all of it even if you take the build elsewhere.",
    },
    {
      step: "Phase one, ending on a penny test",
      line: "Month one ends with real money moved on one live rail. Not a demo environment: real credentials, real cutoffs and a real reconciliation record.",
    },
  ],
};

export const hubLinks = {
  title: "Go deeper",
  groups: [
    {
      group: "Build and integrate",
      links: [
        { label: "Next.js development", href: "/services/nextjs-development", note: "The stack behind BankSathi" },
        { label: "Mobile app development", href: "/services/mobile-app-development", note: "Customer and agent apps" },
        { label: "Android app development", href: "/services/android-app-development", note: "The surface that matters most in India and the Gulf" },
      ],
    },
    {
      group: "Automate and analyse",
      links: [
        { label: "AI workflow automation", href: "/services/ai-workflow-automation-services", note: "Alert triage and document-heavy operations" },
        { label: "Predictive analytics", href: "/services/predictive-analytics-development", note: "Collections and risk scoring inputs" },
        { label: "Database development", href: "/services/database-development", note: "Reconciliation feeds and reporting pipelines" },
      ],
    },
    {
      group: "Sectors we go this deep on",
      links: [
        { label: "Insurance", href: "/industries/insurance-software-development", note: "The other regulated product, with its own reserve rules" },
        { label: "Professional services", href: "/industries/professional-services-software-development", note: "Client money, billing and revenue recognition" },
        { label: "Portfolio", href: "/portfolio", note: "Including the BankSathi build" },
      ],
    },
  ],
};

export const ctaBands = {
  mid: {
    title: "Bring us your core, your rails and your regulator",
    description:
      "We will come back with an integration register, not a proposal template. Discovery is paid, fixed fee, and nothing it produces is locked to us.",
    ctaText: "Book a 30 minute scoping call",
  },
  end: {
    title: "Talk to an engineer, not a salesperson",
    description:
      "Tell us what moves money today and where it stops reconciling, and we will tell you what is worth building and what you should buy.",
    ctaText: "Book a 30 minute scoping call",
    assurances: [
      "No fixed quote before discovery",
      "Reply within one business day",
      "$40 to $100 per hour, by role",
    ],
  },
};

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
  relatedPosts: [
    "ai-in-cybersecurity",
    "flask-security-checklist-for-developers",
    "ai-for-fraud-detection-a-quick-guide",
    "ai-agents-for-business",
    "chat-with-your-documents",
    "how-much-does-ai-development-cost",
  ],
  relatedHeading: {
    title: "Related Insights",
    description:
      "Engineering notes on payments, security and the back office work that sits behind a regulated build.",
  },
  ctaBands,
};
