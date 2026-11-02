"use client";

import ResponsiveImage from "@/components/common/ResponsiveImage";
import Link from "next/link";
import StarIcon from "@/components/common/StarIcon";
import Reveal from "@/components/common/Reveal";
import { useModal } from "@/context/ModalContext";

const fallbackBg = "/static/assets/case-study/case-study-bg.webp";

type CaseStudiesTopProps = {
  studyCount: number;
  markets: string[];
  coverImage?: string;
};

const CaseStudiesTop = ({
  studyCount,
  markets,
  coverImage,
}: CaseStudiesTopProps) => {
  const { openModal } = useModal();
  const marketLine =
    markets.length > 0
      ? markets.length === 1
        ? markets[0]
        : `${markets.slice(0, -1).join(", ")} and ${markets[markets.length - 1]}`
      : "Oman, the GCC and India";

  return (
    <section
      id="hero-section"
      className="relative flex min-h-screen items-end overflow-hidden bg-black md:items-center"
    >
      <ResponsiveImage
        src={coverImage || fallbackBg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
      />
      <div
        aria-hidden
        className={`absolute inset-0 ${coverImage
          ? "bg-linear-to-r from-black via-black/88 to-black/55"
          : "bg-black/72"
          }`}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black to-transparent"
      />

      <div className="container relative z-10 mx-auto px-4 py-16 pt-(--nav-height) md:py-30">
        <div className="max-w-3xl">
          <Reveal duration={600}>
            <div className="mb-5">
              <StarIcon size={36} color="#ffffff" />
            </div>
          </Reveal>

          <Reveal delay={80} duration={700}>
            <h1 className="font-bold leading-none tracking-tight">
              <span className="block pb-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="text-yellow-orange-gradient">Case Studies</span> <span className="text-white">by Zyneto</span>
              </span>
              <span className="mt-5 block max-w-2xl text-[26px] font-semibold leading-[1.2] text-white sm:text-[32px] md:mt-6 md:text-[38px]">
                What we built,{" "}
                and what each decision cost.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={230} duration={650}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75 md:mt-6 md:text-xl">
              {studyCount === 1
                ? `One deep study from ${marketLine}. Problem, build, tradeoffs - no invented metrics.`
                : `${studyCount} deep studies from ${marketLine}. Problem, build, tradeoffs - no invented metrics.`}
            </p>
          </Reveal>

          <Reveal delay={300} duration={650}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#selected-work"
                className="gradient-bg-btn rounded-full px-7 py-3.5 text-base font-medium"
              >
                Read the studies
              </Link>
              <button
                type="button"
                onClick={openModal}
                className="rounded-full border border-white/35 px-7 py-3.5 text-base font-medium text-white transition-colors hover:border-white/60 hover:bg-white/10"
              >
                Talk through a build
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesTop;
