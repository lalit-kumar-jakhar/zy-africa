import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";
import { isIndustryLive } from "@/constants/feature-flags";
import { industry } from "@/data/industries/travel-software-development";

const OG_IMAGE = "/static/assets/industries/travel-software-development-og.webp";

const description =
  "Travel software development for operators and distributors. One authoritative inventory, rate plans as data, bookings that survive a change.";

export const metadata: Metadata = {
  title: "Travel Software Development Company | Booking and GDS",
  description,
  alternates: {
    canonical: "https://zyneto.com/industries/travel-software-development",
  },
  openGraph: {
    title: "Travel Software Development Company | Booking and GDS",
    description,
    url: "https://zyneto.com/industries/travel-software-development",
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Booking, inventory and distribution systems by Zyneto",
      },
    ],
  },
};

export default function TravelHospitalityPage() {
  if (!isIndustryLive("/industries/travel-software-development")) notFound();

  return (
    <IndustryPage
      data={industry}
      url="https://zyneto.com/industries/travel-software-development"
      name="Travel and Hospitality"
      description={description}
      image={`https://zyneto.com${OG_IMAGE}`}
    />
  );
}
