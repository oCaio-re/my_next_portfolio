'use client'
import React from 'react';
import ProjectsItem from "@/app/components/ProjectsItem";
import {BiLogoTypescript} from "react-icons/bi";
import {FaReact} from "react-icons/fa";
import {FaHtml5} from "react-icons/fa";
import {SiChakraui} from "react-icons/si";
import {FaPython} from "react-icons/fa";
import {SiSelenium} from "react-icons/si";
import {SiMysql} from "react-icons/si";
import {SiFastapi} from "react-icons/si";
import {RiNextjsFill} from "react-icons/ri";
import {RiTailwindCssFill} from "react-icons/ri";
import {SiVite} from "react-icons/si";
import PaginatedModalButton from "@/app/components/PaginatedModalButton";

function Projects() {
    const text_HC = [
        "An institutional website that presents key information about a Drop-In Centre located in Roscommon, Ireland.",
        "The objective was to present and clearly explain all services available at this Drop-In Center, making it more accessible for those seeking assistance or wishing to offer support..",
        "It is a concise and objective way to communicate and offer support. Please, feel free to explore it on the link below:",
    ];

    const images_HC = [
        "../../images/HC/home-page.png",
        "../../images/HC/zoe-school.png",
        "../../images/HC/about-us.png",
    ];

    const images_WS = [
        "../../images/wine-search/product-list.png",
        "../../images/wine-search/product-page.png",
        "../../images/wine-search/product-graph.png",
    ];
    const text_WS = [
        "A web application with two primary functionalities: collecting wine prices through web scraping and presenting the collected data via an interactive dashboard.",
        "Using this tool, the company was able to collect valuable data and develop commercial strategies aimed at enhancing both sales performance and overall business planning.",
        "The software is proprietary to the company; therefore, no deployment link is available. Feel free to contact me to discuss it further — I would be happy to share more details.",
    ];
    const images_AT = [
        "../../images/AT/home-page.png",
        "../../images/AT/hot-beverages.png",
        "../../images/AT/our-community.png",
    ];
    const text_AT = [
        "A sleek and modern website designed for a coffee shop featuring the main menu, contact information, and details about community services.",
        "The primary objective was to showcase the full range of products while conveying the atmosphere of a cozy, welcoming shop that invites customers in.",
        "Please, feel free to explore the shop website on the link below:",
    ];
    const images_LA = [
        "../../images/LA/home-page.png",
        "../../images/LA/trabalhos.png",
        "../../images/LA/depoimentos.png",
    ];
    const text_LA = [
        "A portfolio website showcasing the primary body of work of a professional photographer, including an extensive collection of photographs and photo shoots.",
        "The primary objective was to design a concise and refined user interface while ensuring an excellent user experience.",
        "Next, present essential information about how the photo shoots are conducted, along with a clear method of communication.\n Please use the (provisional) link below to explore the webpage:",
    ];
    return (
        <section id="projects" className="relative w-[90vw] mt-[8rem] m-auto z-10 md:mt-[15rem] lg:w-[70vw]">
            <img alt="bg-img-1" src="../../images/background/yellow_and_purple_b.png"
                 className="absolute -z-5 top-0 left-0 w-auto h-auto min-w-full min-h-full object-cover scale-140 -mt-[2rem] opacity-80"
            />
            <div className="flex bg-[#646DD2] rounded-lg items-center px-4 py-2 mb-[1em] m-auto lg:rounded-4xl lg:w-[70%] lg:mr-0 lg:ml-auto lg:mt-[15rem]">
                <p className="text-[1.5rem] text-white font-bold ml-auto mr-5 lg:text-[4rem] lg:mr-[3rem] lg:ml-auto">
                    Projects
                </p>
                <img className="w-40 h-40 object-cover rounded-full lg:mr-auto"
                     src="../images/white-desk-work-study-aesthetics.jpg" alt="profile-picture"/>
            </div>
            <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3">
                <div>
                    <ProjectsItem category="PORTFOLIO" title="Lucas Alves" src="../../images/lucas-alves.png"
                                  colorFilter="#C9AA71">
                        <PaginatedModalButton images={images_LA} texts={text_LA} deployLink="https://portfolio-lucas-7fi7l.ondigitalocean.app/"/>
                    </ProjectsItem>
                    <div className="flex justify-around mt-3 lg:mt-5">
                        <FaReact color="#FFFFFF"/><RiNextjsFill color="#FFFFFF"/><BiLogoTypescript color="#FFFFFF"/>
                        <FaHtml5 color="#FFFFFF"/><RiTailwindCssFill color="#FFFFFF"/>
                    </div>
                </div>
                <div>
                    <ProjectsItem category="WEBSITE" title="All Tasty Caffe" src="../../images/AT-image.png"
                                  colorFilter="#646DD2">
                        <PaginatedModalButton images={images_AT} texts={text_AT} deployLink="https://www.alltasty.cafe/"/>
                    </ProjectsItem>
                    <div className="flex justify-around mt-3 lg:mt-5">
                        <FaReact color="#FFFFFF"/><SiVite color="#FFFFFF"/><BiLogoTypescript color="#FFFFFF"/> <FaHtml5
                        color="#FFFFFF"/><SiChakraui color="#FFFFFF"/>
                    </div>
                </div>
                <div>
                    <ProjectsItem category="WEBAPP" title="Sogrape Wines" src="../../images/WS-image.png"
                                  colorFilter="#C9AA71">
                        <PaginatedModalButton images={images_WS} texts={text_WS}/>
                    </ProjectsItem>
                    <div className="flex justify-around mt-3 lg:mt-5">
                        <FaPython color="#FFFFFF"/> <SiSelenium color="#FFFFFF"/> <SiMysql color="#FFFFFF"/><SiFastapi
                        color="#FFFFFF"/>
                    </div>
                </div>
                <div className="">
                    <ProjectsItem category="WEBSITE" title="Hope Connections" src="../../images/HC-image.png"
                                  colorFilter="#646DD2">
                        <PaginatedModalButton images={images_HC} texts={text_HC} deployLink="https://hope-connections-hmqdx.ondigitalocean.app"/>
                    </ProjectsItem>
                    <div className="flex justify-around mt-3 lg:mt-5">
                        <FaReact color="#FFFFFF"/><SiVite color="#FFFFFF"/><BiLogoTypescript color="#FFFFFF"/> <FaHtml5
                        color="#FFFFFF"/><SiChakraui color="#FFFFFF"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;