"use client";
import Image from "next/image";
import { partnerBrands } from "@/data/trust-marks";

const shieldCheckIcon = "/static/assets/home/partnerLogos/shield.svg";

const Partnerships = () => {
  const rows = [
    partnerBrands.slice(0, 5),
    partnerBrands.slice(5, 10),
    partnerBrands.slice(10, 15),
    partnerBrands.slice(15, 20),
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-17.5 md:py-27.5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-12 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-200/35 blur-3xl"
      />
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center gap-10 xl:flex-row xl:justify-between xl:gap-12">
          <div className="mx-auto max-w-105 text-center xl:mx-0 xl:text-left">
            <div className="mb-6 flex justify-center xl:justify-start">
              <Image
                src={shieldCheckIcon}
                alt=""
                width={64}
                height={64}
                aria-hidden
                className="drop-shadow-sm"
              />
            </div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-800">
              Our trusted network
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-4xl">
              Trusted by global
              <span className="block bg-gradient-to-r from-[#ff732d] via-[#ff0044] to-[#9900ff] bg-clip-text text-transparent">
                industry leaders
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-base leading-7 text-slate-600 xl:mx-0">
              Building stronger connections with organizations shaping the
              future of their industries.
            </p>
          </div>
          <div className="hidden flex-col justify-start gap-4 xl:flex">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`flex shrink-0 flex-wrap justify-center gap-4 xl:flex-nowrap xl:justify-start ${
                  rowIndex === 0 || rowIndex === 2 ? "xl:-ml-10" : ""
                }`}
              >
                {row.map((brand, i) => (
                  <div
                    key={i}
                    className="group flex h-18 w-27.5 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-white/95 p-1 shadow-[0_8px_24px_rgba(30,64,175,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_14px_32px_rgba(30,64,175,0.12)] sm:w-40"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={brand.src}
                        alt={brand.alt}
                        fill
                        className="object-contain"
                        draggable={false}
                        loading="lazy"
                        sizes="(max-width: 640px) 100px, (max-width: 1024px) 120px, 160px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="grid w-full grid-cols-2 gap-3 min-[360px]:grid-cols-3 sm:gap-4 xl:hidden">
            {partnerBrands.map((brand, i) => (
              <div
                key={i}
                className="mx-auto flex h-12.5 w-full max-w-40 items-center justify-center rounded-xl border border-blue-100 bg-white/95 p-2 shadow-[0_6px_18px_rgba(30,64,175,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-[0_10px_24px_rgba(30,64,175,0.1)] min-[420px]:h-18 sm:rounded-2xl"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    fill
                    className="object-contain"
                    draggable={false}
                    loading="lazy"
                    sizes="(max-width: 640px) 100px, (max-width: 1024px) 120px, 160px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
