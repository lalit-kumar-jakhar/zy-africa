import Link from "next/link";
import { isShippedHref } from "@/constants/shipped-routes";
import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import IndustryTable from "@/components/industries/IndustryTable";
import Reveal from "@/components/common/Reveal";
import { lastOfOdd } from "@/utils/case-study-grid";
import {
  body,
  cautionLabel,
  darkBody,
  darkMuted,
  ink,
  inkSoft,
  label,
  muted,
} from "@/components/industries/typography";
import type { CaseStudy } from "@/data/case-studies/types";
import { gridDotsStyle, scrollMt, sectionPad, sectionPadSm } from "./constants";

type MainProps = {
  cs: CaseStudy;
  anonymised: boolean;
};

type ClosingProps = {
  cs: CaseStudy;
  relatedStudies: { label: string; href: string; note: string }[];
};

// Alignment rule: section heads and the body under them are centered; hero and
// evidence rail stay left-aligned as composition blocks, not section heads.
export function CaseStudyMain({ cs, anonymised }: MainProps) {
  return (
    <>
      <section
        id="domain"
        className={`${sectionPad} ${scrollMt} bg-white`}
      >
        <div className="container mx-auto px-4">
          <Reveal>
            <IndustrySectionHead
              title={cs.domainContext.heading}
              description="What makes this problem genuinely hard - before any client name enters the page."
            />
          </Reveal>

          <div className="mx-auto mt-10 grid w-full grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:mt-14">
            {cs.domainContext.blocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 50}>
                <article className="border-t border-[#E8E8ED] pt-5 text-left">
                  <span
                    aria-hidden
                    className={`text-[12px] font-semibold tabular-nums ${muted}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`mt-3 text-[19px] font-semibold leading-snug md:text-[22px] ${ink}`}
                  >
                    {b.title}
                  </h3>
                  <p
                    className={`mt-3 text-[15px] leading-relaxed md:text-[16px] ${body}`}
                  >
                    {b.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-[#F7F7F9]`} style={gridDotsStyle}>
        <div className="container mx-auto px-4">
          <Reveal>
            <IndustrySectionHead
              title="The situation, and what we built"
            />
          </Reveal>

          {anonymised && cs.clientDescriptor && (
            <Reveal delay={40}>
              <p
                className={`mx-auto mt-6 max-w-5xl text-center text-[15px] leading-relaxed ${body}`}
              >
                <span className={`font-medium ${ink}`}>Who this was for:</span>{" "}
                {cs.clientDescriptor.full}
              </p>
            </Reveal>
          )}

          <Reveal delay={70}>
            <p
              className={`mx-auto mt-6 max-w-5xl text-center text-[17px] leading-relaxed md:text-[19px] ${inkSoft}`}
            >
              {cs.situation}
            </p>
          </Reveal>

          <div
            className={`mx-auto mt-10 grid h-full w-full grid-cols-1 items-center lg:mt-12 lg:grid-cols-2`}
          >
            {cs.buildBlocks.map((b, i) => (
              <Reveal
                key={b.heading}
                delay={i * 45}
                className={lastOfOdd(i, cs.buildBlocks.length)}
              >
                <article className="group relative py-7 h-full first:pt-6 last:pb-6 md:py-8 md:first:pt-7 md:last:pb-7">
                  <div className="flex flex-col gap-3 duration-300 sm:flex-row sm:gap-8">
                    <span
                      aria-hidden
                      className="shrink-0 font-semibold tracking-tight text-[28px] leading-none text-black/15 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-[#FF732D] group-hover:via-[#FF0044] group-hover:to-[#9900FF] md:text-[48px]"
                    >
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-bold text-[#111111] md:text-[22px]">
                        {b.heading}
                      </h3>
                      <p className="mt-2 max-w-xl text-base leading-relaxed text-[#616161] md:text-lg">
                        {b.body}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-white`}>
        <div className="container mx-auto px-4">
          <Reveal>
            <IndustrySectionHead
              eyebrow="Tradeoffs"
              title="Decisions, and what each one cost"
              description="Every choice closed off something else. Those costs are stated, not hidden."
            />
          </Reveal>

          <div
            className={`mx-auto mt-10 grid w-full grid-cols-1 gap-4 lg:mt-14 lg:grid-cols-2`}
          >
            {cs.decisions.map((d, i) => (
              <Reveal
                key={d.decision}
                delay={i * 40}
                className={lastOfOdd(i, cs.decisions.length)}
              >
                <article className="flex flex-col gap-4 p-7 text-left border border-[#E8E8ED] rounded-2xl">

                  <div>
                    <h3
                      className={`text-[18px] font-semibold leading-snug md:text-[21px] ${ink}`}
                    >
                      {d.decision}
                    </h3>
                    <p className={`mt-3 text-[15px] leading-relaxed ${body}`}>
                      <span className={`font-medium ${inkSoft}`}>Instead of:</span>{" "}
                      {d.alternativeRejected}. {d.reason}
                    </p>
                    <p
                      className={`mt-4 border-l-2 border-[#E24B4A] pl-4 text-[15px] leading-relaxed ${body}`}
                    >
                      <span className={cautionLabel}>What we accepted</span>
                      <span className="mt-1.5 block">{d.tradeoffAccepted}</span>
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionPad} bg-[#F7F7F9]`} style={gridDotsStyle}>
        <div className="container mx-auto px-4">
          <Reveal>
            <IndustrySectionHead
              eyebrow="Reusable"
              title={cs.reusableArtifact.heading}
              description={cs.reusableArtifact.intro}
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mx-auto mt-8 max-w-5xl lg:mt-12">
              <IndustryTable
                columns={cs.reusableArtifact.columns.map((header, i) => ({
                  key: `c${i}`,
                  header,
                  className: i === 0 ? `font-semibold ${ink}` : body,
                  render: (row: { cells: string[] }) => row.cells[i],
                }))}
                rows={cs.reusableArtifact.rows.map((cells) => ({ cells }))}
                rowKey={(row) => row.cells[0]}
                minWidth="640px"
              />
              {cs.reusableArtifact.note && (
                <p
                  className={`mx-auto mt-5 max-w-3xl text-center text-[15px] leading-relaxed ${body}`}
                >
                  {cs.reusableArtifact.note}
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`${sectionPad} bg-white`}>
        <div className="container mx-auto px-4">
          <Reveal>
            <IndustrySectionHead
              eyebrow="Delivery"
              title="What shipped"
              description="Capabilities delivered and the scope of the build - not results attributed to it."
            />
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 overflow-hidden rounded-2xl border border-[#E8E8ED] lg:mt-14 lg:grid-cols-2">
            <Reveal delay={40} className="h-full">
              <div className="flex h-full flex-col bg-[#161616] p-7 text-left md:p-9">
                <p
                  className={`text-[12px] font-semibold uppercase tracking-[0.12em] ${darkMuted}`}
                >
                  Capabilities
                </p>
                <ul className="mt-6 space-y-4">
                  {cs.shipped.capabilities.map((c) => (
                    <li
                      key={c}
                      className={`border-l-2 border-white/20 pl-4 text-[15px] leading-relaxed md:text-[16px] ${darkBody}`}
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80} className="h-full">
              <div className="flex h-full flex-col bg-[#FAFAFB] p-7 text-left md:p-9">
                <p className={label}>Scope</p>
                <ul className="mt-6 space-y-4">
                  {cs.shipped.scopeFacts.map((c) => (
                    <li
                      key={c}
                      className={`border-l-2 border-[#E5E7EB] pl-4 text-[15px] leading-relaxed md:text-[16px] ${body}`}
                    >
                      {c}
                    </li>
                  ))}
                </ul>
                <p className={`mt-8 text-[13px] ${muted}`}>
                  Scope of the build, not results attributed to it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {cs.clientQuote && (
        <section className={`${sectionPad} bg-[#FAFAFB]`}>
          <div className="container mx-auto px-4">
            <Reveal>
              <IndustrySectionHead
                title="The client's published words"
                description="Quoted verbatim from a public review, linked to its source. Nothing here is a claim we make on our own behalf."
              />
            </Reveal>

            <Reveal delay={60}>
              <figure className="mx-auto mt-10 w-full rounded-2xl border border-[#E8E8ED] bg-white p-7 text-left md:p-9 lg:mt-12">
                <blockquote
                  className={`text-[17px] leading-relaxed md:text-[19px] ${ink}`}
                >
                  {cs.clientQuote.quote}
                </blockquote>
                <figcaption
                  className={`mt-6 border-t border-[#F0F0F3] pt-5 text-[15px] ${body}`}
                >
                  <span className={`font-semibold ${ink}`}>
                    {cs.clientQuote.name}
                  </span>
                  {", "}
                  {cs.clientQuote.title}
                  {", "}
                  {cs.clientQuote.company}
                  {". "}
                  <a
                    href={cs.clientQuote.sourceUrl}
                    rel="nofollow noopener"
                    target="_blank"
                    className="underline underline-offset-4"
                  >
                    Published on {cs.clientQuote.sourcePlatform}
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}

export function CaseStudyClosing({
  cs,
  relatedStudies,
}: ClosingProps) {
  const contextLinks = [
    cs.links.service && {
      ...cs.links.service,
      note: "The service behind this build",
    },
    cs.links.industry && {
      ...cs.links.industry,
      note: "The vertical this belongs to",
    },
  ].filter(Boolean) as { label: string; href: string; note: string }[];

  return (
    <>
      <section className={`${sectionPad} bg-[#F7F7F9]`}>
        <div className="container mx-auto px-4">
          <Reveal>
            <IndustrySectionHead
              title="Risk, ownership and commercials"
            />
          </Reveal>
          <div className="mx-auto mt-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-center h-full lg:mt-14">
            <div className="flex flex-col gap-4 text-left">
              {cs.riskAndHandover.map((r, i) => (
                <Reveal key={r.title} delay={i * 45}>
                  <div>
                    <h3
                      className={`text-[17px] font-semibold md:text-[18px] ${ink}`}
                    >
                      {r.title}
                    </h3>
                    <p className={`mt-3 text-[15px] leading-relaxed ${body}`}>
                      {r.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={100}>
              <dl className="flex flex-col gap-4 p-2 bg-white text-left border border-[#E8E8ED] rounded-2xl">
                {cs.commercials.map((c) => (
                  <div
                    key={c.label}
                    className="grid grid-cols-1 border-b border-[#F0F0F3] last:border-0 sm:grid-cols-[200px_1fr]"
                  >
                    <dt
                      className={`border-b border-[#F0F0F3] p-4 text-[14px] font-semibold sm:border-b-0 sm:border-r md:p-5 md:text-[15px] ${ink}`}
                    >
                      {c.label}
                    </dt>
                    <dd
                      className={`p-4 text-[14px] leading-relaxed md:p-5 md:text-[15px] ${body}`}
                    >
                      {c.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>
      <section className={`${sectionPad} bg-white`}>
        <div className="container mx-auto px-4">
          <Reveal>
            <IndustrySectionHead
              eyebrow="Reflection"
              title="What we would do differently"
              description={cs.openQuestions}
            />
          </Reveal>
          <div className="mx-auto mt-12 max-w-6xl lg:mt-16">
            <div className="mt-4 divide-y divide-[#E8E8ED] border-y border-[#E8E8ED] text-left">
              {cs.faqs.map((f, i) => (
                <Reveal key={f.question} delay={i * 30}>
                  <details className="group py-5 md:py-6">
                    <summary
                      className={`flex cursor-pointer list-none items-start justify-between gap-6 text-[16px] font-semibold md:text-[17px] ${ink}`}
                    >
                      {f.question}
                      <span
                        aria-hidden
                        className="shrink-0 text-[22px] leading-none text-[#9900ff] transition-transform duration-200 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p
                      className={`mt-3 pr-10 text-[15px] leading-relaxed ${body}`}
                    >
                      {f.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionPadSm} bg-[#F7F7F9]`} style={gridDotsStyle}>
        <div className="container mx-auto px-4">
          <Reveal>
            <IndustrySectionHead
              eyebrow="Context"
              title="Where this sits in our work"
            />
          </Reveal>

          {contextLinks.length > 0 && (
            <div className="mx-auto mt-8 grid w-full grid-cols-1 gap-3 text-left sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-4">
              {contextLinks.map((link, i) => {
                const cardClass =
                  "group flex h-full flex-col border-t border-[#E8E8ED] pt-5 transition-colors hover:border-[#161616]";
                const card = (
                  <>
                    <span
                      className={`text-[12px] font-semibold uppercase tracking-widest ${muted}`}
                    >
                      {link.note}
                    </span>
                    <span
                      className={`mt-2 text-[17px] font-semibold transition-colors group-hover:text-[#9900ff] ${ink}`}
                    >
                      {link.label}
                    </span>
                    <span
                      className={`mt-auto pt-5 text-[14px] font-medium ${ink}`}
                    >
                      View
                      <span
                        aria-hidden
                        className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </>
                );
                return (
                  <Reveal key={link.href} delay={i * 40} className="h-full">
                    {isShippedHref(link.href) ? (
                      <Link href={link.href} className={cardClass}>
                        {card}
                      </Link>
                    ) : (
                      <div className={cardClass}>{card}</div>
                    )}
                  </Reveal>
                );
              })}
            </div>
          )}

          {relatedStudies.length > 0 && (
            <Reveal delay={80}>
              <div className="mx-auto mt-10 max-w-5xl border-t border-[#E8E8ED] pt-8 text-left">
                <p className={label}>Related studies</p>
                <ul className="mt-4 space-y-3">
                  {relatedStudies.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className={`group inline-flex flex-wrap items-baseline gap-x-2 text-[16px] font-medium transition-colors hover:text-[#9900ff] ${ink}`}
                      >
                        {r.label}
                        <span className={`text-[14px] font-normal ${muted}`}>
                          {r.note}
                        </span>
                        <span
                          aria-hidden
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
