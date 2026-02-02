import React from "react";
import BasePlanet from "./BasePlanet";

const Mars = (props) => {
  return (
    <BasePlanet
      {...props}
      materialProps={{
        metalness: 0.05,
        roughness: 0.9,
      }}
      rotationSpeed={0.009}
    />
  );
};

export default Mars;
