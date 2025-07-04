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
        <section id="home" className="relative bg-[#646DD2] h-[100vh] md:min-h-[80vh] md:h-[100vh] lg:h-[80vh] scroll-mt-32">
            <img src="../../images/wave%20(2).svg" alt="wave-svg"
                 className="-scale-y-100 overflow-hidden absolute
                  z-5 top-0 left-0 w-auto h-auto min-w-full min-h-full object-cover scale-100" />
            <div className="top-0 -scale-y-100 object-cover w-[200rem] overflow-hidden "/>
            <div className="relative grid-cols-1 md:flex-col lg:flex-row w-[95vw] mt-[10rem] mx-auto flex flex-col z-50 drop-shadow-xl
                    md:w-[70vw]  md:justify-between md:items-center md:mt-[6rem] lg:mt-[10rem]
            ">
                <div className="md:m-auto md:ml-0 md:text-[3rem] md:justify-start flex flex-col ">
                    <div className="flex items-center gap-2">
                        <img className="w-25 h-25 object-cover rounded-full" src="../../images/caio-profile-half.jpeg" alt="profile-picture"/>
                        <div className="font-bold bg-white rounded-full py-3 px-3">
                            Hello, I&#39;m Caio!
                        </div>
                    </div>
                    <div className="text-[1.6rem] font-bold bg-white rounded-full py-2 px-2 mt-3 md:text-[2rem] md:px-3">
                        A <i>FullStack</i> Software Engineer
                    </div>
                    <button className="bg-[#609BE3] hover:bg-[#646DD2]
                     text-white font-bold py-2 px-4 rounded-full transition-all ease-in-out
                    text-[1rem] mr-auto mt-3 md:hover:bg-[#609BE3] md:bg-[#646DD2] md:text-[1.2rem] md:left-0 md:py-3
                     " onClick={() => scrollToSection('about')}>
                        Let&#39;s Begin
                    </button>
                </div>
                    <div className="mt-[5rem] h-[25rem] relative flex">
                        <div className="absolute m-auto left-0 right-0 bg-white rounded-full h-[20rem] w-[20rem] z-1
                            md:h-[20rem] lg:h-[25rem] md:w-[20rem] lg:w-[25rem]
                        "/>
                        <img alt="smiling-man" src="../../images/smiling-man.png "
                              className="z-50 relative w-[80vw] m-auto md:w-[35vw] lg:w-[25vw]"/>
                    </div>
            </div>

        </section>
    );
}
