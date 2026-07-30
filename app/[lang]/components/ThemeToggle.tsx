'use client';

import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from './ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`inline-flex items-center justify-center p-2 rounded-full border transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer shadow-md ${
                theme === 'dark'
                    ? 'bg-white/10 border-white/15 text-[#C9AA71] hover:bg-white/20'
                    : 'bg-black/10 border-black/15 text-amber-500 hover:bg-black/20'
            }`}
            aria-label="Toggle dark/light theme"
            title={theme === 'dark' ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro'}
        >
            {theme === 'dark' ? (
                <FiSun className="w-4 h-4 transition-transform duration-500 rotate-0 hover:rotate-45" />
            ) : (
                <FiMoon className="w-4 h-4 transition-transform duration-500 rotate-0 hover:-rotate-12" />
            )}
        </button>
    );
}
