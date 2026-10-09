"use client";
import {
  FaLock,
  FaFileAlt,
  FaCog,
  FaCookieBite,
  FaShieldAlt,
  FaChartLine,
  FaBullhorn,
  FaQuestion,
  FaExternalLinkAlt,
} from "react-icons/fa";
const fagGridDotsBgImage = "/static/assets/home/faq/grid-dots.svg";

const CookiePolicy = () => {
  const cookieCategories = [
    {
      title: "Necessary",
      icon: FaShieldAlt,
      color: "red",
      description:
        "Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.",
      cookies: [
        {
          name: "rc::a",
          duration: "Never Expires",
          description:
            "This cookie is set by the Google recaptcha service to identify bots to protect the website against malicious spam attacks.",
        },
        {
          name: "rc::c",
          duration: "session",
          description:
            "This cookie is set by the Google recaptcha service to identify bots to protect the website against malicious spam attacks.",
        },
        {
          name: "VISITOR_PRIVACY_METADATA",
          duration: "6 months",
          description:
            "YouTube sets this cookie to store the user's cookie consent state for the current domain.",
        },
        {
          name: "cookieyes-consent",
          duration: "1 year",
          description:
            "CookieYes sets this cookie to remember users' consent preferences so that their preferences are respected on subsequent visits to this site. It does not collect or store any personal information about the site visitors.",
        },
      ],
    },
    {
      title: "Functional",
      icon: FaCog,
      color: "blue",
      description:
        "Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.",
      cookies: [
        {
          name: "VISITOR_INFO1_LIVE",
          duration: "6 months",
          description:
            "A cookie set by YouTube to measure bandwidth that determines whether the user gets the new or old player interface.",
        },
        {
          name: "yt-remote-connected-devices",
          duration: "Never Expires",
          description:
            "YouTube sets this cookie to store the user's video preferences using embedded YouTube videos.",
        },
        {
          name: "ytidb::LAST_RESULT_ENTRY_KEY",
          duration: "Never Expires",
          description:
            "The cookie ytidb::LAST_RESULT_ENTRY_KEY is used by YouTube to store the last search result entry that was clicked by the user. This information is used to improve the user experience by providing more relevant search results in the future.",
        },
        {
          name: "yt-remote-device-id",
          duration: "Never Expires",
          description:
            "YouTube sets this cookie to store the user's video preferences using embedded YouTube videos.",
        },
        {
          name: "yt-remote-session-name",
          duration: "session",
          description:
            "The yt-remote-session-name cookie is used by YouTube to store the user's video player preferences using embedded YouTube video.",
        },
        {
          name: "yt-remote-fast-check-period",
          duration: "session",
          description:
            "The yt-remote-fast-check-period cookie is used by YouTube to store the user's video player preferences for embedded YouTube videos.",
        },
        {
          name: "yt-remote-session-app",
          duration: "session",
          description:
            "The yt-remote-session-app cookie is used by YouTube to store user preferences and information about the interface of the embedded YouTube video player.",
        },
        {
          name: "yt-remote-cast-available",
          duration: "session",
          description:
            "The yt-remote-cast-available cookie is used to store the user's preferences regarding whether casting is available on their YouTube video player.",
        },
        {
          name: "yt-remote-cast-installed",
          duration: "session",
          description:
            "The yt-remote-cast-installed cookie is used to store the user's video player preferences using embedded YouTube video.",
        },
      ],
    },
    {
      title: "Analytics",
      icon: FaChartLine,
      color: "green",
      description:
        "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.",
      cookies: [
        {
          name: "_ga_*",
          duration: "1 year 1 month 4 days",
          description:
            "Google Analytics sets this cookie to store and count page views.",
        },
        {
          name: "_ga",
          duration: "1 year 1 month 4 days",
          description:
            "Google Analytics sets this cookie to calculate visitor, session and campaign data and track site usage for the site's analytics report. The cookie stores information anonymously and assigns a randomly generated number to recognise unique visitors.",
        },
        {
          name: "YSC",
          duration: "session",
          description:
            "YSC cookie is set by Youtube and is used to track the views of embedded videos on Youtube pages.",
        },
      ],
    },
    {
      title: "Advertisement",
      icon: FaBullhorn,
      color: "orange",
      description:
        "Advertisement cookies are used to provide visitors with customised advertisements based on the pages you visited previously and to analyse the effectiveness of the ad campaigns.",
      cookies: [
        {
          name: "yt.innertube::nextId",
          duration: "Never Expires",
          description:
            "YouTube sets this cookie to register a unique ID to store data on what videos from YouTube the user has seen.",
        },
        {
          name: "yt.innertube::requests",
          duration: "Never Expires",
          description:
            "YouTube sets this cookie to register a unique ID to store data on what videos from YouTube the user has seen.",
        },
      ],
    },
    {
      title: "Uncategorised",
      icon: FaQuestion,
      color: "gray",
      description:
        "Other uncategorised cookies are those that are being analysed and have not been classified into a category as yet.",
      cookies: [
        {
          name: "__Secure-ROLLOUT_TOKEN",
          duration: "6 months",
          description: "Description is currently not available.",
        },
        {
          name: "__Secure-YEC",
          duration: "past",
          description: "Description is currently not available.",
        },
      ],
    },
  ];

  const browserLinks = [
    {
      name: "Chrome",
      url: "https://support.google.com/accounts/answer/32050",
      description: "Manage cookies in Google Chrome",
    },
    {
      name: "Safari",
      url: "https://support.apple.com/en-in/guide/safari/sfri11471/mac",
      description: "Manage cookies in Apple Safari",
    },
    {
      name: "Firefox",
      url: "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US",
      description: "Manage cookies in Mozilla Firefox",
    },
    {
      name: "Internet Explorer",
      url: "https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc",
      description: "Manage cookies in Internet Explorer",
    },
  ];

  const sections = [
    {
      id: "intro",
      title: "What are cookies?",
      icon: FaCookieBite,
      color: "yellow",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            This Cookie Policy explains what cookies are, how we use them, the
            types of cookies we use (i.e., the information we collect using
            cookies and how that information is used), and how to manage your
            cookie settings.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Cookies are small text files used to store small pieces of
            information. They are stored on your device when a website loads in
            your browser. These cookies help ensure that the website functions
            properly, enhance security, provide a better user experience, and
            analyse performance to identify what works and where improvements
            are needed.
          </p>
        </div>
      ),
    },
    {
      id: "usage",
      title: "How do we use cookies?",
      icon: FaCog,
      color: "blue",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Like most online services, our website uses both first-party and
            third-party cookies for various purposes. First-party cookies are
            primarily necessary for the website to function properly and do not
            collect any personally identifiable data.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The third-party cookies used on our website primarily help us
            understand how the website performs, track how you interact with it,
            keep our services secure, deliver relevant advertisements, and
            enhance your overall user experience while improving the speed of
            your future interactions with our website.
          </p>
        </div>
      ),
    },
    {
      id: "types",
      title: "Types of cookies we use",
      icon: FaFileAlt,
      color: "green",
      content: (
        <div className="space-y-8">
          {cookieCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <div
                  className={`bg-${category.color}-50 px-6 py-4 border-b border-gray-200`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 bg-${category.color}-100 rounded-lg flex items-center justify-center shrink-0`}
                    >
                      <IconComponent
                        className={`w-4 h-4 text-${category.color}-600`}
                      />
                    </div>
                    <div>
                      <h4
                        className={`font-semibold text-${category.color}-900`}
                      >
                        {category.title}
                      </h4>
                      <p className={`text-sm text-${category.color}-700 mt-1`}>
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-2 px-3 font-medium text-gray-900">
                              Cookie
                            </th>
                            <th className="text-left py-2 px-3 font-medium text-gray-900">
                              Duration
                            </th>
                            <th className="text-left py-2 px-3 font-medium text-gray-900">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.cookies.map((cookie, cookieIndex) => (
                            <tr
                              key={cookieIndex}
                              className="border-b border-gray-100"
                            >
                              <td className="py-3 px-3">
                                <span className="font-medium text-gray-900 text-sm">
                                  {cookie.name}
                                </span>
                              </td>
                              <td className="py-3 px-3">
                                <span className="whitespace-nowrap inline-block px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
                                  {cookie.duration}
                                </span>
                              </td>
                              <td className="py-3 px-3">
                                <p className="text-sm text-gray-600">
                                  {cookie.description}
                                </p>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      id: "manage",
      title: "Manage cookie preferences",
      icon: FaLock,
      color: "purple",
      content: (
        <div className="space-y-6">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
              <FaLock className="w-4 h-4 mr-2" />
              Consent Preferences
            </h4>
            <p className="text-purple-800 mb-4">
              You can modify your cookie settings anytime by clicking the
              &apos;Consent Preferences&apos; button below. This will allow you
              to revisit the cookie consent banner and update your preferences
              or withdraw your consent immediately.
            </p>
            <p className="text-purple-800 mb-4">
              Additionally, different browsers offer various methods to block
              and delete cookies used by websites. You can adjust your browser
              settings to block or delete cookies. Below are links to support
              documents on how to manage and delete cookies in major web
              browsers.
            </p>
            <a className="cky-banner-element bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
              Consent Preferences
            </a>
          </div>
          <div>
            <div className="grid sm:grid-cols-2 gap-3">
              {browserLinks.map((browser, index) => (
                <a
                  key={index}
                  href={browser.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                >
                  <div>
                    <span className="font-medium text-gray-900">
                      {browser.name}
                    </span>
                    <p className="text-sm text-gray-600">
                      {browser.description}
                    </p>
                  </div>
                  <FaExternalLinkAlt className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                </a>
              ))}
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm">
              If you are using a different web browser, please refer to its
              official support documentation.
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
        <div className="relative z-10 container mx-auto px-4 pt-[var(--nav-height)]">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-200 text-sm font-medium mb-6">
              <FaCookieBite className="w-4 h-4 mr-2" />
              Cookies & Privacy
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Effective date: August 27, 2025
              <br />
              Last updated: August 27, 2025
            </p>
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

export default CookiePolicy;
