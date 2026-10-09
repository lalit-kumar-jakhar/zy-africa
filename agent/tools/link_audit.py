import os as _os
_MISSING = "set BLOG_MANAGE_API_KEY in the environment, see agent/SETUP.md"
"""Monthly internal-link audit across every Active and Scheduled post.

Run it on the first working day of each month, before the next block is
commissioned. It reports rather than changes anything, and it exits non-zero
when a link is broken now or will break on its own publish date, which is the
only class of finding that cannot wait.

  python3 link_audit.py                 full report
  python3 link_audit.py --brief         the numbers and the failures only
  python3 link_audit.py --json out.json also write the raw graph

Why the two link classes are counted separately: blog to blog builds topical
authority, blog to commercial passes it to the pages that convert. A post can
look healthy on the first and contribute nothing to the second.
"""
import collections
import json
import re
import statistics
import sys
import urllib.request

API = "https://api.zyneto.com/api/v1/manage/posts/"
KEY = _os.environ.get("BLOG_MANAGE_API_KEY", _MISSING)
BLOG = re.compile(r'href="https://zyneto\.com/blog/([a-z0-9-]+)"')
COMM = re.compile(r'href="https://zyneto\.com/(services|solutions|industries)/([a-z0-9-]+)"')

# 2,500 to 3,000 words at the published guidance of 5 to 10 links per 2,000
# words lands at 6 to 15. The house target sits at the top of that band because
# the benchmark median is 18 and we are behind it.
TARGET_LO, TARGET_HI = 8, 15
BRIEF = "--brief" in sys.argv


def fetch():
    rows, url = [], API
    while url:
        req = urllib.request.Request(url, headers={"X-API-Key": KEY})
        d = json.load(urllib.request.urlopen(req, timeout=180))
        rows += d["results"]
        url = d.get("next")
    return rows


def build(rows):
    posts = {r["slug"]: r for r in rows if r["status"] in ("Active", "Scheduled")}
    date = {s: (r.get("scheduled_publish_date") or r.get("created_date") or "")[:10]
            for s, r in posts.items()}
    out_b, out_c = {}, {}
    for s, r in posts.items():
        body = r.get("description") or ""
        out_b[s] = collections.Counter(BLOG.findall(body))
        out_c[s] = collections.Counter(f"{a}/{c}" for a, c in COMM.findall(body))
    inb = collections.Counter()
    for s, c in out_b.items():
        for t in c:
            inb[t] += 1
    return posts, date, out_b, out_c, inb


def broken(posts, date, out_b):
    """A link is broken if the target is not reachable by the source's own date.

    The public API hard-filters status='Active', so a live post pointing at a
    Scheduled one is a 404 today. A Scheduled post pointing at a sibling that
    publishes later is a 404 on its own publish day, which is the same defect
    arriving on a delay.
    """
    fails = []
    for s, c in out_b.items():
        for t in c:
            if t not in posts:
                fails.append((s, t, "target does not exist"))
            elif posts[s]["status"] == "Active" and posts[t]["status"] != "Active":
                fails.append((s, t, f"live post points at a {posts[t]['status']} target"))
            elif posts[s]["status"] == "Scheduled" and posts[t]["status"] == "Scheduled" \
                    and date[t] > date[s]:
                fails.append((s, t, f"target publishes {date[t]}, after {date[s]}"))
    return fails


def main():
    rows = fetch()
    posts, date, out_b, out_c, inb = build(rows)
    active = sorted(s for s, r in posts.items() if r["status"] == "Active")
    sched = sorted(s for s, r in posts.items() if r["status"] == "Scheduled")

    print(f"\n  {len(active)} Active, {len(sched)} Scheduled, {len(posts)} in scope")

    for group, name in ((active, "ACTIVE"), (sched, "SCHEDULED")):
        if not group:
            continue
        ob = [sum(out_b[s].values()) for s in group]
        oc = [sum(out_c[s].values()) for s in group]
        ib = [inb.get(s, 0) for s in group]
        print(f"\n  {name}  n={len(group)}")
        print(f"    blog out    mean {statistics.mean(ob):5.2f}  median {statistics.median(ob):3.0f}"
              f"  zero {sum(1 for x in ob if x == 0):3}")
        print(f"    commercial  mean {statistics.mean(oc):5.2f}  median {statistics.median(oc):3.0f}"
              f"  zero {sum(1 for x in oc if x == 0):3}")
        print(f"    blog in     mean {statistics.mean(ib):5.2f}  median {statistics.median(ib):3.0f}"
              f"  zero {sum(1 for x in ib if x == 0):3}")
        hit = sum(1 for x in ob if x >= TARGET_LO)
        print(f"    at or above the {TARGET_LO} link target: {hit} of {len(group)}"
              f" ({hit/len(group):.0%})")

    fails = broken(posts, date, out_b)
    print(f"\n  BROKEN OR WILL BREAK: {len(fails)}")
    for s, t, why in fails:
        print(f"    {s} -> {t}: {why}")

    orph = [s for s in active if inb.get(s, 0) == 0]
    print(f"\n  ORPHANS, Active posts with no inbound link: {len(orph)}")
    if not BRIEF:
        for s in orph:
            print(f"    {s}")

    ind = collections.Counter()
    for s in posts:
        for t, n in out_c[s].items():
            if t.startswith("industries/"):
                ind[t] += n
    print(f"\n  INDUSTRY PAGES receiving a blog link: {len(ind)} of 17")
    if not BRIEF and ind:
        for t, n in sorted(ind.items(), key=lambda x: -x[1]):
            print(f"    {n:>3}  {t}")

    if not BRIEF:
        thin = sorted(((sum(out_b[s].values()), s) for s in sched), key=lambda x: x[0])
        print(f"\n  SCHEDULED POSTS BELOW TARGET, fix before they publish:")
        for n, s in thin:
            if n < TARGET_LO:
                print(f"    {n:>2} links  {date[s]}  {s}")

    for a in sys.argv:
        if a.startswith("--json"):
            pass
    if "--json" in sys.argv:
        out = sys.argv[sys.argv.index("--json") + 1]
        json.dump({"out_blog": {k: dict(v) for k, v in out_b.items()},
                   "out_commercial": {k: dict(v) for k, v in out_c.items()},
                   "inbound": dict(inb), "date": date,
                   "status": {s: r["status"] for s, r in posts.items()}},
                  open(out, "w"), indent=1)
        print(f"\n  graph written to {out}")

    print()
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())
