import { Metadata } from "next";
import nextDynamic from "next/dynamic";
import ContactTop from "@/components/contact/ContactTop";

const Testimonial = nextDynamic(
  () => import("@/components/home/Testimonials/Testimonials"),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-96 rounded-lg" />
    ),
  }
);

import { safeJsonLd, buildBreadcrumbList, ORG_ID, WEBSITE_ID } from "@/components/seo/jsonld";
const gridDotsBgImage = "/static/assets/home/faq/grid-dots.svg";

export const dynamic = "force-static";
export const revalidate = 300;

export const metadata: Metadata = {
  metadataBase: new URL("https://zyneto.com"),
  title: "Contact Us | Zyneto - Your Partner in App Solutions",
  description:
    "Have a project in mind? Contact Zyneto, where our experts craft innovative solutions. Let's turn your vision into a successful reality!",
  openGraph: {
    title: "Contact Us | Zyneto - Your Partner in App Solutions",
    description:
      "Have a project in mind? Contact Zyneto, where our experts craft innovative solutions. Let's turn your vision into a successful reality!",
    url: "https://zyneto.com/contact-us",
    siteName: "Zyneto Global Technologies",
    images: [
      {
        url: `https://zyneto.com/static/assets/home/zyneto-meta-image.webp`,
        width: 1200,
        height: 630,
        alt: "Contact Us | Zyneto - Your Partner in App Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Zyneto - Your Partner in App Solutions",
    description:
      "Have a project in mind? Contact Zyneto, where our experts craft innovative solutions. Let's turn your vision into a successful reality!",
    site: "@zyneto",
    creator: "@zyneto",
    images: [
      `https://zyneto.com/static/assets/home/zyneto-meta-image.webp`,
    ],
  },
  alternates: {
    canonical: "https://zyneto.com/contact-us",
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

const stepsData = [
  {
    step: 1,
    title: "Quick response from our team",
    description: "Within 24 hours, a solutions expert reviews your details and reaches out by email or phone to clarify your goals and timelines.",
  },
  {
    step: 2,
    title: "Discovery call & solution mapping",
    description: "We schedule a short discovery call to understand your product vision, technical needs, budget, and ideal engagement model.",
  },
  {
    step: 3,
    title: "Tailored proposal & next steps",
    description: "You receive a clear proposal outlining scope, timeline, team structure, and investment options, plus a recommended path to get started.",
  },
];

export default function ContactPage() {
  return (
    <>
      <ContactTop />
      <section className="bg-[#f9f9f9] py-12 md:py-16" style={{
        backgroundImage: `url(${gridDotsBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-4">
            What happens after you reach out?
          </h2>
          <p className="text-sm md:text-base text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Once you share your requirements, our team follows a clear, transparent process so you always know what&apos;s next.
          </p>
          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {stepsData.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl border border-gray-100 p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-linear-to-r from-[#ff732d] via-[#ff0044] to-[#9900ff] bg-clip-text text-transparent text-[36px] font-bold min-w-17">
                    0{step.step}.
                  </span>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonial />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(buildBreadcrumbList([
            { name: "Home", item: "https://zyneto.com" },
            { name: "Contact Us", item: "https://zyneto.com/contact-us" },
          ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://zyneto.com/contact-us#ContactPage",
            name: "Contact Us | Zyneto - Your Partner in App Solutions",
            url: "https://zyneto.com/contact-us",
            description:
              "Have a project in mind? Contact Zyneto, where our experts craft innovative solutions. Let's turn your vision into a successful reality!",
            image: [
              "https://cdn.zyneto.com/public/logo-icon-black-512.png",
              "https://cdn.zyneto.com/public/zyneto-reception.jpg",
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
    </>
  );
}
