"use client";

import {useState} from "react";
import {Dialog} from "@headlessui/react";
import {FaTimes} from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { GrDeploy } from "react-icons/gr";

interface PaginatedModalProps {
    images: string[];
    texts: string[];
    deployLink?: string;
}

export default function PaginatedModalButton({images, texts, deployLink}: PaginatedModalProps) {
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
                duration-500 bg-[#609BE3]  hover:bg-[#665dcd] z-40"
            >
                Discover More
            </button>

            <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 z-101 flex items-center justify-center">
                <div className="fixed inset-0 backdrop-blur-md bg-black opacity-60"/>
                <div className="relative  bg-opacity-10 rounded-lg p-6 w-full z-50 md:w-[70vw] md:h-[100vh]">
                    <button onClick={closeModal} className="absolute top-4 right-2 text-[#C9AA71] hover:text-gray-700">
                        <FaTimes size={20}/>
                    </button>

                    <div className="mb-4">
                        <img
                            src={images[currentPage]}
                            alt={`Page ${currentPage + 1}`}
                            className="rounded-lg object-contain w-full h-64 md:h-180"
                        />
                    </div>

                    <div className="mb-4 backdrop-blur-md rounded-lg py-3">
                        <p className="text-white text-center md:text-[1.3rem]">{texts[currentPage]}</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 0}
                            className="px-4 py-2 bg-[#609BE3] rounded disabled:opacity-50 text-white"
                        >
                            <GrFormPrevious size={30}/>
                        </button>

                        <div className="flex flex-col gap-5 items-center">
                            <div className="text-sm  text-[#C9AA71]">
                                {currentPage + 1} of {images.length}
                            </div>
                            {deployLink ?
                                <a href={deployLink} target="_blank">
                                <button className="transition-all font-bold duration-300 px-4 py-2 flex items-center gap-3 rounded text-white bg-[#C9AA71] hover:bg-white hover:text-gray-700">
                                    Deploy Link <GrDeploy className="font-bold"/>
                                </button>
                            </a> : null}
                        </div>
                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === images.length - 1}
                            className="px-4 py-2 bg-[#646DD2] text-white rounded disabled:opacity-50"
                        >
                            <MdNavigateNext size={30}/>
                        </button>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
