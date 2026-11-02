"use client";
import { useEffect } from "react";
import { useModal } from "@/context/ModalContext";

export default function ScrollModalTrigger() {
  const { openModal } = useModal();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Sentinel + IntersectionObserver instead of scroll measurement, which
    // triggers forced reflows.
    const sentinel = document.createElement("div");
    sentinel.style.cssText = "width:1px;height:1px;pointer-events:none;";
    sentinel.setAttribute("aria-hidden", "true");
    document.body.appendChild(sentinel);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          openModal();
          observer.disconnect();
          if (sentinel.parentNode) {
            sentinel.parentNode.removeChild(sentinel);
          }
        }
      },
      {
        // Trigger when user is within ~122px of the bottom
        root: null,
        rootMargin: "0px 0px 122px 0px",
        threshold: 0,
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      if (sentinel.parentNode) {
        sentinel.parentNode.removeChild(sentinel);
      }
    };
  }, [openModal]);

  return null;
}
