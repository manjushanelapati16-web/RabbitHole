import React from 'react';
import { Compass, Flame, Sparkles, Layers, Award, Trophy, ChevronRight } from 'lucide-react';
import { useExploration } from '../context/ExplorationContext';

export default function ProgressCard({ onExploreMore }) {
  const { stats, achievements } = useExploration();

  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const progressPercent = Math.min(100, Math.round((stats.xp / stats.nextLevelXp) * 100));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Level & XP Overview */}
      <div
        className="uiverse-card"
        style={{
          background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)',
          padding: '28px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '16px'
          }}
        >
          <div>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--blue-deep)'
              }}
            >
              Current Rank • Level {stats.level}
            </div>
            <h3 style={{ fontSize: '1.45rem', marginTop: '2px', color: 'var(--text-primary)' }}>
              {stats.levelTitle}
            </h3>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              background: 'var(--pink-light)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--pink-raspberry)',
              fontWeight: 800,
              fontSize: '1.05rem',
              border: '1px solid var(--pink-soft)'
            }}
          >
            <Sparkles size={18} />
            <span>{stats.xp.toLocaleString()} XP</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{ marginBottom: '8px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.82rem',
              color: 'var(--text-secondary)',
              marginBottom: '6px'
            }}
          >
            <span>Level {stats.level} Progress</span>
            <span>{stats.xp} / {stats.nextLevelXp} XP ({progressPercent}%)</span>
          </div>
          <div className="uiverse-progress-track">
            <div className="uiverse-progress-bar" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>
      </div>

      {/* 4 Stats Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px'
        }}
      >
        <div className="uiverse-stat-card">
          <div className="uiverse-stat-icon">
            <Compass size={26} />
          </div>
          <div>
            <div className="uiverse-stat-value">{stats.topicsExplored}</div>
            <div className="uiverse-stat-label">Topics Explored</div>
          </div>
        </div>

        <div className="uiverse-stat-card">
          <div className="uiverse-stat-icon pink">
            <Layers size={26} />
          </div>
          <div>
            <div className="uiverse-stat-value">{stats.rabbitHolesCompleted}</div>
            <div className="uiverse-stat-label">Rabbit Holes</div>
          </div>
        </div>

        <div className="uiverse-stat-card">
          <div className="uiverse-stat-icon pink">
            <Flame size={26} />
          </div>
          <div>
            <div className="uiverse-stat-value">{stats.currentStreak} Days</div>
            <div className="uiverse-stat-label">Curiosity Streak</div>
          </div>
        </div>

        <div className="uiverse-stat-card">
          <div className="uiverse-stat-icon">
            <Trophy size={26} />
          </div>
          <div>
            <div className="uiverse-stat-value">{unlockedCount} / {achievements.length}</div>
            <div className="uiverse-stat-label">Achievements</div>
          </div>
        </div>
      </div>
    </div>
  );
}
