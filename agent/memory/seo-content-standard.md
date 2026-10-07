---
name: seo-content-standard
description: "READ BEFORE WRITING any industry page, case study or blog post: query class beats ranking, Google's own do/do-not list, the CTR benchmarks, and the per-page checklist"
metadata:
  type: project
---

Full standard: `Blog/plans/SEO-CONTENT-STANDARD.md`. Researched 2026-08-19 from Google's own docs plus Zyneto's Search Console data. The parts that are non-obvious and keep getting got wrong:

**Ranking is not the constraint. Query class is.** `/blog/restapi-vs-fastapi` ranks **position 2.03 for "what is fastapi" and converts at 0.29%**. The 2026 benchmark for position 2 is 12.6 to 18.7%, so it is **8 to 15x below benchmark while sitting in the top 5**. Cause: AI Overviews trigger on **95.4% of "X vs Y" queries and 85.9% of question queries**, against **8% commercial and 5% transactional**. Every query that page ranks for is one of the first two. More SEO cannot fix it.

**So: if a page must earn clicks, write it for commercial or transactional intent.** Definitional and "X vs Y" posts are citation and brand plays now. Keep them accurate, use them as link sources, stop forecasting traffic from them. **This vindicates the industry pages** — commercial intent is the protected class, and their only real constraint is that nothing links to them (item 58, date-blocked to 2026-10-05).

**Google's own guidance contradicts several things SEO people ask for.** All from Google's published docs: **`llms.txt` and AI markup are ignored**; **there is no ideal page length**; **do not chase exact-match or long-tail keyword variants, because the systems understand synonyms**; do not chunk content; do not rewrite for AI; one page per query variation is scaled content abuse. **Keyword density is a weak lever** — placement in title, H1, description, one H2 and the first 100 words is worth doing because it states what the page is; grinding body density past that has no evidence behind it. See [[zyneto-industry-pages]].

**What Google does reward:** original information rather than a summary, first-hand **Experience** (the extra E, and the reason case studies matter more than their traffic), self-evident authorship, descriptive titles, and a reader who does not have to search again.

**CTR benchmarks 2026**, for judging whether a page has a ranking problem or a click problem: position 1 is 35 to 40% clean and 19 to 28% under an AI Overview; position 2 is 18.7% / 12.6%; positions 3 to 5 are 5 to 10%; position 10 is 1.7%. Zero-click is 64.8%. **Being cited inside an AI Overview earns ~35% more clicks than not being cited.** Zyneto site-wide is 0.39% CTR at average position 19.7.

**Two structural habits worth keeping:** open every major section with a direct 40 to 60 word answer then expand, which is what AI engines lift and is also better writing; and ship at least three in-content inbound links with the page, because an unlinked page earns no impressions however good it is.

See [[zyneto-content-agent-spec]] for register and the AI-detection gate, [[seo-metrics-history]] for anchoring before/after, [[zyneto-geo-aeo]] for the AI-search audit, [[zyneto-analytics-connections]] for pulling the data.
