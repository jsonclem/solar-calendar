"use client";

import OrbitRing from "./_components/OrbitRing";
import Orbital from "./_components/Orbital";
import Planet from "./_components/Planet";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Header } from "@/ui/components/layout/Header";
import { OrbitControls } from "@react-three/drei";

type PlanetData = {
  name: string;
  radius: number;
  orbitalPeriod: number;
  tilt: number;
  size: number;
  color?: string;
};

const planets: PlanetData[] = [
  { name: "Mercury", radius: 3, orbitalPeriod: 88, tilt: 7, size: 0.2 },
  { name: "Venus", radius: 5, orbitalPeriod: 225, tilt: 3.4, size: 0.2 },
  { name: "Earth", radius: 7, orbitalPeriod: 365.25, tilt: 0, size: 0.2, color: "#075985" },
  { name: "Mars", radius: 9, orbitalPeriod: 687, tilt: 1.85, size: 0.2 },
  { name: "Jupiter", radius: 11, orbitalPeriod: 4333, tilt: 1.3, size: 0.2 },
  { name: "Saturn", radius: 13, orbitalPeriod: 10759, tilt: 2.5, size: 0.2 },
  { name: "Uranus", radius: 15, orbitalPeriod: 30687, tilt: 0.8, size: 0.2 },
  { name: "Neptune", radius: 17, orbitalPeriod: 60190, tilt: 1.77, size: 0.2 },
];

const App: React.FC = () => {
  return (
    <>
      <Canvas
        shadows
        style={{ height: "100vh", width: "100vw", background: "#0a0a0a" }}
        camera={{ position: [0, 20, 50], fov: 60 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 10]}
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
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>
        
        {planets.map(({ name, tilt, size, orbitalPeriod, color, radius }) => (
          <Orbital key={name} tilt={tilt} orbitalPeriod={orbitalPeriod}>
            <OrbitRing radius={radius} color={color} />
            <Planet color={color} size={size} position={[radius, 0, 0]} />
          </Orbital>
        ))}
  
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -5, 0]}
          receiveShadow
        >
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
