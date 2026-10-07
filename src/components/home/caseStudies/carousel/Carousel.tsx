"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import AiSolutionsCard from "./CaseStudiesCard";
import styles from "./carousel.module.css";
import type { StaticImageData } from "next/image";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./CarouselArrowButtons";
import { DotButton } from "./DotButton";

const TWEEN_FACTOR_BASE = 0.2;

interface Slide {
  title: string;
  description: string;
  highlight: string;
  iosLink?: string;
  androidLink?: string;
  webLink?: string;
  iosIcon?: StaticImageData | string;
  androidIcon?: StaticImageData | string;
  webIcon?: StaticImageData | string;
  image: StaticImageData | string;
  imageTitle: string;
  isActive?: boolean;
}

interface CarouselOptions {
  [key: string]: unknown;
}

interface CarouselProps {
  slides: Slide[];
  options?: CarouselOptions;
}

interface TweenScaleLoopItem {
  index: number;
  target: () => number;
}

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const Carousel: React.FC<CarouselProps> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, undefined);

  const setTweenNodes = useCallback((api: UseEmblaCarouselType[1]) => {
    if (!api) return;
    tweenNodes.current = api.slideNodes().map((slideNode: HTMLElement) => {
      return slideNode.querySelector(
        `.${styles.carousel_slide_content}`
      ) as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: UseEmblaCarouselType[1]) => {
    if (!emblaApi) return;
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: UseEmblaCarouselType[1], eventName?: string) => {
      if (!emblaApi) return;
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi
        .scrollSnapList()
        .forEach((scrollSnap: number, snapIndex: number) => {
          let diffToTarget = scrollSnap - scrollProgress;
          const slidesInSnap = engine.slideRegistry[snapIndex];

          slidesInSnap.forEach((slideIndex: number) => {
            if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

            if (engine.options && engine.options.loop) {
              engine.slideLooper.loopPoints.forEach(
                (loopItem: TweenScaleLoopItem) => {
                  const target = loopItem.target();

                  if (slideIndex === loopItem.index && target !== 0) {
                    const sign = Math.sign(target);

                    if (sign === -1) {
                      diffToTarget = scrollSnap - (1 + scrollProgress);
                    }
                    if (sign === 1) {
                      diffToTarget = scrollSnap + (1 - scrollProgress);
                    }
                  }
                }
              );
            }

            const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
            const scale = numberWithinRange(tweenValue, 0, 1).toString();
            const tweenNode = tweenNodes.current[slideIndex];
            if (tweenNode) {
              tweenNode.style.transform = `scale(${scale})`;
            }
          });
        });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      if (!emblaApi) return;
      const nextIndex = (emblaApi.selectedScrollSnap() + 1) % slides.length;
      emblaApi.scrollTo(nextIndex);
    }, 8000);

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi, tweenScale, setTweenFactor, setTweenNodes, slides.length]);

  return (
    <div className={` ${styles.carousel_wrapper}`}>
      <div className={` ${styles.carousel_viewport}`} ref={emblaRef}>
        <div className={` ${styles.carousel_container}`}>
          {slides.map((slide, index) => (
            <div className={` ${styles.carousel_slide}`} key={index}>
              <div
                className={` ${styles.carousel_slide_content} container mx-auto md:px-4`}
                onClick={() => {
                  emblaApi?.scrollTo(index);
                  setActiveIndex(index);
                }}
              >
                <AiSolutionsCard
                  title={slide.title}
                  highlight={slide.highlight}
                  description={slide.description}
                  iosLink={slide.iosLink}
                  androidLink={slide.androidLink}
                  webLink={slide.webLink}
                  iosIcon={slide.iosIcon}
                  androidIcon={slide.androidIcon}
                  webIcon={slide.webIcon}
                  image={slide.image}
                  isActive={index === activeIndex}
                  imageTitle={slide.imageTitle}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="xl:absolute top-1/2 -left-[4%] -right-[4%] !hidden xl:!flex xl:justify-between">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div className="absolute bottom-0 xl:bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-2 justify-center items-center py-4">
            {emblaApi &&
              emblaApi.scrollSnapList().map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => {
                    emblaApi.scrollTo(index);
                    setActiveIndex(index);
                  }}
                  className={
                    `${styles.carousel_dot}` +
                    (index === activeIndex
                      ? ` ${styles.carousel_dot_selected}`
                      : "")
                  }
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
