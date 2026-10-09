const TWO_COLUMN_COUNTS = new Set([2, 4, 8]);

export function industryGridClass(count: number, breakpoint: "lg" | "xl"): string {
  if (count <= 1) {
    return breakpoint === "lg" ? "lg:grid-cols-1" : "xl:grid-cols-1";
  }
  if (TWO_COLUMN_COUNTS.has(count)) {
    return breakpoint === "lg" ? "lg:grid-cols-2" : "xl:grid-cols-2";
  }
  return breakpoint === "lg" ? "lg:grid-cols-3" : "xl:grid-cols-3";
}
