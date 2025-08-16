import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const MolecularStructure = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  // Define atom positions for a simple molecular structure
  const atoms = [
    { position: [0, 0, 0] as [number, number, number], color: '#00bfff', size: 0.3 },
    { position: [2, 1, 0] as [number, number, number], color: '#ff6b6b', size: 0.25 },
    { position: [-1.5, 1.2, 1] as [number, number, number], color: '#4ecdc4', size: 0.2 },
    { position: [1, -1.5, -1] as [number, number, number], color: '#45b7d1', size: 0.25 },
    { position: [-2, -0.5, 0.5] as [number, number, number], color: '#96ceb4', size: 0.2 },
    { position: [0.5, 2, -1.5] as [number, number, number], color: '#feca57', size: 0.25 },
  ];

  return (
    <group ref={groupRef}>
      {/* Atoms */}
      {atoms.map((atom, index) => (
        <Sphere
          key={index}
          position={atom.position}
          args={[atom.size, 32, 32]}
        >
          <meshStandardMaterial
            color={atom.color}
            emissive={atom.color}
            emissiveIntensity={0.2}
            metalness={0.8}
            roughness={0.2}
          />
        </Sphere>
      ))}
    </group>
  );
};

export default MolecularStructure;