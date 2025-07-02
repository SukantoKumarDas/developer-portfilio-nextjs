'use client';

import Link from 'next/link';
import { navLinks } from '@/lib/data';
import CvDownload from '../CvDownloadButton';
import CustomLink from '../CustomLink';
import { useEffect, useState } from 'react';

export default function NavbarLarge() {
    const [hash, setHash] = useState<string>('');
    
    useEffect(() => {
        const initialHash = window.location.hash || '#home';
        setHash(initialHash);
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = `#${entry.target.id}`;
                        setHash(sectionId);
                        
                        // Optionally update URL hash without scrolling
                        if (window.location.hash !== sectionId) {
                            history.replaceState(null, '', sectionId);
                        }
                    }
                });
            },
            {
                threshold: 0.5,
                rootMargin: '-20% 0px -20% 0px'
            }
        );
        // Observe all sections
        const sections = document.querySelectorAll('section[id], div[id]');
        sections.forEach((section) => observer.observe(section));
        const updateHash = () => {
            setHash(window.location.hash)
        }
        updateHash();
        window.addEventListener('hashchange', updateHash);
        return () => window.removeEventListener('hashchange', updateHash)
    }, []);

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
