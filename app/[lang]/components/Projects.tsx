'use client';

import React from 'react';
import ProjectCarousel from "./ProjectCarousel";
import { getProjectsList } from '@/lib/projectsData';
import { motion } from 'framer-motion';

function Projects({ dictionary }: { dictionary: any }) {
    const projectsData = getProjectsList(dictionary);

    return (
        <section id="projects" className="relative py-12 sm:py-16 scroll-mt-24 overflow-hidden bg-black">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/3 right-0 w-[350px] h-[350px] bg-[#609BE3]/15 rounded-full blur-[140px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                
                {/* Section Header */}
                <motion.div 
                    className="flex flex-col items-start mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#C9AA71] text-xs font-mono font-bold tracking-widest uppercase mb-1.5">
                        {`// ${dictionary.page.projects.title}`}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {dictionary.page.projects.subtitle}
                    </h2>
                </motion.div>

                {/* 3D Fish-Eye Circular Carousel & Slide-Over Case Study Drawer */}
                <ProjectCarousel projects={projectsData} dictionary={dictionary} />

            </div>
        </section>
    );
}

export default Projects;