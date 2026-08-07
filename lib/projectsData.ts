import React from 'react';
import { FaReact, FaHtml5, FaPython } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiChakraui, SiSelenium, SiMysql, SiFastapi, SiVite, SiFramer } from 'react-icons/si';
import { TechItem } from '../app/[lang]/components/TechStackChaser';

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudyData {
  summary: string;
  problem: string;
  solution: string;
  architectureHighlights: string[];
  technicalChallenges: string[];
  keyMetrics: CaseStudyMetric[];
  captions: string[];
}

export interface ExtendedProjectData {
  id: string;
  title: string;
  category: string;
  logoSrc: string;
  previewImages: string[];
  deployLink?: string;
  githubLink?: string;
  techs: TechItem[];
}

export function getProjectsList(dictionary: any): (ExtendedProjectData & { caseStudy: CaseStudyData })[] {
  const pDict = dictionary.page.projects;

  return [
    // 1. STUSSI & REIS ADVOCACIA
    {
      id: 'stussireis',
      title: 'Stussi & Reis Advocacia',
      category: 'LEGALTECH & CONSULTORIA',
      logoSrc: '/images/SR/logo-stussi.svg',
      previewImages: [
        '/images/SR/atendimento.jpg',
        '/images/SR/socios.jpg',
        '/images/SR/balanca.png',
      ],
      deployLink: 'https://www.stussireisadvocacia.com.br',
      techs: [
        { name: 'React', icon: React.createElement(FaReact, { key: 'react', className: 'w-5 h-5' }), activeColor: '#38bdf8' },
        { name: 'Next.js', icon: React.createElement(RiNextjsFill, { key: 'next', className: 'w-5 h-5' }), activeColor: '#f8fafc' },
        { name: 'TypeScript', icon: React.createElement(BiLogoTypescript, { key: 'ts', className: 'w-5 h-5' }), activeColor: '#3178c6' },
        { name: 'Tailwind CSS', icon: React.createElement(RiTailwindCssFill, { key: 'tw', className: 'w-5 h-5' }), activeColor: '#06b6d4' },
        { name: 'Framer Motion', icon: React.createElement(SiFramer, { key: 'framer', className: 'w-5 h-5' }), activeColor: '#e100ff' },
      ],
      caseStudy: {
        summary: pDict.stussireis?.case_study?.summary || '',
        problem: pDict.stussireis?.case_study?.problem || '',
        solution: pDict.stussireis?.case_study?.solution || '',
        architectureHighlights: pDict.stussireis?.case_study?.architecture_highlights || [],
        technicalChallenges: pDict.stussireis?.case_study?.technical_challenges || [],
        keyMetrics: pDict.stussireis?.case_study?.key_metrics || [],
        captions: pDict.stussireis?.case_study?.captions || [],
      },
    },
    // 2. NERY TOUR
    {
      id: 'nerytour',
      title: 'Nery Tour Mobilidade',
      category: 'MOBILIDADE & TURISMO',
      logoSrc: '/images/NT/logo-nerytour.svg',
      previewImages: [
        '/images/NT/recife.jpg',
        '/images/NT/porto.webp',
        '/images/NT/maragogi.jpg',
      ],
      deployLink: 'https://www.nerytour.com/',
      techs: [
        { name: 'React', icon: React.createElement(FaReact, { key: 'react', className: 'w-5 h-5' }), activeColor: '#38bdf8' },
        { name: 'Next.js', icon: React.createElement(RiNextjsFill, { key: 'next', className: 'w-5 h-5' }), activeColor: '#f8fafc' },
        { name: 'TypeScript', icon: React.createElement(BiLogoTypescript, { key: 'ts', className: 'w-5 h-5' }), activeColor: '#3178c6' },
        { name: 'Tailwind CSS', icon: React.createElement(RiTailwindCssFill, { key: 'tw', className: 'w-5 h-5' }), activeColor: '#06b6d4' },
        { name: 'Framer Motion', icon: React.createElement(SiFramer, { key: 'framer', className: 'w-5 h-5' }), activeColor: '#e100ff' },
      ],
      caseStudy: {
        summary: pDict.nerytour?.case_study?.summary || '',
        problem: pDict.nerytour?.case_study?.problem || '',
        solution: pDict.nerytour?.case_study?.solution || '',
        architectureHighlights: pDict.nerytour?.case_study?.architecture_highlights || [],
        technicalChallenges: pDict.nerytour?.case_study?.technical_challenges || [],
        keyMetrics: pDict.nerytour?.case_study?.key_metrics || [],
        captions: pDict.nerytour?.case_study?.captions || [],
      },
    },
    // 3. ALL TASTY CAFFE
    {
      id: 'all-tasty-caffe',
      title: 'All Tasty Caffe',
      category: 'WEBSITE & BRANDING',
      logoSrc: '/images/AT/AT_logo.png',
      previewImages: [
        '/images/AT/home-page.png',
        '/images/AT/hot-beverages.png',
        '/images/AT/our-community.png',
      ],
      deployLink: 'https://alltasty.cafe/',
      techs: [
        { name: 'React', icon: React.createElement(FaReact, { key: 'react', className: 'w-5 h-5' }), activeColor: '#38bdf8' },
        { name: 'Vite', icon: React.createElement(SiVite, { key: 'vite', className: 'w-5 h-5' }), activeColor: '#bd34fe' },
        { name: 'TypeScript', icon: React.createElement(BiLogoTypescript, { key: 'ts', className: 'w-5 h-5' }), activeColor: '#3178c6' },
        { name: 'HTML5', icon: React.createElement(FaHtml5, { key: 'html', className: 'w-5 h-5' }), activeColor: '#e34f26' },
        { name: 'Chakra UI', icon: React.createElement(SiChakraui, { key: 'chakra', className: 'w-5 h-5' }), activeColor: '#319795' },
      ],
      caseStudy: {
        summary: pDict.all_tasty_caffe?.case_study?.summary || pDict.all_tasty_caffe?.text_1,
        problem: pDict.all_tasty_caffe?.case_study?.problem || pDict.all_tasty_caffe?.text_2,
        solution: pDict.all_tasty_caffe?.case_study?.solution || pDict.all_tasty_caffe?.text_3,
        architectureHighlights: pDict.all_tasty_caffe?.case_study?.architecture_highlights || [],
        technicalChallenges: pDict.all_tasty_caffe?.case_study?.technical_challenges || [],
        keyMetrics: pDict.all_tasty_caffe?.case_study?.key_metrics || [],
        captions: pDict.all_tasty_caffe?.case_study?.captions || [],
      },
    },
    // 4. VOAR BEM
    {
      id: 'voar-bem',
      title: 'Voar Bem Viagens',
      category: 'WEBSITE & E-COMMERCE',
      logoSrc: '/images/VB/logo-sfundo.png',
      previewImages: [
        '/images/VB/home.png',
        '/images/VB/hoteis.png',
        '/images/VB/pacotes.png',
      ],
      deployLink: 'https://www.voarbem.net/',
      techs: [
        { name: 'React', icon: React.createElement(FaReact, { key: 'react', className: 'w-5 h-5' }), activeColor: '#38bdf8' },
        { name: 'Next.js', icon: React.createElement(RiNextjsFill, { key: 'next', className: 'w-5 h-5' }), activeColor: '#f8fafc' },
        { name: 'TypeScript', icon: React.createElement(BiLogoTypescript, { key: 'ts', className: 'w-5 h-5' }), activeColor: '#3178c6' },
        { name: 'HTML5', icon: React.createElement(FaHtml5, { key: 'html', className: 'w-5 h-5' }), activeColor: '#e34f26' },
        { name: 'Tailwind CSS', icon: React.createElement(RiTailwindCssFill, { key: 'tw', className: 'w-5 h-5' }), activeColor: '#06b6d4' },
      ],
      caseStudy: {
        summary: pDict.voar_bem?.case_study?.summary || pDict.voar_bem?.text_1,
        problem: pDict.voar_bem?.case_study?.problem || pDict.voar_bem?.text_2,
        solution: pDict.voar_bem?.case_study?.solution || pDict.voar_bem?.text_3,
        architectureHighlights: pDict.voar_bem?.case_study?.architecture_highlights || [],
        technicalChallenges: pDict.voar_bem?.case_study?.technical_challenges || [],
        keyMetrics: pDict.voar_bem?.case_study?.key_metrics || [],
        captions: pDict.voar_bem?.case_study?.captions || [],
      },
    },
    // 5. LUCAS ALVES
    {
      id: 'lucas-alves',
      title: 'Lucas Alves Photography',
      category: 'PORTFOLIO & BRANDING',
      logoSrc: '/images/LA/logo-lucas.png',
      previewImages: [
        '/images/LA/home-page.png',
        '/images/LA/trabalhos.png',
        '/images/LA/depoimentos.png',
      ],
      deployLink: 'https://lucasfotos.vercel.app/',
      techs: [
        { name: 'React', icon: React.createElement(FaReact, { key: 'react', className: 'w-5 h-5' }), activeColor: '#38bdf8' },
        { name: 'Next.js', icon: React.createElement(RiNextjsFill, { key: 'next', className: 'w-5 h-5' }), activeColor: '#f8fafc' },
        { name: 'TypeScript', icon: React.createElement(BiLogoTypescript, { key: 'ts', className: 'w-5 h-5' }), activeColor: '#3178c6' },
        { name: 'HTML5', icon: React.createElement(FaHtml5, { key: 'html', className: 'w-5 h-5' }), activeColor: '#e34f26' },
        { name: 'Tailwind CSS', icon: React.createElement(RiTailwindCssFill, { key: 'tw', className: 'w-5 h-5' }), activeColor: '#06b6d4' },
      ],
      caseStudy: {
        summary: pDict.lucas_alves?.case_study?.summary || pDict.lucas_alves?.text_1,
        problem: pDict.lucas_alves?.case_study?.problem || pDict.lucas_alves?.text_2,
        solution: pDict.lucas_alves?.case_study?.solution || pDict.lucas_alves?.text_3,
        architectureHighlights: pDict.lucas_alves?.case_study?.architecture_highlights || [],
        technicalChallenges: pDict.lucas_alves?.case_study?.technical_challenges || [],
        keyMetrics: pDict.lucas_alves?.case_study?.key_metrics || [],
        captions: pDict.lucas_alves?.case_study?.captions || [],
      },
    },
    // 6. JAQUELINE & LUCAS
    {
      id: 'jaqueline-e-lucas',
      title: 'Jaqueline & Lucas',
      category: 'EVENTOS & APLICAÇÃO WEB',
      logoSrc: '/images/JL/logo-jl.png',
      previewImages: [
        '/images/JL/logo-jl.png',
      ],
      deployLink: 'https://jaqueline-e-lucas-blond.vercel.app/',
      techs: [
        { name: 'React', icon: React.createElement(FaReact, { key: 'react', className: 'w-5 h-5' }), activeColor: '#38bdf8' },
        { name: 'Next.js', icon: React.createElement(RiNextjsFill, { key: 'next', className: 'w-5 h-5' }), activeColor: '#f8fafc' },
        { name: 'TypeScript', icon: React.createElement(BiLogoTypescript, { key: 'ts', className: 'w-5 h-5' }), activeColor: '#3178c6' },
        { name: 'Tailwind CSS', icon: React.createElement(RiTailwindCssFill, { key: 'tw', className: 'w-5 h-5' }), activeColor: '#06b6d4' },
      ],
      caseStudy: {
        summary: pDict.jaqueline_e_lucas?.case_study?.summary || '',
        problem: pDict.jaqueline_e_lucas?.case_study?.problem || '',
        solution: pDict.jaqueline_e_lucas?.case_study?.solution || '',
        architectureHighlights: pDict.jaqueline_e_lucas?.case_study?.architecture_highlights || [],
        technicalChallenges: pDict.jaqueline_e_lucas?.case_study?.technical_challenges || [],
        keyMetrics: pDict.jaqueline_e_lucas?.case_study?.key_metrics || [],
        captions: pDict.jaqueline_e_lucas?.case_study?.captions || [],
      },
    },
    // 7. SOGRAPE WINES (PROPRIETÁRIO)
    {
      id: 'sogrape-wines',
      title: 'Sogrape Wines Data Engine',
      category: 'DATA & FULL-STACK SYSTEM',
      logoSrc: '/images/wine-search/sogrape-logo.svg',
      previewImages: [
        '/images/wine-search/product-list.png',
        '/images/wine-search/product-page.png',
        '/images/wine-search/product-graph.png',
      ],
      techs: [
        { name: 'Python', icon: React.createElement(FaPython, { key: 'py', className: 'w-5 h-5' }), activeColor: '#ffd43b' },
        { name: 'Selenium', icon: React.createElement(SiSelenium, { key: 'selenium', className: 'w-5 h-5' }), activeColor: '#43b02a' },
        { name: 'MySQL', icon: React.createElement(SiMysql, { key: 'mysql', className: 'w-5 h-5' }), activeColor: '#00758f' },
        { name: 'FastAPI', icon: React.createElement(SiFastapi, { key: 'fastapi', className: 'w-5 h-5' }), activeColor: '#059669' },
      ],
      caseStudy: {
        summary: pDict.sogrape_wines?.case_study?.summary || pDict.sogrape_wines?.text_1,
        problem: pDict.sogrape_wines?.case_study?.problem || pDict.sogrape_wines?.text_2,
        solution: pDict.sogrape_wines?.case_study?.solution || pDict.sogrape_wines?.text_3,
        architectureHighlights: pDict.sogrape_wines?.case_study?.architecture_highlights || [],
        technicalChallenges: pDict.sogrape_wines?.case_study?.technical_challenges || [],
        keyMetrics: pDict.sogrape_wines?.case_study?.key_metrics || [],
        captions: pDict.sogrape_wines?.case_study?.captions || [],
      },
    },
  ];
}
