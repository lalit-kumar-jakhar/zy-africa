import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";
import { isIndustryLive } from "@/constants/feature-flags";
import { industry } from "@/data/industries/fintech-banking-software-development";

const OG_IMAGE = "/static/assets/industries/fintech-banking-software-development-og.webp";

const DESCRIPTION =
  "Fintech and banking software development: core integration, payment rails, double-entry ledger, reconciliation, KYC and AML. $40 to $100 per hour.";
const TITLE = "Fintech and Banking Software Development | Zyneto";
const PAGE_URL = "https://zyneto.com/industries/fintech-banking-software-development";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Fintech and banking software development by Zyneto",
      },
    ],
  },
};

export default function FintechBankingPage() {
  if (!isIndustryLive("/industries/fintech-banking-software-development")) notFound();

  return (
    <IndustryPage
      data={industry}
      url={PAGE_URL}
      name="Fintech and Banking"
      description={DESCRIPTION}
      image={`https://zyneto.com${OG_IMAGE}`}
    />
  );
}
