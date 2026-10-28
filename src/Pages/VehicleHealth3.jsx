import { useParams } from 'react-router-dom';

import GoogleViewer from '../components/googleviewer/GoogleViewer';

import { MODELS } from '../constants/models';

function VehicleHealth3() {
  const { modelId } = useParams();

  const selectedModel =
    MODELS[modelId] || MODELS.model1;

  return (
    <div className="vehicle-health-container">
      <h1>Google Model Viewer + GLB</h1>

      <GoogleViewer
        modelPath={selectedModel}
      />
    </div>
  );
}

export default VehicleHealth3;