'use client';

import { useState, useEffect } from 'react';
import {FiPhone} from "react-icons/fi";
import { Dictionary, NavItem } from './types';
import { useScroll } from './ScrollContext';

import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

export const NavBar = ({ dictionary }: { dictionary: Dictionary }) => {
    const { scrollbar } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>(''); // Changed from 'home' to empty string

    const navItems = dictionary.navItems;

    useEffect(() => {
        if (!scrollbar) return;

        const handleScroll = () => {
            setScrolled(scrollbar.scrollTop > 10);

            // If at the very top, don't highlight any section
            if (scrollbar.scrollTop === 0) {
                setActiveSection('');
                return;
            }

            // Check which section is currently in view
            const sections = navItems.map(item => item.id);
            const navbarHeight = 80;

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i]);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + scrollbar.scrollTop;
                    const currentScrollPosition = scrollbar.scrollTop + navbarHeight;

                    if (currentScrollPosition >= elementTop - 100) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        let ticking = false;
        const throttledHandleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        handleScroll();

        scrollbar.addListener(throttledHandleScroll);

        return () => scrollbar.removeListener(throttledHandleScroll);
    }, [scrollbar, navItems]);

    const scrollToSection = (sectionId: string) => {
        if (!scrollbar) return;

        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + scrollbar.scrollTop - navbarHeight;

            scrollbar.scrollTo(0, elementPosition, 600);
        }
    };

    return (
        <nav
            className={`transition-all duration-300 mt-2 sm:mt-3 w-[92vw] lg:w-[70vw] max-w-5xl m-auto rounded-full
                    h-14 items-center flex px-4 sm:px-5 border shadow-xl backdrop-blur-xl z-40
         ${scrolled ? 'bg-black/80 border-white/20 shadow-black/50' : 'bg-white/5 border-white/10'}
        `}
        >
            <div className="w-full h-full m-auto flex items-center justify-between">
                <a
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => scrollToSection("home")}
                >
                    <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#609BE3] via-[#646DD2] to-[#C9AA71] flex items-center justify-center text-white text-[11px] font-black shadow-md group-hover:scale-105 transition-transform">
                        CO
                    </span>
                    <span className="hidden sm:inline-block font-extrabold text-sm tracking-tight text-white group-hover:text-[#C9AA71] transition-colors">
                        Caio Oliveira
                    </span>
                </a>

                <ul className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider relative font-semibold">
                    {navItems.map((item: NavItem) => (
                        <li key={item.id} className="relative">
                            <a
                                onClick={() => scrollToSection(item.id)}
                                className={`transition-all duration-300 cursor-pointer relative block py-1.5
                                    ${activeSection === item.id ? 'text-[#C9AA71] font-bold' : 'text-gray-300 hover:text-white'}
                                `}
                            >
                                {item.label}
                                {/* Active section indicator bar */}
                                <span
                                    className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-[#609BE3] to-[#C9AA71] transition-all duration-300 ease-out rounded-full
                                        ${activeSection === item.id ? 'w-full opacity-100' : 'w-0 opacity-0'}
                                    `}
                                />
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">
                    <LanguageSwitcher />
                    <ThemeToggle />
                    <a
                        href="tel:+351916248973"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md transition-all duration-300 transform hover:scale-105 shadow-sm"
                        aria-label="Phone"
                    >
                        <FiPhone className="w-3.5 h-3.5 text-[#C9AA71]" />
                        <span className="hidden lg:inline tracking-wide">+351 916 248 973</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};
