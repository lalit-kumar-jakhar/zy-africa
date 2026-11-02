import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import Reveal from "@/components/common/Reveal";
import { body, darkBody, darkEyebrow, ink } from "@/components/industries/typography";
import { gridDotsStyle, scrollMt, sectionPadLg } from "./constants";

type SystemsSectionProps = {
  systems: {
    title: string;
    description: string;
    groups: { group: string; body: string }[];
    distinction: { title: string; body: string };
    pairs: { pair: string; body: string }[];
  };
};

const SystemsSection = ({ systems }: SystemsSectionProps) => {
  const dense = systems.pairs.some((p) => p.body.split(" ").length > 60);

  return (
    <section
      id="systems"
      className={`${sectionPadLg} ${scrollMt} bg-[#F7F7F9]`}
      style={gridDotsStyle}
    >
      <div className="container mx-auto px-4">
        <Reveal>
          <IndustrySectionHead
            title={systems.title}
            description={systems.description}
          />
        </Reveal>

        <div className="mt-8 divide-y divide-[#E8E8ED] overflow-hidden rounded-xl border border-[#E8E8ED] bg-white lg:mt-12">
          {systems.groups.map((g, i) => (
            <Reveal key={g.group} delay={i * 40}>
              <div className="grid gap-3 px-6 py-6 md:grid-cols-[240px_1fr] md:gap-8 md:px-8 md:py-7">
                <h3 className={`text-[17px] font-semibold md:text-[18px] ${ink}`}>
                  {g.group}
                </h3>
                <p className={`text-[15px] leading-relaxed md:text-[16px] ${body}`}>
                  {g.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <aside className="mt-8 rounded-xl border border-[#E8E8ED] bg-[#161616] px-6 py-8 md:px-10 md:py-10">
            <p className={`mb-2 ${darkEyebrow}`}>
              Worth knowing
            </p>
            <h3 className={`text-[20px] font-semibold text-white md:text-[28px]`}>
              {systems.distinction.title}
            </h3>
            <p className={`mt-3 max-w-4xl text-[16px] leading-relaxed md:text-[18px] ${darkBody}`}>
              {systems.distinction.body}
            </p>
          </aside>
        </Reveal>

        <div className={`mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5 ${dense ? "lg:grid-cols-2" : "lg:grid-cols-4"
          }`}>
          {systems.pairs.map((p, i) => (
            <Reveal key={p.pair} delay={i * 45}>
              <div className="h-full rounded-xl border border-[#E8E8ED] bg-white p-5 md:p-6">
                <h4 className={`mb-2 text-[16px] font-semibold md:text-[17px] ${ink}`}>
                  {p.pair}
                </h4>
                <p className={`text-[14px] leading-relaxed md:text-[15px] ${body}`}>
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemsSection;
