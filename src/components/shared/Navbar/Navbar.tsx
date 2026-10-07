"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NoSSR from "@/components/common/NoSSR";
import NavBottom from "./NavBottom";
import Hamburger from "hamburger-react";
import { usePathname } from "next/navigation";
import MobileNav from "./Dropdowns/Mobile/MobileNav";
import { useModal } from "@/context/ModalContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { liveIndustries } from "@/constants/feature-flags";
import { useIdlePrefetch } from "@/hooks/useIdlePrefetch";
import { firstTabIcons } from "./Dropdowns/navAssets";
const zynetoLogo = "/static/assets/zynetoLogo.svg";

type NavItem =
  | { title: string; path: string; hasDropdown?: never; indexPath?: never }
  | { title: string; hasDropdown: true; indexPath: string; path?: never };

const navItems: NavItem[] = [
  { title: "Home", path: "/" },
  { title: "Services", hasDropdown: true, indexPath: "/services" },
  { title: "Solutions", hasDropdown: true, indexPath: "/solutions" },
  ...(liveIndustries().length > 0
    ? [
        {
          title: "Industries",
          hasDropdown: true,
          indexPath: "/industries",
        } as NavItem,
      ]
    : []),
  {
    title: "Company",
    hasDropdown: true,
    indexPath: "/about-us",
  } as NavItem,
];

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { openModal } = useModal();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useIdlePrefetch(useMemo(() => firstTabIcons(), []));

  // Reset open menus on route change during render, not in an effect: that
  // avoids an extra post-navigation render pass.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setActiveDropdown(null);
    setMobileNavOpen(false);
  }

  useEffect(() => {
    const handleOutsideInteraction = (event: MouseEvent | KeyboardEvent) => {
      if (
        (event instanceof MouseEvent &&
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)) ||
        (event instanceof KeyboardEvent && event.key === "Escape")
      ) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("mousedown", handleOutsideInteraction, {
        passive: true,
      });
      document.addEventListener("keydown", handleOutsideInteraction, {
        passive: true,
      });

      return () => {
        document.removeEventListener("mousedown", handleOutsideInteraction);
        document.removeEventListener("keydown", handleOutsideInteraction);
      };
    }

    return () => {};
  }, [activeDropdown]);

  const handleMobileLinkClick = useCallback(() => {
    setMobileNavOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white h-auto lg:h-(--nav-height) backdrop-blur-xl">
      <div className="min-[1280px]:container xl:mx-auto xl:px-4 my-0 xl:my-1 w-full">
        {" "}
        <div className="relative w-full flex items-center justify-between bg-[#000000]/50 xl:rounded-lg px-4 py-3 lg:px-0 lg:py-0">
          <div className="px-0 lg:px-4 py-0 lg:py-2">
            <Link href="/" className="w-[120px] md:w-[160px] block">
              <Image
                src={zynetoLogo}
                alt="Zyneto"
                width={180}
                height={40}
                className="object-contain w-full h-auto"
                draggable={false}
                priority
              />
            </Link>
          </div>
          <div
            className="hidden xl:flex items-center space-x-6"
            ref={dropdownRef}
          >
            {navItems.map((item) => (
              <div key={item.title}>
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    onFocus={() => setActiveDropdown(item.title)}
                    onBlur={(e) => {
                      const nextFocused = e.relatedTarget as Node | null;
                      if (nextFocused && e.currentTarget.contains(nextFocused))
                        return;
                      setActiveDropdown(null);
                    }}
                  >
                    <Link
                      href={item.indexPath}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-1 text-[16px] font-medium hover:text-purple-300 transition duration-150 cursor-pointer py-5"
                      aria-haspopup="menu"
                      aria-expanded={activeDropdown === item.title}
                    >
                      {item.title}
                      <span
                        className="transition-transform duration-100"
                      >
                        {activeDropdown === item.title ? <FaChevronUp size={10}/> : <FaChevronDown size={10} className="mt-1"/>}
                      </span>
                    </Link>
                    <div className={activeDropdown === item.title ? "" : "hidden"}>
                      <NavBottom
                        type={item.title}
                        closeNavBottom={() => setActiveDropdown(null)}
                      />
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    onClick={() => setActiveDropdown(null)}
                    // inline-block + py-1 lifts the tap target from 18px to 26px,
                    // clearing the 24px WCAG 2.2 AA minimum.
                    className={`inline-block py-1 hover:text-purple-300 transition duration-150`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="hidden xl:block lg:px-4 lg:py-2">
            <button
              onClick={openModal}
              className="gradient-bg-btn rounded-full!"
            >
              Get Quote
            </button>
          </div>
          <div className="xl:hidden flex items-center gap-2 lg:px-4 lg:py-2">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="sm:p-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black rounded-md"
              aria-label="Toggle mobile navigation menu"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-navigation"
              type="button"
            >
              <NoSSR>
                <Hamburger
                  toggle={setMobileNavOpen}
                  toggled={mobileNavOpen}
                  size={16}
                  rounded
                  direction="right"
                  color="#ffffff"
                />
              </NoSSR>
            </button>
          </div>
        </div>
      </div>
      <NoSSR>
        {mobileNavOpen && <MobileNav closeMobileMenu={handleMobileLinkClick} />}
      </NoSSR>
    </nav>
  );
};

export default Navbar;
