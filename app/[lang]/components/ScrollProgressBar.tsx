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
        <div className={`fixed w-[95vw] top-[5.5rem] md:w-[70vw] md:top-[6.2rem] m-auto left-0 right-0 z-80 h-2 bg-white/70 rounded-full ${scrollProgress === 0 ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
            <div
                className="h-full bg-[#C9AA71] transition-all duration-100 ease-out rounded-full"
                style={{ width: `${scrollProgress}%` }}
            ></div>
        </div>
    );
};
