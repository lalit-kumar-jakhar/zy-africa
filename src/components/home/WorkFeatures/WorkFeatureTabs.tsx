"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/common/Reveal";
const artificialIntelligenceImage =
  "/static/assets/home/workFeatures/artificial-intelligence.webp";
const computerVisionImage =
  "/static/assets/home/workFeatures/computer-vision.webp";
const generativeAiImage = "/static/assets/home/workFeatures/generative-ai.webp";
const cloudImage = "/static/assets/home/workFeatures/cloud.webp";
const blockChainImage = "/static/assets/home/workFeatures/blockchain.webp";
const arVrImage = "/static/assets/home/workFeatures/ar-vr.webp";
import { useModal } from "@/context/ModalContext";

const tabs = [
  {
    key: "generative-ai",
    label: "Generative AI",
    title: "Generative AI (GenAI)",
    description: `Generative AI that creates, automates, and adapts. Whether it is building chatbots, generating content, streamlining workflows, or personalizing customer experiences, Zyneto develops GenAI systems that fit your goals rather than a demo script. Intelligent systems that draft, summarize and decide at a speed people cannot match.`,
    image: generativeAiImage,
    ctaLink: "/services/generative-ai-development",
    tags: [
      "Chatbots",
      "RAG",
      "Text/Image Generation",
      "Automation",
      "Personalization",
    ],
  },
  {
    key: "ai",
    label: "Artificial Intelligence",
    title: "Artificial Intelligence",
    description: `Build smart applications with the power of AI and machine learning that automate processes, personalize experiences, and deliver actionable insights. Zyneto’s AI solutions drive intelligent systems and efficient teams by reducing manual work and errors, driving productivity and performance across the organization.`,
    image: artificialIntelligenceImage,
    ctaLink: "/services/artificial-intelligence",
    tags: [
      "ML Models",
      "Predictive Analytics",
      "Personalization",
      "Automation",
    ],
  },
  {
    key: "computer-vision",
    label: "Computer Vision",
    title: "Computer Vision",
    description: `Transform raw images and videos into actionable insights with advanced computer vision systems. From facial recognition and object detection to visual inspection and surveillance, Zyneto delivers intelligent solutions that enhance automation, accuracy, and efficiency across industries. Leverage AI-powered vision to decode the world in real-time and make smarter business decisions.`,
    image: computerVisionImage,
    tags: ["Object Detection", "OCR", "Face Recognition", "Quality Inspection"],
  },
  {
    key: "cloud",
    label: "Cloud",
    title: "Cloud",
    description: `Design and implement robust cloud solutions that scale with your business needs, ensuring flexibility, security, and high availability. Our cloud services integrate directly with your existing infrastructure, reduce downtime, and boost performance. Give your teams scalable, on-demand computing power and storage, so they can focus more on innovation and less on infrastructure management.`,
    image: cloudImage,
    tags: ["Scalability", "High Availability", "Migration", "DevOps"],
  },
  {
    key: "blockchain",
    label: "Blockchain",
    title: "Blockchain",
    description: `Create blockchain-powered applications for smarter and faster services with a decentralized approach. Our blockchain solutions let businesses build decentralized applications (DApps), smart contracts, crypto wallets, tokens, and more. Secure data and transactions, give users control, and future-proof your business with next-gen distributed ledger technologies.`,

    image: blockChainImage,
    tags: ["Smart Contracts", "DApps", "Wallets", "Tokens"],
  },
  {
    key: "ar-vr",
    label: "AR/VR",
    title: "AR/VR",
    description: `Design and develop immersive and interactive digital experiences with Augmented Reality (AR) and Virtual Reality (VR). Our AR/VR solutions are used across industries such as training, marketing, real estate, gaming, e-commerce, and more. Create powerful experiences, emotions, and impressions by leveraging the convergence of the virtual and the physical.`,
    image: arVrImage,
    tags: ["Training", "Marketing", "E‑commerce", "Real Estate"],
  },
];

const baseDelay = 100;

const WorkFeatureTabs: React.FC = () => {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="md:hidden">
        <label htmlFor="solutions" className="sr-only">
          Select Solutions Category
        </label>
        <select
          id="solutions"
          aria-label="Select Solutions Category"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black/5"
        >
          {tabs.map((tab) => (
            <option key={tab.key} value={tab.key}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>
      <div
        className="hidden md:flex flex-wrap justify-center gap-3 xl:gap-4"
        role="tablist"
        aria-label="Solutions categories"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={activeTab === tab.key}
            aria-controls={`panel-${tab.key}`}
            id={`tab-${tab.key}`}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-full border text-sm font-semibold cursor-pointer ${
              activeTab === tab.key
                ? "border-gray-300 text-yellow-orange-gradient"
                : "border-gray-200 bg-white text-[#202020] hover:border-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.key}
          className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-6 lg:justify-between items-center"
          role="tabpanel"
          id={`panel-${tab.key}`}
          aria-labelledby={`tab-${tab.key}`}
          hidden={activeTab !== tab.key}
        >
          <div className="lg:w-1/2 space-y-2 lg:space-y-4">
            <Reveal delay={baseDelay} duration={500} direction="up">
              <h3 className="text-2xl lg:text-3xl font-semibold text-[#202020]">
                {tab.title}
              </h3>
            </Reveal>
            <Reveal delay={baseDelay * 2} duration={500} direction="up">
              <p className="text-[#424242] text-lg md:text-xl font-normal mb-4 lg:mb-8">
                {tab.description}
              </p>
            </Reveal>
            {tab.tags && tab.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                {tab.tags.map((t: string) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-gray-200 bg-gray-50 text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            {"ctaLink" in tab && tab.ctaLink ? (
              <Link href={tab.ctaLink} className="gradient-bg-btn rounded-full">
                Explore
              </Link>
            ) : (
              <button
                className="gradient-bg-btn rounded-full"
                onClick={openModal}
              >
                Explore
              </button>
            )}
          </div>
          <div className="lg:w-1/2 h-[280px] sm:h-[300px] lg:h-[360px] w-full relative">
            {tab.image && (
              <div className="animate-fadeIn-tabsImage w-full h-full relative">
                <Image
                  src={tab.image}
                  alt={tab.title}
                  fill
                  className="rounded-xl object-cover"
                  draggable={false}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkFeatureTabs;
