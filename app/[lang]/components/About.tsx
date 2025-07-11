'use client'

import React from 'react';
import { motion } from 'framer-motion';

export function About({ dictionary }: { dictionary: any }) {
    return (
        <motion.section id="about" className="relative grid-cols-1 lg:grid-cols-2 w-[90vw] mt-[5rem] m-auto md:mt-[15rem]
        lg:w-[70vw] lg:flex lg:mt-[20rem] lg:justify-between pt-[10rem]
        "
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 2 }}
        >
            <img alt="about-me-img" src="../../images/about-me-image.png" className="mb-[1em] lg:w-[40%]"/>
            <div className="gap-[4rem] lg:w-[45%]">
                <div className="flex bg-[#646DD2] rounded-lg items-center px-4 py-2 mb-[1em] lg:rounded-4xl">
                        <p className="text-[1.8rem] text-white font-bold ml-auto mr-5 lg:text-[4rem] lg:mr-[3rem] text-center">
                            {dictionary.page.about.my_story}
                        </p>
                        <img className="w-40 h-40 object-cover rounded-full" src="../../images/caio-profile-half.jpeg" alt="profile-picture"/>
                </div>
                <div className="text-white text-[1.3rem] text-justify lg:text-[1.4rem]">
                    <img alt="bg-img-1" src="../../images/background/yellow_and_purple_b.png"
                         className="animate-pulse-slow absolute -z-5 top-0 left-0 w-auto h-auto min-w-full min-h-full object-cover scale-125 mt-[5rem] lg:-mt-[30rem]
                          lg:ml-[20rem] lg:scale-140"
                    />
                    <p className="text-left font-bold mb-2 text-[2rem] lg:text-[3rem]">
                        {dictionary.page.about.a_little_bit_about_me}
                    </p>

                    <p className="lg:mt-3" dangerouslySetInnerHTML={{ __html: dictionary.page.about.bio_line_1 }} />
                    <p className="mt-2 mb-2" dangerouslySetInnerHTML={{ __html: dictionary.page.about.bio_line_2 }} />
                    <p className="" dangerouslySetInnerHTML={{ __html: dictionary.page.about.bio_line_3 }} />
                </div>
            </div>
        </motion.section>
    );
}
