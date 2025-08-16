import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const DNAHelix = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  const helixPoints = [];
  const steps = 30;
  const radius = 1.5;
  const height = 6;

  // Generate simplified DNA helix structure
  for (let i = 0; i < steps; i++) {
    const t = (i / steps) * Math.PI * 3; // 3 full rotations
    const y = (i / steps) * height - height / 2;
    
    // First strand
    helixPoints.push({
      position: [Math.cos(t) * radius, y, Math.sin(t) * radius] as [number, number, number],
      color: '#00bfff',
      size: 0.12
    });
    
    // Second strand (opposite)
    helixPoints.push({
      position: [Math.cos(t + Math.PI) * radius, y, Math.sin(t + Math.PI) * radius] as [number, number, number],
      color: '#4ecdc4',
      size: 0.12
    });
    
    // Base pairs (connecting strands) - simplified as spheres
    if (i % 3 === 0) {
      const midX = (Math.cos(t) * radius + Math.cos(t + Math.PI) * radius) / 2;
      const midZ = (Math.sin(t) * radius + Math.sin(t + Math.PI) * radius) / 2;
      
      helixPoints.push({
        position: [midX, y, midZ] as [number, number, number],
        color: '#ff6b6b',
        size: 0.08
      });
    }
  }

  return (
    <group ref={groupRef}>
      {helixPoints.map((point, index) => (
        <Sphere
          key={index}
          position={point.position}
          args={[point.size, 16, 16]}
        >
          <meshStandardMaterial
            color={point.color}
            emissive={point.color}
            emissiveIntensity={0.3}
            metalness={0.6}
            roughness={0.4}
          />
        </Sphere>
      ))}
    </group>
  );
};

export default DNAHelix;