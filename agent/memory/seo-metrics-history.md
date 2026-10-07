---
name: seo-metrics-history
description: Anchor every SEO before/after to a dated go-live event using Blog/data/seo-history.json; arbitrary windows produced a wrong headline once
metadata:
  type: project
---

**Always anchor an SEO comparison to a dated change event. Never pick round windows.** On 2026-08-19 I compared two arbitrary 28-day windows and reported CTR **up 25.5%**. Anchored to the real go-live date it was **down 14.6%**. The "gain" was 07-29 to 08-05, a strong stretch that fell *before* the change but *inside* my after-window. The user caught it, not me.

**The store:** `Blog/data/seo-history.json`, driven by `tools/blog-visuals/seo_history.py`.
- `compare --anchor <date> --days N --source gsc|ga4` — **aborts on unequal windows** and prints every other live event inside the range, labelling the result CONFOUNDED.
- `record --source gsc|ga4 --captured <date>` reads a payload on **stdin**, because the Composio GSC/GA4 tools are MCP and unreachable from Python. Pull with [[zyneto-analytics-connections]], pipe in the result.
- `event --date --label --scope --source [--went-live]`.

**`wentLive` is the load-bearing field.** Blog work is live and dated; the industry pages are not. All the 2026-08-13/14 industry entries are `wentLive: false`, so they are structurally excluded from attribution. If a future read appears to show Phase 0 or the URL renames working, it is measuring something else.

**Go-live dates come from `Blog/data/content-ledger.json`**, which already held 138 dated events nobody was using as anchors. The dominant one is **2026-08-06, internal links on 109 posts**.

**Two data traps found:** GA4 omits zero-traffic dates, so a daily series has holes — the tool zero-fills interior gaps and *says how many*. And GSC daily impressions carry spikes (08-05 was 5,518 against a ~2,400 norm) big enough to swing a short window on their own; check for them before trusting an 11-day read.

See [[zyneto-analytics-connections]], [[zyneto-seo-health-and-cadence]], [[zyneto-sitemap-and-ledgers]].

## Falling impressions at a FLAT position means lost queries, not lost rank. 2026-08-21

`uxui-design-in-2025` held position **9.3 while impressions halved** between May and June, then collapsed to 31.8 by August, 94 per cent down. The query sets explain it: in May it matched long conversational questions at positions 5 to 12; by August that entire class was gone and only short head terms remained, at positions 48 to 85.

**So separate the two failure modes before prescribing a fix.** Position worsening at steady impressions is a ranking problem and a refresh may help. **Impressions falling at a steady position is a query-mix problem, and a refresh cannot recover a query class that has migrated to AI Overviews.** That post is a citation asset now, not a refresh candidate.

**Method that surfaced it, and the one that hid it.** A 90 day average against a 10 day window said "declining" and implied recency. Four consecutive 28 day windows plus a query-level before and after said "collapsing since May, and for a reason a rewrite does not address". **Always pull the daily series before acting on a two-window comparison**, because the older window may already be depressed.

## The test that tells a refresh candidate from a lost query class. 2026-08-21

For any declining page, pull its query set for a good month and a recent month and compare **overlap and mean words per query**:

- **Near zero overlap plus words per query falling from ~6 to ~3.5** means the long conversational queries migrated to AI Overviews. **A refresh cannot recover this.** The page is a citation asset.
- **High overlap at steady query length with worse positions** means a genuine ranking loss on live demand. **This is what a refresh fixes.**

Applied to the eight declining Zyneto posts, only **two qualified**: `best-methods-to-scrape` kept 32 of 40 queries and slipped 16.7 to 20.3, and `best-practices-in-fastapi-architecture` kept its queries and went 9.9 to 15.9, which matters because it is the site's second biggest asset. `uxui-design-in-2025` and `top-ai-use-cases` kept 2 of 40 and are not recoverable by rewriting. `top-ai-trends` and `how-much-does-ai-development-cost` were head-term pages that never ranked well.

**Bound the claim: a row limit truncates the tail, so "kept" is understated.** A 2 of 40 against 32 of 40 gap survives that; a 14 against 19 does not.
