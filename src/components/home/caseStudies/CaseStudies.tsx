"use client";
import React from "react";
import Carousel from "./carousel/Carousel";

const krooloImage = "/static/assets/portfolio/kroolo.jpg";
const alAmriExpressImage = "/static/assets/portfolio/al-amri-express.jpg";
const famepilotImage = "/static/assets/portfolio/famepilot.jpg";
const stylebankImage = "/static/assets/portfolio/stylebank.jpg";
const tvamImage = "/static/assets/portfolio/tvam-app.png";

const caseStudies = [
  {
    title: "Kroolo",
    highlight: "AI WorkOS Platform",
    description:
      "Kroolo is an AI Work Operating System that unifies projects, tasks, docs, and goals in a single workspace. Zyneto engineered the multi-tenant SaaS platform, real-time collaboration, and GenAI agents that help teams spin up plans, automate workflows, and surface actionable insights in seconds.",
    image: krooloImage,
    imageTitle: "Kroolo, AI WorkOS",
  },
  {
    title: "Al Amri Express",
    highlight: "Grocery & Quick Commerce",
    description:
      "Al Amri Express is Oman’s leading online grocery and daily essentials app. Zyneto built the mobile-first ordering experience, GPS-optimized delivery flows, and scalable backend so shoppers can reorder in a few taps and track orders in real time across Muscat and beyond.",
    image: alAmriExpressImage,
    imageTitle: "Al Amri Express, Grocery Delivery",
  },
  {
    title: "Famepilot",
    highlight: "AI Reputation Platform",
    description:
      "Famepilot centralizes reviews from Google, Facebook, and 25+ platforms into one dashboard. Zyneto delivered the SaaS platform, sentiment analysis engine, and automation that help brands reply faster, improve ratings, and grow local SEO across hundreds of locations.",
    image: famepilotImage,
    imageTitle: "Famepilot, Reputation Management",
  },
  {
    title: "Stylebank",
    highlight: "B2B Digital Catalog",
    description:
      "Stylebank is a B2B digital catalog and sales enablement tool for fashion and retail. Zyneto built the web app that lets sales teams search thousands of SKUs, generate tailored proposals in minutes, and integrate with existing CRM and inventory systems.",
    image: stylebankImage,
    imageTitle: "Stylebank, B2B Catalog",
  },
  {
    title: "Tvam",
    highlight: "Astrology Super App",
    description:
      "Tvam blends Vedic astrology with modern UX. Zyneto crafted interactive kundali journeys, real-time dasha insights, and multi-platform apps so users can explore charts, matchmaking, and personalized guidance through a delightful, visual experience.",
    image: tvamImage,
    imageTitle: "Tvam, Vedic Astrology App",
  },
];
const CaseStudies: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] md:py-[76px] py-[22px]">
      <div className="container mx-auto px-4 relative">
        <Carousel slides={caseStudies} options={{ loop: true }} />
      </div>
    </div>
  );
};

export default CaseStudies;
