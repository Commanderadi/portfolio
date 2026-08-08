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
    title: 'FieldPulse — Field Sales Force Automation',
    description:
      'Field sales force automation platform built end-to-end as the sole engineer — Flutter mobile app, NestJS/PostgreSQL backend (20 domain modules, ~173 REST endpoints, 26 entities via TypeORM), and a React 19 admin dashboard. GPS-verified visit check-in/out with a background location tracker and EXIF/OCR-verified odometer capture, quotation-to-invoice flows, and a scheduled fraud-detection pipeline (mock-GPS, impossible-speed, idle-time) surfaced on a Socket.IO live map. Self-hosted production infra on Hetzner (Docker, Redis, nginx, Let’s Encrypt, Cloudflare R2) with 4 GitHub Actions pipelines for automated deploys and signed Android builds. Built for K.N. Elettro Industries, then spun out as fieldpulse.in as SaaS for other Indian distributors. Flutter app: v2.7.1, 16 releases, 29 screens, live on Google Play (closed testing).',
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
    title: 'ELETTRO Intelligence Platform',
    description:
      'Full-stack, multi-tenant sales analytics platform for KN Elettro Industries, solo-architected end to end (40+ REST endpoints, ~11K lines). Next.js 16 + FastAPI + hand-written SQLAlchemy Core on Neon Postgres. Excel/CSV ingestion with automated geo-enrichment, RFM customer segmentation and risk scoring, an interactive India choropleth, Pareto/ABC product analytics, dynamic fiscal-year-aware PDF reporting, and an AI chatbot over the sales data. Root-caused and fixed a silent data-integrity bug in customer-matching, backfilling 1,200+ production rows.',
    tags: [
      'Next.js',
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL (Neon)',
      'Leaflet',
      'Recharts',
      'JWT',
      'AI/ML',
    ],
    category: 'production',
    link: null,
  },
  {
    title: 'QuantumTrade Pro',
    description:
      'Financial intelligence platform for Indian & global markets: live NIFTY 50/SENSEX and NSE/BSE data, Indian crypto (WazirX, CoinDCX), portfolio tracking and risk scoring, AI-generated trading signals, sentiment analysis, and natural-language market queries. React frontend, Node/Express + MySQL backend with JWT/bcrypt auth, CoinGecko and Alpha Vantage market data.',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'REST'],
    category: 'fullstack',
    link: 'https://github.com/Commanderadi/quantumtrade-pro',
  },
  {
    title: 'Sahay — Community Health Clinic Management',
    description:
      'MERN app for managing community health clinics: JWT-based auth with 3 role-based access levels (NGO, Admin, Visitor), clinic CRUD with name/city search, and a 7-endpoint REST API for auth and clinic management. Hardened with bcrypt password hashing, Helmet security headers, rate limiting, and CORS/input validation.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind'],
    category: 'fullstack',
    link: 'https://github.com/Commanderadi/Sahay-Community-Health',
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
      'AI research assistant with an end-to-end agentic pipeline: scrapes article URLs (newspaper3k), cleans and preprocesses text (spaCy — stopword removal, lemmatization, NER, keyword extraction), then runs abstractive/extractive summarization with a Hugging Face T5 model and configurable compression, processing each article in ~10-30 seconds. Batch processing with result caching, daily-scheduled automation (APScheduler) with email/webhook notifications, and a Gradio UI. Deployed on Hugging Face Spaces.',
    tags: ['Python', 'spaCy', 'HuggingFace', 'Gradio', 'newspaper3k', 'APScheduler'],
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
      'Design and develop internal data platforms and automation that turn operational and sales data into structured intelligence. Build scalable data pipelines, analytics frameworks, and operational tools that improve reporting accuracy, visibility, and efficiency. Partner with management and ops to replace manual Excel-heavy workflows with centralized data infrastructure and analytics dashboards. Ship LLM-backed features on the Intelligence Portal using hosted, multi-provider model APIs—structured outputs, retrieval / RAG patterns, tool-style steps, and evaluation-minded review for sensitive signals. Apply production-style API design: contracts, retries, idempotent async handlers, secrets hygiene, and structured logging. Key deliverables: the Intelligence Portal (40+ REST endpoints) and FieldPulse (formerly FOAP), a field sales platform with ~173 REST endpoints and 26 database entities, later spun out as fieldpulse.in.',
    stack:
      'PostgreSQL · Data pipelines · Dashboards · FieldPulse & Intelligence Portal · NestJS · React · Flutter · FastAPI · Redis · Object storage · Hosted LLM APIs · Docker · CI/CD · TypeScript · RAG · LLM evaluation patterns',
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
      'I build internal portals and apps end-to-end—REST and real-time APIs, React/Next.js dashboards, Flutter for mobile field workflows, and services wired with Redis, queues, object storage, and multi-tenant-safe, RLS-style backends. Comfortable self-hosting production infra (Docker, nginx, CI/CD) as well as managed platforms. Focus: clarity, durability, and fit for ops teams.',
    tech: [
      'NestJS',
      'FastAPI',
      'React',
      'Next.js',
      'TypeScript',
      'Flutter',
      'TypeORM / SQLAlchemy',
      'Redis',
      'Socket.IO',
      'Docker',
      'GitHub Actions',
      'Self-hosted infra',
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
