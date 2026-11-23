export const PROJECTS = [
  {
    id: 'aurawave',
    title: 'AuraWave',
    tag: 'FULL-STACK • ROLE-BASED AUTH',
    year: '2026',
    summary: 'Role-based music streaming app where authenticated artists upload tracks into folders, while listeners stream audio and curate playlists.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind v4'],
    metrics: 'JWT + Role-Based Access',
    accent: 'from-emerald-400 to-cyan-500',
    codeSnippet: `// Protect artist-only track & folder routes
const verifyArtist = (req, res, next) => {
  if (req.user?.role !== 'artist') {
    return res.status(403).json({ msg: 'Artist access only' });
  }
  next();
};`
  },
  {
    id: 'snapstream',
    title: 'SnapStream',
    tag: 'FULL-STACK FEED & MEDIA',
    year: '2026',
    summary: 'Full-stack social feed app with REST APIs for creating image posts, storing media metadata in MongoDB, and rendering a responsive feed.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind v4'],
    metrics: 'Dynamic Post & Feed UI',
    accent: 'from-purple-400 to-pink-500',
    codeSnippet: `// Create and prepend a new post to the feed
const handleCreatePost = async (formData) => {
  const res = await api.post('/posts', formData);
  setPosts((prev) => [res.data, ...prev]);
};`
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    tag: 'PRODUCTIVITY • CRUD APP',
    year: '2026',
    summary: 'Responsive task manager with full CRUD functionality, status filtering, and persistent state to organize daily workflows.',
    stack: ['React', 'JavaScript', 'Tailwind v4', 'LocalStorage'],
    metrics: 'Instant CRUD & Filters',
    accent: 'from-amber-400 to-orange-500',
    codeSnippet: `// Toggle task completion state
const toggleTodo = (id) => {
  setTodos((prev) =>
    prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
  );
};`
  }
];

export const TECH_STACK = [
  { name: 'React', icon: 'https://jsdelivr.net' },
  { name: 'Tailwind v4', icon: 'https://jsdelivr.net' },
  { name: 'Node.js', icon: 'https://jsdelivr.net' },
  { name: 'Express', icon: 'https://jsdelivr.net', invert: true },
  { name: 'MongoDB', icon: 'https://jsdelivr.net' },
  { name: 'JavaScript', icon: 'https://jsdelivr.net' },
  { name: 'Three.js', icon: 'https://jsdelivr.net', invert: true },
  { name: 'Git', icon: 'https://jsdelivr.net' }
];

export const LAB_LOGS = [
  { date: 'NOV 2026', note: 'Building interactive 3D scenes, camera controls, and lighting in Three.js.' },
  { date: 'OCT 2026', note: 'Refining mobile-first breakpoints and fluid responsive grid layouts.' },
  { date: 'SEP 2026', note: 'Implemented JWT auth and role-based access control in Express & MongoDB.' }
];
