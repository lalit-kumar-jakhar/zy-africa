"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { serviceNavGroups } from "./navGroups";
import { usePrefetchOnIntent } from "@/hooks/usePrefetchOnIntent";

interface ServicesNavProps {
  closeNavBottom?: () => void;
}

const ServicesNav: React.FC<ServicesNavProps> = ({ closeNavBottom }) => {
  const prefetchOnIntent = usePrefetchOnIntent();
  const groups = useMemo(() => serviceNavGroups(), []);

  return (
    <div className="relative grid w-full grid-cols-12">
      <span
        className="absolute inset-x-0 top-0 z-10 h-0.5 bg-linear-to-r from-[#ff732d] via-[#ff0044] to-[#9900ff]"
        aria-hidden
      />

      <aside className="relative col-span-3 flex flex-col overflow-hidden rounded-l-lg bg-[#0E0B14] px-8 py-8 text-white">
        <span
          className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#9900FF]/35 blur-3xl"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#FF732D]/25 blur-3xl"
          aria-hidden
        />

        <div className="relative">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[12px] font-medium text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-[#ff732d] to-[#9900ff]" />
            Services
          </p>
          <h3 className="mt-5 text-[26px] font-semibold leading-[1.12] tracking-[-0.035em]">
            Software for{" "}
            <span className="bg-linear-to-r from-[#ff732d] via-[#ff0044] to-[#c266ff] bg-clip-text text-transparent">
              AI, web and mobile
            </span>
          </h3>
          <p className="mt-4 text-[14px] leading-[1.6] text-white/65">
            The services we lead with. Need something else? Our wider bench is
            available on request.
          </p>
          <Link
            href="/services"
            prefetch={false}
            onMouseEnter={prefetchOnIntent("/services")}
            onFocus={prefetchOnIntent("/services")}
            onClick={closeNavBottom}
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-[#111111] transition-colors hover:bg-white/90"
          >
            View all services
            <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <Link
          href="/contact-us"
          onClick={closeNavBottom}
          className="group relative mt-auto block rounded-xl border border-white/10 bg-white/5 p-4 transition-colors duration-200 hover:border-white/25 hover:bg-white/10"
        >
          <p className="text-[13px] text-white/60">
            Planning something specific?
          </p>
          <p className="mt-1 flex items-center gap-2 text-[14px] font-medium">
            Talk to an engineer
            <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover:translate-x-0.5" />
          </p>
        </Link>
      </aside>

      <div className="col-span-9 flex flex-col bg-linear-to-b from-[#FBFBFA] to-white px-8 pt-8 pb-5">
        <div className="columns-2 gap-x-8">
          {groups.map((group) => (
            <section key={group.label} className="mb-6 break-inside-avoid">
              <p className="flex items-center gap-2 px-3 pb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#8A8A8E]">
                {group.label}
                <span className="h-px flex-1 bg-[#EDEDEB]" aria-hidden />
              </p>
              <ul>
                {group.children.map((child) => (
                  <li key={child.url}>
                    <Link
                      href={child.url}
                      prefetch={false}
                      onMouseEnter={prefetchOnIntent(child.url)}
                      onFocus={prefetchOnIntent(child.url)}
                      onClick={closeNavBottom}
                      className="group flex items-center gap-3.5 rounded-xl p-3 transition-colors duration-200 hover:bg-[#F4F1FA]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#ECEAF0] bg-white shadow-[0_1px_2px_rgba(17,17,17,0.04)] transition-all duration-200 group-hover:border-[#9900FF]/30 group-hover:shadow-[0_6px_16px_-6px_rgba(153,0,255,0.35)]">
                        <Image
                          src={child.icon}
                          alt=""
                          aria-hidden
                          width={26}
                          height={26}
                          className="h-6.5 w-6.5 object-contain transition-transform duration-200 group-hover:scale-110"
                          draggable={false}
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[14.5px] font-semibold leading-snug tracking-[-0.01em] text-[#111111]">
                          <span className="text-navlink-gradient-hover">
                            {child.label}
                          </span>
                        </span>
                        {child.summary && (
                          <span className="mt-0.5 block truncate text-[12.5px] text-[#6B6B70]">
                            {child.summary}
                          </span>
                        )}
                      </span>
                      <FaArrowRight
                        className="shrink-0 -translate-x-1 text-[11px] text-[#9900FF] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <Link
          href="/case-studies"
          prefetch={false}
          onMouseEnter={prefetchOnIntent("/case-studies")}
          onFocus={prefetchOnIntent("/case-studies")}
          onClick={closeNavBottom}
          className="group mt-auto flex items-center justify-between gap-4 rounded-xl border border-[#EDEDEB] bg-white px-5 py-3.5 transition-colors duration-200 hover:border-[#9900FF]/30"
        >
          <span className="text-[13.5px] text-[#6B6B70]">
            Not sure which fits?{" "}
            <span className="font-medium text-[#111111]">
              See what we have shipped for teams like yours.
            </span>
          </span>
          <span className="flex shrink-0 items-center gap-1.5 text-[13px] font-medium text-[#9900FF]">
            Browse case studies
            <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServicesNav;
