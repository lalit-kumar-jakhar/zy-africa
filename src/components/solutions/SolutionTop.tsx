"use client";
import React from "react";
import { StaticImageData } from "next/image";
import { useModal } from "@/context/ModalContext";
import TopFormContact from "@/components/contact/TopFormContact";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import { FaCheckCircle } from "react-icons/fa";

const defaultHeroBgImage = "/static/assets/solutions/hero/dating-app-development-company.webp";

type SolutionTopProps = {
  heroSection: {
    title: string;
    description: string;
    backgroundImage?: string | StaticImageData;
    ctaText?: string;
    features?: string[];
  };
};

const SolutionTop: React.FC<SolutionTopProps> = ({ heroSection }) => {
  const { openModal } = useModal();
  const { title, description, ctaText, backgroundImage, features } = heroSection;

  const heroSrc =
    typeof backgroundImage === "string"
      ? backgroundImage
      : backgroundImage?.src || defaultHeroBgImage;

  return (
    <section
      id="hero-section"
      className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden bg-cover bg-no-repeat"
    >
      <ResponsiveImage
        src={heroSrc}
        alt={`${title}: solution overview`}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
      />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container relative z-10 mx-auto px-4 py-20 pt-(--nav-height)">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-black">
          <div className="md:w-1/2">
            <div className="text-center md:text-left md:max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                {title || "Our Solutions"}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/90">
                {description ||
                  "Explore our wide range of solutions designed to meet your needs and help you achieve your goals."}
              </p>
              {features && features.length > 0 && (
                <div className="mt-6">
                  <ul className="list-none list-inside text-white/90 grid grid-cols-2 gap-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500 w-4 h-4 shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {ctaText ? (
                <button
                  className="gradient-bg-btn rounded-full mt-8 px-6 py-3"
                  onClick={openModal}
                >
                  {ctaText}
                </button>
              ) : null}
            </div>
          </div>
          <TopFormContact isUsedInSolutions={true} formName="contact_solution" />
        </div>
      </div>
    </section>
  );
};

export default SolutionTop;
