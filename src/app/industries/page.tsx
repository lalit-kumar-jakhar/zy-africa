import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { FaArrowRight } from "react-icons/fa6";
import { INDUSTRIES_ENABLED, liveIndustries } from "@/constants/feature-flags";
import IndustriesTop from "@/components/industries/IndustriesTop";
import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import Reveal from "@/components/common/Reveal";
import { industryGridClass } from "@/utils/industry-grid";
import {
  safeJsonLd,
  buildBreadcrumbList,
  buildCollectionPage,
  buildFaqPage,
} from "@/components/seo/jsonld";

const Partnerships = dynamic(
  () => import("@/components/home/PartnerShips/PartnerShips")
);
const TechStack = dynamic(() => import("@/components/home/TechStack/TechStack"));
const FaqSection = dynamic(
  () => import("@/components/home/FaqSection/FaqSection")
);
const Testimonial = dynamic(
  () => import("@/components/home/Testimonials/Testimonials")
);
const AdvServices = dynamic(() => import("@/components/services/AdvServices"));

const PAGE_URL = "https://zyneto.com/industries";

const heroSection = {
  eyebrow: "Industries",
  title: "Sector software shaped by how the ",
  titleHighlight: "operation really runs",
  description:
    "Every sector breaks in its own way. A stock number means something different in a warehouse than it does on a product page, and a tenant boundary means something different again. These pages set out what we have learned building in each one, including what we would tell you not to build.",
  features: [
    "Oman, the Gulf and India",
    "$40 to $100 per hour",
    "Published rates, no quote before discovery",
    "Written by the engineers who built it",
  ],
  scrollTarget: "#sectors",
  ctaText: "Book a 30 minute technical call",
};

const sectorDetail: Record<
  string,
  { lead: string; covers: string[]; proof: string }
> = {
  "/industries/logistics-software-development": {
    lead: "Scheme and claim engines, offline van sales apps, warehouse pick and pack flows and retailer portals, with the ERP and e-invoicing integration underneath.",
    covers: [
      "Scheme and claim settlement",
      "Offline first field apps",
      "Warehouse pick and pack",
      "Fawtara and Bayan aware",
    ],
    proof: "National Distribution and Al Amri Express, Oman",
  },
  "/industries/retail-software-development": {
    lead: "Storefront and checkout, order routing and available to promise, store and dark store picking, and the ERP, POS and e-invoicing integration that decides whether the stock number is a promise or a guess.",
    covers: [
      "Order routing and available to promise",
      "POS and ERP integration",
      "ZATCA, Fawtara and DPDP",
      "Store and dark store picking",
    ],
    proof: "Al Amri Express and Stylebank",
  },
  "/industries/saas-platform-development": {
    lead: "Workspaces and permission matrices, tenant isolation you can prove to an auditor, the enterprise identity bundle procurement asks for, and metered billing that reconciles.",
    covers: [
      "Tenant isolation you can prove",
      "SSO, SCIM and enterprise identity",
      "Metered billing that reconciles",
      "Per tenant AI budgets",
    ],
    proof: "Kroolo, Famepilot and Stylebank",
  },
};

const industriesFaqs = [
  {
    question: "How is an industry page different from a service page?",
    answer:
      "A service page describes a technology we work in. An industry page describes a business we have built for: the systems it already runs, the regulation it sits under, the arithmetic behind a phase one, and the specific ways projects in that sector go wrong. It is written to answer whether we understand your operation, not whether we know the framework.",
  },
  {
    question: "Why are only a few sectors listed?",
    answer:
      "Because a page goes up when we have something specific to say. Each one runs several thousand words of named systems, real regulation and costed examples, and that takes research we would rather do properly than publish thin. More sectors are in progress and will appear as they are finished.",
  },
  {
    question: "What if my sector is not here yet?",
    answer:
      "About seventy percent of any of these pages is sector research and thirty percent is what we learned on an engagement. The engineering underneath transfers, so bring us the part of your problem you think is hardest, usually the regulation, the data model or a physical constraint, and we will scope from that.",
  },
  {
    question: "Do these pages carry real client work?",
    answer:
      "Where we have it and are allowed to name it, yes, and the client is named. Where a sector page has no named engagement behind it, it carries no proof section at all rather than a generic one. We do not invent a client, a metric or a certification to fill a gap.",
  },
  {
    question: "What does a phase one cost?",
    answer:
      "Each page shows the arithmetic rather than a range: hours by module, the rate band applied, and a worked example totalling to a figure. Rates run $40 to $100 per hour by seniority, and mixed squads blend to roughly $60 to $70. Nothing is quoted before discovery.",
  },
  {
    question: "Which markets do you build for?",
    answer:
      "Oman first, then the wider Gulf and India. That shapes the compliance sections in particular, so ZATCA in Saudi Arabia, Fawtara in Oman, PINT AE in the UAE, and DPDP and the RBI authentication rules in India are treated as things that change the order flow, not as paperwork bolted on at the end.",
  },
];

export const metadata: Metadata = {
  title: "Industries We Build For | Zyneto",
  description:
    "Sector software for logistics, retail and SaaS across Oman, the Gulf and India. Named systems, real regulation and costed phase one examples.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Industries We Build For | Zyneto",
    description:
      "Sector software for logistics, retail and SaaS across Oman, the Gulf and India. Named systems, real regulation and costed phase one examples.",
    url: PAGE_URL,
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/static/assets/industries/industries-og.webp",
        width: 1200,
        height: 630,
        alt: "Industries Zyneto builds for",
      },
    ],
  },
};

export default function IndustriesIndexPage() {
  if (!INDUSTRIES_ENABLED) notFound();

  const sectors = liveIndustries();
  if (!sectors.length) notFound();

  return (
    <>
      <IndustriesTop heroSection={heroSection} />

      <Partnerships />

      <section
        id="sectors"
        className="scroll-mt-[calc(var(--nav-height,72px)+1.5rem)] bg-white py-12 md:py-24"
      >
        <div className="container mx-auto px-4">
          <Reveal>
            <IndustrySectionHead
              align="left"
              eyebrow="Sectors"
              title="Where we have built enough to be useful"
              description="Each page is written for someone deciding whether to hire us, so it leads with the systems, the regulation and the cost arithmetic rather than with a pitch."
            />
          </Reveal>

          <div
            className={`mt-8 grid grid-cols-1 gap-5 ${industryGridClass(
              sectors.length,
              "lg",
            )}`}
          >
            {sectors.map((sector) => {
              const detail = sectorDetail[sector.url];
              return (
                <Reveal key={sector.url}>
                  <Link
                    href={sector.url}
                    prefetch={false}
                    className="group flex h-full flex-col rounded-xl border border-[#E8E8ED] bg-[#FAFAFB] p-6 transition-colors duration-200 hover:border-[#161616] hover:bg-[#161616] md:p-7"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#fed2bb]/70 bg-[linear-gradient(180deg,#fff7f0,#ffffff)] shadow-sm">
                      <Image
                        src={sector.icon}
                        alt=""
                        aria-hidden
                        width={28}
                        height={28}
                        className="object-contain"
                        draggable={false}
                      />
                    </div>

                    <h3 className="mt-5 text-[20px] font-semibold leading-snug text-[#161616] transition-colors duration-200 group-hover:text-white">
                      {sector.label}
                    </h3>

                    <p className="mt-3 text-[15px] leading-relaxed text-[#616161] transition-colors duration-200 group-hover:text-white/75">
                      {detail?.lead ?? sector.description}
                    </p>

                    {detail ? (
                      <ul className="mt-5 space-y-2">
                        {detail.covers.map((line) => (
                          <li
                            key={line}
                            className="flex items-start gap-2 text-[14px] text-[#161616] transition-colors duration-200 group-hover:text-white/85"
                          >
                            <span className="mt-1.75 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9900ff] transition-colors duration-200 group-hover:bg-white/70" />
                            {line}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    <div className="mt-auto pt-6">
                      {detail ? (
                        <p className="text-[13px] text-[#8A8A94] transition-colors duration-200 group-hover:text-white/55">
                          {detail.proof}
                        </p>
                      ) : null}
                      <span className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-medium text-[#161616] transition-colors duration-200 group-hover:text-white">
                        Read the page
                        <FaArrowRight className="text-[11px] transition-transform duration-200 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFB] py-12 md:py-24">
        <div className="container mx-auto px-4">
          <Reveal>
            <IndustrySectionHead
              align="left"
              eyebrow="What is on each page"
              title="Written to be checked, not skimmed"
              description="The same structure every time, so you can compare a sector against your own operation instead of reading marketing."
            />
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "The systems you already run",
                body: "Named ERPs, POS estates, identity providers and payment gateways, with the integration constraint each one imposes rather than a logo wall.",
              },
              {
                title: "Regulation that changes the build",
                body: "Five global standards and the regional rules that actually alter an order flow, with the dates they take effect and what non compliance costs.",
              },
              {
                title: "What goes wrong, and why",
                body: "The failure patterns we have watched repeat in that sector, written plainly enough that you can check whether yours is already happening.",
              },
              {
                title: "Build, buy, or buy and extend",
                body: "Where a platform is genuinely the better answer, including the cases where our recommendation is not to hire us for the build at all.",
              },
              {
                title: "Cost with the arithmetic shown",
                body: "Hours by module, the rate band applied to each, and a worked example that totals to a figure you can argue with.",
              },
              {
                title: "How delivery actually runs",
                body: "The artefacts you receive, who is in the squad, what happens at cutover, and what support looks like after go live.",
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <article className="flex h-full flex-col rounded-xl border border-[#E8E8ED] bg-white p-6">
                  <h3 className="text-[17px] font-semibold text-[#161616]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#616161]">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TechStack
        title="The Stack These Sectors Run On"
        description="Every sector pushes us toward different tools, and the operation decides which ones."
      />

      <FaqSection faqSection={industriesFaqs} />

      <Testimonial />

      <AdvServices
        advertisement={{
          title: "Not sure which of these describes your operation?",
          description: "Bring us the part you think is hardest.",
          ctaText: "Book a technical call",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(
            buildBreadcrumbList([
              { name: "Home", item: "https://zyneto.com" },
              { name: "Industries", item: PAGE_URL },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(
            buildCollectionPage({
              id: `${PAGE_URL}#collection`,
              url: PAGE_URL,
              name: "Industries",
              description:
                "Sector software pages from Zyneto Global Technologies. Each one covers the systems that sector runs, the regulation it sits under, what goes wrong, and what a phase one costs.",
              itemUrls: sectors.map((s) => `https://zyneto.com${s.url}`),
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(buildFaqPage(industriesFaqs, PAGE_URL)),
        }}
      />
    </>
  );
}
