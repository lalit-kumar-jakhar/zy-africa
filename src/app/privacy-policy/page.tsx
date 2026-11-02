import { Metadata } from "next";
import { safeJsonLd, buildBreadcrumbList, ORG_ID, WEBSITE_ID } from "@/components/seo/jsonld";
import PrivacyPolicy from "@/components/privacyPolicy/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy: How We Handle Your Data | Zyneto",
  description:
    "What personal information Zyneto collects, why we hold it, how long we keep it, and how to request access, correction or deletion.",
  alternates: {
    canonical: "https://zyneto.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy: How We Handle Your Data | Zyneto",
    description:
      "What personal information Zyneto collects, why we hold it, how long we keep it, and how to request access, correction or deletion.",
    url: "https://zyneto.com/privacy-policy",
    siteName: "Zyneto Global Technologies",
    images: [
      {
        url: `https://zyneto.com/static/assets/privacy-terms/privacy.png`,
        width: 1200,
        height: 630,
        alt: "Zyneto Privacy Policy - Data Protection & Privacy Practices",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy: How We Handle Your Data | Zyneto",
    description:
      "What personal information Zyneto collects, why we hold it, how long we keep it, and how to request access, correction or deletion.",
    site: "@zyneto",
    creator: "@zyneto",
    images: [`https://zyneto.com/static/assets/privacy-terms/privacy.png`],
  },
  robots: {
    index: false,
    follow: false,
    "max-snippet": -1,
    "max-video-preview": -1,
    "max-image-preview": "large",
  },
  other: {
    "revisit-after": "7 days",
    rating: "Safe For Kids",
    "document-type": "Public",
    language: "English",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyPolicy />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(buildBreadcrumbList([
              { name: "Home", item: "https://zyneto.com" },
              { name: "Privacy Policy", item: "https://zyneto.com/privacy-policy" },
            ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://zyneto.com/privacy-policy#WebPage",
            name: "Privacy Policy: How We Handle Your Data | Zyneto",
            url: "https://zyneto.com/privacy-policy",
            description:
              "What personal information Zyneto collects, why we hold it, how long we keep it, and how to request access, correction or deletion.",
            image: [
              "https://cdn.zyneto.com/public/logo-icon-black-512.png",
              "https://cdn.zyneto.com/public/zyneto-reception.jpg",
            ],
            datePublished: "2025-08-28T00:00:00Z",
            dateModified: "2025-08-28T00:00:00Z",
            author: { "@id": ORG_ID },
            publisher: { "@id": ORG_ID },
            mainEntity: {
              "@type": "Article",
              "@id": "https://zyneto.com/privacy-policy#Article",
              headline:
                "Privacy Policy: How We Handle Your Data | Zyneto",
              description:
                "Comprehensive privacy policy detailing how Zyneto handles user data, cookies, and privacy protection measures.",
              image:
                "https://zyneto.com/static/assets/privacy-terms/privacy.png",
              author: { "@id": ORG_ID },
              publisher: { "@id": ORG_ID },
              datePublished: "2025-08-28T00:00:00Z",
              dateModified: "2025-08-28T00:00:00Z",
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
