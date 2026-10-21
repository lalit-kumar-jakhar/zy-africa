"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { solutionNavItems } from "./navGroups";
import { usePrefetchOnIntent } from "@/hooks/usePrefetchOnIntent";

interface SolutionsNavProps {
  closeNavBottom?: () => void;
}

const SolutionsNav: React.FC<SolutionsNavProps> = ({ closeNavBottom }) => {
  const prefetchOnIntent = usePrefetchOnIntent();
  const [featured, ...others] = useMemo(() => solutionNavItems(), []);

  return (
    <div className="relative grid w-full grid-cols-12">
      <span
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-[#ff732d] via-[#ff0044] to-[#9900ff]"
        aria-hidden
      />

      <div className="col-span-7 px-7 py-7">
        <Link
          href={featured.url}
          prefetch={false}
          onMouseEnter={prefetchOnIntent(featured.url)}
          onFocus={prefetchOnIntent(featured.url)}
          onClick={closeNavBottom}
          className="group grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-6"
        >
          <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-[#111111]">
            <Image
              src={featured.backgroundImage}
              alt=""
              fill
              sizes="(min-width: 1280px) 400px, 32vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              draggable={false}
            />
          </div>
          <div className="flex flex-col py-1">
            <p className="text-[13px] font-medium text-[#8A8A8E]">
              Featured solution
            </p>
            <p className="mt-1.5 text-[20px] font-semibold leading-tight tracking-[-0.025em] text-[#111111]">
              {featured.label}
            </p>
            {featured.summary && (
              <p className="mt-2 text-[14px] leading-[1.6] text-[#6B6B70]">
                {featured.summary}
              </p>
            )}
            <span className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-[#111111] px-4 py-2 text-[13px] font-medium text-[#111111] transition-colors duration-200 group-hover:bg-[#111111] group-hover:text-white">
              Explore
              <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </div>
        </Link>
      </div>

      <aside className="col-span-5 flex flex-col rounded-r-lg border-l border-[#EDEDEB] bg-[#FAFAF8] px-7 py-7">
        <div className="flex items-center justify-between gap-4 pb-3">
          <p className="text-[13px] font-medium text-[#8A8A8E]">
            More solutions
          </p>
          <Link
            href="/solutions"
            prefetch={false}
            onMouseEnter={prefetchOnIntent("/solutions")}
            onFocus={prefetchOnIntent("/solutions")}
            onClick={closeNavBottom}
            className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111111] transition-colors hover:text-[#9900FF]"
          >
            View all
            <FaArrowRight className="text-[9px] transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <ul className="border-t border-[#EDEDEB]">
          {others.map((item) => (
            <li key={item.url} className="border-b border-[#EDEDEB]">
              {item.live ? (
                <Link
                  href={item.url}
                  prefetch={false}
                  onMouseEnter={prefetchOnIntent(item.url)}
                  onFocus={prefetchOnIntent(item.url)}
                  onClick={closeNavBottom}
                  className="group flex items-center justify-between gap-3 py-2.5"
                >
                  <span className="text-[14.5px] font-medium text-[#111111]">
                    {item.label}
                  </span>
                  <span className="flex items-center gap-1 text-[12px] font-medium text-[#A6A6AB] transition-colors duration-200 group-hover:text-[#9900FF]">
                    Explore
                    <FaArrowRight className="text-[9px] transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ) : (
                <div className="flex items-center justify-between gap-3 py-2.5">
                  <span className="text-[14.5px] text-[#6B6B70]">
                    {item.label}
                  </span>
                  <span className="text-[12px] text-[#A6A6AB]">On request</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default SolutionsNav;
