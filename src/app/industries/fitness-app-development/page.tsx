import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";
import { isIndustryLive } from "@/constants/feature-flags";
import { industry } from "@/data/industries/fitness-app-development";

const OG_IMAGE = "/static/assets/industries/fitness-app-development-og.webp";

const description =
  "Fitness app development for gyms, studios and franchises: membership, scheduling, entitlement modelling, dunning and cohort retention.";

export const metadata: Metadata = {
  title: "Fitness App Development Company | Zyneto",
  description,
  alternates: {
    canonical: "https://zyneto.com/industries/fitness-app-development",
  },
  openGraph: {
    title: "Fitness App Development Company | Zyneto",
    description,
    url: "https://zyneto.com/industries/fitness-app-development",
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Membership, scheduling and retention systems by Zyneto",
      },
    ],
  },
};

export default function FitnessWellnessPage() {
  if (!isIndustryLive("/industries/fitness-app-development")) notFound();

  return (
    <IndustryPage
      data={industry}
      url="https://zyneto.com/industries/fitness-app-development"
      name="Fitness and Wellness"
      description={description}
      image={`https://zyneto.com${OG_IMAGE}`}
    />
  );
}
