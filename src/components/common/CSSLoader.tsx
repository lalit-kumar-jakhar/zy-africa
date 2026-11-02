'use client';

import { useEffect } from 'react';

interface CSSLoaderProps {
  href: string;
  media?: string;
  onLoad?: () => void;
}

export function CSSLoader({ href, media = 'all', onLoad }: CSSLoaderProps) {
  useEffect(() => {
    const existingLink = document.querySelector(`link[href="${href}"]`);
    if (existingLink) {
      onLoad?.();
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = media;
    
    link.onload = () => {
      onLoad?.();
    };

    link.onerror = () => {
      console.warn(`Failed to load CSS: ${href}`);
    };

    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [href, media, onLoad]);

  return null;
}

export function useLoadCSS(href: string, condition: boolean = true) {
  useEffect(() => {
    if (!condition) return;

    const existingLink = document.querySelector(`link[href="${href}"]`);
    if (existingLink) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'all';
    
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        document.head.appendChild(link);
      });
    } else {
      setTimeout(() => {
        document.head.appendChild(link);
      }, 0);
    }

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [href, condition]);
}

export function DeferredCSSLoader() {
  useEffect(() => {
    const loadDeferredCSS = () => {
      const deferredCSS = [
        '/styles/deferred.css',
        '/styles/performance.css'
      ];

      deferredCSS.forEach(href => {
        const existingLink = document.querySelector(`link[href="${href}"]`);
        if (!existingLink) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = href;
          link.media = 'all';
          document.head.appendChild(link);
        }
      });
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadDeferredCSS, { timeout: 2000 });
    } else {
      setTimeout(loadDeferredCSS, 100);
    }
  }, []);

  return null;
}
