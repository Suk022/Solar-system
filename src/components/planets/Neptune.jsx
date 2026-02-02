import React from "react";
import BasePlanet from "./BasePlanet";

const Neptune = (props) => {
  return (
    <BasePlanet
      {...props}
      materialProps={{
        metalness: 0.08,
        roughness: 0.6,
      }}
      rotationSpeed={0.007}
      geometryArgs={[props.planet.size, 64, 64]}
    />
  );
};

export default Neptune;
