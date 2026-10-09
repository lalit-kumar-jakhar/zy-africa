"use client";
import React, { useLayoutEffect, useMemo, useRef } from "react";
import StarIcon from "@/components/common/StarIcon";
import { usePathname } from "next/navigation";
import Image from "next/image";
const clutch = "/static/assets/home/about/clutch.svg";
const topWebDev = "/static/assets/home/about/topWebDev.svg";
const webDevCompany = "/static/assets/home/about/webDevCompany.svg";
const upwork = "/static/assets/home/about/upwork.svg";
const googleCloud = "/static/assets/home/about/google.webp";
const techBehmoth = "/static/assets/home/about/techBehmoth.svg";


const statistics = [
  { value: 95, prefix: "%", label: "Client Retention Rate" },
  { value: 500, prefix: "+", label: "Projects Delivered" },
  { value: 35, prefix: "+", label: "Countries Served" },
  { value: 100, prefix: "+", label: "Enterprise & SMB Clients" },
  { value: 50, prefix: "+", label: "Tech Experts" },
];

const awards = [
  { src: clutch, alt: "Clutch Award" },
  { src: topWebDev, alt: "Top Web Developer" },
  { src: webDevCompany, alt: "Web Dev Award" },
  { src: upwork, alt: "Upwork Award" },
  { src: googleCloud, alt: "Google Cloud Partner" },
  { src: techBehmoth, alt: "Tech Behmoth Award" },
];

const PortfolioTop: React.FC = () => {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const statRefs = useMemo(
    () => statistics.map(() => React.createRef<HTMLSpanElement>()),
    []
  );

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            import("gsap")
              .then((gsap) => {
                statRefs.forEach((ref, index) => {
                  if (ref.current) {
                    // `to`, not `fromTo`: animates from the SSR-rendered value
                    // so the counter never flashes to zero.
                    gsap.default.to(ref.current, {
                      innerText: statistics[index].value,
                      duration: 2,
                      snap: { innerText: 1 },
                      ease: "power2.out",
                      delay: index * 0.2,
                    });
                  }
                });
              })
              .catch(() => {
                statRefs.forEach((ref, index) => {
                  if (ref.current) {
                    ref.current.innerText = statistics[index].value.toString();
                  }
                });
              });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    // Covers a refresh where the section is already in view.
    const checkIntersection = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          import("gsap")
            .then((gsap) => {
              statRefs.forEach((ref, index) => {
                if (ref.current) {
                  gsap.default.to(ref.current, {
                    innerText: statistics[index].value,
                    duration: 2,
                    snap: { innerText: 1 },
                    ease: "power2.out",
                    delay: index * 0.2,
                  });
                }
              });
            })
            .catch(() => {
              statRefs.forEach((ref, index) => {
                if (ref.current) {
                  ref.current.innerText = statistics[index].value.toString();
                }
              });
            });
          observer.disconnect();
        }
      }
    };

    checkIntersection();
    const timeoutId = setTimeout(checkIntersection, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [pathname, statRefs]);

  return (
    <section
      ref={containerRef}
      className="hero-bg-portfolio relative bg-[#000000] overflow-hidden min-h-screen flex items-center md:py-[120px] py-[64px] bg-cover bg-center bg-no-repeat"
      id="hero-section"
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      <div className="container mx-auto relative z-10 px-4 py-12 md:py-20 pt-(--nav-height)">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <StarIcon color="#ffffff" size={48} />
          </div>
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl font-normal text-white max-w-4xl mx-auto mb-4">
              Our success stories define our expertise in developing tech-driven
              business solutions for startups and global brands.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mx-auto max-w-7xl">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-orange-gradient mb-2 text-center">
                  <span ref={statRefs[index]}>{stat.value}</span>
                  {stat.prefix && <span>{stat.prefix}</span>}
                </div>
                <div className="text-xs md:text-sm text-gray-300 tracking-wide text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 flex-wrap mt-10">
            {awards.map((item, i) => (
              <div key={i} className="w-[100px] h-[100px]">
                {item.src && item.src !== "undefined" && (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={160}
                    height={160}
                    className="object-contain w-full h-full"
                    draggable={false}
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTop;
