"use client";

import { useState } from "react";
import {
  body,
  cautionLabel,
  ink,
  label,
  labelCool,
  lede,
} from "@/components/industries/typography";

type SubVertical = {
  title: string;
  breaks: string;
  build: string;
};

type SubVerticalsTabsProps = {
  items: SubVertical[];
};

const SubVerticalsTabs = ({ items }: SubVerticalsTabsProps) => {
  const [active, setActive] = useState(0);
  const current = items[active];

  if (!current) return null;

  return (
    <div className="mt-8 lg:mt-12">
      <div
        role="tablist"
        aria-label="Operation types"
        className="scrollbar-none flex gap-2 overflow-x-auto border-b border-[#E8E8ED] pb-3"
      >
        {items.map((v, i) => {
          const isActive = active === i;
          return (
            <button
              key={v.title}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-lg px-4 py-2 text-[13px] font-medium transition-colors md:text-[14px] ${
                isActive
                  ? "bg-[#161616] text-white"
                  : `border border-[#E8E8ED] bg-white ${lede} hover:text-[#161616]`
              }`}
            >
              {v.title}
            </button>
          );
        })}
      </div>

      <article
        role="tabpanel"
        className="mt-5 overflow-hidden rounded-xl border border-[#E8E8ED] bg-white"
      >
        <div className="border-b border-[#F0F0F3] px-6 py-5 md:px-8">
          <p className={`mb-1 ${label}`}>
            {String(active + 1).padStart(2, "0")} · Your operation
          </p>
          <h3 className={`text-[22px] font-semibold md:text-[26px] ${ink}`}>
            {current.title}
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="border-b border-[#F0F0F3] px-6 py-6 lg:border-r lg:border-b-0 md:px-8 md:py-8">
            <p className={`mb-3 ${cautionLabel}`}>What breaks</p>
            <p className={`text-[15px] leading-relaxed md:text-[16px] ${body}`}>
              {current.breaks}
            </p>
          </div>
          <div className="bg-[#FAFAFB] px-6 py-6 md:px-8 md:py-8">
            <p className={`mb-3 ${labelCool}`}>What we build</p>
            <p className={`text-[15px] leading-relaxed md:text-[16px] ${body}`}>
              {current.build}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SubVerticalsTabs;
