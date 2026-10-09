---
name: zyneto-content-backlog
description: "Future Zyneto blog ideas to draft next, including spin-offs from the enterprise RAG pillar"
metadata: 
  node_type: memory
  type: project
  originSessionId: 43b06a1f-d5ce-450b-86ff-03b16805d5eb
  modified: 2026-08-11T05:44:32.011Z
---

## OCTOBER IS COMMISSIONED, 2026-08-21. 14 NEW AND 8 REFRESHES, NOTHING DRAFTED

Plan in `Blog/plans/OCTOBER-2026-PLAN.md`. 22 weekdays, weekend publishing out. **Refreshes start 6 October**, the day the 60 day cooling-off expires.

**Refresh-led because the research said so, and this generalises.** Nine of the ten biggest weak queries already have a post and rank badly anyway. **Check whether a weak query has a page before commissioning a new one**, because the answer changes the work from writing to rewriting. Adding volume to a library with orphans and thin linking repeats the thin-content pattern rather than fixing it.

**Rank refreshes by headroom, not by missed clicks.** At position 47 the expected CTR is about 0.1 per cent, so missed clicks against expectation is noise and the entire upside is moving position. Use impressions above 1,500 with position worse than 12. **A page ranking well with zero clicks is a metadata fix and the cheapest win available.**

**Never refresh an "X vs Y" post to chase clicks.** AI Overviews trigger on 95.4 per cent of comparison queries. Four of them sit at position 14.5 to 27.8 and were left deliberately as citation and link sources. Same for trends content.

**Never touch a page above position 12.** `restapi-vs-fastapi` at 41,683 impressions and position 5.3 carries 42 per cent of blog clicks.

**Screen new topics against the REFRESH list too.** `ai-copilot-rollout-cost` was dropped for colliding with `how-much-does-ai-development-cost`, which is a refresh target; publishing an adjacent cost post while refreshing one is the FastAPI cannibalisation again.

## SEPTEMBER IS SCHEDULED AND CLOSED, 2026-08-21

**All 30 September days are `Scheduled` at 00:00 IST**, verified on the server: no gaps, no date with two posts, nothing left in `Review`. Waves 1 to 4 delivered it. **Nothing further is needed to publish September.**

**October is 31 days with zero topics commissioned**, and the standing rule is to commission a block of thirty a month ahead with `topic_collision.py` run before drafting. That makes commissioning October the next task, not writing.

**Two wave 4 lessons worth carrying into October.** Every compliance topic must narrow below a regulation its industry page **already names**, checked before the topic is chosen rather than after. And a geo pick needs the regional substance to exist in one of the 17 industry pages first: ONDC looked right for food service and was dropped because it appears in none of them, so a post would have claimed delivery the site cannot evidence.



**Wave 4 shipped end to end on 2026-08-21**: drafted, 60 images built, pushed and scheduled. Files in `Blog/wave4/`, scripts are the `*_wave4.py` set.

**The reshape rule that now has two waves of evidence behind it.** Every compliance topic must narrow below a regulation its industry page **already names**, and that has to be checked before the topic is chosen. Wave 3 lost `content-moderation-build-vs-buy` to this; wave 4 checked first and all six verticals cleared. **Geo picks get a harder test: grep all 17 industry pages for the regional substance first.** ONDC was dropped for food service on exactly that check, because it appears in none of them, and a post would have claimed delivery the site cannot evidence.

**Two mechanical checks that caught real defects and belong in every wave.** Resolve every non blog internal link against production, because `/services/devops-secops-solutions` is a 308 to `/services/ci-cd-consulting` and would have shipped as a wasted hop. And confirm every linked blog post publishes on or before the linking post's own date.

**Density is now the strongest lever and it is working.** Wave 4 sits at 1.77 to 3.84 numbers per 100 words against wave 3's best of 1.31, entirely from published hours tables, verified regulatory dates and worked arithmetic. See [[zyneto-content-agent-spec]] for why that band matters.

**Drafts consistently land 15 to 20 per cent short of the 2,400 floor on the first pass**, because the gate counts prose only and excludes tables, VISUAL markers and the section 7 FAQ. Write roughly 2,900 words of apparent length to clear 2,450 measured.

**October is 31 empty slots and nothing is commissioned.**

## THE BACKLOG IS NOW THE BOTTLENECK, 2026-08-20

**Cadence changed to 1 post per day from 2026-09-01** (see [[zyneto-seo-health-and-cadence]] and `Blog/plans/DAILY-CADENCE-PLAN.md`). Counted from the API that day: **September 30 slots, 5 filled, 25 empty; October 31 empty. 56 posts to 31 October.**

Undrafted ideas below: roughly **five**. NLP for business, RAG versus fine-tuning, vector databases for enterprise, agentic RAG, and extract data to Google Sheets (held until the Sep 5 checkpoint). **Five ideas against fifty-six slots**, so commissioning is now the gating task, not writing.

**SEPTEMBER IS NOW COMMISSIONED, 2026-08-20.** 25 topics chosen and screened, calendar in section 5 of `Blog/plans/DAILY-CADENCE-PLAN.md`, raw list in `Blog/data/september-2026-topics.txt`. **17 support a live industry page** (the strongest track: those 17 pages went live 19 Aug with zero supporting content on URLs renamed 5 days earlier, and **new posts can carry their industry link from birth** because the 60 day cooling-off only protects existing posts' baselines), **4 support an unsupported service page**, **4 complete the RAG cluster**. Screened with the new `tools/blog-visuals/topic_collision.py`: 25 clear, 1 spare (`enterprise-blockchain-use-cases`, 0.33 against `what-is-secops-use-cases`), 0 blocked. **The screen is lexical only and says so; each topic still needs a GSC query check before drafting.** Tracks are interleaved because 17 identical-shaped industry posts in a row read as a programmatic upload. Ramp is four waves, 5 by 31 Aug then 5, 5 and 8. **Nothing is drafted.**

**Commission in blocks of thirty, a month ahead, collision checked against the live library before drafting starts.** The library is 121 posts and cannibalisation has already cost this site once in the FastAPI cluster; a month whose topics are picked in the week they publish repeats the pattern that caused the May demotion. Ledger item 73 tracks it.

Running backlog of blog ideas for Zyneto (see [[zyneto-content-agent-spec]] for how to write them, [[content-delivery-workflow]] for the pipeline). Each should feed a service page and link back to related pillars.

## ECOMMERCE CLUSTER, 2026-08-11. WRITTEN, ILLUSTRATED AND PUSHED AS DRAFTS.

All four are **`Scheduled` at 00:00 IST on Sep 4 / 8 / 11 / 15**, verified on read-back, still 404 publicly until their dates. 28 images on the CDN (16 diagrams, 4 features, 8 CTA banners), 8 h2 each, 6 FAQs each, 4 inline internal links each, 0 dead TOC anchors. Nothing further is needed to publish them.

**Whole-pipeline cadence is 2 / 3 / 3 / 3 / 2 / 1 per week from Aug 10 to Sep 20**, no week over the rule. To cancel any one, set it back to `Review` before its date.

**One new tag created: `eCommerce`.** Everything else reuses the existing 53-row taxonomy.

Four posts closing the "zero ecommerce blog posts" gap behind `/solutions/ecommerce-app-development`. Full plan in `Blog/plans/ECOMMERCE-CLUSTER-PLAN.md`.

Scheduled **Sep 4 / Sep 8 / Sep 11 / Sep 15**, topologically sorted so no post ships with a dead sibling link: `ecommerce-replatforming` (no blog deps), `headless-commerce` (links post 1), `ecommerce-product-data-model` (links 1 and 2), `why-online-payments-fail` (links 1 and 3). Cadence checked at 3 / 2 / 1 per week.

**Two pipeline traps this batch exposed, both worth carrying forward.** First, the deliverable format reserves `##` for its twelve brief sections, so article headings are `###`. Passed straight through the converter that yields `<h3>` and **zero h2, which means an empty table of contents**; `####` matches nothing and becomes a paragraph. Promote one level before converting, with a negative lookahead so the two levels do not collapse. Second, **`footnote()` in `diagram_kit.py` never wrapped** until this batch, so any caption over ~115 characters was cropped mid-word with no error; 13 of 16 were over. Both were invisible until someone looked at the output rather than the exit code.

**The lesson worth keeping from topic selection:** GSC returned 8,192 ecommerce impressions across 102 queries and **zero informational ones**. That is not evidence of no demand. GSC only reports queries you already appear for, so with no content you cannot appear for an informational query, and the absence is the symptom. **Do not use a GSC export to pick topics for a cluster that does not exist yet**; it will only ever hand back the commercial terms already being lost. Topics came from the buyer journey instead.

**Cadence debt: 4 refreshes owed from Oct 6.** The 3-new-for-3-fixed rule cannot be met in September, because internal links applied 2026-08-06 carry a 60 day cooling-off that locks all 111 live posts until 2026-10-05.

## BATCH 3, agreed 2026-08-05. Draft in this order.

**Tier 1 - a service page has demand and no supporting blog:**
1. Multimodal AI for business → `multimodal-ai-development-company` (1,314 impr,
   **position 11.8** - the best position of any unsupported page, so support
   could push it top-10)
2. AI document management systems → `ai-document-management-system` (1,851 impr,
   position 38.7). **Must be sharply differentiated from chat-with-your-documents**:
   DMS is storage, classification and workflow; the pillar is Q&A over documents.
3. NLP for business → `nlp-development` (203 impr, position 12.8)

**Tier 2 - completes the RAG cluster, zero overlap with anything live:**
4. RAG vs fine-tuning: a decision guide (the first question enterprise buyers ask)
5. Securing enterprise AI: permissions, PII, on-prem/VPC (the top objection;
   feeds every AI service page)
6. Vector databases explained for enterprise
7. Agentic RAG: when the assistant should act (bridges the agents and
   chat-with-documents pillars)

**Parked, deliberately:** *Next.js development guide* - 7,075 impressions at
position 19.9 is the single biggest gap, but it is a developer audience, not the
enterprise decision-maker ICP. *Extract data to Google Sheets* - held until the
Sep 5 checkpoint, because the Excel post is being rewritten Aug 13 and both
target "scrape to spreadsheet"; shipping both now would repeat the FastAPI
cannibalization.

**NOT a new post: refresh `best-practices-in-fastapi-architecture` via a
revision.** 40,059 impressions at position 10.4, the second-biggest asset on the
site. Moving it into the top 5 beats most new posts.

**DEAD - do not draft, already covered:** *AI memory* (`ai-memory` is live) and
*knowledge graphs deep-dive* (`knowledge-graphs-for-business` publishes Aug 14).
Both were on the old backlog; check coverage before drafting anything from an
old list.

**Other unsupported service pages, for future reference:** ci-cd-consulting
(2,633 impr, pos 16.0), pos-software-development (1,672, 21.5),
smart-contract-development-services (222, 19.3), web-development (168, 10.2),
blockchain-development (59, 8.5).

**Batch 2 is fully shipped** - AI chatbots, generative AI, web scraping, BPA and
predictive analytics are all scheduled Aug 14-26; FastAPI vs Flask was
consolidated into `flask-vs-fastapi` rather than published.

**Parked (do later, after new blogs):** Expanding the earlier ~2,000-word blogs up to the new detailed 2,500-3,000 length. Still to expand: chat-with-your-documents (RAG, ~2,006) and the team-held cluster pieces (workflow, copilots, agents) if the user wants. User chose "write new blogs first" on 2026-08-04. AI Chatbots and Generative AI are already at detailed length.

**Enterprise angle:** Zyneto's ICP is enterprise decision-makers; AI, automation, and data topics convert best. Prefer those clusters.

## Live queue as of 2026-08-05

1. **Sep 5** - audit checkpoint 1 (metadata effects). **Oct 6** - checkpoint 2
   (position recovery, new posts). Baselines in `Blog/MEASUREMENT-PLAN.md`.
2. **Draft the next batch before Aug 26**, when the pipeline runs dry: the RAG
   spin-offs below plus "Extract data to Google Sheets".
3. **Deferred by the user:** the TOC `level` fix (7 of 9 anchors break on posts
   with h3s - navigation only, not SEO) and the 249 dead anchors it would also
   clear. Also deferred: the 34 over-length titles / 32 descriptions, which were
   deliberately dropped as a sweep because that impression volume is not human.

## DONE 2026-08-05: site-wide CTR audit (see [[zyneto-seo-health-and-cadence]])

Run the same diagnosis that found the `restapi-vs-fastapi` problem across **all 100 live posts**. Pull GSC page-level data for 90 days, compute CTR against expected CTR for each page's average position, and rank by *missed clicks* (impressions x expected CTR minus actual clicks) rather than by CTR alone, so high-impression pages surface first. For each outlier, check the two causes already confirmed on that post: **meta title over 60 characters** (Google truncates it) and **a description that does not answer the phrasing of the top queries**. Deliver a ranked list with a proposed title and description per page. Fixes ship as metadata-only revisions, which are cheap, reversible, and measurable in 3 to 4 weeks. Context and the baseline numbers are in [[zyneto-seo-health-and-cadence]].

## SCHEDULED 2026-08-05: nine posts, Aug 7 to Aug 26

Full detail in `Blog/PUBLISH-SCHEDULE.md`. All nine are `Scheduled` on production
and still 404 publicly. Order is a **topological sort of the internal link graph**,
not editorial preference: chat-with-your-documents (Aug 7), ai-agents (10),
ai-copilots (12), knowledge-graphs (14), ai-chatbots (17), business-process-automation
(19), generative-ai (21), predictive-analytics (24), web-scraping (26). Weekly load
1/3/3/2. Verified every internal link resolves on its own publish day.

The ai-agents <-> ai-copilots cycle is handled by pointing ai-agents' copilot link
at `/services/ai-copilot-development-company` and staging **revision 4** to restore
the real blog link on Aug 13. **Revision 3** (extract-data rewrite) also applies Aug 13.

**Scheduling gotcha worth remembering:** the publish cron is `0 0 * * *` and takes
`scheduled_publish_date <= now`, so a post set for 09:00 is NOT due at that morning's
run and goes live a full day late. Always schedule **00:00 on the intended date**.

## All 12 hero images replaced 2026-08-05 (legibility sweep)

Both batches. The originals were designed at 1200px but render in a 2/5 column at
~500px, so title type was 7.5px and subtext 5.4px. Re-rendered across all ten
feature archetypes and re-uploaded as `<slug>-hero-v2.png`; all 12 posts point at
v2, verified. `ai-memory` was the only Active one, so that change is public
(reversible with one PATCH - old paths are in `Blog/replaced-heroes.json`).
**12 old hero files are orphaned on the CDN**; remove with
`python manage.py prune_blog_media --paths-from Blog/replaced-heroes.json --delete`.
Details in [[blog-image-pipeline]].

## Batch-1: PUSHED to the server 2026-08-05, awaiting scheduling

Full record in `Blog/PUSH-STATUS.md`. 25 images on the CDN; `ai-agents-for-business`,
`ai-copilots-for-business` and `chat-with-your-documents` are **Review**, and the
extract-data rewrite is **revision id 3 (Draft)** against the live
`best-methods-to-scrape-page-information-and-add-it-to-excel`, which is untouched
and still Active. 0 dead TOC anchors, 0 new tags created, preview links verified
working in production.

**Blocking decision before scheduling:** the two pillars link to each other, so
whichever publishes first has a dead link. Agreed fix is to publish ai-agents with
its copilot link temporarily pointed at `/services/ai-copilot-development-company`,
then restore it with a one-line revision once ai-copilots is live. The 7 batch-2
drafts are still ahead of these in the queue.

## Batch-1 deliverables in /Blog: audited 2026-08-05

Full findings in `Blog/AUDIT-GAP-REPORT.md`. **5 files remain, none published.** `ai-workflow-automation-pillar.md` was deleted — already shipped as the live `/services/ai-workflow-automation-services` page (3,148 words), and service pages render from code, not the CMS, so it was never a blog deliverable.

Prose rules held (0 banned phrases, 0 em dashes, 14/16 internal links resolve). The gaps are structural, because all 5 predate the 2026-08-04 spec:
- **No image or diagram briefs (§12) in any of them, zero `[VISUAL]` markers.** Roughly 10-25 diagrams + 5 feature images + 10 CTA banners still to produce.
- **No CTA banner copy (§8) in 4 of 5**; their §8/9/10 are the current §9/10/11 shifted up.
- **FAQ duplicated inside the article body in 4 of 5** — direct spec violation and duplicate Q&A on the page.
- All run **1,815 to 1,924 words** against the 2,500-3,000 target (~3,900 words short in total) and **12-13 h2** against the 6-10 target, with three files using no h3 at all.

**P0, do not publish as written:** `fastapi-vs-rest-api-refresh` is **1,842 words but the live `restapi-vs-fastapi` it replaces is 2,891** — shipping it would strip a third of a ranking page on a site recovering from a thin-content demotion. Both refresh pieces target Active posts, so they must go through [[zyneto-blog-api]]'s revision flow, never a direct save. And `restapi-vs-fastapi` + `flask-vs-fastapi` (both live) + the `fastapi-vs-flask` draft in Review mean the FastAPI consolidation has to be decided before any of them ships.

Suggested order: settle the FastAPI consolidation, then upgrade the three clean pillars (ai-agents, ai-copilots, chat-with-your-documents), then `extract-data` (safest refresh: 1,525 live to 1,815), then the FastAPI refresh last and only once it exceeds the live version.
