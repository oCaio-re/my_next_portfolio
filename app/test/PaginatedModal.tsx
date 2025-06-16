"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";

interface Page {
    id: number;
    image: string;
    text: string;
}

const pages: Page[] = [
    { id: 1, image: "/image1.jpg", text: "This is the text for page 1." },
    { id: 2, image: "/image2.jpg", text: "Here goes the content for page 2." },
    { id: 3, image: "/image3.jpg", text: "Finally, some text for page 3." },
];

export default function PaginatedModal() {
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
        if (index >= 0 && index < pages.length) {
            setCurrentPage(index);
        }
    };

    return (
        <>
            {/*<div className="flex items-center justify-center h-screen bg-gray-100">*/}
                <button
                    onClick={openModal}
                    className="button-call py-3 shadow hover:bg-blue-600 opacity-0 absolute top-0 left-0 right-0 bottom-0 discover-projects m-auto p-2 w-[50%] h-[15%] px-3 text-white text-[1rem] rounded-2xl transition-all duration-500 bg-[#609BE3] hover:bg-gradient-to-r hover:from-[#665dcd] hover:via-[#5fa4e6] hover:to-[#d2ab67] z-40
                    "
                >
                    Discover More
                </button>
            {/*</div>*/}

            <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="fixed inset-0 bg-black opacity-50" />
                <div className="relative bg-white rounded-lg p-6 w-full  z-50 md:w-[80vw] md:h-[80vh]">
                    <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                        <FaTimes size={20} />
                    </button>

                    <div className="mb-4">
                        <Image
                            src={pages[currentPage].image}
                            alt={`Page ${currentPage + 1}`}
                            width={400}
                            height={300}
                            className="rounded-lg object-cover w-full h-64"
                        />
                    </div>

                    <div className="mb-4">
                        <p className="text-gray-700 text-center">{pages[currentPage].text}</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 0}
                            className="px-4 py-2 bg-[#609BE3] text-white rounded disabled:opacity-50"
                        >
                            Previous
                        </button>

                        <div className="text-sm text-gray-600">
                            Page {currentPage + 1} of {pages.length}
                        </div>

                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === pages.length - 1}
                            className="px-4 py-2 bg-[#646DD2] text-white rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
