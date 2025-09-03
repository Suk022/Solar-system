import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three';
import { Html } from '@react-three/drei';
import Moon from './Moon';

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

const tooltipStyle = {
  background: 'rgba(20, 20, 30, 0.95)',
  color: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.4)',
  padding: '1.1em 1.5em',
  minWidth: '240px',
  maxWidth: '320px',
  fontFamily: 'Arial, sans-serif',
  fontSize: '1rem',
  pointerEvents: 'none',
  zIndex: 100,
  border: '1px solid #444',
  transition: 'opacity 0.2s',
};

const tooltipTitleStyle = {
  fontWeight: 'bold',
  fontSize: '1.1em',
  marginBottom: '0.5em',
  letterSpacing: '0.15em',
  color: '#4ecdc4',
  textTransform: 'uppercase',
};

const tooltipFactStyle = {
  marginTop: '0.7em',
  fontStyle: 'italic',
  color: '#ffd166',
  fontSize: '0.98em',
};

const Planet = ({ planet, index, onClick, onHover, onUnhover, isHoverable = true }) => {
  const mesh = useRef();
  const texture = planet.texture ? useLoader(TextureLoader, planet.texture) : null;
  
  // Slow down the orbit speed by multiplying by 0.3
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * planet.orbitSpeed * 0.3;
    mesh.current.position.x = Math.cos(t) * planet.orbitRadius;
    mesh.current.position.z = Math.sin(t) * planet.orbitRadius;
    mesh.current.rotation.y += 0.005;
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
        color={planet.color}
        map={texture || null}
          metalness={0.1}
          roughness={0.7}
        />
        {/* Label */}
        <Html
          position={[0, planet.size + 2, 0]}
          center
          style={labelStyle}
          distanceFactor={15}
          zIndexRange={[20, 0]}
        >
          {planet.name}
        </Html>
        {planet.name === "Earth" && <Moon />}
    </mesh>
    </group>
  );
};

export default Planet; 