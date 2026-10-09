import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import IndustryTable from "@/components/industries/IndustryTable";
import Reveal from "@/components/common/Reveal";
import {
  body,
  darkBody,
  ink,
  label,
  muted,
} from "@/components/industries/typography";
import { scrollMt, sectionPad } from "./constants";

type CostHighlight = {
  label: string;
  value: string;
  note: string;
};

type CostSectionProps = {
  cost: {
    title: string;
    description: string;
    drivers: { driver: string; hours: string; note?: string }[];
    modules: { module: string; hours: string; note?: string }[];
    math: { title: string; points: string[] };
  };
  highlights: CostHighlight[];
};

const CostSection = ({ cost, highlights }: CostSectionProps) => (
  <section id="cost" className={`${sectionPad} ${scrollMt} bg-[#F7F7F9]`}>
    <div className="container mx-auto px-4">
      <Reveal>
        <IndustrySectionHead
          eyebrow="Transparency"
          title={cost.title}
          description={cost.description}
        />
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-12">
        {highlights.map((h, i) => (
          <Reveal key={h.label} delay={i * 50}>
            <div className="rounded-xl border border-[#E8E8ED] bg-white p-6 text-center md:p-7">
              <p className={label}>{h.label}</p>
              <p className={`mt-2 text-[28px] font-bold tracking-tight md:text-[32px] ${ink}`}>
                {h.value}
              </p>
              <p className={`mt-1 text-[13px] ${muted}`}>{h.note}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
        <Reveal delay={40}>
          <IndustryTable
            caption="What moves the number, ranked"
            minWidth="420px"
            columns={[
              {
                key: "driver",
                header: "Driver",
                className: ink,
                render: (d) => (
                  <>
                    <span className="font-medium">{d.driver}</span>
                    {d.note && (
                      <span className={`mt-1 block text-[13px] font-normal ${muted}`}>
                        {d.note}
                      </span>
                    )}
                  </>
                ),
              },
              {
                key: "hours",
                header: "Hours",
                className: `whitespace-nowrap tabular-nums ${body}`,
                render: (d) => d.hours,
              },
            ]}
            rows={cost.drivers}
            rowKey={(d) => d.driver}
          />
        </Reveal>
        <Reveal delay={80}>
          <IndustryTable
            caption="Hours by module"
            minWidth="420px"
            columns={[
              {
                key: "module",
                header: "Module",
                className: ink,
                render: (m) => (
                  <>
                    <span className="font-medium">{m.module}</span>
                    {m.note && (
                      <span className={`mt-1 block text-[13px] font-normal ${muted}`}>
                        {m.note}
                      </span>
                    )}
                  </>
                ),
              },
              {
                key: "hours",
                header: "Hours",
                className: `whitespace-nowrap tabular-nums ${body}`,
                render: (m) => m.hours,
              },
            ]}
            rows={cost.modules}
            rowKey={(m) => m.module}
          />
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="mt-8 rounded-xl border border-[#E8E8ED] bg-[#161616] p-6 md:p-9">
          <h3 className={`mb-5 text-[20px] font-semibold text-white md:text-[24px]`}>
            {cost.math.title}
          </h3>
          <ul className="space-y-4">
            {cost.math.points.map((p) => (
              <li
                key={p}
                className={`border-l-2 border-white/30 pl-4 text-[15px] leading-relaxed md:text-[16px] ${darkBody}`}
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CostSection;
