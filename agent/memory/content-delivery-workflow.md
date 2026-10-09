---
name: content-delivery-workflow
description: Where to save finished Zyneto articles and the mandatory plagiarism check before delivering
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 43b06a1f-d5ce-450b-86ff-03b16805d5eb
  modified: 2026-08-24T00:00:00.000Z
---

Two required steps when producing any Zyneto article (see [[zyneto-content-agent-spec]]).

**Save location:** Always save the final article to **`Blog/` at the workspace root**, the directory that also holds `zyneto-frontend` and `zyneto-backend`. Create the folder if it does not exist. **Do not hardcode the absolute path.** It was `/Library/WebServer/Documents/Projects/Zy/Blog` on the machine this was captured from and it is not that everywhere; since 2026-08-24 the toolchain resolves the root itself through `tools/blog-visuals/zy_paths.py`, which walks up to the directory containing `zyneto-frontend/` and honours a `ZY_ROOT` override. `python3 -c "import zy_paths; print(zy_paths.ZY_ROOT)"` prints where that lands. See `agent/SETUP.md`. This is the canonical home for finished blog deliverables (separate from the scratchpad, which is only for drafts).

**The API is the source of truth for section 6; the markdown is the source of truth for everything else.** Settled 2026-08-24, closing the question item 53 left open. Internal links, CTA variation and the specificity pass were all applied server side and never came back to disk, so a local body can sit a few hundred words behind what is live. **Never regenerate a published post from its markdown**, which would revert that work; sync the other way with `tools/blog-visuals/sync_body_from_api.py --check <slug>` and then `--go`. It replaces the prose of section 6 only, keeps the SEO brief and every other section, writes a `.bak`, and **aborts rather than guessing** when section 6 has no `---` separating brief from prose.

**Once a post is pushed to the API, strip §6 from its local `.md`** (user instruction, 2026-08-05). The article body is then redundant on disk: the server's `description` field is the live source of truth, readable at `GET /api/v1/manage/posts/<slug>/`. Keep the rest of the file — §1-5 (SEO brief, keyword strategy, search intent, competitor gap analysis, outline) and §10-12 (internal links, external refs, image briefs) exist **nowhere but locally**, and `Blog/` is not a git repo, so deleting the whole file destroys the strategy work behind the piece. Same reasoning for rendered artefacts: `Blog/html/`, `Blog/images/` and `Blog/blog-visuals/` are safe to delete once verified on `cdn.zyneto.com`, because the uploaded copy is byte-identical (upload the @2x master; the 1x web copies are never uploaded). Verify before deleting rather than assuming: filenames change on upload (feature `-feature.png` becomes `-hero.png`, and a repeat upload picks up a Django dedupe suffix like `_Dljc57R`).

**Sentence selection is now a tool, added 2026-08-11: `tools/blog-visuals/plagiarism_probes.py`.** Do not pick probe sentences by hand any more.

```bash
python3 plagiarism_probes.py --slug ai-memory              # live CMS body
python3 plagiarism_probes.py Blog/draft.md                 # blog markdown
python3 plagiarism_probes.py src/data/industries/x.ts      # page copy
```

It splits the piece into sections, takes the strongest probe from each, and prints quoted search strings. **It rejects the three kinds of sentence that look distinctive and are useless as probes:** anything naming Zyneto or a client (derived at runtime from `portfolio.ts`, `testimonials.ts` and the industry data, currently 27 names, so it cannot go stale), our own arithmetic and figures, and vendor or standard lists. Also drops definitional openers, questions, anything under 10 or over 26 words, and sentences over 30 percent proper nouns. Filter behaviour is unit-tested inside the file's own test block, 6/6.

Yield is proportionate to prose volume: a 2,700-word post gives 12 probes, a 900-word index page gives 3 to 4 and says so rather than padding. **The search still has to be run by hand** because there is no Copyscape or Originality key; the tool removes the sampling guesswork, not the searching.

**Plagiarism check before delivering:** Before handing over any article, check it for plagiarism against other websites. Practically: take one distinctive, verbatim sentence from EACH major section of the draft (roughly 8-12 sentences per article, per the user's 2026-08-04 request to sample more), skipping standard definitions and common phrasing that would false-positive, and search the web (WebSearch, quoted) to confirm they do not appear on other sites. Report the result. Only deliver after the check passes. This is still a spot-check with exact-string matching, not a full similarity scan, so say so and suggest a dedicated tool (Copyscape / Originality.ai) for a hard guarantee before publishing.

**Channel (only blogs go via CMS):** Article deliverables are published as blogs through the CMS (backend-driven `/blog/<slug>` routes the user updates manually). So every article's target URL is a blog URL, and the Complete Article header shows it as `## 6. Complete Article (URL: blog/<slug>)`. Everything else on the site — service pages, solution pages, components — is handled in code (`services-list.tsx`, `solutions-list.tsx`, React components), NOT the CMS. Route each change accordingly: article/blog content = CMS draft for the user; meta, page copy, structure = code edits.

**AI-detection check (required):** The user runs finished content through an AI-content detector and requires it under ~15% AI. Every article must be written to read human, using the humanization technique in [[zyneto-content-agent-spec]]. I cannot run the detector, so say the user must verify, and iterate on any passages their tool highlights. Also: every blog now needs copy for 2 CTA image banners (see the spec's output order).

**Why:** The user stated the save/plagiarism rules on 2026-08-04. They publish manually and want a single stable location for finished pieces plus assurance the content is original before it goes live.

**How to apply:** Finalize and self-audit the article, run the plagiarism spot-check, save the final file into the Blog folder, then deliver. Respect [[git-hands-off-preference]] (do not commit these files).

## Content ledger and disk hygiene (added 2026-08-06, user's request)

**`Blog/LEDGER.md` + `tools/blog-visuals/ledger.py` is now the record of every
change to every post** - what, when, why, and the Search Console baseline it
should be judged against. Built because without it each batch re-argues which
pages to refresh from scratch, and a page can get rewritten twice in a quarter
with nobody able to say whether the first rewrite worked.

```bash
python3 ledger.py check <slug>   # may I touch this page? exits 1 if not
python3 ledger.py due            # changes ready to be judged
python3 ledger.py backfill       # rebuild from the API, idempotent
```

**Cooling-off is enforced, not remembered:** 90 days for a content change, 60
for internal links, 30 for metadata or a hero swap. Changing a page twice inside
one window makes both changes unmeasurable. **`check` immediately caught my own
batch-4 plan being wrong** - it had refreshes starting mid-September, but every
live post got links on Aug 6, so all 111 are locked until Oct 5. Batch 4's three
NEW posts can start mid-Sep; its five REFRESHES wait for Oct 6.

**A change with no recorded baseline is indistinguishable from doing nothing.**
Baselines live in `Blog/data/gsc-baseline-2026-08-06.tsv` and are deliberately a
frozen file, not a live query - a baseline that moves is not a baseline.

**Disk: `cleanup.py` (dry-run default) took the workspace 19.5MB -> 1.3MB.**
Three categories, and the distinction is what makes it safe:
- REGENERABLE, delete: cached bodies, link proposals, phrase candidates, preview
  contact sheets, and rendered PNGs **only when an upload manifest proves the
  CDN copy exists**. A render that was never uploaded is never touched.
- ARCHIVE: **once a post reaches the CMS its draft is compressed into
  `Blog/archive/shipped-drafts-YYYY-MM.tar.gz` and the loose file deleted.** The
  body is in the CMS, but sections 1-5 and 8-12 (keyword strategy, competitor
  gap, CTA copy, image briefs) exist nowhere else, so archive rather than delete.
- KEEP: upload manifests, revision push logs (rollback ids), measurement
  baselines, the ledger, reports and plans. Plus `unsplash_credits.json`, which
  is the photographer attribution record and a **licence obligation** - it was
  living in /tmp where the OS would eventually have deleted it.

Also noted: `push_links.py` created a duplicate revision on the first post
because `--limit 1` and then `--go` both processed it. Harmless (the second
apply was idempotent, content verified correct) but it should skip a post whose
live body already matches the target.
