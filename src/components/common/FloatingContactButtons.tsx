import React from "react";
import Link from "next/link";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEditCalendar } from "react-icons/md";

const WHATSAPP_NUMBER = "919509625345";
const WHATSAPP_MESSAGE =
  "Hi%20Zyneto%20team,%20I%27d%20like%20to%20discuss%20a%20project.";
const WHATSApp_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
const EMAIL = "sales@zyneto.com";
const CALENDLY_URL = "https://calendly.com/zyneto-sales/pre";

const FloatingContactButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 md:bottom-10 right-0 z-40 flex flex-col items-end gap-2 md:gap-3">
      <Link
        href={WHATSApp_URL}
        aria-label="Chat with us on WhatsApp"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="group flex items-center justify-end rounded-l-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-white px-2 h-10 md:h-12"
      >
        <div className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center">
          <FaWhatsapp className="size-5 md:size-6" />
        </div>
        <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-200 group-hover:max-w-[200px] group-hover:ml-2 group-hover:opacity-100">
          WhatsApp
        </span>
      </Link>
      <Link
        href={`mailto:${EMAIL}`}
        aria-label="Email us"
        className="group flex items-center justify-end rounded-l-full bg-[#EA4335] text-white shadow-lg hover:shadow-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#EA4335] focus-visible:ring-offset-white px-2 h-10 md:h-12"
      >
        <div className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center">
          <FaEnvelope className="size-5 md:size-6" />
        </div>
        <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-200 group-hover:max-w-[120px] group-hover:ml-2 group-hover:opacity-100">
          Email
        </span>
      </Link>
      <Link
        href={CALENDLY_URL}
        aria-label="Book a meeting on Calendly"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="group flex items-center justify-end rounded-l-full bg-[#0069FF] text-white shadow-lg hover:shadow-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black focus-visible:ring-offset-white px-2 h-10 md:h-12"
      >
        <div className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center">
          <MdOutlineEditCalendar className="size-5 md:size-6" />
        </div>
        <span className="ml-0 max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-200 group-hover:max-w-[240px] group-hover:ml-2 group-hover:opacity-100">
          Book a Meeting
        </span>
      </Link>
    </div>
  );
};

export default FloatingContactButtons;

