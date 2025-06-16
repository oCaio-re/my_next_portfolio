import React from 'react';
import ContactForm from "@/app/components/ContactForm";
import ContactDetails from "@/app/components/ContactDetails";

export function ContactMe() {
    return (
        <section id="contact" className="relative w-[90vw] mt-[8rem] mx-auto">
            {/*<img alt="bg-img-1" src="../../images/background/blue_s.png"*/}
            {/*     className="absolute -z-5 top-0 left-0  -mt-[12rem] -ml-[4rem]"*/}
            {/*/>*/}
            <img alt="bg-img-1" src="../../images/background/purple_s.png"
                 className="absolute -z-5 top-0 left-0  mt-[4rem] ml-[5rem]"
            />
            <div className="flex bg-[#646DD2] rounded-md items-center px-4 py-2 mb-[1em] ">
                <img className="w-40 h-40 object-cover rounded-full ml-auto mr-5" src="../../images/using-pc.jpg" alt="profile-picture"/>
                <p className="text-[1.5rem] text-white font-bold ">
                    Get In Touch
                </p>
            </div>
            <ContactDetails />
            <img alt="bg-img-1" src="../../images/background/yellow_and_purple_b.png"
                 className="absolute -z-5 top-0 left-0 w-auto h-auto min-w-full min-h-full object-cover scale-125 mt-[5rem] opacity-80"
            />
            <ContactForm/>
        </section>
    );
}
