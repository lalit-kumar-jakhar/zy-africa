"use client";
import { useModal } from "@/context/ModalContext";
import Image from "next/image";
import Link from "next/link";
import {
  FaShieldAlt,
  FaEye,
  FaLock,
  FaShareAlt,
  FaClock,
  FaFileAlt,
  FaGlobe,
  FaCog,
} from "react-icons/fa";
const privacyHeroImage = "/static/assets/privacy-terms/privacy.png";
const fagGridDotsBgImage = "/static/assets/home/faq/grid-dots.svg";

const PrivacyPolicy = () => {
  const { openModal } = useModal();

  const sections = [
    {
      id: "contact",
      title: "Contact Information",
      icon: FaGlobe,
      color: "blue",
      content: (
        <div className="space-y-4">
          <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 md:col-span-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                <div>
                  <span className="font-medium text-gray-700">Company:</span>
                  <p className="text-gray-900 font-semibold">
                    Zyneto Global Technologies Pvt Ltd
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-medium text-gray-700">Website:</span>
                <Link
                  href="/"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  zyneto.com
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-medium text-gray-700">Email:</span>
                <a
                  href="mailto:sales@zyneto.com"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  sales@zyneto.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-medium text-gray-700">Phone:</span>
                <a
                  href="tel:+919509625345"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  +91-95096-25345
                </a>
              </div>
              <div className="flex items-start space-x-3 md:col-span-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                <div>
                  <span className="font-medium text-gray-700">Address:</span>
                  <p className="text-gray-900 font-semibold">
                    A-95, Eden Garden, Sikar Road, Rajawas, Nangal Purohitan,
                    Jaipur, Jaipur, Rajasthan 302013, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "collection",
      title: "Information We Collect",
      icon: FaEye,
      color: "green",
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <FaFileAlt className="w-4 h-4 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Comments</h4>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you leave a comment, we collect the information in the
              comment form, your IP address, and browser details to help detect
              spam.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
              <p className="text-sm text-gray-700">
                We may send an anonymized email hash to{" "}
                <strong>Gravatar</strong> to display your profile picture.
                <a href="#" className="text-blue-600 hover:text-blue-700 ml-1">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                <FaCog className="w-4 h-4 text-yellow-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Media Uploads
              </h4>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                ⚠️ Uploaded images may contain location data (EXIF GPS) visible
                to others who download them.
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <FaGlobe className="w-4 h-4 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Contact Forms
              </h4>
            </div>
            <p className="text-gray-700">
              Information submitted through contact forms is used only to
              respond to your inquiries and handled securely.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                <FaCog className="w-4 h-4 text-indigo-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Cookies</h4>
            </div>
            <div className="space-y-3">
              {[
                "Comment cookies save your name, email, and website for 1 year",
                "Login page cookies check browser compatibility (temporary)",
                "Authentication cookies last 2 days to 2 weeks based on preferences",
                "Post editing cookies record activity for 1 day",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "sharing",
      title: "Data Sharing",
      icon: FaShareAlt,
      color: "purple",
      content: (
        <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <FaShieldAlt className="w-5 h-5 text-purple-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900">Our Promise</h4>
          </div>
          <p className="text-gray-700 leading-relaxed">
            <strong>We do not sell your information.</strong> Some data like
            comments may be reviewed through automated spam protection services
            for security purposes.
          </p>
        </div>
      ),
    },
    {
      id: "retention",
      title: "Data Retention",
      icon: FaClock,
      color: "red",
      content: (
        <div className="space-y-4">
          <div className="bg-white border border-red-200 rounded-xl p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <FaFileAlt className="w-4 h-4 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Comments</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  Stored indefinitely to manage follow-up comments automatically
                  and maintain conversation context.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <FaCog className="w-4 h-4 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">User Profiles</h4>
                </div>
                <p className="text-gray-700 text-sm">
                  Registration data can be edited or deleted by users anytime
                  (except usernames). Administrators can also manage this data.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "rights",
      title: "Your Rights",
      icon: FaLock,
      color: "indigo",
      content: (
        <div className="bg-linear-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <FaLock className="w-5 h-5 text-indigo-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Data Control
              </h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              You can request a copy of your personal data or ask us to delete
              it. Some information may be retained for legal, administrative, or
              security requirements.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="md:py-[120px] py-[64px] bg-linear-to-br from-gray-900 via-purple-900 to-orange-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 pt-[var(--nav-height)]">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium mb-6">
                <FaShieldAlt className="w-4 h-4 mr-2" />
                Privacy First
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Privacy
                <span className="block text-yellow-orange-gradient">
                  Policy
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                At Zyneto, we value your privacy and take it very seriously.
                This policy explains how we collect, use, and protect your
                personal information with complete transparency.
              </p>
            </div>
            <div className="lg:w-1/2 h-auto lg:h-[320px] w-full">
              <Image
                src={privacyHeroImage}
                alt="Illustration introducing Zyneto privacy policy"
                width={600}
                height={320}
                className="w-full h-auto "
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#F9F9F9]"
        style={{
          backgroundImage: `url(${fagGridDotsBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-4 md:py-[76px] py-[22px]">
          <div className="space-y-6 w-full">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <div
                  key={section.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden w-full"
                >
                  <div className="w-full px-8 py-6 flex items-center space-x-4 bg-gray-50">
                    <div
                      className={`w-12 h-12 bg-${section.color}-100 rounded-xl flex items-center justify-center`}
                    >
                      <IconComponent
                        className={`w-6 h-6 text-${section.color}-600`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  <div className="px-8 pb-8">{section.content}</div>
                </div>
              );
            })}
          </div>
          <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <FaCog className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Additional Protections
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Data Protection",
                  description:
                    "We use strict security measures including encryption and access controls to safeguard your information.",
                  icon: FaShieldAlt,
                  color: "green",
                },
                {
                  title: "Breach Procedures",
                  description:
                    "We have established protocols to protect your data and minimize impact in case of security incidents.",
                  icon: FaLock,
                  color: "red",
                },
                {
                  title: "Third-party Sources",
                  description:
                    "We may receive data from trusted partners to enhance our services while maintaining privacy standards.",
                  icon: FaGlobe,
                  color: "blue",
                },
                {
                  title: "Automated Decisions",
                  description:
                    "Any automated analysis of your data is done carefully, transparently, and with appropriate safeguards.",
                  icon: FaCog,
                  color: "purple",
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div
                        className={`w-8 h-8 bg-${item.color}-100 rounded-lg flex items-center justify-center`}
                      >
                        <IconComponent
                          className={`w-4 h-4 text-${item.color}-600`}
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 p-6 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                <strong>Regulatory Compliance:</strong> We follow industry
                standards and regulations for privacy and data protection,
                including GDPR compliance measures where applicable.
              </p>
            </div>
          </div>
          <div className="mt-12 bg-linear-to-r from-gray-900 to-purple-900 rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="w-8 h-8 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Questions About Your Privacy?
              </h4>
              <p className="text-gray-300 mb-4">
                We&apos;re here to help. Contact us anytime for questions about this
                privacy policy or your data.
              </p>
              <button
                className="rounded-full gradient-bg-btn"
                onClick={openModal}
              >
                Contact Us
              </button>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-gray-400 text-sm">
                  Last updated:{" "}
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
