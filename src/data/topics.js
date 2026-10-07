/**
 * Rabbit Hole Topics & Knowledge Graph Dataset
 * Structured for interactive exploration and future AI backend integration
 */

export const TOPICS_DATA = {
  'artificial-intelligence': {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    category: 'AI',
    shortDescription: 'The simulation of human intelligence processes by machines, especially computer systems.',
    difficulty: 'Beginner',
    readTime: '3 min',
    icon: 'Brain',
    whyItMatters: 'AI is fundamentally reshaping every human endeavor—from healthcare diagnostics and climate modeling to creative arts, automation, and global problem solving.',
    howItWorks: 'Modern AI combines vast data streams with statistical learning algorithms, iterative optimization, and neural representations to perceive patterns, synthesize inferences, and make autonomous decisions.',
    realWorldApplications: [
      'Autonomous navigation & self-driving vehicles',
      'Personalized medicine and genomic drug discovery',
      'Real-time automated language translation',
      'Algorithmic climate modeling & renewable grid optimization'
    ],
    rabbitHolePath: [
      'Artificial Intelligence',
      'Machine Learning',
      'Supervised Learning',
      'Neural Networks',
      'CNN',
      'Computer Vision',
      'Object Detection'
    ],
    connectedConcepts: [
      { id: 'machine-learning', title: 'Machine Learning', description: 'Algorithms that learn patterns directly from empirical data without hardcoded rules.', difficulty: 'Beginner' },
      { id: 'neural-networks', title: 'Neural Networks', description: 'Layered computational networks inspired by the human biological brain.', difficulty: 'Intermediate' },
      { id: 'generative-ai', title: 'Generative AI', description: 'Models that produce novel text, imagery, audio, and synthetic media.', difficulty: 'Intermediate' },
      { id: 'robotics', title: 'Robotics', description: 'Physical embodiments of AI acting in dynamic physical environments.', difficulty: 'Intermediate' }
    ],
    graphConnections: ['machine-learning', 'neural-networks', 'generative-ai', 'robotics'],
    quiz: {
      question: 'What distinguishes modern AI from classical rule-based software?',
      options: [
        'It learns statistical patterns from data rather than executing fixed hardcoded rules',
        'It requires no electricity to compute',
        'It cannot ever make a prediction error',
        'It runs only on analog hardware'
      ],
      correctIndex: 0,
      explanation: 'Modern AI algorithms generalize patterns directly from data through iterative mathematical optimization.'
    }
  },

  'machine-learning': {
    id: 'machine-learning',
    title: 'Machine Learning',
    category: 'AI',
    shortDescription: 'The core branch of AI focused on building systems that learn and adapt from data without explicit programming.',
    difficulty: 'Beginner',
    readTime: '4 min',
    icon: 'Cpu',
    whyItMatters: 'Machine Learning transforms massive raw datasets into actionable insights, automated decisioning, and predictive superpowers.',
    howItWorks: 'By feeding features into loss functions and optimizing mathematical weights through gradient descent, models minimize errors on unseen test data.',
    realWorldApplications: [
      'Credit card fraud detection in milliseconds',
      'Recommendation engines (Spotify, Netflix, YouTube)',
      'Customer churn forecasting and predictive logistics',
      'Spam filtering and sentiment classification'
    ],
    rabbitHolePath: [
      'Machine Learning',
      'Supervised Learning',
      'Neural Networks',
      'Backpropagation',
      'Transformers'
    ],
    connectedConcepts: [
      { id: 'supervised-learning', title: 'Supervised Learning', description: 'Learning from labeled input-output pairs to predict target values.', difficulty: 'Beginner' },
      { id: 'neural-networks', title: 'Neural Networks', description: 'Deep interconnected architectures solving non-linear problems.', difficulty: 'Intermediate' },
      { id: 'data-science', title: 'Data Science', description: 'Extracting knowledge and actionable insights through statistical analysis.', difficulty: 'Beginner' },
      { id: 'deep-learning', title: 'Deep Learning', description: 'Multi-layered representation learning through deep architectures.', difficulty: 'Intermediate' }
    ],
    graphConnections: ['artificial-intelligence', 'supervised-learning', 'neural-networks', 'data-science'],
    quiz: {
      question: 'What does a loss function quantify during machine learning training?',
      options: [
        'The monetary cost of GPU hours',
        'The mathematical discrepancy between model predictions and ground-truth values',
        'The amount of RAM deleted during training',
        'The speed of internet network packets'
      ],
      correctIndex: 1,
      explanation: 'The loss function measures error so optimization algorithms can tune model weights in the right direction.'
    }
  },

  'supervised-learning': {
    id: 'supervised-learning',
    title: 'Supervised Learning',
    category: 'AI',
    shortDescription: 'A machine learning paradigm where models are trained on datasets containing explicit input features and ground-truth target labels.',
    difficulty: 'Beginner',
    readTime: '3 min',
    icon: 'CheckCircle',
    whyItMatters: 'Most deployed commercial AI systems rely on supervised learning because ground-truth labels provide clear performance benchmarks and predictable behavior.',
    howItWorks: 'The algorithm compares its predictions against ground truth labels, calculates error, and iteratively adjusts internal parameters to minimize discrepancy across samples.',
    realWorldApplications: [
      'Email spam classification (Spam vs. Not Spam)',
      'House price estimation from square footage and location',
      'Medical scan tumor identification with radiologist labels',
      'Voice recognition and phoneme transcription'
    ],
    rabbitHolePath: [
      'Supervised Learning',
      'Neural Networks',
      'Backpropagation',
      'Activation Functions'
    ],
    connectedConcepts: [
      { id: 'neural-networks', title: 'Neural Networks', description: 'Complex non-linear functional approximators.', difficulty: 'Intermediate' },
      { id: 'machine-learning', title: 'Machine Learning', description: 'The overarching parent discipline.', difficulty: 'Beginner' },
      { id: 'backpropagation', title: 'Backpropagation', description: 'Calculates gradients across layers for weight updates.', difficulty: 'Intermediate' }
    ],
    graphConnections: ['machine-learning', 'neural-networks', 'backpropagation'],
    quiz: {
      question: 'What is essential for training a supervised learning model?',
      options: [
        'Labeled training examples (inputs paired with ground truth outputs)',
        'Unlabeled web logs only',
        'Hardware with liquid nitrogen cooling',
        'A quantum entanglement sensor'
      ],
      correctIndex: 0,
      explanation: 'Supervised learning strictly requires labeled input-output pairs to calculate prediction errors.'
    }
  },

  'neural-networks': {
    id: 'neural-networks',
    title: 'Neural Networks',
    category: 'AI',
    shortDescription: 'Computational architectures comprised of interconnected artificial neurons that learn hierarchical representations of complex data.',
    difficulty: 'Intermediate',
    readTime: '5 min',
    icon: 'Network',
    whyItMatters: 'Neural networks are the foundational engine behind all modern breakthroughs in Large Language Models, vision systems, speech synthesis, and generative diffusion.',
    howItWorks: 'Inputs pass through weighted linear combinations, followed by non-linear activation functions across multiple hidden layers, mapping complex input spaces to outputs.',
    realWorldApplications: [
      'High-precision facial recognition & biometric security',
      'Speech-to-text and expressive synthetic voice generation',
      'Automated medical pathology image diagnosis',
      'Algorithmic trading and financial market anomaly detection'
    ],
    rabbitHolePath: [
      'Neural Networks',
      'Backpropagation',
      'Activation Functions',
      'CNN',
      'Transformers'
    ],
    connectedConcepts: [
      { id: 'backpropagation', title: 'Backpropagation', description: 'The mathematical algorithm for propagating error gradients backward.', difficulty: 'Intermediate' },
      { id: 'activation-functions', title: 'Activation Functions', description: 'Non-linear mathematical thresholds giving networks expressive power.', difficulty: 'Intermediate' },
      { id: 'cnn', title: 'Convolutional Neural Networks (CNN)', description: 'Specialized spatial filters for computer vision.', difficulty: 'Intermediate' },
      { id: 'transformers', title: 'Transformers', description: 'Self-attention based architectures dominating language and multimodal AI.', difficulty: 'Advanced' }
    ],
    graphConnections: ['machine-learning', 'supervised-learning', 'backpropagation', 'activation-functions', 'cnn', 'transformers'],
    quiz: {
      question: 'Why are non-linear activation functions crucial inside neural networks?',
      options: [
        'They prevent the network from collapsing into a simple linear regression model',
        'They speed up the cooling fan of the CPU',
        'They reduce file size on disk',
        'They automatically delete noisy training rows'
      ],
      correctIndex: 0,
      explanation: 'Without non-linearity, stacking multiple layers equates mathematically to just one single linear transformation.'
    }
  },

  'backpropagation': {
    id: 'backpropagation',
    title: 'Backpropagation',
    category: 'Computer Science',
    shortDescription: 'The core calculus-based algorithm used to compute gradients of the loss function with respect to every weight in a neural network.',
    difficulty: 'Intermediate',
    readTime: '4 min',
    icon: 'GitPullRequest',
    whyItMatters: 'Without backpropagation, training deep neural networks with millions or billions of parameters in reasonable time would be mathematically intractable.',
    howItWorks: 'Using the multivariable chain rule from calculus, backprop starts at the loss output and works backward through each layer, efficiently calculating partial derivatives.',
    realWorldApplications: [
      'Training multi-billion parameter foundation models',
      'Optimizing deep reinforcement learning agents in simulated physics',
      'Fine-tuning vision backbones for edge devices'
    ],
    rabbitHolePath: [
      'Backpropagation',
      'Activation Functions',
      'Gradient Descent',
      'Optimization'
    ],
    connectedConcepts: [
      { id: 'activation-functions', title: 'Activation Functions', description: 'Mathematical functions whose derivatives are multiplied during backprop.', difficulty: 'Intermediate' },
      { id: 'neural-networks', title: 'Neural Networks', description: 'The computational structures optimized by backpropagation.', difficulty: 'Intermediate' },
      { id: 'cnn', title: 'CNN', description: 'Convolutional networks trained via 2D spatial backprop.', difficulty: 'Intermediate' }
    ],
    graphConnections: ['neural-networks', 'activation-functions', 'supervised-learning'],
    quiz: {
      question: 'Which mathematical theorem is the bedrock of backpropagation?',
      options: [
        'The Chain Rule of Calculus',
        'Pythagorean Theorem',
        'Fermat’s Last Theorem',
        'Euler’s Polyhedral Formula'
      ],
      correctIndex: 0,
      explanation: 'The chain rule enables recursive calculation of derivatives of composite functions from output layer back to input.'
    }
  },

  'activation-functions': {
    id: 'activation-functions',
    title: 'Activation Functions',
    category: 'Mathematics',
    shortDescription: 'Non-linear mathematical gates applied to a neuron’s output, determining whether and how strongly the neuron should fire.',
    difficulty: 'Intermediate',
    readTime: '3 min',
    icon: 'Activity',
    whyItMatters: 'They bestow neural networks with the universal approximation ability to model intricate curves, boundaries, and high-dimensional manifolds.',
    howItWorks: 'Functions like ReLU (max(0, x)), GELU, Sigmoid, and Swish inject non-linearities and influence gradient flow during training.',
    realWorldApplications: [
      'Vanishing gradient mitigation in deep transformer stacks',
      'Binary & multi-class probability squashing (Sigmoid / Softmax)',
      'Sparse feature activation for computational efficiency'
    ],
    rabbitHolePath: [
      'Activation Functions',
      'ReLU & GELU',
      'Non-Linear Dynamics',
      'Gradient Flow'
    ],
    connectedConcepts: [
      { id: 'neural-networks', title: 'Neural Networks', description: 'Networks utilizing activation functions at each layer.', difficulty: 'Intermediate' },
      { id: 'backpropagation', title: 'Backpropagation', description: 'Requires differentiable activation functions.', difficulty: 'Intermediate' },
      { id: 'cnn', title: 'CNN', description: 'Heavily utilizes ReLU and its variants.', difficulty: 'Intermediate' }
    ],
    graphConnections: ['neural-networks', 'backpropagation', 'cnn'],
    quiz: {
      question: 'What is the formula for the popular ReLU activation function?',
      options: [
        'f(x) = max(0, x)',
        'f(x) = 1 / (1 + e^-x)',
        'f(x) = x^2 + 1',
        'f(x) = sin(x)'
      ],
      correctIndex: 0,
      explanation: 'ReLU outputs x if positive, and 0 otherwise, providing fast computation and avoiding vanishing gradients for positive inputs.'
    }
  },

  'cnn': {
    id: 'cnn',
    title: 'Convolutional Neural Networks (CNN)',
    category: 'AI',
    shortDescription: 'A specialized class of deep neural networks designed for processing grid-structured data like images through learnable spatial filters.',
    difficulty: 'Intermediate',
    readTime: '5 min',
    icon: 'Grid',
    whyItMatters: 'CNNs sparked the modern Deep Learning revolution (AlexNet 2012) and made high-speed, automated visual perception possible.',
    howItWorks: 'Kernels slide across pixel matrices performing element-wise multiplications, capturing local spatial hierarchies (edges → textures → object parts).',
    realWorldApplications: [
      'CT, MRI & X-Ray radiology lesion detection',
      'Automotive lane tracking & pedestrian detection',
      'Satellite imagery crop health & forest fire monitoring',
      'Visual search & reverse image lookup'
    ],
    rabbitHolePath: [
      'CNN',
      'Computer Vision',
      'Object Detection',
      'YOLO Architecture',
      'Autonomous Systems'
    ],
    connectedConcepts: [
      { id: 'computer-vision', title: 'Computer Vision', description: 'The overarching visual perception field.', difficulty: 'Intermediate' },
      { id: 'object-detection', title: 'Object Detection', description: 'Pinpointing and classifying multiple objects in scenes.', difficulty: 'Advanced' },
      { id: 'neural-networks', title: 'Neural Networks', description: 'The foundational neural paradigm.', difficulty: 'Intermediate' }
    ],
    graphConnections: ['neural-networks', 'computer-vision', 'object-detection'],
    quiz: {
      question: 'What property makes CNNs effective for image processing?',
      options: [
        'Translation equivariance & spatial parameter sharing',
        'Requirement of zero training parameters',
        'Random guessing at each layer',
        'Inability to process 2D matrices'
      ],
      correctIndex: 0,
      explanation: 'Spatial filters share weights across the entire image, recognizing patterns regardless of where they appear.'
    }
  },

  'computer-vision': {
    id: 'computer-vision',
    title: 'Computer Vision',
    category: 'AI',
    shortDescription: 'An interdisciplinary field that trains computers to interpret, understand, and extract high-level meaning from visual inputs.',
    difficulty: 'Intermediate',
    readTime: '4 min',
    icon: 'Eye',
    whyItMatters: 'Vision accounts for over 80% of human sensory perception; conferring sight upon machines allows them to operate safely and intelligently in our visual world.',
    howItWorks: 'Combines digital image processing, deep neural backbones, spatial segmentation algorithms, and 3D reconstruction techniques.',
    realWorldApplications: [
      'Self-driving car situational awareness (Waymo, Tesla)',
      'Augmented Reality spatial mapping (Apple Vision Pro, HoloLens)',
      'Manufacturing defect inspection at 1000 items/minute',
      'Sports broadcast real-time ball and player tracking'
    ],
    rabbitHolePath: [
      'Computer Vision',
      'Object Detection',
      'Semantic Segmentation',
      'Spatial AI & 3D Gaussian Splatting'
    ],
    connectedConcepts: [
      { id: 'cnn', title: 'CNN', description: 'Key architecture powering visual feature extraction.', difficulty: 'Intermediate' },
      { id: 'object-detection', title: 'Object Detection', description: 'Locating objects with bounding boxes.', difficulty: 'Advanced' },
      { id: 'robotics', title: 'Robotics', description: 'Vision-guided physical manipulators and drones.', difficulty: 'Intermediate' }
    ],
    graphConnections: ['cnn', 'object-detection', 'robotics', 'artificial-intelligence'],
    quiz: {
      question: 'What is the goal of semantic segmentation in computer vision?',
      options: [
        'Classifying every individual pixel in an image to a category label',
        'Compressing JPEG files to 1 byte',
        'Inverting color channels from RGB to BGR',
        'Calculating audio frequencies'
      ],
      correctIndex: 0,
      explanation: 'Semantic segmentation assigns a class label to every pixel, generating fine-grained spatial masks.'
    }
  },

  'object-detection': {
    id: 'object-detection',
    title: 'Object Detection',
    category: 'AI',
    shortDescription: 'The computer vision task of identifying instances of semantic objects of certain classes and localizing their positions via bounding boxes.',
    difficulty: 'Advanced',
    readTime: '5 min',
    icon: 'Crosshair',
    whyItMatters: 'Crucial for real-time robotic interaction, security cameras, and vehicle safety where knowing "what" is in the scene is meaningless without knowing "where".',
    howItWorks: 'Detectors like YOLO and Faster R-CNN predict bounding box coordinates (x, y, width, height), class probabilities, and confidence scores in single or two-stage passes.',
    realWorldApplications: [
      'Pedestrian and vehicle collision avoidance systems',
      'Drone wildlife tracking and anti-poaching surveillance',
      'Automated cashierless checkout stores (Amazon Go)',
      'Airport baggage security contraband detection'
    ],
    rabbitHolePath: [
      'Object Detection',
      'Real-Time Inference (YOLO)',
      'Spatial Tracking',
      'Edge TPU Hardware'
    ],
    connectedConcepts: [
      { id: 'computer-vision', title: 'Computer Vision', description: 'The parent field of visual understanding.', difficulty: 'Intermediate' },
      { id: 'cnn', title: 'CNN', description: 'Backbones used for feature maps.', difficulty: 'Intermediate' },
      { id: 'robotics', title: 'Robotics', description: 'Consumes bounding boxes for motor planning.', difficulty: 'Intermediate' }
    ],
    graphConnections: ['computer-vision', 'cnn', 'robotics'],
    quiz: {
      question: 'What acronym stands for "You Only Look Once" in real-time object detection?',
      options: [
        'YOLO',
        'YOLOv-AI',
        'YOLA',
        'YOLO-Net'
      ],
      correctIndex: 0,
      explanation: 'YOLO frames object detection as a single regression problem straight from image pixels to bounding box coordinates.'
    }
  },

  'transformers': {
    id: 'transformers',
    title: 'Transformers',
    category: 'AI',
    shortDescription: 'The breakthrough neural architecture utilizing self-attention mechanisms to process sequential and multimodal data in parallel.',
    difficulty: 'Advanced',
    readTime: '6 min',
    icon: 'Sparkles',
    whyItMatters: 'Transformers superseded RNNs and sparked the modern Generative AI explosion, powering GPT-4, Claude, Gemini, and diffusion models.',
    howItWorks: 'Instead of recurrent step-by-step loops, Transformers compute query-key-value attention dot-products between all tokens simultaneously with positional encodings.',
    realWorldApplications: [
      'Large Language Models and conversational agents',
      'Protein folding prediction (AlphaFold 2 & 3)',
      'Vision Transformers (ViT) outperforming CNNs on mega datasets',
      'Code generation & automated programming'
    ],
    rabbitHolePath: [
      'Transformers',
      'Self-Attention Mechanism',
      'Generative AI',
      'Reinforcement Learning from Human Feedback (RLHF)'
    ],
    connectedConcepts: [
      { id: 'neural-networks', title: 'Neural Networks', description: 'The foundation of Transformer architecture.', difficulty: 'Intermediate' },
      { id: 'generative-ai', title: 'Generative AI', description: 'The primary application paradigm.', difficulty: 'Intermediate' },
      { id: 'quantum-computing', title: 'Quantum Computing', description: 'Potential hardware accelerator for attention matrices.', difficulty: 'Advanced' }
    ],
    graphConnections: ['neural-networks', 'generative-ai', 'machine-learning'],
    quiz: {
      question: 'What seminal 2017 paper introduced the Transformer architecture?',
      options: [
        '"Attention Is All You Need"',
        '"Deep Residual Learning for Image Recognition"',
        '"Computing Machinery and Intelligence"',
        '"A Mathematical Theory of Communication"'
      ],
      correctIndex: 0,
      explanation: 'Vaswani et al. published "Attention Is All You Need" from Google Research, introducing self-attention.'
    }
  },

  'generative-ai': {
    id: 'generative-ai',
    title: 'Generative AI',
    category: 'AI',
    shortDescription: 'AI systems capable of generating novel, high-quality text, images, music, code, and synthetic 3D worlds from natural language prompts.',
    difficulty: 'Intermediate',
    readTime: '4 min',
    icon: 'Palette',
    whyItMatters: 'Democratizes creative creation, accelerates software engineering, and enables human-machine collaboration at an unprecedented scale.',
    howItWorks: 'Trained on massive web-scale datasets via next-token prediction or denoising diffusion probabilistics, learning the underlying distribution of human culture.',
    realWorldApplications: [
      'Co-pilot software development and code synthesis',
      'Cinematic video generation from prompts (Sora, Runway)',
      'Automated marketing content & brand voice generation',
      'Synthetic dataset generation for training other models'
    ],
    rabbitHolePath: [
      'Generative AI',
      'Diffusion Models',
      'Latent Space Exploration',
      'Agentic Workflows'
    ],
    connectedConcepts: [
      { id: 'transformers', title: 'Transformers', description: 'Underlying language backbone.', difficulty: 'Advanced' },
      { id: 'artificial-intelligence', title: 'Artificial Intelligence', description: 'The umbrella field.', difficulty: 'Beginner' },
      { id: 'cybersecurity', title: 'Cybersecurity', description: 'Defending against AI deepfakes and automated exploits.', difficulty: 'Intermediate' }
    ],
    graphConnections: ['transformers', 'artificial-intelligence', 'cybersecurity'],
    quiz: {
      question: 'What process do Diffusion Models use to generate realistic images?',
      options: [
        'Iteratively removing gaussian noise from a random latent canvas',
        'Stitching random Google image search results',
        'Copying PNG files byte-by-byte',
        'Drawing vector lines on an SVG canvas'
      ],
      correctIndex: 0,
      explanation: 'Diffusion models learn the reverse process of slowly denoising random static into coherent imagery.'
    }
  },

  'cybersecurity': {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    category: 'Cybersecurity',
    shortDescription: 'The practice of protecting critical systems, networks, devices, and data from digital attacks, unauthorized access, and exploitation.',
    difficulty: 'Intermediate',
    readTime: '4 min',
    icon: 'Shield',
    whyItMatters: 'In an interconnected world, cybersecurity safeguards personal privacy, national infrastructure, financial stability, and democratic institutions.',
    howItWorks: 'Enforces Defense-in-Depth through zero-trust architectures, asymmetric cryptography, intrusion detection, penetration testing, and behavioral anomaly AI.',
    realWorldApplications: [
      'Zero-trust cloud identity management',
      'Automated malware sandboxing and telemetry analysis',
      'Critical power grid and water treatment defense',
      'End-to-end encrypted communication protocols (Signal)'
    ],
    rabbitHolePath: [
      'Cybersecurity',
      'Cryptography',
      'Zero Trust Architecture',
      'Quantum-Resistant Encryption'
    ],
    connectedConcepts: [
      { id: 'quantum-computing', title: 'Quantum Computing', description: 'Quantum algorithms threatening classical RSA encryption.', difficulty: 'Advanced' },
      { id: 'artificial-intelligence', title: 'Artificial Intelligence', description: 'AI-driven threat hunting & adversarial defense.', difficulty: 'Beginner' },
      { id: 'data-science', title: 'Data Science', description: 'Analyzing network flow logs for anomalies.', difficulty: 'Beginner' }
    ],
    graphConnections: ['artificial-intelligence', 'quantum-computing', 'data-science'],
    quiz: {
      question: 'What does the "Zero Trust" security framework state as its core principle?',
      options: [
        '"Never trust, always verify" every request regardless of origin',
        'Trust any device connected inside the office WiFi',
        'Never use passwords anywhere',
        'Trust all incoming email attachments'
      ],
      correctIndex: 0,
      explanation: 'Zero Trust assumes breach and requires strict cryptographic identity verification for every single request.'
    }
  },

  'quantum-computing': {
    id: 'quantum-computing',
    title: 'Quantum Computing',
    category: 'Technology',
    shortDescription: 'A computation paradigm that harnesses the quantum mechanical phenomena of superposition and entanglement to solve intractable problems.',
    difficulty: 'Advanced',
    readTime: '6 min',
    icon: 'Atom',
    whyItMatters: 'Quantum computers can simulate molecular chemistry for room-temperature superconductors, break RSA encryption, and optimize logistics at astronomical scales.',
    howItWorks: 'Qubits can exist in a superposition of 0 and 1 states simultaneously; quantum gates interfere probability amplitudes to converge on correct answers exponentially faster.',
    realWorldApplications: [
      'Simulating complex molecular bonds for battery chemistry',
      'Optimizing global aviation logistics and supply chains',
      'Shor’s algorithm for prime factorization',
      'Portfolio risk optimization under extreme volatility'
    ],
    rabbitHolePath: [
      'Quantum Computing',
      'Quantum Superposition',
      'Quantum Entanglement',
      'Quantum Error Correction'
    ],
    connectedConcepts: [
      { id: 'cybersecurity', title: 'Cybersecurity', description: 'Post-quantum lattice cryptography.', difficulty: 'Intermediate' },
      { id: 'artificial-intelligence', title: 'Artificial Intelligence', description: 'Quantum Machine Learning (QML) algorithms.', difficulty: 'Beginner' },
      { id: 'mathematics', title: 'Mathematics', description: 'Linear algebra in Hilbert spaces.', difficulty: 'Intermediate' }
    ],
    graphConnections: ['cybersecurity', 'artificial-intelligence', 'mathematics'],
    quiz: {
      question: 'What is the fundamental unit of quantum information called?',
      options: [
        'Qubit',
        'Quantum Byte',
        'Q-Pixel',
        'Photon Bit'
      ],
      correctIndex: 0,
      explanation: 'A qubit (quantum bit) represents a two-state quantum mechanical system exhibiting superposition.'
    }
  },

  'robotics': {
    id: 'robotics',
    title: 'Robotics',
    category: 'Robotics',
    shortDescription: 'The intersection of engineering, computer science, and AI that builds machines capable of autonomous action and physical manipulation.',
    difficulty: 'Intermediate',
    readTime: '4 min',
    icon: 'Bot',
    whyItMatters: 'Robotics automates hazardous tasks, enhances human physical capabilities, and enables deep-space/deep-ocean exploration impossible for humans.',
    howItWorks: 'Integrates sensors (LiDAR, cameras, IMUs) with real-time state estimation (SLAM), inverse kinematics, trajectory optimization, and actuation controllers.',
    realWorldApplications: [
      'Humanoid general-purpose warehouse automation',
      'Da Vinci robotic laparoscopic microsurgery',
      'Planetary rovers exploring Mars (Perseverance)',
      'Automated high-precision electronics manufacturing'
    ],
    rabbitHolePath: [
      'Robotics',
      'Kinematics & Dynamics',
      'SLAM (Simultaneous Localization & Mapping)',
      'Humanoid Embodiment'
    ],
    connectedConcepts: [
      { id: 'computer-vision', title: 'Computer Vision', description: 'Spatial visual guidance for manipulators.', difficulty: 'Intermediate' },
      { id: 'artificial-intelligence', title: 'Artificial Intelligence', description: 'Vision-Language-Action (VLA) foundation models.', difficulty: 'Beginner' },
      { id: 'object-detection', title: 'Object Detection', description: 'Grasping targets and collision geometry.', difficulty: 'Advanced' }
    ],
    graphConnections: ['computer-vision', 'artificial-intelligence', 'object-detection'],
    quiz: {
      question: 'What does SLAM stand for in autonomous mobile robotics?',
      options: [
        'Simultaneous Localization and Mapping',
        'Synchronized Laser and Motor',
        'Spatial Linear Acceleration Metric',
        'Supervised Learning Algorithm Matrix'
      ],
      correctIndex: 0,
      explanation: 'SLAM allows a robot to build a map of an unknown environment while keeping track of its own current location.'
    }
  },

  'data-science': {
    id: 'data-science',
    title: 'Data Science',
    category: 'Data Science',
    shortDescription: 'The discipline of combining domain expertise, programming skills, and mathematics to extract actionable knowledge from raw data.',
    difficulty: 'Beginner',
    readTime: '3 min',
    icon: 'Database',
    whyItMatters: 'Enables data-driven decision making, transforming raw operational telemetry into strategic competitive advantage.',
    howItWorks: 'Follows iterative pipelines: data ingestion, cleaning, exploratory data analysis (EDA), statistical modeling, validation, and dashboard storytelling.',
    realWorldApplications: [
      'A/B experimentation for product growth',
      'Epidemiological outbreak modeling and public health response',
      'Supply chain inventory optimization',
      'Customer lifetime value predictions'
    ],
    rabbitHolePath: [
      'Data Science',
      'Statistical Inference',
      'Feature Engineering',
      'Predictive Modeling'
    ],
    connectedConcepts: [
      { id: 'machine-learning', title: 'Machine Learning', description: 'Building automated models from clean data.', difficulty: 'Beginner' },
      { id: 'mathematics', title: 'Mathematics', description: 'Probability distributions and Bayesian inference.', difficulty: 'Intermediate' },
      { id: 'artificial-intelligence', title: 'Artificial Intelligence', description: 'Scaling data analysis to autonomous agents.', difficulty: 'Beginner' }
    ],
    graphConnections: ['machine-learning', 'mathematics', 'artificial-intelligence'],
    quiz: {
      question: 'What phase of data science typically takes up the majority of an analyst’s time?',
      options: [
        'Data cleaning, preprocessing, and exploratory analysis',
        'Buying new computer monitors',
        'Creating 3D animated video intros',
        'Restarting the operating system'
      ],
      correctIndex: 0,
      explanation: 'Real-world data is messy, incomplete, and noisy; cleaning and preparation constitutes ~80% of data work.'
    }
  },

  'mathematics': {
    id: 'mathematics',
    title: 'Mathematics for Computing',
    category: 'Mathematics',
    shortDescription: 'The language of logic, linear algebra, multivariable calculus, and probability that forms the bedrock of computer science.',
    difficulty: 'Intermediate',
    readTime: '5 min',
    icon: 'Binary',
    whyItMatters: 'Every algorithm, neural weight, 3D polygon, and cryptographic key is fundamentally a mathematical transformation.',
    howItWorks: 'Employs vector spaces, matrix factorizations, eigen-decomposition, probability densities, and discrete graph theory to formalize computation.',
    realWorldApplications: [
      'Vector embeddings for semantic search in LLMs',
      '3D graphics matrix transforms in modern gaming engines',
      'Elliptic curve cryptography securing internet banking',
      'Bayesian belief networks in medical decision support'
    ],
    rabbitHolePath: [
      'Mathematics for Computing',
      'Linear Algebra & Vector Spaces',
      'Multivariable Calculus',
      'Information Theory & Entropy'
    ],
    connectedConcepts: [
      { id: 'quantum-computing', title: 'Quantum Computing', description: 'Unitary matrices in Hilbert space.', difficulty: 'Advanced' },
      { id: 'neural-networks', title: 'Neural Networks', description: 'Matrix multiplications and gradient descent.', difficulty: 'Intermediate' },
      { id: 'data-science', title: 'Data Science', description: 'Statistical significance and hypothesis testing.', difficulty: 'Beginner' }
    ],
    graphConnections: ['neural-networks', 'quantum-computing', 'data-science'],
    quiz: {
      question: 'What matrix operation is central to computing neural network layer outputs?',
      options: [
        'Dot Product / Matrix Multiplication',
        'Square Root of Zero',
        'Bitwise XOR on ASCII strings',
        'Division by Null'
      ],
      correctIndex: 0,
      explanation: 'Matrix multiplication calculates the weighted sums of inputs across millions of artificial neurons in parallel.'
    }
  }
};

export const CATEGORIES = [
  'All',
  'AI',
  'Computer Science',
  'Cybersecurity',
  'Science',
  'Technology',
  'Robotics',
  'Data Science',
  'Mathematics'
];

export const SORT_OPTIONS = [
  'Trending',
  'Popular',
  'Newest',
  'Random'
];

export const DAILY_RABBIT_HOLE = {
  date: 'Today',
  topicId: 'neural-networks',
  title: 'Why can neural networks recognize patterns?',
  summary: 'Unlike hardcoded algorithms that follow strict if-else rules, biological and artificial neural networks adjust billions of microscopic mathematical dials to learn continuous statistical representations of the world.',
  pathTeaser: 'Neural Networks → CNN → Computer Vision → Object Detection',
  xpReward: 150
};
