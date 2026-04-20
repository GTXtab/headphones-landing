import { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

interface HeadphonesProps {
  modelPath: string;
  scale: number;
  onLoaded?: () => void;
}

export default function Headphones({ modelPath, scale, onLoaded }: HeadphonesProps) {
  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onLoaded) onLoaded();
    }, 150);

    return () => clearTimeout(timer);
  }, [modelPath, onLoaded]);

  return <primitive object={scene} scale={scale} />;
}

useGLTF.preload('/models/airpods_max_opt.glb');
useGLTF.preload('/models/airpods_pro_opt.glb');
useGLTF.preload('/models/airpods_4_opt.glb');