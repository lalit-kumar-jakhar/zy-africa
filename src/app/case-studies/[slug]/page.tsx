import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import {
  caseStudies,
  caseStudyBySlug,
  clientLabel,
  isAnonymised,
} from "@/data/case-studies";
import { safeJsonLd, buildBreadcrumbList, buildFaqPage, ORG_ID } from "@/components/seo/jsonld";
import CaseStudyHero from "@/components/case-studies/CaseStudyHero";
import CaseStudyEvidenceRail from "@/components/case-studies/CaseStudyEvidenceRail";
import {
  CaseStudyMain,
  CaseStudyClosing,
} from "@/components/case-studies/CaseStudyBody";

const AdvServices = dynamic(() => import("@/components/services/AdvServices"));
const Testimonial = dynamic(
  () => import("@/components/home/Testimonials/Testimonials")
);
const Partnerships = dynamic(
  () => import("@/components/home/PartnerShips/PartnerShips")
);

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const cs = caseStudyBySlug(slug);
  if (!cs) return {};
  const url = `https://zyneto.com/case-studies/${cs.slug}`;
  return {
    title: cs.metaTitle,
    description: cs.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: cs.metaTitle,
      description: cs.metaDescription,
      url,
      siteName: "Zyneto Global Technologies",
      locale: "en_US",
      type: "article",
      ...(cs.coverImage
        ? {
          images: [
            {
              url: cs.coverImage,
              width: 1200,
              height: 630,
              alt: clientLabel(cs),
            },
          ],
        }
        : {}),
    },
  };
}

export default async function CaseStudyPage(props: Props) {
  const { slug } = await props.params;
  const cs = caseStudyBySlug(slug);
  if (!cs) return notFound();

  const url = `https://zyneto.com/case-studies/${cs.slug}`;
  const client = clientLabel(cs);
  const anonymised = isAnonymised(cs);

  // The data may list upcoming slugs, so only keep studies that are published.
  const relatedStudies = cs.relatedCaseStudies.filter((r) => {
    const relatedSlug = r.href.replace(/^\/case-studies\//, "");
    return Boolean(caseStudyBySlug(relatedSlug));
  });

  return (
    <>
      <CaseStudyHero
        client={client}
        sector={cs.rail.sector}
        h1={cs.h1}
        standfirst={cs.standfirst}
        coverImage={cs.coverImage}
      />

      <CaseStudyEvidenceRail
        market={cs.rail.market}
        engagementType={cs.rail.engagementType}
        platforms={cs.rail.platforms}
        stack={cs.rail.stack}
        deliveryFacts={cs.rail.deliveryFacts}
        liveLinks={cs.rail.liveLinks}
      />

      <Partnerships />

      <CaseStudyMain cs={cs} anonymised={anonymised} />

      <AdvServices
        advertisement={{
          title: "Building something with the same constraints?",
          description: "Bring us the part you think is hardest.",
          ctaText: "Book a technical call",
        }}
      />

      <CaseStudyClosing cs={cs} relatedStudies={relatedStudies} />
      <AdvServices
        advertisement={{
          title: "Talk to an engineer, not a salesperson",
          description: "Tell us what your operation runs on today.",
          ctaText: "Start the conversation",
        }}
      />

      <Testimonial />


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(
            buildBreadcrumbList([
              { name: "Home", item: "https://zyneto.com" },
              { name: "Case studies", item: "https://zyneto.com/case-studies" },
              { name: client, item: url },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "@id": `${url}#article`,
            mainEntityOfPage: url,
            headline: cs.h1,
            description: cs.metaDescription,
            datePublished: cs.datePublished,
            dateModified: cs.lastReviewedDate,
            author: {
              "@type": "Organization",
              name: "Zyneto Global Technologies",
            },
            publisher: { "@id": ORG_ID },
            // `about` gives an answer engine a real entity; omitted on anonymised
            // studies rather than inventing one.
            ...(cs.clientName
              ? { about: { "@type": "Organization", name: cs.clientName } }
              : {}),
            mentions: cs.rail.liveLinks.map((l) => ({
              "@type": "SoftwareApplication",
              name: `${client} (${l.label})`,
              applicationCategory: "ShoppingApplication",
              downloadUrl: l.url,
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(buildFaqPage(cs.faqs, url)),
        }}
      />
    </>
  );
}
