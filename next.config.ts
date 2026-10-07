import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],

  deploymentId: process.env.VERCEL_DEPLOYMENT_ID,

  experimental: {
    optimizePackageImports: ["framer-motion"],
    cssChunking: "strict",
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks?.cacheGroups,
          reactIcons: {
            name: "react-icons",
            test: /[\\/]node_modules[\\/]react-icons[\\/]/,
            chunks: "all",
            priority: 15,
          },
          framerMotion: {
            name: "framer-motion",
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            chunks: "all",
            priority: 15,
          },
          gsap: {
            name: "gsap",
            test: /[\\/]node_modules[\\/]gsap[\\/]/,
            chunks: "all",
            priority: 15,
          },
        },
      };
    }

    return config;
  },

  poweredByHeader: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "swiperjs.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.zyneto.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.dmca.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      ...(process.env.S3_BASE_URL
        ? [
            {
              protocol: "https" as const,
              hostname: process.env.S3_BASE_URL.replace(/^https?:\/\//, ""),
              port: "",
              pathname: "/**",
            },
          ]
        : []),
    ],
  },
  async headers() {
    return [
      {
        source: "/static/:path*",
        headers: [
          { key: "Content-Disposition", value: "inline" },
          {
            key: "Cache-Control",
            value:
              "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/videos/:path*",
        headers: [
          { key: "Content-Disposition", value: "inline" },
          {
            key: "Cache-Control",
            value:
              "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/:dir(styles|js)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/:all*\\.xml",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: (() => {
              const scriptSrc = [
                `'self'`,
                `'unsafe-inline'`,
                ...(process.env.NODE_ENV !== "production"
                  ? [`'unsafe-eval'`]
                  : []),
                `https://www.google.com`,
                `https://www.gstatic.com`,
                `https://www.googletagmanager.com`,
                `https://*.google-analytics.com`,
                `https://www.clarity.ms`,
                `https://scripts.clarity.ms`,
                `https://cdn-cookieyes.com`,
                `https://*.cookieyes.com`,
                `https://images.dmca.com`,
              ].join(" ");
              const styleSrc = `'self' 'unsafe-inline'`;
              const normalizeS3 = (val?: string): string => {
                if (!val) return "";
                // Ensure single https:// prefix and no duplicate schemes
                const hasScheme = /^https?:\/\//i.test(val);
                const withScheme = hasScheme ? val : `https://${val}`;
                return ` ${withScheme}`;
              };
              const s3Src = normalizeS3(process.env.S3_BASE_URL);
              const originOf = (val?: string): string => {
                if (!val) return "";
                try {
                  return ` ${new URL(val).origin}`;
                } catch {
                  return "";
                }
              };
              const apiSrc = originOf(process.env.NEXT_PUBLIC_BASE_URL);
              const imgSrc = `'self' data: blob: https:${s3Src}`;
              const fontSrc = `'self' data:`;
              const connectSrc = [
                `'self'`,
                `https://www.google.com`,
                `https://www.googletagmanager.com`,
                `https://analytics.google.com`,
                `https://*.analytics.google.com`,
                `https://google-analytics.com`,
                `https://*.google-analytics.com`,
                `https://stats.g.doubleclick.net`,
                `https://*.clarity.ms`,
                `https://*.cookieyes.com`,
                `https://cdn-cookieyes.com`,
                `https://vitals.vercel-insights.com`,
                `https://ipapi.co`,
                `https://ipwho.is`,
              ].join(" ") + apiSrc + s3Src;
              const frameSrc = [
                `'self'`,
                `https://www.google.com`,
                `https://recaptcha.google.com`,
                `https://www.googletagmanager.com`,
                `https://td.doubleclick.net`,
              ].join(" ");
              return [
                `default-src 'self'`,
                `base-uri 'self'`,
                `form-action 'self'`,
                `object-src 'none'`,
                `frame-ancestors 'none'`,
                `script-src ${scriptSrc}`,
                `script-src-elem ${scriptSrc}`,
                `style-src ${styleSrc}`,
                `img-src ${imgSrc}`,
                `font-src ${fontSrc}`,
                `connect-src ${connectSrc}`,
                `frame-src ${frameSrc}`,
                `upgrade-insecure-requests`,
              ].join("; ");
            })(),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/services/mobile-app-devlopment",
        destination: "/services/mobile-app-development",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    const s3BaseUrl = process.env.S3_BASE_URL;

    // Only add S3 rewrites if the environment variable is defined
    const rewrites: { source: string; destination: string }[] = [];

    if (s3BaseUrl) {
      rewrites.push({
        source: "/sitemap.xml",
        destination: `${s3BaseUrl}/media/sitemap.xml`,
      });
    }

    return rewrites;
  },
};

export default nextConfig;