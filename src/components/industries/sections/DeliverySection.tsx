import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import Reveal from "@/components/common/Reveal";
import { darkBody, darkEyebrow, darkInk } from "@/components/industries/typography";
import { sectionPadLg } from "./constants";

type DeliverySectionProps = {
  delivery: {
    title: string;
    description: string;
    items: { phase: string; line: string }[];
  };
};

const DeliverySection = ({ delivery }: DeliverySectionProps) => (
  <section className={`${sectionPadLg} bg-[#161616]`}>
    <div className="container mx-auto px-4">
      <Reveal>
        <IndustrySectionHead
          eyebrow="Delivery"
          title={delivery.title}
          description={delivery.description}
          dark
        />
      </Reveal>

      <ol className="mt-8 divide-y divide-white/15 border-y border-white/15 lg:mt-12">
        {delivery.items.map((d, i) => (
          <Reveal key={d.phase} delay={i * 45}>
            <li className="grid gap-3 py-7 md:grid-cols-[220px_1fr] md:gap-10 md:py-8">
              <div>
                <p className={darkEyebrow}>
                  Phase {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className={`mt-1 text-[20px] font-semibold md:text-[22px] ${darkInk}`}>
                  {d.phase}
                </h3>
              </div>
              <p className={`text-[15px] leading-relaxed md:pt-1 md:text-[16px] ${darkBody}`}>
                {d.line}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default DeliverySection;
