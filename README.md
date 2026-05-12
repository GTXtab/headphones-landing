# 🎧 AirPods Landing Page — Apple Aesthetic

A modern, high-performance landing page for selling AirPods, developed with a focus on flawless UI/UX and technical excellence. The project demonstrates a **Performance-First** approach, ensuring 60 FPS even during complex animations on mobile devices.

## 💎 Key Features

* **Apple-Style Typography & Layout:** Minimalistic design with a strong focus on content.
* **Interactive Header Slider:** Dynamic model switching with unique animation trajectories for each device.
* **Advanced Comparison Table:** Responsive comparison table using CSS Grid animations for maximum smoothness.
* **Mobile-First Experience:** Native **Snap-Scrolling** implementation and optimized touch zones.
* **Quick Order Form:** A concise and sleek order form with built-in validation.

## 🚀 Tech Stack

* **Framework:** React (Vite)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **Deployment:** GitHub Pages

## ⚡ Optimization & Performance

The project implements several solutions to achieve high Lighthouse scores:

* **Image Optimization:** Transitioned to **WebP** format and utilized `fetchpriority="high"` for LCP images.
* **Main Thread Efficiency:** Heavy JS animations replaced with **GPU-accelerated CSS transitions** (grid-template-rows).
* **Rendering Logic:** Utilized `React.memo` and `useCallback` to isolate rendering and prevent unnecessary re-renders.
* **Zero Forced Reflows:** Animations are built exclusively using `transform` and `opacity` properties.

## 🛠 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/headphones-landing.git

```

2. Install dependencies:

```bash
npm install

```

3. Run the local server:

```bash
npm run dev

```

## 📦 Deployment

The project is automatically built and deployed to GitHub Pages using the script:

```bash
npm run deploy

```

---

© 2026 Island_with_apple. All rights reserved.

```

*(Не забудь замінити `your-username` у посиланні для клонування на свій реальний нікнейм у GitHub!)*

```
