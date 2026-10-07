import React from 'react';
import {
  Award,
  Flame,
  Sparkles,
  Compass,
  Layers,
  CheckCircle2,
  Lock,
  Trophy,
  Zap,
  TrendingUp,
  Share2
} from 'lucide-react';
import { ScrollReveal } from '../animations/ReactBits';
import ProgressCard from '../components/ProgressCard';
import { useExploration } from '../context/ExplorationContext';

export default function ProgressPage() {
  const { stats, achievements, triggerCelebrationEffect } = useExploration();

  return (
    <div className="progress-page-view section-padding">
      <div className="container">
        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: '36px' }}>
          <span className="section-eyebrow">
            <Trophy size={14} color="var(--pink-raspberry)" />
            <span>EXPLORER STATS & BADGES</span>
          </span>
          <h1 className="section-title">Your Curiosity Progress</h1>
          <p className="section-subtitle">
            Celebrate every conceptual leap, deeper insight, and cross-disciplinary connection you uncover.
          </p>
        </div>

        {/* Top Progress & Stats Widget */}
        <div style={{ marginBottom: '48px' }}>
          <ProgressCard />
        </div>

        {/* Achievements Showcase */}
        <div style={{ marginBottom: '48px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px'
            }}
          >
            <div>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>
                Achievements & Badges
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                Unlock curiosity emblems as you explore diverse topics and deeper depths.
              </p>
            </div>

            <button
              onClick={() => triggerCelebrationEffect('full')}
              className="btn-uiverse-secondary btn-uiverse-sm"
            >
              <Sparkles size={15} color="var(--pink-raspberry)" />
              <span>Celebrate Streak</span>
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}
          >
            {achievements.map((item, idx) => {
              const isPink = item.color === 'pink';

              return (
                <ScrollReveal key={item.id} delay={idx * 60}>
                  <div
                    className="uiverse-card"
                    style={{
                      padding: '24px',
                      opacity: item.unlocked ? 1 : 0.75,
                      background: item.unlocked
                        ? isPink
                          ? 'linear-gradient(135deg, var(--pink-light) 0%, var(--bg-card) 100%)'
                          : 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-card) 100%)'
                        : 'var(--bg-card)',
                      border: item.unlocked
                        ? isPink
                          ? '1.5px solid var(--pink-soft)'
                          : '1.5px solid var(--blue-sky)'
                        : '1.5px solid var(--border-color)'
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
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 'var(--radius-md)',
                          background: item.unlocked
                            ? isPink
                              ? 'var(--pink-raspberry)'
                              : 'var(--blue-deep)'
                            : 'var(--bg-secondary)',
                          color: item.unlocked ? '#FFFFFF' : 'var(--text-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: item.unlocked
                            ? isPink
                              ? '0 4px 12px var(--pink-glow)'
                              : '0 4px 12px var(--blue-glow)'
                            : 'none'
                        }}
                      >
                        {item.unlocked ? <Award size={24} /> : <Lock size={20} />}
                      </div>

                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          padding: '3px 10px',
                          borderRadius: 'var(--radius-full)',
                          background: item.unlocked ? 'var(--bg-card)' : 'var(--bg-secondary)',
                          color: item.unlocked
                            ? isPink
                              ? 'var(--pink-raspberry)'
                              : 'var(--blue-deep)'
                            : 'var(--text-muted)',
                          border: '1px solid var(--border-color)'
                        }}
                      >
                        {item.unlocked ? item.unlockedAt : `${item.progress || 0}%`}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.18rem',
                        marginBottom: '6px',
                        color: 'var(--text-primary)'
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.86rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.5'
                      }}
                    >
                      {item.description}
                    </p>

                    {!item.unlocked && item.progress !== undefined && (
                      <div style={{ marginTop: '16px' }}>
                        <div className="uiverse-progress-track" style={{ height: '6px' }}>
                          <div
                            className="uiverse-progress-bar"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Weekly Curiosity Activity Matrix */}
        <div
          className="uiverse-card"
          style={{
            padding: '28px',
            background: 'var(--bg-card)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <TrendingUp size={20} color="var(--blue-deep)" />
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
              Weekly Curiosity Pulse
            </h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
            Your daily rabbit hole descents across the last 7 days.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '12px',
              textAlign: 'center'
            }}
          >
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, dIdx) => {
              const heights = [40, 65, 80, 50, 95, 70, 85];
              const h = heights[dIdx];

              return (
                <div key={day} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <div
                    style={{
                      width: '100%',
                      height: '110px',
                      background: 'var(--bg-secondary)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '4px',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: `${h}%`,
                        background:
                          dIdx === 6
                            ? 'linear-gradient(180deg, var(--pink-raspberry), var(--pink-soft))'
                            : 'linear-gradient(180deg, var(--blue-deep), var(--blue-sky))',
                        borderRadius: 'var(--radius-sm)',
                        transition: 'height 0.8s ease'
                      }}
                    />
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    {day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
