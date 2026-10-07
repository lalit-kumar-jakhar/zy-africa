"use client";

import Image from "next/image";
import Link from "next/link";
import StarIcon from "@/components/common/StarIcon";
import Reveal from "@/components/common/Reveal";
import TopFormContact from "@/components/contact/TopFormContact";
import { useModal } from "@/context/ModalContext";
import { FaCheckCircle } from "react-icons/fa";
import { brandGradient } from "@/components/industries/typography";

const defaultHeroBgImage = "/static/assets/industries/industries-bg.webp";

type IndustriesTopProps = {
  heroSection: {
    title: string;
    description: string;
    titleHighlight?: string;
    eyebrow?: string;
    features?: string[];
    scrollTarget?: string;
    ctaText?: string;
    bgImage?: string;
  };
};

const IndustriesTop = ({ heroSection }: IndustriesTopProps) => {
  const { openModal } = useModal();
  const {
    title,
    titleHighlight,
    description,
    features,
    scrollTarget = "#essence",
    ctaText = "Book a scoping call",
    bgImage = defaultHeroBgImage,
  } = heroSection;

  return (
    <section
      id="hero-section"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
    >
      <Image
        src={bgImage}
        alt=""
        aria-hidden
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-black/70" />

      <div className="container relative z-10 mx-auto px-4 py-16 pt-(--nav-height) md:py-30">
        <div className="flex w-full flex-col items-center justify-between gap-12 xl:flex-row">
          <div className="w-full xl:w-[50%]">

            <Reveal delay={80} duration={650}>
              <div className="mb-4 flex justify-center xl:justify-start">
                <StarIcon size={40} color="#ffffff" />
              </div>
              <h1 className="text-center text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl xl:text-left">
                {title}
                {titleHighlight && (
                  <span className={brandGradient}>{titleHighlight}</span>
                )}
              </h1>
            </Reveal>

            <Reveal delay={160} duration={650}>
              <p className="mt-6 text-center text-lg leading-relaxed text-white/80 md:text-xl xl:text-left">
                {description}
              </p>
            </Reveal>

            {features && features.length > 0 && (
              <Reveal delay={220} duration={650}>
                <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-[14px] text-white/85"
                    >
                      <FaCheckCircle className="h-4 w-4 shrink-0 text-[#22C55E]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            <Reveal delay={280} duration={650}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 xl:justify-start">
                <button
                  type="button"
                  className="gradient-bg-btn rounded-full px-6 py-3"
                  onClick={openModal}
                >
                  {ctaText}
                </button>
                <Link
                  href={scrollTarget}
                  className="rounded-full border border-white/35 px-6 py-3 text-base font-medium text-white transition-colors hover:border-white/60 hover:bg-white/10"
                >
                  See the short version
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} duration={700} className="w-full xl:w-[50%]">
            <div className="w-full rounded-xl bg-white">
              <TopFormContact isUsedInServices={true} formName="contact_industry" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default IndustriesTop;
