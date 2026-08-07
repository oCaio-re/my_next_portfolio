'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiArrowRight, FiFileText } from 'react-icons/fi';
import TechStackChaser from './TechStackChaser';
import ProjectCaseStudyDrawer from './ProjectCaseStudyDrawer';
import { ExtendedProjectData, CaseStudyData } from '@/lib/projectsData';

interface ProjectCarouselProps {
    projects: (ExtendedProjectData & { caseStudy: CaseStudyData })[];
    dictionary: any;
}

export default function ProjectCarousel({ projects, dictionary }: ProjectCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleItemClick = (index: number) => {
        if (index === activeIndex) {
            setIsDrawerOpen(true);
        } else {
            setActiveIndex(index);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isDrawerOpen) return; // ignore carousel arrows when drawer is open
            if (e.key === 'ArrowRight') {
                setActiveIndex((prev) => (prev + 1) % projects.length);
            }
            if (e.key === 'ArrowLeft') {
                setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [projects.length, isDrawerOpen]);

    const activeProject = projects[activeIndex];

    return (
        <div className="relative w-full flex flex-col items-center select-none py-2">
            {/* 3D Fish-Eye Carousel Track */}
            <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[460px] flex items-center justify-center perspective-[1200px] overflow-visible py-8">
                {projects.map((project, index) => {
                    let offset = (index - activeIndex + projects.length) % projects.length;
                    if (offset > projects.length / 2) offset -= projects.length;

                    const isCenter = offset === 0;
                    const isAbsOne = Math.abs(offset) === 1;

                    const xOffset = offset * (typeof window !== 'undefined' && window.innerWidth < 640 ? 125 : 210);
                    const yOffset = -Math.pow(Math.abs(offset), 1.3) * 24;
                    const scale = isCenter ? 1.35 : isAbsOne ? 0.72 : 0.48;
                    const rotateY = offset * -26;
                    const opacity = isCenter ? 1 : isAbsOne ? 0.55 : 0.2;
                    const zIndex = 40 - Math.abs(offset) * 10;

                    return (
                        <motion.div
                            key={project.id}
                            onClick={() => handleItemClick(index)}
                            className="absolute cursor-pointer flex flex-col items-center justify-center group"
                            animate={{
                                x: xOffset,
                                y: yOffset,
                                scale,
                                rotateY,
                                opacity,
                                zIndex,
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 22,
                                mass: 0.9,
                            }}
                            style={{
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            {/* Circular Photo Frame */}
                            <div
                                className={`relative w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full p-3 sm:p-4 transition-all duration-500 flex items-center justify-center backdrop-blur-2xl bg-white carousel-item-circle ${
                                    isCenter
                                        ? 'border-4 border-[#646DD2] shadow-[0_0_60px_rgba(100,109,210,0.65)] ring-4 ring-[#646DD2]/30 scale-105 hover:border-[#609BE3]'
                                        : 'border-2 border-[#609BE3]/40 dark:border-[#609BE3]/50 hover:border-[#609BE3]/90 shadow-[0_14px_35px_rgba(96,155,227,0.35)]'
                                }`}
                            >
                                {isCenter && (
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#609BE3]/25 via-[#646DD2]/25 to-[#C9AA71]/25 blur-lg pointer-events-none" />
                                )}

                                <img
                                    src={project.logoSrc}
                                    alt={project.title}
                                    className="w-full h-full object-contain p-3 rounded-full drop-shadow-2xl relative z-10"
                                />

                                {/* Hover Prompt Badge for Center Item */}
                                {isCenter && (
                                    <div className="absolute inset-0 rounded-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-20 backdrop-blur-sm text-center p-2">
                                        <FiFileText className="w-8 h-8 text-[#C9AA71] mb-1 animate-bounce" />
                                        <span className="text-white text-xs font-mono font-bold uppercase tracking-wider">
                                            {dictionary.page?.projects?.button || 'Ver Estudo de Caso'}
                                        </span>
                                    </div>
                                )}
                            </div>

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
                    aria-label={dictionary.page?.carousel?.prev || "Previous project"}
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
                            aria-label={`${dictionary.page?.carousel?.go_to || "Go to project"} ${idx + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="p-2.5 rounded-full bg-white/5 border border-white/15 hover:bg-white/15 hover:border-[#609BE3] text-white hover:text-[#609BE3] transition-all transform hover:scale-110 active:scale-95 shadow-lg cursor-pointer"
                    aria-label={dictionary.page?.carousel?.next || "Next project"}
                >
                    <FiChevronRight className="w-4 h-4" />
                </button>
            </div>

            {/* Active Project Card Below */}
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

                        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                            {activeProject.title}
                        </h3>

                        {/* Rhythmic Fairy-Light Chaser Tech Stack Icons */}
                        <TechStackChaser
                            techs={activeProject.techs}
                            activeProjectId={activeProject.id}
                        />

                        {/* Primary Drawer Trigger CTA Button */}
                        <button
                            onClick={() => setIsDrawerOpen(true)}
                            className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-[#609BE3] to-[#646DD2] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#646DD2]/30 hover:opacity-95 transition-all transform hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
                        >
                            <span>{dictionary.page?.projects?.button || 'Descubra Mais'}</span>
                            <FiArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slide-Over Project Case Study Drawer */}
            <ProjectCaseStudyDrawer
                project={activeProject}
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                dictionary={dictionary}
            />
        </div>
    );
}
