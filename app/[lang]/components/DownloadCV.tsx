'use client';

import React, { useState } from 'react';
import { FiDownload, FiFile, FiCheck } from 'react-icons/fi';
import { Dictionary } from './types';

interface DownloadSectionProps {
    dictionary: Dictionary;
}

const DownloadCV: React.FC<DownloadSectionProps> = ({
                                                             dictionary
                                                         }) => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadComplete, setDownloadComplete] = useState(false);

    const handleDownload = async () => {
        setIsDownloading(true);

        try {
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = '/api/download-cv';
            link.download = dictionary.page.download_cv.file_name;

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
        <section id="download" className="relative py-12 sm:py-16 bg-black overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#646DD2]/15 rounded-full blur-[140px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 max-w-3xl">
                <div className="text-center mb-8">
                    <span className="text-[#C9AA71] text-xs font-mono font-bold tracking-widest uppercase mb-1.5 block">
                        {dictionary.page.download_cv.badge}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                        {dictionary.page.download_cv.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto font-light">
                        {dictionary.page.download_cv.subtitle}
                    </p>
                </div>

                <div className="border border-white/15 bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 md:p-8 mx-auto max-w-xl text-center">
                    <div>
                        {/* File Icon */}
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-[#C9AA71]/30 to-[#609BE3]/30 border border-[#C9AA71]/40 rounded-2xl mb-5 shadow-lg">
                            <FiFile className="w-8 h-8 text-[#C9AA71]" />
                        </div>

                        {/* File Info */}
                        <div className="mb-5">
                            <h3 className="text-xl font-bold text-white mb-2">
                                {dictionary.page.download_cv.file_name}
                            </h3>
                            <div className="flex items-center justify-center gap-2 text-xs font-mono">
                                <span className="px-2.5 py-0.5 bg-white/10 border border-white/15 rounded-full text-gray-300">
                                    {dictionary.page.download_cv.file_type}
                                </span>
                                <span className="px-2.5 py-0.5 bg-white/10 border border-white/15 rounded-full text-[#C9AA71]">
                                    {dictionary.page.download_cv.file_size}
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                            {dictionary.page.download_cv.description}
                        </p>

                        {/* Download Button */}
                        <button
                            onClick={handleDownload}
                            disabled={isDownloading || downloadComplete}
                            className={`inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-xl ${
                                downloadComplete
                                    ? 'bg-emerald-500/20 border border-emerald-500 text-emerald-400 cursor-default'
                                    : isDownloading
                                        ? 'bg-white/10 border border-white/20 text-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-[#C9AA71] via-[#B8956B] to-[#609BE3] text-white shadow-[#C9AA71]/25 hover:shadow-[#C9AA71]/40 active:scale-95 cursor-pointer'
                            }`}
                        >
                            {downloadComplete ? (
                                <>
                                    <FiCheck className="w-4 h-4" />
                                    {dictionary.page.download_cv.downloaded_text}
                                </>
                            ) : isDownloading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    {dictionary.page.download_cv.downloading_text}
                                </>
                            ) : (
                                <>
                                    <FiDownload className="w-4 h-4" />
                                    {dictionary.page.download_cv.button_text}
                                </>
                            )}
                        </button>

                        {/* Additional Info */}
                        <p className="text-xs text-gray-500 mt-3">
                            {dictionary.page.download_cv.additional_info}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadCV;
