import React from 'react';
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Services} from "./components/Services";
import Projects from "./components/Projects";
import {ContactMe} from "./components/Contact";
import Footer from "./components/Footer";
import ProjectCTA from "./components/ProjectCTA";
import { getDictionary } from '@/get-dictionary';
import { Locale } from "@/i18n";
import DownloadCV from "@/app/[lang]/components/DownloadCV";

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'pt' }];
}

async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);

    return (
        <>
            <Home dictionary={dictionary}/>
            <About dictionary={dictionary}/>
            <Projects dictionary={dictionary}/>
            <Services dictionary={dictionary}/>
            <ProjectCTA dictionary={dictionary}/>
            <ContactMe dictionary={dictionary}/>
            <DownloadCV dictionary={dictionary}/>
            <Footer dictionary={dictionary}/>
        </>
    );
}

export default Page;
