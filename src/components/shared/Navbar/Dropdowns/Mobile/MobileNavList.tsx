"use client";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export type MobileNavEntry = {
  url: string;
  label: string;
  live: boolean;
  icon?: string;
  summary?: string;
};

export function MobileNavList({
  heading,
  items,
  onNavigate,
}: {
  heading?: string;
  items: MobileNavEntry[];
  onNavigate?: () => void;
}) {
  return (
    <div className="py-2">
      {heading && (
        <p className="pb-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A8A8E]">
          {heading}
        </p>
      )}
      <ul className="flex flex-col gap-1">
        {items.map((item) => (
          <li key={item.url}>
            <Link
              href={item.url}
              onClick={onNavigate}
              className="flex items-center gap-3 rounded-xl p-2 transition-colors active:bg-[#F4F1FA]"
            >
              {item.icon && (
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
              )}
              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-medium text-[#111111]">
                  {item.label}
                </span>
                {item.summary && (
                  <span className="mt-0.5 block truncate text-[12px] text-[#6B6B70]">
                    {item.summary}
                  </span>
                )}
              </span>
              <FaArrowRight
                className="shrink-0 text-[10px] text-[#9900FF]"
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
