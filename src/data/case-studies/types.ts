export type Confidentiality = "named-approved" | "named-no-metrics" | "anonymised";

export interface Decision {
  decision: string;
  alternativeRejected: string;
  reason: string;
  tradeoffAccepted: string;
}

export interface Outcome {
  metric: string;
  baseline: string;
  timeframe: string;
  source: string;
  approvedBy: string;
}

export interface ClientQuote {
  quote: string;
  name: string;
  title: string;
  company: string;
  sourcePlatform: string;
  sourceUrl: string;
}

export interface CaseStudy {
  slug: string;
  clientName?: string;
  clientDescriptor?: { label: string; full: string };
  confidentiality: Confidentiality;
  /** Internal only, never rendered. Who approved what, and when. */
  approvalRecord: string;

  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** Two sentences, 45 words max. What was built and for whom. */
  standfirst: string;
  /** Cover used on the case-studies index card. */
  coverImage?: string;

  author: { name: string; role: string };
  datePublished: string;
  lastReviewedDate: string;

  /** Evidence rail, sticky on desktop. */
  rail: {
    sector: string;
    market: string;
    engagementType: string;
    platforms: string[];
    stack: string[];
    liveLinks: { label: string; url: string }[];
    deliveryFacts?: { label: string; value: string }[];
  };

  /** 250 to 320 words, ZERO client mentions. */
  domainContext: { heading: string; blocks: { title: string; body: string }[] };

  situation: string;
  buildBlocks: { heading: string; body: string }[];
  decisions: Decision[];

  /** Unique to this page. No two pages share an artifact type on one subject. */
  reusableArtifact: {
    heading: string;
    intro: string;
    columns: string[];
    rows: string[][];
    note?: string;
  };

  shipped: { capabilities: string[]; scopeFacts: string[] };

  /** Optional by design - most projects have none. */
  outcomes?: Outcome[];
  clientQuote?: ClientQuote;

  riskAndHandover: { title: string; body: string }[];
  commercials: { label: string; value: string }[];
  openQuestions: string;
  faqs: { question: string; answer: string }[];

  links: {
    service?: { label: string; href: string };
    industry?: { label: string; href: string };
    blogs: { label: string; href: string }[];
  };
  relatedCaseStudies: { label: string; href: string; note: string }[];
}
