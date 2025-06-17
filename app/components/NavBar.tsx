'use client';

import { useState, useEffect } from 'react';
import {FiPhone} from "react-icons/fi";

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('home');

    const navItems = ['home', 'about', 'services', 'projects', 'contact'];

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 } // fine-tune this threshold as needed
        );

        navItems.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => {
            navItems.forEach((id) => {
                const section = document.getElementById(id);
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "services", "projects", "contact"];
            const scrollPosition = window.scrollY;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop + 300 && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
                    {navItems.map((item) => (
                        <li key={item} className="relative">
                            <a
                                onClick={() => scrollToSection(item)}
                                className={`hover:text-[#C9AA71] transition-colors cursor-pointer text-[1.2rem] font-bold 
                                ${activeSection === item ? 'text-[#C9AA71]' : 'text-black'} ${scrolled ? 'text-black' : 'text-white'}
                                `}
                            >
                                {item}
                                <span
                                    className={`absolute -bottom-1 left-0 h-[3px] w-full bg-[#C9AA71] rounded-full transition-transform duration-300 
                                    ${activeSection === item ? 'scale-x-100' : 'scale-x-0'} ${scrolled ? 'bg-[#C9AA71]' : 'bg-transparent'}
                                     origin-left`}
                                />
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={`flex items-center gap-4`}>
                    <FiPhone className={`w-10 h-10 bg-[#C9AA71] rounded-full px-2  py-1 text-white ${scrolled ? 'bg-[#C9AA71]' : 'bg-transparent'}`} />
                    <a href="tel:+351916248973" className={`text-[1.4rem] font-medium border-2 text-[#C9AA71] rounded-full px-2  py-1 border-[#C9AA71]
                     ${scrolled ? 'text-[#C9AA71]' : 'text-white'} ${scrolled ? 'border-[#C9AA71]' : 'border-transparent'}`}>
                        916-248-973
                    </a>
                </div>
            </div>
        </nav>
    );
};
