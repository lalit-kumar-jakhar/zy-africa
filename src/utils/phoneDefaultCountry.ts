const ISO2 = /^[a-z]{2}$/;

function normalizeIso2(code: unknown): string | null {
  const c = String(code ?? "")
    .toLowerCase()
    .trim();
  return ISO2.test(c) ? c : null;
}

/** Browser locale region (e.g. en-IN → in), else India as a neutral default. */
export function getLocaleFallbackCountryIso(): string {
  if (typeof navigator === "undefined") return "in";
  const region = (navigator.language || "").split("-")[1]?.toLowerCase();
  if (region && ISO2.test(region)) return region;
  return "in";
}

/** Timezone fallback keeps India users on +91 when IP APIs are blocked/wrong. */
function getTimezoneFallbackCountryIso(): string | null {
  if (typeof Intl === "undefined") return null;
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone?.toLowerCase() ?? "";
  if (!tz) return null;
  if (tz === "asia/kolkata" || tz === "asia/calcutta") return "in";
  return null;
}

export async function fetchDefaultPhoneCountryIso(): Promise<string> {
  // No network needed when the timezone is conclusive.
  const timezoneCountry = getTimezoneFallbackCountryIso();
  if (timezoneCountry) return timezoneCountry;

  const fetchIso = async (
    url: string,
    read: (data: Record<string, unknown>) => unknown
  ): Promise<string | null> => {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
      if (!res.ok) return null;
      const data = (await res.json()) as Record<string, unknown>;
      return normalizeIso2(read(data));
    } catch {
      return null;
    }
  };

  const fromIpWho = await fetchIso("https://ipwho.is/", (d) =>
    d.success === false ? null : d.country_code
  );
  if (fromIpWho) return fromIpWho;

  const fromIpapi = await fetchIso(
    "https://ipapi.co/json/",
    (d) => d.country_code
  );
  if (fromIpapi) return fromIpapi;

  return getLocaleFallbackCountryIso();
}
