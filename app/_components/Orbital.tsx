import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface OrbitalProps {
  orbitalPeriod: number;
  tilt: number;
  children?: React.ReactNode;
}

const Orbital: React.FC<OrbitalProps> = ({ orbitalPeriod, tilt, children }) => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (groupRef.current) {
      const speed = (2 * Math.PI) / orbitalPeriod;
      groupRef.current.rotation.z += speed * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <group rotation={[THREE.MathUtils.degToRad(tilt), 0, 0]}>
        {children}
      </group>
    </group>
  );
};

export default Orbital;
