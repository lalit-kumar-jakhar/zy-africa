"use client";
import React from "react";
import Image from "next/image";
const missionImg = "/static/assets/about-us/mission.webp";
const visionImg = "/static/assets/about-us/vision.webp";
import StarIcon from "../common/StarIcon";

const cardData = [
  {
    type: "Mission",
    title: "Our Mission",
    description:
      "At Zyneto, our mission is to simplify the complex and spark meaningful progress through digital innovation. We partner with businesses to craft tailored solutions that not only solve today’s challenges but also pave the way for future growth. Every strategy we build is rooted in purpose, powered by technology, and designed to deliver lasting impact.",
    image: missionImg,
    gradient: "from-cyan-500 via-blue-500 to-purple-600",
    color: "cyan",
    icon: (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    type: "Vision",
    title: "Our Vision",
    description:
      "Our vision is to create a world where businesses of all sizes can compete through direct access to transformative digital solutions. We aim to lead the charge in redefining what’s possible, bridging the gap between imagination and execution, and building a future where innovation is accessible, inclusive, and limitless.",
    image: visionImg,
    gradient: "from-purple-500 via-pink-500 to-orange-500",
    color: "purple",
    icon: (
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
];

const headerContent = {
  titlePart1: "Innovating with Purpose, ",
  titleHighlight: "Leading with Clarity",
  titlePart2: "",
  description:
    "At Zyneto, we fuse bold thinking with advanced technology to craft digital solutions that drive real impact. Our focus is on helping businesses evolve with confidence, equipping them to lead, adapt, and keep pace in a dynamic digital era. From strategy to execution, we turn ideas into action and ambition into measurable results.",
};

const MissionAbout: React.FC = () => {
  return (
    <div className="bg-black relative overflow-hidden text-white">
      <div className="container mx-auto px-4 md:py-[76px] py-[22px]">
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-1 md:mb-2">
              <StarIcon color="#ffffff" size={48} />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-[#FFFFFF] mx-auto">
              {headerContent.titlePart1}
              <span className="text-yellow-orange-gradient">
                {headerContent.titleHighlight}
              </span>
              {headerContent.titlePart2}
            </h2>
            <p className="text-[#E9FBFA] text-lg md:text-xl font-normal mt-2">
              {headerContent.description}
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
            {cardData.map((card, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute -inset-1 bg-linear-to-r ${card.gradient} rounded-3xl blur-sm opacity-15 transition-all duration-500`}
                ></div>
                <div className="relative backdrop-blur-xl rounded-3xl p-4 lg:p-6 border border-white/10 transition-all duration-500 h-full">
                  <div className="relative mb-6 rounded-2xl overflow-hidden h-56 lg:h-64">
                    <Image
                      src={card.image}
                      alt={`${card.type} - ${card.title}`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      priority={index === 0}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 bg-linear-to-r from-${card.color}-500 to-${card.color === "cyan" ? "blue" : "pink"}-600 rounded-lg flex items-center justify-center`}
                      >
                        {card.icon}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-gray-200 text-md leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAbout;
