'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiLayers, FiCode, FiImage, FiCheckCircle, FiAlertTriangle, FiTrendingUp, FiMessageSquare } from 'react-icons/fi';
import { ExtendedProjectData, CaseStudyData } from '../../../lib/projectsData';

interface ProjectCaseStudyDrawerProps {
  project: (ExtendedProjectData & { caseStudy: CaseStudyData }) | null;
  isOpen: boolean;
  onClose: () => void;
  dictionary: any;
}

export default function ProjectCaseStudyDrawer({ project, isOpen, onClose, dictionary }: ProjectCaseStudyDrawerProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'gallery'>('overview');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Mount on client to support createPortal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset tab & image index when project changes
  useEffect(() => {
    if (project) {
      setActiveTab('overview');
      setSelectedImageIndex(0);
    }
  }, [project]);

  if (!project || !mounted) return null;

  const d = dictionary.page?.drawer || {};
  const cs = project.caseStudy;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] overflow-hidden">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[99998] bg-black/80 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Slide-Over Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 z-[99999] h-full w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl bg-black/95 backdrop-blur-2xl border-l border-white/15 shadow-2xl flex flex-col overflow-hidden text-white"
          >
            {/* Header Bar */}
            <div className="relative p-6 sm:p-8 border-b border-white/10 flex items-start justify-between bg-white/[0.02]">
              <div className="flex items-center gap-4 pr-12">
                {/* Logo Frame */}
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 p-2 flex items-center justify-center backdrop-blur-xl shrink-0">
                  <img src={project.logoSrc} alt={project.title} className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-[#C9AA71] text-xs font-mono font-bold tracking-widest uppercase block mb-1">
                    {`// ${project.category}`}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-white/5 border border-white/15 hover:bg-white/15 hover:border-[#609BE3] text-gray-300 hover:text-white transition-all transform hover:scale-110 active:scale-95 cursor-pointer shrink-0"
                aria-label={d.close || 'Fechar'}
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-white/10 bg-black/40 px-6 sm:px-8 gap-2 sm:gap-4 overflow-x-auto shrink-0">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-3.5 px-4 text-xs sm:text-sm font-bold tracking-wide transition-all border-b-2 flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                  activeTab === 'overview'
                    ? 'border-[#609BE3] text-[#609BE3]'
                    : 'border-transparent text-gray-400 hover:text-gray-200'
                }`}
              >
                <FiLayers className="w-4 h-4" />
                {d.tab_overview || 'Visão Geral'}
              </button>

              <button
                onClick={() => setActiveTab('architecture')}
                className={`py-3.5 px-4 text-xs sm:text-sm font-bold tracking-wide transition-all border-b-2 flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                  activeTab === 'architecture'
                    ? 'border-[#609BE3] text-[#609BE3]'
                    : 'border-transparent text-gray-400 hover:text-gray-200'
                }`}
              >
                <FiCode className="w-4 h-4" />
                {d.tab_architecture || 'Engenharia & Arquitetura'}
              </button>

              <button
                onClick={() => setActiveTab('gallery')}
                className={`py-3.5 px-4 text-xs sm:text-sm font-bold tracking-wide transition-all border-b-2 flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                  activeTab === 'gallery'
                    ? 'border-[#609BE3] text-[#609BE3]'
                    : 'border-transparent text-gray-400 hover:text-gray-200'
                }`}
              >
                <FiImage className="w-4 h-4" />
                {d.tab_gallery || 'Galeria de Mídias'}
              </button>
            </div>

            {/* Main Content Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-8"
                >
                  {/* Summary Callout */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                      {cs.summary}
                    </p>
                  </div>

                  {/* Problem & Solution Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Problem */}
                    <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20 backdrop-blur-xl">
                      <div className="flex items-center gap-2 text-red-400 font-bold mb-3 text-sm uppercase font-mono">
                        <FiAlertTriangle className="w-4 h-4" />
                        {d.problem_title || 'O Desafio & Problema'}
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {cs.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-xl">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold mb-3 text-sm uppercase font-mono">
                        <FiCheckCircle className="w-4 h-4" />
                        {d.solution_title || 'A Solução Desenvolvida'}
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  {cs.keyMetrics && cs.keyMetrics.length > 0 && (
                    <div>
                      <h4 className="text-sm font-mono font-bold text-[#C9AA71] uppercase tracking-widest mb-4 flex items-center gap-2">
                        <FiTrendingUp className="w-4 h-4" />
                        {d.metrics_title || 'Métricas & Impacto'}
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {cs.keyMetrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center text-center"
                          >
                            <span className="text-2xl sm:text-3xl font-extrabold text-[#609BE3] mb-1">
                              {metric.value}
                            </span>
                            <span className="text-xs text-gray-400 font-medium">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div>
                    <h4 className="text-sm font-mono font-bold text-gray-400 uppercase tracking-widest mb-3">
                      {d.tech_stack_title || 'Tecnologias Utilizadas'}
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {project.techs.map((t, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 backdrop-blur-xl text-xs font-semibold text-gray-200"
                        >
                          <span style={{ color: t.activeColor }}>{t.icon}</span>
                          <span>{t.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: ARCHITECTURE & ENGINEERING */}
              {activeTab === 'architecture' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-8"
                >
                  {/* Architecture Highlights */}
                  {cs.architectureHighlights && cs.architectureHighlights.length > 0 && (
                    <div>
                      <h4 className="text-sm font-mono font-bold text-[#609BE3] uppercase tracking-widest mb-4 flex items-center gap-2">
                        <FiCode className="w-4 h-4" />
                        {d.highlights_title || 'Destaques de Arquitetura'}
                      </h4>
                      <div className="space-y-3">
                        {cs.architectureHighlights.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3"
                          >
                            <span className="w-6 h-6 rounded-full bg-[#609BE3]/20 text-[#609BE3] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <p className="text-sm text-gray-200 leading-relaxed">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technical Challenges */}
                  {cs.technicalChallenges && cs.technicalChallenges.length > 0 && (
                    <div>
                      <h4 className="text-sm font-mono font-bold text-[#C9AA71] uppercase tracking-widest mb-4 flex items-center gap-2">
                        <FiAlertTriangle className="w-4 h-4" />
                        {d.challenges_title || 'Desafios Técnicos Superados'}
                      </h4>
                      <div className="space-y-3">
                        {cs.technicalChallenges.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3"
                          >
                            <FiCheckCircle className="w-5 h-5 text-[#C9AA71] shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-200 leading-relaxed">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* TAB 3: MEDIA GALLERY */}
              {activeTab === 'gallery' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {/* Large Selected Preview */}
                  <div className="relative w-full h-[260px] sm:h-[380px] rounded-2xl overflow-hidden border border-white/15 bg-black/60 flex items-center justify-center group">
                    <img
                      src={project.previewImages[selectedImageIndex]}
                      alt={`${project.title} preview ${selectedImageIndex + 1}`}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  {/* Image Caption */}
                  {cs.captions && cs.captions[selectedImageIndex] && (
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                      <p className="text-xs sm:text-sm text-gray-300 font-mono">
                        {`// ${cs.captions[selectedImageIndex]}`}
                      </p>
                    </div>
                  )}

                  {/* Thumbnail Row */}
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {project.previewImages.map((imgSrc, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`relative w-24 h-16 sm:w-32 sm:h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                          selectedImageIndex === idx
                            ? 'border-[#609BE3] ring-2 ring-[#609BE3]/40 opacity-100 scale-105'
                            : 'border-white/10 opacity-50 hover:opacity-90'
                        }`}
                      >
                        <img src={imgSrc} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sticky Action Footer */}
            <div className="p-6 border-t border-white/10 bg-black/80 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
              {project.deployLink ? (
                <a
                  href={project.deployLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#609BE3] to-[#646DD2] text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-[#646DD2]/30 hover:opacity-95 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>{d.btn_deploy || 'Acessar Aplicação Live'}</span>
                  <FiExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-gray-400 text-xs font-mono font-semibold">
                  🔒 {d.btn_proprietary || 'Projeto Proprietário / Privado'}
                </span>
              )}

              <a
                href="#contact"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 hover:border-[#C9AA71] text-[#C9AA71] font-bold text-sm flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <FiMessageSquare className="w-4 h-4" />
                <span>{d.btn_contact || 'Discutir Projeto Similar'}</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
