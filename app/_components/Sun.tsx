import React from 'react';

const Sun: React.FC = () => {
  return (
    <mesh position={[0, 0, 0]} castShadow receiveShadow>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial emissive="#bae6fd" color="#bae6fd" />

      {/* <pointLight 
        intensity={5}       // Adjust brightness
        distance={300}      // How far the light affects
        decay={2}           // Light decay over distance
        castShadow          // Enable shadow casting
      /> */}

        <directionalLight
          position={[0, 0, 0]}
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


    </mesh>
  );
};

export default Sun;