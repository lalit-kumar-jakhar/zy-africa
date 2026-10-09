import os as _os
_MISSING = "set BLOG_MANAGE_API_KEY in the environment, see agent/SETUP.md"
"""Fetch and cache Unsplash photos for blog feature images and CTA banners.

Three rules, all enforced in code rather than by hand:

1. FREE ONLY. Every candidate is checked for the Unsplash+ (paid) and sponsored
   markers and dropped if either is set. Measured 2026-08-05: this key's
   /search/photos returns only asset_type "photo" with no premium/plus field
   and zero sponsorships, so nothing paid has ever come through. The guard is
   there so that stays true if Unsplash starts mixing paid results in.

2. SCORE, DO NOT INDEX. The old version took results[0], results[1] and so on,
   which is how a query for AI agents came back with industrial robot arms.
   Search results already carry alt_description, description and slug, so
   candidates are scored against a per-post vocabulary and a shared reject list
   for free, with no extra API calls. Only positives above threshold are used.

3. QUERY THE SCENE, NOT THE CONCEPT. "robot arm factory automation control" is
   a literally correct description of an AI agents article and a completely
   wrong picture for it. Queries name people, rooms and objects. The reject
   list catches the stock-AI aesthetic when a query drifts back that way.

Budget: the demo tier is 50 requests/hour. Both searches and download pings
count against it (measured: remaining went 49 then 48). Searches are cached to
disk and a photo already on disk is never re-fetched, so a re-run of an
unchanged config costs zero requests.

Usage:
  python3 fetch_photos.py            fetch what is missing
  python3 fetch_photos.py --dry-run  score against the cache, no API calls
"""
import json, os, sys, urllib.parse, urllib.request

KEY = _os.environ.get("UNSPLASH_ACCESS_KEY", _MISSING)
SRC = "/tmp/blogimg"
CACHE = os.path.join(SRC, "_search_cache.json")

PER_PAGE = 24      # a wider net costs the same one request as per_page=8
MIN_WIDTH = 2400   # we render features at 2400px, so anything narrower upscales
MIN_SCORE = 2

# Reads as the wrong subject: literal robots, and the glowing-blue-brain stock
# aesthetic that signals "article written by a machine". One hit is fatal.
REJECT = (
    "robot", "robotic", "android", "humanoid", "cyborg", "bionic",
    "hologram", "holographic", "futuristic", "sci-fi", "scifi", "cyber",
    "circuit", "motherboard", "microchip", "semiconductor",
    "brain", "neural network", "artificial intelligence", "machine learning",
    "glowing", "neon", "3d render", "3d rendering", "illustration", "render",
    "abstract", "concept art", "binary code", "matrix", "digital art",
)

# Generic quality signals, worth a nudge but never enough on their own.
BONUS = ("office", "desk", "workspace", "team", "working", "person", "people")


def scene(query, n, good, alt=None):
    return dict(query=query, n=n, good=good, alt=alt)


# slug -> what to search for, and what a good result looks like
WANT = {
    "recommendation-system-ml-models": scene(
        "shop shelves product display retail aisle", 2,
        good=("shelf", "shelves", "store", "shop", "retail", "product",
              "products", "aisle", "display", "market", "goods", "rack"),
        alt="retail shelves filled with assorted products"),
    "collaborative-filtering-vs-content-based": scene(
        "library bookshelf rows of books", 2,
        good=("book", "books", "shelf", "shelves", "library", "bookshelf",
              "reading", "rows", "spines", "collection"),
        alt="rows of books on library shelves"),
    "what-ai-workflow-automation-replaces": scene(
        "accountant desk invoices paperwork office", 2,
        good=("desk", "office", "paper", "paperwork", "document", "documents",
              "invoice", "accounting", "finance", "folder", "files", "working",
              "laptop", "spreadsheet"),
        alt="office worker sorting paper documents at desk"),
    "custom-ai-agent-development": scene(
        "operations desk monitors dashboard screens office", 2,
        good=("desk", "office", "monitor", "monitors", "screen", "screens",
              "dashboard", "workspace", "computer", "keyboard", "display",
              "workstation", "data"),
        alt="control room workstation screens no people"),
    "ai-copilot-development": scene(
        "hands typing laptop keyboard desk close up", 2,
        good=("hands", "typing", "laptop", "keyboard", "desk", "screen",
              "computer", "workspace", "writing", "notebook", "working"),
        alt="laptop screen on a desk with notebook and coffee"),
    "multimodal-ai-development": scene(
        "camera lens microphone documents on a desk", 4,
        good=("camera", "lens", "microphone", "desk", "document", "documents",
              "paper", "equipment", "recording", "photography", "screen",
              "workspace", "audio"),
        alt="photography and audio equipment laid out on a table"),
    "ai-pos-software-development": scene(
        "retail shop counter interior empty checkout", 3,
        good=("counter", "shop", "store", "retail", "interior", "checkout",
              "till", "register", "cafe", "screen", "terminal", "desk"),
        alt="cafe counter with till and screen no people"),
    "records-retention-and-legal-hold": scene(
        "archive shelves boxes files storage room", 3,
        good=("archive", "shelves", "shelf", "boxes", "files", "folders",
              "storage", "records", "cabinet", "library", "paper", "documents"),
        alt="rows of filing cabinets and document boxes"),
    "ai-agents-for-business": scene(
        "control room operator monitors screens", 3,
        good=("control", "monitor", "screen", "operator", "dashboard", "room",
              "desk", "display", "watching", "console"),
        alt="operations team watching dashboards office"),
    "ai-copilots-for-business": scene(
        "developer working laptop code screen", 2,
        good=("code", "coding", "developer", "programmer", "laptop", "screen",
              "editor", "keyboard", "typing", "monitor"),
        alt="software engineer at desk writing code"),
    "chat-with-your-documents": scene(
        "archive shelves documents folders", 2,
        good=("archive", "shelf", "shelves", "folder", "file", "document",
              "binder", "paper", "library", "record", "cabinet"),
        alt="rows of binders in a records room"),
    "extract-data-website-to-excel": scene(
        "analyst spreadsheet data desk laptop", 2,
        good=("spreadsheet", "data", "chart", "analytics", "laptop", "desk",
              "graph", "dashboard", "report", "analyst", "numbers"),
        alt="person reviewing charts on a laptop"),

    # ---------------------------------------------------------------- batch 3
    # The article's worked example is an insurance claim: a damage photo, a
    # policy document and an adjuster's note read together. That is a scene, so
    # it is searchable; "multimodal AI" is not.
    # First pass queried "insurance adjuster inspecting damaged car" and, on
    # LOOKING at the results, returned a night-time crash scene and a vintage
    # car in black and white. Both scored well on "car" and neither is an
    # enterprise picture. Paperwork on a desk is the safer scene for the same
    # article, since the worked example is a claim document as much as a photo.
    "multimodal-ai-for-business": scene(
        "hands reviewing invoice paperwork desk", 3,
        good=("invoice", "paperwork", "document", "desk", "hands", "receipt",
              "form", "papers", "signing", "contract", "reading", "office"),
        alt="person photographing a document with a smartphone"),

    # Deliberately NOT the archive-shelves scene: chat-with-your-documents
    # already uses that, and two posts sharing a stock scene reads as a
    # template. The boxes query produced the best photo of the batch; this
    # second query only fills the CTA slots.
    "ai-document-management": scene(
        "stacked paper files on office desk", 3,
        good=("file", "files", "folder", "paper", "papers", "stack", "stacked",
              "document", "desk", "office", "binder", "record", "archive"),
        alt="office worker carrying a stack of paper files"),

    # "server room data centre racks cables" returned two photos lit in
    # saturated blue and green - the glowing-hardware aesthetic the REJECT list
    # exists to stop, which text scoring cannot see. A person at work reads as
    # enterprise; the empty rack reads as a screensaver.
    "securing-enterprise-ai": scene(
        "employees walking office building lobby", 2,
        good=("office", "lobby", "building", "entrance", "corridor", "walking",
              "people", "employee", "staff", "glass", "reception", "interior"),
        alt="office door access card reader"),

    # ------------------------------------------------- ecommerce cluster
    # Four distinct scenes on purpose. The cluster publishes over eleven days,
    # so two posts sharing a stock scene would read as one template used twice.
    # None of these query the abstract topic: "replatforming" and "headless"
    # have no photograph, but the businesses that do them are full of them.
    # ------------------------------------------------- wave 1, September daily
    # Five distinct scenes. None queries the topic: "freight visibility",
    # "available to promise" and "SOC 2" have no photograph, but the places
    # where those problems happen are full of them. The banking query is
    # deliberately a branch interior rather than the office-lobby scene already
    # used by securing-enterprise-ai.
    "real-time-freight-visibility": scene(
        "truck fleet parked distribution yard", 3,
        good=("truck", "lorry", "trailer", "fleet", "yard", "depot", "dock",
              "loading", "freight", "haulage", "vehicle", "transport", "cargo"),
        alt="logistics dispatch office worker at computer"),

    "omnichannel-inventory-sync": scene(
        "retail store staff scanning shelves", 3,
        good=("store", "shop", "retail", "shelf", "shelves", "aisle", "scan",
              "scanner", "staff", "counter", "stock", "clothing", "customer"),
        alt="clothing rails on a shop floor"),

    "ci-cd-pipeline-optimization": scene(
        "two engineers looking at monitor together", 2,
        good=("engineer", "developer", "monitor", "screen", "desk", "team",
              "colleague", "working", "laptop", "office", "discussing", "pair"),
        alt="software team standing at a desk reviewing a screen"),

    "soc-2-type-2-cost-saas": scene(
        "people reviewing documents boardroom table", 2,
        good=("meeting", "boardroom", "table", "document", "paper", "review",
              "discussion", "office", "people", "notes", "contract", "signing"),
        alt="auditor reading paperwork at a desk"),

    # First pass queried "bank branch interior counter customers" and, on
    # LOOKING at the results, returned a street cash machine and a green
    # payphone at night. Both scored on vocabulary and neither is a picture of
    # enterprise banking. Re-queried against the article's own opening scene,
    # which is a customer pressing send on a transfer and getting an error.
    "core-banking-integration": scene(
        "hands using mobile phone banking payment", 2,
        good=("phone", "smartphone", "mobile", "hand", "hands", "holding",
              "screen", "app", "payment", "card", "device", "desk", "typing"),
        alt="person checking a phone at a desk indoors"),

    # --------------------------------------------- wave 2, September daily
    # Five more distinct scenes. None repeats a scene already used: the EU one
    # is deliberately an exterior rather than the boardroom used by
    # soc-2-type-2-cost-saas or the office lobby used by securing-enterprise-ai.
    "eu-ai-act-deadlines-for-saas": scene(
        "european union flags building facade", 3,
        good=("flag", "flags", "european", "europe", "building", "facade",
              "brussels", "union", "parliament", "institution", "architecture"),
        alt="government building exterior with columns"),

    "insurance-claims-automation": scene(
        "car damage inspection assessor clipboard", 3,
        good=("car", "damage", "damaged", "vehicle", "inspection", "assessor",
              "dent", "repair", "bodywork", "accident", "garage", "clipboard"),
        alt="mechanic examining a dented car panel"),

    "hipaa-compliant-app-cost": scene(
        "clinic reception desk waiting room", 2,
        good=("clinic", "reception", "waiting", "hospital", "desk", "nurse",
              "medical", "healthcare", "patient", "corridor", "practice"),
        alt="hospital corridor with staff walking"),

    "zatca-fatoora-e-invoicing-integration": scene(
        "riyadh saudi arabia city business district", 2,
        good=("riyadh", "saudi", "arabia", "gulf", "skyline", "tower",
              "district", "city", "arabic", "middle east", "business"),
        alt="shop counter receipt printer in a store"),

    "mes-integration-cost": scene(
        "garment factory sewing production line", 2,
        good=("garment", "factory", "sewing", "textile", "production", "line",
              "worker", "machine", "fabric", "manufacturing", "apparel", "floor"),
        alt="workers at machines on a factory floor"),

    "ecommerce-replatforming": scene(
        "warehouse shelves boxes order picking", 3,
        good=("warehouse", "shelf", "shelves", "box", "boxes", "pallet",
              "inventory", "stock", "picking", "storage", "logistics", "worker"),
        alt="distribution centre worker scanning parcels"),

    "headless-commerce": scene(
        "engineers whiteboard planning meeting office", 2,
        good=("whiteboard", "meeting", "planning", "team", "office", "diagram",
              "discussion", "colleagues", "sticky", "notes", "board", "desk"),
        alt="colleagues discussing at a whiteboard"),

    # The article's worked example is apparel, because that is the category
    # where option counts run past three naturally. A rail of garments is the
    # literal picture of a style/colour/size product model.
    "ecommerce-product-data-model": scene(
        "clothing rail garments retail store rack", 2,
        good=("clothing", "clothes", "garment", "rail", "rack", "store",
              "shop", "retail", "apparel", "fashion", "hanger", "boutique"),
        alt="folded clothing on retail shop shelves"),

    "why-online-payments-fail": scene(
        "customer paying card terminal shop counter", 3,
        good=("card", "payment", "terminal", "counter", "paying", "checkout",
              "shop", "cashier", "purchase", "transaction", "till", "customer"),
        alt="hand holding credit card at a laptop"),

    # ---- wave 3. Scenes, not concepts: a records counter rather than
    # "education technology", a meter cabinet rather than "smart grid".
    "student-information-system-cost": scene(
        "university administration office desk paperwork", 2,
        good=("university", "college", "campus", "office", "desk", "admin",
              "administration", "student", "paperwork", "file", "folder",
              "counter", "records", "reception"),
        alt="student records office counter with files"),

    "smart-meter-data-management-india": scene(
        "electricity meters mounted on a building wall", 2,
        good=("meter", "meters", "electricity", "electric", "utility",
              "power", "substation", "cable", "wiring", "wall", "box",
              "energy", "grid", "pole", "transformer"),
        alt="bank of electricity meters on an exterior wall"),

    "ndc-api-integration-cost": scene(
        "airport terminal departure hall travellers", 3,
        good=("airport", "terminal", "departure", "gate", "airline",
              "aircraft", "plane", "travel", "traveller", "luggage",
              "suitcase", "boarding", "concourse", "runway"),
        alt="passengers in an airport departure hall"),

    "psa-build-vs-buy": scene(
        "colleagues meeting around a table in an office", 2,
        good=("meeting", "office", "table", "colleagues", "discussion",
              "business", "team", "laptop", "notes", "boardroom",
              "conference", "working", "professional"),
        alt="consultants in a meeting around a table"),

    "eu-data-act-cloud-switching": scene(
        "data center server racks corridor", 3,
        good=("data center", "datacenter", "server", "rack", "racks",
              "cable", "cabling", "network", "hardware", "corridor",
              "room", "infrastructure", "cloud", "storage"),
        alt="corridor of server racks in a data centre"),

    "vehicle-telematics-platform-cost": scene(
        "commercial van fleet parked in a depot yard", 3,
        good=("van", "vans", "truck", "trucks", "fleet", "lorry", "depot",
              "yard", "parked", "vehicle", "vehicles", "delivery",
              "transport", "logistics", "commercial"),
        alt="a fleet of commercial vans parked at a depot"),

    "fitness-app-medical-device-rules": scene(
        "smartwatch on wrist showing heart rate", 3,
        good=("watch", "smartwatch", "wrist", "wearable", "fitness",
              "tracker", "heart", "band", "running", "exercise", "sport",
              "training", "gym", "arm"),
        alt="a smartwatch on a wrist during exercise"),

    "rag-vs-fine-tuning": scene(
        "library archive shelves of documents", 2,
        good=("library", "archive", "shelf", "shelves", "book", "books",
              "document", "documents", "file", "files", "record", "records",
              "storage", "cabinet", "index"),
        alt="rows of archive shelving holding documents"),

    "kitchen-display-system-cost": scene(
        "professional restaurant kitchen chefs at the pass", 3,
        good=("kitchen", "chef", "chefs", "restaurant", "cook", "cooking",
              "pass", "service", "commercial", "food", "plate", "plating",
              "stove", "grill", "brigade"),
        alt="chefs working the pass in a commercial kitchen"),

    "rera-and-dubai-escrow-compliance": scene(
        "residential tower under construction with cranes", 3,
        good=("construction", "crane", "cranes", "tower", "building",
              "site", "scaffolding", "concrete", "development", "apartment",
              "residential", "skyline", "highrise", "unfinished"),
        alt="a residential tower under construction with cranes"),

    "agentic-rag": scene(
        "robotic arm working in an industrial workshop", 2,
        good=("robot", "robotic", "arm", "automation", "machine",
              "industrial", "workshop", "factory", "mechanical", "assembly",
              "manufacturing", "precision", "tool"),
        alt="a robotic arm performing a precise task"),

    "age-assurance-for-social-platforms": scene(
        "teenager holding a smartphone outdoors", 3,
        good=("teen", "teenager", "young", "youth", "phone", "smartphone",
              "mobile", "scrolling", "student", "girl", "boy", "hands",
              "screen", "device"),
        alt="a young person using a smartphone"),

    "media-asset-management-cost": scene(
        "video editing suite with timeline on screens", 3,
        good=("video", "editing", "edit", "editor", "studio", "timeline",
              "screen", "monitor", "broadcast", "footage", "post",
              "production", "colour", "desk", "console"),
        alt="a video editing suite with footage on screen"),

    "nlp-build-vs-buy": scene(
        "printed text pages close up macro", 2,
        good=("text", "page", "pages", "print", "printed", "type",
              "typography", "letter", "letters", "word", "words", "paper",
              "book", "newspaper", "font"),
        alt="close up of printed text on a page"),

    "zero-downtime-database-migration": scene(
        "server room racks and cabling", 3,
        good=("server", "rack", "racks", "cable", "cables", "network",
              "data center", "datacenter", "computer", "hardware", "wiring",
              "room", "infrastructure", "technology", "storage", "blue",
              "light", "corridor"),
        alt="server racks and cabling in a machine room"),
}

os.makedirs(SRC, exist_ok=True)
cache = json.load(open(CACHE)) if os.path.exists(CACHE) else {}
credits, reqs = {}, 0
DRY = "--dry-run" in sys.argv


def get(url):
    global reqs
    reqs += 1
    r = urllib.request.Request(url, headers={"Accept-Version": "v1"})
    return json.load(urllib.request.urlopen(r, timeout=30))


def is_free(p):
    """Unsplash+ and sponsored photos carry licence or attribution obligations
    we are not entitled to. Absence of the marker is the free case."""
    if p.get("premium") or p.get("plus"):
        return False, "unsplash+ (paid)"
    if p.get("sponsorship"):
        return False, "sponsored"
    if p.get("asset_type", "photo") != "photo":
        return False, f"asset_type={p.get('asset_type')}"
    return True, ""


def score(p, good):
    """Score from text the search response already gives us. A negative score
    means rejected outright."""
    text = " ".join(str(p.get(k) or "") for k in
                    ("alt_description", "description", "slug")).lower()
    bad = [w for w in REJECT if w in text]
    if bad:
        return -1, f"reject: {', '.join(bad[:3])}"
    if p["width"] < MIN_WIDTH:
        return -1, f"only {p['width']}px wide"
    hits = [w for w in good if w in text]
    s = 2 * len(hits) + sum(1 for w in BONUS if w in text)
    if p["width"] / p["height"] >= 1.45:      # crops to 1200x812 without loss
        s += 1
    return s, (", ".join(hits[:4]) if hits else "no vocabulary match")


def search(query):
    if query not in cache:
        if DRY:
            return None
        u = ("https://api.unsplash.com/search/photos?"
             + urllib.parse.urlencode({"query": query, "per_page": PER_PAGE,
                                       "orientation": "landscape",
                                       "content_filter": "high",
                                       "client_id": KEY}))
        cache[query] = get(u)["results"]
        json.dump(cache, open(CACHE, "w"))
    return cache[query]


def rank(query, good):
    """Free, on-topic candidates for a query, best first."""
    results = search(query) or []
    keep, dropped = [], []
    for p in results:
        free, why = is_free(p)
        if not free:
            dropped.append((p["id"], why))
            continue
        s, reason = score(p, good)
        if s >= MIN_SCORE:
            keep.append((p, s, reason))
        else:
            dropped.append((p["id"], reason))
    keep.sort(key=lambda t: -t[1])
    return keep, dropped


ONLY = [a.split("=", 1)[1] for a in sys.argv if a.startswith("--only=")]

if __name__ == "__main__":
    for slug, cfg in WANT.items():
        if ONLY and slug not in ONLY:
            continue
        on_disk = [i for i in range(cfg["n"])
                   if os.path.exists(f"{SRC}/{slug}-{i}.jpg")]
        need = [i for i in range(cfg["n"]) if i not in on_disk]
        if not need and not DRY:
            print(f"  {slug:34s} {len(on_disk)} on disk, skipped")
            continue

        ranked, dropped = rank(cfg["query"], cfg["good"])
        if len(ranked) < len(need) and cfg["alt"]:
            print(f"  {slug}: only {len(ranked)} passed, trying the fallback query")
            more, d2 = rank(cfg["alt"], cfg["good"])
            seen = {p["id"] for p, _, _ in ranked}
            ranked += [t for t in more if t[0]["id"] not in seen]
            dropped += d2

        print(f"\n  {slug}   \"{cfg['query']}\"")
        print(f"    {len(ranked)} usable, {len(dropped)} dropped")
        for pid, why in dropped[:4]:
            print(f"      drop {pid:12s} {why}")
        for p, s, why in ranked[:cfg["n"] + 2]:
            print(f"      keep {p['id']:12s} score {s:2d}  {why}")

        if DRY:
            continue
        for i in need:
            if i >= len(ranked):
                print(f"    {slug}-{i}: nothing left that scores")
                continue
            p = ranked[i][0]
            dest = f"{SRC}/{slug}-{i}.jpg"
            urllib.request.urlretrieve(
                p["urls"]["raw"] + "&w=2400&q=80&fm=jpg&fit=max", dest)
            # Required by the Unsplash API Guidelines when a photo is actually
            # used. It returns JSON, not the image, and costs one request.
            try:
                get(p["links"]["download_location"] + f"&client_id={KEY}")
            except Exception:
                pass
            credits[f"{slug}-{i}"] = {"by": p["user"]["name"],
                                      "profile": p["user"]["links"]["html"],
                                      "photo": p["links"]["html"]}
            print(f"    {slug}-{i}.jpg  {os.path.getsize(dest)//1024}KB"
                  f"  by {p['user']['name']}")

    if credits:
        cp = os.path.join(SRC, "_credits.json")
        old = json.load(open(cp)) if os.path.exists(cp) else {}
        old.update(credits)
        json.dump(old, open(cp, "w"), indent=1)
    print(f"\n  {reqs} API requests used this run"
          + ("  (dry run, cache only)" if DRY else ""))
