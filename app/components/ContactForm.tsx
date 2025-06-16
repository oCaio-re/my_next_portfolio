'use client';

import { useState } from "react";
import { IoIosGlobe } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";

export default function ContactForm() {
    const [services, setServices] = useState<string[]>([]);

    const handleServiceChange = (service: string) => {
        setServices(prev =>
            prev.includes(service)
                ? prev.filter(item => item !== service)
                : [...prev, service]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    };

    return (
        <div className="flex justify-center items-center border-3 border-white p-4 text-[1rem] rounded-md">
            <form onSubmit={handleSubmit} className="p-3 rounded-lg shadow-lg w-full max-w-2xl">

                <div className="mb-6 text-white">
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        className= "w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#646DD2]"
                        required
                    />
                </div>

                <div className="mb-6 text-white">
                    <input
                        type="email"
                        id="email"
                        placeholder="Email address"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#646DD2]"
                        required
                    />
                </div>

                <div className="mb-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {/*{["Website", "Branding", "Ecommerce", "SEO", "Hire Me"].map(service => (*/}
                        {[{"name": "Websites", "icon": <IoIosGlobe className="icon-form" size={30}/>},{"name": "Branding", "icon": <FaRegLightbulb className="icon-form" size={30}/>}
                            , {"name": "Ecommerce", "icon": <FiSmartphone className="icon-form" size={30}/>}, {"name": "SEO", "icon": <FaGoogle className="icon-form" size={30}/>},
                            {"name": "Hire Me", "icon": <FaHandshakeSimple className="icon-form" size={30}/>}].map(item => (
                            <button
                                key={item.name.valueOf()}
                                type="button"
                                onClick={() => handleServiceChange(item.name)}
                                className={`px-4 py-3 h-20 rounded border transition font-bold${
                                    services.includes(item.name)
                                        ? 'text-black bg-white font-bold'
                                        : 'bg-white text-white border-gray-300 hover:bg-gray-100 font-bold'
                                }`}
                            >
                                {item.icon}
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Description */}
                <div className="mb-6 text-white">
                    <textarea
                        id="project"
                        rows={5}
                        placeholder="Tell me about the project"
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-[#646DD2] text-white font-semibold py-3 rounded hover:[#646DD2] transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
