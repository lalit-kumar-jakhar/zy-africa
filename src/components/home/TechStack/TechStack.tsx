import StarIcon from "@/components/common/StarIcon";
import TechStackTabs from "./TechStackTabs";
import Reveal from "@/components/common/Reveal";

const baseDelay = 100;
interface TechStackProps {
  title?: string;
  description?: string;
}

const HighlightedTitle: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(Tech Stack)/i);
  return (
    <>
      {parts.map((part, index) =>
        /Tech Stack/i.test(part) ? (
          <span key={index} className="text-yellow-orange-gradient">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

const TechStack: React.FC<TechStackProps> = ({
  title = "Proven Tech Stack We Use for Modern Development",
  description = "Unlike traditional services, we use the best methods to quickly and efficiently create advanced technology solutions. Our approach ensures not only speed but also quality, guaranteeing that your project reaches its full potential.",
}) => {
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 md:py-[76px] py-[22px]">
        <div className="text-center mx-auto mb-8">
          <div className="flex justify-center items-center mb-1 md:mb-2">
            <StarIcon size={40} color="#FFF" />
          </div>
          <Reveal delay={baseDelay} duration={500} direction="up">
            <h2 className="text-[30px] md:text-[40px] font-bold text-[#FFF]">
              <HighlightedTitle text={title} />
            </h2>
          </Reveal>
          <Reveal delay={baseDelay * 2} duration={500} direction="up">
            <p className="text-[#E9FBFA] mt-2 text-lg md:text-xl font-normal xl:max-w-5xl mx-auto">
              {description}
            </p>
          </Reveal>
        </div>
        <TechStackTabs />
      </div>
    </div>
  );
};

export default TechStack;
