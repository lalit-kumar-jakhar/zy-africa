"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function NotFound() {
  const [eyesPosition, setEyesPosition] = useState({ x: 0, y: 0 });
  const eyesRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;
    let rafId = 0;

    const updateCenter = () => {
      const el = eyesRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      centerRef.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    };

    updateCenter();

    const onMouseMove = (e: MouseEvent) => {
      if (ticking) return;
      ticking = true;
      rafId = requestAnimationFrame(() => {
        const { x: cx, y: cy } = centerRef.current;
        const deltaX = e.clientX - cx;
        const deltaY = e.clientY - cy;
        const maxMove = 8;
        const distance = Math.hypot(deltaX, deltaY);
        const limitedDistance = Math.min(distance, 100);
        const moveX = (deltaX / (distance || 1)) * (limitedDistance / 100) * maxMove;
        const moveY = (deltaY / (distance || 1)) * (limitedDistance / 100) * maxMove;
        setEyesPosition({
          x: isNaN(moveX) ? 0 : moveX,
          y: isNaN(moveY) ? 0 : moveY,
        });
        ticking = false;
      });
    };

    const scheduleUpdateCenter = () => {
      if (ticking) return;
      ticking = true;
      rafId = requestAnimationFrame(() => {
        updateCenter();
        ticking = false;
      });
    };

    const ro = typeof ResizeObserver !== "undefined" && eyesRef.current
      ? new ResizeObserver(() => scheduleUpdateCenter())
      : null;
    if (ro && eyesRef.current) ro.observe(eyesRef.current);

    window.addEventListener("resize", scheduleUpdateCenter, { passive: true });
    window.addEventListener("scroll", scheduleUpdateCenter, { passive: true });
    document.addEventListener("mousemove", onMouseMove, { passive: true });

    // Capture now: eyesRef.current may point elsewhere or be null by cleanup time.
    const eyesNode = eyesRef.current;

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", scheduleUpdateCenter);
      window.removeEventListener("scroll", scheduleUpdateCenter);
      if (ro && eyesNode) ro.unobserve(eyesNode);
      ro?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-linear-to-br from-purple-400 via-pink-400 to-cyan-400 px-4 relative overflow-hidden">
      <div className="text-center z-10 max-w-2xl mx-auto">
        <div className="relative mb-8">
          <h1 className="text-8xl sm:text-9xl md:text-[16rem] text-white drop-shadow-lg relative font-extrabold">
            4
            <span className="relative inline-block mx-4">
              <span className="text-white">0</span>
              <div
                ref={eyesRef}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="flex space-x-2">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 md:w-16 md:h-16 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center"
                    >
                      <div
                        className="h-3 w-3 md:w-6 md:h-6 bg-black rounded-full transition-transform duration-100"
                        style={{
                          transform: `translate(${eyesPosition.x}px, ${eyesPosition.y}px)`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </span>
            4
          </h1>
        </div>
        <p className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
          Don&apos;t worry, even the best explorers get lost sometimes!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4 md:mt-8">
          <Link
            href="/"
            className="group bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-300 transition-all duration-200 transform hover:scale-105 hover:rotate-1 shadow-lg"
          >
            🏠 Take Me Home
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
