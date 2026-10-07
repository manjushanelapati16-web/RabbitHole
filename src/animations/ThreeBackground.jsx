import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * ThreeUI Programming Knowledge Network + Rabbit Hole Depth Background
 *
 * Visual Concept:
 * - A technical, intelligent map of connected knowledge:
 *   Programming concepts -> Algorithms -> Data Structures -> JavaScript -> React -> Node.js -> APIs -> Databases -> AI / ML -> Neural Networks
 * - Rabbit Hole Depth Effect: layered 3D depth curving gently inward and downward toward a deep curiosity horizon
 * - Elegant nodes, curved connection lines, subtle data pulses gliding along paths
 * - Upper-center space kept clean and spacious for hero headline readability
 * - Rabbit Hole Palette: Sky Blue (#74BDE3), Deep Blue (#4F91C7), Raspberry (#B72C5E), Soft Pink (#E8A4BA), White (#FFFFFF)
 */
export default function ThreeBackground({ opacity = 0.85, isDark = false }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion and mobile
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // Subtle atmospheric fog to enhance depth perception
    const fogColor = isDark ? 0x101C24 : 0xF4FAFB;
    scene.fog = new THREE.FogExp2(fogColor, isDark ? 0.016 : 0.018);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    camera.position.set(0, 0, 38);

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(fogColor, 0);
    container.appendChild(renderer.domElement);

    // 4. Color Palette Definitions
    const colSky = new THREE.Color(0x74BDE3);
    const colMedium = new THREE.Color(0x6BA9D6);
    const colDeep = new THREE.Color(0x4F91C7);
    const colRaspberry = new THREE.Color(isDark ? 0xD45A7E : 0xB72C5E);
    const colPink = new THREE.Color(0xE8A4BA);
    const colWhite = new THREE.Color(0xFFFFFF);

    // 5. Build Knowledge Network Node Topology
    // Structured across conceptual tiers with clean hero center
    const rawNodes = [
      // --- TIER 0: Foundations & Programming Concepts (Top Peripheral) ---
      { id: 'syntax', label: 'Syntax & Semantics', x: -26, y: 16, z: 6, tier: 0, isKey: true },
      { id: 'paradigms', label: 'Functional & OOP', x: -18, y: 14, z: 8, tier: 0 },
      { id: 'memory', label: 'Memory & Pointers', x: 18, y: 15, z: 7, tier: 0 },
      { id: 'compilers', label: 'Compilers & AST', x: 26, y: 17, z: 5, tier: 0, isKey: true },
      { id: 'type-theory', label: 'Type Systems', x: -32, y: 11, z: 2, tier: 0 },
      { id: 'concurrency', label: 'Async & Concurrency', x: 31, y: 12, z: 3, tier: 0 },

      // --- TIER 1: Core Computer Science (Mid-Upper Sides) ---
      { id: 'algorithms', label: 'Algorithms', x: -22, y: 8, z: 2, tier: 1, isKey: true, accent: true },
      { id: 'sorting', label: 'Divide & Conquer', x: -29, y: 5, z: -1, tier: 1 },
      { id: 'data-structures', label: 'Data Structures', x: -14, y: 6, z: 3, tier: 1, isKey: true },
      { id: 'graphs', label: 'Graph Theory & Trees', x: 15, y: 7, z: 2, tier: 1, isKey: true },
      { id: 'complexity', label: 'Big-O & Complexity', x: 24, y: 6, z: 0, tier: 1 },
      { id: 'dp', label: 'Dynamic Programming', x: 20, y: 1, z: -2, tier: 1, accent: true },

      // --- TIER 2: Modern Web & Systems (Mid-Sides) ---
      { id: 'javascript', label: 'JavaScript Engine', x: -25, y: -1, z: -3, tier: 2, isKey: true },
      { id: 'react', label: 'React & Virtual DOM', x: -18, y: -3, z: -2, tier: 2, isKey: true },
      { id: 'nodejs', label: 'Node.js Runtime', x: -12, y: -5, z: -5, tier: 2 },
      { id: 'apis', label: 'REST & GraphQL APIs', x: 12, y: -4, z: -4, tier: 2, isKey: true },
      { id: 'state-mgmt', label: 'State Architecture', x: 19, y: -6, z: -6, tier: 2 },
      { id: 'protocols', label: 'HTTP/3 & WebSockets', x: 27, y: -2, z: -5, tier: 2 },

      // --- TIER 3: Data, Cloud & Distributed Systems (Lower-Mid Inward) ---
      { id: 'databases', label: 'Databases & Indexing', x: -15, y: -10, z: -10, tier: 3, isKey: true },
      { id: 'vector-db', label: 'Vector Embeddings DB', x: -8, y: -12, z: -13, tier: 3, accent: true },
      { id: 'distributed', label: 'Distributed Consensus', x: 8, y: -11, z: -11, tier: 3, isKey: true },
      { id: 'cloud', label: 'Cloud & Microservices', x: 16, y: -12, z: -12, tier: 3 },
      { id: 'caching', label: 'In-Memory Cache & Streams', x: -22, y: -9, z: -8, tier: 3 },

      // --- TIER 4: Rabbit Hole Horizon: AI & Deep Learning (Deep Center Basin) ---
      { id: 'ai-ml', label: 'AI & Machine Learning', x: -6, y: -15, z: -18, tier: 4, isKey: true, accent: true },
      { id: 'neural-nets', label: 'Neural Networks', x: 0, y: -17, z: -22, tier: 4, isKey: true, deepCore: true },
      { id: 'deep-learning', label: 'Deep Learning & CNNs', x: 6, y: -16, z: -20, tier: 4, isKey: true },
      { id: 'transformers', label: 'Transformers & LLMs', x: -3, y: -20, z: -25, tier: 4, accent: true, deepCore: true },
      { id: 'quantum', label: 'Quantum Computing', x: 4, y: -21, z: -26, tier: 4, accent: true, deepCore: true },
      { id: 'latent-space', label: 'Latent Space Topology', x: 0, y: -24, z: -29, tier: 4, isKey: true }
    ];

    // Filter node density on mobile for performance
    const activeRawNodes = isMobile 
      ? rawNodes.filter((_, idx) => idx % 2 === 0 || _.isKey)
      : rawNodes;

    // Create node objects with animated parameters
    const nodes = activeRawNodes.map((n, idx) => {
      const isAccent = !!n.accent;
      const isDeep = !!n.deepCore;
      const baseCol = isAccent
        ? colRaspberry
        : isDeep
        ? colSky
        : n.tier <= 1
        ? colSky
        : n.tier === 2
        ? colMedium
        : colDeep;

      return {
        ...n,
        originX: n.x,
        originY: n.y,
        originZ: n.z,
        currentX: n.x,
        currentY: n.y,
        currentZ: n.z,
        color: baseCol,
        size: n.isKey ? (isDeep ? 2.4 : 1.9) : 1.2,
        pulseSpeed: 0.8 + (idx % 5) * 0.25,
        pulseOffset: idx * 0.7,
        floatSpeedX: 0.25 + (idx % 3) * 0.15,
        floatSpeedY: 0.3 + (idx % 4) * 0.12,
        floatRadius: 0.4 + (idx % 3) * 0.25
      };
    });

    const nodeLookup = new Map(nodes.map(n => [n.id, n]));

    // 6. Build Conceptual Relationships / Curved Connections
    const rawEdges = [
      // Foundations -> Core CS
      ['syntax', 'paradigms'],
      ['syntax', 'algorithms'],
      ['paradigms', 'data-structures'],
      ['compilers', 'algorithms'],
      ['memory', 'data-structures'],
      ['type-theory', 'syntax'],
      ['concurrency', 'compilers'],
      ['concurrency', 'protocols'],

      // Core CS internal & downward
      ['algorithms', 'sorting'],
      ['algorithms', 'data-structures'],
      ['data-structures', 'graphs'],
      ['algorithms', 'complexity'],
      ['algorithms', 'dp'],
      ['graphs', 'dp'],

      // Core CS -> Web & Systems
      ['data-structures', 'javascript'],
      ['algorithms', 'javascript'],
      ['javascript', 'react'],
      ['javascript', 'nodejs'],
      ['react', 'state-mgmt'],
      ['nodejs', 'apis'],
      ['apis', 'protocols'],

      // Systems -> Databases & Cloud
      ['nodejs', 'databases'],
      ['apis', 'databases'],
      ['databases', 'caching'],
      ['databases', 'vector-db'],
      ['apis', 'distributed'],
      ['distributed', 'cloud'],
      ['state-mgmt', 'cloud'],

      // Deep Rabbit Hole Pathways (Leading Deeper)
      ['dp', 'ai-ml'],
      ['algorithms', 'ai-ml'],
      ['graphs', 'neural-nets'],
      ['vector-db', 'ai-ml'],
      ['vector-db', 'transformers'],
      ['ai-ml', 'neural-nets'],
      ['neural-nets', 'deep-learning'],
      ['deep-learning', 'transformers'],
      ['distributed', 'quantum'],
      ['neural-nets', 'transformers'],
      ['transformers', 'latent-space'],
      ['quantum', 'latent-space']
    ];

    // Filter valid edges
    const activeEdges = rawEdges
      .filter(([fromId, toId]) => nodeLookup.has(fromId) && nodeLookup.has(toId))
      .map(([fromId, toId]) => ({
        from: nodeLookup.get(fromId),
        to: nodeLookup.get(toId)
      }));

    // 7. Create Canvas Texture for Soft Glowing Nodes
    const createNodeTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');

      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.25, 'rgba(255, 255, 255, 0.95)');
      grad.addColorStop(0.55, 'rgba(116, 189, 227, 0.45)');
      grad.addColorStop(0.85, 'rgba(79, 145, 199, 0.12)');
      grad.addColorStop(1, 'rgba(79, 145, 199, 0)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);

      return new THREE.CanvasTexture(canvas);
    };

    const nodeTexture = createNodeTexture();

    // 8. Render Nodes using Points Geometry
    const nodeCount = nodes.length;
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeColors = new Float32Array(nodeCount * 3);
    const nodeSizes = new Float32Array(nodeCount);

    nodes.forEach((n, i) => {
      nodePositions[i * 3] = n.x;
      nodePositions[i * 3 + 1] = n.y;
      nodePositions[i * 3 + 2] = n.z;

      nodeColors[i * 3] = n.color.r;
      nodeColors[i * 3 + 1] = n.color.g;
      nodeColors[i * 3 + 2] = n.color.b;

      nodeSizes[i] = n.size * (isMobile ? 12 : 16);
    });

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    nodeGeometry.setAttribute('color', new THREE.BufferAttribute(nodeColors, 3));
    nodeGeometry.setAttribute('size', new THREE.BufferAttribute(nodeSizes, 1));

    const nodeMaterial = new THREE.PointsMaterial({
      size: isMobile ? 2.2 : 2.8,
      map: nodeTexture,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.88 : 0.68,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodePoints);

    // 9. Render Connection Curves (Smooth Curved 3D Splines)
    const curvePointsPerLine = 16;
    const totalLineVertices = activeEdges.length * curvePointsPerLine;
    const linePositions = new Float32Array(totalLineVertices * 3);
    const lineColors = new Float32Array(totalLineVertices * 3);

    // Precalculate spline curves
    const splinePaths = activeEdges.map((edge) => {
      const p0 = new THREE.Vector3(edge.from.originX, edge.from.originY, edge.from.originZ);
      const p2 = new THREE.Vector3(edge.to.originX, edge.to.originY, edge.to.originZ);

      // Midpoint with subtle inward rabbit-hole curvature
      const mid = new THREE.Vector3()
        .addVectors(p0, p2)
        .multiplyScalar(0.5);
      
      // Inward depth curve pull
      mid.z -= 1.8 + Math.abs(mid.x) * 0.05;
      mid.y -= 0.6;

      const curve = new THREE.QuadraticBezierCurve3(p0, mid, p2);
      return { curve, edge, p0, mid, p2 };
    });

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.38 : 0.26,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    // 10. Data Signals / Moving Point Pulses
    const numSignals = isMobile ? 6 : 14;
    const signalData = [];
    const signalPositions = new Float32Array(numSignals * 3);
    const signalColors = new Float32Array(numSignals * 3);

    for (let s = 0; s < numSignals; s++) {
      const pathIndex = Math.floor(Math.random() * splinePaths.length);
      const isPinkSignal = s % 4 === 0;
      signalData.push({
        pathIndex,
        t: (s / numSignals) + Math.random() * 0.1,
        speed: 0.0018 + Math.random() * 0.0022,
        isPink: isPinkSignal
      });
    }

    const signalGeometry = new THREE.BufferGeometry();
    signalGeometry.setAttribute('position', new THREE.BufferAttribute(signalPositions, 3));
    signalGeometry.setAttribute('color', new THREE.BufferAttribute(signalColors, 3));

    const signalMaterial = new THREE.PointsMaterial({
      size: isMobile ? 2.4 : 3.2,
      map: nodeTexture,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.95 : 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const signalPoints = new THREE.Points(signalGeometry, signalMaterial);
    scene.add(signalPoints);

    // 11. Subtle Ambient Milestone Halos
    const milestoneGroup = new THREE.Group();
    const milestoneRingGeom = new THREE.RingGeometry(1.2, 1.4, 24);
    const milestoneRingMat = new THREE.MeshBasicMaterial({
      color: colSky,
      transparent: true,
      opacity: isDark ? 0.18 : 0.12,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    nodes.filter(n => n.isKey).forEach(n => {
      const ring = new THREE.Mesh(milestoneRingGeom, milestoneRingMat);
      ring.position.set(n.x, n.y, n.z);
      ring.rotation.x = Math.PI / 6;
      milestoneGroup.add(ring);
    });
    scene.add(milestoneGroup);

    // 12. Mouse Interaction (Gentle, Damped Parallax)
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 13. Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // 14. Smooth Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera parallax
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      camera.position.x = mouseX * 2.2;
      camera.position.y = -mouseY * 1.6;
      camera.lookAt(0, -3, -10);

      if (!prefersReducedMotion) {
        // A. Animate Nodes (Subtle gentle drift & breathing)
        const posAttr = nodeGeometry.attributes.position;
        const colAttr = nodeGeometry.attributes.color;
        const posArr = posAttr.array;
        const colArr = colAttr.array;

        nodes.forEach((n, i) => {
          const floatX = Math.sin(elapsedTime * n.floatSpeedX + n.originY) * n.floatRadius;
          const floatY = Math.cos(elapsedTime * n.floatSpeedY + n.originX) * n.floatRadius;
          const floatZ = Math.sin(elapsedTime * 0.2 + n.originX * 0.1) * (n.floatRadius * 0.6);

          n.currentX = n.originX + floatX;
          n.currentY = n.originY + floatY;
          n.currentZ = n.originZ + floatZ;

          posArr[i * 3] = n.currentX;
          posArr[i * 3 + 1] = n.currentY;
          posArr[i * 3 + 2] = n.currentZ;

          // Pulse glow
          const pulse = (Math.sin(elapsedTime * n.pulseSpeed + n.pulseOffset) + 1) * 0.5;
          const brightness = 0.8 + pulse * 0.35;

          colArr[i * 3] = Math.min(1, n.color.r * brightness);
          colArr[i * 3 + 1] = Math.min(1, n.color.g * brightness);
          colArr[i * 3 + 2] = Math.min(1, n.color.b * brightness);
        });

        posAttr.needsUpdate = true;
        colAttr.needsUpdate = true;

        // B. Animate Connection Curves (Update to match node drift)
        const linePosArr = lineGeometry.attributes.position.array;
        const lineColArr = lineGeometry.attributes.color.array;
        let lineVertIdx = 0;

        splinePaths.forEach((pathObj) => {
          const fromNode = pathObj.edge.from;
          const toNode = pathObj.edge.to;

          pathObj.p0.set(fromNode.currentX, fromNode.currentY, fromNode.currentZ);
          pathObj.p2.set(toNode.currentX, toNode.currentY, toNode.currentZ);

          pathObj.mid.addVectors(pathObj.p0, pathObj.p2).multiplyScalar(0.5);
          pathObj.mid.z -= 1.8 + Math.abs(pathObj.mid.x) * 0.05;
          pathObj.mid.y -= 0.6;

          pathObj.curve.v0.copy(pathObj.p0);
          pathObj.curve.v1.copy(pathObj.mid);
          pathObj.curve.v2.copy(pathObj.p2);

          const isDeepPath = fromNode.tier >= 3 || toNode.tier >= 3;
          const isAccentPath = fromNode.accent || toNode.accent;

          const baseLineCol = isAccentPath
            ? colRaspberry
            : isDeepPath
            ? colSky
            : colDeep;

          // Segment lines
          const stepCount = curvePointsPerLine / 2;
          for (let s = 0; s < stepCount; s++) {
            const tA = s / stepCount;
            const tB = (s + 1) / stepCount;

            const ptA = pathObj.curve.getPoint(tA);
            const ptB = pathObj.curve.getPoint(tB);

            linePosArr[lineVertIdx * 3] = ptA.x;
            linePosArr[lineVertIdx * 3 + 1] = ptA.y;
            linePosArr[lineVertIdx * 3 + 2] = ptA.z;

            lineColArr[lineVertIdx * 3] = baseLineCol.r * 0.7;
            lineColArr[lineVertIdx * 3 + 1] = baseLineCol.g * 0.7;
            lineColArr[lineVertIdx * 3 + 2] = baseLineCol.b * 0.7;
            lineVertIdx++;

            linePosArr[lineVertIdx * 3] = ptB.x;
            linePosArr[lineVertIdx * 3 + 1] = ptB.y;
            linePosArr[lineVertIdx * 3 + 2] = ptB.z;

            lineColArr[lineVertIdx * 3] = baseLineCol.r * 0.7;
            lineColArr[lineVertIdx * 3 + 1] = baseLineCol.g * 0.7;
            lineColArr[lineVertIdx * 3 + 2] = baseLineCol.b * 0.7;
            lineVertIdx++;
          }
        });

        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.attributes.color.needsUpdate = true;

        // C. Animate Data Signal Packets Gliding Along Paths
        const sigPosArr = signalGeometry.attributes.position.array;
        const sigColArr = signalGeometry.attributes.color.array;

        signalData.forEach((sig, idx) => {
          sig.t += sig.speed;
          if (sig.t > 1) {
            sig.t = 0;
            sig.pathIndex = Math.floor(Math.random() * splinePaths.length);
          }

          const currentPath = splinePaths[sig.pathIndex];
          if (currentPath) {
            const point = currentPath.curve.getPoint(sig.t);
            sigPosArr[idx * 3] = point.x;
            sigPosArr[idx * 3 + 1] = point.y;
            sigPosArr[idx * 3 + 2] = point.z;

            const sigColor = sig.isPink ? (idx % 2 === 0 ? colPink : colRaspberry) : colWhite;
            sigColArr[idx * 3] = sigColor.r;
            sigColArr[idx * 3 + 1] = sigColor.g;
            sigColArr[idx * 3 + 2] = sigColor.b;
          }
        });

        signalGeometry.attributes.position.needsUpdate = true;
        signalGeometry.attributes.color.needsUpdate = true;

        // D. Rotate milestone rings gently
        milestoneGroup.children.forEach((mesh, mIdx) => {
          mesh.rotation.z += 0.003 * (mIdx % 2 === 0 ? 1 : -1);
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // 15. Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      nodeTexture.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      signalGeometry.dispose();
      signalMaterial.dispose();
      milestoneRingGeom.dispose();
      milestoneRingMat.dispose();
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
