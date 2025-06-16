'use client'
import React, {useState} from 'react';

export function Home() {
    const [, setIsOpen] = useState(false);
    const scrollToSection = (sectionId: string) => {
        setIsOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section id="home" className="relative bg-[#646DD2] h-[100vh]">
            <img src="../../images/wave%20(2).svg" alt="wave-svg"
                 className="-scale-y-100 overflow-hidden absolute
                  z-5 top-0 left-0 w-auto h-auto min-w-full min-h-full object-cover scale-100" />
            <div className="top-0 -scale-y-100 object-cover w-[200rem] overflow-hidden "/>
            <div className="relative grid-cols-1 md:grid-cols-2 w-[95vw] mt-[10rem] mx-auto flex flex-col z-50 drop-shadow-xl">
                    <div className="flex items-center gap-2">
                        <img className="w-25 h-25 object-cover rounded-full" src="../../images/caio-profile-half.jpeg" alt="profile-picture"/>
                        <div className="font-bold bg-white rounded-full py-3 px-3">
                            Hello, I&#39;m Caio!
                        </div>
                    </div>
                    <div className="text-[1.6rem] font-bold bg-white rounded-full py-2 px-2 mt-3">
                        A <i>FullStack</i> Software Engineer
                    </div>
                    <button className="bg-[#609BE3] hover:bg-[#646DD2]
                     text-white font-bold py-2 px-4 rounded-full transition-all ease-in-out
                    text-[1rem] mr-auto mt-3
                     " onClick={() => scrollToSection('about')}>
                        Let&#39;s Begin
                    </button>
                    <div className="mt-[5rem] h-[25rem] relative flex">
                        <div className="absolute m-auto left-0 right-0 bg-white rounded-full h-[20rem] w-[20rem] z-1"/>
                        <img alt="smiling-man" src="../../images/smiling-man.png "
                              className="z-50 relative w-[80vw] m-auto"/>
                    </div>
            </div>

        </section>
    );
}
