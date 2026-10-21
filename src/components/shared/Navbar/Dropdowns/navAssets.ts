import { solutionNavItems } from "./navGroups";

export const NAV_BANNERS = [1, 2, 3, 4, 5].map(
  (n) => `/static/assets/navbar/banner-bg-${n}.webp`
);

export function navPrefetchAssets(): string[] {
  return solutionNavItems()
    .filter((item) => item.live)
    .map((item) => item.backgroundImage);
}
