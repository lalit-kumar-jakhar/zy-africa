import Link from "next/link";
import IndustrySectionHead from "@/components/industries/IndustrySectionHead";
import Reveal from "@/components/common/Reveal";
import { accent, body, ink, label } from "@/components/industries/typography";
import { sectionPad } from "./constants";

type HubLinksSectionProps = {
  hubLinks: {
    title: string;
    groups: {
      group: string;
      links: { label: string; href: string; note: string }[];
    }[];
  };
};

const HubLinksSection = ({ hubLinks }: HubLinksSectionProps) => (
  <section className={`${sectionPad} bg-[#F7F7F9]`}>
    <div className="container mx-auto px-4">
      <Reveal>
        <IndustrySectionHead eyebrow="Explore further" title={hubLinks.title} />
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3 md:gap-7">
        {hubLinks.groups.map((g, i) => (
          <Reveal key={g.group} delay={i * 55}>
            <div className="h-full rounded-xl border border-[#E8E8ED] bg-white p-6 md:p-7">
              <h3 className={`mb-5 border-b border-[#F0F0F3] pb-4 ${label}`}>
                {g.group}
              </h3>
              <ul className="space-y-5">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`group inline-flex items-baseline gap-2 text-[16px] font-semibold transition-colors md:text-[17px] ${ink} hover:text-[#9900ff]`}
                    >
                      {l.label}
                      <span
                        aria-hidden
                        className={`inline-block opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 ${accent}`}
                      >
                        &rarr;
                      </span>
                    </Link>
                    <p className={`mt-1 text-[14px] leading-relaxed ${body}`}>
                      {l.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default HubLinksSection;
