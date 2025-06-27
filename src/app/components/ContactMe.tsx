import ContactForm from './_form/ContactForm';
import Image from 'next/image';
import Email from '@/../public/assets/logo/email.png';
import Phone from '@/../public/assets/logo/phone.png';
import Location from '@/../public/assets/logo/location.png';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactMe() {
    return (
        <div id="contact">
            <div className="py-10 lg:py-20 max-w-7xl mx-auto relative space-y-10">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl lg:text-5xl font-bold text-center">Contact Me</h1>
                    <span className="text-baese lg:text-lg text-center italic">
                        I am always opne to collaborate
                    </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-2">
                    <div className="grid-cols-1">
                        <ContactForm></ContactForm>
                    </div>
                    <div className="grid-cols-1">
                        <Card>
                            <CardContent>
                                <div className="flex flex-col justify-center items-center gap-6">
                                    <h1 className="w-full text-3xl font-bold text-center">
                                        Contact Information
                                    </h1>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-row items-center gap-2">
                                            <Image alt="email" src={Email} height={24}></Image>
                                            <h1 className="text-2xl font-bold">Email</h1>
                                        </div>
                                        <p className="text-nowrap">sukanto.k.das@gmail.com</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-row items-center gap-2">
                                            <Image alt="email" src={Phone} height={24}></Image>
                                            <h1 className="text-2xl font-bold">Phone</h1>
                                        </div>
                                        <p className="text-nowrap">+880-1797521254</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex flex-row items-center gap-2">
                                            <Image alt="email" src={Location} height={24}></Image>
                                            <h1 className="text-2xl font-bold">Location</h1>
                                        </div>
                                        <p className="text-wrap">Flat-A1, Road-14, Block-A,</p>
                                        <p className="text-wrap">Basundhara R/A, Dhaka</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                {/* <div className="p-4 flex flex-row justify-center items-center">
                    <div className="w-full sm:w-2/3 border-1 border-gray-700">
                        <iframe width="100%" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=House-331,%20Road-14,%20Block-A,%20Basundhara%20R/A,%20Dhaka+(My%20Location)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.mapsdirections.info/calcular-la-población-en-un-mapa">Mapa de población interactivo</a>
                        </iframe>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
