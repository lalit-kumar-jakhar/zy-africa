import argparse
import glob
import json
import os
import re
import sys
import urllib.request
from zy_paths import zy

ROOT = zy("zyneto-frontend")
DATA = os.path.join(ROOT, "src/data/industries")
CASE_DATA = os.path.join(ROOT, "src/data/case-studies")
API = "https://api.zyneto.com/api/v1/blog/posts/?page_size=100"
RELATED_MIN = 6

STATIC = {
    "/", "/about-us", "/contact-us", "/portfolio", "/blog", "/ai",
    "/privacy-policy", "/terms-conditions", "/cookie-policy", "/thanks",
}

def slugs(path, field="itemSlug"):
    src = open(path, encoding="utf-8", errors="replace").read()
    found = {m.group(1) for m in re.finditer(field + r':\s*"([^"]+)"', src)}
    if not found:
        sys.exit(f"ABORT: no {field} resolved from {path}. Reference data is unusable, "
                 "so every link would pass vacuously.")
    return found

def live_blog_slugs():
    out, url = set(), API
    while url:
        d = json.load(urllib.request.urlopen(url, timeout=30))
        out.update(p["slug"] for p in d.get("results", []))
        url = d.get("next")
    if not out:
        sys.exit("ABORT: blog API returned no posts. Cannot verify blog slugs.")
    return out

def case_study_slugs():
    found = set()
    for f in glob.glob(os.path.join(CASE_DATA, "*.ts")):
        if os.path.basename(f) in ("types.ts", "index.ts"):
            continue
        src = open(f, encoding="utf-8", errors="replace").read()
        m = re.search(r'slug:\s*"([^"]+)"', src)
        if m:
            found.add(m.group(1))
    if not found:
        sys.exit("ABORT: no case study slugs resolved. Every /case-studies link would pass vacuously.")
    return found

def industry_urls():
    cat = os.path.join(ROOT, "src/components/shared/Navbar/Dropdowns/categories.ts")
    src = open(cat, encoding="utf-8", errors="replace").read()
    entries = re.findall(r'url: "(/industries/[^"]+)",(.*?)lastmod:', src, re.S)
    built = {u for u, _ in entries}
    live = {u for u, body in entries if re.search(r"live:\s*true", body)}
    built.add("/industries")
    live.add("/industries")
    if len(built) < 2 or len(live) < 2:
        sys.exit("ABORT: industry urls or live flags did not resolve from categories.ts.")
    return built, live


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--file", help="one data file under src/data/industries")
    args = ap.parse_args()

    svc = slugs(os.path.join(ROOT, "src/data/services-list.tsx"))
    sol = slugs(os.path.join(ROOT, "src/data/solutions-list.tsx"))
    blog = live_blog_slugs()
    cs = case_study_slugs()
    ind_built, ind_live = industry_urls()
    print(f"reference: {len(svc)} services, {len(sol)} solutions, {len(blog)} live posts, "
          f"{len(cs)} case studies")
    print(f"industries: {len(ind_live) - 1} live of {len(ind_built) - 1} built, plus the hub\n")

    # Case studies were outside the scan until 2026-08-13, so a CLEAR result said
    # nothing about them. The gating came out entirely on 2026-08-24, so there is
    # no flag left to consult and a /case-studies link is checked against the
    # registry like any other slug.
    files = ([os.path.join(DATA, args.file)] if args.file
             else sorted(glob.glob(os.path.join(DATA, "*.ts")))
                  + sorted(f for f in glob.glob(os.path.join(CASE_DATA, "*.ts"))
                           if os.path.basename(f) not in ("types.ts", "index.ts"))
                  + [os.path.join(ROOT, "src/data/portfolio.ts")])
    dead = []

    gated_sources = []

    for f in files:
        src = open(f, encoding="utf-8", errors="replace").read()
        name = os.path.basename(f)

        self_url = f"/industries/{os.path.splitext(name)[0]}"
        src_live = self_url in ind_live if self_url in ind_built else True
        if not src_live:
            gated_sources.append(name)

        for m in re.finditer(r'caseStudySlug:\s*"([^"]*)"', src):
            slug = m.group(1)
            if slug not in cs:
                dead.append((name, slug, "no such case study slug"))

        for m in re.finditer(r'[Hh]ref:\s*"(/[^"]*)"', src):
            href = m.group(1)
            base = href.split("#")[0].rstrip("/") or "/"
            if base in STATIC:
                continue
            if base.startswith("/services/"):
                s = base.split("/services/")[1]
                if s not in svc:
                    dead.append((name, href, "no such service slug"))
            elif base.startswith("/solutions/"):
                s = base.split("/solutions/")[1]
                if s not in sol:
                    dead.append((name, href, "no such solution slug"))
            elif base == "/case-studies":
                continue
            elif base.startswith("/case-studies/"):
                s = base.split("/case-studies/")[1]
                if s not in cs:
                    dead.append((name, href, "no such case study slug"))
            elif base.startswith("/industries"):
                if base not in ind_built:
                    dead.append((name, href, "no such industry url"))
                elif base not in ind_live and src_live:
                    dead.append((name, href, "industry not live, 404 in prod"))

        blocks = re.findall(r"relatedPosts\s*[:=]\s*\[(.*?)\]", src, re.S)
        typed = re.search(r"relatedPosts\??\s*:\s*[A-Za-z_$]", src)
        if not blocks and "relatedPosts" in src and not typed:
            dead.append((name, "relatedPosts", "declared but not parseable, so unchecked"))
        for b in blocks:
            listed = re.findall(r'"([^"]+)"', b)
            live = [s for s in listed if s in blog]
            if len(live) < RELATED_MIN:
                dead.append((name, f"relatedPosts resolves {len(live)} of {len(listed)}",
                             f"RecentBlog is passed limit={RELATED_MIN} and renders only what resolves, "
                             f"so this section ships short. Pad the tail with live posts"))

    # The homepage industries strip is GENERATED from categories.Industries as of
    # 2026-08-13, so there are no urls here to resolve and every link is valid by
    # construction. What this guards now is that it stays generated. It was a
    # hand-kept list for a long time and it drifted badly: 12 tiles against 17
    # verticals, a Gaming tile for a page that does not exist and never will, and
    # two tiles pointing at fintech-banking. A hardcoded /industries/ literal
    # reappearing here is that drift starting again.
    strip = os.path.join(ROOT, "src/components/home/ServeIndustries/ServeIndustries.tsx")
    if os.path.exists(strip):
        src = open(strip, encoding="utf-8", errors="replace").read()
        if "categories.Industries" not in src:
            dead.append(("ServeIndustries.tsx", "not generated",
                         "the strip must render categories.Industries, not a hand-kept list"))
        for u in set(re.findall(r'"(/industries/[^"]+)"', src)):
            dead.append(("ServeIndustries.tsx", u,
                         "hardcoded industry url; the strip is generated, so this is drift"))
        if re.search(r"gaming", src, re.I):
            dead.append(("ServeIndustries.tsx", "gaming",
                         "the gaming vertical is closed on legal grounds and must never appear"))

    if gated_sources:
        print(f"note: {len(gated_sources)} gated vertical(s) exempt from the "
              f"live-target rule: {', '.join(sorted(gated_sources))}\n")

    if dead:
        print(f"DEAD LINKS: {len(dead)}")
        for n, href, why in dead:
            print(f"  [{why}] {n}: {href}")
        sys.exit(1)
    print(f"CLEAR. Every internal link in {len(files)} file(s) resolves.")

if __name__ == "__main__":
    main()
