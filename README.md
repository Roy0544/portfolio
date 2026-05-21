# 🌌 Tuhin Roy | Immersive Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Tailwind_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Spline-FF3366?style=for-the-badge&logo=spline&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
</div>

---

## ✨ Overview
A high-fidelity, interactive developer portfolio built with a focus on immersive 3D web environments and premium UI/UX. This project merges clean frontend architecture with real-time 3D models and social integration.

> **Live Demo:** [portfolio-link.vercel.app](https://portfolio-nine-sable-39sv0g5oqj.vercel.app) *(Update with your actual URL)*

---

## 🚀 Key Features

### 🤖 3D Robot Interaction (Hero)
- **Mouse Tracking:** Integrated Spline model with global coordinate tracking. The robot "looks" at your cursor anywhere in the hero section.
- **Glassmorphism HUD:** Sci-Fi inspired technical overlays with real-time system status indicators.

### 🍱 Bento-Grid Project Showcase
- **Dual-Phase Interaction:** Cards transition from high-quality project imagery to a detailed "Bento-Style" technical breakdown on hover/tap.
- **Dynamic Tagging:** Tech stack tags are color-coded based on the technology (e.g., Tailwind Blue, JavaScript Yellow).
- **Mobile Optimized:** Full support for touch-manipulation with state-based hover reveals.

### 🪐 Orbiting Tech Stack
- **Multi-Orbit Visualization:** A dynamic, rotating view of core skills across Foundations, Frameworks, and Tools.
- **Responsive Geometry:** Automatically scales and repositions for mobile devices to maintain visual clarity.

### 📧 Integrated Contact Engine
- **Formspree Connection:** Fully functional contact form with real-time validation (Zod + React Hook Form).
- **Interactive States:** Custom loading spinners and success feedback loops.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 16 (App Router), React 19, Tailwind CSS 4
- **3D Modeling:** Spline Tool (Runtime API)
- **Animation:** Framer Motion (Scroll-triggered reveals, staggered entrances)
- **Forms & Validation:** React Hook Form, Zod, Formspree
- **Icons:** Lucide-React
- **Backend (Integration):** Supabase, Appwrite

---

## 📂 Project Structure

```bash
├── public/          # Static assets (SVGs, Favicon)
├── src/
│   ├── app/         # Next.js App Router (Layouts, Global Styles)
│   ├── components/
│   │   ├── 3d/      # Spline scene components
│   │   ├── layout/  # Navbar, Footer
│   │   ├── sections/# Page segments (Hero, Projects, Skills)
│   │   └── ui/      # Reusable UI primitives (Buttons, Orbiting Circles)
│   └── lib/         # Utility functions & CN merging
├── next.config.mjs  # Optimized build configuration
└── package.json     # Dependency manifest
```

---

## 📥 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/spline-portfolio.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Formspree:**
   Replace the endpoint in `src/components/sections/Contact.jsx` with your own Formspree ID.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** to view it in the browser.

---

## 📄 License
This project is [MIT](LICENSE) licensed.

---

<div align="center">
  <p>Built with ❤️ by <b>Tuhin Roy</b></p>
  <a href="https://github.com/yourusername">
    <img src="https://img.shields.io/github/followers/yourusername?label=Follow&style=social" />
  </a>
</div>
