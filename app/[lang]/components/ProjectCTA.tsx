'use client'

import { motion } from "framer-motion";

export default function ProjectCTA({ dictionary }: { dictionary: any }) {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80; // Adjust this to match your navbar height
            const elementPosition = element.offsetTop - navbarHeight;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };
    return (
        <motion.div className="mt-[15rem] text-center w-fit py-5 m-auto "
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 1 }}
        >
            <h3 className="
        text-4xl md:text-5xl lg:text-[5rem] font-extrabold
        bg-clip-text text-transparent drop-shadow-xl drop-shadow-[#646DD2]/50 hover:shadow-white
        bg-gradient-to-r from-[#609BE3] via-[#646DD2] to-purple-500 py-3
      "
            dangerouslySetInnerHTML={{ __html: dictionary.page.project_cta.title }} />
            <div className="mt-10">
                <a
                    onClick={() => scrollToSection("contact")}
                    className="
            group inline-block px-12 py-5 rounded-lg
            bg-[#646DD2] text-white font-bold text-xl
            transition-transform duration-300 ease-in-out
            hover:scale-105 hover:bg-white hover:text-black
            shadow-2xl shadow-[#646DD2]/120 hover:shadow-white
          "
                >
                    {dictionary.page.project_cta.button}
                </a>
            </div>
        </motion.div>
    );
}

