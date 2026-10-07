/** Routes this site actually ships. Anything else should 404 and must not be linked. */

export const SHIPPED_SERVICE_SLUGS = new Set([
  "artificial-intelligence",
  "mobile-app-development",
  "web-development",
  "ai-agent-development",
  "generative-ai-development",
  "ai-chatbot-development-company",
  "blockchain-development",
  "iot-app-development",
  "ai-workflow-automation-services",
]);

export const SHIPPED_SOLUTION_SLUGS = new Set([
  "dating-app-development-company",
]);

const STATIC_PATHS = new Set([
  "/",
  "/about-us",
  "/case-studies",
  "/contact-us",
  "/privacy-policy",
  "/terms-conditions",
  "/services",
  "/solutions",
  "/thanks",
]);

export function isShippedHref(href: string): boolean {
  if (!href) return false;
  if (
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return true;
  }

  let path = href;
  if (href.startsWith("http://") || href.startsWith("https://")) {
    try {
      const url = new URL(href);
      const host = url.hostname.replace(/^www\./, "");
      if (host !== "zyneto.com") return true;
      path = url.pathname;
    } catch {
      return true;
    }
  }

  path = path.split("?")[0].split("#")[0];
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  if (STATIC_PATHS.has(path)) return true;
  if (path.startsWith("/case-studies/")) return true;

  const service = path.match(/^\/services\/([^/]+)$/);
  if (service) return SHIPPED_SERVICE_SLUGS.has(service[1]);

  const solution = path.match(/^\/solutions\/([^/]+)$/);
  if (solution) return SHIPPED_SOLUTION_SLUGS.has(solution[1]);

  return false;
}
