import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import IndustryTable from "@/components/industries/IndustryTable";
import Reveal from "@/components/common/Reveal";
import { body, ink, lede } from "@/components/industries/typography";
import { scrollMt, sectionPadLg } from "./constants";

type RetailBoundarySectionProps = {
  retailBoundary: {
    title: string;
    description: string;
    edi: { x12: string; edifact: string; use: string }[];
    whyEdi: { title: string; points: string[] };
    gs1: { title: string; points: string[] };
    engineering: { title: string; points: string[] };
    onboarding: string;
  };
};

const RetailBoundarySection = ({
  retailBoundary,
}: RetailBoundarySectionProps) => (
  <section
    id="retail-boundary"
    className={`${sectionPadLg} ${scrollMt} bg-white`}
  >
    <div className="container mx-auto px-4">
      <Reveal>
        <IndustrySectionHead
          title={retailBoundary.title}
          description={retailBoundary.description}
        />
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-8 lg:mt-12">
          <IndustryTable
            columns={[
              {
                key: "x12",
                header: "X12",
                className: `whitespace-nowrap tabular-nums font-semibold ${ink}`,
                render: (r) => r.x12,
              },
              {
                key: "edifact",
                header: "EDIFACT",
                className: `whitespace-nowrap ${body}`,
                render: (r) => r.edifact || "n/a",
              },
              {
                key: "use",
                header: "What it does",
                className: body,
                render: (r) => r.use,
              },
            ]}
            rows={retailBoundary.edi}
            rowKey={(r) => r.x12}
          />
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {[retailBoundary.whyEdi, retailBoundary.gs1, retailBoundary.engineering].map(
          (b, i) => (
            <Reveal key={b.title} delay={i * 55}>
              <div className="h-full">
                <h3
                  className={`mb-4 border-b border-[#E8E8ED] pb-3 text-[18px] font-semibold md:text-[20px] ${ink}`}
                >
                  {b.title}
                </h3>
                <ul className="space-y-4">
                  {b.points.map((p) => (
                    <li
                      key={p}
                      className={`border-l-2 border-[#E8E8ED] pl-4 text-[15px] leading-relaxed md:text-[16px] ${body}`}
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        )}
      </div>

      <Reveal delay={80}>
        <p
          className={`mx-auto mt-10 max-w-3xl text-center text-[16px] leading-relaxed md:text-[18px] ${lede}`}
        >
          {retailBoundary.onboarding}
        </p>
      </Reveal>
    </div>
  </section>
);

export default RetailBoundarySection;
