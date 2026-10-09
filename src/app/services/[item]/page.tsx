import { notFound } from "next/navigation";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import ServicesTop from "@/components/services/ServicesTop";
import { safeJsonLd, buildBreadcrumbList, buildFaqPage, ORG_ID, WEBSITE_ID } from "@/components/seo/jsonld";
import PerformanceMonitor from "@/components/common/PerformanceMonitor";
import ServicePageOptimizer from "@/components/services/ServicePageOptimizer";

const OptimizedFallback = ({ height = "h-96" }: { height?: string }) => (
  <div
    className={`${height} animate-pulse bg-linear-to-r from-gray-100 via-gray-200 to-gray-100 rounded-lg shadow-sm`}
  >
    <div className="flex items-center justify-center h-full">
      <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  </div>
);

const Partnerships = dynamic(
  () => import("@/components/home/PartnerShips/PartnerShips"),
  {
    loading: () => <OptimizedFallback height="h-32" />,
    ssr: true,
  }
);

const AboutServices = dynamic(
  () => import("@/components/services/AboutServices"),
  {
    loading: () => <OptimizedFallback />,
    ssr: true,
  }
);

const ProvideServices = dynamic(
  () => import("@/components/services/ProvideServices"),
  {
    loading: () => <OptimizedFallback />,
  }
);

const AdvServices = dynamic(() => import("@/components/services/AdvServices"), {
  loading: () => <OptimizedFallback height="h-48" />,
});

const BenefitServices = dynamic(
  () => import("@/components/services/BenefitServices"),
  {
    loading: () => <OptimizedFallback />,
  }
);

const TechStack = dynamic(
  () => import("@/components/home/TechStack/TechStack"),
  {
    loading: () => <OptimizedFallback />,
  }
);

const HireDevSection = dynamic(
  () => import("@/components/services/HireDevSection"),
  {
    loading: () => <OptimizedFallback />,
  }
);

const ServeIndustries = dynamic(
  () => import("@/components/home/ServeIndustries/ServeIndustries"),
  {
    loading: () => <OptimizedFallback />,
  }
);

const FaqSection = dynamic(
  () => import("@/components/home/FaqSection/FaqSection"),
  {
    loading: () => <OptimizedFallback />,
  }
);

const Testimonial = dynamic(
  () => import("@/components/home/Testimonials/Testimonials"),
  {
    loading: () => <OptimizedFallback />,
  }
);

import {
  servicesList,
  getHireImageByServiceSlug,
  type ItemType,
} from "@/data/services-list";
import { SHIPPED_SERVICE_SLUGS } from "@/constants/shipped-routes";

type ParamType = {
  params: Promise<{
    item: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return servicesList
    .filter((item) => SHIPPED_SERVICE_SLUGS.has(item.itemSlug))
    .map((item) => ({
      item: item.itemSlug,
    }));
}

export async function generateMetadata(props: ParamType): Promise<Metadata> {
  const params = await props.params;
  const { item } = params;
  const itemInfo = servicesList.find((entry) => entry.itemSlug === item);

  if (!itemInfo || !SHIPPED_SERVICE_SLUGS.has(item)) {
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
      : `https://zyneto.com/static/assets/services/about/${itemInfo.itemSlug}.webp`;
  return {
    title: itemInfo.metaTitle,
    description: itemInfo.metaDescription,
    alternates: {
      canonical: `https://zyneto.com/services/${itemInfo.itemSlug}`,
    },
    openGraph: {
      title: itemInfo.metaTitle,
      description: itemInfo.metaDescription,
      url: `https://zyneto.com/services/${itemInfo.itemSlug}`,
      siteName: "Zyneto Global Technologies",
      images: [
        {
          url: `${ogImage}`,
          width: 1200,
          height: 630,
          alt: `${itemInfo.metaTitle} - Zyneto Services`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@zyneto",
      creator: "@zyneto",
      title: itemInfo.metaTitle,
      description: itemInfo.metaDescription,
      images: [`${ogImage}`],
    },
  };
}

export default async function Page(props: ParamType) {
  const params = await props.params;
  const { item } = params;

  let itemInfo: ItemType | undefined;
  itemInfo = servicesList.find(
    (entry: ItemType) => entry.itemSlug === item
  ) as ItemType | undefined;

  if (!itemInfo || !SHIPPED_SERVICE_SLUGS.has(item)) notFound();

  const ogImage =
    typeof itemInfo.aboutServices.image === "string" &&
      itemInfo.aboutServices.image.startsWith("/")
      ? `https://zyneto.com${itemInfo.aboutServices.image}`
      : `https://zyneto.com/static/assets/services/about/${itemInfo.itemSlug}.webp`;

  const heroBackgroundImage = "/static/assets/services/hero-bg.webp";
  const serviceIconImage =
    typeof itemInfo.heroSection.image === "string"
      ? itemInfo.heroSection.image
      : itemInfo.heroSection.image?.src;
  const hireDevServicesWithCategoryImage = {
    ...itemInfo.hireDevServices,
    image: getHireImageByServiceSlug(itemInfo.itemSlug),
  };

  return (
    <>
      <PerformanceMonitor />
      <ServicePageOptimizer
        heroImage={heroBackgroundImage}
        serviceIcon={serviceIconImage}
        title={itemInfo.heroSection.title}
      />
      <ServicesTop heroSection={itemInfo.heroSection} />
      <AboutServices
        aboutServices={{
          ...itemInfo.aboutServices,
          imageAlt: `${itemInfo.metaTitle} - Zyneto Development Services`,
        }}
        priority
      />
      <ProvideServices provideServices={itemInfo.provideServices} />
      <AdvServices advertisement={itemInfo.advertisement} />
      {itemInfo.benefitServices && (
        <BenefitServices benefitServices={itemInfo.benefitServices} />
      )}
      <Partnerships />
      <TechStack title={itemInfo.techStack?.title} />
      <HireDevSection hireDevServices={hireDevServicesWithCategoryImage} />
      <ServeIndustries title={itemInfo.serveIndustries?.title} />
      <AdvServices advertisement={itemInfo.advertisement2} />
      {itemInfo.whyChooseUs && (
        <BenefitServices
          benefitServices={itemInfo.whyChooseUs}
          isWhiteColorBg
        />
      )}
      <FaqSection faqSection={itemInfo.faqSection} />
      <Testimonial />
      {itemInfo.faqSection && itemInfo.faqSection.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd(
              buildFaqPage(
                itemInfo.faqSection,
                `https://zyneto.com/services/${itemInfo.itemSlug}`
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
              { name: "Services", item: "https://zyneto.com/services" },
              {
                name: itemInfo.heroSection.title,
                item: `https://zyneto.com/services/${itemInfo.itemSlug}`,
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
            "@id": `https://zyneto.com/services/${itemInfo.itemSlug}#webpage`,
            url: `https://zyneto.com/services/${itemInfo.itemSlug}`,
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
                name: `${itemInfo.metaTitle} - Zyneto Development Services`,
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
            "@id": `https://zyneto.com/services/${itemInfo.itemSlug}#service`,
            name: itemInfo.heroSection.title,
            url: `https://zyneto.com/services/${itemInfo.itemSlug}`,
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
            hasOfferCatalog: itemInfo.provideServices
              ? {
                "@type": "OfferCatalog",
                name: itemInfo.provideServices.title,
                itemListElement: itemInfo.provideServices.features
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
