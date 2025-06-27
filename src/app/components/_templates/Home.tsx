import Image from "next/image";
import myImage from "@/../public/assets/images/MyImage.png"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GithubIcon, Linkedin, MailIcon } from "lucide-react";

export default function Home() {
    return (
        <div id="home" className="text-white font-bold bg-[url('/assets/images/top-bg.jpg')] h-auto">
            <div className="max-w-7xl mx-auto relative">
                <div className="px-2 lg:px-8 py-10 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
                    <div className="col-span-1">
                        <div className="py-0 lg:py-50 flex flex-col justify-center items-center lg:items-start gap-6">
                            <span className="text-3xl sm:text-5xl text-lime-400">Hello I&apos;m</span>
                            <h1 className="text-3xl lg:text-5xl mb-0 lg:mb-10 uppercase">Sukanto Kumar Das</h1>
                            <div className="flex flex-col sm:flex-row items-center lg:items-end gap-0 lg:gap-2 mb-0 lg:mb-10">
                                <span className="text-xl">A Passionate</span>
                                <span className="text-4xl text-lime-400">Programmer</span>
                            </div>
                            <div className="flex flex-wrap justify-center items-center gap-6">
                                <div className="px-4 py-2 border border-lime-400 rounded-md text-center transition-all duration-150 hover:scale-105">
                                    <h3 className="text-2xl text-lime-400 font-bold">10+</h3>
                                    <p className="text-sm">Projects Completed</p>
                                </div>
                                <div className="px-4 py-2 border border-lime-400 rounded-md text-center transition-all duration-150 hover:scale-105">
                                    <h3 className="text-2xl text-lime-400 font-bold">2+</h3>
                                    <p className="text-sm">Years Experience</p>
                                </div>
                                <div className="px-4 py-2 border border-lime-400 rounded-md text-center transition-all duration-150 hover:scale-105">
                                    <h3 className="text-2xl text-lime-400 font-bold">12+</h3>
                                    <p className="text-sm">Technology Mastered</p>
                                </div>
                            </div>

                            <Button variant="outline" className="bg-transparent  hover:bg-transparent hover:border-lime-400 hover:text-lime-400 w-40 transition-all duration-150 hover:scale-105">
                                <a href={"#contact"} className="text-xl font-bold">SAY HELLO !</a>
                            </Button>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="h-full flex flex-col gap-10 justify-center items-center lg:items-end">
                            <Image alt="My Image" src={myImage} height={400} width={400} className="border-4 border-lime-400 rounded-full object-cover "></Image>
                                
                            <div className="w-100 flex flex-row justify-center items-center gap-10">
                                <Link href={""} className="border-1 border-lime-400 inline-block p-2 rounded-sm transition-all duration-150 hover:scale-105">
                                    <MailIcon size={32}></MailIcon>
                                </Link>
                                <Link href={""} className="border-1 border-lime-400 inline-block p-2 rounded-sm transition-all duration-150 hover:scale-105">
                                    <Linkedin size={32}></Linkedin>
                                </Link>
                                <Link href={""} className="border-1 border-lime-400 inline-block p-2 rounded-sm transition-all duration-150 hover:scale-105">
                                    <GithubIcon size={32}></GithubIcon>
                                </Link>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}