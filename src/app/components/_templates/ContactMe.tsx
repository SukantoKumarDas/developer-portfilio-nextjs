import { MailIcon } from "lucide-react";
import ContactForm from "../_form/ContactForm";
import Image from "next/image";
import Email from '@/../public/assets/logo/email.png'
import Phone from '@/../public/assets/logo/phone.png'

export default function ContactMe() {
    return (
        <div id="contact">
            <div className="px-2 sm:px-20 py-10 flex flex-col gap-10 items-center bg-[url('/assets/images/body-bg.jpg')]">
                <ContactForm></ContactForm>
                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-start gap-6">
                    <div className="flex flex-col items-center md:items-baseline">
                        <div className="flex flex-row items-center gap-2">
                            <Image alt="email" src={Email} height={24}></Image>
                            <h1 className="text-2xl font-bold">Email</h1>
                        </div>
                        <p className="text-nowrap">sukanto.k.das@gmail.com</p>
                    </div>
                    <div className="flex flex-col items-center md:items-baseline">
                        <div className="flex flex-row items-center gap-2">
                            <Image alt="email" src={Phone} height={24}></Image>
                            <h1 className="text-2xl font-bold">Phone</h1>
                        </div>
                        <p className="text-nowrap">+880-1797521254</p>
                    </div>
                    <div className="flex flex-col items-center md:items-baseline">
                        <div className="flex flex-row items-center gap-2">
                            <MailIcon className="text-lime-400 font-bold" size={24} />
                            <h1 className="text-2xl font-bold">Location</h1>
                        </div>
                        <p className="text-wrap">Flat-A1, Road-14, Block-A,</p>
                        <p className="text-wrap">Basundhara R/A, Dhaka</p>
                    </div>
                </div>
                <div className="w-full sm:w-2/3">
                    <h1 className="text-xl font-bold mb-4 text-center">My Location</h1>
                    <div className="border-1 border-gray-700">
                        <iframe width="100%" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=House-331,%20Road-14,%20Block-A,%20Basundhara%20R/A,%20Dhaka+(My%20Location)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.mapsdirections.info/calcular-la-población-en-un-mapa">Mapa de población interactivo</a>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}