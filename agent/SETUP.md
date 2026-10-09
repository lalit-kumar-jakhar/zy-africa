# Setup on a new machine

## 1. Two environment variables

Every script here reads its credentials from the environment. Nothing in this folder holds a live key.

```bash
export BLOG_MANAGE_API_KEY="..."
export UNSPLASH_ACCESS_KEY="..."
```

The values are in the Zyneto password store, and `BLOG_MANAGE_API_KEY` is also in `.zyneto-env` at the workspace root, outside this repo. **Do not paste them into a file in this repo.** It has a remote.

## 2. Restore the working layout

The toolchain expects the content operation to sit beside the two application repos, because the scripts resolve `Blog/` and the frontend from a shared workspace root:

```
<workspace>/
  Blog/                  ledgers
  tools/blog-visuals/    the toolchain
  zyneto-frontend/       this repo
  zyneto-backend/
```

**The directory does not have to be called `Zy` any more.** Since 2026-08-24 the scripts derive the root instead of hardcoding it: `zy_paths.py` walks up from its own location until it finds a directory containing `zyneto-frontend/`, which resolves correctly whether the scripts are running from `agent/tools/` in this repo or from `tools/blog-visuals/` after the restore below. Set `ZY_ROOT` to override it if the layout is unusual; a wrong value aborts with a named error rather than failing later on a missing file.

From a fresh clone of `zyneto-frontend`:

```bash
cd <parent-of-zyneto-frontend>
mkdir -p Blog tools/blog-visuals
cp zyneto-frontend/agent/ledgers/*.md      Blog/
cp zyneto-frontend/agent/tools/*.py        tools/blog-visuals/
```

**`zy_paths.py` is copied by that glob and every script imports it, so do not omit it.** No path constant needs editing any more. Confirm the root resolves before running anything else:

```bash
python3 -c "import sys; sys.path.insert(0,'tools/blog-visuals'); import zy_paths; print(zy_paths.ZY_ROOT)"
```

Expect the workspace directory holding `Blog/` and `zyneto-frontend/`. If it prints the wrong place, export `ZY_ROOT` and it wins over the search.

## 3. What is not in here, and does not need to be

**Rendered images.** About 90 MB of diagrams, feature images and CTA banners across `Blog/images-wave*` and `Blog/visuals-wave*`. **They are already on the CDN and referenced by absolute URL in the published posts**, so nothing breaks without them. The per-wave spec files were removed on 2026-08-26; the archetype libraries they called (`blog_visuals.py`, `layouts2.py`, `layouts3.py`, `cta_layouts.py`, `diagram_kit.py`) are still here, so a new set is written against those.

**Unsplash source photos.** Cached in `/tmp/blogimg` on the old machine, refetchable with `fetch_photos.py`. Note the rate limit is 50 requests an hour and the download ping costs one.

**`tools/preview-test`.** 102 MB, a Django test harness for the revision flow. Useful, not needed to resume content work.

## 4. Restore memory into Claude Code, optionally

Claude Code derives its memory path from the project path, so memory captured on one machine does not follow the folder. Two options:

- **Leave it here.** `README.md` points at `memory/`, and a session reads it on request. Simplest, and it keeps memory versioned.
- **Copy it back** to `~/.claude/projects/<slug>/memory/` on the new machine, where `<slug>` is the project path with slashes replaced by dashes. Then it loads automatically each session.

The first option is safer, because versioned memory cannot silently diverge from the ledger.

## 5. Verify the restore

```bash
python3 tools/blog-visuals/link_audit.py --brief
```

Expect zero broken links. If it cannot reach the API the key is missing.
