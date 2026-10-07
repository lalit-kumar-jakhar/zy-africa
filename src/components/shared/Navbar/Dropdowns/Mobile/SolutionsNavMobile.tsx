"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { categories } from "../categories";

interface Props {
  closeMobileMenu?: () => void;
}

const SolutionsNavMobile: React.FC<Props> = ({ closeMobileMenu }) => {
  const items = categories.Solutions;
  const featured =
    items.find((item) => item.url === "/solutions/dating-app-development-company") ??
    items[0];
  const rest = items.filter((item) => item.url !== featured.url);

  return (
    <div className="mb-3 flex flex-col gap-2">
      <Link
        href={featured.url}
        onClick={closeMobileMenu}
        className="group flex items-center gap-3 rounded-xl border border-[#161616] bg-[#161616] px-3 py-2.5"
      >
        <Image
          src={featured.icon}
          alt=""
          width={22}
          height={22}
          className="object-contain brightness-0 invert"
          draggable={false}
        />
        <span className="flex-1 text-[14px] font-medium text-white">
          {featured.label}
        </span>
        <FaArrowRight className="text-[12px] text-white" />
      </Link>

      {rest.map((item) => (
        <div
          key={item.url}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-[14px] text-[#161616]"
        >
          <Image
            src={item.icon}
            alt=""
            width={20}
            height={20}
            className="object-contain"
            draggable={false}
          />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SolutionsNavMobile;
