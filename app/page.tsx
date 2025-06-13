import React from 'react';
import {MobileNavbar} from "@/app/components/MobileNavbar";
import {Home} from "@/app/components/Home";

function Page() {
    return (
        <div className="overflow-x-hidden h-full text-4xl text-center flex flex-col">
            <MobileNavbar />
            <Home/>
            <section id="about" className="h-[100vh]">
                sadlgfmksdgf
            </section>
        </div>
    );
}

export default Page;