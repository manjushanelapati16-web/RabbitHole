import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * ThreeUI Organic WebGL Background Component
 * Real Three.js WebGL animated fluid/particle mesh atmosphere.
 * Tuned to the Rabbit Hole palette: Sky Blue (#74BDE3), Deep Blue (#4F91C7),
 * Soft Pink (#E8A4BA), Raspberry (#B72C5E), and gentle luminous depth.
 */
export default function ThreeBackground({ opacity = 0.85, isDark = false }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene setup
    const scene = new THREE.Scene();
    
    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 45);

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Color definitions based on Rabbit Hole theme
    const primaryColor = new THREE.Color(isDark ? 0x74BDE3 : 0x6BA9D6);
    const deepColor = new THREE.Color(isDark ? 0x4F91C7 : 0x4F91C7);
    const pinkAccent = new THREE.Color(isDark ? 0xD45A7E : 0xE8A4BA);

    // 5. Create Animated Organic Fluid Particle Mesh (ThreeUI Wavefield)
    const countX = 65;
    const countY = 65;
    const numParticles = countX * countY;

    const positions = new Float32Array(numParticles * 3);
    const colors = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);
    const initialY = new Float32Array(numParticles);

    let i = 0;
    let colorIndex = 0;
    const spacing = 1.8;
    const offsetX = (countX * spacing) / 2;
    const offsetY = (countY * spacing) / 2;

    for (let ix = 0; ix < countX; ix++) {
      for (let iy = 0; iy < countY; iy++) {
        const x = ix * spacing - offsetX;
        const z = iy * spacing - offsetY;
        const distFromCenter = Math.sqrt(x * x + z * z);
        const y = Math.sin(distFromCenter * 0.1) * 3 - 8;

        positions[i] = x;
        positions[i + 1] = y;
        positions[i + 2] = z;
        initialY[i / 3] = y;

        // Color interpolation based on position and vortex
        const t = Math.sin((ix / countX) * Math.PI) * Math.cos((iy / countY) * Math.PI);
        const isPinkPuff = Math.sin(ix * 0.2) * Math.cos(iy * 0.2) > 0.45;

        const mixedColor = isPinkPuff 
          ? pinkAccent.clone().lerp(primaryColor, 0.4) 
          : primaryColor.clone().lerp(deepColor, t);

        colors[colorIndex] = mixedColor.r;
        colors[colorIndex + 1] = mixedColor.g;
        colors[colorIndex + 2] = mixedColor.b;

        scales[i / 3] = isPinkPuff ? 1.6 : (0.8 + Math.random() * 0.8);

        i += 3;
        colorIndex += 3;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Custom Particle Texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.35, 'rgba(255, 255, 255, 0.85)');
    gradient.addColorStop(0.7, 'rgba(116, 189, 227, 0.35)');
    gradient.addColorStop(1, 'rgba(116, 189, 227, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 1.8,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.65 : 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particlesMesh = new THREE.Points(geometry, material);
    particlesMesh.rotation.x = -Math.PI / 4.2;
    particlesMesh.position.y = -6;
    scene.add(particlesMesh);

    // 6. Floating Curiosity Orbs (Rabbit Hole ambient energy)
    const orbGroup = new THREE.Group();
    const orbGeom = new THREE.SphereGeometry(1, 16, 16);
    
    const orbs = [];
    const orbColors = [0x74BDE3, 0xE8A4BA, 0x4F91C7, 0xB72C5E];
    
    for (let k = 0; k < 12; k++) {
      const col = orbColors[k % orbColors.length];
      const orbMat = new THREE.MeshBasicMaterial({
        color: col,
        transparent: true,
        opacity: isDark ? 0.25 : 0.15,
        wireframe: true
      });
      const orb = new THREE.Mesh(orbGeom, orbMat);
      const radius = 18 + Math.random() * 25;
      const angle = (k / 12) * Math.PI * 2;
      orb.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 20,
        Math.sin(angle) * radius - 10
      );
      const s = 1.2 + Math.random() * 2.2;
      orb.scale.set(s, s, s);
      orbGroup.add(orb);
      orbs.push({ mesh: orb, speed: 0.003 + Math.random() * 0.005, angle, radius });
    }
    scene.add(orbGroup);

    // 7. Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // 9. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      camera.position.x = mouseX * 4;
      camera.position.y = -mouseY * 3;
      camera.lookAt(0, 0, 0);

      if (!prefersReducedMotion) {
        // Wave movement in vertex positions
        const positionAttr = geometry.attributes.position;
        const posArray = positionAttr.array;

        let index = 0;
        for (let ix = 0; ix < countX; ix++) {
          for (let iy = 0; iy < countY; iy++) {
            const pIdx = index * 3;
            const x = posArray[pIdx];
            const z = posArray[pIdx + 2];
            
            // Organic undulation (ThreeUI wave effect)
            const wave1 = Math.sin(ix * 0.25 + elapsedTime * 0.9) * 2.2;
            const wave2 = Math.cos(iy * 0.2 + elapsedTime * 0.7) * 2.0;
            const wave3 = Math.sin((ix + iy) * 0.15 + elapsedTime * 1.1) * 1.5;
            
            posArray[pIdx + 1] = initialY[index] + wave1 + wave2 + wave3;
            index++;
          }
        }
        positionAttr.needsUpdate = true;

        // Rotate particles mesh gently
        particlesMesh.rotation.z = Math.sin(elapsedTime * 0.1) * 0.05;

        // Ambient orbs animation
        orbs.forEach((item) => {
          item.angle += item.speed;
          item.mesh.position.x = Math.cos(item.angle) * item.radius;
          item.mesh.position.z = Math.sin(item.angle) * item.radius - 10;
          item.mesh.rotation.x += 0.01;
          item.mesh.rotation.y += 0.015;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, [isDark]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: opacity,
        transition: 'opacity 0.6s ease'
      }}
      aria-hidden="true"
    />
  );
}
