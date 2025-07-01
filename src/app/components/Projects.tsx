import { Bookmark, BookMarkedIcon, Github, GithubIcon } from "lucide-react";

export default function Projects() {
    return (
        <div id="projects" className="py-10 lg:py-20 max-w-7xl mx-auto relative space-y-10 px-2">
            <div className="text-center space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    Projects
                </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="p-5 border hover:border-gray-300 hover:bg-indigo-500 shadow-lg rounded-lg transition-all duration-300">
                    <div className="flex gap-2 justify-between items-center mb-4">
                        <Bookmark className="text-blue-600" />
                        <h1 className="font-bold text-lg">URL Shortener</h1>
                        <Github className="cursor-pointer hover:text-gray-600" />
                    </div>
                    <div className="space-y-3">
                        <p className="text-gray-700 text-sm">
                            A comprehensive URL shortening application with user/admin authentication, 
                            custom short links, private URLs, and link expiration features.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">PHP</span>
                            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Laravel</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Bootstrap</span>
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Ajax</span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">MySQL</span>
                        </div>
                    </div>
                </div>

                <div className="p-5 border hover:border-gray-300 hover:bg-indigo-500 shadow-lg rounded-lg transition-all duration-300">
                    <div className="flex gap-2 justify-between items-center mb-4">
                        <BookMarkedIcon className="text-green-600" />
                        <h1 className="font-bold text-lg">SUST Library Management</h1>
                        <GithubIcon className="cursor-pointer hover:text-gray-600" />
                    </div>
                    <div className="space-y-3">
                        <p className="text-gray-700 text-sm">
                            A comprehensive library management system designed for book readers 
                            and library authorities to manage books and library operations.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">HTML</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">CSS</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">EJS</span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Node.js</span>
                            <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded">MongoDB</span>
                        </div>
                    </div>
                </div>

                <div className="p-5 border hover:border-gray-300 hover:bg-indigo-500 shadow-lg rounded-lg transition-all duration-300">
                    <div className="flex gap-2 justify-between items-center mb-4">
                        <BookMarkedIcon className="text-yellow-600" />
                        <h1 className="font-bold text-lg">Coin Rush Game</h1>
                        <GithubIcon className="cursor-pointer hover:text-gray-600" />
                    </div>
                    <div className="space-y-3">
                        <p className="text-gray-700 text-sm">
                            An interactive Java game where players move around the screen 
                            and increase their score by collecting coins.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Java</span>
                            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">FXGL Framework</span>
                        </div>
                    </div>
                </div>

                <div className="p-5 border hover:border-gray-300 hover:bg-indigo-500 shadow-lg rounded-lg transition-all duration-300">
                    <div className="flex gap-2 justify-between items-center mb-4">
                        <BookMarkedIcon className="text-indigo-600" />
                        <h1 className="font-bold text-lg">E-Commerce Site</h1>
                        <GithubIcon className="cursor-pointer hover:text-gray-600" />
                    </div>
                    <div className="space-y-3">
                        <p className="text-gray-700 text-sm">
                            A full-stack e-commerce platform that accommodates suppliers, 
                            buyers, and banking functionality for complete transaction management.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">JavaScript</span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Node.js</span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">Express</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React</span>
                            <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded">MongoDB</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">REST API</span>
                        </div>
                    </div>
                </div>

                <div className="p-5 border hover:border-gray-300 hover:bg-indigo-500 shadow-lg rounded-lg transition-all duration-300">
                    <div className="flex gap-2 justify-between items-center mb-4">
                        <BookMarkedIcon className="text-pink-600" />
                        <h1 className="font-bold text-lg">Bangla Number Recognition</h1>
                        <GithubIcon className="cursor-pointer hover:text-gray-600" />
                    </div>
                    <div className="space-y-3">
                        <p className="text-gray-700 text-sm">
                            A Convolutional Neural Network (CNN) model for predicting 
                            handwritten Bangla numbers using the Ekush Dataset.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">NumPy</span>
                            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Keras</span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Pandas</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">CNN</span>
                        </div>
                    </div>
                </div>

                <div className="p-5 border hover:border-gray-300 hover:bg-indigo-500 shadow-lg rounded-lg transition-all duration-300">
                    <div className="flex gap-2 justify-between items-center mb-4">
                        <BookMarkedIcon className="text-cyan-600" />
                        <h1 className="font-bold text-lg">Computer Graphics Project</h1>
                        <GithubIcon className="cursor-pointer hover:text-gray-600" />
                    </div>
                    <div className="space-y-3">
                        <p className="text-gray-700 text-sm">
                            An interactive graphics application featuring a moveable circle 
                            controlled by arrow keys with click-to-fill functionality.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">C++</span>
                            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">OpenGL</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );    
}