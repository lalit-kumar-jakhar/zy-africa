import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";
import { isIndustryLive } from "@/constants/feature-flags";
import { industry } from "@/data/industries/media-software-development";

const OG_IMAGE = "/static/assets/industries/media-software-development-og.webp";

export const metadata: Metadata = {
  title: "Media Software Development | Zyneto",
  description:
    "Media software development: rights and royalty systems, catalogue metadata on DDEX, ISRC and ISWC, and statements you can defend.",
  alternates: {
    canonical: "https://zyneto.com/industries/media-software-development",
  },
  openGraph: {
    title: "Media Software Development | Zyneto",
    description:
      "Media software development: rights and royalty systems, catalogue metadata on DDEX, ISRC and ISWC, and statements you can defend.",
    url: "https://zyneto.com/industries/media-software-development",
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Media and Entertainment software by Zyneto",
      },
    ],
  },
};

export default function MediaEntertainmentPage() {
  if (!isIndustryLive("/industries/media-software-development")) notFound();

  return (
    <IndustryPage
      data={industry}
      url="https://zyneto.com/industries/media-software-development"
      name="Media and Entertainment"
      description="Media software development: rights and royalty systems, catalogue metadata on DDEX, ISRC and ISWC, and statements you can defend."
      image={`https://zyneto.com${OG_IMAGE}`}
    />
  );
}
