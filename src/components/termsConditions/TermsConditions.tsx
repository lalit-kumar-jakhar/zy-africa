"use client";
import {
  FaFileContract,
  FaHandshake,
  FaCalendarAlt,
  FaEye,
  FaCopyright,
  FaEdit,
  FaDollarSign,
  FaLifeRing,
  FaGlobe,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const termsHeroImage = "/static/assets/privacy-terms/terms-conditions.png";
const fagGridDotsBgImage = "/static/assets/home/faq/grid-dots.svg";

const TermsConditions = () => {
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
      id: "content",
      title: "Provision of Content",
      icon: FaFileContract,
      color: "green",
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <FaFileContract className="w-4 h-4 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Client Responsibility
              </h4>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content, including text, images, videos, and other media, is
              the responsibility of the client. Clients must provide all
              necessary materials to Zyneto before project work begins.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
              <p className="text-sm text-gray-700">
                <strong>Important:</strong> Backups of any data or content are
                the client&apos;s responsibility. Zyneto cannot be held liable
                for any loss or damage to client-provided content under any
                circumstance.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "scope",
      title: "Contact & Project Scope",
      icon: FaHandshake,
      color: "purple",
      content: (
        <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <FaHandshake className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Scope Limitations
              </h4>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Zyneto will not assume responsibility for graphics, artwork, data
              entry, web hosting, or other supplementary services unless
              explicitly agreed upon, documented, and paid for by both parties.
            </p>
            <div className="bg-white border border-purple-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                <strong>Creative Materials:</strong> All creative materials
                produced by Zyneto remain the property of Zyneto unless
                otherwise stated in a written agreement. Any modifications to
                ownership or usage rights must be mutually agreed upon.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "deadlines",
      title: "Deadlines",
      icon: FaCalendarAlt,
      color: "orange",
      content: (
        <div className="bg-white border border-orange-200 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
              <FaCalendarAlt className="w-4 h-4 text-orange-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900">
              Timeline Considerations
            </h4>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            While Zyneto strives to meet all deadlines, we are not responsible
            for delays caused by factors beyond our control.
          </p>
          <div className="space-y-3">
            {[
              "Deployment issues",
              "Third-party delays",
              "Communication gaps",
              "Resource unavailability",
              "Other unforeseen circumstances",
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "review",
      title: "Client Review",
      icon: FaEye,
      color: "teal",
      content: (
        <div className="bg-linear-to-br from-teal-50 to-green-50 rounded-xl p-6 border border-teal-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
              <FaEye className="w-5 h-5 text-teal-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900">
              Review Process
            </h4>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Clients will have the opportunity to review website content and
            design during project development and upon completion.
          </p>
          <div className="bg-white border border-teal-200 rounded-lg p-4">
            <p className="text-gray-700 text-sm">
              <strong>Seven-day window:</strong> A seven-day window is provided
              for feedback or revision requests. If no response is received
              within this period, the project will be deemed approved and
              accepted.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "copyright",
      title: "Copyright & Permissions",
      icon: FaCopyright,
      color: "red",
      content: (
        <div className="space-y-4">
          <div className="bg-white border border-red-200 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                <FaCopyright className="w-4 h-4 text-red-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Copyright Protection
              </h4>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 text-sm">
                Copyrights for logos, files, and content supplied by the client
                remain with the client. Clients grant Zyneto permission to use
                and modify these materials as required for project execution.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-gray-700 text-sm">
                  <strong>Client Responsibility:</strong> Acquiring permissions
                  or licenses for third-party content is the client&apos;s
                  responsibility. Zyneto is indemnified against any claims
                  arising from improper copyright usage or client negligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "changes",
      title: "Changes & Third-Party Modifications",
      icon: FaEdit,
      color: "indigo",
      content: (
        <div className="bg-linear-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <FaEdit className="w-5 h-5 text-indigo-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900">
              Modification Policy
            </h4>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Zyneto is not liable for changes made by the client or third
            parties, including deletions, modifications, or additions. We may,
            however, provide corrections or updates for an additional fee.
          </p>
        </div>
      ),
    },
    {
      id: "payment",
      title: "Payment Terms",
      icon: FaDollarSign,
      color: "yellow",
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                <FaDollarSign className="w-4 h-4 text-yellow-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Payment Methods
              </h4>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We accept payments via bank transfer, cheque, or cash. Zyneto
              reserves the right to refuse any payment method at its discretion
              and may revise pricing without prior notice.
            </p>
            <div className="space-y-3">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-gray-700 text-sm">
                  <strong>Cancellation:</strong> If a client cancels or
                  discontinues a project mid-way, a cancellation fee may apply
                  based on the work completed at the time of discontinuation.
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-gray-700 text-sm">
                  <strong>Non-Communication:</strong> If a client fails to
                  communicate or respond for a continuous period of two months,
                  Zyneto reserves the right to consider the contract null and
                  void, without any further obligation.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "support",
      title: "Support & Third-Party Services",
      icon: FaLifeRing,
      color: "emerald",
      content: (
        <div className="space-y-4">
          <div className="bg-white border border-emerald-200 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                <FaLifeRing className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                Support Terms
              </h4>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 text-sm">
                Zyneto provides free support for one month post-launch, limited
                to bug fixes and email assistance. Support beyond this period is
                billed at an agreed hourly rate.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <p className="text-gray-700 text-sm">
                  <strong>Third-Party Services:</strong> Any third-party
                  products or services integrated into the project (including
                  licensing, subscriptions, or copyright-related costs) are the
                  client&apos;s responsibility. We do not guarantee or provide
                  warranties for third-party products.
                </p>
              </div>
            </div>
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
                <FaFileContract className="w-4 h-4 mr-2" />
                Legal Framework
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Terms &
                <span className="block text-yellow-orange-gradient">
                  Conditions
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                These terms & conditions outline how Zyneto and our clients work
                together, covering responsibilities, approvals, and project
                guidelines for seamless delivery.
              </p>
            </div>
            <div className="lg:w-1/2 h-[300px] w-full">
              <Image
                src={termsHeroImage}
                alt="Illustration introducing Zyneto terms and conditions"
                width={600}
                height={320}
                className="w-full h-auto"
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
        <div className="container mx-auto px-4 py-16 space-y-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-12 h-12 bg-${section.color}-100 rounded-xl flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 text-${section.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <div>{section.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TermsConditions;
