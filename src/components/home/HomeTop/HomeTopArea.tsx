"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBookOpen,
  FaGears,
  FaRobot,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import SquiggleArrow from "@/components/common/SquiggleArrow";
const heroBgImage = "/static/assets/home/hero/hero-bg.webp";
import { useModal } from "@/context/ModalContext";
import TypewriterText from "./TypewriterText";
import HeroShowcase from "./HeroShowcase";

const words = ["AI Agents", "AI Copilots", "RAG Systems", "AI Automations"];

const floatingChips = [
  {
    word: words[0],
    Icon: FaRobot,
    tile: "from-[#ff732d] to-[#ff0044]",
    glow: "shadow-[0_6px_16px_-4px_rgba(255,115,45,0.7)]",
    className: "left-[4%] top-[32%] -rotate-3",
  },
  {
    word: words[1],
    Icon: FaWandMagicSparkles,
    tile: "from-[#ff0044] to-[#c3007a]",
    glow: "shadow-[0_6px_16px_-4px_rgba(255,0,68,0.7)]",
    className: "left-[9%] top-[62%] rotate-2",
  },
  {
    word: words[2],
    Icon: FaBookOpen,
    tile: "from-[#c3007a] to-[#9900ff]",
    glow: "shadow-[0_6px_16px_-4px_rgba(195,0,122,0.7)]",
    className: "right-[4%] top-[30%] rotate-3",
  },
  {
    word: words[3],
    Icon: FaGears,
    tile: "from-[#9900ff] to-[#5b2bff]",
    glow: "shadow-[0_6px_16px_-4px_rgba(153,0,255,0.7)]",
    className: "right-[9%] top-[60%] -rotate-2",
  },
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

        {floatingChips.map(({ word, Icon, tile, glow, className }) => (
          <div
            key={word}
            aria-hidden
            className={`absolute z-10 hidden 2xl:block ${className}`}
          >
            <div className="rounded-full bg-linear-to-r from-[#ff732d]/50 via-[#ff0044]/30 to-[#9900ff]/50 p-px shadow-[0_20px_40px_-18px_rgba(153,0,255,0.45),0_4px_10px_-4px_rgba(17,17,17,0.08)]">
              <div className="flex items-center gap-3 rounded-full bg-white/90 py-1.5 pl-1.5 pr-5 backdrop-blur-md">
                <span
                  className={`relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-linear-to-br ${tile} ${glow} text-[15px] text-white`}
                >
                  <span className="absolute inset-x-0 top-0 h-1/2 bg-white/20" />
                  <Icon className="relative" />
                </span>
                <span className="whitespace-nowrap text-[15px] font-semibold tracking-[-0.01em] text-[#111111]">
                  {word}
                </span>
              </div>
            </div>
          </div>
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

        <div className="absolute left-1/2 top-0 z-20 hidden h-22 w-255 -translate-x-1/2 xl:block">
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

          <HeroShowcase />
        </div>
      </div>
    </section>
  );
};

export default HomeTopArea;
