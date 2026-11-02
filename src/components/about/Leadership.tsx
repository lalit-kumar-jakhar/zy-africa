"use client";

import React from "react";
import StarIcon from "@/components/common/StarIcon";
import Reveal from "@/components/common/Reveal";

const principles = [
  {
    number: "01",
    title: "Engineering-Led Leadership",
    description:
      "Decisions are shaped by people who understand what it takes to build and ship, keeping strategy grounded in technical reality, not disconnected from delivery.",
  },
  {
    number: "02",
    title: "Client-First Priorities",
    description:
      "Roadmaps are set around client outcomes and long-term partnership, so priorities stay aligned with what actually moves your project forward.",
  },
  {
    number: "03",
    title: "Continuous Growth",
    description:
      "The team keeps investing in new tools, frameworks, and practices, so the solutions we deliver stay current as technology and industry standards evolve.",
  },
  {
    number: "04",
    title: "Transparent Collaboration",
    description:
      "Clients stay informed with clear, direct communication throughout every engagement, from early planning through to post-launch support.",
  },
];

const Leadership: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F5F2]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.07) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-105 w-105 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,115,45,0.12),transparent_70%)]"
      />
      <div className="container relative z-10 mx-auto px-4 md:py-19 py-5.5">
        <div className="flex flex-col gap-10 lg:gap-12">
          <div className="text-center w-full mx-auto">
            <Reveal delay={80} duration={500} direction="up">
              <div className="mb-1 flex items-center md:mb-2 mx-auto justify-center">
                <StarIcon size={40} color="#000000" />
              </div>
            </Reveal>
            <Reveal delay={140} duration={500} direction="up">
              <h2 className="text-[30px] font-bold leading-tight text-[#000000] md:text-[40px]">
                How  {" "}
                <span className="text-yellow-orange-gradient">Zyneto</span>
                {" "}leads?
              </h2>
            </Reveal>
            <Reveal delay={220} duration={500} direction="up">
              <p className="mt-3 text-lg font-normal text-[#616161] md:text-xl mx-auto">
                The principles that guide how our leadership makes decisions
                and how our team works with every client.
              </p>
            </Reveal>
          </div>
          <div className="w-full">
            <ul className="grid grid-cols-1 lg:grid-cols-2 items-center h-full">
              {principles.map((principle, index) => (
                <Reveal
                  key={principle.number}
                  delay={120 + index * 90}
                  duration={500}
                  direction="up"
                  triggerOnce
                >
                  <li className="group relative py-7 h-full first:pt-6 last:pb-6 md:py-8 md:first:pt-7 md:last:pb-7">
                    <div className="flex flex-col gap-3 duration-300 sm:flex-row sm:gap-8">
                      <span
                        aria-hidden
                        className="shrink-0 font-semibold tracking-tight text-[28px] leading-none text-black/15 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-[#FF732D] group-hover:via-[#FF0044] group-hover:to-[#9900FF] md:text-[48px]"
                      >
                        {principle.number}.
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-bold text-[#111111] md:text-[22px]">
                          {principle.title}
                        </h3>
                        <p className="mt-2 max-w-xl text-base leading-relaxed text-[#616161] md:text-lg">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
