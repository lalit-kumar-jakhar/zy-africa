import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import IndustryTable from "@/components/industries/IndustryTable";
import Reveal from "@/components/common/Reveal";
import { body, ink } from "@/components/industries/typography";
import { scrollMt, sectionPadLg } from "./constants";

type BuildOrBuySectionProps = {
  buildOrBuy: {
    title: string;
    description: string;
    rows: { option: string; best: string; verdict: string }[];
  };
};

const BuildOrBuySection = ({ buildOrBuy }: BuildOrBuySectionProps) => (
  <section
    id="build-or-buy"
    className={`${sectionPadLg} ${scrollMt} bg-white`}
  >
    <div className="container mx-auto px-4">
      <Reveal>
        <IndustrySectionHead
          title={buildOrBuy.title}
          description={buildOrBuy.description}
        />
      </Reveal>
      <Reveal delay={60}>
        <div className="mt-8 lg:mt-12">
          <IndustryTable
            minWidth="760px"
            columns={[
              {
                key: "option",
                header: "Component",
                className: `font-semibold ${ink}`,
                render: (r) => r.option,
              },
              {
                key: "best",
                header: "Our recommendation",
                className: body,
                render: (r) => r.best,
              },
              {
                key: "verdict",
                header: "Our honest verdict",
                className: body,
                render: (r) => r.verdict,
              },
            ]}
            rows={buildOrBuy.rows}
            rowKey={(r) => r.option}
          />
        </div>
      </Reveal>
    </div>
  </section>
);

export default BuildOrBuySection;
