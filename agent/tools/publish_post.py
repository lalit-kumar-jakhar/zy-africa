import os as _os
_MISSING = "set BLOG_MANAGE_API_KEY in the environment, see agent/SETUP.md"
"""Upload a post's diagrams, wire them into the body, and push it as a draft.

Usage: publish_post.py <slug> [--dry-run]

Uploads the @2x master under a clean filename (the API slugifies names, which
would mangle an "@2x" suffix), then embeds each image as a direct child of a
<p> so the site's `.detailDataBlogContent p > img` rule makes it responsive.
"""

import html
import json
import os
import re
import sys

import requests
from zy_paths import zy

API = "https://api.zyneto.com"
KEY = _os.environ.get("BLOG_MANAGE_API_KEY", _MISSING)
HDR = {"X-API-Key": KEY}
IMG_DIR = zy("Blog/images")
HTML_DIR = zy("Blog/html")

# Where each diagram belongs: the H2 it illustrates. The image is inserted
# after the first paragraph following that heading. A bare string takes its alt
# text from Blog/images/manifest.json; a (heading, alt) pair carries its own, for
# batches rendered without a manifest.
PLACEMENT = {
    "ai-memory": {
        "ai-memory-1": "Short-term versus long-term at a glance",
        "ai-memory-2": "How AI memory actually works",
        "ai-memory-3": "The kinds of memory: working, episodic, and semantic",
        "ai-memory-4": "Memory versus a bigger context window",
    },
    "ai-chatbots-for-business": {
        "ai-chatbots-for-business-1": "The three types worth knowing",
        "ai-chatbots-for-business-2": "How AI chatbots actually work",
        "ai-chatbots-for-business-3": "Chatbot, copilot, or agent?",
        "ai-chatbots-for-business-4": "The trap that ruined chatbots: deflection vs resolution",
    },
    "knowledge-graphs-for-business": {
        "knowledge-graphs-for-business-1": "What a knowledge graph actually is",
        "knowledge-graphs-for-business-2": "A closer look: nodes, edges, and ontologies",
        "knowledge-graphs-for-business-3": "Knowledge graph versus a database",
        "knowledge-graphs-for-business-4": "Knowledge graph versus RAG and vector search",
    },
    "predictive-analytics-for-business": {
        "predictive-analytics-for-business-1": "Where it sits: the analytics ladder",
        "predictive-analytics-for-business-2": "How predictive analytics works",
        "predictive-analytics-for-business-3": "Predictive analytics versus generative AI",
        "predictive-analytics-for-business-4": "Predictive analytics, machine learning, and AI",
    },
    "business-process-automation": {
        "business-process-automation-1": "What business process automation actually is",
        "business-process-automation-2": "The automation family: BPA, RPA, workflow, and AI",
        "business-process-automation-3": "BPA versus BPM",
        "business-process-automation-4": "What it looks like end to end",
    },
    "fastapi-vs-flask": {
        "fastapi-vs-flask-1": "FastAPI vs Flask at a glance",
        "fastapi-vs-flask-2": "Performance: async versus sync",
        "fastapi-vs-flask-3": "Which framework for which project",
    },
    "generative-ai-for-business": {
        "generative-ai-for-business-1": "How generative AI works, briefly",
        "generative-ai-for-business-2": "Where generative AI helps: use cases by function",
        "generative-ai-for-business-3": "The hype versus the reality",
    },
    "web-scraping-for-business": {
        "web-scraping-for-business-1": "What web scraping actually is",
        "web-scraping-for-business-2": "When web scraping is the wrong approach",
        "web-scraping-for-business-3": "Is web scraping legal?",
    },
    "recommendation-system-ml-models": {
        "recommendation-system-ml-models-1-ranking-vs-matching": (
            "Ranking and matching are not the same problem",
            "Two panel comparison of a ranking problem and a matching problem, "
            "and how success is measured in each."),
        "recommendation-system-ml-models-2-two-stage": (
            "The five families, and what each one needs",
            "Flow diagram of a two stage recommender, from the full catalogue "
            "through retrieval and a shortlist to ranking."),
        "recommendation-system-ml-models-3-feedback-loop": (
            "Your offline metrics are probably flattering you",
            "Flow diagram of the feedback loop that keeps a recommender trained "
            "on its own logs showing the same items."),
    },
    "collaborative-filtering-vs-content-based": {
        "collaborative-filtering-vs-content-based-1-two-inputs": (
            "What each one is actually doing",
            "Two panel comparison of collaborative filtering reading behaviour "
            "and content-based filtering reading item attributes."),
        "collaborative-filtering-vs-content-based-2-four-combinations": (
            "Four ways to combine them, and when each fits",
            "Four cards covering switching, weighted blending, feature fusion "
            "and cascading hybrids."),
        "collaborative-filtering-vs-content-based-3-item-tower": (
            "What embeddings and two-tower models change",
            "Three cards showing what an item tower inherits when it is fed "
            "interactions, attributes, or both."),
    },
}

# CTA banners: (image key, alt text, the H2 the banner sits immediately BEFORE).
# A heading of None puts the banner last in the body. Live posts place one
# mid-article at the end of a section and one as the final element.
CTA = {
    "recommendation-system-ml-models": [
        ("recommendation-system-ml-models-cta-1-rules-first",
         "Rules first. The model comes later.",
         "What sits underneath all of it"),
        ("recommendation-system-ml-models-cta-2-hour-band",
         "$40 to $100 per hour, published.",
         None),
    ],
    "collaborative-filtering-vs-content-based": [
        ("collaborative-filtering-vs-content-based-cta-1-opposite-failures",
         "They fail in opposite places.",
         "Four ways to combine them, and when each fits"),
        ("collaborative-filtering-vs-content-based-cta-2-start-content-based",
         "Content-based works on day 1.",
         None),
    ],
}

# The feature image, uploaded to folder=post and wired through image_path. The
# `image` FileField rejects the media endpoint's url with
# {"image": ["The submitted data was not a file"]}; image_path takes the storage
# path the same response returns.
FEATURE = {
    "recommendation-system-ml-models": "recommendation-system-ml-models-feature",
    "collaborative-filtering-vs-content-based":
        "collaborative-filtering-vs-content-based-feature",
}

# Tags are a browsable taxonomy, not keywords: the converter derives them from
# the keyword strategy, which is how 40 single-post junk tags were created in
# August 2026. These are existing rows on /api/v1/blog/tags/.
TAGS = {
    "recommendation-system-ml-models":
        ["Machine Learning", "AI applications", "Data Science"],
    "collaborative-filtering-vs-content-based":
        ["Machine Learning", "AI applications", "Data Science"],
}


def master(key):
    """The 2x master on disk. Later batches drop the @2x suffix from the name."""
    for name in (f"{key}@2x.png", f"{key}.png"):
        path = os.path.join(IMG_DIR, name)
        if os.path.exists(path):
            return path
    raise SystemExit(f"no image on disk for {key} (looked for @2x.png and .png)")


def upload(key, folder="inline"):
    """Upload the 2x master under a clean name. Returns (storage path, CDN url)."""
    src = master(key)
    with open(src, "rb") as fh:
        r = requests.post(
            f"{API}/api/v1/manage/media/", headers=HDR,
            files={"file": (f"{key}.png", fh, "image/png")},
            data={"folder": folder}, timeout=90,
        )
    r.raise_for_status()
    d = r.json()
    return d["path"], d["url"]


def alt_for(slug, key, entry, manifest):
    if isinstance(entry, str):
        if key not in manifest:
            raise SystemExit(
                f"no alt text for {key}: not a (heading, alt) pair in PLACEMENT"
                f"[{slug!r}] and not in Blog/images/manifest.json")
        return entry, manifest[key]["alt"]
    return entry


def load_manifest():
    path = os.path.join(IMG_DIR, "manifest.json")
    return json.load(open(path)) if os.path.exists(path) else {}


def heading_re(heading):
    return r"<h2><strong>" + re.escape(heading) + r"</strong></h2>"


def insert_after_heading(body, heading, img_tag):
    """Place the image after the first paragraph under the given H2."""
    pat = re.compile(r"(" + heading_re(heading) + r"\s*<p>.*?</p>)", re.S)
    if not pat.search(body):
        return body, False
    return pat.sub(lambda m: m.group(1) + "\n" + img_tag, body, count=1), True


def insert_before_heading(body, heading, block):
    """Place the banner at the end of the previous section, above the given H2."""
    pat = re.compile(r"(" + heading_re(heading) + r")")
    if not pat.search(body):
        return body, False
    return pat.sub(lambda m: block + "\n" + m.group(1), body, count=1), True


def cta_tag(alt, url):
    return ('<p><a href="https://zyneto.com/contact-us" target="_blank">'
            f'<img alt="{html.escape(alt, quote=True)}" '
            f'src="{html.escape(url, quote=True)}" '
            'style="height:300px; width:800px"/></a></p>')


def main():
    slug = sys.argv[1]
    dry = "--dry-run" in sys.argv

    payload = json.load(open(os.path.join(HTML_DIR, f"{slug}.payload.json")))
    manifest = load_manifest()
    body = payload["description"]

    # drop the placeholder paragraphs the converter emitted
    before = len(re.findall(r"\[DIAGRAM:", body))
    body = re.sub(r"<p>\[DIAGRAM:.*?\]</p>\s*", "", body)
    print(f"  removed {before} diagram placeholder(s)")

    plan = {k: alt_for(slug, k, v, manifest)
            for k, v in PLACEMENT[slug].items()}
    wanted = [h for h, _ in plan.values()]
    wanted += [h for _, _, h in CTA.get(slug, []) if h]
    missing = [h for h in wanted if not re.search(heading_re(h), body)]
    if missing:
        raise SystemExit(f"headings not found in {slug}: {missing}")

    for key, (heading, alt) in plan.items():
        url = f"PLACEHOLDER/{key}.png" if dry else upload(key)[1]
        img = f'<p><img alt="{html.escape(alt, quote=True)}" src="{url}"/></p>'
        body, ok = insert_after_heading(body, heading, img)
        print(f"  {'OK  ' if ok else 'MISS'} {key} -> after '{heading[:46]}'")
        if not ok:
            raise SystemExit(f"heading not found for {key}: {heading}")

    for key, alt, heading in CTA.get(slug, []):
        url = f"PLACEHOLDER/{key}.png" if dry else upload(key)[1]
        block = cta_tag(alt, url)
        if heading is None:
            body = body.rstrip("\n") + "\n" + block
            print(f"  OK   {key} -> end of body")
            continue
        body, ok = insert_before_heading(body, heading, block)
        print(f"  {'OK  ' if ok else 'MISS'} {key} -> before '{heading[:44]}'")
        if not ok:
            raise SystemExit(f"heading not found for {key}: {heading}")

    payload["description"] = body

    if slug in TAGS:
        payload["tags"] = TAGS[slug]
        print(f"  tags: {payload['tags']}")

    if slug in FEATURE:
        key = FEATURE[slug]
        if dry:
            print(f"  feature {master(key)} -> image_path (not uploaded on a dry run)")
        else:
            path, url = upload(key, folder="post")
            payload["image_path"] = path
            print(f"  feature image_path={path}")

    # Only set the status when creating. On a re-push, leave whatever the team
    # has set in admin alone rather than forcing it back to Review.
    exists = requests.get(f"{API}/api/v1/manage/posts/{slug}/", headers=HDR,
                          timeout=30).status_code == 200
    if exists:
        payload.pop("status", None)
        print("  post exists: leaving its current status untouched")

    left = body.count("CTA BANNER")
    print(f"  inline images: {body.count('<img')} "
          f"({len(plan)} diagrams + {len(CTA.get(slug, []))} CTA) | "
          f"CTA placeholders left: {left}")

    if dry:
        open(f"/tmp/{slug}.dry.html", "w").write(body)
        print(f"  DRY RUN -> /tmp/{slug}.dry.html")
        return

    r = requests.post(f"{API}/api/v1/manage/posts/upsert/", headers=HDR,
                      json=payload, timeout=90)
    print(f"  upsert -> {r.status_code}")
    if r.status_code not in (200, 201):
        print(r.text[:800])
        raise SystemExit(1)
    d = r.json()
    print(f"  id={d['id']} slug={d['slug']} status={d['status']} "
          f"read_time={d.get('read_time')} faqs={len(d.get('faq', []))}")


if __name__ == "__main__":
    main()
