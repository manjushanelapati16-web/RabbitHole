import React from 'react';
import { ChevronRight, ArrowDown, Sparkles, Layers, CornerRightDown } from 'lucide-react';
import { useExploration } from '../context/ExplorationContext';

export default function RabbitHolePath({ path = [], onSelectNode, isVertical = false }) {
  const { openTopic, activeTopic } = useExploration();

  const handleNodeClick = (node) => {
    if (onSelectNode) {
      onSelectNode(node.id || node.title);
    } else {
      openTopic(node.id || node.title);
    }
  };

  if (!path || path.length === 0) return null;

  if (isVertical) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
        {path.map((node, index) => {
          const isLast = index === path.length - 1;
          const isActive = activeTopic && (activeTopic.id === node.id || activeTopic.title === node.title);

          return (
            <React.Fragment key={index}>
              <div
                onClick={() => handleNodeClick(node)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 18px',
                  borderRadius: 'var(--radius-md)',
                  background: isActive
                    ? 'linear-gradient(135deg, var(--pink-light) 0%, var(--bg-card) 100%)'
                    : 'var(--bg-card)',
                  border: `1.5px solid ${isActive ? 'var(--pink-raspberry)' : 'var(--border-color)'}`,
                  boxShadow: isActive ? '0 4px 15px var(--pink-glow)' : 'var(--shadow-sm)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-normal)'
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: isActive ? 'var(--pink-raspberry)' : 'var(--bg-secondary)',
                    color: isActive ? '#FFFFFF' : 'var(--blue-deep)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 800
                  }}
                >
                  {index + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      color: isActive ? 'var(--pink-raspberry)' : 'var(--text-primary)'
                    }}
                  >
                    {node.title || node}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Level {index + 1} Depth
                  </div>
                </div>
                <Sparkles
                  size={16}
                  color={isActive ? 'var(--pink-raspberry)' : 'var(--blue-sky)'}
                  style={{ opacity: isActive ? 1 : 0.4 }}
                />
              </div>

              {!isLast && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'var(--blue-sky)',
                    padding: '2px 0'
                  }}
                >
                  <ArrowDown size={18} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }

  // Horizontal Trail Layout
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        overflowX: 'auto',
        padding: '12px 4px',
        scrollbarWidth: 'thin'
      }}
    >
      {path.map((node, index) => {
        const isLast = index === path.length - 1;
        const isActive = activeTopic && (activeTopic.id === node.id || activeTopic.title === node.title);

        return (
          <React.Fragment key={index}>
            <button
              onClick={() => handleNodeClick(node)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 18px',
                borderRadius: 'var(--radius-full)',
                background: isLast
                  ? 'linear-gradient(135deg, var(--pink-soft) 0%, var(--pink-raspberry) 100%)'
                  : isActive
                  ? 'linear-gradient(135deg, var(--blue-sky) 0%, var(--blue-deep) 100%)'
                  : 'var(--bg-card)',
                color: isLast || isActive ? '#FFFFFF' : 'var(--text-primary)',
                border: isLast || isActive ? 'none' : '1.5px solid var(--border-color)',
                boxShadow: isLast
                  ? '0 4px 16px var(--pink-glow)'
                  : isActive
                  ? '0 4px 16px var(--blue-glow)'
                  : 'var(--shadow-sm)',
                fontWeight: 600,
                fontSize: '0.9rem',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <span
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  background: isLast || isActive ? 'rgba(255, 255, 255, 0.25)' : 'var(--bg-secondary)',
                  color: isLast || isActive ? '#FFFFFF' : 'var(--blue-deep)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 800
                }}
              >
                {index + 1}
              </span>
              <span>{node.title || node}</span>
            </button>

            {!isLast && (
              <ChevronRight
                size={18}
                color="var(--blue-deep)"
                style={{ flexShrink: 0, opacity: 0.7 }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
