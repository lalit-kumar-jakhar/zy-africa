import type { CaseStudy } from "./types";

export const seo = {
  primaryKeyword: "fashion ecommerce app development",
  intent: "commercial",
  secondaryKeywords: [
    "fashion ecommerce platform",
    "apparel storefront development",
  ],
  competingUrl: "/industries/retail-software-development",
} as const;

export const g4girl: CaseStudy = {
  slug: "fashion-ecommerce-india-g4girl",
  clientName: "G4Girl",
  confidentiality: "named-approved",
  approvalRecord:
    "Drafted 2026-08-07 from portfolio.ts and testimonials.ts, coded 2026-08-13. The only published outcome is the Clutch review by Jitender Khatri, quoted verbatim and attributed. outcomes[] is deliberately EMPTY so the fivefold figure is never rendered as a Zyneto claim; it appears only as the reviewer's words. sourceUrl is the Clutch profile, since no deep link to the individual review is known; a direct review URL would be a stronger citation anchor. BLOCKING BEFORE live: true: whether the storefront runs WooCommerce, since a named commerce layer is verifiable and a generic storefront is not; the three decision rationales, which are defensible from the stack but reconstructed rather than recorded; which payment methods and gateway the store accepts, given how hard the domain section leans on cash on delivery economics; whether the engagement was fixed scope, dedicated team or build plus retainer, since Project delivery is inferred from the four months inside the quote; who holds the AWS account and domain, because the exit claim depends on it; and whether wholesale is a real checkout with trade pricing or an enquiry form. CONFIRMED 2026-08-20 by the user: engagement model is fixed scope, corrected from the inferred Project delivery. Client holds the AWS account, domain and storefront; Zyneto sets up, configures and manages, and an Ownership entry was added to riskAndHandover on that basis. STILL BLOCKING: whether the storefront runs WooCommerce, the three decision rationales, payment methods and gateway, and whether wholesale is a real checkout.",

  h1: "Fashion ecommerce app development in India: the storefront we built for G4Girl",
  metaTitle: "G4Girl: Fashion Ecommerce App Development | Zyneto",
  metaDescription:
    "Fashion ecommerce app development for G4Girl in India: size and variant modelling, exchange-led returns, cash on delivery economics, speed on mobile.",
  standfirst:
    "G4Girl is a women's everyday wear brand selling nightwear, kurta sets, dupattas and outerwear across India. We built the storefront it trades on, hosted on AWS with error monitoring watching the paths where a failure costs a sale. This is a fashion ecommerce platform build, and apparel storefront development is where the size and variant model earns its keep.",
  coverImage: "/static/assets/portfolio/g4girl.webp",

  author: { name: "Zyneto engineering", role: "Delivery team" },
  datePublished: "2026-08-13",
  lastReviewedDate: "2026-08-13",

  rail: {
    sector: "D2C fashion and apparel ecommerce",
    market: "India",
    engagementType: "Project delivery",
    platforms: ["Web"],
    stack: ["WordPress", "PHP", "MySQL", "AWS", "Sentry"],
    liveLinks: [
      { label: "g4girl.in", url: "https://g4girl.in" },
      { label: "Clutch review", url: "https://clutch.co/profile/zyneto-global-technologies" },
    ],
  },

  domainContext: {
    heading: "What makes fashion ecommerce app development hard in India",
    blocks: [
      {
        title: "A fit return is an exchange that got refunded by mistake",
        body: "Most apparel returns are fit returns: the buyer wanted the garment and wants another size. A cart that only reverses a payment turns a swap into a lost sale and two shipping legs. The cheaper path offers the exchange where the reason is captured, with the other size's stock visible. That needs a structured reason code stored against the style, not free text on the order.",
      },
      {
        title: "Cash on delivery moves the failure earlier",
        body: "With cash on delivery, the order can fail before it is ever a sale. The parcel is refused at the door and goes back to origin, both legs paid by the seller. No return window opens, because nothing was delivered. Address quality at checkout and a confirmation step before dispatch therefore do more for margin than any returns policy, and repeat refusals are a customer signal, not an order one.",
      },
      {
        title: "Speed is part of the checkout on mobile-first traffic",
        body: "Indian ecommerce traffic arrives overwhelmingly on phones, much of it mid-range Android over mobile networks. Fashion is the worst category for it: the product page is mostly imagery and the imagery is the product. Every merchandising script, review widget and pixel added later lands on that page. Page weight is not a concern sitting next to conversion; it is an input to it.",
      },
      {
        title: "Generic variant models do not fit garments",
        body: "A general purpose cart models a variant as an attribute combination carrying its own stock, close enough for shoes and wrong for apparel. Size runs differ by style, a colourway changes the photography rather than a swatch, and the chart belongs to the garment, since a kurta and a night suit cut from different blocks do not share one. A dupatta has no size axis, so the model must let the axis be absent rather than default.",
      },
    ],
  },

  situation:
    "G4Girl sells everyday womenswear built around comfort: night dresses and night suits, kurtas and kurta sets, dupattas, and outerwear. Seasonal collections move at accessible price points, with promotions frequent enough that merchandising is continuous work. Two kinds of buyer arrive at one catalogue: shoppers who browse a style, check a size and buy a piece or two, and wholesale buyers who care about a full size run. The trading promises sit on the product page, where the decision happens and a mobile-first build has least room to be careless.",

  buildBlocks: [
    {
      heading: "The catalogue, and where size lives inside it",
      body: "A structure covering nightwear, kurta sets, dupattas and outerwear, where a style carries its own size run and imagery per colourway, and an item with no size axis is normal rather than an exception.",
    },
    {
      heading: "One catalogue serving retail and wholesale buyers",
      body: "Both read the same product data and want different things from it, so one source of truth presents availability differently to a buyer purchasing in quantity.",
    },
    {
      heading: "Collections and promotions the brand runs without us",
      body: "Seasonal drops and recurring promotions are content operations, not deployments. Nobody waits on an engineer to change the front page.",
    },
    {
      heading: "Trading promises stated at the point of decision",
      body: "Free India-wide delivery, the product guarantee and the returns path appear on the product page, not only a policy footer.",
    },
    {
      heading: "AWS hosting with Sentry on the money paths",
      body: "Hosted on AWS, with Sentry reporting errors so a checkout breaking for one browser or payment route surfaces as an event, not a support message.",
    },
  ],

  decisions: [
    {
      decision: "WordPress as the storefront base, not a bespoke PHP application",
      alternativeRejected: "A custom-built store with the catalogue modelled from scratch",
      reason:
        "The daily work is merchandising, not engineering, and the team owning it should not queue behind a release.",
      tradeoffAccepted:
        "The plugin surface joins our security and performance budget, and apparel structure is built on the platform rather than taken from it.",
    },
    {
      decision: "Self-managed AWS rather than commodity shared hosting",
      alternativeRejected: "A managed WordPress host with fixed resources",
      reason:
        "Traffic on a promotional catalogue is spiky by design, so we wanted caching control and room to size up for a sale.",
      tradeoffAccepted:
        "Patching, backups and the hosting bill become somebody's named job, with no vendor absorbing it.",
    },
    {
      decision: "Sentry on the storefront rather than trusting server logs and customer reports",
      alternativeRejected: "Reading access logs after the fact",
      reason:
        "A checkout failing for one browser or payment path is invisible in aggregate traffic, surfacing weeks later as unexplained drop-off.",
      tradeoffAccepted:
        "An error stream needs triage discipline, or third-party script noise buries the real failures.",
    },
  ],

  reusableArtifact: {
    heading: "Reading a failed apparel order: what the signal actually means",
    intro:
      "Fashion sellers in India log everything as a return. Most of it is not, and sorting by cost is the difference between fixing a size chart and refunding a customer who wanted the garment.",
    columns: ["Signal", "What it actually is", "Cheapest correct response", "What you need in place first"],
    rows: [
      ["Asks for a different size", "An exchange, not a refund", "Ship the replacement, one reverse pickup", "Alternate size stock visible at capture"],
      ["Fit complaints cluster on a style", "A grading or chart error", "Correct the chart, pause the style", "Reasons stored per style, not per order"],
      ["Colour or fabric not as shown", "A photography or copy gap", "Reshoot, rewrite the description", "Image set bound to the colourway"],
      ["Cash on delivery parcel refused", "Return to origin. No sale, both legs paid", "Confirm before dispatch", "Address quality at checkout"],
      ["Repeat refusals from one address", "A pattern, not an incident", "Move that buyer to prepaid", "Refusal history keyed to the customer"],
      ["Wholesale order returned in part", "A trade dispute, different terms", "Settle against the wholesale agreement", "Retail and wholesale returns separated"],
    ],
    note: "Only the first three belong in a return rate. Rows four and five never became sales, so they never appear in returns reporting while still consuming freight both ways.",
  },

  shipped: {
    capabilities: [
      "Per style size runs and per colourway imagery",
      "Collections and promotions editable by the brand's own team",
      "Delivery, guarantee and returns terms on the product page",
      "AWS hosting with Sentry on the transactional paths",
    ],
    scopeFacts: [
      "Scope, not results: nightwear, ethnic wear, dupattas and outerwear",
      "Delivery offered across India",
      "One catalogue serving both individual and wholesale buyers",
    ],
  },

  clientQuote: {
    quote:
      "Thanks to Zyneto Global Technologies, the client increased sales by fivefold, streamlined their operations, and reduced manual efforts. The project was completed within four months. Their communication and understanding approach were hallmarks of their work. A highly professional team.",
    name: "Jitender Khatri",
    title: "Founder & CEO",
    company: "G4Girl",
    sourcePlatform: "Clutch",
    sourceUrl: "https://clutch.co/profile/zyneto-global-technologies",
  },

  riskAndHandover: [
    {
      title: "Ownership",
      body:
        "The AWS account, the domain and the storefront sit with the client. We set them up, configure them and run them, which means moving supplier is a commercial decision rather than a migration.",
    },
    {
      title: "Nothing here is proprietary to us",
      body: "PHP, MySQL, WordPress and AWS. Any competent team in India reads this stack, and the hiring pool is the largest of any option on the table.",
    },
    {
      title: "Failures are visible, not reported",
      body: "Sentry means a broken path arrives as an event with a stack trace, not a customer message a week later, readable by whoever runs the site next.",
    },
    {
      title: "Exit is a commercial decision",
      body: "A standard platform in a standard cloud account, so changing supplier requires no rebuild.",
    },
  ],

  commercials: [
    { label: "Engagement model", value: "Fixed scope" },
    { label: "Rate band", value: "40 to 100 USD per hour by role, blending to 60 to 70" },
    {
      label: "How we quote",
      value:
        "No fixed price before discovery. Scope here is decided by the variant model and the returns flow, both cheaper to size after seeing the range than to guess.",
    },
  ],

  openQuestions:
    "Two things we would sequence differently. Size charts belong to the garment rather than the store template, and settling that late turns one fit correction into an edit repeated across every product in the style. And a page weight budget is worth agreeing before the first marketing script, because every one after arrives with a business case attached and nobody owning the milliseconds. Neither is a WordPress problem, and both are cheaper to decide at the start than to unwind.",

  faqs: [
    {
      question: "Why does a fashion store need exchanges and not just refunds?",
      answer:
        "Because the commonest return reason is size, and a size return is a customer who still wants the garment. Refund only, and you pay two shipping legs for no sale and stock back in the warehouse. Offering the alternate size at capture keeps the order for one reverse pickup.",
    },
    {
      question: "What is RTO, and why does it matter more than the return rate?",
      answer:
        "Return to origin: a cash on delivery parcel refused or undeliverable and sent back. It never becomes a sale, so it never appears in return statistics, but the seller pays freight both ways. On a low average order value catalogue, a run of RTOs can outweigh the margin on orders that landed.",
    },
    {
      question: "Is WordPress a reasonable base for a D2C fashion brand?",
      answer:
        "For a catalogue this size, yes, and the reason is operational: merchandising changes collections and promotions without waiting on a release. The limits are real. Plugin count becomes page weight, and page weight is conversion on mobile.",
    },
  ],

  links: {
    service: { label: "Web development", href: "/services/web-development" },
    industry: { label: "Retail and e-commerce", href: "/industries/retail-software-development" },
    blogs: [],
  },

  relatedCaseStudies: [
    {
      label: "Stylebank",
      href: "/case-studies/multi-tenant-apparel-platform-stylebank",
      note: "Apparel operations behind the catalogue",
    },
    {
      label: "Al Amri Express",
      href: "/case-studies/grocery-delivery-oman-al-amri-express",
      note: "Grocery delivery in Oman",
    },
  ],
};
