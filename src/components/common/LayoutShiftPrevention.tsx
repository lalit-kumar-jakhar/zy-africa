"use client";

import { useEffect } from "react";

const LayoutShiftPrevention = () => {
  useEffect(() => {
    const images = document.querySelectorAll("img:not([width]):not([height])");
    images.forEach((img) => {
      const htmlImg = img as HTMLImageElement;
      if (!htmlImg.style.aspectRatio && !htmlImg.width && !htmlImg.height) {
        htmlImg.style.aspectRatio = "16/9";
        htmlImg.style.width = "100%";
        htmlImg.style.height = "auto";
      }
    });

    if ("fonts" in document) {
      (
        document as Document & { fonts: { ready: Promise<void> } }
      ).fonts.ready.then(() => {
        document.body.classList.add("fonts-loaded");
      });
    }

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        element.classList.add("measured");
      });
    });

    const dynamicElements = document.querySelectorAll("[data-dynamic]");
    dynamicElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default LayoutShiftPrevention;
