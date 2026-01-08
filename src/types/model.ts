export interface Model3D {
  id: string;
  name: string;
  description: string;
  type: 'box' | 'sphere' | 'pyramid' | 'torus' | 'cone';
  color: string;
  metalness?: number;
  roughness?: number;
  wireframe?: boolean;
}

export interface ModelViewerProps {
  model: Model3D;
  enableControls?: boolean;
  autoRotate?: boolean;
}
