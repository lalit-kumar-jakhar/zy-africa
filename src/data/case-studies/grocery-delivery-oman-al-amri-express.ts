import type { CaseStudy } from "./types";

export const seo = {
  primaryKeyword: "grocery delivery app development",
  intent: "commercial",
  secondaryKeywords: [
    "quick commerce app development",
    "grocery delivery platform",
  ],
  competingUrl: "/industries/retail-software-development",
} as const;

export const alAmriExpress: CaseStudy = {
  slug: "grocery-delivery-oman-al-amri-express",
  clientName: "Al Amri Express",
  confidentiality: "named-no-metrics",
  approvalRecord:
    "Draft prepared 2026-08-07 from portfolio.ts and public store listings. No client approval sought yet. No outcome metric or quote published, so none is claimed.",

  h1: "Grocery delivery app development for Oman: what we shipped for Al Amri Express",
  metaTitle: "Al Amri Express: Grocery Delivery App Development | Zyneto",
  metaDescription:
    "Grocery delivery app development for Al Amri Express, Oman: a customer app and the warehouse operations app behind it, built for daily essentials.",
  standfirst:
    "Al Amri Express delivers groceries and daily essentials across Oman. We built two apps: the storefront customers order from, and the operations app the warehouse and delivery teams run on. Quick commerce app development and the grocery delivery platform behind it are one system, and the warehouse app is the harder half.",
  coverImage: "/static/assets/portfolio/al-amri-express.webp",

  author: { name: "Zyneto engineering", role: "Delivery team" },
  datePublished: "2026-08-07",
  lastReviewedDate: "2026-08-07",

  rail: {
    sector: "Quick commerce and grocery",
    market: "Oman",
    engagementType: "Dedicated team",
    platforms: ["iOS", "Android"],
    stack: ["React Native", "Laravel", "Elasticsearch", "MySQL", "AWS", "Websockets"],
    liveLinks: [
      { label: "App Store", url: "https://apps.apple.com/om/app/al-amri-express/id6450395418" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.al_amriexpress" },
      { label: "Partner app", url: "https://play.google.com/store/apps/details?id=com.alamridelivery" },
    ],
  },

  domainContext: {
    heading: "What makes grocery delivery app development hard in Oman",
    blocks: [
      {
        title: "There is no postcode to route on",
        body: "Oman's addressing standard excludes a location based post code. The codes in circulation belong to post office boxes, and street names are only unique within a wilayat. So the pin drop is the primary key and the text is commentary. Zones get drawn as polygons, and the landmark a customer types is a field the rider reads verbatim.",
      },
      {
        title: "Cash at the door changes the ledger",
        body: "The rial carries three decimal places, so money must be stored in integer minor units with an exponent of three. Anything defaulting to two truncates silently. Cash also makes refusal partial: a shopper rejects one substituted item, not the order, so the door needs per item accept and reject that reprices collection on the spot.",
      },
      {
        title: "Cost per order barely moves, basket value does",
        body: "Picking, packaging and rider time are near fixed whether the basket holds three items or twenty. Contribution scales with basket size while cost scales with order count, so the levers are batch picking, drop clustering, and slot capacity set by picking throughput rather than rider headcount.",
      },
      {
        title: "Two languages in one interface, and one of them mirrors",
        body: "A layout problem before a translation one. Mixed Arabic and Latin runs reorder at render time under the bidirectional algorithm, so a correctly stored order number displays scrambled unless interpolated values are wrapped in isolates. Search must normalise alef and taa marbuta variants, and both numeral sets must parse on input.",
      },
    ],
  },

  situation:
    "Al Amri Express sells groceries across Oman, delivered by its own operation rather than a marketplace of third party riders. That made the customer app and the warehouse one system, because a promise made at checkout is kept or broken by whoever picks the order.",

  buildBlocks: [
    {
      heading: "Catalogue and search",
      body: "A bilingual catalogue with search over Elasticsearch, so a query in either language returns the same shelf. Relevance carries grocery, where customers arrive knowing what they want.",
    },
    {
      heading: "Ordering and reorder",
      body: "Cart, checkout and one tap reorder from previous baskets, the highest value interaction in grocery because weekly shops repeat.",
    },
    {
      heading: "Live order tracking",
      body: "Order state pushed over websockets rather than polled, so the customer sees picking, dispatch and arrival as they happen.",
    },
    {
      heading: "The operations app behind the storefront",
      body: "A separate staff application with access split across admin, packer and delivery. Orders move through picking, packing and ready for dispatch, with staff assignment and dispatch tracking.",
    },
  ],

  decisions: [
    {
      decision: "Elasticsearch for catalogue search rather than database full text search",
      alternativeRejected: "MySQL full text indexes",
      reason:
        "Bilingual search needs analyzer level control over Arabic normalisation, which a database index does not give you.",
      tradeoffAccepted:
        "A second datastore to keep in sync, and an indexing path that drifts from the source of truth if unmonitored.",
    },
    {
      decision: "A separate application for staff rather than one app with a role switch",
      alternativeRejected: "A single app that changes mode by permission",
      reason:
        "The audiences share almost no screens, and warehouse staff repeat one flow on a shared device. One app would couple very different release cadences.",
      tradeoffAccepted:
        "Duplicated shell code and a second release process to maintain.",
    },
    {
      decision: "Websockets for order state rather than polling",
      alternativeRejected: "Interval polling from the client",
      reason:
        "Status changes cluster during the delivery window, so polling either wastes requests or lags.",
      tradeoffAccepted:
        "Connection state becomes the client's problem on flaky networks, so the UI needs a reconnect path and a truthful last known state.",
    },
  ],

  reusableArtifact: {
    heading: "Address capture options, and what each actually costs you",
    intro:
      "Every Gulf delivery build makes this call early, and it is hard to reverse once orders carry stored addresses.",
    columns: ["Method", "Works in Oman", "What it costs you"],
    rows: [
      ["Street address, geocoded", "Unreliable outside planned districts", "Routing failures that look like rider error"],
      ["Pin drop plus landmark note", "Yes, and it matches how people give directions", "A map interaction at signup, which adds friction"],
      ["Postal code lookup", "No, there is no location based postcode", "Rewriting serviceability logic later"],
      ["Plus code or mapcode", "Supported by the national standard", "Low familiarity, so it works better rider side"],
    ],
    note: "Whichever you pick, store the coordinate with its capture source and deduplicate by proximity, not string match.",
  },

  shipped: {
    capabilities: [
      "Bilingual customer app on iOS and Android",
      "Search, one tap reorder, subscriptions and loyalty",
      "Live tracking through picking, dispatch and delivery",
      "Role separated operations app for warehouse and delivery",
    ],
    scopeFacts: [
      "Two applications on a shared backend",
      "Delivery across Muscat and the regions",
    ],
  },

  riskAndHandover: [
    {
      title: "Access and data",
      body: "Roles are separated in the staff app, so people see only what their role covers. Data sits in the client's own AWS account.",
    },
    {
      title: "Ownership",
      body: "The client holds the hosting account and both store listings, so changing supplier is a commercial decision, not a technical one.",
    },
    {
      title: "After launch",
      body: "The customer app shipped first and the operations app followed, so each entered production against something stable.",
    },
  ],

  commercials: [
    { label: "Engagement model", value: "Dedicated team" },
    { label: "Rate band", value: "40 to 100 USD per hour by role, blending to 60 to 70" },
    { label: "How we quote", value: "No fixed price before a discovery that produces the integration inventory" },
  ],

  openQuestions:
    "Starting again, we would design the substitution flow before checkout rather than after. Substitution is the only part of a grocery order the customer did not choose, it moves ratings more than delivery speed does, and deciding late forces that question to be answered around code that already exists.",

  faqs: [
    {
      question: "Why not use a postcode for delivery zones in Oman?",
      answer:
        "Because there is not one. Oman's addressing standard states there is no location based post code, and the codes in circulation are post office routing codes. Zones get drawn as polygons over coordinates.",
    },
    {
      question: "What breaks when you add Arabic to an existing app?",
      answer:
        "Usually the mixed content. A purely Arabic screen mirrors cleanly, but an order number inside an Arabic sentence reorders under the bidirectional algorithm and displays wrong even though the stored string is correct. Isolating interpolated values is far cheaper at build time than as a retrofit.",
    },
    {
      question: "Do you need a separate app for warehouse staff?",
      answer:
        "Not always. The audiences share almost no screens and release on different cadences, so we split them here. For a smaller operation, a role gated section inside one app is defensible.",
    },
  ],

  links: {
    service: { label: "React Native app development", href: "/services/react-native-app-development" },
    industry: { label: "Retail and e-commerce", href: "/industries/retail-software-development" },
    blogs: [],
  },

  relatedCaseStudies: [
    { label: "NDC", href: "/case-studies/fmcg-distribution-oman-ndc", note: "FMCG distribution in Oman" },
    { label: "Stylebank", href: "/case-studies/multi-tenant-apparel-platform-stylebank", note: "Multi-tenant apparel operations" },
  ],
};
