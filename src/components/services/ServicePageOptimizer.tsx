"use client";
import { useEffect } from "react";

interface ServicePageOptimizerProps {
  heroImage?: string;
  serviceIcon?: string;
  title: string;
}

const ServicePageOptimizer: React.FC<ServicePageOptimizerProps> = ({
  heroImage,
  serviceIcon,
  title,
}) => {
  useEffect(() => {
    const preloadResources = () => {
      if (heroImage) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = heroImage;
        link.fetchPriority = "high";
        document.head.appendChild(link);
      }

      if (serviceIcon) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = serviceIcon;
        link.fetchPriority = "high";
        document.head.appendChild(link);
      }

    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(preloadResources, { timeout: 1000 });
    } else {
      setTimeout(preloadResources, 100);
    }

    const optimizeRendering = () => {
      const lcpElement = document.querySelector("h1 span.block.mb-4");
      if (lcpElement) {
        (lcpElement as HTMLElement).style.willChange = "auto";
        (lcpElement as HTMLElement).style.contain = "layout";
      }

      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        (heroSection as HTMLElement).style.willChange = "auto";
        (heroSection as HTMLElement).style.contain = "layout style";
      }
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", optimizeRendering);
    } else {
      optimizeRendering();
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", optimizeRendering);
    };
  }, [heroImage, serviceIcon, title]);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      /* Critical styles for LCP optimization */
      #hero-section {
        contain: layout style;
        will-change: auto;
      }
      
      #hero-section h1 span.block.mb-4 {
        contain: layout;
        will-change: auto;
        font-display: swap;
      }
      
      /* Optimize background image loading */
      #hero-section {
        background-attachment: scroll;
        transform: translateZ(0);
      }
      
      /* Reduce paint complexity */
      .backdrop-blur-xl {
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default ServicePageOptimizer;
