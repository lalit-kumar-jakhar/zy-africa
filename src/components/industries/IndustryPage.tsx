import dynamic from "next/dynamic";
import AnchorNav from "@/components/industries/AnchorNav";
import EssenceSection from "@/components/industries/sections/EssenceSection";
import SegmentsSection from "@/components/industries/sections/SegmentsSection";
import SubVerticalsSection from "@/components/industries/sections/SubVerticalsSection";
import OperationsMapSection from "@/components/industries/sections/OperationsMapSection";
import SystemsSection from "@/components/industries/sections/SystemsSection";
import RetailBoundarySection from "@/components/industries/sections/RetailBoundarySection";
import ComplianceSection from "@/components/industries/sections/ComplianceSection";
import OurWorkSection from "@/components/industries/sections/OurWorkSection";
import WhatGoesWrongSection from "@/components/industries/sections/WhatGoesWrongSection";
import BuildOrBuySection from "@/components/industries/sections/BuildOrBuySection";
import CostSection from "@/components/industries/sections/CostSection";
import EngagementSection from "@/components/industries/sections/EngagementSection";
import DeliverySection from "@/components/industries/sections/DeliverySection";
import NonFunctionalSection from "@/components/industries/sections/NonFunctionalSection";
import IndustryClosingSection from "@/components/industries/sections/IndustryClosingSection";
import HubLinksSection from "@/components/industries/sections/HubLinksSection";
import type { IndustryPageData } from "@/data/industries/types";
import { categories } from "@/components/shared/Navbar/Dropdowns/categories";
import {
  safeJsonLd,
  buildBreadcrumbList,
  buildFaqPage,
  ORG_ID,
  WEBSITE_ID,
} from "@/components/seo/jsonld";

const AdvServices = dynamic(() => import("@/components/services/AdvServices"));
const FaqSection = dynamic(
  () => import("@/components/home/FaqSection/FaqSection")
);
const IndustriesTop = dynamic(
  () => import("@/components/industries/IndustriesTop")
);
const Partnerships = dynamic(
  () => import("@/components/home/PartnerShips/PartnerShips")
);
const Testimonial = dynamic(
  () => import("@/components/home/Testimonials/Testimonials")
);
type IndustryPageProps = {
  data: IndustryPageData;
  url: string;
  name: string;
  description: string;
  image?: string;
};

const IndustryPage = ({
  data,
  url,
  name,
  description,
  image,
}: IndustryPageProps) => {
  const entry = categories.Industries.find((i) => url.endsWith(i.url));
  const reviewed = entry?.lastmod;

  return (
  <>
    <IndustriesTop heroSection={data.heroSection} />
    <Partnerships />

    <EssenceSection essence={data.essence} />
    <AnchorNav anchors={data.anchors} />
    <SegmentsSection segments={data.segments} />
    <SubVerticalsSection subVerticals={data.subVerticals} />
    {data.operations && <OperationsMapSection operations={data.operations} />}
    <SystemsSection systems={data.systems} />

    <AdvServices advertisement={data.ctaBands.mid} />

    {data.retailBoundary && (
      <RetailBoundarySection retailBoundary={data.retailBoundary} />
    )}
    <ComplianceSection compliance={data.compliance} />
    {data.ourWork && <OurWorkSection ourWork={data.ourWork} />}
    <WhatGoesWrongSection whatGoesWrong={data.whatGoesWrong} />
    <BuildOrBuySection buildOrBuy={data.buildOrBuy} />
    <CostSection cost={data.cost} highlights={data.costHighlights} />
    <EngagementSection engagement={data.engagement} />
    <DeliverySection delivery={data.delivery} />
    <NonFunctionalSection nonFunctional={data.nonFunctional} />

    <FaqSection faqSection={data.faqs} />

    <IndustryClosingSection
      nextSteps={data.nextSteps}
      endCta={data.ctaBands.end}
    />
    <Testimonial />
    <HubLinksSection hubLinks={data.hubLinks} />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: safeJsonLd(
          buildBreadcrumbList([
            { name: "Home", item: "https://zyneto.com" },
            { name: "Industries", item: "https://zyneto.com/industries" },
            { name: name, item: url },
          ])
        ),
      }}
    />
    {data.faqs && data.faqs.length > 0 && (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(buildFaqPage(data.faqs, url)),
        }}
      />
    )}
    {data.seo && (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "Service",
            name: data.seo.primaryKeyword,
            serviceType: data.seo.primaryKeyword,
            description,
            url,
            provider: { "@id": ORG_ID },
            areaServed: ["IN", "OM", "AE", "GB", "US"],
            audience: { "@type": "BusinessAudience", name },
          }),
        }}
      />
    )}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: safeJsonLd({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
          name,
          description,
          inLanguage: "en-US",
          isPartOf: { "@id": WEBSITE_ID },
          about: { "@id": ORG_ID },
          author: { "@id": ORG_ID },
          publisher: { "@id": ORG_ID },
          ...(reviewed ? { datePublished: reviewed, dateModified: reviewed } : {}),
          ...(image
            ? {
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: image,
                  width: 1200,
                  height: 630,
                },
              }
            : {}),
        }),
      }}
    />
  </>
  );
};

export default IndustryPage;
