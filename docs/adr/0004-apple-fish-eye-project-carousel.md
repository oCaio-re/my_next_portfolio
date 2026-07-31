# 4. Apple-Style Fish-Eye Circular Project Carousel with U-Curve & Reshaping Physics

Date: 2026-07-30 (Updated 2026-07-31)

## Status

Accepted

## Context

The user requested enhancements to the 3D Fish-Eye Carousel:
- Subtle "U"-shaped amphitheater alignment curve for adjacent side elements.
- Realistic depth shadows (`shadow-[0_20px_45px_rgba(0,0,0,0.75)]`) on adjacent circular frames to elevate them in 3D space.
- Tactile Apple-like reshaping/elastic morphing physics (squash & stretch keyframe transition) when switching between active items.

## Decision

We decided to upgrade `ProjectCarousel.tsx`:
1. **Geometry & U-Curve**:
   - Central active item stays at the lowest center point (`yOffset = 0`, `scale = 1.35`, `z-40`, glowing ambient halo).
   - Adjacent items ascend along a smooth parabolic "U" curve (`yOffset = -24px` for ±1, `-56px` for ±2), combined with 3D Y-axis rotation (`rotateY = offset * -26deg`).
2. **Depth Shadows**:
   - Added deep 3D drop-shadows on adjacent items (`shadow-[0_20px_45px_rgba(0,0,0,0.75)]` in Dark mode and `shadow-[0_15px_35px_rgba(0,0,0,0.15)]` in Light mode).
3. **Apple Reshaping Physics**:
   - Implemented elastic spring transition with squash-and-stretch morphing (`stiffness: 260`, `damping: 22`) during item state switches.
4. **App Expansion Morphing**: Clicking the active circular project or its CTA button triggers an Apple app-launch style zoom expansion animation into the full project detail modal.

## Consequences

- Delivers a tactile, high-end Apple-grade interactive carousel experience.
- Perfect 3D depth separation between the center active project and adjacent items.
- Maintains 60fps hardware-accelerated performance across all devices.
