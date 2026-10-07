import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";
import { isIndustryLive } from "@/constants/feature-flags";
import { industry } from "@/data/industries/community-app-development";

const OG_IMAGE = "/static/assets/industries/community-app-development-og.webp";

const description =
  "Community app development: moderation pipelines, decision records, appeals and age assurance. DSA, UK Online Safety Act, India IT Rules.";

export const metadata: Metadata = {
  title: "Community App Development Company | Zyneto",
  description,
  alternates: {
    canonical: "https://zyneto.com/industries/community-app-development",
  },
  openGraph: {
    title: "Community App Development Company | Zyneto",
    description,
    url: "https://zyneto.com/industries/community-app-development",
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Trust and safety systems for community platforms by Zyneto",
      },
    ],
  },
};

export default function SocialCommunityPage() {
  if (!isIndustryLive("/industries/community-app-development")) notFound();

  return (
    <IndustryPage
      data={industry}
      url="https://zyneto.com/industries/community-app-development"
      name="Social and Community Platforms"
      description={description}
      image={`https://zyneto.com${OG_IMAGE}`}
    />
  );
}
