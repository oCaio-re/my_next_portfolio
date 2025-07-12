'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { Dictionary } from './types';
import ScrollContainer from './ScrollContainer';

interface ScrollContextType {
    // Add any scroll-related methods you need
    scrollTo?: (target: string | number) => void;
    scrollbar?: any;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (context === undefined) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
};

interface ScrollProviderProps {
    children: ReactNode;
    dictionary: Dictionary;
}

const ScrollProvider: React.FC<ScrollProviderProps> = ({ children, dictionary }) => {
    const scrollContextValue: ScrollContextType = {
        // Add your scroll methods here
        scrollTo: (target: string | number) => {
            // Implement scroll to functionality
            console.log('Scroll to:', target);
        },
    };

    return (
        <ScrollContext.Provider value={scrollContextValue}>
            <ScrollContainer dictionary={dictionary}>
                {children}
            </ScrollContainer>
        </ScrollContext.Provider>
    );
};

export default ScrollProvider;
