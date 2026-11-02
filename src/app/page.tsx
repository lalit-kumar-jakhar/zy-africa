export const dynamic = "force-static";
export const revalidate = 300;
import nextDynamic from "next/dynamic";
import HomeTopArea from "@/components/home/HomeTop/HomeTopArea";
import Partnerships from "@/components/home/PartnerShips/PartnerShips";
import AboutUs from "@/components/home/AboutUs/AboutUs";
import {
  defaultMetaDescription,
  defaultMetaImage,
  siteOrigin,
} from "@/constants/site-metadata";
import { safeJsonLd, buildFaqPage } from "@/components/seo/jsonld";
import { defaultFaqs } from "@/components/home/FaqSection/FaqSection";
import { buildReviewNodes } from "@/components/seo/reviews-jsonld";

// Portfolio component - dynamic import keeps it out of the homepage bundle
const QualityAssurance = nextDynamic(
  () => import("@/components/portfolio/QualityAssurance"),
  {
    loading: () => <div className="h-48 animate-pulse bg-gray-100" />,
  }
);

// Below-the-fold components, lazy-loaded to cut main-thread work
const WideVarieties = nextDynamic(
  () => import("@/components/home/wideVarieties/WideVarieties"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  }
);

const WorkFeatures = nextDynamic(
  () => import("@/components/home/WorkFeatures/WorkFeatures"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  }
);

const AiSolutions = nextDynamic(
  () => import("@/components/home/AiSolutions/AiSolutions"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  }
);

const ServeIndustries = nextDynamic(
  () => import("@/components/home/ServeIndustries/ServeIndustries"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  }
);

const Advertisement = nextDynamic(
  () => import("@/components/home/Advertisement/Advertisement"),
  {
    loading: () => <div className="h-48 animate-pulse bg-gray-100" />,
  }
);

const BusinessSolutions = nextDynamic(
  () => import("@/components/home/BusinessSolutions/BusinessSolutions"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  }
);

const TechStack = nextDynamic(
  () => import("@/components/home/TechStack/TechStack"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  }
);

const FaqSection = nextDynamic(
  () => import("@/components/home/FaqSection/FaqSection"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  }
);

const Testimonial = nextDynamic(
  () => import("@/components/home/Testimonials/Testimonials"),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  }
);

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${siteOrigin}/#webpage`,
            url: `${siteOrigin}/`,
            name: "Zyneto: Top Website And Mobile App Development Company",
            description: defaultMetaDescription,
            inLanguage: "en-US",
            isPartOf: { "@id": `${siteOrigin}/#website` },
            about: { "@id": `${siteOrigin}/#organization` },
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: `${siteOrigin}${defaultMetaImage}`,
              width: 1200,
              height: 630,
              alt: "Zyneto - Top Website And Mobile App Development Company",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(buildReviewNodes()) }}
      />
      <HomeTopArea />
      <Partnerships />
      <AboutUs />
      <AiSolutions />
      <WideVarieties />
      <WorkFeatures />
      <Advertisement />
      <QualityAssurance />
      <ServeIndustries />
      <BusinessSolutions />
      <TechStack />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(buildFaqPage(defaultFaqs, "https://zyneto.com/")),
        }}
      />
      <FaqSection />
      <Testimonial />
    </>
  );
};

export default page;
