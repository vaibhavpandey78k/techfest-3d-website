import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const InteractiveCube = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [colorIndex, setColorIndex] = useState(0);
  const cubeRef = useRef<THREE.Mesh | null>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    animationId: number;
  } | null>(null);

  const colors = [
    { primary: 0x00f0ff, secondary: 0xb300ff, name: 'Neon Blue' },
    { primary: 0xb300ff, secondary: 0x00f0ff, name: 'Neon Purple' },
    { primary: 0xff00ff, secondary: 0x00f0ff, name: 'Neon Pink' },
    { primary: 0x00ff88, secondary: 0xb300ff, name: 'Neon Green' },
    { primary: 0xff6600, secondary: 0x00f0ff, name: 'Neon Orange' },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Cube with gradient effect
    const cubeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const cubeMaterial = new THREE.MeshBasicMaterial({
      color: colors[0].primary,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);
    cubeRef.current = cube;

    // Inner cube
    const innerCubeGeometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
    const innerCubeMaterial = new THREE.MeshBasicMaterial({
      color: colors[0].secondary,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const innerCube = new THREE.Mesh(innerCubeGeometry, innerCubeMaterial);
    scene.add(innerCube);

    // Solid core
    const coreGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: colors[0].primary,
      transparent: true,
      opacity: 0.2,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    // Particles around cube
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 500;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 4;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: colors[0].primary,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    sceneRef.current = {
      scene,
      camera,
      renderer,
      animationId: 0,
    };

    // Animation
    const animate = () => {
      sceneRef.current!.animationId = requestAnimationFrame(animate);

      cube.rotation.x += 0.005;
      cube.rotation.y += 0.008;
      innerCube.rotation.x -= 0.003;
      innerCube.rotation.y -= 0.005;
      core.rotation.x += 0.002;
      core.rotation.y += 0.003;
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (container) {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update colors when colorIndex changes
  useEffect(() => {
    if (cubeRef.current) {
      (cubeRef.current.material as THREE.MeshBasicMaterial).color.setHex(colors[colorIndex].primary);
    }
  }, [colorIndex, colors]);

  const handleClick = () => {
    setColorIndex((prev) => (prev + 1) % colors.length);
  };

  return (
    <div className="relative cursor-pointer group" onClick={handleClick}>
      <div
        ref={containerRef}
        className="w-64 h-64 md:w-80 md:h-80 mx-auto"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-xs font-cyber text-cyan-400">Click to change color</p>
        <p className="text-sm font-cyber mt-1" style={{ color: `#${colors[colorIndex].primary.toString(16).padStart(6, '0')}` }}>
          {colors[colorIndex].name}
        </p>
      </div>
    </div>
  );
};

export default InteractiveCube;
