import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import Reveal from "@/components/common/Reveal";
import { body, ink, inkSoft } from "@/components/industries/typography";
import { scrollMt, sectionPad } from "./constants";

type SegmentsSectionProps = {
  segments: {
    title: string;
    description: string;
    items: { title: string; line: string }[];
  };
};

const SegmentsSection = ({ segments }: SegmentsSectionProps) => (
  <section
    id="who-this-is-for"
    className={`${sectionPad} ${scrollMt} bg-white`}
  >
    <div className="container mx-auto px-4">
      <Reveal>
        <IndustrySectionHead
          eyebrow="Audience"
          title={segments.title}
          description={segments.description}
        />
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
        {segments.items.map((s, i) => (
          <Reveal key={s.title} delay={i * 40}>
            <article className="h-full rounded-xl border border-[#E8E8ED] bg-[#FAFAFB] p-6 md:p-7">
              <span
                className={`mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#E8E8ED] bg-white text-[13px] font-bold tabular-nums ${inkSoft}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={`mb-2 text-[18px] font-semibold leading-snug md:text-[20px] ${ink}`}>
                {s.title}
              </h3>
              <p className={`text-[15px] leading-relaxed md:text-[16px] ${body}`}>
                {s.line}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default SegmentsSection;
