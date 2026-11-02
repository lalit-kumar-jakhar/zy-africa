"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import ResponsiveImage from "@/components/common/ResponsiveImage";
const gridDotsImage = "/static/assets/home/about/dots.svg";
import StarIcon from "../common/StarIcon";

type AboutServicesProps = {
  aboutServices: {
    title: string;
    description: string | React.ReactNode;
    description2?: string | React.ReactNode;
    image?: StaticImageData | string;
    /** SEO: Descriptive alt text for Google Images indexing */
    imageAlt?: string;
  };
  priority?: boolean;
};

const AboutServices: React.FC<AboutServicesProps> = ({
  aboutServices,
  priority = false,
}) => {
  const { title, description, description2, image, imageAlt } = aboutServices;
  return (
    <div className="bg-[#FFFFFF]">
      <div className="md:py-[96px] py-[32px] relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="text-center">
            <div className="flex justify-center items-center mb-1 md:mb-2">
              <StarIcon size={40} color="#000000" />
            </div>
            <h2 className="text-[30px] md:text-[40px] font-bold text-[#000000]">
              {title || "Comprehensive IT Services Built for Growth"}
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12 mt-6">
            <div className="w-full lg:w-1/2 relative">
              <div className="rounded-[36px] shadow-lg overflow-hidden relative z-10">
                <ResponsiveImage
                  src={typeof image === "string" ? image : image?.src || ""}
                  alt={
                    imageAlt ||
                    `${title}: service overview illustration`
                  }
                  title={imageAlt || title}
                  className="w-full h-auto"
                  width={420}
                  height={280}
                  draggable={false}
                  eager={priority}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <Image
                src={gridDotsImage}
                alt=""
                width={120}
                height={120}
                aria-hidden
                className="object-contain absolute -right-6 -top-4"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col space-y-5 items-start">
              <p className="text-lg md:text-xl font-normal text-[#616161] text-left">
                {description}
              </p>
              {description2 && (
                <p className="text-lg md:text-xl font-normal text-[#616161] text-left">
                  {description2}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutServices;
