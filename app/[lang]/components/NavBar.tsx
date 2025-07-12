'use client';

import { useState, useEffect } from 'react';
import {FiPhone} from "react-icons/fi";
import { Dictionary, NavItem } from './types';
import { useScroll } from './ScrollContext';

export const NavBar = ({ dictionary }: { dictionary: Dictionary }) => {
    const { scrollbar } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    const navItems = dictionary.navItems;

    useEffect(() => {
        if (!scrollbar) return;

        const handleScroll = () => {
            setScrolled(scrollbar.scrollTop > 10);
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
    }, [scrollbar]);

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
            style={{ backgroundColor: scrolled ? 'white' : 'transparent' }} // Temporary: to test scrolled state
        >
            <div className="w-full h-full m-auto px-4 py-3 flex items-center justify-between">
                <a
                    className="text-[3rem] font-bold cursor-pointer"
                    onClick={() => scrollToSection("home")}
                    style={{ color: scrolled ? 'black' : 'white' }}
                >
                    CO
                </a>

                <ul className={`hidden md:flex gap-6 text-sm uppercase`}>
                    {navItems.map((item: NavItem) => (
                        <li key={item.id} className="relative">
                            <a
                                onClick={() => scrollToSection(item.id)}
                                className={`hover:text-[#C9AA71] transition-colors cursor-pointer text-[1.2rem] font-bold`}
                                style={{ color: scrolled ? 'black' : 'white' }}
                            >
                                {item.label}
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
