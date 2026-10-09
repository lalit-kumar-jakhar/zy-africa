import type { IndustryPageData } from "./types";

export const heroSection = {
  eyebrow: "Industries · Social & community",
  title: "Community app development for ",
  titleHighlight: "trust, safety and moderation",
  description:
    "The layer underneath a community product: the moderation pipeline, the identity checks, the appeal route, and the audit trail a regulator will ask for. Four regimes now bind platforms carrying user content and they do not agree with each other. This page is about that layer, not the app itself: if you want a community or dating product built from scratch, the solutions page is the one you want.",
  features: [
    "DSA, OSA and IT Rules",
    "Decision records",
    "NIST SP 800-63 assurance",
    "$40 to $100 per hour",
  ],
  scrollTarget: "#essence",
  ctaText: "Book a 30 minute technical call",
  bgImage: "/static/assets/industries/social-community-industries.webp",
};

export const seo = {
  primaryKeyword: "community app development",
  intent: "commercial",
  secondaryKeywords: [
    "community app development company",
    "content moderation system development",
  ],
  competingUrl: "/solutions/dating-app-development-company",
} as const;

export const essence = {
  title: "The short version",
  description:
    "The commercial facts in one block, so you never have to hunt for them. Buyers approach us as a community app development company and leave with content moderation system development as the larger half of the build. Those tiles are: Typical integration set, Phase one timeline, Rate band, Phase one range, with the arithmetic and Stack we actually use.",
  tiles: [
    {
      label: "Typical integration set",
      value:
        "Your existing classifier or a third-party one, an identity provider, whatever case management your reviewers already live in, and the reporting endpoint each jurisdiction expects. This is a layer over your platform, not a replacement for it.",
    },
    {
      label: "Phase one timeline",
      value:
        "8 to 14 weeks. The variable is not engineering, it is how much of your policy already exists in writing. Undocumented policy has to be elicited before it can be encoded, and that is the slowest part of the job.",
    },
    {
      label: "Rate band",
      value:
        "$40 to $100 per hour by role. Reviewer tooling and reporting near the floor, policy modelling and classifier evaluation near the ceiling. Mixed teams blend to around $65.",
    },
    {
      label: "Phase one range, with the arithmetic",
      value:
        "Policy 90 plus classification 120 plus queue 160 plus enforcement 120 plus appeals 90 plus audit 100 equals 680 hours. That runs $27,200 at $40 and $68,000 at $100, about $44,200 at a $65 blend. The full span across the six modules is 480 to 900 hours.",
    },
    {
      label: "Stack we actually use",
      value:
        "Your platform's existing stack, with the safety layer built alongside it rather than on top of a replacement. Python or Node for the pipeline, Postgres for the decision record because the audit query pattern is relational, and your existing identity provider.",
    },
    {
      label: "Our commitment",
      value:
        "No quote before discovery, because a number produced without seeing your policy, your volumes and your jurisdictions is a guess with a decimal point in it. We do not provide moderation staffing and we do not advise on regulator correspondence; your people review and your counsel advises.",
    },
  ],
};

export const anchors = [
  { id: "who-this-is-for", label: "Is this us?" },
  { id: "sub-verticals", label: "What breaks in our community?" },
  { id: "systems", label: "Which systems do we connect?" },
  { id: "compliance", label: "Which rules apply to us?" },
  { id: "what-goes-wrong", label: "What usually goes wrong?" },
  { id: "build-or-buy", label: "Build it or buy it?" },
  { id: "cost", label: "What does phase one cost?" },
];

export const operations = {
  title: "Where moderation systems earn their keep",
  description:
    "The stages a report moves through, and what we build at each one. In sequence, the stages are: Submission, Classification, Queue routing, Human review, Enforcement and Appeal and audit. Each one is a place a system either holds the fact or loses it.",
  stages: [
    "Submission",
    "Classification",
    "Queue routing",
    "Human review",
    "Enforcement",
    "Appeal and audit",
  ],  image: {
    src: "/static/assets/industries/social-community-operations-map.svg",
    alt: "Two band moderation map covering intake, classification and routing, then review, enforcement and appeal.",
  },
};

export const segments = {
  title: "Who this is for",
  description:
    "Six trigger events rather than six job titles, because the thing that makes a platform call us is almost always an event. Not a fit: if what you need is a community or dating app built from scratch, that is a different job and it is linked at the foot of this page.",
  items: [
    {
      title: "Your first regulator letter arrived",
      line: "Something was reported, you could not show what you did about it, and the gap was not the decision itself but the record of it. We start by reconstructing what your system can already prove about a single decision, which is usually the fastest diagnostic there is.",
    },
    {
      title: "Volunteer moderators are drowning",
      line: "Growth outran goodwill. The people holding your community together are burning out, and the tooling they use is a spreadsheet and a group chat. We start with queueing and case management, so their time goes to judgement instead of admin.",
    },
    {
      title: "You are about to admit under-18 users",
      line: "One decision pulls in age assurance, different default settings, different retention, and in Australia an outright minimum account age that parental consent cannot override. We start by mapping which of your markets change and how.",
    },
    {
      title: "An app store has threatened removal",
      line: "The review cited user-generated content and you have days, not quarters. We start with the enforcement ladder and the reporting surface, because those are the two things that actually get read in that conversation.",
    },
    {
      title: "Your in-house classifier is drifting",
      line: "It was accurate when it shipped and nobody owns it now. We start by measuring it against a labelled sample at your real base rates, before anyone touches the model. Most drift complaints turn out to be threshold and routing problems.",
    },
    {
      title: "Diligence is asking about safety",
      line: "Diligence will ask how decisions are made, how they are appealed, and how they are recorded. We start with the decision record, because it is the single artifact that answers all three questions at once.",
    },
  ],
};

export const subVerticals = {
  title: "Find your operation",
  description:
    "Community is one word for six different businesses. What breaks is different in each, so what we build is different. This page covers: Open social feed, Interest community and forum, Two-sided marketplace, Creator platform with payouts, In-game and live chat and Reviews and ratings.",
  items: [
    {
      title: "Open social feed",
      breaks:
        "Volume arrives faster than review, and the worst content spreads before anyone sees the report. Ranking amplifies whatever engagement rewards, which is frequently the exact thing you are trying to suppress.",
      build:
        "Pre-publish scoring on the highest-risk categories only, so latency stays tolerable, plus reach limits that take effect before a human decision rather than after one.",
    },
    {
      title: "Interest community and forum",
      breaks:
        "Local norms differ from the global rulebook, and a rule that reads as obvious in one space reads as censorship in another. Volunteer moderators make inconsistent calls with no way to see precedent.",
      build:
        "Per-space policy layered over a global floor, and a precedent view so a moderator can see how similar cases were decided before deciding this one.",
    },
    {
      title: "Two-sided marketplace",
      breaks:
        "The harm is a transaction, not a post, so content moderation misses it entirely. Fraud, counterfeit and off-platform contact all look like ordinary listings when read one at a time.",
      build:
        "Signals from listing, message and payment behaviour scored together, because none of the three is conclusive alone and the combination usually is.",
    },
    {
      title: "Creator platform with payouts",
      breaks:
        "Enforcement now carries a financial consequence, so every action needs an appeal that works and a paper trail that survives a dispute. Demonetisation without explanation destroys creator trust faster than removal does.",
      build:
        "A graded enforcement ladder tied to payout state, with reason codes the creator actually sees rather than a silent status change.",
    },
    {
      title: "In-game and live chat",
      breaks:
        "The content is ephemeral and the harm is real-time. Post-hoc review is close to useless when the audience has already left the lobby.",
      build:
        "Low-latency filtering on a narrow, well-defined category set, plus reporting that captures enough surrounding context to still be reviewable afterwards.",
    },
    {
      title: "Reviews and ratings",
      breaks:
        "The incentive to manipulate is direct and financial, and the manipulation is coordinated rather than individual. Reviewing one review at a time cannot see a ring.",
      build:
        "Cluster detection across reviewer, subject and timing, with enforcement applied to the pattern rather than to the single post that happened to get reported.",
    },
  ],
};

export const systems = {
  title: "Systems we connect to, and where the boundary sits",
  description:
    "A trust and safety build is a policy problem with an integration project around it. Here is the estate we expect to meet and the one architectural decision that governs everything after it. Grouped as: Enterprise suites, Mid-market and Build your own.",
  groups: [
    {
      group: "Enterprise suites",
      body: "Full trust and safety platforms carrying classification, case management and reporting in one product. They are the fastest route to a defensible position and the slowest thing to change once your policy diverges from their model of a decision.",
    },
    {
      group: "Mid-market",
      body: "Classification as an API, with the queue, the case tooling and the enforcement logic left to you. Cheaper, and it puts the part that actually encodes your judgement under your own control.",
    },
    {
      group: "Build your own",
      body: "Justified when your harm categories are genuinely specific to your product and no general classifier has ever seen them. Rarely justified for the categories every platform shares, where you would be paying to rebuild a commodity.",
    },
  ],
  distinction: {
    title: "The distinction that saves projects",
    body: "Classification and enforcement are different systems. Scoring an item is a probabilistic judgement about what it is. Deciding what happens to it is a policy judgement about what you do. Teams that merge the two ship faster and then cannot change either one, because the threshold and the consequence have become the same line of code. Keep them separate from the first commit and you can swap the classifier without relitigating policy, and change policy without retraining anything.",
  },
  pairs: [
    {
      pair: "Classifier versus rules engine",
      body: "A classifier tells you how likely an item is to be a given category. A rules engine decides what that likelihood means today. You want both, and you want the second one editable by somebody who is not an engineer, because policy changes faster than deployments do.",
    },
    {
      pair: "Queue versus case",
      body: "A queue is work waiting. A case is a decision with a history. Systems built only on queues lose the history, which is precisely what an appeal or an audit needs to read. The queue is the interface; the case is the record.",
    },
    {
      pair: "Action versus outcome",
      body: "Removing an item is an action. Whether the harm stopped is an outcome. Only one of them is worth reporting to a board, and it is not the one that is easy to count.",
    },
    {
      pair: "Reactive versus proactive detection",
      body: "Reactive means acting on user reports. Proactive means scanning before anyone complains. Reactive alone is cheap and always too late for the content that spreads fastest. Proactive alone buries reviewers in false positives and makes users feel surveilled. Which categories get which treatment is a policy decision with a direct cost consequence, and it should be written down rather than inherited from a vendor default.",
    },
  ],
};

export const compliance = {
  title: "Which rules apply to you",
  description:
    "Four regimes now bind platforms carrying user content, and they disagree with each other on age thresholds, on response clocks and on what must be published. This is the map with the dates that matter. We hold none of these ourselves; we build the records that let you answer them.",
  rows: [
    {
      item: "EU Digital Services Act",
      detail:
        "Binds all platforms serving EU users, fully applicable since 17 February 2024. Extra duties attach to a Very Large Online Platform, defined in Article 33 as at least 45 million average monthly active recipients in the Union measured over six months. The first 17 VLOPs were designated on 25 April 2023 and had to comply from 25 August 2023; a newly designated service gets four months. Expect notice and action, statements of reasons, an appeal route and transparency reporting, with systemic risk assessment, independent audit and vetted researcher access on top for VLOPs. Fines reach 6% of global annual turnover.",
    },
    {
      item: "UK Online Safety Act 2023",
      detail:
        "Illegal content duties took effect in March 2025. Ofcom published the Protection of Children Codes and Guidance in April 2025, and children's safety duties with enforceable age assurance followed on 25 July 2025. Where age assurance is required, Ofcom's test is that it must be highly effective, which a date of birth field does not meet. Ofcom opened investigations into close to 100 services in the first phase. Fines reach £18 million or 10% of qualifying worldwide revenue, whichever is greater.",
    },
    {
      item: "India, IT Rules 2021",
      detail:
        "Safe harbour under Section 79 of the IT Act 2000 is conditional on the due diligence in these rules. Grievances must be acknowledged within 24 hours and disposed of within 15 days with reasons given. A Significant Social Media Intermediary, meaning more than 5 million registered users in India, additionally appoints a Chief Compliance Officer resident in India, a nodal contact person available 24x7 for law enforcement, and a Resident Grievance Officer, and publishes a monthly compliance report.",
    },
    {
      item: "Australia, social media minimum age",
      detail:
        "The Online Safety Amendment (Social Media Minimum Age) Act 2024 passed on 28 November 2024 and took effect on 10 December 2025. It sets a minimum account age of 16 which parental consent cannot override, and requires reasonable steps to prevent under-16 accounts. Named platforms include YouTube, X, Facebook, Instagram, TikTok, Snapchat, Reddit, Twitch, Threads and Kick; messaging and gaming services including Discord, Messenger, Pinterest, YouTube Kids, Roblox, Steam and WhatsApp are excluded. Penalties reach AUD 49.5 million.",
    },
    {
      item: "Identity assurance, NIST SP 800-63",
      detail:
        "Not a statute, but the reference a security reviewer will use. IAL1 requires no proofing and is self-asserted. IAL2 checks reliable identity evidence, remotely or in person. IAL3 requires physical presence and supervised verification by a trained representative, often with biometrics. Most consumer platforms need IAL1 for ordinary accounts and something closer to IAL2 only at specific gates such as payouts or age-restricted access. The 800-63-4 revision repurposes IAL1, adds phishing-resistant authentication, adds requirements against automated attacks on enrolment, and anticipates mobile driving licences and verifiable credentials.",
    },
    {
      item: "The architectural consequence",
      detail:
        "A single global policy cannot satisfy four regimes, and a per-country fork becomes unmaintainable by the third country. What works is one global floor with jurisdictional overlays, and a decision record that stamps which overlay applied at the moment of the decision.",
    },
  ],
};

export const whatGoesWrong = {
  title: "What goes wrong",
  description:
    "Ten failure modes, each with the counter-practice. Naming them is more useful than a list of reasons to pick us. It starts with: Moderation is built as a feature, Policy is not versioned and Appeals are bolted on after launch.",
  items: [
    {
      title: "Moderation is built as a feature",
      line: "It ships inside the product, owned by whoever had capacity that quarter, and it has no data model of its own. Treat it as a system with its own schema, its own on-call and a named owner from the first release.",
    },
    {
      title: "Policy is not versioned",
      line: "The rules change and old decisions become unexplainable, because a decision has to be judged against the rule in force when it was made. Version the policy, stamp the version onto every decision, and keep the old versions readable.",
    },
    {
      title: "Appeals are bolted on after launch",
      line: "The first enforcement wave arrives and the appeal route turns out to be a shared inbox. Build the appeal path in the same sprint as the enforcement path, never the sprint after.",
    },
    {
      title: "The classifier is trained on the wrong base rate",
      line: "It is evaluated on a balanced sample and then deployed against traffic where the harmful class is rare, so precision collapses in production. Evaluate at your real base rates before launch, and route by consequence rather than by score alone.",
    },
    {
      title: "Reviewer welfare is ignored until attrition",
      line: "People leave, institutional judgement leaves with them, and consistency drops measurably. Blur and mute defaults, category rotation, volume caps, and no queue made exclusively of worst-case material.",
    },
    {
      title: "There is no audit log until a regulator asks",
      line: "The data exists in fragments across three services and cannot be assembled into an answer. Write the decision record once, at decision time, complete.",
    },
    {
      title: "Age assurance is treated as a checkbox",
      line: "A date of birth field satisfies nobody, least of all a regulator who has published what highly effective means. Pick the assurance level per gate and record which method was used for each.",
    },
    {
      title: "One policy for every market",
      line: "It either over-restricts everywhere or under-complies somewhere, and the first regulator letter decides which. Use the layered structure described in the compliance section, applied from the first release rather than retrofitted at the third country.",
    },
    {
      title: "Enforcement without notice",
      line: "The user discovers the consequence rather than the decision, which converts a correct call into a support crisis. Notice carries the rule and the item, every time, in language the user can act on.",
    },
    {
      title: "Metrics count actions, not outcomes",
      line: "Removals go up and nobody knows whether anything improved. Report appeal rate, overturn rate and time to decision by queue, and treat a rising overturn rate as a defect rather than as noise.",
    },
  ],
};

export const buildOrBuy = {
  title: "Build, buy, or buy the core and build the edge",
  description:
    "The honest answer is almost always the third one. Worth stating plainly: we are not a moderation staffing supplier and we are not your counsel, so the judgement and the legal position stay with you in every row below. Assessed below: Buy the suite, Build everything and Buy classification, build enforcement.",
  rows: [
    {
      option: "Buy the suite",
      best: "Buy",
      verdict:
        "Right when you need a defensible position quickly and your policy is close to industry standard. The cost is that you inherit their model of what a decision is, and diverging later means either fighting the product or leaving it.",
    },
    {
      option: "Build everything",
      best: "Build",
      verdict:
        "Justified only when your harm categories are genuinely specific to your product and no general classifier has seen them. You then own classifier drift, labelling operations and evaluation permanently, which is a standing cost most platforms underestimate.",
    },
    {
      option: "Buy classification, build enforcement",
      best: "Buy the core, build the edge",
      verdict:
        "Two vendors to manage instead of one, and an integration you own. In exchange the part that encodes your judgement stays yours and the part that is a commodity stays a commodity. This is the right answer for most platforms most of the time.",
    },
  ],
};

export const cost = {
  title: "What community app development costs, with the arithmetic shown",
  description:
    "Every competitor publishes a total with no hours behind it. Here is the rate, the hours and the multiplication, so you can argue with any line of it. The drivers are: How much policy already exists in writing, How many jurisdictions you serve, Whether you have labelled data, Internal or outsourced reviewers and Whether appeals already exist in some form.",
  drivers: [
    {
      driver: "How much policy already exists in writing",
      hours: "Highest impact",
      note: "Undocumented policy has to be elicited before it can be encoded, and elicitation is slower than engineering. This single factor moves the number more than the other three together.",
    },
    {
      driver: "How many jurisdictions you serve",
      hours: "High",
      note: "Each additional regime is an overlay, a different clock and a different report. The second is expensive; the fourth is cheaper than the second because the structure already exists.",
    },
    {
      driver: "Whether you have labelled data",
      hours: "Medium",
      note: "Without it, classifier evaluation starts with a labelling exercise before anyone can say whether the model is any good at your base rates.",
    },
    {
      driver: "Internal or outsourced reviewers",
      hours: "Medium",
      note: "Outsourced review needs tighter access control, stricter PII minimisation inside the queue, and a clearer audit boundary.",
    },
    {
      driver: "Whether appeals already exist in some form",
      hours: "Medium",
      note: "A support inbox that informally handles appeals is still a starting point. Nothing at all means designing the return path from scratch, which is half the user-visible surface.",
    },
    {
      driver: "Content type and volume",
      hours: "Low to medium",
      note: "Text is cheapest. Images and video add a classification tier and a storage and retention question. Live content adds a latency budget that constrains the whole pipeline.",
    },
  ],
  modules: [
    { module: "Policy and taxonomy", hours: "60 to 120" },
    { module: "Classification integration", hours: "80 to 160" },
    { module: "Queue and case management", hours: "120 to 200" },
    { module: "Enforcement and notice", hours: "90 to 160" },
    { module: "Appeals", hours: "60 to 120" },
    { module: "Audit and reporting", hours: "70 to 140" },
  ],
  math: {
    title: "Phase one, added up",
    points: [
      "Policy and taxonomy 90 plus classification integration 120 plus queue and case management 160 plus enforcement and notice 120 plus appeals 90 plus audit and reporting 100 equals 680 hours. Every one of the six sits inside its own published range above, so you can move any line and see what it does to the total.",
      "At $40 per hour that is $27,200. At $100 per hour it is $68,000. At a $65 blended rate, about $44,200. The full range across the six modules is 480 hours at every minimum to 900 hours at every maximum.",
      "Deliberately not in that number: age assurance. It is only needed at specific gates, the method depends on which markets you serve, and pricing it generically would be inventing a figure. It is scoped separately once we know the markets and the gates.",
    ],
  },
};

export const costHighlights = [
  {
    label: "Phase one range",
    value: "$27,200 to $68,000",
    note: "The 680 hour worked example at the ends of the rate band, about $44,200 at a $65 blend.",
  },
  {
    label: "Typical timeline",
    value: "8 to 14 weeks",
    note: "The variable is how much of your policy already exists in writing, not engineering capacity.",
  },
  {
    label: "Useful hours",
    value: "480 to 900",
    note: "Every module at its minimum, through to every module at its maximum.",
  },
];

export const engagement = {
  title: "Engagement models",
  description:
    "Four models for community app development, each with the downside stated in the same breath. Those four are: Discovery only, Phase one build, Build and embed and Ongoing engineering. Pick by how settled the scope actually is, not by preference.",
  items: [
    {
      title: "Discovery only",
      good: "Two to three weeks, ending in a written, versioned policy and a scoped build with the hours attached. You own the document either way.",
      bad: "You pay for a document, and if you take it elsewhere we have done the hardest part of the job for somebody else. We are fine with that, but it should be a deliberate choice rather than a surprise.",
    },
    {
      title: "Phase one build",
      good: "The six modules above, delivered against the written scope, ending in a working queue and a decision record you can show a regulator.",
      bad: "It is a floor, not a finished trust and safety function. It gives you defensible records and working tooling, not a mature operation with staffed shifts.",
    },
    {
      title: "Build and embed",
      good: "We build, then sit with your team through the first enforcement waves, which is when the policy gaps actually surface.",
      bad: "More expensive per hour of output than a clean handover, and it only pays for itself if your team genuinely uses the time rather than treating us as extra hands.",
    },
    {
      title: "Ongoing engineering",
      good: "A standing allocation against a roadmap, useful once the system exists and the backlog is real.",
      bad: "It works when there is a genuine backlog and quietly wastes money when there is not. We will tell you when there is not.",
    },
  ],
  recommendation:
    "What we usually suggest: a short discovery that produces the written policy and the decision record schema, then a fixed scope phase one on the pipeline and the return path, and an embedded period only through the first enforcement waves.",
};

export const delivery = {
  title: "How we deliver community app development",
  description:
    "Five phases, each named by the artifact it produces rather than by a stage in a generic waterfall. Those phases are: Policy map, Decision model, Pipeline, The return path and Reporting. Each is named by the artifact it hands you, so you can ask to see one.",
  items: [
    {
      phase: "Policy map",
      line: "A written, versioned policy carrying the harm taxonomy, the enforcement ladder and the jurisdictional overlays. This is the artifact that decides the rest of the project, and it is produced by reading what you already enforce rather than by asking what your rules are.",
    },
    {
      phase: "Decision model",
      line: "The decision record schema and the retention rules, agreed before anything is built against them. Eight fields have to survive an audit, and deciding them late means rewriting everything that writes to them.",
    },
    {
      phase: "Pipeline",
      line: "Classification integrated and evaluated at your real base rates, queues routing by consequence rather than by score, and reviewer tooling in front of actual reviewers.",
    },
    {
      phase: "The return path",
      line: "Notice, appeals and overturn handling working end to end. Most projects treat this as phase two; it is the half that determines whether users experience the system as fair.",
    },
    {
      phase: "Reporting",
      line: "Per-regime reports generated from the decision record rather than assembled by hand each quarter. If a report cannot be regenerated from the record, the record is incomplete.",
    },
  ],
};

export const nonFunctional = {
  title: "The technical buyer's checklist",
  description:
    "Copy this and run it against us, or against anyone else quoting for community app development. Three groups cover: The record, Data residency and retention and Access, minimisation and the reporting surface. Copy any line straight into your own requirements document.",
  groups: [
    {
      group: "The record",
      body: "Audit log immutability, and a clear answer on who can write to it and who can amend it. The decision record written once at decision time, complete, rather than assembled later from three services.",
    },
    {
      group: "Data residency and retention",
      body: "Where the decision record physically lives per jurisdiction. Retention and deletion that satisfies the shortest applicable clock without destroying the record you are separately required to keep, which is a genuine tension and needs a written answer rather than a default.",
    },
    {
      group: "Access, minimisation and the reporting surface",
      body: "Reviewer access control including which reviewers can see which categories. PII minimisation inside queues, so review does not quietly become a second copy of your user database with looser controls than the first. Rate limits and abuse protection on the reporting endpoint itself, which is a common blind spot: the mechanism for reporting harm is also a vector for it, through mass false reporting aimed at suppressing a user.",
    },
  ],
};

export const faqs = [
  {
    question: "Do these rules apply to us if we are not based in the EU or the UK?",
    answer:
      "Generally yes. All four regimes bind on where your users are rather than on where you are incorporated. A platform with no European entity can still be within scope of the DSA because it serves EU users, and the same logic applies to the UK Act, the Indian rules and the Australian minimum age.",
  },
  {
    question: "We are small. Does the DSA still apply?",
    answer:
      "The DSA has applied to all platforms serving EU users since 17 February 2024. The heaviest duties, including systemic risk assessment, independent audit and vetted researcher access, attach only to Very Large Online Platforms at 45 million average monthly active recipients in the Union. Below that threshold you still owe notice and action, statements of reasons, an appeal route and transparency reporting.",
  },
  {
    question: "How long does phase one take?",
    answer:
      "Usually 8 to 14 weeks. The variable is almost never engineering capacity. It is how much of your policy already exists in writing, because undocumented policy has to be elicited from the people currently enforcing it before any of it can be encoded.",
  },
  {
    question: "Can you work with the classifier we already have?",
    answer:
      "Yes, and we would rather. We start by evaluating it against a labelled sample at your real base rates before recommending anything. A surprising share of drift complaints turn out to be threshold and routing problems rather than model problems, and those are much cheaper to fix.",
  },
  {
    question: "Do we need age verification?",
    answer:
      "It depends on your markets and your gates. Australia sets a minimum account age of 16 that parental consent cannot override, in effect since 10 December 2025. The UK requires age assurance that Ofcom describes as highly effective for certain content, enforceable since 25 July 2025. Not every platform needs it, and almost no platform needs it everywhere.",
  },
  {
    question: "What is the difference between this and a content filter?",
    answer:
      "A filter scores content. This is the system that decides what happens next, tells the user which rule was applied to which item, hears the appeal, and can prove all of it afterwards. The filter is one component inside it, and it is the component most easily replaced.",
  },
  {
    question: "Who reviews the hard cases?",
    answer:
      "Your people, on tooling we build. We do not provide moderation staffing. Outsourcing the judgement that defines your community to a vendor is a decision we would argue against even if we sold it.",
  },
  {
    question: "What happens to decisions made before we had a policy version?",
    answer:
      "They stay as they are, and the record shows they predate versioning. Reconstructing them retrospectively would mean inventing a record, which is materially worse than an honest gap when somebody eventually audits it.",
  },
  {
    question: "What does it cost, and how do you price it?",
    answer:
      "Hours times $40 to $100 per hour by role. The module table above gives the hour range for each of the six modules, and the worked example shows 680 hours adding up to about $44,200 at a $65 blend. We do not quote before discovery.",
  },
  {
    question: "Who owns the code, the policy and the decision data?",
    answer:
      "You do, all three. The code is yours on delivery, the written policy is yours from the discovery phase whether or not you build with us, and the decision record lives in your infrastructure rather than ours. We do not retain a copy of your moderation data, and there is no arrangement under which your enforcement history becomes training material for anything.",
  },
  {
    question: "Can you help with the regulator correspondence itself?",
    answer:
      "No. We build the systems and generate the reports. Legal advice on what to say to a regulator comes from your counsel, and any supplier telling you otherwise is selling something they should not.",
  },
];

export const nextSteps = {
  title: "What happens next",
  description:
    "Four steps with a shape attached to each, so booking a call is a known quantity.",
  items: [
    {
      step: "A 30 minute technical call",
      line: "You describe the platform and the markets, and we tell you which of the four regimes actually bind you. That is frequently the most useful half hour in the process, because the answer is often fewer than people expect.",
    },
    {
      step: "The single decision test",
      line: "We look at what your current system can already prove about one enforcement decision: the rule, the signal, the actor, the notice and the appeal state. It is the fastest diagnostic there is and it takes an afternoon.",
    },
    {
      step: "A written scope within a week",
      line: "The modules, the hour ranges and the arithmetic, not a headline price. If the honest answer is that you should buy a suite instead, that is what the document will say.",
    },
    {
      step: "You decide",
      line: "With the scope in hand, you choose whether we build it, your team builds it, or you buy it. The document is useful in all three cases and it is yours either way.",
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
          label: "AI agent development",
          href: "/services/ai-agent-development",
          note: "Classification and triage services",
        },
        {
          label: "Database development",
          href: "/services/database-development",
          note: "Where the decision record actually lives",
        },
        {
          label: "Web development",
          href: "/services/web-development",
          note: "Reviewer tooling and the appeal surface",
        },
      ],
    },
    {
      group: "Adjacent capabilities",
      links: [
        {
          label: "Multimodal AI development",
          href: "/services/multimodal-ai-development-company",
          note: "Image and video classification, not just text",
        },
        {
          label: "AI document management",
          href: "/services/ai-document-management-system",
          note: "Retention, holds and disposal of the record",
        },
        {
          label: "Dating app development",
          href: "/solutions/dating-app-development-company",
          note: "The community product itself, built from scratch",
        },
      ],
    },
    {
      group: "Other sectors",
      links: [
        {
          label: "Media and entertainment",
          href: "/industries/media-software-development",
          note: "Rights and catalogue behind user facing content",
        },
        {
          label: "Fitness and wellness",
          href: "/industries/fitness-app-development",
          note: "Membership communities and the retention problem",
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
    title: "Send us one enforcement decision",
    description:
      "Pick a single decision your system made last month and try to answer five questions about it: which rule applied, which version of that rule, what triggered the review, what the user was told, and whether they appealed. What you can and cannot answer tells us more than a discovery call does.",
    ctaText: "Book a 30 minute technical call",
  },
  end: {
    title: "Start with what you can prove, not with what you can delete",
    description:
      "Most platforms discover their gap is the record rather than the decision. We will tell you which of the four regimes bind you, what your system can currently evidence, and what phase one would actually cost in hours.",
    ctaText: "Book a 30 minute technical call",
  },
};

export const relatedPosts = [
  "ai-for-fraud-detection-a-quick-guide",
  "flask-security-checklist-for-developers",
  "chat-with-your-documents",
  "how-much-does-ai-development-cost",
  "ai-agents-for-business",
  "top-ai-use-cases-you-cant-ignore",
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
      "Classification, security and document work that applies directly to trust and safety systems.",
  },
};
