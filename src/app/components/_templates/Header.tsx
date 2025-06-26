import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from 'lucide-react'

export default async function Header() {
    return (
        <header className="fixed w-full bg-amber-50 dark:bg-amber-950 block border-b-1 border-indigo-500">
            <nav className="w-full">
                {/* for big screen */}
                <div className="hidden p-4 lg:flex row items-center justify-between">
                    <span className="text-3xl uppercase">Sukanto Kumar Das</span>
                    <div className="flex flex-row gap-4 items-center">
                        <Link className="uppercase" href="/">Home</Link>
                        <Link className="uppercase" href="/about">About</Link>
                        <Link className="uppercase" href="/contact">Contact</Link>
                        <ModeToggle></ModeToggle>
                    </div>
                </div>
                {/* for small screen */}
                <div className="lg:hidden p-4 flex flex-col gap-4">
                    <Sheet>
                        <SheetTrigger className="flex flex-row gap-2 items-center justify-start">
                            <MenuIcon></MenuIcon>
                            <span className="text-2xl uppercase">Sukanto Kumar Das</span>
                        </SheetTrigger>
                        <SheetContent>
                            <div className="mt-10 flex flex-col gap-4 items-center">
                                <Link className="uppercase border-b-4 border-black dark:border-white" href="/">Home</Link>
                                <Link className="uppercase border-b-4 border-black dark:border-white" href="/about">About</Link>
                                <Link className="uppercase border-b-4 border-black dark:border-white" href="/contact">Contact</Link>
                                <div className="flex flex-row gap-2 items-center">
                                    <ModeToggle></ModeToggle>
                                    <span className="border-b-4 border-black dark:border-white uppercase">Change Mode</span>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}