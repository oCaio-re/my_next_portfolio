'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import PaginatedModalButton from './PaginatedModalButton';

export interface ProjectData {
    id: string;
    title: string;
    category: string;
    logoSrc: string;
    previewImages: string[];
    texts: string[];
    deployLink?: string;
    techs: { name: string; icon: React.ReactNode }[];
}

interface ProjectCarouselProps {
    projects: ProjectData[];
    dictionary: any;
}

export default function ProjectCarousel({ projects, dictionary }: ProjectCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                setActiveIndex((prev) => (prev + 1) % projects.length);
            }
            if (e.key === 'ArrowLeft') {
                setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [projects.length]);

    const activeProject = projects[activeIndex];

    return (
        <div className="relative w-full flex flex-col items-center select-none py-2">
            {/* 3D Fish-Eye Carousel Track with Extended Height & Visible Overflow for Shadows */}
            <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[460px] flex items-center justify-center perspective-[1200px] overflow-visible py-8">
                {projects.map((project, index) => {
                    // Compute circular offset relative to activeIndex
                    let offset = (index - activeIndex + projects.length) % projects.length;
                    if (offset > projects.length / 2) offset -= projects.length;

                    const isCenter = offset === 0;
                    const isAbsOne = Math.abs(offset) === 1;

                    // Fish-eye transformations with dramatic scale contrast for the center item
                    const xOffset = offset * (typeof window !== 'undefined' && window.innerWidth < 640 ? 125 : 210);
                    const scale = isCenter ? 1.35 : isAbsOne ? 0.72 : 0.48;
                    const rotateY = offset * -26; // 3D lens curvature
                    const opacity = isCenter ? 1 : isAbsOne ? 0.45 : 0.15;
                    const zIndex = 40 - Math.abs(offset) * 10;

                    return (
                        <motion.div
                            key={project.id}
                            onClick={() => setActiveIndex(index)}
                            className="absolute cursor-pointer flex flex-col items-center justify-center"
                            animate={{
                                x: xOffset,
                                scale,
                                rotateY,
                                opacity,
                                zIndex,
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 28,
                                mass: 0.8,
                            }}
                            style={{
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            {/* Circular Photo Frame with Glowing Ambient Halo */}
                            <div
                                className={`relative w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full p-3 sm:p-4 transition-all duration-500 flex items-center justify-center backdrop-blur-2xl bg-white carousel-item-circle ${
                                    isCenter
                                        ? 'border-4 border-[#646DD2] shadow-[0_0_60px_rgba(100,109,210,0.65)] ring-4 ring-[#646DD2]/30 scale-105'
                                        : 'border-2 border-white/40 hover:border-white/80 shadow-lg'
                                }`}
                            >
                                {/* Inner Ambient Glow ring */}
                                {isCenter && (
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#609BE3]/25 via-[#646DD2]/25 to-[#C9AA71]/25 blur-lg pointer-events-none" />
                                )}

                                <img
                                    src={project.logoSrc}
                                    alt={project.title}
                                    className="w-full h-full object-contain p-3 rounded-full drop-shadow-2xl relative z-10"
                                />
                            </div>

                            {/* Label indicator for side items */}
                            {!isCenter && (
                                <span className="mt-3 text-[11px] font-mono font-bold tracking-widest text-gray-400 uppercase opacity-75 hidden sm:block">
                                    {project.title}
                                </span>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* Navigation Arrows & Controls */}
            <div className="flex items-center justify-between w-full max-w-xs mt-3 z-40">
                <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-full bg-white/5 border border-white/15 hover:bg-white/15 hover:border-[#609BE3] text-white hover:text-[#609BE3] transition-all transform hover:scale-110 active:scale-95 shadow-lg cursor-pointer"
                    aria-label="Projeto anterior"
                >
                    <FiChevronLeft className="w-4 h-4" />
                </button>

                {/* Pagination Dots */}
                <div className="flex items-center gap-2">
                    {projects.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`transition-all duration-300 rounded-full cursor-pointer ${
                                idx === activeIndex
                                    ? 'w-6 h-2 bg-gradient-to-r from-[#609BE3] to-[#646DD2] shadow-md shadow-[#646DD2]/50'
                                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                            }`}
                            aria-label={`Ir para o projeto ${idx + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="p-2.5 rounded-full bg-white/5 border border-white/15 hover:bg-white/15 hover:border-[#609BE3] text-white hover:text-[#609BE3] transition-all transform hover:scale-110 active:scale-95 shadow-lg cursor-pointer"
                    aria-label="Próximo projeto"
                >
                    <FiChevronRight className="w-4 h-4" />
                </button>
            </div>

            {/* Active Project Details Card Below: Compact & Discreet */}
            <div className="w-full max-w-md mt-6 z-30">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeProject.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-xl shadow-xl text-center flex flex-col items-center"
                    >
                        <span className="text-[#C9AA71] text-[10px] font-mono font-bold tracking-widest uppercase mb-1">
                            {`// ${activeProject.category}`}
                        </span>

                        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                            {activeProject.title}
                        </h3>

                        {/* Tech icons */}
                        <div className="flex items-center justify-center gap-3 mb-4 py-1.5 px-3 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-xs">
                            {activeProject.techs.map((tech, i) => (
                                <span key={i} title={tech.name}>
                                    {tech.icon}
                                </span>
                            ))}
                        </div>

                        {/* Action CTA with App Morphing Modal */}
                        <PaginatedModalButton
                            images={activeProject.previewImages}
                            texts={activeProject.texts}
                            deployLink={activeProject.deployLink}
                            dictionary={dictionary}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
