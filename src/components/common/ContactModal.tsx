"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
const phoneIcon = "/static/assets/contact/phone-icon.svg";
const emailIcon = "/static/assets/contact/email-icon.svg";
const addressIcon = "/static/assets/contact/address-icon.svg";
const cardBackgroundImage = "/static/assets/contact/modal-bg.webp";

import TopFormContact from "../contact/TopFormContact";
import Link from "next/link";
import Modal from "./Modal";
import { reviews } from "@/data/testimonials";
import { COMPANY_CONTACT } from "@/data/companyDetails";
import { CONTACT_PARTNER_LOGOS } from "@/data/contactPartnerLogos";
import Marquee from "react-fast-marquee";
import { MdVerified } from "react-icons/md";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StarRating: React.FC<{ rating?: number }> = ({ rating = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      <span className="sr-only">Rating: {rating} out of 5</span>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const ContactModalFormat = ({ onClose }: { onClose: () => void }) => {
  const testimonialItems = useMemo(
    () =>
      reviews.filter((r) => !r.notForModal).map((r) => ({
        name: r.author,
        publisher: r.publisher,
        image: r.image,
        rating: r.ratingValue,
        quote: r.reviewBody,
        position: r.position,
        company: r.company,
        notForModal: r.notForModal,
      })),
    [],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonialItems[activeIndex] ?? testimonialItems[0];

  const prev = () =>
    setActiveIndex(
      (i) => (i - 1 + testimonialItems.length) % testimonialItems.length,
    );
  const next = () => setActiveIndex((i) => (i + 1) % testimonialItems.length);

  return (
    <>
      <div className="flex min-h-0 flex-col md:flex-row">
        <div className="md:w-1/2 hidden md:flex flex-col relative justify-between p-6 md:p-8 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none overflow-hidden bg-black">
          <Image
            src={cardBackgroundImage}
            alt=""
            fill
            aria-hidden
            className="object-cover absolute inset-0 brightness-40 contrast-125"
            draggable={false}
            priority
            fetchPriority="high"
          />
          <div className="space-y-6 z-10 relative">
            <div className="relative rounded-2xl  bg-white/5 backdrop-blur-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="h-9 w-9 rounded-full border border-white/10 bg-white/10 hover:bg-white/15 transition-colors grid place-items-center text-white"
                >
                  <span className="sr-only">Previous</span>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M12.5 15l-5-5 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="flex flex-col items-center text-center px-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden ring-1 ring-white shadow-sm">
                    {active?.image ? (
                      <Image
                        src={active.image}
                        alt={`${active.name} profile`}
                        fill
                        className="object-cover"
                        draggable={false}
                      />
                    ) : null}
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-white max-w-[420px] xl:max-w-[600px] line-clamp-4">
                    {active?.quote}
                  </p>
                  <p className="mt-3 font-semibold text-white">
                    {active?.name}
                  </p>
                  {(active?.position || active?.company) && (
                    <p className="text-xs text-white/70">
                      {[active?.position, active?.company]
                        .filter(Boolean)
                        .join(", ")}
                    </p>
                  )}
                  <div className="mt-2 flex items-center gap-3">
                    <div className="text-xs font-medium text-white/80">
                      {active?.publisher}
                    </div>
                    <div className="h-4 w-px bg-white/20" />
                    <StarRating rating={active?.rating ?? 5} />
                    <div className="inline-flex items-center gap-2 text-xs text-white/80">
                      <MdVerified className="text-white text-lg" />
                      Verified Review
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="h-9 w-9 rounded-full border border-white/10 bg-white/10 hover:bg-white/15 transition-colors grid place-items-center text-white"
                >
                  <span className="sr-only">Next</span>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M7.5 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl p-6 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-white mb-3">
                    Our Experts Provide Free:
                  </h3>
                  <ul className="space-y-2 text-sm text-white">
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
                    <li className="flex gap-2">
                      <span className="text-[#FF0044]">✓</span>
                      Step-by-Step Guidance
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-3">
                    Have a Question? Let&apos;s Talk!
                  </h3>
                  <div className="space-y-3 text-sm text-white/80">
                    <div className="flex items-center gap-3">
                      <Image
                        src={phoneIcon}
                        alt=""
                        width={18}
                        height={18}
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
                        width={18}
                        height={18}
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
                        width={18}
                        height={18}
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
          <div className="pt-6 z-10 relative">
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
        <TopFormContact isUsedInModal onClose={onClose} formName="contact_modal" />
      </div>
    </>
  );
};

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      ariaLabel="Contact Zyneto"
      className="lg:max-w-7xl"
    >
      <ContactModalFormat onClose={onClose} />
    </Modal>
  );
};

export default ContactModal;
