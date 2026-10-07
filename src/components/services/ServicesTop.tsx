"use client";
import React from "react";
const heroBgImage = "/static/assets/services/hero-bg.webp";
import Image, { StaticImageData } from "next/image";
import { useModal } from "@/context/ModalContext";
import TopFormContact from "@/components/contact/TopFormContact";
import { FaCheckCircle } from "react-icons/fa";

type ServicesTopProps = {
  heroSection: {
    title: string;
    description: string;
    image?: string | StaticImageData;
    features?: string[];
  };
};

const ServicesTop: React.FC<ServicesTopProps> = ({ heroSection }) => {
  const { openModal } = useModal();
  const { title, description, features, image } = heroSection;

  return (
    <section
      id="hero-section"
      className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden bg-cover bg-no-repeat"
    >
      <Image
        src={heroBgImage}
        alt=""
        aria-hidden
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
      />
      <div className="container relative z-10 mx-auto px-4 md:py-[120px] py-[64px] pt-(--nav-height)">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 text-black w-full">
          <div className="xl:w-[40%] w-full">
            <div className="text-center md:text-left md:max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white">
                {title || "Our Services"}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/90">
                {description ||
                  "Explore our wide range of services designed to meet your needs and help you achieve your goals."}
              </p>
              {features && (
                <div className="mt-6">
                  <ul className="list-none list-inside text-white/90 grid grid-cols-2 gap-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500 w-4 h-4" />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <button
                className="gradient-bg-btn rounded-full mt-8 px-6 py-3"
                onClick={openModal}
              >
                Consult Our Experts
              </button>
            </div>
          </div>
          <div className="xl:w-[60%] flex items-center relative justify-end w-full">
            <div className="absolute top-0 left-0 z-0 rounded-3xl w-[320px] h-full hidden xl:block">
              <Image
                src={image || heroBgImage}
                alt={`${title}: service overview`}
                fill
                sizes="320px"
                className="object-cover rounded-l-3xl opacity-30"
                fetchPriority="high"
                priority
              />
            </div>
            <div className="relative z-10 w-full h-full xl:pl-[290px] pl-0">
              <TopFormContact isUsedInServices={true} formName="contact_service" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTop;
