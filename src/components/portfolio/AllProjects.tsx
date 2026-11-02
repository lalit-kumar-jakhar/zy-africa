"use client";
import React, { useState } from "react";
import Image from "next/image";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import Reveal from "@/components/common/Reveal";
import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";
import StarIcon from "../common/StarIcon";
import ReadMoreModal from "./ReadMoreModal";
import Link from "next/link";
import { FaGlobe, FaApple, FaAndroid, FaArrowRight } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
  index: number;
  onReadMore: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onReadMore,
}) => {
  const shouldShowReadMore = project.description.length > 150;

  return (
    <Reveal delay={index * 50} duration={400} direction="up" triggerOnce>
      <div className="group">
        <div className={`flex flex-col lg:flex-row lg:items-stretch gap-4 lg:gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
          <div className="flex flex-col h-full w-full">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="px-3 py-1 gradient-bg-tag-text rounded-full text-xs font-semibold uppercase tracking-wide border border-gray-200">
                {project.category}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-12 h-12 lg:w-20 lg:h-20 shrink-0 shadow-sm rounded-xl overflow-hidden">
                <Image
                  src={project.logo}
                  alt={project.title}
                  width={70}
                  height={70}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#000000] tracking-wide mb-2 block">
                {project.title}
              </h3>
            </div>
            <p className="text-gray-600 text-base md:text-lg mb-4 leading-relaxed line-clamp-4">
              {project.description}
            </p>
            <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2">
              {shouldShowReadMore && (
                <button
                  onClick={() => onReadMore(project)}
                  className="cursor-pointer text-orange-500 hover:text-orange-600 font-semibold text-base transition-colors duration-200 self-start flex items-center gap-1 group/btn"
                >
                  Read More
                  <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              )}
              {project.caseStudySlug && (
                <Link
                  href={`/case-studies/${project.caseStudySlug}`}
                  className="text-[#161616] hover:text-[#9900ff] font-semibold text-base transition-colors duration-200 self-start flex items-center gap-1 group/cs"
                >
                  Read the case study
                  <FaArrowRight className="w-4 h-4 group-hover/cs:translate-x-1 transition-transform duration-200" />
                </Link>
              )}
            </div>
            <div className="bg-linear-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-2xl p-4 border border-purple-100 mt-auto">
              <div className="mb-3">
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 block">
                  Platforms:
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  {project.platforms.webApp && (
                    <Link
                      href={project.platforms.webApp}
                      target="_blank"
                      rel="noopener noreferrer nofollow ugc"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-900 bg-white border border-gray-300 hover:bg-orange-50 hover:border-orange-400 hover:text-orange-600 transition-all duration-200 shadow-sm"
                    >
                      <FaGlobe className="w-3.5 h-3.5" />
                      Web App
                    </Link>
                  )}
                  {project.platforms.androidApp && (
                    <Link
                      href={project.platforms.androidApp}
                      target="_blank"
                      rel="noopener noreferrer nofollow ugc"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-900 bg-white border border-gray-300 hover:bg-orange-50 hover:border-orange-400 hover:text-orange-600 transition-all duration-200 shadow-sm"
                    >
                      <FaAndroid className="w-3.5 h-3.5" />
                      Android App
                    </Link>
                  )}
                  {project.platforms.iosApp && (
                    <Link
                      href={project.platforms.iosApp}
                      target="_blank"
                      rel="noopener noreferrer nofollow ugc"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-900 bg-white border border-gray-300 hover:bg-orange-50 hover:border-orange-400 hover:text-orange-600 transition-all duration-200 shadow-sm"
                    >
                      <FaApple className="w-3.5 h-3.5" />
                      iOS App
                    </Link>
                  )}
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 block">
                  Techstack:
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium text-gray-800 bg-white border border-gray-200 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-auto lg:h-[500px] lg:max-w-[500px] flex justify-start items-center overflow-hidden rounded-2xl">
            <ResponsiveImage
              src={
                typeof project.image === "string"
                  ? project.image
                  : project.image.src
              }
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-full object-contain rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const AllProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section className="bg-[#FFFFFF] pb-12 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 md:mb-16 text-center">
            <Reveal duration={200} direction="up" triggerOnce>
              <div className="flex items-center justify-center mb-1 md:mb-2">
                <StarIcon color="#000000" size={36} />
              </div>
              <h2 className="text-[30px] md:text-[40px] font-bold text-[#000000]">
                Our Featured Projects
              </h2>
            </Reveal>
            <Reveal delay={100} duration={200} direction="up" triggerOnce>
              <p className="text-lg md:text-xl text-gray-600 text-center mt-4 max-w-3xl mx-auto">
                Zyneto has successfully delivered projects for a wide range of clients across various industries. Here are some of our featured projects.
              </p>
            </Reveal>
          </div>
          <div className="space-y-8 md:space-y-12 lg:space-y-20">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onReadMore={handleReadMore}
              />
            ))}
          </div>
        </div>
      </section>
      <ReadMoreModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
};

export default AllProjects;
