'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useScroll } from './ScrollContext';

export function Home({ dictionary }: { dictionary: any }) {
    const { scrollbar } = useScroll();

    const scrollToSection = (sectionId: string) => {
        if (!scrollbar) return;

        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + scrollbar.scrollTop - navbarHeight;

            scrollbar.scrollTo(0, elementPosition, 600);
        }
    };
    return (
        <section id="home" className="relative bg-[#646DD2] h-[100vh] md:min-h-[80vh] md:h-[100vh] lg:h-[80vh] scroll-mt-32"

        >
            <img src="../../images/wave%20(2).svg" alt="wave-svg"
                 className="-scale-y-100 overflow-hidden absolute
                  z-5 top-0 left-0 w-auto h-auto min-w-full min-h-full object-cover scale-100" />
            <div className="top-0 -scale-y-100 object-cover w-full overflow-hidden "/>
            <motion.div className="relative grid-cols-1 md:flex-col lg:flex-row w-[95vw] mt-[10rem] mx-auto flex flex-col z-50 drop-shadow-xl
                    md:w-[70vw]  md:justify-between md:items-center md:mt-[6rem] lg:mt-[10rem]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
            >
                <motion.div className="md:m-auto md:ml-0 md:text-[3rem] md:justify-start flex flex-col md:w-[80%]">
                    <div className="flex items-center gap-2">
                        <img className="w-25 h-25 object-cover rounded-full" src="../../images/caio-profile-half.jpeg" alt="profile-picture"/>
                        <div className="text-nowrap text-[2.5rem] font-bold bg-white rounded-full py-3 px-3 md:text-[3.5rem] md:px-6">
                            {dictionary.page.home.title}
                        </div>
                    </div>
                    <div className="text-nowrap text-[1.5rem] text-center font-bold bg-white rounded-full py-2 px-2 mt-3 md:text-[3rem] md:px-6">
                        {dictionary.page.home.description}
                    </div>
                    <button className="bg-[#609BE3] hover:bg-[#646DD2]
                     text-white font-bold py-2 px-4 rounded-full transition-all ease-in-out
                    text-[1rem] mr-auto mt-3 md:hover:bg-[#609BE3] md:bg-[#646DD2] md:text-[1.2rem] md:left-0 md:py-3
                     " onClick={() => scrollToSection('about')}>
                        {dictionary.page.home.button}
                    </button>
                </motion.div>

                <div className="relative mt-[5rem] h-[25rem] flex md:w-[30%]">
                    {/*<div className="absolute m-auto left-0 right-0 bg-white rounded-full h-[20rem] w-[20rem] z-1*/}
                    {/*    md:h-[20rem]  md:w-[20rem] lg:h-[100%] lg:w-[100%] aspect-square*/}
                    {/*"/>*/}
                    <img alt="white-circle" src="../../images/white-circle.svg"
                            className="absolute"
                    />
                    <img alt="smiling-man" src="../../images/smiling-man.png "
                          className="z-50 relative w-[80vw] m-auto md:w-[100%] lg:w-[100%]"/>
                </div>
            </motion.div>

        </section>
    );
}
