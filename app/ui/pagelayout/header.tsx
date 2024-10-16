import React from "react";
import NavLinks from "@/app/ui/pagelayout/nav-links";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-between bg-opacity-0 text-primary p-4">
      <div className="z-10">
        <Link key="Home" href="/" className="justify-start">
          <Image
            src="/nutriton_white.png"
            alt="logo"
            width={100}
            height={100}
            className="mx-2 z-10"
          />
        </Link>
      </div>
      <div className="z-10">
        <ul className="flex gap-4">
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
}
