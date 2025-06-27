'use client';
import { useState } from 'react';
import Navbar from './NavbarSmall';
import NavbarLarge from './NavbarLarge';

export default function Header() {
    const [active, setActiveAction] = useState('#home');
    return (
        <div className="bg-black fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto">
                <div className="hidden lg:block">
                    <NavbarLarge active={active} setActiveAction={setActiveAction}></NavbarLarge>
                </div>
                <div className="block lg:hidden">
                    <Navbar active={active} setActiveAction={setActiveAction}></Navbar>
                </div>
            </div>
        </div>
    );
}
