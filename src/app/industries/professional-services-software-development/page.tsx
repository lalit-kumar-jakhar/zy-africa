import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";
import { isIndustryLive } from "@/constants/feature-flags";
import { industry } from "@/data/industries/professional-services-software-development";

const OG_IMAGE = "/static/assets/industries/professional-services-software-development-og.webp";

const description =
  "Professional services software development: time, billing, rate cards, work in progress and revenue recognition for consultancies and firms.";

export const metadata: Metadata = {
  title: "Professional Services Software Development | Zyneto",
  description,
  alternates: {
    canonical: "https://zyneto.com/industries/professional-services-software-development",
  },
  openGraph: {
    title: "Professional Services Software Development | Zyneto",
    description,
    url: "https://zyneto.com/industries/professional-services-software-development",
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Time, billing and client delivery systems by Zyneto",
      },
    ],
  },
};

export default function ProfessionalServicesPage() {
  if (!isIndustryLive("/industries/professional-services-software-development")) notFound();

  return (
    <IndustryPage
      data={industry}
      url="https://zyneto.com/industries/professional-services-software-development"
      name="Professional Services"
      description={description}
      image={`https://zyneto.com${OG_IMAGE}`}
    />
  );
}
