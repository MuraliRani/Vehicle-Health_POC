import { useGLTF } from '@react-three/drei';

const VehicleModel = () => {
  const { scene } = useGLTF('/models/car1.glb');

  return (
    <primitive
      object={scene}
      scale={2}
      position={[0, 0, 0]}
    />
  );
};

export default VehicleModel;