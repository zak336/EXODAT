import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface RotatingPlanetProps {
  type?: "earth" | "gas" | "ice";
}

const RotatingPlanet = ({ type = "earth" }: RotatingPlanetProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  const getColorByType = () => {
    switch (type) {
      case "gas":
        return "#f59e0b";
      case "ice":
        return "#06b6d4";
      default:
        return "#3b82f6";
    }
  };

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <MeshDistortMaterial
          color={getColorByType()}
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
          metalness={0.8}
        />
      </Sphere>
    </>
  );
};

const Planet3D = ({ type = "earth" }: RotatingPlanetProps) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <RotatingPlanet type={type} />
      </Canvas>
    </div>
  );
};

export default Planet3D;
