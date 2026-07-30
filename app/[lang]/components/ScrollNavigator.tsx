'use client';

import React, { useState, useEffect } from 'react';
import { IoChevronUp, IoChevronDown } from 'react-icons/io5';
import Scrollbar from 'smooth-scrollbar';

interface ScrollNavigatorProps {
    scrollbar: Scrollbar | null;
}

const ScrollNavigator: React.FC<ScrollNavigatorProps> = ({ scrollbar }) => {
    const [ , setScrollPosition] = useState<number>(0);
    const [maxScroll, setMaxScroll] = useState<number>(0);
    const [, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        if (!scrollbar) return;

        const handleScroll = () => {
            setScrollPosition(scrollbar.scrollTop);
            setMaxScroll(scrollbar.limit.y);
            setIsVisible(scrollbar.scrollTop > 200); // Show after scrolling 200px
        };

        scrollbar.addListener(handleScroll);

        return () => {
            scrollbar.removeListener(handleScroll);
        };
    }, [scrollbar]);

    const scrollToTop = (): void => {
        if (scrollbar) {
            scrollbar.scrollTo(0, 0, 800); // x, y, duration
        }
    };

    const scrollToBottom = (): void => {
        if (scrollbar) {
            scrollbar.scrollTo(0, maxScroll, 800); // x, y, duration
        }
    };


    return (
        <div className="fixed bottom-2 right-1 md:bottom-6 md:right-6 z-30 flex flex-col items-center space-y-2">
            {/* Progress indicator */}
            {/*<div className="relative w-2 h-20 bg-gray-200 rounded-full overflow-hidden shadow-lg">*/}
            {/*    <div*/}
            {/*        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#609BE3] via-[#646DD2] to-purple-500 rounded-full transition-all duration-300 ease-out"*/}
            {/*        style={{ height: `${scrollProgress}%` }}*/}
            {/*    />*/}
            {/*</div>*/}

            {/* Navigation buttons */}
            <div className="flex flex-col space-y-2">
                {/* Scroll Up */}
                <button
                    onClick={scrollToTop}
                    className="group relative p-2.5 bg-black/70 hover:bg-white/20 rounded-full shadow-2xl backdrop-blur-xl
                   transition-all duration-300 ease-out hover:scale-110 active:scale-95
                   border border-white/15"
                    aria-label="Scroll up"
                >
                    <IoChevronUp className="w-4 h-4 text-gray-300 group-hover:text-[#C9AA71] transition-colors duration-200" />
                </button>

                {/* Scroll Down */}
                <button
                    onClick={scrollToBottom}
                    className="group relative p-2.5 bg-black/70 hover:bg-white/20 rounded-full shadow-2xl backdrop-blur-xl
                   transition-all duration-300 ease-out hover:scale-110 active:scale-95
                   border border-white/15"
                    aria-label="Scroll down"
                >
                    <IoChevronDown className="w-4 h-4 text-gray-300 group-hover:text-[#609BE3] transition-colors duration-200" />
                </button>
            </div>
        </div>
    );
};

export default ScrollNavigator;