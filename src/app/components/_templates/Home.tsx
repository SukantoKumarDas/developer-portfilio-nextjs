import Image from "next/image";
import myImage from "@/../public/assets/images/MyImage.png"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Linkedin, MailIcon } from "lucide-react";

export default function Home() {
    return (
        <div id="home" className="px-5 sm:px-20 relative text-white font-bold sm:grid-cols-2 bg-[url('/assets/images/top-bg.jpg')] h-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="col-span-1">
                    <div className="mt-10 sm:mt-0 py-0 sm:py-50 flex flex-col justify-center items-center sm:items-start space-y-6">
                        <span className="text-xl sm:text-3xl text-lime-400 uppercase">Hello I&apos;m</span>
                        <h1 className="text-3xl sm:text-6xl mb-15">Sukanto Kumar Das</h1>
                        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-0 sm:gap-2">
                            <span className="text-xl">A Passionate</span>
                            <span className="text-4xl text-lime-400">Programmer</span>
                        </div>
                        <Button variant="outline" className="bg-transparent  hover:bg-transparent hover:border-lime-400 hover:text-lime-400 w-40">
                            <a href={"#contact"} className="text-xl font-bold">SAY HELLO !</a>
                        </Button>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="h-full flex justify-center sm:justify-end items-end">
                        <Image alt="My Image" src={myImage} height={400} width={400}></Image>
                    </div>
                </div>
            </div>
            <div className="invisible md:visible absolute right-20 top-20 flex flex-col gap-2">
                <Link href={""} className="border-1 border-lime-400 inline-block p-2 rounded-sm">
                    <MailIcon size={32}></MailIcon>
                </Link>
                <Link href={""} className="border-1 border-lime-400 inline-block p-2 rounded-sm">
                    <Linkedin size={32}></Linkedin>
                </Link>
                <Link href={""} className="border-1 border-lime-400 inline-block p-2 rounded-sm">
                    <Linkedin size={32}></Linkedin>
                </Link>
            </div>
        </div>
    );
}