import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { isShippedHref } from "@/constants/shipped-routes";

type Props = ComponentProps<typeof Link>;

/**
 * Renders a real link only when the destination is a page this site ships.
 * Otherwise the same words stay in place as plain text.
 */
export default function ContentLink({
  href,
  children,
  className,
  ...rest
}: Props) {
  const hrefString =
    typeof href === "string" ? href : (href?.pathname ?? "");

  if (!isShippedHref(hrefString)) {
    const classText = typeof className === "string" ? className : "";
    const block = /\bflex\b|\bgrid\b/.test(classText);
    const Tag = block ? "div" : "span";
    return <Tag className={className}>{children as ReactNode}</Tag>;
  }

  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}
