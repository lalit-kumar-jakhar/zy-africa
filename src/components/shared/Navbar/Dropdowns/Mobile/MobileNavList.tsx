"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export type MobileNavEntry = { url: string; label: string; live: boolean };

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
        <p className="pb-1.5 text-[12px] font-medium text-[#8A8A8E]">
          {heading}
        </p>
      )}
      <ul className="border-t border-[#EDEDEB]">
        {items.map((item) => (
          <li key={item.url} className="border-b border-[#EDEDEB]">
            {item.live ? (
              <Link
                href={item.url}
                onClick={onNavigate}
                className="flex items-center justify-between gap-3 py-2.5"
              >
                <span className="text-[14px] font-medium text-[#111111]">
                  {item.label}
                </span>
                <span className="flex shrink-0 items-center gap-1 text-[12px] font-medium text-[#9900FF]">
                  Explore
                  <FaArrowRight className="text-[9px]" />
                </span>
              </Link>
            ) : (
              <span className="block py-2.5 text-[14px] text-[#A6A6AB]">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
