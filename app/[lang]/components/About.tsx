'use client'

import React from 'react';
import { motion } from 'framer-motion';

export function About({ dictionary }: { dictionary: any }) {
    return (
        <section id="about" className="relative py-12 sm:py-16 scroll-mt-24 overflow-hidden bg-black">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-[#646DD2]/15 rounded-full blur-[140px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                
                {/* Section Header */}
                <motion.div 
                    className="flex flex-col items-start mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#C9AA71] text-xs font-mono font-bold tracking-widest uppercase mb-1.5">
                        {`// ${dictionary.page.about.my_story}`}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {dictionary.page.about.a_little_bit_about_me}
                    </h2>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Column: Image Illustration */}
                    <motion.div 
                        className="lg:col-span-5 flex justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative p-3 rounded-3xl bg-[#11131f] border border-white/15 shadow-2xl max-w-xs about-photo-card">
                            <img
                                alt="about-me-img"
                                src="/images/about-me-image.png"
                                className="w-full h-auto object-contain rounded-2xl drop-shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Bio Card */}
                    <motion.div 
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl shadow-2xl relative text-gray-200 text-sm sm:text-base leading-relaxed space-y-5">
                            <div className="absolute top-0 right-8 -translate-y-1/2 px-3.5 py-1 rounded-full bg-[#646DD2]/30 border border-[#646DD2]/50 text-[11px] font-mono font-bold text-white backdrop-blur-md">
                                Full-Stack Dev
                            </div>

                            <p className="text-white font-semibold text-base sm:text-lg" dangerouslySetInnerHTML={{ __html: dictionary.page.about.bio_line_1 }} />
                            <p className="text-gray-300 font-light" dangerouslySetInnerHTML={{ __html: dictionary.page.about.bio_line_2 }} />
                            <div className="pt-3.5 border-t border-white/10 text-base font-semibold" dangerouslySetInnerHTML={{ __html: dictionary.page.about.bio_line_3 }} />
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
