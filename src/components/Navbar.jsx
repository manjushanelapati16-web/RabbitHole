import React, { useState, useEffect } from 'react';
import {
  Compass,
  Share2,
  Map,
  Award,
  Settings as SettingsIcon,
  Home,
  User,
  Menu,
  X,
  Sparkles,
  Search,
  LogOut
} from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/AuthContext';
import { useExploration } from '../context/ExplorationContext';

export default function Navbar({ activePage, setActivePage }) {
  const { user, logout } = useAuth();
  const { stats } = useExploration();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'graph', label: 'Knowledge Graph', icon: Share2 },
    { id: 'journey', label: 'My Journey', icon: Map },
    { id: 'progress', label: 'Progress', icon: Award },
    { id: 'settings', label: 'Settings', icon: SettingsIcon }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`rabbit-hole-navbar ${isScrolled ? 'glass-panel' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        background: isScrolled ? 'var(--bg-glass)' : 'transparent',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        transition: 'all 0.3s ease'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}
      >
        {/* Left: Logo */}
        <div onClick={() => handleNavClick('home')}>
          <Logo size="md" />
        </div>

        {/* Center / Desktop Navigation */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'var(--bg-secondary)',
            padding: '4px 6px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-color)'
          }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  background: isActive
                    ? 'linear-gradient(135deg, var(--blue-sky) 0%, var(--blue-deep) 100%)'
                    : 'transparent',
                  boxShadow: isActive ? '0 2px 10px var(--blue-glow)' : 'none',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* User XP Badge */}
          {user.isLoggedIn && (
            <div
              onClick={() => handleNavClick('progress')}
              title="Curiosity XP Points"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                background: 'var(--pink-light)',
                border: '1px solid var(--pink-soft)',
                borderRadius: 'var(--radius-full)',
                color: 'var(--pink-raspberry)',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <Sparkles size={14} />
              <span>{stats.xp.toLocaleString()} XP</span>
            </div>
          )}

          {/* User Profile or Sign In */}
          {user.isLoggedIn ? (
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setUserDropdownOpen((prev) => !prev)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '4px 10px 4px 4px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
                <span
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    maxWidth: 100,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {user.name.split(' ')[0]}
                </span>
              </button>

              {userDropdownOpen && (
                <div
                  className="glass-panel"
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '115%',
                    width: 210,
                    borderRadius: 'var(--radius-md)',
                    padding: '8px',
                    boxShadow: 'var(--shadow-lg)',
                    zIndex: 200
                  }}
                >
                  <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--border-color)' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{user.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{user.email}</div>
                  </div>
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      setActivePage('progress');
                    }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      textAlign: 'left'
                    }}
                  >
                    <Award size={16} /> Progress & Badges
                  </button>
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      setActivePage('settings');
                    }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      textAlign: 'left'
                    }}
                  >
                    <SettingsIcon size={16} /> Settings
                  </button>
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      logout();
                    }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.88rem',
                      color: 'var(--pink-raspberry)',
                      textAlign: 'left',
                      marginTop: '4px',
                      borderTop: '1px solid var(--border-color)'
                    }}
                  >
                    <LogOut size={16} /> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setActivePage('signin')}
              className="btn-uiverse-primary btn-uiverse-sm"
            >
              <User size={16} />
              <span>Sign In</span>
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              padding: '8px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className="glass-panel"
          style={{
            position: 'absolute',
            top: 'var(--nav-height)',
            left: 0,
            width: '100%',
            padding: '20px',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                  background: isActive
                    ? 'linear-gradient(135deg, var(--blue-sky), var(--blue-deep))'
                    : 'var(--bg-card)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
