---
name: zyneto-content-agent-spec
description: "Full operating spec for Zyneto content: the four non-negotiable gates (unique, plagiarism free, under 15% AI, zero em dashes), plus role, banned phrases, structure and output order"
metadata: 
  node_type: memory
  type: project
  originSessionId: 43b06a1f-d5ce-450b-86ff-03b16805d5eb
  modified: 2026-08-11T17:09:36.705Z
---

Standing spec for all Zyneto content-generation work. When asked to write an article/blog/SEO content for Zyneto, act as a senior SEO strategist, content marketer, technical writer, and conversion copywriter (15+ yrs SaaS/AI/enterprise). Goal: original, authoritative, human-sounding content that ranks on Google, satisfies intent, builds topical authority, and converts readers into qualified leads / demo bookings.

## NON-NEGOTIABLE OUTPUT BAR (restated by the user 2026-08-06)

Four requirements. Every one is a gate, not a preference. If a draft fails any of them it does not ship, no matter how good the rest is. These were already spread across three places in this spec, which made them easy to skim past, so they now live here at the top.

1. **Unique and plagiarism free.** Nothing lifted or lightly reworded from any source. Check against the web before delivering, per [[content-delivery-workflow]]. Summaries of a source must be substantially shorter and differently structured than the original.
2. **Must not be detectable as AI-written.** The user runs finished content through an AI detector (Originality.ai style) and expects **under ~15% AI**. Write for low detectability by hand, using the burstiness and pattern-breaking techniques in the detector section below. I cannot run the detector myself, so expect to iterate on the passages their tool flags.
3. **Must read as genuinely human.** Consultant writing to a peer: real opinions, concrete specifics, uneven sentence rhythm, the occasional fragment. Smooth, evenly-paced, uniformly-hedged prose is the tell.
4. **No em dashes and no other AI tells.** Zero em dashes and zero double hyphens anywhere. Also strip the wider set of AI fingerprints: the banned phrase list below, formulaic constructions ("X is not Y, it is Z", "the rule of thumb", "in short", "the result is"), heavy parallel bullet lists, uniform paragraph lengths, and every sentence opening the same way.

**Never fake it in either direction.** Passing the detector must come from writing better, never from hidden characters, zero-width spaces or homoglyph substitution. Those risk a Google spam penalty and are not a real improvement. Equally, originality never means inventing facts, stats, case studies or credentials to sound distinctive.

**This bar applies to ALL content, not only blog articles**: on-page copy in the frontend repo (hero, CTA, meta titles and descriptions, FAQ answers), service, solution and industry page copy, diagram labels and captions, and image alt text.

**Mechanical check before calling any content change done:** grep for em dash and double hyphen, grep the banned phrase list, confirm word count, then read it once for rhythm. All four gates, every time.

**Company:** Zyneto (https://zyneto.com). Industry: AI-powered enterprise solutions, digital transformation, workflow automation, CRM, ERP, AI agents, integrations, business process automation, enterprise search, productivity software, custom software dev, cloud, data engineering & AI.

**Audience:** CEOs, Founders, CTOs, CIOs, Ops Heads, Sales/Marketing Leaders, IT Managers, enterprise decision makers, mid-market, large enterprises, growing startups.

**Research before writing (mandatory):** Google Analytics (top/converting pages, bounce, engagement, session duration, traffic sources, journeys, landing/exit pages), Search Console (queries, impressions, CTR, position, declining/rising pages, long-tail gaps, cannibalization, snippet chances), competitor research (top 10 SERP pages — find missing topics, thin content, weak examples, missing FAQs, outdated info, weak EEAT), and search-intent classification (informational / commercial / transactional / navigational / comparison / educational). Output must be significantly more valuable than every competing article.

**Hard bans — never use:** em dash, double hyphen, robotic transitions, AI clichés, filler, keyword stuffing, repetitive sentence patterns, dramatic claims, fake stats, hallucinated facts, buzzword overload. Banned phrases: "In today's fast-paced world", "Unlock the power", "Game changer", "Revolutionize", "Leverage", "Delve into", "Embark on", "Imagine", "As we navigate", "It is worth noting", "Needless to say", "In conclusion", "This comprehensive guide", "Whether you're", "As an AI", "Overall".

**Style:** Write like an experienced consultant to a peer. Short paragraphs, varied sentence length, natural flow, examples, analogies, practical advice, occasional conversational tone, strong transitions. Grade 7–9 readability, active voice, mobile-friendly hierarchy. Every explanation answers Why / How / When / Where / Who benefits / Who should avoid / common mistakes / best practices / future trends / business impact / implementation / ROI.

**EEAT:** Show experience, expertise, authority, trust. Never invent credentials or case studies. Label hypothetical examples as hypothetical unless verifiable public info. Tone: professional, confident, helpful, trustworthy, modern, business-focused. Teach first, sell second — never overly promotional.

**SEO to optimize:** primary/secondary/LSI/semantic/question/long-tail keywords, related entities; title, meta title, meta description, slug, H1–H4, image alt, internal links, external authoritative refs, FAQ schema, article schema, breadcrumbs, TOC, featured-snippet + PAA optimization, entity + NLP + topical-authority optimization.

**Required output order (user override 2026-08-04):** 1. SEO Brief  2. Keyword Strategy  3. Search Intent Analysis  4. Competitor Gap Analysis  5. Article Outline  6. Complete Article (its header must include the target blog URL, formatted exactly as `## 6. Complete Article (URL: blog/<slug>)`)  7. FAQs (plain questions and answers only; the FAQ appears ONLY in section 7 — do NOT also include a "Frequently asked questions" subsection inside the Complete Article body)  8. CTA Banners (copy for 2 on-brand CTA image banners per blog — headline, subtext, button text, placement, and image alt text; Zyneto dark-banner style with gradient button, topic-relevant, one mid-article and one at the end)  9. Meta Tags  10. Internal Link Suggestions  11. External Reference Suggestions  12. Suggested Images and Diagrams. The user asked to DROP these sections: Schema Markup / JSON-LD (give the FAQ as plain Q&A instead, never JSON-LD), Social Media Assets, Content Quality Checklist, and SEO Optimization Checklist. Do not produce them unless the user reverses this.

**Images and diagrams in every blog (user requirement 2026-08-04, expanded same day):** Every blog carries inline diagrams that genuinely explain the concepts, not decoration.

- **I create the diagrams myself** as SVG rasterized to PNG (see [[zyneto-blog-api]] for the toolchain, standards and the SVG traps). They must exist and be uploaded BEFORE anything is pushed to the API. Never push a post with placeholder image text.
- **Always detailed, always logo'd, never overflowing:** concrete labelled examples rather than empty boxes; Zyneto logo top right of every image; layout computed from text metrics so nothing can spill out of its container.
- **Decide count and placement myself: 2 to 5 inline diagrams per post, driven by necessity.** A dense technical piece with several distinct mechanisms earns 5; a simpler narrative piece earns 2. Put a diagram wherever a concept is genuinely easier to grasp visually (comparisons, flows, architectures, before/after, decision trees, node relationships). Do not pad to hit a number.
- Keep the two-part convention in the markdown deliverable: inline `**[VISUAL N: ...]**` markers in the section-6 body, plus a **Section 12 "Suggested Images and Diagrams"** brief per visual (type, what to draw with concrete labels, caption, alt text).
- **I also produce the feature image and both CTA banners** (changed 2026-08-05; they are no longer the design team's job). Feature 1200x812 with no title text, CTA 800x300, both built from a brand-graded Unsplash photo plus a topic motif. Rotate the layout archetype so no two posts look alike, and never let a post's two CTAs share a template. Full system, archetype list and wiring steps in [[zyneto-blog-api]].
- Palette: gradient `linear-gradient(-135deg, #ff732d, #ff0044, #9900ff)`, accent `#9900ff`, light background for inline diagrams (the blog body is white), dark background for CTA banners. Keep VISUAL markers and section 12 em-dash-free like the rest.

**Heading hierarchy drives the on-site table of contents**, which is generated from the h2/h3 structure, so plan it deliberately: about 6 to 10 h2 sections for a 2,500 to 3,000 word article, h3 for sub-steps within the longer ones, and nothing important below h3. Only h2 currently appears in the rendered TOC. The exact rules, including the entity trap that silently kills an anchor, are in [[zyneto-blog-api]].

Article body should include: SEO Title, Meta Title, Meta Description, URL Slug, Target Keyword, Search Intent, Estimated Difficulty, Estimated Traffic Potential, Reading Time, Introduction, TOC, Main Content, examples, real-world use cases, comparison tables, pros/cons, expert tips, mistakes to avoid, checklist, FAQs, Summary, CTA.

**Applies to ALL content edits, including on-site meta/copy changed directly in code** (metaTitle, metaDescription, hero/CTA copy, schema), not just full articles. Concrete limits to self-audit every change against: meta title <= 60 characters, meta description <= 160 characters, primary keyword front-loaded in the title, no em dash / double hyphen, no banned phrases, no invented stats or claims, proper heading hierarchy. **Article length (user asked for detail 2026-08-04): articles should be detailed — target the Complete Article (section 6 body) at ~2,500 to 3,000 words for pillars. Measure section 6 ONLY (the published article body), excluding the SEO-brief wrapper, the section-7 FAQ, and markdown table separators. Add depth through more substance (fuller use cases, deeper risk/how-to detail, concrete examples), never filler.** Run a mechanical check (length + banned-token grep) before calling any content change done. See [[zyneto-analytics-connections]] for the data that drives these decisions.

## THE MODEL DOMINATES THE SCORE. Measured 2026-08-11 on identical text

`ai-chatbots-for-business`, unchanged, scanned twice: **16.4% on Turbo 3.0.2 and 100% on Lite 1.0.2.** Same words, two models, a 6x spread that spans the entire range of every other score collected. Before reacting to any AI number, **check which model produced it.**

**It is a confidence score, not a proportion.** Originality's own report: *"If the score is 90%, it should be read as 'We are 90% confident that this is AI generated' NOT that 90% of text pasted is AI generated."* So 100% means the detector is certain, not that every sentence is machine-written, and a high number is not a claim about how much of the piece needs rewriting.

**Every score in the 15-point set is Turbo 3.0.2**, so the two-regime thresholds below apply to Turbo only and say nothing about Lite. Do not mix models within a dataset, and record the model beside every score.

Plagiarism is stable by comparison: the same scan returned **2% match**, 9 matched websites and 3 matched phrases, consistent with the 94 to 100 band the other 13 posts sit in. The flagged phrases were ordinary language and our own CTA, not lifted prose.

## MEASURED 2026-08-11: what actually drives the AI detector score

15 scored items: 9 blog posts (6 to 48) and 6 static pages (0 to 13.4). **Concrete specificity is the dominant lever, not sentence rhythm.**

| Regime | Numbers per 100 words | AI score range |
|---|---|---|
| **Specifics-dense** (all 6 static pages) | **3.46 to 5.37** | **0 to 13.4** |
| Specifics-thin (all 9 blog posts) | 0.00 to 0.24 | 6 to 48 |

Across all 15: numbers per 100 words **r = -0.69**. The static pages average 20 to 27 word sentences, far longer than any blog post, and still score 0 to 13, because they are packed with FLEXCUBE, ISO 20022, 1,240 hours, $40 to $100, 5 February 2026.

**Within the specifics-thin regime only, sentence length separates cleanly:** mean under 15.0w scored 6/10/16.4, mean 15.3w and over scored 29 to 48, no overlap. That rule does **not** generalise outside the regime.

**`ai_risk()` in `gate_article.py` implements both regimes** and scores **15/15**: at 1.0+ numbers per 100 words it clears regardless of sentence length; below that it fails at mean >=15.0w or >=11% of sentences over 25w. Always warns which regime the draft is in.

**I got this wrong first time and the correction is the lesson.** From the 9 blogs alone I concluded "hold mean sentence length under 15" and shipped it as a hard gate. The 6 page scores arrived and it was **0 for 6 out of sample**, flagging every page that scored 0 to 13.4. Within blogs, longer sentences correlated with worse scores at r=+0.82; **across all 15 the sign flips to r=-0.50**. Sentence length was a proxy for the confound. **A threshold fitted inside one content type says nothing about another, and a perfect in-sample fit is guaranteed by construction rather than evidence.**

**So the writing instruction is: raise concrete density.** Named systems, real figures, dates, standards, hours, prices. The blogs sit at 0.00 to 0.24 and the pages at 3.5 to 5.4, and that gap maps onto the score gap. Shortening sentences is the fallback that helps only when a piece cannot carry specifics.

**The eCommerce cluster sits between the regimes at 0.55 to 0.88** numbers per 100 words, 3x the other blogs and 5x below the pages, with mean 14.7 to 15.3. Genuinely uncertain. **Score one before Sep 4** and it settles where the 1.0 boundary really falls.

**Write to pass AI-content detectors (user requirement 2026-08-04):** The user checks finished content with an AI detector (Originality.ai style; must read under ~15% AI). Write for low detectability by hand: high burstiness (mix very short and long sentences, use the occasional fragment), break formulaic patterns (avoid repeated "X is not Y, it is Z", "the rule of thumb", "in short", "the result is", "here is the flow", and heavy parallel bullet lists), prefer concrete specifics and a little voice over smooth generic phrasing, and vary sentence openings. Keep it accurate and still spec-compliant (no em dash, no banned phrases). Do NOT use hidden-character, zero-width, or homoglyph tricks — they risk Google spam penalties and are not real improvement. I cannot run the detector myself, so expect to iterate: humanize, the user re-checks, and if their tool highlights flagged passages, target those precisely. See [[content-delivery-workflow]].

**Validate before returning:** run the four gates in the NON-NEGOTIABLE OUTPUT BAR at the top first (unique and plagiarism free, under ~15% AI, reads human, zero em dashes and AI tells). Then: factually accurate, SEO-optimized, helpful, natural transitions, proper heading hierarchy, meets intent, actionable, no exaggeration, no hallucinated facts. Revise if any check fails.

## Section 10 is enforced now, so write it as prose phrases. 2026-08-21

**`gate_article.py` fails any draft whose section 10 anchor does not appear verbatim in its own section 6 prose.** Write the anchor as a phrase the article already contains, never as the article's title. "manufacturing execution system", not "MES integration cost". Title-shaped anchors are what made 108 of 110 rows unusable across four waves and left 25 posts with empty link graphs.

**Format is a table**, `| Anchor | Target | Placement |`, targets as site paths like `/industries/logistics-software-development`. A malformed target or a target listed twice also fails.

**Fewer than 4 rows warns rather than fails.** The honest ceiling is about 1.5 links per post for topics screened for zero collision with the library, and a wrong link is worse than no link. Never add a row to clear the warning unless the mapping is semantically true.

**The push applies it and refuses to publish without it**, so a link plan can no longer sit in the markdown looking done. Implementation in `tools/blog-visuals/link_spec.py`, shared by the gate and the push. See [[zyneto-internal-linking]].
