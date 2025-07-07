import React from 'react';
import { Code, Database, Settings, Layers } from 'lucide-react';
import { Profile } from '@/lib/data';

export default function Skills() {
    const skillsData = {
        "Programming Languages": {
            icon: <Code className="w-6 h-6" />,
            skills: Profile.programmingLanguages,
            color: "from-blue-500 to-purple-600"
        },
        "Frameworks/Libraries": {
            icon: <Layers className="w-6 h-6" />,
            skills: Profile.frameworksLibraries,
            color: "from-green-500 to-teal-600"
        },
        "Database": {
            icon: <Database className="w-6 h-6" />,
            skills: Profile.debuggers,
            color: "from-orange-500 to-red-600"
        },
        "Developer Tools": {
            icon: <Settings className="w-6 h-6" />,
            skills: Profile.developerTools,
            color: "from-purple-500 to-pink-600"
        }
    };

    return (
        <div id="skills" className="py-16 max-w-7xl mx-auto px-8 scroll-mt-[44px] lg:scroll-mt-[68px]">
            <h1 className="mb-12 text-4xl font-bold text-center text-gray-800">Technical Skills</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(skillsData).map(([category, data]) => (
                    <div 
                        key={category}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${data.color} text-white`}>
                                {data.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">
                                {category}
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {data.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <span className="text-sm text-gray-500 font-medium">
                                {data.skills.length} {data.skills.length === 1 ? 'Technology' : 'Technologies'}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}