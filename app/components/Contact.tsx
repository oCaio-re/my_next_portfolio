import React from 'react';
import ContactForm from "@/app/components/ContactForm";
import ContactDetails from "@/app/components/ContactDetails";

export function ContactMe() {
    return (
        <section id="contact" className="relative w-[90vw] mt-[8rem] mx-auto md:mt-[15rem] lg:w-[70vw] lg:mt-[20rem]">
            <img alt="bg-img-1" src="../../images/background/purple_s.png"
                 className="absolute -z-5 top-0 left-0 mt-[4rem] ml-[5rem] lg:ml-[40rem] lg:mt-[-10rem]"
            />
            <div className="flex bg-[#646DD2] rounded-lg items-center px-4 py-2 mb-[1em] lg:w-[60%] lg:rounded-4xl">
                <img className="w-40 h-40 object-cover rounded-full ml-auto mr-5 " src="../../images/using-pc.jpg" alt="profile-picture"/>
                <p className="text-[1.5rem] text-white font-bold lg:text-[4rem] lg:mr-auto">
                    Get In Touch
                </p>
            </div>
            <ContactDetails />
            <img alt="bg-img-1" src="../../images/background/yellow_and_purple_b.png"
                 className="absolute -z-5 top-0 left-0 w-auto h-auto min-w-full min-h-full object-cover scale-125
                 mt-[5rem] opacity-80"
            />
            <ContactForm/>
        </section>
    );
}
