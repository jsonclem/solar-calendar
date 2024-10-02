import React from "react";
import * as THREE from "three";

interface PlanetProps {
  size: number;
  position: [number, number, number];
  color?: string;
}

const Planet: React.FC<PlanetProps> = ({ size, position, color }) => {
  return (
    <mesh position={new THREE.Vector3(...position)} castShadow receiveShadow>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color || "white"} />
    </mesh>
  );
};

export default Planet;
