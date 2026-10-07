import React from 'react';
import {
  Map,
  Sparkles,
  ArrowRight,
  Clock,
  Bookmark,
  CheckCircle2,
  Trash2,
  CornerDownRight,
  Layers
} from 'lucide-react';
import { ScrollReveal } from '../animations/ReactBits';
import RabbitHolePath from '../components/RabbitHolePath';
import { useExploration } from '../context/ExplorationContext';
import { TOPICS_DATA } from '../data/topics';

export default function MyJourneyPage() {
  const {
    currentPath,
    journeyHistory,
    stats,
    openTopic,
    toggleSaveTopic
  } = useExploration();

  const savedTopicObjects = stats.savedTopics
    ?.map((id) => TOPICS_DATA[id])
    .filter(Boolean) || [];

  return (
    <div className="my-journey-page-view section-padding">
      <div className="container">
        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <span className="section-eyebrow">
            <Map size={14} color="var(--pink-raspberry)" />
            <span>PERSONAL VOYAGE</span>
          </span>
          <h1 className="section-title">My Rabbit Hole</h1>
          <p className="section-subtitle">
            Your personal trail through the infinite map of curiosity. Revisit past depths and continue where you left off.
          </p>
        </div>

        {/* 1. CURRENT ACTIVE RABBIT HOLE */}
        <ScrollReveal>
          <div
            className="uiverse-card"
            style={{
              padding: '32px',
              marginBottom: '40px',
              background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)',
              border: '2px solid var(--pink-soft)'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                marginBottom: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--pink-light)',
                    color: 'var(--pink-raspberry)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                  }}
                >
                  Active Depth ({currentPath.length} Levels)
                </span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  Started with {currentPath[0]?.title || 'Machine Learning'}
                </span>
              </div>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
              Current Descent Chain
            </h3>

            <div style={{ marginBottom: '20px' }}>
              <RabbitHolePath path={currentPath} />
            </div>
          </div>
        </ScrollReveal>

        {/* 2-Column Grid: Saved Topics & Journey History */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}
        >
          {/* Saved Topics */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <Bookmark size={20} color="var(--pink-raspberry)" />
              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)' }}>
                Saved Topics ({savedTopicObjects.length})
              </h3>
            </div>

            {savedTopicObjects.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {savedTopicObjects.map((t, idx) => (
                  <ScrollReveal key={t.id} delay={idx * 60}>
                    <div
                      className="uiverse-card"
                      style={{
                        padding: '16px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                          {t.title}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          {t.category} • {t.difficulty}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <button
                          onClick={() => openTopic(t.id)}
                          className="btn-uiverse-primary btn-uiverse-sm"
                        >
                          <span>Explore</span>
                          <ArrowRight size={14} />
                        </button>
                        <button
                          onClick={() => toggleSaveTopic(t.id)}
                          title="Remove bookmark"
                          style={{
                            padding: '6px',
                            color: 'var(--text-muted)'
                          }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div
                className="uiverse-card"
                style={{ padding: '32px', textAlign: 'center', color: 'var(--text-muted)' }}
              >
                No saved topics yet. Bookmark concepts during your exploration!
              </div>
            )}
          </div>

          {/* Past Journey Expeditions */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <Clock size={20} color="var(--blue-deep)" />
              <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)' }}>
                Past Exploration Trails
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {journeyHistory.map((j, idx) => (
                <ScrollReveal key={j.id} delay={idx * 80}>
                  <div className="uiverse-card" style={{ padding: '20px' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '10px'
                      }}
                    >
                      <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                        {j.rootTopic}
                      </div>
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          padding: '3px 8px',
                          borderRadius: 'var(--radius-full)',
                          background: j.status === 'Completed' ? 'rgba(116, 189, 227, 0.2)' : 'var(--pink-light)',
                          color: j.status === 'Completed' ? 'var(--blue-deep)' : 'var(--pink-raspberry)'
                        }}
                      >
                        {j.status}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                      {j.timestamp} • {j.path.length} connected levels
                    </div>

                    {/* Path summary */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.82rem',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {j.path.map((step, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <span
                            onClick={() => openTopic(step.id)}
                            style={{
                              padding: '2px 8px',
                              borderRadius: 'var(--radius-sm)',
                              background: 'var(--bg-secondary)',
                              cursor: 'pointer'
                            }}
                          >
                            {step.title}
                          </span>
                          {sIdx < j.path.length - 1 && <span>→</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
