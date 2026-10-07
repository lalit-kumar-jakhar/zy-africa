import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPage from "@/components/industries/IndustryPage";
import { isIndustryLive } from "@/constants/feature-flags";
import { industry } from "@/data/industries/saas-platform-development";

const OG_IMAGE = "/static/assets/industries/saas-platform-development-og.webp";

export const metadata: Metadata = {
  title: "SaaS Development Company | Multi-Tenant Platforms",
  description:
    "Custom SaaS platform development: the multi-tenant spine, SSO and SCIM bundle, and metered billing. Phase one 900 to 1,400 hours.",
  alternates: {
    canonical: "https://zyneto.com/industries/saas-platform-development",
  },
  openGraph: {
    title: "SaaS Development Company | Multi-Tenant Platforms",
    description:
      "Custom SaaS platform development: the multi-tenant spine, SSO and SCIM bundle, and metered billing. Phase one 900 to 1,400 hours.",
    url: "https://zyneto.com/industries/saas-platform-development",
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "SaaS platform development by Zyneto",
      },
    ],
  },
};

export default function SaasProductivityPage() {
  if (!isIndustryLive("/industries/saas-platform-development")) notFound();

  return (
    <IndustryPage
      data={industry}
      url="https://zyneto.com/industries/saas-platform-development"
      name="SaaS and Productivity"
      description="Custom SaaS platform development: the multi-tenant spine, SSO and SCIM bundle, and metered billing. Phase one 900 to 1,400 hours."
      image={`https://zyneto.com${OG_IMAGE}`}
    />
  );
}
