---
name: zyneto-internal-linking
description: "How the internal-linking system works, the measured before/after, and the three phrase traps that produce wrong links"
metadata: 
  node_type: memory
  type: project
  originSessionId: 251107c0-8700-4f2c-8ea7-686e3fb943a6
  modified: 2026-08-06T05:49:38.361Z
---

Built and shipped 2026-08-06 after [[zyneto-competitor-benchmark]] identified
internal linking as the biggest structural gap. Toolchain in
`tools/blog-visuals/`, run order documented in `Blog/README.md`.

**Measured on live posts, before -> after:**

| | Before | After |
|---|---|---|
| Total blog-to-blog links | 124 | **684** |
| Mean per post | 1.24 | **6.84** |
| Median | 1 | **7** |
| Posts with zero outbound | 46 | **1** |
| Posts with zero inbound | 55 | **7** |

Shipped as 107 `PostRevision`s (98 main pass + 9 orphan rescue), all applied,
all posts stayed `Active`. Revision ids in `Blog/reports/link-push-log.json`;
`python3 push_links.py --revert` rolls back every one.

## The design that made it work

**Title-derived phrases fail.** The first attempt wrote anchor phrases from post
titles and produced **1.4 links per post**. Titles are marketing copy, body
prose is conversational, and they rarely share a literal string. `mine_phrases.py`
inverts it: mine n-grams that actually recur in linkable prose, then map those to
targets. Same effort, 5x the yield.

**Three layers.** GLOBAL (a phrase always means one post), ROLE (the high-value
one), BRIDGE (cross-topic hubs). Roles resolve against the SOURCE post's
cluster, so "development cost" links music->music and dating->dating from one
phrase list. That is the signal that builds topical authority.

**Ceiling is distinct reachable targets, not the per-post cap.** Mean stalled at
4.84 because that was how many different targets each post could reach. Widening
the phrase map is the only lever; raising MAX_PER_POST does nothing.

## Three traps that produce WRONG links

Every one of these was caught by reading links in context, never by the numbers.
`review_links.py` exists for this. Always read before pushing.

1. **Roles assigned to fill slots.** Mapping `design -> how-to-create-an-app-like-grindr`
   just because the dating cluster needed a design slot produced
   "user experience" -> Grindr. A role must be semantically TRUE or left empty.
2. **Vague anchor text.** "stay ahead", "building an app", "a website", "budget"
   describe nothing. One of them linked to the Flask guide from inside Zyneto's
   own CTA boilerplate. Topic nouns only.
3. **Ambiguous words, the worst offender.** The orphan-rescue pass had a **47%
   error rate** because it reached for weak phrases when good ones did not
   exist: "malware running in memory" -> AI Memory, "LinkedIn also used Flask"
   -> LinkedIn scraping, "content from their browsers" -> best browser.
   **An orphan with no natural linking vocabulary should stay orphaned.** A
   wrong link is worse than no link. Kept 9 of 19, rescued 6 of 13 orphans.

Also structural, now enforced in code: bare "React" matched the verb ("most apps
react to users") and matched inside "React Native", splicing the anchor
mid-phrase. `find_matches` now drops any hit strictly contained in a longer hit,
so longest-match wins by construction rather than by scoring luck.

## Non-negotiables the code enforces

- **Never re-serialize the HTML.** BeautifulSoup decodes `&nbsp;`, and
  `Post.save()` injects heading ids with a raw substring test, so a parser
  round-trip silently strips ids and takes the TOC with them. Offset splicing
  only. See [[zyneto-blog-api]].
- **Four invariants before shipping** (`apply_links.py`): visible text
  unchanged, exact anchor count, headings byte-identical, no nested anchors.
  `push_links.py` additionally compares the server-computed TOC before/after
  and asserts the post is still Active.
- **Never link to a non-Active post.** The public API hard-filters
  `status='Active'`, so linking a Scheduled post points live indexed pages at a
  404. `LIVE_ONLY_SKIP` is built from status automatically. The 9 scheduled
  pillars were excluded and need a second pass after Aug 26.

**7 posts still have zero inbound** and genuinely lack vocabulary to link from:
ai-memory, ai-physiotherapy-app-development, fastapi-vs-django,
how-best-to-scrape-data-from-linkedin, how-to-create-a-music-website,
what-is-the-best-browser, why-python-is-ideal-for-devops. The fix is editorial -
mention them in future posts - not mechanical.

**Every new post should ship with 8 to 15 contextual links already in place.**
Retrofitting is far more work than writing them in.

## MONTHLY AUDIT, from 2026-08-21. Run it before commissioning the next block

**`python3 tools/blog-visuals/link_audit.py`** on the first working day of each month, before the next thirty topics are chosen. It exits non-zero only for links that are broken now or **will break on their own publish date**, which is the one class that cannot wait. Full method and the first run in `Blog/reports/INTERNAL-LINK-AUDIT-2026-08-21.md`.

**THE TRAP THE FIRST RUN FOUND, and it had been running for four waves.** The deliverable format's **section 10, Internal Link Suggestions, is consumed by nothing**. `push_wave*.py` builds the published body from section 6 only. So **all 25 wave 1 to 4 posts reached the server with zero internal links**, while their section 10 listed the targets correctly the whole time. **Writing a specification nothing reads is worse than not writing it, because it looks done.** Check that a deliverable section is actually consumed before trusting that producing it changes anything.

**Two link classes, counted separately, because a post can look healthy on one and contribute nothing to the other.** Blog to blog builds topical authority. Blog to commercial passes it to pages that convert. On 2026-08-21 the Active library ran 5.79 blog-out and 1.87 commercial-out per post, and **0 of 17 industry pages had a single inbound blog link**.

**Density check against published practice: 2 to 5 internal links per 1,000 words.** Zyneto's Active mean is 3.02, median 3.04, so the library is in band on average. **The failure is concentrated in the long posts**, an 8,830 word post carrying two links, which is where the wasted surface is. Fix longest first.

**Scheduled posts are the cheap window.** Editing them is a direct save, no revision flow, no live page touched, and no cooling-off in play, because a post that has never published has no attribution baseline to protect. **Fix links before the publish date, not after.**

## 2026-08-21: the wave posts linked, and two lessons that generalise

**37 links applied across the 25 wave posts, industry page coverage 0 to 17 of 17.** Toolchain: `wave_link_map.py` holds the per-post phrase map, `apply_wave_links.py` splices and verifies, `link_audit.py` measures.

**I repeated the title-phrase mistake when writing the deliverables.** Section 10's target column was right and its **anchor column was title-shaped**, so 108 of 110 suggestions had no literal slot in the prose. Mined the anchors from each post's own body instead, which is the same inversion `mine_phrases.py` made in August. **Writing a link suggestion means writing a phrase that is already in the text, not the article's title.**

**Low topic collision means low linkability, and that is a real tension in the cadence design.** The wave topics were screened for zero collision against the 121 post library, which is correct for cannibalisation and directly reduces shared vocabulary. **The honest yield was 1.5 links per post, not the 8 to 15 target.** Forcing the count would mean inventing anchors, which is how the orphan rescue reached 47 per cent errors. Rows that existed only to hit a number were left out.

**Table cells now join headings and existing anchors in the blocked set.** A link on an hours-table row label is decoration rather than a contextual link, and "authorisation layer" matched one before the rule was added. Published practice puts the value in main-body prose.

**The review pass is not optional and it earned its keep twice**: it caught the table-cell placement, and it caught 15 posts publishing their SEO brief header as the opening paragraph, which no structural check was looking for.
