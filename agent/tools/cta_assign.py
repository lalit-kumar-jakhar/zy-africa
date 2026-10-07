"""Assign a CTA template to every banner.

Photo band is the priority template and should land near 70% of all banners.
That is above the 50% ceiling one-per-post allows, so some posts carry two
photo bands, and those must differ in photo, crop focus and copy. Everywhere
else the two banners in a post use different templates.
"""
import json, os, subprocess
from blog_visuals import CH, CW, OUT, SRC
import cta_layouts as T

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

CTAS = {
 "ai-memory": [
   (T.t_stack, dict(head="Build AI That Remembers", sub="Grounded, private, useful over time.",
     btn="Talk to Our AI Team", rows=[("Context window", False), ("AI model", True), ("Memory store", False)])),
   (T.t_chips, dict(head="Ready for AI With Memory?", sub="Remembers accounts, not just prompts.",
     btn="Get a Free Consultation", chips=["Enterprise plan", "Ticket #4482", "Prefers brevity"]))],
 "ai-chatbots-for-business": [
   (T.t_bubbles, dict(head="Chatbots People Do Not Hate", sub="Answers from your real content.",
     btn="Talk to Our AI Team", msgs=[("them","Where is my refund?"),("us","Order #1182, refunded"),("them","And annual plans?")])),
   (T.t_split, dict(head="Fix Your Support Funnel", sub="Resolution, not deflection.",
     btn="Book a Call", note="Escalates the moment it is unsure."))],
 "knowledge-graphs-for-business": [
   (T.t_graph, dict(head="Connect Your Data", sub="Answers that walk relationships.",
     btn="Talk to Our AI Team", nodes=[(600,116,"Customer",True),(700,190,"Order",False),(560,214,"Person",False),(700,262,"Product",False)])),
   (T.t_metrics, dict(head="Ready for a Knowledge Graph?", sub="Structure your AI can reason over.",
     btn="Get a Free Consultation", tiles=[("6 hops","answered in one query"),("1 model","shared across teams")]))],
 "predictive-analytics-for-business": [
   (T.t_spark, dict(head="See What Is Coming", sub="Forecasts wired to decisions.",
     btn="Talk to Our AI Team", series=[30,28,34,31,38,36,43,49,57], label="churn risk")),
   (T.t_metrics, dict(head="Predict, Do Not React", sub="Churn, demand and risk, early.",
     btn="Get a Free Consultation", tiles=[("+18%","demand next quarter"),("6 days","until reorder")]))],
 "business-process-automation": [
   (T.t_photo, dict(head="Automate the Busywork", sub="People only where judgement matters.",
     btn="Talk to Our Team", photo=f"{SRC}/business-process-automation-0.jpg")),
   (T.t_funnel, dict(head="Cut the Manual Steps", sub="Faster, auditable, less rework.",
     btn="Get a Free Consultation", stages=["Every task","Rules handle most","Exceptions only"]))],
 "fastapi-vs-flask": [
   (T.t_code, dict(head="Pick the Right Framework", sub="Chosen on workload, not benchmarks.",
     btn="Talk to Our Python Team", lines=[[("@app.get","#c9a3ff"),("(","#8d82a8"),('"/orders"',"#8ee6b0"),(")","#8d82a8")],
       [("async def ","#ff9ec4"),("read()","#9fd0ff")],[("  return await db","#e6dcff")]])),
   (T.t_split, dict(head="Building a Python API?", sub="We ship both, and know when each wins.",
     btn="Book a Call", note="Async where it pays, sync where it does not."))],
 "generative-ai-for-business": [
   (T.t_photo, dict(head="Put Generative AI to Work", sub="Grounded in your data, reviewed by your people.",
     btn="Talk to Our AI Team", photo=f"{SRC}/generative-ai-for-business-0.jpg")),
   (T.t_stack, dict(head="Ready Beyond the Pilot?", sub="The value is in process, not the demo.",
     btn="Get a Free Consultation", rows=[("Your data", False), ("Grounded model", True), ("Human review", False)]))],
 "web-scraping-for-business": [
   (T.t_funnel, dict(head="Turn Pages Into Data", sub="Collected politely, cleaned properly.",
     btn="Talk to Our Data Team", stages=["Thousands of pages","Parsed fields","Clean rows"])),
   (T.t_metrics, dict(head="Need Data at Scale?", sub="We handle the maintenance too.",
     btn="Get a Free Consultation", tiles=[("Daily","prices refreshed"),("Alerts","when a page changes")]))],
}

PHOTO_TARGET = (0.60, 0.80)   # acceptable band around the 70% rule


def check_ratio(ctas):
    """Fail loudly if the photo-band share drifts, or a repeat reuses a photo."""
    banners = [item for items in ctas.values() for item in items]
    photo = [kw for fn, kw in banners if fn is T.t_photo]
    share = len(photo) / len(banners)
    lo, hi = PHOTO_TARGET
    if not lo <= share <= hi:
        raise SystemExit(f"photo band at {share:.0%}, outside the {lo:.0%} to {hi:.0%} band "
                         f"({len(photo)} of {len(banners)} banners)")
    for slug, items in ctas.items():
        names = [fn.__name__ for fn, _ in items]
        photos = [kw["photo"] for fn, kw in items if fn is T.t_photo]
        if len(set(photos)) != len(photos):
            raise SystemExit(f"{slug}: two photo bands share the same photo")
        if len(set(names)) != len(names) and names[0] != "t_photo":
            raise SystemExit(f"{slug}: banners share template {names[0]}")
        if not photos:
            raise SystemExit(f"{slug}: no photo band banner")
    return share


if __name__ == "__main__":
    share = check_ratio(CTAS)
    print(f"  photo band: {share:.0%}\n")
    used = {}
    for slug, items in CTAS.items():
        for i, (fn, kw) in enumerate(items, start=1):
            html = fn(**kw)
            p = os.path.join(OUT, f"_{slug}-cta{i}.html")
            open(p, "w").write(html)
            subprocess.run([CHROME,"--headless=new","--disable-gpu","--hide-scrollbars",
                "--force-device-scale-factor=2", f"--screenshot={os.path.join(OUT, f'{slug}-cta{i}.png')}",
                f"--window-size={CW},{CH}", f"file://{p}"], capture_output=True, timeout=120)
            os.remove(p)
            used.setdefault(fn.__name__, 0)
            used[fn.__name__] += 1
        print(f"  {slug:<36} {items[0][0].__name__} + {items[1][0].__name__}")
    print("\n  template usage:", dict(sorted(used.items(), key=lambda x:-x[1])))
