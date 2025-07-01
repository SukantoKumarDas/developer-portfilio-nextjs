'use client';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import CvDownload from '../CvDownloadButton';
import { navLinks } from '@/lib/data';
import CustomLink from '../CustomLink';


export default function NavbarSmall() {
    const [isOpen, setIsOpen] = useState(false);

    const [hash, setHash] = useState<string>('');
        
    useEffect(() => {
        const updateHash = () => {
            setHash(window.location.hash)
            setIsOpen(false)
        }
        updateHash()
        window.addEventListener('hashchange', updateHash)

        return () => window.removeEventListener('hashchange', updateHash)
    }, [])

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
                            {navLinks.map(link => (
                                <CustomLink
                                    key={link.href}
                                    link={link.href}
                                    active={hash}
                                    label={link.label}
                                ></CustomLink>
                            ))}
                            <CvDownload />
                        </div>
                    </SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
