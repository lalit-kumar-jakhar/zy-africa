"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { categories } from "./categories";
import { isShippedHref } from "@/constants/shipped-routes";
import { usePrefetchOnIntent } from "@/hooks/usePrefetchOnIntent";
import Image from "next/image";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import { NAV_BANNERS } from "./navAssets";
import { useIdlePrefetch } from "@/hooks/useIdlePrefetch";
const [
  bannerBgImage,
  bannerBgImage2,
  bannerBgImage3,
  bannerBgImage4,
  bannerBgImage5,
] = NAV_BANNERS;

interface SolutionsNavProps {
  closeNavBottom?: () => void;
}

const SolutionsNav: React.FC<SolutionsNavProps> = ({ closeNavBottom }) => {
  const prefetchOnIntent = usePrefetchOnIntent();
  const items = categories.Solutions.filter((item) => isShippedHref(item.url));
  const banners = useMemo(
    () => [
      {
        title: "Build Smarter. Launch Faster.",
        description:
          "Partner with Zyneto to turn your ideas into high-performing digital products, powered by AI, built for scale, and designed to win.",
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
          "Faster launches, better performance, and measurable ROI: everything we build is aligned with your business goals.",
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
    const epochMinutes = Math.floor(Date.now() / 60000);
    const index = epochMinutes % banners.length;
    // Date.now() is impure and cannot run during render; correct the banner post-mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentBanner(banners[index]);
  }, [banners]);

  // Warm the banner this dropdown will show; the <Image> below is lazy inside a
  // display:none panel and would not load until it opens.
  useIdlePrefetch(useMemo(() => [currentBanner.bg], [currentBanner.bg]), {
    requireFastConnection: true,
  });

  return (
    <div className="grid grid-cols-12 w-full min-h-[360px]">
      <div className="col-span-9 py-6 px-6 rounded-l-lg">
        {items && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.url}
                prefetch={false}
                onMouseEnter={prefetchOnIntent(item.url)}
                onFocus={prefetchOnIntent(item.url)}
                onClick={closeNavBottom}
                className="group relative rounded-xl overflow-hidden h-full min-h-[140px]"
              >
                <ResponsiveImage
                  src={item.backgroundImage}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover w-full h-full"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-linear-to-r from-[#ff732d]/40 via-[#ff0044]/40 to-[#9900ff]/40 z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <span className="block text-[16px] text-center text-white transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
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
            <Link href="/contact-us" onClick={closeNavBottom}
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

export default SolutionsNav;
