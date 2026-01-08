# 3D Portfolio Website

A modern, interactive 3D model portfolio website built with React, TypeScript, Three.js, and Tailwind CSS.

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Three.js** - Industry-standard 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## ✨ Features

- 🎨 Interactive 3D model viewer with multiple sample models
- 🖱️ Full mouse controls (rotate, zoom, pan)
- 📱 Fully responsive design
- ⚡ Optimized performance with 60fps rendering
- 🎯 Modern UI/UX with smooth animations
- 🔄 Multiple 3D geometries (cube, sphere, pyramid, torus, cone)
- 💎 PBR materials with metalness and roughness properties
- 🌐 Client-side routing for seamless navigation

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── components/       # React components
│   │   ├── Navigation.tsx
│   │   ├── ModelViewer.tsx
│   │   ├── ModelCard.tsx
│   │   └── Scene3D.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── Gallery.tsx
│   │   └── ModelDetail.tsx
│   ├── types/           # TypeScript types
│   │   └── model.ts
│   ├── utils/           # Utility functions and data
│   │   └── modelsData.ts
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
└── package.json         # Dependencies
```

## 🎮 Controls

- **Rotate**: Click and drag with left mouse button
- **Zoom**: Scroll wheel or pinch on mobile
- **Pan**: Right-click and drag (or two-finger drag on mobile)

## 🎨 Sample Models

The portfolio includes 5 sample 3D models showcasing different materials and geometries:

1. **Metallic Cube** - High metalness, low roughness
2. **Glossy Sphere** - Smooth surface with gradient lighting
3. **Wireframe Pyramid** - Geometric visualization
4. **Golden Torus** - Complex geometry with metallic material
5. **Matte Cone** - Non-reflective surface

## 🚀 Deployment

This project can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Simply run `npm run build` and deploy the `dist` folder.

## 📝 License

MIT

## 👤 Author

Anoof MA - CEO & Visionary Leader
