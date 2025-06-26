'use client'
import Link from "next/link";
import { navLinks } from "@/lib/data";
import CvDownload from "../cv-ddownload";

type SidebarProps = {
  active: string;
  setActiveAction: (href: string) => void;
};

export default function Sidebar({ active, setActiveAction }: SidebarProps) {

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setActiveAction(href);
  };
  

  return (
    <div className="hidden md:block">
      <div className="fixed bg-stone-700 w-[300px] h-screen py-11 px-15 flex flex-col justify-between text-white font-bold">
        <div>
          <Link href="#home" onClick={() => setActiveAction("#home")} className="uppercase text-3xl"> Sukanto </Link>
        </div>

        <div className="flex flex-col gap-4 text-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) =>  handleLinkClick(e, link.href)}
              className={`hover:text-lime-400 ${
                active === link.href ? "text-lime-400" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-lg">
          <CvDownload></CvDownload>
        </div>
      </div>
    </div>
  );
}
