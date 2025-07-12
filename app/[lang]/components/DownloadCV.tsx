'use client';

import React, { useState } from 'react';
import { FiDownload, FiFile, FiCheck } from 'react-icons/fi';

interface DownloadSectionProps {
    title?: string;
    subtitle?: string;
    fileName?: string;
    fileSize?: string;
    fileType?: string;
    buttonText?: string;
    description?: string;
}

const DownloadCV: React.FC<DownloadSectionProps> = ({
                                                             title = "Download My Resume",
                                                             subtitle = "Get a copy of my professional resume",
                                                             fileName = "Resume_Caio_Oliveira.pdf",
                                                             fileSize = "245 KB",
                                                             fileType = "PDF",
                                                             buttonText = "Download Now",
                                                             description = "Click the button below to download my latest resume in PDF format."
                                                         }) => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadComplete, setDownloadComplete] = useState(false);

    const handleDownload = async () => {
        setIsDownloading(true);

        try {
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = '/api/download-cv';
            link.download = fileName;

            // Append to body, click, and remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Simulate download process for UI feedback
            setTimeout(() => {
                setIsDownloading(false);
                setDownloadComplete(true);

                // Reset after 3 seconds
                setTimeout(() => {
                    setDownloadComplete(false);
                }, 3000);
            }, 1000);

        } catch (error) {
            console.error('Download failed:', error);
            setIsDownloading(false);
        }
    };

    return (
        <section id="download" className="relative ">
            <div className="absolute drop-shadow-2xl drop-shadow-[#646DD2] w-full animate-pulse-slow h-full bg-gradient-to-br from-[#646DD2] -z-2 to-transparent"
                // style={{backgroundColor: "#646DD2", filter: "drop-s"}}

            />
            <div className="container mx-auto px-4 max-w-4xl py-20">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="bg-black/20 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 mx-auto max-w-2xl">
                    <div className="text-center">
                        {/* File Icon */}
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#C9AA71] rounded-full mb-6">
                            <FiFile className="w-10 h-10 text-white" />
                        </div>

                        {/* File Info */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {fileName}
                            </h3>
                            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                                <span className="px-3 py-1 bg-gray-100 rounded-full">
                                    {fileType}
                                </span>
                                <span className="text-white">{fileSize}</span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-white mb-8 leading-relaxed">
                            {description}
                        </p>

                        {/* Download Button */}
                        <button
                            onClick={handleDownload}
                            disabled={isDownloading || downloadComplete}
                            className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                                downloadComplete
                                    ? 'bg-green-500 text-white cursor-default'
                                    : isDownloading
                                        ? 'bg-gray-400 text-white cursor-not-allowed'
                                        : 'bg-[#C9AA71] text-white hover:bg-[#B8956B] active:scale-95'
                            }`}
                        >
                            {downloadComplete ? (
                                <>
                                    <FiCheck className="w-5 h-5" />
                                    Downloaded!
                                </>
                            ) : isDownloading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Downloading...
                                </>
                            ) : (
                                <>
                                    <FiDownload className="w-5 h-5" />
                                    {buttonText}
                                </>
                            )}
                        </button>

                        {/* Additional Info */}
                        <p className="text-xs text-gray-400 mt-4">
                            By downloading, you agree to use this file for professional purposes only.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadCV;
