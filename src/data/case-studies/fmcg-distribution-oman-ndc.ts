import type { CaseStudy } from "./types";

export const seo = {
  primaryKeyword: "fmcg distribution software",
  intent: "commercial",
  secondaryKeywords: [
    "fmcg distribution platform",
    "trade buyer portal development",
  ],
  competingUrl: "/industries/logistics-software-development",
} as const;

export const ndc: CaseStudy = {
  slug: "fmcg-distribution-oman-ndc",
  clientName: "National Distribution Company",
  confidentiality: "named-no-metrics",
  approvalRecord:
    "Drafted 2026-08-07 from portfolio.ts and the live site, coded 2026-08-13. No client approval sought. No outcome metric or quote is published, so none is claimed. Operating scale figures are the client's own, labelled as scope rather than result. NOTE: NDC here is National Distribution Company. On the travel vertical NDC means IATA New Distribution Capability; keep the two apart in any copy that links them.",

  h1: "FMCG distribution software for Oman: what we shipped for National Distribution Company",
  metaTitle: "NDC: FMCG Distribution Software, Oman | Zyneto",
  metaDescription:
    "FMCG distribution software for National Distribution Company, Oman: a brand and product catalogue for trade buyers, built for enquiry not checkout.",
  standfirst:
    "National Distribution Company sources, warehouses and distributes FMCG brands across Oman. We built the platform its trade buyers and brand principals use to browse the catalogue, read the network and warehousing story, and raise an enquiry. It is an FMCG distribution platform rather than a shop, so trade buyer portal development set the shape of every screen.",
  coverImage: "/static/assets/portfolio/ndc.webp",

  author: { name: "Zyneto engineering", role: "Delivery team" },
  datePublished: "2026-08-13",
  lastReviewedDate: "2026-08-13",

  rail: {
    sector: "FMCG distribution and wholesale",
    market: "Oman",
    engagementType: "Dedicated team",
    platforms: ["Web"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "CMS", "Media management", "Analytics"],
    liveLinks: [{ label: "ndcmuscat.com", url: "https://ndcmuscat.com" }],
  },

  domainContext: {
    heading: "What makes FMCG distribution software different",
    blocks: [
      {
        title: "What sits between a brand principal and a shelf",
        body: "A principal manufactures. The distributor takes title to the stock, clears customs, holds it at the right temperature, breaks pallets into cases, runs a salesman past a few hundred outlets, executes the promotion the principal funded, extends credit to the trade, chases collection, and reports sell out data back. Its margin is the spread between landed cost and trade price, minus the cost of holding and moving.",
      },
      {
        title: "A trade catalogue is a different object",
        body: "There is no cart, and there should not be one. Price is contractual: it moves with the customer, the credit term, the volume band and whatever the principal funds this quarter. Publish a number and you hand every buyer a starting position. The job is discovery instead. A buyer confirms you carry the brand in the pack they stock, then starts a conversation. Filter, compare, enquire. The measure is qualified enquiries, not conversion rate.",
      },
      {
        title: "Two languages, and one of them mirrors",
        body: "Arabic is the official language, English is common in trade, so both are load bearing. The Arabic side is a layout problem before it is a translation one. Brand names stay in Latin script inside Arabic sentences, and those mixed runs reorder under the bidirectional algorithm unless interpolated text is isolated. Search also has to normalise alef and taa marbuta variants or Arabic queries return nothing.",
      },
      {
        title: "Brand partnerships carry the commercial argument",
        body: "The logo wall is the credential. A principal weighing an appointment reads it for channel conflict, checking whether a competitor already sits in the portfolio. A retailer reads it to work out how many brands one purchase order covers. Both arrive asking about a named brand, so brands need to be structured records carrying category, origin and pack range, not an image grid. Treat it as decoration and your most commercial page becomes unsearchable.",
      },
    ],
  },

  situation:
    "National Distribution Company sources, warehouses and distributes FMCG products across Oman. It faces two directions: up towards brand principals who need national coverage here, and down towards retailers, wholesalers and institutional buyers who order from it. One site serves both. A principal wants network reach, warehousing and category fit before opening a conversation. A trade buyer wants one answer quickly: do you carry this brand, in what pack. Both arrive on a brand name in search, and both leave through the same enquiry form.",

  buildBlocks: [
    {
      heading: "A catalogue built for enquiry, not checkout",
      body: "Browsable by brand, category and pack, with enough detail for a trade buyer to identify the item they stock. No cart, no price, no account wall.",
    },
    {
      heading: "Brand records with their own URLs",
      body: "Each partnership is a record carrying category, origin and related products, on its own page. That is where a brand query should land.",
    },
    {
      heading: "CMS ownership of what changes",
      body: "Catalogue entries, brand records and media are edited by staff, not developers. A delisted SKU is an editorial action, not a release.",
    },
    {
      heading: "Media and the SEO structure around it",
      body: "A distributor site is photograph heavy, and photographs are what make it slow. Media handling, metadata and page structure were part of the build, not a pass at the end.",
    },
  ],

  decisions: [
    {
      decision: "No cart and no public prices",
      alternativeRejected: "A B2B storefront with logged in customer price lists",
      reason:
        "Pricing is contractual per customer, and a login wall hides the catalogue from the brand searches that bring buyers in.",
      tradeoffAccepted:
        "No self serve reorder, so repeat orders still go through a salesperson and the site cannot attribute revenue.",
    },
    {
      decision: "Next.js with a CMS behind it, not a commerce platform",
      alternativeRejected: "A hosted ecommerce platform",
      reason:
        "The requirement is listing, filtering and enquiry, and a commerce platform charges you in complexity for a checkout nobody uses.",
      tradeoffAccepted:
        "Adding buyer ordering with account pricing later is a build, not a settings change.",
    },
    {
      decision: "Brands modelled as records, not page content",
      alternativeRejected: "One partners page with a grid of logos",
      reason: "The brand name is the query, so it needs a URL, related products and metadata.",
      tradeoffAccepted:
        "More editorial work per brand at launch, and a half filled record reads worse than none, so the CMS needs required fields and an owner.",
    },
  ],

  reusableArtifact: {
    heading: "Trade catalogue against consumer catalogue: what changes in the model",
    intro: "The model we work from on distributor builds.",
    columns: ["Field or behaviour", "Consumer ecommerce", "Distributor trade catalogue"],
    rows: [
      ["Price", "Public, one per SKU", "Contractual, by customer and volume band"],
      ["Unit of sale", "Each", "Case, layer or pallet"],
      ["Buyers search on", "Product name", "Brand, then category, then pack"],
      ["Success metric", "Conversion rate", "Qualified enquiries by brand and buyer type"],
      ["Who edits it", "Merchandising", "Brand and sales managers, so CMS is mandatory"],
      ["Refresh cycle", "Continuous, feed driven", "Bursty, tied to listing wins and delistings"],
    ],
    note: "The last row is the one teams underestimate.",
  },

  shipped: {
    capabilities: [
      "Products, brands, services and company information",
      "Catalogue browsing by brand, category and pack",
      "Brand partner records, each individually addressable",
      "CMS ownership of catalogue, brand and media content",
      "Media delivery with SEO structure and analytics",
      "Enquiry capture for retailers, wholesalers and institutional buyers",
    ],
    scopeFacts: [
      "Client operating scale, not engagement results: 400 plus products",
      "300 plus employees",
      "Brand partnerships spanning 20 plus countries",
    ],
  },

  riskAndHandover: [
    {
      title: "Content ownership",
      body: "Catalogue, brand records and media are edited by the client's team through the CMS. Nothing routine needs a developer.",
    },
    {
      title: "Infrastructure ownership",
      body: "Hosting and the domain sit with the client, so changing supplier is a commercial decision.",
    },
    {
      title: "After launch",
      body: "The platform is public, with no customer accounts or payment data, so the security surface stays small.",
    },
  ],

  commercials: [
    { label: "Engagement model", value: "Dedicated team" },
    {
      label: "Rate band",
      value:
        "$40 to $100 per hour by role. Content and QA near the floor, architecture near the ceiling. Mixed teams blend to $60 to $70.",
    },
    {
      label: "How we quote",
      value:
        "No fixed price before discovery. Anyone quoting firm on a first call has either padded it or plans to reprice at change request time.",
    },
  ],

  openQuestions:
    "Catalogue decay is the real long term risk and we underweighted it. FMCG listings change every quarter, and a public catalogue still showing a delisted brand costs credibility with principals and buyers at once. We would now put a last reviewed date on every brand and product record, and surface a stale queue in the CMS, rather than trusting editorial discipline. We would also instrument enquiry outcomes from day one, so reporting says which brands generate contact, not which pages generate traffic.",

  faqs: [
    {
      question: "Why does a distributor catalogue carry no prices or cart?",
      answer:
        "Trade pricing is not a published number. It moves with the customer, the credit term, the volume band and the promotional support the principal funds. A public figure hands every buyer a starting position. The catalogue confirms the brand and pack are carried, then hands off to a conversation.",
    },
    {
      question: "Is Arabic support translation work or build work?",
      answer:
        "Build work. A fully Arabic page mirrors cleanly, but distributor content mixes scripts, because brand names and pack codes stay in Latin. Those runs reorder under the bidirectional algorithm, so a correctly stored string still displays wrong. Retrofitting costs several times more.",
    },
    {
      question: "Why does the brand partner section matter more than the product catalogue?",
      answer:
        "It is what both audiences assess first. A principal reads the portfolio for channel conflict before discussing an appointment. A retailer reads it to gauge how much of its order book one supplier covers.",
    },
  ],

  links: {
    service: { label: "Web development", href: "/services/web-development" },
    industry: { label: "Logistics and distribution", href: "/industries/logistics-software-development" },
    blogs: [],
  },

  relatedCaseStudies: [
    { label: "Al Amri Express", href: "/case-studies/grocery-delivery-oman-al-amri-express", note: "Same market, Oman" },
    { label: "Stylebank", href: "/case-studies/multi-tenant-apparel-platform-stylebank", note: "Multi-tenant apparel operations" },
  ],
};
