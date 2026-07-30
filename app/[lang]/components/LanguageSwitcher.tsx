'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { type Locale } from '@/i18n';
import { GB, PT } from 'country-flag-icons/react/3x2';

export default function LanguageSwitcher() {
    const pathName = usePathname();

    const redirectedPathName = (locale: Locale) => {
        if (!pathName) return `/${locale}`;
        const segments = pathName.split('/');
        if (segments.length > 1) {
            segments[1] = locale;
            return segments.join('/');
        }
        return `/${locale}`;
    };

    const currentLocale = pathName?.split('/')[1] || 'pt';

    return (
        <div className="inline-flex items-center p-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-inner text-xs font-bold z-50 pointer-events-auto">
            <Link
                href={redirectedPathName('pt')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer ${
                    currentLocale === 'pt'
                        ? 'bg-gradient-to-r from-[#609BE3] to-[#646DD2] text-white shadow-md'
                        : 'text-gray-400 hover:text-white'
                }`}
                aria-label="Português"
            >
                <PT className="h-3.5 w-4 rounded-sm object-cover" />
                <span className="tracking-wide">PT</span>
            </Link>
            <Link
                href={redirectedPathName('en')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer ${
                    currentLocale === 'en'
                        ? 'bg-gradient-to-r from-[#609BE3] to-[#646DD2] text-white shadow-md'
                        : 'text-gray-400 hover:text-white'
                }`}
                aria-label="English"
            >
                <GB className="h-3.5 w-4 rounded-sm object-cover" />
                <span className="tracking-wide">EN</span>
            </Link>
        </div>
    );
}
