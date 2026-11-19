export const person = {
  firstName: "Debayan",
  lastName: "Sarkar",
  fullName: "Debayan Sarkar",
  role: "Software Engineer",
  focus: "BACKEND & AI SYSTEMS",
  tagline: "Software Engineer & Full-Stack Builder.",
  email: "d3bayansarkar@gmail.com",
  phone: "+91 9073817936",
  location: "Kolkata, India",
  linkedin: "https://linkedin.com/in/d3bayansarkar",
  github: "https://github.com/d3byn",
  year: 2026,
  bioLead:
    "I build reliable product surfaces and RAG systems — shipping fixes that cut production issues and grounded document Q&A that cites its sources.",
  currentlyAt: {
    company: "Aanvikshiki AI Solutions",
    title: "Software Engineering Intern",
    place: "Remote",
  },
};

export const skills = [
  {
    id: "ai",
    title: "AI & Machine Learning",
    note: "RAG Pipelines, Embeddings & Hybrid Retrieval, Evaluation",
    items: [
      "RAG",
      "LLMs (Gemini)",
      "LangGraph",
      "FAISS",
      "BM25",
      "RRF",
      "Cross-encoder reranking",
      "Embeddings",
      "Groundedness checks",
    ],
  },
  {
    id: "languages",
    title: "Languages & Frameworks",
    note: "REST API Design, Full-Stack Builds, Typed Backends",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "Java",
      "C",
      "Next.js",
      "React.js",
      "FastAPI",
      "Tailwind CSS",
      "Streamlit",
      "Pydantic / SQLModel",
    ],
  },
  {
    id: "tools",
    title: "Tools, Databases & Cloud",
    note: "Data Stores, Auth, Payments, Deployment",
    items: [
      "PostgreSQL",
      "SQLite",
      "Neon",
      "Docker",
      "Git & GitHub",
      "Clerk Auth",
      "Liveblocks",
      "Razorpay",
      "Firebase Auth",
      "REST APIs",
    ],
  },
] as const;

export type Project = {
  id: string;
  title: string;
  category: string;
  captionAction: string;
  summary: string;
  stack: string[];
  outcome?: string;
  live?: string;
  source?: string;
  publication?: string;
  bullets: string[];
  previewLabel: string;
  previewDetail: string;
};

export const projects: Project[] = [
  {
    id: "cortex",
    title: "Cortex",
    category: "Citation-aware RAG platform",
    captionAction: "View project",
    summary:
      "Built a citation-aware RAG document Q&A platform with hybrid retrieval: dense FAISS vector search + sparse BM25, fused via Reciprocal Rank Fusion, then reordered with a cross-encoder reranker.",
    stack: [
      "FastAPI",
      "FAISS",
      "BM25",
      "LangGraph",
      "Google Gemini",
      "Docker",
      "Streamlit",
    ],
    outcome: "73.3% end-to-end accuracy · 80% groundedness",
    live: "https://cortex01.streamlit.app/",
    source: "https://github.com/d3byn/Cortex",
    previewLabel: "Cortex",
    previewDetail: "Hybrid retrieval · grounded answers",
    bullets: [
      "Measured retrieval with Recall@5 on a 15-question labeled set (vector/keyword/hybrid/hybrid+rerank all 1.0 on this set) and end-to-end accuracy 73.3% with 80% groundedness.",
      "Added a groundedness check: an independent second LLM audit flags unsupported claims (grounded / not / unknown).",
      "Implemented embed-before-commit ingestion and ID-synced SQLite/FAISS storage for vector–text consistency, with reranker graceful degradation and cache invalidation on document updates.",
    ],
  },
  {
    id: "nexmind",
    title: "NexMind",
    category: "Fullstack productivity workspace",
    captionAction: "View project",
    summary:
      "Shipped a fullstack productivity workspace with notes, kanban, calendar, whiteboard, pages, and template builder modules.",
    stack: [
      "Next.js",
      "TypeScript",
      "Neon PostgreSQL",
      "Clerk Auth",
      "Liveblocks",
      "Gemini",
    ],
    live: "https://nex-mind-one.vercel.app/",
    source: "https://github.com/d3byn/NexMind",
    previewLabel: "NexMind",
    previewDetail: "Notes · boards · real-time presence",
    bullets: [
      "Implemented Clerk authentication, protected routes, and workspace isolation for secure multi-user sessions.",
      "Persisted module state on Neon PostgreSQL with a typed data layer across the workspace features.",
      "Added Liveblocks real-time presence on shared boards and narrow Gemini helpers that require explicit user confirm before writes.",
    ],
  },
  {
    id: "robotics-survey",
    title: "Robotics Survey",
    category: "Eureka Journals · Oct. 2025",
    captionAction: "Read publication",
    summary:
      "Surveyed robotics and AI-driven systems: industrial applications, emerging technologies, and open research directions.",
    stack: ["Research", "Robotics", "AI systems"],
    publication:
      "https://technology.eurekajournals.com/index.php/JISRIT/article/view/860",
    previewLabel: "Publication",
    previewDetail: "Scope and Potential of Research on Robotics",
    bullets: [
      "Published in Eureka Journals (Journal of Innovative Science and Research in Information Technology), October 2025.",
    ],
  },
];

export type JourneyStop = {
  id: string;
  badge?: string;
  date: string;
  title: string;
  place: string;
  placeMeta?: string;
  description: string;
  credentialUrl?: string;
};

export const journey: JourneyStop[] = [
  {
    id: "aanvikshiki",
    badge: "Current role",
    date: "Jul. 2026 – Present",
    title: "Software Engineering Intern",
    place: "Aanvikshiki AI Solutions",
    placeMeta: "Remote",
    description:
      "Owned claim, visit, and notification flows on a multi-role home-care marketplace (React, TypeScript, FastAPI, PostgreSQL); shipped 30+ verified fixes and cut reported production issues by 20%. Hardened Razorpay billing and took the app from dev to production.",
  },
  {
    id: "nptel",
    badge: "Certification",
    date: "NPTEL",
    title: "Joy of Computing Using Python",
    place: "Elite Silver",
    description: "Completed the NPTEL course with Elite Silver credential.",
    credentialUrl:
      "https://drive.google.com/file/d/1z6QmCw5GUXE7SUSFcCYnic5Nh94xTRYf/view?usp=sharing",
  },
  {
    id: "ardent",
    badge: "Certification",
    date: "Ardent Computech",
    title: "Industrial Training in Java Full Stack",
    place: "Java Full Stack Development",
    description: "Hands-on industrial training covering full-stack Java development.",
    credentialUrl:
      "https://drive.google.com/file/d/1aPzdNcnoUeX4VRZ3ONEb1ovWzGSZTasf/view?usp=sharing",
  },
  {
    id: "education",
    date: "Aug. 2023 – Jul. 2027",
    title: "B.Tech in Electronics and Communication Engineering",
    place: "Future Institute of Engineering and Management",
    placeMeta: "Kolkata",
    description: "CGPA 7.18 (till 6th sem).",
  },
];

export const navPrimary = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const navSecondary = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Writing" },
] as const;

export const askAiHints = [
  {
    q: "What are you working on?",
    a: "I'm a Software Engineering Intern at Aanvikshiki AI Solutions, shipping React/TypeScript/FastAPI/Postgres features on a home-care marketplace — including Razorpay billing hardening and 30+ production fixes.",
  },
  {
    q: "Tell me about Cortex",
    a: "Cortex is my citation-aware RAG platform: FAISS + BM25 hybrid retrieval with RRF and cross-encoder reranking, groundedness audits, and 73.3% end-to-end accuracy on my eval set. Live at cortex01.streamlit.app.",
  },
  {
    q: "How do I reach you?",
    a: "Email d3bayansarkar@gmail.com, LinkedIn linkedin.com/in/d3bayansarkar, or GitHub github.com/d3byn.",
  },
];
