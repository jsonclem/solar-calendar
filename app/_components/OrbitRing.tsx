import React, { useMemo } from "react";
import * as THREE from "three";

interface OrbitRingProps {
  radius: number;
  color?: string;
}

const OrbitRing: React.FC<OrbitRingProps> = ({ radius, color }) => {
  const segments = 64;

  const { positions, colors } = useMemo(() => {
    const positions = [];
    const colors = [];

    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const x = Math.cos(theta) * radius;
      const y = Math.sin(theta) * radius;

      positions.push(x, y, 0);

      const ringColor = new THREE.Color().lerpColors(
        new THREE.Color("#0a0a0a"),
        new THREE.Color(color || "#525252"),
        i / segments
      );
      colors.push(ringColor.r, ringColor.g, ringColor.b);
    }

    return { positions, colors };
  }, [segments, radius, color]);

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(positions)}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={new Float32Array(colors)}
          count={colors.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial vertexColors />
    </line>
  );
};

export default OrbitRing;
