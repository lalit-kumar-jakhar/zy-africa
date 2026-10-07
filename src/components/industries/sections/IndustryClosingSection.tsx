"use client";

import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import Reveal from "@/components/common/Reveal";
import { body, ink } from "@/components/industries/typography";
import IndustryEndCta from "./IndustryEndCta";
import { gridDotsStyle, sectionPadLg } from "./constants";

type IndustryClosingSectionProps = {
  nextSteps: {
    title: string;
    description: string;
    items: { step: string; line: string }[];
  };
  endCta: {
    title: string;
    description: string;
    ctaText: string;
    assurances?: string[];
  };
};

const IndustryClosingSection = ({
  nextSteps,
  endCta,
}: IndustryClosingSectionProps) => (
  <section className={`${sectionPadLg} bg-white`} style={gridDotsStyle}>
    <div className="container mx-auto px-4">
      <Reveal>
        <IndustrySectionHead
          title={nextSteps.title}
          description={nextSteps.description}
        />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 items-start gap-6 lg:mt-14 lg:grid-cols-12 lg:gap-8">
        <div className="overflow-hidden rounded-2xl border border-[#E8E8ED] bg-[#FAFAFB] lg:col-span-7">
          <ol className="divide-y divide-[#E8E8ED]">
            {nextSteps.items.map((s, i) => (
              <Reveal key={s.step} delay={i * 55}>
                <li className="grid gap-3 p-5 sm:grid-cols-[72px_1fr] sm:gap-6 sm:p-6 md:p-7 lg:gap-7">
                  <div className="flex items-baseline gap-3 sm:flex-col sm:items-start sm:gap-1">
                    <span
                      aria-hidden
                      className="text-[32px] font-bold leading-none tabular-nums text-[#161616]/10 sm:text-[36px]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3
                      className={`text-[17px] font-semibold leading-snug md:text-[18px] lg:text-[19px] ${ink}`}
                    >
                      {s.step}
                    </h3>
                    <p
                      className={`mt-2 text-[14px] leading-relaxed md:text-[15px] ${body}`}
                    >
                      {s.line}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="lg:sticky lg:top-[calc(var(--nav-height,72px)+1.5rem)] lg:col-span-5">
          <IndustryEndCta cta={endCta} />
        </div>
      </div>
    </div>
  </section>
);

export default IndustryClosingSection;
