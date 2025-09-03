import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three';
import { Html } from '@react-three/drei';
import moonTexture from '../assets/textures/moon.jpg';

const labelStyle = {
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  letterSpacing: '0.35em',
  textTransform: 'uppercase',
  textShadow: '0 2px 8px #000',
  fontFamily: 'Arial, sans-serif',
  pointerEvents: 'none',
  whiteSpace: 'nowrap',
  marginLeft: '0.5em',
  opacity: 0.9,
};

const Moon = () => {
  const moonRef = useRef();
  const texture = useLoader(TextureLoader, moonTexture);
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.8; // Moon orbit speed
    const radius = 3; // Distance from Earth
    const height = Math.cos(t) * 0.5; // Vertical oscillation for orbital tilt
    
    moonRef.current.position.x = Math.cos(t) * radius;
    moonRef.current.position.y = height;
    moonRef.current.position.z = Math.sin(t) * radius;
    moonRef.current.rotation.y += 0.02;
  });

  return (
    <mesh ref={moonRef}>
      <sphereGeometry args={[0.5, 128, 128]} />
      <meshStandardMaterial
        map={texture}
        metalness={0.1}
        roughness={0.7}
      />
      <Html
        position={[0, 1, 0]}
        center
        style={labelStyle}
        distanceFactor={10}
        zIndexRange={[20, 0]}
      >
        MOON
      </Html>
    </mesh>
  );
};

export default Moon; 