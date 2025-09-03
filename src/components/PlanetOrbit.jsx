import React from "react";
import { Line } from "@react-three/drei";
import planets from "../data/planets";

const PlanetOrbit = ({ radius }) => {
  // Find the planet that matches this orbit radius
  const planet = planets.find(p => p.orbitRadius === radius);
  
  // Generate points for the orbit circle
  const points = [];
  const segments = 128;
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    points.push([
      Math.cos(theta) * radius,
      0,
      Math.sin(theta) * radius
    ]);
  }

  return (
    <Line
      points={points}
      color={planet ? planet.color : "#ffffff"}
      lineWidth={1.5}
      opacity={0.3}
      transparent
      dashed={false}
    />
  );
};

export default PlanetOrbit; 