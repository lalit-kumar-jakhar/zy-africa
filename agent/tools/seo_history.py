import argparse
import json
import os
import sys
from datetime import date, timedelta

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "../..")
STORE = os.path.join(ROOT, "Blog/data/seo-history.json")
SCHEMA = 1


def load():
    if not os.path.exists(STORE):
        return {"schema": SCHEMA, "events": [], "snapshots": []}
    d = json.load(open(STORE, encoding="utf-8"))
    if d.get("schema") != SCHEMA:
        sys.exit(f"ABORT: store schema {d.get('schema')} != {SCHEMA}")
    return d


def save(d):
    d["events"].sort(key=lambda e: (e["date"], e["label"]))
    d["snapshots"].sort(key=lambda s: (s["source"], s["window"]["start"]))
    json.dump(d, open(STORE, "w", encoding="utf-8"), indent=2)
    print(f"{STORE}: {len(d['events'])} events, {len(d['snapshots'])} snapshots")


def parse_gsc(payload):
    rows = payload["rows"]
    out = []
    for r in rows:
        out.append({
            "date": r["keys"][0],
            "clicks": r["clicks"],
            "impressions": r["impressions"],
            "position": round(r["position"], 3),
        })
    return sorted(out, key=lambda x: x["date"])


def parse_ga4(payload):
    dh = [h["name"] for h in payload.get("dimensionHeaders", [])]
    mh = [h["name"] for h in payload.get("metricHeaders", [])]
    if "date" not in dh:
        sys.exit("ABORT: GA4 payload has no date dimension, cannot build a daily series.")
    di = dh.index("date")
    out = []
    for r in payload.get("rows", []):
        raw = r["dimensionValues"][di]["value"]
        iso = f"{raw[:4]}-{raw[4:6]}-{raw[6:]}" if len(raw) == 8 else raw
        rec = {"date": iso}
        for j, m in enumerate(mh):
            v = r["metricValues"][j]["value"]
            rec[m] = float(v) if "." in v else int(v)
        out.append(rec)
    out.sort(key=lambda x: x["date"])
    if out:
        from datetime import date as _d, timedelta as _t
        lo, hi = _d.fromisoformat(out[0]["date"]), _d.fromisoformat(out[-1]["date"])
        have = {r["date"] for r in out}
        zero = {k: 0 for k in out[0] if k != "date"}
        filled = 0
        cur = lo
        while cur <= hi:
            if cur.isoformat() not in have:
                out.append({"date": cur.isoformat(), **zero})
                filled += 1
            cur += _t(days=1)
        if filled:
            print(f"note: filled {filled} interior day(s) with zeros; GA4 omits zero-traffic dates")
        out.sort(key=lambda x: x["date"])
    return out


def cmd_record(a):
    payload = json.load(sys.stdin)
    while isinstance(payload, dict) and "data" in payload and "rows" not in payload:
        payload = payload["data"]
    daily = parse_gsc(payload) if a.source == "gsc" else parse_ga4(payload)
    if not daily:
        sys.exit("ABORT: payload produced 0 daily rows. Refusing to record an empty snapshot.")
    d = load()
    win = {"start": daily[0]["date"], "end": daily[-1]["date"]}
    d["snapshots"] = [s for s in d["snapshots"]
                      if not (s["source"] == a.source and s["window"] == win)]
    d["snapshots"].append({
        "source": a.source,
        "window": win,
        "days": len(daily),
        "capturedAt": a.captured,
        "daily": daily,
    })
    print(f"recorded {a.source} {win['start']} to {win['end']}, {len(daily)} days")
    save(d)


def cmd_event(a):
    d = load()
    if any(e["date"] == a.date and e["label"] == a.label for e in d["events"]):
        sys.exit("ABORT: that event already exists.")
    d["events"].append({"date": a.date, "label": a.label, "scope": a.scope,
                        "source": a.source, "wentLive": a.went_live})
    save(d)


def series(d, source):
    out = {}
    for s in d["snapshots"]:
        if s["source"] == source:
            for r in s["daily"]:
                out[r["date"]] = r
    return out


def window(ser, start, days):
    got = []
    for i in range(days):
        k = (start + timedelta(days=i)).isoformat()
        if k in ser:
            got.append(ser[k])
    return got


def cmd_compare(a):
    d = load()
    ser = series(d, a.source)
    if not ser:
        sys.exit(f"ABORT: no {a.source} data recorded. Nothing to compare.")
    anchor = date.fromisoformat(a.anchor)
    n = a.days
    pre = window(ser, anchor - timedelta(days=n), n)
    post = window(ser, anchor, n)
    if len(pre) != n or len(post) != n:
        sys.exit(f"ABORT: need {n} days each side of {a.anchor}; "
                 f"have {len(pre)} before and {len(post)} after. "
                 f"Recorded range is {min(ser)} to {max(ser)}. "
                 f"Unequal windows are not comparable.")

    ev = [e for e in d["events"] if e["date"] == a.anchor]
    print(f"anchor {a.anchor}" + (f"  ({ev[0]['label']})" if ev else "  (no event recorded on this date)"))
    print(f"  before: {pre[0]['date']} to {pre[-1]['date']}   after: {post[0]['date']} to {post[-1]['date']}\n")

    straddle = [e for e in d["events"]
                if pre[0]["date"] < e["date"] < post[-1]["date"] and e["date"] != a.anchor and e["wentLive"]]
    keys = [k for k in pre[0] if k != "date"]
    print(f"  {'metric':22} {'before':>12} {'after':>12} {'change':>10}")
    for k in keys:
        b = sum(r[k] for r in pre)
        p = sum(r[k] for r in post)
        if k == "position":
            b, p = b / len(pre), p / len(post)
        pct = (p - b) / b * 100 if b else float("nan")
        print(f"  {k:22} {b:12,.2f} {p:12,.2f} {pct:+9.1f}%")
    if all("clicks" in r and "impressions" in r for r in pre):
        bc, bi = sum(r["clicks"] for r in pre), sum(r["impressions"] for r in pre)
        pc, pi = sum(r["clicks"] for r in post), sum(r["impressions"] for r in post)
        print(f"  {'ctr (derived)':22} {bc/bi*100:11.3f}% {pc/pi*100:11.3f}% "
              f"{((pc/pi)-(bc/bi))/(bc/bi)*100:+9.1f}%")
    if straddle:
        print(f"\n  CONFOUNDED: {len(straddle)} other live change(s) inside these windows:")
        for e in straddle:
            print(f"    {e['date']}  {e['label']}")
        print("  Movement cannot be attributed to the anchor alone.")


def cmd_events(a):
    d = load()
    if not d["events"]:
        sys.exit("ABORT: no events recorded.")
    for e in d["events"]:
        flag = "LIVE " if e["wentLive"] else "code "
        print(f"  {e['date']}  {flag} [{e['scope']:9}] {e['label']}")


p = argparse.ArgumentParser()
sub = p.add_subparsers(dest="cmd", required=True)

r = sub.add_parser("record")
r.add_argument("--source", required=True, choices=["gsc", "ga4"])
r.add_argument("--captured", required=True)
r.set_defaults(fn=cmd_record)

e = sub.add_parser("event")
e.add_argument("--date", required=True)
e.add_argument("--label", required=True)
e.add_argument("--scope", required=True)
e.add_argument("--source", required=True)
e.add_argument("--went-live", action="store_true")
e.set_defaults(fn=cmd_event)

c = sub.add_parser("compare")
c.add_argument("--anchor", required=True)
c.add_argument("--days", type=int, default=14)
c.add_argument("--source", default="gsc", choices=["gsc", "ga4"])
c.set_defaults(fn=cmd_compare)

l = sub.add_parser("events")
l.set_defaults(fn=cmd_events)

a = p.parse_args()
a.fn(a)
