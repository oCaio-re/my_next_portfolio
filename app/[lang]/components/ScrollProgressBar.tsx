'use client';

import { useState, useEffect } from 'react';

export const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            if (totalHeight > 0) {
                setScrollProgress((currentScroll / totalHeight) * 100);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-[6rem] w-[70vw] m-auto left-0 right-0 z-40 h-2 bg-gray-300 rounded-full ${scrollProgress === 0 ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
            <div
                className="h-full bg-[#C9AA71] transition-all duration-100 ease-out rounded-full"
                style={{ width: `${scrollProgress}%` }}
            ></div>
        </div>
    );
};
