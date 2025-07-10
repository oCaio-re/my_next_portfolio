'use client';
import { useState, useEffect } from 'react';
import {FiPhone} from "react-icons/fi";
import { Dictionary, NavItem } from './types';

export const NavBar = ({ dictionary }: { dictionary: Dictionary }) => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('home');

    const navItems = dictionary.navItems;

    useEffect(() => {
        const handleScroll = () => {
            // Handle navbar background change
            setScrolled(window.scrollY > 10);

            const sections = navItems.map((item: NavItem) => item.id);
            const scrollPosition = window.scrollY + 100; // Add offset for navbar height

            // Find the current section
            let currentSection = 'home'; // default

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    if (scrollPosition >= offsetTop) {
                        currentSection = section;
                        break;
                    }
                }
            }

            setActiveSection(currentSection);
        };

        // Use throttle to improve performance
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

        // Set initial state
        handleScroll();

        window.addEventListener('scroll', throttledHandleScroll, { passive: true });

        return () => window.removeEventListener('scroll', throttledHandleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Calculate the offset to account for the fixed navbar
            const navbarHeight = 80; // Adjust this to match your navbar height
            const elementPosition = element.offsetTop - navbarHeight;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 mt-[1rem] w-[70vw] m-auto rounded-lg
                        h-20 items-center hidden px-5 lg:flex 
             ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} ${scrolled ? 'text-black' : 'text-white'}
            `}
        >
            <div className="w-full m-auto px-4 py-3 flex items-center justify-between ">
                <a
                    className="text-[3rem] font-bold cursor-pointer"
                    onClick={() => scrollToSection("home")}
                >
                    CO
                </a>

                <ul className={`hidden md:flex gap-6 text-sm uppercase`}>
                    {navItems.map((item: NavItem) => (
                        <li key={item.id} className="relative">
                            <a
                                onClick={() => scrollToSection(item.id)}
                                className={`hover:text-[#C9AA71] transition-colors cursor-pointer text-[1.2rem] font-bold 
                                ${activeSection === item.id ? 'text-[#C9AA71]' : ''} ${scrolled ? 'text-black' : 'text-white'}
                                `}
                            >
                                {item.label}
                                <span
                                    className={`absolute -bottom-1 left-0 h-[3px] w-full bg-[#C9AA71] rounded-full transition-transform duration-300 
                                    ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0'} 
                                     origin-left`}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
                <div className={`flex items-center gap-4`}>
                    <FiPhone className={`w-10 h-10 bg-[#C9AA71] rounded-full px-2  py-1 text-white ${scrolled ? 'bg-[#C9AA71]' : 'bg-transparent'}`} />
                    <a href="tel:+351916248973" className={`text-[1.2rem] font-medium border-2 text-[#C9AA71] rounded-full px-2  py-1 border-[#C9AA71]
                     ${scrolled ? 'text-[#C9AA71]' : 'text-white'} ${scrolled ? 'border-[#C9AA71]' : 'border-transparent'}`}>
                        916-248-973
                    </a>
                </div>
            </div>
        </nav>
    );
};
