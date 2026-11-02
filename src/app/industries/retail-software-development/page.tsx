import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";
import { isIndustryLive } from "@/constants/feature-flags";
import { industry } from "@/data/industries/retail-software-development";

const OG_IMAGE = "/static/assets/industries/retail-software-development-og.webp";

export const metadata: Metadata = {
  title: "Retail Operations Software Development | Zyneto",
  description:
    "Retail operations software development for the Gulf and India: one honest stock number, POS and ERP integration, ZATCA and Fawtara.",
  alternates: {
    canonical: "https://zyneto.com/industries/retail-software-development",
  },
  openGraph: {
    title: "Retail Operations Software Development | Zyneto",
    description:
      "Retail operations software development for the Gulf and India: one honest stock number, POS and ERP integration, ZATCA and Fawtara.",
    url: "https://zyneto.com/industries/retail-software-development",
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Retail and commerce systems by Zyneto",
      },
    ],
  },
};

export default function RetailEcommercePage() {
  if (!isIndustryLive("/industries/retail-software-development")) notFound();

  return (
    <IndustryPage
      data={industry}
      url="https://zyneto.com/industries/retail-software-development"
      name="Retail and E-commerce"
      description="Retail operations software development for the Gulf and India: one honest stock number, POS and ERP integration, ZATCA and Fawtara."
      image={`https://zyneto.com${OG_IMAGE}`}
    />
  );
}
