"use client";

import { useEffect, useState } from "react";
import { lede, muted } from "@/components/industries/typography";

type Anchor = { id: string; label: string };

const AnchorNav = ({ anchors }: { anchors: Anchor[] }) => {
  const [active, setActive] = useState<string>(anchors[0]?.id ?? "");

  useEffect(() => {
    const targets = anchors
      .map((a) => document.getElementById(a.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [anchors]);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-(--nav-height,72px) z-30 border-y border-[#E8E8ED] bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4">
          <span
            className={`hidden shrink-0 text-[11px] font-semibold uppercase tracking-[0.14em] lg:inline ${muted}`}
          >
            Jump to
          </span>
          <ul className="scrollbar-none flex gap-1 overflow-x-auto py-3 text-[14px] whitespace-nowrap">
            {anchors.map((a) => {
              const isActive = active === a.id;
              return (
                <li key={a.id}>
                  <a
                    href={`#${a.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`inline-block rounded-full px-3.5 py-1.5 transition-colors ${
                      isActive
                        ? "bg-[#161616] font-semibold text-white"
                        : `font-medium ${lede} hover:bg-[#F4F4F6] hover:text-[#161616]`
                    }`}
                  >
                    {a.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AnchorNav;
