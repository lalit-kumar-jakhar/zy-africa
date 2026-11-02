import React from "react";
import StarIcon from "@/components/common/StarIcon";
import {
  HiRocketLaunch,
  HiChartBar,
  HiBuildingOffice2,
} from "react-icons/hi2";
import Reveal from "@/components/common/Reveal";

const businessTypes = [
  {
    id: 1,
    title: "Startups & New Ventures",
    icon: HiRocketLaunch,
    bg: "from-[#FFFDF2] to-[#F8F4FF]",
    accent: "#7C3AED",
    descriptionList: [
      "Launch-ready MVPs",
      "Affordable tech stacks",
      "Built-to-scale from the ground up",
    ],
    tagline: "Move fast. Launch smarter.",
  },
  {
    id: 2,
    title: "Growing SMBs & Mid-Sized Teams",
    icon: HiChartBar,
    bg: "from-[#F5FFF7] to-[#F8FFFC]",
    accent: "#16A34A",
    descriptionList: [
      "Automation software solutions",
      "Tailor-made business applications",
      "Analytics-powered business intelligence",
    ],
    tagline: "Automate. Scale. Dominate.",
    featured: true,
  },
  {
    id: 3,
    title: "Enterprises & Corporates",
    icon: HiBuildingOffice2,
    bg: "from-[#F5FAFF] to-[#EDF6FF]",
    accent: "#2563EB",
    descriptionList: [
      "Enterprise-ready platform",
      "Regulation and compliance ready",
      "Multi-department integrations",
    ],
    tagline: "Built for enterprise excellence.",
  },
];

const baseDelay = 100;

const BusinessSolutions: React.FC = () => {
  return (
    <section className="bg-[#FFFFFF]"> <div className="container mx-auto px-4 md:py-[76px] py-[22px]"> <div className="text-center mx-auto mb-8"> <div className="flex justify-center items-center mb-1 md:mb-2"> <StarIcon size={40} color="#000000" /> </div> <Reveal delay={baseDelay} duration={500} direction="up"> <h3 className="text-[30px] md:text-[40px] font-bold text-[#000000]"> Tailored Solutions Based on Your Business Size </h3> </Reveal> <Reveal delay={baseDelay * 2} duration={500} direction="up"> <p className="text-[#616161] mt-2 text-lg md:text-xl font-normal xl:max-w-5xl mx-auto"> From startups to global enterprises, we craft solutions that adapt, evolve, and outperform expectations. Your growth journey deserves technology built to lead, not follow. </p> </Reveal> </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {businessTypes.map((business, index) => {
          const Icon = business.icon;

          return (
            <Reveal
              key={business.id}
              delay={baseDelay * (index + 1)}
              duration={500}
              direction="up"
              triggerOnce
            >
              <div
                className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-gray-200 bg-linear-to-br ${business.bg
                  } p-8
                  
                  ${business.featured
                    ? "border-green-200"
                    : ""
                  }`}
              >
                <div
                  className="absolute top-0 right-0 rounded-tr-2xl rounded-bl-2xl flex h-20 w-20 items-center justify-center"
                  style={{
                    backgroundColor: `${business.accent}15`,
                  }}
                >
                  <Icon
                    size={38}
                    style={{
                      color: business.accent,
                    }}
                  />
                </div>
                <div className="mb-8 mt-6">
                  <p className="mb-2 text-lg font-medium text-gray-600">
                    For
                  </p>

                  <h3 className="text-3xl font-bold leading-snug text-gray-900">
                    {business.title}
                  </h3>
                </div>
                <ul className="flex-1 space-y-5">
                  {business.descriptionList.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          backgroundColor: business.accent,
                        }}
                      />

                      <span className="text-lg leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
    </section>
  );
};

export default BusinessSolutions;