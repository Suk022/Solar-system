import React from "react";
import BasePlanet from "./BasePlanet";

const Jupiter = (props) => {
  return (
    <BasePlanet
      {...props}
      materialProps={{
        metalness: 0.05,
        roughness: 0.5,
      }}
      rotationSpeed={0.015}
      geometryArgs={[props.planet.size, 64, 64]}
    />
  );
};

export default Jupiter;
