"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaBookOpen,
  FaPaperPlane,
  FaUsers,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { usePrefetchOnIntent } from "@/hooks/usePrefetchOnIntent";
import { useIdlePrefetch } from "@/hooks/useIdlePrefetch";
import { NAV_BANNERS } from "./navAssets";

const [
  bannerBgImage,
  bannerBgImage2,
  bannerBgImage3,
  bannerBgImage4,
  bannerBgImage5,
] = NAV_BANNERS;

type CompanyLink = {
  key: string;
  eyebrow: string;
  label: string;
  description: string;
  cta: string;
  url: string;
  Icon: IconType;
  accent: string;
};

const CompanyNav: React.FC<{ closeNavBottom?: () => void }> = ({
  closeNavBottom,
}) => {
  const prefetchOnIntent = usePrefetchOnIntent();

  const links = useMemo<CompanyLink[]>(() => {
    const proof: CompanyLink = {
      key: "case-studies",
      eyebrow: "Proof",
      label: "Case Studies",
      description:
        "What we built, the constraints we hit, and the decisions that mattered.",
      cta: "Read studies",
      url: "/case-studies",
      Icon: FaBookOpen,
      accent: "#FF0044",
    };

    return [
      {
        key: "about",
        eyebrow: "Company",
        label: "About Us",
        description:
          "Engineers and product minds under one roof, aligned on outcomes.",
        cta: "Meet the team",
        url: "/about-us",
        Icon: FaUsers,
        accent: "#FF732D",
      },
      proof,
      {
        key: "contact",
        eyebrow: "Connect",
        label: "Contact Us",
        description:
          "Share the problem and constraints. We will map a realistic path.",
        cta: "Get in touch",
        url: "/contact-us",
        Icon: FaPaperPlane,
        accent: "#9900FF",
      },
    ];
  }, []);

  const banners = useMemo(
    () => [
      {
        title: "Let's scope your build",
        description:
          "Tell us the product, the constraints, and the deadline. We will respond with a clear path forward.",
        ctaText: "Talk to Zyneto",
        bg: bannerBgImage,
        href: "/contact-us",
      },
      {
        title: "Built by people who ship",
        description:
          "Engineers, designers, and product minds under one roof - aligned on outcomes, not slide decks.",
        ctaText: "Meet the team",
        bg: bannerBgImage2,
        href: "/about-us",
      },
      {
        title: "Proof over promises",
        description:
          "From distribution platforms to AI workflows - see how we solve real operational problems.",
        ctaText: "Read case studies",
        bg: bannerBgImage3,
        href: "/case-studies",
      },
      {
        title: "One partner, end to end",
        description:
          "Discovery, build, integrations, and handover - so your product ships cleanly and stays maintainable.",
        ctaText: "Talk to Zyneto",
        bg: bannerBgImage4,
        href: "/contact-us",
      },
      {
        title: "Your vision, our engineering",
        description:
          "We turn complex requirements into software people actually use - modern stack, user-first design.",
        ctaText: "Bring your idea",
        bg: bannerBgImage5,
        href: "/contact-us",
      },
    ],
    [],
  );

  const [currentBanner, setCurrentBanner] = useState(banners[0]);

  useEffect(() => {
    const epochMinutes = Math.floor(Date.now() / 60000);
    const index = epochMinutes % banners.length;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentBanner(banners[index]);
  }, [banners]);

  useIdlePrefetch(
    useMemo(() => [currentBanner.bg], [currentBanner.bg]),
    { requireFastConnection: true },
  );

  return (
    <div className="grid w-full min-h-85 grid-cols-12 overflow-hidden rounded-lg">
      <div className="col-span-9 bg-[#F7F7F8] px-7 py-7">
        <div className="mb-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#8A8A8E]">
            Company
          </p>
          <h3 className="mt-1 text-[20px] font-semibold tracking-[-0.03em] text-[#111111]">
            Who we are, and how we work
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {links.map((item) => (
            <Link
              key={item.key}
              href={item.url}
              prefetch={false}
              onMouseEnter={prefetchOnIntent(item.url)}
              onFocus={prefetchOnIntent(item.url)}
              onClick={closeNavBottom}
              style={{ ["--card-accent" as string]: item.accent }}
              className="group flex min-h-55 flex-col border border-[#E6E6EA] bg-white p-5 transition-colors duration-200 hover:border-(--card-accent) hover:bg-(--card-accent)"
            >
              <div className="flex items-center justify-between">
                <span
                  className="flex h-9 w-9 items-center justify-center bg-(--card-accent) text-white transition-colors duration-200 group-hover:bg-white group-hover:text-(--card-accent)"
                  aria-hidden
                >
                  <item.Icon className="text-[13px]" />
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#8A8A8E] transition-colors duration-200 group-hover:text-white/70">
                  {item.eyebrow}
                </span>
              </div>

              <div className="mt-6 flex-1">
                <h4 className="text-[17px] font-semibold tracking-[-0.02em] text-[#111111] transition-colors duration-200 group-hover:text-white">
                  {item.label}
                </h4>
                <p className="mt-2 text-[13px] leading-relaxed text-[#616161] transition-colors duration-200 group-hover:text-white/80">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-[#EFEFF2] pt-3.5 text-[13px] font-medium text-[#111111] transition-colors duration-200 group-hover:border-white/25 group-hover:text-white">
                <span>{item.cta}</span>
                <FaArrowRight
                  className="text-[10px] text-[#8A8A8E] transition-colors duration-200 group-hover:text-white"
                  aria-hidden
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="relative col-span-3 overflow-hidden rounded-r-lg! p-6">
        <Image
          src={currentBanner.bg}
          alt={currentBanner.title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/35" aria-hidden />
        <div className="relative mb-4 flex h-full w-full flex-col justify-between">
          <div className="relative z-10 mt-auto flex flex-col items-start justify-end space-y-4">
            <p className="mb-2 text-[20px] font-semibold text-white">
              {currentBanner.title}
            </p>
            <p className="mb-4 text-[14px] text-white/90">
              {currentBanner.description}
            </p>
          </div>
          <div>
            <Link
              href={currentBanner.href}
              onClick={closeNavBottom}
              className="gradient-bg-btn rounded-full!"
            >
              {currentBanner.ctaText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyNav;
