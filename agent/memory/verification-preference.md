---
name: verification-preference
description: Do not spin up the live dev-server preview to verify minor text or copy changes; use static checks instead
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 251107c0-8700-4f2c-8ea7-686e3fb943a6
  modified: 2026-08-21T09:00:00.000Z
---

**Do not start the dev-server preview to verify minor changes**, especially copy and text edits. The user said so directly on 2026-08-07 while a 51-route render check was running for a marketing-copy sweep.

**Why:** starting Next, waiting for readiness, and fetching dozens of routes costs minutes and proves almost nothing about a string swap. It reads as busywork on a change whose risk is already covered by cheaper checks.

**How to apply:** for copy, data-file and other low-risk text edits, verify statically instead, and say what was checked:

- `npx tsc --noEmit`
- a source grep with **no leading-context requirement** (see [[zyneto-sitemap-and-ledgers]] for why that specific trap matters)
- `git diff --stat` with insertions equal to deletions, which proves no line was added or lost
- line counts against a backup

Reserve `preview_start` and the render check for changes that are genuinely only observable in the browser: layout, styling, interaction, hydration, client-side data fetching, or a component whose render path could actually break.

**When the change is about what production serves, the dev server cannot answer it and a real build is the only proof.** Established 2026-08-13 publishing 14 industry pages: `pnpm run build` then `next start`, then check status codes and the sitemap. **`npx next build` is NOT this project's build** and fails with a Turbopack and webpack config conflict that looks like a real breakage; `package.json` runs `next build --webpack`. Use the project's script. That build also surfaced a soft-404 the dev server hides completely.

**A second trap, found 2026-08-21, that makes `next start` lie about routing.** This machine's filesystem is **case-insensitive**, and the on-disk prerender cache is keyed by filename, so `.next/server/app/blog/Foo.html` and `foo.html` are the same file. **Whichever case is requested first wins for both.** Verifying a new lowercase-canonicalising redirect this way produced a completely convincing self-redirect loop that does not exist in production, and the same collision would just as easily hide a real one. **Anything about case-sensitive routing must be verified in `next dev`**, which compiles per request and keeps the two URLs distinct. Linux and Vercel are case-sensitive, so this is local-only, which is exactly what makes it convincing.

One caveat worth keeping: when a render check IS run, verify the checker itself first. On 2026-08-07 a route list built with `sed 's|</\?loc>||g'` silently produced nothing usable, because **BSD sed on macOS does not support `\?`**. Every route 404'd and the check reported all 51 clean. Always confirm the probe returns 200 on a known-good route before trusting a clean result.
