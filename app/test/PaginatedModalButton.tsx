"use client";

import {useState} from "react";
import Image from "next/image";
import {Dialog} from "@headlessui/react";
import {FaTimes} from "react-icons/fa";

interface PaginatedModalProps {
    images: string[]; // array of 3 image URLs
    texts: string[];  // array of 3 texts
}

export default function PaginatedModalButton({images, texts}: PaginatedModalProps) {
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
                className="button-call py-3 shadow hover:bg-blue-600 opacity-0 absolute top-0 left-0 right-0 bottom-0 discover-projects m-auto p-2 w-[50%] h-[15%] px-3 text-white text-[1rem] rounded-2xl transition-all duration-500 bg-[#609BE3] hover:bg-gradient-to-r hover:from-[#665dcd] hover:via-[#5fa4e6] hover:to-[#d2ab67] z-40"
            >
                Discover More
            </button>

            <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="fixed inset-0 bg-black bg-opacity-50"/>
                <div className="relative bg-white rounded-lg p-6 w-full max-w-md z-50">
                    <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                        <FaTimes size={20}/>
                    </button>

                    <div className="mb-4">
                        <Image
                            src={images[currentPage]}
                            alt={`Page ${currentPage + 1}`}
                            width={400}
                            height={300}
                            className="rounded-lg object-cover w-full h-64"
                        />
                    </div>

                    <div className="mb-4">
                        <p className="text-gray-700 text-center">{texts[currentPage]}</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <button
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 0}
                            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                        >
                            Previous
                        </button>

                        <div className="text-sm text-gray-600">
                            Page {currentPage + 1} of {images.length}
                        </div>

                        <button
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === images.length - 1}
                            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
