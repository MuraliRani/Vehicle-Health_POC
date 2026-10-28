import React, { useRef, useState, useEffect } from 'react';
import Stats from 'stats.js';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import VehicleModel from './VehicleModel';


const VehicleCanvas = ({ modelPath }) => {
  const controlsRef = useRef();
  const [autoRotate, setAutoRotate] = useState(false);
  useEffect(() => {
    const stats = new Stats();

    stats.showPanel(0);

    stats.dom.style.position = 'fixed';
    stats.dom.style.top = '80px';
    stats.dom.style.right = '10px';
    stats.dom.style.left = 'auto';
    stats.dom.style.zIndex = '9999';

    document.body.appendChild(
      stats.dom
    );

    const updateStats = () => {
      stats.begin();

      stats.end();

      requestAnimationFrame(
        updateStats
      );
    };

    updateStats();

    return () => {
      document.body.removeChild(
        stats.dom
      );
    };
  }, []);

  const zoomIn = () => {
    if (!controlsRef.current) return;

    const camera = controlsRef.current.object;
    camera.position.z -= 1;
    controlsRef.current.update();
  };

  const zoomOut = () => {
    if (!controlsRef.current) return;

    const camera = controlsRef.current.object;
    camera.position.z += 1;
    controlsRef.current.update();
  };

  const setFrontView = () => {
    const camera = controlsRef.current.object;
    camera.position.set(0, 2, 8);
    controlsRef.current.update();
  };

  const setRearView = () => {
    const camera = controlsRef.current.object;
    camera.position.set(0, 2, -8);
    controlsRef.current.update();
  };

  const setLeftView = () => {
    const camera = controlsRef.current.object;
    camera.position.set(-8, 2, 0);
    controlsRef.current.update();
  };

  const setRightView = () => {
    const camera = controlsRef.current.object;
    camera.position.set(8, 2, 0);
    controlsRef.current.update();
  };

  return (
    <>
      <div className="canvas-wrapper">
        <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
          <ambientLight intensity={2} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={3}
          />

          <VehicleModel
            modelPath={modelPath}
          />
          

          <OrbitControls
            ref={controlsRef}
            autoRotate={autoRotate}
            autoRotateSpeed={2}
          />
        </Canvas>
      </div>

      <div className="viewer-controls">
        <button onClick={zoomIn}>
          +
        </button>

        <button onClick={zoomOut}>
          -
        </button>

        <button
          onClick={() => controlsRef.current?.reset()}
        >
          Reset
        </button>

        <button onClick={setFrontView}>
          Front
        </button>

        <button onClick={setRearView}>
          Back
        </button>

        <button onClick={setLeftView}>
          Right
        </button>

        <button onClick={setRightView}>
          Left
        </button>

        <button
          onClick={() => setAutoRotate(!autoRotate)}
        >
          {autoRotate ? 'Stop Rotation' : 'Auto Rotate'}
        </button>
      </div>
    </>
  );
};

export default VehicleCanvas;
