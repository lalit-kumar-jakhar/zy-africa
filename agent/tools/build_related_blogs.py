import json, re, sys
sys.path.insert(0, 'tools/blog-visuals')
from link_map import CLUSTERS, CLUSTER_OF

inv = json.load(open('Blog/reports/link-inventory.json'))
posts = {s: d for s, d in inv.items() if d['status'] in ('Active', 'Scheduled')}

SERVICES = """ai-agent-development ai-chatbot-development-company ai-copilot-development-company
ai-document-management-system ai-workflow-automation-services android-app-development
angular-development artificial-intelligence blockchain-development chat-with-documents-solution
ci-cd-consulting database-development django-development fastapi-development-company
flask-development flutter-app-development generative-ai-development ios-app-development
iot-app-development mobile-app-development multimodal-ai-development-company nextjs-development
nlp-development nodejs-development pos-software-development predictive-analytics-development
python-development react-native-app-development reactjs-development
smart-contract-development-services ui-ux-design web-development
web-scraping-data-extraction-services""".split()
SOLUTIONS = """classified-app-development dating-app-development-company ecommerce-app-development
fantasy-sports-app-development-company music-streaming-app-development-company
restaurant-app-development-company""".split()

# service slug -> the blog cluster(s) it belongs to, plus extra keywords
HINT = {
 'artificial-intelligence':['ai'],'generative-ai-development':['ai'],'ai-agent-development':['ai'],
 'ai-chatbot-development-company':['ai'],'ai-copilot-development-company':['ai'],
 'ai-document-management-system':['ai'],'ai-workflow-automation-services':['ai'],
 'chat-with-documents-solution':['ai'],'multimodal-ai-development-company':['ai'],
 'nlp-development':['ai'],'predictive-analytics-development':['ai'],
 'fastapi-development-company':['python-web'],'flask-development':['python-web'],
 'django-development':['python-web'],'python-development':['python-web'],
 'nodejs-development':['backend'],'database-development':['backend'],
 'reactjs-development':['frontend'],'angular-development':['frontend'],
 'nextjs-development':['frontend'],'web-development':['frontend'],'ui-ux-design':['frontend'],
 'mobile-app-development':['mobile'],'android-app-development':['mobile'],
 'ios-app-development':['mobile'],'flutter-app-development':['mobile'],
 'react-native-app-development':['mobile','frontend'],'iot-app-development':['mobile','backend'],
 'blockchain-development':['blockchain'],'smart-contract-development-services':['blockchain'],
 'web-scraping-data-extraction-services':['scraping'],'ci-cd-consulting':['devops','backend'],
 'pos-software-development':['restaurant'],
 'classified-app-development':['mobile'],'dating-app-development-company':['dating'],
 'ecommerce-app-development':['mobile'],'fantasy-sports-app-development-company':['fantasy'],
 'music-streaming-app-development-company':['music'],
 'restaurant-app-development-company':['restaurant'],
}
# Pairs that a token match gets wrong. "Copilot" is the clearest: the GitHub
# Copilot review is about a coding assistant product, while the copilot service
# page is about building business copilots - same word, different subject.
# Posts too narrow to be a sensible "related" card anywhere. They are fine as
# destinations from an exact match, but as filler they read as random: a
# physiotherapy app guide on the workflow-automation page, or the GitHub
# Copilot product review on chat-with-documents. Allowed only via PIN.
GLOBAL_DENY = {
    'ai-physiotherapy-app-development',
    'how-good-is-github-copilot-is-github-copilot-safe-to-use-at-work',
}

DENY = {
 'ai-copilot-development-company': {'how-good-is-github-copilot-is-github-copilot-safe-to-use-at-work'},
 'nlp-development': {'how-good-is-github-copilot-is-github-copilot-safe-to-use-at-work',
                     'ai-physiotherapy-app-development'},
 'predictive-analytics-development': {'how-good-is-github-copilot-is-github-copilot-safe-to-use-at-work'},
 'artificial-intelligence': {'ai-physiotherapy-app-development'},
 'ui-ux-design': {'what-is-the-best-browser', 'a-complete-guide-to-reactjs-development'},
 'nextjs-development': {'creating-a-brand-identity-how-a-logo-fits-into-a-brand-identity'},
 'angular-development': {'a-complete-guide-to-reactjs-development', 'cost-to-hire-a-reactjs-developer',
                          'reactjs-vs-vuejs', 'reasons-to-choose-reactjs-for-web-development',
                          'top-reactjs-development-companies'},
 'react-native-app-development': {'improving-page-load-times-16-best-practices-for-optimizing-web-performance'},
 'django-development': {'best-practices-in-fastapi-architecture', 'cost-to-hire-fastapi-developers'},
 'web-scraping-data-extraction-services': {'flask-for-web-development',
     'fastapi-for-ml-powered-web-apps', 'future-trends-in-ai-and-data-science',
     'how-to-build-a-flask-web-application',
     'improving-page-load-times-16-best-practices-for-optimizing-web-performance',
     'reasons-to-choose-reactjs-for-web-development'},
 'ci-cd-consulting': {'mobile-app-backend-development-things-to-consider',
     'java-backend-development-best-practices-for-success'},
 'ai-document-management-system': {'deepseek-vs-chatgpt-compared-fact-check-on-the-chinese-ai-language-model',
     'ai-in-devop'},
 'chat-with-documents-solution': {'10-applications-of-deep-learning-in-various-industries'},
 'generative-ai-development': {'ai-in-devop'},
}

# Obvious matches the scorer misses or the spread penalty pushes out.
PIN = {
 'web-scraping-data-extraction-services': ['best-methods-to-scrape-page-information-and-add-it-to-excel'],
 'chat-with-documents-solution': ['knowledge-graphs-for-business'],
 'ai-copilot-development-company': ['ai-agents-for-business'],
 'predictive-analytics-development': ['business-process-automation'],
 'ai-document-management-system': ['business-process-automation'],
 'nlp-development': ['ai-chatbots-for-business', 'generative-ai-for-business'],
 'angular-development': ['innovative-web-development-101-in-2025-trends-types-processes-and-solutions'],
 'react-native-app-development': ['advantages-of-cross-platform-development-what-you-need-to-know'],
 'generative-ai-development': ['how-to-create-an-ai-app'],
}

STOP = set('development company services solution solutions app the for and with a an of'.split())

KEEP_SHORT = {'ai', 'ui', 'ux', 'ml', 'js'}

def stem(w):
    return w[:-1] if len(w) > 4 and w.endswith('s') else w

def toks(s):
    out = set()
    for w in re.split(r'[-_ ]', s.lower()):
        if not w or w in STOP:
            continue
        if len(w) > 2 or w in KEEP_SHORT:
            out.add(stem(w))
    return out

USED = {}


import math
DF = {}
for _s, _d in posts.items():
    for _t in toks(_s) | toks(_d.get('title', '')):
        DF[_t] = DF.get(_t, 0) + 1
N = len(posts)


def idf(t):
    return math.log((N + 1) / (DF.get(t, 0) + 1)) + 0.2


def rank(page):
    pt = toks(page)
    cls = HINT.get(page, [])
    out = []
    denied = DENY.get(page, set()) | (GLOBAL_DENY - set(PIN.get(page, [])))
    for s, d in posts.items():
        if s in denied:
            continue
        score = 0
        if CLUSTER_OF.get(s) in cls:
            score += 10
        score += 6 * sum(idf(t) for t in pt & toks(s))
        score += 3 * sum(idf(t) for t in pt & toks(d.get('title', '')))
        if d['status'] == 'Active':
            score += 1                      # prefer already-live
        score += min(d.get('n_inbound', 0), 6) * 0.2
        score -= USED.get(s, 0) * 0.5
        out.append((score, s))
    out.sort(key=lambda x: (-x[0], x[1]))
    pinned = [x for x in PIN.get(page, []) if x in posts]
    strong = pinned + [s for sc, s in out if sc >= 8 and s not in pinned]
    if len(strong) < 6:
        strong += [s for sc, s in out if sc >= 5 and s not in strong]

    # The grid is three columns, so 3 or 6 fill complete rows. Four or five
    # leave a ragged trailing row, and padding to six with a weak match is
    # worse than showing one clean row.
    preferred = strong[:6] if len(strong) >= 6 else strong[:3]

    # A scheduled post is the right editorial choice but renders nothing until
    # it publishes, which would leave the page short today. Append the next
    # best ALREADY-LIVE candidates so six resolve now; the component takes the
    # first six that resolve, so each scheduled post reclaims its place on the
    # first rebuild after going live and pushes a fallback out.
    def live(x):
        return posts.get(x, {}).get('status') == 'Active'

    # Capture the target BEFORE appending: `len(preferred)` grows as fallbacks
    # are added, so using it as the loop bound never terminates cleanly.
    target = len(preferred)
    n_live = sum(1 for x in preferred if live(x))
    if n_live < target:
        for sc, cand in out:
            if n_live >= target:
                break
            if cand in preferred or not live(cand) or sc < 7:
                continue
            preferred.append(cand)
            n_live += 1
    return preferred

USED = {}
M = {}
for p in SERVICES + SOLUTIONS:
    r = rank(p)
    if r:
        M[p] = r
        for x in r:
            USED[x] = USED.get(x, 0) + 1
json.dump(M, open('/tmp/related.json', 'w'), indent=1)
print(f'{len(M)} of {len(SERVICES)+len(SOLUTIONS)} pages mapped, '
      f'{sum(len(v) for v in M.values())} links total')
thin = [p for p in SERVICES + SOLUTIONS if len(M.get(p, [])) < 3]
print(f'pages with fewer than 3 matches: {len(thin)}')
for p in thin: print('   ', p, M.get(p, []))
