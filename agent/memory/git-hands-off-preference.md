---
name: git-hands-off-preference
description: Never run git write operations — the user owns all git actions manually
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 43b06a1f-d5ce-450b-86ff-03b16805d5eb
  modified: 2026-08-07T11:37:01.597Z
---

Never run `git add`, `git commit`, `git push`, or `git pull` in this project. The user handles all git operations themselves.

**Why:** The user stated this directly on 2026-08-04, after initially allowing commits. They want full manual control over what enters git history and when.

**How to apply:** Make and verify code changes in the working tree only. Leave everything unstaged and uncommitted. Do not stage, commit, branch, push, pull, or reset without an explicit, specific request. When work is done, tell the user what changed and let them stage/commit it. Also avoid other history-mutating git commands (reset, rebase, checkout of files) unless explicitly asked.

## Deploy is theirs too, and must never be flagged

**Do not mention deploying, merging branch `vikas`, or the fact that finished work is not live.** The user said so directly on 2026-08-07: *"never flag this. leave it to me."*

**Why:** deploy timing is entirely their call, and repeating "this is committed but not deployed" or "production still returns 404" at the end of every task is noise about a decision they have already made.

**How to apply:** never open a status report with deploy state, never list "deploy" as a pending item or a blocker, and never present other work as queued behind it. Do not check production HTTP status to prove a page is not live. Report what changed in the code and stop there. `Blog/STATIC-PAGES-LEDGER.md` may still record deployment state as a fact for continuity, but it does not get surfaced in conversation. See [[zyneto-sitemap-and-ledgers]].
