"use client";

import { useEffect } from "react";
import type { Metric } from "web-vitals";

declare global {
  interface Window {
    __zynetoPerfInit?: boolean;
  }
}

type DataLayerWindow = Window & {
  dataLayer?: Record<string, unknown>[];
  __zynetoPerfInit?: boolean;
};

const PerformanceMonitor = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (typeof window === "undefined") return;

    const w = window as DataLayerWindow;
    if (w.__zynetoPerfInit) return;
    w.__zynetoPerfInit = true;

    const reportWebVitals = (metric: Metric) => {
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: "web_vitals",
        metric_name: metric.name,
        metric_value: Math.round(
          metric.name === "CLS" ? metric.value * 1000 : metric.value
        ),
        metric_rating: metric.rating,
      });
    };

    import("web-vitals")
      .then((webVitals) => {
        if (webVitals.onCLS) webVitals.onCLS(reportWebVitals);
        if (webVitals.onINP) webVitals.onINP(reportWebVitals);
        if (webVitals.onFCP) webVitals.onFCP(reportWebVitals);
        if (webVitals.onLCP) webVitals.onLCP(reportWebVitals);
        if (webVitals.onTTFB) webVitals.onTTFB(reportWebVitals);
      })
      .catch(() => undefined);
  }, []);

  return null;
};

export default PerformanceMonitor;
