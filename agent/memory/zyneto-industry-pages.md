---
name: zyneto-industry-pages
description: "Industry pages: all 17 built, the 24-section standard and its audit contract, the anti-thin rule, the $40-100 rate, and the facts the repo does not contain"
metadata: 
  node_type: memory
  type: project
  originSessionId: a970eefc-dce7-4d92-a05e-542380469858
  modified: 2026-08-14T13:51:07.738Z
---

Plan agreed 2026-08-06 for Zyneto vertical landing pages under `/industries/`. Build rules and content gates come from [[zyneto-content-agent-spec]]; the competitor evidence is in [[zyneto-competitor-benchmark]].

**STATE, 2026-08-13. Read `Blog/STATIC-PAGES-LEDGER.md` first, it is the live tracker.** **All 17 verticals are built AND published, and the industry gating no longer exists.** On instruction, `live` and `built` came off every `categories.ts` entry and `INDUSTRIES_ENABLED`, `isIndustryLive()` and `liveIndustries()` were deleted; consumers read `categories.Industries` directly and the routes carry no `notFound()` gate. **`feature-flags.ts` now covers case studies only.** Gaming is dropped on legal grounds and has no page. Verified on a real production build: 18 industry routes static, production sitemap 68 URLs.

**Adding a vertical is now: a data file, a route, a `categories.ts` entry and an icon. There is no flag to flip.** `industry_page_audit.py` fails if a data file has no `categories.ts` entry, which is what pairs them now that no flag does.

**Two files exist per vertical** in `Blog/plans/industries/`: the bare name is the page plan carrying the reader, word budget, verified fact spine, guard list and layout arithmetic; the `COPY-` prefixed one is the page copy, **generated from the shipped data file since 2026-08-13** rather than hand written. Read the plan to understand the page, regenerate the copy rather than editing it.

Nav and index are gated by `live` in `categories.ts`, and the flag, the page and the sitemap entry move together in one change.

## SEO targeting is DATA now, not prose. Added 2026-08-14

Every industry data file exports an `seo` block: `primaryKeyword`, `intent`, `secondaryKeywords`, `competingUrl`, with `as const` and a `readonly` type. **`industry_page_audit.py` fails** on a missing block, a primary keyword absent from the meta title or the H1, a title over 60c, a description over 160c, or one keyword claimed by two pages. It **warns** rather than fails if the keyword is missing from the opening block, and deliberately does **not** require it in an H2, because forcing a keyword into a section heading produces the mechanical copy these pages exist to avoid.

**16 of 17 pages carry a commercial head term** (`Insurance Software Development | Zyneto`). Only two verticals genuinely reject one: retail against `ecommerce-app-development`, food service against `restaurant-app-development-company`. Both took a commercial title anyway once the competitor's subject word was dropped. **Run `collision_guard.py` on any replacement title.** It aborts rather than clears for a vertical missing from its PAIRS map, which is correct; add the vertical with an empty list if you have confirmed no competitor.

**Measured 2026-08-14, and it should govern expectations:** the industry pages had **zero impressions across 88 days** because they 404'd in production. The collision guard is calibrated on "classified pos 4, music pos 6"; actual is **10.2 and 10.0**. Sitewide is 120,695 impressions and 474 clicks, **0.39% CTR**, so the site's problem is clicks, not rankings. Full analysis and the dated unblock schedule live in `Blog/plans/INDUSTRY-SEO-FRAMEWORK.md`.

## Facts the repo does NOT contain (user supplied, do not re-derive)

- **Billing rate: $40 to $100 per hour**, varying by role and seniority. This is what the cost sections are built from. Show the arithmetic (hours x rate) rather than inventing fixed project prices.
- **DoraDori is an ERP and accounting system for the garment industry**, built by Zyneto. The repo carries ONLY a logo (`home/partnerLogos/doradori.webp`) with no `portfolio.ts` entry and no testimonial, so nothing about it is discoverable in code. It belongs on the **Retail and e-commerce** page. Anything further about it must be asked for, never assumed.

## The homepage industries strip: GENERATED as of 2026-08-13, do not hand-edit

`ServeIndustries.tsx` maps **`categories.Industries`**. There is no tile list to maintain, and `link_guard.py` fails if `categories.Industries` disappears from the file, if a hardcoded `/industries/` url appears, or if the word gaming appears at all.

**Why it is generated, measured before the change:** the hand-kept list had drifted to **12 tiles against 17 verticals**, with 7 verticals missing entirely, a **Gaming tile advertising a page that does not exist and never will**, FinTech and Banking both pointing at `fintech-banking`, and labels diverged from the nav. All four fix themselves once the list is the nav's list. **Restoring a separate "Banking" anchor would need a hardcoded override, which defeats the point.**

**Verification trap, cost real time twice in one day:** measuring this section from the DOM raced React streaming and returned every card at 0 by 0 with 3 columns at a 1280px viewport. The ancestor was `<div id="S:6" hidden>`, **React's Suspense streaming placeholder**, which holds content before it is swapped into place. **Use the server-rendered HTML over curl for this site**, not `getBoundingClientRect` immediately after navigation.

## The old note on the strip, kept for the reasoning

`components/home/ServeIndustries/ServeIndustries.tsx` advertises "Industries We Cater To": Education, Healthcare, Travel, Media and Entertainment, Gaming, FinTech, Real Estate, Automotive, Retail, Banking. Every one used to be a dead end. **Nine now carry a `url` gated on `isIndustryLive()`, the same helper the routes call, so a link cannot exist unless the route resolves.** Gaming has **no url field at all**, so it is unlinkable by construction rather than by flag; keep it that way.

**Production links exactly one tile today, Retail**, because the strip names none of the other live verticals. **Two of the three live verticals, logistics and saas, are not in the strip at all**, so adding tiles for them would double the homepage's contextual industry links. That is a positioning decision about what the homepage claims, not a linking one, and it is the user's call.

FinTech and Banking both point at `fintech-banking` on purpose; the vertical carries both words. Looks like a duplication bug on inspection, is not.

`link_guard.py` scans this component now, because a typo here **fails silently**: the tile just never links, even after its vertical goes live.

## Which verticals have client proof, and which do not

**9 of 17 carry proof:** saas (Kroolo, Famepilot, Stylebank), retail (Al Amri Express, G4Girl, Stylebank, DoraDori, Cheersagar), logistics (NDC, Al Amri Partner app), healthcare (iCareHeal, Mego Afek), fintech (BankSathi, Financial Edge, Moneteo, Up in the Air), education (GetMyUni), manufacturing, automotive and food service.

**8 ship with no proof section at all**: media, social, travel, insurance, real estate, fitness, energy, professional services. `ourWork` is optional and the FAQ answers the absence. Never pad with a client from another sector.

**Correction worth keeping:** an early "only 4 verticals have delivery behind them" was wrong. Reading `portfolio.ts` and `testimonials.ts` directly shows healthcare, fintech and education all have real clients. Audits under-report; read the data files.

## Shared components are where template copy hides, and no guard reads them

**Found 2026-08-13 by the user, not by any check.** `OperationsMapSection.tsx` hardcoded its heading, its description and its image, so **12 verticals rendered "Where distribution software earns its keep" plus the logistics operations map**, whose alt text names NDC and Al Amri Express. Insurance, energy and fitness were showing a distribution diagram and two logistics clients, on pages deliberately built with no client proof.

**Both guards read data files. This lived in a component.** That is the whole reason it survived. **When a section looks identical across verticals, open the component, not the data.**

The fix: `operations: { title, description, stages, image? }` as per-vertical data, **with no component default**, because a default is how it recurs silently. The audit now fails on a shared operations title and on two pages sharing one map `src`.

**Diagrams are generated: `tools/blog-visuals/build_operations_maps.py`.** Layout constants come from the one hand-built map so all 12 are the same object. **Stage titles are read from the data file rather than retyped**, so the diagram cannot disagree with the chips above it, and **text is measured with PIL with a hard error on overflow**. Only logistics carries a client proof line; the rest have no client, and inventing one is forbidden.

## THE THIN-PAGE TRAP, and the fix

**Measured 2026-08-06:** a first attempt at the logistics page came in at **1,113 rendered words** against `services/artificial-intelligence` at **3,172** and `solutions/restaurant-app-development-company` at **2,919**. Competitor industry pages run 5,200 to 7,600. Most of the 1,113 was shared chrome; unique copy was about 450 words.

**Why it happened, and the rule that prevents it:** "only claim what we have shipped" got wrongly widened into "only write what we have shipped", leaving the page with a single content type. With one flagship client, proof alone caps out near 400 words.

**The fix: most of an industry page must be factual and educational, not claims about Zyneto.** Sections on systems, standards, sub-verticals, what goes wrong, cost and FAQ carry roughly two thirds of the words, need zero client proof, break no EEAT rule, and are what the content spec already asks for (why, how, when, who benefits, who should avoid, common mistakes, business impact, ROI). Only the operations map, case studies and delivery process need client evidence.

**Target: 3,500 to 4,500 words of unique body copy per page.**

## Consequence for scheduling

Each industry page is a pillar sized deliverable, comparable to a 3,000 word blog post plus sector research, NOT a template with swapped data. **Build them one at a time.** Thin pages on commercial URLs would repeat the May decline on the pages that actually convert. All 17 were built this way and the shipped range is 5,218 to 7,699 rendered words.

## Status: logistics reference page BUILT 2026-08-06

`/industries/logistics-distribution`, **5,218 rendered words** against the 3,172 of `services/artificial-intelligence`, so it now sits inside the 5,200 to 7,600 competitor band. Files: `src/data/industries/logistics-distribution.ts` (all copy), `src/app/industries/logistics-distribution/page.tsx`, `src/components/industries/AnchorNav.tsx`, `public/static/assets/industries/logistics-operations-map.svg`. Verified: tsc clean, 0 em dashes, 0 banned phrases, 1 h1, 21 h2, 9 anchors all resolving, 5 tables, styles matching the house standard exactly.

**DROPPED by the user 2026-08-06, do not re-propose:** the interactive build-vs-buy scorer and the custom scoping form. They were in the researched architecture and were previewed, and the user declined both. The hero's existing `TopFormContact` is the only lead capture these pages get.

**Depth came from research, not padding.** A six agent parallel sweep produced the section architecture: real system names by tier (Manhattan, Blue Yonder, Infios, Odoo, TallyPrime, Focus Softnet), the EDI transaction set (856 DESADV, SSCC, GS1-128 Application Identifiers), Oman regulation with dates (Fawtara phases from Aug 2026, Bayan 12 digit tariff codes since Jan 2025, VAT 5% since Apr 2021), and sub-vertical workflows (FEFO with per customer shelf life, van sales settlement, 3PL activity billing). **Rerun that research per vertical; it is what makes the page premium rather than padded.**

**Guard list the research produced: facts that must NOT go on these pages** because they are attractive, quotable and unverified. Manhattan's 2025 Gartner WMS placement, SPS Commerce's "115,000 businesses", any project44 acquisition, NDC "six decades" or its 2,627 customers, specific GCC cold chain temperature thresholds, COD prevalence percentages, GCC and India market share figures, and SOLS 2040's job and revenue targets presented as current rather than 2040 aspirations.

# THE STANDARD for every industry page

## Read this first, before touching page two

**The user said on 2026-08-06 that they would adjust the logistics page design by hand, then ask for the remaining pages.** So `/industries/logistics-distribution` is the reference implementation, not this file. **Before building any further page, read the current logistics page and data file and follow what is actually there.** Where their hand edits contradict the style notes below, their edits win and this memory should be corrected to match.

## Page template: the section order that shipped

Same order every vertical, swapping the sector content. Numbers are the researched word targets.

1. Hero, via `ServicesTop` (90)
2. "The short version" spec box: integrations, timeline, rate band, phase-one range, stack, the no-quote-without-discovery commitment (110)
3. Sticky `AnchorNav`, nine anchors worded as buyer questions (0)
4. Who this is for, six buyer segments each with the system they are missing (170)
5. Find your operation, six sub-verticals as "what breaks" then "what we build" (340)
6. Operations map diagram (0, carried by the SVG)
7. Systems we connect to: tiered by enterprise, mid market, SMB, plus a "distinction that saves projects" callout and four pairwise explainers (360)
8. CTA band, via `AdvServices` (40)
9. The domain-mechanics section. Logistics used EDI, GS1 and the ASN. **Every vertical needs its own equivalent**: the deep, zero-proof-required block nobody else writes (320)
10. Compliance table. See **THE 2026-08-10 STANDARDS** below, which govern this section and the cost section and override the word targets in this list
11. Our work in this sector, plus one attributed testimonial (280)
12. What goes wrong, ten numbered failure modes with the counter-practice (420)
13. Build, buy, or buy the core and build the edge, as a table (300)
14. What it costs with the arithmetic shown: drivers, hours by module, the addition (480)
15. How we can work together, four engagement models each with the downside stated (190)
16. How we deliver, five phases each named by its artifact (200)
17. The technical buyer's checklist, non-functional requirements and security (180)
18. `Partnerships`
19. `FaqSection`, ten questions (350)
20. What happens next, four steps (110)
21. `Testimonial`
22. Go deeper, categorised hub links in three groups (60)
23. `RecentBlog` with curated `slugs`
24. Closing CTA band, via `AdvServices`

Only item 11, roughly 280 words or 6 percent, depends on client proof. That ratio is the whole reason the page is not thin.

## ALL VERTICALS ARE BUILT. Item 5c closed 2026-08-13 at 17 of 18

**Do not start "the next vertical", there isn't one.** 17 of 18 are coded, 3 live (logistics, retail, saas) and 14 dark. `gaming-interactive` is **dropped on legal grounds**, not outstanding, under the Online Gaming Act 2025; do not re-propose it without advice. The last four landed on 2026-08-13: real estate, fitness, energy and professional services. What is left is per-page go-live, which is the user's call one page at a time, and OG covers.

**Eight of the 17 ship with no proof section**: media, social, travel, insurance, real estate, fitness, energy and professional services. Each answers the absence in an FAQ instead of padding a row.

Original note follows. Logistics, retail, saas and **manufacturing-apparel** are coded. All ship `live: false` behind `INDUSTRIES_ENABLED` except logistics.

**Media was built boundary-scoped on 2026-08-10 after the user reviewed the collision evidence.** It takes rights, royalties, catalogue metadata, statements and delivery economics, and **none** of the music head terms. It links to the music solutions page exactly once. **It ships with no proof section**, because the plan's stated Media evidence is wrong: Tvam is `Intelligent Vedic Astrology Platform`, category Astrology, not a media client. `ourWork` is now optional in `IndustryPageData` for exactly this case, and `IndustryPage` renders the section only when proof exists. Do not invent one.

**The original blocking analysis still stands and is why the page is scoped as it is.** It was ranked second on "20,219 buyer-intent impressions, the highest on the site". Those impressions are real and **already captured by twelve existing Zyneto URLs**: 48,363 impressions for 25 clicks, a 0.052% CTR, with `blog/music-app-development-guide` at 26,419 impressions for 2 clicks and `solutions/music-streaming-app-development-company` at 12,407 at position 5.3, the best commercial asset on the site. The territory the boundary rule reserves for an industry page (royalties, rights management, catalogue metadata, content operations, delivery and CDN) earns **essentially zero**. Do not build it as a traffic play. Consolidate the music cluster first.

**Icons: item 57 is CLOSED. 17 entries, 17 icons, zero collisions, as of 2026-08-13.** Eight were hand-authored and every entry was remapped to its own file. **The house grammar**: 92 viewBox, `fill="none"`, black stroke at `5.656` with round caps, joins and miter limit 10, and **exactly one accent** using the gradient `#FF732D` to `#F04` at offset `.476` to `#90F` with a unique id. They render at 80px `object-contain` in `IndustriesNav`, so line weight has to match or the row looks mixed. **They are my drawings, not the designer's**, so swapping one for real art is a one-line change per entry. **Check completeness with a script that resolves each entry through its icon const and asserts the file exists**, never by recounting: this item's own count was wrong by hand twice.

**A new vertical may need a `categories.ts` entry, not just a flag.** Retail and saas were already in the Industries dropdown; manufacturing was not, and neither is media, gaming, social, food service or any P3 vertical. Check before assuming a flag flip is all that is needed. There is also **no manufacturing icon**: `manufacturing-apparel` reuses `automotive.svg`, the same loose reuse as logistics on `travel.svg` and saas on `media.svg`.

## BUILD ORDER. Audit the content BEFORE coding the page, not after

**User instruction, 2026-08-10: reviewing and fixing section by section after the build is too slow. Do the full content audit first.**

The order for every remaining vertical:

1. **Collision guard** against GSC. It has already rejected one title and blocked one whole page.
2. **Gather and verify the facts**, including web-verifying every dated claim and every named regulation, before any of it is written into a data file. Manufacturing needed UFLPA, ZDHC and the ESPR timeline found at this stage, not discovered in an audit afterwards.
3. **Write the plan, then the page.** **Changed 2026-08-13: `COPY-<slug>.md` is now GENERATED from the shipped data file, not written by hand and transcribed.** The old order wrote 7,000 words twice, and transcription is exactly where a dash or a reworded sentence slips in unnoticed; insurance had 24 em dashes in its copy file that had to be converted by hand before coding. The generator is **`tools/blog-visuals/make_copy_file.py <slug>`**; it renders the data file through `tsx`, writes the sections back out in page order, and **asserts on any em or en dash before writing**. The plan file still comes first and still carries the verified fact spine, the guard list and the layout arithmetic, so the pre-code content audit the user asked for on 2026-08-10 is unchanged. `COPY-real-estate-proptech.md` is the last hand-written one. Audit the plan for the content defects that keep recurring: a section description that miscounts its own items, a heading that cannot be read alone, a row whose header does not match its content, a worked example that omits a module, an instruction stated twice in two sections, a client described differently from another page, and a capability argued for but never priced.
4. **Then code it**, and run `python3 tools/blog-visuals/industry_page_audit.py --file <slug>.ts` plus `link_guard.py`, both of which must exit 0.

**`industry_page_audit.py` exists so this is one command rather than ten rounds of review.** It checks every count, grid budget, canonical vocabulary, arithmetic reconciliation, label-versus-content match and cross-page client stack. Built 2026-08-10 after auditing four pages by hand.

**Do not trust the checker before testing it against known-good pages.** Its first run produced three failures, two of which were the checker being wrong (a segment title threshold guessed at 36 characters when the pages measurably render 38, and a naive reading of "Five builds and one client statement" over six cards). A checker that cries wolf gets ignored.

## THE 2026-08-10 STANDARDS. Apply to every remaining vertical

Set while building retail and saas and then retrofitted to logistics, so all three built pages already comply. These override anything above that contradicts them.

### Compliance section: exactly 6 rows, no exceptions

**Five global standards, one row each at 35 to 50 words, then every regional rule compressed into ONE row of roughly 130 words.** ISO/IEC 27001, SOC 1 and SOC 2, and GDPR with UK GDPR appear on all three built pages. The other two are chosen for the vertical: ISO 42001 with the EU AI Act plus PCI DSS on saas, PCI DSS plus the European Accessibility Act on retail, HACCP with ISO 22000 and the GFSI schemes plus Incoterms 2020 with HS 2022 on logistics.

The single regional row **names every instrument** rather than gesturing at them. Anchor label becomes "Which standards will we be asked for?".

**The user rejected the long per-jurisdiction table twice.** Do not restore it. The whole section is now roughly 380 to 420 words, 6 to 8 percent of the page, down from 17 percent on saas at its worst.

**Mandatory check, in this order:** before compressing, scan which regional facts exist nowhere else on the page. On logistics almost none of them did (ICV, JSRS, GSO 9:2022, SABER, food safety, tariff codes), and on retail neither did MoCIIP, Maroof, G-Mark or GST e-invoicing. After compressing, re-scan and prove the count is unchanged. Both built pages retained 100 percent.

### Layout arithmetic: three sections have row counts that must come out right

These are content decisions disguised as design ones, because the components size themselves from the data. Get the count wrong and the section renders with a short column or an orphan card.

| Section | Component rule | Required count | Current state |
|---|---|---|---|
| Cost | `lg:grid-cols-2`, drivers left and modules right | **modules must equal drivers** | logistics 7/7, retail 8/8, saas 6/6 |
| Technical buyer's checklist | `xl:grid-cols-3`. The field is `groups`, each a `group` label plus a `body`, **not a flat list of items** | **a multiple of 3, and 3 is valid** | logistics 6, retail 9, saas 9, travel 3, insurance 3 |
| How we deliver | `md:grid-cols-[220px_1fr]` fixed label column | phase labels short enough not to wrap past 2 lines | see below |

**The delivery label column was 140px and is now 220px.** At 140px and `text-[22px] font-semibold` it held about 11 characters, so logistics rendered one line per label while saas wrapped to four, and the three pages looked like different templates. Also strip the leading "The " from artifact names; retail and saas both carried it and logistics did not.

### Cost highlights: exactly three, and do not repeat the essence tiles

`costHighlights` renders `sm:grid-cols-3`, so **use three, never four.** Retail and saas both shipped four and orphaned a tile.

**The three are fixed: Phase one range, Typical timeline, Useful hours.** That set answers money, duration and effort, which is what a buyer wants at the top of the cost section. Retail and saas were instead spending two of their four tiles on Rate band and Blended rate, **both of which already appear verbatim in the essence block further up the page**, so the section opened by repeating itself.

Re-check the arithmetic whenever these change, because the label and the value have drifted apart here once already: a tile labelled "Realistic band, 900 to 1,400 hours" was quoting the **1,240 hour** worked example's money.

### Cost section: module rows must equal driver rows

`CostSection` renders drivers left and modules right in `lg:grid-cols-2`, so **unequal row counts leave one column visibly short.** Match them. Current state: logistics 7 and 7, retail 8 and 8, saas 6 and 6.

**Sanity-check the module minimums before writing the example.** If the sum of every module's low end exceeds the total you want, no phase one containing all of them can hit that total, and the example will silently omit a module to make the arithmetic work. Manufacturing shipped that way: seven minimums summing to 1,220 against a 1,200 hour example that quietly dropped the three level model, the page's own highest-impact module, and undershot another row by 40 hours. Check `sum(minimums) <= target` first, then pick the example.

**Check the worked example total against every other page before fixing it.** Added 2026-08-13, after energy's first draft landed on 1,420 hours, which is insurance's published example to the hour, and professional services' first draft landed on 1,240, which is saas's. Both were honestly derived from their own module ranges and both were still wrong to ship, because **a buyer comparing two Zyneto verticals sees an identical total and reads a template.** The totals in use are 1,180, 1,200, 1,240, 1,260, 1,380, 1,420 and 1,460. Rebalance the module split rather than the ranges.

**Group modules backwards from the worked example, never forwards.** The example must reconcile against the rows that actually render, because the section's own promise is that the reader can argue with any line of it. On saas the total 1,240 was load bearing in five places (essence tile, the money at $40, $100 and $65, the squad maths, the meta description), so the groups were designed so that 270 + 370 + 220 + 190 + 190 lands on it with every figure inside its own published range.

Modules that do not fit a group **move into the math prose with their ranges intact**, never deleted. Retail's cross-cutting lines (admin and CMS, loyalty, migration, peak hardening, DevOps, QA at 20 to 25 percent of build) and saas's phase-two lines (AI layer, real-time collaboration, automation engine, enterprise bundle) live there now.

### How we deliver and Engagement models: name the artifact, and never argue against your own offer

**Delivery is five phases, each named by the artifact it produces, never by the process stage.** The description on all three pages says exactly that and then adds "a generic waterfall diagram would tell you nothing", so naming the phases Discovery, Design, Build, Cutover and Hypercare contradicts the sentence directly above them. Logistics shipped that way until 2026-08-10 and is now Integration inventory, Label and scan specification, Volume tested build, Cutover runbook, Adoption pack. Keep labels to 28 characters for the 220px column.

**Engagement is four models in a `lg:grid-cols-4` row, so exactly four.** Each carries a `good` and a `bad`, and the whole point is that we write the downside ourselves. **Keep the two roughly proportionate.** Logistics had "Cheapest per head." at three words against a thirteen-word downside, and a six-word upside against twenty-five, which reads as arguing against our own offer rather than being candid about it. Aim for a bad-to-good word ratio near 1, and treat anything above 2 as a rewrite.

**Name engagement models by the work, not by the contract type.** Commodity procurement terms (Fixed price, Time and materials, Dedicated team, Staff augmentation) undercut the premium positioning the rest of the page builds; logistics shipped with all four and was renamed on 2026-08-10. **`Fixed scope phase one` and `Dedicated squad, monthly` are the two shared names, spelled exactly that way on all three pages**, with the remaining two chosen for the vertical. Where a rename hides a billing mechanic the old name carried, put the mechanic back into the `good` line, which is what "Billed on time and materials, so you pay for work done" now does on logistics.

**Delivery artifacts are sentence case, everywhere, including in prose.** The phase label capitalises only its first word ("Tenancy decision record", "Integration contract pack"), and a reference to it inside a sentence is fully lowercase ("Output is the tenancy decision record plus a costed plan"). Saas shipped Title Case on all five and was converted on 2026-08-10. **Converting is a two-pass job:** lowercasing the label leaves stray capitals in the prose references, which is exactly what happened here, so grep every occurrence of each artifact name afterwards rather than trusting the label rename.

### Our work: item count must be a multiple of 3, and the dark card is now a hover state

**Run the cross-page client check whenever a client appears on a second page.** Same client, same stack, everywhere. It caught two live contradictions on 2026-08-10: DoraDori shipping `["Custom build"]` on retail against its verified stack on manufacturing, and Al Amri Express Partner showing a different fourth chip on logistics and retail because each had truncated the six item `portfolio.ts` stack differently. Neither was wrong in isolation, which is exactly why only a cross-page comparison finds it. **`portfolio.ts` is authoritative where an entry exists; where it does not, as with DoraDori and Cheersagar, the case study draft is.**

**Price what the page argues for.** Manufacturing sold bundle identity in four separate sections and had no module for it. If a capability appears in the sub-verticals, the failure modes or the checklist, it needs a line in the cost table or an explicit note saying it is a later phase.

`OurWorkSection` is `lg:grid-cols-3`, but `industryGridClass` renders 1, 2, 3, 4, 6, 8 and 9 with no empty cell, so **only 5 and 7 orphan one.** The old "3 or 6 only" rule was too strict and rejected education for having exactly one genuine client and no honest way to invent two more. Retail shipped 5 and rendered 3 then 2; fixed by adding Cheersagar, which was already sanctioned to name.

**Omitting the section entirely is a legitimate outcome, not a failure.** `ourWork` is optional and `IndustryPage` renders it only when proof exists. **Eight pages ship without one as of 2026-08-13: media, social, travel, insurance, real estate, fitness, energy and professional services**, because no client in `portfolio.ts` or `testimonials.ts` belongs to those sectors. Professional services was the closest call and the answer was still no: Kroolo is an AI work operating system and FamePilot is reputation management, both **software products sold to firms rather than professional services firms**, and listing either would describe a client as something it is not. Never pad a row with a client from another sector to reach a count, and never invent one; the FAQ on travel and insurance addresses the absence head on instead, which is the better trade.

**Changed 2026-08-10 on request: the dark inverted card is a hover state on every card, not a fixed treatment on the first.** It was `i === 0`, which hard-coded the accent to whichever project happened to be listed first. Now the article carries `group` plus `hover:bg-[#161616]`, with `group-hover:` variants on the eyebrow, client, line and stack chips, and a 200ms colour transition.

**The `place` field is really a generic eyebrow.** Logistics and retail put geography there ("Oman", "India"); saas puts a product category ("Multi-tenant B2B platform"). Both read fine because it renders as a small uppercase muted label, but do not assume it means location. Never invent a client's geography to fill it.

**Do not promise in the description what the section cannot render.** There is no testimonial field. Logistics said "Three builds and one testimonial" above a section with three build cards and no quote. Retail's "Five builds and one client statement" is fine because the statement is inside the G4Girl card.

### Go deeper and the CTA bands

**Go deeper is 3 groups of 3, always.** `HubLinksSection` is `md:grid-cols-3` and all three built pages already run 9 links in 3 groups. Name the groups after the work ("Build and automate", "Run it and ship it"), never generically; retail shipped a group called "Related pages" and it was the only filler label in twenty-seven links.

**GATING for industries is GONE, 2026-08-13.** It went through two changes the same day: first `publishedIndustries()` was deleted so dev showed everything and production showed only flagged pages, then the flags themselves were removed and all 17 published. **Do not reintroduce a live flag for industries without being asked.** **Case study gating is gone too, 2026-08-24.** `CASE_STUDIES_ENABLED`, `liveCaseStudies()` and the per-study `live` field were all deleted on instruction, so all nine studies are live and there is no flag on either section any more. The sentence this replaces said one flag would publish one study; that is no longer true and there is no flag.

**The hub trap is what makes a bulk go-live expensive, and it is now defused permanently.** The audit capped sibling links at 2 for live pages only, so 14 dark pages sat at 3 and would have failed the audit all at once on publication. **11 needed trimming** to 2 siblings plus the `All industries | /industries` hub link. The cap now applies to every page, so this cannot build up again.

**Consequence at scale, and the fix that actually worked.** With 17 entries the desktop dropdown measured 1,675px against a 720px viewport. Capping it with `max-h` plus `overflow-y-auto` **made it worse**: macOS overlay scrollbars are invisible until you scroll, so the panel looked like a complete list of six sectors and the user reported the nav as broken. **Styling the scrollbar does not fix this** — `[&::-webkit-scrollbar]:w-1.5` produced `offsetWidth - clientWidth === 0`, meaning no gutter and no effect. **Never build an affordance out of a scrollbar.**

The working fix is density: `IndustryCard` has a **compact variant used when `items.length > 9`**, a 40px icon beside the label, no description, 60px tall instead of ~250. Seventeen entries in three columns total 400px, so all are visible with no scrolling. **Production is untouched at 3 entries** because the threshold is not met, verified under both `NODE_ENV`s.

**No gate catches this class of bug.** `tsc`, the page audit and `link_guard` were clean while the panel rendered 17 links and showed 6. The check that finds it is comparing rendered card count against fully-visible card count in the DOM.

**Industry cross-links are constrained by the `live` flag.** A vertical can only link to another vertical that is already `live: true`, which is why logistics links to none and retail and saas both link only to logistics. Adding the link early creates a latent dead link that `link_guard.py` will not surface until `INDUSTRIES_ENABLED` flips.

**GO-LIVE PROCEDURE CORRECTED 2026-08-13. The old instruction here said to add the newly live vertical to every other live vertical's hub. Do not do that, it is what armed the hub trap.** Measurement showed the 3 live pages carry **2 siblings plus the `/industries` hub**, while the 9 dark ones carry **3 siblings and no hub**. Since `HubLinksSection` hard-requires 3 groups of 3, "every sibling plus hub" only equals 3 at exactly 3 live verticals, so a 4th go-live done the old way breaks every already-live page at once. The rule is now machine-enforced: `industry_page_audit.py` caps sibling vertical links at **2 for live verticals only**, dark pages exempt. **On go-live the newly live page trims its own sibling list to its 2 most related plus the hub, and the pages already live are not touched.**

**One CTA string per page, used in the hero and both bands.** Retail and saas do this. Logistics ran three phrasings (hero "Book a scoping call", mid band the same, end band "Start the conversation") until 2026-08-10. The string itself is a per-vertical choice tied to that page's `nextSteps`, but it must be the same string in all three places.

### Hero: four proof chips, each on one line

`IndustriesTop` renders `features` as `sm:grid-cols-2`, giving a 2x2 block of chips measured at **266px wide, where a chip wraps past roughly 28 characters**. Keep all four to 27 characters or fewer so the block is four even rows rather than a ragged mix.

Logistics shipped ragged at **42, 42, 21, 21 pixels**, two chips wrapping and two not. Saas was uniform but uniformly wrapped, at 50 to 59 characters each. Both are now 21px across all four. The chip is a label, so the full descriptor belongs in `ourWork`, which already carries the sanctioned wording.

**Composition that works:** two named client proofs, one capability or regulatory signal, one commercial signal. Retail's fourth chip is the rate band, which is worth copying. **Do not spend three of four chips on client names**; manufacturing did and the fix was to swap the third for the page's thesis, "Three levels, not one SKU", which identifies us as people who know the trade faster than a third logo does.

**Count the disclaimers.** Whatever the commitment tile says Zyneto is not, the checklist, the FAQ and build-or-buy must say the same. Manufacturing shipped "One thing we are not" in the essence against two in three other sections, which understates the disclaimer at the top of the page and overstates it further down.

**CTA text is a per-vertical decision, not drift.** Retail and saas use "Book a 30 minute technical call" everywhere and their `nextSteps` opens on the same phrase. Logistics uses "Book a scoping call" because its actual process is a 45 minute scoping call, which its own `nextSteps` describes. Match the hero CTA to what that page's `nextSteps` promises; do not normalise across pages.

### The short version: six tiles, six fixed labels, and never state a count that can drift

`EssenceSection` is `lg:grid-cols-3`, so **six tiles**, two rows. The six labels are fixed and identical across all three built pages: **Typical integration set, Phase one timeline, Rate band, Phase one range, Stack we actually use, Our commitment.** Reuse them verbatim on a new vertical rather than inventing a variant; saas had drifted to "Stack we actually run" for no reason.

**Do not put a tile count in the description.** Logistics shipped "The four things buyers ask before they book a call" above **six** rendered tiles, a miscount any reader would catch, and it survived because nobody recounts prose after adding a tile. Either write it countless, as saas does with "the commercial facts in one block", or recount it every time the tile list changes.

Tile word counts do not need balancing. Grid rows stretch, measured at 198/198 on logistics and 302 then 354 on saas, so a 13-word tile beside a 76-word one is white space rather than a defect. Padding it to match would be filler, which the reject list forbids.

"Phase one range" and "Phase one range, with the arithmetic" are both correct: retail and saas show the arithmetic inline, logistics defers it to the cost section and says so in the tile. Match the label to what the tile actually carries.

### Who this is for: card titles are labels, not sentences

`SegmentsSection` is `lg:grid-cols-3`, so **six items**, two clean rows. Cards are 428px wide and the title wraps past roughly 38 characters, with variance by glyph width.

**Keep card titles short enough to render on a single line. The audit enforces 40 characters, not the 36 written here earlier; code against `industry_page_audit.py`, not against this file.** The failure is not that a long title breaks the layout, the rows self-balance, it is that this is the section a buyer *skims to find themselves*, and a 71-character heading is a sentence rather than a label. Saas shipped at 57 to 71 characters, every title wrapping to two lines. Retail was worse in a different way: it alternated **55, 28, 55, 28, 28, 55 pixels**, so body text started at different heights across the same row. Both now sit at 28px on every card.

The detail cut from a title is not lost; it belongs in the line beneath, which is where the trigger and the missing system are described.

### Find your operation: tab labels must fit on one row, and the disqualifier lives in Who this is for

`SubVerticalsTabs` renders the six operations as a **horizontally scrollable tab row with `scrollbar-none`**, so anything that does not fit is not just cramped, it is invisible with no affordance telling the reader to scroll. On a section whose job is letting a buyer find themselves, that is the worst possible failure.

**The constraint is the total, not the individual label.** Measured 2026-08-10: logistics 152 characters across six tabs, retail 152, saas 150, manufacturing 121, and **all four overflow by 0**. A single 39 character label is fine. Saas before its fix was **264 characters and hid 3 of 6 tabs**. Budget across six labels and verify `scrollWidth - clientWidth === 0` rather than counting any one label. **The audit enforces a 160 character total**, not the 155 written here earlier; the earlier "about 25 characters each" rule was a proxy inferred from pages that happened to average 25, and it wrongly flags a perfectly good 26 character label. The full descriptor belongs in the breaks and build text, not in the tab.

**The "not a fit" line belongs in `segments`, the Who this is for section**, which is where the page plan puts it. It had drifted: saas had it in the right place, retail had it buried in the `subVerticals` description, and logistics had none at all. All three now carry one in `segments`.

Panel columns (`breaks` left, `build` right) self-balance, measured at 197/197, 198/198 and 223/223, so an uneven word split between the two is not worth chasing.

### Systems: the pairs grid sizes itself from the content, so keep the pair count even

`SystemsSection` renders `groups` as single-column rows (free count) and `pairs` as a grid. **As of 2026-08-10 that grid is density-aware:** if any pair body exceeds 60 words it renders `lg:grid-cols-2`, otherwise `lg:grid-cols-4`. Keep the pair count a multiple of 4 for short pairs and a multiple of 2 for long ones.

**Why it exists.** The grid was fixed at 4-across, which suits logistics' short comparison pairs (15 to 23 words, measured at 318x181, aspect 0.57) and fails completely on the long-form deep dives retail and saas carry. Saas measured **318x840, aspect 2.64**, a 4.6x density difference through the same component, which is roughly 40 lines of text in a 318px well. At 2-across it is 657x400, aspect 0.61, matching logistics.

**Two content types live in `pairs` and both are legitimate:** short "X against Y" comparisons, and long deep-dive explainers. Do not merge two comparisons into one card to save a slot; saas shipped "SAML 2.0 against OIDC, and gateway against billing engine" and it read as two answers crammed together. Split them, and let the count grow.

### Build, buy or buy the core: the middle column is a recommendation, and the vocabulary is fixed

`BuildOrBuySection` renders **Component / Our recommendation / Our honest verdict**. The header used to read "Genuinely best at", which only logistics filled correctly, so retail and saas rendered rows saying "Payment acceptance and card data | Genuinely best at | Buy". Header corrected 2026-08-10.

**The five globals are not fixed across verticals, only the shape is.** ISO 27001, SOC 1 and 2 and GDPR fit saas, retail and logistics because those buyers run procurement questionnaires. **Apparel is audited by brands instead**, so manufacturing drops SOC and GDPR as rows and carries social and labour audits (SEDEX and SMETA, amfori BSCI, WRAP, SA8000, Higg), chemical compliance (ZDHC MRSL, OEKO-TEX, REACH SVHC) and **forced labour traceability (UFLPA, cotton is a named category, full trace to raw input)** instead. Pick the five a buyer in that vertical actually asks for, and say so in the ledger when you deviate.

**Use only these four labels in the middle column:** `Buy`, `Build`, `Buy the core`, `Buy the core, build the edge`. They match the section title, and a buyer skims that column for a pattern. Saas had drifted to **8 distinct labels across 11 rows**, which is not a pattern, it is eleven one-off answers. Every nuance ("build once, as a single service", "buy a DMS and integrate instead", "extend rather than rebuild") belongs in the verdict, not in the label.

Row count is free, it is a table. **Every page needs an e-invoicing row** saying Buy, because only an accredited Service Provider may transmit, and that is a claim about what Zyneto is not. Logistics was missing it.

### What goes wrong: ten items, and every one needs a real counter-practice

Single-column list, so the count is free, but hold it at ten. Each item is the mistake then what to do instead, in two sentences, 25 to 45 words.

**Do not use a repeated stock phrase for the counter.** Retail shipped with "The counter is" opening the second sentence in **10 items out of 10**, which is the kind of identical construction the AI-tell gate exists to catch. Write the counter as a plain imperative instead, the way logistics and saas do, and vary whether it lands in the first or second sentence.

**Two failure shapes to check for:** an item that only describes the problem and never says what to do, and an item that closes with an empty assertion instead of a counter. Logistics had one of each ("Integration is scoped as a few APIs" had no counter at all, and "Big bang cutover" ended on "Every one of those is avoidable", which prescribes nothing).

### FAQ: coverage is the rule, not the count

`FaqSection` is a single-column `<details>` accordion with no grid, so the count is free. **10 is the floor, 12 is fine.** What is not optional is that every page answers the two universal buyer questions, which nothing else on the page answers conversationally:

1. **What does a phase one cost, how many hours, how long?**
2. **Who owns the code, the data and the accounts?**

Logistics had both. Retail and saas had **neither** until 2026-08-10, despite retail running 6 of 10 questions on compliance. Audited by category: aim for no single category above about a third, except where the compliance table has been compressed, in which case regional questions legitimately carry the depth the table gave up.

Table-to-FAQ restatement is deliberate and correct on these pages. Word-for-word repetition of a whole sentence is not; run the duplicate check.

### Never write a review date into copy

No "Reviewed 10 August 2026", no "as of August 2026", no "at the time of writing". Statutory dates stay, they are the content. See [[no-review-date-stamps]].

### Errors these pages actually shipped, so check for them

- **Verify any claim the page invites the reader to verify.** Saas told a CTO to test PostgreSQL RLS in psql and got it wrong: `FORCE ROW LEVEL SECURITY` subjects the table *owner*, and superusers and `BYPASSRLS` roles bypass **always**.
- **Multiply every band that appears twice.** A cost highlight labelled 900 to 1,400 hours quoted the 1,240-hour money.
- **Answer the question that was asked.** An Adobe Commerce FAQ was answered with the Magento Open Source EOL date, which would have forced an unnecessary upgrade.
- **Penalty figures skew low in drafts.** Oman PDPL was written as OMR 500 to 2,000 when unlawful cross-border transfer is OMR 100,000 to 500,000.
- **Run a duplicate-sentence check.** Table-to-FAQ restatement is fine and deliberate; word-for-word repetition of the same sentence in two sections is not.
- **Drop content belonging to another vertical.** WPS payroll files, ISO 20022 and the Oman Central Bank framework all had to come off the saas page.

### Comments

`src/data/industries`, `src/components/industries` and `src/app/industries` are comment free. Keep them that way; functional directives such as `eslint-disable-next-line` are the exception. See [[no-comments-preference]].

## Sections that are FILLER, rejected after studying eleven competitor pages

Do not add these even though competitors have them: generic benefits grid, buzzword technology grid (AI/IoT/blockchain icons), generic "why choose us", a three-logo client wall, awards carousel, company stat band (years, headcount, NPS), quantified ROI claims, gated whitepaper, more than two CTA bands, mid-page newsletter signup, anonymous testimonials, undifferentiated cross-sell link farms, an "industries we serve" grid on an industry page, and unrelated case studies from other sectors.

Any percentage on these pages must be an attributed industry figure, clearly labelled, never a Zyneto result.

## Build procedure per vertical

1. **Run the six agent research sweep first.** Systems and integration, standards and compliance, competitor sections, cost model, sub-verticals and pain, regional context. That research is what makes the page premium rather than padded, and the script is at `workflows/scripts/logistics-industry-page-research-*.js`.
2. Write all copy into `src/data/industries/<slug>.ts`, keeping the page component presentational.
3. Build the operations map SVG into `public/static/assets/industries/`.
4. Run the gates: `tsc --noEmit`, grep for em dash, en dash and double hyphen, grep the banned phrase list, meta title under 60 and description under 160, then measure rendered word count against 3,500 plus.

## Style, as of the first build

- Compose the house components, never hand-rolled Tailwind: `ServicesTop`, `AdvServices`, `FaqSection`, `Partnerships`, `Testimonial`, `RecentBlog`, plus a local `SectionHead` with a centered `StarIcon` eyebrow.
- `text-[30px] md:text-[40px] font-bold` centered headings, `text-[#4B5563]` sub-copy, alternating white and `bg-[#F9F9F9]` sections, dashed `border-[#C4C4C4]` `rounded-xl` cards, `#161616` CTA bands.
- A hand-built white hero is wrong and makes the white navbar logo illegible. `ServicesTop` exists for this.
- Diagrams ship as **SVG in `public/static/assets/industries/`**, not rasterized PNG. The blog's rasterize-and-upload rule exists because the CMS media endpoint rejects SVG for XSS reasons, which does not apply to the frontend repo. All other diagram standards still hold (logo top right, hairline `#e0dbe9` border, no gradient bar, computed layout, no overflow).
- Generator pattern for the map: a scratch Python script using PIL to measure wrapped text and hard-error on overflow. Logo downscaled to 264px and embedded as a base64 data URI, which keeps the SVG near 18KB.
- `RecentBlog` resolves the whole `slugs` list and takes the first `limit` that come back, so put scheduled posts first and pad the tail with already-live entries to keep the grid full.
- Screenshotting these pages is unreliable once scrolled, in both the browser pane and headless Chrome. Verify with DOM and computed-style checks instead; that is what caught the real issues.
