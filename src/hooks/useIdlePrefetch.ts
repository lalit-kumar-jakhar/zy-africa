"use client";

import { useEffect } from "react";

type IdleWindow = {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

type NetworkInformation = {
  saveData?: boolean;
  effectiveType?: string;
};

const DELAY_MS = 2500;
const IDLE_TIMEOUT_MS = 3000;

export function useIdlePrefetch(
  urls: string[],
  opts: { enabled?: boolean; requireFastConnection?: boolean } = {}
) {
  const { enabled = true, requireFastConnection = false } = opts;
  // Joined so a new array identity with the same contents does not re-run this.
  const key = urls.join("|");

  useEffect(() => {
    if (!enabled || !key) return;
    if (typeof window === "undefined") return;

    const conn = (navigator as Navigator & { connection?: NetworkInformation })
      .connection;
    if (conn?.saveData) return;
    if (conn?.effectiveType && /(^|-)2g$/.test(conn.effectiveType)) return;
    if (
      requireFastConnection &&
      conn?.effectiveType &&
      conn.effectiveType !== "4g"
    ) {
      return;
    }

    const w = window as unknown as IdleWindow;
    let cancelled = false;
    let started = false;
    let timer: number | undefined;
    let idleHandle: number | undefined;
    const images: HTMLImageElement[] = [];

    const run = () => {
      if (cancelled || started) return;
      started = true;
      for (const url of key.split("|")) {
        const img = new Image();
        // Low priority so these never compete with anything on screen.
        img.fetchPriority = "low";
        img.decoding = "async";
        img.src = url;
        images.push(img);
      }
    };

    const schedule = () => {
      if (cancelled || started || timer !== undefined) return;
      timer = window.setTimeout(() => {
        timer = undefined;
        if (cancelled || document.hidden) return;
        if (typeof w.requestIdleCallback === "function") {
          idleHandle = w.requestIdleCallback(run, { timeout: IDLE_TIMEOUT_MS });
        } else {
          run();
        }
      }, DELAY_MS);
    };

    const onVisibilityChange = () => {
      if (!document.hidden) schedule();
    };

    document.addEventListener("visibilitychange", onVisibilityChange, {
      passive: true,
    });
    if (!document.hidden) schedule();

    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (timer !== undefined) window.clearTimeout(timer);
      if (idleHandle !== undefined) w.cancelIdleCallback?.(idleHandle);
      // Detaching src aborts anything still in flight on unmount.
      for (const img of images) img.src = "";
    };
  }, [key, enabled, requireFastConnection]);
}
