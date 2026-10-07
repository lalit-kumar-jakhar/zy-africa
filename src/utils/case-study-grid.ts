export function lastOfOdd(index: number, count: number): string {
  return count % 2 === 1 && index === count - 1 ? "lg:col-span-2" : "";
}
