import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import Reveal from "@/components/common/Reveal";
import { body, ink, inkSoft } from "@/components/industries/typography";
import { gridDotsStyle, scrollMt, sectionPad } from "./constants";

type WhatGoesWrongSectionProps = {
  whatGoesWrong: {
    title: string;
    description: string;
    items: { title: string; line: string }[];
  };
};

const WhatGoesWrongSection = ({
  whatGoesWrong,
}: WhatGoesWrongSectionProps) => (
  <section
    id="what-goes-wrong"
    className={`${sectionPad} ${scrollMt} bg-[#F7F7F9]`}
    style={gridDotsStyle}
  >
    <div className="container mx-auto px-4">
      <Reveal>
        <IndustrySectionHead
          title={whatGoesWrong.title}
          description={whatGoesWrong.description}
        />
      </Reveal>
      <div className="mt-8 divide-y divide-[#E8E8ED] overflow-hidden rounded-xl border border-[#E8E8ED] bg-white lg:mt-12">
        {whatGoesWrong.items.map((w, i) => (
          <Reveal key={w.title} delay={i * 30}>
            <div className="grid gap-3 px-5 py-5 sm:grid-cols-[56px_1fr] sm:gap-5 md:px-7 md:py-6">
              <span className={`shrink-0 text-[15px] font-bold tabular-nums ${inkSoft}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className={`mb-1.5 text-[17px] font-semibold md:text-[19px] ${ink}`}>
                  {w.title}
                </h3>
                <p className={`text-[15px] leading-relaxed md:text-[16px] ${body}`}>
                  {w.line}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhatGoesWrongSection;
