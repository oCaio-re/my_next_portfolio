'use client'

import React from 'react';
import ProjectsItem from "./ProjectsItem";
import PaginatedModalButton from "./PaginatedModalButton";
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

function Projects({ dictionary }: { dictionary: any }) {
    const text_HC = [
        dictionary.page.projects.hope_connections.text_1,
        dictionary.page.projects.hope_connections.text_2,
        dictionary.page.projects.hope_connections.text_3,
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
        dictionary.page.projects.sogrape_wines.text_1,
        dictionary.page.projects.sogrape_wines.text_2,
        dictionary.page.projects.sogrape_wines.text_3,
    ];
    const images_AT = [
        "../../images/AT/home-page.png",
        "../../images/AT/hot-beverages.png",
        "../../images/AT/our-community.png",
    ];
    const text_AT = [
        dictionary.page.projects.all_tasty_caffe.text_1,
        dictionary.page.projects.all_tasty_caffe.text_2,
        dictionary.page.projects.all_tasty_caffe.text_3,
    ];
    const images_LA = [
        "../../images/LA/home-page.png",
        "../../images/LA/trabalhos.png",
        "../../images/LA/depoimentos.png",
    ];
    const text_LA = [
        dictionary.page.projects.lucas_alves.text_1,
        dictionary.page.projects.lucas_alves.text_2,
        dictionary.page.projects.lucas_alves.text_3,
    ];
    const images_VB = [
        "../../images/VB/home.png",
        "../../images/VB/hoteis.png",
        "../../images/VB/pacotes.png",
    ];
    // const text_LA = [
    //     dictionary.page.projects.lucas_alves.text_1,
    //     dictionary.page.projects.lucas_alves.text_2,
    //     dictionary.page.projects.lucas_alves.text_3,
    // ];
    return (
        <section id="projects" className="relative w-[90vw] mt-[8rem] m-auto z-10 md:mt-[15rem] lg:w-[70vw] ">
            <img alt="bg-img-1" src="../../images/background/yellow_and_purple_b.png"
                 className="absolute -z-5 top-0 left-0 w-auto h-auto min-w-full min-h-full object-cover scale-140 -mt-[2rem] opacity-80"
            />
            <div className="flex bg-[#646DD2] rounded-lg items-center px-4 py-2 mb-[1em] m-auto lg:rounded-4xl lg:w-[70%] lg:mr-0 lg:ml-auto lg:mt-[15rem]">
                <p className="text-[1.5rem] text-white font-bold ml-auto mr-5 lg:text-[4rem] lg:mr-[3rem] lg:ml-auto">
                    {dictionary.page.projects.title}
                </p>
                <img className="w-40 h-40 object-cover rounded-full lg:mr-auto"
                     src="../images/white-desk-work-study-aesthetics.jpg" alt="profile-picture"/>
            </div>
            <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3">
                <div>
                    <ProjectsItem category="PORTFOLIO" title="Lucas Alves" src="../../images/LA/logo-lucas.png"
                                  colorFilter="#646DD2">
                        <PaginatedModalButton images={images_LA} texts={text_LA} deployLink="https://portfolio-lucas-7fi7l.ondigitalocean.app/"/>
                    </ProjectsItem>
                    <div className="flex justify-around mt-3 lg:mt-5">
                        <FaReact color="#FFFFFF"/><RiNextjsFill color="#FFFFFF"/><BiLogoTypescript color="#FFFFFF"/>
                        <FaHtml5 color="#FFFFFF"/><RiTailwindCssFill color="#FFFFFF"/>
                    </div>
                </div>
                <div>
                    <ProjectsItem category="WEBSITE" title="Voar Bem" src="../../images/VB/logo-sfundo.png"
                                  colorFilter="#646DD2">
                        <PaginatedModalButton images={images_VB} texts={text_LA} deployLink="https://portfolio-lucas-7fi7l.ondigitalocean.app/"/>
                    </ProjectsItem>
                    <div className="flex justify-around mt-3 lg:mt-5">
                        <FaReact color="#FFFFFF"/><RiNextjsFill color="#FFFFFF"/><BiLogoTypescript color="#FFFFFF"/>
                        <FaHtml5 color="#FFFFFF"/><RiTailwindCssFill color="#FFFFFF"/>
                    </div>
                </div>
                <div>
                    <ProjectsItem category="WEBSITE" title="All Tasty Caffe" src="../../images/AT/AT_logo.png"
                                  colorFilter="#646DD2">
                        <PaginatedModalButton images={images_AT} texts={text_AT} deployLink="https://www.alltasty.cafe/"/>
                    </ProjectsItem>
                    <div className="flex justify-around mt-3 lg:mt-5">
                        <FaReact color="#FFFFFF"/><SiVite color="#FFFFFF"/><BiLogoTypescript color="#FFFFFF"/> <FaHtml5
                        color="#FFFFFF"/><SiChakraui color="#FFFFFF"/>
                    </div>
                </div>
                <div>
                    <ProjectsItem category="WEBAPP" title="Sogrape Wines" src="../../images/wine-search/sogrape-logo.svg"
                                  colorFilter="#646DD2">
                        <PaginatedModalButton images={images_WS} texts={text_WS}/>
                    </ProjectsItem>
                    <div className="flex justify-around mt-3 lg:mt-5">
                        <FaPython color="#FFFFFF"/> <SiSelenium color="#FFFFFF"/> <SiMysql color="#FFFFFF"/><SiFastapi
                        color="#FFFFFF"/>
                    </div>
                </div>
                <div className="">
                    <ProjectsItem category="WEBSITE" title="Hope Connections" src="../../images/HC/hc_logo.svg"
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