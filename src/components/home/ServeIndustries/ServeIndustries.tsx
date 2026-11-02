import StarIcon from "@/components/common/StarIcon";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/components/shared/Navbar/Dropdowns/categories";
import { isIndustryLive } from "@/constants/feature-flags";
import styles from "./industries.module.css";
const fagGridDotsBgImage = "/static/assets/home/faq/grid-dots.svg";

const industries = categories.Industries;

interface ServeIndustriesProps {
  title?: string;
}

const ServeIndustries: React.FC<ServeIndustriesProps> = ({
  title = "Industries We Cater To",
}) => {
  return (
    <div
      className="bg-[#F9F9F9]"
      style={{
        backgroundImage: `url(${fagGridDotsBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 md:py-[76px] py-[22px]">
        <div className="text-center mx-auto mb-8">
          <div className="flex justify-center items-center mb-1 md:mb-2">
            <StarIcon size={40} color="#000000" />
          </div>
          <h2 className="text-[30px] md:text-[40px] font-bold text-[#000000]">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {industries.map((industry) => {
            const cardClass = `${styles.cardHoverEffect} group flex flex-col items-center justify-center p-6 bg-white rounded-lg transition-all duration-500 hover:text-white`;
            const body = (
              <>
                <div className=" p-4 bg-[#F9F9F9] rounded-full mb-3 md:mb-4 shadow-sm transition-all duration-500 group-hover:bg-white group-hover:scale-125 group-hover:rotate-[-7deg]">
                  <Image
                    src={industry.icon}
                    alt={industry.shortLabel}
                    width={48}
                    height={48}
                    sizes="48px"
                    loading="lazy"
                    decoding="async"
                    className="object-contain"
                  />
                </div>
                <p className="text-[12px] md:text-sm lg:text-[14px] font-normal text-[#000000] group-hover:text-white text-center leading-tight transition-colors duration-500">
                  {industry.shortLabel}
                </p>
              </>
            );

            return isIndustryLive(industry.url) ? (
              <Link key={industry.url} href={industry.url} className={cardClass}>
                {body}
              </Link>
            ) : (
              <div key={industry.url} className={cardClass}>
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServeIndustries;
