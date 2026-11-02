import { useEffect, useState } from "react";

export default function useScrollSpy(
  ids: string[],
  offset = 120
): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  const idsKey = ids.join("|");

  useEffect(() => {
    const list = idsKey ? idsKey.split("|") : [];
    if (!list.length) return;

    let raf = 0;

    const compute = () => {
      raf = 0;
      let current: string | null = null;
      for (const id of list) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) {
          current = id;
        }
      }
      setActiveId(current ?? list[0]);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [idsKey, offset]);


  useEffect(() => {
    const applyHash = () => {
      const hash =
        typeof window !== "undefined"
          ? window.location.hash.replace(/^#/, "")
          : "";
      if (hash && idsKey.split("|").includes(hash)) {
        setActiveId(hash);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash, { passive: true });
    return () => window.removeEventListener("hashchange", applyHash);
  }, [idsKey]);

  return activeId;
}
