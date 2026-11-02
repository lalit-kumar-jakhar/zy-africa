"use client";

import Link from "next/link";
import { useRef } from "react";
import { OFFER } from "@/constants/offer";

const MARGIN = 8;

const OfferCard = () => {
  const ref = useRef<HTMLElement | null>(null);
  const drag = useRef({ active: false, moved: false, dx: 0, dy: 0 });

  const onPointerDown = (e: React.PointerEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest("a")) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    drag.current = { active: true, moved: false, dx: e.clientX - r.left, dy: e.clientY - r.top };
    el.setPointerCapture(e.pointerId);
    el.classList.add("offer-card-dragging");
    el.style.left = `${r.left}px`;
    el.style.top = `${r.top}px`;
    el.style.right = "auto";
    el.style.bottom = "auto";
  };

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || !drag.current.active) return;
    drag.current.moved = true;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const x = Math.min(Math.max(e.clientX - drag.current.dx, MARGIN), window.innerWidth - w - MARGIN);
    const y = Math.min(Math.max(e.clientY - drag.current.dy, MARGIN), window.innerHeight - h - MARGIN);
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
  };

  const endDrag = (e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || !drag.current.active) return;
    drag.current.active = false;
    el.releasePointerCapture(e.pointerId);
    el.classList.remove("offer-card-dragging");
  };

  return (
    <aside
      ref={ref}
      aria-label="Current offer"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className="offer-card bottom-5 left-5 z-40 w-[23rem] max-w-[calc(100vw-2.5rem)] cursor-grab touch-none rounded-[20px] p-6 text-white shadow-2xl active:cursor-grabbing"
    >
      <p className="text-[11px] font-bold tracking-[0.18em] text-[#ffc4ad] uppercase">{OFFER.eyebrow}</p>
      <p className="offer-card-title mt-2.5 text-[27px] leading-[1.15] font-extrabold tracking-[-0.02em] text-balance">
        {OFFER.cardHeadline}
      </p>
      <p className="mt-3 text-[14.5px] leading-[1.6] text-[#cfccdd]">{OFFER.body}</p>
      <Link
        href={OFFER.ctaHref}
        draggable={false}
        className="offer-cta gradient-bg-btn mt-5 inline-block rounded-full text-[14.5px] font-bold tracking-[-0.01em] text-white"
      >
        {OFFER.ctaText}
      </Link>
    </aside>
  );
};

export default OfferCard;
