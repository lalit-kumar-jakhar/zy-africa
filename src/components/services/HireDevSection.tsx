"use client";
import { StaticImageData } from "next/image";
import React from "react";
import StarIcon from "../common/StarIcon";
import Reveal from "@/components/common/Reveal";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import { useModal } from "@/context/ModalContext";
const devHireCommon = "/static/assets/services/hire/global-hire.svg";

type HireDevSectionProps = {
  hireDevServices: {
    title: string;
    description: string | React.ReactNode;
    description2?: string | React.ReactNode;
    image?: StaticImageData | string;
    ctaText?: string;
  };
};

const baseDelay = 100;

const HireDevSection: React.FC<HireDevSectionProps> = ({ hireDevServices }) => {
  const { openModal } = useModal();
  const { title, description, description2, image, ctaText } = hireDevServices;
  return (
    <div className="bg-[#FFFFFF]">
      <div className="md:py-[76px] py-[22px] relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="text-center">
            <div className="flex justify-center items-center mb-1 md:mb-2">
              <StarIcon size={40} color="#000000" />
            </div>
            <Reveal delay={baseDelay} duration={500} direction="up">
              <h2 className="text-[30px] md:text-[40px] font-bold text-[#000000]">
                {title || "Comprehensive IT Services Built for Growth"}
              </h2>
            </Reveal>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 mt-6">
            <div className="w-full lg:w-3/5 flex flex-col space-y-5 items-start">
              <p className="text-[18px] text-[#616161] md:text-[20px] text-left">
                {description}
              </p>
              {description2 && (
                <p className="text-[18px] text-[#616161] md:text-[20px] text-left">
                  {description2}
                </p>
              )}
              <Reveal delay={baseDelay + 200} duration={500} direction="up">
                <button
                  className="gradient-bg-btn rounded-full"
                  onClick={openModal}
                >
                  {ctaText || "Hire Developers Today"}
                </button>
              </Reveal>
            </div>
            <div className="w-full lg:w-2/5">
              <ResponsiveImage
                src={
                  typeof image === "string" ? image : image?.src || devHireCommon
                }
                alt={
                  title
                    ? `${title}: hire developers illustration`
                    : "Hire developers illustration"
                }
                className="w-full h-full"
                width={200}
                height={280}
                draggable={false}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireDevSection;
