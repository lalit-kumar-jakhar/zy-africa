"use client";
import React, { useEffect, useRef, useState } from "react";
import StarIcon from "@/components/common/StarIcon";
import { useModal } from "@/context/ModalContext";

const words = ["Trust", "Growth", "Innovation"];
const AboutTopArea: React.FC = () => {
  const [text, setText] = useState("");
  const { openModal } = useModal();
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const typeText = () => {
      const currentWord = words[loopIndex % words.length];

      if (!isDeleting && text === currentWord) {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1);
      } else {
        const nextText = isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1);

        setText(nextText);

        const delay = isDeleting ? 50 : 100;
        timeoutRef.current = setTimeout(typeText, delay);
      }
    };

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(typeText, 100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, isDeleting, loopIndex]);
  return (
    <>
      <section
        className="hero-bg-about bg-[#000000] relative overflow-hidden min-h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat bg-fixed bg-center"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto relative z-10 px-4 h-full text-center">
          <div className="flex items-center justify-center mb-1 md:mb-2">
            <StarIcon color="#ffffff" size={48} />
          </div>
          <p className="text-lg md:text-xl font-normal text-white mb-4">
            About Us: Shaping the Future of Technology, Together
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white text-center">
            <span className="block mb-4">
              Driven by People, Inspired by Dreams, Built on
            </span>
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:inline-flex min-w-[460px] items-center justify-center mt-2 text-yellow-orange-gradient pb-4">
              &lt;{text || "_"} /&gt;
            </span>
          </h1>
          <button className="gradient-bg-btn rounded-full" onClick={openModal}>
            Get in Touch
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutTopArea;
