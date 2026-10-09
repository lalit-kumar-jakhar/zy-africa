---
name: zyneto-case-studies
description: "Case study page standard: the domain teardown structure, the 45 percent rule, the content template, build order, and the schema trap"
metadata: 
  node_type: memory
  type: project
  originSessionId: be3e22a3-334c-459a-9cf5-da73ae8bb95a
  modified: 2026-08-07T09:03:20.842Z
---

Agreed 2026-08-07 after researching eleven case study pages across nine agencies plus product-company customer stories. Full spec in `Blog/plans/CASE-STUDY-SYSTEM.md`, raw research in `Blog/reports/CASE-STUDY-RESEARCH.md`. Content gates come from [[zyneto-content-agent-spec]]; the sibling page standard is [[zyneto-industry-pages]].

**STATE, end of 2026-08-07. Read `Blog/STATIC-PAGES-LEDGER.md` first, it is the live tracker.** One page coded: Al Amri Express, on branch `vikas`, unmerged, 404 in production, and **in no sitemap** (see [[zyneto-sitemap-and-ledgers]] for why that does not happen automatically). Nine drafts written and gate clean in `Blog/plans/case-studies/DRAFT-*.md`, roughly 21,000 words, none coded: kroolo, stylebank, ndc, g4girl, famepilot, tvam, doradori-garment-erp, cheersagar-accounting, garment-erp-anonymised. Six are ready to code today. The three garment ones are blocked on task 7 facts, and DoraDori versus the anonymised version is an either-or decision, task 32.

## The decision

**Ship Direction C, the domain teardown, with the evidence rail from Direction A and the risk and commercials block from Direction B.** User confirmed 2026-08-07.

**Why, and this is the constraint that decides everything else:** Zyneto has almost no publishable outcome metrics and never will for most projects. Exactly one is public and approved, G4Girl's fivefold sales increase in a signed Clutch review. A metrics-led template like the benchmark's would leave a visible hole on ten of eleven pages. The domain teardown earns its rank as education about the problem, with the project as the worked example, so it works at full strength with zero client metrics.

## URL and IA

`/case-studies` for the listing, `/case-studies/<slug>` flat underneath, 301 from `/portfolio`. Slug is a descriptor plus the client, never a bare client name. Do not nest under industry or service, which creates duplicate paths to one page.

## The 17 section order

1 Hero, breadcrumb plus sector eyebrow plus H1 naming domain and client (25 words). 2 Standfirst, two sentences, 45 max. **3 Evidence rail, from A, sticky on desktop**: sector, market, engagement model, platforms, stack as plain strings, live links, year (40). **4 What makes this problem hard, 400 to 600 words, ZERO client mentions, the load bearing section** (500). 5 The client and the situation, in their operating terms (170). 6 What we built, mapped one to one onto section 4 (300). 7 Decisions and tradeoffs (220). 8 A reusable artifact (60). 9 Mid CTA (25). 10 What shipped, scale facts labelled as scope (130). 11 Client's published words, optional (55). **12 Risk, security and handover, from B** (120). **13 Commercials, from B** (100). 14 What is still open (95). 15 FAQ, domain questions not sales questions (200). 16 Links out (30). 17 Related work and CTA (40).

## LENGTH, corrected 2026-08-07 against measured benchmarks

**Target 900 to 1,100 words of body copy. Floor 700, cap 1,300.**

An earlier draft of this spec said 1,600 to 2,000 with a 2,200 cap. **That was wrong**, guessed rather than measured. Actual body word counts, nav and footer excluded, deduplicated for the hidden mobile clones that netguru and theninehertz ship:

| Site | Median body words |
|---|---|
| netguru | 326 |
| cheesecakelabs | 399 |
| intellectsoft | 485 |
| **theninehertz** (all 81 measured) | **592** |
| thoughtbot | 593 |
| appinventiv | 1,139 |
| mindinventory | 1,158 |
| ScienceSoft | 1,405 |

Pooled median **574**, range 214 to 2,282. theninehertz's full corpus: median 592, mean 667, min 321, max 1,278, with the modern template landing near 500.

**The floor sits above the median deliberately.** Netguru, cheesecakelabs and thoughtbot are established brands whose case studies are portfolio proof rather than search assets, which drags the median down. If a page has to rank, sub-600 is where thin-content risk lives. The cap is where returns visibly stop: past roughly 1,300 the extra words are tech-stack lists, screen-by-screen UI narration and process filler.

**The counterintuitive finding, and the one to remember:** metric density correlates NEGATIVELY with length, Spearman rho about -0.34. Metric-dense pages have a median of 509 words, metric-sparse pages 733. **Length substitutes for evidence rather than accompanying it.** So a long page is a signal of weak proof, not strong proof. Keep in-article boilerplate (FAQ, related teasers, CTA blocks) under 10 percent; the benchmark median is 6 percent.

## THE RULE

**At least 45 percent of body words must remain true and useful if the client's name is deleted from the page.** Sections 4, 7, 8, 12, 14 and 15 clear it on their own at roughly 61 percent. If deleting the client name empties the page, the page is thin no matter how long it is. Same logic as the industry page rule, different threshold.

## Build gates, enforceable in scripts

Zero sentences shared between two case studies. At least four project-specific body headings (a repeated "Our process" is the pattern classifiers flag). Three off-site verifiable facts minimum, a live URL, a store listing or a published review, because that is what an answer engine anchors a citation to. `decisions[]` never empty, and every decision carries a required `tradeoffAccepted` field, which is the single thing that stops the page reading as a template. One unique non-prose artifact per page. Plus the standard content gates.

## THE QUEUE, set by the user 2026-08-07

Nine case studies, in the user's own order:

1. **Al Amri Express** (Oman grocery delivery, plus the Partner ops app folded in as a section)
2. **Kroolo** (AI Work OS)
3. **Stylebank** (B2B catalogue and sales enablement)
4. **NDC** (Oman FMCG distribution)
5. **G4Girl** (India fashion ecommerce)
6. **Famepilot** (AI reputation management)
7. **DoraDori ERP and Accounts** (garment industry)
8. **Cheersagar ERP**
9. **TVAM astrology**

This **supersedes** the eight page order the research recommended. The user dropped iCareHeal, BankSathi and GetMyUni, added DoraDori and Cheersagar, and kept TVAM despite the research advising against it. Their call, and TVAM is fine as long as it clears the 45 percent rule on domain content rather than leaning on commercial fit.

**Two of the nine have NO repo data at all, only a logo in `home/partnerLogos/`:** DoraDori (`doradori.webp`) and Cheersagar (`cheersagar.svg`). Known: DoraDori is an ERP and accounting system for the garment industry. Cheersagar is an ERP, industry not yet stated. **Both need an interview before they can be drafted**, because there is nothing to write from.

**Still do not give a page to:** *Al Amri Express Partner* (same client and engagement, so a separate page is a near duplicate, the templated-thin pattern exactly; it becomes a section inside the Al Amri study) and *GetMyUni* (its 40M students and 200+ universities are the client platform's scale, not the result of Zyneto's engagement, and presenting borrowed scale as outcome is the fastest way to lose a technical reader).

**Wave two is already in the repo and invisible.** Five named executives in `testimonials.ts` describe engagements with no portfolio entry: Corrib Oil (Ireland, three platforms merged), Mego Afek (Israel, medical devices), Moneteo, Financial Edge, Up in the Air. Each already has a public attributable quote, which roughly doubles the library with the highest evidence content on the site.

## Status: Al Amri Express BUILT 2026-08-07

`/case-studies/grocery-delivery-oman-al-amri-express`, **1,148 body words** measured h1 to the related-links block, matching the benchmark method. Inside the 1,300 cap, level with appinventiv (1,139) and mindinventory (1,158), about 4 percent above the 900 to 1,100 aim. Domain section is 249 words, 21 percent of the body.

Files: `src/data/case-studies/types.ts` (the contract), `src/data/case-studies/<slug>.ts` (copy), `src/data/case-studies/index.ts` (registry with the queue), `src/app/case-studies/[slug]/page.tsx` (dynamic route, `generateStaticParams` from the registry), `src/app/case-studies/page.tsx` (listing). **The other eight drop in as data files, no new page code.**

Verified: tsc clean, 0 em dashes, 0 banned phrases, 1 h1, 11 h2, TechArticle plus BreadcrumbList plus `about` Organization emitted, no `schema.org/CaseStudy`, real store links present.

**Nav:** "Case Studies" added to desktop and mobile between Blog and Portfolio. "Industries" added earlier, rendering only verticals with `live: true`.

**Al Amri has no published metric or quote, so `outcomes` and `clientQuote` are absent.** That is the design working, not a gap.

**One error caught and NOT carried over:** `portfolio.ts` says Al Amri Express takes "UPI/wallet payments". UPI is an Indian rail and is not used in Oman. Every project's portfolio copy needs the same factual pass before it becomes a case study.

**Length lesson from doing it:** the first draft rendered at 1,718 words and took four cut passes. Content fields were 1,219 with roughly 500 more coming from headings, labels, table cells and CTA copy. **Budget chrome at about 40 percent of rendered words**, so aim content fields at 650 to 750 to land near 1,050. Also note the dev server serves a stale response for a few seconds after an edit; add a cache-busting query before trusting a re-measure.

## STYLEBANK, DORADORI AND CHEERSAGAR: THREE PRODUCTS, NOT ONE (2026-08-07)

*(Heading corrected. The section originally read "ARE ONE PLATFORM", which was wrong. Read the paragraph beginning "DoraDori and Cheersagar are SEPARATE PRODUCTS" below before anything else here.)*

From a client-supplied architecture PDF, and it corrects the repo. **The Django project is internally named `cheersagar` and is multi-tenant: doradori, cheersagar, garmef and ahuja each run on their own database, S3 bucket and Redis DB number.** Two of those tenants (garmef, ahuja) appear nowhere else in the repo.

**`portfolio.ts` is WRONG about the stack.** It lists Python, FastAPI, MySQL, GenAI, AstraDB. The real stack is **Django, MySQL, Redis plus Celery, django-crontab running ~35 daily jobs, collectfasta, AWS S3, Google BigQuery as the warehouse, and OpenRouter as the LLM**. That is now two verified factual errors found in `portfolio.ts` (the other being "UPI/wallet payments" on an Oman product), so treat that file as a lead, never as source.

**FIXED IN THE REPO 2026-08-07.** `portfolio.ts` now carries the correct Stylebank stack (Python, Django, MySQL, Redis, Celery, Google BigQuery, OpenRouter, AWS, App Integrations) with a comment recording what was wrong, and the Al Amri entry no longer claims UPI payments on an Oman product. Those were the two errors with hard evidence behind them. **The file still needs a full copy rewrite** (task 27): it describes each client's product to its consumers rather than the engineering engagement, and carries banned register throughout ("cutting-edge", "seamless", "empowering", "hassle-free"). Other entries' stacks are unverified, so do not change them without a source.

**DoraDori and Cheersagar are SEPARATE PRODUCTS from Stylebank** (user, 2026-08-07). They run on **FastAPI and PostgreSQL, with Zoho integration and internal CRM integrations**. Stylebank is Django on MySQL. This resolves what first looked like a contradiction with the architecture PDF: that document lists "Dora Dori ERP" as an *external integration* supplying item summary, BOM, stock and fabric valuation to Stylebank, which is exactly what you would expect if Zyneto built the ERP separately and Stylebank pulls from it. The tenant named `doradori` inside Stylebank is the company as a Stylebank customer, not the ERP codebase. So the three case studies are genuinely three products, not three views of one, which removes the near-duplicate risk flagged earlier.

**`portfolio.ts` COPY FULLY REWRITTEN 2026-08-07.** All 11 descriptions now describe the engineering engagement rather than pitching each client's product to its own consumers. Zero em dashes, zero en dashes (the titles used " – " and now use a colon), zero banned register. Task 27 is closed by this. When adding DoraDori and Cheersagar as portfolio entries, note they have **no images or logos in `public/static/assets/portfolio/`**, only `home/partnerLogos/`, and `Project.image` is required, so assets are needed first.

**DoraDori and Cheersagar engagement facts (user, 2026-08-07): three years, dedicated resources.** Both rails, both commercials blocks and the anonymised draft now carry these. Still missing and still blocking publish: team composition **by role** (dedicated resources gives the model, not the shape), and **one thing that actually went wrong or was descoped on each**. Section 11 on all three drafts is currently a design judgement I inferred from the architecture, not recorded history, and a page where nothing went wrong is a documented fabrication tell.

**THE CONTAMINATION TRAP, and it already happened.** The first Cheersagar draft described BigQuery, Celery over Redis, django-crontab, an OpenRouter call, Periskope delivery, roughly 35 scheduled jobs and two Zoho accounts. **Every one of those is Stylebank's, taken from the architecture PDF and the Django repo.** They were written onto Cheersagar because the three products were believed to be one platform. When the stack correction landed they had to be deleted, not reworded. The same happened to DoraDori: three decisions and the whole section 11 admission were built on a tenancy framing that turned out to be false, and all of it went. **Rule: nothing from the Stylebank PDF or the `cheersagar` Django repo may appear on a DoraDori or Cheersagar page.** What is confirmed for those two is exactly this and nothing more: FastAPI, Python, PostgreSQL, Zoho integration, internal CRM integrations, garment ERP (DoraDori) and garment accounting with reports and AI based business decisions (Cheersagar).

**Never ship the named DoraDori page and the anonymised garment ERP page together.** They are one engagement. Two pages describing one three year garment ERP build, one named and one withheld, identify the withheld client on sight and make the withholding line look like a device. Named is stronger if permission comes through; anonymised is the fallback. A warning note sits at the top of `DRAFT-garment-erp-anonymised.md`.

**Count words, never estimate them. Third time this has bitten.** The anonymised draft claimed section 4 was "roughly 480 words". Measured, it was 605. Earlier in the same body of work the case study length spec was guessed at 1,600 to 2,000 before measurement put the benchmark median at 574, and the logistics page was shipped at 1,113 before measurement showed how thin that was. Every draft now carries a per section table produced by an actual count, and the gate check states the total even when it is over the 1,300 cap, rather than rounding toward the target.

**Link targets checked 2026-08-07 against `src/data/services-list.tsx`.** `/services/data-engineering` **does not exist** and would have 404ed from the Cheersagar draft; it now points at `/services/database-development`. `/services/fastapi-development-company`, `/services/django-development`, `/services/nlp-development`, `/services/database-development` and `/services/predictive-analytics-development` all exist. `/industries/retail-ecommerce` is still **not built** (only `logistics-distribution.ts` exists) and is currently linked from four drafts, so build it first or repoint before any of them ships.

**Famepilot is a CLIENT PRODUCT, not a Zyneto venture** (user confirmed 2026-08-07). So it is a `named-no-metrics` study, "the client" reads normally, and the `about` Organization schema node is honest and should be emitted.

**DO NOT PUBLISH (user instruction 2026-08-07): the database size or its table distribution.** The architecture document gives a figure for total MySQL size and the share held by one table. Both are out of scope for any public page. Name MySQL as part of the stack and stop there. Generalise the same way for every client: infrastructure scale numbers are the client's operational detail, not marketing material, and they are the kind of figure that reads as careless disclosure to a technical buyer.

**Integrations, verified:** EasyEcom (ecom orders, inventory, returns, GRN, putaway; reaches Myntra, Nykaa, Flipkart, Amazon Vendor Central Dropship, Ajio), Stitch ERP (factory production, GRN, defects, costing), Dora Dori ERP (item summary BOM/stock, fabric stock valuation), Zoho Books (invoices, sale orders, credit notes, customers, token refresh), Periskope for WhatsApp group reports, Slack for daily Excel/PDF, Google Sheets plus Apps Script, Google Drive, BigQuery, S3, OpenRouter, Myntra, Textlocal SMS, ipinfo.io for IP-whitelist middleware.

**Django apps:** product (core), easycom_api, zoho_api, return_recon, cataloging, ETL_Pipeline (BigQuery ETL plus LLM style analysis, Celery-driven), campaign, user, cheersagar (project config).

**Why this matters for the queue:** they are three products, but they share one client group and one industry, so the pages can still drift into near-duplicates, which is the templated-thin pattern. The agreed split gives each a genuinely different domain section: **Stylebank** takes multi-tenancy and marketplace channel integration, **DoraDori** takes the apparel product model, costing and production, and **Cheersagar** takes accounting mechanics (job work under Section 143 CGST, delivery challans, ITC-04, consumption at actual issue) plus what an LLM may and may not do over financial data. Do not let those three sections drift toward each other.

## TWO MODES: named and anonymised (added 2026-08-07)

The user asked for case studies buildable **without client details**. Full spec at `Blog/plans/case-studies/ANONYMISED-FORMAT.md`; the code supports both modes already.

**Anonymised pages are NOT thinner.** theninehertz anonymises 74 of 81, median 565 words against 535 for its named ones. Appinventiv's anonymised median is 1,112 against 1,210 named, and its single longest page of any kind is anonymised. Anonymity forces a different filling, not a shorter one: named pages spend words on brand narrative, anonymised ones on mechanism, tables and stack lists. This is also why the domain teardown was the right spine, since its load-bearing section is already client-free and identical across both modes.

**Descriptor formula, exactly five attributes:** sub-segment (never the bare sector), size band as an adjective, region at country or multi-state level (never a city), tenure in years, and one or two operating volumes. **Identifiability test before publishing:** paste it into a search engine, and if one company comes back, cut the most distinctive attribute. A superlative plus a founding decade plus a store count is identification, not anonymisation; theninehertz fails this on its own site with a descriptor that is transparently IKEA.

**What carries credibility instead of the name, ranked:** (1) a quantified BEFORE state, the highest-yield move by far, because fabricators write the after and operators remember the before; (2) a disclosure strip of industry, region, engagement window in months, team composition by role, and full stack; (3) unglamorous named tooling including test, CI, monitoring and security, since nobody invents SonarQube for a fake story; (4) named regulation and what it required in practice; (5) one thing that went wrong or was descoped; (6) a cost band.

**Fabrication tells to avoid:** stacked round percentages (every figure a multiple of five is the clearest one), adjectives carrying the descriptor ("renowned", "leading"), any contradiction between metadata region and narrative region, agency vocabulary inside a client quote, impact without a baseline, and a page where nothing went wrong.

**Schema differences:** omit the `about` Organization node entirely rather than inventing an entity, and never emit Review or Testimonial, because an unnameable reviewer is a spam signal. Keep slugs **outcome-shaped, not service-shaped**, or the study competes with the matching service page.

**The limit, and it matters:** anonymisation removes the need for client PERMISSION. It does not remove the need to know WHAT WAS BUILT. A study cannot be written from a logo and a category. The eight facts that unlock one are listed in `ANONYMISED-FORMAT.md`; six of the eight come from the engineer in a single conversation.

**Dropped by the user 2026-08-07:** the `/portfolio` to `/case-studies` 301, and GetMyUni as a case study candidate.

## Schema, including the trap

**`schema.org/CaseStudy` DOES NOT EXIST. It returns 404. Never emit it.** Use Article or TechArticle with a named `author` Person, BreadcrumbList via the existing `buildBreadcrumbList`, an `about` Organization node for the named client (this is what gives an answer engine an entity to attach the claim to, so omit it for anonymised studies rather than faking it), and `mentions` SoftwareApplication per shipped app with real store URLs. **Never Review or AggregateRating about Zyneto on these pages**, which is disallowed for rich results and carries manual action risk.

## Corrections to earlier notes

The benchmark uses **`/portfolio/<slug>`**, not `/case-study/`, and has **63** case studies, not 64. Roughly 8 to 10 of theirs are anonymised and still get a full page, and those pages are not thinner, which is useful precedent for NDA-bound work.

## What to avoid

No metric without baseline, timeframe and source. No borrowed client scale presented as outcome. No anonymous attributions ("Operations Director, leading retailer") or adjective quotes ("professional and a pleasure to work with"), both unfalsifiable. No gating of any kind. No modals holding primary copy, and note the current `components/portfolio/AllProjects.tsx` hides descriptions in a `ReadMoreModal`, which must not carry over. No bulk template dump; ship one a week.

**Do not port the existing copy.** `src/data/portfolio.ts` describes each client's product to its consumers rather than the engineering engagement, and it carries banned register throughout ("seamless", "transforming", "cutting-edge", "empowering", "hassle-free"). Rewrite every one against the house gates.

**Measurement:** tag `/case-studies/*` as an assisting-touch segment in GA4 and read assisted conversions. Last click will always undercount a decision-stage asset. See [[zyneto-analytics-connections]].
