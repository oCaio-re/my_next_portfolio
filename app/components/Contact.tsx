import React from 'react';
import ContactForm from "@/app/components/ContactForm";
import ContactDetails from "@/app/components/ContactDetails";

export function ContactMe() {
    return (
        <section id="contact" className="w-[90vw] mt-[8rem] mx-auto">
            <div className="flex bg-[#646DD2] rounded-md items-center px-4 py-2 mb-[1em] ">
                <img className="w-40 h-40 object-cover rounded-full ml-auto mr-5" src="../../images/using-pc.jpg" alt="profile-picture"/>
                <p className="text-[1.5rem] text-white font-bold ">
                    Get In Touch
                </p>
            </div>
            <ContactDetails />
            <ContactForm/>
        </section>
    );
}
