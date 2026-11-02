import type { IndustryPageData } from "./types";

export const heroSection = {
  eyebrow: "Industries · Media & entertainment",
  title: "Media software development for ",
  titleHighlight: "rights, royalties and catalogue",
  description:
    "Who owns the recording, who owns the work, which territory the deal covers, and what the platform actually reported back. We build the rights and royalty systems, the catalogue metadata that survives a supply chain, and the delivery economics underneath. This page is about the back office, not the app: if you want the player built, the streaming app page is the one you want.",
  features: [
    "DDEX ERN and DSR aware",
    "ISRC, ISWC, UPC and CWR",
    "Multi-DRM, HLS and DASH",
    "$40 to $100 per hour",
  ],
  scrollTarget: "#essence",
  ctaText: "Book a 30 minute technical call",
  bgImage: "/static/assets/industries/media-entertainment-industries.webp",
};

export const seo = {
  primaryKeyword: "media software development",
  intent: "commercial",
  secondaryKeywords: [
    "royalty management software development",
    "rights management system development",
  ],
  competingUrl: "/solutions/music-streaming-app-development-company",
} as const;

export const essence = {
  title: "The short version",
  description:
    "The commercial facts in one block, so you never have to hunt for them. Royalty management software development and rights management system development are one problem: a statement is only as defensible as the rights record behind it. They are: Typical integration set, Phase one timeline, Rate band, Phase one range, with the arithmetic and Stack we actually use.",
  tiles: [
    {
      label: "Typical integration set",
      value:
        "A distributor or DSP feed on DDEX ERN, sales reports back on DSR, a publishing registration path on CWR, a collecting society or two, a payment provider for payouts, and whatever spreadsheet the catalogue currently lives in.",
    },
    {
      label: "Phase one timeline",
      value:
        "14 to 22 weeks to a first correct royalty run, because the milestone that matters is a statement somebody is willing to send to a rights holder, not a screen that renders.",
    },
    {
      label: "Rate band",
      value:
        "$40 to $100 per hour by role. Front end and reporting near the floor, rights modelling, royalty calculation and reconciliation near the ceiling. Mixed teams blend to $60 to $70.",
    },
    {
      label: "Phase one range, with the arithmetic",
      value:
        "Rights and party model 200 plus catalogue and identifiers 180 plus deal and rate cards 240 plus usage ingest 220 plus royalty calculation 260 plus statements and payouts 200 plus reporting and admin 180 equals 1,480 hours. At a $65 blend that is about $96,200, and $59,200 to $148,000 across the rate band.",
    },
    {
      label: "Stack we actually use",
      value:
        "Python with FastAPI and Django, PostgreSQL, Redis and Celery for the calculation runs, React and Next.js, BigQuery where the usage volume justifies a warehouse, and object storage for the statement archive.",
    },
    {
      label: "Our commitment",
      value:
        "No fixed price before discovery, and on royalty work that discovery is mostly reading your existing deals. Two things we are not: a collecting society, and a licensed payments institution. Registration and remittance run through licensed parties in your name.",
    },
  ],
};

export const anchors = [
  { id: "who-this-is-for", label: "Is this us?" },
  { id: "sub-verticals", label: "What breaks in our operation?" },
  { id: "systems", label: "How do rights actually model?" },
  { id: "compliance", label: "Which standards will we be asked for?" },
  { id: "what-goes-wrong", label: "What usually goes wrong?" },
  { id: "build-or-buy", label: "Build it or buy it?" },
  { id: "cost", label: "What does phase one cost?" },
];

export const operations = {
  title: "Where rights and royalty systems earn their keep",
  description:
    "The stages a usage moves through, and what we build at each one The arc is: Work and recording, Rights and shares, Catalogue delivery, Usage ingestion, Matching and allocation and Statements and payout. Each one is a place a system either holds the fact or loses it.",
  stages: [
    "Work and recording",
    "Rights and shares",
    "Catalogue delivery",
    "Usage ingestion",
    "Matching and allocation",
    "Statements and payout",
  ],
  image: {
    src: "/static/assets/industries/media-entertainment-operations-map.svg",
    alt: "Two band media map covering works, rights and catalogue delivery, then usage ingestion, matching and statements.",
  },
};

export const segments = {
  title: "Who this is for",
  description:
    "Six company shapes, and the one number each is usually missing. Not a fit: if what you need is a consumer streaming app built, that is a different job and we have a page for it, linked at the foot of this one. This page is the back office behind the app.",
  items: [
    {
      title: "Independent label or distributor",
      line: "Statements arrive from a dozen platforms in a dozen shapes, and reconciling them against what you delivered is a monthly spreadsheet exercise nobody trusts.",
    },
    {
      title: "Music publisher or administrator",
      line: "Works are registered, shares are split, and the money that comes back cannot be matched to the registration because the identifiers never travelled with it.",
    },
    {
      title: "Catalogue owner or rights fund",
      line: "You bought the catalogue on a model, and you now need the actual earnings by track, territory and platform to know whether the model was right.",
    },
    {
      title: "Production house or studio",
      line: "Participations, residuals and territory windows live in contracts as prose, and every reporting period turns into a reading exercise before it is a calculation.",
    },
    {
      title: "Podcast or creator network",
      line: "Revenue splits are agreed per show and per episode, sponsorship sits outside the platform reporting entirely, and there is no single view of what a creator is owed.",
    },
    {
      title: "Platform paying rights holders",
      line: "You report usage out rather than take it in, and your obligation is a statement that survives an audit rather than a dashboard that looks right.",
    },
  ],
};

export const subVerticals = {
  title: "Find your operation",
  description:
    "Same word, six different businesses. What breaks is different, so what we build is different. Each operation below breaks differently, and they are: Recorded music, Publishing and works, Video and OTT catalogue, Statements and payouts, Delivery and encoding and Rights conflicts and claims.",
  items: [
    {
      title: "Recorded music",
      breaks:
        "ISRCs are missing, duplicated or reassigned, so usage cannot be matched back to a release. Platform reports arrive monthly in incompatible shapes, some as DSR and some as a bespoke CSV, and the currency and exchange rate are decided somewhere nobody documented.",
      build:
        "An ISRC and UPC registry that treats identifiers as immutable, a normalising ingest that lands every platform report in one internal shape, and an exchange rate policy stated in the specification with the rate source and the date it is taken.",
    },
    {
      title: "Publishing and works",
      breaks:
        "The work and the recording are different things, and most systems store one. Shares do not sum to a hundred, controlled and non-controlled splits are held in the same field, and a registration sent on CWR never comes back matched.",
      build:
        "A separate work and recording model linked by ISWC and ISRC, share arithmetic validated on entry rather than at statement time, and a registration pipeline that tracks what was sent, what was acknowledged and what is still unmatched.",
    },
    {
      title: "Video and OTT catalogue",
      breaks:
        "Territory and window rights are held as contract prose, so availability is decided by a person reading a PDF. Localised titles, artwork and subtitle assets drift out of step with the version that is actually live.",
      build:
        "Rights held as structured availability windows per territory and per platform, so a title can be asked whether it is licensed on a date, and a metadata model where localisation, artwork and subtitle assets are versioned with the title rather than beside it.",
    },
    {
      title: "Statements and payouts",
      breaks:
        "The statement is a spreadsheet assembled by one person who understands it, minimum thresholds and recoupment are applied inconsistently, and a rights holder who queries a line cannot be answered without rebuilding the calculation.",
      build:
        "Statement generation from stored calculation lines rather than from a report, recoupment and advances modelled explicitly, and every figure traceable back to the usage rows that produced it so a query is a lookup rather than an investigation.",
    },
    {
      title: "Delivery and encoding",
      breaks:
        "Every title is encoded to the same ladder whatever it is, so bandwidth is spent on content nobody watches at the top rung. Egress is the largest line on the infrastructure bill and nobody can attribute it to a title.",
      build:
        "Per title encoding decisions rather than one fixed ladder, packaging to CMAF so one set of segments serves HLS and DASH, multi-DRM through a single licence service, and egress attributed per title so the cost sits next to the revenue.",
    },
    {
      title: "Rights conflicts and claims",
      breaks:
        "Two parties claim the same share, the money is held, and the dispute sits in an inbox. Nobody can say how much revenue is currently unallocated, or how old the oldest claim is.",
      build:
        "Claims as first class records with a state machine rather than an email thread, an unallocated balance that is reported rather than discovered, and ageing on every open conflict so the oldest one is visible without asking.",
    },
  ],
};

export const systems = {
  title: "Systems we connect to, and how rights actually model",
  description:
    "A rights build is a data modelling problem with an integration project around it. Here is the estate we expect to meet, and the modelling that decides whether any of it reconciles. None of this needs a client name to verify; it is how the trade works.",
  groups: [
    {
      group: "Standards and identifiers",
      body: "DDEX for the supply chain: ERN to deliver a release to a platform, DSR for the usage and revenue that comes back, and MEAD for enrichment. Identifiers: ISRC for a recording, ISWC for a work, UPC for a release, ISNI for a party. CWR for publishing registration, with the DDEX works family alongside it for claims and conflicts.",
    },
    {
      group: "Collecting societies and registries",
      body: "In India, IPRS for works and PPL and Novex on the recording side. Internationally the picture is one society per territory and per right, which is why a share that is correct in one territory can be unmatched in another. Registration is an integration with a queue and an acknowledgement, not a file drop.",
    },
    {
      group: "Delivery and playback",
      body: "Packaging to CMAF so one set of segments serves HLS and DASH. Multi-DRM across Widevine, FairPlay and PlayReady through a single licence service rather than three. Encoding on a per title decision. CDN with egress as the line item that decides the bill, and multi-CDN once one provider's pricing stops being competitive.",
    },
    {
      group: "The money",
      body: "A payment provider for payouts, which is a licensed relationship you hold directly. Withholding and tax residency by payee. Currency conversion with a stated rate source and date. Recoupment and advances, which are the two things most royalty systems bolt on late and then cannot reconcile.",
    },
    {
      group: "Where the catalogue currently lives",
      body: "Usually a spreadsheet, sometimes several, occasionally a system nobody has admin access to any more. Expect to meet exported CSVs with inconsistent territory codes, artist names that differ by punctuation, and a share column that sums to 99.9 in more rows than anyone wants to admit.",
    },
  ],
  distinction: {
    title: "The distinction that saves projects",
    body: "The work and the recording are two different things, and a system that stores one cannot pay the other. A work is the composition, identified by ISWC, and it pays publishers and writers. A recording is a specific performance of that work, identified by ISRC, and it pays the label and the performers. One work can have a hundred recordings, and one recording can embody more than one work. Every royalty system that had to be rebuilt started by treating them as the same row, because at the point of ingest a platform report looks like it is about a track. Decide which of the two each screen, each report and each integration speaks about, and write it down, before anyone opens a design file.",
  },
  pairs: [
    {
      pair: "Shares that do not sum, and why it matters late",
      body: "Shares are held as percentages and they have to sum to a hundred per right and per territory, and in practice they frequently do not. The damage is not the arithmetic, it is when it surfaces: a share that sums to 99.9 passes every screen and only fails at statement time, months later, against money that has already been received. Validate on entry, per right and per territory, and refuse the record rather than the run.",
    },
    {
      pair: "Controlled against non-controlled, and black box",
      body: "A share you control is one you can collect on directly. A share you do not is one somebody else collects, and it has to be modelled as a known gap rather than left absent, or it silently becomes yours in every internal report. Revenue that cannot be matched to any claim sits unallocated, which the trade calls black box, and the only defensible position is to report the balance and its age rather than let it be discovered.",
    },
    {
      pair: "The usage row is not the money row",
      body: "A platform reports streams, and a statement pays money, and between them sit rate cards, minimum thresholds, territory splits, currency conversion and recoupment. Systems that calculate straight from usage to payout cannot answer why a number changed, because the intermediate lines were never stored. Store the calculation, not just its result, and a rights holder query becomes a lookup rather than a rebuild.",
    },
    {
      pair: "Recoupment and advances",
      body: "An advance is money already paid against future earnings, and recoupment is the process of earning it back, usually at a rate that differs from the royalty rate itself. Most royalty systems add this after the first statement run, which is exactly when it is most expensive, because every statement already issued has to be reinterpreted. Model the advance, the recoupable balance and the recoupment rate before the first run, even if the first client has no advances.",
    },
    {
      pair: "Currency, rate source and the date you took it",
      body: "Platforms report in the currency they sold in, rights holders are paid in the currency they bank in, and the difference is a policy decision that finance owns rather than an engineering detail. Name the rate source, name the date the rate is taken, and store the rate against the calculation line. Without that, two runs of the same period produce different numbers and neither is wrong.",
    },
    {
      pair: "Identifiers are immutable, or they are not identifiers",
      body: "An ISRC identifies a recording for the life of that recording. Reassigning one, or issuing a second for the same recording, breaks every historic match and there is no repair that does not involve human memory. Treat identifiers as write once, keep a mapping table for the mistakes you inherit rather than editing the original, and validate format on entry, because a malformed ISRC will be accepted by more systems than will reject it.",
    },
    {
      pair: "Encoding ladders and the egress bill",
      body: "Encoding every title to one fixed ladder spends bandwidth on rungs nobody watches, and per title decisions are the cheapest optimisation available in delivery. Package to CMAF so a single set of segments serves both HLS and DASH rather than storing two. The line that actually decides the bill is egress, so attribute it per title, because a catalogue where cost sits next to revenue can be managed and one where it does not cannot.",
    },
    {
      pair: "Multi-DRM without three integrations",
      body: "Widevine, FairPlay and PlayReady cover the device landscape between them and none covers it alone, which is why multi-DRM is the default rather than a premium feature. Run them through one licence service with a common entitlement check, so the question of whether this user may play this title on this device is answered in one place and not reimplemented three times with three subtly different answers.",
    },
  ],
};

export const compliance = {
  title: "Standards and compliance",
  description:
    "Two different things land on the same questionnaire. Standards are what a distributor, a platform or a rights holder asks you to hold. Statutes bind you whether anyone asks or not. Standards first, because that is the order a platform onboarding works in. We hold none of these ourselves. We build the records that let you pass.",
  rows: [
    {
      item: "DDEX and the supply chain standards",
      detail:
        "ERN for delivering a release, DSR for the usage and revenue coming back, MEAD for enrichment, and the works family alongside CWR for publishing registration and claim conflicts. These are not law, they are the price of being able to trade with a platform at all, and a bespoke CSV is what you fall back to when you cannot meet them.",
    },
    {
      item: "ISO/IEC 27001:2022",
      detail:
        "The information security standard, 93 Annex A controls in 4 themes. It reaches this sector through the catalogue, because unreleased masters and deal terms are the two most sensitive things either side holds. The 2013 transition closed 31 October 2025, so a 2013 certificate is now invalid.",
    },
    {
      item: "SOC 1 and SOC 2",
      detail:
        "SOC 1 is the one that matters here and it is often skipped: your system produces the statements a rights holder's auditors rely on, which puts it squarely in scope for controls over financial reporting. SOC 2 covers security and availability and turns up from platform partners during onboarding.",
    },
    {
      item: "Accessibility, EN 301 549 and WCAG 2.1 AA",
      detail:
        "The European Accessibility Act has been enforceable since 28 June 2025 for services sold to EU consumers, and for media that reaches captions, audio description and player controls rather than only the marketing site. Treat caption and subtitle assets as first class catalogue objects, versioned with the title, not as files beside it.",
    },
    {
      item: "EU AI Act, for anything synthetic",
      detail:
        "Article 50 transparency duties apply from 2 August 2026, with machine-readable marking of AI-generated content for existing systems by 2 December 2026. If you generate, dub, translate or restore with a model, the marking is a build task with a date attached, and it belongs in the asset metadata rather than in a disclaimer.",
    },
    {
      item: "Regional rules, by where you publish",
      detail:
        "India: the IT Rules 2021, in force since 25 February 2021, require an OTT publisher to self-classify into U, U/A 7+, U/A 13+, U/A 16+ and A, to implement parental locks at U/A 13+ and above and reliable age verification for A, and to display the rating and a content descriptor at the start of every programme, all of which are product requirements rather than policy. A three tier grievance mechanism sits alongside them. DPDP applies to viewer data, with consent manager provisions from 13 November 2026 and substantive obligations from 13 May 2027. EU: the Digital Services Act for platform obligations, and the Audiovisual Media Services Directive for European works and prominence, which is a catalogue composition requirement and therefore a reporting one.",
    },
  ],
};

export const whatGoesWrong = {
  title: "What goes wrong",
  description:
    "Ten failure modes we have hit or inherited. Naming them is more useful than a list of reasons to pick us. The opening three are: Work and recording stored as one row, Shares validated at statement time and Calculating straight from usage to payout.",
  items: [
    {
      title: "Work and recording stored as one row",
      line: "The system pays the label correctly and cannot pay the publisher at all, because the composition was never a separate object. Model them separately in week one, linked by ISWC and ISRC, and decide which one every screen and report speaks about.",
    },
    {
      title: "Shares validated at statement time",
      line: "A split that sums to 99.9 passes every screen and fails months later against money already received. Validate on entry, per right and per territory, and refuse the record rather than the run.",
    },
    {
      title: "Calculating straight from usage to payout",
      line: "Nobody can answer why a number changed, because the rate card, threshold and conversion applied that month were never stored. Store the calculation lines, not just the result, so a query is a lookup.",
    },
    {
      title: "Recoupment bolted on after the first run",
      line: "Every statement already issued has to be reinterpreted, which is the most expensive possible moment. Model advances, recoupable balance and recoupment rate before the first run, even if today's clients have none.",
    },
    {
      title: "Exchange rate with no source or date",
      line: "Two runs of the same period produce different numbers and neither is wrong. Name the rate source and the date it is taken in the specification, and store the rate against each calculation line.",
    },
    {
      title: "Identifiers treated as editable",
      line: "An ISRC gets reassigned or duplicated and every historic match breaks with no repair that does not rely on somebody's memory. Treat identifiers as write once, and keep a mapping table for inherited mistakes rather than editing the original.",
    },
    {
      title: "Unmatched revenue that nobody counts",
      line: "Money that cannot be attributed sits in an account and becomes visible only when someone asks. Report the unallocated balance and its age as a standing number, and put a state machine behind claims instead of an inbox.",
    },
    {
      title: "Availability decided by reading a contract",
      line: "Territory and window rights live as prose, so a person answers whether a title is licensed today. Hold rights as structured windows per territory and platform, so the catalogue can be asked rather than interpreted.",
    },
    {
      title: "One encoding ladder for everything",
      line: "Bandwidth is spent on rungs nobody watches and egress becomes the largest infrastructure line with no owner. Decide the ladder per title, package to CMAF once, and attribute egress per title so cost sits beside revenue.",
    },
    {
      title: "The first milestone is a screen",
      line: "A dashboard renders months before anyone can send a statement, and the hard part is still ahead. Make the first milestone a royalty run somebody is willing to send to a rights holder, and work backwards from it.",
    },
  ],
};

export const buildOrBuy = {
  title: "Build, buy, or buy the core and build the edge",
  description:
    "The honest answer is usually the third one, and sometimes the answer is that you should not hire us for this part. The calls are: Rights, party and share model, Royalty calculation and statements, DDEX delivery and ingest, Collecting society registration, Payouts and remittance, Multi-DRM licence service, Encoding and packaging, CDN and delivery and The consumer app itself.",
  rows: [
    {
      option: "Rights, party and share model",
      best: "Build",
      verdict:
        "This is your product, not infrastructure. No packaged product models your deals, and the share and territory logic is exactly where a generic data model stops being able to answer the question.",
    },
    {
      option: "Royalty calculation and statements",
      best: "Build",
      verdict:
        "Where custom earns its money, because the rate cards, thresholds and recoupment terms are specific to contracts you signed. Store the calculation lines so a statement can be defended line by line.",
    },
    {
      option: "DDEX delivery and ingest",
      best: "Buy the core, build the edge",
      verdict:
        "Use a distributor or an existing ERN and DSR library for the message handling. Build the normalising layer, because every platform will still send you something slightly outside the standard.",
    },
    {
      option: "Collecting society registration",
      best: "Buy the core, build the edge",
      verdict:
        "Registration runs through the society, and we are not one and cannot become one. Build the queue, the acknowledgement tracking and the unmatched report, which is the part nobody supplies.",
    },
    {
      option: "Payouts and remittance",
      best: "Buy",
      verdict:
        "A licensed payments institution moves the money and holds the relationship in your name. We do not move money and neither should your development partner claim to. You keep the ledger and the reconciliation.",
    },
    {
      option: "Multi-DRM licence service",
      best: "Buy",
      verdict:
        "Widevine, FairPlay and PlayReady through one commercial licence service. Building three DRM integrations to save a licence fee is a trade nobody wins.",
    },
    {
      option: "Encoding and packaging",
      best: "Buy the core, build the edge",
      verdict:
        "Buy the encoder and the packager. Build the per title ladder decision and the egress attribution, because that is where the money is and no vendor optimises your catalogue for you.",
    },
    {
      option: "CDN and delivery",
      best: "Buy",
      verdict:
        "Buy it, and design for more than one from the start so pricing stays contestable. The build is the attribution that tells you which titles are costing you.",
    },
    {
      option: "The consumer app itself",
      best: "Buy the core, build the edge",
      verdict:
        "A different job from this page, and often a different team. If a player and a subscriber experience is what you actually need, our streaming app work is linked at the foot of this page.",
    },
  ],
};

export const cost = {
  title: "What media software development costs, with the arithmetic shown",
  description:
    "Every competitor publishes a total with no hours behind it. Here is the rate, the hours and the multiplication, so you can argue with any line of it. Priced against: Whether works and recordings are already separate, Number of platform report formats to ingest, Rate card and contract term complexity and Whether advances and recoupment exist.",
  drivers: [
    {
      driver: "Whether works and recordings are already separate",
      hours: "Highest impact",
      note: "Splitting them later means reinterpreting every statement already issued, not adding a table. This single decision moves the number more than any feature does.",
    },
    { driver: "Number of platform report formats to ingest", hours: "High" },
    { driver: "Rate card and contract term complexity", hours: "High" },
    { driver: "Whether advances and recoupment exist", hours: "High" },
    { driver: "Territories, currencies and societies in scope", hours: "Medium" },
    { driver: "Whether delivery and encoding are in scope at all", hours: "Variable" },
    { driver: "Historic catalogue migration and its identifier quality", hours: "Variable" },
  ],
  modules: [
    { module: "Rights, party and share model", hours: "180 to 380" },
    { module: "Catalogue and identifier registry", hours: "160 to 340" },
    { module: "Deals, rate cards and territory windows", hours: "200 to 440" },
    { module: "Usage ingest and normalisation", hours: "200 to 420" },
    { module: "Royalty calculation engine", hours: "240 to 520" },
    { module: "Statements, recoupment and payouts", hours: "180 to 400" },
    { module: "Reporting, admin and integrations", hours: "160 to 360" },
  ],
  math: {
    title: "Phase one, added up",
    points: [
      "Rights and party model 200 plus catalogue and identifiers 180 plus deals and rate cards 240 plus usage ingest 220 plus royalty calculation 260 plus statements and payouts 200 plus reporting and admin 180 equals 1,480 hours. Every one of the seven sits inside its own published range above, so you can move any line and see what it does to the total.",
      "At $40 per hour that is $59,200. At $100 per hour it is $148,000. At a $65 blended rate, about $96,200. The realistic phase-one band across the scopes we see is 1,200 to 2,100 hours.",
      "Deliberately not in that number, each its own decision: encoding, packaging and delivery, a consumer facing app, and any migration of more than two years of historic usage.",
      "Recurring rather than build: hosting, CDN egress, DRM licence fees and the payment provider's charges, all of which scale with catalogue and audience rather than with headcount. The rule stands: no quote before discovery, but you get a band on the first call.",
    ],
  },
};

export const costHighlights = [
  {
    label: "Phase one range",
    value: "$59,200 to $148,000",
    note: "The 1,480 hour worked example at the ends of the rate band, about $96,200 at a $65 blend.",
  },
  {
    label: "Typical timeline",
    value: "14 to 22 weeks",
    note: "To a royalty run somebody is willing to send, which is a different milestone from a screen that renders.",
  },
  {
    label: "Useful hours",
    value: "1,200 to 2,100",
    note: "The realistic band across the scopes we see, or $48,000 to $210,000.",
  },
];

export const engagement = {
  title: "Engagement models",
  description:
    "Four models for media software development, each with the downside stated in the same breath. In order of how settled the scope is, they are: Fixed scope phase one, Discovery led rollout, Dedicated squad, monthly and Royalty engine only. Pick by how settled the scope actually is, not by preference.",
  items: [
    {
      title: "Fixed scope phase one",
      good: "A fixed price and a fixed date against a written scope, both derived from a reading of your actual deals rather than from a guess, with the delivery risk on the signed scope sitting with us.",
      bad: "The fixed price carries a risk premium, and any contract term discovered mid build becomes a change order. On royalty work that is a real risk, because contracts written years apart rarely agree with each other.",
    },
    {
      title: "Discovery led rollout",
      good: "Billed on time and materials, so you pay for work done, see the logged hours, and can redirect scope as the contracts reveal terms nobody remembered agreeing.",
      bad: "You carry the overrun risk and somebody on your side has to read the reports. Best fit where the deal set is genuinely unknown, which it usually is once a catalogue has changed hands.",
    },
    {
      title: "Dedicated squad, monthly",
      good: "A standing team at the blended rate, accumulating your deal structures and your platform quirks instead of relearning them every engagement.",
      bad: "You carry utilisation risk and you have to supply decisions every week, including from whoever actually owns the rate card. A sprint where nobody could decide is still a billed sprint.",
    },
    {
      title: "Royalty engine only",
      good: "We build the calculation and the statements against your existing catalogue and leave delivery, encoding and the app entirely alone. The shortest route to a statement you can defend.",
      bad: "It is only as good as the identifier quality upstream. If the catalogue cannot be matched to usage, this is the second project and the cleanup is the first.",
    },
  ],
  recommendation:
    "What we usually suggest: a paid discovery that reads the deals and profiles the catalogue's identifier quality, then a fixed scope phase one on the calculation and statements, and a dedicated squad after that.",
};

export const delivery = {
  title: "How we deliver media software development",
  description:
    "Five phases, each named by the artifact it produces. A generic waterfall diagram would tell you nothing. In order, they are: Deal and rights inventory, Identifier quality report, One period, calculated twice, Statement pack and Handover pack. Each is named by the artifact it hands you, so you can ask to see one.",
  items: [
    {
      phase: "Deal and rights inventory",
      line: "A written record of every deal term that affects a payment, which rights it covers, in which territories and for how long, produced by reading the contracts rather than by asking what they say. This is the artifact that decides the rest of the project.",
    },
    {
      phase: "Identifier quality report",
      line: "How much of the catalogue carries a valid ISRC, ISWC and UPC, how much is duplicated, and how much of last year's usage can actually be matched. The number is usually worse than expected and it is better known before a plan is written than after.",
    },
    {
      phase: "One period, calculated twice",
      line: "A single closed period run through the new engine alongside whatever produced the last statement, with the differences explained line by line rather than reconciled to a total. This is the first thing anyone trusts.",
    },
    {
      phase: "Statement pack",
      line: "Statements a rights holder can read, generated from stored calculation lines, with recoupment applied, an unallocated balance reported, and every figure traceable back to the usage rows that produced it.",
    },
    {
      phase: "Handover pack",
      line: "Runbooks, the rate source and conversion policy documented, source in your repositories from day one, credentials in your accounts, and the society and payment relationships contracted in your name rather than ours.",
    },
  ],
};

export const nonFunctional = {
  title: "The technical buyer's checklist",
  description:
    "Copy this and run it against us, or against anyone else quoting for media software development. They are grouped as: The data model, Calculation integrity, Money and currency, Ingest hygiene, Claims and unallocated, Delivery, if it is in scope, Audit and evidence, Exit and Certifications, stated plainly.",
  groups: [
    {
      group: "The data model",
      body: "Work and recording as separate objects linked by ISWC and ISRC. Shares validated on entry per right and per territory. Territory and window rights held as structured availability, not prose. Identifiers write once, with a mapping table for inherited errors.",
    },
    {
      group: "Calculation integrity",
      body: "Calculation lines stored, not just results. Rate, threshold and conversion captured against each line. A rerun of a closed period reproduces the same numbers. Recoupment and advances modelled before the first run.",
    },
    {
      group: "Money and currency",
      body: "A named exchange rate source and the date the rate is taken. Withholding and tax residency per payee. Payouts through a licensed institution in your name. A reconciliation between what platforms reported and what was paid out.",
    },
    {
      group: "Ingest hygiene",
      body: "Idempotency on every usage import so a redelivered report does not double count. A dead letter queue with a replay runbook. Contract tests per platform format running in CI. Unmatched rows surfaced rather than dropped.",
    },
    {
      group: "Claims and unallocated",
      body: "Claims as records with a state machine. An unallocated balance reported as a standing figure with its age. Conflict ageing visible without being asked for. A defensible position on what happens to money nobody claims.",
    },
    {
      group: "Delivery, if it is in scope",
      body: "Per title encoding decisions rather than one ladder. CMAF packaging serving both HLS and DASH from one set of segments. Multi-DRM through a single licence service. Egress attributed per title.",
    },
    {
      group: "Audit and evidence",
      body: "A statement that can be defended line by line to a rights holder. An audit trail on rate card and share changes with who changed what and when. Retention that matches the longest audit window in your contracts.",
    },
    {
      group: "Exit",
      body: "Code in your repository, infrastructure as code, credentials in your accounts, and an export of the catalogue, the deals and the calculation history in a form somebody else could load.",
    },
    {
      group: "Certifications, stated plainly",
      body: "Zyneto holds no certifications. Not ISO 27001, not SOC 2. We are also not a collecting society and not a licensed payments institution, so registration and remittance run through licensed parties contracted in your name. We build the controls and the evidence, and hand you the pack for your own audit. Ask any vendor who implies otherwise to produce the certificate and its scope statement.",
    },
  ],
};

export const faqs = [
  {
    question: "Why do you insist on separating the work from the recording?",
    answer:
      "Because they pay different people. A work is the composition, identified by ISWC, and it pays publishers and writers. A recording is a performance of that work, identified by ISRC, and it pays the label and performers. One work can have a hundred recordings. A system that stores one row per track can pay a label correctly and cannot pay a publisher at all, and the fix later is a migration of every statement already issued.",
  },
  {
    question: "Our shares sum to 99.9 in a lot of rows. Is that actually a problem?",
    answer:
      "Yes, and the problem is when you find out. A split that does not sum passes every screen because nothing checks it, then fails at statement time against money you have already received, which turns an arithmetic fix into a commercial conversation. Validate on entry, per right and per territory, and reject the record rather than the run.",
  },
  {
    question: "Platforms send us reports in different shapes. Can that be normalised?",
    answer:
      "Yes, and it is most of the ingest work. DSR is the DDEX standard for usage and revenue coming back and the larger platforms support it, but expect bespoke CSVs from smaller ones and expect even DSR files to carry local quirks. Land everything in one internal shape, make the import idempotent so a redelivered file does not double count, and surface unmatched rows rather than dropping them.",
  },
  {
    question: "We are about to buy a catalogue. What should we check first?",
    answer:
      "Identifier quality, before price. How much of it carries a valid ISRC, how much is duplicated, and how much of last year's reported usage can actually be matched back to a release. A catalogue that cannot be matched cannot be earned from on the model you bought it on, and that gap is discovered in the first statement run rather than in the data room.",
  },
  {
    question: "Where does the exchange rate come from?",
    answer:
      "From a source and a date that you name in the specification, and it is finance's decision rather than ours. Platforms report in the currency they sold in and rights holders bank in another, so without a stated rate source and a stated date, two runs of the same period produce different numbers and neither is wrong. Store the rate against each calculation line.",
  },
  {
    question: "Do we have to handle black box revenue?",
    answer:
      "You have to be able to report it. Revenue that cannot be matched to a claim sits unallocated, and the only defensible position is a standing figure with its age rather than a number somebody produces when asked. Put a state machine behind claims so a dispute has a status, and age every open conflict so the oldest one is visible.",
  },
  {
    question: "What does the IT Rules 2021 self-classification actually require of the product?",
    answer:
      "It is a product requirement rather than a policy one. An OTT publisher self-classifies into U, U/A 7+, U/A 13+, U/A 16+ and A, implements parental locks for U/A 13+ and above and reliable age verification for A, and displays the rating with a content descriptor at the start of every programme. All three are things the player and the catalogue have to support, alongside the three tier grievance mechanism.",
  },
  {
    question: "We use AI to dub and restore. Does the EU AI Act reach us?",
    answer:
      "If you have EU users, yes. Article 50 transparency duties apply from 2 August 2026, and machine-readable marking of AI-generated content for existing systems is required by 2 December 2026. Treat the marking as asset metadata carried with the file rather than as a disclaimer on a page, because it has to survive delivery.",
  },
  {
    question: "Can you build the streaming app as well?",
    answer:
      "That is a different job and we have a separate page for it, linked at the foot of this one. This page is the rights, royalty and content operations layer behind a service. The two are usually built by different teams on different timelines, and conflating them is how the back office ends up as a phase two that never starts.",
  },
  {
    question: "Is Zyneto a collecting society, or can you pay our rights holders?",
    answer:
      "No to both, and we will not imply otherwise. Registration runs through a society and remittance runs through a licensed payments institution, both contracted in your name. What we build is the queue, the acknowledgement tracking, the unmatched report and the ledger that reconciles what was reported against what was paid.",
  },
  {
    question:
      "What does a phase one cost, how many hours is that, and how long does it take?",
    answer:
      "The worked example on this page is 1,480 hours, which is $59,200 to $148,000 at the ends of the rate band and about $96,200 at a $65 blend. Real scopes land between 1,200 and 2,100 hours. Calendar is 14 to 22 weeks to a first royalty run somebody is willing to send, which is deliberately a different milestone from a screen that renders. We give you a band on the first call and a fixed price only after discovery.",
  },
  {
    question: "Who owns the code, the data and the accounts?",
    answer:
      "You do, from day one rather than at handover. Code sits in your repository, infrastructure is defined as code, and hosting, CDN and provider credentials are in your accounts and your name. The society and payment relationships are contracted by you directly because they have to be. If you take the system in house, nothing about the architecture is designed to make that expensive.",
  },
];

export const nextSteps = {
  title: "What happens next",
  description:
    "Four steps with a time attached to each, so booking a call has a known shape.",
  items: [
    {
      step: "A 30 minute technical call",
      line: "Bring one platform report, one deal, and the last statement you had to explain to a rights holder. Those three documents tell us more than an hour of description. No slides from us.",
    },
    {
      step: "A written read within three working days",
      line: "At no charge. One page on whether your works and recordings are separable, where your identifiers are weakest, and an hour band for phase one. If it says you do not need us yet, it will say so.",
    },
    {
      step: "A paid discovery",
      line: "Two to three weeks, fixed fee, spent reading the deals and profiling the catalogue's identifier quality. Output is the deal and rights inventory, the identifier quality report and a costed plan. This is where the quote comes from.",
    },
    {
      step: "One period, calculated twice",
      line: "Phase one starts by running a closed period through the new engine alongside whatever produced the last statement, so you see the differences explained before anything is switched off.",
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
          note: "The calculation and ingest services",
        },
        {
          label: "Database development",
          href: "/services/database-development",
          note: "Where rights, shares and usage actually live",
        },
        {
          label: "Web development",
          href: "/services/web-development",
          note: "Catalogue admin and the statement portal",
        },
      ],
    },
    {
      group: "Data and decisions",
      links: [
        {
          label: "Predictive analytics",
          href: "/services/predictive-analytics-development",
          note: "Earnings modelling and catalogue valuation",
        },
        {
          label: "Artificial intelligence",
          href: "/services/artificial-intelligence",
          note: "Matching, deduplication and metadata repair",
        },
        {
          label: "Web scraping and data extraction",
          href: "/services/web-scraping-data-extraction-services",
          note: "Getting usage out of portals with no API",
        },
      ],
    },
    {
      group: "Adjacent builds",
      links: [
        {
          label: "Music streaming app development",
          href: "/solutions/music-streaming-app-development-company",
          note: "If it is the player and the subscriber experience you need",
        },
        {
          label: "Social and community",
          href: "/industries/community-app-development",
          note: "Moderation, identity and the decision record",
        },
        {
          label: "Education and edtech",
          href: "/industries/education-software-development",
          note: "Course content, rights and delivery",
        }
      ],
    },
  ],
};

export const ctaBands = {
  mid: {
    title: "Send us one platform report and one deal",
    description:
      "Those two documents tell us whether your works and recordings are separable and where your identifiers break down, faster than any discovery call does. We will tell you what your first royalty run would actually be able to answer.",
    ctaText: "Book a 30 minute technical call",
  },
  end: {
    title: "Start with the deals, not the dashboard",
    description:
      "Paid discovery runs two to three weeks, spent reading contracts and profiling identifier quality, and produces the deal and rights inventory, the identifier quality report and a costed phase-one plan. It is credited against phase one if you proceed.",
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
      "Architecture, data extraction and analytics work that applies directly to rights and royalty systems.",
  },
};
