---
name: zyneto-blog-api
description: "How to push blog posts programmatically to Zyneto via the management API at api.zyneto.com — auth, endpoints, payload shape, and the content rules that silently break posts"
metadata: 
  node_type: memory
  type: reference
  originSessionId: 2b3159df-1d24-4e47-aee4-1c257a74fc81
  modified: 2026-08-24T00:00:00.000Z
---

Blog posts can be published to Zyneto programmatically instead of by hand in Django admin. Built 2026-08-04. Full docs live in the repo at `zyneto-backend/blog/README.md`.

**Base URL:** `https://api.zyneto.com` (always https; a 301 on POST drops the body). Detail/read endpoints need a **trailing slash** or curl returns HTML, not JSON.
**Auth:** header `X-API-Key: <key>` on every request. Header only, never a query param.

**Key** (user asked for it to be stored here, 2026-08-04):
```
BLOG_MANAGE_API_KEY=$BLOG_MANAGE_API_KEY
```
Same value lives in the backend server's `.env`. It fails closed, so a 403 usually means the key is missing or the app was not restarted after setting it.

## Endpoints (all under `/api/v1/manage/`)

| Method | Path | Purpose |
|---|---|---|
| POST | `/posts/upsert/` | **Preferred.** Create, or update if the slug exists. 201 created, 200 updated. Idempotent, so re-pushing a revised draft is safe |
| GET | `/posts/?status=&category=` | List posts of any status (public API only serves Active) |
| GET/PATCH | `/posts/{slug}/` | Read or update one post |
| POST | `/posts/` | Plain create |
| POST | `/media/` | Upload an image (multipart `file`, `folder=post` or `inline`), returns `{path, url}` |

No DELETE by design.

## Payload

```json
{
  "category": "<existing category slug, REQUIRED>",
  "author": "<existing user slug, REQUIRED on create>",
  "title": "...", "slug": "ai-memory",
  "meta_title": "...", "meta_description": "...",
  "description": "<p>..</p><h2>Heading</h2>",
  "tags": ["AI memory"],
  "faqs": [{"question": "..", "answer": ".."}],
  "image_path": "blog/post/cover.png",
  "status": "Scheduled",
  "scheduled_publish_date": "2026-08-10T09:00:00+05:30"
}
```

`author` is chosen per post, not derived from the category. It was read-only and copied from `category.author` until 2026-09-14. Only slug `vikas-choudhary` exists today. PATCH and upsert-on-existing may omit it and the current author is kept.

Statuses: `Active` (live), `Inactive` (default), `Review` (ready for review), `Scheduled` (auto-publishes at `scheduled_publish_date`, which must be future-dated).

## House HTML format for `description` (verified against live posts, 2026-08-04)

The `description` field holds ONLY the body. Observed pattern across published posts:

- **Starts directly with `<p>`. Never include an H1** — the frontend renders the H1 from `title`, so an H1 in the body duplicates it.
- **Headings are `<h2><strong>Text</strong></h2>` and `<h3><strong>Text</strong></h3>`.** The inner `<strong>` is the house style and is fine. Never put attributes on the heading tag; the server injects `id="contentid-N"` / `contenth3-N` itself. Full rules in the TOC section below.
- **Links:** absolute `https://zyneto.com/...` with `target="_blank"`.
- **CTA banners are images wrapped in a contact-us link**, placed between sections:
  ```html
  <p><a href="https://zyneto.com/contact-us" target="_blank"><img alt="THE CTA HEADLINE" src="https://cdn.zyneto.com/media/uploads/YYYY/MM/DD/slugified-headline.png" style="height:300px; width:800px"/></a></p>
  ```
  Banner size is 800x300, `alt` is the CTA headline. Two per post, one mid-article, one before the closing section.
- Body ends with a plain `<p>` conclusion. No trailing text CTA (the banner is the CTA).
- FAQs are used consistently, ~5 to 6 per post.
- **Always send tags** (user rule, 2026-08-04). Older posts have none, but new posts must.

**Tags are a browsable taxonomy, NOT keywords. Do not derive them from the keyword strategy** (learned the hard way 2026-08-04: doing that created 40 junk tags, 8 of them literal questions like "what is web scraping", each attached to exactly one post, so every tag was a dead-end archive page).

- Match the house vocabulary: **short Title Case topic labels, 1 to 3 words.** Existing set includes SEO, Machine Learning, Data Science, Deep Learning, AI applications, Trends in AI, Web Scraping, Scraping, Python, DevOps, CI/CD, React Native, Mobile App Development.
- **Reuse existing tags before inventing new ones** (fetch `/api/v1/blog/tags/` first). A tag should group several posts; if it can only ever apply to one article, it is a keyword, not a tag.
- **`/api/v1/blog/tags/` is PAGINATED** — 25 per page inside `{count, total_pages, results}`. Reading page 1 only shows half the taxonomy and leads to inventing tags that already exist. As of 2026-08-05 there are **53 tags across 3 pages**, including precise ones worth preferring over generic stand-ins: AI Agents, Enterprise AI, RAG, Knowledge Graphs, Data Extraction, Workflow Automation, Conversational AI, Predictive Analytics.
- **Tags are written as `tags` but read back as `tag`** (singular, a list of `{title, slug}`). Verifying a push by checking for a `tags` key reports every post as untagged.
- Never a question, never a comparison phrase ("fastapi vs flask"), never "X for business" or "benefits of X".
- 3 to 4 per post is plenty.
- Tag matching on write is case-insensitive, so an existing lowercase row gets reused rather than re-created with better casing. Fix casing in admin.
- **`meta_keywords` is where the SEO keyword phrases belong** (primary + secondary from the keyword strategy). Different field, different job.

Purge orphaned tags manually with:
`Tag.objects.annotate(n=Count('post')).filter(n=0).delete()` (the M2M has no related_name, so the reverse accessor is `post`).

**Tables must use CKEditor's own markup, NOT semantic `<thead>`/`<th>`.** The site styles tables with `.detailDataBlogContent table > tbody > tr > td { padding: 8px }` and supplies **no borders at all**, so a `<thead>`/`<th>` table renders borderless with an unpadded header row. Match the published posts exactly:

```html
<table cellspacing="0" style="border-collapse:collapse; border:none; width:100%">
  <tbody>
    <tr><td style="border-color:#000000; border-style:solid; border-width:1px; vertical-align:top; width:253px">
      <p style="text-align:center"><span style="color:#000000"><strong>Header cell</strong></span></p></td>
    ...
```
Header row is just the first `<tbody>` row with `<strong>`. Every cell carries the inline border, and wraps its content in `<p style="text-align:center"><span style="color:#000000">`.

**Inline images must be a DIRECT child of a `<p>`** (`<p><img ...></p>`). The rule `.detailDataBlogContent p > img { width:100% !important }` makes them responsive, and it does not match `p > a > img`, which is why the CTA banners fall back to their inline 800x300 size.

## H2 / H3 and how the table of contents is built (verified 2026-08-05)

`table_of_content` is computed in `Post.save()` (`blog/models.py`, around line 158) by walking the description. It is read-only over the API; anything sent is ignored. Write the headings correctly and the TOC follows.

**How it works.** Only `<h2>` and `<h3>` are scanned; **h4 and deeper are invisible to the TOC**. Output is a FLAT array of `{name, id}` — each h2 followed by its own h3s — with ids `contentid-N` for h2 and `contenth3-N` for h3, numbered independently in document order. The id is then written back onto the heading element so the anchor resolves.

**Rules that decide whether a heading reaches the TOC:**

- **Headings must be top-level siblings.** h3s are collected with `find_next_siblings()` from their h2, so a heading nested inside a `<div>`, `<section>` or any wrapper is never linked to its parent h2. Keep the body flat.
- **An h3 before the first h2 is dropped entirely** — no id, no TOC entry. Always open a section with h2.
- **No attributes on the heading tag.** `<h2 id=...>` or `<h2 class=...>` breaks id injection; the TOC entry then points at an anchor that does not exist.
- **No HTML entities and no `&nbsp;` / `\xa0` in heading text, and no `<span>` inside a heading.** This is the subtle one and it bites silently. Id injection is guarded by `if str(tag) in self.description`, a raw substring test, but BeautifulSoup has already decoded `&nbsp;` to `\xa0` (and the inline-style cleaner has already rewritten `span` styles), so the serialized tag no longer matches the source and **the heading gets no id at all**. Verified on the live post `ai-for-fraud-detection-a-quick-guide`: two headings ending in a stray `&nbsp;` lost their ids, taking 6 TOC entries down with them. Plain ASCII heading text only; a trailing space typed in CKEditor is enough to break it.
- Self-heals on a later save (the stored description then holds the literal character), but the damage is live until someone re-saves the post.

**What the frontend actually renders.** The server TOC has **no `level` key**, and `DetailsBlog.tsx` does `level: (t.level || "h2")`, so every entry is treated as h2. Live behaviour today: the sidebar shows **h2 entries only, no nesting, and silently omits any entry whose anchor is missing** (the fraud post has 31 TOC entries and renders 6 links). Practical rule: **anything that must appear in the TOC has to be an h2.** Use h3 for on-page structure and SEO, not for navigation.

**Deployment hazard in the checked-out frontend (not live yet, 2026-08-05).** The `useEffect` at `DetailsBlog.tsx:88` re-syncs DOM heading ids to the TOC order. Because every entry defaults to level h2, `tocH2` becomes the whole interleaved list and the Nth `<h2>` element gets the Nth TOC id, which is an h3 id as soon as any h2 has children. Simulated against the real payload: `knowledge-graphs-for-business` would have **10 of its 16 h2 ids overwritten** with `contenth3-*` values, breaking those anchors. The fix is to emit `level` from the server (or drop the sync effect); check this before shipping any frontend deploy that touches blog detail.

**Structure target:** roughly **6 to 10 h2 sections** in a 2,500 to 3,000 word article, with h3 for sub-steps inside the longer ones. The first 8 posts were written with 15 to 19 flat h2s and no real hierarchy, which yields a 20-plus item TOC that is hard to scan.

## Images MUST exist before pushing (user rule, 2026-08-04)

**Never push a post to the API with placeholder image text.** Create the inline diagrams first, upload them, embed the real URLs, then push. Decide count and placement yourself: **2 to 5 inline diagrams per post based on what actually needs explaining**, not a fixed quota. CTA banners remain the design team's job.

**Toolchain that works on this machine** (no extra installs needed):
1. Author the diagram as **SVG inside a plain HTML file** (light background, blog body is white).
2. Rasterize with headless Chrome at 2x:
   `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 --screenshot=out.png --window-size=1200,640 file:///abs/path.html`
   (The `CVDisplayLinkCreateWithCGDisplay` errors it prints are harmless.)
3. Downscale to 1x with PIL/LANCZOS for the web copy. ~1200x640 lands around 150KB.
4. **Always view the rendered PNG before shipping it.** SVG that reads fine as markup can render wrong; a cylinder drawn with the top ellipse before the body path came out as a lozenge and only the screenshot showed it.
5. Upload via `POST /api/v1/manage/media/` with `folder=inline`, then embed the returned absolute CDN URL as a plain `<img>`.

**SVG is rejected by the upload endpoint on purpose** (stored-XSS risk on cdn.zyneto.com), so rasterizing is required, not optional.

## Unsplash (feature images and CTA imagery)

Access key (user supplied 2026-08-05): `$UNSPLASH_ACCESS_KEY`

- Search: `https://api.unsplash.com/search/photos?query=<q>&per_page=&orientation=landscape&client_id=<key>`
- **Demo tier: 50 requests/hour.** Cache results locally; do not re-search per render.
- Use for topic-relevant photography behind feature images and as texture in CTA banners.
- Unsplash guidelines: credit the photographer, and hit the `links.download_location` endpoint when an image is actually used.
- Photo `urls.raw` accepts sizing params, e.g. `&w=2400&q=80&fm=jpg`.

**The bar is PREMIUM (user requirement, and my first attempt missed it).** What failed and why:
- A hand-drawn flat-vector character read as clip art. Do not draw cartoon people.
- A heavy magenta duotone turned photos muddy and cheap.
- Big gradient blobs used as decoration look dated. The brand gradient is an ACCENT (thin rule, small mark, button), not a background wash.

What premium actually needs: restraint and craft. Large confident type with tight tracking (-1.5 to -2.5 at hero sizes), generous negative space, a *subtle* dark scrim rather than a flat overlay, fine grain/noise for depth, real photography over illustration, and one small accent instead of several competing ones.

**Diagram standards (user rules, 2026-08-04):**
- **Always make the diagram detailed.** Real labelled examples, not empty boxes: concrete field values, sample rows, named entities. A diagram that only repeats the heading is not worth shipping.
- **Zyneto logo top right of every image.** `zyneto-logo-black.png` on light diagrams, `zyneto-logo-white.png` on dark CTA banners. Both live at the **workspace root**, beside `Blog/` and `zyneto-frontend/`, 1453x521 RGBA transparent. Embed as a base64 data URI (no external file dependency at render time); ~132 units wide at x = 1200-60-132, y = 40. Keep the title wrapped clear of it.
- **No gradient bar across the top, and no "zyneto.com" footer line** (user chose this 2026-08-04 after an A/B). A full-bleed colour stripe on the top edge reads as UI chrome, making the diagram look like a screenshot of a web page, and it becomes noise when repeated 3 to 5 times in one article. The logo carries the brand, so the footer URL was redundant.
- **Instead, bake in a hairline `#e0dbe9` 2px border with rx=12.** The diagrams are white on a white article background, so without it the image has no visible edge (the gradient bar had been doing that job by accident).
- **Upload the @2x master, not the 1x.** These are flat vector-style graphics, so PNG compresses them almost losslessly: 4x the pixels costs only about 13% more bytes (123KB vs 139KB). Rename to a clean filename on upload, because the endpoint slugifies and would turn "name@2x.png" into "name2x.png".
- **Nothing may overflow its box.** Do not eyeball this: compute the layout from wrapped-text metrics, size panels/cards to their content, auto-shrink then wrap long chip labels, and raise a hard error when content exceeds its container so a bad diagram fails loudly instead of shipping.

**Two SVG traps that cost real time here:**
1. **Never set `fill` on `text` in a CSS block.** A CSS rule outranks every per-element `fill=""` presentation attribute in SVG, so `text{fill:#14121a}` silently flattens all coloured labels (white-on-gradient, purple headings, red/green notes) to one ink. Put the default on the root `<svg fill="...">` instead, which is inherited and correctly overridden per element.
2. **Label placement on edges/arrows collides.** Two edges can share a midpoint; position labels at a fraction along the edge instead, and keep arrow labels off the line itself.

Reusable toolkit (kit + specs + renderer) lives at **`<workspace>/tools/blog-visuals/`**, and the versioned snapshot of the same scripts is at `zyneto-frontend/agent/tools/`: `diagram_kit.py`, `diagram_specs.py`, `render_diagrams.py`. Output lands in `<workspace>/Blog/images/` with a `manifest.json` and `contact-sheet.html` (the script recreates the directory).

## Feature images and CTA banners: the approved system (2026-08-05)

**Feature image: 1200x812** (aspect 1.478, matching the existing 826x560; the hero column renders at ~600px so 1200 is 2x). **No title text in the image** — the page renders the H1 separately. The wrapper applies an 18-22px corner radius and a gradient frame, so keep content 46px clear of corners. `generateMetadata` still hardcodes OG `width: 800, height: 600`, which matches nothing; fix separately if link previews matter.

**CTA banner: 800x300**, matching the existing ones. Reserve a logo zone top-right and validate every element against it: an early version shipped a logo sitting on a chip and three chips running off-canvas to x=850.

**Composition:** brand-graded Unsplash photo behind (34% violet blend, 78-92% brightness per post), topic motif in front, contrast from a *localised* soft scrim behind the motif only, so the photograph keeps full brightness elsewhere. Set the crop `focus` per image, since a 1.478 crop of a 16:9 source clips the subject.

**Rotate the archetype so no two posts share a layout.** Pick by the SHAPE of the idea, not the topic: sequence to pipeline, comparison to versus, relationship to graph, magnitude to chart, hierarchy to nesting, choice to matrix.

Feature archetypes built and in rotation: **converge flow, pipeline, versus panels, node graph, chart with forecast cone, code window, chat UI, diagonal before/after, iceberg, funnel.**

CTA templates built and in rotation: **stack, chips, split panel (gradient block + white button), metric tiles, sparkline, chat bubbles, mini funnel, mini graph, code strip, photo band.**

**Photo band is the priority template: aim for a 70 / 30 split (user rule, 2026-08-05).** Roughly 70% of all CTA banners in a batch use `t_photo`, the remaining 30% spread across the other nine templates. Applies from the next batch onward; the first 8 posts shipped at 12.5% photo band and were left as-is.

Three rules, in priority order:
1. **Every post gets at least one photo band banner.** With 2 banners per post, one-each is only 50%, so to reach 70% some posts carry **two** photo bands.
2. When a post has two photo bands they must use a **different Unsplash photo, a different crop focus and different copy**, so they never read as the same banner twice.
3. Otherwise a post's two banners never share a template, and every pair carries a different headline, subtext and button label.

Check the ratio mechanically after assignment rather than eyeballing it; `cta_assign.py` prints the split and fails if it lands outside 60 to 80%.

Toolkit, all in **`<workspace>/tools/blog-visuals/`** (moved out of the session scratchpad 2026-08-05 so it survives): `blog_visuals.py` (imaging, shell, feature builder), `layouts2.py` (feature archetypes), `cta_layouts.py` (CTA templates), `cta_assign.py` (per-post assignment), `build_blog_visuals.py`, `wire_visuals.py` (upload plus wire into drafts). Also there: `md_to_house_html.py`, `publish_post.py`, `sync_markdown.py`, `fix_tags.py`. Output in `Blog/blog-visuals/`. Logos it depends on stay at `<workspace>/zyneto-logo-{black,white}.png`.

**Wiring:** feature to `folder=post` then set `image_path` (the storage path, not the URL); CTA banners to `folder=inline` then replace the `[CTA BANNER: ...]` placeholder text *inside* the existing `<a href="https://zyneto.com/contact-us">` wrapper, emitting `<img alt="..." src="..." style="height:300px; width:800px"/>`.

## Rules that silently break things

- **Categories are never auto-created** and are required. **Authors are never auto-created** and are required on create, referenced by user slug. Tags ARE auto-created from names.
- **Headings must be bare `<h2>`/`<h3>`** with no attributes, or the auto-injected anchor ids fail and the table of contents points at anchors that do not exist.
- **Internal links must be absolute `https://zyneto.com/...`** — anything without the literal `zyneto.com` gets `rel="nofollow"` added, including site-relative `/services/...`.
- **Always read `slug` back from the response.** A title collision silently yields `my-post-2`.
- **`faqs` replaces the whole FAQ set when present; omit the key to leave FAQs alone.**
- `read_time` and `table_of_content` are computed server-side; anything sent is ignored. Dates default to now.
- Datetimes without an offset are read as **Asia/Kolkata**. Always send an explicit offset.
- Images: jpg/jpeg/png/webp/gif, max 5MB. **SVG is rejected** (stored-XSS risk on the CDN subdomain).

## Draft preview (built 2026-08-05)

Unpublished posts used to be invisible: `blog/views.py` hard-filters the public API to `status='Active'`, so a Review/Scheduled/Inactive post 404s on the site. Now:

- **`GET /api/v1/manage/posts/<slug>/preview/`** (API key, read-only) serves a post at **any** status through the *public* `PostSerializer`. That serializer choice is load-bearing: `PostManageSerializer` returns `author` and `category` as slugs, while the detail template reads `author.first_name`, `.bio`, `.image`. Verified the preview payload is byte-identical to `/blog/posts/<slug>/` for the same post.
- **Frontend uses Next.js Draft Mode.** `/api/preview?slug=&token=` validates the slug shape, then the token (timing-safe), checks the post resolves, sets the `__prerender_bypass` cookie, redirects to `/blog/<slug>`. `/api/preview/disable` exits. In draft mode the page reads the manage API with `cache: 'no-store'` and returns `noindex, nofollow, nocache` with a `[Preview]` title prefix; an amber fixed banner shows the status and go-live date.
- **Next MERGES parent metadata into whatever `generateMetadata` returns**, so the preview branch must override every field the root layout sets, not just `robots`. Returning only title+robots left the draft carrying `<link rel="canonical" href="https://zyneto.com">`, two hreflang alternates to the homepage, and the generic site OG/Twitter card — so a preview link pasted to a reviewer unfurled as the Zyneto homepage. Fixed by nulling `alternates: {canonical: null, languages: null}` and giving openGraph/twitter the post's own title, description and hero. Verify by grepping the rendered `<head>`, not by reading the code.
- **One credential only: `BLOG_MANAGE_API_KEY`** (user's call, 2026-08-05 — no separate preview secret to maintain). The token in the URL is `HMAC-SHA256(key, slug)` hex, computed by `blog.permissions.preview_token()` and by `previewToken()` in `src/utils/preview.ts`. **Never put the key itself in the URL**: it grants full write access, and `blog/permissions.py` already refuses to read it from a query param because query strings land in access logs and Referer headers. Hashing also scopes a leaked link to one post — verified that a valid token for post A is a 401 on post B.
- Both sides fail closed when the key is missing or under 32 chars (`MIN_KEY_LENGTH`), so a bad env denies access rather than exposing drafts. `src/utils/preview.ts` imports `server-only`, so a client import breaks the build instead of leaking the key. Neither key nor token appears in the rendered HTML.
- **Django admin** shows an "Open preview" button on the Post change page (`PostAdmin.preview_link`), built from `FRONTEND_BASE_URL` + the derived token. No key set means no link.
- Cross-language check that matters: generate a link in the admin and feed it verbatim to the running frontend — Python's `hmac` and Node's `createHmac` must agree. Confirmed working.
- Preview links do not expire. Rotating `BLOG_MANAGE_API_KEY` invalidates every one of them (and every API client), so rotate deliberately.

**The frontend and backend held DIFFERENT `BLOG_MANAGE_API_KEY` values (found 2026-08-05).** A correctly generated admin preview link returned `Invalid or missing preview token`. Diagnosis order that worked: recompute `HMAC-SHA256(key, slug)` locally and compare to the token in the URL — it matched, proving the *backend* was right and the *frontend* held a different key. The frontend `.env` value returned **403** against `/api/v1/manage/posts/`, the backend's returned 200. Corrected the local `.env`; **the same value must be set in Vercel's env** or preview stays broken in production. Note it breaks twice over: wrong key means a token mismatch *and* the follow-up manage-API call would 403 anyway. The route now returns **501 "Preview is not configured"** when the key is absent or under 32 chars, versus **401** for a genuine token mismatch, so this is self-diagnosing next time.

**Why sharing the URL with the published page is safe** (measured against a production build, 2026-08-05, not reasoned about). Preview and live are the same URL `/blog/<slug>`; only the `__prerender_bypass` cookie differs. Four layers protect the live page's indexability:
1. Anonymous response: `index, follow, max-image-preview:large`, correct per-post canonical, `Cache-Control: s-maxage=300, stale-while-revalidate`, `x-nextjs-cache: HIT`.
2. Draft-cookie response on the SAME URL: `noindex, nofollow, nocache` and `Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate` — Next marks it uncacheable, so no cache layer can ever store it.
3. No cache poisoning: three rounds of preview-then-anonymous left the anonymous response `index, follow` every time. Draft responses never enter the ISR cache.
4. **Production is on Vercel**, whose edge natively bypasses cache on the draft cookie — first-party Next support, not a generic CDN that could be misconfigured to cache `no-store`. **If the site ever moves off Vercel to a CDN with a "cache everything" rule, recheck this assumption.** Googlebot never sends cookies, so it always gets the indexable variant (verified with the Googlebot UA).

`robots.txt` already has `Disallow: /api/`, which covers `/api/preview`. Conclusion: keep the conditional; a separate preview URL would be a less faithful preview without removing real risk.

**Operational note:** a URL requested anonymously *before* the post goes Active caches a 404 for up to 300s (`revalidate`). Newly published posts whose URL was never hit are 200 and indexable immediately. Consistent with the ~10 minute publish-to-visible window below.

Harness that proves all of this: `<workspace>/tools/preview-test/` (see its README, and note `agent/SETUP.md` records that it is deliberately not in the snapshot). **The API key must be >= 32 chars** — `blog/permissions.py` treats anything shorter as unset and denies everything, which looks exactly like a wrong key.

## Rewriting a live post: PostRevision (built 2026-08-05)

`Post` has a single `description`, so refreshing a published article used to mean either saving straight over it with no review, or flipping status away from Active — which drops it out of the public queryset and **404s a URL that is probably ranking** (measured: `status='Scheduled'` on a live post → public detail returns 404). `PostRevision` fixes that: the staged rewrite lives in its own row and the post never leaves `Active`.

**Decision rule — check this before ANY write to an existing post:**

| Goal | Do this | Never do this |
|---|---|---|
| Publish a **new** post later | `PATCH /posts/<slug>/` with `status=Scheduled` + `scheduled_publish_date` | — |
| Rewrite a post that is **already Active** | create a **revision** | set the live post to `Scheduled` — it 404s a ranking URL until the cron runs |
| Fix a typo on a live post | still a revision (or accept it going live instantly via `PATCH /posts/`) | — |

**Recipe I run for a rewrite** (the Aug 27 `flask-vs-fastapi` merge is exactly this):

```bash
# 1. create - prefilled from the post, so send ONLY what changes.
#    Omit image/meta/tags entirely and they carry over untouched.
curl -sX POST https://api.zyneto.com/api/v1/manage/revisions/ \
  -H "X-API-Key: $BLOG_MANAGE_API_KEY" -H "Content-Type: application/json" \
  -d '{"post":"<slug>","description":"<p>...</p>","note":"why","status":"Scheduled",
       "scheduled_publish_date":"2026-08-27T09:00:00+05:30"}'
# 2. read the id back, then preview before it lands:
#    GET /api/v1/manage/posts/<slug>/preview/?revision=<id>
#    or in a browser: <FRONTEND>/api/preview?slug=<slug>&token=<hmac>&revision=<id>
# 3. edit while staged:  PATCH /api/v1/manage/revisions/<id>/
# 4. skip the wait:      POST  /api/v1/manage/revisions/<id>/apply/
# 5. undo after apply:   POST  /api/v1/manage/revisions/<id>/revert/
```

Admin equivalent for the user: **Blog → Posts → tick → Action "Stage a revision"** → *Edit it now* → change what changed → set status `Scheduled to apply` + a date → Save. Revision page has Preview / Apply now / Revert / Discard.

- **Full snapshot, not a patch.** `PostRevision.from_post()` prefills every content field, so applying is an unambiguous whole-content replacement. Tags and FAQs are stored as plain JSON on the revision, so it can never be half-applied.
- **`created_date` is deliberately preserved on apply; only `updated_date` moves.** It is the original publish date and the frontend emits it as `datePublished` with `updated_date` as `dateModified`. Bumping it would tell Google a years-old article is brand new and reshuffle the newest-first listing.
- `previous` captures the pre-apply state, so `revert()` (and the admin action / `POST /revisions/<id>/revert/`) rolls back without backups.
- **Cron `blog.cron.apply_scheduled_revisions`**, beside `publish_scheduled_posts`. Claims each revision with a compare-and-set inside the same transaction that writes the content, so concurrent runs apply once and a failure rolls the claim back instead of marking it Applied with the post unchanged.
- **API:** `/api/v1/manage/revisions/` (list with `?post=<slug>`, create — prefilled from the post, patch) plus `POST /revisions/<id>/apply/` and `/revert/`. No DELETE: discarding is a status change so the audit trail survives.
- **Set a revision's hero with `image_path`, never `image`.** `PostRevisionSerializer` exposes `image_path` as a write-only CharField that validates the file exists in storage; `image` is the raw ImageField and a string path sent to it is **silently dropped**, so the revision applies with no hero change and nothing errors. Same field name as the post payload. Revision `status` defaults to `Draft`, so a created revision never auto-applies.
- **Preview a revision** before it lands: `/api/v1/manage/posts/<slug>/preview/?revision=<id>` overlays the staged content, and the admin's revision page has a matching button. Nothing is written.
- **Admin:** Post action "Stage a revision", plus a PostRevision page with Apply / Revert / Discard actions.
- **Deploy is `python manage.py migrate --run-syncdb`, not `makemigrations`.** This project has **no migrations directory at all** — every app is unmigrated and tables come from syncdb. Verified against a schema with the old tables present: syncdb created only `blog_postrevision` and left existing tables and rows untouched. Note the corollary — syncdb only CREATES tables, it never ALTERs, so adding a *column* to an existing model still needs a manual `ALTER TABLE`.

**`@cleanup.ignore` on PostRevision is load-bearing — never remove it.** A revision is prefilled from its post, so `image` normally holds the *same* storage path the live post uses. django_cleanup hooks post_save/post_delete on every FileField, so without the decorator **discarding a revision deletes the published article's hero image out from under it** — reproduced: the post row still pointed at `blog/post/hero.png` while the file was gone. Verified after the fix that django_cleanup still works normally for `Post` itself; only revisions are exempt. Same reasoning as tags/FAQs being JSON: a revision *references* content, it never owns files.

**Cron cadence is once a day, by the user's choice (2026-08-05)** — `0 0 * * *` for publish, `5 0 * * *` for revisions, staggered so the two never rebuild the sitemap concurrently. Consequence to remember: **the time-of-day part of a scheduled date is advisory** — a post set for 09:00 goes live at the next midnight run. The date recorded *on* the article is still the scheduled time, because `publish_scheduled_posts` backdates anything within `DEFAULT_MAX_BACKDATE_HOURS` (24h) rather than stamping "now", and a daily run always lands inside that window.

Harness: `tools/preview-test/run_revision_test.py` (73 assertions, deterministic). It must wipe `media/` as well as the sqlite file between runs — FileSystemStorage uniquifies a name that already exists, so leftovers turn `hero.png` into `hero_XYZ.png` and every literal-path assertion goes flaky.

## Publishing timing

A cron (`blog.cron.publish_scheduled_posts`, every 5 min via django-crontab) flips due Scheduled posts to Active and stamps `created_date` with the scheduled time. Frontend ISR caches 300s, so allow **~10 minutes** from scheduled time to visible.

Related: [[content-delivery-workflow]] for where drafts are saved, [[zyneto-content-agent-spec]] for the article format that feeds these fields.

## The SEO brief header leaks into the published body. Confirmed 2026-08-21 on 15 posts

`gate_article.py` fails a deliverable whose section 6 header is not separated from the prose by `---`, and that check exists because **the converter otherwise joins the whole brief block into the first published paragraph**. It shipped that way on **15 of the 25 wave posts**, all of waves 1 to 3, each opening with 650 to 710 characters of "SEO Title: ... Meta Title: ... URL Slug: ... Reading Time: 11 min" as visible body text. Caught only by reading link placements; every structural check passed.

**FIXED AT SOURCE 2026-08-24.** All 15 markdown deliverables now carry the `---`, so 29 of 29 separate, and `gate_article.py` no longer accepts the shape that hid it. **The old check required a `---` plus `Reading Time:` somewhere above it, which the whole article satisfied when the only rule sat at the end of section 6**, so it reported PASS on every one of the 15. It now calls `strip_seo_brief` and fails when that function would not fire, which is the property the converter actually depends on rather than a proxy for it.

**Detect it with**: a search for `SEO Title:` or `URL Slug:` or `Target Keyword:` in the first 900 visible characters of the body. **Remove it with**: dropping the single leading `<p>` that ends at `Reading Time:</strong> N min</p>`, which is inert, contains no heading or anchor, and leaves the table of contents untouched.

**The generalisable rule: when a gate starts failing on something new, re-check everything already shipped against it.** Wave 4 was clean only because the check began firing while it was being written.
