---
name: audit-before-build
description: "Audit content before coding a page, not section by section afterwards; run the automated checker rather than reviewing by hand"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 9a745bc8-74e3-4626-a542-0ffcc9d9ae49
  modified: 2026-08-11T02:36:14.730Z
---

On 2026-08-10 the user said reviewing and fixing an industry page section by section after it was built was too time consuming, and asked for the full content audit to happen **before** the page is built.

**Why:** ten rounds of review after the fact cost more of their time than the build itself, and each round surfaced defects that a pre-build pass over the copy would have caught in one go. It also meant the same defect classes reappeared on the next page.

**How to apply:** verify facts and audit the copy before it becomes a data file, then code, then run the gates rather than asking for a section-by-section review. `industry_page_audit.py` was removed on 2026-08-26 with the industry programme; `link_guard.py`, `gate_page_copy.py` and `standard_audit.py` remain. **Test any new checker against known-good pages first**; the original's first run gave three failures of which two were the checker's own bugs. See [[zyneto-industry-pages]] for the build order and the standards it enforces.
