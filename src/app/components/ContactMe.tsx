import ContactForm from './_form/ContactForm';
import Image from 'next/image';
import Email from '@/../public/assets/logo/email.png';
import Phone from '@/../public/assets/logo/phone.png';
import Location from '@/../public/assets/logo/location.png';

export default function ContactMe() {
    return (
        <div id="contact" className="py-16 max-w-6xl mx-auto px-4 scroll-mt-[44px] lg:scroll-mt-[68px]">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-center text-gray-800">Contact Me</h1>
                <p className="text-gray-600">
                    I am always open to collaborate
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <ContactForm />
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                        Contact Information
                    </h2>
                    
                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row md:items-center gap-4 border-l-4 border-blue-500 pl-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                                    <Image alt="email" src={Email} height={24} width={24} />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">Email</h3>
                                <p className="text-gray-600">sukanto.k.das@gmail.com</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-center gap-4 border-l-4 border-green-500 pl-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                                    <Image alt="phone" src={Phone} height={24} width={24} />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">Phone</h3>
                                <p className="text-gray-600">+880-1797521254</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:items-start gap-4 border-l-4 border-purple-500 pl-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                                    <Image alt="location" src={Location} height={24} width={24} />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">Location</h3>
                                <div className="text-gray-600">
                                    <p>Flat-A1, Road-14, Block-A,</p>
                                    <p>Basundhara R/A, Dhaka</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}