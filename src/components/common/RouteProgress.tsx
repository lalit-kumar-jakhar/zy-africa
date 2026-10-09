"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const TRICKLE_MS = 200;
const CEILING = 90;
const SAFETY_MS = 15000;
const SETTLE_MS = 260;

export default function RouteProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState<number | null>(null);

  const pending = useRef(false);
  const startedAt = useRef("");
  const trickle = useRef<ReturnType<typeof setInterval> | null>(null);
  const safety = useRef<ReturnType<typeof setTimeout> | null>(null);
  const settle = useRef<ReturnType<typeof setTimeout> | null>(null);

  const finish = useCallback(() => {
    if (!pending.current) return;
    pending.current = false;

    if (trickle.current) {
      clearInterval(trickle.current);
      trickle.current = null;
    }
    if (safety.current) {
      clearTimeout(safety.current);
      safety.current = null;
    }

    setProgress(100);
    settle.current = setTimeout(() => setProgress(null), SETTLE_MS);
  }, []);

  const start = useCallback(() => {
    if (pending.current) return;
    pending.current = true;
    startedAt.current = window.location.pathname + window.location.search;

    if (settle.current) {
      clearTimeout(settle.current);
      settle.current = null;
    }

    setProgress(8);
    trickle.current = setInterval(() => {
      setProgress((value) =>
        value === null ? 8 : Math.min(CEILING, value + (CEILING - value) * 0.12)
      );
    }, TRICKLE_MS);
    safety.current = setTimeout(finish, SAFETY_MS);
  }, [finish]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element | null)?.closest?.("a");
      if (!anchor) return;
      if (anchor.hasAttribute("download") || anchor.hasAttribute("data-no-progress")) return;

      const target = anchor.getAttribute("target");
      if (target && target !== "_self") return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      ) {
        return;
      }

      start();
    };

    document.addEventListener("click", onClick, { capture: true });
    window.addEventListener("pagehide", finish);

    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      window.removeEventListener("pagehide", finish);
      if (trickle.current) clearInterval(trickle.current);
      if (safety.current) clearTimeout(safety.current);
      if (settle.current) clearTimeout(settle.current);
    };
  }, [finish, start]);

  useEffect(() => {
    finish();
  }, [pathname, finish]);

  useEffect(() => {
    if (progress === null) return;

    const poll = setInterval(() => {
      if (!pending.current) return;
      if (window.location.pathname + window.location.search !== startedAt.current) {
        finish();
      }
    }, 120);

    return () => clearInterval(poll);
  }, [progress, finish]);

  if (progress === null) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 2147483000,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background:
            "linear-gradient(90deg, #ff732d 0%, #ff0044 55%, #9900ff 100%)",
          boxShadow: "0 0 8px rgba(255, 0, 68, 0.45)",
          transition:
            progress === 100
              ? "width 160ms ease-out, opacity 220ms ease-out 120ms"
              : "width 200ms ease-out",
          opacity: progress === 100 ? 0 : 1,
        }}
      />
    </div>
  );
}
