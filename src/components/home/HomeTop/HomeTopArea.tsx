"use client";
import React from "react";
import Image from "next/image";
const heroBgImage = "/static/assets/home/hero/hero-bg.webp";
import StarIcon from "@/components/common/StarIcon";
import { useModal } from "@/context/ModalContext";
import TypewriterText from "./TypewriterText";

const words = ["AI Agents", "AI Copilots", "RAG Systems", "AI Automations"];

const proofPoints = [
  "Integrated with the systems you already run",
  "Evaluation and guardrails built in, not bolted on",
  "You own the code, models and data",
];
const HomeTopArea: React.FC = () => {
  const { openModal } = useModal();

  return (
    <>
      <section
        className="md:py-30 py-16 bg-[#000000] relative overflow-hidden min-h-screen flex flex-col justify-center items-center"
        id="hero-section"
      >
        <Image
          src={heroBgImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
          draggable={false}
        />
        <div
          aria-hidden
          className="absolute inset-0 z-0 bg-linear-to-b from-black/80 via-black/60 to-black/90"
        />
        <div className="container mx-auto relative z-10 px-4 pt-(--nav-height) h-full text-center">
          <div className="flex items-center justify-center mb-3 md:mb-4">
            <StarIcon color="#ffffff" size={48} />
          </div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-1.5 text-xs md:text-sm font-medium tracking-wide text-white/90 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00e07a]" />
            AI engineering, from scoping call to production
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white text-center">
            <span className="block mb-3">We Build Production-Grade</span>
            <span className="text-yellow-orange-gradient text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:inline-flex min-w-115 items-center justify-center mt-2 pb-4">
              &lt;<TypewriterText words={words} /> /&gt;
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-base md:text-xl font-normal text-white/85 leading-relaxed">
            AI agents, copilots and RAG systems, engineered into the web and
            mobile products your customers already use. One team designs it,
            builds it, and stays on to keep it running.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <button
              className="gradient-bg-btn rounded-full"
              onClick={openModal}
            >
              Book a Scoping Call
            </button>
            <span className="rounded-full border border-white/30 px-6 py-2.5 text-[18px] font-semibold leading-6 text-white">
              Explore AI Services
            </span>
          </div>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-white/70">
            {proofPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/50" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default HomeTopArea;
