import React from "react";
import { buildSrcSet } from "@/data/image-variants";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  title?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  draggable?: boolean;
  priority?: boolean;
  eager?: boolean;
};

const fillStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
};

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  sizes,
  className,
  title,
  fill = false,
  width,
  height,
  draggable,
  priority = false,
  eager = false,
}) => {
  const srcSet = buildSrcSet(src);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      title={title}
      className={className}
      style={fill ? fillStyle : undefined}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      draggable={draggable}
      decoding="async"
      loading={priority || eager ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
    />
  );
};

export default ResponsiveImage;
