"use client";
import React from "react";
import StarIcon from "@/components/common/StarIcon";
import Reveal from "@/components/common/Reveal";
import Link from "next/link";
import Image from "next/image";

const heroBgImage = "/static/assets/contact/thanks-bg.webp";
const phoneIcon = "/static/assets/contact/phone-icon.svg";
const emailIcon = "/static/assets/contact/email-icon.svg";

const baseDelay = 100;

const HeroSection: React.FC = () => {
  const heroBgUrl =
    typeof heroBgImage === "string"
      ? heroBgImage
      : (heroBgImage as unknown as { src?: string })?.src || "";

  return (
    <section
      className="md:py-[120px] py-[64px] bg-[#000000] relative overflow-hidden min-h-[60vh] flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${heroBgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="hero-section"
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <link rel="preload" as="image" href={heroBgUrl} />
      <div className="container mx-auto relative z-10 px-4 pt-(--nav-height) h-full text-center">
        <div className="flex items-center justify-center mb-1 md:mb-2">
          <StarIcon color="#ffffff" size={48} />
        </div>
        <Reveal delay={baseDelay} duration={500} direction="up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white text-center">
            Thank You for Reaching Out!!
          </h1>
        </Reveal>
        <Reveal delay={baseDelay * 1} duration={500} direction="up">
          <h3 className="text-2xl md:text-3xl font-semibold text-white max-w-5xl mx-auto mb-8 text-center">
            We respond promptly, typically within 30 minutes.
          </h3>
        </Reveal>
        <Reveal delay={baseDelay * 2} duration={500} direction="up">
          <p className="text-lg md:text-xl font-normal text-white max-w-3xl mx-auto mb-8">
            At Zyneto, we focus on delivering solutions that truly make an
            impact, so you can expect a prompt and thoughtful response. One of
            our experts will connect with you shortly to understand your needs
            and guide you ahead.
          </p>
        </Reveal>
        <Reveal delay={baseDelay * 3} duration={500} direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-6 text-xl">
            <Link
              href="tel:+919509625345"
              className="flex items-center gap-3 text-white hover:text-[#FF0044] transition-colors"
            >
              <Image
                src={phoneIcon}
                alt=""
                width={24}
                height={24}
                aria-hidden
              />
              <span> +91-95096-25345</span>
            </Link>
            <Link
              href="mailto:sales@zyneto.com"
              className="flex items-center gap-3 text-white hover:text-[#FF0044] transition-colors"
            >
              <Image
                src={emailIcon}
                alt=""
                width={24}
                height={24}
                aria-hidden
              />
              <span>sales@zyneto.com</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HeroSection;
