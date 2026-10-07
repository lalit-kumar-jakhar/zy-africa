import type { IndustryPageData } from "./types";

export const heroSection = {
  eyebrow: "Industries · Travel & hospitality",
  title: "Travel software development for ",
  titleHighlight: "operators and distributors",
  description:
    "The systems behind the sell: inventory and availability that stay true across every channel, rate rules a revenue manager can actually change, a booking record that survives a schedule change, and the refund path that decides whether a cancellation costs you a customer. If what you want is a restaurant ordering app for a hotel outlet, the restaurant app page is the one you want.",
  features: [
    "IATA NDC and ONE Order",
    "GDS and channel manager",
    "Package Travel Directive",
    "$40 to $100 per hour",
  ],
  scrollTarget: "#essence",
  ctaText: "Book a 30 minute technical call",
  bgImage: "/static/assets/industries/travel-hospitality-industries.webp",
};

export const seo = {
  primaryKeyword: "travel software development",
  intent: "commercial",
  secondaryKeywords: [
    "booking engine development",
    "hotel management software development",
  ],
  competingUrl: "/solutions/restaurant-app-development-company",
} as const;

export const essence = {
  title: "The short version",
  description:
    "The commercial facts in one block, so you never have to hunt for them. Booking engine development and hotel management software development meet at inventory, the one record that must never disagree with itself. Those tiles are: Typical integration set, Phase one timeline, Rate band, Phase one range, with the arithmetic, Stack we actually use and Our commitment.",
  tiles: [
    {
      label: "Typical integration set",
      value:
        "A supplier or GDS connection, a channel manager pushing to OTAs, a payment gateway that can hold and release, and whatever the reservations team currently reconciles in. Plus the rate spreadsheet somebody maintains by hand.",
    },
    {
      label: "Phase one timeline",
      value:
        "3 to 5 months. The pacing constraint is supplier certification rather than engineering: every channel has its own test environment and sign-off, and those weeks are nobody's to accelerate.",
    },
    {
      label: "Rate band",
      value:
        "$40 to $100 per hour by role. Reporting and admin near the floor, availability modelling and refund logic near the ceiling. Mixed teams blend to around $65.",
    },
    {
      label: "Phase one range, with the arithmetic",
      value:
        "Discovery 90 plus inventory 240 plus rates 210 plus booking record 270 plus supplier links 250 plus payments 190 plus refunds 200 plus reconciliation 130 equals 1,580 hours. That runs $63,200 at $40 and $158,000 at $100, about $102,700 at a $65 blend. Full span 1,170 to 2,280.",
    },
    {
      label: "Stack we actually use",
      value:
        "Postgres for inventory and orders, because availability is a concurrency problem before it is a product one. A queue in front of every channel, since they retry and they duplicate. Your existing payment provider, with authorisation and capture separated.",
    },
    {
      label: "Our commitment",
      value:
        "No quote before discovery. We will also tell you when a channel manager you already pay for covers most of what you are asking us to build, which on this vertical happens more often than not.",
    },
  ],
};

export const anchors = [
  { id: "who-this-is-for", label: "Is this us?" },
  { id: "sub-verticals", label: "What breaks for us?" },
  { id: "systems", label: "How does a booking work?" },
  { id: "compliance", label: "Which rules apply?" },
  { id: "what-goes-wrong", label: "What goes wrong?" },
  { id: "build-or-buy", label: "Build it or buy it?" },
  { id: "cost", label: "What does it cost?" },
];

export const operations = {
  title: "Where booking systems earn their keep",
  description:
    "The stages a booking moves through, and what we build at each one. In sequence, the stages are: Search and availability, Offer and pricing, Booking and payment, Fulfilment and documents, Change and cancellation and Settlement and reporting. Each one is a place a system either holds the fact or loses it.",
  stages: [
    "Search and availability",
    "Offer and pricing",
    "Booking and payment",
    "Fulfilment and documents",
    "Change and cancellation",
    "Settlement and reporting",
  ],  image: {
    src: "/static/assets/industries/travel-hospitality-operations-map.svg",
    alt: "Two band travel map covering availability, pricing and booking, then documents, changes and settlement.",
  },
};

export const segments = {
  title: "Who this is for",
  description:
    "Six operator shapes and the number each one cannot currently produce. Not a fit: if you want a consumer ordering app for a hotel restaurant, that is the restaurant app page, linked at the foot of this one. The shapes it fits are: You oversold on two channels at once and Rate changes take a developer.",
  items: [
    {
      title: "You oversold on two channels at once",
      line: "Availability lives in three places and none of them is authoritative, so the same room or seat sells twice on a busy weekend. We start by making one inventory the source of truth and every channel a projection of it.",
    },
    {
      title: "Rate changes take a developer",
      line: "Seasonal rates, minimum stays and promotions are hardcoded, so revenue management files tickets instead of changing prices. We start by moving rate rules into data a non-engineer can edit safely.",
    },
    {
      title: "A schedule change breaks the booking",
      line: "The supplier moves a flight or a sailing and your record no longer matches theirs, so reconciliation becomes manual archaeology. We start with a booking record that can absorb a change without losing its history.",
    },
    {
      title: "Refunds are a support queue",
      line: "Cancellation policy lives in prose, agents interpret it differently, and the same case gets two answers. We start by encoding the policy so the system computes the entitlement and a human approves an exception.",
    },
    {
      title: "You are moving to NDC",
      line: "A carrier or supplier is pushing you off legacy distribution and the answer to whether you support Offers and Orders is currently no. We start by scoping what actually changes, which is the order record rather than the search screen.",
    },
    {
      title: "You sell packages in the EU",
      line: "Combining flight, hotel and transfer makes you an organiser with insolvency protection and refund duties, and the rules were tightened in 2026. We start by mapping which of your combinations are legally packages.",
    },
  ],
};

export const subVerticals = {
  title: "Find your operation",
  description:
    "Travel is one word for six businesses. What breaks is different in each, so what we build is different. This page covers: Hotels and groups, Tour operators, Online travel agencies, Airlines and air distribution, Ground transport and transfers and Activities and attractions.",
  items: [
    {
      title: "Hotels and groups",
      breaks:
        "Channel parity, overbooking and a rate plan matrix that grew organically until nobody can explain a price. Group and corporate rates sit outside the system entirely.",
      build:
        "One availability model with channel projections, rate plans as editable data, and controlled overbooking rather than accidental overselling.",
    },
    {
      title: "Tour operators",
      breaks:
        "A package is several suppliers with different cancellation terms, and the combined liability is not modelled anywhere. Margin is discovered after the season.",
      build:
        "Component-level supplier terms rolled into one package policy, with margin visible per departure rather than per year.",
    },
    {
      title: "Online travel agencies",
      breaks:
        "Search must be fast against inventory that changes constantly, and every supplier answers in a different shape. Look-to-book ratios make caching a commercial decision.",
      build:
        "A normalised offer layer over supplier responses, with a cache strategy chosen against the look-to-book ratio you actually have.",
    },
    {
      title: "Airlines and air distribution",
      breaks:
        "One booking exists as a PNR, an e-ticket and a set of EMDs, so ancillaries reconcile separately from the fare and servicing touches three systems.",
      build:
        "An order-shaped record that holds fare and ancillaries together, which is the direction IATA's Offers and Orders work is pushing anyway.",
    },
    {
      title: "Ground transport and transfers",
      breaks:
        "Capacity is a vehicle and a driver on a route at a time, and dispatch changes after booking. Static availability models cannot express it.",
      build:
        "Capacity modelled as a resource against a schedule, with reassignment that keeps the customer's record stable when the vehicle changes.",
    },
    {
      title: "Activities and attractions",
      breaks:
        "Timed-entry slots, per-person pricing rules and last-minute capacity make availability a per-minute question rather than a per-night one.",
      build:
        "Slot-based inventory with hold semantics, so a cart does not sell capacity twice while a customer is still typing their card number.",
    },
  ],
};

export const systems = {
  title: "How a booking actually works, and why it lives in several records",
  description:
    "Travel distribution is an inventory problem with a settlement problem attached. Here is the estate we expect to meet and the modelling decision that determines whether any of it reconciles. Grouped as: Legacy distribution, NDC and Orders and Channel managers and OTAs.",
  groups: [
    {
      group: "Legacy distribution",
      body: "The GDS layer, Amadeus, Sabre and Travelport, still carries a great deal of traffic. Its shape assumes a passenger name record, a separately issued e-ticket and electronic miscellaneous documents for anything else, which is why an ancillary reconciles on a different path from the fare.",
    },
    {
      group: "NDC and Orders",
      body: "IATA's New Distribution Capability, not to be confused with a distribution company, is an XML standard for exchanging Offers and Orders directly rather than through legacy messaging. ONE Order consolidates the PNR, the e-ticket and the EMDs into a single Order record. IATA's Distribution Advisory Council holds an aspirational goal of 100% Offers and Orders by 2030, with the explicit caveat that this means the capability exists by then, not that the industry has moved. Most carriers are expected to transition around 2028 to 2029.",
    },
    {
      group: "Channel managers and OTAs",
      body: "The layer that pushes availability and rates outward and pulls bookings back. Each channel has its own retry behaviour, its own idea of what a cancellation means, and its own certification before you may connect to production.",
    },
  ],
  distinction: {
    title: "The distinction that saves projects",
    body: "Inventory, availability and the offer are three different things, and systems that treat them as one cannot be fixed later without a rewrite. Inventory is what physically exists: a room, a seat, a slot. Availability is what may be sold right now given holds, stop-sells, minimum stays and channel allocation. An offer is a price and a set of conditions presented to one customer at one moment, and it can expire without anything about the inventory changing. Collapse them and you get the two failures that define this vertical: the same unit sold twice because availability was a stale copy of inventory, and a price that cannot be explained afterwards because the offer was never stored.",
  },
  pairs: [
    {
      pair: "Hold versus booking",
      body: "A hold reserves capacity without a contract and must expire on its own. Systems that only understand confirmed bookings either oversell while a customer is entering card details, or leak inventory when they abandon the cart. Model the hold explicitly with a timeout the business chooses.",
    },
    {
      pair: "Rate plan versus price",
      body: "A rate plan is the rule, a price is what that rule produced for a specific stay on a specific day through a specific channel. Store both. Keeping only the price makes a dispute unanswerable; keeping only the rule makes a historic invoice unreproducible.",
    },
    {
      pair: "Cancellation policy versus refund entitlement",
      body: "The policy is what was agreed at booking. The entitlement is what this cancellation, at this moment, actually earns back. Compute the second from the first and store it on the booking, so an agent approves an exception rather than performing an interpretation.",
    },
    {
      pair: "Supplier reference versus your booking id",
      body: "Every supplier issues their own reference and some reissue it after a schedule change. Key your record on your own identifier and hold theirs as an attribute with history, or a supplier-side change quietly orphans your booking.",
    },
  ],
};

export const compliance = {
  title: "Which rules apply to you",
  description:
    "Consumer protection, card handling and data residency land on different teams and all three end up in the same booking flow. Each row is dated. Verify current status before contracting, because one of these changed in 2026. Covered here: EU Package Travel Directive, revised 2026, IATA distribution and settlement, PCI DSS v4.0.1 and Data protection across your markets.",
  rows: [
    {
      item: "EU Package Travel Directive, revised 2026",
      detail:
        "The Council adopted the revision on 30 March 2026 and it became Directive (EU) 2026/1024 of 29 April 2026, with 28 months for member states to transpose, so national law lands around September 2028 and applies from 2029. The build consequences are concrete: vouchers may still be offered but acceptance must be voluntary and the traveller must be expressly told they can refuse and take a monetary refund instead, and where a supplier cancels or fails to deliver, they must refund the organiser within seven days. Combining a flight with a hotel or a transfer generally makes you an organiser, which brings insolvency protection with it.",
    },
    {
      item: "IATA distribution and settlement",
      detail:
        "Selling air on behalf of carriers brings accreditation and settlement obligations, and the messaging standard is moving. NDC exchanges Offers and Orders directly, and ONE Order collapses the PNR, e-ticket and EMD into one record. Plan for both worlds at once rather than a cutover: the aspiration is capability by 2030 and most carriers land around 2028 to 2029, so a system that can only speak one of the two will be wrong for several years in either direction.",
    },
    {
      item: "PCI DSS v4.0.1",
      detail:
        "All 51 future-dated requirements became mandatory on 31 March 2025, and multi-factor authentication now applies to all access to the cardholder data environment rather than only administrative accounts. Travel makes this harder than most retail because bookings are authorised early and captured late, sometimes weeks later, and because agents handle card details by phone. Keep card data out of your systems entirely and the assessment shrinks dramatically.",
    },
    {
      item: "Data protection across your markets",
      detail:
        "Oman's PDPL came into force on 13 February 2023 and treats cross-border transfer as needing express consent plus an adequacy assessment. India's DPDP Rules were notified on 14 November 2025 with full obligations by 13 May 2027. Passenger data is unusually mobile in this sector, moving between operator, supplier, channel and destination, so enumerate every hop and treat each as a transfer rather than as plumbing.",
    },
    {
      item: "Passenger and guest rights",
      detail:
        "Air passenger compensation and assistance regimes, hotel guest registration requirements and local tourism levies all vary by jurisdiction and change without much notice. The architectural answer is the same in each case: keep the rule in a jurisdiction-scoped policy layer with its own adapter, so a new market is a configuration rather than a change to how bookings work.",
    },
    {
      item: "The architectural consequence",
      detail:
        "Consumer protection, card scope and passenger rights all move on their own timetable and none of them should be threaded through the booking path. Keep each behind its own adapter and store the version of the policy that applied at the moment of sale, because a refund dispute two years later is judged against the terms in force then, not the terms in force now.",
    },
  ],
};

export const whatGoesWrong = {
  title: "What goes wrong",
  description:
    "Ten failure modes with the counter-practice attached. Naming them is more useful than a list of reasons to pick us. It starts with: Availability cached as a copy of inventory, No hold semantics and Rate rules hardcoded. Each is written plainly enough that you can check whether yours is already happening.",
  items: [
    {
      title: "Availability cached as a copy of inventory",
      line: "The cache goes stale under load and the same unit sells twice on exactly the day it matters. Derive availability from inventory with holds applied, and choose the cache window against your real look-to-book ratio.",
    },
    {
      title: "No hold semantics",
      line: "Capacity is either committed or free, so a customer entering card details is either blocking stock indefinitely or racing another buyer. Model the hold with an explicit timeout owned by the business.",
    },
    {
      title: "Rate rules hardcoded",
      line: "Revenue management raises a ticket to change a price, so prices change late or not at all. Rate plans belong in data with a safe editor, not in a deployment.",
    },
    {
      title: "Only the final price stored",
      line: "A dispute arrives and nobody can reconstruct why that customer paid that amount through that channel. Store the offer and the rule alongside the price.",
    },
    {
      title: "Cancellation policy left in prose",
      line: "Two agents read the same terms and give two answers, and the difference is refunded from margin. Encode the entitlement and let a human approve exceptions rather than interpret rules.",
    },
    {
      title: "Booking keyed on the supplier reference",
      line: "The supplier reissues it after a schedule change and your record is orphaned. Key on your own identifier and keep theirs as an attribute with history.",
    },
    {
      title: "Channel messages trusted on arrival",
      line: "Channels retry and duplicate, so one cancellation arrives three times and the third one refunds a booking that no longer exists. Make every handler idempotent on the channel's own reference.",
    },
    {
      title: "Authorisation and capture treated as one step",
      line: "Travel authorises early and captures late, and a system that captures immediately either breaks the commercial model or fails when the authorisation expires. Separate them from the first design.",
    },
    {
      title: "Package status not determined",
      line: "A flight plus a hotel is sold without anyone establishing that this makes you an organiser with insolvency and refund duties. Determine package status in discovery, per combination, in writing.",
    },
    {
      title: "Certification time left out of the plan",
      line: "Every supplier and channel has a test environment and a sign-off, and those weeks are nobody's to accelerate. Put each certification on the plan as its own dependency rather than as part of the integration task.",
    },
  ],
};

export const buildOrBuy = {
  title: "Build, buy, or buy the core and build the edge",
  description:
    "The honest answer is usually the third one, and on this vertical the honest answer is more often than elsewhere that you should buy. We are not an IATA accreditation body and we are not your consumer law adviser, so those judgements sit outside this table.",
  rows: [
    {
      option: "Channel management and distribution plumbing",
      best: "Buy",
      verdict:
        "Connecting to dozens of OTAs and keeping each certification current is a commodity with a permanent maintenance cost. Building it yourself means owning every channel's retry quirks forever for no differentiation.",
    },
    {
      option: "Inventory, rates and the booking record",
      best: "Build",
      verdict:
        "This is where your commercial model lives, and it is the part every packaged system models for the average operator rather than for you. It is also the layer that decides whether anything else can be trusted.",
    },
    {
      option: "Payments and refund execution",
      best: "Buy the core, build the edge",
      verdict:
        "Buy the gateway and the card handling, which carry real compliance overhead. Build the entitlement calculation, because the policy is yours and no provider can compute it for you.",
    },
  ],
};

export const cost = {
  title: "What travel software development costs, with the arithmetic shown",
  description:
    "Every competitor publishes a total with no hours behind it. Here is the rate, the hours and the multiplication, so you can argue with any line. The scope priced here is a direct-sell operator with channel distribution. The drivers are: How many supplier or channel connections, Complexity of the rate model, Look-to-book ratio, Whether you sell packages and Payment timing.",
  drivers: [
    {
      driver: "How many supplier or channel connections",
      hours: "80 to 200 each",
      note: "The second is expensive because it forces the abstraction. The fifth is cheap because the abstraction exists. Certification is separate and is calendar rather than hours.",
    },
    {
      driver: "Complexity of the rate model",
      hours: "High impact",
      note: "Seasonal rates, minimum stays, occupancy pricing, promotions and corporate agreements compound. A single flat rate per unit is a different project from a real revenue model.",
    },
    {
      driver: "Look-to-book ratio",
      hours: "Drives the cache work",
      note: "A high ratio makes caching a commercial necessity and a correctness risk at the same time, which is where the availability engineering goes.",
    },
    {
      driver: "Whether you sell packages",
      hours: "Adds real scope",
      note: "Component-level supplier terms, combined liability and insolvency protection are not a feature on top of single-item selling; they change the booking model.",
    },
    {
      driver: "Payment timing",
      hours: "140 to 280",
      note: "Deposits, balance dates, authorisation held for weeks and partial refunds. Straight capture at booking is far simpler and far less common in travel.",
    },
    {
      driver: "Number of jurisdictions",
      hours: "Medium",
      note: "The first consumer-protection regime is a build, each additional one is an adapter, provided the policy layer was kept out of the booking path.",
    },
    {
      driver: "Migration of live bookings",
      hours: "Rarely small",
      note: "You cannot pause selling to migrate. Forward bookings have to move without losing their terms, which is a reconciliation exercise as much as a data one.",
    },
    {
      driver: "Supplier certification calendar",
      hours: "Schedule, not hours",
      note: "Each channel's test environment and sign-off consumes weeks that nobody bills. They change your launch date rather than your price.",
    },
  ],
  modules: [
    { module: "Discovery and channel inventory", hours: "60 to 120" },
    { module: "Inventory and availability model", hours: "180 to 340" },
    { module: "Rate plans and pricing rules", hours: "160 to 300" },
    { module: "Booking and order record", hours: "200 to 380" },
    { module: "Supplier and channel integration", hours: "180 to 360" },
    { module: "Payments, deposits and capture", hours: "140 to 280" },
    { module: "Changes, cancellations and refunds", hours: "150 to 300" },
    { module: "Reconciliation and reporting", hours: "100 to 200" },
  ],
  math: {
    title: "Phase one, added up",
    points: [
      "Discovery 90 plus inventory 240 plus rate plans 210 plus booking record 270 plus supplier integration 250 plus payments 190 plus refunds 200 plus reconciliation 130 equals 1,580 hours. Every one of the eight sits inside its own published range above, so you can move any line and see what it does to the total.",
      "At $40 per hour that is $63,200. At $100 per hour it is $158,000. At a $65 blended rate, about $102,700. The full span across the eight modules is 1,170 hours at every minimum to 2,280 at every maximum.",
      "Deliberately outside that number: loyalty, dynamic packaging, a native mobile app, and any NDC or GDS accreditation fee. Each is its own decision, and the accreditation belongs to a body rather than to us.",
    ],
  },
};

export const costHighlights = [
  {
    label: "Phase one range",
    value: "$63,200 to $158,000",
    note: "The 1,580 hour worked example at the ends of the rate band, about $102,700 at a $65 blend.",
  },
  {
    label: "Typical timeline",
    value: "3 to 5 months",
    note: "Plus supplier certification weeks that nobody bills and nobody can accelerate.",
  },
  {
    label: "Useful hours",
    value: "1,170 to 2,280",
    note: "Every module at its minimum, through to every module at its maximum.",
  },
];

export const engagement = {
  title: "Engagement models",
  description:
    "Four models for travel software development, each with the downside stated in the same breath. Those four are: Distribution and rate audit, Phase one build, Build and carry through certification and Ongoing engineering. Pick by how settled the scope actually is, not by preference.",
  items: [
    {
      title: "Distribution and rate audit",
      good: "Two to three weeks establishing where availability actually lives, how many channels contradict it, and whether your rate model can be expressed as data. It frequently removes scope.",
      bad: "You pay for a document, and on this vertical it quite often concludes that a channel manager you already licence covers most of the ask. That is a good outcome and a small invoice for us.",
    },
    {
      title: "Phase one build",
      good: "The eight modules above against a written scope, ending with one authoritative inventory, editable rates and a refund path that computes rather than interprets.",
      bad: "It is a selling foundation, not a full travel platform. Loyalty, dynamic packaging and mobile are later phases and saying otherwise would be a worse trade for you than saying so now.",
    },
    {
      title: "Build and carry through certification",
      good: "We stay through supplier and channel sign-off, which is when integration assumptions get tested by somebody who is not us.",
      bad: "It ties our team to other people's test calendars, and those are not ours to speed up however much either of us would like.",
    },
    {
      title: "Ongoing engineering",
      good: "A standing allocation, which suits an operator adding channels, markets or product types steadily.",
      bad: "It works when there is a genuine backlog and quietly wastes money when there is not. We will tell you when there is not.",
    },
  ],
  recommendation:
    "What we usually suggest: a distribution and rate audit first, then a fixed scope phase one on inventory, rates and the booking record, with channel integrations added one at a time against their certification calendars.",
};

export const delivery = {
  title: "How we deliver travel software development",
  description:
    "Five phases, each named by the artifact it produces rather than by a stage in a generic waterfall. Those phases are: Distribution map, Inventory model, Rate engine, Order and servicing and Channel certification. Each is named by the artifact it hands you, so you can ask to see one.",
  items: [
    {
      phase: "Distribution map",
      line: "Every channel, what it can accept, what it sends back, and where availability is authoritative today. This artifact decides the shape of everything after it and usually surprises the operator.",
    },
    {
      phase: "Inventory model",
      line: "Inventory, availability and offers separated on paper, with hold semantics and their timeouts agreed before anything is built against them.",
    },
    {
      phase: "Rate engine",
      line: "Rate plans as editable data with a safe editor, and both the rule and the resulting price stored against every booking.",
    },
    {
      phase: "Order and servicing",
      line: "A booking record that absorbs a supplier schedule change without losing history, with the refund entitlement computed from the policy in force at sale.",
    },
    {
      phase: "Channel certification",
      line: "Each connection taken through its own test environment and sign-off, tracked as its own dependency rather than folded into an integration ticket.",
    },
  ],
};

export const nonFunctional = {
  title: "The technical buyer's checklist",
  description:
    "Copy this and run it against us, or against anyone else quoting for travel software development. Three groups cover: Correctness under concurrency, Idempotency and reconciliation and Evidence at the moment of sale. Copy any line straight into your own requirements document.",
  groups: [
    {
      group: "Correctness under concurrency",
      body: "One authoritative inventory with availability derived from it, holds that expire on their own, and a documented answer on what happens when two customers reach the last unit at the same moment. Overbooking allowed only where the business chose it.",
    },
    {
      group: "Idempotency and reconciliation",
      body: "Every channel handler idempotent on the channel's own reference, because duplicates are certain rather than possible. A daily reconciliation that names discrepancies rather than absorbing them, with an owner for the exception queue.",
    },
    {
      group: "Evidence at the moment of sale",
      body: "The offer, the rate rule and the cancellation policy version all stored against the booking, because a dispute two years later is judged against the terms in force then. Card data never resident in your systems, with authorisation and capture separated.",
    },
  ],
};

export const faqs = [
  {
    question: "Do we need to replace our channel manager?",
    answer:
      "Usually not, and on this vertical we say that more often than on any other. Connecting to dozens of OTAs and keeping each certification current is commodity work with a permanent maintenance cost. What operators actually lack is an authoritative inventory and a rate model they can edit. We would rather integrate with the channel manager you already pay for.",
  },
  {
    question: "What does it cost, and how do you price it?",
    answer:
      "Hours times $40 to $100 per hour by role. The module table gives the range for each of the eight modules and the worked example shows 1,580 hours coming to about $102,700 at a $65 blend. Loyalty, dynamic packaging, mobile and any accreditation fee are excluded and named as excluded. We do not quote before discovery.",
  },
  {
    question: "Who owns the code, the booking data and the integrations?",
    answer:
      "You do. The code is yours on delivery, booking and customer data live in your infrastructure rather than ours, and the channel integrations are yours to keep running or hand to another supplier. We do not retain a copy of your booking data.",
  },
  {
    question: "What is NDC, and do we need it now?",
    answer:
      "New Distribution Capability is IATA's XML standard for exchanging Offers and Orders directly rather than through legacy messaging, and ONE Order collapses the passenger name record, the e-ticket and the miscellaneous documents into a single Order. IATA's aspiration is that the capability exists industry-wide by 2030, with most carriers moving around 2028 to 2029. The practical answer is to build a record that is order-shaped now and keep speaking legacy alongside it, because both will be live for years.",
  },
  {
    question: "Does the new Package Travel Directive affect us?",
    answer:
      "If you combine a flight with a hotel or a transfer for EU travellers, very likely. The revision became Directive (EU) 2026/1024 on 29 April 2026 with 28 months to transpose, so national law lands around September 2028. The concrete build items are that a voucher can never be forced, the traveller must be told they may take cash instead, and a supplier who cancels must refund the organiser within seven days.",
  },
  {
    question: "How do you stop us overselling?",
    answer:
      "By making one inventory authoritative and deriving availability from it with holds applied, rather than letting each channel keep its own copy. Most overselling we inherit comes from a stale cache that nobody chose deliberately, rather than from a race condition.",
  },
  {
    question: "Can you handle deposits and balance payments?",
    answer:
      "Yes, and it is the reason payment work is heavier here than in retail. Travel authorises early and captures late, sometimes weeks later, so authorisation and capture have to be separate from the first design and expiry has to be handled rather than discovered.",
  },
  {
    question: "You have no travel client. Why should we trust the page?",
    answer:
      "We do not have one, and we would rather say so than stretch an unrelated project to fit. Everything on this page is distribution mechanics, regulation and failure modes, all of which you can verify independently of us. Judge it on whether it describes your problem accurately, and ask us hard questions on the call.",
  },
  {
    question: "Can you migrate our live forward bookings?",
    answer:
      "Yes, and it is rarely small. You cannot pause selling to migrate, so forward bookings have to move with their terms intact while new ones keep arriving. We treat it as a reconciliation exercise with a rollback plan rather than a data load.",
  },
  {
    question: "How long does supplier certification take?",
    answer:
      "Longer than the integration, frequently. Each channel and supplier has its own test environment and sign-off, and the calendar belongs to them. We put each one on the plan as its own dependency so a slip is visible early rather than discovered at launch.",
  },
];

export const nextSteps = {
  title: "What happens next",
  description:
    "Four steps with a shape attached to each, so booking a call is a known quantity.",
  items: [
    {
      step: "A 30 minute technical call",
      line: "Bring your channel list, your rate plan structure, and the last time you oversold. Those three size the project faster than an hour of description.",
    },
    {
      step: "The availability question",
      line: "We establish where availability is authoritative today and how many systems hold a copy. The answer usually explains every symptom you called about.",
    },
    {
      step: "A written scope within a week",
      line: "The modules, the hour ranges and the arithmetic, with certification weeks shown as calendar rather than cost. If your existing channel manager covers most of it, the document says that.",
    },
    {
      step: "You decide",
      line: "With the scope in hand you choose whether we build it, your team does, or your incumbent extends. The document is useful in all three cases and it is yours either way.",
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
          label: "Database development",
          href: "/services/database-development",
          note: "Inventory, holds and the booking record",
        },
        {
          label: "Web development",
          href: "/services/web-development",
          note: "Search, checkout and the agent console",
        },
        {
          label: "Mobile app development",
          href: "/services/mobile-app-development",
          note: "Traveller and on-property apps",
        },
      ],
    },
    {
      group: "Adjacent capabilities",
      links: [
        {
          label: "Predictive analytics",
          href: "/services/predictive-analytics-development",
          note: "Demand forecasting and rate recommendation",
        },
        {
          label: "AI agent development",
          href: "/services/ai-agent-development",
          note: "Servicing and change requests without a queue",
        },
        {
          label: "Restaurant app development",
          href: "/solutions/restaurant-app-development-company",
          note: "If what you need is the F&B ordering product",
        },
      ],
    },
    {
      group: "Other sectors",
      links: [
        {
          label: "Food service",
          href: "/industries/food-service-software-development",
          note: "Restaurants, kitchens and the hotel food line",
        },
        {
          label: "Real estate",
          href: "/industries/real-estate-software-development",
          note: "Property, tenancy and the asset behind a stay",
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
    title: "Tell us where availability lives today",
    description:
      "Name every system that holds a copy of what you can sell right now. If the answer is more than one, that list is the reason you oversold, and it tells us more than a requirements document would.",
    ctaText: "Book a 30 minute technical call",
  },
  end: {
    title: "Start with inventory, not the search screen",
    description:
      "Almost every question on this page resolves to whether one system is authoritative about what you can sell. We will establish that, tell you which regulations bind you, and give you the hours either way.",
    ctaText: "Book a 30 minute technical call",
  },
};

export const relatedPosts = [
  "ai-agents-for-business",
  "how-much-does-ai-development-cost",
  "ai-for-fraud-detection-a-quick-guide",
  "ai-copilots-for-business",
  "top-ai-use-cases-you-cant-ignore",
  "chat-with-your-documents",
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
      "Forecasting, automation and assistant work that applies directly to booking and distribution systems.",
  },
};
