import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import Reveal from "@/components/common/Reveal";
import {
  body,
  ink,
  label,
  lede,
  positive,
  positiveLabel,
} from "@/components/industries/typography";
import { sectionPadLg } from "./constants";

type EngagementSectionProps = {
  engagement: {
    title: string;
    description: string;
    items: { title: string; good: string; bad: string }[];
    recommendation: string;
  };
};

const EngagementSection = ({ engagement }: EngagementSectionProps) => (
  <section className={`${sectionPadLg} bg-white`}>
    <div className="container mx-auto px-4">
      <Reveal>
        <IndustrySectionHead
          eyebrow="Engagement"
          title={engagement.title}
          description={engagement.description}
        />
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
        {engagement.items.map((e, i) => (
          <Reveal key={e.title} delay={i * 45} className="h-full">
            <article className="flex h-full flex-col rounded-xl border border-[#E8E8ED] bg-[#FAFAFB] p-5 md:p-6">
              <h3 className={`mb-4 text-[18px] font-semibold md:text-[20px] ${ink}`}>
                {e.title}
              </h3>
              <div className="mb-4 border-l-2 border-[#047857] pl-3">
                <p className={positiveLabel}>Upside</p>
                <p className={`mt-1 text-[14px] leading-relaxed md:text-[15px] ${positive}`}>
                  {e.good}
                </p>
              </div>
              <div className="mt-auto border-l-2 border-[#D1D5DB] pl-3">
                <p className={`${label} text-[11px]`}>Downside</p>
                <p className={`mt-1 text-[14px] leading-relaxed md:text-[15px] ${body}`}>
                  {e.bad}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={100}>
        <aside className="mx-auto mt-10 max-w-3xl rounded-xl border border-[#E8E8ED] bg-[#FAFAFB] px-6 py-5 text-center md:px-8 md:py-6">
          <p className={`mb-1 ${label}`}>What we usually suggest</p>
          <p className={`text-[16px] leading-relaxed md:text-[18px] ${lede}`}>
            {engagement.recommendation}
          </p>
        </aside>
      </Reveal>
    </div>
  </section>
);

export default EngagementSection;
