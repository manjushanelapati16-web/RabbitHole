import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TopicDetailModal from './components/TopicDetailModal';
import ThreeBackground from './animations/ThreeBackground';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import KnowledgeGraphPage from './pages/KnowledgeGraphPage';
import MyJourneyPage from './pages/MyJourneyPage';
import ProgressPage from './pages/ProgressPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import SettingsPage from './pages/SettingsPage';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ExplorationProvider } from './context/ExplorationContext';

function MainApp() {
  const [activePage, setActivePage] = useState('home');
  const { isDark } = useTheme();

  // Scroll to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} />;
      case 'explore':
        return <ExplorePage />;
      case 'graph':
        return <KnowledgeGraphPage />;
      case 'journey':
        return <MyJourneyPage />;
      case 'progress':
        return <ProgressPage />;
      case 'settings':
        return <SettingsPage />;
      case 'signin':
        return <SignInPage setActivePage={setActivePage} />;
      case 'signup':
        return <SignUpPage setActivePage={setActivePage} />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div
      className="rabbit-hole-application-root"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      {/* 1. Real ThreeUI WebGL Animated Organic Fluid/Wave Atmosphere */}
      <ThreeBackground isDark={isDark} opacity={isDark ? 0.7 : 0.5} />

      {/* 2. Top Header Navigation */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* 3. Main Dynamic Content View */}
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {renderActivePage()}
      </main>

      {/* 4. Interactive Topic Exploration Modal (The Deep Dive Drawer) */}
      <TopicDetailModal />

      {/* 5. Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ExplorationProvider>
          <MainApp />
        </ExplorationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
