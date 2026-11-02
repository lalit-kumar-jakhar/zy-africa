import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import Reveal from "@/components/common/Reveal";
import SubVerticalsTabs from "./SubVerticalsTabs";
import { scrollMt, sectionPadLg } from "./constants";

type SubVerticalsSectionProps = {
  subVerticals: {
    title: string;
    description: string;
    items: { title: string; breaks: string; build: string }[];
  };
};

const SubVerticalsSection = ({ subVerticals }: SubVerticalsSectionProps) => (
  <section
    id="sub-verticals"
    className={`${sectionPadLg} ${scrollMt} bg-[#F7F7F9]`}
  >
    <div className="container mx-auto px-4">
      <Reveal>
        <IndustrySectionHead
          title={subVerticals.title}
          description={subVerticals.description}
        />
      </Reveal>
      <Reveal delay={60}>
        <SubVerticalsTabs items={subVerticals.items} />
      </Reveal>
    </div>
  </section>
);

export default SubVerticalsSection;
