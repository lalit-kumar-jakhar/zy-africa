"""Anchor-phrase dictionary for internal linking.

Built in two layers, because a first attempt using only title-derived phrases
produced 1.4 links per post — titles are marketing copy, body prose is
conversational, and the two rarely share a literal string.

**Layer 1, GLOBAL.** A phrase that always means one specific post. "fraud
detection" always points at the fraud article, wherever it appears.

**Layer 2, ROLES.** The high-value layer. Phrases like "development cost" or
"monetization models" recur across the whole corpus but should resolve
*within the source post's own cluster*: "development cost" in a music post
links to the music cost article, in a dating post to the dating cost article.
That is precisely the signal that builds topical authority, and it is why the
same phrase list yields good links in twelve different clusters.

Phrases are mined from the corpus itself (`mine_phrases.py`), so every one of
them is known to occur in real prose rather than guessed from a title.
"""

CLUSTERS = {
    "python-web": [
        "flask-for-web-development", "flask-vs-django", "fastapi-vs-django",
        "how-to-build-a-flask-web-application", "how-to-hire-flask-developers",
        "why-flask-is-the-best-python-framework-for-microservices",
        "restapi-vs-fastapi", "fastapi-for-ml-powered-web-apps",
        "flask-vs-fastapi", "cost-to-implement-fastapi-in-a-mobile-app",
        "advantages-of-using-flask", "flask-security-checklist-for-developers",
        "best-practices-in-fastapi-architecture",
        "python-api-development-with-fastapi", "cost-to-hire-fastapi-developers",
        "what-is-django", "django-vs-spring-boot",
        "why-python-is-ideal-for-devops-exploring-the-benefits-of-using-python",
    ],
    "ai": [
        "ai-in-cybersecurity", "how-much-does-ai-development-cost",
        "how-to-create-an-ai-app", "ai-in-everyday-business",
        "top-ai-use-cases-you-cant-ignore", "top-ai-trends", "ai-memory",
        "ai-for-fraud-detection-a-quick-guide", "ai-in-devop",
        "everything-you-need-to-know-about-artificial-intelligence-in-2025",
        "10-applications-of-deep-learning-in-various-industries",
        "future-trends-in-ai-and-data-science",
        "how-artificial-intelligence-is-transforming-the-world",
        "deepseek-vs-chatgpt-compared-fact-check-on-the-chinese-ai-language-model",
        "grok-3-whats-new-in-elon-musks-new-ai-heres-9-tips-on-how-to-use-it",
        "ai-physiotherapy-app-development",
        "how-good-is-github-copilot-is-github-copilot-safe-to-use-at-work",
        "ai-agents-for-business", "ai-copilots-for-business",
        "ai-chatbots-for-business", "generative-ai-for-business",
        "knowledge-graphs-for-business", "predictive-analytics-for-business",
        "chat-with-your-documents", "business-process-automation",
        "multimodal-ai-for-business", "ai-document-management",
        "securing-enterprise-ai",
    ],
    "music": [
        "music-app-development-guide", "blockchain-in-music-apps",
        "ai-in-music-apps", "how-to-develop-an-app-like-spotify",
        "how-to-create-a-music-website", "why-music-apps-fail",
        "music-app-development-cost", "top-music-app-features",
        "cost-to-build-an-app-like-soundcloud",
        "how-to-create-a-music-app-like-deezer",
        "build-an-app-like-youtube-music", "how-do-music-apps-make-money",
    ],
    "restaurant": [
        "ai-in-restaurant-app", "restaurant-app-development-cost",
        "how-to-develop-a-restaurant-app", "how-do-restaurant-apps-make-money",
        "restaurant-app-development-challanges", "restaurant-app-trends",
        "build-a-restaurant-website-from-scratch-a-complete-guide",
        "cost-to-develop-an-app-like-opentable", "cost-to-build-an-app-like-resy",
        "top-benefits-of-crm-in-restaurant-business-growth",
    ],
    "dating": [
        "how-to-create-a-dating-app", "develop-an-app-like-bumble",
        "dating-app-development-cost", "dating-app-development-trends",
        "how-do-dating-app-algorithms-work", "how-to-create-an-app-like-grindr",
        "tinder-clone-app-development-guide",
    ],
    "fantasy": [
        "how-to-create-a-fantasy-sports-app", "cost-to-develop-a-fantasy-sports-app",
        "how-to-create-a-fantasy-sports-website", "how-to-build-a-fantasy-soccer-app",
        "cost-to-build-an-app-like-draftkings", "how-to-develop-an-app-like-espn",
    ],
    "frontend": [
        "a-complete-guide-to-reactjs-development", "reactjs-vs-vuejs",
        "top-reactjs-development-companies", "cost-to-hire-a-reactjs-developer",
        "reasons-to-choose-reactjs-for-web-development",
        "advantages-of-cross-platform-development-what-you-need-to-know",
        "uxui-design-in-2025-trends-ai-driven-tools-and-best-practices-for-digital-success",
        "what-is-the-difference-between-ui-and-ux-design-get-the-facts-right",
        "creating-a-brand-identity-how-a-logo-fits-into-a-brand-identity",
        "improving-page-load-times-16-best-practices-for-optimizing-web-performance",
        "innovative-web-development-101-in-2025-trends-types-processes-and-solutions",
        "what-is-the-best-browser",
    ],
    "backend": [
        "types-of-nodejs-apps", "a-complete-guide-to-nodejs",
        "benefits-of-choosing-nodejs-for-your-business",
        "mobile-app-backend-development-things-to-consider",
        "java-backend-development-best-practices-for-success",
    ],
    "blockchain": [
        "how-to-develop-a-smart-contract", "smart-contracts-vs-traditional-contracts",
        "smart-contract-development-cost",
    ],
    "scraping": [
        "web-scraping-guide-for-2025-how-it-works-types-legality-tools-etc",
        "how-best-to-scrape-data-from-linkedin",
        "best-methods-to-scrape-page-information-and-add-it-to-excel",
        "web-scraping-for-business",
    ],
    "devops": [
        "what-is-secops-use-cases-2025-best-implementation-guide",
        "top-devops-best-practices-for-2024",
    ],
    "mobile": [
        "the-ultimate-guide-to-mobile-app-development-in-2025-trends-frameworks-costs",
        "mobile-app-development-guide",
        "trends-in-android-development-for-2025-whats-new-and-emerging",
        "classified-app-development-cost-in-2026", "classified-app-development-guide",
    ],
}

CLUSTER_OF = {s: c for c, ss in CLUSTERS.items() for s in ss}

# ---------------------------------------------------------------- LAYER 2
# Which post in each cluster plays which role. A role phrase resolves against
# the SOURCE post's cluster, so "development cost" links music->music,
# dating->dating, and so on.
ROLES = {
    "music": {
        "guide": "music-app-development-guide",
        "cost": "music-app-development-cost",
        "features": "top-music-app-features",
        "money": "how-do-music-apps-make-money",
        "ai": "ai-in-music-apps",
        "pitfalls": "why-music-apps-fail",
        "website": "how-to-create-a-music-website",
        "blockchain": "blockchain-in-music-apps",
        "flagship": "how-to-develop-an-app-like-spotify",
    },
    "restaurant": {
        "guide": "how-to-develop-a-restaurant-app",
        "cost": "restaurant-app-development-cost",
        "money": "how-do-restaurant-apps-make-money",
        "challenges": "restaurant-app-development-challanges",
        "trends": "restaurant-app-trends",
        "ai": "ai-in-restaurant-app",
        "website": "build-a-restaurant-website-from-scratch-a-complete-guide",
        "crm": "top-benefits-of-crm-in-restaurant-business-growth",
        "flagship": "cost-to-develop-an-app-like-opentable",
    },
    "dating": {
        "guide": "how-to-create-a-dating-app",
        "cost": "dating-app-development-cost",
        "trends": "dating-app-development-trends",
        "algorithms": "how-do-dating-app-algorithms-work",
        "flagship": "tinder-clone-app-development-guide",
    },
    "fantasy": {
        "guide": "how-to-create-a-fantasy-sports-app",
        "cost": "cost-to-develop-a-fantasy-sports-app",
        "website": "how-to-create-a-fantasy-sports-website",
        "flagship": "cost-to-build-an-app-like-draftkings",
    },
    "mobile": {
        "guide": "mobile-app-development-guide",
        "cost": "classified-app-development-cost-in-2026",
        "trends": "trends-in-android-development-for-2025-whats-new-and-emerging",
        "flagship": "the-ultimate-guide-to-mobile-app-development-in-2025-trends-frameworks-costs",
    },
    "ai": {
        "guide": "how-to-create-an-ai-app",
        "cost": "how-much-does-ai-development-cost",
        "trends": "top-ai-trends",
        "usecases": "top-ai-use-cases-you-cant-ignore",
        "business": "ai-in-everyday-business",
        "security": "ai-in-cybersecurity",
        "ai": "generative-ai-for-business",
    },
    "python-web": {
        "guide": "flask-for-web-development",
        "cost": "cost-to-hire-fastapi-developers",
        "architecture": "best-practices-in-fastapi-architecture",
        "security": "flask-security-checklist-for-developers",
        "performance": "why-flask-is-the-best-python-framework-for-microservices",
        "ai": "fastapi-for-ml-powered-web-apps",
    },
    "frontend": {
        "guide": "a-complete-guide-to-reactjs-development",
        "cost": "cost-to-hire-a-reactjs-developer",
        "design": "uxui-design-in-2025-trends-ai-driven-tools-and-best-practices-for-digital-success",
        "performance": "improving-page-load-times-16-best-practices-for-optimizing-web-performance",
        "flagship": "top-reactjs-development-companies",
        "website": "innovative-web-development-101-in-2025-trends-types-processes-and-solutions",
    },
    "backend": {
        "guide": "a-complete-guide-to-nodejs",
        "flagship": "types-of-nodejs-apps",
        "features": "benefits-of-choosing-nodejs-for-your-business",
        "architecture": "java-backend-development-best-practices-for-success",
    },
    "blockchain": {
        "guide": "how-to-develop-a-smart-contract",
        "cost": "smart-contract-development-cost",
    },
    "scraping": {
        "guide": "web-scraping-guide-for-2025-how-it-works-types-legality-tools-etc",
        "business": "web-scraping-for-business",
    },
    "devops": {
        "guide": "top-devops-best-practices-for-2024",
        "security": "what-is-secops-use-cases-2025-best-implementation-guide",
    },
}

# Phrases that resolve through ROLES. Every one was mined from the corpus by
# `mine_phrases.py`, so each is known to occur in real prose across several
# posts rather than guessed from a title.
ROLE_PHRASES = {
    "cost": ["development cost", "development costs", "app development cost",
             "cost to develop", "cost to build", "cost to create",
             "the total cost", "overall cost", "development budget",
             "how much it costs", "how much it will cost", "cost breakdown",
             "maintenance costs", "operational costs", "infrastructure costs",
             "cost of development"],
    # Anchor text has to describe the destination. Verb phrases like "build an
    # app" or "from scratch" say nothing about where the link goes, and one of
    # them produced a link to the Flask guide from inside Zyneto's own CTA
    # boilerplate. Topic nouns only.
    "guide": ["app development", "development process", "develop an app",
              "app development process", "tech stack", "technology stack",
              "right tech stack", "software development",
              "application development", "development team",
              "development partner", "development company",
              "programming languages"],
    "money": ["monetization models", "monetization strategy",
              "monetization strategies", "monetization model", "make money",
              "revenue model", "revenue models", "revenue streams",
              "revenue stream", "subscription model", "app monetization",
              "premium features", "recurring revenue", "in-app purchases",
              "loyalty programs", "secure payment", "payment systems",
              "payment gateways", "subscription plans"],
    "features": ["core features", "essential features", "advanced features",
                 "key features", "must-have features", "basic features",
                 "feature set", "admin panel", "third-party integrations",
                 "user engagement", "push notifications"],
    "trends": ["latest trends", "industry trends", "emerging trends"],
    "ai": ["recommendation engines", "recommendation engine",
           "AI-powered features", "personalized recommendations",
           "AI recommendations", "AI features", "AI tools"],
    "website": ["web platform", "browser-based version"],
    "challenges": ["common challenges", "biggest challenges", "key challenges",
                   "common mistakes", "biggest mistakes"],
    "algorithms": ["matching algorithm", "matching algorithms",
                   "how the algorithm"],
    "architecture": ["project structure", "folder structure",
                     "application structure", "clean code", "scalable code"],
    "security": ["security best practices", "security checklist",
                 "sensitive data", "security features", "data protection"],
    "design": ["user experience", "UI/UX", "UI UX", "UX design",
               "user interface", "UI/UX design", "user experiences",
               "target audience", "user expectations"],
    "performance": ["page load", "load times", "loading speed",
                    "performance optimization", "high traffic",
                    "performance and scalability", "speed and scalability"],
    "flagship": ["market leaders", "the biggest players", "top players"],
    # Cluster-scoped on purpose: "user retention" is generic vocabulary, but
    # routed through the music cluster it can only ever reach the music
    # post-mortem article.
    "pitfalls": ["why apps fail", "apps fail", "user retention",
                 "retention rate"],
    "blockchain": ["blockchain", "decentralized"],
    "crm": ["customer data", "customer relationships"],
    "usecases": ["use cases", "real-world examples"],
    "business": ["business operations", "day-to-day operations"],
}

# ---------------------------------------------------------------- LAYER 1
# Phrases that always mean one specific post, wherever they appear.
PHRASES = {
    # ------------------------------------------------------- python / web
    "flask-for-web-development": [
        "Flask", "Flask for web development", "Flask web development"],
    "flask-vs-django": ["Flask vs Django", "Django vs Flask"],
    "fastapi-vs-django": ["FastAPI vs Django", "Django vs FastAPI"],
    "flask-vs-fastapi": [
        "FastAPI vs Flask", "Flask vs FastAPI", "FastAPI and Flask"],
    "how-to-build-a-flask-web-application": [
        "build a Flask web application", "Flask web application",
        "Flask application"],
    "how-to-hire-flask-developers": [
        "hire Flask developers", "hiring Flask developers", "Flask developers"],
    "why-flask-is-the-best-python-framework-for-microservices": [
        "microservices", "microservice architecture"],
    "restapi-vs-fastapi": ["REST API vs FastAPI", "REST APIs", "REST API"],
    "fastapi-for-ml-powered-web-apps": [
        "machine learning model", "ML model", "serving a model"],
    "cost-to-implement-fastapi-in-a-mobile-app": [
        "cost to implement FastAPI", "FastAPI in a mobile app"],
    "advantages-of-using-flask": [
        "advantages of using Flask", "advantages of Flask", "benefits of Flask"],
    "flask-security-checklist-for-developers": [
        "Flask security", "securing a Flask app"],
    "best-practices-in-fastapi-architecture": [
        "FastAPI", "FastAPI architecture", "FastAPI best practices"],
    "python-api-development-with-fastapi": [
        "Python API development", "API development", "build an API"],
    "cost-to-hire-fastapi-developers": [
        "hire FastAPI developers", "FastAPI developers", "FastAPI developer"],
    "what-is-django": ["Django"],
    "django-vs-spring-boot": ["Django vs Spring Boot", "Spring Boot"],
    "why-python-is-ideal-for-devops-exploring-the-benefits-of-using-python": [
        "Python for DevOps", "Python scripting"],

    # ----------------------------------------------------------------- AI
    "ai-in-cybersecurity": [
        "AI in cybersecurity", "cybersecurity", "security threats"],
    "how-much-does-ai-development-cost": [
        "AI development cost", "cost of AI development",
        "AI development costs", "token cost", "token costs"],
    "how-to-create-an-ai-app": [
        "create an AI app", "build an AI app", "AI app development"],
    "ai-in-everyday-business": ["AI in everyday business"],
    "top-ai-use-cases-you-cant-ignore": ["AI use cases", "real-world AI"],
    "top-ai-trends": ["AI trends", "trends in AI"],
    "ai-memory": ["AI memory", "long-term memory", "short-term memory"],
    "ai-for-fraud-detection-a-quick-guide": [
        "fraud detection", "detecting fraud", "fraudulent transactions"],
    "ai-in-devop": ["AI in DevOps", "AIOps"],
    "everything-you-need-to-know-about-artificial-intelligence-in-2025": [
        "artificial intelligence", "what is artificial intelligence"],
    "10-applications-of-deep-learning-in-various-industries": [
        "deep learning", "neural networks"],
    "future-trends-in-ai-and-data-science": ["data science"],
    "how-artificial-intelligence-is-transforming-the-world": [
        "AI is transforming"],
    "deepseek-vs-chatgpt-compared-fact-check-on-the-chinese-ai-language-model": [
        "DeepSeek vs ChatGPT", "DeepSeek", "ChatGPT"],
    "grok-3-whats-new-in-elon-musks-new-ai-heres-9-tips-on-how-to-use-it": [
        "Grok 3", "Grok"],
    "ai-physiotherapy-app-development": ["AI physiotherapy app"],
    "how-good-is-github-copilot-is-github-copilot-safe-to-use-at-work": [
        "GitHub Copilot", "AI coding assistant"],
    "ai-agents-for-business": [
        "AI agents", "AI agent", "autonomous agents", "agentic AI"],
    "ai-copilots-for-business": ["AI copilots", "AI copilot", "copilot"],
    "ai-chatbots-for-business": [
        "AI chatbots", "AI chatbot", "chatbots", "chatbot"],
    "generative-ai-for-business": ["generative AI", "GenAI"],
    "knowledge-graphs-for-business": ["knowledge graphs", "knowledge graph"],
    "predictive-analytics-for-business": [
        "predictive analytics", "predictive models", "demand forecasting"],
    "chat-with-your-documents": [
        "chat with your documents", "retrieval augmented generation", "RAG",
        "retrieval", "embeddings", "embedding", "vector search"],
    "business-process-automation": [
        "business process automation", "process automation",
        "workflow automation", "automating workflows", "workflows",
        "workflow", "routing"],
    "multimodal-ai-for-business": [
        "multimodal", "multimodal AI", "multimodal model"],
    "ai-document-management": [
        "document management", "document classification",
        "classification", "records management"],
    "securing-enterprise-ai": [
        "prompt injection", "permission filtering", "permissions",
        "access control"],

    # -------------------------------------------------------------- music
    "how-to-develop-an-app-like-spotify": ["app like Spotify", "Spotify"],
    "cost-to-build-an-app-like-soundcloud": ["app like SoundCloud", "SoundCloud"],
    "how-to-create-a-music-app-like-deezer": ["app like Deezer", "Deezer"],
    "build-an-app-like-youtube-music": ["app like YouTube Music", "YouTube Music"],
    # "churn" is deliberately absent: it is retention vocabulary used across
    # restaurant, fantasy and AI posts, so as a global phrase it sent unrelated
    # articles to a music-specific page.
    "why-music-apps-fail": ["why music apps fail", "apps fail"],
    "music-app-development-guide": [
        "music app development", "music streaming app", "music licensing",
        "licensing deals"],
    "blockchain-in-music-apps": [
        "blockchain in music", "music royalties", "royalties", "record labels"],
    "top-music-app-features": [
        "offline listening", "listening history", "music discovery",
        "exclusive content", "playlists"],
    "ai-in-music-apps": ["personalized playlists", "music recommendations"],
    "how-to-create-a-music-website": ["music website"],
    "music-app-development-cost": ["streaming app development cost"],
    "how-do-music-apps-make-money": ["streaming revenue", "per stream"],

    # --------------------------------------------------------- restaurant
    "cost-to-develop-an-app-like-opentable": ["app like OpenTable", "OpenTable"],
    "cost-to-build-an-app-like-resy": ["app like Resy", "Resy"],
    "how-to-develop-a-restaurant-app": [
        "restaurant app development", "online ordering", "table reservations"],
    "ai-in-restaurant-app": ["AI for restaurants", "demand prediction"],
    "top-benefits-of-crm-in-restaurant-business-growth": [
        "loyalty programs", "loyalty program", "repeat customers"],
    "how-do-restaurant-apps-make-money": [
        "commission fees", "delivery fees", "order value"],
    "restaurant-app-development-challanges": [
        "kitchen operations", "order accuracy"],

    # ------------------------------------------------------------- dating
    "develop-an-app-like-bumble": ["app like Bumble", "Bumble"],
    "how-to-create-an-app-like-grindr": ["app like Grindr", "Grindr"],
    "tinder-clone-app-development-guide": ["Tinder clone", "app like Tinder", "Tinder"],
    "how-to-create-a-dating-app": ["dating app development"],
    "how-do-dating-app-algorithms-work": ["dating app algorithms"],

    # ------------------------------------------------------------ fantasy
    "cost-to-build-an-app-like-draftkings": ["app like DraftKings", "DraftKings"],
    "how-to-develop-an-app-like-espn": ["app like ESPN", "ESPN"],
    "how-to-build-a-fantasy-soccer-app": ["fantasy soccer", "soccer"],
    "how-to-create-a-fantasy-sports-app": ["fantasy sports app"],

    # ----------------------------------------------------------- frontend
    "a-complete-guide-to-reactjs-development": [
        "ReactJS", "React.js", "React development"],
    "reactjs-vs-vuejs": ["React vs Vue", "Vue.js", "VueJS"],
    "top-reactjs-development-companies": ["ReactJS development companies"],
    "cost-to-hire-a-reactjs-developer": [
        "hire a ReactJS developer", "ReactJS developer", "React developers"],
    "reasons-to-choose-reactjs-for-web-development": ["why ReactJS"],
    "advantages-of-cross-platform-development-what-you-need-to-know": [
        "cross-platform development", "cross platform development",
        "React Native", "cross-platform app"],
    "uxui-design-in-2025-trends-ai-driven-tools-and-best-practices-for-digital-success": [
        "design trends"],
    "what-is-the-difference-between-ui-and-ux-design-get-the-facts-right": [
        "difference between UI and UX", "UX and UI"],
    "creating-a-brand-identity-how-a-logo-fits-into-a-brand-identity": [
        "brand identity", "logo design", "branding"],
    "improving-page-load-times-16-best-practices-for-optimizing-web-performance": [
        "page load times", "web performance"],
    "innovative-web-development-101-in-2025-trends-types-processes-and-solutions": [
        "web development", "modern web development"],
    "what-is-the-best-browser": ["best browser"],

    # ------------------------------------------------------------ backend
    "types-of-nodejs-apps": ["types of Node.js apps", "Node.js applications"],
    "a-complete-guide-to-nodejs": ["Node.js", "NodeJS", "Node js"],
    "benefits-of-choosing-nodejs-for-your-business": ["benefits of Node.js"],
    "mobile-app-backend-development-things-to-consider": [
        "mobile app backend", "backend development"],
    "java-backend-development-best-practices-for-success": [
        "Java backend", "Java backend development"],

    # --------------------------------------------------------- blockchain
    "how-to-develop-a-smart-contract": ["smart contract", "smart contracts"],
    "smart-contracts-vs-traditional-contracts": [
        "smart contracts vs traditional contracts", "traditional contracts"],
    "smart-contract-development-cost": ["smart contract development cost"],

    # ----------------------------------------------------------- scraping
    "web-scraping-guide-for-2025-how-it-works-types-legality-tools-etc": [
        "web scraping", "web scraper", "scraping"],
    "how-best-to-scrape-data-from-linkedin": ["scrape data from LinkedIn"],
    "best-methods-to-scrape-page-information-and-add-it-to-excel": [
        "scrape data to Excel", "extract data to Excel", "data extraction"],
    "web-scraping-for-business": ["web scraping for business"],

    # ------------------------------------------------------------- devops
    "what-is-secops-use-cases-2025-best-implementation-guide": [
        "SecOps", "DevSecOps", "security operations"],
    "top-devops-best-practices-for-2024": [
        "DevOps", "CI/CD", "CI/CD pipeline", "continuous integration"],

    # ------------------------------------------------------------- mobile
    "the-ultimate-guide-to-mobile-app-development-in-2025-trends-frameworks-costs": [
        "mobile app development"],
    "mobile-app-development-guide": ["minimum viable product", "MVP"],
    "trends-in-android-development-for-2025-whats-new-and-emerging": [
        "Android development", "Android app development"],
    "classified-app-development-cost-in-2026": ["classified app development cost"],
    "classified-app-development-guide": ["classified app"],
}


# Cross-cluster bridges. These are the phrases every post uses regardless of
# topic ("user experience", "React Native", "machine learning"), mapped to the
# hub article that owns the subject. They are what lets a music post link to
# design and a restaurant post link to cross-platform, which is how a corpus
# stops being twelve disconnected islands.
BRIDGES = {
    "uxui-design-in-2025-trends-ai-driven-tools-and-best-practices-for-digital-success": [
        "user experience", "UI/UX", "UI UX", "UI/UX design", "user interface"],
    "advantages-of-cross-platform-development-what-you-need-to-know": [
        "React Native", "cross-platform", "cross platform", "Flutter",
        "iOS and Android", "native apps", "frameworks like Flutter"],
    "the-ultimate-guide-to-mobile-app-development-in-2025-trends-frameworks-costs": [
        "mobile app development", "mobile apps", "app store"],
    "innovative-web-development-101-in-2025-trends-types-processes-and-solutions": [
        "web development", "web application", "web applications", "web apps",
        "web app"],
    "everything-you-need-to-know-about-artificial-intelligence-in-2025": [
        "artificial intelligence", "machine learning", "AI models",
        "machine learning models"],
    "predictive-analytics-for-business": [
        "user behavior", "analytics tools", "real-time data",
        "predictive analytics"],
    "what-is-secops-use-cases-2025-best-implementation-guide": [
        "user data", "sensitive data", "data privacy", "protect sensitive"],
    "top-devops-best-practices-for-2024": [
        "cloud infrastructure", "cloud platforms", "cloud services",
        "scalable cloud", "Google Cloud", "continuous integration"],
    "improving-page-load-times-16-best-practices-for-optimizing-web-performance": [
        "page load times", "loading speed", "web performance"],
    "mobile-app-development-guide": [
        "minimum viable product", "MVP", "third-party integrations"],
    "a-complete-guide-to-nodejs": ["Node.js", "NodeJS"],
    # Bare "React" is excluded on purpose: it is also an ordinary English verb,
    # and it produced a link on "Most apps react to users".
    "a-complete-guide-to-reactjs-development": ["ReactJS", "React.js"],
}

# Single generic words that only earn a link when nothing better is available.
WEAK = {"Node.js", "NodeJS", "Node js", "cybersecurity", "RAG", "GenAI",
        "Tinder", "Grok", "DeepSeek", "ChatGPT", "Resy", "OpenTable", "Bumble",
        "Grindr", "ESPN", "DraftKings", "Deezer", "SoundCloud", "Spotify",
        "YouTube Music", "Vue.js", "VueJS", "Spring Boot", "deep learning",
        "smart contract", "smart contracts", "web scraping", "scraping",
        "SecOps", "DevSecOps", "DevOps", "Django", "Flask", "FastAPI",
        "ReactJS", "React.js", "MVP", "chatbot", "chatbots", "a website",
        "the website", "blockchain", "REST API", "REST APIs", "CI/CD",
        "artificial intelligence", "data science", "microservices"}
