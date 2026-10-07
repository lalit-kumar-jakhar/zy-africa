"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ServicesNavMobile from "./ServicesNavMobile";
import SolutionsNavMobile from "./SolutionsNavMobile";
import IndustriesNavMobile from "./IndustriesNavMobile";
import CompanyNavMobile from "./CompanyNavMobile";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { liveIndustries } from "@/constants/feature-flags";

interface MobileNavProps {
  closeMobileMenu: () => void;
}

const dropdownItems = ["Services", "Solutions", "Industries", "Company"];

const dropdownIndexPaths: Record<string, string> = {
  Services: "/services",
  Solutions: "/solutions",
  Industries: "/industries",
  Company: "/about-us",
};

const MobileNav: React.FC<MobileNavProps> = ({ closeMobileMenu }) => {
  const { openModal } = useModal();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = (type: string) => {
    setActiveDropdown((prev) => (prev === type ? null : type));
  };

  const renderDropdown = (type: string) => {
    switch (type) {
      case "Services":
        return <ServicesNavMobile closeMobileMenu={closeMobileMenu} />;
      case "Solutions":
        return <SolutionsNavMobile closeMobileMenu={closeMobileMenu} />;
      case "Industries":
        return <IndustriesNavMobile closeMobileMenu={closeMobileMenu} />;
      case "Company":
        return <CompanyNavMobile closeMobileMenu={closeMobileMenu} />;
      default:
        return null;
    }
  };
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, []);

  useEffect(() => {
    const navElement = mobileNavRef.current;
    if (!navElement) return;

    let startY = 0;
    let scrollPosition = 0;
    let pending = false;
    let nextScrollTop = 0;
    let rafId = 0;

    const applyScroll = () => {
      navElement.scrollTop = nextScrollTop;
      pending = false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      scrollPosition = navElement.scrollTop;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const y = e.touches[0].clientY;
      const diff = startY - y;
      nextScrollTop = scrollPosition + diff;
      if (!pending) {
        pending = true;
        rafId = requestAnimationFrame(applyScroll);
      }
    };

    navElement.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    navElement.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      navElement.removeEventListener("touchstart", handleTouchStart);
      navElement.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="sticky inset-0 z-999 xl:hidden" id="mobile-navigation">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md rounded-b-xl"
        onClick={closeMobileMenu}
      ></div>
      <div
        ref={mobileNavRef}
        className="relative z-10 overflow-y-auto h-full text-white pb-6 px-2 rounded-b-xl"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="container mx-auto px-4 pt-4">
          {[
            { title: "Home", path: "/" },
            { title: "Services" },
            { title: "Solutions" },
            ...(liveIndustries().length > 0 ? [{ title: "Industries" }] : []),
            { title: "Company" },
          ].map((item) => (
            <div key={item.title}>
              {dropdownItems.includes(item.title) ? (
                <>
                  <button
                    onClick={() => handleToggleDropdown(item.title)}
                    className="w-full text-left py-2 text-white hover:text-purple-300 transition text-[16px]"
                  >
                    {item.title}{" "}
                    <span className="float-right">
                      {activeDropdown === item.title ? (
                        <BiMinus className="inline-block text-[18px]" />
                      ) : (
                        <BiPlus className="inline-block text-[18px]" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {activeDropdown === item.title && (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="my-2 overflow-y-auto max-h-[40dvh] custom-scroll-navbar"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ delay: 0.15, duration: 0.2 }}
                        >
                          <Link
                            href={dropdownIndexPaths[item.title]}
                            onClick={closeMobileMenu}
                            className="mb-2 block rounded-xl border border-white/20 px-3 py-2.5 text-[14px] font-medium text-white transition hover:bg-orange-400/20"
                          >
                            All {item.title.toLowerCase()}
                          </Link>
                          {renderDropdown(item.title)}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.path!}
                  onClick={closeMobileMenu}
                  className="block py-2 text-white hover:text-purple-300 transition"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          <button
            className="gradient-bg-btn mt-4 rounded-full"
            onClick={() => {
              openModal();
              closeMobileMenu();
            }}
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
