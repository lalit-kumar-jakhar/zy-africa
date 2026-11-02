import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";
import { isIndustryLive } from "@/constants/feature-flags";
import { industry } from "@/data/industries/manufacturing-software-development";

const OG_IMAGE = "/static/assets/industries/manufacturing-software-development-og.webp";

export const metadata: Metadata = {
  title: "Manufacturing Software Development | Zyneto",
  description:
    "Manufacturing software development: garment ERP, costing and BOM, cut order and marker, job work reconciliation and GST docs. $40 to $100 per hour.",
  alternates: {
    canonical: "https://zyneto.com/industries/manufacturing-software-development",
  },
  openGraph: {
    title: "Manufacturing Software Development | Zyneto",
    description:
      "Manufacturing software development: garment ERP, costing and BOM, cut order and marker, job work reconciliation and GST docs. $40 to $100 per hour.",
    url: "https://zyneto.com/industries/manufacturing-software-development",
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Manufacturing and Apparel software by Zyneto",
      },
    ],
  },
};

export default function ManufacturingApparelPage() {
  if (!isIndustryLive("/industries/manufacturing-software-development")) notFound();

  return (
    <IndustryPage
      data={industry}
      url="https://zyneto.com/industries/manufacturing-software-development"
      name="Manufacturing and Apparel"
      description="Manufacturing software development: garment ERP, costing and BOM, cut order and marker, job work reconciliation and GST docs. $40 to $100 per hour."
      image={`https://zyneto.com${OG_IMAGE}`}
    />
  );
}
