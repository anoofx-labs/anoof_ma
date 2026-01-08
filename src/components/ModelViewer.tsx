import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Scene3D } from './Scene3D';
import { Model3D } from '../types/model';

interface ModelViewerProps {
  model: Model3D;
  enableControls?: boolean;
  autoRotate?: boolean;
  className?: string;
}

export const ModelViewer = ({ 
  model, 
  enableControls = true, 
  autoRotate = false,
  className = ''
}: ModelViewerProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <pointLight position={[0, 5, 0]} intensity={0.5} />
        
        <Environment preset="studio" />
        
        <Scene3D model={model} autoRotate={autoRotate} />
        
        {enableControls && (
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={15}
          />
        )}
      </Canvas>
    </div>
  );
};
