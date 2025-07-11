'use client';

import React, { useEffect, useRef, useState } from 'react';
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';
import ScrollNavigator from "./ScrollNavigator";
import { ScrollProgressBar } from "./ScrollProgressBar";
import { Dictionary } from "./types";
import { MobileNavbar } from "@/app/[lang]/components/MobileNavbar";
import { NavBar } from "@/app/[lang]/components/NavBar";

// Plugin to prevent horizontal scrolling and edge jumping
class EdgeEasingPlugin extends ScrollbarPlugin {
    static pluginName = 'edgeEasing';

    transformDelta(delta: any, fromEvent: any) {
        const { y } = delta;
        const { limit, offset } = this.scrollbar;
        const isWheelEvent = fromEvent.type.includes('wheel');

        // Force horizontal delta to 0 to prevent horizontal scrolling
        if (isWheelEvent) {
            if (offset.y + y < 0) {
                return { x: 0, y: -offset.y };
            }
            if (offset.y + y > limit.y) {
                return { x: 0, y: limit.y - offset.y };
            }
        }
        // Always return 0 for x to prevent horizontal scrolling
        return { x: 0, y: delta.y };
    }
}



interface ScrollContainerProps {
    children: React.ReactNode;
    dictionary: Dictionary;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children, dictionary }) => {
    Scrollbar.use(EdgeEasingPlugin);
    const scrollbarRef = useRef<HTMLDivElement>(null);
    const [scrollbar, setScrollbar] = useState<Scrollbar | null>(null);

    useEffect(() => {
        if (scrollbarRef.current) {
            const scrollbarInstance = Scrollbar.init(scrollbarRef.current, {
                damping: 0.07,
                renderByPixels: true,
                alwaysShowTracks: false,
                continuousScrolling: true,
                plugins: {
                    edgeEasing: true,
                },
            });

            // Force disable horizontal scrolling
            scrollbarInstance.addListener(() => {
                scrollbarInstance.scrollLeft = 0;
            });

            setScrollbar(scrollbarInstance);

            return () => {
                scrollbarInstance.destroy();
            };
        }
    }, []);

    return (
        <div className="relative overflow-x-hidden w-full max-w-full">
            {/* NavBar with highest z-index */}
            <div className="fixed top-0 left-0 right-0 z-[9999]">
                <NavBar dictionary={dictionary} scrollbar={scrollbar} />
            </div>

            {/* Mobile navbar */}
            <div className="fixed top-0 left-0 right-0 z-[9998] md:hidden">
                <MobileNavbar scrollbar={scrollbar} />
            </div>

            {/* Scroll container */}
            <div
                ref={scrollbarRef}
                className="relative"
                style={{
                    height: '100vh',
                    width: '100%',
                    maxWidth: '100%',
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    zIndex: 1
                }}
            >
                {children}
            </div>

            {/* Navigation components */}
            <ScrollNavigator scrollbar={scrollbar} />
            <ScrollProgressBar scrollbar={scrollbar} />
        </div>
    );
};

export default ScrollContainer;
