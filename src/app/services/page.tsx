import type { Metadata } from "next";
import Link from "@/components/common/ContentLink";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaArrowRight } from "react-icons/fa6";
import { categories } from "@/components/shared/Navbar/Dropdowns/categories";
import { isShippedHref } from "@/constants/shipped-routes";
import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import Reveal from "@/components/common/Reveal";
import { body, ink, inkSoft, label } from "@/components/industries/typography";
import { scrollMt, sectionPad } from "@/components/industries/sections/constants";
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

const PAGE_URL = "https://zyneto.com/services";

const heroSection = {
  title: "Engineering services, priced before you ask",
  description:
    "Thirty three services across AI, mobile, web, backend and infrastructure. Rates run $40 to $100 per hour by seniority and they are published on every page, so you can size the work before anyone sends you a proposal.",
  features: [
    "$40 to $100 per hour, published",
    "No quote before discovery",
    "Your repository and your accounts",
    "Oman, the Gulf and India",
  ],
  bgImage: "/static/assets/services/services-bg.webp",
};

const groupNotes: Record<string, string> = {
  "Artificial Intelligence (AI)":
    "Model selection, retrieval, agents and the evaluation suite that tells you whether any of it is working.",
  "AI Solutions":
    "Packaged AI products rather than research projects: assistants, document systems and automation that runs unattended.",
  "Mobile Development":
    "Native and cross platform, with the offline behaviour, store review and device fragmentation planned in rather than discovered.",
  "Web Development":
    "Rendering strategy, Core Web Vitals and the framework choice argued from your traffic pattern instead of from fashion.",
  "Backend & Data":
    "APIs, schemas and pipelines. The part that decides whether the product still works at ten times the volume.",
  "Emerging Tech":
    "Blockchain, IoT, design and delivery pipelines. Useful where the constraint is real, and we will say when it is not.",
};

const constraintNotes: Record<string, { hard: string; body: string }> = {
  "Artificial Intelligence (AI)": {
    hard: "You are not sure a model can do it at all.",
    body: "First we prove it can. Then we build tests that show whether the output is good enough to put in front of a customer.",
  },
  "AI Solutions": {
    hard: "It works, and now it has to run on its own.",
    body: "That is a different problem. The work is in error handling, cost per run, and what happens when a file arrives in the wrong format at 3am.",
  },
  "Mobile Development": {
    hard: "It has to work on a device you do not control.",
    body: "Offline use, app store review, and the older Android phones your users actually carry.",
  },
  "Web Development": {
    hard: "The hard part is what the browser does.",
    body: "How pages render, Core Web Vitals, and how much of the page can be static.",
  },
  "Backend & Data": {
    hard: "The hard part is the data.",
    body: "Database design, APIs, and what breaks at ten times the traffic. This is the most common answer. It is also the one people skip.",
  },
  "Emerging Tech": {
    hard: "The problem is unusual.",
    body: "A shared record that several companies must trust. Physical devices sending data. A design system. A deployment pipeline. If a plain database would do the job, we will say so.",
  },
};

const pageChoice = [
  {
    title: "Read the named page",
    body: "Pick this when the technology is already chosen. It covers how we work in it, what it costs, and when it is the wrong fit.",
  },
  {
    title: "Read the general page",
    body: "Pick this when the technology is not chosen yet. It works through the options based on your traffic and your team. Choosing Next.js before anyone looks at your traffic is the wrong order, and it costs a lot to undo.",
  },
];

const wrongRead = [
  {
    title: "You already have a codebase",
    body: "None of these pages tells you whether to keep it. Ask for an audit. Often the answer is that the code is fine and you need two weeks of work, not a rebuild.",
  },
  {
    title: "The blocker is not engineering",
    body: "If the hold-up is a procurement checklist or a security review, tell us first. It changes who you meet and it changes the estimate.",
  },
  {
    title: "You cannot tell which applies",
    body: "That is normal. Send us the part you think is hardest. We will tell you which of the thirty three fits, or tell you that none of them do.",
  },
];

const servicesFaqs = [
  {
    question: "What do these services cost?",
    answer:
      "Rates run $40 to $100 per hour depending on role and seniority. QA and junior implementation sit near the floor, architecture and specialist engineering near the ceiling, and a mixed squad blends to roughly $60 to $70. The rate is on every service page rather than behind a form.",
  },
  {
    question: "Do you quote before discovery?",
    answer:
      "No. We give an hour band and the arithmetic behind it, then a fixed number once discovery has established the integration surface. A quote produced before anyone has counted the integrations is a guess, and it is usually the client who pays for the difference.",
  },
  {
    question: "Can I hire developers rather than a project team?",
    answer:
      "Yes. Most service pages cover both: a fixed scope engagement with a defined outcome, or dedicated engineers who join your team and report into your process. The rate band is the same either way.",
  },
  {
    question: "Who owns the code and the accounts?",
    answer:
      "You do, from the first commit. Work happens in your repository where you have one, and cloud, gateway and third party accounts are created in your name. There is no handover event at the end because there is nothing to hand over.",
  },
  {
    question: "How do I pick between similar services?",
    answer:
      "Start from the constraint rather than the technology. If the hard part is the data model, the backend pages are the right read. If it is a security review or a procurement checklist, start there instead. If you are unsure, send us the part of the problem you think is hardest and we will tell you which of these it actually is.",
  },
  {
    question: "Do you work with existing codebases?",
    answer:
      "Frequently, and it is usually cheaper than a rebuild. We will audit what is there and tell you plainly when the honest answer is to keep it, refactor part of it, or replace it. Recommending a rebuild that is not needed is the easiest way for an agency to bill more, so we try to be explicit about that.",
  },
];

const serviceUrls = categories.Services.flatMap((group) =>
  group.children
    .filter((child) => isShippedHref(child.url))
    .map((child) => `https://zyneto.com${child.url}`)
);

export const metadata: Metadata = {
  title: "Software Development Services | Zyneto",
  description:
    "33 engineering services across AI, mobile, web, backend and infrastructure. Rates $40 to $100 per hour, published, with no quote before discovery.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Software Development Services | Zyneto",
    description:
      "33 engineering services across AI, mobile, web, backend and infrastructure. Rates $40 to $100 per hour, published, with no quote before discovery.",
    url: PAGE_URL,
    siteName: "Zyneto Global Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/static/assets/services/hero-bg.webp",
        width: 1920,
        height: 900,
        alt: "Zyneto software development services",
      },
    ],
  },
};

export default function ServicesIndexPage() {
  return (
    <>
      <IndustriesTop heroSection={heroSection} />

      <Partnerships />

      <section
        id="all-services"
        className="scroll-mt-[calc(var(--nav-height,72px)+1.5rem)] bg-white py-12 md:py-24"
      >
        <div className="container mx-auto px-4">
          <Reveal>
            <IndustrySectionHead
              align="left"
              eyebrow="All services"
              title="Grouped by the problem, not by the language"
              description="Six groups covering thirty three services. Each page states what we build, what it costs in hours, and where the approach stops being the right one."
            />
          </Reveal>

          <div className="mt-8 space-y-5">
            {categories.Services.map((group) => (
              <Reveal key={group.label}>
                <div className="rounded-xl border border-[#E8E8ED] bg-[#FAFAFB] p-6 md:p-7">
                  <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:justify-between">
                    <h2 className="text-[20px] font-semibold text-[#161616]">
                      {group.label}
                    </h2>
                    <span className="text-[13px] text-[#8A8A94]">
                      {group.children.length} services
                    </span>
                  </div>

                  <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-[#616161]">
                    {groupNotes[group.label]}
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {group.children.map((service) => (
                      <Link
                        key={service.url}
                        href={service.url}
                        prefetch={false}
                        className="group flex items-center gap-3 rounded-lg border border-[#E8E8ED] bg-white p-3 transition-colors duration-200 hover:border-[#161616] hover:bg-[#161616]"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#fed2bb]/70 bg-[linear-gradient(180deg,#fff7f0,#ffffff)]">
                          <Image
                            src={service.icon}
                            alt=""
                            aria-hidden
                            width={20}
                            height={20}
                            className="object-contain"
                            draggable={false}
                          />
                        </span>
                        <span className="flex-1 text-[14px] font-medium leading-snug text-[#161616] transition-colors duration-200 group-hover:text-white">
                          {service.label.trim()}
                        </span>
                        <FaArrowRight className="shrink-0 text-[11px] text-[#8A8A94] transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white" />
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="choosing" className={`${sectionPad} ${scrollMt} bg-white`}>
        <div className="container mx-auto px-4">
          <Reveal>
            <IndustrySectionHead
              align="left"
              eyebrow="Choosing"
              title="Two questions get you to the right page"
              description="Thirty three pages is a lot to read. These two questions take about a minute and usually narrow it to one."
            />
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-8 lg:mt-12">
              <h3 className={`text-[20px] font-semibold md:text-[26px] ${ink}`}>
                First: what is the hard part?
              </h3>
              <p
                className={`mt-2 max-w-3xl text-[15px] leading-relaxed md:text-[16px] ${body}`}
              >
                Not what you want built. The bit you already suspect will go
                wrong.
              </p>
              <div className="mt-6 divide-y divide-[#E8E8ED] overflow-hidden rounded-xl border border-[#E8E8ED] bg-white">
                {categories.Services.filter(
                  (group) => constraintNotes[group.label]
                ).map((group, i) => (
                  <Reveal key={group.label} delay={i * 30}>
                    <div className="grid gap-3 px-5 py-5 md:grid-cols-[1fr_240px] md:gap-6 md:px-7 md:py-6">
                      <div>
                        <h4
                          className={`mb-1.5 text-[17px] font-semibold md:text-[19px] ${ink}`}
                        >
                          {constraintNotes[group.label].hard}
                        </h4>
                        <p
                          className={`text-[15px] leading-relaxed md:text-[16px] ${body}`}
                        >
                          {constraintNotes[group.label].body}
                        </p>
                      </div>
                      <div className="md:pl-6 md:border-l md:border-[#E8E8ED]">
                        <span className={`${label} block`}>Start here</span>
                        <span
                          className={`mt-1 block text-[15px] font-semibold md:text-[16px] ${ink}`}
                        >
                          {group.label}
                        </span>
                        <span
                          className={`mt-0.5 block text-[13px] tabular-nums ${body}`}
                        >
                          {group.children.length} services
                        </span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-12 lg:mt-16">
            <Reveal>
              <h3 className={`text-[20px] font-semibold md:text-[26px] ${ink}`}>
                Second: is the technology already decided?
              </h3>
              <p
                className={`mt-2 max-w-3xl text-[15px] leading-relaxed md:text-[16px] ${body}`}
              >
                Each group has one general page and several named ones. Web
                Development sits next to Next.js, React.js, Node.js and Angular.
                Python sits next to Django, Flask and FastAPI. Mobile App
                Development sits next to Flutter, React Native, iOS and Android.
              </p>
            </Reveal>

            <div className="mt-6 divide-y divide-[#E8E8ED] overflow-hidden rounded-xl border border-[#E8E8ED] bg-white">
              {pageChoice.map((item, i) => (
                <Reveal key={item.title} delay={i * 30}>
                  <div className="grid gap-3 px-5 py-5 sm:grid-cols-[180px_1fr] sm:gap-5 md:px-7 md:py-6">
                    <span className={`${label} pt-0.5`}>{item.title}</span>
                    <p
                      className={`text-[15px] leading-relaxed md:text-[16px] ${body}`}
                    >
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p
                className={`mt-5 max-w-3xl text-[15px] leading-relaxed md:text-[16px] ${body}`}
              >
                If two pages both fit, read either. They overlap on purpose. The
                rate band is the same and the first conversation covers both.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 lg:mt-16">
            <Reveal>
              <h3 className={`text-[20px] font-semibold md:text-[26px] ${ink}`}>
                When none of these is the right read
              </h3>
            </Reveal>

            <div className="mt-6 divide-y divide-[#E8E8ED] overflow-hidden rounded-xl border border-[#E8E8ED] bg-white">
              {wrongRead.map((item, i) => (
                <Reveal key={item.title} delay={i * 30}>
                  <div className="grid gap-3 px-5 py-5 sm:grid-cols-[56px_1fr] sm:gap-5 md:px-7 md:py-6">
                    <span
                      className={`shrink-0 text-[15px] font-bold tabular-nums ${inkSoft}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4
                        className={`mb-1.5 text-[17px] font-semibold md:text-[19px] ${ink}`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`text-[15px] leading-relaxed md:text-[16px] ${body}`}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFB] py-12 md:py-24">
        <div className="container mx-auto px-4">
          <Reveal>
            <IndustrySectionHead
              align="left"
              eyebrow="How an engagement runs"
              title="What is the same on every one of these"
              description="Whichever service you start from, the commercial terms and the delivery shape do not change."
            />
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Published rates",
                body: "$40 to $100 per hour by seniority, on the page rather than behind a form. Mixed squads blend to roughly $60 to $70.",
              },
              {
                title: "Discovery before a number",
                body: "You get an hour band and the arithmetic first. A fixed price follows once the integration surface is actually known.",
              },
              {
                title: "Your repository, your accounts",
                body: "Code lands in your repository and every cloud, gateway and vendor account is created in your name from day one.",
              },
              {
                title: "We will say no",
                body: "Where a platform, an existing codebase or a smaller change is the better answer, that is what we will tell you.",
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
        title="The Stack We Actually Use"
        description="Chosen for the constraint in front of us, not for what is fashionable this year."
      />

      <FaqSection faqSection={servicesFaqs} />

      <Testimonial />

      <AdvServices
        advertisement={{
          title: "Not sure which service you need?",
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
              { name: "Services", item: PAGE_URL },
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
              name: "Services",
              description:
                "Software engineering services from Zyneto Global Technologies across AI, mobile, web, backend and infrastructure, with published hourly rates.",
              itemUrls: serviceUrls,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(buildFaqPage(servicesFaqs, PAGE_URL)),
        }}
      />
    </>
  );
}
