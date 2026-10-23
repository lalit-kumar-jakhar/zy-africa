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
    <section className="bg-white py-[70px] md:py-[110px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-20 xl:justify-between items-center">
          <div className="max-w-[420px] mx-auto lg:mx-0 text-center xl:text-left">
            <div className="mb-6 flex justify-center xl:justify-start">
              <Image
                src={shieldCheckIcon}
                alt=""
                width={64}
                height={64}
                aria-hidden
              />
            </div>
            <h2 className="text-3xl md:text-4xl leading-tight font-bold text-black">
              Trusted by
              <br />
              Global Industry Leaders
            </h2>
          </div>
          <div className="hidden xl:flex flex-col gap-4 justify-start">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`flex gap-4 flex-wrap xl:flex-nowrap shrink-0 justify-center xl:justify-start ${rowIndex === 0 || rowIndex === 2 ? "xl:-ml-14" : ""
                  }`}
              >
                {row.map((brand, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl sm:w-[160px] w-[110px] h-[72px] shrink-0
                     flex items-center justify-center
                     shadow-[0_8px_24px_rgba(0,0,0,0.06)]
                     border border-gray-100
                     hover:shadow-[0_12px_28px_rgba(0,0,0,0.1)]
                     transition-all duration-300 p-1"
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
          <div className="grid w-full grid-cols-2 min-[360px]:grid-cols-3 md:grid-cols-4 xl:hidden gap-2 sm:gap-4">
            {partnerBrands.map((brand, i) => (
              <div
                key={i}
                className="lg:bg-white rounded-2xl w-full max-w-[160px] mx-auto h-[50px] min-[420px]:h-[72px]
               flex items-center justify-center
               lg:shadow-[0_8px_24px_rgba(0,0,0,0.06)]
               lg:border lg:border-gray-100
               lg:hover:shadow-[0_12px_28px_rgba(0,0,0,0.1)]
               transition-all duration-300 p-1"
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
