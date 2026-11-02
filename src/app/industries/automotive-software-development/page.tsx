import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";
import { isIndustryLive } from "@/constants/feature-flags";
import { industry } from "@/data/industries/automotive-software-development";

const OG_IMAGE = "/static/assets/industries/automotive-software-development-og.webp";

const description =
  "Automotive software development for dealer, fleet and aftersales: VIN as the spine, parts supersession, telematics joined to service history.";

export const metadata: Metadata = {
  title: "Automotive Software Development | Zyneto",
  description,
  alternates: {
    canonical: "https://zyneto.com/industries/automotive-software-development",
  },
  openGraph: {
    title: "Automotive Software Development | Zyneto",
    description,
    url: "https://zyneto.com/industries/automotive-software-development",
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Dealer, fleet and aftersales systems for automotive by Zyneto",
      },
    ],
  },
};

export default function AutomotiveMobilityPage() {
  if (!isIndustryLive("/industries/automotive-software-development")) notFound();

  return (
    <IndustryPage
      data={industry}
      url="https://zyneto.com/industries/automotive-software-development"
      name="Automotive and Mobility"
      description={description}
      image={`https://zyneto.com${OG_IMAGE}`}
    />
  );
}
