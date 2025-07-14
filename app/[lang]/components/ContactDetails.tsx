import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";

function ContactDetails({ dictionary }: { dictionary: any }) {
    return (
        <div className="mb-[3rem]">
            <div className="flex flex-col text-white gap-5 lg:flex-row lg:justify-center lg:gap-3 ">
                <div className="border-4 flex flex-col rounded-lg text-left p-4 h-[30rem] md:h-[25rem] justify-between lg:w-[30%] lg:h-[30rem] lg:rounded-xl
                    md:w-[50vw] md:m-autolg:m-0
                ">
                    <div>
                        <p className="font-bold text-[1.4rem]">
                            {dictionary.page.contact.details.services_title}
                        </p>
                        <div className="flex text-[1rem] md:text-[1.2rem] gap-2 justify-left mt-3">
                            <p className="border-2 border-white rounded-3xl px-3 py-2">
                                {dictionary.page.contact.details.websites}
                            </p>
                            <p className="border-2 border-white rounded-4xl px-3 py-2">
                                {dictionary.page.contact.details.branding}
                            </p>
                            <p className="border-2 border-white rounded-4xl px-3 py-2">
                                {dictionary.page.contact.details.seo}
                            </p>
                        </div>
                        <div className="flex text-[1rem] md:text-[1.2rem] gap-2 justify-left mt-3">
                            <p className="border-2 border-white rounded-4xl px-3 py-2">
                                {dictionary.page.contact.details.ecommerce}
                            </p>

                            <p className="border-2 border-white rounded-4xl px-3 py-2">
                                {dictionary.page.contact.details.hire_me}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-[1.4rem]">
                            {dictionary.page.contact.details.stay_connected}
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
                            {dictionary.page.contact.details.start_a_project}
                        </p>
                        <p className="text-[1.2rem] italic mt-3">
                            {dictionary.page.contact.details.project_description}
                        </p>
                    </div>
                </div>

                <div className="border-4 flex flex-col rounded-lg text-left p-4 h-[25rem] justify-between lg:w-[30%] lg:h-[30rem] lg:rounded-xl
                md:w-[50vw] md:m-auto lg:m-0
                ">
                    <div>
                        <p className="font-bold text-[1.4rem]">
                            {dictionary.page.contact.details.about_title}
                        </p>
                        <p className="text-[1.2rem] mt-3 lg:text-[1.5rem]">
                            {dictionary.page.contact.details.about_description}
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-[1.4rem]">
                            {dictionary.page.contact.details.email_title}
                        </p>
                        <p className="text-[1rem] mt-3 lg:text-[1.5rem]">
                            xcaio2@gmail.com
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-[1.4rem]">
                            {dictionary.page.contact.details.call_title}
                        </p>
                        <p className="text-[1rem] italic mt-3 lg:text-[1.5rem]">
                            +351 916 248 973
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ContactDetails;