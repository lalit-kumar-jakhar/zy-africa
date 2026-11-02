"use client";
import React from "react";
import Image from "next/image";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import Modal from "@/components/common/Modal";
import type { Project } from "@/data/portfolio";
import Link from "next/link";
import { FaAndroid, FaApple, FaGlobe } from "react-icons/fa";

interface ReadMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ReadMoreModal: React.FC<ReadMoreModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  if (!project) return null;

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      ariaLabel={project.title}
      className="max-w-7xl"
    >
      <div className="p-4 flex flex-col lg:flex-row h-full max-h-[85vh] overflow-y-auto">
        <div className="relative w-full lg:w-1/2 h-full">
          <ResponsiveImage
            src={
              typeof project.image === "string"
                ? project.image
                : project.image.src
            }
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-full object-cover rounded-2xl"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="mt-4">
            <div className="bg-linear-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-2xl p-4 border border-purple-100">
              <div>
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 block">
                  Platforms:
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  {project.platforms.webApp && (
                    <Link
                      href={project.platforms.webApp}
                      target="_blank"
                      rel="noopener noreferrer nofollow ugc"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-900! decoration-none bg-white border border-gray-300 hover:bg-orange-50 hover:border-orange-400 hover:text-orange-600 transition-all duration-200 shadow-sm"
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-900! decoration-none bg-white border border-gray-300 hover:bg-orange-50 hover:border-orange-400 hover:text-orange-600 transition-all duration-200 shadow-sm"
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-900! decoration-none bg-white border border-gray-300 hover:bg-orange-50 hover:border-orange-400 hover:text-orange-600 transition-all duration-200 shadow-sm"
                    >
                      <FaApple className="w-3.5 h-3.5" />
                      iOS App
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 bg-white p-4 lg:p-6 pb-0! h-full">
          <div className="h-full flex flex-col justify-between">
            <div>
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
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                {project.description}
              </p>
            </div>
            <div className="bg-linear-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-2xl p-4 border border-purple-100">
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
        </div>
      </div>
    </Modal>
  );
};

export default ReadMoreModal;
