import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";
import { isIndustryLive } from "@/constants/feature-flags";
import { industry } from "@/data/industries/logistics-software-development";

const OG_IMAGE = "/static/assets/industries/logistics-software-development-og.webp";

export const metadata: Metadata = {
  title: "Logistics Software Development Company | WMS and TMS",
  description:
    "Logistics software development for Oman and the GCC: scheme and claim engines, offline van sales, warehouse flows and retailer portals.",
  alternates: {
    canonical: "https://zyneto.com/industries/logistics-software-development",
  },
  openGraph: {
    title: "Logistics Software Development Company | WMS and TMS",
    description:
      "Logistics software development for Oman and the GCC: scheme and claim engines, offline van sales, warehouse flows and retailer portals.",
    url: "https://zyneto.com/industries/logistics-software-development",
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Logistics and distribution software by Zyneto",
      },
    ],
  },
};

export default function LogisticsDistributionPage() {
  if (!isIndustryLive("/industries/logistics-software-development")) notFound();

  return (
    <IndustryPage
      data={industry}
      url="https://zyneto.com/industries/logistics-software-development"
      name="Logistics, Distribution and FMCG"
      description="Logistics software development for Oman and the GCC: scheme and claim engines, offline van sales, warehouse flows and retailer portals."
      image={`https://zyneto.com${OG_IMAGE}`}
    />
  );
}
