'use client';

import { useState, } from "react";
import { IoIosGlobe } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";

export default function ContactForm({ dictionary }: { dictionary: any }) {
    const [services, setServices] = useState<string[]>([]);

    const handleServiceChange = (service: string) => {
        setServices(prev =>
            prev.includes(service)
                ? prev.filter(item => item !== service)
                : [...prev, service]
        );
    };

    return (
        <div className="relative border border-white/15 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 text-sm rounded-3xl z-40 max-w-2xl mx-auto shadow-2xl">
            <form className="w-full space-y-5" action="https://formsubmit.co/xcaio2@gmail.com" method="POST">

                <div>
                    <label htmlFor="name" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                        Seu Nome
                    </label>
                    <input
                        name="name"
                        type="text"
                        id="name"
                        placeholder={dictionary.page.contact.form.name_placeholder}
                        className="w-full bg-black/60 text-white placeholder-gray-500 border border-white/15 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#609BE3] focus:ring-1 focus:ring-[#609BE3] transition-all"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                        Seu E-mail
                    </label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        placeholder={dictionary.page.contact.form.email_placeholder}
                        className="w-full bg-black/60 text-white placeholder-gray-500 border border-white/15 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#609BE3] focus:ring-1 focus:ring-[#609BE3] transition-all"
                        required
                    />
                </div>

                <div>
                    <label className="block text-xs font-mono text-gray-300 mb-2 font-semibold">
                        {dictionary.page.contact.form.services_needed || 'Desired Services'}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {[
                            {"name": dictionary.page.contact.details.websites, "icon": <IoIosGlobe size={18}/>},
                            {"name": dictionary.page.contact.details.branding, "icon": <FaRegLightbulb size={18}/>},
                            {"name": dictionary.page.contact.details.ecommerce, "icon": <FiSmartphone size={18}/>},
                            {"name": dictionary.page.contact.details.seo, "icon": <FaGoogle size={18}/>},
                            {"name": dictionary.page.contact.details.hire_me, "icon": <FaHandshakeSimple size={18}/>},
                        ].map(item => (
                            <button
                                key={item.name}
                                type="button"
                                onClick={() => handleServiceChange(item.name)}
                                className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition-all duration-300 font-semibold text-xs gap-1.5
                                 ${
                                    services.includes(item.name)
                                        ? 'bg-gradient-to-r from-[#609BE3] to-[#646DD2] text-white border-transparent shadow-lg shadow-[#646DD2]/30 scale-[1.02]'
                                        : 'bg-black/40 text-gray-300 border-white/15 hover:bg-white/10 hover:border-white/30'
                                }`}
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label htmlFor="project" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                        Detalhes do Projeto / Mensagem
                    </label>
                    <textarea
                        id="project"
                        name="info-subject"
                        rows={4}
                        placeholder={dictionary.page.contact.form.project_placeholder}
                        className="w-full bg-black/60 text-white placeholder-gray-500 border border-white/15 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#609BE3] focus:ring-1 focus:ring-[#609BE3] transition-all"
                        required
                    />
                </div>

                <input
                    type="hidden"
                    name="services"
                    value={services.join(", ")}
                />

                <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#609BE3] via-[#646DD2] to-[#C9AA71] shadow-xl shadow-[#646DD2]/30 hover:shadow-[#646DD2]/50 transition-all duration-300 transform hover:scale-[1.01] active:scale-95 cursor-pointer"
                >
                    {dictionary.page.contact.form.submit_button}
                </button>

                <input type="hidden" name="_next" value="https://oliveiradev.live/en/thank-you"/>
            </form>
        </div>
    );
}
