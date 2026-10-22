import { categories } from "./categories";
import { isShippedHref } from "@/constants/shipped-routes";

type ServiceChild = (typeof categories)["Services"][number]["children"][number];
type SolutionItem = (typeof categories)["Solutions"][number];

export type NavServiceChild = ServiceChild & { live: boolean };
export type NavServiceGroup = {
  label: string;
  liveCount: number;
  children: NavServiceChild[];
};
export type NavSolutionItem = SolutionItem & { live: boolean };

/** Menu labels drop SEO suffixes like "Company" and "Services". */
const menuLabel = (label: string) =>
  label
    .trim()
    .replace(/\s+\((AI)\)$/, "")
    .replace(/\s+(Company|Services)$/, "");

const liveOnly = <T extends { live: boolean }>(items: T[]) =>
  items.filter((item) => item.live);

const MENU_CATEGORIES = [
  {
    label: "AI & Automation",
    groups: ["Artificial Intelligence (AI)", "AI Solutions"],
  },
  {
    label: "Web & Mobile",
    groups: ["Mobile Development", "Web Development"],
  },
  {
    label: "Platforms & Emerging Tech",
    groups: ["Backend & Data", "Emerging Tech"],
  },
];

const MENU_CATEGORY_OVERRIDES: Record<string, string> = {
  "/services/ui-ux-design": "Web & Mobile",
};

/** Services folded into three menu categories, limited to pages that exist on this site. */
export function serviceNavGroups(): NavServiceGroup[] {
  const all = categories.Services.flatMap((group) =>
    group.children.map((child) => ({
      child: {
        ...child,
        label: menuLabel(child.label),
        live: isShippedHref(child.url),
      },
      category:
        MENU_CATEGORY_OVERRIDES[child.url] ??
        MENU_CATEGORIES.find((c) => c.groups.includes(group.label))?.label ??
        MENU_CATEGORIES[MENU_CATEGORIES.length - 1].label,
    })),
  );

  return MENU_CATEGORIES.map(({ label }) => {
    const children = liveOnly(
      all.filter((entry) => entry.category === label).map((e) => e.child),
    );
    return {
      label,
      liveCount: children.length,
      children,
    };
  }).filter((group) => group.children.length > 0);
}

/** Solutions that have a page on this site. */
export function solutionNavItems(): NavSolutionItem[] {
  return liveOnly(
    categories.Solutions.map((item) => ({
      ...item,
      live: isShippedHref(item.url),
    })),
  );
}
