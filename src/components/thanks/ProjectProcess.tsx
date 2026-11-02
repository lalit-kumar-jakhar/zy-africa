"use client";
import React from "react";
import StarIcon from "@/components/common/StarIcon";
import Reveal from "@/components/common/Reveal";
const gridDotsBgImage = "/static/assets/home/faq/grid-dots.svg";

const baseDelay = 100;

const processSteps = [
  {
    id: 1,
    title: "Request Confirmation",
  },
  {
    id: 2,
    title: "Team Review",
  },
  {
    id: 3,
    title: "Discovery Call",
  },
  {
    id: 4,
    title: "Requirement Analysis & Strategy",
  },
  {
    id: 5,
    title: "Proposal Preparation",
  },
  {
    id: 6,
    title: "Review & Presentation",
  },
  {
    id: 7,
    title: "Feedback & Final Adjustments",
  },
  {
    id: 8,
    title: "Project Kickoff",
  },
];

const ProjectProcess: React.FC = () => {
  return (
    <div
      className="bg-[#F9F9F9]"
      style={{
        backgroundImage: `url(${gridDotsBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 md:py-19 py-5.5">
        <div className="text-center mx-auto mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-1 md:mb-2">
            <StarIcon color="#000000" size={40} />
          </div>
          <Reveal delay={baseDelay} duration={500} direction="up">
            <h2 className="text-[30px] md:text-[40px] font-bold text-[#000000]">
              How We Bring Your Project to Life
            </h2>
          </Reveal>
          <Reveal delay={baseDelay * 2} duration={500} direction="up">
            <p className="text-[#616161] mt-2 text-lg md:text-xl font-normal xl:max-w-5xl mx-auto">
              Every step is carefully crafted to ensure your project&apos;s success,
              we make sure to transform your vision into powerful,
              dream-come-true solution.
            </p>
          </Reveal>
        </div>
        <div className="container mx-auto px-4 pb-8">
          <div className="relative">
            <svg
              width="full"
              height="full"
              viewBox="0 0 1169 174"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden xl:block absolute top-2 left-0 w-full pointer-events-none overflow-visible"
            >
              <path
                d="M1106.5 41C1106.5 41 1047 131.501 974.529 134.467C902.058 137.433 863.5 37.5 803.5 37.5C743.5 37.5 710 131.502 662 131.501C614 131.501 560 37.4999 503 37.5C457.5 37.4999 398.488 130.15 353 131.502C307.512 132.854 267.5 40 202 40C140 51.5 58 131.501 58 131.501"
                stroke="#6b6b6b"
                stroke-width="0.5"
                stroke-dasharray="5 5"
              />
            </svg>
            <div className="hidden xl:flex items-center justify-between relative py-12 gap-2 min-w-full">
              {processSteps.map((step, index) => {
                const isTop = index % 2 === 0;

                return (
                  <div
                    key={step.id}
                    className="relative flex flex-col items-center group flex-1"
                    style={{
                      minWidth: "140px",
                    }}
                  >
                    <div className="flex flex-col items-center w-full">
                      {isTop && (
                        <div className="w-full mb-4 pb-12 text-center">
                          <div className="inline-block bg-white rounded-lg px-3 py-2 shadow-sm group-hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-[#ff732d]/30 group-hover:bg-linear-to-br group-hover:from-white group-hover:to-gray-50/50">
                            <h3 className="text-md font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#ff732d] via-[#ff0044] to-[#9900ff] transition-all duration-300 text-center">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                      )}
                      <div
                        className="relative z-10 shrink-0"
                        style={{ width: "48px", height: "48px" }}
                      >
                        <div className="relative w-full h-full">
                          <div className="relative w-full h-full rounded-full bg-black flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 border-2 border-gray-100">
                            <span className="text-white font-bold text-base relative z-10">
                              {step.id}
                            </span>
                          </div>
                        </div>
                      </div>
                      {!isTop && (
                        <div className="w-full mt-4 pt-12 text-center">
                          <div className="inline-block bg-white rounded-lg px-3 py-2 shadow-sm group-hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:border-[#ff732d]/30 group-hover:bg-linear-to-br group-hover:from-white group-hover:to-gray-50/50">
                            <h3 className="text-md font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#ff732d] via-[#ff0044] to-[#9900ff] transition-all duration-300 text-center">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="xl:hidden space-y-4">
              {processSteps.map((step) => {
                return (
                  <div
                    key={step.id}
                    className="relative flex items-center group"
                    style={{
                      minHeight: "32px",
                    }}
                  >
                    <div className="w-full">
                      <div className="flex items-start gap-4">
                        <div className="relative shrink-0">
                          <div className="relative w-10 h-10">
                            <div className="relative w-full h-full rounded-full bg-black flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 border-2 border-gray-100">
                              <span className="text-white font-bold text-sm relative z-10">
                                {step.id}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <div className="bg-white rounded-lg px-4 py-2 shadow-sm transition-all duration-300 border border-gray-100 group-hover:border-[#ff732d]/30 group-hover:bg-linear-to-br group-hover:from-white group-hover:to-gray-50/50">
                            <h3 className="text-sm font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#ff732d] via-[#ff0044] to-[#9900ff] transition-all duration-300">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectProcess;
