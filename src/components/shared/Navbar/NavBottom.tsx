import React from "react";
import ServicesNav from "./Dropdowns/ServicesNav";
import SolutionsNav from "./Dropdowns/SolutionsNav";
import IndustriesNav from "./Dropdowns/IndustriesNav";
import CompanyNav from "./Dropdowns/CompanyNav";

interface NavBottomProps {
  type: string;
  closeNavBottom?: () => void;
}

const NavBottom: React.FC<NavBottomProps> = ({ type, closeNavBottom }) => {
  let ComponentToRender;

  switch (type) {
    case "Services":
      ComponentToRender = <ServicesNav closeNavBottom={closeNavBottom} />;
      break;
    case "Solutions":
      ComponentToRender = <SolutionsNav closeNavBottom={closeNavBottom} />;
      break;
    case "Industries":
      ComponentToRender = <IndustriesNav closeNavBottom={closeNavBottom} />;
      break;
    case "Company":
      ComponentToRender = <CompanyNav closeNavBottom={closeNavBottom} />;
      break;
    default:
      return null;
  }

  return (
    <div className="absolute left-0 top-[calc(var(--nav-height)-8px)] w-full z-50">
      <div className="min-[1280px]:container xl:mx-auto">
        <div className="bg-[#FFFFFF] shadow-xl rounded-lg! overflow-hidden">
          {ComponentToRender}
        </div>
      </div>
    </div>
  );
};

export default NavBottom;
