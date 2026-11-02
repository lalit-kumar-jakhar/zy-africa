import React from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  /** Accepted for drop-in compatibility with the old react-awesome-reveal API; unused. */
  direction?: string;
  /** Accepted for drop-in compatibility; the CSS animation always plays once, so this is a no-op. */
  triggerOnce?: boolean;
  className?: string;
};

const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  duration = 500,
  className,
  style,
  ...rest
}: RevealProps & { style?: React.CSSProperties }) => {
  void rest;
  return (
    <div
      className={["reveal", className].filter(Boolean).join(" ")}
      style={{
        ...style,
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
