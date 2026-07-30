'use client';

import { useParams } from 'next/navigation';
import { getDictionary } from '@/get-dictionary';
import ScrollProvider from './ScrollContext'; // Import from ScrollContext instead
import { ReactNode, useEffect, useState } from 'react';
import { Dictionary } from './types';
import { i18n } from '@/i18n';

type Locale = typeof i18n.locales[number];

function isValidLocale(lang: any): lang is Locale {
    return i18n.locales.includes(lang);
}

import { ThemeProvider } from './ThemeContext';

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
    const params = useParams();
    const [dictionary, setDictionary] = useState<Dictionary | null>(null);

    const langParam = Array.isArray(params.lang) ? params.lang[0] : params.lang;

    useEffect(() => {
        const fetchDictionary = async () => {
            let langToFetch: Locale;

            if (isValidLocale(langParam)) {
                langToFetch = langParam;
            } else {
                langToFetch = i18n.defaultLocale;
                console.warn(`Invalid locale "${langParam}" detected. Falling back to default "${i18n.defaultLocale}".`);
            }

            const dict = await getDictionary(langToFetch);
            setDictionary(dict);
        };

        fetchDictionary();
    }, [langParam]);

    if (!dictionary) {
        return null;
    }

    return (
        <ThemeProvider>
            <ScrollProvider dictionary={dictionary}>
                {children}
            </ScrollProvider>
        </ThemeProvider>
    );
};

export default LayoutWrapper;
