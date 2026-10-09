"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { categories } from "./categories";
import { usePrefetchOnIntent } from "@/hooks/usePrefetchOnIntent";
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
  const items = categories.Solutions;
  const featured =
    items.find((item) => item.url === "/solutions/dating-app-development-company") ??
    items[0];
  const rest = items.filter((item) => item.url !== featured.url);

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

  useIdlePrefetch(
    useMemo(
      () => [currentBanner.bg, featured.backgroundImage],
      [currentBanner.bg, featured.backgroundImage],
    ),
    { requireFastConnection: true },
  );

  return (
    <div className="grid w-full grid-cols-12 min-h-[360px]">
      <div className="col-span-9 flex flex-col px-6 py-5">
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-[17px] font-semibold text-[#161616]">
            App development solutions
          </p>
          <Link
            href="/solutions"
            prefetch={false}
            onMouseEnter={prefetchOnIntent("/solutions")}
            onFocus={prefetchOnIntent("/solutions")}
            onClick={closeNavBottom}
            className="gradient-bg-btn shrink-0 rounded-full!"
            style={{ fontSize: 15, lineHeight: "20px", padding: "8px 18px" }}
          >
            View all solutions
          </Link>
        </div>

        <div className="grid flex-1 grid-cols-12 items-stretch gap-4">
          <Link
            href={featured.url}
            prefetch={false}
            onMouseEnter={prefetchOnIntent(featured.url)}
            onFocus={prefetchOnIntent(featured.url)}
            onClick={closeNavBottom}
            className="group relative col-span-6 block min-h-[240px] overflow-hidden rounded-xl"
          >
            <Image
              src={featured.backgroundImage}
              alt=""
              fill
              sizes="420px"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              draggable={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/35 to-black/20" />
            <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-3 px-4 py-3">
              <p className="text-[15px] font-semibold leading-snug text-white">
                {featured.label}
              </p>
              <span className="inline-flex shrink-0 items-center gap-1.5 text-[13px] font-medium text-white">
                See the build
                <FaArrowRight className="text-[11px] transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>

          <ul className="col-span-6 flex flex-col justify-center">
            {rest.map((item) => (
              <li key={item.url} className="flex items-center gap-3 py-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white shadow-lg">
                  <Image
                    src={item.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="object-contain"
                    draggable={false}
                  />
                </div>
                <p className="text-[15px] font-medium leading-snug text-[#161616]">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
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
        <div className="relative mb-4 flex h-full w-full flex-col justify-between">
          <div className="relative z-10 mt-auto flex flex-col items-start justify-end space-y-4">
            <p className="mb-2 text-[20px] font-semibold text-white">
              {currentBanner.title}
            </p>
            <p className="mb-4 text-[14px] text-white">
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

export default SolutionsNav;
