import Reveal from "@/components/common/Reveal";
import { darkBody, darkMuted } from "@/components/industries/typography";

type CaseStudyEvidenceRailProps = {
  market: string;
  engagementType: string;
  platforms: string[];
  stack: string[];
  deliveryFacts?: { label: string; value: string }[];
  liveLinks: { label: string; url: string }[];
};

const CaseStudyEvidenceRail = ({
  market,
  engagementType,
  platforms,
  stack,
  deliveryFacts,
  liveLinks,
}: CaseStudyEvidenceRailProps) => {
  const facts = [
    { k: "Market", v: market },
    { k: "Engagement", v: engagementType },
    { k: "Platforms", v: platforms.join(" · ") },
    { k: "Stack", v: `${stack.length} technologies` },
  ];

  return (
    <section className="relative overflow-hidden bg-[#111111] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.06),transparent_55%)]"
      />

      <div className="container relative mx-auto px-4 py-10 md:py-12">
        <Reveal>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${darkMuted}`}
              >
                Build fingerprint
              </p>
              <p className={`mt-1.5 max-w-xl text-[15px] leading-snug ${darkBody}`}>
                Where it runs, how we engaged, and what it was built on.
              </p>
            </div>

            {liveLinks.length > 0 && (
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <span
                  className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${darkMuted}`}
                >
                  See it live
                </span>
                {liveLinks.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-white underline-offset-4 transition-colors hover:underline"
                  >
                    {l.label}
                    <span
                      aria-hidden
                      className="translate-y-px text-[12px] text-white/45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    >
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={70}>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-white/10 pt-8 md:grid-cols-4 md:gap-8">
            {facts.map((f) => (
              <div key={f.k} className="min-w-0">
                <dt
                  className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${darkMuted}`}
                >
                  {f.k}
                </dt>
                <dd className="mt-2 text-[17px] font-semibold leading-snug tracking-tight text-white md:text-[18px]">
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${darkMuted}`}
              >
                Technologies
              </p>
              <ul className="mt-3 flex flex-wrap items-center gap-x-1 gap-y-2">
                {stack.map((s, i) => (
                  <li key={s} className="flex items-center">
                    {i > 0 && (
                      <span aria-hidden className="px-2 text-white/25">
                        ·
                      </span>
                    )}
                    <span className="text-[14px] font-medium text-white/85 md:text-[15px]">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {deliveryFacts && deliveryFacts.length > 0 && (
              <dl className="flex flex-wrap gap-x-8 gap-y-2 md:justify-end">
                {deliveryFacts.map((f) => (
                  <div key={f.label}>
                    <dt className={`inline text-[13px] ${darkMuted}`}>
                      {f.label}:{" "}
                    </dt>
                    <dd className="inline text-[13px] font-medium text-white/85">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CaseStudyEvidenceRail;
