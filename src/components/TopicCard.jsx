import React from 'react';
import { ArrowRight, Bookmark, Sparkles, Layers, Clock } from 'lucide-react';
import { useExploration } from '../context/ExplorationContext';

export default function TopicCard({ topic, onEnter }) {
  const { stats, toggleSaveTopic, openTopic } = useExploration();
  const isSaved = stats.savedTopics?.includes(topic.id);

  const handleCardClick = () => {
    if (onEnter) {
      onEnter(topic.id);
    } else {
      openTopic(topic.id);
    }
  };

  const getDifficultyColor = (diff) => {
    switch (diff?.toLowerCase()) {
      case 'beginner': return { bg: 'var(--bg-secondary)', text: 'var(--blue-deep)', border: 'var(--border-color)' };
      case 'intermediate': return { bg: 'var(--pink-light)', text: 'var(--pink-raspberry)', border: 'var(--pink-soft)' };
      case 'advanced': return { bg: 'rgba(79, 145, 199, 0.15)', text: 'var(--blue-dark)', border: 'var(--blue-medium)' };
      default: return { bg: 'var(--bg-secondary)', text: 'var(--blue-deep)', border: 'var(--border-color)' };
    }
  };

  const diffStyle = getDifficultyColor(topic.difficulty);

  return (
    <div className="uiverse-card" style={{ height: '100%' }}>
      {/* Card Header: Category & Bookmark */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '14px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              padding: '4px 10px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--bg-secondary)',
              color: 'var(--blue-deep)',
              border: '1px solid var(--border-color)'
            }}
          >
            {topic.category || 'Science'}
          </span>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              padding: '4px 8px',
              borderRadius: 'var(--radius-full)',
              background: diffStyle.bg,
              color: diffStyle.text,
              border: `1px solid ${diffStyle.border}`
            }}
          >
            {topic.difficulty || 'Beginner'}
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleSaveTopic(topic.id);
          }}
          aria-label={isSaved ? 'Remove from saved' : 'Save topic'}
          style={{
            padding: '6px',
            borderRadius: '50%',
            color: isSaved ? 'var(--pink-raspberry)' : 'var(--text-muted)',
            background: isSaved ? 'var(--pink-light)' : 'transparent',
            transition: 'all var(--transition-fast)'
          }}
        >
          <Bookmark size={18} fill={isSaved ? 'var(--pink-raspberry)' : 'none'} />
        </button>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '1.28rem',
          marginBottom: '10px',
          color: 'var(--text-primary)',
          lineHeight: '1.3'
        }}
      >
        {topic.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.55',
          marginBottom: '20px',
          flex: 1
        }}
      >
        {topic.shortDescription}
      </p>

      {/* Meta Info */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          marginBottom: '18px',
          paddingTop: '12px',
          borderTop: '1px solid var(--border-color)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Layers size={15} color="var(--blue-deep)" />
          <span>{topic.connectedConcepts?.length || 4} branches</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Clock size={15} color="var(--blue-deep)" />
          <span>{topic.readTime || '3 min'} dive</span>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={handleCardClick}
        className="btn-uiverse-primary"
        style={{ width: '100%', padding: '10px 18px', fontSize: '0.92rem' }}
      >
        <span>Enter Rabbit Hole</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
