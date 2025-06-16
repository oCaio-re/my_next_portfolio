import React from 'react';
import ServicesGrid from "@/app/components/ServicesGrid";

export function Services() {
    return (
        <section id="services" className="grid-cols-1 md:grid-cols-2 w-[90vw] mt-[8rem] m-auto md:w-[70vw]">
            <div className="gap-[4rem] md:mb-[10rem]">
                <div className="flex bg-[#646DD2] rounded-md items-center px-4 py-2 mb-[1em]
                md:flex-row md:w-[50vw] md:rounded-4xl md:mt-[15rem] md:mx-auto">
                    <img className="w-40 h-40 object-cover rounded-full ml-auto mr-5 md:mr-8" src="../../images/handshake.jpg" alt="profile-picture"/>
                    <p className="text-[1.8rem] text-white font-bold md:text-[4rem] md:mr-auto">
                        Services
                    </p>
                </div>
            </div>
            <ServicesGrid/>
        </section>
    );
}
