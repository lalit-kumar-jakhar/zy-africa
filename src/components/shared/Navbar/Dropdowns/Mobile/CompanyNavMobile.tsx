"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaBookOpen, FaPaperPlane, FaUsers } from "react-icons/fa";
import type { IconType } from "react-icons";

type MobileNavCard = {
  key: string;
  eyebrow: string;
  title: string;
  description: string;
  url: string;
  Icon: IconType;
  featured?: boolean;
};

interface CompanyNavMobileProps {
  closeMobileMenu?: () => void;
}

const CompanyNavMobile: React.FC<CompanyNavMobileProps> = ({
  closeMobileMenu,
}) => {
  const cards = useMemo<MobileNavCard[]>(() => {
    const proof: MobileNavCard = {
      key: "case-studies",
      eyebrow: "Proof",
      title: "Case Studies",
      description: "Deep dives on what we built and why.",
      url: "/case-studies",
      Icon: FaBookOpen,
    };

    return [
      {
        key: "about",
        eyebrow: "Company",
        title: "About Us",
        description: "The team and process behind every build.",
        url: "/about-us",
        Icon: FaUsers,
        featured: true,
      },
      proof,
      {
        key: "contact",
        eyebrow: "Connect",
        title: "Contact Us",
        description: "Tell us what you need — we respond fast.",
        url: "/contact-us",
        Icon: FaPaperPlane,
      },
    ];
  }, []);

  return (
    <div className="flex flex-col gap-3 mb-3">
      {cards.map((card) =>
        card.featured ? (
          <Link
            key={card.key}
            href={card.url}
            onClick={closeMobileMenu}
            className="group relative overflow-hidden rounded-xl border border-white/20 p-4 transition hover:border-orange-400/40"
          >
            <Image
              src="/static/assets/about-us/about-bg.webp"
              alt=""
              aria-hidden
              fill
              sizes="100vw"
              className="absolute inset-0 object-cover opacity-40"
              draggable={false}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/30" aria-hidden />
            <div className="relative z-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60">
                {card.eyebrow}
              </p>
              <span className="mt-1 block text-[17px] font-semibold text-white">
                {card.title}
              </span>
              <span className="mt-1 block text-[12px] text-white/70 line-clamp-2">
                {card.description}
              </span>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium text-white/90">
                Explore
                <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ) : (
          <Link
            key={card.key}
            href={card.url}
            onClick={closeMobileMenu}
            className="group flex items-center justify-between gap-3 rounded-xl border border-white/20 px-3 py-3 text-[14px] text-white transition hover:bg-orange-400/15"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10">
                <card.Icon className="text-[14px] text-white/90" aria-hidden />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-semibold uppercase tracking-widest text-white/50">
                  {card.eyebrow}
                </span>
                <span className="block truncate text-[15px] font-medium">
                  {card.title}
                </span>
                <span className="mt-0.5 block text-[12px] text-white/60 line-clamp-1">
                  {card.description}
                </span>
              </div>
            </div>
            <FaArrowRight className="shrink-0 text-[12px] text-purple-300 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        ),
      )}
    </div>
  );
};

export default CompanyNavMobile;
