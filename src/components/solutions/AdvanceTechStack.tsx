import StarIcon from "../common/StarIcon";
const gridDotsBgImage = "/static/assets/home/faq/grid-dots.svg";
import styles from "../services/service.module.css";
const metaverseIcon = "/static/assets/navbar/services/nlp.svg";
const cloudIcon = "/static/assets/navbar/services/cloud.svg";
const aiIcon = "/static/assets/navbar/services/ai.svg";
const iotIcon = "/static/assets/navbar/services/iot.svg";
const arVrIcon = "/static/assets/navbar/services/agentic-ai.svg";
const blockChainIcon = "/static/assets/navbar/services/ci-cd.svg";
import Image from "next/image";

type AdvanceTechStackProps = {
  advanceTechStack: {
    title: string;
    description: string | React.ReactNode;
    features: {
      title: string;
      description: string | React.ReactNode;
    }[];
  };
  isWhiteColorBg?: boolean;
};

const AdvanceTechStack: React.FC<AdvanceTechStackProps> = ({
  advanceTechStack,
  isWhiteColorBg = false,
}) => {
  const { title, description, features } = advanceTechStack;

  const iconMap: Record<string, string> = {
    "Artificial Intelligence": aiIcon,
    "Internet of Things": iotIcon,
    Metaverse: metaverseIcon,
    Cloud: cloudIcon,
    Blockchain: blockChainIcon,
    "AR/VR": arVrIcon,
  };

  const displayFeatures = features.map((feature) => ({
    ...feature,
    icon: iconMap[feature.title] || aiIcon,
  }));

  return (
    <section
      className={`md:py-[76px] py-[22px] ${
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
          <h2 className="text-[30px] md:text-[40px] font-bold text-[#000000]">
            {title || "Comprehensive IT Services Built for Growth"}
          </h2>
          <p className="text-[#4B5563] mt-2 text-lg md:text-xl font-normal xl:max-w-5xl mx-auto">
            {description ||
              "Experience the power of innovation-driven IT services built to fuel your growth, efficiency, and digital edge. From concept to launch, we craft scalable digital solutions that give your business a competitive edge."}
          </p>
        </div>
        <div className="mt-6 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayFeatures?.map((feature, idx) => (
            <div
              key={idx}
              className={`group ${styles.cardHoverEffect} rounded-xl shadow-sm p-6 h-full transition-all duration-500 bg-[#000]/10 backdrop-blur-md hover:border-transparent flex flex-col`}
            >
              <div className={`${styles.cardContent}`}>
                <div className="w-12 h-12 lg:h-[90px] lg:w-[90px] mb-4 flex items-center justify-center bg-[#fff]/50 rounded-full transition-all duration-300 group-hover:bg-white p-1 lg:p-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-semibold text-[#000] mb-2">
                  {feature.title}
                </h3>
                <div className="text-[16px] md:text-[18px] text-[#000] flex-grow">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AdvanceTechStack;
