'use client'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import CvDownload from "../cv-ddownload";
import { navLinks } from "@/lib/data";

type SidebarProps = {
  active: string;
  setActiveAction: (href: string) => void;
};

export default function Navbar({ active, setActiveAction }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Prevent default anchor behavior
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
        setActiveAction(href);
        setIsOpen(false);
    };
    
    return (
        <div className="block md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger className="w-full h-full bg-stone-700 p-1 flex flex-row-reverse gap-5 items-center">
                    <MenuIcon className="text-white" size={30}></MenuIcon>
                    <CvDownload></CvDownload>
                </SheetTrigger>
                <SheetContent side="left" className="bg-stone-900 text-white">
                    <SheetHeader>
                        <SheetTitle className="mt-10 text-white">
                            <div className="flex flex-col gap-4 text-lg">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link.href)}
                                        className={`hover:text-lime-400 ${
                                            active === link.href ? "text-lime-400" : ""
                                        }`}
                                        >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </SheetTitle>
                        <SheetDescription>
                        
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
}