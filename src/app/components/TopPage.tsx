import Image from 'next/image';
import myImage from '@/../public/assets/images/school.png';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GithubIcon, Linkedin, MailIcon, Sparkles } from 'lucide-react';
import { Profile } from '@/lib/data';

export default function TopPage() {
    return (
        <div
            id="home"
            className="text-white font-bold bg-gradient-to-br from-zinc-800 to-zinc-900 scroll-mt-[44px] lg:scroll-mt-[68px]"
        >
            <div className="max-w-7xl mx-auto">
                <div className="px-4 lg:px-8 py-5 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">
                    
                    {/* Left Column */}
                    <div className="space-y-8 text-center lg:text-left">
                        
                        {/* Greeting */}
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <Sparkles className="text-indigo-400" size={20} />
                            <span className="text-xl sm:text-2xl text-indigo-400 font-normal">
                                Hello, I&apos;m
                            </span>
                        </div>

                        {/* Name - More prominent */}
                        <h1 className="text-4xl lg:text-6xl font-black uppercase leading-tight">
                            {Profile.name}
                        </h1>

                        {/* Role */}
                        <div className="text-xl lg:text-2xl">
                            <span className="text-gray-300 font-normal">A Passionate </span>
                            <span className="text-indigo-500 font-bold">{Profile.title}</span>
                        </div>

                        {/* Description - Shorter and punchier */}
                        <p className="text-gray-400 text-lg font-normal max-w-md mx-auto lg:mx-0">
                            {Profile.description}
                        </p>

                        {/* Stats - Simplified */}
                        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                            {[
                                { number: "10+", label: ["Projects", " Completed"] },
                                { number: "2+", label: ["Years", " Experience"] },
                                { number: "12+", label: ["Technologies", " Mastered"] },
                            ].map((stat, index) => (
                                <div key={index} className="text-center p-4 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-indigo-400/50 hover:scale-105 transition-colors">
                                    <h3 className="text-2xl text-indigo-400 font-bold mb-1">
                                        {stat.number}
                                    </h3>
                                    <p className="text-sm text-gray-300 leading-tight">
                                        {stat.label[0]}
                                    </p>
                                    <p className="text-sm text-gray-300 leading-tight">
                                        {stat.label[1]}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button - Cleaner */}
                        <div className="pt-4">
                            <Button
                                variant="outline"
                                className="border-2 bg-transparent border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-black px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200"
                            >
                                <a href={'#contact'}>
                                    Let&apos;s Connect
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col items-center lg:items-end gap-8">
                        
                        {/* Profile Image - Cleaner */}
                        <div className="relative">
                            <Image
                                alt="Sukanto Kumar Das"
                                src={myImage}
                                height={380}
                                width={380}
                                className="border-3 [radial-gradient(circle,indigo-400, indigo-300)] border-indigo-400 rounded-full object-cover hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>

                        {/* Social Links - Simplified */}
                        <div className="w-auto lg:w-95 flex gap-4 justify-center">
                            <Link
                                href={Profile.socialLinks.email}
                                className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-indigo-400 hover:text-indigo-400 transition-all duration-200"
                                aria-label="Email"
                            >
                                <MailIcon size={24} />
                            </Link>
                            <Link
                                href={Profile.socialLinks.linkedin}
                                className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-indigo-400 hover:text-indigo-400 transition-all duration-200"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={24} />
                            </Link>
                            <Link
                                href={Profile.socialLinks.github}
                                className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-indigo-400 hover:text-indigo-400 transition-all duration-200"
                                aria-label="GitHub"
                            >
                                <GithubIcon size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}