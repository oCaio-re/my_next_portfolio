import React from 'react';
import ServicesGrid from "@/app/components/ServicesGrid";

export function Services() {
    return (
        <section id="services" className="grid-cols-1 lg:grid-cols-2 w-[90vw] mt-[8rem] m-auto md:mt-[15rem] lg:w-[70vw]">
            <img alt="bg-img-1" src="../../images/background/purple_s.png"
                 className="hidden absolute -z-50 h-200 w-200 -mt-[25rem] ml-[10rem] scale-130 lg:block"
            />
            <img alt="bg-img-1" src="../../images/background/yellow_s.png"
                 className="hidden absolute -z-50 h-120 w-120 -mt-[20rem] ml-[0rem] scale-130 lg:block"
            />
            <div className="gap-[4rem] lg:mb-[10rem]">
                <div className="flex bg-[#646DD2] rounded-lg items-center px-4 py-2 mb-[1em]
                lg:flex-row lg:w-[50vw] lg:rounded-4xl lg:mt-[15rem] lg:mx-auto">

                    <img className="w-40 h-40 object-cover rounded-full ml-auto mr-5 lg:mr-8" src="../../images/handshake.jpg" alt="profile-picture"/>
                    <p className="text-[1.8rem] text-white font-bold lg:text-[4rem] lg:mr-auto">
                        Services
                    </p>
                </div>
            </div>
            <ServicesGrid/>
            <img alt="bg-img-1" src="../../images/background/blue_s.png"
                 className="hidden absolute -z-50 h-150 w-150 -mt-[35rem] ml-[40rem] scale-130 lg:block opacity-70"
            />
        </section>
    );
}
