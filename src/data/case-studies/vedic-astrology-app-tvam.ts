import type { CaseStudy } from "./types";

export const seo = {
  primaryKeyword: "astrology app development",
  intent: "commercial",
  secondaryKeywords: [
    "horoscope app development",
    "vedic astrology platform",
  ],
  competingUrl: null,
} as const;

export const tvam: CaseStudy = {
  slug: "vedic-astrology-app-tvam",
  clientName: "Tvam",
  confidentiality: "named-no-metrics",
  approvalRecord:
    "Drafted 2026-08-07 from portfolio.ts, the public web listing and both store listings, coded 2026-08-13 on the user's instruction. No client approval sought. No outcome metric or quote published, so outcomes and clientQuote are absent. DECISION OVERRIDDEN, RECORDED SO IT IS TRACEABLE: CASE-STUDY-SYSTEM.md section 6 lists Tvam under do not give these their own page, on the grounds that it feeds no service or solution page, owns no commercial query and carries no outcome evidence. The user chose to build it anyway 2026-08-13. It is live: false, so the go-live decision remains separate. NO INDUSTRY LINK, deliberately: the draft pointed at /industries/media, which does not exist. The real page is media-entertainment and it is dark, and filing an astrology platform under media is the precise error already on record for this client. links.industry is optional and is omitted rather than forced. BLOCKING BEFORE live: true: which ephemeris and which ayanamsa the build actually uses, and whether Lahiri is fixed or user selectable, since the build section is written around the requirement rather than the implementation; whether the chart renderers are native drawing or a shared web view; engagement duration, team size and composition; who holds the store listings, domain and hosting, which is why the ownership claim is deliberately absent from riskAndHandover; whether the client or Zyneto staffs the round the clock live chat, written here as the client's team; and whether PHP and MySQL sit behind all three surfaces or only some. CONFIRMED 2026-08-20 by the user: engagement model is fixed scope. NOTE: the page previously stated Dedicated team, which was wrong, not merely unconfirmed. Client holds the store listings, domain and hosting; Zyneto sets up, configures and manages, and an Ownership entry was added to riskAndHandover on that basis. STILL BLOCKING: which ephemeris and ayanamsa, whether the chart renderers are native or a web view, engagement duration and team size, and who staffs the live chat.",

  h1: "Astrology app development on iOS and Android: what we built for Tvam",
  metaTitle: "Tvam: Astrology App Development, Vedic | Zyneto",
  metaDescription:
    "Astrology app development for Tvam on iOS and Android: ephemeris calculation, two regional chart renderers and dasha change alerts.",
  standfirst:
    "Tvam turns a birth date, time and place into an interactive Vedic chart on iOS, Android and the web. We built the calculation layer behind it, two regional chart renderers, and the dasha timeline that drives its notifications. Horoscope app development is the visible half; the vedic astrology platform underneath is ephemeris maths that has to be exact.",
  coverImage: "/static/assets/portfolio/tvam-app.webp",

  author: { name: "Zyneto engineering", role: "Delivery team" },
  datePublished: "2026-08-13",
  lastReviewedDate: "2026-08-13",

  rail: {
    sector: "Consumer astrology and personal insight apps",
    market: "India",
    engagementType: "Dedicated team",
    platforms: ["iOS", "Android", "Web"],
    stack: ["Swift", "Kotlin", "Java", "PHP", "MySQL"],
    liveLinks: [
      { label: "tvam.app", url: "https://tvam.app/" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=app.tvam.astrology" },
      { label: "App Store", url: "https://apps.apple.com/us/app/tvam-vedic-astrology-kundli/id1449579147" },
    ],
  },

  domainContext: {
    heading: "What makes astrology app development hard: chart calculation",
    blocks: [
      {
        title: "Positions come from an ephemeris, and the corrections cost more than the lookup",
        body: "Reading a planetary longitude out of a numerical ephemeris and interpolating it is the easy part. The corrections are not: civil time converted to the ephemeris time scale, position adjusted for the observer, then the sidereal shift. Sidereal systems subtract an ayanamsa from the tropical longitude, and the common variants disagree by around a degree. That is enough to move a planet across a sign boundary, so the ayanamsa is a stored input, never a constant.",
      },
      {
        title: "The birth instant is the weakest link in the chain",
        body: "The ascendant travels the whole zodiac in a day, averaging a degree every four minutes and moving unevenly, so minutes of clock error reorder houses. The offset turning a local clock reading into an instant is historical too: India ran a wartime offset in the 1940s and local mean time before standardisation. Normalise to UTC at capture and you freeze whichever rules were current.",
      },
      {
        title: "Two regional conventions mean two layout engines",
        body: "The North Indian chart fixes houses and moves sign numbers between them. The South Indian chart fixes signs in a ring and moves houses. Same data, incompatible geometry: one reads anticlockwise from a top centre diamond, the other clockwise from the ascendant's cell. Cells are triangles and quadrilaterals in one and rectangles in the other, so hit testing a tapped planet differs per format.",
      },
      {
        title: "Nested cycles that have to stay right for decades",
        body: "Vimshottari splits a 120 year cycle into periods, then subdivides each proportionally, several levels deep. The entry point is a fraction set by the Moon's position in its nakshatra, and every level inherits its parent's rounding. Pick the wrong day length constant and the top drifts by days while the fourth level lands on the wrong date. Each user's next boundary is a distinct future timestamp, so there is no shared schedule to fire from.",
      },
    ],
  },

  situation:
    "Tvam is a consumer product in India, where a birth chart is not a novelty screen. Users have usually seen their kundali before, often on paper from a family astrologer, and they check a new app against it. That sets the bar early: the chart has to agree with what someone already believes is correct, in the regional format they grew up reading, and keep agreeing over years. The product does more than draw a chart. It stores charts without a cap, runs Ashtakoota comparisons, explains what is on screen with video, and puts a person on live chat when that is not enough. All of it reads from the same computed state, so the calculation is the spine rather than a per screen convenience.",

  buildBlocks: [
    {
      heading: "The calculation service every surface reads from",
      body: "One server side service resolves the birth event, computes longitudes under the selected ayanamsa, derives house cusps and produces the divisional charts. All three surfaces read its output.",
    },
    {
      heading: "One chart model, two regional renderers",
      body: "It emits one structure of planets, signs and houses. Clients draw that twice, as a North Indian diamond grid and a South Indian ring, tappable in both.",
    },
    {
      heading: "The dasha timeline and the notification queue behind it",
      body: "Vimshottari periods are computed as a nested timeline rather than a single current value, so any point in a life is addressable, and each chart's next boundary becomes a scheduled event.",
    },
    {
      heading: "Matching, saved charts and the consultation surface",
      body: "Ashtakoota compares two saved charts and scores the koota points. Around it: unlimited saved kundalis, video explanations tied to chart concepts, live chat, and generated consultation reports.",
    },
  ],

  decisions: [
    {
      decision: "Compute on the server, not on the device",
      alternativeRejected: "An on device ephemeris library in each app",
      reason:
        "Two native codebases would have to agree numerically forever, and every data correction would ship at app store review speed.",
      tradeoffAccepted:
        "The core screen depends on connectivity and our latency, so offline needs deliberate caching.",
    },
    {
      decision: "Store the birth event, derive the instant on read",
      alternativeRejected: "Normalising to a UTC instant at capture",
      reason:
        "Timezone history gets corrected, and a stored instant freezes whichever rules were current.",
      tradeoffAccepted:
        "Resolution work on every read, and place records nobody can quietly edit without invalidating what was derived from them.",
    },
    {
      decision: "One chart structure, two renderers",
      alternativeRejected: "A separate computation path per format",
      reason: "The conventions disagree about layout, not content.",
      tradeoffAccepted:
        "The renderers absorb every difference, so each new divisional chart is drawn twice and checked twice.",
    },
  ],

  reusableArtifact: {
    heading: "Which inputs a chart is actually sensitive to",
    intro: "Most reported wrong chart complaints trace back to one of five inputs, not the ephemeris.",
    columns: ["Input", "Error to expect", "What it moves", "Visible"],
    rows: [
      ["Clock time of birth", "Minutes, from memory or a handwritten record", "The ascendant, a degree per four minutes", "Yes, layout shifts at a sign boundary"],
      ["Timezone rule for that date", "A full hour, when wartime or pre standard rules are missed", "The instant, so everything downstream", "Yes, and it reads as a bug"],
      ["Ayanamsa selection", "About a degree between common variants", "Sign placement near a cusp", "Yes, users compare other software"],
      ["Birth coordinates", "A few kilometres, when a locality resolves to a city centre", "Ascendant and house cusps, slightly", "Rarely, except near a boundary"],
      ["Day length constant in dasha maths", "Fractions of a day, compounding down levels", "Dasha start and end dates", "Yes, notifications fire wrong"],
    ],
    note: "Store the inputs and settings that produced a chart, not only the output. Any row here can be corrected later, and a chart you cannot recompute is one you cannot defend.",
  },

  shipped: {
    capabilities: [
      "Native iOS and Android apps, plus a web product",
      "Birth charts with clickable planets and houses, in North and South Indian formats",
      "All major divisional charts and snapshot views of planetary states",
      "Vimshottari dasha timeline with change notifications",
      "Ashtakoota matchmaking between saved charts",
      "Video explanations tied to chart concepts, live chat, and consultation reports",
    ],
    scopeFacts: [
      "Scope of the product, not results claimed by Zyneto: three surfaces, web, iOS and Android",
      "Two chart conventions from one data model",
      "Unlimited kundali storage per account",
      "Live chat around the clock, staffed by the client",
    ],
  },

  riskAndHandover: [
    {
      title: "Ownership",
      body:
        "The store listings, the domain and the hosting all sit with the client. We set them up, configure them and run them, so nothing about leaving requires our cooperation.",
    },
    {
      title: "Correctness is a regression problem, not a launch problem",
      body: "Astronomical code fails silently, so a fixed set of birth data with known output is the only practical defence. A wrong chart never looks like a crash.",
    },
    {
      title: "Nothing in the calculation layer is locked to us",
      body: "Ephemeris data, ayanamsa selection and dasha rules are configuration and documented arithmetic, verifiable by any team independently of who wrote the code.",
    },
    {
      title: "The data ages, so someone owns the updates",
      body: "Timezone databases and ephemeris data get revised. Owning this product means owning a recurring data update, not only a codebase.",
    },
  ],

  commercials: [
    { label: "Engagement model", value: "Fixed scope" },
    { label: "Rate band", value: "40 to 100 USD per hour by role, blending to 60 to 70" },
    {
      label: "How we quote",
      value:
        "No fixed price before a discovery that establishes the calculation scope and the chart formats in play.",
    },
  ],

  openQuestions:
    "We treated birth time as given. Plenty of users do not know theirs to the minute, and the app has no way to say so: a chart drawn from an approximate time looks exactly as confident as one drawn from a hospital record. Starting again, we would carry an uncertainty flag on the birth event from capture, and let the interface show which parts of a chart hold steady across a plus or minus window and which do not. Retrofitting that touches every screen reading a house.",

  faqs: [
    {
      question: "Why do two astrology apps put the same planet in different signs?",
      answer:
        "Almost always the ayanamsa. A sidereal longitude is the tropical longitude minus that offset, and the common variants, Lahiri, Raman and Krishnamurti among them, differ by around a degree, so a planet near a cusp lands in different signs. Lahiri is what the Indian government's Rashtriya Panchang follows.",
    },
    {
      question: "How exact does the birth time need to be?",
      answer:
        "It depends which part you care about. Sign placements, the Moon aside, barely move over a few minutes. The ascendant crosses all twelve signs in a day, so minutes shift it and can reorder every house.",
    },
    {
      question: "Why does a birth in 1940s India need special handling?",
      answer:
        "The offset was different then: a wartime shift during those years, and local mean time before standardisation. Applying today's plus five thirty can put such a birth an hour out, enough to change the ascendant, so the offset must come from historical timezone data keyed on date and place.",
    },
  ],

  links: {
    service: {
      label: "Mobile app development",
      href: "/services/mobile-app-development",
    },
    blogs: [],
  },

  relatedCaseStudies: [
    {
      label: "Al Amri Express",
      href: "/case-studies/grocery-delivery-oman-al-amri-express",
      note: "Consumer app plus the operations backend behind it",
    },
    {
      label: "Kroolo",
      href: "/case-studies/ai-work-os-platform-kroolo",
      note: "One computed state behind every surface",
    },
  ],
};
