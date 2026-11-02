"use client";
import React, { useMemo } from "react";
import { solutionNavItems } from "../navGroups";
import { MobileNavList } from "./MobileNavList";

interface Props {
  closeMobileMenu?: () => void;
}

const SolutionsNavMobile: React.FC<Props> = ({ closeMobileMenu }) => {
  const items = useMemo(() => solutionNavItems(), []);

  return (
    <div className="mb-3">
      <MobileNavList items={items} onNavigate={closeMobileMenu} />
    </div>
  );
};

export default SolutionsNavMobile;
