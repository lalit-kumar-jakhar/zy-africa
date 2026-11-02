import type { CaseStudy } from "./types";
import { alAmriExpress } from "./grocery-delivery-oman-al-amri-express";
import { kroolo } from "./ai-work-os-platform-kroolo";
import { ndc } from "./fmcg-distribution-oman-ndc";
import { stylebank } from "./multi-tenant-apparel-platform-stylebank";
import { famepilot } from "./multi-location-reputation-management-famepilot";
import { g4girl } from "./fashion-ecommerce-india-g4girl";
import { doradori } from "./garment-erp-doradori";
import { cheersagar } from "./garment-accounting-reporting-cheersagar";
import { tvam } from "./vedic-astrology-app-tvam";

export const caseStudies: CaseStudy[] = [alAmriExpress, kroolo, ndc, stylebank, famepilot, g4girl, doradori, cheersagar, tvam];

export const caseStudyBySlug = (slug: string): CaseStudy | undefined =>
  caseStudies.find((c) => c.slug === slug);
export const clientLabel = (c: CaseStudy): string =>
  c.clientName ?? c.clientDescriptor?.label ?? "";

export const isAnonymised = (c: CaseStudy): boolean => !c.clientName;

export const caseStudySectors = (): string[] =>
  Array.from(new Set(caseStudies.map((c) => c.rail.sector))).sort((a, b) =>
    a.localeCompare(b)
  );

export type { CaseStudy };
