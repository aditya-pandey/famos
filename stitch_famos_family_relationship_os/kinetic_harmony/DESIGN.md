---
name: Kinetic Harmony
colors:
  surface: '#f7faf8'
  surface-dim: '#d7dbd9'
  surface-bright: '#f7faf8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f3'
  surface-container: '#ebefed'
  surface-container-high: '#e5e9e7'
  surface-container-highest: '#e0e3e1'
  on-surface: '#181c1c'
  on-surface-variant: '#3e4947'
  inverse-surface: '#2d3130'
  inverse-on-surface: '#eef1f0'
  outline: '#6e7977'
  outline-variant: '#bdc9c6'
  surface-tint: '#006a63'
  primary: '#005c55'
  on-primary: '#ffffff'
  primary-container: '#0f766e'
  on-primary-container: '#a3faef'
  inverse-primary: '#80d5cb'
  secondary: '#006b5e'
  on-secondary: '#ffffff'
  secondary-container: '#6ef9e2'
  on-secondary-container: '#007164'
  tertiary: '#7f4025'
  on-tertiary: '#ffffff'
  tertiary-container: '#9c573a'
  on-tertiary-container: '#ffe5db'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9cf2e8'
  primary-fixed-dim: '#80d5cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#00504a'
  secondary-fixed: '#6ef9e2'
  secondary-fixed-dim: '#4ddcc6'
  on-secondary-fixed: '#00201b'
  on-secondary-fixed-variant: '#005047'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb598'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#72361b'
  background: '#f7faf8'
  on-background: '#181c1c'
  surface-variant: '#e0e3e1'
typography:
  display-lg:
    fontFamily: Lexend
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Lexend
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Lexend
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
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

This design system is built upon the concept of "Emotionally Intelligent Minimalism." It seeks to balance the high-performance utility of a "Relationship Operating System" with the warmth and approachability required for family life. The aesthetic avoids the playful chaos of typical family apps and the sterile coldness of enterprise software.

The visual narrative combines **Apple-inspired intentionality**—where every pixel of whitespace serves to reduce cognitive load—with **Stripe-inspired structural precision**. This creates a premium, calm environment that feels like a sanctuary rather than a chore list. High-end glassmorphism and subtle gradients provide depth, suggesting a multi-layered, interconnected family ecosystem.

## Colors

The color strategy for this design system prioritizes stability and trust through the use of **Deep Teal (#0F766E)**. This is offset by the **Soft Turquoise (#5EEAD4)** to provide a sense of modern technological lightness.

**Warm Orange (#FB923C)** is used sparingly as an emotional "spark"—it highlights moments of connection, milestones, and high-priority family events without feeling alarming. The background uses a sophisticated **Off-white (#F8FAFC)** to reduce eye strain, while the text remains in a soft **Charcoal (#1F2937)** to maintain high legibility while appearing more natural and less clinical than pure black.

## Typography

This design system utilizes a dual-typeface system to achieve its "intelligent yet warm" goals. **Lexend** is employed for headlines; its unique geometric clarity was specifically designed for readability, making it perfect for busy families. Headlines should feature generous line heights and tight tracking for a modern, editorial feel.

**Inter** handles all functional UI and body text. It is a systematic typeface that ensures the "Operating System" aspect of the product feels reliable and precise. We maintain a generous **1.6x line height** for all body text to promote a relaxed, calm reading experience, even when dealing with dense family schedules or logistics.

## Layout & Spacing

The layout philosophy follows a **12-column fixed-max-width grid** (1280px), centered within the viewport. This design system treats whitespace as a functional component, not just an empty area. We use a strictly enforced **8px linear scale** for all padding and margins.

- **Desktop:** Large 64px side margins provide an "Apple-level" focus on central content.
- **Mobile:** Margins tighten to 20px, but vertical section gaps remain high (80px+) to maintain the sense of calm.
- **Flow:** Layouts should utilize "Stripe-inspired" staggered grids for feature sections, using slight offsets to create a dynamic, modern rhythm that feels alive and evolving—much like a family.

## Elevation & Depth

Hierarchy in this design system is created through a combination of **Ambient Shadows** and **Glassmorphism**.

1.  **The Base Layer:** The #F8FAFC background acts as the canvas.
2.  **Surface Tier:** Pure white (#FFFFFF) cards sit on this canvas with "Soft Elevation"—specifically using multi-layered shadows with a 2% Primary Teal tint in the shadow color to prevent them from looking gray and "dirty."
3.  **The Glass Layer:** The sticky navbar and secondary floating menus use a `backdrop-filter: blur(12px)` with a 70% white opacity. This allows content to scroll underneath while maintaining legibility and a sense of physical space.
4.  **Interactive Depth:** On hover, cards should subtly lift (increase blur) and scale (1.02x) to provide immediate tactile feedback.

## Shapes

The shape language is defined by **pronounced, friendly curves**. While the base variable is set to `2` (Rounded), specific high-level components exceed this to create a softer visual profile.

- **Large Containers/Cards:** Use a 24px radius to feel substantial and modern.
- **Buttons:** Use a 12px radius, striking a balance between "pill" (childish) and "sharp" (clinical).
- **Interactive States:** Focus rings and selection states should strictly follow the radius of the element they surround, maintaining a 4px offset.
- **Icons:** Use a 2px stroke weight with rounded caps and joins to match the soft typography and container edges.

## Components

### Navigation
The **sticky navbar** is the anchor of the experience. It must utilize glassmorphism (70% white / 12px blur) with a thin 1px bottom border (#0F766E at 5% opacity). Navigation links use Lexend (Label-md) with an Orange accent dot appearing below the active item.

### Cards
Cards are the primary unit of the "Relationship OS." Every card features a #FFFFFF background, a 1px border (#E2E8F0), and a 24px corner radius. The shadow should be diffused (Blur: 30px, Y: 10px, Opacity: 4%) and slightly tinted with the Teal primary.

### Buttons
- **Primary CTA:** Solid Teal (#0F766E) with white text. On hover, use a smooth transition to a slightly lighter teal or apply a subtle Turquoise (#5EEAD4) glow.
- **Secondary:** Transparent with a 1px Teal border and Turquoise hover fill at 10% opacity.
- **Ghost:** No border, just Teal text, with a soft gray background appearing on hover.

### Input Fields
Inputs are "sophisticated and minimal." They use the Off-white background with a 1px border. Upon focus, the border transitions to Primary Teal with a soft 4px turquoise outer glow. Labels should be floating or positioned clearly above using `label-md`.

### Iconography
Icons should be **linear and minimal**, utilizing the Primary Teal for the main stroke and the Secondary Turquoise or Warm Orange for "accent spots" (e.g., a teal calendar icon with a single turquoise dot representing an event).