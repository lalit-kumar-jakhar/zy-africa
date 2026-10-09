"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { categories } from "./categories";
import { isShippedHref } from "@/constants/shipped-routes";
import { usePrefetchOnIntent } from "@/hooks/usePrefetchOnIntent";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { NAV_BANNERS } from "./navAssets";
import { useIdlePrefetch } from "@/hooks/useIdlePrefetch";
const [
  bannerBgImage,
  bannerBgImage2,
  bannerBgImage3,
  bannerBgImage4,
  bannerBgImage5,
] = NAV_BANNERS;

interface ServicesNavProps {
  closeNavBottom?: () => void;
}

const ServicesNav: React.FC<ServicesNavProps> = ({ closeNavBottom }) => {
  const prefetchOnIntent = usePrefetchOnIntent();
  const items = categories.Services.map((group) => ({
    ...group,
    children: group.children.filter((child) => isShippedHref(child.url)),
  })).filter((group) => group.children.length > 0);
  const [activeTab, setActiveTab] = useState(items[0]?.label);

  const banners = useMemo(
    () => [
      {
        title: "Build Smarter. Launch Faster.",
        description:
          "Partner with Zyneto to turn your ideas into high-performing digital products-powered by AI, built for scale, and designed to win.",
        ctaText: "Launch My Product",
        bg: bannerBgImage,
      },
      {
        title: "Your Growth, Engineered",
        description:
          "From startups to enterprises, we deliver custom solutions that accelerate growth, boost efficiency, and future-proof your business.",
        ctaText: "Scale My Business",
        bg: bannerBgImage2,
      },
      {
        title: "From Vision to Reality",
        description:
          "We turn complex requirements into software people can use, built on modern technology with user-first design.",
        ctaText: "Bring My Idea to Life",
        bg: bannerBgImage3,
      },
      {
        title: "Results That Actually Matter",
        description:
          "Faster launches, better performance, and measurable ROI-everything we build is aligned with your business goals.",
        ctaText: "Boost My Results",
        bg: bannerBgImage4,
      },
      {
        title: "AI That Drives Real Impact",
        description:
          "Leverage intelligent automation, predictive insights, and personalized experiences to stay ahead in a competitive market.",
        ctaText: "Start My AI Journey",
        bg: bannerBgImage5,
      },
    ],
    [],
  );

  const [currentBanner, setCurrentBanner] = useState(banners[0]);

  useEffect(() => {
    const epochSeconds = Math.floor(Date.now() / 1000);
    const index = epochSeconds % banners.length;
    // Date.now() is impure and cannot run during render; correct the banner post-mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentBanner(banners[index]);
  }, [banners]);

  useIdlePrefetch(useMemo(() => [currentBanner.bg], [currentBanner.bg]), {
    requireFastConnection: true,
  });

  return (
    <div className="grid grid-cols-12 w-full min-h-90">
      <div className="col-span-3 py-6 px-6 border-r border-dashed rounded-l-lg border-[#fed2bb] bg-[linear-gradient(180deg,#fbebe0,#ffffff)]">
        <ul className="space-y-2 text-sm font-medium">
          {items.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                onMouseEnter={() => setActiveTab(item.label)}
                onFocus={() => setActiveTab(item.label)}
                onClick={() => {
                  setActiveTab(item.label);
                }}
                className={`w-full flex justify-between items-center rounded-lg px-3 py-2.5 transition duration-200 text-left
                  ${activeTab === item.label ? "bg-white" : "hover:bg-white"}`}
              >
                <span
                  className={`truncate text-[16px]
                  ${activeTab === item.label
                      ? "text-yellow-orange-gradient"
                      : "text-gray-800 text-gradient-hover"
                    }`}
                >
                  {item.label}
                </span>
                {item.children && item.children.length > 0 && (
                  <FaChevronRight
                    size={14}
                    className={`transition-transform duration-200 text-gray-800 ${activeTab === item.label ? "-scale-x-100" : "scale-x-100 "
                      }`}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-6 gap-2 w-full col-span-6 py-6 px-6 bg-[#fbfbfb]">
        {items.map(
          (item) =>
            item.children &&
            item.children.length > 0 && (
              <ul
                key={item.label}
                className="col-span-6 grid grid-cols-2 gap-2 h-fit"
                hidden={activeTab !== item.label}
              >
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link
                      href={child.url}
                      prefetch={false}
                      onMouseEnter={prefetchOnIntent(child.url)}
                      onFocus={prefetchOnIntent(child.url)}
                      onClick={closeNavBottom}
                      className="group flex items-center gap-4 p-2 transition duration-200"
                    >
                      <div className="flex items-center justify-center shrink-0 w-14 h-14 bg-white rounded-lg transition duration-200 shadow-lg">
                        <Image
                          src={child.icon}
                          alt={child.label}
                          width={36}
                          height={36}
                          className="object-contain"
                          draggable={false}
                        />
                      </div>
                      <span
                        className="relative text-[16px] font-mediumline-clamp-2! text-black transition duration-200 text-navlink-gradient-hover"
                        title={child.label}
                      >
                        {child.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )
        )}
      </div>
      <div
        className="col-span-3 rounded-r-lg! p-6 relative overflow-hidden"
      >
        <Image
          src={currentBanner.bg}
          alt={currentBanner.title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover w-full h-full absolute inset-0"
          draggable={false}
        />
        <div className="w-full relative mb-4 h-full flex flex-col justify-between">
          <div className="flex flex-col items-start justify-end space-y-4 z-10 relative mt-auto">
            <p className="text-[20px] font-semibold text-white mb-2">
              {currentBanner.title}
            </p>
            <p className="text-[14px] text-white mb-4">
              {currentBanner.description}
            </p>
          </div>
          <div>
            <Link
              href="/contact-us"
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

export default ServicesNav;