"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { FiX, FiPhone } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { RxHamburgerMenu } from "react-icons/rx";
import { useScroll } from './ScrollContext';

import { Dictionary, NavItem } from "./types";

import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

interface MobileNavbarProps {
    dictionary?: Dictionary;
}

export function MobileNavbar({ dictionary }: MobileNavbarProps) {
    const { scrollbar } = useScroll();
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const [activeSection, setActiveSection] = useState("home");
    const menuRef = useRef<HTMLDivElement>(null);

    const navItems = useMemo(() => dictionary?.navItems || [
        { id: "home", label: "HOME" },
        { id: "about", label: "ABOUT" },
        { id: "projects", label: "PROJECTS" },
        { id: "services", label: "SERVICES" },
        { id: "contact", label: "CONTACT" },
    ], [dictionary]);

    useEffect(() => {
        if (isOpen && menuRef.current) {
            setHeight(menuRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!scrollbar) return;

        const handleScroll = () => {
            const sections = navItems.map(item => item.id);
            const scrollPosition = scrollbar.scrollTop + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const element = document.getElementById(section);
                if (element) {
                    const elementRect = element.getBoundingClientRect();
                    const elementTop = elementRect.top + scrollbar.scrollTop;
                    const elementBottom = elementRect.bottom + scrollbar.scrollTop;

                    if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        scrollbar.addListener(handleScroll);
        return () => scrollbar.removeListener(handleScroll);
    }, [scrollbar, navItems]);

    const scrollToSection = (sectionId: string) => {
        setIsOpen(false);
        if (!scrollbar) return;

        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + scrollbar.scrollTop - navbarHeight;
            scrollbar.scrollTo(0, elementPosition, 600);
        }
    };

    return (
        <div className="relative top-3 m-auto left-0 right-0 w-[95vw]">
            <div className="flex items-center justify-between px-4 py-2.5 bg-black/80 border border-white/15 backdrop-blur-xl rounded-full shadow-2xl text-white">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-1.5 rounded-full text-white hover:bg-white/10 focus:outline-none transition-colors"
                    aria-label="Toggle menu"
                >
                    <div className="relative w-6 h-6 m-auto flex items-center justify-center">
                        <RxHamburgerMenu
                            className={cn(
                                "absolute w-6 h-6 transition-all duration-300",
                                isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                            )}
                        />
                        <FiX
                            className={cn(
                                "absolute w-6 h-6 transition-all duration-300",
                                isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                            )}
                        />
                    </div>
                </button>

                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => scrollToSection('home')}
                >
                    <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#609BE3] via-[#646DD2] to-[#C9AA71] flex items-center justify-center text-white text-[10px] font-black shadow-md">
                        CO
                    </span>
                    <span className="text-base font-extrabold tracking-tight text-white">
                        Caio
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <LanguageSwitcher />
                    <ThemeToggle />
                    <a
                        href="tel:+351916248973"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-white/10 border border-white/15 backdrop-blur-md"
                        aria-label="Phone"
                    >
                        <FiPhone className="w-3.5 h-3.5 text-[#C9AA71]" />
                        <span className="hidden sm:inline text-xs">+351 916 248 973</span>
                    </a>
                </div>
            </div>

            <div
                ref={menuRef}
                className={cn(
                    "bg-black/90 backdrop-blur-2xl border border-white/15 overflow-hidden transition-all duration-300 ease-in-out",
                    "w-full absolute top-full left-0 rounded-2xl mt-2 z-50 shadow-2xl"
                )}
                style={{ height: `${height}px` }}
            >
                <nav className="px-3 py-3 space-y-1.5 text-xs text-gray-300 font-semibold tracking-wider uppercase">
                    {navItems.map((item: NavItem) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={cn(
                                "block py-3 px-4 rounded-xl transition-all w-full text-left font-bold tracking-wider",
                                activeSection === item.id 
                                    ? "bg-white/10 text-[#C9AA71] border-l-2 border-[#C9AA71]" 
                                    : "hover:bg-white/5 hover:text-white"
                            )}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
}