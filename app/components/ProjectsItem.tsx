import React from 'react';

interface Props {
    category: string;
    title: string;
    src: string;
    colorFilter?: string;
}

function ProjectsItem(props: Props) {
    return (
        <div className="border-3 border-white hover:border-[#646DD2] rounded-2xl flex flex-col h-[25rem] overflow-hidden transition-all duration:600 ease-in-out">
            <div className="p-5">
                <p className="text-[#C9AA71] text-left text-[1rem] font-bold italic">
                    {props.category}
                </p>
                <p className="text-[#646DD2] text-left text-[1.8rem] font-bold">
                    {props.title}
                </p>
                <div className="w-11/12 border-t-2 border-gray-400 mt-2"/>
            </div>
            <div className="relative w-[90%] rotate-10 mt-[5rem] hover:rotate-0 hover:mt-0 hover:ml-[2rem] transition-all ease-in-out duration-600 lg:w-[60%] ">
                <div className={`opacity-50 bg-[${props.colorFilter}] w-[100%] h-[100%] z-70 absolute rounded-md`}/>
                {/*<div className={`opacity-50 bg-[#646DD2] w-[100%] h-[100%] z-70 absolute rounded-md`}/>*/}
                <img src={props.src} className="w-[100%] rounded-md"/>
            </div>
        </div>
    );
}

export default ProjectsItem;