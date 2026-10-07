import React, { useState } from 'react';
import {
  X,
  Bookmark,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  Cpu,
  Layers,
  Share2,
  Check
} from 'lucide-react';
import { useExploration } from '../context/ExplorationContext';
import RabbitHolePath from './RabbitHolePath';

export default function TopicDetailModal() {
  const {
    activeTopic,
    setActiveTopic,
    stats,
    toggleSaveTopic,
    goDeeper,
    handleQuizAnswer,
    currentPath
  } = useExploration();

  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!activeTopic) return null;

  const isSaved = stats.savedTopics?.includes(activeTopic.id);

  const handleClose = () => {
    setActiveTopic(null);
    setSelectedQuizAnswer(null);
    setQuizSubmitted(false);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleQuizSubmit = () => {
    if (selectedQuizAnswer === null) return;
    const isCorrect = selectedQuizAnswer === activeTopic.quiz?.correctIndex;
    setQuizSubmitted(true);
    handleQuizAnswer(isCorrect);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 250,
        backgroundColor: 'rgba(16, 28, 36, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto'
      }}
      onClick={handleClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '90vh',
          borderRadius: 'var(--radius-xl)',
          background: 'var(--bg-card)',
          border: '1.5px solid var(--border-color)',
          boxShadow: 'var(--shadow-lg)',
          overflowY: 'auto',
          position: 'relative',
          padding: '36px',
          animation: 'modalEntrance 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--bg-secondary)',
                color: 'var(--blue-deep)',
                border: '1px solid var(--border-color)'
              }}
            >
              {activeTopic.category || 'Science'}
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--pink-light)',
                color: 'var(--pink-raspberry)',
                border: '1px solid var(--pink-soft)'
              }}
            >
              {activeTopic.difficulty || 'Intermediate'}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handleShare}
              title="Share Concept"
              style={{
                padding: '8px',
                borderRadius: '50%',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-secondary)'
              }}
            >
              {copiedLink ? <Check size={18} color="var(--blue-deep)" /> : <Share2 size={18} />}
            </button>

            <button
              onClick={() => toggleSaveTopic(activeTopic.id)}
              title={isSaved ? 'Saved to bookmarks' : 'Bookmark topic'}
              style={{
                padding: '8px',
                borderRadius: '50%',
                background: isSaved ? 'var(--pink-light)' : 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: isSaved ? 'var(--pink-raspberry)' : 'var(--text-secondary)'
              }}
            >
              <Bookmark size={18} fill={isSaved ? 'var(--pink-raspberry)' : 'none'} />
            </button>

            <button
              onClick={handleClose}
              title="Close modal"
              style={{
                padding: '8px',
                borderRadius: '50%',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Topic Title */}
        <h2
          style={{
            fontSize: '2.4rem',
            lineHeight: '1.2',
            color: 'var(--text-primary)',
            marginBottom: '14px'
          }}
        >
          {activeTopic.title}
        </h2>

        {/* Short AI-Generated Explanation */}
        <p
          style={{
            fontSize: '1.12rem',
            lineHeight: '1.65',
            color: 'var(--text-secondary)',
            marginBottom: '28px',
            borderLeft: '4px solid var(--pink-raspberry)',
            paddingLeft: '16px'
          }}
        >
          {activeTopic.shortDescription}
        </p>

        {/* Current Exploration Breadcrumb Path */}
        <div style={{ marginBottom: '32px' }}>
          <div
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--text-muted)',
              marginBottom: '8px'
            }}
          >
            Your Current Rabbit Hole Path
          </div>
          <RabbitHolePath path={currentPath} />
        </div>

        {/* Deep Dive Breakdown: Why It Matters & How It Works */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
            marginBottom: '32px'
          }}
        >
          {/* Why Does This Matter? */}
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--pink-raspberry)',
                fontWeight: 700,
                fontSize: '1.05rem',
                marginBottom: '10px'
              }}
            >
              <Lightbulb size={20} />
              <span>Why does this matter?</span>
            </div>
            <p style={{ fontSize: '0.94rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
              {activeTopic.whyItMatters}
            </p>
          </div>

          {/* How Does It Work? */}
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--blue-deep)',
                fontWeight: 700,
                fontSize: '1.05rem',
                marginBottom: '10px'
              }}
            >
              <Cpu size={20} />
              <span>How does it work?</span>
            </div>
            <p style={{ fontSize: '0.94rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
              {activeTopic.howItWorks}
            </p>
          </div>
        </div>

        {/* Real-World Applications */}
        {activeTopic.realWorldApplications && (
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              marginBottom: '32px'
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: '1.05rem',
                color: 'var(--text-primary)',
                marginBottom: '14px'
              }}
            >
              Where is it used in the real world?
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
              {activeTopic.realWorldApplications.map((app, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <CheckCircle2 size={16} color="var(--pink-raspberry)" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section: CONTINUE DOWN THE RABBIT HOLE (Go Deeper connected concepts) */}
        <div style={{ marginBottom: '36px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px'
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--pink-raspberry)'
                }}
              >
                AUTOMATIC DISCOVERY
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>
                Continue Down the Rabbit Hole
              </h3>
            </div>
            <span
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                fontWeight: 600
              }}
            >
              Choose your next branch ↓
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px'
            }}
          >
            {activeTopic.connectedConcepts?.map((concept) => (
              <div
                key={concept.id}
                onClick={() => goDeeper(concept.id)}
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1.5px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--pink-raspberry)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-pink)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--pink-raspberry)',
                      textTransform: 'uppercase',
                      marginBottom: '4px'
                    }}
                  >
                    Go Deeper
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: '1.02rem',
                      color: 'var(--text-primary)',
                      marginBottom: '6px'
                    }}
                  >
                    {concept.title}
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                    {concept.description}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '14px',
                    paddingTop: '10px',
                    borderTop: '1px solid var(--border-color)'
                  }}
                >
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    {concept.difficulty || 'Intermediate'}
                  </span>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--pink-raspberry)'
                    }}
                  >
                    <span>Fall in</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Check Curiosity Quiz */}
        {activeTopic.quiz && (
          <div
            style={{
              background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-card) 100%)',
              border: '1.5px solid var(--blue-sky)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HelpCircle size={18} color="var(--blue-deep)" />
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                  Quick Check: Test Your Curiosity
                </span>
              </div>
              <span
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--pink-raspberry)',
                  background: 'var(--pink-light)',
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                +100 XP
              </span>
            </div>

            <p style={{ fontSize: '0.96rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>
              {activeTopic.quiz.question}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
              {activeTopic.quiz.options.map((option, idx) => {
                const isSelected = selectedQuizAnswer === idx;
                const isCorrect = idx === activeTopic.quiz.correctIndex;
                let bg = 'var(--bg-card)';
                let border = 'var(--border-color)';

                if (quizSubmitted) {
                  if (isCorrect) {
                    bg = 'rgba(116, 189, 227, 0.2)';
                    border = 'var(--blue-deep)';
                  } else if (isSelected) {
                    bg = 'var(--pink-light)';
                    border = 'var(--pink-raspberry)';
                  }
                } else if (isSelected) {
                  bg = 'var(--bg-secondary)';
                  border = 'var(--blue-sky)';
                }

                return (
                  <button
                    key={idx}
                    disabled={quizSubmitted}
                    onClick={() => setSelectedQuizAnswer(idx)}
                    style={{
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      background: bg,
                      border: `1.5px solid ${border}`,
                      textAlign: 'left',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                      cursor: quizSubmitted ? 'default' : 'pointer',
                      transition: 'all var(--transition-fast)'
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {!quizSubmitted ? (
              <button
                disabled={selectedQuizAnswer === null}
                onClick={handleQuizSubmit}
                className="btn-uiverse-primary btn-uiverse-sm"
              >
                Submit Answer
              </button>
            ) : (
              <div
                style={{
                  fontSize: '0.88rem',
                  color:
                    selectedQuizAnswer === activeTopic.quiz.correctIndex
                      ? 'var(--blue-deep)'
                      : 'var(--pink-raspberry)',
                  fontWeight: 600
                }}
              >
                {selectedQuizAnswer === activeTopic.quiz.correctIndex
                  ? `✨ Correct! ${activeTopic.quiz.explanation}`
                  : `Not quite. ${activeTopic.quiz.explanation}`}
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes modalEntrance {
          from { opacity: 0; transform: scale(0.96) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
