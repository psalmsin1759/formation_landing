export type Course = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  instructor: string;
  instructorTitle: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessons: number;
  students: number;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  bestseller?: boolean;
  new?: boolean;
  image: string;
  tags: string[];
  curriculum: { section: string; lessons: { title: string; duration: string; free?: boolean }[] }[];
  learningOutcomes: string[];
  requirements: string[];
  language: string;
  certificate: boolean;
};

export const courses: Course[] = [
  {
    slug: "legal-contract-drafting",
    title: "Contract Drafting & Negotiation Mastery",
    subtitle: "Draft airtight contracts and negotiate with confidence in any commercial context.",
    description: "This comprehensive program equips legal professionals with the skills to draft, review, and negotiate commercial contracts with precision. Through real-world case studies from leading Nigerian law firms, you will master risk allocation, boilerplate clauses, and cross-border considerations.",
    instructor: "Barr. Adaeze Okonkwo",
    instructorTitle: "Senior Partner, Okonkwo & Associates | 20+ years in commercial law",
    category: "Legal Training",
    level: "Intermediate",
    duration: "18 hours",
    lessons: 54,
    students: 3842,
    rating: 4.8,
    reviews: 612,
    price: 300000,
    originalPrice: 500000,
    bestseller: true,
    image: "/images/course-contract.jpg",
    tags: ["Contract Law", "Negotiation", "Commercial Law", "Risk Management"],
    language: "English",
    certificate: true,
    learningOutcomes: [
      "Draft clear, enforceable commercial contracts from scratch",
      "Identify and mitigate high-risk clauses in third-party agreements",
      "Negotiate favourable terms using proven frameworks",
      "Understand cross-border contract considerations under Nigerian & ECOWAS law",
      "Review and redline contracts with professional precision",
      "Apply industry-standard boilerplate and bespoke clauses effectively",
    ],
    requirements: [
      "Law degree or equivalent legal qualification",
      "Basic familiarity with contract law principles",
      "No software required — all materials provided in PDF and video format",
    ],
    curriculum: [
      {
        section: "Module 1: Foundations of Commercial Contracting",
        lessons: [
          { title: "Overview of commercial contract types", duration: "12 min", free: true },
          { title: "Essential elements: offer, acceptance, consideration", duration: "18 min", free: true },
          { title: "Contract formation pitfalls to avoid", duration: "14 min" },
          { title: "Case study: failed negotiation analysis", duration: "22 min" },
        ],
      },
      {
        section: "Module 2: Drafting Techniques & Clause Analysis",
        lessons: [
          { title: "Writing with clarity and precision", duration: "20 min" },
          { title: "Boilerplate clauses — what they really mean", duration: "25 min" },
          { title: "Liability caps, indemnities and warranties", duration: "30 min" },
          { title: "Force majeure in the post-pandemic era", duration: "18 min" },
          { title: "Workshop: redline a real contract excerpt", duration: "45 min" },
        ],
      },
      {
        section: "Module 3: Negotiation Strategy",
        lessons: [
          { title: "The psychology of commercial negotiation", duration: "22 min" },
          { title: "BATNA and leverage — knowing your position", duration: "18 min" },
          { title: "Common tactics and how to counter them", duration: "20 min" },
          { title: "Live negotiation simulation (recorded)", duration: "60 min" },
        ],
      },
      {
        section: "Module 4: Cross-Border & International Contracts",
        lessons: [
          { title: "Choice of law and jurisdiction clauses", duration: "20 min" },
          { title: "CISG, UNIDROIT Principles overview", duration: "25 min" },
          { title: "Nigeria–ECOWAS cross-border contract implications", duration: "22 min" },
          { title: "Case study: international M&A contract review", duration: "35 min" },
        ],
      },
      {
        section: "Module 5: Final Assessment & Certification",
        lessons: [
          { title: "Mock exam — contract drafting assignment", duration: "90 min" },
          { title: "Peer review and feedback session", duration: "45 min" },
          { title: "Certification walkthrough", duration: "10 min" },
        ],
      },
    ],
  },
  {
    slug: "employment-law-essentials",
    title: "Employment Law Essentials for HR & Managers",
    subtitle: "Navigate the complexities of employment law with confidence — protect your organisation.",
    description: "A practical, jargon-free guide to employment law for HR professionals and line managers. Covers the full employment lifecycle from hiring to termination, with a focus on the Nigerian Labour Act and relevant regulations.",
    instructor: "Dr. Funmilayo Adeyemi",
    instructorTitle: "Employment Law Consultant | Former Industrial Court Judge",
    category: "Legal Training",
    level: "Beginner",
    duration: "12 hours",
    lessons: 38,
    students: 5210,
    rating: 4.9,
    reviews: 892,
    price: 200000,
    originalPrice: 350000,
    bestseller: true,
    image: "/images/course-employment.jpg",
    tags: ["Employment Law", "HR", "Compliance", "Nigerian Labour Act"],
    language: "English",
    certificate: true,
    learningOutcomes: [
      "Understand the full employment lifecycle from a legal perspective",
      "Conduct lawful recruitment, onboarding and performance management",
      "Handle disciplinary and grievance procedures correctly",
      "Navigate redundancy, TUPE equivalents and settlement agreements",
      "Avoid the most common industrial tribunal claims",
      "Build a legally compliant HR policy framework under Nigerian law",
    ],
    requirements: [
      "No legal background required",
      "Suitable for HR professionals, managers, and business owners",
    ],
    curriculum: [
      {
        section: "Module 1: The Employment Relationship",
        lessons: [
          { title: "Types of employment status explained", duration: "15 min", free: true },
          { title: "Key Nigerian employment legislation overview", duration: "20 min", free: true },
          { title: "Employment contracts — must-have clauses", duration: "22 min" },
        ],
      },
      {
        section: "Module 2: Recruitment & Onboarding",
        lessons: [
          { title: "Lawful recruitment practices", duration: "18 min" },
          { title: "Discrimination law in hiring", duration: "25 min" },
          { title: "Right to work and compliance checks", duration: "15 min" },
        ],
      },
      {
        section: "Module 3: Managing Performance & Conduct",
        lessons: [
          { title: "Disciplinary procedures — Nigerian Labour Act code", duration: "28 min" },
          { title: "Grievance handling best practice", duration: "22 min" },
          { title: "Capability vs. misconduct distinctions", duration: "18 min" },
        ],
      },
      {
        section: "Module 4: Ending Employment",
        lessons: [
          { title: "Lawful dismissal — fair reasons under Nigerian law", duration: "20 min" },
          { title: "Redundancy process step-by-step", duration: "25 min" },
          { title: "Settlement agreements and deed of release", duration: "20 min" },
          { title: "Industrial tribunal and NIC overview", duration: "22 min" },
        ],
      },
    ],
  },
  {
    slug: "corporate-governance",
    title: "Corporate Governance & Board Effectiveness",
    subtitle: "Master the principles that drive effective boards and accountable organisations.",
    description: "For directors, company secretaries, and senior executives, this program covers the governance frameworks, board dynamics, and regulatory obligations that underpin high-performing Nigerian organisations.",
    instructor: "Prof. Chukwuemeka Nwosu",
    instructorTitle: "Professor of Corporate Law, University of Lagos",
    category: "Business & Management",
    level: "Advanced",
    duration: "15 hours",
    lessons: 44,
    students: 1920,
    rating: 4.7,
    reviews: 318,
    price: 350000,
    originalPrice: 600000,
    new: true,
    image: "/images/course-governance.jpg",
    tags: ["Corporate Governance", "Board", "Directors", "Compliance"],
    language: "English",
    certificate: true,
    learningOutcomes: [
      "Apply the Nigerian Code of Corporate Governance (NCCG 2018) and its requirements",
      "Understand the fiduciary duties of directors under CAMA 2020",
      "Design effective board committee structures",
      "Lead board evaluations and performance reviews",
      "Navigate shareholder relations and AGM preparation",
      "Manage ESG and sustainability reporting obligations",
    ],
    requirements: [
      "Director, company secretary, or senior management experience recommended",
      "Basic understanding of company structures",
    ],
    curriculum: [
      {
        section: "Module 1: Governance Frameworks",
        lessons: [
          { title: "The Nigerian Code of Corporate Governance 2018", duration: "20 min", free: true },
          { title: "CAMA 2020 — key corporate governance provisions", duration: "18 min" },
          { title: "One-tier vs two-tier board structures", duration: "15 min" },
        ],
      },
      {
        section: "Module 2: Director Duties & Liabilities",
        lessons: [
          { title: "Fiduciary duties under CAMA 2020", duration: "25 min" },
          { title: "Conflicts of interest — identification and management", duration: "22 min" },
          { title: "Director liability and D&O insurance", duration: "18 min" },
        ],
      },
      {
        section: "Module 3: Board Dynamics & Effectiveness",
        lessons: [
          { title: "Building a high-performance board", duration: "20 min" },
          { title: "Role of NEDs and independent directors", duration: "18 min" },
          { title: "Board evaluation methodologies", duration: "22 min" },
        ],
      },
    ],
  },
  {
    slug: "legal-tech-ai",
    title: "Legal Technology & AI for Modern Lawyers",
    subtitle: "Harness AI tools, automation and legal tech to transform your practice.",
    description: "A forward-looking program for legal professionals who want to leverage technology competitively. Covers AI-assisted legal research, contract automation, e-discovery, and the ethical implications of legal tech in the Nigerian context.",
    instructor: "Chioma Eze",
    instructorTitle: "Legal Innovation Lead | ex-Google EMEA, LegalZoom",
    category: "Technical Skills",
    level: "Beginner",
    duration: "10 hours",
    lessons: 32,
    students: 4105,
    rating: 4.6,
    reviews: 543,
    price: 180000,
    originalPrice: 300000,
    new: true,
    image: "/images/course-legaltech.jpg",
    tags: ["Legal Tech", "AI", "Automation", "Innovation"],
    language: "English",
    certificate: true,
    learningOutcomes: [
      "Understand the current legal tech landscape and key tools",
      "Use AI for legal research, drafting and due diligence",
      "Automate repetitive contract tasks with practical tools",
      "Evaluate and implement e-discovery solutions",
      "Navigate the ethical and regulatory implications of AI in Nigerian law practice",
    ],
    requirements: [
      "No coding or technical background required",
      "Curiosity about technology and innovation in law",
    ],
    curriculum: [
      {
        section: "Module 1: The Legal Tech Revolution",
        lessons: [
          { title: "How AI is reshaping legal practice in Nigeria", duration: "18 min", free: true },
          { title: "Key legal tech tools overview", duration: "20 min", free: true },
          { title: "Case studies: law firms leading with tech", duration: "22 min" },
        ],
      },
      {
        section: "Module 2: AI-Powered Legal Research",
        lessons: [
          { title: "LawPavilion, Westlaw and AI research tools", duration: "25 min" },
          { title: "Prompt engineering for legal research", duration: "22 min" },
          { title: "Fact-checking and hallucination risks", duration: "18 min" },
        ],
      },
      {
        section: "Module 3: Contract Automation",
        lessons: [
          { title: "Document assembly tools (HotDocs, Docassemble)", duration: "20 min" },
          { title: "AI contract review (Kira, Luminance, Harvey)", duration: "25 min" },
          { title: "Building a simple automation workflow", duration: "30 min" },
        ],
      },
    ],
  },
  {
    slug: "business-strategy-executives",
    title: "Strategic Management for Senior Executives",
    subtitle: "Lead with clarity. Develop and execute strategies that drive sustainable growth.",
    description: "Designed for C-suite leaders and senior managers, this executive-level program combines frameworks from leading business schools with real-world case studies from top Nigerian and pan-African organisations.",
    instructor: "Tunde Adesanya",
    instructorTitle: "Former McKinsey Principal | MBA Lagos Business School",
    category: "Business & Management",
    level: "Advanced",
    duration: "20 hours",
    lessons: 60,
    students: 2740,
    rating: 4.9,
    reviews: 421,
    price: 450000,
    originalPrice: 750000,
    bestseller: true,
    image: "/images/course-strategy.jpg",
    tags: ["Strategy", "Leadership", "Executive", "Business"],
    language: "English",
    certificate: true,
    learningOutcomes: [
      "Apply proven strategy frameworks (Porter, Blue Ocean, BCG)",
      "Lead strategy workshops and facilitate executive alignment",
      "Develop a complete strategic plan for your organisation",
      "Manage strategic execution and KPI frameworks",
      "Anticipate and respond to competitive disruption in Nigerian markets",
      "Communicate strategy compellingly to boards and stakeholders",
    ],
    requirements: [
      "5+ years management experience recommended",
      "Senior or executive leadership role (current or aspiring)",
    ],
    curriculum: [
      {
        section: "Module 1: Strategic Analysis",
        lessons: [
          { title: "External environment analysis — PESTLE & Porter's Five Forces", duration: "25 min", free: true },
          { title: "Internal analysis — value chain and capabilities", duration: "22 min" },
          { title: "SWOT synthesis and strategic options", duration: "18 min" },
        ],
      },
      {
        section: "Module 2: Strategy Formulation",
        lessons: [
          { title: "Competitive strategy and differentiation", duration: "25 min" },
          { title: "Blue Ocean Strategy and value innovation", duration: "22 min" },
          { title: "Growth strategies — Ansoff Matrix", duration: "18 min" },
          { title: "M&A and strategic alliances in Africa", duration: "20 min" },
        ],
      },
      {
        section: "Module 3: Strategy Execution",
        lessons: [
          { title: "OKRs and Balanced Scorecard", duration: "22 min" },
          { title: "Organisational alignment and change management", duration: "25 min" },
          { title: "Strategy communication and buy-in", duration: "18 min" },
        ],
      },
    ],
  },
  {
    slug: "data-privacy-ndpr",
    title: "NDPR & Data Privacy Compliance",
    subtitle: "Become a trusted data privacy expert. Protect your organisation and your clients.",
    description: "A comprehensive, practical program on Nigeria's Data Protection Regulation (NDPR) and global data privacy frameworks. Suitable for compliance officers, legal counsel, and DPOs seeking to build or audit privacy programmes.",
    instructor: "Dr. Ngozi Obiora",
    instructorTitle: "CIPP/E | Former NITDA Senior Policy Adviser",
    category: "Legal Training",
    level: "Intermediate",
    duration: "14 hours",
    lessons: 42,
    students: 6320,
    rating: 4.8,
    reviews: 1104,
    price: 250000,
    originalPrice: 480000,
    bestseller: true,
    image: "/images/course-gdpr.jpg",
    tags: ["NDPR", "Data Privacy", "Compliance", "DPO", "NITDA"],
    language: "English",
    certificate: true,
    learningOutcomes: [
      "Understand NDPR principles and key obligations",
      "Build and audit a data protection programme",
      "Draft DSAR responses and privacy notices",
      "Conduct Data Protection Impact Assessments (DPIAs)",
      "Manage international data transfers under NDPR",
      "Navigate NITDA investigations and enforcement actions",
    ],
    requirements: [
      "Basic understanding of data processing concepts",
      "Suitable for legal, compliance, IT and HR professionals",
    ],
    curriculum: [
      {
        section: "Module 1: NDPR Foundations",
        lessons: [
          { title: "History and scope of the NDPR", duration: "15 min", free: true },
          { title: "Key definitions: personal data, processing, controller", duration: "20 min", free: true },
          { title: "Lawful bases for processing under NDPR", duration: "25 min" },
          { title: "Data subject rights", duration: "22 min" },
        ],
      },
      {
        section: "Module 2: Organisational Obligations",
        lessons: [
          { title: "Records of processing activities (ROPA)", duration: "18 min" },
          { title: "Data Protection Impact Assessments", duration: "25 min" },
          { title: "Appointing and empowering a DPO", duration: "20 min" },
          { title: "Data breach notification and response", duration: "22 min" },
        ],
      },
      {
        section: "Module 3: Enforcement & International Transfers",
        lessons: [
          { title: "Cross-border data transfers under NDPR", duration: "22 min" },
          { title: "NITDA enforcement trends and notable fines", duration: "18 min" },
          { title: "Enforcement trends and notable Nigerian cases", duration: "20 min" },
          { title: "Mock DSAR response workshop", duration: "45 min" },
        ],
      },
    ],
  },
];

export type Instructor = {
  name: string;
  title: string;
  bio: string;
  courses: number;
  students: number;
  rating: number;
  image?: string;
};

export const instructors: Instructor[] = [
  {
    name: "Barr. Adaeze Okonkwo",
    title: "Senior Partner, Okonkwo & Associates",
    bio: "20+ years advising Nigerian multinationals and government agencies on commercial contracts. Former in-house counsel at First Bank of Nigeria.",
    courses: 4,
    students: 9200,
    rating: 4.8,
  },
  {
    name: "Dr. Funmilayo Adeyemi",
    title: "Employment Law Consultant | Former Industrial Court Judge",
    bio: "15 years as an industrial court judge before transitioning to training. Has adjudicated over 2,000 employment and labour cases across Nigeria.",
    courses: 3,
    students: 12400,
    rating: 4.9,
  },
  {
    name: "Prof. Chukwuemeka Nwosu",
    title: "Professor of Corporate Law, University of Lagos",
    bio: "Author of three textbooks on Nigerian corporate governance. Adviser to NSE-listed boards and SEC Nigeria working groups on CAMA 2020.",
    courses: 2,
    students: 5100,
    rating: 4.7,
  },
  {
    name: "Chioma Eze",
    title: "Legal Innovation Lead | ex-Google EMEA",
    bio: "Pioneer in legal tech adoption across top-tier Nigerian and pan-African firms. Former head of legal operations at Google EMEA.",
    courses: 2,
    students: 7800,
    rating: 4.6,
  },
  {
    name: "Tunde Adesanya",
    title: "Former McKinsey Principal | MBA Lagos Business School",
    bio: "20 years in strategy consulting across Nigeria, West Africa and the Americas. Passionate about translating global strategy theory into boardroom results for African enterprises.",
    courses: 3,
    students: 8200,
    rating: 4.9,
  },
  {
    name: "Dr. Ngozi Obiora",
    title: "CIPP/E | Former NITDA Senior Policy Adviser",
    bio: "Shaped Nigeria's data protection policy from inside NITDA. Now advises Fortune 500 and NSE-listed companies on NDPR compliance and cross-border data strategy.",
    courses: 2,
    students: 9800,
    rating: 4.8,
  },
];

export const categories = [
  { name: "Legal Training", count: 24, icon: "⚖️", color: "#6B35A8" },
  { name: "Business & Management", count: 18, icon: "💼", color: "#4A2278" },
  { name: "Technical Skills", count: 12, icon: "💻", color: "#8B55C8" },
  { name: "Leadership", count: 10, icon: "🎯", color: "#D4AF37" },
  { name: "Compliance", count: 15, icon: "🛡️", color: "#2E7D32" },
  { name: "Finance & Tax", count: 8, icon: "📊", color: "#1565C0" },
];

export type Event = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  location: string;
  type: "Webinar" | "Workshop" | "Conference" | "Seminar" | "Masterclass";
  category: string;
  speaker: string;
  speakerTitle: string;
  price: number | "Free";
  seats: number;
  seatsLeft: number;
  tags: string[];
  description: string;
  agenda: { time: string; topic: string }[];
};

export const events: Event[] = [
  {
    slug: "cama-2020-board-directors",
    title: "CAMA 2020 & Board Directors: A Practical Masterclass",
    subtitle: "Navigate director duties, liabilities and CAMA reforms with leading corporate lawyers.",
    date: "2026-04-18",
    time: "10:00 AM – 1:00 PM WAT",
    location: "Radisson Blu Hotel, Lagos Island",
    type: "Masterclass",
    category: "Legal Training",
    speaker: "Prof. Chukwuemeka Nwosu",
    speakerTitle: "Professor of Corporate Law, University of Lagos",
    price: 45000,
    seats: 60,
    seatsLeft: 12,
    tags: ["CAMA 2020", "Corporate Governance", "Directors", "Compliance"],
    description: "A high-intensity half-day masterclass for company secretaries, directors and legal counsel on the practical implications of CAMA 2020 — from director appointment and removal to fiduciary duties and board liability under the new regime.",
    agenda: [
      { time: "10:00", topic: "Registration & Networking" },
      { time: "10:30", topic: "CAMA 2020 Overview — Key Changes for Directors" },
      { time: "11:15", topic: "Director Duties, Conflicts & Liabilities" },
      { time: "12:00", topic: "Case Study Workshop: Real CAMA Scenarios" },
      { time: "12:45", topic: "Q&A and Close" },
    ],
  },
  {
    slug: "ndpr-compliance-webinar",
    title: "NDPR Compliance in 2026: What You Must Do Now",
    subtitle: "Live webinar on the latest NITDA enforcement trends and compliance deadlines.",
    date: "2026-04-25",
    time: "2:00 PM – 3:30 PM WAT",
    location: "Online — Zoom Webinar",
    type: "Webinar",
    category: "Compliance",
    speaker: "Dr. Ngozi Obiora",
    speakerTitle: "CIPP/E | Former NITDA Senior Policy Adviser",
    price: "Free",
    seats: 500,
    seatsLeft: 248,
    tags: ["NDPR", "Data Privacy", "NITDA", "Compliance", "2026"],
    description: "As NITDA ramps up enforcement and organisations face fresh data audit cycles, this live webinar breaks down what compliance looks like in 2026 — the new obligations, common pitfalls, and how to protect your organisation from investigation and sanction.",
    agenda: [
      { time: "14:00", topic: "Welcome & NDPR Landscape in 2026" },
      { time: "14:20", topic: "Top 5 NITDA Enforcement Actions of 2025" },
      { time: "14:50", topic: "New Compliance Deadlines — What to Prepare" },
      { time: "15:10", topic: "Live Q&A with Dr. Obiora" },
    ],
  },
  {
    slug: "ai-legal-practice-workshop",
    title: "AI Tools for Legal Practice: Hands-On Workshop",
    subtitle: "A practical, tool-by-tool workshop on integrating AI into your daily legal work.",
    date: "2026-05-08",
    time: "9:00 AM – 4:00 PM WAT",
    location: "Formation Exceptionelle HQ, Victoria Island, Lagos",
    type: "Workshop",
    category: "Technical Skills",
    speaker: "Chioma Eze",
    speakerTitle: "Legal Innovation Lead | ex-Google EMEA",
    price: 75000,
    seats: 30,
    seatsLeft: 7,
    tags: ["AI", "Legal Tech", "Harvey", "Automation", "Innovation"],
    description: "Bring your laptop. This full-day hands-on workshop walks legal professionals through five AI tools transforming practice — from Harvey and Luminance to custom prompt workflows. No coding required. You will leave with real workflows you can deploy in your practice the next day.",
    agenda: [
      { time: "09:00", topic: "Registration & Setup" },
      { time: "09:30", topic: "Module 1: AI Research Tools — LawPavilion AI, Westlaw AI" },
      { time: "11:00", topic: "Module 2: Contract Review with Luminance & Kira" },
      { time: "12:30", topic: "Lunch Break" },
      { time: "13:30", topic: "Module 3: Drafting Workflows with Harvey & GPT-4" },
      { time: "15:00", topic: "Module 4: Building Your Own Automation" },
      { time: "16:00", topic: "Showcase & Certificate Distribution" },
    ],
  },
  {
    slug: "employment-law-seminar-abuja",
    title: "Employment Law Masterclass — Abuja Edition",
    subtitle: "Practical employment and labour law for HR professionals and legal counsel in the FCT.",
    date: "2026-05-22",
    time: "9:00 AM – 12:00 PM WAT",
    location: "Transcorp Hilton, Abuja",
    type: "Seminar",
    category: "Legal Training",
    speaker: "Dr. Funmilayo Adeyemi",
    speakerTitle: "Employment Law Consultant | Former Industrial Court Judge",
    price: 35000,
    seats: 80,
    seatsLeft: 34,
    tags: ["Employment Law", "Labour Law", "HR", "Abuja", "Industrial Court"],
    description: "A morning masterclass tailored for HR directors, employment lawyers, and compliance officers based in Abuja and the FCT. Focus on unfair dismissal risk, the new Labour Act amendments, and managing dispute resolution in the National Industrial Court.",
    agenda: [
      { time: "09:00", topic: "Registration & Welcome" },
      { time: "09:30", topic: "2025–2026 Labour Act Amendments" },
      { time: "10:30", topic: "Unfair Dismissal & Wrongful Termination Risk" },
      { time: "11:15", topic: "NIC Practice — What Judges Actually Want" },
      { time: "11:45", topic: "Open Q&A" },
    ],
  },
  {
    slug: "strategic-leadership-conference",
    title: "Formation Leaders Conference 2026",
    subtitle: "A full-day summit for senior executives driving change across Nigerian industries.",
    date: "2026-06-14",
    time: "8:30 AM – 6:00 PM WAT",
    location: "Eko Hotel & Suites, Victoria Island, Lagos",
    type: "Conference",
    category: "Business & Management",
    speaker: "Tunde Adesanya",
    speakerTitle: "Former McKinsey Principal | MBA Lagos Business School",
    price: 120000,
    seats: 200,
    seatsLeft: 63,
    tags: ["Leadership", "Strategy", "Executive", "Conference", "Nigeria"],
    description: "The Formation Leaders Conference brings together Nigeria's top executives, board directors, and rising leaders for a day of keynotes, panels and workshops. Six speakers. Three tracks. One room. Themes: Strategic Resilience, People-Led Growth, and Technology-Driven Transformation.",
    agenda: [
      { time: "08:30", topic: "Arrival, Networking Breakfast" },
      { time: "09:30", topic: "Opening Keynote: Leading in Uncertainty" },
      { time: "10:30", topic: "Panel: Building Boards That Drive Strategy" },
      { time: "12:00", topic: "Networking Lunch" },
      { time: "13:30", topic: "Track Sessions (Leadership / Technology / Finance)" },
      { time: "16:30", topic: "Closing Keynote: The Future of Nigerian Business" },
      { time: "17:30", topic: "Cocktail Reception" },
    ],
  },
  {
    slug: "financial-modelling-workshop",
    title: "Financial Modelling for Non-Finance Executives",
    subtitle: "Read, challenge and build financial models with confidence — no finance degree needed.",
    date: "2026-06-27",
    time: "10:00 AM – 3:00 PM WAT",
    location: "Online — Zoom Workshop",
    type: "Workshop",
    category: "Finance & Tax",
    speaker: "Barr. Adaeze Okonkwo",
    speakerTitle: "Senior Partner, Okonkwo & Associates",
    price: 50000,
    seats: 40,
    seatsLeft: 19,
    tags: ["Finance", "Modelling", "Excel", "M&A", "Executives"],
    description: "Designed for lawyers, company secretaries, and non-finance directors who need to understand and interrogate financial models. You will build a three-statement model from scratch in Excel and leave able to spot errors and ask the right questions in any financial transaction.",
    agenda: [
      { time: "10:00", topic: "Why Financial Literacy Matters for Non-Finance Leaders" },
      { time: "10:30", topic: "Reading Financial Statements Like a CFO" },
      { time: "11:30", topic: "Building a 3-Statement Model in Excel" },
      { time: "13:00", topic: "Break" },
      { time: "13:30", topic: "Stress Testing and Scenario Analysis" },
      { time: "14:30", topic: "Group Exercise: Spot the Errors" },
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  author: string;
  authorTitle: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cama-2020-directors-guide",
    title: "What Every Director Must Know About CAMA 2020",
    excerpt: "Three years on, most Nigerian boards are still misapplying key provisions of the Companies and Allied Matters Act 2020. Here's what you cannot afford to get wrong.",
    body: `The Companies and Allied Matters Act 2020 (CAMA 2020) represented the most significant overhaul of Nigerian company law in over three decades. Yet in boardrooms across Lagos, Abuja and Port Harcourt, directors and company secretaries continue to operate under assumptions formed under the old regime.

This article addresses the five areas where we most commonly observe non-compliance — and the risk that comes with each.

## 1. Single-Member Companies Are Now Legal

CAMA 2020 permits a company to have a single shareholder and a single director (Section 18). This changes estate planning, succession structures and the setup of SPVs fundamentally. The old requirement for a minimum of two shareholders is gone. Many corporate counsel are still advising clients to maintain nominee shareholding arrangements that are no longer necessary.

## 2. Electronic General Meetings Are Valid

Sections 230 and 238 of CAMA 2020 now recognise electronic and hybrid AGMs. Board resolutions, notices, and voting can all be conducted electronically with appropriate safeguards. This was a practical accommodation post-COVID that is now permanently embedded in statute — yet many boards still insist on physical quorum requirements that the law no longer demands.

## 3. The New Director Liability Exposure

CAMA 2020 expanded director liability in material ways. Section 307 introduces a statutory duty of care and diligence, codifying what was previously only common law. Directors can now be held personally liable for losses caused by negligence even where there is no fraud. This is a paradigm shift — particularly for non-executive directors who may previously have felt protected by their limited operational involvement.

## 4. Statement of Compliance Replaced by Statement of Capital

The old statutory declaration requirement has been replaced by a simpler Statement of Capital and Shareholders. But many incorporation documents filed since 2020 continue to use the old template. This is a regulatory risk that FIRS and CAC auditors are now flagging.

## 5. Mergers Below ₦500 Million Don't Require SEC Approval

One of the most practically impactful changes: mergers and acquisitions where the combined value is below ₦500 million no longer require Securities and Exchange Commission approval. This significantly speeds up M&A timelines for mid-market transactions — but lawyers who are not aware of this threshold continue to file unnecessarily, creating delay and cost.

---

Formation Exceptionelle's Corporate Governance & Board Effectiveness course covers all CAMA 2020 changes in depth, with practical case studies drawn from NSE-listed company situations.`,
    author: "Prof. Chukwuemeka Nwosu",
    authorTitle: "Professor of Corporate Law, University of Lagos",
    date: "2026-03-28",
    readTime: "7 min read",
    category: "Legal Training",
    tags: ["CAMA 2020", "Corporate Governance", "Directors", "Company Law"],
    featured: true,
  },
  {
    slug: "ai-tools-legal-professionals-nigeria",
    title: "The 5 AI Tools Every Nigerian Lawyer Should Know in 2026",
    excerpt: "From Harvey to LawPavilion AI, the tools reshaping legal practice are no longer hypothetical. Here is a practical guide to what works — and what doesn't — in the Nigerian context.",
    body: `Artificial intelligence has moved from the innovation lab to the law firm conference room. In 2026, Nigerian legal professionals who are not at least experimenting with AI tools are operating at a material disadvantage. But not every tool marketed to lawyers actually delivers in a Nigerian practice context.

Here are the five tools worth your attention — and honest notes on their limitations.

## 1. LawPavilion AI

The local leader. LawPavilion has been Nigeria's leading legal research platform for years, and its AI layer now enables natural language queries against Nigerian case law, statutes and regulations. For domestic legal research, nothing currently beats it for jurisdictional accuracy. Limitation: coverage of pre-2015 case law can be patchy.

## 2. Harvey AI

Built on a fine-tuned version of GPT-4 specifically for law firms. Exceptional at drafting, summarising, and comparing documents. Several of Nigeria's top-tier firms are now piloting it. Limitation: it does not know Nigerian law and will confidently cite non-existent Nigerian cases if you let it. You must treat all legal research outputs as requiring verification.

## 3. Luminance

The gold standard for contract review and due diligence automation. Luminance reads and classifies documents at high speed — particularly useful for M&A data rooms. Several Nigerian firms handling ECOWAS cross-border transactions are using it. Limitation: significant licensing cost makes it inaccessible to smaller practices.

## 4. Kira Systems

Specifically designed for M&A due diligence. Kira extracts defined data points from hundreds of contracts simultaneously. If you regularly conduct large data room reviews, Kira pays for itself. Limitation: setup and training time is non-trivial.

## 5. ChatGPT / Claude (with legal prompts)

General-purpose AI tools remain remarkably effective for drafting, editing, structuring arguments, and preparing client communications — when used correctly. The key is disciplined prompt engineering. A well-crafted prompt can produce a first draft that saves hours. Limitation: never cite, never rely on without verification. These are drafting assistants, not lawyers.

---

Our Legal Technology & AI for Modern Lawyers course provides hands-on training with all five tools, including prompt engineering templates specifically built for Nigerian legal practice.`,
    author: "Chioma Eze",
    authorTitle: "Legal Innovation Lead | ex-Google EMEA",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "Technical Skills",
    tags: ["AI", "Legal Tech", "Harvey", "LawPavilion", "Innovation"],
    featured: true,
  },
  {
    slug: "ndpr-enforcement-2026",
    title: "NITDA Is Coming: NDPR Enforcement in 2026",
    excerpt: "After years of issuing warnings, Nigeria's data protection regulator is now imposing material fines. What you need to do before you receive an investigation notice.",
    body: `The Nigeria Data Protection Regulation (NDPR) has been on the books since 2019. For most of its first four years, NITDA's enforcement posture was one of education and guidance. That era is over.

## The Enforcement Shift

In 2025, NITDA issued 23 formal investigation notices to organisations across the banking, healthcare, and fintech sectors. Six resulted in published enforcement decisions with fines ranging from ₦2 million to ₦45 million. The reputational damage to named organisations was as significant as the financial penalties.

In 2026, enforcement is expected to accelerate. NITDA has increased its compliance audit team and is actively receiving data breach notifications that trigger automatic investigation.

## The Three Gaps We See Most Frequently

**1. No valid lawful basis for processing.** Many organisations still collect and process personal data under vague consent provisions buried in terms and conditions. NITDA expects specific, freely given, informed and unambiguous consent — or a clearly documented alternative lawful basis.

**2. No DPO appointed or empowered.** Organisations with more than 1,000 data subjects must appoint a Data Protection Officer. Most have done so on paper. Many have not given that person the access, independence or budget to function effectively.

**3. No Data Protection Impact Assessment conducted.** Any processing that is likely to result in high risk to data subjects requires a DPIA before the processing begins. High-risk processing is more common than most organisations assume — it includes profiling, large-scale processing, and systematic monitoring.

## What to Do Now

1. Conduct a data mapping exercise to identify what personal data you hold, where it comes from, and how it is used.
2. Review and update your privacy notice to ensure it is accurate, current, and accessible.
3. Verify that your DPO has the authority, access and budget to carry out their functions.
4. Conduct a DPIA for any high-risk processing activities.
5. Ensure you have a documented breach response plan with clear notification timelines.

The cost of remediation is always lower than the cost of enforcement.`,
    author: "Dr. Ngozi Obiora",
    authorTitle: "CIPP/E | Former NITDA Senior Policy Adviser",
    date: "2026-03-14",
    readTime: "5 min read",
    category: "Compliance",
    tags: ["NDPR", "NITDA", "Data Privacy", "Compliance", "Enforcement"],
    featured: false,
  },
  {
    slug: "executive-strategy-african-markets",
    title: "Why Western Strategy Frameworks Often Fail in African Markets",
    excerpt: "Porter's Five Forces. BCG Matrix. Ansoff. These are powerful tools — but applying them without adaptation to African market dynamics produces flawed strategy. Here's how senior executives should think differently.",
    body: `In executive education classrooms from Lagos Business School to Lagos to Abuja, the same frameworks dominate strategy training: Porter's Five Forces, the BCG Matrix, SWOT analysis. These are not bad frameworks. But applying them to Nigerian and pan-African markets without adaptation consistently produces incomplete — and sometimes dangerously wrong — strategic conclusions.

## The Formalisation Problem

Porter's Five Forces assumes a formal market with defined industry boundaries, visible competitors, and structured distribution. In many Nigerian sectors, the most dangerous competition comes not from formal rivals but from the informal economy — which Porter's model completely ignores.

A bank analysing competitive forces cannot omit mobile money agents and rotating savings groups. A food manufacturer cannot ignore market traders who operate outside every formal distribution model. Any Five Forces analysis for a Nigerian business that doesn't account for the informal sector is fundamentally incomplete.

## Institutional Voids

Strategy frameworks developed in the US and Europe assume functioning institutional infrastructure: reliable contract enforcement, transparent price signals, a functioning regulatory environment. In markets with significant institutional voids — common across Sub-Saharan Africa — organisations must often perform functions that external institutions perform in developed markets.

This changes resource allocation fundamentally. A market entry strategy that works in the UK may require an entirely different operating model in a market where logistics, power supply and regulatory clarity cannot be taken for granted.

## The Political Economy Dimension

Scenario planning in African markets must model political economy risk far more explicitly than Western frameworks suggest. Regulatory changes, currency risk, government procurement cycles and sector-specific policy shifts are not tail risks — they are central strategic variables.

## What This Means Practically

Senior executives operating in Nigerian and pan-African markets need frameworks adapted to this context — not Western frameworks applied with African examples bolted on. At Formation Exceptionelle, our Strategic Management for Senior Executives course was built from the ground up for the pan-African executive context, not translated from Harvard Business School syllabi.`,
    author: "Tunde Adesanya",
    authorTitle: "Former McKinsey Principal | MBA Lagos Business School",
    date: "2026-03-07",
    readTime: "8 min read",
    category: "Business & Management",
    tags: ["Strategy", "Africa", "Executives", "Business", "Leadership"],
    featured: false,
  },
  {
    slug: "employment-law-termination-nigeria",
    title: "Getting Termination Right: The Most Common Employer Mistakes in Nigeria",
    excerpt: "Nigerian employers face a higher unfair dismissal litigation risk than most appreciate. Avoiding the most common procedural errors can save months of NIC proceedings and significant liability.",
    body: `Employment termination is one of the highest-risk moments in any employment relationship. Yet the termination process in many Nigerian organisations is managed informally, inconsistently, and in ways that create unnecessary litigation exposure.

As a former Industrial Court judge, I have seen the same employer errors repeat across hundreds of cases. Most are entirely avoidable.

## Mistake 1: Terminating Without Following the Contract

This seems obvious, but it remains the single most common error. If an employment contract requires notice, severance, or a disciplinary hearing before termination, those provisions create contractual obligations. Breaching them creates a breach of contract claim — separate from, and in addition to, any statutory unfair dismissal claim.

## Mistake 2: Confusing Termination and Dismissal

Summary dismissal — immediate termination without notice or payment — is only legally defensible where there is gross misconduct that is clearly defined and properly documented. Termination for performance, redundancy, or restructuring is a different legal process with different obligations. Many employers dismiss for performance but want to use summary dismissal procedures to avoid notice payments. This is legally risky.

## Mistake 3: No Documentation of the Process

The NIC frequently awards against employers not because the decision to terminate was wrong — but because the employer cannot demonstrate that a fair process was followed. Investigation records, disciplinary hearing minutes, warning letters, and response opportunities are all evidence of procedural fairness. Organisations that manage these processes verbally and informally have no evidence when it matters.

## Mistake 4: Inadequate or Ambiguous Redundancy Process

Redundancy is a legitimate reason to terminate employment — but it must be genuine redundancy, applied through a fair selection process, with appropriate consultation and statutory or contractual severance paid correctly. Selection for redundancy based on protected characteristics (pregnancy, trade union membership, age) is unlawful regardless of how the redundancy is framed.

## What Good Process Looks Like

A sound termination process is: documented from the outset, consistent with the employment contract and HR policy, fair in the opportunity given to the employee to respond, concluded by someone with appropriate authority, and followed by correct final payments calculated to the last naira.

This is not bureaucratic box-ticking. It is risk management.`,
    author: "Dr. Funmilayo Adeyemi",
    authorTitle: "Employment Law Consultant | Former Industrial Court Judge",
    date: "2026-02-28",
    readTime: "6 min read",
    category: "Legal Training",
    tags: ["Employment Law", "HR", "Termination", "NIC", "Nigeria"],
    featured: false,
  },
  {
    slug: "contract-drafting-common-mistakes",
    title: "7 Clause-Level Mistakes That Sink Nigerian Commercial Contracts",
    excerpt: "Poorly drafted contracts are Nigeria's most expensive legal risk. These are the seven clause-level errors our instructors see most frequently — and how to fix them.",
    body: `Contract disputes are the single largest source of commercial litigation in Nigeria. Many of them are avoidable. After reviewing thousands of commercial agreements — from bank facility letters to infrastructure concession agreements — the same drafting errors appear again and again.

## 1. Ambiguous Payment Terms

"Payment within a reasonable time" is not a payment term. It is an invitation to argue. Payment provisions must specify the amount (or formula for calculating it), the currency, the payment method, the due date, and the consequences of late payment. Every one of these elements.

## 2. Missing Force Majeure Precision

The COVID-19 period exposed how poorly drafted most Nigerian force majeure clauses were. A clause that simply lists "acts of God, government action, or other events beyond the parties' control" provides almost no certainty. A well-drafted force majeure clause defines the triggering event with specificity, requires notice within a defined period, specifies the consequence (suspension, termination, price adjustment), and excludes economic hardship from the definition.

## 3. Jurisdiction and Governing Law Mismatches

In cross-border transactions, it is common to find agreements governed by English law with an Abuja High Court jurisdiction clause. This is not necessarily wrong — but it is often unthought. The choice of governing law and forum should be deliberate, considering where enforcement will actually occur and which law gives the intended outcome.

## 4. Indemnity Scope Not Limited

Unlimited indemnities are frequently signed without proper analysis. An indemnity that covers "all losses, costs, claims and damages arising from or related to" a broadly defined event can expose a party to liabilities many multiples of the contract value. Indemnities should be narrowly scoped, capped, and subject to a duty to mitigate.

## 5. Assignment Without Consent Rights

Standard assignment clauses that allow assignment without prior written consent can result in a party finding itself in a commercial relationship with an entity it never agreed to deal with. In Nigeria's M&A environment, assignment and change of control provisions require careful attention.

## 6. Termination for Convenience Without Notice

A right to terminate "for convenience" with no minimum notice period, or with a notice period shorter than the natural performance period of the contract, can effectively render the agreement illusory — there is no real obligation if it can be escaped instantly. Courts may imply a reasonable notice obligation regardless, but this creates litigation risk.

## 7. Dispute Resolution That Nobody Will Actually Use

Arbitration clauses that reference the ICC or LCIA but fail to specify the seat, the number of arbitrators, or the language create procedural chaos when a dispute arises. Dispute resolution provisions should be drafting with the dispute actually in mind — who will initiate, where, at what cost, and how long it will take.`,
    author: "Barr. Adaeze Okonkwo",
    authorTitle: "Senior Partner, Okonkwo & Associates",
    date: "2026-02-14",
    readTime: "7 min read",
    category: "Legal Training",
    tags: ["Contract Drafting", "Commercial Law", "Negotiation", "Risk"],
    featured: false,
  },
];

export const testimonials = [
  {
    name: "Amaka Okafor",
    title: "Associate, Aelex Partners, Lagos",
    text: "The Contract Drafting course completely transformed how I approach redlines. The real-world case studies are invaluable — I've already applied the frameworks in three major transactions.",
    rating: 5,
    course: "Contract Drafting & Negotiation Mastery",
  },
  {
    name: "Emeka Eze",
    title: "Head of HR, Dangote Group",
    text: "Employment law felt intimidating before this programme. Dr. Adeyemi explains complex concepts in a way that actually sticks. My entire HR team has now enrolled.",
    rating: 5,
    course: "Employment Law Essentials",
  },
  {
    name: "Bimpe Fashola",
    title: "Company Secretary, Access Holdings Plc",
    text: "The Corporate Governance course is exactly what I needed before joining my first listed-company board. Practical, thorough, and taught by someone who genuinely understands Nigerian boards.",
    rating: 5,
    course: "Corporate Governance & Board Effectiveness",
  },
  {
    name: "Olumide Adeleke",
    title: "Managing Partner, Adeleke & Co Legal",
    text: "I was sceptical about online legal training, but Formation Exceptionelle exceeded all expectations. The instructors are world-class and the platform is beautifully designed.",
    rating: 5,
    course: "Legal Technology & AI for Modern Lawyers",
  },
];
