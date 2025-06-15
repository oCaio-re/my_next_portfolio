import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";

function ContactDetails() {
    return (
        <div className="mb-[3rem]">
            <div className="flex flex-col text-white gap-5 lg:flex-row">
                <div className="border-4 flex flex-col rounded-md text-left p-4 h-[25rem] justify-between">
                    <div>
                        <p className="font-bold text-[1.4rem]">
                            SERVICES
                        </p>
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

                <div className="border-4 flex flex-col rounded-md text-left p-4 h-[25rem] justify-between">
                    <div>
                        <p className="font-bold text-[1.4rem]">
                            ABOUT
                        </p>
                        <p className="text-[1.2rem] mt-3">
                            I&#39;m a professional software engineer. Feel free to get in touch with me.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-[1.4rem]">
                            E-MAIL
                        </p>
                        <p className="text-[1rem] mt-3">
                            xcaio2@gmail.com
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-[1.4rem]">
                            CALL
                        </p>
                        <p className="text-[1rem] italic mt-3">
                            +351 916 248 973
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ContactDetails;