import type { Metadata } from "next";
import Link from "@/components/common/ContentLink";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaArrowRight } from "react-icons/fa6";
import { categories } from "@/components/shared/Navbar/Dropdowns/categories";
import { isShippedHref } from "@/constants/shipped-routes";
import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import Reveal from "@/components/common/Reveal";
import {
  safeJsonLd,
  buildBreadcrumbList,
  buildCollectionPage,
  buildFaqPage,
} from "@/components/seo/jsonld";
import IndustriesTop from "@/components/industries/IndustriesTop";

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

const PAGE_URL = "https://zyneto.com/solutions";

const industriesTop = {
  title: "App builds where the hard part is already known",
  description:
    "Six product types we have built more than once, so the estimate starts from the parts that actually break: moderation, settlement, catalogue scale, licensing and payment failure. Rates run $40 to $100 per hour, published, with no quote before discovery.",
  features: [
    "iOS, Android and web",
    "$40 to $100 per hour, published",
    "Customer, admin and operator panels",
    "Oman, the Gulf and India",
  ],
  bgImage: "/static/assets/solutions/solutions-bg.webp",
};

const solutionDetail: Record<
  string,
  { lead: string; hard: string; covers: string[] }
> = {
  "/solutions/dating-app-development-company": {
    lead: "Matching, chat, verification and the moderation stack underneath, for iOS, Android and web.",
    hard: "Trust and safety is the build",
    covers: ["Matching and discovery", "Identity verification", "Moderation at scale", "Chat and reporting"],
  },
  "/solutions/fantasy-sports-app-development-company": {
    lead: "Contests, live scoring and leaderboards, with the scoring engine designed before the feature list.",
    hard: "Live data accuracy decides the timeline",
    covers: ["Contest and league engines", "Live scoring feeds", "Team and roster management", "Anti fraud controls"],
  },
  "/solutions/restaurant-app-development-company": {
    lead: "Ordering, POS integration and delivery across single sites, chains and franchise groups.",
    hard: "The POS integration is the project",
    covers: ["Ordering and menus", "POS and KDS integration", "Delivery and dispatch", "Multi location reporting"],
  },
  "/solutions/ecommerce-app-development": {
    lead: "Catalogue, checkout, payments and returns, plus the migration path when you are moving from something older.",
    hard: "Catalogue model and checkout resilience",
    covers: ["Storefront and product pages", "Checkout and payments", "Catalogue and search", "Replatform and migration"],
  },
  "/solutions/music-streaming-app-development-company": {
    lead: "Catalogue, licensing and offline playback, with delivery economics considered rather than discovered.",
    hard: "Rights and catalogue metadata",
    covers: ["Catalogue and metadata", "Licensing and reporting", "Offline playback", "Streaming and CDN cost"],
  },
  "/solutions/classified-app-development": {
    lead: "Listings, search, chat and moderation for marketplaces where supply and demand both need managing.",
    hard: "Search relevance and listing quality",
    covers: ["Listings and categories", "Search and filters", "Buyer and seller chat", "Moderation and fraud"],
  },
};

const solutionsFaqs = [
  {
    question: "Are these templates or custom builds?",
    answer:
      "Custom builds. What repeats is the understanding rather than the code: we already know where a dating app fails on moderation, where a fantasy app fails on settlement, and where an ecommerce build fails on the catalogue model. That is what shortens discovery, not a reused codebase.",
  },
  {
    question: "What does one of these cost?",
    answer:
      "Each page shows hours by module and applies the rate band rather than quoting a range. Rates run $40 to $100 per hour by seniority and a mixed squad blends to roughly $60 to $70. Nothing is fixed until discovery has established the integration surface.",
  },
  {
    question: "Do I get the admin and operator panels too?",
    answer:
      "Yes, and they are scoped from the start rather than added later. Every one of these products needs at least a customer app and an admin panel, and most need a third for the operator, the seller or the restaurant. Price one of the three and you have priced about half the build.",
  },
  {
    question: "Can you take over an app that already exists?",
    answer:
      "Often, yes. We will audit it and tell you plainly whether keeping it, refactoring part of it or replacing it is the better call. Recommending a rebuild that is not needed is the easiest way for an agency to bill more, so we try to be explicit when the existing code is fine.",
  },
  {
    question: "Which platforms do you build for?",
    answer:
      "iOS, Android and web. Cross platform where the interaction model allows it and native where it does not, and we will explain which one your product is rather than defaulting to whichever is cheaper to staff.",
  },
  {
    question: "My product is not one of these six. Can you still help?",
    answer:
      "Usually. These are the ones we have built often enough to be specific about. The engineering underneath transfers, so bring us the part of your product you think is hardest and we will scope from that rather than from a generic feature list.",
  },
];

export const metadata: Metadata = {
  title: "App Development Solutions | Zyneto",
  description:
    "Dating, fantasy sports, restaurant, ecommerce, music and classified app development. Published rates of $40 to $100 per hour, no quote before discovery.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "App Development Solutions | Zyneto",
    description:
      "Dating, fantasy sports, restaurant, ecommerce, music and classified app development. Published rates of $40 to $100 per hour, no quote before discovery.",
    url: PAGE_URL,
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/static/assets/solutions/solutions-bg.webp",
        width: 1920,
        height: 900,
        alt: "Zyneto app development solutions",
      },
    ],
  },
};

export default function SolutionsIndexPage() {
  const solutions = categories.Solutions;

  return (
    <>
      <IndustriesTop heroSection={industriesTop} />

      <Partnerships />

      <section
        id="all-solutions"
        className="scroll-mt-[calc(var(--nav-height,72px)+1.5rem)] bg-white py-12 md:py-24"
      >
        <div className="container mx-auto px-4">
          <Reveal>
            <IndustrySectionHead
              align="left"
              eyebrow="Solutions"
              title="Six products, and the part of each that breaks"
              description="Every one of these has a component that decides whether the build succeeds. Each page leads with that component rather than with a feature list."
            />
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution) => {
              const detail = solutionDetail[solution.url];
              return (
                <Reveal key={solution.url}>
                  <Link
                    href={solution.url}
                    prefetch={false}
                    className="group flex h-full flex-col rounded-xl border border-[#E8E8ED] bg-[#FAFAFB] p-6 transition-colors duration-200 hover:border-[#161616] hover:bg-[#161616] md:p-7"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#fed2bb]/70 bg-[linear-gradient(180deg,#fff7f0,#ffffff)] shadow-sm">
                      <Image
                        src={solution.icon}
                        alt=""
                        aria-hidden
                        width={28}
                        height={28}
                        className="object-contain"
                        draggable={false}
                      />
                    </div>

                    <h2 className="mt-5 text-[19px] font-semibold leading-snug text-[#161616] transition-colors duration-200 group-hover:text-white">
                      {solution.label}
                    </h2>

                    <p className="mt-3 text-[15px] leading-relaxed text-[#616161] transition-colors duration-200 group-hover:text-white/75">
                      {detail?.lead}
                    </p>

                    {detail ? (
                      <>
                        <p className="mt-4 text-[13px] font-semibold uppercase tracking-wider text-[#9900ff] transition-colors duration-200 group-hover:text-[#c98bff]">
                          {detail.hard}
                        </p>
                        <ul className="mt-3 space-y-2">
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
                      </>
                    ) : null}

                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[14px] font-medium text-[#161616] transition-colors duration-200 group-hover:text-white">
                      See the build
                      <FaArrowRight className="text-[11px] transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
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
              eyebrow="What every one of these includes"
              title="The parts that get left out of a cheaper quote"
              description="These are not optional extras. They are the reason a build that looked half the price finishes at twice the timeline."
            />
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Three panels, not one",
                body: "A customer app, an admin panel, and usually a third for the operator, seller or venue. Costing only the customer app is the most common overrun on this list.",
              },
              {
                title: "Payments that recover",
                body: "Soft declines retried, webhooks made idempotent, and order state confirmed server side rather than from a browser redirect.",
              },
              {
                title: "Moderation and abuse",
                body: "Any product with user generated content or two sided supply needs a moderation path designed in, not bolted on after the first incident.",
              },
              {
                title: "The integration inventory",
                body: "Every connected system counted before a number is quoted. Merchants typically underestimate this list by about half.",
              },
              {
                title: "Store review and release",
                body: "App store rules that affect these categories specifically, planned for rather than discovered during the first rejection.",
              },
              {
                title: "Analytics that answer questions",
                body: "Instrumented against the decisions you will actually need to make, rather than a dashboard nobody opens twice.",
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
        title="The Stack Behind These Builds"
        description="Picked for what each product has to survive, not for what looks current on a proposal."
      />

      <FaqSection faqSection={solutionsFaqs} />

      <Testimonial />

      <AdvServices
        advertisement={{
          title: "Building one of these?",
          description: "Send us the part you think is hardest.",
          ctaText: "Book a technical call",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(
            buildBreadcrumbList([
              { name: "Home", item: "https://zyneto.com" },
              { name: "Solutions", item: PAGE_URL },
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
              name: "Solutions",
              description:
                "App development solutions from Zyneto Global Technologies covering dating, fantasy sports, restaurant, ecommerce, music streaming and classified marketplaces.",
              itemUrls: solutions
                .filter((s) => isShippedHref(s.url))
                .map((s) => `https://zyneto.com${s.url}`),
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(buildFaqPage(solutionsFaqs, PAGE_URL)),
        }}
      />
    </>
  );
}
