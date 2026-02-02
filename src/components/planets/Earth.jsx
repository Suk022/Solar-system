import React from "react";
import BasePlanet from "./BasePlanet";
import Moon from "./Moon";

const Earth = (props) => {
  return (
    <BasePlanet
      {...props}
      materialProps={{
        metalness: 0.1,
        roughness: 0.7,
      }}
      rotationSpeed={0.01}
    >
      <Moon />
    </BasePlanet>
  );
};

export default Earth;
