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
    const images = [
        "../../images/HC-image.png",
        "../../images/HC/about-us.png",
        "../../images/HC/zoe-school.png",
    ];

    const text1 = [
        "An institutional website that presents key information about a Drop-In Centre located in Roscommon, Ireland.",
        "Here goes the content for page 2.",
        "Finally, some text for page 30000.",
    ];
    const images2 = [
        "../../images/wine-search/product-list.png",
        "../../images/wine-search/product-page.png",
        "../../images/wine-search/product-graph.png",
    ];
    const text2 = [
        "A web application with two primary functionalities: collecting wine prices through web scraping and presenting the collected data via an interactive dashboard.",
        "SECOND TEXT TWO",
        "SECOND TEXT THREE",
    ];
    const images3 = [
        "../../images/AT/home-page.png",
        "../../images/AT/hot-beverages.png",
        "../../images/AT/our-community.png",
    ];
    const text3 = [
        "An institutional website for a coffee shop, featuring the main menu, contact information, and details about community services.",
        "SECOND TEXT TWO",
        "SECOND TEXT THREE",
    ];
    const images4 = [
        "../../images/LA/home-page.png",
        "../../images/LA/trabalhos.png",
        "../../images/LA/depoimentos.png",
    ];
    const text4 = [
        "A portfolio website showcasing the primary body of work of a professional photographer, including an extensive collection of photographs and photo shoots.",
        "SECOND TEXT TWO",
        "SECOND TEXT THREE",
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
                        <PaginatedModalButton images={images4} texts={text4}/>
                    </ProjectsItem>
                    <div className="flex justify-around mt-3 lg:mt-5">
                        <FaReact color="#FFFFFF"/><RiNextjsFill color="#FFFFFF"/><BiLogoTypescript color="#FFFFFF"/>
                        <FaHtml5 color="#FFFFFF"/><RiTailwindCssFill color="#FFFFFF"/>
                    </div>
                </div>
                <div>
                    <ProjectsItem category="WEBSITE" title="All Tasty Caffe" src="../../images/AT-image.png"
                                  colorFilter="#646DD2">
                        <PaginatedModalButton images={images3} texts={text3}/>
                    </ProjectsItem>
                    <div className="flex justify-around mt-3 lg:mt-5">
                        <FaReact color="#FFFFFF"/><SiVite color="#FFFFFF"/><BiLogoTypescript color="#FFFFFF"/> <FaHtml5
                        color="#FFFFFF"/><SiChakraui color="#FFFFFF"/>
                    </div>
                </div>
                <div>
                    <ProjectsItem category="WEBAPP" title="Sogrape Wines" src="../../images/WS-image.png"
                                  colorFilter="#C9AA71">
                        <PaginatedModalButton images={images2} texts={text2}/>
                    </ProjectsItem>
                    <div className="flex justify-around mt-3 lg:mt-5">
                        <FaPython color="#FFFFFF"/> <SiSelenium color="#FFFFFF"/> <SiMysql color="#FFFFFF"/><SiFastapi
                        color="#FFFFFF"/>
                    </div>
                </div>
                <div className="">
                    <ProjectsItem category="WEBSITE" title="Hope Connections" src="../../images/HC-image.png"
                                  colorFilter="#646DD2">
                        <PaginatedModalButton images={images} texts={text1}/>
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