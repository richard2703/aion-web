import React from "react";
import NavLinks from "@/app/ui/pagelayout/nav-links";

export default function Header() {
  return (
    <nav className="flex items-center justify-between bg-opacity-0 text-white p-4">
      <div>
        <h1 className="text-3xl font-bold">logo</h1>
      </div>
      <div>
        <ul className="flex gap-4">
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
}
