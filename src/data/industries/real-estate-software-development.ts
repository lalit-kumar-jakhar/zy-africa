import type { IndustryPageData } from "./types";

export const heroSection = {
  eyebrow: "Industries · Real Estate",
  title: "Real estate software development for ",
  titleHighlight: "landlords, agents and developers",
  description:
    "Most property software problems are not interface problems. They are modelling problems: a tenancy stored as one row with an end date, a rent roll derived from the ledger it is supposed to check, a service charge apportionment held as a fixed percentage in a column. We build the parts where getting the model wrong is expensive to undo.",
  features: [
    "Versioned lease records",
    "Rent roll ties to ledger",
    "RERA, Ejari and MEES",
    "$40 to $100 per hour",
  ],
  scrollTarget: "#essence",
  ctaText: "Book a 30 minute technical call",
  bgImage: "/static/assets/industries/real-estate-proptech-industries.webp",
};

export const seo = {
  primaryKeyword: "real estate software development",
  intent: "commercial",
  secondaryKeywords: [
    "proptech development",
    "property management software development",
  ],
  competingUrl: null,
} as const;

export const essence = {
  title: "The short version",
  description: "The commercial facts in one block, before any of the detail. PropTech development and property management software development both run into client money rules before they run into anything technical. Those tiles are: Typical integration set, Phase one timeline, Rate band, Phase one range, Stack we actually use and Our commitment.",
  tiles: [
    {
      label: "Typical integration set",
      value:
        "A property management or accounting core you are keeping, a payments and mandate provider, a referencing or credit bureau feed, a document store with e-signature, portal distribution, and where buildings are in scope a metering or building management interface.",
    },
    {
      label: "Phase one timeline",
      value:
        "16 to 24 weeks for the worked example below, run as a squad rather than a single developer. A statutory commencement date inside the window compresses scope rather than the calendar, because that date belongs to somebody else.",
    },
    {
      label: "Rate band",
      value:
        "$40 to $100 per hour by role and seniority. Portals and reporting near the floor, the tenancy model and the client money ledger near the ceiling. Mixed teams blend to around $65.",
    },
    {
      label: "Phase one range",
      value:
        "1,380 hours in the worked example, which is $55,200 to $138,000 across the rate band and about $89,700 at the blend. The cost section shows every module and its range, so you can argue with any line of it.",
    },
    {
      label: "Stack we actually use",
      value:
        "Python with FastAPI, Node, PostgreSQL and Next.js, with Terraform for infrastructure and Grafana and Prometheus for metrics. Postgres carries the tenancy versions and the client money ledger, because both are append problems before they are product ones.",
    },
    {
      label: "Our commitment",
      value:
        "No quote before a discovery that produces the integration inventory and the tenancy model decision. Three things we are not: we do not hold client money, we are not a credit reference agency, and we do not transmit statutory filings or e-invoices on your behalf.",
    },
  ],
};

export const anchors = [
  { id: "who-this-is-for", label: "Is this us?" },
  { id: "sub-verticals", label: "What breaks for us?" },
  { id: "systems", label: "How does a tenancy change?" },
  { id: "compliance", label: "Which rules apply?" },
  { id: "what-goes-wrong", label: "What goes wrong?" },
  { id: "build-or-buy", label: "Build it or buy it?" },
  { id: "cost", label: "What does it cost?" },
];

export const operations = {
  title: "Where tenancy systems earn their keep",
  description:
    "The stages a tenancy moves through, and what we build at each one. In sequence, the stages are: Reference and approve, Agree and protect the deposit, Generate the charge schedule, Collect, chase and reconcile, Review, index or renew and Reconcile the service charge.",
  stages: [
    "Reference and approve",
    "Agree and protect the deposit",
    "Generate the charge schedule",
    "Collect, chase and reconcile",
    "Review, index or renew",
    "Reconcile the service charge",
  ],  image: {
    src: "/static/assets/industries/real-estate-proptech-operations-map.svg",
    alt: "Two band tenancy map covering referencing, deposit and the charge schedule, then collection, review and service charge.",
  },
};

export const segments = {
  title: "Who this is for",
  description:
    "Six positions we are usually called from, and the thing each one is missing. Not a fit: if you want your property management system replaced end to end inside a quarter, or a partner who will hold your client money or file your statutory returns for you, we are the wrong firm and would rather say so on the first call.",
  items: [
    {
      title: "Letting agents past the spreadsheet",
      line: "Growth took the portfolio past what a bundled package and a set of workbooks can hold together. What is missing is a client money position that can be produced per landlord for a past date, rather than a bank balance that reconciles today.",
    },
    {
      title: "Build to rent operators",
      line: "One owner, one building, thousands of agreements, and a system designed for a portfolio of individual landlords. What is missing is a resident account that carries several concurrent agreements and still produces one statement.",
    },
    {
      title: "Commercial landlords and asset managers",
      line: "Stepped rents, indexed reviews and break clauses live in the lease and are re-keyed as amounts into the system. What is missing is a charge schedule generated from the terms, so a review settled late produces its own backdated adjustment.",
    },
    {
      title: "Developers selling off plan",
      line: "Money arrives before the building exists, which makes it regulated money with a drawdown test attached. What is missing is receipting that separates what may be drawn from what may not, at the moment it lands rather than at reporting time.",
    },
    {
      title: "Facilities and building operations",
      line: "Maintenance runs as a ticket queue that closes jobs and answers nothing else. What is missing is the cost line that ties a work order to an asset, a unit and a service charge schedule at the same time.",
    },
    {
      title: "Owners associations and society boards",
      line: "Dues, sinking fund and special levies are three obligations held as one balance per owner. What is missing is a reserve position that can be evidenced on the date somebody asks about it, which is usually at the annual meeting.",
    },
  ],
};

export const subVerticals = {
  title: "Find your operation",
  description:
    "Real estate is one phrase for six businesses. What breaks is different in each, so what we build is different. This page covers: Residential lettings, Build to rent, Commercial leasing, Off plan development, Facilities operations and Owners associations. Find yours before reading the cost section.",
  items: [
    {
      title: "Residential lettings",
      breaks:
        "On 1 May 2026 the Renters' Rights Act 2025 converted existing assured and assured shorthold tenancies in England into assured periodic tenancies, and fixed terms ended with them. Every system whose renewal, notice and rent review logic keys off a tenancy end date lost its anchor on that date. Deposit handling carries its own arithmetic problem: the Tenant Fees Act 2019 caps a deposit at five weeks' rent where total annual rent is under £50,000 and six weeks at or above it, so the cap is a function of the rent rather than a constant.",
      build:
        "A tenancy model where periodic is the default shape and a fixed term is a property of a version rather than of the record. Notice grounds and their service dates held as first class objects, because the possession route is now the thing that has to be evidenced. Deposit validation driven by the annual rent band, with the protection scheme reference stored against the version that created the deposit.",
    },
    {
      title: "Build to rent",
      breaks:
        "A single owner running thousands of units at one address behaves nothing like a portfolio of individual landlords, and most systems were built for the second. Amenity, parking, storage and utility recharges are separate agreements against the same resident, so the balance a resident sees is assembled rather than held. Renewals arrive in waves rather than evenly, and a single cohort can move a whole building's occupancy inside a fortnight.",
      build:
        "A resident account that carries several concurrent agreements and produces one statement, so the tenant sees a balance rather than four. Cohort aware renewal pricing with expiry smoothing, so leases are staggered deliberately instead of clustering by accident. Turn cost tracked against the unit across tenancies rather than reset at each one, which is the only way a refurbishment decision has evidence behind it.",
    },
    {
      title: "Commercial leasing",
      breaks:
        "Commercial rent is a schedule, not an amount. Stepped increases, rent free periods, reviews indexed to a published series, open market reviews with a memorandum agreed months late and backdated, and break clauses conditional on vacant possession all sit inside the same agreement. The reconciliation nobody budgets for is the service charge: budget billed on account through the year, actual expenditure reconciled at year end, apportionment shifting when a unit splits, and base years and expense stops changing what is recoverable at all.",
      build:
        "A lease model that generates charges from terms rather than storing amounts, so a review agreed in November and effective from March produces the backdated adjustment as a computed result. Apportionment as a dated schedule rather than a percentage column. Reconciliation as a first class run producing a balancing charge or credit per tenant with a working attached, because a service charge dispute is nearly always a dispute about the working.",
    },
    {
      title: "Off plan development",
      breaks:
        "Money collected before a building exists is regulated money. In India section 4(2)(l)(D) of the Real Estate (Regulation and Development) Act, 2016 requires 70 percent of what is realised from allottees to sit in a separate account with a scheduled bank, usable only for construction and land cost, and section 3 prohibits advertising, marketing, sale or booking before the project is registered where the plot area exceeds 500 square metres or there are more than eight apartments. Dubai's Law No. 8 of 2007 does the same job differently, with a per project escrow account and five percent retained by the escrow agent after the completion certificate until a year from the registration of units to purchasers. A demand raised against a milestone that has not been certified is not an accounting error, it is a compliance one.",
      build:
        "A payment plan engine keyed to certified milestones rather than to dates, with the certification as the trigger and the demand as its consequence. Escrow aware receipting that separates drawable from non drawable money at the moment of receipt rather than at reporting time. Carpet area carried as the contractual figure everywhere it appears, because that is what the sale agreement is written on.",
    },
    {
      title: "Facilities operations",
      breaks:
        "Maintenance is modelled as a ticket queue almost everywhere, which answers whether a job is closed and nothing else. It cannot tell you what an asset has cost over its life, whether the spend was recoverable through the service charge, or whether a planned regime is running to frequency. In England the Building Safety Act 2022 added an occupation regime for higher-risk buildings, meaning at least 18 metres or at least seven storeys with at least two residential units, and that regime asks for evidence rather than for intentions.",
      build:
        "Work orders that post as costs against an asset, a unit and a service charge schedule at the same time, so recoverability is decided when the job is raised. Planned maintenance held as a frequency with a compliance position attached, so a missed inspection becomes visible before an audit finds it. A document store where the file, its version and the asset it describes are one object rather than three.",
    },
    {
      title: "Owners associations",
      breaks:
        "Dues, sinking fund contributions and special levies are three obligations with different legal treatment, and a system holding one balance per owner cannot keep them apart. Voting weight usually follows share of the common parts rather than one vote per unit, and it changes when a unit is subdivided. Reserve funds are held for the association rather than by the manager, which raises the same segregation question as client money and is answered far less often.",
      build:
        "Separate ledgers per obligation with one owner statement drawn across them, so a levy in arrears cannot silently absorb a sinking fund payment. Share of common parts as dated data driving both apportionment and voting weight. A reserve position that can be evidenced at any date, since that is the question an owner asks at the annual meeting and the one a manager is least often able to answer in the room.",
    },
  ],
};

export const systems = {
  title: "How a tenancy actually changes, and why the rent roll and the ledger are different objects",
  description:
    "A rent review agreed in November and effective from the previous March is not an edit. It creates an obligation that existed all along and was never billed, so the arrears position for six closed months changes retrospectively. A system that stores the current rent and stamps the change with today's date has already lost the fact that matters. Here is the estate we expect to meet, and the modelling decisions that determine whether any of it can produce a defensible answer.",
  groups: [
    {
      group: "Enterprise portfolio and asset management",
      body: "Yardi Voyager, MRI Software, RealPage and SAP RE-FX are where large residential and commercial portfolios consolidate. They are configurable rather than programmable, so the work is nearly always extension and integration, and the constraint that decides the plan is which extension points your specific version exposes rather than which ones the current release does.",
    },
    {
      group: "Mid market lettings and management",
      body: "AppFolio, Entrata, Buildium, Propertyware, Arthur, Reapit and Alto cover agencies and mid sized operators, usually bundling client accounting with property management. The bundling is the thing to check: an accounting module that cannot produce a per landlord position at an arbitrary past date is a reporting tool rather than a ledger.",
    },
    {
      group: "India, the Gulf and the association layer",
      body: "Sell.Do and Anarock sit on the developer sales side, with MyGate, ADDA and NoBrokerHood on the society and community side, and Tally and Zoho carrying the accounting underneath a great deal of it. Yardi and MRI both appear across the Gulf on institutional portfolios. The integration question here is rarely the API and nearly always which system is authoritative for the charge.",
    },
  ],
  distinction: {
    title: "The distinction that saves projects",
    body: "A property management system, a lettings CRM and a client accounting package are three products, and buying one does not give you the other two. Client money accounting in particular is a regulated ledger rather than a reporting module, and a package that shows a landlord balance on a dashboard is not the same thing as one that can prove that balance as it stood two years ago. Nearly every rescue we are called into traces back to a plan that assumed the core purchase covered the accounting, or that a CRM tracking applicants could also carry the tenancy. Read the licence and the data model before the roadmap is written, because the gap surfaces at exactly the point where there is no time left to close it.",
  },
  pairs: [
    {
      pair: "A tenancy record against a tenancy version",
      body: "One row per tenancy answers what the tenant pays now. It cannot answer what they were contractually due to pay in a month that has already closed, which is the only question an arrears dispute or a possession claim actually asks. Versioning is not an audit log kept beside the record, it is the record: the current state is the latest version rather than a separate thing held in step with one. Retrofit it later and you are reconstructing history from signed agreements and email, and the reconstruction is only ever as good as the filing was. Build it in and it costs more in the first month and less in every month after.",
    },
    {
      pair: "A rent roll against a rent ledger",
      body: "The rent roll is what the agreements say should happen: every charge that will fall due, computed from the terms. The ledger is what did happen: what was demanded, what was received, what was allocated and against which charge. Most systems derive the roll from the ledger, which makes the two agree by construction and destroys any ability to prove a discrepancy. Generate the roll from the lease terms independently and reconcile the two, and an unbilled review, a missed indexation or a misallocated receipt shows up as a difference instead of hiding inside a total that looks correct.",
    },
    {
      pair: "An estimated service charge against a reconciled one",
      body: "Tenants are billed on account against a budget through the year, and the year end reconciliation compares that to actual expenditure and produces a balancing charge or credit for each of them. Three things move underneath it: apportionment changes when a unit is split or a tenant expands, a base year or expense stop caps what is recoverable at all, and gross up provisions restate a partly occupied building as though it were full. A system storing one apportionment percentage per tenant cannot express any of the three, so the reconciliation gets done in a spreadsheet, and the spreadsheet quietly becomes the real system.",
    },
    {
      pair: "A fixed term against a periodic tenancy",
      body: "Until 1 May 2026 an English assured shorthold tenancy had a fixed term, and a great deal of software treated its end date as the anchor for renewals, rent reviews, notices and reporting. The Renters' Rights Act 2025 converted existing assured and assured shorthold tenancies to assured periodic tenancies on that date and ended fixed terms for them, so the anchor stopped existing. What replaces it is a notice mechanism with grounds, and grounds have to be evidenced. A schema where the end date is the spine of the tenancy lifecycle does not survive that change, and no amount of interface work repairs it.",
    },
  ],
};

export const compliance = {
  title: "Which rules apply to you",
  description:
    "Five standards a buyer in this sector asks for by name, then every regional instrument in one place. Statutory dates and caps move, so verify the regional row before contracting. Covered here: ISO/IEC 27001, SOC 1 and SOC 2, GDPR and UK GDPR, IFRS 16 and ASC 842, PCI DSS and Everything regional, in one place.",
  rows: [
    {
      item: "ISO/IEC 27001",
      detail:
        "The information security management certification procurement asks for by name. For property work the scope statement matters more than the certificate, because the question actually being asked is whether tenant, applicant and client account data sit inside the certified boundary or immediately next to it.",
    },
    {
      item: "SOC 1 and SOC 2",
      detail:
        "SOC 2 covers security and availability and is the standard ask from partners. SOC 1 covers controls feeding your customers' financial reporting, and in this sector it arrives early, because rent collected on a landlord's behalf and a service charge reconciled on a tenant's behalf both land in somebody else's accounts.",
    },
    {
      item: "GDPR and UK GDPR",
      detail:
        "Tenant referencing pulls credit and identity data about people who may never become tenants, so lawful basis and retention are decided per data category rather than per system. Erasure requests collide with statutory retention on deposits, notices and accounting records, and that collision is resolved by category rather than by deleting the row.",
    },
    {
      item: "IFRS 16 and ASC 842",
      detail:
        "Lease accounting moved leases onto the balance sheet as a right of use asset and a lease liability. IFRS 16 applies to annual reporting periods beginning on or after 1 January 2019, the same date for public and private entities. ASC 842 applies to public business entities for fiscal years beginning after 15 December 2018 and to private companies after 15 December 2021, and Ind AS 116 carries the same model in India. If your tenants are corporates, they need modification and remeasurement data out of your system rather than a copy of the lease.",
    },
    {
      item: "PCI DSS",
      detail:
        "It applies wherever card data touches rent, deposit or service charge collection, and the useful move is nearly always to keep it out of your estate entirely by tokenising at the gateway. Worth deciding deliberately, because a tenant portal that stores a card for convenience pulls the whole platform into scope.",
    },
    {
      item: "Everything regional, in one place",
      detail:
        "In England the Renters' Rights Act 2025 received Royal Assent on 27 October 2025 and commenced on 1 May 2026, abolishing section 21, converting existing assured and assured shorthold tenancies to assured periodic tenancies and ending fixed terms for them; a section 21 notice validly served by 30 April 2026 could still be taken to court for a possession order up to 31 July 2026, and serving one on or after 1 May 2026 risks a local authority civil penalty of up to £7,000. The Tenant Fees Act 2019, in force since 1 June 2019 and amended by the 2025 Act, caps a tenancy deposit at five weeks' rent where total annual rent is under £50,000 and six weeks at or above it, caps a holding deposit at one week's rent, caps a variation, assignment or transfer at £50 or reasonable costs if higher, and requires the deposit to be placed in a government backed scheme within 30 days. Minimum energy efficiency standards make EPC E the floor for letting in England and Wales, applied to new tenancies from 1 April 2018 and to existing tenancies from 1 April 2020, with F and G unlettable. The Building Safety Act 2022 defines a higher-risk building as at least 18 metres or at least seven storeys with at least two residential units, and its occupation regime took effect between October 2023 and April 2024. In India the Real Estate (Regulation and Development) Act, 2016 requires registration under section 3 where the plot area exceeds 500 square metres or there are more than eight apartments and prohibits advertising, marketing, sale or booking before it, requires 70 percent of amounts realised from allottees into a separate scheduled bank account under section 4(2)(l)(D) usable only for construction and land cost, requires sale on carpet area, and requires quarterly project updates. In Dubai, Law No. 8 of 2007 places off-plan purchaser and financier payments into a per project escrow account, with the escrow agent retaining five percent of the account value after the completion certificate and releasing it a year after the units are registered to purchasers, and tenancy contracts register through Ejari. In the United States section 615(a) of the Fair Credit Reporting Act requires an adverse action notice wherever a rental decision rests in any way on a consumer report, with the applicant given a copy of the report and a written summary of their rights before the decision is final.",
    },
  ],
};

export const whatGoesWrong = {
  title: "What goes wrong",
  description:
    "Ten failure modes with the counter-practice attached. Naming them is more useful than a list of reasons to pick us. It starts with: The tenancy is one row with an end date, The rent roll is derived from the ledger and Client money sits in one pooled balance.",
  items: [
    {
      title: "The tenancy is one row with an end date",
      line: "It answers today and nothing else, so a disputed arrears figure from eighteen months ago has to be argued out of paperwork. Model the tenancy as a versioned agreement from the first sprint, because introducing effective dating underneath a live rent ledger is the most expensive change on this page.",
    },
    {
      title: "The rent roll is derived from the ledger",
      line: "Deriving one from the other makes them agree by construction, which is precisely when they stop being a check on each other. Compute the roll from the lease terms and reconcile it against the ledger, so an unbilled review surfaces as a difference rather than disappearing into a total.",
    },
    {
      title: "Client money sits in one pooled balance",
      line: "A pooled figure tells you the bank agrees and nothing about whom the money belongs to. Keep a per landlord and per property position that can be produced for any past date, since that is the form the question always takes when it is finally asked.",
    },
    {
      title: "Apportionment is a percentage column",
      line: "One percentage per tenant cannot survive a unit being split, a tenant expanding mid year, or a gross up provision. Hold apportionment as a dated schedule and let the reconciliation read it as at each charge period.",
    },
    {
      title: "Deposit caps are hardcoded",
      line: "Five weeks is not the rule, it is one branch of it, and a tenancy at or above £50,000 of annual rent takes six. Drive the validation from the annual rent band and keep the rule as configuration, because caps get amended far more often than schemas get rewritten.",
    },
    {
      title: "Arrears are computed from payments",
      line: "Starting from what was received tells you the balance moved, not whether the tenant owed it. Compute arrears from the charge schedule, so an unraised demand and an unpaid one are visibly different states instead of the same number.",
    },
    {
      title: "Rent reviews live in a reminder",
      line: "A calendar entry produces a task, not an obligation, so a review settled late leaves months of correct billing that never happened. Make the review a scheduled event on the lease that generates its own backdated adjustment when it settles.",
    },
    {
      title: "Documents are generated then edited",
      line: "The moment an agreement is exported and amended in a word processor, the signed version and the system disagree, and the system is the one that is wrong. Generate from the version, store the executed copy against it, and treat any edit outside that loop as a new version.",
    },
    {
      title: "Maintenance is a ticket queue",
      line: "Closing a job says nothing about what an asset has cost over its life or whether the spend was recoverable. Post work orders as costs against the asset, the unit and the service charge schedule at once, and settle recoverability when the job is raised rather than at year end.",
    },
    {
      title: "Migration is signed off on totals",
      line: "Matching the rent roll total on cutover day proves the sum and not the schedule underneath it. Replay the charge schedule per tenancy across a full past year and compare it charge by charge, because a compensating pair of errors will always agree at the total.",
    },
  ],
};

export const buildOrBuy = {
  title: "Build, buy, or buy the core and build the edge",
  description:
    "The honest answer is usually the third one. Three judgements sit outside this table because they are not ours to make: we do not hold client money, we are not a credit reference agency, and we are not an accredited service provider for e-invoicing or statutory filing.",
  rows: [
    {
      option: "Core property management and accounting",
      best: "Buy",
      verdict:
        "Decades of edge cases in tenancy, charge and ledger handling are already inside these products. Building one is somebody else's bug reports that you have not read yet.",
    },
    {
      option: "Client money and trust accounting",
      best: "Buy",
      verdict:
        "A regulated ledger with audit expectations attached. Use an established one and integrate to it, because the failure mode here is not a bug, it is a finding.",
    },
    {
      option: "Lease and charge schedule engine",
      best: "Build",
      verdict:
        "This is where the commercial difference lives. Off the shelf engines handle a monthly rent and a fixed uplift; they do not handle stepped, indexed, backdated and conditional terms, and that is the part your operation actually runs on.",
    },
    {
      option: "Service charge reconciliation",
      best: "Buy the core, build the edge",
      verdict:
        "Buy the general ledger, build the apportionment schedule, the gross up and the balancing run. The accounting is commodity; the recoverability logic is not, and it is what a tenant disputes.",
    },
    {
      option: "Tenant, owner and landlord portals",
      best: "Build",
      verdict:
        "Bundled portals are built for the vendor's data model rather than yours, and this is the surface your customers actually touch. Building it is bounded work with a visible return.",
    },
    {
      option: "Applicant referencing and credit checks",
      best: "Buy",
      verdict:
        "Consumer reporting is a regulated activity with its own notice obligations attached. We are not a credit reference agency and neither should your platform try to be one; integrate a provider and handle the adverse action path properly.",
    },
    {
      option: "Payments, mandates and reconciliation",
      best: "Buy",
      verdict:
        "Mandates, card tokenisation and payout rails are solved, audited and cheaper than the compliance surface of owning them. Build the allocation logic on top instead.",
    },
    {
      option: "E-invoicing and statutory transmission",
      best: "Buy",
      verdict:
        "Only an accredited service provider may transmit, so this is not a build decision at all. Establish who yours is before the plan depends on the date.",
    },
    {
      option: "Document generation and e-signature",
      best: "Buy the core, build the edge",
      verdict:
        "Buy the signature and storage layer, then generate from the tenancy version so the document and the record cannot drift apart.",
    },
    {
      option: "Listings distribution to portals",
      best: "Buy",
      verdict:
        "Portal feeds are a distribution problem with established specifications and established providers behind them. Nothing about your portfolio makes your feed special enough to justify owning it.",
    },
    {
      option: "Building management and metering integration",
      best: "Buy the core",
      verdict:
        "Buy the building management system and the metering, then build the interface that turns readings into recoverable charges, which is the part no vendor ships against your schedule.",
    },
  ],
};

export const cost = {
  title: "What real estate software development costs, with the arithmetic shown",
  description:
    "Every competitor publishes a total with no hours behind it. Here is the rate, the hours and the multiplication, so you can argue with any line. The scope priced here is a managing agent or operator keeping its accounting core and taking tenancy, charges and service charge in house.",
  drivers: [
    {
      driver: "How many charge types, and how variable",
      hours: "High impact",
      note: "A monthly rent with an annual uplift is a different engine from stepped, indexed and conditionally reviewed commercial terms, and the difference lands in the schedule generator rather than in the interface.",
    },
    {
      driver: "Whether the tenancy model already versions",
      hours: "The largest swing",
      note: "If it does, this is integration work. If it does not, effective dating has to be introduced underneath a live rent ledger, and nothing on this page costs more to add late.",
    },
    {
      driver: "Whether service charge is in scope",
      hours: "Adds real scope",
      note: "Apportionment schedules, base years, expense stops and gross up provisions are a second model rather than a report on the first one.",
    },
    {
      driver: "Which core you keep, and what it exposes",
      hours: "80 to 200 each",
      note: "Vendor API surface at your specific version, not at the version in the current documentation. This is the most common source of a mid-build surprise.",
    },
    {
      driver: "How client money is currently held",
      hours: "180 to 300",
      note: "Building a per landlord position is bounded work. Reconstructing one out of a pooled history is not bounded, and is sometimes not possible at all.",
    },
    {
      driver: "How many jurisdictions, and which notices",
      hours: "Medium",
      note: "One is a section of work. Three is a programme with its own rules model, and it stays affordable only if the notice and cap logic was kept out of the transaction path.",
    },
    {
      driver: "How many live tenancies migrate",
      hours: "Rarely small",
      note: "Replay testing scales with the variety of the terms rather than with the number of tenancies, so a small commercial portfolio can cost more than a large residential one.",
    },
  ],
  modules: [
    { module: "Tenancy and lease model with versioning and effective dating", hours: "200 to 340" },
    { module: "Charge schedule, indexation and rent review engine", hours: "160 to 280" },
    { module: "Client money ledger and reconciliation", hours: "180 to 300" },
    { module: "Service charge budgeting and annual reconciliation", hours: "160 to 280" },
    { module: "Arrears, notices and possession workflow", hours: "120 to 220" },
    { module: "Integrations: accounting core, payments, referencing, portals", hours: "180 to 320" },
    { module: "Portals, reporting and the audit trail", hours: "140 to 240" },
  ],
  math: {
    title: "Phase one, added up",
    points: [
      "Tenancy model 240 plus charge schedule 200 plus client money ledger 220 plus service charge 190 plus arrears and notices 150 plus integrations 210 plus portals and reporting 170 equals 1,380 hours. Every one of the seven sits inside its own published range above, so you can move any line and see what it does to the total.",
      "At $40 per hour that is $55,200. At $100 per hour it is $138,000. At a $65 blended rate, about $89,700. The full span across the seven modules is 1,140 hours at every minimum to 1,980 at every maximum.",
      "Outside that number, with their ranges intact: quality assurance at 20 to 25 percent of build, environments and deployment at 80 to 160, security review and penetration testing at 60 to 120, lease accounting output for IFRS 16 or ASC 842 at 120 to 240, building systems and metering integration at 100 to 220, and portal distribution at 60 to 120. The last three are usually phase two, and they are listed rather than dropped because this page argues for all of them.",
    ],
  },
};

export const costHighlights = [
  {
    label: "Phase one range",
    value: "$55,200 to $138,000",
    note: "The 1,380 hour worked example at the ends of the rate band, about $89,700 at a $65 blend.",
  },
  {
    label: "Typical timeline",
    value: "16 to 24 weeks",
    note: "As a squad. A statutory commencement date inside the window compresses scope rather than the calendar.",
  },
  {
    label: "Useful hours",
    value: "1,140 to 1,980",
    note: "Every module at its minimum, through to every module at its maximum.",
  },
];

export const engagement = {
  title: "Engagement models",
  description:
    "Four models for real estate software development, each with the downside stated in the same breath. Those four are: Fixed scope phase one, Dedicated squad, monthly, Portfolio migration and cutover and Legislative change window. Pick by how settled the scope actually is, not by preference.",
  items: [
    {
      title: "Fixed scope phase one",
      good: "A defined scope, a fixed number and a date. It works best after discovery has produced the integration inventory and the tenancy model decision, because that is the point at which scope is genuinely knowable.",
      bad: "Change costs more than it would hourly, and property scope moves whenever a statute does, which is not something either of us controls.",
    },
    {
      title: "Dedicated squad, monthly",
      good: "A standing team that keeps the domain knowledge in the room, billed on time and materials so you pay for work actually done. Long integration and migration work suits this shape.",
      bad: "You carry the utilisation risk, and a quiet month still costs a month. We will tell you when there is not enough work to justify it.",
    },
    {
      title: "Portfolio migration and cutover",
      good: "Scoped to moving between systems, priced on the variety of your lease terms rather than on tenancy count, with charge replay testing built into the plan rather than bolted on at the end.",
      bad: "Discovery is unusually long here, and it can conclude that your migration is larger than you were hoping to hear.",
    },
    {
      title: "Legislative change window",
      good: "Capacity held for changes you do not control, with the statutory work already understood, so a commencement date is a piece of planned work rather than a scramble.",
      bad: "You are paying for availability, and in a quarter where nothing commences that feels a lot like paying for nothing.",
    },
  ],
  recommendation:
    "What we usually suggest: a fixed scope phase one covering the tenancy model and the charge schedule, moving to a dedicated squad once service charge or a second jurisdiction has proved the model holds.",
};

export const delivery = {
  title: "How we deliver real estate software development",
  description:
    "Five phases, each named by the artifact it produces rather than by a stage in a generic waterfall. Those phases are: Tenancy decision record, Charge model specification, Client money control map, Charge replay test pack and Adoption and evidence pack.",
  items: [
    {
      phase: "Tenancy decision record",
      line: "How the tenancy handles time, decided and written down before anything is built on top of it. What is versioned, what is not, and why each call was made. Every later argument resolves against this document.",
    },
    {
      phase: "Charge model specification",
      line: "Every charge type your agreements can produce, with its trigger, its arithmetic, its backdating behaviour and its tax treatment. Written before the engine, because this document is the engine's test suite.",
    },
    {
      phase: "Client money control map",
      line: "Where money sits at each step, whom it belongs to, which movements are permitted and how a per landlord position is proved at a past date. Agreed with whoever signs your accounts rather than shown to them afterwards.",
    },
    {
      phase: "Charge replay test pack",
      line: "A full past year replayed per tenancy against the new model and compared charge by charge, with the differences explained rather than netted off. Totals are not the test.",
    },
    {
      phase: "Adoption and evidence pack",
      line: "The runbooks, control documentation and reporting extracts your operations team and your auditor will ask for, produced as part of the build rather than assembled afterwards under time pressure.",
    },
  ],
};

export const nonFunctional = {
  title: "The technical buyer's checklist",
  description:
    "Copy this and run it against us, or against anyone else quoting for real estate software development. Three groups cover: Time, history and replay, Money, separation and proof and Change, evidence and scope. Copy any line straight into your own requirements document.",
  groups: [
    {
      group: "Time, history and replay",
      body: "Can the system return a tenancy as it stood on an arbitrary past date, as a query rather than a reconstruction? Can it produce the charge schedule that applied in a closed period, so an arrears figure can be defended line by line? Can a service charge reconciliation be re-run against the apportionment that was live at the time rather than the one in force now?",
    },
    {
      group: "Money, separation and proof",
      body: "Can a per landlord and per property client money position be produced for any past date, not only for today? Are dues, sinking fund and levy balances held as separate obligations rather than netted into one? Is every receipt allocated to a specific charge, so an unallocated payment is a visible state rather than a rounding difference?",
    },
    {
      group: "Change, evidence and scope",
      body: "Are statutory caps, notice periods and grounds held as configuration with effective dates, so a commencement date is a data change rather than a release? Is the audit trail append only and exportable in a form an auditor will accept? And confirm the boundary: we do not hold client money, we are not a credit reference agency, and we do not transmit statutory filings or e-invoices for you, so establish who does before the plan depends on it.",
    },
  ],
};

export const faqs = [
  {
    question: "What does a phase one cost, how many hours, and how long does it take?",
    answer:
      "The worked example is 1,380 hours, which is $55,200 to $138,000 across our $40 to $100 rate band and about $89,700 at a $65 blend, landing in 16 to 24 weeks with a squad. The module ranges sum to 1,140 to 1,980 hours, so a smaller or larger phase one is a question of which modules are in it. We do not quote a fixed number before a discovery that produces the integration inventory.",
  },
  {
    question: "Who owns the code, the data and the accounts?",
    answer:
      "You do, all three, from the first commit. Repositories, cloud accounts, domains and third party service accounts are in your name or transferred to it at handover. What transfers alongside them is the tenancy decision record and the charge model specification, which is the part that makes the code readable by whoever comes after us.",
  },
  {
    question: "Why is versioning the tenancy such a big deal?",
    answer:
      "Because arrears, possession and service charge disputes are all arguments about a past period. A system holding one current row per tenancy can tell you what is payable today and cannot defend a figure from eighteen months ago. Building it in costs more in the first month and less in every month after, and retrofitting it means reconstructing history out of signed agreements.",
  },
  {
    question: "What changed on 1 May 2026, and what does it mean for our system?",
    answer:
      "The Renters' Rights Act 2025 commenced in England. Existing assured and assured shorthold tenancies converted automatically to assured periodic tenancies, fixed terms ended for them, and section 21 was abolished. In software terms the tenancy end date stopped being a reliable anchor for renewals, reviews, notices and reporting, and what replaces it is a notice mechanism with grounds that have to be evidenced. If your schema treats that end date as the spine of the tenancy lifecycle, that is the work.",
  },
  {
    question: "Can you work with our existing Yardi or MRI installation?",
    answer:
      "Yes, and that is the more common shape of this work. The first question is which extension points your specific version supports, because vendor documentation describes the current release and you may not be on it. We would much rather find that out in discovery than in build.",
  },
  {
    question: "You have no property clients on this page. Why should we take you seriously?",
    answer:
      "Because we would rather say that than borrow a client from another sector and call it property experience. What is on this page instead is the modelling, the statute and the arithmetic, all of which you can check without trusting us. The code, decision records and specifications are yours from the first commit, which is the part that holds whether or not we turn out to be a fit.",
  },
  {
    question: "Can you build our client accounting?",
    answer:
      "We integrate to it rather than replacing it. Client money is a regulated ledger with audit expectations attached, and the sensible build is an established accounting core with the allocation, apportionment and reporting logic on top of it. We do not hold client money, and we do not want the platform to be the thing that decides whether your audit passes.",
  },
  {
    question: "How do you handle a rent review agreed months after it took effect?",
    answer:
      "As a computed backdated adjustment rather than a manual correction. The review is a scheduled event on the lease, and when it settles the engine regenerates the charges for every affected period and posts the difference. The arrears position for those months is then right, and there is a working behind it that the tenant can be shown.",
  },
  {
    question: "Do you build property portals and listing apps?",
    answer:
      "Not on this page. Listings and marketplace work is a different product with a different reader, and it lives on our classified app development page. This page is the operator's side: tenancy, charges, client money, service charge and building operations. Where portal distribution is needed we integrate an existing feed rather than building one.",
  },
  {
    question: "How long does migrating our live tenancies take, and how do you prove it worked?",
    answer:
      "It depends on the variety of your lease terms rather than on how many tenancies you have, which is why a small commercial portfolio often costs more than a large residential one. The proof is a charge replay: a full past year regenerated per tenancy under the new model and compared charge by charge against what was actually billed. Matching totals is not the test, because a compensating pair of errors will always agree at the total.",
  },
  {
    question: "Do you cover India RERA and Dubai escrow projects?",
    answer:
      "Yes, and the escrow mechanics are the part to scope carefully. Under section 4(2)(l)(D) of RERA, 70 percent of what is realised from allottees goes into a separate scheduled bank account usable only for construction and land cost, and Dubai's Law No. 8 of 2007 uses a per project escrow account with five percent retained by the escrow agent until a year after the units are registered to purchasers. In software that means receipting which separates drawable from non drawable money as it arrives, and demands keyed to certified milestones rather than to dates. We build to those rules; we are not the accredited party that transmits your filings.",
  },
];

export const nextSteps = {
  title: "What happens next",
  description:
    "Four steps with a shape attached to each, so booking a call is a known quantity.",
  items: [
    {
      step: "A 30 minute technical call",
      line: "Bring how your tenancy record handles time, and one arrears figure you had to defend. Those two answers size the project faster than an hour of description would.",
    },
    {
      step: "The versioning question",
      line: "We establish whether your tenancy record can reproduce a past state, and what it currently costs you when it cannot. The answer usually explains most of the symptoms you called about.",
    },
    {
      step: "A costed phase one",
      line: "Module by module against the ranges published on this page, with anything excluded named as excluded. If your core already does most of it, the document says so.",
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
          note: "The versioned tenancy store and the charge ledger",
        },
        {
          label: "Web development",
          href: "/services/web-development",
          note: "Tenant, owner and landlord portals",
        },
        {
          label: "Mobile app development",
          href: "/services/mobile-app-development",
          note: "Inspection, works and resident apps",
        },
      ],
    },
    {
      group: "Adjacent capabilities",
      links: [
        {
          label: "AI document management",
          href: "/services/ai-document-management-system",
          note: "Lease abstraction and document control",
        },
        {
          label: "AI workflow automation",
          href: "/services/ai-workflow-automation-services",
          note: "Arrears chasing and works routing",
        },
        {
          label: "Classified app development",
          href: "/solutions/classified-app-development",
          note: "Listings and marketplace, the other side of this line",
        },
      ],
    },
    {
      group: "Other sectors",
      links: [
        {
          label: "Professional services",
          href: "/industries/professional-services-software-development",
          note: "Client money rules and the billing behind them",
        },
        {
          label: "Energy and utilities",
          href: "/industries/energy-software-development",
          note: "Service charge, submetering and recharge",
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
    title: "Bring the tenancy model question, not the feature list",
    description:
      "The most useful hour of a first call is usually spent on how your tenancy record handles time. Almost everything else on this page follows from that one answer, including the cost.",
    ctaText: "Book a 30 minute technical call",
  },
  end: {
    title: "Start with the tenancy model",
    description:
      "Bring your current tenancy record and one arrears figure you had to defend. Thirty minutes on those two usually tells both of us whether this is a fit, and you leave with the hours either way.",
    ctaText: "Book a 30 minute technical call",
  },
};

export const relatedPosts = [
  "chat-with-your-documents",
  "ai-agents-for-business",
  "ai-copilots-for-business",
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
      "Document, automation and cost work that applies directly to tenancy and property systems.",
  },
};
