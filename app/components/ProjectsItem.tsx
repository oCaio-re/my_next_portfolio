import React from 'react';
import PaginatedModal from "@/app/test/PaginatedModal";

interface Props {
    category: string;
    title: string;
    src: string;
    colorFilter?: string;
}

function ProjectsItem(props: Props) {
    return (
        <div className="relative z-50 border-3 border-white hover:border-[#646DD2] rounded-2xl flex flex-col h-[25rem] overflow-hidden transition-all duration:600 ease-in-out lg:h-[60rem]">
            <div className="p-5">
                <p className="text-[#C9AA71] text-left text-[1rem] font-bold italic">
                    {props.category}
                </p>
                <p className="text-[#646DD2] text-left text-[1.8rem] font-bold">
                    {props.title}
                </p>
                <div className="w-11/12 border-t-2 border-gray-400 mt-2"/>
            </div>
            <div className="img-item-project relative w-[90%] -ml-[1rem] rotate-10 mt-[5rem] hover:rotate-0 hover:mt-0 hover:ml-[1rem] transition-all ease-in-out duration-600 lg:w-[60%] ">
                <div className={`opacity-50 bg-[${props.colorFilter}] w-[100%] h-[100%] z-30 absolute rounded-md`}/>
                <img src={props.src} className="w-[100%] rounded-md"/>
                {/*<button className="button-call opacity-0 absolute top-0 left-0 right-0 bottom-0 discover-projects m-auto p-2 w-[50%] h-[15%] px-3 text-white text-[1rem] rounded-2xl transition-all duration-500 bg-[#609BE3] hover:bg-gradient-to-r hover:from-[#665dcd] hover:via-[#5fa4e6] hover:to-[#d2ab67] z-40">*/}
                {/*    Discover More*/}
                {/*</button>*/}
                <PaginatedModal/>
            </div>
        </div>
    );
}

export default ProjectsItem;