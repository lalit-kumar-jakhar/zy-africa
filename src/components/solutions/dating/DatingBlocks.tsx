"use client";

import ResponsiveImage from "@/components/common/ResponsiveImage";
import { useModal } from "@/context/ModalContext";
import {
  datingIncluded,
  datingIntelligent,
  datingPortfolio,
  datingServices,
  datingSolutions,
  datingWhy,
} from "@/data/dating-page";
import { useState } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaChevronRight,
  FaComments,
  FaHeart,
  FaHeadset,
  FaLayerGroup,
  FaMagic,
  FaServer,
  FaShieldAlt,
  FaSlidersH,
  FaUserFriends,
} from "react-icons/fa";

const pad = (n: number) => String(n).padStart(2, "0");

const serviceStyles = [
  { card: "bg-[#fff1f5]", chip: "bg-white text-[#ff3b7a]", Icon: FaHeart },
  { card: "bg-[#f3f6ff]", chip: "bg-white text-[#5b6cff]", Icon: FaSlidersH },
  { card: "bg-[#f6f3ff]", chip: "bg-white text-[#7a4dff]", Icon: FaMagic },
  { card: "bg-[#fff6f1]", chip: "bg-white text-[#ff732d]", Icon: FaComments },
  { card: "bg-[#eefbf4]", chip: "bg-white text-[#1aa36a]", Icon: FaServer },
  { card: "bg-[#fff1f8]", chip: "bg-white text-[#e23b8a]", Icon: FaShieldAlt },
];

export const DatingServices = () => {
  const { openModal } = useModal();

  return (
    <section className="bg-[#fff8fa] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <FaHeart className="mx-auto text-3xl text-[#ff3b7a]" aria-hidden />
          <h2 className="mt-3 text-[30px] font-bold leading-tight text-[#15162b] md:text-[40px]">
            Key Services Offered By Our Top{" "}
            <span className="text-[#ff3b7a]">Dating App Development Company</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4b5563]">{datingServices.description}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {datingServices.features.map((feature, index) => {
            const style = serviceStyles[index];
            const Icon = style.Icon;
            return (
              <article key={feature.title} className={`flex h-full flex-col rounded-[28px] p-6 md:p-7 ${style.card}`}>
                <div className="flex items-start gap-4">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl shadow-sm ${style.chip}`}>
                    <Icon aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold tracking-[0.14em] text-[#ff3b7a]">{pad(index + 1)}</p>
                    <h3 className="mt-1 text-xl font-bold leading-snug text-[#15162b]">{feature.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-[#4b5563]">{feature.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {feature.points.map((point) => (
                    <li
                      key={point}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-[#15162b]"
                    >
                      <FaCheck className="shrink-0 text-xs text-[#ff3b7a]" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <button type="button" className="gradient-bg-btn rounded-full" onClick={openModal}>
            {datingServices.ctaText}
          </button>
        </div>
      </div>
    </section>
  );
};

const whyStyles = [
  { wrap: "bg-[#fff1f5]", icon: "bg-[#ffe0ea] text-[#ff3b7a]", Icon: FaUserFriends },
  { wrap: "bg-[#f3f7ff]", icon: "bg-[#e3edff] text-[#3b6bff]", Icon: FaSlidersH },
  { wrap: "bg-[#f1fbf6]", icon: "bg-[#daf6e8] text-[#1aa36a]", Icon: FaCheck },
  { wrap: "bg-[#fff8ee]", icon: "bg-[#ffefd4] text-[#e39b12]", Icon: FaShieldAlt },
  { wrap: "bg-[#f6f3ff]", icon: "bg-[#ebe4ff] text-[#7a4dff]", Icon: FaLayerGroup },
  { wrap: "bg-[#fff1f8]", icon: "bg-[#ffe0f0] text-[#e23b8a]", Icon: FaHeadset },
];

const solutionRows = [
  { wrap: "bg-[#fff1f5]", icon: "text-[#ff4d88]", Icon: FaHeart },
  { wrap: "bg-[#f3f6ff]", icon: "text-[#5b6cff]", Icon: FaComments },
  { wrap: "bg-[#eefbf4]", icon: "text-[#1aa36a]", Icon: FaUserFriends },
  { wrap: "bg-[#fff8ee]", icon: "text-[#e39b12]", Icon: FaMagic },
  { wrap: "bg-[#fff1f8]", icon: "text-[#e23b8a]", Icon: FaHeart },
  { wrap: "bg-[#f6f3ff]", icon: "text-[#7a4dff]", Icon: FaSlidersH },
];

export const DatingIncluded = () => {
  const [activeId, setActiveId] = useState(datingIncluded.panels[0].id);
  const active = datingIncluded.panels.find((panel) => panel.id === activeId) ?? datingIncluded.panels[0];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.16em] text-[#ff3b7a] uppercase">
            What We Have to Offer
          </p>
          <h2 className="mt-3 text-[30px] font-bold leading-tight text-[#15162b] md:text-[40px]">
            {datingIncluded.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4b5563]">{datingIncluded.description}</p>
        </div>
        <div
          className="mx-auto mt-8 grid w-full max-w-4xl grid-cols-1 gap-2 rounded-3xl bg-[#fff1f5] p-2 sm:grid-cols-3 sm:rounded-full"
          role="tablist"
          aria-label={datingIncluded.title}
        >
          {datingIncluded.panels.map((panel) => {
            const selected = panel.id === active.id;
            return (
              <button
                key={panel.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveId(panel.id)}
                className={`flex min-h-12 items-center justify-center rounded-full px-3 py-2.5 text-center text-sm leading-snug font-semibold transition-colors ${selected
                    ? "bg-[linear-gradient(100deg,#ff732d_0%,#ff2a55_46%,#9900ff_100%)] text-white shadow-sm"
                    : "text-[#15162b] hover:bg-white"
                  }`}
              >
                {panel.label}
              </button>
            );
          })}
        </div>
        <div className="mx-auto mt-8 max-w-5xl rounded-[28px] border border-[#ffe1ea] bg-[#fffafb] p-6 md:p-8">
          <h3 className="text-2xl font-bold text-[#15162b] md:text-3xl">{active.label}</h3>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#4b5563] md:text-lg">
            {active.description}
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {active.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 rounded-2xl border border-[#ffe1ea] bg-white px-3 py-2.5 text-sm font-medium text-[#15162b]"
              >
                <FaHeart className="shrink-0 text-xs text-[#ff3b7a]" aria-hidden />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export const DatingPortfolio = () => (
  <section className="bg-[#fff8fa] py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-center text-[30px] font-bold text-[#15162b] md:text-[40px]">
        {datingPortfolio.title}
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {datingPortfolio.images.map((image, index) => (
          <article
            key={`${image}-${index}`}
            className="overflow-hidden rounded-3xl border border-[#ffe1ea] bg-white shadow-[0_10px_30px_rgb(255_59_122/0.06)]"
          >
            <div className="relative aspect-[16/10] bg-[#1a1020]">
              <ResponsiveImage
                src={image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export const DatingIntelligent = () => {
  const { openModal } = useModal();
  const [active, setActive] = useState(0);
  const feature = datingIntelligent.features[active];
  const total = datingIntelligent.features.length;

  return (
    <section className="relative overflow-hidden bg-[#fff8fa] py-16 md:py-24">
      <FaHeart
        className="pointer-events-none absolute top-16 right-[8%] text-5xl text-[#ffd0e0]"
        aria-hidden
      />
      <FaHeart
        className="pointer-events-none absolute bottom-20 left-[6%] text-3xl text-[#ffd9c8]"
        aria-hidden
      />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.16em] text-[#ff3b7a] uppercase">Features</p>
          <h2 className="mt-3 text-[30px] font-bold leading-tight text-[#15162b] md:text-[40px]">
            Intelligent Features of Our <span className="text-[#ff3b7a]">Dating App</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4b5563]">{datingIntelligent.description}</p>
        </div>

        <div
          className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          role="tablist"
          aria-label={datingIntelligent.title}
        >
          {datingIntelligent.features.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(index)}
                className={`flex items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-colors ${selected
                    ? "border-[#ff3b7a] bg-white shadow-[0_12px_30px_rgb(255_59_122/0.12)]"
                    : "border-transparent bg-white/70 hover:bg-white"
                  }`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold ${selected ? "bg-[#ff3b7a] text-white" : "bg-[#fff1f5] text-[#ff3b7a]"
                    }`}
                >
                  {pad(index + 1)}
                </span>
                <span className="font-semibold text-[#15162b]">{item.title}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-5 overflow-hidden rounded-[32px] bg-[#16121c] text-white shadow-[0_24px_50px_rgb(22_18_28/0.18)]">
          <div className="grid items-center gap-6 p-6 sm:p-8 md:grid-cols-[auto_1fr] md:gap-10 md:p-12">
            <p className="text-6xl leading-none font-black tracking-tight text-[#ff3b7a] md:text-8xl">
              {pad(active + 1)}
            </p>
            <div>
              <p className="text-sm font-bold tracking-[0.16em] text-[#ff8aaf]">
                {pad(active + 1)} / {pad(total)}
              </p>
              <h3 className="mt-3 text-2xl font-bold md:text-3xl">{feature.title}</h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                {feature.description}
              </p>
              <button type="button" className="gradient-bg-btn mt-6 rounded-full" onClick={openModal}>
                {datingIntelligent.ctaText}
                <FaArrowRight className="ml-2 inline" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const DatingSolutions = () => (
  <section className="overflow-hidden bg-[#fffaf7] py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-[#fff1f5] px-4 py-1.5 text-sm font-semibold text-[#ff3b7a]">
            <FaHeart className="text-xs" aria-hidden />
            Our Dating App Solutions
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.15] text-[#15162b] md:text-[40px]">
            Dating App Solutions Built for{" "}
            <span className="text-[#ff3b7a]">Every Kind of Connection</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4b5563] md:text-lg">
            {datingSolutions.description}
          </p>
          <ul className="mt-6 space-y-3">
            {datingSolutions.items.map((item, index) => {
              const row = solutionRows[index];
              const Icon = row.Icon;
              return (
                <li
                  key={item.title}
                  className={`flex items-center gap-3 rounded-2xl px-3 py-3 sm:gap-4 sm:px-4 ${row.wrap}`}
                >
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-lg shadow-sm ${row.icon}`}>
                    <Icon aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold text-[#15162b]">{item.title}</span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-[#4b5563]">
                      {item.description}
                    </span>
                  </span>
                  <FaChevronRight className="hidden shrink-0 text-sm text-[#15162b]/35 sm:block" aria-hidden />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="pointer-events-none absolute -top-8 right-6 h-40 w-40 rounded-full bg-[#ffd9c8]/80" />
          <div className="pointer-events-none absolute bottom-10 -left-6 h-28 w-28 rounded-full bg-[#ffd0e2]/70" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] bg-[#120c16] shadow-[0_24px_60px_rgb(40_10_30/0.18)] sm:aspect-[5/6]">
            <ResponsiveImage
              src={datingSolutions.image}
              alt=""
              fill
              className="object-cover object-[78%_center]"
              sizes="(max-width: 1024px) 90vw, 520px"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const DatingWhy = () => (
  <section className="relative overflow-hidden bg-[#fff8fa] py-16 md:py-24">
    <div className="pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-[#ffe4ee]" />
    <div className="pointer-events-none absolute bottom-0 -left-16 h-48 w-48 rounded-full bg-[#ffe8df]" />
    <div className="container relative mx-auto px-4">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#ff3b7a] shadow-sm">
            <FaHeart aria-hidden />
            Why Choose Us
          </p>
          <h2 className="mt-5 text-[30px] font-bold leading-[1.15] text-[#15162b] md:text-[40px]">
            Why Choose Zyneto For{" "}
            <span className="text-[#ff3b7a]">Custom Dating App Development?</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4b5563]">{datingWhy.description}</p>
        </div>
        <ol className="relative space-y-3">
          <span className="absolute top-6 bottom-6 left-6 w-px bg-[#ffd0e0]" aria-hidden />
          {datingWhy.features.map((title, index) => {
            const style = whyStyles[index];
            const Icon = style.Icon;
            return (
              <li key={title} className="relative flex items-center gap-4 rounded-2xl bg-white px-3 py-3 shadow-[0_8px_24px_rgb(255_59_122/0.06)] sm:px-4 sm:py-4">
                <span className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg ${style.icon}`}>
                  <Icon aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-bold tracking-[0.14em] text-[#ff8aaf]">{pad(index + 1)}</span>
                  <h3 className="text-lg font-bold text-[#15162b]">{title}</h3>
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  </section>
);
