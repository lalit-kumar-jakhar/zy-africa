import {
  FaAward,
  FaDatabase,
  FaGlobeAmericas,
  FaShieldAlt,
  FaWifi,
} from "react-icons/fa";
import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import Reveal from "@/components/common/Reveal";
import { body, ink } from "@/components/industries/typography";
import { sectionPadLg } from "./constants";

type NonFunctionalSectionProps = {
  nonFunctional: {
    title: string;
    description: string;
    groups: { group: string; body: string }[];
  };
};

const groupIcons = [FaWifi, FaDatabase, FaShieldAlt, FaAward, FaGlobeAmericas];

const NonFunctionalSection = ({
  nonFunctional,
}: NonFunctionalSectionProps) => (
  <section className={`${sectionPadLg} bg-[#F7F7F9]`}>
    <div className="container mx-auto px-4">
      <Reveal>
        <IndustrySectionHead
          eyebrow="Non-functional"
          title={nonFunctional.title}
          description={nonFunctional.description}
        />
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-12 lg:gap-6 xl:grid-cols-3">
        {nonFunctional.groups.map((g, i) => {
          const Icon = groupIcons[i] ?? FaShieldAlt;

          return (
            <Reveal key={g.group} delay={i * 45} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#E8E8ED] bg-white">
                <div
                  aria-hidden
                  className="h-1 bg-linear-to-r from-[#ff732d] via-[#ff0044] to-[#9900ff]"
                />
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span
                      aria-hidden
                      className={`flex shrink-0 items-center justify-center ${ink}`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>

                  <h3
                    className={`text-[18px] font-semibold leading-snug md:text-[19px] ${ink}`}
                  >
                    {g.group}
                  </h3>
                  <p
                    className={`mt-3 flex-1 text-[15px] leading-relaxed md:text-[16px] ${body}`}
                  >
                    {g.body}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default NonFunctionalSection;
