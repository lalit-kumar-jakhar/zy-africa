import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";
import { isIndustryLive } from "@/constants/feature-flags";
import { industry } from "@/data/industries/real-estate-software-development";

const OG_IMAGE = "/static/assets/industries/real-estate-software-development-og.webp";

const description =
  "Real estate software development: tenancy, lease, client money and service charge systems for landlords, agents and developers.";

export const metadata: Metadata = {
  title: "Real Estate Software Development Company | Property Management",
  description,
  alternates: {
    canonical: "https://zyneto.com/industries/real-estate-software-development",
  },
  openGraph: {
    title: "Real Estate Software Development Company | Property Management",
    description,
    url: "https://zyneto.com/industries/real-estate-software-development",
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Property, tenancy and portfolio systems by Zyneto",
      },
    ],
  },
};

export default function RealEstateProptechPage() {
  if (!isIndustryLive("/industries/real-estate-software-development")) notFound();

  return (
    <IndustryPage
      data={industry}
      url="https://zyneto.com/industries/real-estate-software-development"
      name="Real Estate and PropTech"
      description={description}
      image={`https://zyneto.com${OG_IMAGE}`}
    />
  );
}
