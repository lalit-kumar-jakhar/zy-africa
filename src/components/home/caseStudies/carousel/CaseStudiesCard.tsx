import React from "react";
import Image, { type StaticImageData } from "next/image";
import Reveal from "@/components/common/Reveal";

interface CaseStudiesCardProps {
  title: string;
  highlight: string;
  description: string;
  iosLink?: string;
  androidLink?: string;
  webLink?: string;
  iosIcon?: StaticImageData | string;
  androidIcon?: StaticImageData | string;
  webIcon?: StaticImageData | string;
  image: StaticImageData | string;
  imageTitle: string;
  isActive?: boolean;
}

const baseDelay = 100;
const CaseStudiesCard: React.FC<CaseStudiesCardProps> = ({
  title,
  highlight,
  description,
  image,
  imageTitle,
}) => {
  return (
    <div className="flex flex-col-reverse xl:flex-row items-center justify-between gap-4 md:gap-10 w-full md:px-6 pb-4 xl:pb-24">
      <div className="xl:max-w-xl text-left">
        <Reveal delay={baseDelay} duration={500} direction="up">
          <p className="text-sm font-semibold text-gray-600 mb-2">
            Case Studies
          </p>
        </Reveal>
        <Reveal delay={baseDelay * 2} duration={500} direction="up">
          <h2 className="text-[30px] md:text-[40px] font-bold text-black leading-tight">
          <span className="text-yellow-orange-gradient">{title} </span>{highlight}
          </h2>
        </Reveal>
        <Reveal delay={baseDelay * 3} duration={500} direction="up">
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            {description}
          </p>
        </Reveal>
      </div>
      <div className="shrink-0 w-full xl:w-1/3">
        <Image
          src={image || ""}
          alt={`Case study preview: ${imageTitle}`}
          className="w-full h-full object-cover rounded-lg"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default CaseStudiesCard;
