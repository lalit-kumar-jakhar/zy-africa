"use client";

import React from "react";
import StarIcon from "@/components/common/StarIcon";
const bgAdvertisementImage = "/static/assets/home/star-circles-bg.svg";
import { useModal } from "@/context/ModalContext";

type AdvertisementProps = {
  advertisement: {
    title: string | React.ReactNode;
    description: string;
    ctaText: string;
  };
};

const AdvServices: React.FC<AdvertisementProps> = ({ advertisement }) => {
  const { title, description, ctaText } = advertisement;
  const { openModal } = useModal();
  return (
    <section className="bg-[#161616] relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 pointer-events-none"
        style={{ backgroundImage: `url(${bgAdvertisementImage})` }}
      />

      <div className="container relative z-10 mx-auto px-4 md:py-[76px] py-[22px]">
        <div className="flex items-center justify-center mb-1 md:mb-2">
          <StarIcon color="#ffffff" size={48} />
        </div>
        <h2 className="text-[30px] md:text-[40px] font-bold leading-snug text-white text-center mx-auto max-w-5xl">
          {title}
        </h2>
        <p className="text-[#E9FBFA] text-[18px] font-normal mt-2 text-center max-w-3xl mx-auto">
          {description}
        </p>
        <div className="text-center mt-4 md:mt-6">
          <button
            className="gradient-bg-btn rounded-full"
            onClick={openModal}
          >
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvServices;
