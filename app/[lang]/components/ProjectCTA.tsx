'use client'

import { motion } from "framer-motion";
import { useScroll } from "./ScrollContext";

export default function ProjectCTA({ dictionary }: { dictionary: any }) {
    const { scrollbar } = useScroll();
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
        <section className="relative py-12 sm:py-16 bg-black overflow-hidden">
            <div className="container relative z-10 mx-auto px-4 max-w-4xl">
                <motion.div 
                    className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/15 backdrop-blur-2xl shadow-2xl text-center relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#646DD2]/25 rounded-full blur-[120px] pointer-events-none" />

                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
                        dangerouslySetInnerHTML={{ __html: dictionary.page.project_cta.title }} 
                    />

                    <div className="flex justify-center">
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-base text-white bg-gradient-to-r from-[#609BE3] via-[#646DD2] to-[#C9AA71] shadow-2xl shadow-[#646DD2]/30 hover:shadow-[#646DD2]/50 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                        >
                            {dictionary.page.project_cta.button}
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

