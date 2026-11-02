"use client";
import React from "react";
import StarIcon from "@/components/common/StarIcon";
const gridDotsBgImage = "/static/assets/home/faq/grid-dots.svg";
import Carousel from "./carousel/Carousel";
import Reveal from "@/components/common/Reveal";
const mobileAppImage = "/static/assets/home/wideVarieties/mobile-app-develo.webp";
const webDevelopmentImage = "/static/assets/home/wideVarieties/web-development.webp";
const softwareDevelopmentImage = "/static/assets/home/wideVarieties/software-development.webp";
const webDesigningImage = "/static/assets/home/wideVarieties/web-designing.webp";
const fullStackDevelopmentImage = "/static/assets/home/wideVarieties/full-stack.webp";

const androidAppDevIcon = "/static/assets/home/wideVarieties/icons/android-app-dev.svg";
const iosAppDevIcon = "/static/assets/home/wideVarieties/icons/ios-app-dev.svg";
const crossPlatformIcon = "/static/assets/home/wideVarieties/icons/cross-platform.svg";
const appUiUxIcon = "/static/assets/home/wideVarieties/icons/app-ui-ux.svg";
const mobileAppDevIcon = "/static/assets/home/wideVarieties/icons/mobile-app-dev.svg";
const wearableAppDevIcon = "/static/assets/home/wideVarieties/icons/wearable-app-dev.svg";
const customWebAppDevIcon = "/static/assets/home/wideVarieties/icons/custom-web-app-dev.svg";
const cmsEcommerceIcon = "/static/assets/home/wideVarieties/icons/cms-ecommerce.svg";
const backendApiDevIcon = "/static/assets/home/wideVarieties/icons/backend-api-dev.svg";
const progressiveWebAppIcon = "/static/assets/home/wideVarieties/icons/progressive-web-app.svg";
const websiteMaintenanceIcon = "/static/assets/home/wideVarieties/icons/website-maintenance.svg";
const webAppModernizationIcon = "/static/assets/home/wideVarieties/icons/web-app-modernization.svg";
const enterpriseSoftwareIcon = "/static/assets/home/wideVarieties/icons/enterprise-software.svg";
const saasIcon = "/static/assets/home/wideVarieties/icons/saas.svg";
const crmErpSolutionsIcon = "/static/assets/home/wideVarieties/icons/crm-erp-solutions.svg";
const softwareIntegrationIcon = "/static/assets/home/wideVarieties/icons/software-integration.svg";
const customDesktopAppIcon = "/static/assets/home/wideVarieties/icons/custom-desktop-app.svg";
const maintenanceSupportIcon = "/static/assets/home/wideVarieties/icons/maintenance-support.svg";
const uiUxStrategyIcon = "/static/assets/home/wideVarieties/icons/ui-ux-strategy.svg";
const responsiveWebIcon = "/static/assets/home/wideVarieties/icons/responsive-web.svg";
const landingPageIcon = "/static/assets/home/wideVarieties/icons/landing-page.svg";
const graphicBrandIcon = "/static/assets/home/wideVarieties/icons/graphic-brand.svg";
const prototypingIcon = "/static/assets/home/wideVarieties/icons/prototyping.svg";
const designSystemIcon = "/static/assets/home/wideVarieties/icons/design-system.svg";
const mernMeanIcon = "/static/assets/home/wideVarieties/icons/mern-mean.svg";
const frontendIcon = "/static/assets/home/wideVarieties/icons/frontend.svg";
const backendIcon = "/static/assets/home/wideVarieties/icons/backend.svg";
const apiDatabaseIcon = "/static/assets/home/wideVarieties/icons/api-database.svg";
const devopsIcon = "/static/assets/home/wideVarieties/icons/devops.svg";
const fullCycleIcon = "/static/assets/home/wideVarieties/icons/full-cycle.svg";
import WideVarietiesCard from "./carousel/WideVarietiesCard";

const wideVarieties = [
  {
    title: "Mobile App Development",
    description:
      "Our mobile app development services focus on creating sleek, high-performing apps that captivate users from the first tap.",
    iconItems: [
      {
        icon: androidAppDevIcon,
        label: "Android App Development",
      },
      {
        icon: iosAppDevIcon,
        label: "iOS App Development",
      },
      { icon: crossPlatformIcon, label: "Cross-Platform App Development" },
      {
        icon: appUiUxIcon,
        label: "App UI/UX Design",
      },
      {
        icon: mobileAppDevIcon,
        label: "Mobile App Maintenance",
      },
      { icon: wearableAppDevIcon, label: "Wearable App Development" },
    ],
    ctaText: "Explore",
    ctaLink: "/services/mobile-app-development",
    image: mobileAppImage,
  },
  {
    title: "Web Development",
    description:
      "Through expert web development, we build fast, secure, and scalable websites and web apps that expand your brand’s digital footprint.",
    iconItems: [
      { icon: customWebAppDevIcon, label: "Custom Web App Development" },
      { icon: cmsEcommerceIcon, label: "CMS & eCommerce Solutions" },
      { icon: backendApiDevIcon, label: "Backend & API Development" },
      { icon: progressiveWebAppIcon, label: "Progressive Web Apps (PWAs)" },
      { icon: websiteMaintenanceIcon, label: "Website Maintenance & Support" },
      { icon: webAppModernizationIcon, label: "Web App Modernization" },
    ],
    ctaText: "Explore",
    ctaLink: "/services/web-development",
    image: webDevelopmentImage,
  },
  {
    title: "Software Development",
    description:
      "At Zyneto, our software development team creates robust, custom software solutions that solve real-world business problems and streamline your operations, no matter your industry.",
    iconItems: [
      {
        icon: enterpriseSoftwareIcon,
        label: "Enterprise Software Development",
      },
      { icon: saasIcon, label: "SaaS Product Development" },
      { icon: crmErpSolutionsIcon, label: "CRM & ERP Solutions" },
      { icon: softwareIntegrationIcon, label: "Software Integration Services" },
      {
        icon: customDesktopAppIcon,
        label: "Custom Desktop Applications",
      },
      { icon: maintenanceSupportIcon, label: "Maintenance & Support" },
    ],
    ctaText: "Explore",
    image: softwareDevelopmentImage,
  },
  {
    title: "Web Designing",
    description:
      "Every design element is thoughtfully crafted to ensure brand consistency and engagement. Leverage our web design services to blend beautiful design with usability.",
    iconItems: [
      {
        icon: uiUxStrategyIcon,
        label: "UI/UX Strategy & Wireframing",
      },
      { icon: responsiveWebIcon, label: "Responsive Website Design" },
      { icon: landingPageIcon, label: "Landing Page Design" },
      { icon: graphicBrandIcon, label: "Graphic & Brand Design" },
      { icon: prototypingIcon, label: "Prototyping & User Testing" },
      { icon: designSystemIcon, label: "Design System Development" },
    ],
    ctaText: "Explore",
    ctaLink: "/services/ui-ux-design",
    image: webDesigningImage,
  },
  {
    title: "Full Stack Development",
    description:
      "With end-to-end full-stack development expertise, we build powerful digital products, handling everything from dynamic front-end interactions to robust back-end logic.",
    iconItems: [
      { icon: mernMeanIcon, label: "MERN & MEAN Stack Development" },
      {
        icon: frontendIcon,
        label: "Frontend with React/Vue/Angular",
      },
      { icon: backendIcon, label: "Backend with Node.js/Django/.NET" },
      { icon: apiDatabaseIcon, label: "API & Database Integration" },
      { icon: devopsIcon, label: "DevOps & CI/CD Setup" },
      { icon: fullCycleIcon, label: "Full-Cycle Project Management" },
    ],
    ctaText: "Explore",
    image: fullStackDevelopmentImage,
  },
];

const baseDelay = 100;

const WideVarieties: React.FC = () => {
  return (
    <div
      className="bg-[#F9F9F9] pt-5.5 sm:pt-19 pb-4 sm:pb-8"
      style={{
        backgroundImage: `url(${gridDotsBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center items-center mb-1 md:mb-2">
            <StarIcon size={40} color="#000000" />
          </div>
          <Reveal delay={baseDelay} duration={500} direction="up">
            <h2 className="text-[30px] md:text-[40px] font-bold text-[#000000]">
              Comprehensive IT Services Built for Growth
            </h2>
          </Reveal>
          <Reveal delay={baseDelay * 2} duration={500} direction="up">
            <p className="text-[#4B5563] mt-2 text-lg md:text-xl font-normal xl:max-w-5xl mx-auto">
              Experience the power of innovation-driven IT services built to
              fuel your growth, efficiency, and digital edge. From concept to
              launch, we craft scalable digital solutions that give your
              business a competitive edge.
            </p>
          </Reveal>
        </div>
        <div className="my-4 flex md:hidden">
          <div className="flex flex-col gap-4">
            {wideVarieties.map((slide, index) => (
              <div className="p-1" key={index}>
                <WideVarietiesCard
                  title={slide.title}
                  description={slide.description}
                  iconItems={slide.iconItems}
                  ctaText={slide.ctaText}
                  ctaLink={slide.ctaLink}
                  image={slide.image}
                  isActive
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:block py-8">
        <Carousel slides={wideVarieties} />
      </div>
    </div>
  );
};

export default WideVarieties;
