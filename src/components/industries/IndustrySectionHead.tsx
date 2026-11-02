import StarIcon from "@/components/common/StarIcon";
import {
  darkBody,
  darkEyebrow,
  darkInk,
  eyebrow as eyebrowClass,
  ink as inkClass,
  lede as ledeClass,
} from "@/components/industries/typography";

type IndustrySectionHeadProps = {
  title: string;
  description?: string;
  dark?: boolean;
  align?: "center" | "left";
  eyebrow?: string;
};

const IndustrySectionHead = ({
  title,
  description,
  dark = false,
  align = "center",
  eyebrow,
}: IndustrySectionHeadProps) => {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center" : "text-left max-w-3xl"}>
      {centered && (
        <div className="mb-1 flex items-center justify-center md:mb-2">
          <StarIcon size={40} color={dark ? "#ffffff" : "#161616"} />
        </div>
      )}
      {eyebrow && (
        <p className={`mb-2 ${dark ? darkEyebrow : eyebrowClass}`}>{eyebrow}</p>
      )}
      <h2
        className={`text-[28px] font-bold leading-tight tracking-tight md:text-[40px] ${dark ? darkInk : inkClass
          }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-lg font-normal leading-relaxed md:mt-4 md:text-xl ${centered ? "mx-auto xl:max-w-5xl" : ""
            } ${dark ? darkBody : ledeClass}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default IndustrySectionHead;
