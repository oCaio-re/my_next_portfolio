'use client';

import { useState, useEffect } from 'react';
import {FiPhone} from "react-icons/fi";
import { Dictionary, NavItem } from './types';
import { useScroll } from './ScrollContext';

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
            className={`fixed top-0 left-0 right-0 z-80 transition-all duration-300 mt-[1rem] w-[70vw] m-auto rounded-lg
                    h-20 items-center hidden px-5 lg:flex 
         ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}
        `}
            style={{ backgroundColor: scrolled ? 'white' : 'transparent' }}
        >
            <div className="w-full h-full m-auto px-4 py-3 flex items-center justify-between">
                <a
                    className="text-[3rem] font-bold cursor-pointer"
                    onClick={() => scrollToSection("home")}
                    style={{ color: scrolled ? 'black' : 'white' }}
                >
                    CO
                </a>

                <ul className={`hidden md:flex gap-6 text-sm uppercase relative`}>
                    {navItems.map((item: NavItem) => (
                        <li key={item.id} className="relative">
                            <a
                                onClick={() => scrollToSection(item.id)}
                                className={`hover:text-[#C9AA71] transition-all duration-300 cursor-pointer text-[1.2rem] font-bold relative block pb-2
                                    ${activeSection === item.id ? 'text-[#C9AA71]' : ''}
                                `}
                                style={{
                                    color: activeSection === item.id ? '#C9AA71' : (scrolled ? 'black' : 'white')
                                }}
                            >
                                {item.label}
                                {/* Active section indicator bar */}
                                <span
                                    className={`absolute bottom-0 left-0 h-[3px] bg-[#C9AA71] transition-all duration-300 ease-out
                                        ${activeSection === item.id ? 'w-full opacity-100' : 'w-0 opacity-0'}
                                    `}
                                />
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={`flex items-center gap-4`}>
                    <FiPhone className={`w-10 h-10 bg-[#C9AA71] rounded-full px-2  py-1 text-white ${scrolled ? 'bg-[#C9AA71]' : 'bg-transparent'}`} />
                    <a href="tel:+351916248973" className={`text-[1rem] font-bold border-2 text-[#C9AA71] rounded-full px-2  py-1 border-[#C9AA71]
                     ${scrolled ? 'text-[#C9AA71]' : 'text-white'} ${scrolled ? 'border-[#C9AA71]' : 'border-transparent'}`}>
                        +351 916 248 973
                    </a>
                </div>
            </div>
        </nav>
    );
};
