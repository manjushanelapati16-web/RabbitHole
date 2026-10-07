import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ showLabel = false, className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className={`theme-toggle-wrapper ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
    >
      <label
        className="uiverse-toggle-switch"
        aria-label="Toggle Light and Dark Theme"
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        <input
          type="checkbox"
          checked={isDark}
          onChange={toggleTheme}
          aria-checked={isDark}
        />
        <span className="uiverse-toggle-slider">
          <Sun size={13} color="#D7EAF4" style={{ zIndex: 1, opacity: isDark ? 0.7 : 0 }} />
          <Moon size={13} color="#F3F8FA" style={{ zIndex: 1, opacity: isDark ? 0 : 0.7 }} />
        </span>
      </label>
      {showLabel && (
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </div>
  );
}
