import React from "react";
import BasePlanet from "./BasePlanet";

const Venus = (props) => {
  return (
    <BasePlanet
      {...props}
      materialProps={{
        metalness: 0.15,
        roughness: 0.6,
      }}
      rotationSpeed={0.002}
    />
  );
};

export default Venus;
