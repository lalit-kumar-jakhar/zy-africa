"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";

const BADGE_ID = "d5c3688e-e99d-4d2f-a8e5-b0f95c53427c";
// Use the DMCA-verified production origin to ensure refurl validation
const SITE_ORIGIN = "https://zyneto.com";

export default function DMCABadge() {
  const path = usePathname() || "/";
  const pageUrl = `${SITE_ORIGIN}${path}`;

  const href = `https://www.dmca.com/Protection/Status.aspx?id=${BADGE_ID}&refurl=${pageUrl}`;
  const imgSrc = `https://images.dmca.com/Badges/dmca-badge-w150-5x1-06.png?id=${BADGE_ID}`;

  return (
    <a
      href={href}
      title="DMCA.com Protection Status"
      className="dmca-badge"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <Image
        src={imgSrc}
        alt="DMCA.com Protection Status"
        width={150}
        height={30}
        unoptimized
      />
    </a>
  );
}
