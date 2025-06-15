'use client';

import { useState } from "react";

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
                        {["Websites", "Branding", "Ecommerce", "SEO", "Hire Me"].map(service => (
                            <button
                                key={service}
                                type="button"
                                onClick={() => handleServiceChange(service)}
                                className={`px-4 py-2 h-20 rounded border transition font-bold ${
                                    services.includes(service)
                                        ? 'text-white bg-[#C9AA71]'
                                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                                }`}
                            >
                                {service}
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
