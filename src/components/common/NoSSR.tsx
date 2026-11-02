"use client";
import React from "react";
import { useIsClient } from "@/hooks/useIsClient";

type NoSSRProps = {
  children: React.ReactNode;
};

export default function NoSSR({ children }: NoSSRProps) {
  const isClient = useIsClient();
  if (!isClient) return null;
  return <>{children}</>;
}
