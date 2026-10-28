import { useParams } from 'react-router-dom';
import VehicleCanvas from '../components/r3f/VehicleCanvas';
import { MODELS } from '../constants/models';

function VehicleHealth() {
  const { modelId } = useParams();

  const selectedModel =
    MODELS[modelId] || MODELS.model1;

  return (
    <div className="vehicle-health-container">
      <h1>React Three Fiber + GLB</h1>

      <VehicleCanvas
        modelPath={selectedModel}
      />
    </div>
  );
}

export default VehicleHealth;