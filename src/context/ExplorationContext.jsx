import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { aiService } from '../services/aiService';
import { INITIAL_USER_STATS, INITIAL_JOURNEY_HISTORY, ACHIEVEMENTS } from '../data/achievements';

const ExplorationContext = createContext();

export function ExplorationProvider({ children }) {
  // Stats
  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem('rabbithole_stats');
    return saved ? JSON.parse(saved) : INITIAL_USER_STATS;
  });

  // Current Active Topic Modal/View
  const [activeTopic, setActiveTopic] = useState(null);
  const [isLoadingTopic, setIsLoadingTopic] = useState(false);

  // Active Exploration Rabbit Hole Path
  const [currentPath, setCurrentPath] = useState([
    { id: 'machine-learning', title: 'Machine Learning', level: 1 },
    { id: 'supervised-learning', title: 'Supervised Learning', level: 2 },
    { id: 'neural-networks', title: 'Neural Networks', level: 3 },
    { id: 'cnn', title: 'CNN', level: 4 },
    { id: 'computer-vision', title: 'Computer Vision', level: 5 },
    { id: 'object-detection', title: 'Object Detection', level: 6 }
  ]);

  // Achievements
  const [achievements, setAchievements] = useState(() => {
    const saved = localStorage.getItem('rabbithole_achievements');
    return saved ? JSON.parse(saved) : ACHIEVEMENTS;
  });

  // Journey History
  const [journeyHistory, setJourneyHistory] = useState(() => {
    const saved = localStorage.getItem('rabbithole_journeys');
    return saved ? JSON.parse(saved) : INITIAL_JOURNEY_HISTORY;
  });

  // Persist stats
  useEffect(() => {
    localStorage.setItem('rabbithole_stats', JSON.stringify(stats));
  }, [stats]);

  // Persist achievements
  useEffect(() => {
    localStorage.setItem('rabbithole_achievements', JSON.stringify(achievements));
  }, [achievements]);

  // Persist journey history
  useEffect(() => {
    localStorage.setItem('rabbithole_journeys', JSON.stringify(journeyHistory));
  }, [journeyHistory]);

  /**
   * Open & Explore a topic
   */
  const openTopic = async (topicIdOrQuery, customPathReset = false) => {
    setIsLoadingTopic(true);
    try {
      const topic = await aiService.getTopicDetails(topicIdOrQuery);
      if (topic) {
        setActiveTopic(topic);

        // Update Path
        if (customPathReset) {
          setCurrentPath([{ id: topic.id, title: topic.title, level: 1 }]);
        } else {
          setCurrentPath((prev) => {
            const exists = prev.some((p) => p.id === topic.id);
            if (exists) return prev;
            return [...prev, { id: topic.id, title: topic.title, level: prev.length + 1 }];
          });
        }

        // Increment stats
        setStats((prev) => ({
          ...prev,
          topicsExplored: prev.topicsExplored + 1,
          xp: prev.xp + 25,
          conceptsDiscovered: prev.conceptsDiscovered + 1
        }));
      }
    } catch (err) {
      console.error('Failed to open topic:', err);
    } finally {
      setIsLoadingTopic(false);
    }
  };

  /**
   * Go Deeper into a connected concept
   */
  const goDeeper = async (conceptId) => {
    await openTopic(conceptId, false);
    triggerCelebrationEffect('subtle');
  };

  /**
   * Reset or start a new rabbit hole exploration
   */
  const startNewRabbitHole = async (startTopicId) => {
    await openTopic(startTopicId, true);
  };

  /**
   * Toggle Saved Topic Bookmark
   */
  const toggleSaveTopic = (topicId) => {
    setStats((prev) => {
      const isSaved = prev.savedTopics.includes(topicId);
      const updatedSaved = isSaved
        ? prev.savedTopics.filter((id) => id !== topicId)
        : [...prev.savedTopics, topicId];
      return { ...prev, savedTopics: updatedSaved };
    });
  };

  /**
   * Complete Interactive Quiz
   */
  const handleQuizAnswer = (isCorrect) => {
    if (isCorrect) {
      setStats((prev) => ({
        ...prev,
        xp: prev.xp + 100
      }));
      triggerCelebrationEffect('full');
    }
  };

  /**
   * Trigger Confetti Celebration
   */
  const triggerCelebrationEffect = (type = 'subtle') => {
    if (type === 'full') {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#74BDE3', '#6BA9D6', '#B72C5E', '#E8A4BA', '#4F91C7']
      });
    } else {
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.7 },
        colors: ['#74BDE3', '#E8A4BA', '#B72C5E']
      });
    }
  };

  return (
    <ExplorationContext.Provider
      value={{
        stats,
        setStats,
        activeTopic,
        setActiveTopic,
        isLoadingTopic,
        currentPath,
        setCurrentPath,
        achievements,
        journeyHistory,
        openTopic,
        goDeeper,
        startNewRabbitHole,
        toggleSaveTopic,
        handleQuizAnswer,
        triggerCelebrationEffect
      }}
    >
      {children}
    </ExplorationContext.Provider>
  );
}

export function useExploration() {
  return useContext(ExplorationContext);
}
