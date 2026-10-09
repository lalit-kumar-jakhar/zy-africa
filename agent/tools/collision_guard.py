"""Stop an industry page competing with a solutions page that already ranks.

Six of the eighteen planned verticals target the same buyers as a solutions
page. Publishing a second asset against the same head term is how the FastAPI
cannibalisation happened, and that one cost a consolidation of four pages into
two. The music solutions page is currently position 6 on 9,549 impressions and
is the best ranking commercial asset on the site.

Run before writing an industry page, not after:

    python3 collision_guard.py --title "Retail and E-commerce Software Development" --vertical retail-software-development

Exit code 1 means do not ship that title.

The rule being enforced: a solutions page sells a product the buyer already
wants ("build me this app"); an industry page sells sector understanding ("do
you know how my business works"). They may share an audience. They may not
share a head term.
"""
import argparse
import re
import sys
from zy_paths import zy

SOLUTIONS = zy("zyneto-frontend/src/data/solutions-list.tsx")

# vertical -> the solutions pages it is most likely to cannibalise, with each
# page's measured standing so the cost of getting it wrong is visible.
PAIRS = {
    # Verticals confirmed to have NO competing solutions page, 2026-08-14. The six
    # solutions pages are dating, fantasy sports, restaurant, ecommerce, music
    # streaming and classified; none of them sells into these sectors. Listed
    # explicitly with an empty list rather than left out, because the guard
    # aborts on an unknown vertical and an abort is not a clearance.
    "logistics-software-development": [],
    "fintech-banking-software-development": [],
    "manufacturing-software-development": [],
    "saas-platform-development": [],
    "retail-software-development": [("ecommerce-app-development", "pos 25, 1,841 impr"),
                         ("classified-app-development", "pos 4, 33 impr")],
    "media-software-development": [("music-streaming-app-development-company", "POS 6, 9,549 impr")],
    "community-app-development": [("dating-app-development-company", "pos 24, 787 impr")],
    "gaming-interactive": [("fantasy-sports-app-development-company", "pos 16, 762 impr")],
    "food-service-software-development": [("restaurant-app-development-company", "pos 13, 691 impr")],
    "automotive-software-development": [("classified-app-development", "pos 4, 33 impr")],
    # Property listings ARE classifieds. Added 2026-08-13 after a deliberately
    # awful title, "Classified App Development for Property", passed CLEAR
    # because this vertical was simply absent from the table.
    "real-estate-software-development": [("classified-app-development", "pos 4, 33 impr")],
    # Explicitly empty: checked on 2026-08-13 against all 6 solutions pages and
    # none competes for these head terms. An empty list is a recorded finding.
    # An ABSENT key is an unchecked vertical, and the guard now refuses those.
    "healthcare-software-development": [],
    "education-software-development": [],
    # Was marked empty on 2026-08-13 and that was wrong. A negative control,
    # "Restaurant App Development for Hotels", cleared. Hotel F&B is restaurant
    # territory, so the pair is real.
    "travel-software-development": [("restaurant-app-development-company", "pos 13, 691 impr")],
    "insurance-software-development": [],
    "fitness-app-development": [],
    "energy-software-development": [],
    "professional-services-software-development": [],
}

STOP = {"and", "the", "for", "with", "your", "custom", "company", "zyneto", "a", "of", "in", "to"}

# Cannibalisation is not bag-of-words similarity. It is two pages bidding for
# the same SUBJECT plus the same ACTION: "ecommerce ... development",
# "music ... app". Sharing only the action ("development") is normal across a
# whole site and means nothing. Sharing only the subject is fine too, which is
# exactly how a solutions page and an industry page are meant to coexist.
SUBJECTS = ["ecommerce", "classified", "music", "audio", "dating",
            "fantasy sports", "restaurant", "streaming", "marketplace"]
ACTIONS = ["app development", "app", "development", "developers"]

def normalise(text):
    """Fold the spelling variants that would otherwise hide a collision.

    `eCommerce` and `E-commerce` are the same head term to a search engine and
    were the reason an earlier version of this check passed a title it should
    have rejected.
    """
    t = text.lower()
    t = re.sub(r"\be[-\s]?commerce\b", "ecommerce", t)
    t = re.sub(r"\bm[-\s]?commerce\b", "mcommerce", t)
    t = re.sub(r"[^a-z0-9 ]+", " ", t)
    return re.sub(r"\s+", " ", t).strip()


def solutions_titles():
    """Map each solutions slug to its metaTitle, keyed off `itemSlug`.

    Matching on the bare slug finds an image path hundreds of lines away from
    the page object, which is how an earlier version of this file resolved zero
    titles and passed every input vacuously. `itemSlug: "..."` is the page's own
    identifier and sits beside its metaTitle.
    """
    src = open(SOLUTIONS, encoding="utf-8").read()
    out = {}
    for m in re.finditer(r'itemSlug:\s*"([^"]+)"', src):
        slug = m.group(1)
        window = src[m.end():m.end() + 600]
        t = re.search(r'metaTitle:\s*"([^"]+)"', window)
        if t:
            out[slug] = t.group(1)

    # A guard that cannot find its reference data must fail, not pass.
    wanted = {s for pairs in PAIRS.values() for s, _ in pairs}
    missing = sorted(wanted - set(out))
    if missing:
        sys.exit(f"ABORT: no metaTitle resolved for {missing}. "
                 f"Found {len(out)} solutions pages. Fix the lookup before trusting a verdict.")
    return out


def head_term(title):
    """The part before the pipe. That is what the page is actually bidding for."""
    return title.split("|")[0].strip()


def tokens(text):
    return {w for w in re.findall(r"[a-z]+", text.lower()) if w not in STOP and len(w) > 2}


def parts(text):
    """The subject and action a title is bidding for."""
    t = normalise(text)
    subj = [s for s in SUBJECTS if s in t]
    act = [a for a in ACTIONS if re.search(rf"\b{a}\b", t)]
    return subj, act


def check(proposed, vertical, verbose=True):
    """Check the proposed title against EVERY solutions page, not just the
    expected one.

    PAIRS used to be the list of pages checked, which meant the guard only
    caught a collision somebody had predicted in advance. Two of those
    predictions were wrong on 2026-08-13: `travel-software-development` was marked as
    having no competing page and "Restaurant App Development for Hotels"
    cleared, and `healthcare-software-development` was empty so "Ecommerce App
    Development for Clinics" cleared too. Both carry a solutions head term
    whole. PAIRS is now annotation, telling you which collision was expected
    and what it is worth; the scan itself covers all six pages every time.
    """
    titles = solutions_titles()
    expected = dict(PAIRS.get(vertical, []))
    p_subj, p_act = parts(proposed)
    problems = []
    for slug in sorted(titles):
        standing = expected.get(slug, "not the expected pair for this vertical")
        head = head_term(titles[slug])
        s_subj, s_act = parts(head)

        shared_subj = sorted(set(p_subj) & set(s_subj))
        shared_act = sorted(set(p_act) & set(s_act))
        # Fatal only when BOTH are shared, or when the head term appears whole.
        contains = normalise(head) in normalise(proposed)
        fatal = contains or (bool(shared_subj) and bool(shared_act))

        if verbose and (slug in expected or fatal):
            print(f"\n  vs /solutions/{slug}  ({standing})")
            print(f"     their head term : {head}")
            print(f"     shared subject  : {shared_subj or 'none'}")
            print(f"     shared action   : {shared_act or 'none'}")
            print(f"     verdict         : {'COLLIDES' if fatal else 'clear'}")
        if fatal:
            problems.append((slug, head, shared_subj + shared_act, standing))
    return problems


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--title", required=True)
    ap.add_argument("--vertical", required=True)
    args = ap.parse_args()

    print(f"proposed industry title: {args.title!r}  ({len(args.title)} chars)")
    if len(args.title) > 60:
        print(f"  WARNING: over the 60 character metaTitle limit")

    # A vertical missing from PAIRS used to return no problems and print CLEAR,
    # which is a pass that means nothing. Verified 2026-08-13: a title carrying
    # the classified head term whole cleared for an unregistered vertical.
    if args.vertical not in PAIRS:
        sys.exit(f"ABORT: {args.vertical!r} is not in PAIRS, so there is nothing to check "
                 f"it against and a CLEAR would be meaningless. Add it with its competing "
                 f"solutions pages, or with an empty list if you have confirmed there are none.\n"
                 f"Known: {', '.join(sorted(PAIRS))}")

    problems = check(args.title, args.vertical)
    if problems:
        print(f"\nREJECTED. {len(problems)} collision(s).")
        for slug, head, shared, standing in problems:
            print(f"  /solutions/{slug} already holds {head!r} at {standing}.")
            print(f"  Shared: {', '.join(shared)}. Drop those words or reframe to sector operations.")
        sys.exit(1)
    print("\nCLEAR. No head-term collision.")


if __name__ == "__main__":
    main()
