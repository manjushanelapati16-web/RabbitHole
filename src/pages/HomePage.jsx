import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Shuffle,
  Compass,
  Share2,
  Cpu,
  Layers,
  Search,
  CheckCircle2,
  Flame,
  Award
} from 'lucide-react';
import { BlurText, SplitText, ScrollReveal, ShinyText, WordRotator } from '../animations/ReactBits';
import TopicSearch from '../components/TopicSearch';
import TopicCard from '../components/TopicCard';
import RabbitHolePath from '../components/RabbitHolePath';
import DailyDiscovery from '../components/DailyDiscovery';
import KnowledgeGraph from '../components/KnowledgeGraph';
import ProgressCard from '../components/ProgressCard';
import { TOPICS_DATA } from '../data/topics';
import { useExploration } from '../context/ExplorationContext';
import { aiService } from '../services/aiService';

export default function HomePage({ setActivePage }) {
  const { openTopic, currentPath } = useExploration();

  // Featured topics for popular section
  const popularTopics = [
    TOPICS_DATA['artificial-intelligence'],
    TOPICS_DATA['neural-networks'],
    TOPICS_DATA['computer-vision'],
    TOPICS_DATA['cybersecurity'],
    TOPICS_DATA['robotics'],
    TOPICS_DATA['quantum-computing']
  ];

  const handleRandomRabbitHole = () => {
    const randomTopic = aiService.getRandomRabbitHole();
    if (randomTopic) {
      openTopic(randomTopic.id);
    }
  };

  return (
    <div className="home-page-view">
      {/* 1. HERO SECTION */}
      <section
        style={{
          position: 'relative',
          paddingTop: '64px',
          paddingBottom: '96px',
          textAlign: 'center',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          {/* Eyebrow */}
          <div style={{ marginBottom: '20px' }}>
            <span className="section-eyebrow">
              <Sparkles size={14} color="var(--pink-raspberry)" />
              <span>ENTER THE RABBIT HOLE</span>
            </span>
          </div>

          {/* Main Hero Heading with React Bits Animation */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.4rem)',
              lineHeight: 1.15,
              maxWidth: '920px',
              margin: '0 auto 20px auto',
              color: 'var(--text-primary)'
            }}
          >
            Where will you{' '}
            <span className="highlight-hole">
              <BlurText text="fall" delay={90} />
            </span>{' '}
            today into{' '}
            <WordRotator
              words={[
                'Neural Networks?',
                'Quantum Realms?',
                'Computer Vision?',
                'Deep Learning?',
                'Autonomous Robotics?'
              ]}
            />
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.28rem)',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto 36px auto',
              color: 'var(--text-secondary)'
            }}
          >
            <SplitText
              text="Explore ideas, connect concepts, and discover where your curiosity takes you."
              delay={25}
            />
          </p>

          {/* Primary Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              marginBottom: '48px'
            }}
          >
            <button
              onClick={() => setActivePage('explore')}
              className="btn-uiverse-primary btn-uiverse-lg"
            >
              <span>Start Exploring</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={handleRandomRabbitHole}
              className="btn-uiverse-secondary btn-uiverse-lg"
            >
              <Shuffle size={18} color="var(--pink-raspberry)" />
              <span>Random Rabbit Hole</span>
            </button>
          </div>

          {/* Large Topic Search Box */}
          <div style={{ marginBottom: '20px' }}>
            <TopicSearch />
          </div>
        </div>
      </section>

      {/* 2. POPULAR RABBIT HOLES */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Curated Starting Points</span>
            <h2 className="section-title">Popular Rabbit Holes</h2>
            <p className="section-subtitle">
              Choose a gateway topic to begin descending through interconnected layers of knowledge.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {popularTopics.map((topic, index) => (
              <ScrollReveal key={topic.id} delay={index * 80}>
                <TopicCard topic={topic} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTINUE YOUR RABBIT HOLE (Interactive Path) */}
      <section
        style={{
          padding: '60px 0',
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border-color)',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <div className="container">
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
            <div>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--pink-raspberry)'
                }}
              >
                YOUR ACTIVE TRAIL
              </span>
              <h3 style={{ fontSize: '1.7rem', color: 'var(--text-primary)', marginTop: '2px' }}>
                Continue Your Rabbit Hole
              </h3>
            </div>

            <button
              onClick={() => setActivePage('journey')}
              className="btn-uiverse-secondary btn-uiverse-sm"
            >
              <span>View Full Journey</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div
            className="uiverse-card"
            style={{
              padding: '24px',
              background: 'var(--bg-card)'
            }}
          >
            <RabbitHolePath path={currentPath} />
          </div>
        </div>
      </section>

      {/* 4. TODAY'S RABBIT HOLE (Daily Discovery) */}
      <section className="section-padding">
        <div className="container">
          <ScrollReveal>
            <DailyDiscovery />
          </ScrollReveal>
        </div>
      </section>

      {/* 5. HOW RABBIT HOLE WORKS */}
      <section
        className="section-padding"
        style={{
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border-color)',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">The Curiosity Engine</span>
            <h2 className="section-title">How Rabbit Hole Works</h2>
            <p className="section-subtitle">
              Unlike a traditional encyclopedia or LMS, Rabbit Hole turns learning into an exploratory journey.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px'
            }}
          >
            {/* Step 1 */}
            <div className="uiverse-card">
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--blue-deep)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  marginBottom: '16px'
                }}
              >
                1
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Search</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Start with any concept you are curious about—from Machine Learning to Quantum Physics.
              </p>
            </div>

            {/* Step 2 */}
            <div className="uiverse-card">
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--pink-light)',
                  color: 'var(--pink-raspberry)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  marginBottom: '16px'
                }}
              >
                2
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Discover</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Read concise AI-synthesized explanations of why it matters and how it functions.
              </p>
            </div>

            {/* Step 3 */}
            <div className="uiverse-card">
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--blue-deep)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  marginBottom: '16px'
                }}
              >
                3
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Connect</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Explore the interactive knowledge graph and see how disciplines bridge into one another.
              </p>
            </div>

            {/* Step 4 */}
            <div className="uiverse-card">
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--pink-light)',
                  color: 'var(--pink-raspberry)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  marginBottom: '16px'
                }}
              >
                4
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Go Deeper</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Follow automatic branching recommendations and see how far down the Rabbit Hole you can go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KNOWLEDGE GRAPH PREVIEW */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Visual Connectivity</span>
            <h2 className="section-title">The Interactive Knowledge Graph</h2>
            <p className="section-subtitle">
              Every idea connects to the next. Click, zoom, and navigate the web of human thought.
            </p>
          </div>

          <ScrollReveal>
            <KnowledgeGraph compact={false} height={520} />
          </ScrollReveal>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <button
              onClick={() => setActivePage('graph')}
              className="btn-uiverse-secondary btn-uiverse-md"
            >
              <span>Open Full Knowledge Graph Screen</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. YOUR PROGRESS */}
      <section
        className="section-padding"
        style={{
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border-color)',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Track Your Curiosity</span>
            <h2 className="section-title">Your Progress & Milestones</h2>
            <p className="section-subtitle">
              Every node you inspect, quiz you solve, and trail you complete rewards your explorer journey.
            </p>
          </div>

          <ScrollReveal>
            <ProgressCard onExploreMore={() => setActivePage('explore')} />
          </ScrollReveal>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section
        style={{
          padding: '96px 0',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <div className="container-narrow">
          <ScrollReveal>
            <div
              className="uiverse-card"
              style={{
                padding: '56px 32px',
                background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)',
                border: '2px solid var(--blue-sky)'
              }}
            >
              <span className="section-eyebrow" style={{ marginBottom: '20px' }}>
                <Sparkles size={14} color="var(--pink-raspberry)" />
                <span>UNLIMITED HORIZONS</span>
              </span>

              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  marginBottom: '16px',
                  color: 'var(--text-primary)'
                }}
              >
                There's always another{' '}
                <span className="highlight-hole">rabbit hole</span>.
              </h2>

              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-secondary)',
                  maxWidth: '560px',
                  margin: '0 auto 36px auto'
                }}
              >
                Where will your questions lead next? Jump into thousands of connected nodes today.
              </p>

              <button
                onClick={() => setActivePage('explore')}
                className="btn-uiverse-primary btn-uiverse-lg"
              >
                <span>Start Exploring Now</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
