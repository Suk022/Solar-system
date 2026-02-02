import React from "react";
import BasePlanet from "./BasePlanet";

const Mercury = (props) => {
  return (
    <BasePlanet
      {...props}
      materialProps={{
        metalness: 0.2,
        roughness: 0.8,
      }}
      rotationSpeed={0.004}
    />
  );
};

export default Mercury;
