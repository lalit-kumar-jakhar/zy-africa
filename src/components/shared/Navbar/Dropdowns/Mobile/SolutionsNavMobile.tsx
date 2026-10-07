"use client";
import React from "react";
import Link from "next/link";
import { categories } from "../categories";
import { isShippedHref } from "@/constants/shipped-routes";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

interface Props {
  closeMobileMenu?: () => void;
}

const SolutionsNavMobile: React.FC<Props> = ({ closeMobileMenu }) => {
  const items = categories.Solutions.filter((item) => isShippedHref(item.url));

  return (
    <div className="flex flex-col gap-3 mb-3">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.url}
          onClick={closeMobileMenu}
          className="group flex items-center justify-between gap-3 px-3 py-2 text-[14px] rounded-lg border border-white/20 text-white hover:bg-orange-400/20 transition"
        >
          <div className="flex items-center gap-3">
            <Image
              src={item.icon}
              alt={item.label}
              width={20}
              height={20}
              className="object-contain"
              draggable={false}
            />
            <span className="group-hover:text-purple-300 transition">
              {item.label}
            </span>
          </div>
          <FaArrowRight className="text-purple-300 text-[12px]" />
        </Link>
      ))}
    </div>
  );
};

export default SolutionsNavMobile;
