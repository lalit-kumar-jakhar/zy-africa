import { IoSparkles } from "react-icons/io5";
import Link from "next/link";

// Styling lives in globals.css (.ai-hub-btn): the animations need keyframes.
const CustomAIButton = () => {
  return (
    <Link
      href="/services/artificial-intelligence"
      aria-label="Explore Zyneto AI services"
      className="ai-hub-btn flex rounded-full cursor-pointer w-max max-w-full items-center gap-2 p-[2px] pl-3 md:pl-4 text-[12px] md:text-[16px] font-medium"
    >
      <IoSparkles
        aria-hidden="true"
        className="ai-hub-btn__spark w-4 h-4 md:w-5 md:h-5 text-white"
      />
      <span className="ai-hub-btn__inner text-white bg-black px-3 py-[6px] md:px-4 md:py-[8px] rounded-full">
        Build with AI
      </span>
    </Link>
  );
};

export default CustomAIButton;
