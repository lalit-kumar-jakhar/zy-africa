export const OFFER_ENABLED = true;

export const OFFER_PAGE_SLUG = "site-offer";

export const OFFER_PREVIEW = process.env.NODE_ENV === "development";

export const OFFER = {
  percent: "40%",
  eyebrow: "LIMITED TIME",
  badge: "40% OFF",
  headline: "40% off, ends 31 December",
  cardHeadline: "40% off, until 31 December",
  body: "Dedicated teams and fixed cost projects. After that, standard rates apply.",
  condition: "New engagements only. Standard rates apply after.",
  ctaText: "Start before it ends",
  ctaHref: "/contact-us",
  endsAt: "2026-12-31T23:59:59+05:30",
  ticker: [
    { text: "40% off new projects until 31 December", emphasis: "40%" },
    { text: "Dedicated team at a fixed cost" },
    { text: "Start before it ends", cta: true },
  ] as { text: string; emphasis?: string; cta?: boolean }[],
};

export type OfferTickerBeat = (typeof OFFER.ticker)[number];

export const HOME_STRIP = {
  badge: "STUDIO",
  ctaHref: "/contact-us",
  ticker: [
    { text: "Senior engineers on every engagement", emphasis: "Senior" },
    { text: "Production systems, handed over in full" },
    { text: "You keep the code, the models, and the data" },
    { text: "Request a conversation", cta: true },
  ] as OfferTickerBeat[],
};

export const OFFER_HIDDEN_PREFIXES = ["/thank-you", "/privacy", "/terms"];

export const OFFER_STATIC_PREFIXES = ["/contact-us"];

export const OFFER_STRIP_PREFIXES = ["/services/", "/solutions/", "/industries/"];

export const OFFER_DISMISS_KEY = "zy_offer_dismissed_v1";

export const offerHasExpired = (now: Date = new Date()) => {
  const ends = Date.parse(OFFER.endsAt);
  return Number.isNaN(ends) ? true : now.getTime() > ends;
};

export const offerAllowedOn = (pathname: string) =>
  !OFFER_HIDDEN_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));

export const offerUsesStrip = (pathname: string) =>
  OFFER_STRIP_PREFIXES.some((p) => pathname.startsWith(p) && pathname.length > p.length) ||
  OFFER_STATIC_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));

export const offerIsStatic = (pathname: string) =>
  OFFER_STATIC_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
