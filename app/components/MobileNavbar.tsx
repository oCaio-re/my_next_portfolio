"use client";

import { useState, useRef, useEffect } from "react";
import { FiX, FiPhone } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { RxHamburgerMenu } from "react-icons/rx";

export function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const [activeSection, setActiveSection] = useState("home");
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && menuRef.current) {
            setHeight(menuRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "services", "projects", "contact"];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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
        setIsOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="md:hidden fixed top-3 m-auto left-0 right-0 z-100 w-[95vw]">
            <div className="flex items-center justify-between px-4 py-3 bg-white rounded-md">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-md"
                    aria-label="Toggle menu"
                >
                    <div className="relative w-5 h-5 m-auto">
                        <RxHamburgerMenu
                            className={cn(
                                "absolute w-7 h-7 transition-all duration-300",
                                isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                            )}
                        />
                        <FiX
                            className={cn(
                                "absolute w-7 h-7 transition-all duration-300",
                                isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                            )}
                        />
                    </div>
                </button>

                <div
                    className="text-3xl font-semibold mx-auto cursor-pointer"
                    onClick={() => scrollToSection('home')}
                >
                    Caio
                </div>

                <div className="flex items-center gap-4">
                    <FiPhone className="w-8 h-8 bg-[#C9AA71] rounded-full p-2 text-white" />
                    <a href="tel:+351916248973" className="text-sm font-medium border-2 text-[#C9AA71] rounded-full p-2 border-[#C9AA71]">
                        916-248-973
                    </a>
                </div>
            </div>

            <div
                ref={menuRef}
                className={cn(
                    "bg-white overflow-hidden transition-all duration-300 ease-in-out",
                    "border-b w-full absolute top-full left-0 rounded-md -mt-4 -z-4 shadow-md"
                )}
                style={{ height: `${height}px` }}
            >
                <nav className="px-4 py-2 space-y-4 text-[0.8rem] justify-items-start text-gray-500 font-semibold">
                    <button
                        onClick={() => scrollToSection('home')}
                        className={cn(
                            "block py-2 px-3 rounded transition-colors w-full text-left",
                            activeSection === 'home' ? "bg-[#C9AA71]/10 text-[#C9AA71] border-l-4 border-[#C9AA71]" : "hover:bg-gray-100"
                        )}
                    >
                        HOME
                    </button>
                    <button
                        onClick={() => scrollToSection('about')}
                        className={cn(
                            "block py-2 px-3 rounded transition-colors w-full text-left",
                            activeSection === 'about' ? "bg-[#C9AA71]/10 text-[#C9AA71] border-l-4 border-[#C9AA71]" : "hover:bg-gray-100"
                        )}
                    >
                        ABOUT
                    </button>
                    <button
                        onClick={() => scrollToSection('services')}
                        className={cn(
                            "block py-2 px-3 rounded transition-colors w-full text-left",
                            activeSection === 'services' ? "bg-[#C9AA71]/10 text-[#C9AA71] border-l-4 border-[#C9AA71]" : "hover:bg-gray-100"
                        )}
                    >
                        SERVICES
                    </button>
                    <button
                        onClick={() => scrollToSection('projects')}
                        className={cn(
                            "block py-2 px-3 rounded transition-colors w-full text-left",
                            activeSection === 'projects' ? "bg-[#C9AA71]/10 text-[#C9AA71] border-l-4 border-[#C9AA71]" : "hover:bg-gray-100"
                        )}
                    >
                        PROJECTS
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className={cn(
                            "block py-2 px-3 rounded transition-colors w-full text-left",
                            activeSection === 'contact' ? "bg-[#C9AA71]/10 text-[#C9AA71] border-l-4 border-[#C9AA71]" : "hover:bg-gray-100"
                        )}
                    >
                        CONTACT
                    </button>
                </nav>
            </div>
        </div>
    );
}