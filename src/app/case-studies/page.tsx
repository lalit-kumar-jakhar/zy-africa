import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { defaultMetaImage } from "@/constants/site-metadata";
import {
  caseStudies,
  caseStudySectors,
  clientLabel,
  isAnonymised,
} from "@/data/case-studies";
import CaseStudiesTop from "@/components/case-studies/CaseStudiesTop";
import CaseStudiesPrinciples from "@/components/case-studies/CaseStudiesPrinciples";
import CaseStudyGrid, {
  type CaseStudyCard,
} from "@/components/case-studies/CaseStudyGrid";
import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import Reveal from "@/components/common/Reveal";
import {
  safeJsonLd,
  buildBreadcrumbList,
  buildCollectionPage,
  buildFaqPage,
} from "@/components/seo/jsonld";

const Partnerships = dynamic(
  () => import("@/components/home/PartnerShips/PartnerShips")
);
const TechStack = dynamic(() => import("@/components/home/TechStack/TechStack"));
const FaqSection = dynamic(
  () => import("@/components/home/FaqSection/FaqSection")
);
const Testimonial = dynamic(
  () => import("@/components/home/Testimonials/Testimonials")
);
const AdvServices = dynamic(() => import("@/components/services/AdvServices"));

const PAGE_URL = "https://zyneto.com/case-studies";

const caseStudyFaqs = [
  {
    question: "What is the difference between a case study and a portfolio entry?",
    answer:
      "A portfolio entry is a short summary of what shipped. A case study is longer: the domain problem, what we built, the decisions taken, and what each decision cost. Most engagements have a portfolio entry. Only some have a full study.",
  },
  {
    question: "Why do some studies have no outcome metrics?",
    answer:
      "Because the client never measured one, or never approved sharing it. We do not invent figures. Where a metric is published, it carries the baseline, the timeframe, and the source. Where it is not, the page spends the space on what was built instead.",
  },
  {
    question: "Why are some clients unnamed?",
    answer:
      "Where a contract or competitive position rules out naming a client, the study says so openly. In place of a logo it discloses duration, team composition and the full stack - harder to invent than a name, and more useful when you are weighing a similar build.",
  },
  {
    question: "Are these projects live in production?",
    answer:
      "Yes. The studies on this page describe systems that shipped and are used by real customers. Where a store listing or live link exists and naming is approved, it is linked from the study.",
  },
  {
    question: "Can you build something with the same constraints for us?",
    answer:
      "Yes. Bring us the part of the problem you think is hardest - the regulation, the data model, the physical constraint. We scope from that, not from a generic feature list. Rates run from $40 to $100 an hour depending on role and seniority.",
  },
  {
    question: "Where can I see shorter summaries of your other work?",
    answer:
      "On the portfolio page. It covers every engagement we can show, including ones that do not yet have a full case study.",
  },
];

export const metadata: Metadata = {
  title: "Case Studies | Zyneto Global Technologies",
  description:
    "How we built platforms for clients in Oman, the GCC and India. What the problem was, what we built, and the tradeoffs we accepted along the way.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Case Studies | Zyneto Global Technologies",
    description:
      "How we built platforms for clients in Oman, the GCC and India. What the problem was, what we built, and the tradeoffs we accepted.",
    url: PAGE_URL,
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: defaultMetaImage,
        width: 1200,
        height: 630,
        alt: "Zyneto case studies",
      },
    ],
  },
};

export default function CaseStudiesPage() {
  const cards: CaseStudyCard[] = caseStudies.map((cs) => ({
    slug: cs.slug,
    client: clientLabel(cs),
    anonymised: isAnonymised(cs),
    sector: cs.rail.sector,
    market: cs.rail.market,
    engagementType: cs.rail.engagementType,
    standfirst: cs.standfirst,
    title: cs.h1,
    stack: cs.rail.stack,
    platforms: cs.rail.platforms,
    coverImage: cs.coverImage,
    // Only a client-approved, sourced figure reaches a card; the rest stay in the
    // page where their baseline and timeframe sit beside them.
    headlineOutcome: cs.outcomes?.[0]
      ? `${cs.outcomes[0].metric} (${cs.outcomes[0].timeframe}, ${cs.outcomes[0].source})`
      : undefined,
  }));

  const markets = Array.from(
    new Set(caseStudies.map((cs) => cs.rail.market))
  ).sort((a, b) => a.localeCompare(b));

  const featuredCover = "/static/assets/case-study/case-study-bg.webp";

  return (
    <>
      <CaseStudiesTop
        studyCount={caseStudies.length}
        markets={markets}
        coverImage={featuredCover}
      />

      <Partnerships />

      <section
        id="selected-work"
        className="scroll-mt-[calc(var(--nav-height,72px)+1.5rem)] bg-white py-12 md:py-24"
      >
        <div className="container mx-auto px-4">
          <Reveal>
            <IndustrySectionHead
              title="Deep studies, not case-study theatre"
              description="Each page states the problem, what shipped, the decisions taken, and what each decision cost. Where a client has not published an outcome figure, we do not invent one."
            />
          </Reveal>

          <CaseStudyGrid studies={cards} sectors={caseStudySectors()} />
        </div>
      </section>

      <CaseStudiesPrinciples />

      <TechStack
        title="Tech Stack Behind These Builds"
        description="The same engineering stack that powers the studies on this page - chosen for the constraint, not for fashion."
      />

      <FaqSection faqSection={caseStudyFaqs} />

      <Testimonial />

      <AdvServices
        advertisement={{
          title: "Building something with the same constraints?",
          description: "Bring us the part you think is hardest.",
          ctaText: "Book a technical call",
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(
            buildBreadcrumbList([
              { name: "Home", item: "https://zyneto.com" },
              { name: "Case studies", item: PAGE_URL },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(
            buildCollectionPage({
              id: `${PAGE_URL}#collection`,
              url: PAGE_URL,
              name: "Case studies",
              description:
                "Engineering case studies from Zyneto Global Technologies. Each one states the problem, what was built, the decisions taken and what each decision cost.",
              itemUrls: caseStudies.map((cs) => `${PAGE_URL}/${cs.slug}`),
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(buildFaqPage(caseStudyFaqs, PAGE_URL)),
        }}
      />
    </>
  );
}
