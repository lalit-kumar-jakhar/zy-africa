import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";
import { isIndustryLive } from "@/constants/feature-flags";
import { industry } from "@/data/industries/food-service-software-development";

const OG_IMAGE = "/static/assets/industries/food-service-software-development-og.webp";

const description =
  "Food service software development: one order model across dine-in, takeaway and aggregators, kitchen display and franchise reporting.";

export const metadata: Metadata = {
  title: "Food Service Software Development | Zyneto",
  description,
  alternates: {
    canonical: "https://zyneto.com/industries/food-service-software-development",
  },
  openGraph: {
    title: "Food Service Software Development | Zyneto",
    description,
    url: "https://zyneto.com/industries/food-service-software-development",
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Kitchen, POS and franchise systems for food service by Zyneto",
      },
    ],
  },
};

export default function FoodServiceRestaurantsPage() {
  if (!isIndustryLive("/industries/food-service-software-development")) notFound();

  return (
    <IndustryPage
      data={industry}
      url="https://zyneto.com/industries/food-service-software-development"
      name="Food Service and Restaurants"
      description={description}
      image={`https://zyneto.com${OG_IMAGE}`}
    />
  );
}
