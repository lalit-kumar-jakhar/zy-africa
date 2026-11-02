"use client";

import { useModal } from "@/context/ModalContext";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import React, {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./DevProcess.module.css";

const processIcon = "/static/assets/solutions/process.svg";
const STEP_MS = 4500;
const PAUSE_MS = 6000;
const ORBIT_R = 36;
const NODE_RING_R = 26;
const NODE_RING_C = 2 * Math.PI * NODE_RING_R;

interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

interface DevProcessProps {
  sectionTitle?: string;
  sectionDescription?: string;
  kicker?: string;
  companyName?: string;
  processSteps: ProcessStep[];
  ctaText?: string;
  backgroundColor?: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

const DevProcess: React.FC<DevProcessProps> = ({
  sectionTitle = "Development Process",
  sectionDescription = "Our carefully structured development process ensures your idea transforms into a successful, scalable, and engaging platform.",
  kicker = "How we work",
  processSteps,
  ctaText = "Conversations With Experts",
  backgroundColor = "bg-gray-900",
}) => {
  const { openModal } = useModal();
  const reduceMotion = useReducedMotion();
  const uid = useId().replace(/:/g, "");
  const activeGradId = `dp-active-${uid}`;
  const inactiveGradId = `dp-inactive-${uid}`;

  const [activeStep, setActiveStep] = useState(processSteps[0]?.id ?? 1);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [spinTurns, setSpinTurns] = useState(0);

  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevIndexRef = useRef(0);
  const spinTurnsRef = useRef(0);
  const processStepsRef = useRef(processSteps);
  const activeIndexRef = useRef(0);

  const total = processSteps.length;
  const activeIndex = Math.max(
    0,
    processSteps.findIndex((step) => step.id === activeStep)
  );
  const active = processSteps[activeIndex];
  const isAutoplay = !reduceMotion && !isPaused && !isHovering && total > 1;

  useEffect(() => {
    processStepsRef.current = processSteps;
  }, [processSteps]);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const nodes = useMemo(
    () =>
      processSteps.map((step, index) => {
        const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return {
          step,
          index,
          x: 50 + ORBIT_R * cos,
          y: 50 + ORBIT_R * sin,
          spoke: {
            x1: 50 + 16 * cos,
            y1: 50 + 16 * sin,
            x2: 50 + 30 * cos,
            y2: 50 + 30 * sin,
          },
        };
      }),
    [processSteps, total]
  );

  const rotation = spinTurns * 360 + (total > 0 ? (activeIndex / total) * 360 : 0);

  const goToIndex = useCallback((nextIndex: number, pause: boolean) => {
    const steps = processStepsRef.current;
    const count = steps.length;
    if (count === 0) return;
    const normalized = ((nextIndex % count) + count) % count;
    const prev = prevIndexRef.current;
    if (count > 1) {
      if (prev === count - 1 && normalized === 0) {
        spinTurnsRef.current += 1;
        setSpinTurns(spinTurnsRef.current);
      } else if (prev === 0 && normalized === count - 1 && count > 2) {
        spinTurnsRef.current -= 1;
        setSpinTurns(spinTurnsRef.current);
      }
    }
    prevIndexRef.current = normalized;
    activeIndexRef.current = normalized;
    setActiveStep(steps[normalized].id);
    if (pause) {
      setIsPaused(true);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = setTimeout(() => setIsPaused(false), PAUSE_MS);
    }
  }, []);

  const selectStep = useCallback(
    (stepId: number) => {
      const idx = processStepsRef.current.findIndex((step) => step.id === stepId);
      if (idx >= 0) goToIndex(idx, true);
    },
    [goToIndex]
  );

  const goRelative = useCallback(
    (delta: number) => {
      goToIndex(activeIndexRef.current + delta, true);
    },
    [goToIndex]
  );

  useEffect(() => {
    if (!isAutoplay) return undefined;
    const interval = setInterval(() => {
      goToIndex(activeIndexRef.current + 1, false);
    }, STEP_MS);
    return () => clearInterval(interval);
  }, [isAutoplay, goToIndex]);

  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      goRelative(1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      goRelative(-1);
    }
  };

  if (!active || total === 0) return null;

  const spring = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 52, damping: 18 };

  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 text-white lg:py-28",
        backgroundColor
      )}
      aria-label={sectionTitle}
      onKeyDown={handleKeyDown}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute top-16 left-8 h-72 w-72 rounded-full bg-linear-to-r from-[#ff732d] to-[#ff0044] blur-3xl" />
        <div className="absolute right-8 bottom-10 h-96 w-96 rounded-full bg-linear-to-r from-[#ff0044] to-[#9900ff] blur-3xl" />
      </div>

      <svg className="absolute h-0 w-0" aria-hidden>
        <defs>
          <linearGradient id={activeGradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff732d" />
            <stop offset="50%" stopColor="#ff0044" />
            <stop offset="100%" stopColor="#9900ff" />
          </linearGradient>
          <linearGradient id={inactiveGradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4b5563" />
            <stop offset="100%" stopColor="#6b7280" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 xl:grid-cols-2 xl:gap-16">
          <div
            className="relative mx-auto hidden w-full max-w-130 lg:block"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div
              className={cn(styles.stage, !isAutoplay && styles.paused)}
              style={{ "--step-ms": `${STEP_MS}ms` } as React.CSSProperties}
            >
              {!reduceMotion && <div className={styles.scan} aria-hidden />}

              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                aria-hidden
              >
                <circle
                  cx="50"
                  cy="50"
                  r="22"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="0.35"
                />
                <circle
                  cx="50"
                  cy="50"
                  r={ORBIT_R}
                  fill="none"
                  stroke={`url(#${inactiveGradId})`}
                  strokeWidth="0.45"
                  opacity="0.45"
                  className={styles.orbitPath}
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="rgba(255,255,255,0.04)"
                  strokeWidth="0.3"
                />
                {nodes.map(({ step, spoke, index }) => (
                  <line
                    key={`spoke-${step.id}`}
                    x1={spoke.x1}
                    y1={spoke.y1}
                    x2={spoke.x2}
                    y2={spoke.y2}
                    stroke={
                      index === activeIndex
                        ? `url(#${activeGradId})`
                        : "rgba(255,255,255,0.12)"
                    }
                    strokeWidth={index === activeIndex ? 0.55 : 0.3}
                    strokeLinecap="round"
                    opacity={index === activeIndex ? 0.9 : 0.5}
                  />
                ))}
              </svg>

              <motion.div
                className={styles.beacon}
                animate={{ rotate: rotation }}
                transition={spring}
              >
                <div className={styles.beam} />
                <div className={styles.pulseDot} />
              </motion.div>

              <div className="absolute top-1/2 left-1/2 z-30 flex h-18 w-18 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <div
                  className={cn(
                    "absolute inset-0 rounded-full bg-linear-to-br from-[#ff732d] via-[#ff0044] to-[#9900ff] opacity-60 blur-[2px]",
                    styles.hubRing
                  )}
                />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#ff732d]/50 bg-gray-900 shadow-[0_0_24px_rgba(255,115,45,0.35)]">
                  <Image
                    src={processIcon}
                    alt="Development process workflow"
                    width={40}
                    height={40}
                    className="h-8 w-8 object-contain"
                  />
                </div>
              </div>

              {nodes.map(({ step, x, y, index }) => {
                const isActive = index === activeIndex;
                const isDone = index < activeIndex;
                return (
                  <button
                    key={step.id}
                    type="button"
                    aria-label={`Step ${step.id}: ${step.title}`}
                    aria-current={isActive ? "step" : undefined}
                    onClick={() => selectStep(step.id)}
                    className={cn(
                      "absolute z-20 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full transition-transform duration-500",
                      isActive ? "scale-110" : "scale-100 hover:scale-105"
                    )}
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    {isActive && (
                      <span
                        className={cn(
                          "absolute -inset-1.5 rounded-full",
                          styles.nodeGlow
                        )}
                      />
                    )}
                    <span
                      className={cn(
                        "relative flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-500",
                        isActive
                          ? "border-[#ff732d] bg-linear-to-br from-[#ff732d] to-[#ff0044] shadow-[0_8px_28px_rgba(255,115,45,0.45)]"
                          : isDone
                            ? "border-[#ff732d]/50 bg-[#ff732d]/15"
                            : "border-gray-600 bg-gray-800 hover:border-[#ff732d]/70"
                      )}
                    >
                      <span className="absolute inset-0.75 flex items-center justify-center rounded-full bg-gray-900">
                        <span
                          className={cn(
                            "text-sm font-bold tabular-nums",
                            isActive || isDone
                              ? "text-[#ff732d]"
                              : "text-gray-400"
                          )}
                        >
                          {pad(step.id)}
                        </span>
                      </span>
                      {isActive && !reduceMotion && (
                        <svg
                          key={step.id}
                          className="absolute inset-0 h-full w-full"
                          viewBox="0 0 56 56"
                        >
                          <circle
                            className={styles.progressCircle}
                            cx="28"
                            cy="28"
                            r={NODE_RING_R}
                            fill="none"
                            stroke={`url(#${activeGradId})`}
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeDasharray={NODE_RING_C}
                            style={
                              {
                                "--ring-circ": NODE_RING_C,
                              } as React.CSSProperties
                            }
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-linear-to-r from-[#ff732d] to-[#9900ff]" />
                <span className="text-xs font-semibold tracking-[0.22em] text-[#ff732d] uppercase">
                  {kicker}
                </span>
              </div>
              <h2 className="bg-linear-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-4xl leading-tight font-bold text-transparent lg:text-5xl">
                {sectionTitle}
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                {sectionDescription}
              </p>
            </div>

            <div className="space-y-3 lg:hidden">
              <div className="relative pl-2">
                <div className="absolute top-5 bottom-5 left-9 w-px bg-gray-700" />
                <div
                  className={cn(
                    "absolute top-5 left-9 w-px bg-linear-to-b from-[#ff732d] via-[#ff0044] to-[#9900ff]",
                    styles.lineFill
                  )}
                  style={{
                    height:
                      total > 1 && activeIndex > 0
                        ? `${(activeIndex / (total - 1)) * 100}%`
                        : "0px",
                  }}
                />
                <ol className="relative space-y-3">
                  {processSteps.map((step, index) => {
                    const isActive = step.id === activeStep;
                    return (
                      <li key={step.id}>
                        <button
                          type="button"
                          onClick={() => selectStep(step.id)}
                          className={cn(
                            "flex w-full items-center gap-4 rounded-xl px-2 py-2 text-left transition-colors",
                            isActive ? "bg-white/5" : "hover:bg-white/5"
                          )}
                          aria-current={isActive ? "step" : undefined}
                        >
                          <span
                            className={cn(
                              "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold",
                              isActive
                                ? "border-[#ff732d] bg-linear-to-br from-[#ff732d] to-[#ff0044] text-white"
                                : index < activeIndex
                                  ? "border-[#ff732d]/50 bg-gray-900 text-[#ff732d]"
                                  : "border-gray-600 bg-gray-900 text-gray-400"
                            )}
                          >
                            {pad(step.id)}
                          </span>
                          <span
                            className={cn(
                              "text-sm font-semibold",
                              isActive ? "text-white" : "text-gray-400"
                            )}
                          >
                            {step.title}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>

            <div
              className="overflow-hidden rounded-2xl border border-gray-700/50 bg-linear-to-br from-gray-800/60 to-gray-900/60 p-6 shadow-xl backdrop-blur-sm"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="mb-5 h-0.5 overflow-hidden rounded-full bg-gray-700/80">
                <div
                  key={activeStep}
                  className={cn(
                    "h-full w-full bg-linear-to-r from-[#ff732d] via-[#ff0044] to-[#9900ff]",
                    styles.timerFill,
                    !isAutoplay && styles.paused
                  )}
                  style={{ "--step-ms": `${STEP_MS}ms` } as React.CSSProperties}
                />
              </div>

              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="font-mono text-xs tracking-widest text-white/40 uppercase">
                  Step {pad(activeIndex + 1)} of {pad(total)}
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => goRelative(-1)}
                    aria-label="Previous step"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-600 text-white transition hover:border-[#ff732d] hover:text-[#ff732d]"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => goRelative(1)}
                    aria-label="Next step"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-600 text-white transition hover:border-[#ff732d] hover:text-[#ff732d]"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="relative min-h-37" aria-live="polite">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <div className="gradient-bg-btn flex h-12 w-12! items-center justify-center rounded-full p-0!">
                        <span className="font-bold text-white">{pad(active.id)}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{active.title}</h3>
                    </div>
                    <p className="leading-relaxed text-gray-300">{active.description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Process steps">
              {processSteps.map((step, index) => (
                <button
                  key={step.id}
                  type="button"
                  role="tab"
                  aria-selected={step.id === activeStep}
                  aria-label={`Go to step ${step.id}: ${step.title}`}
                  onClick={() => selectStep(step.id)}
                  className={cn(
                    "relative h-2 cursor-pointer rounded-full transition-all duration-500 before:absolute before:-inset-x-1.5 before:-inset-y-2.75 before:content-['']",
                    step.id === activeStep
                      ? "w-8 bg-linear-to-r from-[#ff732d] via-[#ff0044] to-[#9900ff] shadow-sm shadow-[#ff732d]/50"
                      : index < activeIndex
                        ? "w-4 bg-linear-to-r from-[#ff732d]/60 via-[#ff0044]/60 to-[#9900ff]/60"
                        : "w-3 bg-gray-700 hover:w-4 hover:bg-gray-600"
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={openModal}
              className="gradient-bg-btn group flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="mr-2">{ctaText}</span>
              <svg
                className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevProcess;
