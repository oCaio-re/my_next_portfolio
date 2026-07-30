import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";

function ContactDetails({ dictionary }: { dictionary: any }) {
    return (
        <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Card: Services & Socials */}
                <div className="border border-white/15 bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl text-white space-y-5">
                    <div>
                        <h3 className="font-extrabold text-lg sm:text-xl text-white mb-3">
                            {dictionary.page.contact.details.services_title}
                        </h3>
                        <div className="flex flex-wrap text-xs gap-2">
                            <span className="border border-white/20 bg-white/5 rounded-full px-3 py-1 font-medium text-gray-200">
                                {dictionary.page.contact.details.websites}
                            </span>
                            <span className="border border-white/20 bg-white/5 rounded-full px-3 py-1 font-medium text-gray-200">
                                {dictionary.page.contact.details.branding}
                            </span>
                            <span className="border border-white/20 bg-white/5 rounded-full px-3 py-1 font-medium text-gray-200">
                                {dictionary.page.contact.details.seo}
                            </span>
                            <span className="border border-white/20 bg-white/5 rounded-full px-3 py-1 font-medium text-gray-200">
                                {dictionary.page.contact.details.ecommerce}
                            </span>
                            <span className="border border-[#C9AA71]/40 bg-[#C9AA71]/10 text-[#C9AA71] rounded-full px-3 py-1 font-bold">
                                {dictionary.page.contact.details.hire_me}
                            </span>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-extrabold text-lg sm:text-xl text-white mb-2.5">
                            {dictionary.page.contact.details.stay_connected}
                        </h3>
                        <div className="flex items-center gap-3">
                            <a href="https://github.com/oCaio-re" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                               className="p-2.5 rounded-2xl bg-white/5 border border-white/15 hover:bg-white/15 hover:border-[#609BE3] text-white hover:text-[#609BE3] transition-all transform hover:scale-110">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/caio-oliveira-b1619114b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                               className="p-2.5 rounded-2xl bg-white/5 border border-white/15 hover:bg-white/15 hover:border-[#C9AA71] text-white hover:text-[#C9AA71] transition-all transform hover:scale-110">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-extrabold text-base text-white mb-1.5">
                            {dictionary.page.contact.details.start_a_project}
                        </h3>
                        <p className="text-xs text-gray-300 italic">
                            {dictionary.page.contact.details.project_description}
                        </p>
                    </div>
                </div>

                {/* Right Card: Direct Contact Info */}
                <div className="border border-white/15 bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl text-white space-y-5">
                    <div>
                        <h3 className="font-extrabold text-lg sm:text-xl text-white mb-2.5">
                            {dictionary.page.contact.details.about_title}
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed font-light">
                            {dictionary.page.contact.details.about_description}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-extrabold text-xs uppercase tracking-wider text-gray-400 mb-1">
                            {dictionary.page.contact.details.email_title}
                        </h3>
                        <a href="mailto:xcaio2@gmail.com" className="text-base sm:text-lg font-bold text-[#609BE3] hover:underline">
                            xcaio2@gmail.com
                        </a>
                    </div>

                    <div>
                        <h3 className="font-extrabold text-xs uppercase tracking-wider text-gray-400 mb-1">
                            {dictionary.page.contact.details.call_title}
                        </h3>
                        <a href="tel:+351916248973" className="text-base sm:text-lg font-bold text-[#C9AA71] hover:underline">
                            +351 916 248 973
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactDetails;