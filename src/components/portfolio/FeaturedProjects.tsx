"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import Reveal from "@/components/common/Reveal";
import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";
import styles from "./carousel/carousel.module.css";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./carousel/CarouselArrowButtons";
import { DotButton } from "./carousel/DotButton";

interface FeaturedProjectCardProps {
  project: Project;
  index: number;
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  project,
  index,
}) => {
  return (
    <Reveal delay={index * 100} duration={400} direction="up" triggerOnce>
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 w-full h-full flex flex-col mb-2">
        <div className="relative w-full h-70 overflow-hidden bg-gray-100 shrink-0">
          <ResponsiveImage
            src={
              typeof project.image === "string"
                ? project.image
                : project.image.src
            }
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-5 md:p-6 flex flex-col h-50 shrink-0">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 line-clamp-2 min-h-12">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </Reveal>
  );
};

const FeaturedProjects: React.FC = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    []
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, undefined);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      if (!emblaApi) return;
      const nextIndex =
        (emblaApi.selectedScrollSnap() + 1) % featuredProjects.length;
      emblaApi.scrollTo(nextIndex);
    }, 8000);

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi, featuredProjects.length]);

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 relative">
        <Reveal duration={400} direction="up" triggerOnce>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16">
            Our Featured Projects
          </h2>
        </Reveal>

        <div className={`${styles.carousel_wrapper} w-full`}>
          <div className={`${styles.carousel_viewport} w-full`} ref={emblaRef}>
            <div className={`${styles.carousel_container}`}>
              {featuredProjects.map((project, index) => (
                <div className={`${styles.carousel_slide}`} key={project.id}>
                  <div
                    className={`${styles.carousel_slide_content}`}
                    onClick={() => {
                      emblaApi?.scrollTo(index);
                      setActiveIndex(index);
                    }}
                  >
                    <FeaturedProjectCard project={project} index={index} />
                  </div>
                </div>
              ))}
            </div>
            <div className="xl:absolute top-1/2 left-[-4%] right-[-4%] hidden! xl:flex! xl:justify-between">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center mt-8 pt-4">
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
    </section>
  );
};

export default FeaturedProjects;
