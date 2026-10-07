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

const companyLinks: LinkItem[] = [
  { label: "Home", url: "/" },
  { label: "Services", url: "/services" },
  { label: "Solutions", url: "/solutions" },
  { label: "About Us", url: "/about-us" },
  { label: "Case Studies", url: "/case-studies" },
  { label: "Contact Us", url: "/contact-us" },
];

const mobileLinks: LinkItem[] = [
  { label: "Mobile App Development", url: "/services/mobile-app-development" },
  {
    label: "Android App Development",
    url: "/services/android-app-development",
  },
  { label: "iOS App Development", url: "/services/ios-app-development" },
  {
    label: "Flutter App Development",
    url: "/services/flutter-app-development",
  },
  {
    label: "React Native App Development",
    url: "/services/react-native-app-development",
  },
];

const webServicesLinks: LinkItem[] = [
  { label: "Web Development", url: "/services/web-development" },
  { label: "React.js Development", url: "/services/reactjs-development" },
  { label: "Next.js Development", url: "/services/nextjs-development" },
  { label: "Angular Development", url: "/services/angular-development" },
  { label: "Node.js Development", url: "/services/nodejs-development" },
  {
    label: "POS Software Development",
    url: "/services/pos-software-development",
  },
];

const backendDataLinks: LinkItem[] = [
  { label: "Python Development", url: "/services/python-development" },
  { label: "Django Development", url: "/services/django-development" },
  { label: "Flask Development", url: "/services/flask-development" },
  {
    label: "FastAPI Development",
    url: "/services/fastapi-development-company",
  },
  { label: "Database Development", url: "/services/database-development" },
  {
    label: "Web Scraping & Data Extraction Services",
    url: "/services/web-scraping-data-extraction-services",
  },
];

const aiDevelopmentLinks: LinkItem[] = [
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
    label: "AI Copilot Development",
    url: "/services/ai-copilot-development-company",
  },
];

const aiSolutionsLinks: LinkItem[] = [
  {
    label: "AI Workflow Automation",
    url: "/services/ai-workflow-automation-services",
  },
  {
    label: "Multimodal AI Development",
    url: "/services/multimodal-ai-development-company",
  },
  {
    label: "AI-powered Document Management",
    url: "/services/ai-document-management-system",
  },
  {
    label: "Predictive Analytics Development",
    url: "/services/predictive-analytics-development",
  },
  {
    label: "Chat With Documents Solution",
    url: "/services/chat-with-documents-solution",
  },
];

const otherServicesLinks: LinkItem[] = [
  { label: "Blockchain Development", url: "/services/blockchain-development" },
  {
    label: "Smart Contract Development",
    url: "/services/smart-contract-development-services",
  },
  { label: "IoT App Development", url: "/services/iot-app-development" },
  { label: "CI/CD Consulting", url: "/services/ci-cd-consulting" },
  { label: "UI/UX Design", url: "/services/ui-ux-design" },
  { label: "NLP Development", url: "/services/nlp-development" },
];

const industrySolutionsLinks: LinkItem[] = [
  {
    label: "Ecommerce App Development",
    url: "/solutions/ecommerce-app-development",
  },
  {
    label: "Restaurant App Development",
    url: "/solutions/restaurant-app-development-company",
  },
  {
    label: "Dating App Development",
    url: "/solutions/dating-app-development-company",
  },
  {
    label: "Fantasy Sports App Development",
    url: "/solutions/fantasy-sports-app-development-company",
  },
  {
    label: "Classified App Development",
    url: "/solutions/classified-app-development",
  },
  {
    label: "Music Streaming App Development",
    url: "/solutions/music-streaming-app-development-company",
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

const shippedLinks = (links: LinkItem[]) =>
  links.filter((link) => isShippedHref(link.url));

const Footer: React.FC = () => {
  const email = COMPANY_CONTACT.email;
  const footerColumns = [
    { title: "Company", links: companyLinks },
    { title: "AI Development", links: shippedLinks(aiDevelopmentLinks) },
    { title: "AI Solutions", links: shippedLinks(aiSolutionsLinks) },
    { title: "Mobile Development", links: shippedLinks(mobileLinks) },
    { title: "Web Development", links: shippedLinks(webServicesLinks) },
    { title: "Backend & Data", links: shippedLinks(backendDataLinks) },
    { title: "Industry Solutions", links: shippedLinks(industrySolutionsLinks) },
    { title: "Emerging Tech", links: shippedLinks(otherServicesLinks) },
  ].filter((column) => column.links.length > 0);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerColumns.map((column) => (
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
