"use client";
import { useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

export function usePrefetchOnIntent() {
  const router = useRouter();
  const done = useRef<Set<string>>(new Set());

  return useCallback(
    (href: string) => () => {
      if (done.current.has(href)) return;
      done.current.add(href);
      router.prefetch(href);
    },
    [router]
  );
}
