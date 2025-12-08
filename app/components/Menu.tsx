"use client";

import { useEffect, useRef, useState } from "react";
import DropDown from "./ui/DropDown";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu({ items, depthLevel }: any) {
  const [dropdown, setDropdown] = useState(false);
  const pathname = usePathname();
  const ref = useRef<HTMLLIElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdown && ref.current && !ref.current.contains(e.target as Node)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mouseup", handler);
    return () => document.removeEventListener("mouseup", handler);
  }, [dropdown]);

  // Close dropdown on route change
  useEffect(() => {
    setDropdown(false);
  }, [pathname]);

  return (
    <li className="menu-items" ref={ref}>
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <p>{items.title}</p>
            {depthLevel > 0 ? <span> » </span> : <span className="arrow" />}
          </button>

          <DropDown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <Link className="ml-5 lg:ml-0" href={items.path}>
          {items.title}
        </Link>
      )}
    </li>
  );
}
