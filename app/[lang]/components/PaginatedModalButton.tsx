"use client";

import {useState} from "react";
import {Dialog} from "@headlessui/react";
import {FaTimes} from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { GrDeploy } from "react-icons/gr";
import { Dictionary } from "./types";

interface PaginatedModalProps {
    images: string[];
    texts: string[];
    deployLink?: string;
    dictionary: Dictionary;
}

export default function PaginatedModalButton({images, texts, deployLink, dictionary}: PaginatedModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState<number>(0);

    const openModal = () => {
        setIsOpen(true);
        setCurrentPage(0);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const goToPage = (index: number) => {
        if (index >= 0 && index < images.length) {
            setCurrentPage(index);
        }
    };

    return (
        <>
            <button
                onClick={openModal}
                className="button-call py-3 shadow opacity-0 absolute top-0 left-0 right-0 bottom-0
                md:p-1 md:items-center cursor-pointer
                discover-projects m-auto p-2 w-[50%] h-[15%] px-3 text-white text-[1rem] rounded-2xl transition-all
                duration-500 bg-[#609BE3] hover:bg-[#665dcd] z-20"
            >
                {dictionary.page.projects.button}
            </button>

            <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8">
                <div className="fixed inset-0 backdrop-blur-md bg-black/70" aria-hidden="true" onClick={closeModal}/>
                <div className="relative flex flex-col justify-between bg-black/40 border border-white/10 shadow-2xl rounded-2xl p-4 sm:p-8 w-full max-w-5xl z-50 max-h-[95vh] overflow-y-auto">
                    <button onClick={closeModal} className="absolute top-4 right-4 text-[#C9AA71] hover:text-white transition-colors z-50">
                        <FaTimes size={24}/>
                    </button>

                    <div className="flex-1 flex items-center justify-center min-h-0 mt-6 sm:mt-2 mb-4">
                        <img
                            src={images[currentPage]}
                            alt={`Page ${currentPage + 1}`}
                            className="rounded-lg object-contain w-full max-h-[45vh] md:max-h-[60vh]"
                        />
                    </div>

                    <div className="mb-6 backdrop-blur-md rounded-lg py-3 px-4 bg-white/5">
                        <p className="text-white text-center md:text-[1.3rem] leading-relaxed">{texts[currentPage]}</p>
                    </div>

                    <div className="flex justify-between items-center mt-auto">
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 0}
                            className="px-4 py-2 bg-[#609BE3] rounded disabled:opacity-50 text-white transition-opacity hover:opacity-80"
                        >
                            <GrFormPrevious size={30}/>
                        </button>

                        <div className="flex flex-col justify-around items-center gap-2">
                            <div className="text-sm text-[#C9AA71] font-bold">
                                {currentPage + 1} / {images.length}
                            </div>
                            {deployLink ?
                                <a href={deployLink} target="_blank" rel="noreferrer">
                                    <button className="transition-all font-bold duration-300 px-4 py-2 flex items-center gap-2 rounded text-white bg-[#C9AA71] hover:bg-white hover:text-gray-900 shadow-lg">
                                        Deploy Link <GrDeploy className="font-bold"/>
                                    </button>
                                </a> : null}
                        </div>
                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === images.length - 1}
                            className="px-4 py-2 bg-[#646DD2] text-white rounded disabled:opacity-50 transition-opacity hover:opacity-80"
                        >
                            <MdNavigateNext size={30}/>
                        </button>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
