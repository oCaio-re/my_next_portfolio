import React from 'react';
import {MobileNavbar} from "@/app/components/MobileNavbar";
import {Home} from "@/app/components/Home";
import {About} from "@/app/components/About";
import {Services} from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import {ContactMe} from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

function Page() {
    return (
        <div className="overflow-x-hidden h-full text-4xl text-center flex flex-col">
            <MobileNavbar />
            <Home/>
            <About/>
            <Services/>
            <Projects/>
            <ContactMe/>
            <Footer />
        </div>
    );
}

export default Page;