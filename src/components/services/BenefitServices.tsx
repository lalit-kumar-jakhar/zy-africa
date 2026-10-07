import Reveal from "@/components/common/Reveal";
import StarIcon from "../common/StarIcon";
const gridDotsBgImage = "/static/assets/home/faq/grid-dots.svg";
import styles from "./service.module.css";

const baseDelay = 100;
type BenefitServicesProps = {
  benefitServices: {
    title: string;
    description: string | React.ReactNode;
    features: {
      title: string;
      description: string | React.ReactNode;
    }[];
  };
  isWhiteColorBg?: boolean;
};

const BenefitServices: React.FC<BenefitServicesProps> = ({
  benefitServices,
  isWhiteColorBg = false,
}) => {
  const { title, description, features } = benefitServices;

  return (
    <section
      className={`md:py-19 py-5.5 ${
        isWhiteColorBg ? "bg-white" : "bg-[#F9F9F9]"
      }`}
      style={
        isWhiteColorBg
          ? {}
          : {
              backgroundImage: `url(${gridDotsBgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
      }
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center items-center mb-1 md:mb-2">
            <StarIcon size={40} color="#000000" />
          </div>
          <Reveal delay={baseDelay} duration={500} direction="up">
            <h2 className="text-[30px] md:text-[40px] font-bold text-[#000000]">
              {title || "Comprehensive IT Services Built for Growth"}
            </h2>
          </Reveal>
          <Reveal delay={baseDelay * 2} duration={500} direction="up">
            <p className="text-[#4B5563] mt-2 text-lg md:text-xl font-normal xl:max-w-5xl mx-auto">
              {description ||
                "Experience the power of innovation-driven IT services built to fuel your growth, efficiency, and digital edge. From concept to launch, we craft scalable digital solutions that give your business a competitive edge."}
            </p>
          </Reveal>
        </div>
        <div className="mt-6 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features?.map((feature, idx) => (
            <Reveal
              key={idx}
              delay={baseDelay * (3 + idx)}
              duration={500}
              direction="up"
              triggerOnce
            >
              <div
                className={`group ${styles.cardHoverEffect} rounded-xl shadow-sm p-6 h-full transition-all duration-500 ${
                  isWhiteColorBg ? "bg-[#F9F9F9]" : "bg-[#ffffff]"
                }`}
              >
                <div className={`${styles.cardContent}`}>
                  <h3 className="text-[20px] md:text-[24px] font-semibold text-[#000000] group-hover:text-white mb-2 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <div className="text-[16px] md:text-[18px] text-[#616161] group-hover:text-white transition-colors duration-300 grow">
                    {feature.description}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BenefitServices;
