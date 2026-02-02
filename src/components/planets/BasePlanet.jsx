import { useRef} from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Html } from "@react-three/drei";

const labelStyle = {
  color: "#fff",
  fontWeight: "bold",
  fontSize: "1.8rem",
  letterSpacing: "0.35em",
  textTransform: "uppercase",
  textShadow: "0 2px 8px #000",
  fontFamily: "Arial, sans-serif",
  pointerEvents: "none",
  whiteSpace: "nowrap",
  marginLeft: "0.5em",
  opacity: 0.9,
};

const BasePlanet = ({
  planet,
  onClick,
  onHover,
  onUnhover,
  isHoverable = true,
  children = null,
  geometryArgs = [planet.size, 128, 128],
  materialProps = {},
  orbitSpeedMultiplier = 0.3,
  rotationSpeed = 0.005,
  labelOffset = 2,
  castShadow = true,
  receiveShadow = true,
}) => {
  const mesh = useRef();
  const texture = planet.texture
    ? useLoader(TextureLoader, planet.texture)
    : null;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * planet.orbitSpeed * orbitSpeedMultiplier;
    mesh.current.position.x = Math.cos(t) * planet.orbitRadius;
    mesh.current.position.z = Math.sin(t) * planet.orbitRadius;
    mesh.current.rotation.y += rotationSpeed;
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

  const handleClick = () => {
    if (onClick) {
      onClick(planet);
    }
  };

  return (
    <group>
      <mesh
        ref={mesh}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        castShadow={castShadow}
        receiveShadow={receiveShadow}
      >
        <sphereGeometry args={geometryArgs} />
        <meshStandardMaterial
          color={planet.color}
          map={texture}
          metalness={0.1}
          roughness={0.7}
          {...materialProps}
        />
        <Html
          position={[0, planet.size + labelOffset, 0]}
          center
          style={labelStyle}
          distanceFactor={15}
          zIndexRange={[20, 0]}
        >
          {planet.name}
        </Html>
      </mesh>
      {children}
    </group>
  );
};

export default BasePlanet;
