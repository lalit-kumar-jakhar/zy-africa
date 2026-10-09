---
name: zyneto-seo-health-and-cadence
description: "Zyneto's 2026 organic decline (May core update), the thin-content problem behind it, and the agreed publishing cadence"
metadata: 
  node_type: memory
  type: project
  originSessionId: 1e1d8480-b63a-4d83-9784-b1e9bb6a3e64
  modified: 2026-08-05T17:38:11.119Z
---

**Situation as of 2026-08-05.** zyneto.com is in an algorithmic decline, not a penalty. Search Console **Security & Manual Actions shows no manual action** (user confirmed), so there is nothing to appeal; recovery is through quality signals only.

**The decline.** Impressions fell from a 306,283 peak in May 2026 to 79,459 in July (-74%); average position 8.6 to 19.6; GA4 organic sessions 272 in March to 86 in June, 116 in July. Shape is a steady twelve-week slide starting the week of **2026-05-11**, not a cliff, and nothing was deindexed (ranking pages actually rose 186 to 247). Correlates with the **May 2026 core update (May 21 to June 2)**; the worst single week (-34%) was the week of June 8. The June 24-26 spam update barely registered.

**Cause is the pre-existing library, NOT any content I produced.** Our first post went live 2026-08-04, twelve weeks after the slide began. The pages that collapsed are old ones: `best-practices-in-fastapi-architecture` -96%, `cost-to-hire-a-reactjs-developer` -97%, `python-api-development-with-fastapi` -98%, `mobile-app-development-guide` -100% (position 6.4 to 67.1). Of 100 published posts, **19 are "app clone / cost to build" pieces**, 12 music-app, 8 restaurant, 6 dating: roughly 40% of the site is templated near-duplicate content about building Tinder and Spotify clones, which is off-topic for an AI enterprise automation company. Add a 0.2% CTR at position 5 across 300k impressions (Google showed the pages, users did not want them) and it is the standard core-update demotion profile.

**CADENCE CHANGED 2026-08-20 by the user: 1 post per day, every day including weekends, from 1 September 2026.** This supersedes the 2 to 3 per week rule below. Full plan, calendar and load figures in `Blog/plans/DAILY-CADENCE-PLAN.md`; recorded as a dated event in `Blog/data/seo-history.json` so later comparisons anchor to 1 September.

What it means in numbers, counted from the API on 2026-08-20: **September has 30 slots, 5 already scheduled, 25 empty; October has 31, all empty. 56 posts to 31 October and none drafted**, against roughly five named ideas in [[zyneto-content-backlog]]. **Topic supply is what breaks first, not writing speed**, because condition 2 below is checked against a library that is already 121 posts. Commission topics a month ahead in blocks of thirty, collision checked before drafting.

Three rules change: weekdays only is dropped, staggering becomes automatic, and the 3-new-for-3-fixed pairing ratio is suspended for September (it would demand 30 refreshes a month, and all 111 live posts are locked by the 60 day cooling off until 2026-10-05 anyway; proposed replacement is a flat 8 refreshes a month from 6 October). **Depth does not change. If a post cannot reach 2,500 to 3,000 words with original diagrams, skip the day.** An empty slot costs nothing; a thin post costs the recovery. Load at current standards is about 75,000 to 90,000 words and 210 images a month, six times the current run rate.

**Kill switch: the monthly monitoring rule below is now load bearing.** First real read on the daily cohort is **6 November 2026**, thirty days after the last September post. Silent posts mean cut back and spend the capacity on cleanup instead.

**TWO STREAMS PUBLISH TO THIS BLOG, found 2026-08-20 while measuring the existing frequency.** **100 of 107 Active posts have no `scheduled_publish_date`**: created and published in the same minute, direct in the CMS, outside our pipeline. **17 since 1 June**, weekday evenings 16:28 to 18:45 IST, about 2 a week in Jun and Jul, 1 in Aug. Topics are dating, restaurant, music, fantasy sports and clone apps, which is **the exact class blamed for the May demotion**. So the 6-to-9-a-month figure in every earlier plan was mostly that stream, not ours (our first post was 5 Aug), and **the two cadence rules were never measuring the same thing**. All 17 carry zero tags and 8 to 42 dead TOC anchors each, which is where the 249 dead anchors keep coming from. **DECIDED 2026-08-20 by the user: the daily count runs site-wide and that stream stops.** September therefore ships 25 commissioned posts plus the 5 already scheduled and nothing else. **This is not enforceable in code** and no pipeline change prevents direct Django admin publishing, so the check is a monthly re-run of the `scheduled_publish_date is null` count to see whether it grew. The 17 posts that stream already published stay live; consolidating them is the separate open cleanup item. Ledger item 74. **Always measure the API before quoting a cadence figure from a plan file.**

**Superseded, kept because the four conditions still apply: agreed cadence was 2 to 3 posts per week**, up from the historical 6 to 9 per month. Google has no cadence threshold, so volume itself is not the risk; scaled content abuse turns on intent and value. Four conditions the user accepted:

1. **Depth is non-negotiable** (2,500 to 3,000 words, original diagrams, real research per [[zyneto-content-agent-spec]]). If a post cannot meet it, publish 2 that week instead of 3. Slipping here rebuilds the exact pattern that caused the decline.
2. **One topic per post**, checked against published posts first, to avoid cannibalization. The backlog clusters tightly (RAG, knowledge graphs, AI memory, AI agents) so overlap is a live risk; `fastapi vs rest api` already splits across pages.
3. **Pair new with old:** for every 3 published, fix or consolidate 3 existing. Cleanup is where recovery actually comes from, ahead of new volume.
4. **Stagger releases.** Do not push a batch of drafts live on the same day.

**Monitoring rule:** each month, check whether posts published 30+ days ago are earning impressions. Climbing means the cadence is fine and can increase; publishing into silence means stop adding and fix instead. This beats any fixed rule of thumb.

**CTR is a bigger lever than rankings on this site (found 2026-08-05).** `restapi-vs-fastapi` holds **position 5.55 on 71,770 impressions but converts at 0.43%**, roughly ten times below expectation for that position. Its meta title was 65 characters so Google truncated it, and the description led with features while the top queries were all "what is the difference between fast api and rest api" phrasings. Same pattern as the 0.2% CTR at position 5 recorded above for the wider library. **Before rewriting any page for depth, check whether it is being shown and not clicked.** A metadata-only revision is far cheaper than a rewrite and the effect is measurable in 3 to 4 weeks. Revision #2 on that post is the clean experiment: body byte-identical, snippet changed.

**FastAPI cluster consolidated 2026-08-05.** Four competing assets reduced to two live pages with distinct query sets: `restapi-vs-fastapi` (owns "fastapi vs rest api", "what is fastapi", "fastapi" at position 2.1 to 2.5) and `flask-vs-fastapi` (owns the Flask comparison, refreshed from the `fastapi-vs-flask` draft, +188 words). The `fastapi-vs-flask` draft was set **Inactive** rather than published, because a third URL on the Flask-versus-FastAPI query would repeat the cannibalization pattern. `fastapi-vs-rest-api-refresh.md` was dropped as a publishing target: at 1,842 words it would have cut a third off the site's best FastAPI page. Full record in `Blog/FASTAPI-CONSOLIDATION.md`.

## MEASUREMENT PLAN - read this before any future SEO audit

`Blog/MEASUREMENT-PLAN.md` holds the change log and the **pre-change baselines**
captured 2026-08-05. Do not run a re-audit without it; the numbers are the only
comparison point.

**Two checkpoints scheduled:**
- **2026-09-05** - metadata effects. The 12 changed pages had a baseline of
  **0 clicks on 4,733 impressions** (28 days), so any clicks are a win.
- **2026-10-06** - main read: position recovery, the 9 new posts, GA4 organic.

**Standing rule: judge recovery on POSITION and IMPRESSIONS, not CTR.** CTR here
is distorted by automated traffic. Jul 2026 baseline: 323 clicks, 79,459
impressions, avg position **19.6** (was 8.6 in April). GA4 90-day baseline:
organic 349 sessions / 282 users.

**Useful cross-check:** GSC reported 304 clicks for `restapi-vs-fastapi` while
GA4 reported **75 sessions** - only ~25% of clicks become sessions. Track that
ratio; if it rises, the traffic is getting more human.

## Site-wide CTR audit, run 2026-08-05 (full report: `Blog/CTR-AUDIT.md`)

**The May loss is a RANKING collapse, not a CTR collapse.** Monthly CTR has been
flat at ~0.2% since February (0.206 / 0.193 / 0.198 / 0.183 / 0.237 / 0.406).
What moved is average position 8.6 -> 19.6 and impressions 296k -> 79k. So the
thin-content remediation is aimed correctly; metadata work is a separate cheaper
lever and will NOT recover the May loss on its own. Do not conflate the two.

**Two traps when re-running this audit:**
1. **GSC reports `#contentid-N` TOC anchors as separate pages.** 116 of 225 blog
   rows were fragments carrying 107,142 impressions and **1 click**, across 21
   articles; `restapi-vs-fastapi` splits into seven rows. Always merge on
   `url.split("#")[0]` and discount impressions by the fragment count, or one
   article appears six times with a ~5x inflated shortfall.
2. **Do not derive expected CTR from Zyneto's own curve.** Its median CTR is
   **0.00% at every position from 4 to 11**, so a self-calibrated baseline
   declares the whole site healthy. Use an external curve.

**It is not tracking and not relevance.** Brand queries convert at 34.99%
(190/543). Non-brand runs 0.767%.

**MUCH OF THE LOW CTR IS NON-HUMAN TRAFFIC, not bad titles** (confirmed via the
Search Appearance check, 2026-08-05). GSC Search Appearance returns only
`TRANSLATED_RESULT` (1,478 impr) - **AI Overviews are not broken out in GSC at
all**, so that hypothesis is unverifiable there and should not be leaned on. The
real signal is geography and device: **USA 281,862 impressions (57%) at 0.060%
CTR vs India 55,318 at 1.11%** (18x), and **desktop 432,300 (89%) at 0.186% vs
mobile 49,748 at 0.706%** (3.8x). ~90% of impressions sit beyond the top 120
queries, and that tail is boolean strings (`"secops" "cyberpark" "2025" "cio" or
"sciencedirect"...` = 1,674 impressions, 0 clicks), quoted random tokens
(`"0sovcwfmrta" fastapi`), LLM benchmark phrases (`"as of january 31st, 2025" ai
benchmark`) and verbose machine-phrased questions. **Human CTR is really ~0.7 to
1.1%** (India / mobile), not 0.137%.

**So do NOT run the 34 titles + 32 descriptions as a bulk sweep** - most of the
impressions it would target are not human. Fix them opportunistically when a post
is revised anyway.

**The biggest genuine opportunity is not in the blog:**
`/solutions/music-streaming-app-development-company` ranks **position 3.26 in the
US on 6,249 impressions with 12 clicks (0.19%)**. High-intent commercial query,
top-three, almost no clicks. Check the SERP (directories, ads above the fold)
before blaming the page.

**Fixable metadata across the 100 live posts:** 34 titles over 60 chars, 32
descriptions over 160, 12 titles carrying a stale year, 0 missing descriptions.
21 pages have 1,000+ impressions and zero clicks. All ship as metadata-only
revisions.

**The 12 stale-year titles are DONE** - revisions 5 to 16, staged 2026-08-05,
all applying **2026-08-08** so the measurement has one clean boundary. Verified
metadata-only (body byte-identical on all 12). **Drop the year, never bump it to
2026:** year-bearing queries here are near-zero-click long-tail (one click across
every 2025/2026 query in 90 days), so a year buys nothing and costs an annual
rewrite. Where the H1 also carried the year it was changed too (9 of 12),
otherwise the page still says 2025 after the click. Tool:
`tools/blog-visuals/fix_stale_titles.py`. **Still open: 34 over-length titles and
32 over-length descriptions**, highest-impression first.

**Open cleanup items:** 44 of 100 published posts have dead table-of-contents anchors (249 total), fixable by a plain re-save (see [[zyneto-blog-api]]); and the clone-app cluster should be merged into a few genuine pillars with the rest redirected.

Data access for re-checking any of this: [[zyneto-analytics-connections]].


## The music cluster is a CTR problem, not a cannibalisation one (measured 2026-08-10)

48,363 impressions across 12 URLs for 25 clicks looks like cannibalisation and is not. **31% of it is one query**, "audio/music app development", position 5.79, **zero clicks in 99 days**, which is not human behaviour. A large further share is consumer intent (`top-music-app-features` ranks 1 to 2 for "best music app" and "alternatives to spotify") that will never hire an agency. **Genuine multi-URL cannibalisation is 194 impressions, 0.4%.**

**The commercial opportunity is one page**: `/solutions/music-streaming-app-development-company` at **position 2.48 on 6,997 impressions for 13 clicks**. Metadata rewritten 2026-08-10 to lead with the published rate. Baseline is in the ledger; judge on CTR at the Nov 5 checkpoint. **Do not consolidate or redirect the cluster** without re-reading this; it risks the best ranking page to chase 0.4%.

## Solutions page snippets, all six rewritten 2026-08-10

Pattern: `<exact head term> | $40 to $100/hr`, description opening **"$40 to $100 per hour, published, and no quote before discovery."** Replaced six titles ending in interchangeable filler and six descriptions closing on "Get a free quote from Zyneto". **Keep the exact ranking head term in the title** when doing this; it is what earns the position.

**CTR is only the lever where the page is actually seen.** Four of the six sit at position 18 to 26, where CTR is near zero regardless of snippet, so for ecommerce, fantasy, restaurant and dating the real lever is ranking. Only **classified at 9.7** and **music at 5.9** can move on a snippet change. Baselines are in the ledger; judge on CTR at Nov 5, and remember there is **no control group** because all six changed at once.

## WEEKDAYS ONLY, from 2026-08-21. The cadence is 1.36 per weekday, not 1 per day

**September publishes on 22 weekdays, never at weekends**, after the cadence audit found **zero weekend posts in 80 sampled appinventiv articles and 46 netguru ones**. Every Monday and Friday carries two posts, the rest carry one.

**The arithmetic is forced and gets forgotten: 30 posts into 22 weekdays means 8 days must double.** Any month planned at "one a day" has this problem the moment weekends come out. Decide up front whether the overflow doubles up or slips into the next month; October was left clear deliberately rather than starting it a third full.

**Doubling Monday and Friday matches the benchmark rather than fighting it**: Friday is appinventiv's heaviest day, Monday is netguru's.

**Both posts on a doubled day must be stamped 00:00 IST exactly.** The publish cron is `0 0 * * *` taking `scheduled_publish_date <= now`, so a second post timed even one minute later waits a full day and the pair silently splits across two dates. See [[zyneto-competitor-benchmark]] for the audit.
