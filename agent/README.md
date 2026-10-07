# Zyneto content and SEO operations

The standards, the quality gates and the toolchain. Trimmed on 2026-08-26: the finished blog drafts, the executed plans, the dated audits and the one-off batch scripts were removed. Blog content now lives in the database.

**Read in this order:** this file, then `memory/MEMORY.md`.

**Moving to a new machine:** `SETUP.md`.

---

## Standing rules, non negotiable

From the user directly. These override any default behaviour.

**Git is the user's.** Never run `git add`, `commit`, `push` or `pull`. Prepare changes, say what is ready, the user decides what lands.

**Deployment is never a task and is never raised.** The user owns merge and deploy timing. Do not list it, do not ask, do not flag it.

**Environment variables are changed directly in production by the user.**

**Never invent** a client, project, metric, award, certification, office or capability. If a fact cannot be verified, leave it out and say so.

**Never write a review date into page copy.** No "Reviewed on 12 August", no "as of August 2026". Statutory dates inside the subject matter are fine.

**Ship code bare.** No comments or docstrings unless functional, such as an eslint directive. Reasoning goes in the ledger change log.

**Do not start the dev server to verify a copy edit.** `memory/verification-preference.md` has what to run instead, and the two traps that made a verification lie.

**Update the ledger by default, never ask.** Finishing work includes the change log entry and the backlog row, in the same turn, without announcing it.

**Do not use subagents, workflows or deep research unless asked.**

---

## What is here

| Folder | What |
|---|---|
| `memory/` | 21 memory files. Index in `memory/MEMORY.md` |
| `ledgers/` | `AUTHORED-POSTS.md` is the log of the 49 posts written here, for judging them on Search Console later. `LEDGER.md` is the generated change log and the cooling-off windows. `BLOG-README.md` explains it |
| `tools/` | 37 scripts. Quality gates, feature images and CTAs, posting, internal linking |
| `PROMPT.md` | The operating prompt for any content work |
| `SETUP.md` | Environment and secrets |

---

## This is a snapshot, and that matters

The live working copies are outside this repo, at `../../Blog/` and `../../tools/blog-visuals/`, and **the project root is not a git repository**, so those copies are unversioned.

**On the machine this was captured from**, the working copies are canonical and this folder is the backup. **On a new machine**, this folder is canonical and `SETUP.md` restores it to the working layout.

**Do not edit both.** Pick one as canonical for the machine you are on and keep the other as a copy, or the ledger will fork and the fork will not be obvious until two sessions disagree about what was done.

---

## Secrets are not in here

Every script that needs a credential reads it from the environment. The originals under `../../tools/blog-visuals/` hardcode the same values in 32 files; the copies here were scrubbed on the way in, because this repo has a remote and those did not. `SETUP.md` lists the two variables to export.
