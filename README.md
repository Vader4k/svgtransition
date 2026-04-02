# 🌀 SVG Transitions - Next.js Page Router

A premium page transition system for Next.js 15+ applications, featuring fluid SVG path animations powered by GSAP and `next-transition-router`.

![Banner](./public/banner.png)

## ✨ Features
- **Fluid SVG Morphing**: High-performance SVG path animations using GSAP's `DrawSVGPlugin`.
- **Seamless Routing**: Integrated with `next-transition-router` for smooth leave/enter transitions.
- **Next.js 15+ Ready**: Built with the latest Next.js App Router for optimal performance.
- **Tailwind CSS 4+**: Modern styling with the latest Tailwind CSS features.
- **GSAP Powered**: Industry-standard animation library for buttery smooth interactions.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Vader4k/svgtransition.git
   cd svgtransition
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## 🛠️ Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Animation**: [GSAP](https://gsap.com/) & [@gsap/react](https://gsap.com/docs/v3/React)
- **Routing**: [next-transition-router](https://github.com/ivandotv/next-transition-router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📖 How It Works

The transition is handled by the `TransitionWrapper` component located in `features/page-transition`. It wraps the entire application in `app/layout.tsx`.

### The Core Logic
The `TransitionWrapper` utilizes `TransitionRouter` to define `leave` and `enter` animations:
- **Leave**: The SVG path draws in, covering the screen with a fluid blue stroke.
- **Enter**: The SVG path draws out, revealing the next page with a smooth opacity fade.

```tsx
// Example Snippet from TransitionWrapper.tsx
tl.to(svgPathRef.current, {
  drawSVG: "100%",
  strokeWidth: 300,
  duration: 1,
  ease: "power2.inOut"
})
```

## 🎨 Customizing the SVG
You can modify the transition path by editing the `d` attribute in `features/page-transition/components/TransitionWrapper.tsx`. The current path is a custom-designed squiggle that spans the viewport.

---
Built with ❤️ for fluid web experiences.

