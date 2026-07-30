'use client'

import React from 'react';
import ProjectCarousel, { ProjectData } from "./ProjectCarousel";
import {SiChakraui, SiSelenium, SiMysql, SiFastapi, SiVite} from "react-icons/si";
import {FaReact, FaHtml5, FaPython} from "react-icons/fa";
import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {BiLogoTypescript} from "react-icons/bi";
import { motion } from 'framer-motion';

function Projects({ dictionary }: { dictionary: any }) {
    const projectsData: ProjectData[] = [
        {
            id: 'lucas-alves',
            title: 'Lucas Alves',
            category: 'PORTFOLIO',
            logoSrc: '/images/LA/logo-lucas.png',
            previewImages: [
                "/images/LA/home-page.png",
                "/images/LA/trabalhos.png",
                "/images/LA/depoimentos.png",
            ],
            texts: [
                dictionary.page.projects.lucas_alves.text_1,
                dictionary.page.projects.lucas_alves.text_2,
                dictionary.page.projects.lucas_alves.text_3,
            ],
            deployLink: 'https://lucasfotos.art/',
            techs: [
                { name: 'React', icon: <FaReact key="react" className="w-5 h-5 hover:text-sky-400 transition-colors" /> },
                { name: 'Next.js', icon: <RiNextjsFill key="next" className="w-5 h-5 hover:text-white transition-colors" /> },
                { name: 'TypeScript', icon: <BiLogoTypescript key="ts" className="w-5 h-5 hover:text-blue-400 transition-colors" /> },
                { name: 'HTML5', icon: <FaHtml5 key="html" className="w-5 h-5 hover:text-orange-400 transition-colors" /> },
                { name: 'Tailwind CSS', icon: <RiTailwindCssFill key="tw" className="w-5 h-5 hover:text-cyan-400 transition-colors" /> },
            ]
        },
        {
            id: 'voar-bem',
            title: 'Voar Bem',
            category: 'WEBSITE',
            logoSrc: '/images/VB/logo-sfundo.png',
            previewImages: [
                "/images/VB/home.png",
                "/images/VB/hoteis.png",
                "/images/VB/pacotes.png",
            ],
            texts: [
                dictionary.page.projects.voar_bem.text_1,
                dictionary.page.projects.voar_bem.text_2,
                dictionary.page.projects.voar_bem.text_3,
            ],
            deployLink: 'https://voar-bem.vercel.app/',
            techs: [
                { name: 'React', icon: <FaReact key="react" className="w-5 h-5 hover:text-sky-400 transition-colors" /> },
                { name: 'Next.js', icon: <RiNextjsFill key="next" className="w-5 h-5 hover:text-white transition-colors" /> },
                { name: 'TypeScript', icon: <BiLogoTypescript key="ts" className="w-5 h-5 hover:text-blue-400 transition-colors" /> },
                { name: 'HTML5', icon: <FaHtml5 key="html" className="w-5 h-5 hover:text-orange-400 transition-colors" /> },
                { name: 'Tailwind CSS', icon: <RiTailwindCssFill key="tw" className="w-5 h-5 hover:text-cyan-400 transition-colors" /> },
            ]
        },
        {
            id: 'all-tasty-caffe',
            title: 'All Tasty Caffe',
            category: 'WEBSITE',
            logoSrc: '/images/AT/AT_logo.png',
            previewImages: [
                "/images/AT/home-page.png",
                "/images/AT/hot-beverages.png",
                "/images/AT/our-community.png",
            ],
            texts: [
                dictionary.page.projects.all_tasty_caffe.text_1,
                dictionary.page.projects.all_tasty_caffe.text_2,
                dictionary.page.projects.all_tasty_caffe.text_3,
            ],
            deployLink: 'https://www.alltasty.cafe/',
            techs: [
                { name: 'React', icon: <FaReact key="react" className="w-5 h-5 hover:text-sky-400 transition-colors" /> },
                { name: 'Vite', icon: <SiVite key="vite" className="w-5 h-5 hover:text-purple-400 transition-colors" /> },
                { name: 'TypeScript', icon: <BiLogoTypescript key="ts" className="w-5 h-5 hover:text-blue-400 transition-colors" /> },
                { name: 'HTML5', icon: <FaHtml5 key="html" className="w-5 h-5 hover:text-orange-400 transition-colors" /> },
                { name: 'Chakra UI', icon: <SiChakraui key="chakra" className="w-5 h-5 hover:text-teal-400 transition-colors" /> },
            ]
        },
        {
            id: 'sogrape-wines',
            title: 'Sogrape Wines',
            category: 'WEBAPP',
            logoSrc: '/images/wine-search/sogrape-logo.svg',
            previewImages: [
                "/images/wine-search/product-list.png",
                "/images/wine-search/product-page.png",
                "/images/wine-search/product-graph.png",
            ],
            texts: [
                dictionary.page.projects.sogrape_wines.text_1,
                dictionary.page.projects.sogrape_wines.text_2,
                dictionary.page.projects.sogrape_wines.text_3,
            ],
            techs: [
                { name: 'Python', icon: <FaPython key="py" className="w-5 h-5 hover:text-amber-400 transition-colors" /> },
                { name: 'Selenium', icon: <SiSelenium key="selenium" className="w-5 h-5 hover:text-emerald-400 transition-colors" /> },
                { name: 'MySQL', icon: <SiMysql key="mysql" className="w-5 h-5 hover:text-blue-400 transition-colors" /> },
                { name: 'FastAPI', icon: <SiFastapi key="fastapi" className="w-5 h-5 hover:text-teal-400 transition-colors" /> },
            ]
        },
        {
            id: 'hope-connections',
            title: 'Hope Connections',
            category: 'WEBSITE',
            logoSrc: '/images/HC/hc_logo.svg',
            previewImages: [
                "/images/HC/home-page.png",
                "/images/HC/zoe-school.png",
                "/images/HC/about-us.png",
            ],
            texts: [
                dictionary.page.projects.hope_connections.text_1,
                dictionary.page.projects.hope_connections.text_2,
                dictionary.page.projects.hope_connections.text_3,
            ],
            deployLink: 'https://hope-connections-hmqdx.ondigitalocean.app',
            techs: [
                { name: 'React', icon: <FaReact key="react" className="w-5 h-5 hover:text-sky-400 transition-colors" /> },
                { name: 'Vite', icon: <SiVite key="vite" className="w-5 h-5 hover:text-purple-400 transition-colors" /> },
                { name: 'TypeScript', icon: <BiLogoTypescript key="ts" className="w-5 h-5 hover:text-blue-400 transition-colors" /> },
                { name: 'HTML5', icon: <FaHtml5 key="html" className="w-5 h-5 hover:text-orange-400 transition-colors" /> },
                { name: 'Chakra UI', icon: <SiChakraui key="chakra" className="w-5 h-5 hover:text-teal-400 transition-colors" /> },
            ]
        }
    ];

    return (
        <section id="projects" className="relative py-12 sm:py-16 scroll-mt-24 overflow-hidden bg-black">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/3 right-0 w-[350px] h-[350px] bg-[#609BE3]/15 rounded-full blur-[140px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                
                {/* Section Header */}
                <motion.div 
                    className="flex flex-col items-start mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#C9AA71] text-xs font-mono font-bold tracking-widest uppercase mb-1.5">
                        {`// ${dictionary.page.projects.title}`}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Projetos em Destaque
                    </h2>
                </motion.div>

                {/* 3D Fish-Eye Circular Carousel */}
                <ProjectCarousel projects={projectsData} dictionary={dictionary} />

            </div>
        </section>
    );
}

export default Projects;