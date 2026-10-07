interface Grecaptcha {
  execute(siteKey: string, options: { action: string }): Promise<string>;
  ready(callback: () => void): void;
}

declare global {
  interface Window {
    grecaptcha: Grecaptcha;
  }
}

let recaptchaLoaded = false;
let recaptchaPromise: Promise<void> | null = null;

export const loadRecaptcha = (): Promise<void> => {
  if (recaptchaLoaded) {
    return Promise.resolve();
  }

  if (recaptchaPromise) {
    return recaptchaPromise;
  }

  recaptchaPromise = new Promise((resolve, reject) => {
    if (document.querySelector("#recaptcha-v3")) {
      recaptchaLoaded = true;
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.id = "recaptcha-v3";
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_V3}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      recaptchaLoaded = true;
      resolve();
    };

    script.onerror = () => {
      recaptchaPromise = null;
      reject(new Error("Failed to load reCAPTCHA"));
    };

    document.head.appendChild(script);
  });

  return recaptchaPromise;
};

export const executeRecaptcha = async (action: string): Promise<string> => {
  await loadRecaptcha();

  return new Promise((resolve, reject) => {
    if (!window.grecaptcha) {
      reject(new Error("reCAPTCHA not loaded"));
      return;
    }

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_V3 as string, {
          action,
        })
        .then(resolve)
        .catch(reject);
    });
  });
};

const INTERACTION_EVENTS = [
  "pointerdown",
  "keydown",
  "touchstart",
  "focusin",
] as const;

const PREWARM_DELAY_MS = 2500;
const IDLE_TIMEOUT_MS = 3000;

type IdleWindow = {
  requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

/** Schedules `cb` for the next idle slot; returns a canceller. */
const scheduleIdle = (cb: () => void): (() => void) => {
  const w = window as unknown as IdleWindow;
  if (typeof w.requestIdleCallback === "function") {
    const handle = w.requestIdleCallback(cb, { timeout: IDLE_TIMEOUT_MS });
    return () => w.cancelIdleCallback?.(handle);
  }
  // Safari below 16.4 has no requestIdleCallback.
  const handle = window.setTimeout(cb, 1);
  return () => window.clearTimeout(handle);
};

export const lazyLoadRecaptcha = (target?: HTMLElement | null): (() => void) => {
  const noop = () => {};
  if (typeof window === "undefined" || recaptchaLoaded) return noop;

  const interactionTarget: EventTarget = target ?? document;

  let disposed = false;
  let delayTimer: number | undefined;
  let cancelIdle: (() => void) | undefined;

  const dispose = () => {
    if (disposed) return;
    disposed = true;
    for (const evt of INTERACTION_EVENTS) {
      interactionTarget.removeEventListener(evt, onInteraction);
    }
    document.removeEventListener("visibilitychange", onVisibilityChange);
    if (delayTimer !== undefined) window.clearTimeout(delayTimer);
    cancelIdle?.();
  };

  const load = () => {
    if (disposed) return;
    dispose();
    void loadRecaptcha().catch(() => {});
  };

  const onInteraction = () => {
    if (document.hidden) return;
    load();
  };

  const schedulePrewarm = () => {
    if (disposed || delayTimer !== undefined) return;
    delayTimer = window.setTimeout(() => {
      delayTimer = undefined;

      if (disposed || document.hidden) return;
      cancelIdle = scheduleIdle(load);
    }, PREWARM_DELAY_MS);
  };

  const onVisibilityChange = () => {
    if (!document.hidden) schedulePrewarm();
  };

  for (const evt of INTERACTION_EVENTS) {
    interactionTarget.addEventListener(evt, onInteraction, { passive: true });
  }
  document.addEventListener("visibilitychange", onVisibilityChange, {
    passive: true,
  });

  if (!document.hidden) schedulePrewarm();

  return dispose;
};
