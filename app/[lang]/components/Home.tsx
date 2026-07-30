'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useScroll } from './ScrollContext';
import ScrollIndicator from "./ScrollIndicator";
import { FiArrowRight } from 'react-icons/fi';
import { BiLogoTypescript, BiLogoPython, BiLogoReact } from 'react-icons/bi';
import { RiTailwindCssFill } from 'react-icons/ri';

export function Home({ dictionary }: { dictionary: any }) {
    const { scrollbar } = useScroll();

    const scrollToSection = (sectionId: string) => {
        if (!scrollbar) return;

        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + scrollbar.scrollTop - navbarHeight;

            scrollbar.scrollTo(0, elementPosition, 600);
        }
    };

    return (
        <section id="home" className="relative min-h-screen bg-black flex items-center justify-center pt-24 pb-16 overflow-hidden scroll-mt-32">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#646DD2]/25 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#C9AA71]/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#609BE3]/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="container relative z-20 mx-auto px-4 max-w-5xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
                    
                    {/* Left Column: Headline & Value Proposition */}
                    <motion.div 
                        className="flex flex-col items-start text-left lg:w-3/5"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[#C9AA71] text-xs font-semibold tracking-wide mb-5 shadow-inner">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            {dictionary.page.home.badge}
                        </div>

                        {/* Title & Name */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                            <span className="block text-lg sm:text-xl text-gray-400 font-medium mb-1">
                                {dictionary.page.home.greeting}
                            </span>
                            <span className="text-white">
                                {dictionary.page.home.name}
                            </span>
                            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#609BE3] via-[#C9AA71] to-[#646DD2] font-extrabold">
                                {dictionary.page.home.role}
                            </span>
                        </h1>

                        {/* Value Subtitle */}
                        <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed mb-6 font-light">
                            {dictionary.page.home.description}
                        </p>

                        {/* Dual CTAs */}
                        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#609BE3] to-[#646DD2] shadow-lg shadow-[#646DD2]/25 hover:shadow-xl hover:shadow-[#646DD2]/40 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                            >
                                {dictionary.page.home.button_primary}
                                <FiArrowRight className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white bg-white/5 border border-white/15 backdrop-blur-md hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                            >
                                {dictionary.page.home.button_secondary}
                            </button>
                        </div>

                        {/* Minimalist Monochrome Tech Strip */}
                        <div className="pt-5 border-t border-white/10 w-full flex flex-wrap items-center gap-5 text-gray-400 text-xs font-medium">
                            <span className="text-gray-500 uppercase tracking-widest text-[10px] font-semibold">Tech Stack</span>
                            <div className="flex flex-wrap items-center gap-4 text-gray-300">
                                <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                                    <BiLogoReact className="w-4 h-4 text-gray-400" /> React & Next.js
                                </span>
                                <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                                    <BiLogoTypescript className="w-4 h-4 text-gray-400" /> TypeScript
                                </span>
                                <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                                    <BiLogoPython className="w-4 h-4 text-gray-400" /> Python
                                </span>
                                <span className="flex items-center gap-1.5 hover:text-white transition-colors">
                                    <RiTailwindCssFill className="w-4 h-4 text-gray-400" /> Tailwind
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Ultra-Clean Glassmorphic Photo Frame */}
                    <motion.div 
                        className="relative flex items-center justify-center lg:w-2/5"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="relative p-2.5 rounded-3xl bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/20 backdrop-blur-xl shadow-2xl group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#609BE3]/20 via-[#646DD2]/20 to-[#C9AA71]/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 pointer-events-none" />
                            <img
                                src="/images/caio-profile-half.jpeg"
                                alt="Caio Oliveira"
                                className="relative w-52 h-52 sm:w-64 sm:h-64 object-cover rounded-2xl shadow-xl border border-white/10"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            <ScrollIndicator />
        </section>
    );
}
