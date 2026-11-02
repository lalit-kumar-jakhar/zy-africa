import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CONSENT_OPT_IN = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR",
  "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL",
  "PL", "PT", "RO", "SK", "SI", "ES", "SE",
  "IS", "LI", "NO",
  "GB", "CH",
]);

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const country = request.headers.get("x-vercel-ip-country");

  if (country) {
    response.cookies.set("zy_region", CONSENT_OPT_IN.has(country) ? "EU" : "ROW", {
      path: "/",
      maxAge: 86400,
      sameSite: "lax",
      secure: true,
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|static/|favicon.ico|robots.txt|.*\\.xml$|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico|woff|woff2|ttf|otf|mp4|webm|pdf)$).*)",
  ],
};
