import React, { useState } from 'react';
import {
  Settings as SettingsIcon,
  Moon,
  Sun,
  Sparkles,
  Bell,
  Shield,
  User,
  Sliders,
  Check
} from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

export default function SettingsPage() {
  const { isDark, toggleTheme } = useTheme();
  const { user } = useAuth();

  const [aiRecommendations, setAiRecommendations] = useState(true);
  const [autoBranching, setAutoBranching] = useState(true);
  const [dailyDiscovery, setDailyDiscovery] = useState(true);
  const [confettiEffects, setConfettiEffects] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="settings-page-view section-padding">
      <div className="container-narrow">
        {/* Header */}
        <div className="section-header" style={{ textAlign: 'left', marginBottom: '36px' }}>
          <span className="section-eyebrow">
            <SettingsIcon size={14} color="var(--pink-raspberry)" />
            <span>PREFERENCES</span>
          </span>
          <h1 className="section-title">Settings & Customization</h1>
          <p className="section-subtitle" style={{ margin: 0 }}>
            Fine-tune your curiosity parameters, visual appearance, and AI discovery settings.
          </p>
        </div>

        {savedSuccess && (
          <div
            style={{
              padding: '12px 20px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(116, 189, 227, 0.2)',
              border: '1px solid var(--blue-deep)',
              color: 'var(--blue-deep)',
              fontWeight: 700,
              fontSize: '0.92rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '24px'
            }}
          >
            <Check size={18} />
            <span>Settings saved successfully!</span>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {/* 1. Appearance Section */}
          <div className="uiverse-card">
            <h3
              style={{
                fontSize: '1.25rem',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-primary)'
              }}
            >
              {isDark ? <Moon size={20} color="var(--blue-sky)" /> : <Sun size={20} color="var(--pink-raspberry)" />}
              <span>Appearance</span>
            </h3>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 0',
                borderTop: '1px solid var(--border-color)'
              }}
            >
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Theme Mode</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Switch between Rabbit Hole Light and Dark color spaces.
                </div>
              </div>
              <ThemeToggle showLabel={true} />
            </div>
          </div>

          {/* 2. Exploration Preferences */}
          <div className="uiverse-card">
            <h3
              style={{
                fontSize: '1.25rem',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-primary)'
              }}
            >
              <Sparkles size={20} color="var(--pink-raspberry)" />
              <span>Exploration Preferences</span>
            </h3>

            {/* AI Recommendations */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 0',
                borderTop: '1px solid var(--border-color)'
              }}
            >
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                  AI Connected Concept Synthesis
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Automatically generate interconnected concepts when entering unknown topics.
                </div>
              </div>
              <label className="uiverse-toggle-switch">
                <input
                  type="checkbox"
                  checked={aiRecommendations}
                  onChange={(e) => setAiRecommendations(e.target.checked)}
                />
                <span className="uiverse-toggle-slider" />
              </label>
            </div>

            {/* Auto Branching */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 0',
                borderTop: '1px solid var(--border-color)'
              }}
            >
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                  Automatic Next-Topic Suggestions
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Display the "Go deeper" cards immediately upon opening any node.
                </div>
              </div>
              <label className="uiverse-toggle-switch">
                <input
                  type="checkbox"
                  checked={autoBranching}
                  onChange={(e) => setAutoBranching(e.target.checked)}
                />
                <span className="uiverse-toggle-slider" />
              </label>
            </div>

            {/* Daily Discovery */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 0',
                borderTop: '1px solid var(--border-color)'
              }}
            >
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                  Daily Discovery Prompt
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Feature a curated curiosity inquiry with bonus XP on the home page.
                </div>
              </div>
              <label className="uiverse-toggle-switch">
                <input
                  type="checkbox"
                  checked={dailyDiscovery}
                  onChange={(e) => setDailyDiscovery(e.target.checked)}
                />
                <span className="uiverse-toggle-slider" />
              </label>
            </div>

            {/* Confetti celebration effects */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 0',
                borderTop: '1px solid var(--border-color)'
              }}
            >
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                  Interactive Celebration Animations
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Trigger particle effects on milestone achievements and quiz completions.
                </div>
              </div>
              <label className="uiverse-toggle-switch">
                <input
                  type="checkbox"
                  checked={confettiEffects}
                  onChange={(e) => setConfettiEffects(e.target.checked)}
                />
                <span className="uiverse-toggle-slider" />
              </label>
            </div>
          </div>

          {/* 3. Account Profile */}
          <div className="uiverse-card">
            <h3
              style={{
                fontSize: '1.25rem',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-primary)'
              }}
            >
              <User size={20} color="var(--blue-deep)" />
              <span>Explorer Account</span>
            </h3>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px 0',
                borderTop: '1px solid var(--border-color)'
              }}
            >
              <img
                src={user.avatar}
                alt={user.name}
                style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  {user.name}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {user.email} • {user.role}
                </div>
              </div>
            </div>
          </div>

          {/* Save Action */}
          <div style={{ textAlign: 'right' }}>
            <button
              onClick={handleSave}
              className="btn-uiverse-primary"
              style={{ padding: '12px 28px' }}
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
