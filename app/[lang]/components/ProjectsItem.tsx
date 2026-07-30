import React from 'react';

interface Props {
    category: string;
    title: string;
    src: string;
    colorFilter?: string;
    children?: React.ReactNode;
}

function ProjectsItem(props: Props) {

    return (
        <div className="relative z-20 border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-[#646DD2] rounded-3xl flex flex-col
         h-[21rem] md:h-[23rem] overflow-hidden transition-all duration-500 ease-in-out shadow-xl hover:shadow-2xl hover:shadow-[#646DD2]/20 group">
            <div className="p-4 sm:p-5">
                <span className="text-[#C9AA71] text-left text-xs font-mono font-bold tracking-widest uppercase block mb-1">
                    {props.category}
                </span>
                <h3 className="text-white text-left text-lg sm:text-xl font-bold group-hover:text-[#609BE3] transition-colors">
                    {props.title}
                </h3>
                <div className="w-full border-t border-white/10 mt-2.5"/>
            </div>
            <div className="img-item-project relative w-[92%] mx-auto mt-2 rounded-2xl overflow-hidden flex-1 border border-white/10">
                <div className="opacity-60 bg-gradient-to-t from-black via-black/40 to-transparent w-full h-full z-10 absolute rounded-2xl pointer-events-none group-hover:opacity-40 transition-opacity"/>
                <img alt={props.title} src={props.src} className="w-full h-full object-cover bg-black/40 rounded-2xl transform group-hover:scale-105 transition-transform duration-700"/>
                {props.children}
            </div>
        </div>
    );
}

export default ProjectsItem;