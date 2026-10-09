"use client";
import React from "react";
import Link from "@/components/common/ContentLink";
import StarIcon from "@/components/common/StarIcon";

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
    <section className="relative overflow-hidden md:py-19 py-8 bg-linear-to-b from-white via-white to-[#FAF7FF]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="flex justify-center items-center mb-1 md:mb-2">
            <StarIcon size={40} color="#000000" />
          </div>
          <h2 className="text-[30px] md:text-[40px] font-bold text-[#000000] leading-tight">
            AI Features Built to{" "}
            <span className="bg-linear-to-r from-violet-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Learn, Adapt, and Evolve
            </span>
          </h2>
          <p className="text-[#4B5563] mt-2 text-lg md:text-xl font-normal xl:max-w-5xl mx-auto">
            The six we are asked for most often. Each one is a service you can
            read about in full.
          </p>
        </div>

        <div className="mt-6 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {aiSolutions.map((solution) => (
            <Link
              key={solution.href}
              href={solution.href}
              className="group flex h-full flex-col rounded-[28px] border border-[#F0F0F0] bg-white p-6 lg:p-8 text-center transition-all duration-300 hover:border-[#9900ff]/30"
            >
              <h3 className="text-[20px] md:text-[24px] font-semibold text-[#000000] mb-2">
                {solution.title}
              </h3>
              <p className="text-[16px] md:text-[18px] font-normal text-[#616161]">
                {solution.description}
              </p>
              <span className="mt-auto pt-5 text-[16px] font-semibold text-violet-700">
                Explore
                <span
                  aria-hidden="true"
                  className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link className="gradient-bg-btn rounded-full" href="/ai">
            Explore All AI Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AiSolutions;
