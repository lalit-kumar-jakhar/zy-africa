import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";
import { isIndustryLive } from "@/constants/feature-flags";
import { industry } from "@/data/industries/insurance-software-development";

const OG_IMAGE = "/static/assets/industries/insurance-software-development-og.webp";

const description =
  "Insurance software development for insurers, MGAs, brokers and TPAs: versioned policy records, reserve history, ACORD and FHIR integration.";

export const metadata: Metadata = {
  title: "Insurance Software Development Company | Claims and Policy",
  description,
  alternates: {
    canonical: "https://zyneto.com/industries/insurance-software-development",
  },
  openGraph: {
    title: "Insurance Software Development Company | Claims and Policy",
    description,
    url: "https://zyneto.com/industries/insurance-software-development",
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Policy, claims and underwriting systems by Zyneto",
      },
    ],
  },
};

export default function InsurancePage() {
  if (!isIndustryLive("/industries/insurance-software-development")) notFound();

  return (
    <IndustryPage
      data={industry}
      url="https://zyneto.com/industries/insurance-software-development"
      name="Insurance"
      description={description}
      image={`https://zyneto.com${OG_IMAGE}`}
    />
  );
}
