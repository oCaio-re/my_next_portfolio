'use client'
import React from 'react';
import {MobileNavbar} from "@/app/components/MobileNavbar";
import {Home} from "@/app/components/Home";
import {About} from "@/app/components/About";
import {Services} from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import {ContactMe} from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import {NavBar} from "@/app/components/NavBar";
import GlowingCursor from "@/app/components/GlowingCursor/GlowingCursor";

function Page() {
    return (
        <div className="overflow-x-hidden overflow-y-hidden h-full text-4xl text-center flex flex-col">
            <MobileNavbar />
            <NavBar/>
            <GlowingCursor/>
            <Home/>
            <About/>
            <Projects/>
            <Services/>
            <ContactMe/>
            <Footer />
        </div>
    );
}

export default Page;