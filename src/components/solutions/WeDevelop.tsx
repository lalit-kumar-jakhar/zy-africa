"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/components/home/caseStudies/carousel/carousel.module.css";

type DevelopmentItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type WeDevelopProps = {
  title?: string;
  subtitle?: string;
  developItems?: DevelopmentItem[];
};

const HighlightedTitle: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(Dating App)/i);
  return (
    <>
      {parts.map((part, index) =>
        /Dating App/i.test(part) ? (
          <span key={index} className="text-yellow-orange-gradient">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

const WeDevelop: React.FC<WeDevelopProps> = ({
  title,
  subtitle,
  developItems,
}) => {
  const sliderRef = useRef<Slider | null>(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 767) {
        setSlidesToShow(1);
      } else if (width < 1023) {
        setSlidesToShow(2);
      } else if (width < 1280) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!developItems || developItems.length === 0) {
    return null;
  }

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    autoplay: true,
    autoplaySpeed: 15000,
    pauseOnHover: true,
    beforeChange: () => {},
  };

  return (
    <div className="bg-white text-black">
      <div className="container mx-auto px-4 md:py-[76px] py-[22px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-[48px]">
          <div className="max-w-5xl text-center lg:text-left">
            <h2 className="text-[30px] md:text-[40px] font-bold text-[#000000]t mb-6">
              <HighlightedTitle text={title ?? ""} />
            </h2>
            <p className="text-black text-lg md:text-xl font-normal leading-relaxed">
              {subtitle}
            </p>
          </div>
          <div className="flex gap-4 mt-8 lg:mt-0">
            <button
              className={`${styles.carousel_button} bg-black hover:bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:scale-110`}
              type="button"
              aria-label="Previous slide"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <svg
                className={`${styles.carousel_button_svg} text-black`}
                viewBox="0 0 532 532"
                width="20"
                height="20"
              >
                <path
                  fill="currentColor"
                  d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                />
              </svg>
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className={`${styles.carousel_button} bg-black hover:bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:scale-110`}
              type="button"
              aria-label="Next slide"
            >
              <svg
                className={`${styles.carousel_button_svg} text-black`}
                viewBox="0 0 532 532"
                width="20"
                height="20"
              >
                <path
                  fill="currentColor"
                  d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.338 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 85.292 85.29 185.717 185.717 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {developItems.map((item, index) => (
              <div key={index} className="px-3">
                <div className="overflow-hidden transition-all duration-300 group flex flex-col min-h-[180px] bg-gray-100 backdrop-blur-2xl hover:border-gray-700 rounded-2xl">
                  <div className="p-6 space-y-4 transition-all duration-300 h-full flex flex-col grow">
                    <h3 className="text-xl font-bold text-black transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-black text-md leading-relaxed transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WeDevelop;
