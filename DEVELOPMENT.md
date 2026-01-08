# Development Guide

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager
- Modern web browser with WebGL support

### Initial Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd 3d-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:3000 in your browser

## Development Commands

```bash
npm run dev      # Start development server (hot reload enabled)
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navigation.tsx   # Top navigation bar
│   ├── ModelViewer.tsx  # 3D model viewer wrapper with Canvas
│   ├── ModelCard.tsx    # Gallery card for each model
│   └── Scene3D.tsx      # 3D scene with geometries and materials
├── pages/               # Page-level components
│   ├── Home.tsx         # Landing page
│   ├── Gallery.tsx      # Model gallery grid
│   └── ModelDetail.tsx  # Full-screen model viewer
├── types/               # TypeScript type definitions
│   └── model.ts         # 3D model interfaces
├── utils/               # Utilities and data
│   └── modelsData.ts    # Sample 3D model configurations
├── App.tsx              # Main app with routing
├── main.tsx             # Entry point
└── index.css            # Global styles with Tailwind
```

## Adding New 3D Models

### 1. Define Model Data

Add a new model to `src/utils/modelsData.ts`:

```typescript
{
  id: '6',
  name: 'Your Model Name',
  description: 'Model description',
  type: 'box' | 'sphere' | 'pyramid' | 'torus' | 'cone',
  color: '#hexcolor',
  metalness: 0.5,  // 0 to 1
  roughness: 0.5,  // 0 to 1
  wireframe: false,
}
```

### 2. Add Custom Geometries

To add custom Three.js geometries, edit `src/components/Scene3D.tsx`:

```typescript
case 'custom':
  return <customGeometry args={[...params]} />;
```

### 3. Import External Models

For .glb/.gltf files:

1. Install loader:
```bash
npm install @react-three/drei
```

2. Use in component:
```typescript
import { useGLTF } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/models/your-model.glb');
  return <primitive object={scene} />;
};
```

## Styling Guidelines

### Tailwind CSS Classes

- Use utility-first approach
- Common patterns:
  - Spacing: `p-4`, `m-2`, `gap-4`
  - Colors: `bg-gray-900`, `text-white`, `text-blue-400`
  - Layout: `flex`, `grid`, `grid-cols-3`
  - Responsive: `md:grid-cols-2`, `lg:grid-cols-3`

### Custom Classes

Custom utilities in `src/index.css`:
- `.gradient-text` - Gradient text effect

### Theme Colors

Primary palette (customizable in `tailwind.config.js`):
- Primary blues: 50-900 shades
- Gray scale for backgrounds
- Accent colors: purple, pink for gradients

## Component Patterns

### React Three Fiber Basics

```typescript
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

<Canvas>
  <ambientLight intensity={0.5} />
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="blue" />
  </mesh>
  <OrbitControls />
</Canvas>
```

### Animation with useFrame

```typescript
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const meshRef = useRef();

useFrame((_state, delta) => {
  if (meshRef.current) {
    meshRef.current.rotation.y += delta;
  }
});
```

## TypeScript Guidelines

- Always define interfaces for props
- Use strict type checking (enabled in tsconfig.json)
- Prefix unused parameters with `_` (e.g., `_state`)
- Avoid `any` type - use `unknown` or specific types

## Performance Optimization

### 3D Rendering
- Use `useMemo` for expensive geometry calculations
- Implement LOD (Level of Detail) for complex models
- Limit number of lights (max 3-4 for performance)
- Use `React.memo` for static components

### Code Splitting
```typescript
const Gallery = lazy(() => import('./pages/Gallery'));
```

### Bundle Size
- Check with: `npm run build`
- Analyze with: `npm run build -- --stats`
- Keep chunks under 500KB when possible

## Debugging

### 3D Rendering Issues
1. Check browser console for WebGL errors
2. Verify Three.js version compatibility
3. Use `<Stats />` from `@react-three/drei` for performance metrics
4. Enable `<axesHelper />` for orientation debugging

### React Three Fiber
```typescript
// Add helpers for debugging
<Canvas>
  <axesHelper args={[5]} />
  <gridHelper args={[10, 10]} />
  {/* Your scene */}
</Canvas>
```

## Testing

### Manual Testing Checklist
- [ ] All routes load (/, /gallery, /model/:id)
- [ ] 3D models render correctly
- [ ] Mouse controls work (rotate, zoom, pan)
- [ ] Responsive on mobile/tablet/desktop
- [ ] Navigation links work
- [ ] No console errors
- [ ] Previous/Next navigation on model detail page

### Browser Testing
- Chrome (recommended for WebGL)
- Firefox
- Safari
- Edge

## Common Issues

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Three.js version conflicts
- Ensure all Three.js packages use compatible versions
- Check @react-three/fiber compatibility

### TypeScript errors
```bash
npm run build  # See all type errors
```

### Slow 3D rendering
- Reduce polygon count in geometries
- Limit number of lights
- Use simpler materials
- Check FPS with browser dev tools

## Contributing

1. Create a feature branch
2. Make your changes
3. Run linting: `npm run lint`
4. Build successfully: `npm run build`
5. Test thoroughly
6. Submit pull request

## Resources

- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [Three.js Docs](https://threejs.org/docs/)
- [Drei Helpers](https://github.com/pmndrs/drei)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
