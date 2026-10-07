---
name: blog-image-pipeline
description: "Unsplash rules for Zyneto blog images: free-only, scene-based queries, the download ping, and the 50/hour budget"
metadata: 
  node_type: memory
  type: project
  originSessionId: 251107c0-8700-4f2c-8ea7-686e3fb943a6
  modified: 2026-08-05T16:55:03.209Z
---

How Zyneto blog feature images and CTA banners get their photos. Tool is
`tools/blog-visuals/fetch_photos.py`; see [[content-delivery-workflow]] for where
the finished images go and [[zyneto-blog-api]] for uploading them.

**Free only, and it already is.** Verified 2026-08-05 across 40 cached results
plus a fresh query: this key's `/search/photos` returns only `asset_type:
"photo"`, no `premium`/`plus` field, zero sponsorships. Unsplash+ (paid) content
has never come through. `is_free()` guards it anyway in case Unsplash starts
mixing paid results into search.

**The download ping is contractual, not technical.** `links.download_location`
returns JSON (`{"url": ...}`), never image bytes. The photo itself downloads
fine from `urls.raw` without ever calling it. It exists to credit the
photographer's download count, it is required by the Unsplash API Guidelines as
a condition of API access, and it **costs one request** off the rate limit
(measured: remaining went 49, then 48). Keep firing it, but only for photos
actually used, never for every search result.

**Budget: 50 requests/hour on the demo tier.** A batch of 4 posts costs roughly
4 searches + 9 pings. Searches cache to `/tmp/blogimg/_search_cache.json` and a
photo already on disk is never re-fetched, so re-running an unchanged config
costs zero. `per_page=24` costs the same one request as `per_page=8`, so always
cast the wide net.

**Query the scene, not the concept.** The recurring failure is a query that is
literally correct and visually wrong. `"robot arm factory automation control"`
for an AI-agents article returned industrial robot arms, which signals physical
robotics rather than software. Same trap previously hit the BPA feature. Name
people, rooms and objects instead: "control room operator monitors screens",
"developer working laptop code screen", "archive shelves documents folders".

**Score candidates, never take `results[i]` by index.** Search responses already
carry `alt_description`, `description` and `slug`, so scoring is free. `REJECT`
kills anything mentioning robots, holograms, circuits, brains, neon or 3D
renders; a per-post `good` vocabulary scores the rest. Retro-tested against the
robot-arm query: **0 of 8 survive**, so the mistake cannot repeat silently.

**The scorer is a pre-filter, not a verdict.** It reads Unsplash's alt text,
which is often thin or missing, so a low score can mean "poorly captioned"
rather than "wrong photo". Of the 9 photos shipped in batch 1, 8 clear the
threshold and 1 does not despite being visually correct. **Always still view
every rendered image before shipping** - that gate has caught 8 defects that
were invisible in source.

## Design for the DISPLAY size, not the canvas (learned the hard way 2026-08-05)

**A feature image is never seen at 1200px.** It renders inside `lg:w-2/5` with
`sizes="(max-width: 768px) 100vw, 600px"` - about **500 CSS px on desktop and
390px on mobile**. A font-size in the 1200-unit design space therefore lands on
screen at roughly **0.42x**, and 0.33x on a phone.

The first batch shipped 18u titles and 13u subtext, which is **7.5px and 5.4px**
on the page (4.2px on mobile) - below the size at which letterforms resolve. I
reviewed all 25 images at full size, where they look fine, and the 2x
rasterisation made them look sharp; neither catches this. **Always view the
render downscaled to 500px before shipping**, not the master.

Working sizes for a 1200u feature canvas: **card/bar title 48u (20px), subtext
36u (15px), caption and graph labels 34u (14.2px), chat messages 33u (13.8px).**
Use `px_at()` / `units_for()` in `blog_visuals.py` rather than eyeballing.

Consequences that follow from legible type, all of which forced layout changes:
- **Four cards will not fit across the canvas.** 4 x 228u cannot hold a title
  and a subtitle. Use a 2x2 cycle (agents) or stack vertically (pipeline).
- **Do not stack a title over a subtitle in a short card.** 48u + 36u in a 112u
  box is 75% fill and the descender sits 4u off the edge. Either make the card
  ~190u tall, or use `bar()`, which puts title left and detail right on ONE line
  and drops the fill to 46%. `box()` now raises above 68% fill.
- **CTA banners were never the problem.** They render at ~800px in the body,
  near 1:1, so their 26u/14.5u type is already correct. Only feature images sit
  in a narrow column.
- Inline diagrams render at ~760px (`p > img` is 100% width), so ~0.63x - worth
  checking but far less severe than the hero.

**`LOGO_ZONE_FEATURE` exists because widening a layout ran it under the logo**
(a measured 76x42u collision). Every feature layout passes it to
`check(..., avoid=)`. Never re-derive the logo box by hand.

## Inline diagrams: a different multiplier, not the same numbers

**Do not copy the feature-image sizes into `diagram_kit.py`.** Both are 1200-unit
canvases, but they display at different widths, so they need different scaling:

| | Display width | Scale | Title | Body | Floor |
|---|---|---|---|---|---|
| Feature image (`lg:w-2/5`) | ~500px desktop, 390px mobile | 0.42x | 48u | 36u | 33u |
| Inline diagram (`lg:w-5/9`) | ~700px desktop, ~343px mobile | 0.58x | 34u | 22u | 20u |

The diagram column is wider, so it needs **noticeably less** scaling up to land in
the same place on screen. A first pass set diagrams at 42/28/26/23 by reusing the
hero reasoning and the user's verdict was that the text then dominated the
diagram instead of labelling it. **34/24/24/22/20 is the agreed ratio** (19.8px
title down to 11.7px small on desktop) - `TITLE/SUBTITLE/LABEL/BODY/SMALL` in
`diagram_kit.py`, and specs should use those names rather than literals.

Mobile stays weak (a 1200u canvas in a ~343px column is ~0.29x). That is
inherent: **a dense diagram should be simplified, not shrunk**, and the load-
bearing information belongs in the prose too.

Practical notes for the next diagram:
- `header()` keeps title and subtitle to ONE line, shrinking within range, and
  raises if the copy is too long - because every spec discards the returned
  height and hardcodes its body offset, so a wrapped title lands on the diagram.
  Titles ~55 chars, subtitles ~90.
- `node_box()` measures wrapped text and raises if it will not fit; use
  `node_box_height()` to size a row to its tallest member (`build_flow` does).
- Raw `<text>` elements bypass every guard. Use `text_block(..., width=)` for
  anything that could grow, or it silently overflows into the next box.

**Status 2026-08-05: the existing diagrams were NOT re-rendered** (user: "skip
the current batch"). The CDN and every published post still hold the ORIGINAL
small-type diagrams. Apply the new scale when creating new images, and re-render
an old one only if you also re-upload it.

`Blog/images/` and `Blog/blog-visuals/` were **deleted after publishing**, once
every artefact was verified on the CDN (12 heroes and 8 banners byte-identical;
the 13 local diagrams were a stale oversized re-render and regenerable from
`specs_batch1.py`). Rebuild with `render_batch1.py` / `visuals_batch1.py` if a
diagram is ever needed again - the specs are the source, not the PNGs.

**All ten feature archetypes were swept on 2026-08-05** and now sit at 10px+
minimum on screen, with primary content at 13-20px: loop, pipeline (bars),
graph, chat, converge, chart, code, diagonal, iceberg, funnel, versus. Bigger
type forced real layout changes in most of them - if you touch one, expect to
re-derive geometry rather than just bump a number. Three collisions only showed
up once the type grew: a right-hand card 48u too narrow for its label, an
iceberg waterline label overlapping the first item by 72u, and the logo
collision above. Each now raises instead of rendering wrong.

## Replacing an image, and deleting the old one

The media endpoint is **POST-only by design** - there is no DELETE. So:

- **Upload replacements under a versioned name** (`<slug>-hero-v2.png`), never
  the original. Storage uniquifies a colliding name into an unpredictable
  `hero_XYZ.png`, leaving two near-identical files nobody can tell apart.
  `tools/blog-visuals/reupload_heroes.py` does this and writes
  `Blog/replaced-heroes.json` recording old and new paths.
- **Delete server-side** with `python manage.py prune_blog_media`
  (`blog/management/commands/`). Dry run unless `--delete`.
- **A file is in use if the filename appears in any post or revision BODY**, not
  just in an image field. Inline diagrams and CTA banners live in the HTML, so a
  field-only check would delete every diagram on the site. It also protects
  images held in a revision's `previous` rollback snapshot. Verified by
  `tools/preview-test/run_prune_test.py`, 9 assertions, all passing.
- The test harness needs **python3.12** (`python3` here is 3.9, too old for
  Django 6).

## Batch 3 (2026-08-06): what the automated checks could not see

**Text scoring cannot see a photograph.** `fetch_photos.py` scores on
alt_description/description/slug, which is cheap and catches the robot-arm
class of error, but nothing more. First pass for batch 3 returned, all with
good scores: a night-time car-crash scene, a black-and-white vintage car, a
thrift-shop shelf of textiles, and two server racks lit in saturated blue and
green - exactly the glowing-hardware aesthetic REJECT exists to stop, invisible
to a keyword test. **Always build a contact sheet and LOOK before rendering
anything on top of them.** Two rounds of re-querying fixed it; the queries that
worked named a mundane scene ("stacked paper files on office desk",
"employees walking office building lobby") rather than a dramatic one.

**Two photos of the same object are not two photos.** The fallback query
returned two near-identical shots of one wall panel, which cannot serve a post
that needs two distinct photo bands.

**`t_photo` now takes `focus` and `bright`** so a post carrying two photo bands
varies the crop, not just the picture.

**New CTA guard: headline width vs the motif.** `t_metrics` and friends checked
only the motif's own bounds, so an over-long headline ran silently UNDERNEATH
the tiles - "Accurate After Launch, Not Just in the Demo" disappeared behind
them and every automated check passed. `_copy()` now takes `maxw` (the room
before the motif) and raises. Verified 0 of the 16 shipped batch-1/2 banners
violate it.

**Calibrate an overflow check before trusting it.** `text_w()` carries the
kit's WRAPPING constant (0.52 em), deliberately pessimistic so wrapped text
never overruns. Used directly as an OVERFLOW test it rejected a headline that
demonstrably rendered fine. Real advance measured from the rendered banners is
~0.43 em, so `ADVANCE = 0.83` scales it. Same mistake, same fix, as the diagram
card checks. See [[zyneto-internal-linking]] for the sibling calibration story.

**Feature archetypes: all ten were used after batch 3.** pipeline (multimodal),
matrix (ai-document-management, NEW in `layouts3.py`), versus
(securing-enterprise-ai). The next batch needs new archetypes, not a rotation.

## Ceilings the builders enforce, and the ones they do not. Wave 4, 2026-08-21

**These raise a build error, so they cost one round trip each unless you plan for them.** `t_chips` takes 3 chips, `t_funnel` 3 stages, `t_bubbles` 3 messages inside an 800x300 CTA. `t_graph` node centres must sit inside x 34 to 766 and y 34 to 266 and clear the logo zone at (652, 24) to (764, 64). CTA headline and subtext room varies **per template, 458px to 560px**, so a subtext that fits one template clips in another. Six of six non-photo subtexts were over on the first pass; `build_wave4_visuals.py` now pre-flights all forty strings in `check_ratio()`, which is worth copying forward.

**These pass every check and still ship broken, so look at the PNG.** `build_timeline` **silently drops a mark when two share a position**: two marks at 0.0 rendered as one and the static overflow guard was happy. `bad_note` renders **bold** while `_fits` measures it with the regular advance, so a bold string passes and then clips off the canvas; **treat 90 characters as the real ceiling**. And `node_box_height` disagrees with `node_box` by a fraction at exactly 3 title lines plus 5 sub lines, 256.16u, which makes a `build_flow` step in that shape unfixable by raising `height` because `bh` comes from the tallest step. Shorten the sub.

**Score the photo, then look at it.** A wave 4 query scored a result on the token "switch" and returned a vintage radio panel of toggle switches for a database migration post. The vocabulary matched and the scene did not. A dark replacement then needed `bright` at 1.45 against the usual 0.58 to 0.70 band, so brightness is per photo rather than per wave.
