import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0 });

  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth });

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};
