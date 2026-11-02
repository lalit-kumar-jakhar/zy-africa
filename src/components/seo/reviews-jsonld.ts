import { siteOrigin } from "@/constants/site-metadata";
import { reviews, type Review as Testimonial } from "@/data/testimonials";
import { ORG_ID } from "./jsonld";

type AuthorNode = {
  "@type": "Person";
  name: string;
  jobTitle?: string;
  worksFor?: { "@type": "Organization"; name: string };
};

type ReviewNode = {
  "@type": "Review";
  "@id": string;
  itemReviewed: { "@id": string };
  author: AuthorNode;
  publisher: { "@type": "Organization"; name: string };
  reviewRating: {
    "@type": "Rating";
    ratingValue: number;
    bestRating: number;
    worstRating: number;
  };
  reviewBody: string;
};

function slugify(value: string): string {
  return value
    .normalize("NFKD")
    // Strip combining marks so accented and plain spellings share one @id.
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function buildReviewNodes(source: readonly Testimonial[] = reviews) {
  const seenSlugs = new Map<string, number>();

  const nodes: ReviewNode[] = source.map((review) => {
    const base = slugify(review.author) || "review";
    const priorUses = seenSlugs.get(base) ?? 0;
    seenSlugs.set(base, priorUses + 1);
    const slug = priorUses === 0 ? base : `${base}-${priorUses + 1}`;

    const author: AuthorNode = { "@type": "Person", name: review.author };
    // Google testimonials carry neither field; omit rather than emit empty strings.
    if (review.position) author.jobTitle = review.position;
    if (review.company) {
      author.worksFor = { "@type": "Organization", name: review.company };
    }

    return {
      "@type": "Review",
      "@id": `${siteOrigin}/#review-${slug}`,
      itemReviewed: { "@id": ORG_ID },
      author,
      publisher: { "@type": "Organization", name: review.publisher },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.ratingValue,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.reviewBody,
    };
  });

  return { "@context": "https://schema.org", "@graph": nodes } as const;
}
