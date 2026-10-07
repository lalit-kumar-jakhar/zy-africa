import { Metadata } from "next";
import nextDynamic from "next/dynamic";
import AboutTopArea from "@/components/about/AboutTopArea";
import { safeJsonLd, buildBreadcrumbList, ORG_ID, WEBSITE_ID } from "@/components/seo/jsonld";
import { buildReviewNodes } from "@/components/seo/reviews-jsonld";

const MissionAbout = nextDynamic(
  () => import("@/components/about/MissionAbout"),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
    ),
  }
);

const Leadership = nextDynamic(
  () => import("@/components/about/Leadership"),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
    ),
  }
);

const AboutUs = nextDynamic(() => import("@/components/home/AboutUs/AboutUs"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-80 rounded-lg" />,
});

const Partnerships = nextDynamic(
  () => import("@/components/home/PartnerShips/PartnerShips"),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-48 rounded-lg" />
    ),
  }
);

const QualityAssurance = nextDynamic(
  () => import("@/components/portfolio/QualityAssurance"),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-96 rounded-lg" />
    ),
  }
);

const ServeIndustries = nextDynamic(
  () => import("@/components/home/ServeIndustries/ServeIndustries"),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-80 rounded-lg" />
    ),
  }
);

const TechStack = nextDynamic(
  () => import("@/components/home/TechStack/TechStack"),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-96 rounded-lg" />
    ),
  }
);

const Testimonial = nextDynamic(
  () => import("@/components/home/Testimonials/Testimonials"),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-96 rounded-lg" />
    ),
  }
);

const AdvServices = nextDynamic(
  () => import("@/components/services/AdvServices"),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-64 rounded-lg" />
    ),
  }
);

export const dynamic = "force-static";
export const revalidate = 300;

export const metadata: Metadata = {
  title: "About Zyneto: AI and Software Development Company",
  description:
    "Zyneto Global Technologies builds AI systems, web platforms and mobile apps for businesses worldwide. Meet the team, how we work, and what we ship.",
  alternates: {
    canonical: "https://zyneto.com/about-us",
  },
  openGraph: {
    title: "About Zyneto: AI and Software Development Company",
    description:
      "Zyneto Global Technologies builds AI systems, web platforms and mobile apps for businesses worldwide. Meet the team, how we work, and what we ship.",
    url: "https://zyneto.com/about-us",
    siteName: "Zyneto Global Technologies",
    images: [
      {
        url: `https://zyneto.com/static/assets/about-us/about-bg.webp`,
        width: 1200,
        height: 630,
        alt: "About Zyneto - who we are and how we build",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Zyneto: AI and Software Development Company",
    description:
      "Zyneto Global Technologies builds AI systems, web platforms and mobile apps for businesses worldwide. Meet the team, how we work, and what we ship.",
    site: "@zyneto",
    creator: "@zyneto",
      images: [`https://zyneto.com/static/assets/about-us/about-bg.webp`],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-video-preview": -1,
    "max-image-preview": "large",
  },
  other: {
    "revisit-after": "2 days",
    rating: "Safe For Kids",
    "document-type": "Public",
    language: "English",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutTopArea />
      <AboutUs
        title="Client Success Drives Us Forward"
        subtitle="Zyneto: Where Bold Ideas Meet Transformative Technology"
        description="In current times, building a product is only the beginning. At Zyneto, we go beyond web and mobile app development, we partner with you for long-term growth. From scalable product creation to strategic IT consulting, we help startups and enterprises turn ideas into meaningful digital experiences that accelerate growth and deliver measurable results."
        isAboutUsPage={true}
      />
      <MissionAbout />
      <Leadership />
      <QualityAssurance />
      <ServeIndustries />
      <Partnerships />
      <AdvServices
        advertisement={{
          title: "Crafting Digital Solutions To Fulfill Your Vision",
          description:
            "Kickstart your project with digital solutions tailored exactly for your industry.",
          ctaText: "Contact Us",
        }}
      />
      <Testimonial
        title="Success That Speaks For Itself"
        subtitle="Explore inspiring journeys of our clients backed by their honest feedback."
      />
      <TechStack
        title="Future-Ready Tech Stack for Next-Level Innovation"
        description="Zyneto leverages industry-leading technologies in its tech stack to deliver products that perform and evolve with your business. Backed by years of hands-on experience, Zyneto’s expert developers harness the top tech stacks to create robust solutions tailored just for you."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(buildBreadcrumbList([
              { name: "Home", item: "https://zyneto.com" },
              { name: "About Us", item: "https://zyneto.com/about-us" },
            ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://zyneto.com/about-us#WebPage",
            name: "About Zyneto: AI and Software Development Company",
            url: "https://zyneto.com/about-us",
            description:
              "Zyneto Global Technologies builds AI systems, web platforms and mobile apps for businesses worldwide. Meet the team, how we work, and what we ship.",
            image: [
              "https://cdn.zyneto.com/public/logo-icon-black-512.png",
              "https://cdn.zyneto.com/public/zyneto-reception.jpg",
              "https://zyneto.com/static/assets/about-us/mission.webp",
            ],
            mainEntity: {
              "@id": ORG_ID,
            },
            publisher: {
              "@id": ORG_ID,
            },
            inLanguage: "en-US",
            isPartOf: {
              "@id": WEBSITE_ID,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(buildReviewNodes()) }}
      />
    </>
  );
}
