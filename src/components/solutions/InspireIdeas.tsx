import Image, { StaticImageData } from "next/image";
import React from "react";
import StarIcon from "../common/StarIcon";

type Feature = {
  image: StaticImageData | string;
  title: string;
  description: string | React.ReactNode;
};

type InspireIdeasProps = {
  title: string;
  description?: string;
  features: Feature[];
};

const InspireIdeas: React.FC<{ inspireIdeas: InspireIdeasProps }> = ({
  inspireIdeas,
}) => {
  const { title, description, features } = inspireIdeas;
  return (
    <section className="bg-[#edebeb] md:py-[76px] py-[22px]">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center items-center mb-1 md:mb-2">
            <StarIcon size={40} color="#000000" />
          </div>
          <h2 className="text-[30px] md:text-[40px] font-bold text-[#000000]">
            {title}
          </h2>
          <p className="text-[#4B5563] mt-2 text-lg md:text-xl font-normal xl:max-w-5xl mx-auto ">
            {description}
          </p>
        </div>
        <div className="mt-6 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-[#ffffff] rounded-xl p-6 pb-0 transition-all duration-300 h-full flex flex-col">
              <h3 className="text-[20px] md:text-[24px] font-semibold text-[#000000] mb-2">
                {feature.title}
              </h3>
              <p className="text-[16px] md:text-[18px] font-normal text-[#616161] mb-1 flex-grow">
                {feature.description}
              </p>
              <div className="flex items-center w-full h-auto lg:w-3/5 relative z-10 mx-auto justify-center overflow-hidden">
                <Image
                  src={feature.image || ""}
                  alt={feature.title}
                  width={480}
                  height={200}
                  className="object-cover w-full h-auto mt-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspireIdeas;
