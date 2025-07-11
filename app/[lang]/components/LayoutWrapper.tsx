// app/components/LayoutWrapper.tsx
'use client';

import { useParams } from 'next/navigation';
import { getDictionary } from '@/get-dictionary';
import ScrollContainer from './ScrollContainer';
import { ReactNode, useEffect, useState } from 'react';
import { Dictionary } from './types';
import { i18n } from '@/i18n'; // <-- 1. Import your i18n configuration

// --- 2. Create a dynamic Locale type from your config ---
// This will automatically be "en" | "pt"
type Locale = typeof i18n.locales[number];

// --- 3. Create the Type Guard function ---
// This function checks if a string is a valid Locale and tells TypeScript it is.
function isValidLocale(lang: any): lang is Locale {
    return i18n.locales.includes(lang);
}

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
    const params = useParams();
    const [dictionary, setDictionary] = useState<Dictionary | null>(null);

    const langParam = Array.isArray(params.lang) ? params.lang[0] : params.lang;

    useEffect(() => {
        const fetchDictionary = async () => {
            let langToFetch: Locale;

            // --- 4. Use the type guard ---
            if (isValidLocale(langParam)) {
                // If the check passes, TypeScript now knows langParam is a valid Locale
                langToFetch = langParam;
            } else {
                // If the URL has an invalid lang, fall back to the default
                langToFetch = i18n.defaultLocale;
                console.warn(`Invalid locale "${langParam}" detected. Falling back to default "${i18n.defaultLocale}".`);
            }

            const dict = await getDictionary(langToFetch); // <-- The error is now gone!
            setDictionary(dict);
        };

        fetchDictionary();
    }, [langParam]); // Dependency array uses the derived parameter

    // Show a loading state or nothing until the dictionary is ready
    if (!dictionary) {
        return null; // Or a loading spinner component
    }

    return (
        <ScrollContainer dictionary={dictionary}>
            {children}
        </ScrollContainer>
    );
};

export default LayoutWrapper;
