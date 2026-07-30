'use client';

import { useState, useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

export const ScrollProgressBar = ({ scrollbar }: { scrollbar: Scrollbar | null }) => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        if (!scrollbar) return;

        const handleScroll = () => {
            const totalHeight = scrollbar.limit.y;
            const currentScroll = scrollbar.scrollTop;
            if (totalHeight > 0) {
                setScrollProgress((currentScroll / totalHeight) * 100);
            }
        };

        scrollbar.addListener(handleScroll);
        return () => scrollbar.removeListener(handleScroll);
    }, [scrollbar]);

    return (
        <div className={`fixed w-[92vw] lg:w-[70vw] max-w-5xl top-[4.25rem] sm:top-[4.5rem] m-auto left-0 right-0 z-30 h-1 bg-black/40 border border-white/10 backdrop-blur-md rounded-full overflow-hidden shadow-lg pointer-events-none ${scrollProgress === 0 ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
            <div
                className="h-full bg-gradient-to-r from-[#609BE3] via-[#646DD2] to-[#C9AA71] transition-all duration-150 ease-out rounded-full shadow-[0_0_12px_rgba(201,170,113,0.8)]"
                style={{ width: `${scrollProgress}%` }}
            ></div>
        </div>
    );
};
