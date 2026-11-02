"use client";
import { useEffect } from "react";

const InteractionOptimizer: React.FC = () => {
  useEffect(() => {
    let isPageVisible = !document.hidden;
    let cleanupFunctions: (() => void)[] = [];

    const optimizeInteractions = () => {
      let interactionTimeout: NodeJS.Timeout;

      const handleInteraction = () => {
        if (!isPageVisible) return;

        clearTimeout(interactionTimeout);

        if (
          "scheduler" in window &&
          "postTask" in
            (
              window as unknown as {
                scheduler: {
                  postTask: (
                    callback: () => void,
                    options: { priority: string }
                  ) => void;
                };
              }
            ).scheduler
        ) {
          const scheduler = (
            window as unknown as {
              scheduler: {
                postTask: (
                  callback: () => void,
                  options: { priority: string }
                ) => void;
              };
            }
          ).scheduler;
          scheduler.postTask(
            () => {
              // Process interaction in next available slot
            },
            { priority: "user-blocking" }
          );
        } else {
          interactionTimeout = setTimeout(() => {
            // Process interaction after current frame
          }, 0);
        }
      };

      document.addEventListener("click", handleInteraction, { passive: true });
      document.addEventListener("touchstart", handleInteraction, {
        passive: true,
      });

      return () => {
        document.removeEventListener("click", handleInteraction);
        document.removeEventListener("touchstart", handleInteraction);
        clearTimeout(interactionTimeout);
      };
    };

    const optimizeAnimations = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.documentElement.style.setProperty(
          "--animation-duration",
          "0.01ms"
        );
        document.documentElement.style.setProperty(
          "--transition-duration",
          "0.01ms"
        );
      }
    };

    const optimizeDOMOperations = () => {
      let observer: MutationObserver | null = null;

      const initializeObserver = () => {
        if (observer || !isPageVisible) return;

        observer = new MutationObserver((mutations) => {
          if (!isPageVisible) return;

          // Use requestIdleCallback to avoid blocking main thread
          requestIdleCallback(() => {
            const fragment = document.createDocumentFragment();
            mutations.forEach((mutation) => {
              if (
                mutation.type === "childList" &&
                mutation.addedNodes.length > 3
              ) {
                Array.from(mutation.addedNodes).forEach((node) => {
                  if (node.nodeType === Node.ELEMENT_NODE) {
                    fragment.appendChild(node.cloneNode(true));
                  }
                });
              }
            });
          });
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      };

      const disconnectObserver = () => {
        if (observer) {
          observer.disconnect();
          observer = null;
        }
      };

      if (isPageVisible) {
        initializeObserver();
      }

      return () => {
        disconnectObserver();
      };
    };

    // Cleanup on hide keeps the page bfcache-eligible
    const handleVisibilityChange = () => {
      const wasVisible = isPageVisible;
      isPageVisible = !document.hidden;

      if (wasVisible && document.hidden) {
        cleanupFunctions.forEach((cleanup) => cleanup());
        cleanupFunctions = [];
      } else if (!wasVisible && !document.hidden) {
        initializeOptimizations();
      }
    };

    const initializeOptimizations = () => {
      cleanupFunctions.push(optimizeInteractions());
      optimizeAnimations();
      cleanupFunctions.push(optimizeDOMOperations());
    };

    document.addEventListener("visibilitychange", handleVisibilityChange, {
      passive: true,
    });

    initializeOptimizations();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
};

export default InteractionOptimizer;
