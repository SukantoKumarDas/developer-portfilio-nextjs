import Image from 'next/image';
import uniLogo from '@/../public/assets/images/uni.png';
import collegeLogo from '@/../public/assets/images/college.png';
import schoolLogo from '@/../public/assets/images/school.png';

export default function Education() {
    const education = [
        {
            logo: uniLogo,
            institution: "Shahjalal University of Science and Technology",
            degree: "B. Sc. in Computer Science and Engineering",
            period: "January 2018 - June 2023",
            grade: "C.G.P.A. 3.52 out of 4",
            description: "Acquired fundamental knowledge on Structured Programming Language, Data Structure, Algorithms, Object Oriented Programming, Computer Security, Machine Learning, Artificial Intelligence, Human Computer Intelligence, BioInformatics"
        },
        {
            logo: collegeLogo,
            institution: "Khulna Public College",
            degree: "Higher Secondary School Certificate",
            period: "July 2015 - June 2017",
            grade: "G.P.A. 4.50 out of 5"
        },
        {
            logo: schoolLogo,
            institution: "Saint Joseph's High School",
            degree: "Secondary School Certificate",
            period: "January 2013 - June 2015",
            grade: "G.P.A. 5.00 out of 5"
        }
    ];

    return (
        <div id="education" className="py-16 lg:py-24 bg-zinc-50">
            <div className="max-w-6xl mx-auto px-4 lg:px-8">
                
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
                    Education Background
                </h2>

                {/* Education Items */}
                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
                            
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <Image 
                                    alt={`${edu.institution} logo`} 
                                    src={edu.logo} 
                                    width={120} 
                                    height={120}
                                    className="rounded-lg"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center lg:text-left space-y-3">
                                <h3 className="text-3xl font-bold text-gray-900">
                                    {edu.institution}
                                </h3>
                                <p className="text-lg font-semibold text-gray-600">
                                    {edu.degree}
                                </p>
                                <p className="text-gray-500">
                                    {edu.period}
                                </p>
                                <p className="text-lg text-indigo-600 font-semibold">
                                    {edu.grade}
                                </p>
                                {edu.description && (
                                    <div className="pt-2">
                                        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                            <li>{edu.description}</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}