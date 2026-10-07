import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ZoomIn, ZoomOut, RefreshCw, Sparkles, Layers, Info } from 'lucide-react';
import { TOPICS_DATA } from '../data/topics';
import { useExploration } from '../context/ExplorationContext';

export default function KnowledgeGraph({ onNodeSelect, compact = false, height = 540 }) {
  const { openTopic, activeTopic } = useExploration();
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const svgRef = useRef(null);

  // Curated graph layout: primary concepts (blue), deeper concepts (pink), supporting concepts (light/white)
  const graphNodes = [
    { id: 'artificial-intelligence', label: 'Artificial Intelligence', category: 'AI', x: 420, y: 90, type: 'primary', radius: 46 },
    { id: 'machine-learning', label: 'Machine Learning', category: 'AI', x: 280, y: 200, type: 'primary', radius: 42 },
    { id: 'neural-networks', label: 'Neural Networks', category: 'AI', x: 380, y: 310, type: 'selected', radius: 44 },
    { id: 'supervised-learning', label: 'Supervised Learning', category: 'AI', x: 130, y: 220, type: 'supporting', radius: 36 },
    { id: 'backpropagation', label: 'Backpropagation', category: 'Computer Science', x: 230, y: 410, type: 'supporting', radius: 36 },
    { id: 'activation-functions', label: 'Activation Functions', category: 'Mathematics', x: 370, y: 450, type: 'supporting', radius: 36 },
    { id: 'cnn', label: 'CNN', category: 'AI', x: 530, y: 330, type: 'selected', radius: 40 },
    { id: 'computer-vision', label: 'Computer Vision', category: 'AI', x: 670, y: 260, type: 'selected', radius: 42 },
    { id: 'object-detection', label: 'Object Detection', category: 'AI', x: 740, y: 380, type: 'selected', radius: 38 },
    { id: 'transformers', label: 'Transformers', category: 'AI', x: 570, y: 190, type: 'selected', radius: 40 },
    { id: 'generative-ai', label: 'Generative AI', category: 'AI', x: 700, y: 120, type: 'supporting', radius: 38 },
    { id: 'robotics', label: 'Robotics', category: 'Robotics', x: 570, y: 460, type: 'supporting', radius: 36 },
    { id: 'cybersecurity', label: 'Cybersecurity', category: 'Cybersecurity', x: 180, y: 110, type: 'supporting', radius: 38 },
    { id: 'quantum-computing', label: 'Quantum Computing', category: 'Technology', x: 300, y: 30, type: 'primary', radius: 40 },
    { id: 'data-science', label: 'Data Science', category: 'Data Science', x: 110, y: 330, type: 'supporting', radius: 36 }
  ];

  const graphLinks = [
    { source: 'artificial-intelligence', target: 'machine-learning' },
    { source: 'artificial-intelligence', target: 'transformers' },
    { source: 'artificial-intelligence', target: 'generative-ai' },
    { source: 'artificial-intelligence', target: 'quantum-computing' },
    { source: 'artificial-intelligence', target: 'cybersecurity' },
    { source: 'machine-learning', target: 'supervised-learning' },
    { source: 'machine-learning', target: 'neural-networks' },
    { source: 'machine-learning', target: 'data-science' },
    { source: 'neural-networks', target: 'backpropagation' },
    { source: 'neural-networks', target: 'activation-functions' },
    { source: 'neural-networks', target: 'cnn' },
    { source: 'neural-networks', target: 'transformers' },
    { source: 'cnn', target: 'computer-vision' },
    { source: 'computer-vision', target: 'object-detection' },
    { source: 'computer-vision', target: 'robotics' },
    { source: 'transformers', target: 'generative-ai' },
    { source: 'data-science', target: 'supervised-learning' },
    { source: 'cybersecurity', target: 'quantum-computing' }
  ];

  // Default selection
  useEffect(() => {
    if (activeTopic) {
      const match = graphNodes.find((n) => n.id === activeTopic.id);
      if (match) setSelectedNode(match);
    } else {
      setSelectedNode(graphNodes[2]); // Neural Networks
    }
  }, [activeTopic]);

  const handleMouseDown = (e) => {
    if (e.target.tagName === 'svg' || e.target.tagName === 'line') {
      setIsDragging(true);
      setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleNodeClick = (node) => {
    setSelectedNode(node);
    if (onNodeSelect) {
      onNodeSelect(node.id);
    }
  };

  const resetView = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const isConnected = (nodeId1, nodeId2) => {
    return graphLinks.some(
      (link) =>
        (link.source === nodeId1 && link.target === nodeId2) ||
        (link.source === nodeId2 && link.target === nodeId1)
    );
  };

  const selectedTopicData = selectedNode ? TOPICS_DATA[selectedNode.id] : null;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: height,
        borderRadius: 'var(--radius-xl)',
        background: 'var(--bg-card)',
        border: '1.5px solid var(--border-color)',
        boxShadow: 'var(--shadow-md)',
        overflow: 'hidden',
        userSelect: 'none'
      }}
    >
      {/* Top Bar Controls */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            background: 'var(--bg-glass)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: 'var(--blue-deep)'
          }}
        >
          <Sparkles size={14} color="var(--pink-raspberry)" />
          <span>Interactive Knowledge Graph</span>
        </span>
      </div>

      {/* Zoom / Reset Controls */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: 'var(--bg-glass)',
          backdropFilter: 'blur(10px)',
          padding: '4px',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-color)'
        }}
      >
        <button
          onClick={() => setZoom((z) => Math.min(1.8, z + 0.15))}
          title="Zoom In"
          style={{
            padding: '8px',
            borderRadius: '50%',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ZoomIn size={16} />
        </button>
        <button
          onClick={() => setZoom((z) => Math.max(0.6, z - 0.15))}
          title="Zoom Out"
          style={{
            padding: '8px',
            borderRadius: '50%',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ZoomOut size={16} />
        </button>
        <button
          onClick={resetView}
          title="Reset View"
          style={{
            padding: '8px',
            borderRadius: '50%',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <RefreshCw size={16} />
        </button>
      </div>

      {/* SVG Canvas for Graph Rendering */}
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 880 540"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
          width: '100%',
          height: '100%'
        }}
      >
        <defs>
          <linearGradient id="linkBluePink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#74BDE3" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B72C5E" stopOpacity="0.8" />
          </linearGradient>
          <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g transform={`translate(${offset.x}, ${offset.y}) scale(${zoom})`} transform-origin="440 270">
          {/* Background grid dots for spatial feel */}
          <pattern id="graphGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="var(--border-color)" opacity="0.6" />
          </pattern>
          <rect x="-400" y="-300" width="1680" height="1140" fill="url(#graphGrid)" />

          {/* Connection Links */}
          {graphLinks.map((link, idx) => {
            const sourceNode = graphNodes.find((n) => n.id === link.source);
            const targetNode = graphNodes.find((n) => n.id === link.target);
            if (!sourceNode || !targetNode) return null;

            const isHighlighted =
              (selectedNode && (link.source === selectedNode.id || link.target === selectedNode.id)) ||
              (hoveredNode && (link.source === hoveredNode.id || link.target === hoveredNode.id));

            return (
              <line
                key={idx}
                x1={sourceNode.x}
                y1={sourceNode.y}
                x2={targetNode.x}
                y2={targetNode.y}
                stroke={isHighlighted ? 'url(#linkBluePink)' : 'var(--border-color)'}
                strokeWidth={isHighlighted ? 3 : 1.5}
                strokeDasharray={isHighlighted ? 'none' : '4, 4'}
                opacity={isHighlighted ? 0.95 : 0.5}
                style={{ transition: 'stroke 0.3s, stroke-width 0.3s, opacity 0.3s' }}
              />
            );
          })}

          {/* Graph Nodes */}
          {graphNodes.map((node) => {
            const isSelected = selectedNode?.id === node.id;
            const isHovered = hoveredNode?.id === node.id;
            const isRelated =
              selectedNode && isConnected(selectedNode.id, node.id);

            let nodeFill = 'var(--bg-card)';
            let nodeStroke = 'var(--border-color)';
            let textColor = 'var(--text-primary)';
            let ringColor = 'transparent';

            if (node.type === 'primary') {
              nodeFill = isSelected ? '#4F91C7' : '#74BDE3';
              nodeStroke = '#4F91C7';
              textColor = '#FFFFFF';
            } else if (node.type === 'selected') {
              nodeFill = isSelected ? '#B72C5E' : '#E8A4BA';
              nodeStroke = '#B72C5E';
              textColor = '#FFFFFF';
            } else {
              nodeFill = 'var(--bg-card)';
              nodeStroke = isSelected ? 'var(--pink-raspberry)' : 'var(--border-color)';
              textColor = 'var(--text-primary)';
            }

            if (isSelected) {
              ringColor = 'var(--pink-raspberry)';
            } else if (isRelated) {
              ringColor = 'var(--blue-sky)';
            }

            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                onClick={() => handleNodeClick(node)}
                onMouseEnter={() => setHoveredNode(node)}
                onMouseLeave={() => setHoveredNode(null)}
                style={{ cursor: 'pointer' }}
              >
                {/* Active Ripple / Glow Ring */}
                {(isSelected || isHovered || isRelated) && (
                  <circle
                    r={node.radius + 8}
                    fill="none"
                    stroke={ringColor}
                    strokeWidth={isSelected ? 3 : 2}
                    opacity={0.8}
                    className={isSelected ? 'animate-pulse-glow' : ''}
                  />
                )}

                {/* Node Base Circle */}
                <circle
                  r={node.radius}
                  fill={nodeFill}
                  stroke={nodeStroke}
                  strokeWidth={2.5}
                  filter={isSelected ? 'url(#nodeGlow)' : 'none'}
                  style={{
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isSelected || isHovered ? 'scale(1.08)' : 'scale(1)',
                    transformOrigin: 'center'
                  }}
                />

                {/* Node Label */}
                <text
                  textAnchor="middle"
                  dy=".3em"
                  fill={textColor}
                  fontSize={node.radius > 40 ? '11px' : '9.5px'}
                  fontWeight="700"
                  fontFamily="var(--font-display)"
                  pointerEvents="none"
                  style={{
                    maxWidth: node.radius * 1.8,
                    textShadow: node.type !== 'supporting' ? '0 1px 2px rgba(0,0,0,0.2)' : 'none'
                  }}
                >
                  {node.label.length > 15 && node.label.includes(' ') ? (
                    <>
                      <tspan x="0" dy="-0.5em">
                        {node.label.split(' ')[0]}
                      </tspan>
                      <tspan x="0" dy="1.2em">
                        {node.label.split(' ').slice(1).join(' ')}
                      </tspan>
                    </>
                  ) : (
                    node.label
                  )}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Selected Node Bottom Info Overlay Panel */}
      {selectedNode && (
        <div
          className="glass-panel"
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '16px',
            right: '16px',
            borderRadius: 'var(--radius-lg)',
            padding: '16px 20px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '14px',
            zIndex: 20
          }}
        >
          <div style={{ maxWidth: '620px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--pink-light)',
                  color: 'var(--pink-raspberry)'
                }}
              >
                {selectedNode.category}
              </span>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                {selectedNode.label}
              </h4>
            </div>
            <p
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.4',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical'
              }}
            >
              {selectedTopicData?.shortDescription ||
                'Connected node within the Rabbit Hole knowledge universe.'}
            </p>
          </div>

          <button
            onClick={() => openTopic(selectedNode.id)}
            className="btn-uiverse-raspberry btn-uiverse-sm"
          >
            <span>Enter Rabbit Hole</span>
            <ArrowRight size={15} />
          </button>
        </div>
      )}
    </div>
  );
}
