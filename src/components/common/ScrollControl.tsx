"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollControl: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Deliberate no-op: route changes keep the current scroll position.
    const handleRouteChange = () => {
    };

    handleRouteChange();
  }, [pathname]);

  return null;
};

export default ScrollControl;
