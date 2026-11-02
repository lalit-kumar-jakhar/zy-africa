"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const ContactModal = dynamic(() => import("@/components/common/ContactModal"));

interface ModalContextProps {
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return context;
};

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const pathname = usePathname();

  const openModal = useCallback(() => {
    setIsModalOpen(true);
    setHasOpened(true);
    localStorage.setItem("autoshow", "true");
    localStorage.setItem("shownAt", Date.now().toString());
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    localStorage.setItem("autoshow", "false");
  };

  useEffect(() => {
    if (pathname === "/contact-us" || pathname === "/thanks") return;
    if (typeof window === "undefined") return;

    const twentyFourHours = 24 * 60 * 60 * 1000;

    const shownAt = localStorage.getItem("shownAt");
    const lastShown = shownAt ? parseInt(shownAt, 10) : 0;
    const now = Date.now();
    const shouldTrigger = !shownAt || now - lastShown >= twentyFourHours;

    if (!shouldTrigger) return;

    const isOverlayFreezingScroll = () =>
      document.body.style.position === "fixed";

    let sentinel: HTMLDivElement | null = null;
    let observer: IntersectionObserver | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let triggered = false;

    const cleanup = () => {
      if (observer) observer.disconnect();
      observer = null;
      window.removeEventListener("resize", updateSentinelPosition);
      if (resizeObserver) resizeObserver.disconnect();
      resizeObserver = null;
      if (sentinel?.parentNode) sentinel.parentNode.removeChild(sentinel);
      sentinel = null;
    };

    const updateSentinelPosition = () => {
      if (!sentinel) return;
      const doc = document.documentElement;
      const mid = Math.max(0, Math.round(doc.scrollHeight * 0.5));
      sentinel.style.top = `${mid}px`;
    };

    const setup = () => {
      if (triggered) return;
      if (sentinel || observer) return;

      sentinel = document.createElement("div");
      sentinel.style.cssText =
        "position:absolute;top:0;left:0;width:1px;height:1px;pointer-events:none;";
      sentinel.setAttribute("aria-hidden", "true");
      document.body.appendChild(sentinel);

      updateSentinelPosition();
      window.addEventListener("resize", updateSentinelPosition, { passive: true });

      if ("ResizeObserver" in window) {
        resizeObserver = new ResizeObserver(() => updateSentinelPosition());
        try {
          resizeObserver.observe(document.documentElement);
          resizeObserver.observe(document.body);
        } catch {
        }
      }

      observer = new IntersectionObserver(
        (entries) => {
          if (triggered) return;
          if (!entries.some((e) => e.isIntersecting)) return;

          if (isOverlayFreezingScroll()) return;

          triggered = true;
          openModal();
          cleanup();
        },
        { root: null, threshold: 0 }
      );

      observer.observe(sentinel);
    };

    setup();

    const bodyStyleObserver = new MutationObserver(() => {
      if (triggered) return;
      if (isOverlayFreezingScroll()) return;

      if (sentinel && observer) {
        updateSentinelPosition();
        observer.disconnect();
        observer.observe(sentinel);
      } else {
        setup();
      }
    });

    try {
      bodyStyleObserver.observe(document.body, {
        attributes: true,
        attributeFilter: ["style"],
      });
    } catch {
    }

    return () => {
      bodyStyleObserver.disconnect();
      cleanup();
    };
  }, [pathname, openModal]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {hasOpened && <ContactModal isOpen={isModalOpen} onClose={closeModal} />}
    </ModalContext.Provider>
  );
};
