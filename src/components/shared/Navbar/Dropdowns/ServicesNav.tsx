"use client";
import React, { useMemo } from "react";
import Link from "next/link";
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
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-[#ff732d] via-[#ff0044] to-[#9900ff]"
        aria-hidden
      />

      <aside className="col-span-3 flex flex-col rounded-l-lg border-r border-[#EDEDEB] bg-[#FAFAF8] px-8 py-8">
        <p className="text-[13px] font-medium text-[#8A8A8E]">Services</p>
        <h3 className="mt-3 text-[26px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#111111]">
          Software for AI, web and mobile
        </h3>
        <p className="mt-4 text-[14px] leading-[1.6] text-[#6B6B70]">
          The services we lead with are open to explore. The rest of our bench
          is available on request.
        </p>
        <Link
          href="/services"
          prefetch={false}
          onMouseEnter={prefetchOnIntent("/services")}
          onFocus={prefetchOnIntent("/services")}
          onClick={closeNavBottom}
          className="group mt-6 inline-flex w-fit items-center gap-2 border-b border-[#111111]/20 pb-1 text-[14px] font-medium text-[#111111] transition-colors hover:border-[#111111]"
        >
          View all services
          <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>

        <div className="mt-auto pt-10">
          <p className="text-[13px] text-[#8A8A8E]">
            Planning something specific?
          </p>
          <Link
            href="/contact-us"
            onClick={closeNavBottom}
            className="group mt-1 inline-flex items-center gap-2 text-[14px] font-medium text-[#111111] transition-colors hover:text-[#9900FF]"
          >
            Talk to an engineer
            <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </aside>

      <div className="col-span-9 grid grid-cols-3 gap-x-10 gap-y-7 px-10 py-8">
        {groups.map((group) => (
          <section key={group.label}>
            <p className="border-b border-[#EDEDEB] pb-2.5 text-[13px] font-medium text-[#8A8A8E]">
              {group.label}
            </p>
            <ul className="mt-1.5">
              {group.children.map((child) => (
                <li key={child.url}>
                  {child.live ? (
                    <Link
                      href={child.url}
                      prefetch={false}
                      onMouseEnter={prefetchOnIntent(child.url)}
                      onFocus={prefetchOnIntent(child.url)}
                      onClick={closeNavBottom}
                      className="group -mx-2 flex items-center justify-between gap-3 rounded-md px-2 py-1.5 transition-colors duration-200 hover:bg-[#F4F3F0]"
                    >
                      <span className="text-[14.5px] font-medium leading-snug text-[#111111]">
                        {child.label}
                      </span>
                      <span className="flex shrink-0 items-center gap-1 text-[12px] font-medium text-[#A6A6AB] transition-colors duration-200 group-hover:text-[#9900FF]">
                        Explore
                        <FaArrowRight className="text-[9px] transition-transform duration-200 group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  ) : (
                    <span className="block py-1.5 text-[14.5px] leading-snug text-[#A6A6AB]">
                      {child.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ServicesNav;
