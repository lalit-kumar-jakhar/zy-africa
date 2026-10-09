export const sectionPad = "py-12 md:py-24";
export const sectionPadSm = "py-10 md:py-16";
export const scrollMt = "scroll-mt-[calc(var(--nav-height,72px)+1.5rem)]";

const gridDotsBgImage = "/static/assets/home/faq/grid-dots.svg";

export const gridDotsStyle = {
  backgroundImage: `url(${gridDotsBgImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
} as const;
