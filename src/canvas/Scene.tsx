import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center, PresentationControls, Float } from "@react-three/drei";
import Headphones from "./Headphones";

interface SceneProps {
  modelPath: string;
  scale: number;
}

export default function Scene({ modelPath, scale }: SceneProps) {
  const [isReady, setIsReady] = useState(false);
  
  const [currentModel, setCurrentModel] = useState(modelPath);

  if (modelPath !== currentModel) {
    setCurrentModel(modelPath);
    setIsReady(false);
  }

  return (
    <div 
      className={`w-full h-full transition-all duration-1000 ease-out ${
        isReady 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12"
      }`}
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 5], fov: 35 }}
        className="cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#ffe0e0" />

          <Environment preset="city" />

          <PresentationControls 
            global 
            rotation={[0.1, -0.2, 0]} 
            polar={[-0.2, 0.2]} 
            azimuth={[-0.5, 0.5]} 
            snap={true}
          >
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
              <Center key={modelPath}>
                <Headphones 
                  modelPath={modelPath} 
                  scale={scale} 
                  onLoaded={() => setIsReady(true)} 
                />
              </Center>
            </Float>
          </PresentationControls>

        </Suspense>
      </Canvas>
    </div>
  );
}