"use client";

import { FaCheckCircle } from "react-icons/fa";
import StarIcon from "@/components/common/StarIcon";
import Reveal from "@/components/common/Reveal";
import { useModal } from "@/context/ModalContext";

const bgPattern = "/static/assets/home/star-circles-bg.svg";

type IndustryEndCtaProps = {
  cta: {
    title: string;
    description: string;
    ctaText: string;
    assurances?: string[];
  };
};

const IndustryEndCta = ({ cta }: IndustryEndCtaProps) => {
  const { openModal } = useModal();

  return (
    <Reveal delay={120}>
      <div className="relative h-full overflow-hidden rounded-2xl bg-[#161616]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${bgPattern})` }}
        />
        <div className="relative flex h-full flex-col p-6 md:p-7 lg:p-8">
          <StarIcon color="#ffffff" size={36} />
          <h2 className="mt-4 text-[22px] font-bold leading-snug text-white md:text-[26px] lg:text-[32px]">
            {cta.title}
          </h2>
          <p className="mt-3 flex-1 text-[15px] leading-relaxed text-white/75 md:text-[16px]">
            {cta.description}
          </p>

          <div className="mt-8 space-y-5">
            <button
              type="button"
              className="gradient-bg-btn w-full rounded-full px-8 py-3.5 text-base font-medium"
              onClick={openModal}
            >
              {cta.ctaText}
            </button>
            {cta.assurances && cta.assurances.length > 0 && (
              <ul className="space-y-2.5 border-t border-white/10 pt-5">
                {cta.assurances.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[13px] text-white/55 md:text-[14px]"
                  >
                    <FaCheckCircle
                      aria-hidden
                      className="h-3.5 w-3.5 shrink-0 text-[#22C55E]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default IndustryEndCta;
