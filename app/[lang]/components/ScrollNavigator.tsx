'use client';

import React, { useState, useEffect } from 'react';
import { IoChevronUp, IoChevronDown } from 'react-icons/io5';
import Scrollbar from 'smooth-scrollbar';

interface ScrollNavigatorProps {
    scrollbar: Scrollbar | null;
}

const ScrollNavigator: React.FC<ScrollNavigatorProps> = ({ scrollbar }) => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
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

    const scrollUp = (): void => {
        if (scrollbar) {
            const currentY = scrollbar.scrollTop;
            const newY = Math.max(0, currentY - window.innerHeight * 0.8);
            scrollbar.scrollTo(0, newY, 600);
        }
    };

    const scrollDown = (): void => {
        if (scrollbar) {
            const currentY = scrollbar.scrollTop;
            const newY = Math.min(maxScroll, currentY + window.innerHeight * 0.8);
            scrollbar.scrollTo(0, newY, 600);
        }
    };

    const scrollProgress = maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;

    return (
        <div className="fixed bottom-6 right-6 z-100 flex flex-col items-center space-y-2">
            {/* Progress indicator */}
            <div className="relative w-2 h-20 bg-gray-200 rounded-full overflow-hidden shadow-lg">
                <div
                    className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#609BE3] via-[#646DD2] to-purple-500 rounded-full transition-all duration-300 ease-out"
                    style={{ height: `${scrollProgress}%` }}
                />
            </div>

            {/* Navigation buttons */}
            <div className="flex flex-col space-y-1">
                {/* Scroll Up */}
                <button
                    onClick={scrollUp}
                    onDoubleClick={scrollToTop}
                    className="group relative p-3 bg-white hover:bg-gray-50 rounded-full shadow-lg hover:shadow-xl
                   transition-all duration-300 ease-out hover:scale-110 active:scale-95
                   border border-gray-200 hover:border-blue-200"
                    aria-label="Scroll up (double-click for top)"
                >
                    <IoChevronUp className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />

                    {/* Tooltip */}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-2 py-1 bg-[#646DD2] text-white text-xs
                        rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap
                        pointer-events-none">
                        Scroll up (double-click for top)
                    </div>
                </button>

                {/* Scroll Down */}
                <button
                    onClick={scrollDown}
                    onDoubleClick={scrollToBottom}
                    className="group relative p-3 bg-white hover:bg-gray-50 rounded-full shadow-lg hover:shadow-xl
                   transition-all duration-300 ease-out hover:scale-110 active:scale-95
                   border border-gray-200 hover:border-blue-200"
                    aria-label="Scroll down (double-click for bottom)"
                >
                    <IoChevronDown className="w-5 h-5 text-[#646DD2] group-hover:text-[#C9AA71] transition-colors duration-200" />

                    {/* Tooltip */}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-2 py-1 bg-[#646DD2] text-white text-xs
                        rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap
                        pointer-events-none">
                        Scroll down (double-click for bottom)
                    </div>
                </button>
            </div>

            {/* Back to top button (shows when near bottom) */}
            {scrollProgress > 80 && (
                <button
                    onClick={scrollToTop}
                    className="mt-2 p-2 bg-[#C9AA71] hover:bg-blue-600 rounded-full shadow-lg hover:shadow-xl
                   transition-all duration-300 ease-out hover:scale-110 active:scale-95
                   text-white animate-pulse hover:animate-none"
                    aria-label="Back to top"
                >
                    <IoChevronUp className="w-4 h-4" />
                </button>
            )}
        </div>
    );
};

export default ScrollNavigator;