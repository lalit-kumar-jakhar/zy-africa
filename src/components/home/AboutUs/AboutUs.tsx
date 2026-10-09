"use client";
import React, { useLayoutEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModal } from "@/context/ModalContext";

const clutch = "/static/assets/home/about/clutch.svg";
const topWebDev = "/static/assets/home/about/topWebDev.svg";
const webDevCompany = "/static/assets/home/about/webDevCompany.svg";
const upwork = "/static/assets/home/about/upwork.svg";
const googleCloud = "/static/assets/home/about/google.webp";
const techBehmoth = "/static/assets/home/about/techBehmoth.svg";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

type Award = {
  src: string | import("next/image").StaticImageData;
  alt: string;
  scale: number;
};

interface AboutUsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  stats?: Stat[];
  awards?: Award[];
  isAboutUsPage?: boolean;
}

const AboutUs: React.FC<AboutUsProps> = ({
  title = "Client satisfaction is our real benchmark",
  // No default: the homepage runs a single headline; /about-us passes its own.
  subtitle,
  description = "We build AI agents, copilots and the products they run inside. Startups and enterprises come to us to turn an idea into something their customers use every day.",
  stats = [
    { value: 95, suffix: "%", label: "Client retention" },
    { value: 500, suffix: "+", label: "Projects delivered" },
    { value: 35, suffix: "+", label: "Countries served" },
  ],
  awards = [
    { src: clutch, alt: "Clutch Top IT Services Company 2025", scale: 51 },
    { src: topWebDev, alt: "Top Web Development Companies", scale: 58 },
    { src: webDevCompany, alt: "Top Web Development Company", scale: 58 },
    { src: upwork, alt: "Upwork Top Rated", scale: 58 },
    { src: googleCloud, alt: "Google Cloud Identity and Security", scale: 65 },
    { src: techBehmoth, alt: "TechBehemoths Trusted Company", scale: 53 },
  ].filter((award) => award.src && award.src !== "undefined"),
  isAboutUsPage = false,
}) => {
  const pathname = usePathname();
  const { openModal } = useModal();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const statRefs = useMemo(
    () => stats.map(() => React.createRef<HTMLSpanElement>()),
    [stats]
  );

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            import("gsap")
              .then((gsap) => {
                statRefs.forEach((ref, index) => {
                  if (ref.current) {
                    gsap.default.to(ref.current, {
                      innerText: stats[index].value,
                      duration: 2,
                      snap: { innerText: 1 },
                      ease: "power2.out",
                      delay: index * 0.2,
                    });
                  }
                });
              })
              .catch(() => {
                statRefs.forEach((ref, index) => {
                  if (ref.current) {
                    ref.current.innerText = stats[index].value.toString();
                  }
                });
              });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [pathname, statRefs, stats]);

  return (
    <section
      ref={containerRef}
      className={`w-full bg-[#FFFFFF] pt-6 ${isAboutUsPage ? "md:py-[96px] py-[32px]" : "md:pb-[96px] pb-[32px]"}`}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-[#F4F0FF] px-5 py-1 mb-3">
            <span className="text-sm font-semibold tracking-wide text-violet-700 uppercase">
              Who We Are
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl md:text-2xl font-semibold text-black mb-3 leading-snug">
              {subtitle}
            </p>
          )}
          <p className="text-lg md:text-xl font-normal text-[#616161]">
            {description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 border-y border-[#F0F0F0]">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className="px-4 py-7 text-center border-b sm:border-b-0 sm:border-r border-[#F0F0F0] last:border-b-0 sm:last:border-r-0"
            >
              <span className="block text-4xl lg:text-5xl font-bold bg-linear-to-r from-violet-600 via-pink-500 to-orange-500 bg-clip-text text-transparent tabular-nums">
                <span ref={statRefs[index]}>{item.value}</span>
                {item.suffix}
              </span>
              <span className="mt-2 block text-sm text-[#616161]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 mb-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-[#8E8E99]">
          Recognized by Industry Leaders
        </p>
        <ul className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {awards.map((award) => (
            <li
              key={award.alt}
              className="group flex aspect-5/4 items-center justify-center rounded-2xl border border-[#F0F0F0] bg-white transition-colors duration-300 hover:border-[#9900ff]/35"
            >
              <div
                className="relative aspect-square"
                style={{ width: `${award.scale}%` }}
              >
                <Image
                  src={award.src}
                  alt={award.alt}
                  fill
                  sizes="140px"
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          {pathname === "/about-us" ? (
            <button
              className="gradient-bg-btn rounded-full"
              onClick={openModal}
            >
              Get Your Free Estimation
            </button>
          ) : (
            <Link className="gradient-bg-btn rounded-full" href="/about-us">
              Know More About Us
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
