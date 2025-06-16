import React from 'react';
import ProjectsItem from "@/app/components/ProjectsItem";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiSelenium } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import PaginatedModalButton from "@/app/test/PaginatedModalButton";

function Projects() {
    const images = [
        "/image1.jpg",
        "/image2.jpg",
        "/image3.jpg",
    ];

    const texts = [
        "This is the text for page 1.",
        "Here goes the content for page 2.",
        "Finally, some text for page 30000.",
    ];
    const images2 = [
        "/image1.jpg",
        "/image2.jpg",
        "/image3.jpg",
    ];
    const texts2 = [
        "SECOND TEXT ONE",
        "SECOND TEXT TWO",
        "SECOND TEXT THREE",
    ];
    return (
        <section id="projects" className="relative w-[90vw] mt-[8rem] m-auto z-10">
            <img alt="bg-img-1" src="../../images/background/yellow_and_purple_b.png"
                 className="absolute -z-5 top-0 left-0 w-auto h-auto min-w-full min-h-full object-cover scale-140 -mt-[2rem] opacity-80"
            />
            <div className="flex bg-[#646DD2] rounded-md items-center px-4 py-2 mb-[1em] m-auto">
                <p className="text-[1.5rem] text-white font-bold ml-auto mr-5">
                    Projects
                </p>
                <img className="w-40 h-40 object-cover rounded-full"
                     src="../images/white-desk-work-study-aesthetics.jpg" alt="profile-picture"/>
            </div>
            <div className="flex flex-col gap-8">
                <div>
                    <ProjectsItem category="WEBSITE" title="Hope Connections" src="../../images/HC-image.png" colorFilter="#646DD2">
                        <PaginatedModalButton images={images} texts={texts}/>
                    </ProjectsItem>
                    <div className="flex justify-around mt-3">
                        <FaReact color="#FFFFFF"/><SiVite color="#FFFFFF"/><BiLogoTypescript color="#FFFFFF"/> <FaHtml5 color="#FFFFFF"/><SiChakraui color="#FFFFFF"/>
                    </div>
                </div>
                <div>
                    <ProjectsItem category="WEBAPP" title="Sogrape Wines" src="../../images/WS-image.png" colorFilter="#C9AA71">
                        <PaginatedModalButton images={images} texts={texts2}/>
                    </ProjectsItem>
                    <div className="flex justify-around mt-3">
                        <FaPython color="#FFFFFF"/> <SiSelenium color="#FFFFFF"/> <SiMysql color="#FFFFFF"/><SiFastapi color="#FFFFFF"/>
                    </div>
                </div>
                <div>
                    <ProjectsItem category="WEBSITE" title="All Tasty Caffe" src="../../images/AT-image.png" colorFilter="#646DD2">
                        <PaginatedModalButton images={images} texts={texts}/>
                    </ProjectsItem>
                    <div className="flex justify-around mt-3">
                        <FaReact color="#FFFFFF"/><SiVite color="#FFFFFF"/><BiLogoTypescript color="#FFFFFF"/> <FaHtml5 color="#FFFFFF"/><SiChakraui color="#FFFFFF"/>
                    </div>
                </div>
                <div>
                    <ProjectsItem category="PORTFOLIO" title="Lucas Alves" src="../../images/lucas-alves.png" colorFilter="#C9AA71">
                        <PaginatedModalButton images={images} texts={texts}/>
                    </ProjectsItem>
                    <div className="flex justify-around mt-3">
                        <FaReact color="#FFFFFF"/><RiNextjsFill color="#FFFFFF"/><BiLogoTypescript color="#FFFFFF"/> <FaHtml5 color="#FFFFFF"/><RiTailwindCssFill color="#FFFFFF"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;