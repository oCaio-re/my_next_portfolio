'use client';

import React, { createContext, useContext, ReactNode, useState } from 'react';
import ScrollContainer from './ScrollContainer';
import { Dictionary } from './types';

interface ScrollContextType {
    scrollbar: any;
    scrollTo: (target: string | number) => void;
    // Add any other methods your components are expecting
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
    const [scrollbarInstance, setScrollbarInstance] = useState<any>(null);

    const scrollTo = (target: string | number) => {
        if (scrollbarInstance) {
            if (typeof target === 'string') {
                // Scroll to element by ID or selector
                const element = document.querySelector(target);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const containerRect = scrollbarInstance.containerEl.getBoundingClientRect();
                    const scrollTop = rect.top - containerRect.top + scrollbarInstance.scrollTop;
                    scrollbarInstance.scrollTo(0, scrollTop, 1000);
                }
            } else {
                // Scroll to pixel position
                scrollbarInstance.scrollTo(0, target, 1000);
            }
        }
    };

    const contextValue: ScrollContextType = {
        scrollbar: scrollbarInstance,
        scrollTo,
        // Add any other methods your components need
    };

    return (
        <ScrollContext.Provider value={contextValue}>
            <ScrollContainerWrapper
                dictionary={dictionary}
                onScrollbarInit={setScrollbarInstance}
            >
                {children}
            </ScrollContainerWrapper>
        </ScrollContext.Provider>
    );
};

// Wrapper component to get scrollbar instance
const ScrollContainerWrapper: React.FC<{
    children: ReactNode;
    dictionary: Dictionary;
    onScrollbarInit: (scrollbar: any) => void;
}> = ({ children, dictionary, onScrollbarInit }) => {
    return (
        <ScrollContainer
            dictionary={dictionary}
            onScrollbarInit={onScrollbarInit}
        >
            {children}
        </ScrollContainer>
    );
};

export default ScrollProvider;
