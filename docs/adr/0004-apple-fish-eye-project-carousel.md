# 4. Apple-Style Fish-Eye Circular Project Carousel

Date: 2026-07-30

## Status

Accepted

## Context

The previous projects grid displayed project items as static rectangular cards in a standard 2-column/3-column grid. The user requested a complete overhaul into an interactive 3D Fish-Eye Carousel featuring:
- Larger circular project frames in the center
- Horizontal lens/fish-eye distortion curve for side items
- Apple-like spring physics and smooth app launch zoom morphing when opening project details.

## Decision

We decided to replace the static grid in `Projects.tsx` with a custom Apple-Style 3D Fish-Eye Circular Carousel (`ProjectCarousel.tsx`):
1. **Geometry**: The active central item is rendered as a prominent circular frame (`w-52 h-52 sm:w-64 sm:h-64`, `scale-110`, `z-30`, glowing border). Adjacent side items undergo 3D Y-axis rotation (`rotateY(25deg)` / `-25deg`), X-axis compression, scaling (`scale-75`), and opacity reduction (`opacity-45`), producing a tactile 3D lens curvature.
2. **Apple Spring Physics**: Powered by `framer-motion` using spring transition configurations (`stiffness: 300`, `damping: 28`, `mass: 0.8`).
3. **App Expansion Morphing**: Clicking the active circular project or its CTA button triggers an Apple app-launch style zoom expansion animation that smoothly transforms the circular preview into the full project detail modal.
4. **Controls**: Includes glassmorphic directional arrows, page indicator dots, keyboard arrow navigation, and touch/drag swipe support.

## Consequences

- Creates an engaging, interactive showcase for the user's portfolio.
- Provides fluid 60fps animations with hardware acceleration via Framer Motion.
- Maintains full responsiveness across desktop, tablet, and mobile devices.
