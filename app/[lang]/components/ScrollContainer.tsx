'use client';

import React, { useEffect, useRef, useState } from 'react';
import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';
import ScrollNavigator from "./ScrollNavigator";
import { ScrollProgressBar } from "./ScrollProgressBar";
import { Dictionary } from "./types";
import { MobileNavbar } from "@/app/[lang]/components/MobileNavbar";
import { NavBar } from "@/app/[lang]/components/NavBar";
import GlowingCursor from "@/app/[lang]/components/GlowingCursor/GlowingCursor";

// Plugin to prevent horizontal scrolling and edge jumping
class EdgeEasingPlugin extends ScrollbarPlugin {
    static pluginName = 'edgeEasing';

    transformDelta(delta: any, fromEvent: any) {
        const { y } = delta;
        const { limit, offset } = this.scrollbar;
        const isWheelEvent = fromEvent.type.includes('wheel');

        if (isWheelEvent) {
            if (offset.y + y < 0) {
                return { x: 0, y: -offset.y };
            }
            if (offset.y + y > limit.y) {
                return { x: 0, y: limit.y - offset.y };
            }
        }
        return { x: 0, y: delta.y };
    }
}



interface ScrollContainerProps {
    children: React.ReactNode;
    dictionary: Dictionary;
    onScrollbarInit?: (scrollbar: any) => void; // Add this prop
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({
                                                             children,
                                                             dictionary,
                                                             onScrollbarInit
                                                         }) => {
    Scrollbar.use(EdgeEasingPlugin);
    const scrollbarRef = useRef<HTMLDivElement>(null);
    const [scrollbar, setScrollbar] = useState<any>(null);

    useEffect(() => {
        // Clean up any existing scrollbar instances first
        const existingScrollbars = document.querySelectorAll('[data-scrollbar]');
        existingScrollbars.forEach((element) => {
            const instance = Scrollbar.get(element as HTMLElement);
            if (instance) {
                instance.destroy();
            }
        });

        // Hide body scrollbar
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        if (scrollbarRef.current) {
            scrollbarRef.current.setAttribute('data-scrollbar', 'main');

            const scrollbarInstance = Scrollbar.init(scrollbarRef.current, {
                damping: 0.07,
                renderByPixels: true,
                alwaysShowTracks: false,
                continuousScrolling: true,
                plugins: {
                    edgeEasing: true,
                },
            });

            scrollbarInstance.addListener(() => {
                scrollbarInstance.scrollLeft = 0;
            });

            setScrollbar(scrollbarInstance);

            // Pass scrollbar instance to parent
            if (onScrollbarInit) {
                onScrollbarInit(scrollbarInstance);
            }

            return () => {
                scrollbarInstance.destroy();
                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';
            };
        }
    }, [onScrollbarInit]);

    return (
        <div className="relative overflow-hidden w-full max-w-full h-screen">
            <GlowingCursor/>
            <div className="fixed top-0 left-0 right-0 z-[9999]">
                <NavBar dictionary={dictionary} />
            </div>

            <div className="fixed top-0 left-0 right-0 z-[9998] md:hidden">
                <MobileNavbar />
            </div>

            <div
                ref={scrollbarRef}
                className="relative scrollbar-container"
                data-scrollbar="main"
                style={{
                    height: '100vh',
                    width: '100%',
                    maxWidth: '100%',
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    zIndex: 1
                }}
            >
                <div className="scroll-content">
                    {children}
                </div>
            </div>

            <ScrollNavigator scrollbar={scrollbar} />
            <ScrollProgressBar scrollbar={scrollbar} />
        </div>
    );
};

export default ScrollContainer;
