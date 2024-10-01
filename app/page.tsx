"use client";

import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Header } from "@/ui/components/layout/Header";

interface PlanetProps {
  size: number;
  position: [number, number, number];
}

const Planet: React.FC<PlanetProps> = ({ size, position }) => {
  return (
    <mesh position={new THREE.Vector3(...position)} castShadow receiveShadow>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

interface OrbitRingProps {
  radius: number;
}

const OrbitRing: React.FC<OrbitRingProps> = ({ radius }) => {
  const segments = 64;

  const { positions, colors } = useMemo(() => {
    const positions = [];
    const colors = [];

    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const x = Math.cos(theta) * radius;
      const y = Math.sin(theta) * radius;

      positions.push(x, y, 0);

      const color = new THREE.Color().lerpColors(
        new THREE.Color('#525252'),
        new THREE.Color('black'),
        i / segments
      );
      colors.push(color.r, color.g, color.b);
    }

    return { positions, colors };
  }, [segments, radius]);

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

const App: React.FC = () => {
  return (
    <>
    
    <Canvas
      shadows
      style={{ height: "100vh", width: "100vw", background: "#0a0a0a" }}
      camera={{ position: [0, 5, 10], fov: 60 }}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={1}
        shadow-camera-far={20}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      <Planet size={1.5} position={[0, 0, 0]} />

      <OrbitRing radius={3} />
      <Planet size={0.2} position={[3, 0, 0]} />

      <OrbitRing radius={5} />
      <Planet size={0.3} position={[5, 0, 0]} />

      <OrbitRing radius={7} />
      <Planet size={0.35} position={[7, 0, 0]} />

      <OrbitRing radius={9} />
      <Planet size={0.2} position={[9, 0, 0]} />

      <OrbitRing radius={11} />
      <Planet size={0.3} position={[11, 0, 0]} />

      <OrbitRing radius={13} />
      <Planet size={0.35} position={[13, 0, 0]} />

      <OrbitRing radius={15} />
      <Planet size={0.35} position={[15, 0, 0]} />

      <OrbitRing radius={17} />
      <Planet size={0.2} position={[17, 0, 0]} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial opacity={0.3} />
      </mesh>

      <OrbitControls />
    </Canvas>

    <Header className="px-8 flex items-center h-14 fixed w-full top-0 left-0">
      <img src="/images/solar_calendar.svg" alt="logo" className="h-7" />
    </Header>
    </>
  );
};

export default App;
