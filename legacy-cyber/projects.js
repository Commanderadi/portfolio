const projectsData = [
    // ===== FLAGSHIP PRODUCTION PLATFORMS =====
    {
        title: "FOAP — Field Officer Platform",
        description: "Production-grade 3-tier SaaS platform (NestJS + React + Flutter) for real-time field sales automation. Features an Automated Incentive Engine (5-tier slab system), Admin Payroll Dashboard, and Event-Driven Offline Sync using connectivity_plus. Includes live GPS tracking via WebSockets & Redis, Corporate Light UI refresh, AWS S3 image verification, and device fingerprinting. Serves 50+ field officers daily.",
        tags: ["NestJS", "React 19", "Flutter", "PostgreSQL", "Redis", "AWS S3", "Socket.IO", "TypeORM", "Incentive Engine", "connectivity_plus"],
        category: "production",
        links: {
            github: "https://github.com/Commanderadi"
        }
    },
    {
        title: "ELETTRO Intelligence",
        description: "Multi-tenant sales intelligence dashboard for Indian B2B manufacturers. Built with Next.js frontend, FastAPI backend, and Supabase (PostgreSQL + Row Level Security) for secure data isolation. Features AI-powered risk detection, India state-level Leaflet geospatial maps, automated FPDF report generation, and an in-app AI assistant. Processing 1.35M+ data points.",
        tags: ["Next.js", "FastAPI", "Supabase", "PostgreSQL", "Leaflet", "AI/ML", "FPDF"],
        category: "production",
        links: {
            github: "https://elettrointelligence.streamlit.app/"
        }
    },

    // ===== FULL-STACK WEB APPLICATIONS =====
    {
        title: "QuantumTrade Pro",
        description: "Professional-grade financial intelligence platform with AI-powered market analysis for Indian & global markets. Live NSE (NIFTY 50), BSE (SENSEX), and cryptocurrency tracking via CoinGecko & Alpha Vantage APIs. Features portfolio management with risk scoring, AI trading signals, sentiment analysis, and natural language market queries. Full-stack with React 18 + Node.js/Express + MySQL.",
        tags: ["React 18", "Node.js", "Express", "MySQL", "JWT", "CoinGecko API", "Alpha Vantage"],
        category: "fullstack",
        links: {
            github: "https://github.com/Commanderadi/quantumtrade-pro"
        }
    },
    {
        title: "Sahay — Community Health",
        description: "Full-stack MERN application for managing community health clinics, built for NGOs. Features JWT-based authentication, role-based access control (NGO/Admin/Visitor), real-time clinic search by name or city, and a security-first design with Helmet, rate limiting, bcrypt hashing, and CORS configuration. Deployed on Netlify.",
        tags: ["React 19", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Tailwind CSS"],
        category: "fullstack",
        links: {
            github: "https://sahaycommunity.netlify.app/"
        }
    },
    {
        title: "AI Portfolio Platform",
        description: "Full-stack cryptocurrency portfolio analytics platform with ML-based price prediction. React TypeScript frontend with Chart.js visualizations, Node.js/Express API layer, and a Python ML module using CatBoost gradient boosting for price forecasting. Features AI-powered fraud detection and interactive dashboards.",
        tags: ["TypeScript", "React", "Chart.js", "Node.js", "CatBoost", "Python", "Tailwind CSS"],
        category: "fullstack",
        links: {
            github: "https://github.com/Commanderadi/crypto-dashboard"
        }
    },
    {
        title: "Real-time Chat Application",
        description: "Microsoft Teams clone built with React JS and Chat Engine API. Implements real-time messaging via WebSockets with a professional Teams-inspired interface supporting group chats and direct messaging.",
        tags: ["React JS", "Chat Engine", "WebSockets", "Real-time"],
        category: "fullstack",
        links: {
            github: "https://github.com/Commanderadi/Chat-application"
        }
    },
    {
        title: "CSV-to-JSON API",
        description: "Lightweight backend API with a fully handwritten CSV parser — zero external CSV libraries used. Parses and transforms CSV files to JSON with MySQL storage. Designed to scale efficiently with 50K+ records through optimized in-memory iteration.",
        tags: ["Node.js", "MySQL", "Custom Parser", "REST API"],
        category: "fullstack",
        links: {
            github: "https://github.com/Commanderadi/csv-to-json-api"
        }
    },
    {
        title: "Student Result Management System",
        description: "Comprehensive academic records management system with multi-portal architecture (Admin, Staff, Client). Full CRUD for students, classes, subjects, results, and notices. Features downloadable result reports, notice board, and session-based authentication. Built with PHP + MySQL on XAMPP.",
        tags: ["PHP", "MySQL", "CRUD", "XAMPP", "Session Auth"],
        category: "fullstack",
        links: {
            github: "https://github.com/Commanderadi/Student-Result-Management-System"
        }
    },

    // ===== AI & MACHINE LEARNING =====
    {
        title: "Autonomous Research Agent",
        description: "AI-powered research assistant with a 4-stage pipeline: Collect (newspaper3k) → Preprocess (spaCy NER & lemmatization) → Summarize (HuggingFace T5 abstractive summarization) → Present (Gradio UI). Features batch URL processing, APScheduler automation with email/webhook notifications, and configurable compression ratios. Deployable to Hugging Face Spaces.",
        tags: ["Python", "spaCy", "HuggingFace T5", "Gradio", "newspaper3k", "APScheduler"],
        category: "ai",
        links: {
            github: "https://github.com/Commanderadi/autonomous_research_agent"
        }
    },
    {
        title: "Financial Analytics & Prediction",
        description: "Stock market analysis and prediction pipeline using Yahoo Finance data. Performs EDA with technical indicators (SMA, EMA, RSI, MACD, Bollinger Bands), then trains and compares Linear Regression vs LSTM neural networks for price forecasting. Evaluates models with MAE, RMSE, and R² metrics.",
        tags: ["Python", "LSTM", "Linear Regression", "Yahoo Finance", "pandas", "scikit-learn"],
        category: "ai",
        links: {
            github: "https://github.com/Commanderadi/Financial-Analytics-"
        }
    },

    // ===== DATA ANALYTICS & BI =====
    {
        title: "E-commerce Sales Dashboard",
        description: "Interactive Power BI dashboard analyzing e-commerce sales data with DAX-calculated KPIs (Total Sales, Orders, AOV, Returns). Discovered holiday season peaks (Nov–Dec), identified UK as top region, and pinpointed Giftware & Home Décor as highest-revenue categories. Built during internship program.",
        tags: ["Power BI", "DAX", "Excel", "Data Cleaning", "Trend Analysis"],
        category: "analytics",
        links: {
            github: "https://github.com/Commanderadi/E-commerce-Sales-Dashboard-"
        }
    },
    {
        title: "Social Media Campaign Dashboard",
        description: "Marketing ROI analysis dashboard tracking $8.91M ad spend across 6 channels (Affiliate, Billboards, Google Ads, Influencer, Social Media, TV). Key finding: Influencer Marketing achieves highest ROI (14.10%) while TV & Billboards have lowest despite highest spend. Built with Power BI + DAX during Future Interns Data Science Internship.",
        tags: ["Power BI", "DAX", "ROI Analysis", "Marketing Analytics"],
        category: "analytics",
        links: {
            github: "https://github.com/Commanderadi/Social-Media-Campaign-Performance-Dashboard"
        }
    },
    {
        title: "College Event Feedback Analysis",
        description: "Data analysis project combining quantitative survey ratings (1–5 scale) with NLP sentiment analysis (NLTK VADER) on student feedback. Produces bar charts, pie charts, heatmaps, and sentiment distribution visualizations. Found 'Solves doubts willingly' rated highest, 'Difficulty of assignments' rated lowest. Built in Google Colab.",
        tags: ["Python", "pandas", "NLTK VADER", "matplotlib", "seaborn", "Google Colab"],
        category: "analytics",
        links: {
            github: "https://github.com/Commanderadi/College-Event-Feedback-Analysis"
        }
    },

    // ===== COMPUTER VISION =====
    {
        title: "Vehicle Detection System",
        description: "Dual-approach vehicle detection using both classical CV (Haar Cascade classifiers) and deep learning (YOLOv3 with COCO dataset — 80 object classes). Supports both image and video input with bounding box visualization. Includes pre-trained models, config files, and test media.",
        tags: ["Python", "OpenCV", "YOLOv3", "Haar Cascade", "COCO Dataset"],
        category: "cv",
        links: {
            github: "https://github.com/Commanderadi/Vehicle-Detection"
        }
    },
    {
        title: "Pedestrian Detection System",
        description: "Real-time pedestrian detection system using HOG (Histogram of Oriented Gradients) descriptor with SVM classifier. Features modular architecture with separate entry points for static image detection and live video/webcam detection. Core detection logic shared via Human_Detection.py module.",
        tags: ["Python", "OpenCV", "HOG", "SVM", "Real-time Video"],
        category: "cv",
        links: {
            github: "https://github.com/Commanderadi/Pedestrian-detection"
        }
    }
];
