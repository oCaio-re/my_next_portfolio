'use client';

import React, { useEffect, useRef, useState } from 'react';
import Scrollbar from 'smooth-scrollbar';
import { NavBar } from "./NavBar";
import ScrollNavigator from "./ScrollNavigator";
import { ScrollProgressBar } from "./ScrollProgressBar";
import { Dictionary } from "./types";

interface ScrollContainerProps {
    children: React.ReactNode;
    dictionary: Dictionary;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children, dictionary }) => {
    const scrollbarRef = useRef<HTMLDivElement>(null);
    const [scrollbar, setScrollbar] = useState<Scrollbar | null>(null);

    useEffect(() => {
        if (scrollbarRef.current) {
            const scrollbarInstance = Scrollbar.init(scrollbarRef.current, {
                damping: 0.07,
            });
            setScrollbar(scrollbarInstance);

            return () => {
                scrollbarInstance.destroy();
            };
        }
    }, []);

    return (
        <>
            <NavBar dictionary={dictionary} scrollbar={scrollbar} />
            <div ref={scrollbarRef} style={{ height: '100vh' }}>
                {children}
            </div>
            <ScrollNavigator scrollbar={scrollbar} />
            <ScrollProgressBar scrollbar={scrollbar} />
        </>
    );
};

export default ScrollContainer;
