'use client';

import Link from 'next/link';
import { navLinks } from '@/lib/data';
import CvDownload from '../CvDownloadButton';
import CustomLink from '../CustomLink';
import { useEffect, useState } from 'react';

export default function NavbarLarge() {
    const [hash, setHash] = useState<string>('');
    
    useEffect(() => {
        const updateHash = () => {
            setHash(window.location.hash)
        }

        // Get the hash on initial render
        updateHash()

        // Update hash when it changes (e.g. when navigating)
        window.addEventListener('hashchange', updateHash)

        return () => window.removeEventListener('hashchange', updateHash)
    }, [])

    return (
        <div className="left-0 w-full py-4 px-8 flex justify-between items-center text-white font-bold z-50 shadow-md">
            {/* Logo */}
            <Link
                href="#home"
                className="uppercase text-2xl"
            >
                Sukanto Kumar Das
            </Link>

            {/* Nav Links */}
            <div className="flex gap-6 text-lg">
                {navLinks.map(link => (
                    <CustomLink
                        key={link.href}
                        link={link.href}
                        active={hash}
                        label={link.label}
                    ></CustomLink>
                ))}
            </div>

            {/* CV Download */}
            <div className="text-lg">
                <CvDownload />
            </div>
        </div>
    );
}
