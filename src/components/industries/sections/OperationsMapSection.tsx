import Image from "next/image";
import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import Reveal from "@/components/common/Reveal";
import { body, inkSoft } from "@/components/industries/typography";
import { sectionPad } from "./constants";

type OperationsMapSectionProps = {
  operations: {
    title: string;
    description: string;
    stages: string[];
    image?: { src: string; alt: string };
  };
};

const OperationsMapSection = ({ operations }: OperationsMapSectionProps) => (
  <section className={`${sectionPad} bg-white`}>
    <div className="container mx-auto px-4">
      <Reveal>
        <IndustrySectionHead
          title={operations.title}
          description={operations.description}
        />
      </Reveal>

      <Reveal delay={40}>
        <div className="mt-8 flex flex-wrap justify-center gap-2 lg:mt-10">
          {operations.stages.map((stage, i) => (
            <span
              key={stage}
              className={`inline-flex items-center gap-2 rounded-lg border border-[#E8E8ED] bg-[#FAFAFB] px-3 py-1.5 text-[12px] font-medium md:text-[13px] ${body}`}
            >
              <span className={`font-bold tabular-nums ${inkSoft}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {stage}
            </span>
          ))}
        </div>
      </Reveal>

      {operations.image && (
        <Reveal delay={80}>
          <div className="mt-6 overflow-hidden rounded-xl border border-[#E8E8ED] bg-[#FAFAFB] p-3 lg:mt-8 lg:p-5">
            <Image
              src={operations.image.src}
              alt={operations.image.alt}
              width={1200}
              height={640}
              unoptimized
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      )}
    </div>
  </section>
);

export default OperationsMapSection;
