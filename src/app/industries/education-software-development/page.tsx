import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";
import { isIndustryLive } from "@/constants/feature-flags";
import { industry } from "@/data/industries/education-software-development";

const OG_IMAGE = "/static/assets/industries/education-software-development-og.webp";

const description =
  "Education software development: student records scoped to the academic session, admissions, fees, gradebooks and LTI 1.3. DPDP and FERPA aware.";

export const metadata: Metadata = {
  title: "Education Software Development Company | LMS and SIS",
  description,
  alternates: {
    canonical: "https://zyneto.com/industries/education-software-development",
  },
  openGraph: {
    title: "Education Software Development Company | LMS and SIS",
    description,
    url: "https://zyneto.com/industries/education-software-development",
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Student systems and edtech platforms by Zyneto",
      },
    ],
  },
};

export default function EducationEdtechPage() {
  if (!isIndustryLive("/industries/education-software-development")) notFound();

  return (
    <IndustryPage
      data={industry}
      url="https://zyneto.com/industries/education-software-development"
      name="Education and Edtech"
      description={description}
      image={`https://zyneto.com${OG_IMAGE}`}
    />
  );
}
