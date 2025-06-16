'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

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

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 mt-[1rem] w-[70vw] m-auto rounded-lg
                        h-20 items-center hidden px-5 md:flex 
             ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}
            `}
        >
            <div className="w-full m-auto px-4 py-3 flex items-center justify-between ">
                <a
                    className="text-[3rem] font-bold cursor-pointer"
                    onClick={() => scrollToSection("home")}
                >
                    CO
                </a>

                <ul className="hidden md:flex gap-6 text-sm uppercase">
                    {navItems.map((item) => (
                        <li key={item} className="relative">
                            <a
                                onClick={() => scrollToSection(item)}
                                className={`hover:text-blue-600 transition-colors cursor-pointer text-[1.2rem] font-bold ${
                                    activeSection === item ? 'text-blue-600' : 'text-black'
                                }`}
                            >
                                {item}
                                <span
                                    className={`absolute -bottom-1 left-0 h-[3px] w-full bg-blue-600 rounded-full transition-transform duration-300 ${
                                        activeSection === item ? 'scale-x-100' : 'scale-x-0'
                                    } origin-left`}
                                />
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4" />
                    <span>+1 (234) 567-8901</span>
                </div>
            </div>
        </nav>
    );
};
