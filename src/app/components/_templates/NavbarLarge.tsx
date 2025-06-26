"use client";

import Link from "next/link";
import { navLinks } from "@/lib/data";
import CvDownload from "../cv-ddownload";
import { cn } from "@/lib/utils";

type NavbarProps = {
  active: string;
  setActiveAction: (href: string) => void;
};

export default function NavbarLarge({ active, setActiveAction }: NavbarProps) {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setActiveAction(href);
  };

  return (
    <div className="left-0 w-full py-4 px-8 flex justify-between items-center text-white font-bold z-50 shadow-md">
      {/* Logo */}
      <Link
        href="#home"
        onClick={() => setActiveAction("#home")}
        className="uppercase text-2xl"
      >
        Sukanto Kumar Das
      </Link>

      {/* Nav Links */}
      <div className="flex gap-6 text-lg">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className={cn(
              `hover:text-lime-400 ${
                active === link.href ? "text-lime-400" : ""
              }`,
              "text-base"
            )}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CV Download */}
      <div className="text-lg">
        <CvDownload />
      </div>
    </div>
  );
}
