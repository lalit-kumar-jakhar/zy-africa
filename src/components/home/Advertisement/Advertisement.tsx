"use client";
import React from "react";
import StarIcon from "@/components/common/StarIcon";
const bgAdvertisementImage = "/static/assets/home/star-circles-bg.svg";
import Reveal from "@/components/common/Reveal";
import { useModal } from "@/context/ModalContext";

const baseDelay = 100;

const Advertisement: React.FC = () => {
  const { openModal } = useModal();
  return (
    <div className="bg-[#161616] relative overflow-hidden">
      <div className="container mx-auto px-4 md:py-[76px] py-[22px]">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-10 pointer-events-none"
          style={{
            backgroundImage: `url(${bgAdvertisementImage})`,
          }}
        ></div>
        <div className="text-center mx-auto mb-8 z-50">
          <div className="flex items-center justify-center mb-1 md:mb-2">
            <StarIcon color="#ffffff" size={48} />
          </div>
          <Reveal delay={baseDelay} duration={500} direction="up">
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-[#FFFFFF] mx-auto">
              Solutions That Speak{" "}
              <span className="text-yellow-orange-gradient">
                Your Industry&apos;s
              </span>{" "}
              Language
            </h2>
          </Reveal>
          <Reveal delay={baseDelay * 2} duration={500} direction="up">
            <p className="text-[#E9FBFA] text-lg md:text-xl font-normal mt-2">
              We build custom digital solutions that solve real problems and
              move your industry forward.
            </p>
          </Reveal>
          <div className="mt-4 md:mt-6">
            <button
              className="gradient-bg-btn rounded-full"
              onClick={openModal}
            >
              Book a Scoping Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
