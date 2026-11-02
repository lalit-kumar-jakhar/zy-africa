import { defaultMetaImage, siteOrigin } from "@/constants/site-metadata";
import { servicesSitemapEntries } from "@/data/services-list";
import { solutionsSitemapEntries } from "@/data/solutions-list";
import { caseStudies } from "@/data/case-studies";
import {
  SHIPPED_SERVICE_SLUGS,
  SHIPPED_SOLUTION_SLUGS,
} from "@/constants/shipped-routes";

const SERVICES_IMAGE_OVERRIDES: Record<string, string> = {
  "nextjs-development": "next-js-development.webp",
  "react-native-app-development": "react-native-development.webp",
  "ai-document-management-system": "ai-document-management-services.webp",
  "iot-app-development": "iot-development.webp",
  "pos-software-development": "pos-app-development.webp",
  "generative-ai-development": "generative-ai.webp",
  "ci-cd-consulting": "ci-cd-development.webp",
  "ai-agent-development": "agentic-ai-development.webp",
  "multimodal-ai-development-company": "multimodal-ai-development.webp",
  "ai-copilot-development-company": "ai-copilot-development.webp",
};

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const baseUrl = siteOrigin;

  const pages = [
    { loc: "", lastmod: "2026-07-31", priority: 1.0 },
    { loc: "/services", lastmod: "2026-08-13", priority: 0.9 },
    { loc: "/solutions", lastmod: "2026-08-13", priority: 0.9 },
    ...servicesSitemapEntries
      .filter((e) => SHIPPED_SERVICE_SLUGS.has(e.slug))
      .map((e) => ({
        loc: `/services/${e.slug}`,
        lastmod: e.lastmod,
        priority: 0.8,
      })),
    ...solutionsSitemapEntries
      .filter((e) => SHIPPED_SOLUTION_SLUGS.has(e.slug))
      .map((e) => ({
        loc: `/solutions/${e.slug}`,
        lastmod: e.lastmod,
        priority: 0.8,
      })),
    { loc: "/case-studies", lastmod: "2026-08-24", priority: 0.8 },
    ...caseStudies.map((cs) => ({
      loc: `/case-studies/${cs.slug}`,
      lastmod: cs.lastReviewedDate,
      priority: 0.7,
    })),
    { loc: "/about-us", lastmod: "2026-07-31", priority: 1 },
    { loc: "/contact-us", lastmod: "2026-07-30", priority: 1 },
    { loc: "/privacy-policy", lastmod: "2026-07-31", priority: 0.3 },
    { loc: "/terms-conditions", lastmod: "2026-07-31", priority: 0.3 },
  ];

  const ordered = [...pages].sort(
    (a, b) => b.lastmod.localeCompare(a.lastmod) || a.loc.localeCompare(b.loc)
  );

  const sitemap = ordered.map((page) => {
    const url = `${baseUrl}${page.loc}`;
    const lastModified = new Date(page.lastmod).toISOString().split("T")[0];
    const priority = page.priority;

    let imageBlock = "";
    const servicesMatch = page.loc.match(/^\/services\/(.+)$/);
    const solutionsMatch = page.loc.match(/^\/solutions\/(.+)$/);

    if (page.loc === "") {
      const imageUrl = `${baseUrl}${defaultMetaImage}`;
      const imageTitle = escapeXml(
        "Zyneto: Web and mobile app development company"
      );
      imageBlock = `
    <image:image>
      <image:loc>${escapeXml(imageUrl)}</image:loc>
      <image:title>${imageTitle}</image:title>
    </image:image>`;
    } else if (servicesMatch) {
      const slug = servicesMatch[1];
      const filename =
        SERVICES_IMAGE_OVERRIDES[slug] || `${slug}.webp`;
      const imageUrl = `${baseUrl}/static/assets/services/about/${filename}`;
      const imageTitle = escapeXml(
        slug
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ") + " - Zyneto Development Services"
      );
      imageBlock = `
    <image:image>
      <image:loc>${escapeXml(imageUrl)}</image:loc>
      <image:title>${imageTitle}</image:title>
    </image:image>`;
    } else if (solutionsMatch) {
      const slug = solutionsMatch[1];
      const imageUrl = `${baseUrl}/static/assets/solutions/about/${slug}.webp`;
      const imageTitle = escapeXml(
        slug
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ") + " - Zyneto Solutions"
      );
      imageBlock = `
    <image:image>
      <image:loc>${escapeXml(imageUrl)}</image:loc>
      <image:title>${imageTitle}</image:title>
    </image:image>`;
    }

    return { url, lastModified, priority, imageBlock };
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemap
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified}</lastmod>
    <priority>${item.priority}</priority>${item.imageBlock}
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
