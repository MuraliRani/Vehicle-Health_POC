import { useEffect, useRef, useState } from 'react';
import Stats from 'stats.js';

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ThreeViewer({ modelPath }) {
  const mountRef = useRef();

  const modelRef = useRef(null);

  const autoRotateRef = useRef(false);

  const [autoRotate, setAutoRotate] = useState(false);

  useEffect(() => {
    const startTime = performance.now();

    const stats = new Stats();

    stats.showPanel(0);

    stats.dom.style.position = 'fixed';
    stats.dom.style.top = '80px';
    stats.dom.style.right = '10px';
    stats.dom.style.left = 'auto';
    stats.dom.style.zIndex = '9999';

    document.body.appendChild(stats.dom);

    const scene = new THREE.Scene();

    scene.background =
      new THREE.Color('#f5f7fa');

    const camera =
      new THREE.PerspectiveCamera(
        45,
        mountRef.current.clientWidth /
        mountRef.current.clientHeight,
        0.1,
        1000
      );

    camera.position.set(0, 2, 8);

    const renderer =
      new THREE.WebGLRenderer({
        antialias: true
      });

    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );

    mountRef.current.appendChild(
      renderer.domElement
    );

    const ambientLight =
      new THREE.AmbientLight(
        0xffffff,
        2
      );

    scene.add(ambientLight);

    const directionalLight =
      new THREE.DirectionalLight(
        0xffffff,
        3
      );

    directionalLight.position.set(
      5,
      5,
      5
    );

    scene.add(directionalLight);

    const controls =
      new OrbitControls(
        camera,
        renderer.domElement
      );

    controls.enableDamping = true;

    const loader =
      new GLTFLoader();

    loader.load(
      modelPath,
      (gltf) => {
        const endTime =
          performance.now();

        console.log(
          'Three.js Load Time:',
          (
            (endTime - startTime) /
            1000
          ).toFixed(2),
          'seconds'
        );

        gltf.scene.scale.set(
          2,
          2,
          2
        );

        modelRef.current =
          gltf.scene;

        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error(
          'GLTF Load Error:',
          error
        );
      }
    );

    const animate = () => {
      requestAnimationFrame(
        animate
      );

      stats.begin();

      if (
        autoRotateRef.current &&
        modelRef.current
      ) {
        modelRef.current.rotation.y +=
          0.01;
      }

      controls.update();

      renderer.render(
        scene,
        camera
      );

      stats.end();
    };

    animate();

    return () => {
      renderer.dispose();

      document.body.removeChild(
        stats.dom
      );

      if (
        mountRef.current &&
        renderer.domElement
      ) {
        mountRef.current.removeChild(
          renderer.domElement
        );
      }
    };
  }, [modelPath]);

  const toggleAutoRotate = () => {
    autoRotateRef.current =
      !autoRotateRef.current;

    setAutoRotate(
      autoRotateRef.current
    );
  };

  return (
    <>
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '60vh'
        }}
      />

      <div className="viewer-controls">
        <button
          onClick={
            toggleAutoRotate
          }
        >
          {autoRotate
            ? 'Stop Rotation'
            : 'Auto Rotate'}
        </button>
      </div>
    </>
  );
}

export default ThreeViewer;