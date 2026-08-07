# 5. Slide-Over Glassmorphic Project Case Study Drawer with Tabbed Architecture

Date: 2026-08-04

## Status

Accepted

## Context

The previous project exhibition relied on a simple paginated modal with basic text lines and preview images. The portfolio needed a comprehensive, high-authority way to present deep project case studies (architecture, technical challenges, key metrics, image galleries, and live deployment links) without forcing the user off the main landing page or breaking the immersive Dark Glassmorphism design system.

## Decision

We decided to implement a Slide-Over Glassmorphic Case Study Drawer (`ProjectCaseStudyDrawer.tsx`):

1. **Slide-Over UI Pattern**:
   - The drawer slides smoothly from the right (`x: '100%'` -> `x: '0'`) using Framer Motion `AnimatePresence`.
   - Dark glassmorphism styling (`backdrop-blur-2xl bg-black/80 border-l border-white/15`).
   - Supports keyboard shortcuts (`Esc` key) and backdrop click dismissal.

2. **Tabbed Case Study Structure**:
   - **Visão Geral (Overview)**: Summary, problem statement, solution delivered, and key achievements/metrics.
   - **Arquitetura & Engenharia (Architecture & Engineering)**: Technical challenges overcome, stack choices, performance optimizations, and backend/frontend decisions.
   - **Galeria & Demonstração (Media & Screenshots)**: High-resolution media viewer with thumbnail selection, captions, and responsive zoom.
   - **Sticky Action Footer**: Persistent CTA bar with links to Live Deploy, GitHub Repository (where applicable), and contact triggers.

3. **Dual Trigger Interaction**:
   - Triggered both by clicking the main "Descubra Mais" CTA button and by clicking directly on the active 3D circular project frame in the `ProjectCarousel`.

4. **Data & i18n Integration**:
   - Native JSON dictionary expansion (`dictionaries/pt.json` and `dictionaries/en.json`) under the `case_study` key.
   - Typed TypeScript helper (`lib/projectsData.ts`) providing unified project metadata across languages.

## Consequences

- Provides a comprehensive technical case study presentation tailored for both engineering recruiters and business clients.
- Preserves context on the main page while offering deep-dive documentation.
- Cleanly integrated into the Next.js dictionary i18n pipeline.
