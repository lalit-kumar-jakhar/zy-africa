import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";
import { isIndustryLive } from "@/constants/feature-flags";
import { industry } from "@/data/industries/healthcare-software-development";

const OG_IMAGE = "/static/assets/industries/healthcare-software-development-og.webp";

const description =
  "Healthcare software development: patient index, access control, HL7 and FHIR, eligibility and claims. Oman PDPL, Saudi NPHIES and HIPAA aware.";

export const metadata: Metadata = {
  title: "Healthcare Software Development Company | HL7 and FHIR",
  description,
  alternates: {
    canonical: "https://zyneto.com/industries/healthcare-software-development",
  },
  openGraph: {
    title: "Healthcare Software Development Company | HL7 and FHIR",
    description,
    url: "https://zyneto.com/industries/healthcare-software-development",
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Clinical and healthcare systems by Zyneto",
      },
    ],
  },
};

export default function HealthcareLifeSciencesPage() {
  if (!isIndustryLive("/industries/healthcare-software-development")) notFound();

  return (
    <IndustryPage
      data={industry}
      url="https://zyneto.com/industries/healthcare-software-development"
      name="Healthcare and Life Sciences"
      description={description}
      image={`https://zyneto.com${OG_IMAGE}`}
    />
  );
}
