---
name: no-comments-preference
description: Do not write explanatory comments or docstrings in Zyneto code; the user strips them. Keep only functional directives like eslint-disable.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 9a745bc8-74e3-4626-a542-0ffcc9d9ae49
  modified: 2026-08-10T12:16:26.652Z
---

The user does not want explanatory comments or docstrings anywhere in this project. Restated as "remove comments always" on 2026-08-10 after I had been told twice already: once on the author-pages work, then again across the responsive-image and feature-flag changes. Write code with no prose comments by default.

**This covers every file I write, not just app code.** The third reminder was triggered by Python tools under `tools/blog-visuals/` (`link_guard.py`, `genvariants.py`), which I had given full module docstrings while the TypeScript alongside them was bare. Scripts, generators and one-off tools included. It also covers text a generator *emits*: `genmanifest.py` was writing a "GENERATED, do not edit" header into `image-variants.ts`, and that had to be removed from the template too.

**Why:** it is a settled house style, not a reaction to any particular comment. Re-adding them each time just creates a cleanup pass for them.

**How to apply:** ship the code bare. Put the reasoning that would have been a comment into the change log entry in `Blog/archive/CHANGELOG-2026-08.md` instead, which is where this project already keeps the "why" and where it survives.

**The one exception, and it matters:** comments that are *functional* must stay, because they change behaviour. `// eslint-disable-next-line ...`, `@ts-expect-error`, `// prettier-ignore`. A sweep on 2026-08-10 stripped `// eslint-disable-next-line react-hooks/set-state-in-effect` from `DetailsBlog.tsx` and broke `eslint src/`; eight other files kept theirs. After any comment-removal pass, run `npx eslint src/` and `npx tsc --noEmit` to catch exactly this.

See [[zyneto-sitemap-and-ledgers]] for where the reasoning should live instead.
