import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three';
import { Html } from '@react-three/drei';
import saturnRingTexture from '../assets/textures/saturn_ring_alpha.jpg';

const labelStyle = {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1.8rem',
  letterSpacing: '0.35em',
  textTransform: 'uppercase',
  textShadow: '0 2px 8px #000',
  fontFamily: 'Arial, sans-serif',
  pointerEvents: 'none',
  whiteSpace: 'nowrap',
  marginLeft: '0.5em',
  opacity: 0.9,
};

const Saturn = ({ planet, onClick, onHover, onUnhover, isHoverable = true }) => {
  const mesh = useRef();
  const ringsRef = useRef();
  const texture = useLoader(TextureLoader, planet.texture);
  const ringsTexture = useLoader(TextureLoader, saturnRingTexture);
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * planet.orbitSpeed * 0.3;
    mesh.current.position.x = Math.cos(t) * planet.orbitRadius;
    mesh.current.position.z = Math.sin(t) * planet.orbitRadius;
    mesh.current.rotation.y += 0.005;
    
    // Update rings position to match Saturn
    if (ringsRef.current) {
      ringsRef.current.position.x = mesh.current.position.x;
      ringsRef.current.position.z = mesh.current.position.z;
      ringsRef.current.rotation.x = Math.PI / 2; // Make rings horizontal
    }
  });

  const handlePointerOver = () => {
    if (isHoverable && onHover) {
      onHover(planet);
    }
  };

  const handlePointerOut = () => {
    if (isHoverable && onUnhover) {
      onUnhover();
    }
  };

  return (
    <group>
      <mesh
        ref={mesh}
        onClick={() => onClick(planet)}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        castShadow
        receiveShadow
      >
        <sphereGeometry args={[planet.size, 128, 128]} />
        <meshStandardMaterial
          map={texture}
          metalness={0.1}
          roughness={0.7}
        />
        <Html
          position={[0, planet.size + 2, 0]}
          center
          style={labelStyle}
          distanceFactor={15}
          zIndexRange={[20, 0]}
        >
          {planet.name}
        </Html>
      </mesh>
      {/* Saturn's Rings */}
      <mesh ref={ringsRef}>
        <ringGeometry args={[planet.size * 1.2, planet.size * 1.8, 128]} />
        <meshStandardMaterial
          map={ringsTexture}
          transparent={true}
          opacity={0.8}
          side={2}
        />
      </mesh>
    </group>
  );
};

export default Saturn; 