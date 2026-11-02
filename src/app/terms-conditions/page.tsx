import { Metadata } from "next";
import { safeJsonLd, buildBreadcrumbList, ORG_ID, WEBSITE_ID } from "@/components/seo/jsonld";
import TermsConditions from "@/components/termsConditions/TermsConditions";

export const metadata: Metadata = {
  title:
    "Terms and Conditions: Projects and Payment | Zyneto",
  description:
    "Zyneto's terms of engagement: project responsibilities, payment terms, deadlines, intellectual property and what each side commits to.",
  alternates: {
    canonical: "https://zyneto.com/terms-conditions",
  },
  openGraph: {
    title:
      "Terms and Conditions: Projects and Payment | Zyneto",
    description:
      "Zyneto's terms of engagement: project responsibilities, payment terms, deadlines, intellectual property and what each side commits to.",
    url: "https://zyneto.com/terms-conditions",
    siteName: "Zyneto Global Technologies",
    images: [
      {
        url: `https://zyneto.com/static/assets/privacy-terms/terms-conditions.png`,
        width: 1200,
        height: 630,
        alt: "Zyneto Terms & Conditions - Project Guidelines & Client Commitments",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Terms and Conditions: Projects and Payment | Zyneto",
    description:
      "Zyneto's terms of engagement: project responsibilities, payment terms, deadlines, intellectual property and what each side commits to.",
    site: "@zyneto",
    creator: "@zyneto",
    images: [
      `https://zyneto.com/static/assets/privacy-terms/terms-conditions.png`,
    ],
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

export default function TermsConditionsPage() {
  return (
    <>
      <TermsConditions />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(buildBreadcrumbList([
              { name: "Home", item: "https://zyneto.com" },
              { name: "Terms & Conditions", item: "https://zyneto.com/terms-conditions" },
            ])),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://zyneto.com/terms-conditions#WebPage",
            name: "Terms and Conditions: Projects and Payment | Zyneto",
            url: "https://zyneto.com/terms-conditions",
            description:
              "Zyneto's terms of engagement: project responsibilities, payment terms, deadlines, intellectual property and what each side commits to.",
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
              "@id": "https://zyneto.com/terms-conditions#Article",
              headline:
                "Terms and Conditions: Projects and Payment | Zyneto",
              description:
                "Comprehensive terms and conditions outlining project guidelines, client responsibilities, payment terms, deadlines, and service commitments for Zyneto projects.",
              image:
                "https://zyneto.com/static/assets/privacy-terms/terms-conditions.png",
              author: { "@id": ORG_ID },
              publisher: { "@id": ORG_ID },
              datePublished: "2025-08-28T00:00:00Z",
              dateModified: "2025-08-28T00:00:00Z",
            },
            inLanguage: "en-US",
            isPartOf: {
              "@id": WEBSITE_ID,
            },
            potentialAction: {
              "@type": "ReadAction",
              target: ["https://zyneto.com/terms-conditions"],
            },
          }),
        }}
      />
    </>
  );
}
