import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import OfferMount from "@/components/offer/OfferMount";
import Footer from "@/components/shared/Footer/Footer";
import { ModalProvider } from "@/context/ModalContext";
import Script from "next/script";
import PerformanceMonitor from "@/components/common/PerformanceMonitor";
import { Analytics } from "@vercel/analytics/next";
import FloatingContactButtons from "@/components/common/FloatingContactButtons";
import RouteProgress from "@/components/common/RouteProgress";
import { ORG_ID, WEBSITE_ID } from "@/components/seo/jsonld";
import {
  defaultMetaDescription,
  defaultMetaImage,
  defaultSiteTitle,
  siteOrigin,
} from "@/constants/site-metadata";

// No NODE_ENV fallback on purpose: a local `next start` must not reach the
// production GA4 property. Evaluated at build time.
const vercelEnv = process.env.VERCEL_ENV || process.env.NEXT_PUBLIC_VERCEL_ENV;
const isLive = vercelEnv === "production";

const GTM_ID = "GTM-MKCDM7CL";

const apiOrigin = process.env.NEXT_PUBLIC_BASE_URL
  ? new URL(process.env.NEXT_PUBLIC_BASE_URL).origin
  : undefined;
const apiHost = apiOrigin ? new URL(apiOrigin).host : undefined;

const organizationSameAs = [
  "https://www.facebook.com/techzyneto",
  "https://in.linkedin.com/company/zyneto",
  "https://www.instagram.com/techzyneto/",
  "https://x.com/zyneto",
  "https://clutch.co/profile/zyneto-global-technologies",
  "https://www.goodfirms.co/company/zyneto",
  "https://techbehemoths.com/company/zyneto-global-technologies",
  "https://maps.google.com/?cid=8833612231208238819",
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: "Zyneto Global Technologies",
  legalName: "Zyneto Global Technologies",
  url: `${siteOrigin}/`,
  description:
    "Zyneto Global Technologies builds AI agents, generative AI systems, and custom web and mobile products for startups and enterprises worldwide, engineered by teams based in Jaipur, India.",
  logo: {
    "@type": "ImageObject",
    url: "https://cdn.zyneto.com/public/logo-icon-black-512.png",
    width: 512,
    height: 512,
  },
  image: [
    "https://cdn.zyneto.com/public/logo-icon-black-512.png",
    "https://cdn.zyneto.com/public/zyneto-reception.jpg",
  ],
  email: "sales@zyneto.com",
  telephone: "+919509625345",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "2nd Floor, G.D. Tower, Near Diamond Tower, Purani Chungi, Ajmer Road",
    addressLocality: "Jaipur",
    postalCode: "302021",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "26.8850",
    longitude: "75.7405",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00+05:30",
      closes: "18:00+05:30",
    },
  ],
  founders: [
    {
      "@type": "Person",
      name: "Vikas Choudhary",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+919509625345",
      contactType: "sales",
      areaServed: "Worldwide",
      availableLanguage: {
        "@type": "Language",
        name: "English",
      },
    },
  ],
  areaServed: [
    "Worldwide",
    "India",
    "United States",
    "United Kingdom",
    "Middle East",
    "Australia",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Agent Development",
          description:
            "Autonomous AI agents with multi-agent orchestration, scoped tool access over MCP, evaluation suites and guardrails",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Generative AI Development",
          description:
            "Custom generative AI systems, model fine-tuning and LLM application engineering",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise RAG Systems",
          description:
            "Retrieval augmented generation grounded in your documents, with retrieval quality measured separately from generation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Workflow Automation",
          description:
            "Business process automation using AI agents across existing enterprise systems",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Copilot Development",
          description:
            "In-product AI copilots providing contextual assistance and decision support",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description: "Custom web application development services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description: "iOS and Android mobile application development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design",
          description: "User interface and user experience design services",
        },
      },
    ],
  },
  sameAs: organizationSameAs,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${siteOrigin}/`,
  name: "Zyneto Global Technologies",
  publisher: {
    "@id": ORG_ID,
  },
  inLanguage: "en-US",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const revalidate = 300;

export const metadata: Metadata = {
  title: defaultSiteTitle,
  description: defaultMetaDescription,
  metadataBase: new URL(siteOrigin),
  keywords: [
    "web development",
    "mobile app development",
    "software development",
    "UI/UX design",
    "AI integration",
    "custom software",
    "MVP development",
    "IT consulting",
    "React development",
    "Flutter development",
  ],
  authors: [{ name: "Zyneto Global Technologies" }],
  creator: "Zyneto Global Technologies",
  publisher: "Zyneto Global Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/ico",
      },
    ],
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    title: defaultSiteTitle,
    description: defaultMetaDescription,
    url: siteOrigin,
    siteName: "Zyneto Global Technologies",
    images: [
      {
        url: defaultMetaImage,
        width: 1200,
        height: 630,
        alt: "Zyneto - AI Agent and Generative AI Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zyneto",
    creator: "@zyneto",
    title: defaultSiteTitle,
    description: defaultMetaDescription,
    images: [defaultMetaImage],
  },
  alternates: {
    canonical: siteOrigin,
    languages: {
      en: siteOrigin,
      "x-default": siteOrigin,
    },
  },
  other: {
    "revisit-after": "2 days",
    rating: "Safe For Kids",
    "document-type": "Public",
    language: "English",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/ico" href="/favicon.ico" />

        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin=""
        />

        <link rel="preconnect" href="https://cdn.zyneto.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//cdn.zyneto.com" />

        {apiOrigin && <link rel="preconnect" href={apiOrigin} crossOrigin="" />}
        {apiHost && <link rel="dns-prefetch" href={`//${apiHost}`} />}

        <link rel="preload" as="style" href="/styles/deferred.css" />
        <link rel="preload" as="style" href="/styles/performance.css" />

        {/* Some upstream inserts .css files as <script src>; strip them. */}
        <Script
          id="fix-css-script-tags"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
  function replaceScriptTag(s){
    if(!s || !s.src || !/\\.css(\\?|$)/.test(s.src)) return;
    var href = s.getAttribute('src');
    if(!href) return;
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = href;
    if(!document.querySelector('link[rel="stylesheet"][href=\"'+href+'\"]')){
      document.head.appendChild(l);
    }
    if(s.parentNode){ s.parentNode.removeChild(s); }
  }

  document.querySelectorAll('script[src$=".css"]').forEach(replaceScriptTag);

  var observer = new MutationObserver(function(muts){
    muts.forEach(function(m){
      m.addedNodes && m.addedNodes.forEach(function(node){
        if(node && node.tagName === 'SCRIPT'){ replaceScriptTag(node); }
        if(node && node.querySelectorAll){
          node.querySelectorAll('script').forEach(replaceScriptTag);
        }
      });
    });
  });
  observer.observe(document.documentElement || document, { childList:true, subtree:true });
  setTimeout(function(){ observer.disconnect(); }, 15000);
} catch(e){ /* no-op */ }})();`,
          }}
        />
        <Script
          id="bfcache-media-throttle"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
  var restoreQueue=[];
  function disableMediaNetworking(){
    var nodes = document.querySelectorAll('video, audio');
    nodes.forEach(function(el){
      try{ el.pause && el.pause(); }catch(_){}
      var sources = el.querySelectorAll('source');
      sources.forEach(function(src){
        if(!src.dataset) src.dataset = {};
        if(!src.dataset.src){
          src.dataset.src = src.src || '';
        }
        src.removeAttribute('src');
      });
      if(el.hasAttribute('src')){
        if(!el.dataset) el.dataset = {};
        if(!el.dataset.src){ el.dataset.src = el.getAttribute('src') || ''; }
        el.removeAttribute('src');
      }
      try{ el.load && el.load(); }catch(_){}
      if(restoreQueue.indexOf(el) === -1){ restoreQueue.push(el); }
    });
  }
  function restoreMediaNetworking(){
    restoreQueue.forEach(function(el){
      var sources = el.querySelectorAll('source');
      sources.forEach(function(src){
        if(src.dataset && src.dataset.src){
          src.src = src.dataset.src;
        }
      });
      if(el.dataset && el.dataset.src){
        el.setAttribute('src', el.dataset.src);
      }
      try{ el.load && el.load(); }catch(_){}
      if(el.autoplay && el.muted){
        var p = el.play && el.play();
        if(p && p.catch){ p.catch(function(){}) }
      }
    });
    restoreQueue=[];
  }
  function onPageHide(){
    disableMediaNetworking();
  }
  function onPageShow(e){
    if(e && e.persisted){
      restoreMediaNetworking();
    }
  }
  function onVisibilityChange(){
    if(document.hidden){ disableMediaNetworking(); }
  }
  window.addEventListener('pagehide', onPageHide, {capture:true});
  window.addEventListener('pageshow', onPageShow, {capture:true});
  document.addEventListener('visibilitychange', onVisibilityChange, {passive:true});
} catch(e){ /* no-op */ }})();`,
          }}
        />

        <Script
          id="bfcache-network-abort"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
  // In-flight network activity evicts the page from BFCache; abort on pagehide.
  var controllers=new Set();
  var origFetch=window.fetch;
  window.fetch=function(input, init){
    try{
      var ac=new AbortController();
      init=init||{};
      if(!init.signal){ init.signal=ac.signal; }
      var p=origFetch(input, init);
      controllers.add(ac);
      Promise.resolve(p).finally(function(){ controllers.delete(ac); });
      return p;
    }catch(e){
      return origFetch(input, init);
    }
  };

  var _open=XMLHttpRequest.prototype.open;
  var _send=XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open=function(){ return _open.apply(this, arguments); };
  XMLHttpRequest.prototype.send=function(){
    try{
      var self=this;
      var onHide=function(){ try{ self.abort(); }catch(_){} };
      window.addEventListener('pagehide', onHide, { once:true, capture:true });
      self.addEventListener('loadend', function(){
        window.removeEventListener('pagehide', onHide, { capture:true });
      }, { once:true });
    }catch(_){}
    return _send.apply(this, arguments);
  };

  function abortInFlight(){
    controllers.forEach(function(ac){ try{ ac.abort(); }catch(_){ } });
    controllers.clear();
  }
  window.addEventListener('pagehide', abortInFlight, { capture:true });
} catch(e){ /* no-op */ }})();`,
          }}
        />

        <Script
          src="/js/mobile-optimizer.min.js"
          strategy="afterInteractive"
          id="mobile-optimizer"
        />
      </head>
      <body
        className="antialiased"
        style={{
          fontFamily:
            'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <PerformanceMonitor />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        {isLive && (
          <>
            <Script
              id="google-tag-manager"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
                let gtmLoaded = false;
                let gtmRetries = 0;
                let gtmCleanupTimeout;
                let gtmVisibilityPoll;

                const GESTURES = ['click', 'keydown', 'touchstart', 'pointerdown'];

                const arm = () => {
                  GESTURES.forEach((e) => document.addEventListener(e, loadGTM, { passive: true }));
                  document.addEventListener('visibilitychange', onVisible, { passive: true });
                  clearInterval(gtmVisibilityPoll);
                  // A surface that opens hidden may never fire visibilitychange, so the
                  // event on its own can leave a page unmeasured for its whole lifetime.
                  gtmVisibilityPoll = setInterval(onVisible, 2000);
                };

                const disarm = () => {
                  GESTURES.forEach((e) => document.removeEventListener(e, loadGTM));
                  document.removeEventListener('visibilitychange', onVisible);
                  clearInterval(gtmVisibilityPoll);
                  clearTimeout(gtmCleanupTimeout);
                };

                const loadGTM = () => {
                  if (gtmLoaded) return;
                  if (document.hidden) return;
                  gtmLoaded = true;

                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                  });

                  const script = document.createElement('script');
                  script.async = true;
                  script.defer = true;
                  script.src = 'https://www.googletagmanager.com/gtm.js?id=${GTM_ID}';

                  script.onerror = () => {
                    console.warn('GTM failed to load');
                    gtmLoaded = false;
                    script.remove();
                    if (gtmRetries >= 2) {
                      disarm();
                      return;
                    }
                    gtmRetries += 1;
                    arm();
                    gtmCleanupTimeout = setTimeout(loadGTM, 10000);
                  };

                  document.head.appendChild(script);

                  disarm();
                };

                const onVisible = () => {
                  if (!document.hidden) loadGTM();
                };

                arm();

                // Load at idle so analytics does not wait on a gesture.
                if ('requestIdleCallback' in window) {
                  try { requestIdleCallback(loadGTM, { timeout: 5000 }); } catch(e) {}
                }

                gtmCleanupTimeout = setTimeout(loadGTM, 10000);
                `,
              }}
            />
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
              }}
            ></noscript>
          </>
        )}
        <RouteProgress />
        <ModalProvider>
          <Navbar />
          <OfferMount />
          {children}
          <Footer />
        </ModalProvider>
        <FloatingContactButtons />
        {isLive && <Analytics />}
      </body>
    </html>
  );
}
