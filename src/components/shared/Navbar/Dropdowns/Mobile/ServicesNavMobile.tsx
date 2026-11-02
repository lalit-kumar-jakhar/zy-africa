"use client";
import React, { useMemo } from "react";
import { serviceNavGroups } from "../navGroups";
import { MobileNavList } from "./MobileNavList";

interface Props {
  closeMobileMenu?: () => void;
}

const ServicesNavMobile: React.FC<Props> = ({ closeMobileMenu }) => {
  const groups = useMemo(() => serviceNavGroups(), []);

  return (
    <div className="mb-3">
      {groups.map((group) => (
        <MobileNavList
          key={group.label}
          heading={group.label}
          items={group.children}
          onNavigate={closeMobileMenu}
        />
      ))}
    </div>
  );
};

export default ServicesNavMobile;
