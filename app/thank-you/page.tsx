import React from 'react';
import {MdOutlineMarkEmailRead} from "react-icons/md";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Footer from "@/app/components/Footer";
import Link from "next/link";

function Page() {
    return (
        <div className="relative overflow-x-hidden overflow-y-hidden h-full text-4xl text-center flex flex-col ">
            <img alt="bg-img-1" src="../../images/background/yellow_and_purple_b.png"
                 className="absolute -z-5 top-0 left-0 w-auto h-auto min-w-full min-h-full object-cover scale-110 -mt-[50rem] opacity-80"
            />
            <Link href="/" className="drop-shadow-md text-white flex w-fit ml-[10%] gap-5 items-center font-bold mt-[5rem] cursor-pointer hover:text-[#C9AA71] transition-all duration-300 ease-in-out">
                <IoIosArrowDropleftCircle  size={50} className="text-[#646DD2] hover:text-[#C9AA71] transition-all duration-300 ease-in-out"/>
                <p className="">
                    HOME PAGE
                </p>
            </Link>
            <div className="text-white w-[80vw] flex flex-col m-auto items-center md:mt-[5rem] mb-[5rem] ">
                <MdOutlineMarkEmailRead size="400" className="text-[#646DD2] w-full"/>
                <p className="text-[4rem] md:text-[5rem] font-bold ">Thank you!</p>
                <p className="text-[2rem] md:text-[3rem] font-semibold text-center">Your request was sent</p>
                <p className="text-[1.5rem] md:text-[2rem] text-center italic">Check your email address to <b>confirm</b> it</p>
            </div>
            <Footer />
        </div>
    );
}

export default Page;