'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export interface TechItem {
    name: string;
    icon: React.ReactNode;
    activeColor: string;
}

interface TechStackChaserProps {
    techs: TechItem[];
    activeProjectId: string;
}

export default function TechStackChaser({ techs, activeProjectId }: TechStackChaserProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Reset to index 0 when active project changes
    useEffect(() => {
        setActiveIndex(0);
        setHoveredIndex(null);
    }, [activeProjectId]);

    // Rhythmic 1.5s (1500ms) subtle chaser wave animation
    useEffect(() => {
        if (techs.length === 0) return;

        const interval = setInterval(() => {
            if (hoveredIndex === null) {
                setActiveIndex((prev) => (prev + 1) % techs.length);
            }
        }, 1500);

        return () => clearInterval(interval);
    }, [techs.length, hoveredIndex, activeProjectId]);

    return (
        <div className="flex items-center justify-center gap-3.5 py-1.5 px-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md mb-4">
            {techs.map((tech, idx) => {
                const isLit = hoveredIndex !== null ? hoveredIndex === idx : activeIndex === idx;

                return (
                    <motion.div
                        key={idx}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="relative cursor-pointer flex items-center justify-center p-1 rounded-md transition-all duration-300"
                        animate={{
                            scale: isLit ? 1.12 : 1,
                            opacity: isLit ? 1 : 0.45,
                        }}
                        transition={{
                            duration: 0.35,
                            ease: 'easeInOut',
                        }}
                        style={{
                            color: isLit ? tech.activeColor : '#94a3b8',
                            filter: isLit ? `drop-shadow(0 0 3px ${tech.activeColor})` : 'none',
                        }}
                        title={tech.name}
                    >
                        <div className="w-5 h-5 flex items-center justify-center">
                            {tech.icon}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
