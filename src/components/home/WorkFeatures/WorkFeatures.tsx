import React from "react";
import StarIcon from "@/components/common/StarIcon";
import WorkFeatureTabs from "./WorkFeatureTabs";
import Reveal from "@/components/common/Reveal";

const baseDelay = 100;
const WorkFeatures: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="md:py-19 py-5.5">
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-1 md:mb-2">
              <StarIcon size={40} color="#000000" />
            </div>
            <Reveal delay={baseDelay * 1.5} duration={500} direction="up">
              <h2 className="text-[30px] md:text-[40px] font-bold text-[#000000]">
                Next Generation Solution We Provide
              </h2>
            </Reveal>
            <Reveal delay={baseDelay * 2} duration={500} direction="up">
              <p className="text-[#4B5563] mt-2 text-lg md:text-xl font-normal xl:max-w-5xl mx-auto">
                The future is now with Zyneto&apos;s innovative and advanced
                solutions. We design and develop future-ready solutions that
                help businesses of all sizes scale, automate, and transform in
                the age of technology.
              </p>
            </Reveal>
          </div>
          <WorkFeatureTabs />
        </div>
      </div>
    </div>
  );
};

export default WorkFeatures;
