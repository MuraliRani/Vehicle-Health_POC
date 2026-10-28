import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import VehicleModel from './VehicleModel';

const VehicleCanvas = () => {
  return (
    <div className="canvas-wrapper">
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
        <ambientLight intensity={2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
        />

        <VehicleModel />

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default VehicleCanvas;