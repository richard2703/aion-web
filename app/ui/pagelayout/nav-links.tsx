"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Desarrollo", href: "/development" },
  { name: "Nosotros", href: "/about" },
  { name: "Tecnología", href: "/technology" },
  { name: "Contácto", href: "/contact" },
  { name: "Noticias", href: "/news" },
  { name: "FAQ'S", href: "/faq" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex h-[48px] grow items-center justify-center", {
              "underline decoration-solid": pathname === link.href,
            })}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
