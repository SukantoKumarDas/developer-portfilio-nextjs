'use client'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import CvDownload from "../cv-ddownload";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

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
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="w-full h-full p-2 flex flex-row justify-between items-center">
                <span className="text-white text-lg font-bold uppercase">Sukanto Kumar Das</span>
                <MenuIcon className="text-white" size={30}></MenuIcon>
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
                                    className={cn(`hover:text-lime-400 ${
                                        active === link.href ? "text-lime-400" : ""
                                    }`, "text-center")}
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
    );
}