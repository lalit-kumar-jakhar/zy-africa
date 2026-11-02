import Link from "next/link";
import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import Reveal from "@/components/common/Reveal";
import { body, ink, muted } from "@/components/industries/typography";
import { scrollMt, sectionPadLg } from "./constants";
import { industryGridClass } from "@/utils/industry-grid";

type OurWorkSectionProps = {
  ourWork: {
    title: string;
    description: string;
    items: {
      client: string;
      place: string;
      line: string;
      stack: string[];
      href?: string;
    }[];
  };
};

const OurWorkSection = ({ ourWork }: OurWorkSectionProps) => (
  <section id="our-work" className={`${sectionPadLg} ${scrollMt} bg-white`}>
    <div className="container mx-auto px-4">
      <Reveal>
        <IndustrySectionHead
          title={ourWork.title}
          description={ourWork.description}
        />
      </Reveal>
      <div
        className={`mt-8 grid grid-cols-1 gap-6 lg:mt-12 lg:gap-7 ${industryGridClass(
          ourWork.items.length,
          "lg"
        )}`}
      >
        {ourWork.items.map((p, i) => (
          <Reveal key={p.client} delay={i * 55} className="h-full">
            <article className="group flex h-full flex-col rounded-xl border border-[#E8E8ED] bg-[#FAFAFB] p-6 transition-colors duration-200 hover:border-[#161616] hover:bg-[#161616] md:p-7">
              <p
                className={`mb-1 text-[12px] font-semibold uppercase tracking-widest transition-colors duration-200 group-hover:text-white/50 ${muted}`}
              >
                {p.place}
              </p>
              <h3
                className={`mb-3 text-[20px] font-semibold transition-colors duration-200 group-hover:text-white md:text-[22px] ${ink}`}
              >
                {p.href ? (
                  <Link
                    href={p.href}
                    className="underline decoration-[#E5E7EB] decoration-2 underline-offset-4 transition-colors duration-200 hover:decoration-[#FF0044] group-hover:decoration-white/30"
                  >
                    {p.client}
                  </Link>
                ) : (
                  p.client
                )}
              </h3>
              <p
                className={`flex-1 text-[15px] leading-relaxed transition-colors duration-200 group-hover:text-white/75 md:text-[16px] ${body}`}
              >
                {p.line}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className={`rounded-md border border-[#E5E7EB] bg-white px-2.5 py-1 text-[12px] transition-colors duration-200 group-hover:border-white/20 group-hover:bg-transparent group-hover:text-white/70 ${body}`}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default OurWorkSection;
