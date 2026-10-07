import { siteOrigin } from "@/constants/site-metadata";

export const ORG_ID = `${siteOrigin}/#organization`;
export const WEBSITE_ID = `${siteOrigin}/#website`;

export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export type BreadcrumbItem = { name: string; item: string };
export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  } as const;
}

export type FaqItem = { question: string; answer: string };

export type FaqInput = {
  question: string;
  answer: unknown;
  plainTextAnswer?: string;
};

function faqAnswerText(faq: FaqInput): string {
  return typeof faq.answer === "string"
    ? faq.answer
    : (faq.plainTextAnswer ?? "");
}

export function buildFaqPage(faqs: FaqInput[], pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqAnswerText(f),
      },
    })),
  } as const;
}

export function buildCollectionPage(params: {
  id?: string;
  url: string;
  name: string;
  description?: string;
  image?: string[];
  itemUrls?: string[];
}) {
  const { id, url, name, description, image, itemUrls } = params;
  const json: any = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url,
    name,
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
  };
  if (id) json["@id"] = id;
  if (description) json.description = description;
  if (image && image.length) json.image = image;
  if (itemUrls && itemUrls.length) {
    json.mainEntity = {
      "@type": "ItemList",
      itemListElement: itemUrls.map((u, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: u,
      })),
    };
  }
  return json;
}

export type AuthorInput = {
  slug?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  image?: string | null;
  bio?: string | null;
  about?: string | null;
  linkedin_link?: string | null;
  github_link?: string | null;
  upwork_link?: string | null;
};

export function authorSlug(author: AuthorInput): string {
  return (
    author.slug ||
    `${author.first_name ?? ""}-${author.last_name ?? ""}`
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "") ||
    "author"
  );
}

export function authorUrl(author: AuthorInput): string {
  return `${siteOrigin}/author/${authorSlug(author)}`;
}

export function personId(author: AuthorInput): string {
  return `${siteOrigin}/#person-${authorSlug(author)}`;
}

export function buildPerson(author: AuthorInput) {
  const name = `${author.first_name ?? ""} ${author.last_name ?? ""}`.trim();
  if (!name) return null;

  const sameAs = [author.linkedin_link, author.github_link, author.upwork_link]
    .filter((u): u is string => Boolean(u && u.trim()));

  const description = (author.bio || author.about || "").trim();

  const json: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId(author),
    name,
    url: authorUrl(author),
    worksFor: { "@id": ORG_ID },
  };
  if (description) json.description = description;
  if (author.image) {
    json.image = { "@type": "ImageObject", url: author.image };
  }
  if (sameAs.length) json.sameAs = sameAs;
  return json;
}
