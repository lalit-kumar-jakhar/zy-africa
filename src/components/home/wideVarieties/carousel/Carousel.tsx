"use client";
import React, { useState } from "react";
import WideVarietiesCard from "./WideVarietiesCard";
import { WideVarietiesCardProps } from "./WideVarietiesCard";
import styles from "./carousel.module.css";
import { useWindowSize } from "@/hooks/useWindowSize";

interface CarouselProps {
  slides: WideVarietiesCardProps[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { width } = useWindowSize();

  const next = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const getResponsiveValues = () => {
    const base = width / 100;
    return {
      x: base * 10,
      z: base * 9,
      angle: base * 0.9,
    };
  };

  const getSlideDimensions = () => {
    let widthFactor = 0.45;
    let heightFactor = 0.7;

    if (width < 460) {
      widthFactor = 0.6;
      heightFactor = 3.4;
    } else if (width < 700) {
      widthFactor = 1.5;
      heightFactor = 2;
    } else if (width < 900) {
      widthFactor = 0.7;
      heightFactor = 1;
    } else if (width < 1000) {
      widthFactor = 0.7;
      heightFactor = 0.85;
    } else if (width < 1200) {
      widthFactor = 0.65;
      heightFactor = 0.8;
    } else if (width < 1600) {
      widthFactor = 0.55;
      heightFactor = 0.75;
    } else if (width < 1920) {
      widthFactor = 0.45;
      heightFactor = 0.65;
    } else if (width < 2300) {
      widthFactor = 0.4;
      heightFactor = 0.65;
    } else if (width < 2560) {
      widthFactor = 0.35;
      heightFactor = 0.6;
    } else if (width < 3000) {
      widthFactor = 0.4;
      heightFactor = 0.5;
    } else if (width < 3500) {
      widthFactor = 0.35;
      heightFactor = 0.5;
    } else if (width < 4000) {
      widthFactor = 0.3;
      heightFactor = 0.5;
    } else {
      widthFactor = 0.1;
      heightFactor = 0.45;
    }

    const slideWidth = Math.floor(width * widthFactor);
    const slideHeight = Math.floor(slideWidth * heightFactor);
    return { slideWidth, slideHeight };
  };

  const getStyles = (index: number) => {
    const relativeIndex = (index - activeSlide + slides.length) % slides.length;
    const { x, z, angle } = getResponsiveValues();

    switch (relativeIndex) {
      case 0:
        return {
          opacity: 1,
          transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
          zIndex: 10,
        };
      case slides.length - 1:
        return {
          opacity: 1,
          transform: `translateX(-${x}px) translateZ(-${z}px) rotateY(${angle}deg)`,
          zIndex: 9,
        };
      case 1:
        return {
          opacity: 1,
          transform: `translateX(${x}px) translateZ(-${z}px) rotateY(-${angle}deg)`,
          zIndex: 9,
        };
      case slides.length - 2:
        return {
          opacity: 1,
          transform: `translateX(-${x * 1.8}px) translateZ(-${z + 100}px) rotateY(${angle}deg)`,
          zIndex: 8,
        };
      case 2:
        return {
          opacity: 1,
          transform: `translateX(${x * 1.8}px) translateZ(-${z + 100}px) rotateY(-${angle}deg)`,
          zIndex: 8,
        };
      default:
        return {
          opacity: 0,
          transform: `translateX(${relativeIndex > 2 ? x * 1.2 : -x * 1.2}px) translateZ(-${z + 100}px) rotateY(${relativeIndex > 2 ? -angle : angle}deg)`,
          zIndex: 7,
        };
    }
  };

  const { slideWidth, slideHeight } = getSlideDimensions();

  return (
    <div className="relative pt-4 pb-16">
      <div
        className={styles.carouselWrapper}
        style={{ width: `${slideWidth}px`, height: `${slideHeight}px` }}
      >
        {slides.map((item, i) => (
          <div
            key={i}
            className={styles.slide}
            style={{
              ...getStyles(i),
              width: `${slideWidth}px`,
              height: `${slideHeight}px`,
            }}
            onClick={() => setActiveSlide(i)}
          >
            <WideVarietiesCard {...item} isActive={activeSlide === i} />
          </div>
        ))}
      </div>
      <div className="xl:absolute top-1/2 left-[4%] right-[4%] !hidden xl:!flex xl:justify-between">
        <button
          className={styles.carousel_button}
          onClick={prev}
          aria-label="Previous"
        >
          <svg
            className={`${styles.carousel_button_svg}`}
            viewBox="0 0 532 532"
          >
            <path
              fill="currentColor"
              d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
            />
          </svg>
        </button>
        <button
          className={`${styles.carousel_button} ml-10`}
          onClick={next}
          aria-label="Next"
        >
          <svg
            className={`${styles.carousel_button_svg}`}
            viewBox="0 0 532 532"
          >
            <path
              fill="currentColor"
              d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.338 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 85.292 85.29 185.717 185.717 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
            />
          </svg>
        </button>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.carousel_dot} ${
              index === activeSlide ? styles.carousel_dot_selected : ""
            }`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
