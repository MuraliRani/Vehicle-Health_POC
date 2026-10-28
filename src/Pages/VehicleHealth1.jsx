import { useParams } from 'react-router-dom';

import ThreeViewer from '../components/threejs/ThreeViewer';

import { MODELS } from '../constants/models';

function VehicleHealth1() {
  const { modelId } = useParams();

  const selectedModel =
    modelId === 'model2'
      ? MODELS.model2
      : MODELS.model1;

  return (
    <div className="vehicle-health-container">
      <h1>Three.js + GLB</h1>

      <ThreeViewer
        modelPath={selectedModel}
      />
    </div>
  );
}

export default VehicleHealth1;