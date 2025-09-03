import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture, Html } from "@react-three/drei";
import Planet from "./Planet";
import Saturn from "./Saturn";
import PlanetOrbit from "./PlanetOrbit";
import planets from "../data/planets";
import sunTexture from "../assets/textures/sun.jpg";
import starsTexture from "../assets/textures/stars_milky_way.jpg";

const infoCardStyle = {
  position: 'fixed',
  top: '4.0rem',
  right: '2.0rem',
  zIndex: 1000,
  background: 'rgba(18, 18, 19, 0.97)',
  color: '#fff',
  borderRadius: '14px',
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.4)',
  padding: '0.8em 1.2em',
  minWidth: '100px',
  maxWidth: '300px',
  fontFamily: 'Arial, sans-serif',
  fontSize: '0.72rem',
  border: '1px solid #444',
  transition: 'opacity 0.3s',
  pointerEvents: 'none',
  letterSpacing: '0.15em',
  fontWeight: 'bold',
  textTransform: 'uppercase',
};
const infoCardTitleStyle = {
  fontWeight: 'bold',
  fontSize: '1.05em',
  marginBottom: '0.5em',
  letterSpacing: '0.15em',
  color: '#4ecdc4',
  textTransform: 'uppercase',
  fontFamily: 'Arial, sans-serif',
};
const infoCardFactStyle = {
  marginTop: '0.7em',
  fontStyle: 'italic',
  color: '#ffd166',
  fontSize: '0.95em',
  fontFamily: 'Arial, sans-serif',
};
const sunLabelStyle = {
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

const Sun = ({ onClick }) => {
  const texture = useTexture(sunTexture);
  const sunRef = useRef();

  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group>
      <mesh ref={sunRef} position={[0, 0, 0]} onClick={onClick}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      <Html
        position={[0, 7, 0]}
        center
        style={sunLabelStyle}
        distanceFactor={15}
        zIndexRange={[20, 0]}
      >
        SUN
      </Html>
    </group>
  );
};

const Background = () => {
  const texture = useTexture(starsTexture);
  const backgroundRef = useRef();

  useFrame(() => {
    if (backgroundRef.current) {
      backgroundRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <group ref={backgroundRef}>
      {/* Create a large sphere with the texture mapped inside-out */}
      <mesh>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial 
          map={texture} 
          side={1} // Render on the inside of the sphere
        />
    </mesh>
      {/* Add some distant stars for depth */}
      <Stars 
        radius={300} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={0.5}
      />
    </group>
  );
};

const SolarSystem3D = forwardRef(({ onPlanetClick, isSidebarOpen }, ref) => {
  const [hoveredPlanet, setHoveredPlanet] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const hoverTimeout = useRef();
  const controlsRef = useRef();

  // Expose zoomIn/zoomOut methods to parent
  useImperativeHandle(ref, () => ({
    zoomIn: () => {
      if (controlsRef.current) {
        controlsRef.current.dollyOut(1.2);
        controlsRef.current.update();
      }
    },
    zoomOut: () => {
      if (controlsRef.current) {
        controlsRef.current.dollyIn(1.2);
        controlsRef.current.update();
      }
    }
  }));

  const handlePlanetHover = (planet) => {
    if (isSidebarOpen) return; // Don't show hover effect if sidebar is open
    setHoveredPlanet(planet);
    setShowInfo(true);
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setShowInfo(false);
    }, 2000);
  };

  const handlePlanetUnhover = () => {
    if (isSidebarOpen) return; // Don't handle unhover if sidebar is open
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setShowInfo(false);
    }, 2000);
  };

  // Clear hover effect when sidebar opens
  useEffect(() => {
    if (isSidebarOpen) {
      setShowInfo(false);
      setHoveredPlanet(null);
    }
  }, [isSidebarOpen]);

  return (
    <>
      {showInfo && hoveredPlanet && !isSidebarOpen && (
        <div style={infoCardStyle}>
          <div style={infoCardTitleStyle}>{hoveredPlanet.name}</div>
          <div><b>Distance from Sun:</b> {hoveredPlanet.distanceFromSun.km} million km ({hoveredPlanet.distanceFromSun.au} AU)</div>
          <div><b>Orbital Period:</b> {hoveredPlanet.orbitalPeriod} days</div>
          <div><b>Number of Moons:</b> {hoveredPlanet.numMoons}</div>
          <div><b>Surface Temp:</b> {hoveredPlanet.surfaceTemp.c}°C / {hoveredPlanet.surfaceTemp.k}K</div>
          <div style={infoCardFactStyle}>{hoveredPlanet.funFact}</div>
        </div>
      )}
      <Canvas 
        camera={{ position: [0, 40, 80], fov: 60 }} 
        style={{ height: '100vh', background: '#000' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={3} />
        <Background />
        <Sun onClick={() => onPlanetClick(planets.find(p => p.name === "Sun"))} />
    {/* Planets */}
        {planets.filter(p => p.name !== "Sun").map((planet, idx) => (
      <React.Fragment key={planet.name}>
        <PlanetOrbit radius={planet.orbitRadius} />
            {planet.name === "Saturn" ? (
              <Saturn 
                planet={planet} 
                onClick={onPlanetClick} 
                onHover={handlePlanetHover} 
                onUnhover={handlePlanetUnhover}
                isHoverable={!isSidebarOpen}
              />
            ) : (
              <Planet 
                planet={planet} 
                index={idx} 
                onClick={onPlanetClick} 
                onHover={handlePlanetHover} 
                onUnhover={handlePlanetUnhover}
                isHoverable={!isSidebarOpen}
              />
            )}
      </React.Fragment>
    ))}
        <OrbitControls 
          ref={controlsRef}
          enablePan={true}
          minDistance={5}
          maxDistance={200}
          rotateSpeed={0.5}
          enableDamping={true}
          dampingFactor={0.05}
          screenSpacePanning={true}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
          enableZoom={true}
          zoomSpeed={1.2}
        />
  </Canvas>
    </>
);
});

export default SolarSystem3D; 