"use client";

import ResponsiveImage from "@/components/common/ResponsiveImage";
import Link from "next/link";
import Reveal from "@/components/common/Reveal";
import { useModal } from "@/context/ModalContext";

const fallbackBg = "/static/assets/industries/industries-bg.webp";

type CaseStudyHeroProps = {
  client: string;
  sector: string;
  h1: string;
  standfirst: string;
  coverImage?: string;
};

const CaseStudyHero = ({
  client,
  sector,
  h1,
  standfirst,
  coverImage,
}: CaseStudyHeroProps) => {
  const { openModal } = useModal();

  return (
    <section
      id="hero-section"
      className="relative flex min-h-[88vh] items-end overflow-hidden bg-black md:min-h-screen md:items-center"
    >
      <ResponsiveImage
        src={coverImage || fallbackBg}
        alt=""
        fill
        priority
        sizes="100vw"
        className={`absolute inset-0 -z-10 object-cover ${coverImage ? "scale-105 object-[center_20%]" : ""
          }`}
      />
      <div
        aria-hidden
        className={`absolute inset-0 ${coverImage
            ? "bg-linear-to-r from-black via-black/90 to-black/50"
            : "bg-black/72"
          }`}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-linear-to-t from-black via-black/40 to-transparent"
      />

      <div className="container relative z-10 mx-auto px-4 py-16 pt-(--nav-height) md:py-[110px]">
        <div className="max-w-3xl">
          <Reveal duration={500}>
            <nav aria-label="Breadcrumb" className="mb-7">
              <ol className="flex flex-wrap items-center gap-2 text-[13px] text-white/50">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href="/case-studies"
                    className="transition-colors hover:text-white"
                  >
                    Case studies
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-white/80">{client}</li>
              </ol>
            </nav>
          </Reveal>

          <Reveal delay={60} duration={650}>
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-white/55">
              {client}
              <span className="mx-2.5 text-white/25" aria-hidden>
                ·
              </span>
              <span className="font-medium normal-case tracking-normal text-white/45">
                {sector}
              </span>
            </p>
          </Reveal>

          <Reveal delay={120} duration={700}>
            <h1 className="mt-4 text-[30px] font-bold leading-[1.1] tracking-tight text-white sm:text-[38px] md:text-[46px] lg:text-[52px]">
              {(() => {
                const colon = h1.indexOf(": ");
                if (colon > 0) {
                  return (
                    <>
                      {h1.slice(0, colon)}:{" "}
                      <span className="text-yellow-orange-gradient">
                        {h1.slice(colon + 2)}
                      </span>
                    </>
                  );
                }
                return h1;
              })()}
            </h1>
          </Reveal>

          <Reveal delay={200} duration={650}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/72 md:text-xl">
              {standfirst}
            </p>
          </Reveal>

          <Reveal delay={280} duration={650}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openModal}
                className="gradient-bg-btn rounded-full px-7 py-3.5 text-base font-medium"
              >
                Talk through a similar build
              </button>
              <Link
                href="#domain"
                className="rounded-full border border-white/30 px-7 py-3.5 text-base font-medium text-white transition-colors hover:border-white/55 hover:bg-white/10"
              >
                Read the study
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
