import Image from "next/image";
import uniLogo from '@/../public/assets/images/uni.png';
import collegeLogo from '@/../public/assets/images/college.png';
import schoolLogo from '@/../public/assets/images/school.png';

export default function Experience() {
    return (
        <div id="work-experience" className="py-16 max-w-4xl mx-auto px-4">
            <h1 className="mb-12 text-4xl font-bold text-center text-gray-800">Experience</h1>
            
            <div className="space-y-12">
                {/* Current Position */}
                <div className="flex flex-col md:flex-row md:items-start gap-6 border-l-4 border-blue-500 pl-6">
                    <div className="flex-shrink-0 mx-auto md:mx-0">
                        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center">
                            <Image alt="CodeLab FZC LLC logo" src={uniLogo} width={50} height={50} className="rounded-full" />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Programmer</h2>
                        <p className="text-blue-600 font-semibold text-lg mb-1">CodeLab FZC LLC</p>
                        <p className="text-gray-500 mb-4">May 2024 - Present</p>
                        <ul className="text-gray-700 space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                <span>Automated data processing using Google Sheets API integration</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                <span>Implemented crypto trading strategies in automated trading bot systems</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Previous Position */}
                <div className="flex flex-col md:flex-row md:items-start gap-6 border-l-4 border-gray-300 pl-6">
                    <div className="flex-shrink-0 mx-auto md:mx-0">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                            <Image alt="CodeLab FZC LLC logo" src={uniLogo} width={50} height={50} className="rounded-full" />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Junior Programmer</h2>
                        <p className="text-gray-600 font-semibold text-lg mb-1">CodeLab FZC LLC</p>
                        <p className="text-gray-500 mb-4">June 2023 - February 2024</p>
                        <ul className="text-gray-700 space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="w-3 h-3 bg-gray-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                <span>Contributed to developing an e-commerce web application</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-3 h-3 bg-gray-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                <span>Implemented online exam system in an e-learning platform</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-3 h-3 bg-gray-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                <span>Worked on legacy codebase for business logic implementation</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-3 h-3 bg-gray-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                <span>Implemented crypto arbitrage strategies in trading bot systems</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}