---
name: Cyber-Professional CV
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#adc7ff'
  on-secondary: '#002e68'
  secondary-container: '#4a8eff'
  on-secondary-container: '#00285b'
  tertiary: '#faf3ff'
  on-tertiary: '#3c0090'
  tertiary-container: '#e1d2ff'
  on-tertiary-container: '#7213ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc7ff'
  on-secondary-fixed: '#001a41'
  on-secondary-fixed-variant: '#004493'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d1bcff'
  on-tertiary-fixed: '#23005b'
  on-tertiary-fixed-variant: '#5700c9'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1200px
---

## Brand & Style
The design system is engineered for high-level IT professionals, developers, and tech executives. It communicates technical proficiency and modern sophistication through a high-contrast, dark-mode aesthetic. 

The style is primarily **Minimalist Glassmorphism**. It utilizes deep, layered backgrounds to create a sense of digital depth, paired with razor-sharp borders and vibrant accents that mimic code editor highlights. The emotional response is one of precision, authority, and forward-thinking innovation. Visual complexity is reduced in favor of information density and legibility, ensuring that technical expertise remains the primary focus.

## Colors
The palette is rooted in a "Deep Space" theme. The primary background uses a near-black slate to minimize eye strain and maximize the pop of accent colors.

- **Primary (Electric Cyan):** Used for critical data points, active states, and primary call-to-actions.
- **Secondary (Digital Blue):** Used for secondary highlights and link states.
- **Tertiary (Deep Violet):** Reserved for subtle gradients or specialized tags (e.g., Seniority levels).
- **Neutral/Surface:** A range of slates and charcoals define the container hierarchy. 
- **Glass Accents:** Transparent white or cyan strokes at very low opacities (10-15%) create the glass effect.

## Typography
This design system employs a three-font strategy to balance impact with technical utility. 

1. **Geist** is used for headlines to provide a sharp, geometric, and modern tech feel.
2. **Inter** handles all body copy, chosen for its exceptional legibility in digital formats.
3. **JetBrains Mono** is utilized for metadata, dates, and technical skills, reinforcing the developer-centric aesthetic.

All headings should use tight letter-spacing to maintain a "locked-in" professional appearance. Body text maintains a generous line height (1.6x) to ensure long CV descriptions are easily skimmable.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop for a structured, editorial CV feel, transitioning to a fluid single-column stack on mobile devices.

- **Desktop:** 12-column grid with a maximum width of 1200px. Sections like "Experience" should span 8 columns, while "Skills" and "Contact" reside in a 4-column sidebar.
- **Rhythm:** An 8px linear scale is used for all padding and margins. 
- **Alignment:** Strict left-alignment for all text blocks to maximize readability. Right-alignment is only permitted for dates or quantitative metrics in the sidebar.

## Elevation & Depth
The design system avoids heavy shadows, instead using **Tonal Layering** and **Backdrop Blurs** to indicate depth.

- **Level 0 (Background):** Solid `#020617`.
- **Level 1 (Section Cards):** Semi-transparent background (`rgba(30, 41, 59, 0.5)`) with a `20px` backdrop-filter blur and a 1px solid border of `rgba(255, 255, 255, 0.08)`.
- **Level 2 (Popovers/Hover States):** Increased border opacity and a subtle cyan outer glow (`0px 0px 15px rgba(0, 240, 255, 0.15)`).

Depth is always additive—stacking lighter, more translucent layers on top of darker ones.

## Shapes
The shape language is "Soft-Tech." While the overall vibe is sharp and precise, a subtle radius of `0.25rem` (4px) is applied to all cards and buttons to prevent the UI from feeling overly aggressive or dated. 

Buttons and technical tags (chips) use a slightly higher radius (`rounded-lg`) to differentiate interactive elements from structural containers.

## Components
- **Buttons:** Primary buttons use a solid Electric Cyan background with black text for maximum contrast. Ghost buttons use a 1px cyan border and no fill.
- **Skill Chips:** Small, rectangular containers with a JetBrains Mono label. Use a subtle gradient border or a faint cyan glow to indicate proficiency levels.
- **Timeline:** A vertical 1px line in secondary blue. Experience nodes are represented by hollow 8px circles that "fill" with primary cyan on hover.
- **Input Fields:** Minimalist style; only a bottom border that expands and glows cyan when focused.
- **Progress Bars:** Thin 4px tracks for technical skills. The "filled" portion should use a horizontal gradient from Secondary Blue to Primary Cyan.
- **Icons:** Use thin-stroke (1px or 1.5px) vector icons. Avoid solid fills; use "duotone" styles where one element of the icon is the accent color.