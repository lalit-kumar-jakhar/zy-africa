import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import Reveal from "@/components/common/Reveal";
import { body, label, muted } from "@/components/industries/typography";
import { gridDotsStyle, sectionPad } from "./constants";

type EssenceSectionProps = {
  essence: {
    title: string;
    description: string;
    tiles: { label: string; value: string }[];
  };
};

const EssenceSection = ({ essence }: EssenceSectionProps) => (
  <section
    id="essence"
    className={`${sectionPad} scroll-mt-[calc(var(--nav-height,72px)+3.25rem)] bg-[#F7F7F9]`}
    style={gridDotsStyle}
  >
    <div className="container mx-auto px-4">
      <Reveal>
        <IndustrySectionHead
          title={essence.title}
          description={essence.description}
        />
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
        {essence.tiles.map((t, i) => (
          <Reveal key={t.label} delay={i * 45} className="h-full">
            <article className="flex h-full flex-col rounded-xl border border-[#E8E8ED] bg-white p-6 md:p-7">
              <div className="mb-4 flex items-start justify-between gap-3">
                <p className={label}>{t.label}</p>
                <span className={`text-[13px] font-bold tabular-nums ${muted}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className={`text-[15px] leading-relaxed md:text-[16px] ${body}`}>
                {t.value}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default EssenceSection;
