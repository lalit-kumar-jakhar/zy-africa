"use client";

import { useMemo, useState } from "react";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import Link from "next/link";
import Reveal from "@/components/common/Reveal";
import { body, darkBody, darkMuted, ink, muted } from "@/components/industries/typography";

export type CaseStudyCard = {
  slug: string;
  client: string;
  anonymised: boolean;
  sector: string;
  market: string;
  engagementType: string;
  standfirst: string;
  title: string;
  stack: string[];
  platforms?: string[];
  coverImage?: string;
  /** Present only where a client has published an approved figure. */
  headlineOutcome?: string;
};

type Props = {
  studies: CaseStudyCard[];
  sectors: string[];
};

function FeaturedStudy({ cs }: { cs: CaseStudyCard }) {
  return (
    <Reveal>
      <Link
        href={`/case-studies/${cs.slug}`}
        className="group relative block overflow-hidden rounded-2xl bg-[#161616]"
      >
        <div className="grid lg:grid-cols-12">
          <div className="relative min-h-70 overflow-hidden sm:min-h-85 lg:col-span-6 lg:min-h-120">
            {cs.coverImage ? (
              <ResponsiveImage
                src={cs.coverImage}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            ) : (
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-br from-[#2a2a2a] via-[#161616] to-[#0a0a0a]"
              />
            )}
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-[#161616] via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:to-[#161616]/90"
            />
          </div>

          <div className="relative flex flex-col justify-center px-6 py-8 sm:px-8 md:px-10 lg:col-span-6 lg:py-12 xl:px-14">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className={`text-[12px] font-semibold uppercase tracking-[0.14em] ${darkMuted}`}>
                {cs.sector}
              </span>
              <span aria-hidden className="h-1 w-1 rounded-full bg-white/25" />
              <span className={`text-[12px] font-semibold uppercase tracking-[0.14em] ${darkMuted}`}>
                {cs.market}
              </span>
              {cs.anonymised && (
                <span className="rounded-md border border-white/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/70">
                  Client withheld
                </span>
              )}
            </div>

            <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.12em] text-white/45">
              {cs.client}
            </p>

            <h3 className="mt-2 text-[26px] font-bold leading-[1.15] tracking-tight text-white sm:text-[30px] md:text-[34px] lg:text-[36px]">
              {cs.title}
            </h3>

            <p className={`mt-5 max-w-lg text-[16px] leading-relaxed md:text-[17px] ${darkBody}`}>
              {cs.standfirst}
            </p>

            {cs.headlineOutcome && (
              <p className="mt-4 text-[15px] font-medium text-white">
                {cs.headlineOutcome}
              </p>
            )}

            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div>
                <dt className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${darkMuted}`}>
                  Engagement
                </dt>
                <dd className="mt-1 text-[14px] font-medium text-white">
                  {cs.engagementType}
                </dd>
              </div>
              {cs.platforms && cs.platforms.length > 0 && (
                <div>
                  <dt className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${darkMuted}`}>
                    Platforms
                  </dt>
                  <dd className="mt-1 text-[14px] font-medium text-white">
                    {cs.platforms.join(", ")}
                  </dd>
                </div>
              )}
              <div>
                <dt className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${darkMuted}`}>
                  Stack
                </dt>
                <dd className="mt-1 text-[14px] font-medium text-white">
                  {cs.stack.length} technologies
                </dd>
              </div>
            </dl>

            <ul className="mt-5 flex flex-wrap gap-2">
              {cs.stack.slice(0, 5).map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-white/15 px-2.5 py-1 text-[12px] text-white/65"
                >
                  {s}
                </li>
              ))}
              {cs.stack.length > 5 && (
                <li className={`px-1 py-1 text-[12px] ${darkMuted}`}>
                  +{cs.stack.length - 5}
                </li>
              )}
            </ul>

            <span className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-white transition-colors group-hover:text-[#ff9a6b]">
              Read the full study
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

function StudyCard({ cs, index }: { cs: CaseStudyCard; index: number }) {
  return (
    <Reveal delay={index * 55} className="h-full">
      <Link
        href={`/case-studies/${cs.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8E8ED] bg-[#FAFAFB] transition-colors hover:border-[#161616]"
      >
        {cs.coverImage && (
          <div className="relative aspect-16/10 overflow-hidden bg-[#161616]">
            <ResponsiveImage
              src={cs.coverImage}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className={`text-[12px] font-semibold uppercase tracking-widest ${muted}`}>
              {cs.sector}
            </span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-[#D1D5DB]" />
            <span className={`text-[12px] ${muted}`}>{cs.market}</span>
            {cs.anonymised && (
              <span className="rounded-md border border-[#E5E7EB] bg-white px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#4B5563]">
                Client withheld
              </span>
            )}
          </div>

          <h3 className={`mt-3 text-[21px] font-semibold leading-snug md:text-[23px] ${ink}`}>
            {cs.client}
          </h3>

          <p className={`mt-3 flex-1 text-[15px] leading-relaxed md:text-[16px] ${body}`}>
            {cs.standfirst}
          </p>

          {cs.headlineOutcome && (
            <p className={`mt-4 text-[14px] font-medium ${ink}`}>
              {cs.headlineOutcome}
            </p>
          )}

          <div className="mt-6 flex items-center justify-between border-t border-[#E8E8ED] pt-5">
            <span className={`text-[13px] ${muted}`}>{cs.engagementType}</span>
            <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#161616] transition-colors group-hover:text-[#9900ff]">
              Read
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export default function CaseStudyGrid({ studies, sectors }: Props) {
  const [active, setActive] = useState<string>("All");

  const visible = useMemo(
    () => (active === "All" ? studies : studies.filter((s) => s.sector === active)),
    [active, studies]
  );

  const showFilter = studies.length >= 3 && sectors.length > 1;
  const [lead, ...rest] = visible;

  return (
    <>
      {showFilter && (
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-x-1 gap-y-2"
          role="group"
          aria-label="Filter case studies by sector"
        >
          {["All", ...sectors].map((s) => {
            const on = s === active;
            return (
              <button
                key={s}
                type="button"
                onClick={() => setActive(s)}
                aria-pressed={on}
                className={`relative px-4 py-2 text-[14px] font-medium transition-colors ${on ? "text-[#161616]" : "text-[#6B7280] hover:text-[#161616]"
                  }`}
              >
                {s}
                <span
                  aria-hidden
                  className={`absolute inset-x-3 bottom-0 h-0.5 origin-left transition-transform duration-300 ${on ? "scale-x-100 bg-[#161616]" : "scale-x-0 bg-transparent"
                    }`}
                />
              </button>
            );
          })}
        </div>
      )}

      {visible.length > 0 && lead && (
        <div className="mt-8 space-y-6 lg:mt-12 lg:space-y-8">
          <FeaturedStudy cs={lead} />
          {rest.length > 0 && (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
              {rest.map((cs, i) => (
                <StudyCard key={cs.slug} cs={cs} index={i} />
              ))}
            </div>
          )}
        </div>
      )}

      {visible.length === 0 && (
        <p className="mt-10 text-center text-[16px] text-[#4B5563]">
          Nothing published in that sector yet.
        </p>
      )}
    </>
  );
}
