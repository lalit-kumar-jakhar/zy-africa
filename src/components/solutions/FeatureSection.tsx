"use client";

import React, { useState } from "react";
import { StaticImageData } from "next/image";
import StarIcon from "../common/StarIcon";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import { useModal } from "@/context/ModalContext";

export type FeatureTab = {
  id: string;
  label: string;
  image?: StaticImageData | string;
  features: string[];
  description?: string | React.ReactNode;
};

export type FeatureSectionProps = {
  title: string;
  tabs: FeatureTab[];
  image1?: StaticImageData | string;
  image2?: StaticImageData | string;
  image3?: StaticImageData | string;
};

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  tabs,
  image1,
  image2,
  image3,
}) => {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  const getTabImage = (tab: FeatureTab) => {
    if (tab.id === "user-panel") return image1 || tab.image || "";
    if (tab.id === "admin-panel") return image2 || tab.image || "";
    return image3 || tab.image || "";
  };

  return (
    <section className="relative py-20 lg:py-28 bg-linear-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-br from-orange-100 to-pink-100 rounded-full blur-3xl opacity-30 translate-y-32 -translate-x-32"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-1 md:mb-2">
            <StarIcon color="#000" size={48} />
          </div>
          <h2 className="text-[30px] md:text-[40px] font-bold leading-snug text-[#000] text-center mx-auto max-w-5xl">
            {title}
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center mb-12">
          <div className="relative flex flex-col gap-4 items-center lg:justify-center md:flex-row bg-white rounded-3xl p-3 max-w-4xl mx-auto w-full border-none lg:!gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 !px-6 !py-3 !text-[18px] rounded-2xl !font-normal text-center transition-all !duration-75 w-fit cursor-pointer ${activeTab === tab.id
                  ? "gradient-bg-btn !p-0"
                  : "text-gray-600 hover:text-gray-800 bg-gray-50 hover:bg-gray-100"
                  }`}
              >
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center h-full"
            role="tabpanel"
            hidden={activeTab !== tab.id}
          >
            <div className="order-2 lg:order-1 group">
              <div className="relative w-full aspect-1/1 lg:w-[500px] rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                <ResponsiveImage
                  src={(() => {
                    const t = getTabImage(tab);
                    return typeof t === "string" ? t : t?.src || "";
                  })()}
                  alt={`${tab.label}: feature preview`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 90vw, 500px"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold bg-linear-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                  {tab.label}
                </h3>
                {tab.description && (
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {tab.description}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {tab.features.map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-center space-x-4 p-2 rounded-2xl hover:bg-linear-to-r hover:from-orange-50 hover:to-blue-50 transition-all duration-300 hover:transform hover:translate-x-2"
                  >
                    <div className="relative">
                      <div className="w-3 h-3 bg-linear-to-r from-orange-500 to-purple-600 rounded-full flex-shrink-0 shadow-lg"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-linear-to-r from-orange-500 to-purple-600 rounded-full blur-sm opacity-60 group-hover:opacity-75 transition-opacity duration-300"></div>
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <button
                  className="gradient-bg-btn rounded-2xl  transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-lg"
                  onClick={openModal}
                >
                  Connect with Us
                  <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
