import React from "react";
import Image from "next/image";
import Reveal from "@/components/common/Reveal";
import { useModal } from "@/context/ModalContext";
import Link from "next/link";
import { isShippedHref } from "@/constants/shipped-routes";

interface IconItem {
  icon: string | import("next/image").StaticImageData;
  label: string;
}

export interface WideVarietiesCardProps {
  title: string;
  description: string;
  iconItems: IconItem[];
  ctaText: string;
  image?: string | import("next/image").StaticImageData;
  isActive?: boolean;
  ctaLink?: string;
}

const baseDelay = 100;

const WideVarietiesCard: React.FC<WideVarietiesCardProps> = ({
  title,
  description,
  iconItems,
  ctaText,
  image,
  isActive,
  ctaLink,
}) => {
  const { openModal } = useModal();
  const linkedCta = ctaLink && isShippedHref(ctaLink) ? ctaLink : undefined;
  if (!isActive) {
    return (
      <div className="rounded-2xl overflow-hidden w-full h-full">
        {image && (
          <Image
            src={image}
            alt={title}
            width={1200}
            height={800}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
            className="object-cover w-full h-full rounded-2xl"
            draggable={false}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
    );
  }

  return (
    <div className="bg-[#1C1C1E] text-white rounded-2xl w-full h-full text-center shadow-xl flex flex-col justify-center p-6 cursor-default">
      <Reveal delay={baseDelay} duration={500} direction="up">
        <h3 className="text-[24px] sm:text-3xl lg:text-4xl font-bold sm:mb-4">
          {title}
        </h3>
      </Reveal>
      <Reveal delay={baseDelay * 2} duration={500} direction="up">
        <p className="text-gray-300 text-sm sm:text-lg font-normal mb-4 sm:mb-8">
          {description}
        </p>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center mb-4 sm:mb-8">
        {iconItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <Reveal delay={baseDelay * 3} duration={500} direction="up">
              <Image
                src={item.icon}
                alt={item.label}
                width={32}
                height={32}
                sizes="32px"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
            <Reveal delay={baseDelay * 4} duration={500} direction="up">
              <span className="text-sm font-medium">{item.label}</span>
            </Reveal>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        {linkedCta ? (
          <Link href={linkedCta} className="gradient-bg-btn rounded-full">
            {ctaText}
          </Link>
        ) : (
          <button className="gradient-bg-btn rounded-full" onClick={openModal}>
            {ctaText}
          </button>
        )}
      </div>
    </div>
  );
};

export default WideVarietiesCard;
