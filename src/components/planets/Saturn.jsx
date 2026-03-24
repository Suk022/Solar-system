import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import BasePlanet from "./BasePlanet";
import saturnRingTexture from "../../assets/textures/saturn_ring_alpha.webp";

const Saturn = (props) => {
  const ringsRef = useRef();
  const ringsTexture = useLoader(TextureLoader, saturnRingTexture);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * props.planet.orbitSpeed * 0.3;
    
    // Update rings position to match Saturn's orbit
    if (ringsRef.current) {
      ringsRef.current.position.x = Math.cos(t) * props.planet.orbitRadius;
      ringsRef.current.position.z = Math.sin(t) * props.planet.orbitRadius;
      ringsRef.current.rotation.x = Math.PI / 2; // Make rings horizontal
    }
  });

  return (
    <BasePlanet
      {...props}
      materialProps={{
        metalness: 0.1,
        roughness: 0.7,
      }}
      rotationSpeed={0.005}
    >
      {/* Saturn's Rings */}
      <mesh ref={ringsRef}>
        <ringGeometry args={[props.planet.size * 1.2, props.planet.size * 1.8, 128]} />
        <meshStandardMaterial
          map={ringsTexture}
          transparent={true}
          opacity={0.8}
          side={2}
        />
      </mesh>
    </BasePlanet>
  );
};

export default Saturn;
