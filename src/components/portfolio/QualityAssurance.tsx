"use client";
import React from "react";
import Reveal from "@/components/common/Reveal";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import { FaCheckCircle } from "react-icons/fa";
const qualityAssuranceImage = "/static/assets/home/qualityAssure/quality-assurance.webp";

const qualityFeatures = [
  "ISO 27001 & SOC 2 Compliance-Driven Processes",
  "99.9% Production Uptime & High Availability",
  "Zero Critical Security Breaches",
  "Agile & DevOps-Driven Delivery Model",
  "AI-Powered, Cloud-Native Solutions",
];

const QualityAssurance: React.FC = () => {
  return (
    <section className="bg-white relative overflow-hidden py-12 md:py-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-6">
          <div className="flex flex-col justify-center w-full">
            <Reveal delay={100} duration={500} direction="up" triggerOnce>
              <h2 className="text-[30px] md:text-[40px] font-bold text-[#000000] mb-4 max-w-2xl leading-tight">
                <span className="text-yellow-orange-gradient">Enterprise</span>
                -Grade Quality &amp; Compliance
              </h2>
            </Reveal>
            <Reveal delay={200} duration={500} direction="up" triggerOnce>
              <p className="text-lg md:text-xl text-[#616161] max-w-2xl font-normal">
                Built on industry-leading standards and best practices, ensuring
                security, reliability, and excellence in every solution we
                deliver.
              </p>
            </Reveal>
            <div className="space-y-4 mt-4">
              {qualityFeatures.map((feature, index) => (
                <Reveal
                  key={index}
                  delay={300 + index * 100}
                  duration={500}
                  direction="up"
                  triggerOnce
                >
                  <p className="text-md text-[#4B5563] flex items-center gap-2">
                    <FaCheckCircle className="w-4 h-4 mr-2  text-[#9900ff]" />
                    {feature}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="relative 3xl:h-130 h-100 w-full rounded-2xl overflow-hidden">
            <ResponsiveImage
              src={qualityAssuranceImage}
              alt="Team collaboration representing enterprise quality and compliance"
              width={500}
              height={500}
              className="object-cover w-full h-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
