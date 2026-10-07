import { categories } from "./categories";

export const NAV_BANNERS = [1, 2, 3, 4, 5].map(
  (n) => `/static/assets/navbar/banner-bg-${n}.webp`
);

type NavChild = { icon?: string };
type NavGroup = { children?: NavChild[] };

export function firstTabIcons(): string[] {
  const groups: NavGroup[] = [
    (categories.Services as NavGroup[])?.[0],
    (categories.Solutions as NavGroup[])?.[0],
  ].filter(Boolean);

  return groups
    .flatMap((g) => g.children ?? [])
    .map((c) => c.icon)
    .filter((icon): icon is string => typeof icon === "string");
}
