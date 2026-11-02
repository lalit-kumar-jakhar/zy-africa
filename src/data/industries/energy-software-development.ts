import type { IndustryPageData } from "./types";

export const heroSection = {
  eyebrow: "Industries · Energy and Utilities",
  title: "Energy software development for ",
  titleHighlight: "utilities, suppliers and operators",
  description:
    "A meter read is not a number. It is a value with a source, a quality flag and a settlement status, and the bill built on it is a restatement rather than a fact. Systems that store a reading as an integer produce invoices nobody can defend six months later, and that is the part we build.",
  features: [
    "Reads carry a quality flag",
    "46, 48 or 50 periods a day",
    "DLMS, OBIS and CIM",
    "$40 to $100 per hour",
  ],
  scrollTarget: "#essence",
  ctaText: "Book a 30 minute technical call",
  bgImage: "/static/assets/industries/energy-utilities-industries.webp",
};

export const seo = {
  primaryKeyword: "energy software development",
  intent: "commercial",
  secondaryKeywords: [
    "utility billing software development",
    "smart metering software development",
  ],
  competingUrl: null,
} as const;

export const essence = {
  title: "The short version",
  description: "The commercial facts in one block, before any of the detail. The two halves are utility billing software development and smart metering software development, and the meter data decides what a bill can defend. The tiles cover: Typical integration set, Phase one timeline, Rate band, Phase one range, Stack we actually use and Our commitment.",
  tiles: [
    {
      label: "Typical integration set",
      value:
        "A head-end system collecting from meters, a meter data management platform if you have one, a billing or ERP ledger you are keeping, market messaging to the settlement body, a payments provider for prepaid top ups, and a historian or data warehouse on the operational side.",
    },
    {
      label: "Phase one timeline",
      value:
        "18 to 26 weeks for the worked example below, run as a squad rather than a single developer. Rollout milestones and settlement programme dates are what move it, and both belong to somebody else's calendar.",
    },
    {
      label: "Rate band",
      value:
        "$40 to $100 per hour by role and seniority. Reporting and extracts near the floor, the interval store and the settlement timeline near the ceiling. Mixed teams blend to around $65.",
    },
    {
      label: "Phase one range",
      value:
        "1,460 hours in the worked example, which is $58,400 to $146,000 across the rate band and about $94,900 at the blend. The cost section shows every module and its range, so you can argue with any line of it.",
    },
    {
      label: "Stack we actually use",
      value:
        "Python with FastAPI, Node, PostgreSQL and Next.js, with a time series store alongside Postgres where interval volumes justify it, Terraform for infrastructure and Grafana and Prometheus for metrics. Interval data is an append problem before it is a product one.",
    },
    {
      label: "Our commitment",
      value:
        "No quote before a discovery that produces the integration inventory and the meter data model decision. Three things we are not: we do not operate metering assets, we are not a licensed supplier or settlement agent, and we are not an accredited service provider for e-invoicing or statutory filing.",
    },
  ],
};

export const anchors = [
  { id: "who-this-is-for", label: "Is this us?" },
  { id: "sub-verticals", label: "What breaks for us?" },
  { id: "systems", label: "What is a read, really?" },
  { id: "compliance", label: "Which rules apply?" },
  { id: "what-goes-wrong", label: "What goes wrong?" },
  { id: "build-or-buy", label: "Build it or buy it?" },
  { id: "cost", label: "What does it cost?" },
];

export const operations = {
  title: "Where metering and billing systems earn their keep",
  description:
    "The stages a meter read moves through, and what we build at each one. The stages run: Collect from the meter, Validate, estimate and edit, Store the interval series, Rate against the tariff, Settle and reconcile and Restate and re-bill.",
  stages: [
    "Collect from the meter",
    "Validate, estimate and edit",
    "Store the interval series",
    "Rate against the tariff",
    "Settle and reconcile",
    "Restate and re-bill",
  ],  image: {
    src: "/static/assets/industries/energy-utilities-operations-map.svg",
    alt: "Two band metering map covering collection, validation and the interval store, then rating, settlement and restatement.",
  },
};

export const segments = {
  title: "Who this is for",
  description:
    "Six positions we are usually called from, and the thing each one is missing. Not a fit: if you want a billing platform replaced end to end inside a quarter, or a partner who will operate your metering assets or act as your settlement agent, we are the wrong firm and would rather say so on the first call.",
  items: [
    {
      title: "Distribution utilities on a rollout",
      line: "Meters are going in faster than the systems behind them can absorb the data. What is missing is an interval store that holds quality and source per read, rather than a warehouse that averages the problem away.",
    },
    {
      title: "Suppliers inside a settlement change",
      line: "The market is moving to half hourly settlement on a timetable nobody controls. What is missing is a data path that can be tested against the new arrangements before the migration window closes.",
    },
    {
      title: "Submetering and campus operators",
      line: "Recharging tenants for energy means becoming a billing business without a billing licence. What is missing is a defensible calculation, since a submetered bill is challenged far more often than a utility one.",
    },
    {
      title: "Renewable generators selling direct",
      line: "Generation, consumption and export all have to be netted against a tariff that changes by time of day. What is missing is the arithmetic that turns two meters and one contract into one settled position.",
    },
    {
      title: "EV charge point operators",
      line: "A charging session is a metered transaction, a payment and a roaming settlement at the same time. What is missing is one record that all three read from rather than three that reconcile weekly.",
    },
    {
      title: "Utilities with a reporting problem",
      line: "Loss figures, collection efficiency and consumption reports disagree depending on which system produced them. What is missing is one authoritative read, with everything downstream reading from it rather than recomputing.",
    },
  ],
};

export const subVerticals = {
  title: "Find your operation",
  description:
    "Energy is one word for six businesses. What breaks is different in each, so what we build is different. The operations covered here are: Distribution utilities, Retail energy suppliers, Submetering and landlords, Renewables and open access, EV charging networks and Water and gas metering.",
  items: [
    {
      title: "Distribution utilities",
      breaks:
        "A rollout multiplies data volume by several orders of magnitude and changes nothing about the billing system underneath it. Prepaid metering adds a control path that the estate was never designed for: a disconnection is a physical consequence of a balance calculation, so a rounding error or a late payment posting becomes somebody's lights. Meter exchanges break consumption arithmetic quietly, because the difference between the new meter's register and the old one's is meaningless and nothing in a naive calculation says so.",
      build:
        "An interval store that keeps every read with its source and quality rather than one value per period, so a restatement is a new record instead of an overwrite. Meter exchange modelled as an event with both final and initial registers captured, so consumption spans the change correctly. Disconnection as a reviewable decision with the balance calculation attached, not a job that fires from a threshold.",
    },
    {
      title: "Retail energy suppliers",
      breaks:
        "Settlement moves underneath you and the timetable is not yours. In Great Britain the Market-wide Half Hourly Settlement programme is due to go live by May 2027, with changes landing in stages between September 2025 and July 2027 and the migration phase running an 18 month window from October 2025, most meter points moving between May 2026 and May 2027. Meanwhile the bill a customer received in March may be wrong in September, because reconciliation replaced the estimates it was built on.",
      build:
        "A billing ledger that treats a bill as a version rather than a document, so a reconciliation produces an adjustment with a traceable cause instead of a credit note nobody can explain. Market messaging built as an interface contract with the failure behaviour specified, since a rejected flow that silently retries is worse than one that stops. Test suites fed from real historic reads, because the interesting failures are in the data rather than the protocol.",
    },
    {
      title: "Submetering and landlords",
      breaks:
        "You are billing without the protections a licensed supplier has, and the tenant who disputes a charge is usually the same person who reads the meter. Apportioning common area consumption is a policy question dressed as an arithmetic one, and a system that hides it inside a divisor will be asked to justify it eventually. Check meters and the main meter never quite agree, and the difference has to go somewhere explicit.",
      build:
        "An apportionment schedule as dated data rather than a fixed divisor, with the unallocated difference shown as its own line rather than spread silently. Every tenant charge traceable to the reads and the rate that produced it, so a dispute resolves against a working. Reconciliation between the main meter and the sum of submeters run as a scheduled check with a tolerance and an alert.",
    },
    {
      title: "Renewables and open access",
      breaks:
        "Generation and consumption are separate meters on the same site, and what the customer pays depends on a netting rule that varies by contract and by hour. Time of day pricing turns a monthly total into a per interval calculation, and export credit is often valued differently from import. Contracts frequently reference an index or a published tariff that changes without the system being told.",
      build:
        "Netting computed per interval against the contract rather than per month against a total, so the number can be defended interval by interval. Tariff and index values held as dated series with a source, so a retrospective correction to an index becomes a re-rate rather than a manual credit. Generation and consumption modelled as separate series on one site, not as a signed number.",
    },
    {
      title: "EV charging networks",
      breaks:
        "One session is simultaneously a metered delivery, a card authorisation and a roaming settlement with another network, and most platforms hold three records that reconcile on a weekly job. Authorisation happens before the energy is known, so the payment is a hold that has to be adjusted, and a session that ends badly leaves an open authorisation and an unbilled delivery. Tariffs mix energy, time and idle fees, which meter data alone cannot resolve.",
      build:
        "The session as one record that payment, metering and roaming all reference, with its own state machine rather than three that are compared afterwards. Authorisation, capture and adjustment modelled explicitly so a partial or aborted session has a defined resolution. Tariff components separated so an idle fee and an energy charge are distinguishable on the receipt and in the ledger.",
    },
    {
      title: "Water and gas metering",
      breaks:
        "Volume is measured in physical units and billed in energy or in corrected volume, so conversion factors sit between the read and the charge and they change. Reads are far less frequent than electricity, which makes estimation the normal case rather than the exception, and an estimate that stands for months compounds. Leak and burst detection is a data problem that the billing pipeline is usually asked to solve as a side effect.",
      build:
        "Conversion factors as dated reference data with their own history, so a corrected factor triggers a re-rate rather than a manual adjustment. Estimation with an explicit method recorded per read, so a long estimated run is visible as a risk rather than as a normal bill. Consumption anomaly checks as a separate pipeline reading the same store, rather than logic bolted into billing.",
    },
  ],
};

export const systems = {
  title: "What a read actually is, and why a bill is a restatement rather than a fact",
  description:
    "The same meter produces a cumulative register and, if it is capable, an interval profile. Consumption from the first is a difference between two readings; from the second it is a sum. They disagree, and deciding which is authoritative is a modelling decision that everything downstream inherits. Add a quality flag, a source, a settlement status and a clock that changes twice a year, and the read stops being a number. Here is the estate we expect to meet, and the decisions that determine whether an invoice can be defended.",
  groups: [
    {
      group: "Head-end, meter data management and billing",
      body: "Itron, Landis and Gyr, Siemens EnergyIP, Oracle Utilities and Kamstrup cover collection and meter data management, with SAP for Utilities, Oracle Customer Care and Billing, Hansen and Gentrack on the billing side. In India, Genus, Secure Meters and HPL sit on the meter and head-end side of RDSS deployments. The licence boundary between these products is the thing to read before the roadmap is written.",
    },
    {
      group: "The data standards you will actually meet",
      body: "DLMS/COSEM, published as IEC 62056, is the global smart metering standard, and its four DLMS User Association books split the job: the Blue Book carries the COSEM object model and the OBIS identification system, the Green Book the architecture and protocols, the Yellow Book conformance testing and the White Book the glossary. In North America the ANSI C12 family covers optical communication in C12.18, the data model in C12.19 and networked communication in C12.22.",
    },
    {
      group: "Grid, market and the operational side",
      body: "The Common Information Model, defined under IEC 61970 and IEC 61968, is the interchange model between energy management and distribution management systems, and IEC 61850 is the substation automation standard. On the edge, OCPP carries charge point communication and OpenADR carries demand response signals. These are a different estate from billing, with different failure modes and often a different team.",
    },
  ],
  distinction: {
    title: "The distinction that saves projects",
    body: "A head-end system, a meter data management platform and a billing engine are three products, and buying one does not give you the other two. The head-end talks to meters and knows nothing about tariffs. Meter data management holds the validated series and does not rate it. Billing rates and invoices and generally cannot store the interval history that would justify what it did. Nearly every rescue we are called into traces back to a plan that assumed the head-end purchase covered meter data management, or that the billing system could hold interval data at rollout volume. Read what each product actually stores before the dates are committed, because the gap appears at exactly the point where there is no time left to close it.",
  },
  pairs: [
    {
      pair: "A register read against an interval series",
      body: "A register is a running total, so consumption is the difference between two of them and the answer depends entirely on both readings being from the same meter with no rollover in between. An interval series is a sequence of period values, so consumption is a sum and a missing period is visibly missing rather than silently absorbed. Both come off the same smart meter and both are identified by their own OBIS code, which is why the model has to carry the code rather than flattening everything into a value column. Deciding which one is authoritative for billing, and saying so once, prevents the situation where two teams answer the same question differently and both are reading real data.",
    },
    {
      pair: "An estimated read against a validated one",
      body: "Validation, estimation and editing is a pipeline with a record, not a cleanup pass. A read arrives, gets checked against tolerances and against its own history, and is either accepted, corrected or replaced with an estimate produced by a named method. What must survive is the provenance: which of those happened, when, by what rule, and what the original value was. Systems that overwrite in place produce bills that cannot be explained once anyone asks why last March differs from the meter's own display, and the answer, that an estimate was later replaced, is unavailable because the estimate is gone.",
    },
    {
      pair: "A settlement run against a final reconciliation",
      body: "Initial settlement runs on what was known at the time, which for a lot of meter points means estimates. Reconciliation runs later, sometimes much later, replacing estimates with actuals and moving the position for a period that is commercially closed. The consequence for software is that a bill is a version rather than a document, and the ledger has to support restating a closed period with a traceable cause. Teams that model billing as issue-and-forget end up producing credit notes nobody can tie back to a read, which is exactly the thing a regulator or a large customer asks about.",
    },
    {
      pair: "A day against 46, 48 or 50 settlement periods",
      body: "A half hourly day has 48 periods, except on the two days a year when the clocks change, which have 46 and 50. Every naive loop over a day is correct for 363 days and wrong for two, and the failure is invisible until it happens, at which point it is a billing incident rather than a bug report. The related traps sit alongside it: meters keep their own clock and it drifts, some report in local time and some in a fixed offset, and a period label without a timezone is not a time. Store periods against an explicit local calendar with the offset carried, and test the two clock change days deliberately rather than hoping the library handled it.",
    },
  ],
};

export const compliance = {
  title: "Which rules apply to you",
  description:
    "Five standards a buyer in this sector asks for by name, then every regional instrument in one place. Programme dates in this sector move, so verify the regional row before contracting. The rules in scope are: ISO/IEC 27001, SOC 1 and SOC 2, GDPR and UK GDPR, IEC 62443, PCI DSS and Everything regional, in one place.",
  rows: [
    {
      item: "ISO/IEC 27001",
      detail:
        "The information security management certification procurement asks for by name. For utility work the scope statement matters more than the certificate, because the question actually being asked is whether the meter data path and the customer billing data sit inside the certified boundary or immediately next to it.",
    },
    {
      item: "SOC 1 and SOC 2",
      detail:
        "SOC 2 covers security and availability and is the standard ask from partners. SOC 1 covers controls feeding financial reporting, and it matters more here than in most sectors because metering feeds billing feeds revenue recognition, so a control weakness in the read pipeline is a control weakness in the accounts.",
    },
    {
      item: "GDPR and UK GDPR",
      detail:
        "Half hourly consumption data reveals when a household is occupied, empty or asleep, which makes it far more sensitive than a monthly total and changes both the lawful basis and the retention answer. Granularity is itself a design decision with a privacy consequence, and consent for settlement is not consent for analytics.",
    },
    {
      item: "IEC 62443",
      detail:
        "The industrial automation and control systems security family, and the standard that comes up once operational technology is anywhere in scope. It matters because the boundary between the operational estate and the corporate one is the thing procurement will interrogate, and a meter control path that can disconnect a customer sits on the wrong side of that boundary if nobody drew it deliberately.",
    },
    {
      item: "PCI DSS",
      detail:
        "It applies wherever card data touches prepaid top ups or bill payment, and the useful move is nearly always to keep it out of your estate entirely by tokenising at the gateway. Prepaid makes this sharper than usual, because a top up path that stores a card for convenience pulls a system that controls physical supply into scope.",
    },
    {
      item: "Everything regional, in one place",
      detail:
        "In Great Britain the Market-wide Half Hourly Settlement programme is due to go live by May 2027, with changes landing in stages between September 2025 and July 2027; the migration phase began in October 2025 across an 18 month window and the majority of meter points move between May 2026 and May 2027, which makes this a live constraint on any supplier system being built now rather than a future one. In the European Union the NIS2 Directive, (EU) 2022/2555, had a transposition deadline of 17 October 2024 which most member states missed, prompting the Commission to open infringement proceedings against 23 member states in late 2024 and issue reasoned opinions to 19 in May 2025; energy is one of the 18 covered sectors and sits among the essential entities, and the reporting obligation is a three stage cascade of a 24 hour early warning, a 72 hour notification to the national authority and a final report within one month, which is a software requirement rather than a policy one because three artifacts on three clocks have to come out of your incident tooling. In India the Revamped Distribution Sector Scheme was launched in July 2021 by the Ministry of Power and makes prepaid smart metering the default for distribution utilities, which changes the billing model rather than only the meter, since a prepaid balance is a real time obligation and a postpaid bill is a monthly one.",
    },
  ],
};

export const whatGoesWrong = {
  title: "What goes wrong",
  description:
    "Ten failure modes with the counter-practice attached. Naming them is more useful than a list of reasons to pick us. The first three below are: A read is stored as one value, Meter exchanges break consumption and The clock change day is never tested.",
  items: [
    {
      title: "A read is stored as one value",
      line: "Without a source and a quality flag there is no way to explain why a bill changed, or to rebuild it when an estimate is replaced. Model the read with its provenance from the first sprint, because reconstructing it afterwards means going back to the head-end for data that may have aged out.",
    },
    {
      title: "Meter exchanges break consumption",
      line: "Subtracting the old meter's final register from the new meter's first one produces a number that is either negative or enormous, and both look plausible enough to bill. Model the exchange as an event carrying both registers, so consumption spans it deliberately rather than accidentally.",
    },
    {
      title: "The clock change day is never tested",
      line: "Two days a year have 46 and 50 half hourly periods, and code that assumes 48 is wrong on exactly those days. Put both dates in the test suite with real data, since this failure surfaces as an invoice rather than as an exception.",
    },
    {
      title: "Estimates are overwritten in place",
      line: "Once the estimate is gone, nobody can answer why March was restated, and the customer asking is usually the one who noticed. Keep every version of a read with the method that produced it and let the current value be the newest entry.",
    },
    {
      title: "Billing is treated as issue and forget",
      line: "Reconciliation will change a period that is commercially closed, and a system that only issues documents answers that with a credit note nobody can trace. Treat a bill as a version with an adjustment path, so a restatement carries its cause.",
    },
    {
      title: "Interval data goes into the billing database",
      line: "Rollout volumes are several orders of magnitude above what a billing schema was sized for, and the symptom is a month end that gets slower until it stops finishing. Keep the interval store separate and let billing read a rated result rather than raw periods.",
    },
    {
      title: "Prepaid disconnection fires from a threshold",
      line: "A balance crossing zero because a payment posted late is not the same as a customer out of credit, and the consequence here is physical. Make disconnection a decision with the balance calculation and the payment timeline attached, and keep an explicit hold path.",
    },
    {
      title: "Timezones live in the application layer",
      line: "A period label without an offset is not a time, and meters variously report local time, fixed offset and their own drifting clock. Carry the offset with the period and normalise once at the edge, so the ambiguity has exactly one place to be resolved.",
    },
    {
      title: "Submetered apportionment hides in a divisor",
      line: "The unallocated difference between the main meter and the sum of submeters is a real number that has to belong to somebody, and burying it in a divisor means it is allocated without being decided. Show it as its own line and make the apportionment schedule dated data.",
    },
    {
      title: "Migration is validated on monthly totals",
      line: "Matching a month's consumption proves the sum, not the series, and settlement is done on the series. Replay a full year interval by interval and compare period by period, because a compensating pair of errors will always agree at the total.",
    },
  ],
};

export const buildOrBuy = {
  title: "Build, buy, or buy the core and build the edge",
  description:
    "The honest answer is usually the third one. Three judgements sit outside this table because they are not ours to make: we do not operate metering assets, we are not a licensed supplier or a settlement agent, and we are not an accredited service provider for e-invoicing or statutory filing.",
  rows: [
    {
      option: "Head-end and meter communications",
      best: "Buy",
      verdict:
        "Protocol stacks, firmware compatibility and field device management come with the meter vendor and are certified alongside it. Building one is a hardware compatibility matrix you will maintain forever.",
    },
    {
      option: "Meter data management",
      best: "Buy the core, build the edge",
      verdict:
        "Buy the validated store where a credible product exists, then build the estimation rules and the exception handling that encode your own policy. The store is commodity; what you do with a failed validation is not.",
    },
    {
      option: "The interval store and its provenance model",
      best: "Build",
      verdict:
        "This is the piece every downstream argument resolves against, and it encodes decisions no vendor can make for you. Owning it is what lets a bill be defended rather than described.",
    },
    {
      option: "Core billing and customer ledger",
      best: "Buy",
      verdict:
        "Years of tariff, tax and dunning edge cases are already inside these products. Building one is somebody else's regulatory backlog that you have not read yet.",
    },
    {
      option: "Tariff and rating for unusual products",
      best: "Buy the core, build the edge",
      verdict:
        "Buy the engine, build the product definitions. Time of day, netting and export valuation are where your commercial difference lives, and they are exactly what a generic rating table struggles with.",
    },
    {
      option: "Prepaid balance and disconnection control",
      best: "Build",
      verdict:
        "The consequence of this calculation is physical, so it needs to be reviewable, logged and yours. No product should be making that decision inside a black box you cannot audit.",
    },
    {
      option: "Market messaging to the settlement body",
      best: "Buy the core",
      verdict:
        "Buy the gateway and its certification, build the mapping and the failure handling. A rejected flow that silently retries is worse than one that stops, and only you can decide which is which.",
    },
    {
      option: "Payments and prepaid top ups",
      best: "Buy",
      verdict:
        "Card tokenisation, mandates and payout rails are solved, audited and cheaper than the compliance surface of owning them. Build the posting and balance logic on top instead.",
    },
    {
      option: "E-invoicing and statutory transmission",
      best: "Buy",
      verdict:
        "Only an accredited service provider may transmit, so this is not a build decision at all. Establish who yours is before the plan depends on the date.",
    },
    {
      option: "Operational reporting and loss analysis",
      best: "Build",
      verdict:
        "Every analytics product will chart whatever definition of a loss you feed it. The value is in one authoritative read that everything else references rather than recomputes.",
    },
    {
      option: "Substation and grid automation",
      best: "Buy",
      verdict:
        "IEC 61850 estates carry safety certification and vendor testing regimes. Integrate to them and keep the boundary explicit rather than building anything that sits inside them.",
    },
  ],
};

export const cost = {
  title: "What energy software development costs, with the arithmetic shown",
  description:
    "Every competitor publishes a total with no hours behind it. Here is the rate, the hours and the multiplication, so you can argue with any line. The scope priced here is a utility or supplier keeping its head-end and its core ledger, and taking the interval store, rating and settlement path in house.",
  drivers: [
    {
      driver: "How many meter points, and at what interval",
      hours: "High impact",
      note: "Monthly registers and half hourly profiles are different systems at the same customer count, and the difference lands in the store and the settlement path rather than in the interface.",
    },
    {
      driver: "Whether reads already carry provenance",
      hours: "The largest swing",
      note: "If source and quality are already held per read, this is integration work. If values are overwritten in place, the model goes in underneath everything else and history may not be recoverable.",
    },
    {
      driver: "Whether prepaid is in scope",
      hours: "150 to 260",
      note: "A prepaid balance is a real time obligation with a physical consequence, which is a different system from a monthly bill rather than a setting on one.",
    },
    {
      driver: "Which head-end and ledger you keep",
      hours: "80 to 200 each",
      note: "Vendor API surface at your specific version, not at the version in the current documentation. This is the most common source of a mid-build surprise.",
    },
    {
      driver: "How many market interfaces",
      hours: "Adds real scope",
      note: "Each settlement or market counterparty brings its own message set, its own certification and its own rejection semantics, and none of them are negotiable.",
    },
    {
      driver: "How much history has to be replayed",
      hours: "Rarely small",
      note: "Replay testing scales with the variety of meter and tariff combinations rather than with the number of meter points, so a small mixed estate can cost more than a large uniform one.",
    },
    {
      driver: "Whether operational technology is in scope",
      hours: "Medium",
      note: "Anything touching substation or control estates brings a separate security boundary and a separate review cycle, and it is a programme decision rather than a sprint.",
    },
  ],
  modules: [
    { module: "Meter data acquisition and the head-end interface", hours: "180 to 320" },
    { module: "Validation, estimation and editing", hours: "160 to 280" },
    { module: "Interval store and the settlement timeline", hours: "180 to 320" },
    { module: "Tariff, rating and billing integration", hours: "200 to 340" },
    { module: "Prepaid, top up and disconnection control", hours: "120 to 220" },
    { module: "Integrations: market messaging, payments, finance", hours: "160 to 280" },
    { module: "Operational reporting, losses and audit trail", hours: "120 to 220" },
  ],
  math: {
    title: "Phase one, added up",
    points: [
      "Meter data acquisition 230 plus validation and estimation 210 plus interval store and settlement 230 plus tariff and rating 260 plus prepaid and disconnection 150 plus integrations 220 plus reporting and audit 160 equals 1,460 hours. Every one of the seven sits inside its own published range above, so you can move any line and see what it does to the total.",
      "At $40 per hour that is $58,400. At $100 per hour it is $146,000. At a $65 blended rate, about $94,900. The full span across the seven modules is 1,120 hours at every minimum to 1,980 at every maximum.",
      "Outside that number, with their ranges intact: quality assurance at 20 to 25 percent of build, environments and deployment at 80 to 160, security review and penetration testing at 60 to 120, NIS2 incident reporting tooling at 100 to 200, Common Information Model message mapping per counterparty at 80 to 160, and demand response or charge point integration at 120 to 240. The last three are usually phase two, and they are listed rather than dropped because this page argues for all of them.",
    ],
  },
};

export const costHighlights = [
  {
    label: "Phase one range",
    value: "$58,400 to $146,000",
    note: "The 1,460 hour worked example at the ends of the rate band, about $94,900 at a $65 blend.",
  },
  {
    label: "Typical timeline",
    value: "18 to 26 weeks",
    note: "As a squad. A rollout or settlement milestone inside the window compresses scope rather than the calendar.",
  },
  {
    label: "Useful hours",
    value: "1,120 to 1,980",
    note: "Every module at its minimum, through to every module at its maximum.",
  },
];

export const engagement = {
  title: "Engagement models",
  description:
    "Four models for energy software development, each with the downside stated in the same breath. The models are: Fixed scope phase one, Dedicated squad, monthly, Rollout data programme and Market change retainer. Pick by how settled the scope actually is, not by preference.",
  items: [
    {
      title: "Fixed scope phase one",
      good: "A defined scope, a fixed number and a date. It works best after discovery has produced the integration inventory and the meter data model decision, because that is the point at which scope is genuinely knowable.",
      bad: "Change costs more than it would hourly, and settlement scope moves whenever a market programme does, which is not something either of us controls.",
    },
    {
      title: "Dedicated squad, monthly",
      good: "A standing team that keeps the domain knowledge in the room, billed on time and materials so you pay for work actually done. Long integration and rollout work suits this shape.",
      bad: "You carry the utilisation risk, and a quiet month still costs a month. We will tell you when there is not enough work to justify it.",
    },
    {
      title: "Rollout data programme",
      good: "Scoped to absorbing a metering rollout, priced on the variety of meter and tariff combinations rather than on meter count, with interval replay built into the plan rather than bolted on at the end.",
      bad: "Discovery is unusually long here, and it can conclude that some of your historic data cannot be recovered with its provenance intact.",
    },
    {
      title: "Market change retainer",
      good: "Capacity held for settlement and regulatory changes you do not control, with the standards work already understood, so a programme milestone is planned work rather than a scramble.",
      bad: "You are paying for availability, and in a quarter where the programme slips that feels a lot like paying for nothing.",
    },
  ],
  recommendation:
    "What we usually suggest: a fixed scope phase one covering the interval store and the validation pipeline, moving to a dedicated squad once rating or a market interface has proved the model holds.",
};

export const delivery = {
  title: "How we deliver energy software development",
  description:
    "Five phases, each named by the artifact it produces rather than by a stage in a generic waterfall. The phases are: Meter data decision record, Estimation rule book, Settlement timeline map, Read replay test pack and Operations and evidence pack.",
  items: [
    {
      phase: "Meter data decision record",
      line: "Which series is authoritative, what provenance every read carries, and how a restatement is represented. Written down before anything is built on top of it, because every later argument resolves against this document.",
    },
    {
      phase: "Estimation rule book",
      line: "Every validation tolerance and estimation method named, with what it does to the read, what it records, and how a later actual replaces it. This is the document a disputed bill is defended from.",
    },
    {
      phase: "Settlement timeline map",
      line: "Each run, each reconciliation and each window in which a closed period can still move, with the system behaviour at every one. Agreed with whoever owns your market obligations rather than shown to them afterwards.",
    },
    {
      phase: "Read replay test pack",
      line: "A full past year replayed interval by interval against the new model and compared period by period, with clock change days tested explicitly. Monthly totals are not the test.",
    },
    {
      phase: "Operations and evidence pack",
      line: "The runbooks, exception handling procedures and control documentation your operations team and your auditor will ask for, produced as part of the build rather than assembled afterwards under time pressure.",
    },
  ],
};

export const nonFunctional = {
  title: "The technical buyer's checklist",
  description:
    "Copy this and run it against us, or against anyone else quoting for energy software development. The groups are: Reads, provenance and replay, Money, settlement and restatement and Boundaries, incidents and scope. Copy any line straight into your own requirements document.",
  groups: [
    {
      group: "Reads, provenance and replay",
      body: "Can the system return the read for a given meter and period as it stood before the last restatement, as a query rather than a reconstruction? Does every read carry its source, its quality and the method that produced it if it was estimated? Are both clock change days in the test suite with real data, and does the suite fail if a day is assumed to have 48 periods?",
    },
    {
      group: "Money, settlement and restatement",
      body: "Can a bill be regenerated exactly as it was issued, and separately as it stands after reconciliation, with the difference explained by named reads? Is every prepaid disconnection decision logged with the balance calculation and payment timeline behind it? Does the reconciliation between a main meter and its submeters run on a schedule with a tolerance rather than on request?",
    },
    {
      group: "Boundaries, incidents and scope",
      body: "Where exactly is the line between the operational estate and the corporate one, and does anything able to disconnect a customer sit on the correct side of it? Can your incident tooling produce a 24 hour early warning, a 72 hour notification and a one month final report as artifacts rather than as emails? And confirm the boundary: we do not operate metering assets, we are not a licensed supplier or settlement agent, and we do not transmit statutory filings or e-invoices for you.",
    },
  ],
};

export const faqs = [
  {
    question: "What does a phase one cost, how many hours, and how long does it take?",
    answer:
      "The worked example is 1,460 hours, which is $58,400 to $146,000 across our $40 to $100 rate band and about $94,900 at a $65 blend, landing in 18 to 26 weeks with a squad. The module ranges sum to 1,120 to 1,980 hours, so a smaller or larger phase one is a question of which modules are in it. We do not quote a fixed number before a discovery that produces the integration inventory.",
  },
  {
    question: "Who owns the code, the data and the accounts?",
    answer:
      "You do, all three, from the first commit. Repositories, cloud accounts, domains and third party service accounts are in your name or transferred to it at handover. What transfers alongside them is the meter data decision record and the estimation rule book, which is the part that makes the code readable by whoever comes after us.",
  },
  {
    question: "Why does provenance on a read matter so much?",
    answer:
      "Because a bill is a restatement rather than a fact. Initial settlement often runs on estimates, reconciliation replaces them with actuals months later, and the customer or regulator asking why March changed needs an answer that names the reads involved. A system that overwrites a value in place has destroyed the only evidence that would have answered them.",
  },
  {
    question: "What is the actual difference between a head-end, meter data management and billing?",
    answer:
      "The head-end talks to meters and knows nothing about tariffs. Meter data management holds the validated series and does not rate it. Billing rates and invoices and generally cannot hold interval history at rollout volume. They are three products, and buying one does not give you the other two, which is the single most common reason a metering programme discovers a gap with no time left to close it.",
  },
  {
    question: "How does the half hourly settlement change in Great Britain affect a build starting now?",
    answer:
      "It is a live constraint rather than a future one. Market-wide Half Hourly Settlement is due to go live by May 2027, changes have been landing in stages since September 2025 and continue to July 2027, and the migration phase started in October 2025 across an 18 month window with most meter points moving between May 2026 and May 2027. Anything being built for a supplier now has to be testable against the new arrangements inside that window rather than after it.",
  },
  {
    question: "You have no utility clients on this page. Why should we take you seriously?",
    answer:
      "Because we would rather say that than borrow a client from another sector and call it utility experience. What is on this page instead is the modelling, the standards and the arithmetic, all of which you can check without trusting us. The code, decision records and specifications are yours from the first commit, which is the part that holds whether or not we turn out to be a fit.",
  },
  {
    question: "Can you work with our existing Itron or Oracle Utilities installation?",
    answer:
      "Yes, and that is the more common shape of this work. The first question is what your specific version actually exposes and actually stores, because vendor documentation describes the current release and you may not be on it. We would much rather establish that in discovery than in build.",
  },
  {
    question: "How do you handle prepaid metering and disconnection?",
    answer:
      "As a reviewable decision rather than a threshold job, because the consequence is physical. The balance calculation, the payment timeline and any hold conditions are attached to the decision and logged, so a disputed disconnection can be explained rather than argued. In practice the most common cause we find is a payment posting later than the balance check, which is a sequencing problem rather than a credit one.",
  },
  {
    question: "What is OBIS and why does it keep coming up?",
    answer:
      "It is the object identification system in the DLMS/COSEM Blue Book, and it is how a meter says what a given value actually is: which register, which tariff rate, which direction, which period. It matters because a data model that flattens everything into a value column has thrown away the only thing distinguishing an import register from an export one, and that distinction is the difference between a credit and a charge.",
  },
  {
    question: "How do you test something as large as a year of interval data?",
    answer:
      "By replaying it. A full past year is regenerated interval by interval under the new model and compared period by period against what the old system produced, with both clock change days tested deliberately because those are the two days a naive implementation gets wrong. Matching monthly totals is not the test, since settlement is done on the series and a compensating pair of errors always agrees at the total.",
  },
  {
    question: "Do you cover water and gas as well as electricity?",
    answer:
      "Yes, and the modelling differences are worth naming early. Both are measured in physical units and billed after a conversion whose factors change over time, so those factors need their own dated history or a correction becomes a manual adjustment. Read frequency is also much lower, which makes estimation the normal case rather than the exception and means a long estimated run has to be visible as a risk rather than passing as an ordinary bill.",
  },
];

export const nextSteps = {
  title: "What happens next",
  description:
    "Four steps with a shape attached to each, so booking a call is a known quantity.",
  items: [
    {
      step: "A 30 minute technical call",
      line: "Bring what your system stores against a single read, and one bill you had to restate. Those two answers size the project faster than an hour of description would.",
    },
    {
      step: "The provenance question",
      line: "We establish whether your reads carry source and quality, and what it currently costs you when they do not. The answer usually explains most of the symptoms you called about.",
    },
    {
      step: "A costed phase one",
      line: "Module by module against the ranges published on this page, with anything excluded named as excluded. If your existing platform already does most of it, the document says so.",
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
          note: "The interval store and its provenance model",
        },
        {
          label: "Python development",
          href: "/services/python-development",
          note: "Validation, estimation and rating pipelines",
        },
        {
          label: "Web development",
          href: "/services/web-development",
          note: "Operations consoles and customer portals",
        },
      ],
    },
    {
      group: "Adjacent capabilities",
      links: [
        {
          label: "Internet of things",
          href: "/services/iot-app-development",
          note: "Field devices, charge points and telemetry",
        },
        {
          label: "Predictive analytics",
          href: "/services/predictive-analytics-development",
          note: "Loss detection and consumption forecasting",
        },
        {
          label: "AI workflow automation",
          href: "/services/ai-workflow-automation-services",
          note: "Exception queues and field work routing",
        },
      ],
    },
    {
      group: "Other sectors",
      links: [
        {
          label: "Manufacturing and apparel",
          href: "/industries/manufacturing-software-development",
          note: "Industrial load and the plant behind the meter",
        },
        {
          label: "Real estate",
          href: "/industries/real-estate-software-development",
          note: "Metering and recharge inside a building",
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
    title: "Bring the read model question, not the feature list",
    description:
      "The most useful hour of a first call is usually spent on what your system stores against a single meter read. Almost everything else on this page follows from that one answer, including the cost.",
    ctaText: "Book a 30 minute technical call",
  },
  end: {
    title: "Start with what a read carries",
    description:
      "Bring one read as your system stores it and one bill you had to restate. Thirty minutes on those two usually tells both of us whether this is a fit, and you leave with the hours either way.",
    ctaText: "Book a 30 minute technical call",
  },
};

export const relatedPosts = [
  "ai-in-cybersecurity",
  "chat-with-your-documents",
  "ai-agents-for-business",
  "how-much-does-ai-development-cost",
  "ai-copilots-for-business",
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
      "Security, automation and cost work that applies directly to metering and billing systems.",
  },
};
