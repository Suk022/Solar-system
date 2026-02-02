import React from "react";
import BasePlanet from "./BasePlanet";

const Uranus = (props) => {
  return (
    <BasePlanet
      {...props}
      materialProps={{
        metalness: 0.08,
        roughness: 0.6,
      }}
      rotationSpeed={0.008}
      geometryArgs={[props.planet.size, 64, 64]}
    />
  );
};

export default Uranus;
