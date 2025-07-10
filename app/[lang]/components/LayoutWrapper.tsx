'use client';

import React from 'react';
import { ScrollProgressBar } from './ScrollProgressBar';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ScrollProgressBar />
            {children}
        </>
    );
}
