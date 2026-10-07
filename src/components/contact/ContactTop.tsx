"use client";
import Image from "next/image";
import TopFormContact from "./TopFormContact";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { COMPANY_CONTACT } from "@/data/companyDetails";
import { CONTACT_PARTNER_LOGOS } from "@/data/contactPartnerLogos";
import Reveal from "@/components/common/Reveal";

const heroBgImage = "/static/assets/contact/contact-bg.webp";
const phoneIcon = "/static/assets/contact/phone-icon.svg";
const emailIcon = "/static/assets/contact/email-icon.svg";
const addressIcon = "/static/assets/contact/address-icon.svg";
const ContactTop = () => {
  const baseDelay = 100;
  return (
    <div
      className="relative overflow-hidden bg-[#000000] pt-(--nav-height) bg-no-repeat bg-cover bg-fixed bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBgImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 relative z-10 md:pb-0 pb-10">
        <div className="flex flex-col md:flex-row h-full md:min-h-150 overflow-hidden">
          <div className="w-full md:w-1/2 text-white p-8 flex flex-col justify-start">
            <div>
              <h1 className="text-3xl md:text-[40px] font-semibold mb-4">
                Let&apos;s Turn Your Vision into Reality
              </h1>
              <Reveal delay={baseDelay * 1} duration={500} direction="up">
                <p className="text-lg md:text-xl font-normal text-white max-w-3xl mx-auto mb-10">
                  We don&apos;t just build products-we craft digital experiences
                  that solve real problems. Our team blends creativity,
                  technology, and strategy to turn your ideas into powerful,
                  scalable solutions.
                </p>
              </Reveal>
              <div className="rounded-2xl bg-white/5 backdrop-blur-xl p-6 text-white">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                  <div>
                    <h3 className="font-semibold text-white mb-3">
                      Our Experts Provide Free:
                    </h3>
                    <ul className="space-y-2 text-md text-white">
                      <li className="flex gap-2">
                        <span className="text-[#FF0044]">✓</span>
                        Detailed Project Roadmap
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#FF0044]">✓</span>
                        Preliminary Cost Estimate
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#FF0044]">✓</span>
                        Timeline Breakdown
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#FF0044]">✓</span>
                        Risk Assessment Overview
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-3">
                      Have a Question? Let&apos;s Talk!
                    </h3>
                    <div className="space-y-3 text-md text-white/80">
                      <div className="flex items-center gap-3">
                        <Image
                          src={phoneIcon}
                          alt=""
                          width={24}
                          height={24}
                          aria-hidden
                        />
                        <Link
                          href={COMPANY_CONTACT.phoneHref}
                          className="hover:text-[#FF0044] transition-colors text-white!"
                        >
                          {COMPANY_CONTACT.phone}
                        </Link>
                      </div>
                      <div className="flex items-center gap-3">
                        <Image
                          src={emailIcon}
                          alt=""
                          width={24}
                          height={24}
                          aria-hidden
                        />
                        <Link
                          href={COMPANY_CONTACT.emailHref}
                          className="hover:text-[#FF0044] transition-colors text-white!"
                        >
                          {COMPANY_CONTACT.email}
                        </Link>
                      </div>
                      <div className="flex items-start gap-3 text-white!">
                        <Image
                          src={addressIcon}
                          alt=""
                          width={24}
                          height={24}
                          aria-hidden
                        />
                        <div className="leading-snug">
                          {COMPANY_CONTACT.addressLines}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="z-10 relative">
                <h4 className="text-center text-sm font-semibold text-white! mb-3">
                  We are Trusted by
                </h4>
                <div className="flex items-center justify-center gap-6 bg-white backdrop-blur-xl p-4 rounded-2xl border border-white/10">
                  <Marquee>
                    {CONTACT_PARTNER_LOGOS.map(({ src, alt }) => (
                      <Image
                        key={src}
                        src={src}
                        alt={alt}
                        width={100}
                        height={100}
                        className="object-contain"
                        draggable={false}
                      />
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
                <p className="text-lg mt-4 text-[#ffffff] text-center">
                  ⭐ Rated 4.9 by 270+ Happy Customers. 10+ Years of
                  Industry-experience.
                </p>
          </div>{" "}
          <TopFormContact isUsedInContactTop={true} />
        </div>
      </div>
    </div>
  );
};

export default ContactTop;
