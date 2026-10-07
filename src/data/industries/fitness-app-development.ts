import type { IndustryPageData } from "./types";

export const heroSection = {
  eyebrow: "Industries · Fitness and Wellness",
  title: "Fitness app development for ",
  titleHighlight: "gyms, studios and franchises",
  description:
    "Almost every fitness platform stores membership as a status word. A member can be paid up, frozen, inside a grace period after a card decline, cancelled but entitled until the period ends, or locked in a minimum term, and one enum collapses all five into the same answer. We build the parts where that distinction decides both access and revenue.",
  features: [
    "Entitlement, not a status",
    "Dunning before cancelling",
    "Health data, not HIPAA",
    "$40 to $100 per hour",
  ],
  scrollTarget: "#essence",
  ctaText: "Book a 30 minute technical call",
  bgImage: "/static/assets/industries/fitness-wellness-industries.webp",
};

export const seo = {
  primaryKeyword: "fitness app development",
  intent: "commercial",
  secondaryKeywords: [
    "fitness app development company",
    "gym management software development",
  ],
  competingUrl: null,
} as const;

export const essence = {
  title: "The short version",
  description: "The commercial facts in one block, before any of the detail. Some of it is what a fitness app development company is asked for; the rest is gym management software development, where the churn actually lives. They are: Typical integration set, Phase one timeline, Rate band, Phase one range, Stack we actually use and Our commitment.",
  tiles: [
    {
      label: "Typical integration set",
      value:
        "A member management platform you are keeping, a payment gateway with mandate support, access control hardware, a wearable or health data source, an accounting ledger, and for corporate wellness an eligibility feed from the employer or its benefits administrator.",
    },
    {
      label: "Phase one timeline",
      value:
        "14 to 22 weeks for the worked example below, run as a squad rather than a single developer. Access hardware and a payment gateway certification are the two things that move the date, and neither of them is on our side of the table.",
    },
    {
      label: "Rate band",
      value:
        "$40 to $100 per hour by role and seniority. Member facing screens and reporting near the floor, the entitlement model and the billing ladder near the ceiling. Mixed teams blend to around $65.",
    },
    {
      label: "Phase one range",
      value:
        "1,260 hours in the worked example, which is $50,400 to $126,000 across the rate band and about $81,900 at the blend. The cost section shows every module and its range, so you can argue with any line of it.",
    },
    {
      label: "Stack we actually use",
      value:
        "Python with FastAPI, Node, PostgreSQL and Next.js, with React Native where a member app is in scope, Terraform for infrastructure and Grafana and Prometheus for metrics. Postgres carries the entitlement history, because retention reporting is an append problem before it is a dashboard one.",
    },
    {
      label: "Our commitment",
      value:
        "No quote before a discovery that produces the integration inventory and the entitlement model decision. Three things we are not: we do not act as merchant of record for your memberships, we do not give clinical advice or act as a healthcare provider, and we are not an accredited service provider for e-invoicing or statutory filing.",
    },
  ],
};

export const anchors = [
  { id: "who-this-is-for", label: "Is this us?" },
  { id: "sub-verticals", label: "What breaks for us?" },
  { id: "systems", label: "What does active mean?" },
  { id: "compliance", label: "Which rules apply?" },
  { id: "what-goes-wrong", label: "What goes wrong?" },
  { id: "build-or-buy", label: "Build it or buy it?" },
  { id: "cost", label: "What does it cost?" },
];

export const operations = {
  title: "Where membership systems earn their keep",
  description:
    "The stages a membership moves through, and what we build at each one. The arc is: Join and consent, Register the mandate, Grant entitlement, Book, attend or forfeit, Bill, retry and notify and Freeze, renew or cancel. Each one is a place a system either holds the fact or loses it.",
  stages: [
    "Join and consent",
    "Register the mandate",
    "Grant entitlement",
    "Book, attend or forfeit",
    "Bill, retry and notify",
    "Freeze, renew or cancel",
  ],  image: {
    src: "/static/assets/industries/fitness-wellness-operations-map.svg",
    alt: "Two band membership map covering joining, mandates and entitlement, then booking, billing and cancellation.",
  },
};

export const segments = {
  title: "Who this is for",
  description:
    "Six positions we are usually called from, and the thing each one is missing. Not a fit: if you want a member management platform replaced end to end inside a quarter, or a partner who will act as merchant of record or give clinical advice inside your product, we are the wrong firm and would rather say so on the first call.",
  items: [
    {
      title: "Single site clubs going multi site",
      line: "The system was built around one timetable, one price list and one door. What is missing is a model where a member belongs to an organisation rather than to a site, and entitlement says which sites and which classes.",
    },
    {
      title: "Boutique studios on class packs",
      line: "Credits, expiry, shared packs and unlimited tiers all bill differently and all forfeit differently. What is missing is a ledger of credits with an expiry position, rather than a counter that gets decremented and never explains itself.",
    },
    {
      title: "Franchisors with inconsistent data",
      line: "Every franchisee reports a member count and none of them counts the same way. What is missing is one definition of an active member, computed centrally from state history rather than submitted from thirty spreadsheets.",
    },
    {
      title: "Operators leaving a legacy system",
      line: "Contracts, freezes, credits and minimum terms all live inside a platform that will not export them in a usable shape. What is missing is a migration that replays entitlement rather than copying a members table.",
    },
    {
      title: "Corporate wellness providers",
      line: "The payer is the employer, the user is the employee, and eligibility changes when somebody leaves the company. What is missing is a model where eligibility, membership and invoicing are three linked objects rather than one.",
    },
    {
      title: "Physio and clinical wellness",
      line: "Appointments, notes and outcome measures sit next to memberships, and the data protection posture of the two is not the same. What is missing is a boundary between the commercial record and the clinical one.",
    },
  ],
};

export const subVerticals = {
  title: "Find your operation",
  description:
    "Fitness is one word for six businesses. What breaks is different in each, so what we build is different. Each operation below breaks differently, and they are: Gyms and health clubs, Boutique studios, Multi site franchises, Personal training, Corporate wellness and Clinics and physiotherapy.",
  items: [
    {
      title: "Gyms and health clubs",
      breaks:
        "Revenue is recurring and access is physical, so a billing failure and a door decision are the same event seen from two sides. Most systems make the door read a status word, which means a card decline on the first of the month locks out a member who is still contractually entitled to train, and a cancellation processed late lets somebody in for three weeks after they stopped paying. Both are the same modelling error and they cost in opposite directions.",
      build:
        "Entitlement computed at the moment of the scan from the contract, the payment position and the freeze history, rather than read from a flag. A dunning ladder where each retry, notification and grace day is a recorded event with its own timestamp. Access decisions logged with the reason, so a disputed lockout can be explained rather than argued.",
    },
    {
      title: "Boutique studios",
      breaks:
        "Class packs are a currency and most systems treat them as a number. Credits expire, sometimes are shared across a household, sometimes convert on an upgrade, and a late cancellation may forfeit one while a no-show forfeits it differently. When the count is a single integer, every one of those rules has to be applied by a human afterwards, and the studio ends up refunding credits it never actually owed.",
      build:
        "A credit ledger where every grant, consumption, expiry and forfeit is an entry with a reason attached, so the balance is derived rather than stored. Cancellation and no-show rules held as configuration with effective dates. Waitlist promotion inside a defined window, with the promoted member's own cancellation window computed from the promotion rather than from the original booking.",
    },
    {
      title: "Multi site franchises",
      breaks:
        "Franchisees run their own pricing, their own timetable and often their own payment provider, and the franchisor needs one number out of all of it. Royalty is usually calculated on a revenue definition that nobody has written down, so it is recalculated by hand and disputed every quarter. Cross-site access is sold as a benefit and implemented as an honour system.",
      build:
        "One definition of an active member and one of billable revenue, both computed centrally from state history rather than submitted. Royalty calculated from the same records the franchisee sees, so a dispute is about the rule and not about the data. Cross-site entitlement as a real permission on the membership, with the visit attributed to the host site and settled between them.",
    },
    {
      title: "Personal training",
      breaks:
        "A trainer's time is the inventory, and it is sold in blocks, consumed in appointments, and paid for on commission that depends on whether the session was delivered, cancelled late or written off. Trainers move between employment and contract, and the commission rule follows the person rather than the session, so historical payouts stop reconciling as soon as someone changes status.",
      build:
        "Session packs as a ledger against the client with the trainer attributed per session, so a transfer between trainers does not rewrite history. Commission rules held as dated configuration keyed to the session date rather than to the person's current status. Availability modelled as the trainer's calendar rather than as a room, because double booking a trainer and double booking a studio are different failures.",
    },
    {
      title: "Corporate wellness",
      breaks:
        "The employer pays, the employee uses, and the two relationships have different lifecycles. An employee leaving mid month ends eligibility but not necessarily the billing period, and a system holding one membership record cannot represent a person who is eligible through two employers or who continues privately after leaving. Invoicing runs on headcount that was true on a date, which nobody stored.",
      build:
        "Eligibility as its own object with a source, a start and an end, linked to but separate from the membership it entitles. Invoicing computed from eligibility as at the billing date, so an invoice can be reproduced months later. A defined behaviour for what happens when eligibility ends, decided in the contract and implemented once rather than handled case by case.",
    },
    {
      title: "Clinics and physiotherapy",
      breaks:
        "Clinical notes and outcome measures sit beside commercial records, and they are not the same category of data. Practitioners hold their own professional obligations over records that the operator's platform is storing, retention periods are far longer than anything commercial, and an ordinary data deletion request cannot simply remove the row. Meanwhile the appointment is also a billable event.",
      build:
        "A boundary between the clinical record and the commercial one, with separate access models rather than one role table covering both. Retention set per data category against the professional requirement rather than one blanket rule. The appointment as a shared object that both sides reference, so billing and clinical history do not drift apart.",
    },
  ],
};

export const systems = {
  title: "What active actually means, and why it is a computed position rather than a field",
  description:
    "A member whose card declined on the first is not a former member. A member who cancelled on the twentieth is usually entitled to train until the period ends. A frozen member is neither paying nor churned. Every one of those is a different position at a different date, and a single status word answers for all of them with the same string. Here is the estate we expect to meet, and the modelling decisions that decide whether your churn number can be produced twice the same way.",
  groups: [
    {
      group: "Enterprise and mid market member management",
      body: "ABC Fitness, Xplor Mariana Tek, Perfect Gym, Virtuagym and Technogym's platform layer cover clubs and chains, usually bundling billing, access and scheduling. The bundling is the thing to check: a platform that computes access from a status field will keep doing so no matter what you build beside it, so the extension point that matters is whether the door decision can be delegated.",
    },
    {
      group: "Studio and class first",
      body: "Mindbody, Glofox, TeamUp, WellnessLiving and Momence are built around the timetable rather than the door, and they handle credits, waitlists and packs natively. They tend to give up depth on multi entity structures and franchisor reporting in exchange, which is a fair trade until the second brand or the thirtieth site arrives.",
    },
    {
      group: "Payments, access and the data layer",
      body: "Stripe Billing, GoCardless, Razorpay and Cashfree carry the mandates; Salto, Gantner and Nayax sit on the doors and lockers; Apple HealthKit, Google Health Connect, Fitbit, Garmin and Whoop carry the member's own data. The Google Fit APIs are deprecated with Health Connect as the Android replacement, and developers have been unable to sign up for the Fit APIs since 1 May 2024.",
    },
  ],
  distinction: {
    title: "The distinction that saves projects",
    body: "A member management platform, a subscription billing engine and an access control system are three products, and buying one does not give you the other two. The failure this causes is specific and common: the billing engine knows a payment failed, the access system knows a card was presented, and nothing in between holds the rule that says a member in the first retry window still gets in. Teams then implement that rule twice, once in each system, and it drifts within a quarter. Decide where entitlement is computed before anything else is bought, because that single decision determines whether the other two are integrations or arguments.",
  },
  pairs: [
    {
      pair: "A membership status against an entitlement at a date",
      body: "Status is a word on a row. Entitlement is a question with a date in it: was this person allowed to train on the fourteenth, and on what basis. The second is what the door needs, what the refund conversation needs, and what the churn calculation needs, and it cannot be recovered from the first once the row has been overwritten. Model the membership as a contract plus a sequence of dated events, freezes, upgrades, declines, cancellations and reinstatements, and compute the position when it is asked for. The current state is then the newest answer rather than a separate thing kept in step with one.",
    },
    {
      pair: "A failed payment against a cancelled membership",
      body: "A card decline is a payment event. A cancellation is a decision by a member. Systems that write both into the same status field cause two failures at once, in opposite directions: people who are still entitled get locked out on the first of the month, and the churn number counts an expired card as somebody choosing to leave. The second one is the expensive one, because it makes retention work look like it is failing when the actual problem is an account updater that was never switched on. Keep the dunning ladder as its own sequence, with retries, notifications and grace days each recorded, and let entitlement read from it.",
    },
    {
      pair: "Class capacity against bookable capacity",
      body: "Capacity is a property of the room. Bookable capacity is that number minus confirmed bookings, adjusted for the waitlist promotion window and for whatever the late cancellation rule has already forfeited or released. A booking screen that reads the room number will oversell during promotion windows and undersell after late cancellations, and both look like bugs to the member rather than like policy. Model capacity as a computed availability with the rules named, so changing the late cancellation window is a configuration change with a date on it rather than a release.",
    },
    {
      pair: "Current members against cohort retention",
      body: "Churn and lifetime value are cohort measures. They ask what happened to everybody who joined in March, month by month, and a table holding only the current state of each member cannot answer that at all. What gets built instead is a monthly snapshot job, which is a reconstruction with all the gaps that implies, and a definition of active that quietly changes when somebody edits the query. Store membership state transitions as first class rows with their dates and reasons, and the cohort curve becomes a query against facts rather than an argument about methodology.",
    },
  ],
};

export const compliance = {
  title: "Which rules apply to you",
  description:
    "Five standards a buyer in this sector asks for by name, then every regional instrument in one place. Auto-renewal law is moving in both directions right now, so verify the regional row before contracting. The items are: ISO/IEC 27001, SOC 2, and SOC 1 where corporate billing is in scope, GDPR and UK GDPR and FTC Health Breach Notification Rule.",
  rows: [
    {
      item: "ISO/IEC 27001",
      detail:
        "The information security management certification procurement asks for by name, and it arrives early here because corporate wellness contracts are won through an employer's own vendor assessment. The scope statement matters more than the certificate: the question is whether member health data sits inside the certified boundary or immediately next to it.",
    },
    {
      item: "SOC 2, and SOC 1 where corporate billing is in scope",
      detail:
        "SOC 2 covers security and availability and is the standard ask from employer buyers and from platform partners. SOC 1 covers controls feeding your customers' financial reporting, and it appears once you are invoicing employers on headcount, because that invoice lands in somebody else's accounts.",
    },
    {
      item: "GDPR and UK GDPR",
      detail:
        "Fitness data becomes health data under Article 9 as soon as it reveals something about a person's health, which heart rate, body composition and injury notes plainly do. That moves the lawful basis question and it moves retention, which is decided per data category rather than per system. Consent for marketing and consent for health processing are separate decisions and should be separate records.",
    },
    {
      item: "FTC Health Breach Notification Rule",
      detail:
        "The rule most fitness operators assume does not apply to them, precisely because they are right that HIPAA does not. It covers vendors of personal health records and related entities that are not HIPAA covered, and its 2024 amendments explicitly bring direct-to-consumer health and wellness technology inside. Those amendments took effect on 29 July 2024, and the definition of a breach includes an unauthorised disclosure even when it was voluntary, which is what makes an analytics or advertising software development kit inside a fitness app a reportable event rather than a marketing decision.",
    },
    {
      item: "PCI DSS",
      detail:
        "It applies wherever card data touches membership collection, and the useful move is nearly always to keep it out of your estate entirely by tokenising at the gateway. Network tokens and account updater services matter more here than in most sectors, because an expired card is the single largest cause of involuntary churn and the fix is a payments configuration rather than a retention campaign.",
    },
    {
      item: "Everything regional, in one place",
      detail:
        "In the United States the Federal Trade Commission's revised Negative Option Rule, the click to cancel rule, was vacated in full by the Eighth Circuit on 8 July 2025 on procedural grounds, six days before it was due to take effect on 14 July 2025; a great many operators had already built for it. What continues to apply is the Restore Online Shoppers' Confidence Act, section 5 of the FTC Act and the individual state auto-renewal statutes, and the Commission submitted a draft advance notice of proposed rulemaking on 30 January 2026 to begin the process again. In the United Kingdom the subscription contracts regime in Part 4 Chapter 2 of the Digital Markets, Competition and Consumers Act 2024 has been delayed to spring 2027, a year later than first planned; it brings a 14 day initial cooling-off period, a separate 14 day renewal cooling-off period starting when the consumer becomes liable for the next renewal payment, mandatory reminder notices before renewal, and online cancellation wherever sign-up was online, and failing to send a reminder carries a presumption that the consumer may reclaim every payment made from the breach until they cancel. In India the Reserve Bank of India issued the Digital Payments E-mandate Framework, 2026 on 21 April 2026 with immediate effect, consolidating the earlier circulars across cards, prepaid instruments and UPI: a pre-transaction notification must reach the customer at least 24 hours before the debit carrying the merchant name, the amount, the date or time of debit, the mandate reference number and the reason, additional factor authentication is required to register a mandate, recurring transactions up to ₹15,000 may then run without it with ₹1 lakh for specified categories, and the customer must be able to opt out of a single debit or of the entire mandate using authentication.",
    },
  ],
};

export const whatGoesWrong = {
  title: "What goes wrong",
  description:
    "Ten failure modes with the counter-practice attached. Naming them is more useful than a list of reasons to pick us. The opening three are: Membership is a status enum, A card decline is recorded as churn and The door reads a flag.",
  items: [
    {
      title: "Membership is a status enum",
      line: "One word cannot express paid up, frozen, in grace, cancelled with access remaining and locked in a minimum term. Model the contract plus its dated events and compute the position when it is asked for, because retrofitting history onto an overwritten field is the most expensive change on this page.",
    },
    {
      title: "A card decline is recorded as churn",
      line: "Involuntary and voluntary loss have different causes and different fixes, and merging them hides the cheapest win available. Keep the dunning ladder as its own event sequence, so an expired card shows up as a payments problem rather than as a retention one.",
    },
    {
      title: "The door reads a flag",
      line: "Access hardware asking for a boolean forces the entitlement rule to be duplicated wherever the flag is written, and the copies drift within a quarter. Put entitlement behind one service that the door calls, and log the decision with its reason so a disputed lockout can be explained.",
    },
    {
      title: "Class credits are an integer",
      line: "A counter cannot say when a credit expires, why one was forfeited, or whether a refund is owed. Hold credits as a ledger of grants, consumptions, expiries and forfeits, and derive the balance rather than storing it.",
    },
    {
      title: "Freezes are handled manually",
      line: "A freeze changes billing, entitlement, contract end date and the retention denominator all at once, and doing it by hand gets one of the four wrong every time. Make the freeze a first class event that all four read from, with its own start, end and reason.",
    },
    {
      title: "Churn is defined in a query",
      line: "When the definition lives in a dashboard, it changes whenever somebody edits the dashboard, and last quarter's number stops being reproducible. Define active once in the data model, compute it from state transitions, and let reporting read the definition rather than restate it.",
    },
    {
      title: "The minimum term is a note in the contract",
      line: "If the system cannot say whether a member may leave today, the answer gets given by whoever picks up the phone. Hold the minimum term, the notice period and the exit conditions as fields the cancellation flow actually evaluates.",
    },
    {
      title: "Renewal notices are not evidenced",
      line: "Under the UK regime arriving in spring 2027 a missing reminder carries a presumption that every payment since is refundable, and the defence is a record that it was sent. Store notices as ledger entries with their content and timestamp, not as a mail provider's log that expires in ninety days.",
    },
    {
      title: "Health data is treated as ordinary data",
      line: "Heart rate, body composition and injury notes reveal health, which changes both the lawful basis and the retention rule, and in the United States a voluntary disclosure to an analytics vendor is reportable under the FTC's rule. Classify health fields explicitly and hold their access model apart from the commercial record.",
    },
    {
      title: "Migration copies the members table",
      line: "A matching member count on cutover day proves the row count and nothing about freezes, credits, minimum terms or contract dates. Replay entitlement and billing across a full past year per member and compare position by position, because a compensating pair of errors always agrees at the total.",
    },
  ],
};

export const buildOrBuy = {
  title: "Build, buy, or buy the core and build the edge",
  description:
    "The honest answer is usually the third one. Three judgements sit outside this table because they are not ours to make: we do not act as merchant of record for your memberships, we are not a healthcare provider and give no clinical advice, and we are not an accredited service provider for e-invoicing or statutory filing.",
  rows: [
    {
      option: "Core member management platform",
      best: "Buy",
      verdict:
        "Years of edge cases in joining, freezing, upgrading and cancelling are already inside these products. Building one is somebody else's support queue that you have not read yet.",
    },
    {
      option: "Entitlement and access decision service",
      best: "Build",
      verdict:
        "This is the piece nobody sells because it encodes your contracts, and it is the piece every other system needs to call. Owning it is what stops the same rule being implemented three times and drifting.",
    },
    {
      option: "Recurring billing and mandates",
      best: "Buy",
      verdict:
        "Mandate registration, network tokens, account updater and retry scheduling are solved, audited and cheaper than the compliance surface of owning them. Build the dunning policy on top instead.",
    },
    {
      option: "The dunning ladder and its notices",
      best: "Build",
      verdict:
        "Gateways retry on their own schedule, which is not your commercial policy and cannot evidence a renewal notice. Own the ladder, the timing and the record of what was sent.",
    },
    {
      option: "Scheduling, waitlists and capacity",
      best: "Buy the core, build the edge",
      verdict:
        "Buy the calendar and the booking primitives, build the credit ledger, the promotion window and the forfeit rules. The calendar is commodity; your cancellation policy is not, and it is what members argue about.",
    },
    {
      option: "Member app and self service",
      best: "Build",
      verdict:
        "Bundled apps are built for the vendor's data model rather than yours, and this is the surface a member touches more often than your front desk. Building it is bounded work with a visible return.",
    },
    {
      option: "Access control hardware and firmware",
      best: "Buy",
      verdict:
        "Doors, turnstiles and lockers are a physical safety product with certification behind them. Buy the hardware and own the decision it asks for, which is the only part that is yours.",
    },
    {
      option: "Wearable and health data integration",
      best: "Buy the core",
      verdict:
        "Use the platform software development kits rather than talking to devices, then build the normalisation and consent layer. Health Connect is the Android path now that the Fit APIs are deprecated.",
    },
    {
      option: "E-invoicing and statutory transmission",
      best: "Buy",
      verdict:
        "Only an accredited service provider may transmit, so this is not a build decision at all. Establish who yours is before the plan depends on the date.",
    },
    {
      option: "Retention analytics and cohort reporting",
      best: "Build",
      verdict:
        "Every analytics product will happily chart whatever definition of active you feed it. The value is in the state history underneath, which is yours to model and nobody else's to sell you.",
    },
    {
      option: "Clinical records where a clinic is in scope",
      best: "Buy",
      verdict:
        "Practice management products carry the retention and professional obligations already. Integrate to one and keep the boundary explicit rather than storing clinical notes in a membership platform.",
    },
  ],
};

export const cost = {
  title: "What fitness app development costs, with the arithmetic shown",
  description:
    "Every competitor publishes a total with no hours behind it. Here is the rate, the hours and the multiplication, so you can argue with any line. The scope priced here is a multi site operator keeping its member management platform and taking entitlement, billing policy and scheduling in house.",
  drivers: [
    {
      driver: "How many contract shapes you sell",
      hours: "High impact",
      note: "One rolling monthly membership is a different model from minimum terms, annual paid up front, class packs, corporate eligibility and student concessions running together.",
    },
    {
      driver: "Whether entitlement is already computed",
      hours: "The largest swing",
      note: "If the platform can already answer what a member was entitled to on a past date, this is integration work. If it stores a status word, the model goes in underneath everything else.",
    },
    {
      driver: "Whether access hardware is in scope",
      hours: "100 to 180",
      note: "Reader protocols, offline behaviour and what the door does when the network is down. Offline is the part that gets discovered late and it is a design decision rather than a bug.",
    },
    {
      driver: "How many payment providers and regions",
      hours: "80 to 200 each",
      note: "Mandate registration, pre-debit notification and retry semantics differ per provider and per jurisdiction, and the notification rules are not negotiable.",
    },
    {
      driver: "Whether corporate wellness is in scope",
      hours: "Adds real scope",
      note: "Eligibility is a second lifecycle with its own start and end, and invoicing has to be reproducible as at a past billing date rather than as at today.",
    },
    {
      driver: "How much history has to be reconstructed",
      hours: "Rarely small",
      note: "Building state history forward is bounded work. Reconstructing freezes, credits and contract dates out of an overwritten table is not bounded, and is sometimes not possible.",
    },
    {
      driver: "How many sites and brands report together",
      hours: "Medium",
      note: "One site is a section of work. Thirty franchisees on their own pricing and their own providers is a programme with a definitions problem before it has a software one.",
    },
  ],
  modules: [
    { module: "Membership, contract and entitlement model", hours: "180 to 300" },
    { module: "Recurring billing, mandates and the dunning ladder", hours: "180 to 320" },
    { module: "Scheduling, capacity, credits and waitlists", hours: "160 to 280" },
    { module: "Access control and check in", hours: "100 to 180" },
    { module: "Member app and self service", hours: "160 to 280" },
    { module: "Integrations: payments, wearables, hardware, accounting", hours: "160 to 280" },
    { module: "Retention analytics and the state history", hours: "120 to 220" },
  ],
  math: {
    title: "Phase one, added up",
    points: [
      "Membership and entitlement 200 plus billing and dunning 210 plus scheduling and credits 190 plus access control 130 plus member app 190 plus integrations 200 plus retention analytics 140 equals 1,260 hours. Every one of the seven sits inside its own published range above, so you can move any line and see what it does to the total.",
      "At $40 per hour that is $50,400. At $100 per hour it is $126,000. At a $65 blended rate, about $81,900. The full span across the seven modules is 1,060 hours at every minimum to 1,860 at every maximum.",
      "Outside that number, with their ranges intact: quality assurance at 20 to 25 percent of build, environments and deployment at 80 to 160, security review and penetration testing at 60 to 120, franchisor reporting and royalty calculation at 120 to 240, wearable and Health Connect integration at 80 to 160, and corporate wellness eligibility and invoicing at 100 to 200. The last three are usually phase two, and they are listed rather than dropped because this page argues for all of them.",
    ],
  },
};

export const costHighlights = [
  {
    label: "Phase one range",
    value: "$50,400 to $126,000",
    note: "The 1,260 hour worked example at the ends of the rate band, about $81,900 at a $65 blend.",
  },
  {
    label: "Typical timeline",
    value: "14 to 22 weeks",
    note: "As a squad. Access hardware and gateway certification are what move the date, and neither is ours.",
  },
  {
    label: "Useful hours",
    value: "1,060 to 1,860",
    note: "Every module at its minimum, through to every module at its maximum.",
  },
];

export const engagement = {
  title: "Engagement models",
  description:
    "Four models for fitness app development, each with the downside stated in the same breath. In order of how settled the scope is, they are: Fixed scope phase one, Dedicated squad, monthly, Platform migration and cutover and Multi site rollout support.",
  items: [
    {
      title: "Fixed scope phase one",
      good: "A defined scope, a fixed number and a date. It works best after discovery has produced the integration inventory and the entitlement model decision, because that is the point at which scope is genuinely knowable.",
      bad: "Change costs more than it would hourly, and a payment provider or a hardware vendor can move scope without asking either of us first.",
    },
    {
      title: "Dedicated squad, monthly",
      good: "A standing team that keeps the domain knowledge in the room, billed on time and materials so you pay for work actually done. Long integration and rollout work suits this shape.",
      bad: "You carry the utilisation risk, and a quiet month still costs a month. We will tell you when there is not enough work to justify it.",
    },
    {
      title: "Platform migration and cutover",
      good: "Scoped to moving between member management platforms, priced on the variety of your contract shapes rather than on member count, with entitlement replay built into the plan rather than bolted on at the end.",
      bad: "Discovery is unusually long here, and it can conclude that some of your history is not recoverable at all.",
    },
    {
      title: "Multi site rollout support",
      good: "Capacity held across a staged rollout, so site twelve gets the same build and the same data definitions as site one rather than a locally amended copy.",
      bad: "You are paying for availability between sites, and a delayed opening is still a paid month on our side of the arrangement.",
    },
  ],
  recommendation:
    "What we usually suggest: a fixed scope phase one covering the entitlement model and the dunning ladder, moving to a dedicated squad once a second site or a second contract shape has proved the model holds.",
};

export const delivery = {
  title: "How we deliver fitness app development",
  description:
    "Five phases, each named by the artifact it produces rather than by a stage in a generic waterfall. In order, they are: Entitlement decision record, Billing and dunning ladder, Capacity and waitlist rules, Member migration test pack and Launch and retention pack.",
  items: [
    {
      phase: "Entitlement decision record",
      line: "What a member is entitled to, on what basis, and how the answer is computed at a past date. Written down before anything is built on top of it, because every later argument resolves against this document.",
    },
    {
      phase: "Billing and dunning ladder",
      line: "Every retry, notification, grace day and escalation named, with its timing, its content and what it does to entitlement. This is the document that decides whether involuntary churn is measurable.",
    },
    {
      phase: "Capacity and waitlist rules",
      line: "Promotion windows, late cancellation, no-show and forfeit behaviour, written as rules with effective dates. Agreed with whoever answers the complaints, not after them.",
    },
    {
      phase: "Member migration test pack",
      line: "A full past year of entitlement and billing replayed per member against the new model and compared position by position, with the differences explained rather than netted off. Counts are not the test.",
    },
    {
      phase: "Launch and retention pack",
      line: "The runbooks, the definition of active as it is actually implemented, and the cohort reporting your operations team will run from day one rather than commission afterwards.",
    },
  ],
};

export const nonFunctional = {
  title: "The technical buyer's checklist",
  description:
    "Copy this and run it against us, or against anyone else quoting for fitness app development. They are grouped as: Time, entitlement and replay, Money, notices and evidence and Health data, change and scope. Copy any line straight into your own requirements document.",
  groups: [
    {
      group: "Time, entitlement and replay",
      body: "Can the system say what a named member was entitled to on an arbitrary past date, as a query rather than a reconstruction? Is every freeze, upgrade, decline and cancellation retained as its own dated event with a reason? Can last quarter's churn number be reproduced exactly today, from the same definition, without anyone editing a report?",
    },
    {
      group: "Money, notices and evidence",
      body: "Is every retry, grace day and renewal notice stored as a ledger entry with its content and timestamp, rather than left in a mail provider's log that expires? Can an invoice to a corporate client be regenerated from eligibility as it stood on the billing date? Does the door decision get logged with the reason it was made?",
    },
    {
      group: "Health data, change and scope",
      body: "Are health fields classified explicitly, with their own access model and their own retention, rather than being more columns on the member table? Is every analytics or advertising software development kit in the member app inventoried, given that a voluntary disclosure is a reportable breach under the FTC rule? And confirm the boundary: we do not act as merchant of record, we are not a healthcare provider, and we do not transmit statutory filings or e-invoices for you.",
    },
  ],
};

export const faqs = [
  {
    question: "What does a phase one cost, how many hours, and how long does it take?",
    answer:
      "The worked example is 1,260 hours, which is $50,400 to $126,000 across our $40 to $100 rate band and about $81,900 at a $65 blend, landing in 14 to 22 weeks with a squad. The module ranges sum to 1,060 to 1,860 hours, so a smaller or larger phase one is a question of which modules are in it. We do not quote a fixed number before a discovery that produces the integration inventory.",
  },
  {
    question: "Who owns the code, the data and the accounts?",
    answer:
      "You do, all three, from the first commit. Repositories, cloud accounts, domains and third party service accounts are in your name or transferred to it at handover. What transfers alongside them is the entitlement decision record and the billing and dunning ladder, which is the part that makes the code readable by whoever comes after us.",
  },
  {
    question: "Why does modelling entitlement matter more than the app?",
    answer:
      "Because the door, the billing engine, the refund conversation and the churn report all ask the same question and most estates answer it in four places. Once entitlement is computed in one service from the contract and its dated events, those four stop disagreeing. The app is the easy part and it is the part that gets rebuilt every few years anyway.",
  },
  {
    question: "Does HIPAA apply to our gym app?",
    answer:
      "Almost certainly not, and that is the reason to read the next sentence rather than to relax. The FTC's Health Breach Notification Rule covers health records held by entities that are not HIPAA covered, and its 2024 amendments, effective 29 July 2024, explicitly bring direct-to-consumer wellness technology inside it. A breach there includes an unauthorised disclosure even when it was voluntary, so an analytics or advertising software development kit passing health data out of your app is a reportable event rather than a growth decision.",
  },
  {
    question: "We built for the FTC click to cancel rule. Was that wasted?",
    answer:
      "The rule itself was vacated in full by the Eighth Circuit on 8 July 2025, six days before it was due to take effect. The work is not wasted, because the Restore Online Shoppers' Confidence Act, section 5 of the FTC Act and state auto-renewal statutes all still apply, the Commission began a fresh rulemaking on 30 January 2026, and the United Kingdom regime arriving in spring 2027 asks for much the same evidence. Keep the cancellation path and the notice ledger; they were always the defensible parts.",
  },
  {
    question: "You have no fitness clients on this page. Why should we take you seriously?",
    answer:
      "Because we would rather say that than borrow a client from another sector and call it fitness experience. What is on this page instead is the modelling, the statute and the arithmetic, all of which you can check without trusting us. The code, decision records and specifications are yours from the first commit, which is the part that holds whether or not we turn out to be a fit.",
  },
  {
    question: "Can you work with our existing Mindbody or ABC Fitness installation?",
    answer:
      "Yes, and that is the more common shape of this work. The first question is whether the platform will let the access decision be delegated, because if it insists on computing entitlement itself then anything you build beside it becomes a second opinion rather than the answer. We would much rather establish that in discovery than in build.",
  },
  {
    question: "How do you stop expired cards looking like churn?",
    answer:
      "By keeping the dunning ladder as its own event sequence rather than as a status change. Each retry, notification and grace day is recorded, entitlement reads from that sequence, and the churn report distinguishes a member who decided to leave from one whose card expired. In most estates we see, switching on network tokens and an account updater alongside that is the cheapest retention work available.",
  },
  {
    question: "How do freezes and minimum terms get handled?",
    answer:
      "As first class dated events rather than as manual adjustments. A freeze changes billing, entitlement, the contract end date and the retention denominator at the same time, and handling it by hand reliably gets one of the four wrong. Minimum term, notice period and exit conditions become fields the cancellation flow evaluates, so the system can answer whether a member may leave today instead of leaving it to whoever picks up the phone.",
  },
  {
    question: "What does migrating off our current platform involve?",
    answer:
      "It depends on the variety of your contract shapes rather than on how many members you have. The proof is an entitlement replay: a full past year regenerated per member under the new model and compared position by position against what the old system actually did. A matching member count is not the test, because it says nothing about freezes, credits, minimum terms or contract dates.",
  },
  {
    question: "Can you integrate wearables and health apps?",
    answer:
      "Yes, through the platform software development kits rather than by talking to devices. Health Connect is the Android path now that the Google Fit APIs are deprecated and closed to new developer signups, with HealthKit on iOS and vendor APIs for Fitbit, Garmin and Whoop. The design work is consent and normalisation rather than transport, because the same metric arrives with different definitions from each source and a chart that silently mixes them is worse than no chart.",
  },
];

export const nextSteps = {
  title: "What happens next",
  description:
    "Four steps with a shape attached to each, so booking a call is a known quantity.",
  items: [
    {
      step: "A 30 minute technical call",
      line: "Bring how your system decides whether a member gets in today, and last quarter's churn number. Those two answers size the project faster than an hour of description would.",
    },
    {
      step: "The entitlement question",
      line: "We establish whether your platform can say what a member was entitled to on a past date, and what it currently costs you when it cannot. The answer usually explains most of the symptoms you called about.",
    },
    {
      step: "A costed phase one",
      line: "Module by module against the ranges published on this page, with anything excluded named as excluded. If your platform already does most of it, the document says so.",
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
          label: "Mobile app development",
          href: "/services/mobile-app-development",
          note: "The member app, check in and bookings",
        },
        {
          label: "Database development",
          href: "/services/database-development",
          note: "Entitlement history and the credit ledger",
        },
        {
          label: "Web development",
          href: "/services/web-development",
          note: "Joining flows, staff consoles and portals",
        },
      ],
    },
    {
      group: "Adjacent capabilities",
      links: [
        {
          label: "Predictive analytics",
          href: "/services/predictive-analytics-development",
          note: "Cohort retention and cancellation risk",
        },
        {
          label: "AI workflow automation",
          href: "/services/ai-workflow-automation-services",
          note: "Dunning journeys and win back sequences",
        },
        {
          label: "Internet of things",
          href: "/services/iot-app-development",
          note: "Access hardware, lockers and equipment",
        },
      ],
    },
    {
      group: "Other sectors",
      links: [
        {
          label: "Social and community",
          href: "/industries/community-app-development",
          note: "Members behaving as a community, and moderating it",
        },
        {
          label: "Healthcare",
          href: "/industries/healthcare-software-development",
          note: "Where wellness data becomes clinical data",
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
    title: "Bring the entitlement question, not the feature list",
    description:
      "The most useful hour of a first call is usually spent on how your system decides who gets in today. Almost everything else on this page follows from that one answer, including the cost.",
    ctaText: "Book a 30 minute technical call",
  },
  end: {
    title: "Start with what active means",
    description:
      "Bring your definition of an active member and last quarter's churn number. Thirty minutes on those two usually tells both of us whether this is a fit, and you leave with the hours either way.",
    ctaText: "Book a 30 minute technical call",
  },
};

export const relatedPosts = [
  "ai-agents-for-business",
  "ai-copilots-for-business",
  "chat-with-your-documents",
  "how-much-does-ai-development-cost",
  "ai-in-cybersecurity",
  "ai-for-fraud-detection-a-quick-guide",
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
      "Automation, analytics and cost work that applies directly to membership and retention systems.",
  },
};
