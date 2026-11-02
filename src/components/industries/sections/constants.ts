export const sectionPad = "md:py-[76px] py-[40px]";
export const sectionPadLg = "md:py-[96px] py-[48px]";
export const scrollMt = "scroll-mt-[calc(var(--nav-height,72px)+3.25rem)]";

const gridDotsBgImage = "/static/assets/home/faq/grid-dots.svg";

export const gridDotsStyle = {
  backgroundImage: `url(${gridDotsBgImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
} as const;

export const operationsMap =
  "/static/assets/industries/logistics-operations-map.svg";
