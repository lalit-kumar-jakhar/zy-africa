import { categories } from "@/components/shared/Navbar/Dropdowns/categories";

export const SHOW_ALL_SECTIONS = process.env.NODE_ENV === "development";

export const INDUSTRIES_ENABLED = false;

type IndustryEntry = (typeof categories)["Industries"][number];

const industries = categories.Industries as IndustryEntry[];

const reachable = (i: IndustryEntry) =>
  SHOW_ALL_SECTIONS ? Boolean(i.built) : Boolean(i.live);

export function isIndustryLive(url: string): boolean {
  if (!INDUSTRIES_ENABLED) return false;
  return industries.some((i) => i.url === url && reachable(i));
}

export function liveIndustries() {
  if (!INDUSTRIES_ENABLED) return [];
  return industries.filter(reachable);
}
