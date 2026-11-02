"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Settings } from "react-slick";
import dynamic from "next/dynamic";
import Image from "next/image";
import Reveal from "@/components/common/Reveal";
import styles from "@/components/home/caseStudies/carousel/carousel.module.css";
import { reviews as reviewsData } from "@/data/testimonials";
import { useIsClient } from "@/hooks/useIsClient";

// Load react-slick on client only to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });
interface SlickMethods {
  slickNext(): void;
  slickPrev(): void;
}
const SliderAny = Slider as unknown as React.ComponentType<
  Settings & { ref?: React.Ref<SlickMethods> }
>;

const baseDelay = 100;
type TestimonialProps = {
  title?: string;
  subtitle?: string;
};

const HighlightedTitle: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(success)/i);
  return (
    <>
      {parts.map((part, index) =>
        /success/i.test(part) ? (
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

const RoleChip: React.FC<{ role: string }> = ({ role }) => {
  const getChipStyle = (role: string) => {
    switch (role.toLowerCase()) {
      case "clutch":
        return {
          image: "/static/assets/home/testimonials/clutch.svg",
        };
      case "google":
        return {
          image: "/static/assets/home/testimonials/google.svg",
        };
      case "techbehemoths":
        return {
          image: "/static/assets/home/testimonials/techbehemoths.svg",
        };
      case "goodfirms":
        return {
          image: "/static/assets/home/testimonials/goodfirms.svg",
        };
      default:
        return {
          image: "/static/assets/home/testimonials/google.svg",
        };
    }
  };

  return (
    <div className="inline-flex items-center gap-2 rounded-full text-[12px] transition-all duration-300">
      <Image src={getChipStyle(role).image} alt={role} width={80} height={24} />
    </div>
  );
};

const StarRating: React.FC<{ rating?: number }> = ({ rating = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      <span className="sr-only">Rating: {rating} out of 5</span>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-400"
            } transition-colors duration-200`}
          fill="currentColor"
          viewBox="0 0 20 20"
          role="img"
          aria-hidden={i >= rating}
          aria-label={i < rating ? "Filled star" : "Empty star"}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonial: React.FC<TestimonialProps> = ({
  title = "Our Success Stories",
  subtitle = "Real feedback from the people we've proudly partnered with.",
}) => {

  const testimonialItems = useMemo(
    () =>
      reviewsData.map((r) => ({
        name: r.author,
        role: r.publisher,
        image: r.image,
        rating: r.ratingValue,
        quote: r.reviewBody,
        position: r.position,
        company: r.company,
        country: r.country,
      })),
    []
  );

  const sliderRef = useRef<SlickMethods | null>(null);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sliderMounted = useIsClient();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 767) {
        setSlidesToShow(1);
      } else if (width < 1023) {
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

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    beforeChange: () => { },
  };

  const renderCard = (item: typeof testimonialItems[number], index: number) => (
    <div key={index} className="p-3 h-full">
      <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-colors duration-200 h-full flex flex-col gap-4 group">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-4">
            <div className="relative h-[48px] w-[48px] rounded-full overflow-hidden ring-2 ring-gray-100 group-hover:ring-gray-200 transition-all duration-300">
              <Image
                src={item.image}
                alt={`${item.name} profile`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                draggable={false}
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[18px] font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 line-clamp-1">
                {item.name}
              </h3>
              {item.position && item.company && (
                <p className="flex items-center gap-1 text-[12px] font-normal text-[#616161]">
                  <span className="line-clamp-1">{item.position}</span> |
                  <span className="line-clamp-1">{item.company}</span>
                </p>
              )}
              {item.country && (
                <p className="text-xs font-normal text-[#8a8a8a] line-clamp-1">
                  {item.country}
                </p>
              )}
            </div>
          </div>
          <RoleChip role={item.role} />
        </div>
        <div className="relative">
          <div className="absolute -top-2 -left-2 text-4xl text-gray-400 font-serif leading-none select-none">
            &quot;
          </div>
          <p className="text-[#424242] text-[15px] lg:text-[16px] min-h-[180px] font-normal leading-relaxed pl-6 italic group-hover:text-gray-600 transition-colors duration-300">
            {item.quote}
          </p>
          <div className="absolute -bottom-4 -right-2 text-4xl text-gray-400 font-serif leading-none select-none rotate-180">
            &quot;
          </div>
        </div>
        <div className="mt-auto pt-2 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
          <div className="flex items-center justify-between text-xs text-[#53586A]">
            <span>Verified Review</span>
            <StarRating rating={item.rating} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#FFF]">
      <div className="container mx-auto px-4 md:py-[76px] py-[22px]">
        <div className="flex flex-col gap-2 lg:gap-5 text-center max-w-3xl mx-auto">
          <Reveal delay={baseDelay} duration={500} direction="up">
            <h2 className="text-[30px] md:text-[40px] font-bold text-[#000000]">
              <HighlightedTitle text={title} />
            </h2>
          </Reveal>
          <Reveal delay={baseDelay * 2} duration={500} direction="up">
            <p className="text-[#616161] text-lg md:text-xl font-normal xl:max-w-5xl mx-auto">
              {subtitle}
            </p>
          </Reveal>
        </div>
        <div className="pt-[24px] md:pt-[48px]">
          {!sliderMounted ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {testimonialItems.slice(0, 3).map((item, index) =>
                renderCard(item, index)
              )}
            </div>
          ) : (
            <SliderAny ref={sliderRef} {...settings}>
              {testimonialItems.map((item, index) => renderCard(item, index))}
            </SliderAny>
          )}
          {sliderMounted && (
            <div className="flex justify-center gap-6 mt-8">
              <button
                className={`${styles.carousel_button} embla__button--prev hover:scale-110 transition-transform duration-200`}
                type="button"
                aria-label="Previous testimonial"
                onClick={() => sliderRef.current?.slickPrev()}
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
                onClick={() => sliderRef.current?.slickNext()}
                className={`${styles.carousel_button} embla__button--next hover:scale-110 transition-transform duration-200`}
                type="button"
                aria-label="Next testimonial"
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
