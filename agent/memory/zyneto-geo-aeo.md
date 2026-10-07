---
name: zyneto-geo-aeo
description: "AI search audit for Zyneto: what passes, what fails, and the fact that the site is already cited by ChatGPT/Gemini/Perplexity"
metadata: 
  node_type: memory
  type: project
  originSessionId: 251107c0-8700-4f2c-8ea7-686e3fb943a6
  modified: 2026-08-06T16:26:03.376Z
---

Audit run 2026-08-06, full report `Blog/GEO-AEO-AUDIT.md`. GEO, AEO, LLM SEO,
GenAI Search Optimization and AI Search Optimization are one discipline under
five names - being found, extracted and cited by answer engines. Audit them as
one thing.

**Zyneto is ALREADY cited by AI engines - this is not greenfield.** GA4,
2026-01-01 to 08-05: ~87 AI referral sessions (chatgpt.com 32, gemini 23,
perplexity 15, claude.ai 2). Over 90 days `chatgpt.com` was the **5th largest
source on the site**, ahead of Bing and LinkedIn. GA4 now reports a distinct
**"AI Assistant" channel**.

**The problem is concentration, not absence.**
`/blog/best-practices-in-fastapi-architecture` produces **~37 of ~87 AI sessions
(43%)**. The same page holds 40,059 GSC impressions at position 10.4. It is both
the best AI asset and the biggest unconverted search asset, so **refresh it
first** - and it is the only page with enough AI traffic to measure a change
against.

**What already passes (do not re-litigate):**
- `robots.txt` allows every AI crawler (`User-agent: *`, only /api/, /admin/,
  /login/ blocked). GPTBot, ClaudeBot, PerplexityBot, CCBot, Google-Extended.
- Full SSR: fetched as GPTBot, 200 with **11,028 words** in the HTML.
- 6 JSON-LD blocks: BlogPosting, FAQPage, BreadcrumbList, WebSite, WebPage,
  ProfessionalService.
- 78/100 posts have FAQs; 67 use lists; 43 use tables.

**What fails, ranked:**
1. **96/100 posts cite NO authoritative external source.** Biggest gap - engines
   favour content that shows its working, and verifiability is what they select on.
2. **Only 12% of headings are question-shaped** (381/3,074).
3. **Openings are narrative hooks, not extractable answers.** 95/100 open under
   60 words but none are definitional, so there is nothing to lift.
4. ~~No `Person` author entity in schema.~~ **WRONG — verified in code 2026-08-06.**
   `buildPerson()` (`zyneto-frontend/src/components/seo/jsonld.ts`) emits a full
   Person node and `BlogPosting` references it by `@id`. Not a gap; only renders when
   a post has an `author` set in the CMS. See [[zyneto-competitor-benchmark]].
5. ~~**AI engines emit broken variants of our URLs and they 404**~~ **FIXED
   2026-08-06.** Measured: the U+2011 hyphen variant and a markdown-citation leak
   (`...architecture).[4`) both 404'd on the most-cited page. Now recovered by
   `normalizeSlug` (`zyneto-frontend/src/utils/slug.ts`) + a fallback in
   `src/app/blog/[slug]/page.tsx` that answers **308 permanent redirect** to the
   canonical URL. It runs ONLY after an exact lookup misses and only redirects
   once the normalised slug is confirmed to exist, so it cannot invent a page or
   loop. Covers unicode dashes, soft/zero-width chars, percent-encoding, case and
   trailing citation fragments. **Design note worth keeping: strip the markdown
   citation BEFORE the general punctuation pass** - `).[4` ends in a digit, so a
   trailing-punctuation rule alone never matches it, and a naive rule would eat
   the year off real slugs like `classified-app-development-cost-in-2026`.
   Blog routes only; services/solutions were not mangled in the referral data.
6. 22/100 posts have no FAQ entries.
7. No `llms.txt`. **Be honest: little evidence any major engine reads it.** Cheap
   and harmless, but never sell it as a win.

**Apply while drafting, never retrofit:** answer-first opening sentence, 2+
authoritative citations, question-shaped h2s, full FAQ set. Free at draft time,
expensive later. Applies to [[zyneto-content-backlog]] batch 3.

**Measure by DIVERSIFICATION, not total** - AI traffic landing on more than one
page. Volume is too small to read reliably. Check at the Oct 6 checkpoint in
[[zyneto-seo-health-and-cadence]].
