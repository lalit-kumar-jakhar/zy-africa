"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import SquiggleArrow from "@/components/common/SquiggleArrow";
import { solutionNavItems } from "./navGroups";
import { usePrefetchOnIntent } from "@/hooks/usePrefetchOnIntent";

interface SolutionsNavProps {
  closeNavBottom?: () => void;
}

const CUSTOM_BUILDS = ["Marketplaces", "On-demand", "Social", "Subscriptions"];

const SolutionsNav: React.FC<SolutionsNavProps> = ({ closeNavBottom }) => {
  const prefetchOnIntent = usePrefetchOnIntent();
  const [featured, ...others] = useMemo(() => solutionNavItems(), []);

  return (
    <div className="relative grid w-full grid-cols-12">
      <span
        className="absolute inset-x-0 top-0 z-10 h-0.5 bg-linear-to-r from-[#ff732d] via-[#ff0044] to-[#9900ff]"
        aria-hidden
      />

      <div className="col-span-8 p-6">
        <Link
          href={featured.url}
          prefetch={false}
          onMouseEnter={prefetchOnIntent(featured.url)}
          onFocus={prefetchOnIntent(featured.url)}
          onClick={closeNavBottom}
          className="group relative flex min-h-84 overflow-hidden rounded-2xl bg-[#111111]"
        >
          <Image
            src={featured.backgroundImage}
            alt=""
            fill
            sizes="(min-width: 1280px) 820px, 64vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            draggable={false}
          />
          <span
            className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-black/10"
            aria-hidden
          />

          <div className="relative flex max-w-[460px] flex-col p-8">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[12px] font-medium text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-[#ff732d] to-[#9900ff]" />
              Featured solution
            </p>
            <p className="mt-5 text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
              {featured.label}
            </p>
            {featured.summary && (
              <p className="mt-3 text-[14px] leading-[1.6] text-white/75">
                {featured.summary}
              </p>
            )}
            {featured.highlights && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {featured.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[12px] text-white/90 backdrop-blur-sm"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
            <span className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-[#111111] transition-colors duration-200 group-hover:bg-linear-to-r group-hover:from-[#ff732d] group-hover:via-[#ff0044] group-hover:to-[#9900ff] group-hover:text-white">
              Explore solution
              <SquiggleArrow size="md" />
            </span>
          </div>
        </Link>
      </div>

      <aside className="col-span-4 flex flex-col rounded-r-lg border-l border-[#EDEDEB] bg-[#FAFAF8] px-7 py-7">
        {others.length > 0 ? (
          <>
            <p className="pb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#8A8A8E]">
              More solutions
            </p>
            <ul className="-mx-3">
              {others.map((item) => (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    prefetch={false}
                    onMouseEnter={prefetchOnIntent(item.url)}
                    onFocus={prefetchOnIntent(item.url)}
                    onClick={closeNavBottom}
                    className="group flex items-center gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-white"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ECEAF0] bg-white">
                      <Image
                        src={item.icon}
                        alt=""
                        aria-hidden
                        width={24}
                        height={24}
                        className="h-6 w-6 object-contain"
                        draggable={false}
                      />
                    </span>
                    <span className="flex-1 text-[14.5px] font-semibold text-[#111111]">
                      <span className="text-navlink-gradient-hover">
                        {item.label}
                      </span>
                    </span>
                    <SquiggleArrow size="sm" className="text-[#9900FF] opacity-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#8A8A8E]">
              Custom builds
            </p>
            <h3 className="mt-3 text-[22px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#111111]">
              Building a different kind of product?
            </h3>
            <p className="mt-3 text-[14px] leading-[1.6] text-[#6B6B70]">
              We scope and ship custom platforms end to end, from the first
              workshop to launch.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {CUSTOM_BUILDS.map((label) => (
                <li
                  key={label}
                  className="rounded-full border border-[#E6E4EA] bg-white px-3 py-1 text-[12px] text-[#4A4A50]"
                >
                  {label}
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="mt-auto flex flex-col gap-2.5 pt-8">
          <Link
            href="/contact-us"
            onClick={closeNavBottom}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#ff732d] via-[#ff0044] to-[#9900ff] px-6 py-3 text-[15px] font-semibold text-white duration-200 hover:text-white"
          >
            Discuss your product
            <SquiggleArrow size="md" />
          </Link>
          <Link
            href="/solutions"
            prefetch={false}
            onMouseEnter={prefetchOnIntent("/solutions")}
            onFocus={prefetchOnIntent("/solutions")}
            onClick={closeNavBottom}
            className="group flex w-full items-center justify-center gap-1.5 rounded-full border border-[#E6E4EA] bg-white px-6 py-2.5 text-[13px] font-medium text-[#111111] transition-colors hover:border-[#9900FF]/40 hover:text-[#9900FF]"
          >
            View all solutions
            <SquiggleArrow size="sm" />
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default SolutionsNav;
