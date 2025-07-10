import React from 'react';
import {MobileNavbar} from "./components/MobileNavbar";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Services} from "./components/Services";
import Projects from "./components/Projects";
import {ContactMe} from "./components/Contact";
import Footer from "./components/Footer";
import {NavBar} from "./components/NavBar";
import GlowingCursor from "./components/GlowingCursor/GlowingCursor";
import ProjectCTA from "./components/ProjectCTA";
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n';
import LanguageSwitcher from "@/app/[lang]/components/LanguageSwitcher";

async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <div className="overflow-x-hidden overflow-y-hidden h-full text-4xl text-center flex flex-col">
            <LanguageSwitcher />
            <MobileNavbar />
            <NavBar dictionary={dictionary}/>
            <GlowingCursor/>
            <Home dictionary={dictionary}/>
            <About dictionary={dictionary}/>
            <Projects dictionary={dictionary}/>
            <Services dictionary={dictionary}/>
            <ProjectCTA dictionary={dictionary}/>
            <ContactMe dictionary={dictionary}/>
            <Footer dictionary={dictionary}/>
        </div>
    );
}

export default Page;
