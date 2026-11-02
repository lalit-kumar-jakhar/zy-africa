"use client";
import StarIcon from "../common/StarIcon";
const gridDotsBgImage = "/static/assets/home/faq/grid-dots.svg";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

type ProvideServicesProps = {
  provideServices: {
    title: string;
    description: string | ReactNode;
    features: {
      icon: StaticImageData | string;
      title: string;
      description: string | ReactNode;
    }[];
  };
};

const ProvideServices: React.FC<ProvideServicesProps> = ({
  provideServices,
}) => {
  const { title, description, features } = provideServices;

  return (
    <section
      className="bg-[#F9F9F9] md:py-[76px] py-[22px]"
      style={{
        backgroundImage: `url(${gridDotsBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
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
          {features?.map((feature, idx) => (
            <div
              className="bg-[#FFFFFF] rounded-xl border border-dashed border-[#C4C4C4] shadow-sm p-6 text-center hover:shadow-md transition-all duration-300 h-full"
              key={idx}
            >
              <div className="flex justify-center mb-8">
                <div className="flex items-center justify-center w-14 h-14 bg-[#FFF3D8] rounded-[16px] relative z-10">
                  <Image
                    src={feature.icon || ""}
                    alt={feature.title}
                    width={56}
                    height={56}
                    className="h-[56px] w-[56px] object-contain absolute -bottom-6 -left-6"
                  />
                </div>
              </div>
              <h3 className="text-[20px] md:text-[24px] font-semibold text-[#000000] mb-2">
                {feature.title}
              </h3>
              <div className="text-[16px] md:text-[18px] font-normal text-[#616161]">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProvideServices;
