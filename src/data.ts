export type ProjectCategory =
  | 'production'
  | 'fullstack'
  | 'ai'
  | 'analytics'
  | 'cv';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  /** null for projects with no public repo (e.g. private/proprietary work) */
  link: string | null;
}

export const projects: Project[] = [
  {
    title: 'FOAP — Field Officer Platform',
    description:
      '3-tier SaaS (NestJS + React + Flutter) for field sales ops: real-time GPS tracking, offline-first clock-in/out with odometer photo OCR, visit & quotation management, live admin map, distributor portal. Web dashboard live; Android app in closed testing on Google Play.',
    tags: [
      'NestJS',
      'React',
      'Flutter',
      'PostgreSQL',
      'Redis',
      'Cloudflare R2',
      'Socket.IO',
      'TypeORM',
    ],
    category: 'production',
    link: null,
  },
  {
    title: 'ELETTRO Intelligence',
    description:
      'Sales intelligence platform (Next.js + FastAPI + Supabase) built for an Indian manufacturer: GST-aware analytics, customer segmentation, churn prediction, AI chatbot, PDF reports. 26K+ real sales records, ₹29.65 Cr revenue tracked.',
    tags: ['Next.js', 'FastAPI', 'Supabase', 'PostgreSQL', 'Leaflet', 'AI/ML'],
    category: 'production',
    link: 'https://elettrointelligence.streamlit.app/',
  },
  {
    title: 'QuantumTrade Pro',
    description:
      'Financial intelligence UI with Indian & global markets, portfolio risk, API-backed market data (CoinGecko, Alpha Vantage). React + Node/Express + MySQL.',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'REST'],
    category: 'fullstack',
    link: 'https://github.com/Commanderadi/quantumtrade-pro',
  },
  {
    title: 'Sahay — Community Health',
    description:
      'MERN app for NGO clinic operations: JWT, RBAC, clinic search, hardening (Helmet, rate limits). Deployed on Netlify.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind'],
    category: 'fullstack',
    link: 'https://sahaycommunity.netlify.app/',
  },
  {
    title: 'AI Portfolio Platform',
    description:
      'Crypto portfolio analytics with Chart.js, Node API, CatBoost forecasting module, fraud-style heuristics.',
    tags: ['TypeScript', 'React', 'Chart.js', 'Node.js', 'Python', 'CatBoost'],
    category: 'fullstack',
    link: 'https://github.com/Commanderadi/crypto-dashboard',
  },
  {
    title: 'Real-time Chat Application',
    description:
      'Teams-style chat with Chat Engine API and WebSocket messaging.',
    tags: ['React', 'WebSockets', 'Chat Engine'],
    category: 'fullstack',
    link: 'https://github.com/Commanderadi/Chat-application',
  },
  {
    title: 'CSV-to-JSON API',
    description:
      'Hand-rolled CSV parser REST API with MySQL persistence, tuned for large batches.',
    tags: ['Node.js', 'MySQL', 'REST'],
    category: 'fullstack',
    link: 'https://github.com/Commanderadi/csv-to-json-api',
  },
  {
    title: 'Student Result Management System',
    description:
      'Multi-portal academic records: CRUD, notices, sessions, PHP + MySQL.',
    tags: ['PHP', 'MySQL', 'XAMPP'],
    category: 'fullstack',
    link: 'https://github.com/Commanderadi/Student-Result-Management-System',
  },
  {
    title: 'Autonomous Research Agent',
    description:
      'Pipeline: collect → spaCy NER → HF T5 summary → Gradio; scheduling & notifications.',
    tags: ['Python', 'spaCy', 'HuggingFace', 'Gradio'],
    category: 'ai',
    link: 'https://github.com/Commanderadi/autonomous_research_agent',
  },
  {
    title: 'Financial Analytics & Prediction',
    description:
      'Market EDA, technical indicators, Linear Regression vs LSTM comparison with standard metrics.',
    tags: ['Python', 'LSTM', 'pandas', 'scikit-learn'],
    category: 'ai',
    link: 'https://github.com/Commanderadi/Financial-Analytics-',
  },
  {
    title: 'E-commerce Sales Dashboard',
    description:
      'Power BI sales KPIs, DAX, seasonal and regional insights from internship work.',
    tags: ['Power BI', 'DAX', 'Excel'],
    category: 'analytics',
    link: 'https://github.com/Commanderadi/E-commerce-Sales-Dashboard-',
  },
  {
    title: 'Social Media Campaign Dashboard',
    description:
      'Marketing ROI across channels; Power BI + DAX (Future Interns program).',
    tags: ['Power BI', 'DAX', 'Marketing Analytics'],
    category: 'analytics',
    link: 'https://github.com/Commanderadi/Social-Media-Campaign-Performance-Dashboard',
  },
  {
    title: 'College Event Feedback Analysis',
    description:
      'Survey + NLTK VADER sentiment, charts in Colab.',
    tags: ['Python', 'NLTK', 'pandas', 'matplotlib'],
    category: 'analytics',
    link: 'https://github.com/Commanderadi/College-Event-Feedback-Analysis',
  },
  {
    title: 'Vehicle Detection System',
    description:
      'Haar cascades + YOLOv3 on COCO; image & video.',
    tags: ['Python', 'OpenCV', 'YOLOv3'],
    category: 'cv',
    link: 'https://github.com/Commanderadi/Vehicle-Detection',
  },
  {
    title: 'Pedestrian Detection System',
    description:
      'HOG + SVM real-time and static detection module.',
    tags: ['Python', 'OpenCV', 'HOG', 'SVM'],
    category: 'cv',
    link: 'https://github.com/Commanderadi/Pedestrian-detection',
  },
];

export const categoryLabel: Record<ProjectCategory, string> = {
  production: 'Production',
  fullstack: 'Full-Stack',
  ai: 'AI / ML',
  analytics: 'Analytics',
  cv: 'Computer Vision',
};

export interface CareerItem {
  period: string;
  company: string;
  employmentType: string;
  location: string;
  title: string;
  description: string;
  stack: string;
}

/** Newest first (aligned with LinkedIn experience) */
export const career: CareerItem[] = [
  {
    period: 'Jan 2026 — Present',
    company: 'ELETTRO',
    employmentType: 'Full-time',
    location: 'Mumbai, Maharashtra, India · On-site',
    title: 'Analytics Engineer (Data & Automation)',
    description:
      'Design and develop internal data platforms and automation that turn operational and sales data into structured intelligence. Build scalable data pipelines, analytics frameworks, and operational tools that improve reporting accuracy, visibility, and efficiency. Partner with management and ops to replace manual Excel-heavy workflows with centralized data infrastructure and analytics dashboards. Ship LLM-backed features on the Intelligence Portal using hosted, multi-provider model APIs—structured outputs, retrieval / RAG patterns, tool-style steps, and evaluation-minded review for sensitive signals. Apply production-style API design: contracts, retries, idempotent async handlers, secrets hygiene, and structured logging. Key deliverables include the Intelligence Portal and FOAP app & portal ecosystem.',
    stack:
      'PostgreSQL · Data pipelines · Dashboards · FOAP & Intelligence Portal · NestJS · React · Flutter · FastAPI · Redis · Object storage · Hosted LLM APIs · Docker · CI/CD · TypeScript · RAG · LLM evaluation patterns',
  },
  {
    period: 'Jul 2025 — Dec 2025',
    company: "Key's Concept",
    employmentType: 'Part-time',
    location: 'Mumbai Metropolitan Region · On-site',
    title: 'Analyst & Applied AI Engineer',
    description:
      'Data analytics, automation, and applied AI for a financial and tax consultancy. Analyzed financial data across client portfolios (tax filings, investments, insurance) for tax planning and optimization insights. Built Python- and Excel-based automation for reporting. Delivered internal analytics dashboards for operational and client metrics. Explored AI for financial document processing, client segmentation, and revenue forecasting.',
    stack:
      'Python · Generative AI · Excel automation · Dashboards · Financial analytics · NLP · Segmentation · Forecasting',
  },
  {
    period: 'Sep 2025 — Oct 2025',
    company: 'Future Interns',
    employmentType: 'Internship',
    location: 'Remote',
    title: 'Data Science & Analytics Intern',
    description:
      'Built Power BI dashboards with 15+ KPIs; integrated hosted generative / LLM APIs for automated reporting (~60% faster reporting); developed Python web scraping pipelines (~40% time savings on data collection).',
    stack: 'Power BI · Python · Generative APIs · Web scraping · Business intelligence · DAX',
  },
  {
    period: 'Aug 2025 — Sep 2025',
    company: 'Suvidha Foundation (Suvidha Mahila Mandal)',
    employmentType: 'Internship',
    location: 'Mumbai, Maharashtra, India · Remote',
    title: 'Machine Learning Intern',
    description:
      'Hands-on ML initiatives for the foundation’s programs: model experimentation, data preparation, and applied ML workflows supporting operational goals.',
    stack:
      'Machine learning · Python · Multimodal prompting · Data preprocessing · Model evaluation',
  },
  {
    period: 'Jul 2024 — Sep 2024',
    company: 'Unified Mentor Private Limited',
    employmentType: 'Internship',
    location: 'Gurugram, Haryana, India · Hybrid',
    title: 'Data Science Intern',
    description:
      'Applied Python, R, SQL, and JavaScript to data science tasks: analysis, visualization, and starter ML flows. Collaborated on data-driven prototypes and documentation in a mentor-led internship setting.',
    stack: 'Python · R · SQL · JavaScript · Data analysis · Machine learning foundations',
  },
  {
    period: 'May 2023 — Jul 2023',
    company: 'Amazon Web Services (AWS)',
    employmentType: 'Internship',
    location: 'Remote',
    title: 'AI / ML Intern',
    description:
      'AI/ML internship focus: Python, TensorFlow, and AWS services for scalable model training and deployment patterns. Worked through structured cloud and ML labs with emphasis on production-minded design.',
    stack: 'Python · TensorFlow · AWS · Cloud ML · Model workflows',
  },
  {
    period: 'Jul 2022 — May 2023',
    company: 'Entrepreneurship Cell, Galgotias University',
    employmentType: 'Full-time',
    location: 'Greater Noida, India · On-site',
    title: 'Technical Coordinator',
    description:
      'Coordinated technical initiatives for the E-Cell: events, student teams, and tooling; problem-solving and execution across hackathons and startup-support activities.',
    stack: 'Event tech · Coordination · Problem solving · Team collaboration',
  },
  {
    period: 'Aug 2022 — Oct 2022',
    company: 'READYCODER PVT. LTD.',
    employmentType: 'Internship',
    location: 'Delhi, India',
    title: 'App Developer Intern',
    description:
      'Mobile app development internship using Java, Kotlin, Swift, and Flutter—UI work, integrations, and release-minded iteration alongside mentors.',
    stack: 'Java · Kotlin · Swift · Flutter · Mobile development',
  },
  {
    period: 'Jul 2022 — Sep 2022',
    company: 'Palo Alto Networks',
    employmentType: 'Internship',
    location: 'Remote',
    title: 'Cyber Security Intern',
    description:
      'Exposure to network security, threat analysis, and tools such as Wireshark, Nmap, and Metasploit in a structured internship program; focus on foundational security assessment concepts.',
    stack: 'Network security · Threat analysis · Wireshark · Nmap · Metasploit · Vulnerability assessment',
  },
];

export interface ExpertiseBlock {
  title: string;
  body: string;
  tech: string[];
}

export const expertise: ExpertiseBlock[] = [
  {
    title: 'Analytics & data engineering',
    body:
      'I turn messy operational and financial data into reliable reporting: PostgreSQL and SQL-first modeling, Python pipelines, ETL-style workflows, and executive-ready BI. I replace repetitive Excel processes with automation, scraping where needed, and dashboards that leadership actually uses.',
    tech: [
      'PostgreSQL',
      'SQL',
      'Python',
      'pandas',
      'Power BI',
      'DAX',
      'ETL / pipelines',
      'Web scraping',
      'Excel automation',
      'KPI & metric design',
    ],
  },
  {
    title: 'Full-stack platforms & internal tools',
    body:
      'I build internal portals and apps end-to-end—REST and real-time APIs, React/Next.js dashboards, Flutter for mobile field workflows, and services wired with Redis, queues, object storage, and multi-tenant-safe backends (e.g. Supabase/RLS patterns). Focus: clarity, durability, and fit for ops teams.',
    tech: [
      'NestJS',
      'FastAPI',
      'React',
      'Next.js',
      'TypeScript',
      'Flutter',
      'Redis',
      'Socket.IO',
      'Supabase',
      'Docker',
      'Object storage',
      'CI/CD',
    ],
  },
  {
    title: 'AI / ML, GenAI & agentic systems',
    body:
      'Classical ML and deep learning with clear metrics; Generative AI for reporting, documents, and analytics copilots; agent-inspired patterns—multi-step workflows, tool-calling LLMs, retrieval (RAG), and guardrailed automation. I prototype in Gradio/Streamlit and design flows that can attach to real APIs and data stores—not demo-only chat.',
    tech: [
      'Python',
      'Hosted LLM APIs',
      'LLM orchestration',
      'Agentic workflows',
      'Tool-calling LLMs',
      'RAG',
      'Transformers',
      'T5 / summarization',
      'TensorFlow',
      'scikit-learn',
      'CatBoost',
      'spaCy',
      'Multimodal prompting',
      'Gradio',
      'Streamlit',
    ],
  },
];

/** Practices aligned with mature product-engineering teams. */
export interface EngineeringPractice {
  title: string;
  body: string;
  keywords: string[];
}

export const engineeringPractices: EngineeringPractice[] = [
  {
    title: 'Reliability & observability',
    body:
      'Services designed for failure: meaningful logs, metrics, and trace-friendly boundaries; degraded modes instead of hard outages; clarity when something breaks.',
    keywords: ['SLO thinking', 'Structured logging', 'Metrics & dashboards', 'On-call mindset'],
  },
  {
    title: 'Security & trust',
    body:
      'Least-privilege access, sane secret handling, and OWASP-aware API and data design—especially with multi-tenant and customer data.',
    keywords: ['AuthN / AuthZ', 'JWT & sessions', 'RLS / tenant isolation', 'Secrets hygiene'],
  },
  {
    title: 'Testing & CI/CD',
    body:
      'Automated checks before merge and deploy: unit and integration coverage where it matters, pipelines that block bad releases.',
    keywords: ['GitHub Actions', 'Regression safety', 'Test pyramid', 'Quality gates'],
  },
  {
    title: 'Performance & data efficiency',
    body:
      'Measure before optimizing: SQL and indexing, caching layers, async jobs for heavy work—balanced with cost and simplicity.',
    keywords: ['Query tuning', 'Redis / cache', 'Background jobs', 'Profiling'],
  },
  {
    title: 'Distributed & async patterns',
    body:
      'Idempotent APIs, queues, backpressure, and honesty about consistency tradeoffs—so systems survive real traffic and retries.',
    keywords: ['Message queues', 'Idempotency', 'Event-driven slices', 'CAP tradeoffs'],
  },
  {
    title: 'Ownership & collaboration',
    body:
      'Readable diffs, design notes, and crisp tradeoff communication—how strong teams align before and after code ships.',
    keywords: ['Code review', 'Design docs', 'Stakeholder clarity', 'Mentorship'],
  },
];
