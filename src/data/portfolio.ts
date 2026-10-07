import { StaticImageData } from "next/image";

const krooloImage = "/static/assets/portfolio/kroolo.webp";
const alAmriExpressImage = "/static/assets/portfolio/al-amri-express.webp";
const alAmriExpressPartnerImage = "/static/assets/portfolio/al-amri-express-partner.webp";
const famepilotImage = "/static/assets/portfolio/famepilot.webp";
const g4girlImage = "/static/assets/portfolio/g4girl.webp";
const stylebankImage = "/static/assets/portfolio/stylebank.webp";
const banksathiImage = "/static/assets/portfolio/banksathi.webp";
const icarehealImage = "/static/assets/portfolio/icare-heal.webp";
const getmyuniImage = "/static/assets/portfolio/getmyuni.webp";
const tvamImage = "/static/assets/portfolio/tvam-app.webp";
const ndcImage = "/static/assets/portfolio/ndc.webp";
const doradoriImage = "/static/assets/portfolio/dora-dori.webp";
const cheersagarImage = "/static/assets/portfolio/cheersagar.webp";
const krooloLogo = "/static/assets/portfolio/logo/kroolo.svg";
const alAmriExpressLogo = "/static/assets/portfolio/logo/al-amri-express.svg";
const famepilotLogo = "/static/assets/portfolio/logo/famepilot.svg";
const g4girlLogo = "/static/assets/portfolio/logo/g4girl.svg";
const stylebankLogo = "/static/assets/portfolio/logo/stylebank.svg";
const banksathiLogo = "/static/assets/portfolio/logo/banksathi.svg";
const icarehealLogo = "/static/assets/portfolio/logo/icare-heal.svg";
const getmyuniLogo = "/static/assets/portfolio/logo/getmyuni.svg";
const tvamLogo = "/static/assets/portfolio/logo/tvam.svg";
const ndcLogo = "/static/assets/portfolio/logo/ndc.svg";
const doradoriLogo = "/static/assets/home/partnerLogos/doradori.webp";
const cheersagarLogo = "/static/assets/home/partnerLogos/cheersagar.svg";
export interface Project {
  id: string;
  logo: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  category: string;
  country: string;
  platforms: {
    webApp?: string;
    androidApp?: string;
    iosApp?: string;
  };
  techStack: string[];
  featured?: boolean;
  caseStudySlug?: string;
}

export const projects: Project[] = [
  {
    id: "kroolo",
    caseStudySlug: "ai-work-os-platform-kroolo",
    logo: krooloLogo,
    title: "Kroolo: AI Work Operating System (WorkOS)",
    description:
      "An AI work operating system built as a single workspace over projects, tasks, goals and documents. The engineering problem was putting AI inside the product rather than beside it: retrieval scoped per tenant so nothing leaks between workspaces, agent actions that stay inside a user's own permissions and leave an audit trail, and model cost per active user treated as a unit economics constraint rather than an afterthought. Shipped on web, Android and iOS on a React, Next.js, Node and Python stack, containerised and orchestrated.",
    image: krooloImage,
    category: "AI Platform",
    country: "Global",
    platforms: {
      webApp: "https://kroolo.com",
      androidApp:
        "https://play.google.com/store/apps/details?id=com.kroolo.app",
      iosApp: "https://apps.apple.com/in/app/kroolo/id6740263578",
    },
    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "MongoDB",
      "GenAI",
      "Docker",
      "Kubernetes",
    ],
    featured: true,
  },
  {
    id: "al-amri-express",
    caseStudySlug: "grocery-delivery-oman-al-amri-express",
    logo: alAmriExpressLogo,
    title: "Al Amri Express: Online Grocery & Daily Essentials Delivery",
    description:
      "Oman's grocery and daily essentials delivery service, built as a customer app on iOS and Android. The hard parts were local. Oman has no location based postcode, so a pin drop is the primary key and the landmark a customer types is a field the rider reads verbatim. Arabic and English share one interface, where mixed text reorders at render time unless it is handled deliberately. Order state is pushed over websockets rather than polled, and catalogue search runs on Elasticsearch so a query in either language returns the same shelf.",
    image: alAmriExpressImage,
    category: "E-Commerce",
    country: "Oman",
    platforms: {
      androidApp:
        "https://play.google.com/store/apps/details?id=com.al_amriexpress",
      iosApp: "https://apps.apple.com/om/app/al-amri-express/id6450395418",
    },
    techStack: [
      "React Native",
      "Laravel",
      "Elasticsearch",
      "MySQL",
      "AWS",
      "Websocket",
    ],
    featured: true,
  },
  {
    id: "al-amri-express-partner",
    caseStudySlug: "grocery-delivery-oman-al-amri-express",
    logo: alAmriExpressLogo,
    title: "Al Amri Express Partner App",
    description:
      "The operations app behind the Al Amri Express storefront, used by warehouse and delivery staff rather than customers. Orders move through picking, packing and ready for dispatch, with access separated across admin, packer and delivery roles so people see only what their role covers. It was built as a separate application rather than a mode inside the consumer app, because the two audiences share almost no screens and release on very different cadences. Staff assignment, dispatch tracking and notifications on state change close the loop back to the customer.",
    image: alAmriExpressPartnerImage,
    category: "Operations",
    country: "Oman",
    platforms: {
      androidApp: "https://play.google.com/store/apps/details?id=com.alamridelivery&hl=en_IN",
    },
    techStack: [
      "React Native",
      "Laravel",
      "MySQL",
      "AWS",
      "Websocket",
      "Push Notifications",
    ],
    featured: false,
  },
  {
    id: "famepilot",
    caseStudySlug: "multi-location-reputation-management-famepilot",
    logo: famepilotLogo,
    title: "Famepilot: AI-Driven Reputation Management Platform",
    description:
      "A reputation platform that pulls reviews from more than twenty five sources into one dashboard, classifies sentiment and drafts replies. The difficulty is the ingestion rather than the dashboard. Every platform has its own API, rate limit, schema and edit semantics, and reviews get edited or deleted after the fact, so a naive sync drifts out of agreement with the source. Sentiment on short review text is harder than it looks, because a single review often carries two opinions. Built on React, Django and PostgreSQL, with infrastructure described in Terraform.",
    image: famepilotImage,
    category: "SaaS",
    country: "Global",
    platforms: {
      webApp: "https://famepilot.com",
    },
    techStack: [
      "React",
      "Python/Django",
      "PostgreSQL",
      "App Integrations",
      "CI/CD Pipeline",
      "Terraform",
    ],
    featured: true,
  },
  {
    id: "ndc",
    caseStudySlug: "fmcg-distribution-oman-ndc",
    logo: ndcLogo,
    title: "National Distribution Company (NDC): Enterprise FMCG Distribution Platform",
    description:
      "The digital platform for a national FMCG distributor in Oman, covering product catalogue, brand partnerships, media delivery and buyer enquiry. A distributor's catalogue is a different object from an ecommerce catalogue: there is no cart, the buyer is a trade buyer, and the job is discovery and enquiry rather than checkout. The client's own scale set what the content model had to hold, with over four hundred products and brand partnerships spanning more than twenty countries. Built on Next.js and TypeScript with a CMS and media management behind it.",
    image: ndcImage,
    category: "Enterprise Distribution Platform",
    country: "Oman",
    platforms: {
      webApp: "https://ndcmuscat.com",
    },
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "CMS",
      "SEO Optimization",
      "Media Management",
      "Product Catalog System",
      "Analytics",
      "Cloud Hosting",
    ],
    featured: true,
  },
  {
    id: "tvam",
    caseStudySlug: "vedic-astrology-app-tvam",
    logo: tvamLogo,
    title: "Tvam: Intelligent Vedic Astrology Platform",
    description:
      "A Vedic astrology and numerology platform on iOS, Android and web. Most of the engineering here is arithmetic rather than interpretation. Planetary positions come from an ephemeris and need timezone history, ayanamsa correction and precise coordinates before a chart can be drawn, and minutes of error in a birth time reorder the houses. The North and South Indian chart conventions disagree about geometry rather than content, so one data model feeds two separate renderers. Dasha periods are computed as a nested timeline, which is what makes change notifications possible.",
    image: tvamImage,
    category: "Astrology",
    country: "India",
    platforms: {
      webApp: "https://tvam.app/",
      androidApp:
        "https://play.google.com/store/apps/details?id=app.tvam.astrology",
      iosApp:
        "https://apps.apple.com/us/app/tvam-vedic-astrology-kundli/id1449579147",
    },
    techStack: [
      "Swift",
      "Java",
      "PHP",
      "MySQL",
      "Android/iOS/Native",
      "Kotlin",
    ],
    featured: false,
  },
  {
    id: "g4girl",
    caseStudySlug: "fashion-ecommerce-india-g4girl",
    logo: g4girlLogo,
    title: "G4Girl: Modern Women's Fashion E-Commerce",
    description:
      "A direct to consumer fashion storefront for the Indian market, selling nightwear, kurta sets and outerwear to individual and wholesale buyers. Apparel makes ecommerce harder than it first appears. Returns are fit driven and usually want an exchange rather than a refund, cash on delivery puts return to origin costs on every failed delivery, and a size and colour matrix does not fit a flat variant model. Page speed decides conversion on mobile first traffic. Built on WordPress and PHP with MySQL and AWS behind it, and Sentry for error tracking.",
    image: g4girlImage,
    category: "E-Commerce",
    country: "India",
    platforms: {
      webApp: "https://g4girl.in",
    },
    techStack: ["WordPress", "PHP", "MySQL", "AWS", "Sentry"],
    featured: false,
  },
  {
    id: "stylebank",
    caseStudySlug: "multi-tenant-apparel-platform-stylebank",
    logo: stylebankLogo,
    title: "Stylebank: B2B Digital Catalog & Sales Enablement Platform",
    description:
      "A multi-tenant operations platform for a group of apparel businesses, each running on its own database, storage bucket and queue namespace so no two tenants share a namespace. It reconciles what several systems disagree about: marketplace orders and returns, factory production and costing, item and fabric stock, and accounting. Replenishment planning then runs against the reconciled view, split between wholesale and ecommerce because the two plan differently. Around thirty five scheduled jobs move the data, an analytics warehouse holds the reporting copy, and a language model produces a per style read on top.",
    image: stylebankImage,
    category: "B2B SaaS",
    country: "Global",
    platforms: {
      webApp: "https://stylebank.io",
    },
    techStack: [
      "Python",
      "Django",
      "MySQL",
      "Redis",
      "Celery",
      "Google BigQuery",
      "OpenRouter",
      "AWS",
      "App Integrations",
    ],
    featured: false,
  },
  {
    id: "getmyuni",
    logo: getmyuniLogo,
    title: "GetMyUni: India's Leading College Discovery Platform",
    description:
      'GetMyUni is India\'s leading college discovery platform backed by Times Internet and now part of CollegeDekho Group, serving over 40 million students annually and driving 10,000+ enrollments across 200+ universities. The platform consolidates comprehensive college data including courses, fees, placement records, entrance exam details, cutoffs, and authentic student-generated reviews - enabling students to compare institutions and make informed decisions in one centralized place. Key features include student ratings and reviews functioning as a "TripAdvisor for colleges," real-time exam alerts and admission notifications, mock test resources for competitive exams like XAT and GSET, scholarship information, campus infrastructure insights, and detailed placement statistics. Beyond serving prospective students, GetMyUni provides colleges with cost-effective recruitment solutions and analytics-driven enrollment optimization, creating a comprehensive ecosystem for higher education discovery, streamlined admissions, and intelligent career planning.',
    image: getmyuniImage,
    category: "Edtech",
    country: "India",
    platforms: {
      webApp: "https://getmyuni.com",
    },
    techStack: ["PHP", "Yii", "PostgreSQL", "Paytm", "Meilisearch"],
    featured: false,
  },
  {
    id: "banksathi",
    logo: banksathiLogo,
    title:
      "BankSathi: Fintech Platform for Financial Access & Income Generation",
    description:
      "A financial products platform for the Indian market, where users compare and apply for credit cards, savings accounts, loans, insurance and investments across multiple providers. Its distinctive part is the advisor layer: users can earn commission by recommending products, which turns a comparison site into a two sided system with its own onboarding, training and payout logic. Regulated financial products bring their own constraints around data handling and auditability. Built on Next.js and Node with PostgreSQL, infrastructure in Terraform, and Grafana and Prometheus for observability.",
    image: banksathiImage,
    category: "Fintech",
    country: "India",
    platforms: {
      webApp: "https://banksathi.com",
      androidApp:
        "https://play.google.com/store/apps/details?id=com.app.banksathi&pcampaignid=web_share",
    },
    techStack: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Terraform",
      "Grafana",
      "Prometheus",
    ],
    featured: false,
  },
  {
    id: "icareheal",
    logo: icarehealLogo,
    title: "iCareHeal: Comprehensive Health-Tech Practice Management Platform",
    description:
      "A practice management platform for clinics and independent practitioners, covering appointment scheduling with automated reminders, telemedicine consultations, electronic health records and secure patient messaging. Around the clinical side sits the practice's digital presence: websites, Google Business Profiles, reputation and analytics. Health software carries constraints most products do not, because patient records set the bar for access control, audit and retention from the first sprint rather than in a later hardening pass. Built with Flutter and Dart on mobile, SolidJS on the web, and Flask with MongoDB behind them.",
    image: icarehealImage,
    category: "Health-Tech",
    country: "Global",
    platforms: {
      webApp: "https://icareheal.com",
      androidApp:
        "https://play.google.com/store/apps/details?id=com.icarehealclinic",
      iosApp: "https://apps.apple.com/in/app/icareheal-doctor/id1644582274",
    },
    techStack: [
      "HTML",
      "TailwindCSS",
      "Flutter",
      "Dart",
      "SolidJS",
      "Flask",
      "MongoDB",
    ],
    featured: false,
  },
  {
    id: "doradori",
    caseStudySlug: "garment-erp-doradori",
    logo: doradoriLogo,
    title: "DoraDori: Garment ERP and Apparel Costing",
    description:
      "A garment ERP built as its own service on FastAPI and PostgreSQL, integrated with Zoho for accounting and the client's internal CRM for commercial records. Apparel does not fit a flat item master: a style carries the bill of materials and cost sheet, the colourway is what merchandisers plan at, and only style, colour and size physically exists to be counted. Two reads carry most of the integration surface and are consumed by systems outside the ERP: item summary, joining bill of materials to stock across those levels, and fabric stock valuation, which treats fabric as money rather than metres. Three years on dedicated resources.",
    image: doradoriImage,
    category: "ERP",
    country: "India",
    platforms: {},
    techStack: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Zoho Integration",
      "CRM Integration",
    ],
    featured: false,
  },
  {
    id: "cheersagar",
    caseStudySlug: "garment-accounting-reporting-cheersagar",
    logo: cheersagarLogo,
    title: "Cheersagar: Garment Accounting, Reporting and Decision Support",
    description:
      "The layer between a garment business's books and its customer records, built on FastAPI and PostgreSQL. Zoho stays the book of record and the platform never posts a primary entry; an internal CRM supplies the commercial context that accounting rows do not explain. Both land in one reporting schema and join there, so a question crossing the two stops being a spreadsheet export. On top sits an AI layer under a deliberate constraint: every figure is computed before the model runs, and the model writes the read on a number it never produced. Three years on dedicated resources.",
    image: cheersagarImage,
    category: "ERP",
    country: "India",
    platforms: {},
    techStack: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Zoho Integration",
      "CRM Integration",
    ],
    featured: false,
  },
];
