import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Model3D } from '../types/model';

interface Scene3DProps {
  model: Model3D;
  autoRotate?: boolean;
}

export const Scene3D = ({ model, autoRotate = false }: Scene3DProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((_state, delta) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  const renderGeometry = () => {
    switch (model.type) {
      case 'box':
        return <boxGeometry args={[2, 2, 2]} />;
      case 'sphere':
        return <sphereGeometry args={[1.5, 32, 32]} />;
      case 'pyramid':
        return <coneGeometry args={[1.5, 2.5, 4]} />;
      case 'torus':
        return <torusGeometry args={[1.2, 0.4, 16, 100]} />;
      case 'cone':
        return <coneGeometry args={[1.5, 2.5, 32]} />;
      default:
        return <boxGeometry args={[2, 2, 2]} />;
    }
  };

  return (
    <mesh ref={meshRef}>
      {renderGeometry()}
      <meshStandardMaterial
        color={model.color}
        metalness={model.metalness ?? 0.5}
        roughness={model.roughness ?? 0.5}
        wireframe={model.wireframe ?? false}
      />
    </mesh>
  );
};
