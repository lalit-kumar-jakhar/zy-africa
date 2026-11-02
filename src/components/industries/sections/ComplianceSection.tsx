import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import Reveal from "@/components/common/Reveal";
import { body, ink } from "@/components/industries/typography";
import { scrollMt, sectionPad } from "./constants";

type ComplianceSectionProps = {
  compliance: {
    title: string;
    description: string;
    rows: { item: string; detail: string }[];
  };
};

const ComplianceSection = ({ compliance }: ComplianceSectionProps) => (
  <section
    id="compliance"
    className={`${sectionPad} ${scrollMt} bg-[#F7F7F9]`}
  >
    <div className="container mx-auto px-4">
      <Reveal>
        <IndustrySectionHead
          title={compliance.title}
          description={compliance.description}
        />
      </Reveal>
      <Reveal delay={60}>
        <div className="mt-8 overflow-hidden rounded-xl border border-[#E8E8ED] bg-white lg:mt-12">
          {compliance.rows.map((r, i) => (
            <div
              key={r.item}
              className={`grid gap-2 px-5 py-5 md:grid-cols-[220px_1fr] md:gap-8 md:px-7 md:py-6 ${
                i < compliance.rows.length - 1 ? "border-b border-[#F0F0F3]" : ""
              }`}
            >
              <h3 className={`text-[16px] font-semibold ${ink}`}>{r.item}</h3>
              <p className={`text-[15px] leading-relaxed md:text-[16px] ${body}`}>
                {r.detail}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default ComplianceSection;
