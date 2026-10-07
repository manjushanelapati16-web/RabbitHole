import React, { useState } from 'react';
import { Share2, Sparkles, Filter, Info, ArrowRight, Layers } from 'lucide-react';
import KnowledgeGraph from '../components/KnowledgeGraph';
import { useExploration } from '../context/ExplorationContext';
import { TOPICS_DATA } from '../data/topics';

export default function KnowledgeGraphPage() {
  const { openTopic, activeTopic } = useExploration();
  const [selectedNodeId, setSelectedNodeId] = useState('neural-networks');

  const selectedTopic = TOPICS_DATA[selectedNodeId] || TOPICS_DATA['neural-networks'];

  return (
    <div className="knowledge-graph-page-view section-padding">
      <div className="container">
        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: '32px' }}>
          <span className="section-eyebrow">
            <Share2 size={14} color="var(--pink-raspberry)" />
            <span>TOPOLOGICAL MAP</span>
          </span>
          <h1 className="section-title">The Connected Knowledge Graph</h1>
          <p className="section-subtitle">
            Hover, click, and navigate the structural web connecting foundational principles to cutting-edge frontiers.
          </p>
        </div>

        {/* Legend */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            marginBottom: '24px',
            fontSize: '0.86rem',
            color: 'var(--text-secondary)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: '#74BDE3',
                display: 'inline-block'
              }}
            />
            <span>Primary Core Concepts</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: '#B72C5E',
                display: 'inline-block'
              }}
            />
            <span>Deeper / Frontier Concepts</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1.5px solid var(--border-color)',
                display: 'inline-block'
              }}
            />
            <span>Supporting & Interdisciplinary Nodes</span>
          </div>
        </div>

        {/* Main Interactive Graph & Side Inspector */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) 340px',
            gap: '24px',
            alignItems: 'start'
          }}
        >
          {/* Graph Component */}
          <div>
            <KnowledgeGraph
              height={620}
              onNodeSelect={(nodeId) => setSelectedNodeId(nodeId)}
            />
          </div>

          {/* Node Inspector Drawer */}
          <div
            className="uiverse-card"
            style={{
              padding: '24px',
              position: 'sticky',
              top: '90px'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px'
              }}
            >
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--blue-deep)'
                }}
              >
                {selectedTopic.category}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {selectedTopic.difficulty}
              </span>
            </div>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
              {selectedTopic.title}
            </h3>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '20px' }}>
              {selectedTopic.shortDescription}
            </p>

            {/* Connected Branches */}
            <div style={{ marginBottom: '24px' }}>
              <div
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '10px'
                }}
              >
                Connected Branches ({selectedTopic.connectedConcepts?.length || 0})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedTopic.connectedConcepts?.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => {
                      setSelectedNodeId(c.id);
                      if (TOPICS_DATA[c.id]) openTopic(c.id);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      cursor: 'pointer',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)'
                    }}
                  >
                    <span>{c.title}</span>
                    <ArrowRight size={13} color="var(--pink-raspberry)" />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => openTopic(selectedTopic.id)}
              className="btn-uiverse-raspberry"
              style={{ width: '100%', padding: '12px', fontSize: '0.92rem' }}
            >
              <span>Dive Into {selectedTopic.title}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .knowledge-graph-page-view .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
