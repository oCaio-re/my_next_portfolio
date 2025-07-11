'use client';

import React, { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const scrollbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollbarRef.current) {
            const scrollbar = Scrollbar.init(scrollbarRef.current, {
                damping: 0.07,
            });

            return () => {
                scrollbar.destroy();
            };
        }
    }, []);

    return (
        <div ref={scrollbarRef} style={{ height: '100vh' }}>
            {children}
        </div>
    );
}
