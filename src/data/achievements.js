/**
 * Rabbit Hole User Achievements & Gamification Badges
 */

export const ACHIEVEMENTS = [
  {
    id: 'first-rabbit-hole',
    title: 'First Rabbit Hole',
    description: 'Began your first exploration journey into the unknown.',
    icon: 'Compass',
    unlocked: true,
    unlockedAt: '2 days ago',
    category: 'Discovery',
    color: 'blue'
  },
  {
    id: 'curious-mind',
    title: 'Curious Mind',
    description: 'Explored 10 interconnected concepts in a single session.',
    icon: 'Sparkles',
    unlocked: true,
    unlockedAt: 'Yesterday',
    category: 'Exploration',
    color: 'pink'
  },
  {
    id: 'deep-diver',
    title: 'Deep Diver',
    description: 'Descended 5 levels deep into a connected Rabbit Hole chain.',
    icon: 'Layers',
    unlocked: true,
    unlockedAt: 'Today',
    category: 'Mastery',
    color: 'blue'
  },
  {
    id: 'knowledge-explorer',
    title: 'Knowledge Explorer',
    description: 'Traversed across 4 different scientific categories.',
    icon: 'Map',
    unlocked: true,
    unlockedAt: 'Today',
    category: 'Breadth',
    color: 'pink'
  },
  {
    id: 'seven-day-explorer',
    title: '7-Day Explorer',
    description: 'Maintained a curiosity streak for 7 consecutive days.',
    icon: 'Flame',
    unlocked: true,
    unlockedAt: 'Today',
    category: 'Consistency',
    color: 'pink'
  },
  {
    id: 'master-of-nodes',
    title: 'Master of Nodes',
    description: 'Interacted with over 50 nodes in the interactive Knowledge Graph.',
    icon: 'Share2',
    unlocked: false,
    progress: 74,
    category: 'Graph',
    color: 'blue'
  },
  {
    id: 'quantum-leaper',
    title: 'Quantum Leaper',
    description: 'Completed both the AI and Quantum Computing depth tracks.',
    icon: 'Atom',
    unlocked: false,
    progress: 60,
    category: 'Mastery',
    color: 'blue'
  }
];

export const INITIAL_USER_STATS = {
  topicsExplored: 127,
  rabbitHolesCompleted: 8,
  currentStreak: 12,
  xp: 2450,
  level: 6,
  levelTitle: 'Senior Curiosity Voyager',
  nextLevelXp: 3000,
  conceptsDiscovered: 48,
  savedTopics: ['neural-networks', 'transformers', 'quantum-computing', 'object-detection']
};

export const INITIAL_JOURNEY_HISTORY = [
  {
    id: 'journey-1',
    rootTopic: 'Machine Learning',
    timestamp: 'Just now',
    path: [
      { id: 'machine-learning', title: 'Machine Learning', level: 1 },
      { id: 'supervised-learning', title: 'Supervised Learning', level: 2 },
      { id: 'neural-networks', title: 'Neural Networks', level: 3 },
      { id: 'cnn', title: 'CNN', level: 4 },
      { id: 'computer-vision', title: 'Computer Vision', level: 5 },
      { id: 'object-detection', title: 'Object Detection', level: 6 }
    ],
    status: 'In Progress'
  },
  {
    id: 'journey-2',
    rootTopic: 'Artificial Intelligence',
    timestamp: 'Yesterday',
    path: [
      { id: 'artificial-intelligence', title: 'Artificial Intelligence', level: 1 },
      { id: 'neural-networks', title: 'Neural Networks', level: 2 },
      { id: 'transformers', title: 'Transformers', level: 3 },
      { id: 'generative-ai', title: 'Generative AI', level: 4 }
    ],
    status: 'Completed'
  },
  {
    id: 'journey-3',
    rootTopic: 'Quantum Computing',
    timestamp: '3 days ago',
    path: [
      { id: 'quantum-computing', title: 'Quantum Computing', level: 1 },
      { id: 'cybersecurity', title: 'Cybersecurity', level: 2 }
    ],
    status: 'Completed'
  }
];
