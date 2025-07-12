import React from 'react';
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Services} from "./components/Services";
import Projects from "./components/Projects";
import {ContactMe} from "./components/Contact";
import Footer from "./components/Footer";
import GlowingCursor from "./components/GlowingCursor/GlowingCursor";
import ProjectCTA from "./components/ProjectCTA";
import { getDictionary } from '@/get-dictionary';
import LanguageSwitcher from "@/app/[lang]/components/LanguageSwitcher";
import { Locale } from "@/i18n";

async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <>
            <LanguageSwitcher />
            <GlowingCursor/>
            <Home dictionary={dictionary}/>
            <About dictionary={dictionary}/>
            <Projects dictionary={dictionary}/>
            <Services dictionary={dictionary}/>
            <ProjectCTA dictionary={dictionary}/>
            <ContactMe dictionary={dictionary}/>
            <Footer dictionary={dictionary}/>
        </>
    );
}

export default Page;
