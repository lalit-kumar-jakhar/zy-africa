"use client";
import React, { useEffect, useRef, useState } from "react";

type TypewriterTextProps = {
  words: string[];
};

// Isolated so the ticking `text` state doesn't re-render the whole hero section.
const TypewriterText: React.FC<TypewriterTextProps> = ({ words }) => {
  const [text, setText] = useState(words[0]);
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
  }, [text, isDeleting, loopIndex, words]);

  return <>{text || "_"}</>;
};

export default TypewriterText;
