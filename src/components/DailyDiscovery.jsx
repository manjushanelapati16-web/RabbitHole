import React from 'react';
import { Sparkles, ArrowRight, Calendar, HelpCircle, Compass } from 'lucide-react';
import { DAILY_RABBIT_HOLE } from '../data/topics';
import { useExploration } from '../context/ExplorationContext';

export default function DailyDiscovery() {
  const { openTopic } = useExploration();

  return (
    <div
      className="uiverse-card"
      style={{
        background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)',
        border: '1.5px solid var(--blue-sky)',
        padding: '32px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative ambient bubble */}
      <div
        style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '180px',
          height: '180px',
          background: 'radial-gradient(circle, var(--pink-glow) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '20px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              background: 'var(--pink-light)',
              border: '1px solid var(--pink-soft)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--pink-raspberry)',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}
          >
            <Calendar size={14} />
            <span>Today's Rabbit Hole</span>
          </span>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 10px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: 'var(--blue-deep)'
            }}
          >
            <Sparkles size={13} />
            <span>+{DAILY_RABBIT_HOLE.xpReward} XP</span>
          </span>
        </div>
      </div>

      <h3
        style={{
          fontSize: '1.8rem',
          lineHeight: '1.3',
          marginBottom: '14px',
          color: 'var(--text-primary)'
        }}
      >
        {DAILY_RABBIT_HOLE.title}
      </h3>

      <p
        style={{
          fontSize: '1.02rem',
          lineHeight: '1.6',
          color: 'var(--text-secondary)',
          marginBottom: '20px',
          maxWidth: '780px'
        }}
      >
        {DAILY_RABBIT_HOLE.summary}
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.86rem',
          color: 'var(--text-muted)',
          marginBottom: '24px'
        }}
      >
        <Compass size={16} color="var(--blue-deep)" />
        <span>Trail: </span>
        <strong style={{ color: 'var(--blue-deep)' }}>{DAILY_RABBIT_HOLE.pathTeaser}</strong>
      </div>

      <div>
        <button
          onClick={() => openTopic(DAILY_RABBIT_HOLE.topicId)}
          className="btn-uiverse-raspberry btn-uiverse-lg"
          style={{ padding: '14px 32px' }}
        >
          <span>Discover Why</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
