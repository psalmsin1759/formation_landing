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
