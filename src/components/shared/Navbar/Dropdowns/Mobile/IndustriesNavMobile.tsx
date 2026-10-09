"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { liveIndustries } from "@/constants/feature-flags";

interface IndustriesNavMobileProps {
  closeMobileMenu?: () => void;
}

const IndustriesNavMobile: React.FC<IndustriesNavMobileProps> = ({
  closeMobileMenu,
}) => {
  const items = liveIndustries();

  if (!items.length) return null;

  return (
    <div className="flex flex-col gap-2 mb-3">
      {items.map((item) => {
        const inner = (
          <>
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 border border-white/15">
                <Image
                  src={item.icon}
                  alt=""
                  aria-hidden
                  width={22}
                  height={22}
                  className="object-contain brightness-0 invert opacity-90"
                  draggable={false}
                />
              </div>
              <div className="min-w-0">
                <span className="block text-[15px] font-medium text-white truncate">
                  {item.shortLabel || item.label}
                </span>
                <span className="block mt-0.5 text-[12px] text-white/60 line-clamp-1">
                  {item.description}
                </span>
              </div>
            </div>
            <FaArrowRight className="shrink-0 text-purple-300 text-[12px]" />
          </>
        );

        return (
          <Link
            key={item.label}
            href={item.url}
            onClick={closeMobileMenu}
            className="group flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl border border-white/20 text-white hover:bg-orange-400/20 transition"
          >
            {inner}
          </Link>
        );
      })}
    </div>
  );
};

export default IndustriesNavMobile;
