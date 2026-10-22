"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaKey, FaPlug, FaShieldHalved } from "react-icons/fa6";
import SquiggleArrow from "@/components/common/SquiggleArrow";
const heroBgImage = "/static/assets/home/hero/hero-bg.webp";
import { useModal } from "@/context/ModalContext";
import TypewriterText from "./TypewriterText";

const words = ["AI Agents", "AI Copilots", "RAG Systems", "AI Automations"];

const proofPoints = [
  { text: "Integrated with the systems you already run", Icon: FaPlug },
  {
    text: "Evaluation and guardrails built in, not bolted on",
    Icon: FaShieldHalved,
  },
  { text: "You own the code, models and data", Icon: FaKey },
];

const floatingChips = [
  { word: words[0], className: "left-[6%] top-[34%]", delay: "0s" },
  { word: words[1], className: "left-[12%] top-[66%]", delay: "1.5s" },
  { word: words[2], className: "right-[6%] top-[30%]", delay: "0.8s" },
  { word: words[3], className: "right-[11%] top-[64%]", delay: "2.2s" },
];

const NOTCH_EDGE = "M0 0 C90 0 100 88 200 88 H820 C920 88 930 0 1020 0";

const HomeTopArea: React.FC = () => {
  const { openModal } = useModal();

  const ctas = (
    <>
      <button
        onClick={openModal}
        className="group flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-linear-to-r from-[#ff732d] via-[#ff0044] to-[#9900ff] px-5 text-[14px] font-semibold text-white shadow-[0_8px_20px_-8px_rgba(255,0,68,0.6)] transition-shadow duration-200 hover:shadow-[0_10px_26px_-6px_rgba(255,0,68,0.7)] lg:h-12 lg:text-[15px]"
      >
        Book a Scoping Call
        <SquiggleArrow />
      </button>
      <Link
        href="/services"
        className="group flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#E6E4EA] bg-white px-5 text-[14px] font-semibold text-[#111111] transition-colors duration-200 hover:border-[#111111] hover:bg-[#111111] hover:text-white lg:h-12 lg:text-[15px]"
      >
        Explore AI Services
        <SquiggleArrow className="text-[#9900FF] transition-colors duration-200 group-hover:text-white" />
      </Link>
    </>
  );

  return (
    <section id="hero-section" className="relative overflow-hidden bg-white">
      <div className="relative px-4 pt-[calc(var(--nav-height)+56px)] pb-16 md:pb-20 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(#161616_1px,transparent_1px)] bg-size-[22px_22px] opacity-[0.06] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#ff732d]/15 blur-3xl"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#9900ff]/12 blur-3xl"
        />

        {floatingChips.map((chip) => (
          <span
            key={chip.word}
            aria-hidden
            style={{ animationDelay: chip.delay }}
            className={`hero-float absolute hidden xl:inline-flex items-center gap-2 rounded-full border border-[#ECEAF0] bg-white/80 px-4 py-2 text-[13px] font-medium text-[#3A3A40] shadow-[0_10px_30px_-12px_rgba(153,0,255,0.35)] backdrop-blur-sm ${chip.className}`}
          >
            <span className="h-2 w-2 rounded-full bg-linear-to-r from-[#ff732d] to-[#9900ff]" />
            {chip.word}
          </span>
        ))}

        <div className="container relative mx-auto">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#E6E4EA] bg-white px-4 py-1.5 text-xs md:text-sm font-medium tracking-wide text-[#3A3A40] shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00e07a] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00e07a]" />
            </span>
            AI engineering, from scoping call to production
          </p>

          <h1 className="mx-auto mt-7 max-w-5xl text-[34px] sm:text-5xl md:text-6xl lg:text-[68px] font-semibold leading-[1.05] tracking-[-0.035em] text-[#111111]">
            <span className="block">
              We Build <span className="whitespace-nowrap">Production-Grade</span>
            </span>
            <span className="mt-3 inline-flex min-h-[1.2em] items-center justify-center gap-1 md:min-w-115">
              <span className="font-light text-[#C9C6D1]">&lt;</span>
              <span className="text-yellow-orange-gradient pb-1">
                <TypewriterText words={words} />
              </span>
              <span className="hero-caret h-[0.9em] w-0.75 rounded-full bg-[#9900ff]" />
              <span className="font-light text-[#C9C6D1]">/&gt;</span>
            </span>
          </h1>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 xl:hidden">
            {ctas}
          </div>
        </div>
      </div>

      <div className="relative mx-2 mb-2 overflow-hidden rounded-[28px] bg-[#07050C] md:mx-4 md:mb-4 md:rounded-[40px]">
        <Image
          src={heroBgImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
          draggable={false}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-b from-[#07050C]/70 via-[#07050C]/50 to-[#07050C]/90"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-[70%] -translate-x-1/2 rounded-full bg-[#9900ff]/25 blur-[100px]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-24 left-[10%] h-64 w-64 rounded-full bg-[#ff0044]/20 blur-[90px]"
        />

        <div className="absolute left-1/2 top-0 z-10 hidden h-22 w-255 -translate-x-1/2 xl:block">
        <svg
          aria-hidden
          viewBox="0 0 1020 88"
          className="absolute inset-x-0 -top-px h-[calc(100%+1px)] w-full"
        >
          <defs>
            <linearGradient id="hero-notch-edge" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#ff732d" stopOpacity="0" />
              <stop offset="0.25" stopColor="#ff732d" />
              <stop offset="0.5" stopColor="#ff0044" />
              <stop offset="0.75" stopColor="#9900ff" />
              <stop offset="1" stopColor="#9900ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${NOTCH_EDGE} Z`} fill="#ffffff" />
          <path
            d={NOTCH_EDGE}
            fill="none"
            stroke="url(#hero-notch-edge)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid w-140 grid-cols-2 gap-1.5 rounded-full border border-[#ECEAF0] bg-white p-1.5 shadow-[0_14px_36px_-14px_rgba(153,0,255,0.5)]">
              {ctas}
            </div>
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-5 pt-12 pb-10 xl:pt-36 xl:pb-14 text-center">
          <p className="mx-auto max-w-3xl text-base md:text-xl font-normal leading-relaxed text-white/80">
            AI agents, copilots and RAG systems, engineered into the web and
            mobile products your customers already use. One team designs it,
            builds it, and stays on to keep it running.
          </p>

          <div className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/4 backdrop-blur-md">
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#ff0044]/70 to-transparent"
            />
            <ul className="grid divide-y divide-white/10 text-left md:grid-cols-3 md:divide-x md:divide-y-0">
              {proofPoints.map(({ text, Icon }) => (
                <li
                  key={text}
                  className="group flex items-center gap-4 px-6 py-5 transition-colors duration-300 hover:bg-white/5 md:flex-col md:items-start md:gap-5 md:px-7 md:py-7"
                >
                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#ff732d] via-[#ff0044] to-[#9900ff] p-px">
                    <span className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#0E0B14] text-[15px] text-white transition-colors duration-300 group-hover:bg-transparent">
                      <Icon aria-hidden />
                    </span>
                  </span>
                  <p className="text-[15px] font-medium leading-snug text-white/90 md:text-[17px]">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTopArea;
