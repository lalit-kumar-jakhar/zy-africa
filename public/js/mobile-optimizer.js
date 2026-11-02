(function () {
  "use strict";

  const isMobile = () => {
    return (
      window.innerWidth <= 768 ||
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );
  };

  const mobileDevice = isMobile();

  if (mobileDevice) {
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement("meta");
      viewportMeta.name = "viewport";
      document.head.appendChild(viewportMeta);
    }
    viewportMeta.content =
      "width=device-width, initial-scale=1, viewport-fit=cover";

    const metaTags = [
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
      { name: "theme-color", content: "#202020" },
    ];

    metaTags.forEach((tag) => {
      if (!document.querySelector(`meta[name="${tag.name}"]`)) {
        const meta = document.createElement("meta");
        meta.name = tag.name;
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    const loadMobileCSS = () => {
      if (document.querySelector('link[href*="mobile.css"]')) return;

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/styles/mobile.css";
      link.media = "screen and (max-width: 768px)";
      document.head.appendChild(link);
    };

    const optimizeTouchInteractions = () => {
      const style = document.createElement("style");
      style.textContent = `
      button, a, [role="button"], [tabindex] {
        touch-action: manipulation !important;
        -webkit-tap-highlight-color: transparent !important;
      }
      * {
        -webkit-overflow-scrolling: touch !important;
        overscroll-behavior: auto !important;
      }
      input, textarea, select {
        font-size: 16px !important;
        transform: translateZ(0) !important;
      }
    `;
      document.head.appendChild(style);
    };

    const optimizeForSlowConnections = () => {
      if (!("connection" in navigator)) return;

      const connection = navigator.connection;
      const isSlowConnection =
        connection.effectiveType === "slow-2g" ||
        connection.effectiveType === "2g" ||
        connection.saveData;

      if (isSlowConnection) {
        const style = document.createElement("style");
        style.textContent = `
        
      `;
        document.head.appendChild(style);
      }
    };

    const init = () => {
      loadMobileCSS();
      optimizeTouchInteractions();
      optimizeForSlowConnections();
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }

    window.addEventListener("orientationchange", () => {
      setTimeout(init, 100);
    });

    const addPerformanceOptimizations = () => {
      const preventLayoutShifts = () => {
        const style = document.createElement("style");
        style.textContent = `
        
        .container {
          contain: layout !important;
        }
      `;
        document.head.appendChild(style);
      };

      const optimizeScrolling = () => {
        // Intentionally no-op.
        // Previously we attached a scroll listener that didn't perform meaningful work,
        // but still added overhead on every scroll event.
      };

      // No longtask observer here. It only ever console.warn'd, and because
      // this file ships from public/ rather than through the bundler, the
      // `removeConsole` compiler option never stripped it - so every mobile
      // visitor saw the warnings in production.

      preventLayoutShifts();
      optimizeScrolling();
    };

    addPerformanceOptimizations();
  }

  const loadDeferredCSS = () => {
    const deferredCSS = ["/styles/deferred.css", "/styles/performance.css"];

    deferredCSS.forEach((href) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        link.media = "all";
        document.head.appendChild(link);
      }
    });
  };

  if ("requestIdleCallback" in window) {
    requestIdleCallback(loadDeferredCSS, { timeout: 2000 });
  } else {
    setTimeout(loadDeferredCSS, 100);
  }
})();
