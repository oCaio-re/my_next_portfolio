# 3. Compact Proportions and Site-Wide Resizing

Date: 2026-07-30

## Status

Accepted

## Context

The previous layout dimensions across the portfolio were overly large:
- Section titles at `text-5xl` to `text-6xl` (48px-60px)
- Max container widths at `max-w-6xl` (1280px)
- Hero profile image at `320px x 320px`
- Project cards at `h-[28rem]` (448px height)
- Section paddings at `py-24` (96px top/bottom)

This scale felt uncompact, sparse, and took up excessive vertical screen space without increasing information density.

## Decision

We decided to implement a site-wide compact sizing architecture (~25% reduction):
1. **Container Widths**: Reduced maximum container width from `max-w-6xl` (1280px) to `max-w-5xl` (1024px).
2. **Typography**:
   - Hero Title (H1): Reduced to `text-4xl sm:text-5xl` (36px - 48px).
   - Section Titles (H2): Reduced to `text-3xl sm:text-4xl` (28px - 36px).
   - Paragraphs/Descriptions: `text-sm sm:text-base`.
3. **Section Paddings**: Reduced vertical padding from `py-24` (96px) to `py-12 sm:py-16` (48px - 64px).
4. **Hero Image**: Reduced from `320px` to `256px` (`w-52 h-52 sm:w-64 sm:h-64`).
5. **Navbar**: Height reduced from `h-16` (64px) to `h-14` (56px), max width `max-w-5xl`.
6. **Cards**: Project card heights reduced from `h-[28rem]` to `h-[22rem]`, padding `p-5`. Contact form max width `max-w-2xl` with `p-6 sm:p-8`.

## Consequences

- High information density and crisp, professional SaaS-grade aesthetics.
- Fits more content comfortably within the viewport without requiring excessive scrolling.
- Maintains 100% responsiveness on mobile, tablet, and desktop displays.
