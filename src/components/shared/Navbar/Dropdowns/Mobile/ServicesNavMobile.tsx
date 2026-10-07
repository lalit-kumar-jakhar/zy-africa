"use client";
import React, { useState } from "react";
import Link from "next/link";
import { categories } from "../categories";
import { isShippedHref } from "@/constants/shipped-routes";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Props {
  closeMobileMenu?: () => void;
}

const ServicesNavMobile: React.FC<Props> = ({ closeMobileMenu }) => {
  const items = categories.Services.map((group) => ({
    ...group,
    children: group.children.filter((child) => isShippedHref(child.url)),
  })).filter((group) => group.children.length > 0);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (label: string) => {
    setOpenCategory((prev) => (prev === label ? null : label));
  };

  return (
    <div className="flex flex-col gap-3 mb-3">
      {items.map((item) => {
        const hasChildren =
          Array.isArray(item.children) && item.children.length > 0;
        return (
          <div
            key={item.label}
            className="rounded-xl bg-black/5 border border-black/10 pl-2 pr-1 py-2"
          >
            <div className="flex justify-between items-center w-full">
              <button
                onClick={() => toggleCategory(item.label)}
                className="flex-1 flex justify-between items-center text-[14px] p-1 transition"
              >
                <span
                  className={`truncate transition ${
                    openCategory === item.label
                      ? "text-[#9900FF]"
                      : "text-[#161616] hover:text-[#9900FF]"
                  }`}
                >
                  {item.label}
                </span>
                {hasChildren &&
                  (openCategory === item.label ? (
                    <IoChevronUp className="text-[#9900FF] text-lg" />
                  ) : (
                    <IoChevronDown className="text-[#616161] text-lg" />
                  ))}
              </button>
            </div>
            {hasChildren && (
              <AnimatePresence initial={false}>
                {openCategory === item.label && (
                  <motion.ul
                    className="mt-3 space-y-2 pl-3"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.url}
                          onClick={closeMobileMenu}
                          className="group flex items-center gap-3 px-3 py-2 text-[14px] rounded-lg border border-black/10 text-[#161616] hover:bg-[#9900FF]/10 transition"
                        >
                          <div className="flex items-center justify-center">
                            <Image
                              src={child.icon}
                              alt={child.label}
                              width={20}
                              height={20}
                              className="object-contain"
                              draggable={false}
                            />
                          </div>
                          <span className="group-hover:text-[#9900FF] transition">
                            {child.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ServicesNavMobile;
