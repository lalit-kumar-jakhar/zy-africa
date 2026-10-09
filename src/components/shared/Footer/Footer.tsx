import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Script from "next/script";
import DMCABadge from "@/components/common/DMCABadge";
import { COMPANY_CONTACT } from "@/data/companyDetails";
import { isShippedHref } from "@/constants/shipped-routes";
const zynetoLogo = "/static/assets/zynetoLogoDark.svg";
const certificate1 = "/static/assets/footer/cert1.svg";
const certificate2 = "/static/assets/footer/cert2.svg";
const upworkCertificate = "/static/assets/footer/upwork.svg";
const techbehemothCertificate = "/static/assets/footer/tech-behemoths.svg";

type LinkItem = { label: string; url: string };
type SocialLink = { icon: React.ReactNode; url: string; label: string };

const footerColumns: { title: string; links: LinkItem[] }[] = [
  {
    title: "Company",
    links: [
      { label: "Home", url: "/" },
      { label: "Services", url: "/services" },
      { label: "Solutions", url: "/solutions" },
      { label: "About Us", url: "/about-us" },
      { label: "Case Studies", url: "/case-studies" },
      { label: "Contact Us", url: "/contact-us" },
    ],
  },
  {
    title: "AI Development",
    links: [
      {
        label: "Artificial Intelligence Development",
        url: "/services/artificial-intelligence",
      },
      {
        label: "Generative AI Development",
        url: "/services/generative-ai-development",
      },
      { label: "AI Agent Development", url: "/services/ai-agent-development" },
      {
        label: "AI Chatbot Development",
        url: "/services/ai-chatbot-development-company",
      },
      {
        label: "AI Workflow Automation",
        url: "/services/ai-workflow-automation-services",
      },
    ],
  },
  {
    title: "App Development",
    links: [
      { label: "Mobile App Development", url: "/services/mobile-app-development" },
      { label: "Web Development", url: "/services/web-development" },
      {
        label: "Dating App Development",
        url: "/solutions/dating-app-development-company",
      },
    ],
  },
  {
    title: "Emerging Tech",
    links: [
      { label: "Blockchain Development", url: "/services/blockchain-development" },
      { label: "IoT App Development", url: "/services/iot-app-development" },
    ],
  },
];

const socialLinks: SocialLink[] = [
  {
    icon: <FaLinkedinIn />,
    url: "https://in.linkedin.com/company/zyneto",
    label: "Linkedin",
  },
  {
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/techzyneto",
    label: "Facebook",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/techzyneto",
    label: "Instagram",
  },
  {
    icon: <FaXTwitter />,
    url: "https://x.com/zyneto",
    label: "Twitter",
  },
];

const Footer: React.FC = () => {
  const email = COMPANY_CONTACT.email;
  const columns = footerColumns
    .map((column) => ({
      ...column,
      links: column.links.filter((link) => isShippedHref(link.url)),
    }))
    .filter((column) => column.links.length > 0);

  return (
    <footer className="relative border-t border-black/10 bg-white text-[#161616] overflow-hidden">
      <div className="relative container mx-auto px-4 pt-12 lg:pt-20 pb-6 lg:pb-8 overflow-x-hidden">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="w-[120px] md:w-[180px] block">
              <Image
                src={zynetoLogo}
                alt="Zyneto"
                width={180}
                height={40}
                className="object-contain w-full h-auto"
                draggable={false}
                priority
              />
            </Link>
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-[#161616] leading-relaxed max-w-2xl">
                We build software that has to work in production, not just in a
                demo.
              </p>
              <p className="text-sm text-[#616161] max-w-xl">
                AI and machine learning systems, mobile apps, web platforms,
                and the interfaces that run on top of them.
              </p>
            </div>
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-[#161616] mb-4 uppercase tracking-wide">
                Trusted By Industry Leaders
              </h4>
              <div className="flex flex-wrap gap-6 justify-start">
                {[
                  {
                    src: certificate1,
                    alt: "Clutch",
                    url: "https://clutch.co/profile/zyneto-global-technologies",
                  },
                  {
                    src: certificate2,
                    alt: "Good Firms",
                    url: "https://www.goodfirms.co/company/zyneto",
                  },
                  {
                    src: upworkCertificate,
                    alt: "Upwork Badge",
                    url: "https://www.upwork.com/freelancers/~018f329bb7e95655e6",
                  },
                  {
                    src: techbehemothCertificate,
                    alt: "Tech Behemoth",
                    url: "https://techbehemoths.com/company/zyneto-global-technologies",
                  },
                ].map((cert, index) => (
                  <Link
                    key={index}
                    href={cert.url}
                    target="_blank"
                    className="group"
                    aria-label={cert.alt}
                    rel="noopener noreferrer nofollow"
                  >
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={80}
                      height={48}
                      className="h-9 w-auto rounded-md border border-black/10 bg-white object-contain px-1.5 py-1 shadow-sm transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-[#161616]">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <FaPhone
                  className="text-[#FF0044] mt-1 group-hover:scale-110 transition-transform shrink-0"
                  size={16}
                />
                <Link
                  href={COMPANY_CONTACT.phoneHref}
                  className="text-[#161616] hover:text-[#9900FF] transition-colors"
                  aria-label="Call +91-95096-25345"
                >
                  {COMPANY_CONTACT.phone}
                </Link>
              </div>
              <div className="flex items-start gap-3 group">
                <FaEnvelope
                  className="text-[#FF0044] mt-1 group-hover:scale-110 transition-transform shrink-0"
                  size={16}
                />
                <Link
                  href={COMPANY_CONTACT.emailHref}
                  className="text-[#161616] hover:text-[#9900FF] transition-colors"
                  aria-label={`Email ${email}`}
                >
                  {email}
                </Link>
              </div>
              <div className="flex items-start gap-3 group">
                <FaMapMarkerAlt
                  className="text-[#FF0044] mt-1 group-hover:scale-110 transition-transform shrink-0"
                  size={16}
                />
                <address className="not-italic text-[#161616] text-sm">
                  {COMPANY_CONTACT.addressLines[0]}
                </address>
              </div>
            </div>
            <div className="pt-4">
              <h5 className="text-sm font-semibold text-[#161616] mb-4 uppercase tracking-wide">
                Follow Us
              </h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label={social.label}
                    className="group relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[#F6F6F8] border border-black/10 hover:border-[#9900FF] transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-[#161616] group-hover:text-[#9900FF] transition-colors text-lg">
                      {social.icon}
                    </span>
                    <div className="absolute inset-0 rounded-xl bg-linear-to-r from-[#FF0044] via-[#FF732D] to-[#9900FF] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-10 mb-8">
          {columns.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
        <div className="border-t border-black/10 pt-6 lg:pt-8">
          <div className="flex justify-between items-center flex-col sm:flex-row gap-4">
            <p className="text-sm text-[#616161] sm:text-left text-center">
              © {new Date().getFullYear()} Zyneto Global Technologies. All
              rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <DMCABadge />

              <Link
                href="/privacy-policy"
                className="text-sm text-[#616161] hover:text-[#9900FF] transition-colors"
              >
                Privacy Policy
              </Link>

              <span className="hidden sm:inline text-sm text-[#616161]">|</span>

              <Link
                href="/terms-conditions"
                className="text-sm text-[#616161] hover:text-[#9900FF] transition-colors"
              >
                Terms & Conditions
              </Link>

            </div>
          </div>
        </div>
      </div>
      <Script
        id="dmca-badge-script"
        src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"
      />
    </footer>
  );
};

const FooterColumn: React.FC<{ title: string; links: LinkItem[] }> = ({
  title,
  links,
}) => (
  <div className="space-y-3">
    <h3 className="font-bold text-lg text-[#161616] relative whitespace-nowrap">
      {title}
      <div className="absolute -bottom-1 left-0 w-12 h-px bg-linear-to-br from-[#FF0044] via-[#FF732D] to-[#9900FF] rounded"></div>
    </h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.url}
            aria-label={link.label}
            className="text-sm text-[#3A3A3A] hover:text-[#9900FF] transition-colors duration-300 hover:translate-x-1 inline-block py-1"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
