import os as _os
_MISSING = "set BLOG_MANAGE_API_KEY in the environment, see agent/SETUP.md"
"""Push the internal-linking pass to live posts via PostRevision.

Every target post is Active. Writing straight to the post would be an
unreviewable change to a ranking URL with no way back, and flipping status is
worse - it 404s the URL until the cron runs. A revision keeps the post Active
throughout and leaves a `previous` snapshot, so `revert` undoes any post
individually.

Usage:
    python3 push_links.py              # dry run, writes nothing
    python3 push_links.py --limit 1    # push a single post and verify
    python3 push_links.py --go         # push all
    python3 push_links.py --revert     # roll back everything from the log
"""
import json
import sys
import time
import urllib.error
import urllib.request
from zy_paths import zy

KEY = _os.environ.get("BLOG_MANAGE_API_KEY", _MISSING)
BASE = "https://api.zyneto.com/api/v1"
LINKED = zy("Blog/reports/bodies-linked.json")
BEFORE = zy("Blog/reports/bodies.json")
LOG = zy("Blog/reports/link-push-log.json")
NOTE = "Internal linking pass: contextual blog-to-blog links"


def call(method, path, payload=None):
    data = json.dumps(payload).encode() if payload is not None else None
    req = urllib.request.Request(
        BASE + path, data=data, method=method,
        headers={"X-API-Key": KEY, "Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=90) as r:
            body = r.read().decode()
            return r.status, (json.loads(body) if body.strip() else {})
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode()[:400]


def push_one(slug, body):
    """Create a revision, apply it, and confirm the live body actually changed.

    The table of contents is captured before and compared after. It is derived
    from heading anchor ids at save time, so it is the most sensitive detector
    of an accidental body corruption - and a silently emptied TOC on a ranking
    page would be an expensive thing to notice late.
    """
    st, pre = call("GET", f"/manage/posts/{slug}/")
    if st != 200:
        return None, f"pre-read failed {st}"
    toc_before = pre.get("table_of_content") or []

    st, rev = call("POST", "/manage/revisions/",
                   {"post": slug, "description": body, "note": NOTE,
                    "status": "Draft"})
    if st not in (200, 201):
        return None, f"create failed {st}: {rev}"
    rid = rev.get("id")
    st, out = call("POST", f"/manage/revisions/{rid}/apply/")
    if st not in (200, 201):
        return rid, f"apply failed {st}: {out}"
    st, post = call("GET", f"/manage/posts/{slug}/")
    if st != 200:
        return rid, f"readback failed {st}"
    live = post.get("description", "")
    if live.count('href="https://zyneto.com/blog/') != \
            body.count('href="https://zyneto.com/blog/'):
        return rid, "readback link count mismatch"
    if (post.get("table_of_content") or []) != toc_before:
        return rid, f"TOC CHANGED ({len(toc_before)} entries before)"
    if post.get("status") != "Active":
        return rid, f"status is {post.get('status')}, expected Active"
    return rid, None


def main():
    args = sys.argv[1:]
    src = LINKED
    if "--file" in args:
        src = args[args.index("--file") + 1]
    linked = json.load(open(src))
    before = json.load(open(BEFORE))
    # A second pass runs against bodies that already carry pass-one links, so
    # the "before" side has to be the current live text, not the original cache.
    missing = [s for s in linked if s not in before]
    if missing:
        cur = json.load(open(
            zy("Blog/reports/bodies.json")))
        before = {**before, **cur}

    if "--revert" in args:
        log = json.load(open(LOG))
        for slug, rid in log.items():
            st, out = call("POST", f"/manage/revisions/{rid}/revert/")
            print(f"  revert {slug}: {st}")
        return

    limit = None
    if "--limit" in args:
        limit = int(args[args.index("--limit") + 1])
    go = "--go" in args or limit is not None

    slugs = sorted(linked)
    if limit:
        slugs = slugs[:limit]

    added = sum(linked[s].count('href="https://zyneto.com/blog/') -
                before[s].count('href="https://zyneto.com/blog/') for s in slugs)
    print(f"{'PUSHING' if go else 'DRY RUN'}: {len(slugs)} posts, {added} new links")
    if not go:
        print("\nre-run with --go to push, or --limit 1 to try one first")
        return

    log, fails = {}, []
    for i, slug in enumerate(slugs, 1):
        rid, err = push_one(slug, linked[slug])
        if rid:
            log[slug] = rid
        if err:
            fails.append((slug, err))
            print(f"  [{i}/{len(slugs)}] FAIL {slug}: {err}")
        else:
            n = (linked[slug].count('href="https://zyneto.com/blog/') -
                 before[slug].count('href="https://zyneto.com/blog/'))
            print(f"  [{i}/{len(slugs)}] ok   {slug}  (+{n})")
        json.dump(log, open(LOG, "w"), indent=2)
        time.sleep(0.4)

    print(f"\npushed {len(log)}, failed {len(fails)}")
    print(f"revision ids logged to {LOG} (python3 push_links.py --revert undoes all)")


if __name__ == "__main__":
    sys.exit(main())
