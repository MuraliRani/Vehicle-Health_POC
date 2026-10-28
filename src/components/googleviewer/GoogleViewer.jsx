import { useEffect, useRef } from 'react';
import '@google/model-viewer/dist/model-viewer.min.js';

function GoogleViewer({ modelPath }) {
  const startTime = useRef(0);

  useEffect(() => {
    startTime.current = performance.now();
  }, [modelPath]);

  const handleLoad = () => {
    const endTime = performance.now();

    console.log(
      'Google Viewer Load Time:',
      ((endTime - startTime.current) / 1000).toFixed(2),
      'seconds'
    );

    console.log(
      'Loaded Model:',
      modelPath
    );
  };

  return (
    <div className="canvas-wrapper">
      <model-viewer
        src={modelPath}
        camera-controls
        auto-rotate
        shadow-intensity="1"
        onLoad={handleLoad}
        style={{
          width: '100%',
          height: '100%',
          background: '#fff',
        }}
      />
    </div>
  );
}

export default GoogleViewer;