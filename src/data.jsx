export const PROJECTS = [
  {
    id: "notely",
    title: "Notely",
    tag: "FULL-STACK • CLOUD MEDIA",
    year: "2026",
    summary:
      "Full-stack note-taking web app with cloud image storage, tag filtering, real-time search, and full CRUD REST APIs.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind v4",
      "ImageKit",
    ],
    metrics: "Cloud Image Storage + CRUD",
    accent: "from-indigo-400 to-cyan-400",
    codeSnippet: `// Upload photo to cloud & save note
app.post('/api/notes', upload.single('image'), async (req, res) => {
  const uploaded = await imagekit.files.upload({
    file: req.file.buffer.toString('base64'),
    fileName: req.file.originalname,
  });
  const note = await Note.create({ ...req.body, image: uploaded.url });
  res.status(201).json(note);
});`,
    url: "https://notes-sigma-liard.vercel.app/",
  },

  {
    id: "snapstream",
    title: "SnapStream",
    tag: "FULL-STACK • AUTH & RBAC",
    year: "2026",
    summary:
      "Full-stack social feed platform featuring JWT authentication, role-based admin moderation privileges, user profile views, and cloud media posts.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind v4"],
    metrics: "Auth + Admin RBAC + Profiles",
    accent: "from-purple-400 to-pink-500",
    codeSnippet: `// Verify JWT & enforce admin role privileges
const verifyAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Admin privileges required' });
  }
  next();
};`,
    url: "https://snapshot-puce.vercel.app/feed",
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    tag: "PRODUCTIVITY • CRUD APP",
    year: "2026",
    summary:
      "Responsive task manager with full CRUD functionality, status filtering, and persistent state to organize daily workflows.",
    stack: ["React", "JavaScript", "Tailwind v4", "LocalStorage"],
    metrics: "Instant CRUD & Filters",
    accent: "from-amber-400 to-orange-500",
    codeSnippet: `// Toggle task completion state
const toggleTodo = (id) => {
  setTodos((prev) =>
    prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
  );
};`,
    url: "https://todo-list-two-peach-54.vercel.app/",
  },
];

export const TECH_STACK = [
  {
    name: "React",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTFseP-zhD5cVPLpoKWtHrUDoiJgvWyhuDCc-UOUR1g&s=10",
  },
  {
    name: "Tailwind v4",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgl8QG2TIZAHka4PrQkKysu3o33Ypk6S_MmAieypAROg&s=10",
  },
  {
    name: "Node.js",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyT4P4beIoYq7dEfzx7cvz42q8DpD2H6TAN3RemsiwzA&s=10",
  },
  {
    name: "Express",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvXyqM27GOXG04aEDZ32u_8JSyHNNyv3Yj5UTVO87fxg&s=10",
    invert: true,
  },
  {
    name: "MongoDB",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_o_eQbNq7D1j2de14dvHnlj2iSc1n8OazLl8wk-8Uw&s=10",
  },
  {
    name: "JavaScript",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNjJRKdo0TEc1Xq_DYwRQjCnl0WQh5uuV905G-13vNxg&s=10",
  },
  {
    name: "Vercel",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG95LEDiNrXxAAjtwW2BG1XXBKTGKQ8oa8Ax0IYPcrKg&s=10",
    invert: true,
  },
  {
    name: "Git",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdbNTEUcu2m3s_XGQuNyVtGm5birJmQD5-xdTDvDJ5mg&s=10",
  },
  {
    name: "GitHub",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPs4aLjB6PrVFbGobXz0h7wluc7p07sCyaPnyTHvWSA&s=10",
  },
];

export const LAB_LOGS = [
  {
    date: "NOV 2026",
    note: "Building interactive 3D scenes, camera controls, and lighting in Three.js.",
  },
  {
    date: "OCT 2026",
    note: "Refining mobile-first breakpoints and fluid responsive grid layouts.",
  },
  {
    date: "SEP 2026",
    note: "Implemented JWT auth and role-based access control in Express & MongoDB.",
  },
];
