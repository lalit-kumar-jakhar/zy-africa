"use client";
import React from "react";
import Link from "@/components/common/ContentLink";
import StarIcon from "@/components/common/StarIcon";
import SquiggleArrow from "@/components/common/SquiggleArrow";

interface AiSolution {
  title: string;
  description: string;
  href: string;
}

const aiSolutions: AiSolution[] = [
  {
    title: "AI Agent Development",
    description:
      "Agents that plan their own steps, call your tools and finish multi-step work, with scoped permissions and an evaluation suite behind them.",
    href: "/services/ai-agent-development",
  },
  {
    title: "Generative AI Development",
    description:
      "Custom generative systems and LLM applications, including fine-tuning where a general model genuinely will not do the job.",
    href: "/services/generative-ai-development",
  },
  {
    title: "AI Copilots",
    description:
      "In-product assistants that already know the record on screen, the user's role and what they did a minute ago.",
    href: "/services/ai-copilot-development-company",
  },
  {
    title: "Enterprise RAG Systems",
    description:
      "Ask questions of your contracts, policies and reports, with retrieval quality measured separately from generation quality.",
    href: "/services/chat-with-documents-solution",
  },
  {
    title: "AI Workflow Automation",
    description:
      "Whole processes automated across the systems you already run, designed around the exception tail rather than the happy path.",
    href: "/services/ai-workflow-automation-services",
  },
  {
    title: "Multimodal AI Development",
    description:
      "Systems that read text, images, audio and video together, for problems where the signal sits across more than one format.",
    href: "/services/multimodal-ai-development-company",
  },
];

const AiSolutions: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#F8F7FB] py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-violet-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 h-[28rem] w-[28rem] rounded-full bg-rose-100/60 blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-10 flex flex-col gap-7 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-violet-200/80 bg-white/80 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
              <StarIcon size={16} color="#7C3AED" />
              AI solutions
            </div>
            <h2 className="text-3xl font-bold leading-[1.12] tracking-tight text-[#171421] sm:text-4xl lg:text-5xl">
              Practical AI, built for{" "}
              <span className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-orange-500 bg-clip-text text-transparent">
                what comes next.
              </span>
            </h2>
          </div>
          <div className="max-w-md md:pb-1">
            <p className="text-base leading-7 text-[#626071] md:text-lg">
              From intelligent agents to multimodal systems, explore the
              solutions we design around real business needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {aiSolutions.map((solution) => (
            <Link
              key={solution.href}
              href={solution.href}
              className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-3xl border border-[#E9E6EF] bg-white p-6 transition-all duration-300d hover:bg-violet-50/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none md:p-7"
            >
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-violet-100/80 to-fuchsia-50/30 blur-2xl transition-transform duration-500 group-hover:scale-125 motion-reduce:transition-none"
              />
              <div className="relative mb-6 flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-fuchsia-50 text-3xl text-violet-700 ring-1 ring-violet-100 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105 motion-reduce:transition-none"
                >
                  ✦
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-100 bg-violet-50 text-lg text-violet-700 transition-all duration-300 group-hover:translate-x-1 group-hover:border-violet-200 group-hover:bg-violet-100 motion-reduce:transition-none"
                >
                  <SquiggleArrow />
                </span>
              </div>
              <h3 className="relative text-2xl font-semibold leading-tight tracking-tight text-[#1C1925] md:text-[26px]">
                {solution.title}
              </h3>
              <p className="relative mt-3 text-[15px] leading-7 text-[#6B6875]">
                {solution.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-9 flex flex-col items-center justify-between gap-4 rounded-3xl border border-violet-100 bg-white/75 px-6 py-5 sm:flex-row sm:px-8">
          <p className="text-center text-sm text-[#6B6875] sm:text-left">
            Looking for something more specific?{" "}
            <span className="font-semibold text-[#24202D]">
              See everything we build.
            </span>
          </p>
          <Link
            className="gradient-bg-btn inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
            href="/ai"
          >
            Explore all AI services{" "}
            <span aria-hidden="true" className="ml-2">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AiSolutions;
