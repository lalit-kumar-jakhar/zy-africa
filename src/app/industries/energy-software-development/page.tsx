import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";
import { isIndustryLive } from "@/constants/feature-flags";
import { industry } from "@/data/industries/energy-software-development";

const OG_IMAGE = "/static/assets/industries/energy-software-development-og.webp";

const description =
  "Energy software development for utilities, suppliers and operators: metering, billing and grid data, interval validation and settlement.";

export const metadata: Metadata = {
  title: "Energy Software Development | Zyneto",
  description,
  alternates: {
    canonical: "https://zyneto.com/industries/energy-software-development",
  },
  openGraph: {
    title: "Energy Software Development | Zyneto",
    description,
    url: "https://zyneto.com/industries/energy-software-development",
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Metering, billing and grid data systems by Zyneto",
      },
    ],
  },
};

export default function EnergyUtilitiesPage() {
  if (!isIndustryLive("/industries/energy-software-development")) notFound();

  return (
    <IndustryPage
      data={industry}
      url="https://zyneto.com/industries/energy-software-development"
      name="Energy and Utilities"
      description={description}
      image={`https://zyneto.com${OG_IMAGE}`}
    />
  );
}
