'use client'

import React from 'react';
import ServicesGrid from "./ServicesGrid";
import { motion } from 'framer-motion';

export function Services({ dictionary }: { dictionary: any }) {
    return (
        <section id="services" className="relative py-12 sm:py-16 scroll-mt-24 overflow-hidden bg-black">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#646DD2]/15 rounded-full blur-[140px] pointer-events-none" />

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
                        {`// ${dictionary.page.services.title}`}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {dictionary.page.services.subtitle}
                    </h2>
                </motion.div>

                <ServicesGrid dictionary={dictionary}/>

            </div>
        </section>
    );
}
