import React from 'react';
import {MobileNavbar} from "@/app/components/MobileNavbar";
import {Home} from "@/app/components/Home";
import {About} from "@/app/components/About";
import {Services} from "@/app/components/Services";

function Page() {
    return (
        <div className="overflow-x-hidden h-full text-4xl text-center flex flex-col">
            <MobileNavbar />
            <Home/>
            <About/>
            <Services/>
            <section className="h-[100vh]">
                sadlgfmksdgf
            </section>
        </div>
    );
}

export default Page;