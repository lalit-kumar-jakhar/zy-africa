import { Metadata } from "next";
import { safeJsonLd, buildBreadcrumbList, buildFaqPage, ORG_ID, WEBSITE_ID } from "@/components/seo/jsonld";
import nextDynamic from "next/dynamic";
import { notFound } from "next/navigation";
import PerformanceMonitor from "@/components/common/PerformanceMonitor";

export const dynamic = "force-static";
export const revalidate = 300;

const OptimizedFallback = ({ height = "h-96" }: { height?: string }) => (
  <div
    className={`${height} animate-pulse bg-linear-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg shadow-sm`}
  >
    <div className="flex items-center justify-center h-full">
      <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  </div>
);

// Above the fold: keep SSR so these render in the initial HTML.
const Partnerships = nextDynamic(
  () => import("@/components/home/PartnerShips/PartnerShips"),
  {
    loading: () => <OptimizedFallback height="h-32" />,
    ssr: true,
  }
);

const AboutServices = nextDynamic(
  () => import("@/components/services/AboutServices"),
  {
    loading: () => <OptimizedFallback />,
    ssr: true,
  }
);

// Below the fold: lazy-loaded on the client.
const ProvideServices = nextDynamic(
  () => import("@/components/services/ProvideServices"),
  {
    loading: () => <OptimizedFallback />,
  }
);

const AdvServices = nextDynamic(
  () => import("@/components/services/AdvServices"),
  {
    loading: () => <OptimizedFallback height="h-48" />,
  }
);

const BenefitServices = nextDynamic(
  () => import("@/components/services/BenefitServices"),
  {
    loading: () => <OptimizedFallback />,
  }
);

const TechStack = nextDynamic(
  () => import("@/components/home/TechStack/TechStack"),
  {
    loading: () => <OptimizedFallback />,
  }
);

const HireDevSection = nextDynamic(
  () => import("@/components/services/HireDevSection"),
  {
    loading: () => <OptimizedFallback />,
  }
);

const FaqSection = nextDynamic(
  () => import("@/components/home/FaqSection/FaqSection"),
  {
    loading: () => <OptimizedFallback />,
  }
);

const InspireIdeasComponent = nextDynamic(
  () => import("@/components/solutions/InspireIdeas"),
  {
    loading: () => <OptimizedFallback />,
  }
);

const WeDevelopComponent = nextDynamic(
  () => import("@/components/solutions/WeDevelop"),
  {
    loading: () => <OptimizedFallback />,
  }
);

const FeatureSectionComponent = nextDynamic(
  () => import("@/components/solutions/FeatureSection"),
  {
    loading: () => <OptimizedFallback />,
  }
);

const DevProcessComponent = nextDynamic(
  () => import("@/components/solutions/DevProcess"),
  {
    loading: () => <OptimizedFallback />,
  }
);

const AdvanceTechStackComponent = nextDynamic(
  () => import("@/components/solutions/AdvanceTechStack"),
  {
    loading: () => <OptimizedFallback />,
  }
);

const Testimonial = nextDynamic(
  () => import("@/components/home/Testimonials/Testimonials"),
  {
    loading: () => <OptimizedFallback />,
  }
);

import SolutionTop from "@/components/solutions/SolutionTop";
import DatingPage from "@/components/solutions/dating/DatingPage";

import { datingFaqs, datingServices } from "@/data/dating-page";
import { solutionsList, type ItemType } from "@/data/solutions-list";
import { SHIPPED_SOLUTION_SLUGS } from "@/constants/shipped-routes";

type ParamType = {
  params: Promise<{
    item: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return solutionsList
    .filter((item) => SHIPPED_SOLUTION_SLUGS.has(item.itemSlug))
    .map((item) => ({
      item: item.itemSlug,
    }));
}

export async function generateMetadata(props: ParamType): Promise<Metadata> {
  const params = await props.params;
  const { item } = params;
  const itemInfo = solutionsList.find((entry) => entry.itemSlug === item);

  if (!itemInfo || !SHIPPED_SOLUTION_SLUGS.has(item)) {
    return {
      title: "Page Not Found | Zyneto",
      description: "The page you are looking for does not exist.",
      robots: { index: false, follow: true },
      alternates: {
        canonical: "https://zyneto.com/",
      },
      openGraph: {
        title: "Page Not Found | Zyneto",
        description: "The page you are looking for does not exist.",
        url: "https://zyneto.com/",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Page Not Found | Zyneto",
        description: "The page you are looking for does not exist.",
      },
    };
  }

  const ogImage =
    typeof itemInfo.aboutServices.image === "string" &&
    itemInfo.aboutServices.image.startsWith("/")
      ? `https://zyneto.com${itemInfo.aboutServices.image}`
      : `https://zyneto.com/static/assets/solutions/about/${itemInfo.itemSlug}.webp`;
  return {
    title: itemInfo.metaTitle,
    description: itemInfo.metaDescription,

    alternates: {
      canonical: `https://zyneto.com/solutions/${itemInfo.itemSlug}`,
    },
    openGraph: {
      title: itemInfo.metaTitle,
      description: itemInfo.metaDescription,
      url: `https://zyneto.com/solutions/${itemInfo.itemSlug}`,
      siteName: "Zyneto Global Technologies",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${itemInfo.metaTitle} - Zyneto Solutions`,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: itemInfo.metaTitle,
      description: itemInfo.metaDescription,
      images: [ogImage],
      creator: "@zyneto",
      site: "@zyneto",
    },
  };
}

export default async function Page(props: ParamType) {
  const params = await props.params;
  const { item } = params;

  const itemInfo = solutionsList.find(
    (entry: ItemType) => entry.itemSlug === item
  ) as ItemType | undefined;

  if (!itemInfo || !SHIPPED_SOLUTION_SLUGS.has(item)) notFound();

  const isDating = itemInfo.itemSlug === "dating-app-development-company";
  const faqs = isDating ? datingFaqs : itemInfo.faqSection;
  const offerName = isDating ? datingServices.title : itemInfo.provideServices.title;
  const offerFeatures = isDating
    ? datingServices.features
    : itemInfo.provideServices.features;

  const ogImage =
    typeof itemInfo.aboutServices.image === "string" &&
    itemInfo.aboutServices.image.startsWith("/")
      ? `https://zyneto.com${itemInfo.aboutServices.image}`
      : `https://zyneto.com/static/assets/solutions/about/${itemInfo.itemSlug}.webp`;

  return (
    <>
      <PerformanceMonitor />
      {isDating ? (
        <DatingPage />
      ) : (
        <>
      <SolutionTop heroSection={itemInfo.heroSection} />
      <AboutServices
        aboutServices={{
          ...itemInfo.aboutServices,
          imageAlt: `${itemInfo.metaTitle} - Zyneto Solutions`,
        }}
        priority
      />
      <ProvideServices provideServices={itemInfo.provideServices} />
      <AdvServices advertisement={itemInfo.advertisement} />
      <InspireIdeasComponent inspireIdeas={itemInfo.inspireIdeas} />
      <WeDevelopComponent
        title={itemInfo.weDevelop?.title}
        subtitle={itemInfo.weDevelop?.subtitle}
        developItems={itemInfo.weDevelop?.developItems}
      />
      {itemInfo.featureSection && (
        <FeatureSectionComponent
        title={itemInfo.featureSection.title}
        image1={itemInfo.featureSection.image1}
        image2={itemInfo.featureSection.image2}
        image3={itemInfo.featureSection.image3}
        tabs={itemInfo.featureSection.tabs}
        />
      )}
      <AdvServices advertisement={itemInfo.advertisement2} />
      <Partnerships />
      {itemInfo.devProcess && (
        <DevProcessComponent
          sectionTitle={itemInfo.devProcess.sectionTitle}
          sectionDescription={itemInfo.devProcess.sectionDescription}
          processSteps={itemInfo.devProcess.processSteps}
          ctaText={itemInfo.devProcess.ctaText}
        />
      )}
      {itemInfo.whyChooseUs && (
        <BenefitServices
          benefitServices={itemInfo.whyChooseUs}
          isWhiteColorBg
        />
      )}
      <TechStack title={itemInfo.techStack?.title} />
      <HireDevSection hireDevServices={itemInfo.hireDevServices} />
      <AdvanceTechStackComponent advanceTechStack={itemInfo?.advanceTechStack} />
      <AdvServices advertisement={itemInfo.advertisement3} />
      <FaqSection faqSection={itemInfo.faqSection} />
      <Testimonial />
        </>
      )}
      {faqs && faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd(
              buildFaqPage(
                faqs ?? [],
                `https://zyneto.com/solutions/${itemInfo.itemSlug}`
              )
            ),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(buildBreadcrumbList([
              { name: "Home", item: "https://zyneto.com" },
              { name: "Solutions", item: "https://zyneto.com/solutions" },
              {
                name: itemInfo.heroSection.title,
                item: `https://zyneto.com/solutions/${itemInfo.itemSlug}`,
              },
            ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `https://zyneto.com/solutions/${itemInfo.itemSlug}#webpage`,
            url: `https://zyneto.com/solutions/${itemInfo.itemSlug}`,
            name: itemInfo.metaTitle,
            description: itemInfo.metaDescription,
            inLanguage: "en-US",
            isPartOf: { "@id": WEBSITE_ID },
            about: { "@id": ORG_ID },
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: ogImage,
              width: 1200,
              height: 630,
            },
            image: [
              {
                "@type": "ImageObject",
                url: ogImage,
                width: 1200,
                height: 630,
                name: `${itemInfo.metaTitle} - Zyneto Solutions`,
              },
              ...(typeof itemInfo.aboutServices.image === "string" &&
              itemInfo.aboutServices.image.startsWith("/")
                ? [
                    {
                      "@type": "ImageObject",
                      url: `https://zyneto.com${itemInfo.aboutServices.image}`,
                      width: 840,
                      height: 560,
                      name: `${itemInfo.aboutServices.title} - Zyneto`,
                    },
                  ]
                : []),
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `https://zyneto.com/solutions/${itemInfo.itemSlug}#service`,
            name: itemInfo.heroSection.title,
            url: `https://zyneto.com/solutions/${itemInfo.itemSlug}`,
            description: itemInfo.metaDescription,
            image: ogImage,
            provider: {
              "@id": ORG_ID,
            },
            serviceType: itemInfo.itemName,
            areaServed: [
              "Worldwide",
              "United States",
              "United Kingdom",
              "India",
              "Australia",
              "Middle East",
            ],
            hasOfferCatalog: offerFeatures.length
              ? {
                  "@type": "OfferCatalog",
                  name: offerName,
                  itemListElement: offerFeatures
                    .slice(0, 6)
                    .map((f) => ({
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: f.title,
                        ...(typeof f.description === "string"
                          ? { description: f.description }
                          : {}),
                      },
                    })),
                }
              : undefined,
          }),
        }}
      />
    </>
  );
}
