import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    globe: THREE.Mesh;
    particles: THREE.Points;
    innerGlobe: THREE.Mesh;
    animationId: number;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Globe - Main sphere with wireframe
    const globeGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Inner globe
    const innerGlobeGeometry = new THREE.SphereGeometry(1.3, 32, 32);
    const innerGlobeMaterial = new THREE.MeshBasicMaterial({
      color: 0xb300ff,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const innerGlobe = new THREE.Mesh(innerGlobeGeometry, innerGlobeMaterial);
    scene.add(innerGlobe);

    // Solid core with gradient-like effect
    const coreGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.1,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 2000;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Second layer of particles (purple)
    const particlesGeometry2 = new THREE.BufferGeometry();
    const posArray2 = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray2[i] = (Math.random() - 0.5) * 25;
    }

    particlesGeometry2.setAttribute('position', new THREE.BufferAttribute(posArray2, 3));

    const particlesMaterial2 = new THREE.PointsMaterial({
      size: 0.015,
      color: 0xb300ff,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles2 = new THREE.Points(particlesGeometry2, particlesMaterial2);
    scene.add(particles2);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Store refs
    sceneRef.current = {
      scene,
      camera,
      renderer,
      globe,
      particles,
      innerGlobe,
      animationId: 0,
    };

    // Mouse movement
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Animation
    const animate = () => {
      sceneRef.current!.animationId = requestAnimationFrame(animate);

      // Rotate globe
      globe.rotation.y += 0.002;
      globe.rotation.x += 0.001;
      innerGlobe.rotation.y -= 0.003;
      innerGlobe.rotation.x -= 0.001;
      core.rotation.y += 0.001;

      // Rotate particles
      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0002;
      particles2.rotation.y -= 0.0003;
      particles2.rotation.x -= 0.0001;

      // Mouse interaction
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="three-canvas" />;
};

export default ThreeScene;
