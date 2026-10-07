import SiteOffer from "./SiteOffer";
import { OFFER_ENABLED, OFFER_PAGE_SLUG, OFFER_PREVIEW, offerHasExpired } from "@/constants/offer";

const REVALIDATE = 300;

const isActiveRemotely = async () => {
  const base = process.env.NEXT_PUBLIC_BASE_URL;
  if (!base) return false;
  try {
    const res = await fetch(`${base}/pages/${OFFER_PAGE_SLUG}/`, {
      next: { revalidate: REVALIDATE, tags: ["site-offer"] },
    });
    if (!res.ok) return false;
    const data = await res.json();
    return data?.status === "Active";
  } catch {
    return false;
  }
};

const OfferMount = async () => {
  if (!OFFER_ENABLED || offerHasExpired()) return null;
  const active = OFFER_PREVIEW || (await isActiveRemotely());
  if (!active) return null;
  return <SiteOffer active />;
};

export default OfferMount;
