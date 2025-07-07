import { Profile } from "@/lib/data";
import { techColorsTyoe } from "@/lib/types";
import { BookMarkedIcon, ExternalLinkIcon, Github, GithubIcon } from "lucide-react";
import Link from "next/link";

export default function Projects() {
    // Define your GitHub links for each project
    const projects = [
        {
            name: "URL Shortener",
            description: "A comprehensive URL shortening application with user/admin authentication, custom short links, private URLs, and link expiration features.",
            technologies: ["PHP", "Laravel", "Bootstrap", "Ajax", "MySQL"],
            githubUrl: "https://github.com/SukantoKumarDas/URL-Shortener-Application",
            icon: Github
        },
        {
            name: "SUST Library Management",
            description: "A comprehensive library management system designed for book readers and library authorities to manage books and library operations.",
            technologies: ["HTML", "CSS", "EJS", "Node.js", "MongoDB"],
            githubUrl: "https://github.com/SukantoKumarDas/Library-Management-third-year-project-",
            icon: GithubIcon
        },
        {
            name: "Coin Rush Game",
            description: "An interactive Java game where players move around the screen and increase their score by collecting coins.",
            technologies: ["Java", "FXGL Framework"],
            githubUrl: "https://github.com/SukantoKumarDas/CoinRush-Java-project-2nd-year",
            icon: GithubIcon
        },
        {
            name: "E-Commerce Site",
            description: "A full-stack e-commerce platform that accommodates suppliers, buyers, and banking functionality for complete transaction management.",
            technologies: ["JavaScript", "Node.js", "Express", "React", "MongoDB", "REST API"],
            githubUrl: "https://github.com/SukantoKumarDas/E-Commerce-Site",
            icon: GithubIcon
        },
        {
            name: "Bangla Number Recognition",
            description: "A Convolutional Neural Network (CNN) model for predicting handwritten Bangla numbers using the Ekush Dataset.",
            technologies: ["NumPy", "Keras", "Pandas", "CNN"],
            githubUrl: "https://github.com/SukantoKumarDas/Handwritten-Bangla-Number-Recognition-OCR",
            icon: GithubIcon
        },
        {
            name: "Computer Graphics Project",
            description: "An interactive graphics application featuring a moveable circle controlled by arrow keys with click-to-fill functionality.",
            technologies: ["C++", "OpenGL"],
            githubUrl: "https://github.com/SukantoKumarDas/Computer-Graphics-Project-Using-Opengl-c-",
            icon: GithubIcon
        }
    ];

    const techColors: techColorsTyoe = {
        "PHP": "bg-blue-100 text-blue-800",
        "Laravel": "bg-red-100 text-red-800",
        "Bootstrap": "bg-purple-100 text-purple-800",
        "Ajax": "bg-yellow-100 text-yellow-800",
        "MySQL": "bg-green-100 text-green-800",
        "HTML": "bg-orange-100 text-orange-800",
        "CSS": "bg-blue-100 text-blue-800",
        "EJS": "bg-purple-100 text-purple-800",
        "Node.js": "bg-green-100 text-green-800",
        "MongoDB": "bg-emerald-100 text-emerald-800",
        "Java": "bg-orange-100 text-orange-800",
        "FXGL Framework": "bg-red-100 text-red-800",
        "JavaScript": "bg-yellow-100 text-yellow-800",
        "Express": "bg-gray-100 text-gray-800",
        "React": "bg-blue-100 text-blue-800",
        "REST API": "bg-purple-100 text-purple-800",
        "NumPy": "bg-blue-100 text-blue-800",
        "Keras": "bg-red-100 text-red-800",
        "Pandas": "bg-green-100 text-green-800",
        "CNN": "bg-purple-100 text-purple-800",
        "C++": "bg-blue-100 text-blue-800",
        "OpenGL": "bg-red-100 text-red-800"
    };

    return (
        <div id="projects" className="py-10 lg:py-20 max-w-7xl mx-auto relative space-y-10 px-8 scroll-mt-[44px] lg:scroll-mt-[68px]">
            <h1 className="mb-12 text-4xl font-bold text-center text-gray-800">Projects</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {projects.map((project, index) => {
                    const IconComponent = project.icon;
                    return (
                        <Link 
                            key={index}
                            href={project.githubUrl}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block p-5 border hover:border-gray-300 hover:bg-indigo-100 shadow-lg rounded-lg transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex gap-2 justify-between items-center mb-4">
                                <BookMarkedIcon className="text-gray-600" />
                                <h1 className="font-bold text-lg">{project.name}</h1>
                                <IconComponent className="text-gray-600" />
                            </div>
                            <div className="space-y-3">
                                <p className="text-gray-700 text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span 
                                            key={index}
                                            className={`px-2 py-1 text-xs rounded ${techColors[tech] || 'bg-gray-100 text-gray-800'}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <div className="flex flex-row justify-center">
                <Link href={Profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-fit px-6 py-2 flex flex-row gap-2 bg-indigo-300 hover:bg-indigo-400 rounded-sm">
                    <ExternalLinkIcon></ExternalLinkIcon>
                    <span>view more on github</span>
                </Link>
            </div>
        </div>
    );    
}