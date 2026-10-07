"use client";

import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import Reveal from "@/components/common/Reveal";
import StarIcon from "@/components/common/StarIcon";
import { useModal } from "@/context/ModalContext";
import { body, ink } from "@/components/industries/typography";

const gridDotsBgImage = "/static/assets/home/faq/grid-dots.svg";
const bgPattern = "/static/assets/home/star-circles-bg.svg";

const principles = [
  {
    title: "No metric without a baseline",
    body: "Any figure carries the number it moved from, the period it moved over, and who published it. Most engagements have none - those pages say so and spend the space on what was built.",
  },
  {
    title: "Every decision states what it cost",
    body: "Each choice names the alternative we rejected and the price we knowingly paid. A decision with no downside was a preference, and a page full of them tells you nothing.",
  },
  {
    title: "The domain section names no client",
    body: "Each study opens with what makes the problem hard: regulation, data model, physical constraint. Useful whether or not you care about the client.",
  },
  {
    title: "Withheld clients are marked as such",
    body: "Where naming is ruled out, the study says so. In place of a logo it discloses duration, team composition and the full stack - harder to invent, and more useful.",
  },
];

const CaseStudiesPrinciples = () => {
  const { openModal } = useModal();

  return (
    <section
      className="bg-[#F7F7F9] py-12 md:py-24"
      style={{
        backgroundImage: `url(${gridDotsBgImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-4">
        <Reveal>
          <IndustrySectionHead
            eyebrow="Editorial standard"
            title="How we write these"
            description="Written for someone weighing the same build - not to decorate a sales deck."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-start gap-6 lg:mt-14 lg:grid-cols-12 lg:gap-8">
          <div className="overflow-hidden rounded-2xl border border-[#E8E8ED] bg-white lg:col-span-7">
            <ol className="divide-y divide-[#E8E8ED]">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 55}>
                  <li className="grid gap-3 p-5 sm:grid-cols-[64px_1fr] sm:gap-5 sm:p-6 md:p-7">
                    <span
                      aria-hidden
                      className="text-[28px] font-bold leading-none tabular-nums text-[#161616]/12 sm:text-[32px]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className={`text-[17px] font-semibold leading-snug md:text-[18px] ${ink}`}
                      >
                        {p.title}
                      </h3>
                      <p
                        className={`mt-2 text-[14px] leading-relaxed md:text-[15px] ${body}`}
                      >
                        {p.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal
            delay={120}
            className="lg:sticky lg:top-[calc(var(--nav-height,72px)+1.5rem)] lg:col-span-5"
          >
            <aside className="relative overflow-hidden rounded-2xl bg-[#161616]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url(${bgPattern})` }}
              />
              <div className="relative flex h-full flex-col p-6 md:p-8">
                <StarIcon color="#ffffff" size={36} />
                <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-white/45">
                  Commercials
                </p>
                <h3 className="mt-3 text-[24px] font-bold leading-snug text-white md:text-[28px]">
                  Rates from $40–$100 / hour
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                  Depending on role and seniority. We do not quote a fixed price
                  before discovery - discovery is what makes a number honest.
                </p>

                <button
                  type="button"
                  className="gradient-bg-btn mt-8 w-full rounded-full px-8 py-3.5 text-base font-medium"
                  onClick={openModal}
                >
                  Start the conversation
                </button>

                <p className="mt-6 border-t border-white/10 pt-5 text-[14px] leading-relaxed text-white/55">
                  Shorter summaries of every engagement live on the portfolio.
                  Client-approved figures only.
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPrinciples;
