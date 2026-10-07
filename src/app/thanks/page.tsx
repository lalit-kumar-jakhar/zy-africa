import { Metadata } from "next";
import nextDynamic from "next/dynamic";
import HeroSection from "@/components/thanks/HeroSection";
import ProjectProcess from "@/components/thanks/ProjectProcess";

const Testimonial = nextDynamic(
  () => import("@/components/home/Testimonials/Testimonials"),
  {
    loading: () => (
      <div className="animate-pulse bg-gray-200 h-96 rounded-lg" />
    ),
  }
);

export const dynamic = "force-static";
export const revalidate = 300;

export const metadata: Metadata = {
  metadataBase: new URL("https://zyneto.com"),
  title: "Thank You | Zyneto - Your Request Has Been Received",
  description:
    "Thank you for submitting your request. We have successfully received your inquiry, and one of our representatives will get back to you shortly.",
  openGraph: {
    title: "Thank You | Zyneto - Your Request Has Been Received",
    description:
      "Thank you for submitting your request. We have successfully received your inquiry, and one of our representatives will get back to you shortly.",
    url: "https://zyneto.com/thanks",
    siteName: "Zyneto Global Technologies",
    images: [
      {
        url: `https://cdn.zyneto.com/public/zyneto-logo-meta.png`,
        width: 1200,
        height: 630,
        alt: "Thank You - Zyneto",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thank You | Zyneto - Your Request Has Been Received",
    description:
      "Thank you for submitting your request. We have successfully received your inquiry, and one of our representatives will get back to you shortly.",
    site: "@zyneto",
    creator: "@zyneto",
    images: [`https://cdn.zyneto.com/public/zyneto-logo-meta.png`],
  },
  alternates: {
    canonical: "https://zyneto.com/thanks",
  },
  robots: {
    index: false,
    follow: true,
  },
  other: {
    "revisit-after": "2 days",
    rating: "Safe For Kids",
    "document-type": "Public",
    language: "English",
  },
};

export default function ThanksPage() {
  return (
    <>
      <HeroSection />
      <ProjectProcess />
      <Testimonial />
    </>
  );
}
