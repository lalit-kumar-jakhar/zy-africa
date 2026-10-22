"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import SquiggleArrow from "@/components/common/SquiggleArrow";
import { usePrefetchOnIntent } from "@/hooks/usePrefetchOnIntent";
import Image from "next/image";
import { liveIndustries } from "@/constants/feature-flags";
import { industryGridClass } from "@/utils/industry-grid";
import { NAV_BANNERS } from "./navAssets";
import { useIdlePrefetch } from "@/hooks/useIdlePrefetch";

const [
  bannerBgImage,
  bannerBgImage2,
  bannerBgImage3,
  bannerBgImage4,
  bannerBgImage5,
] = NAV_BANNERS;

type IndustryItem = ReturnType<typeof liveIndustries>[number];

function IndustryCard({
  item,
  closeNavBottom,
  compact,
}: {
  item: IndustryItem;
  closeNavBottom?: () => void;
  compact?: boolean;
}) {
  const prefetchOnIntent = usePrefetchOnIntent();

  if (compact) {
    return (
      <Link
        href={item.url}
        prefetch={false}
        onMouseEnter={prefetchOnIntent(item.url)}
        onFocus={prefetchOnIntent(item.url)}
        onClick={closeNavBottom}
        className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors duration-300 hover:bg-[#f5f5f5]"
      >
        <Image
          src={item.icon}
          alt=""
          aria-hidden
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
          draggable={false}
        />
        <h3 className="text-[14px] font-semibold leading-snug tracking-[-0.01em] text-[#161616] text-navlink-gradient-hover transition-colors duration-300">
          {item.shortLabel || item.label}
        </h3>
      </Link>
    );
  }

  return (
    <Link
      href={item.url}
      prefetch={false}
      onMouseEnter={prefetchOnIntent(item.url)}
      onFocus={prefetchOnIntent(item.url)}
      onClick={closeNavBottom}
      className="group flex h-full flex-col rounded-2xl p-5 transition-colors duration-300 hover:bg-[#f5f5f5]"
    >
      <div className="mb-5 flex h-20 w-20 items-center justify-center">
        <Image
          src={item.icon}
          alt=""
          aria-hidden
          width={80}
          height={80}
          className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-105"
          draggable={false}
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.01em] text-[#161616] text-navlink-gradient-hover transition-colors duration-300">
          {item.shortLabel || item.label}
        </h3>
        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#616161]">
          {item.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#616161] transition-colors duration-300 group-hover:text-[#9900ff]">
          Explore
          <SquiggleArrow className="h-2.5 w-6" />
        </span>
      </div>
    </Link>
  );
}

interface IndustriesNavProps {
  closeNavBottom?: () => void;
}

const IndustriesNav: React.FC<IndustriesNavProps> = ({ closeNavBottom }) => {
  const items = useMemo(() => liveIndustries(), []);
  const compact = items.length > 9;

  const banners = useMemo(
    () => [
      {
        title: "Software for how your sector runs",
        description:
          "From warehouse floors to regulated ledgers, we build the systems operators actually use day to day.",
        ctaText: "Discuss my industry",
        bg: bannerBgImage,
        href: "/contact-us",
      },
      {
        title: "Built for operators, not demos",
        description:
          "Offline field apps, ERP wiring, e-invoicing, and the workflows that make or break a rollout.",
        ctaText: "Book a scoping call",
        bg: bannerBgImage2,
        href: "/contact-us",
      },
      {
        title: "One partner across the stack",
        description:
          "Discovery, build, integrations, and handover under one roof so your sector software ships cleanly.",
        ctaText: "Talk to Zyneto",
        bg: bannerBgImage3,
        href: "/contact-us",
      },
      {
        title: "Proof before promises",
        description:
          "Live delivery in the Gulf, and seventeen sectors written up with the systems, standards and hours.",
        ctaText: "See how we work",
        bg: bannerBgImage4,
        href: "/industries",
      },
      {
        title: "Your next system, scoped right",
        description:
          "Tell us the vertical, the constraints, and the deadline. We will map the build path with you.",
        ctaText: "Start the conversation",
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
    useMemo(
      () => [currentBanner.bg, ...items.map((item) => item.icon)],
      [currentBanner.bg, items],
    ),
    { requireFastConnection: true },
  );

  return (
    <div className="grid grid-cols-12 w-full min-h-90">
      <div className="col-span-9 rounded-l-lg bg-[linear-gradient(180deg,#fbfbfb,#ffffff)] px-6 py-6">
        <div className="mb-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#6B7280]">
            Industries
          </p>
          <p className="mt-1 text-[15px] text-[#616161]">
            Sector software shaped by how operations really run.
          </p>
        </div>

        <div
          className={`grid max-h-[min(72vh,640px)] grid-cols-1 gap-2 overflow-y-auto overscroll-contain md:grid-cols-2 ${
            compact ? "xl:grid-cols-3" : industryGridClass(items.length, "xl")
          }`}
        >
          {items.map((item) => (
            <IndustryCard
              key={item.label}
              item={item}
              closeNavBottom={closeNavBottom}
              compact={compact}
            />
          ))}
        </div>
      </div>

      <div className="col-span-3 relative overflow-hidden rounded-r-lg! p-6">
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

export default IndustriesNav;
