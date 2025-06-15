import React from 'react';
import ServicesGrid from "@/app/components/ServicesGrid";

export function Services() {
    return (
        <section id="services" className="grid-cols-1 md:grid-cols-2 w-[90vw] mt-[8rem] m-auto">
            <div className="gap-[4rem]">
                <div className="flex bg-[#646DD2] rounded-md items-center px-4 py-2 mb-[1em] ">
                    <img className="w-40 h-40 object-cover rounded-full ml-auto mr-5" src="../../images/handshake.jpg" alt="profile-picture"/>
                    <p className="text-[1.8rem] text-white font-bold ">
                        Services
                    </p>
                </div>
            </div>
            <ServicesGrid/>
        </section>
    );
}
