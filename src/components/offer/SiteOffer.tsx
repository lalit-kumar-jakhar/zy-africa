"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { HOME_STRIP, OFFER, type OfferTickerBeat, offerAllowedOn, offerIsStatic } from "@/constants/offer";

type Props = { active: boolean };

const TickerText = ({ beat }: { beat: OfferTickerBeat }) => {
  if (!beat.emphasis) return beat.text;
  const at = beat.text.indexOf(beat.emphasis);
  if (at < 0) return beat.text;
  return (
    <>
      {beat.text.slice(0, at)}
      <strong className="offer-ticker-strong">{beat.emphasis}</strong>
      {beat.text.slice(at + beat.emphasis.length)}
    </>
  );
};

const SiteOffer = ({ active }: Props) => {
  const pathname = usePathname() || "/";
  const trackRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const nav = document.querySelector("nav");
    if (!nav) return;
    const sync = () => {
      document.documentElement.style.setProperty(
        "--offer-offset",
        `${Math.round(nav.getBoundingClientRect().height)}px`,
      );
    };
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(nav);
    window.addEventListener("resize", sync);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", sync);
      document.documentElement.style.removeProperty("--offer-offset");
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const set = track?.querySelector<HTMLElement>(".offer-ticker-set");
    if (!track || !set) return;

    const apply = () => {
      const width = set.offsetWidth;
      if (width < 1) return;
      track.style.setProperty("--offer-distance", `${width}px`);
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(set);
    document.fonts?.ready.then(apply).catch(() => {});
    return () => observer.disconnect();
  }, [pathname, active]);

  if (!active || !offerAllowedOn(pathname)) return null;

  const isHome = pathname === "/";
  const isStatic = !isHome && offerIsStatic(pathname);
  const source = isHome ? HOME_STRIP : OFFER;
  const beats = source.ticker.filter((beat) => (isStatic ? !beat.cta : true));
  const label = `${source.badge}. ${beats.map((beat) => beat.text).join(". ")}`;
  const ticker = (
    <>
      <span className="offer-ticker-badge" aria-hidden="true">
        <span className="offer-ticker-live" />
        {source.badge}
      </span>
      <span className="offer-ticker-viewport">
        <span ref={trackRef} className="offer-ticker-track">
          {[0, 1].map((copy) => (
            <span key={copy} className="offer-ticker-set" aria-hidden="true">
              {Array.from({ length: 3 }, () => beats)
                .flat()
                .map((beat, index) => (
                  <span key={`${copy}-${index}`} className="offer-ticker-item">
                    <span className="offer-ticker-sep" />
                    {beat.cta ? (
                      <span className="offer-ticker-cta">
                        {beat.text}
                        <span className="offer-ticker-arrow" aria-hidden="true">
                          →
                        </span>
                      </span>
                    ) : (
                      <TickerText beat={beat} />
                    )}
                  </span>
                ))}
            </span>
          ))}
        </span>
      </span>
    </>
  );

  if (isStatic) {
    return (
      <section aria-label={label} className="offer-ticker z-30">
        {ticker}
      </section>
    );
  }

  return (
    <Link href={source.ctaHref} aria-label={label} className="offer-ticker z-30">
      {ticker}
    </Link>
  );
};

export default SiteOffer;
