import { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

function VehicleModel({ modelPath }) {
  const startRef = useRef(performance.now());

  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    const loadTime =
      performance.now() - startRef.current;

    console.log(
      `React Three Fiber Load Time: ${(loadTime / 1000).toFixed(2)} sec`
    );

    console.log(
      `Loaded Model: ${modelPath}`
    );
  }, [scene, modelPath]);

  return (
    <primitive
      object={scene}
      scale={1.5}
      rotation={[0, Math.PI, 0]}
    />
  );
}

export default VehicleModel;