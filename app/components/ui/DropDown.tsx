"use client";

import Menu from "../Menu";

interface DropDownProps {
  submenus: any[];
  dropdown: boolean;
  depthLevel: number;
}

export default function DropDown({
  submenus,
  dropdown,
  depthLevel,
}: DropDownProps) {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul className={`ml-5 lg:ml-0 dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <Menu items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
}
