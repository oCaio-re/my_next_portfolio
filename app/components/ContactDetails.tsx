import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";

function ContactDetails() {
    return (
        <div className="mb-[3rem]">
            <div className="flex flex-col text-white gap-5 md:flex-row md:justify-center md:gap-3">
                <div className="border-4 flex flex-col rounded-md text-left p-4 h-[25rem] justify-between md:w-[30%] md:h-[30rem] md:rounded-xl">
                    <div>
                        <p className="font-bold text-[1.4rem]">
                            SERVICES
                        </p>
                        <div className="flex text-[1.2rem] gap-5 mt-3">
                            <p className="border-2 border-white rounded-3xl px-3 py-2">
                                Websites
                            </p>
                            <p className="border-2 border-white rounded-4xl px-3 py-2">
                                Branding
                            </p>
                        </div>
                        <div className="flex text-[1.2rem] gap-1 mt-3">
                            <p className="border-2 border-white rounded-4xl px-3 py-2">
                                Ecommerce
                            </p>
                            <p className="border-2 border-white rounded-4xl px-3 py-2">
                                SEO
                            </p>
                            <p className="border-2 border-white rounded-4xl px-3 py-2">
                                Hire Me
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-[1.4rem]">
                            STAY CONNECTED
                        </p>
                        <div className="flex mt-3 gap-4">
                            <a href="https://github.com/oCaio-re hover:bg-[#C9AA71]" target="_blank">
                                <FaGithub size={60} className="hover:text-[#C9AA71] transition-all ease-in-out duration-100"/>
                            </a>
                            <a href="https://www.linkedin.com/in/caio-oliveira-b1619114b//oCaio-re " target="_blank">
                                <FaLinkedin size={60} className="hover:text-[#C9AA71] transition-all ease-in-out duration-100"/>
                            </a>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-[1.4rem]">
                            START A PROJECT
                        </p>
                        <p className="text-[1.2rem] italic mt-3">
                            I&#39;m available for either a freelance project or a permanent job
                        </p>
                    </div>
                </div>

                <div className="border-4 flex flex-col rounded-md text-left p-4 h-[25rem] justify-between md:w-[30%] md:h-[30rem] md:rounded-xl">
                    <div>
                        <p className="font-bold text-[1.4rem]">
                            ABOUT
                        </p>
                        <p className="text-[1.2rem] mt-3 md:text-[1.5rem]">
                            I&#39;m a professional software engineer. Feel free to get in touch with me.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-[1.4rem]">
                            E-MAIL
                        </p>
                        <p className="text-[1rem] mt-3 md:text-[1.5rem]">
                            xcaio2@gmail.com
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-[1.4rem]">
                            CALL
                        </p>
                        <p className="text-[1rem] italic mt-3 md:text-[1.5rem]">
                            +351 916 248 973
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ContactDetails;