export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: number;
  featured?: boolean;
  coverGradient: string;
}

export const categories = [
  "All",
  "Corporate Finance",
  "CFO Insights",
  "Corporate Governance",
  "Treasury & Banking",
  "Tax & VAT",
  "Procurement",
  "Business Management",
  "Leadership",
  "Industry Insights",
  "Career & Professional Development",
  "Personal Reflections",
];

export const articles: Article[] = [
  {
    slug: "cfo-as-strategic-business-partner",
    title: "The CFO as Strategic Business Partner: Beyond the Numbers",
    excerpt:
      "The modern CFO role has evolved far beyond financial reporting. In this insight, I explore how finance executives can position themselves as genuine business partners — driving strategy, enabling better decisions, and creating organizational value at the highest level.",
    category: "CFO Insights",
    date: "2025-07-15",
    readingTime: 8,
    featured: true,
    coverGradient: "from-[#0a1628] via-[#0d1f3c] to-[#060e1c]",
  },
  {
    slug: "corporate-governance-sme",
    title: "Why Corporate Governance Matters for SMEs and Family-Owned Businesses",
    excerpt:
      "Corporate governance is not just for listed companies. Family-owned businesses and SMEs that invest early in governance frameworks — delegation of authority, internal controls, board advisory — build more resilient and scalable organizations.",
    category: "Corporate Governance",
    date: "2025-06-28",
    readingTime: 6,
    coverGradient: "from-[#0d1628] via-[#121c30] to-[#080e1a]",
  },
  {
    slug: "working-capital-optimization",
    title: "Working Capital Optimization: A Practical CFO Perspective",
    excerpt:
      "Cash is the lifeblood of any business. This insight explores the practical levers for working capital improvement — receivables management, payables strategy, inventory control — and how a CFO can lead this agenda across the organization.",
    category: "Corporate Finance",
    date: "2025-06-10",
    readingTime: 7,
    coverGradient: "from-[#0a1a20] via-[#0d1e28] to-[#060e14]",
  },
  {
    slug: "treasury-risk-management",
    title: "Treasury Risk Management in a Volatile Economic Environment",
    excerpt:
      "Rising interest rates, currency volatility, and tightening credit conditions create complex treasury management challenges. I outline a structured approach to identifying, measuring, and mitigating treasury risks — drawn from direct CFO experience.",
    category: "Treasury & Banking",
    date: "2025-05-20",
    readingTime: 9,
    coverGradient: "from-[#0a1420] via-[#0c1828] to-[#060c14]",
  },
  {
    slug: "vat-compliance-bangladesh",
    title: "VAT Compliance for Corporate Finance Teams: Common Pitfalls to Avoid",
    excerpt:
      "VAT management in Bangladesh remains one of the most operationally demanding compliance obligations for finance teams. This article outlines the most common compliance failures and the organizational controls that prevent them.",
    category: "Tax & VAT",
    date: "2025-05-05",
    readingTime: 6,
    coverGradient: "from-[#141020] via-[#181428] to-[#0a0814]",
  },
  {
    slug: "donor-funded-project-finance",
    title: "Financial Management in Donor-Funded Development Projects",
    excerpt:
      "Managing finances for internationally funded development projects demands a distinct skill set. This insight covers the key requirements: donor-compliant reporting, budget monitoring, internal controls, and audit readiness — built from direct consulting experience.",
    category: "Corporate Finance",
    date: "2025-04-18",
    readingTime: 8,
    coverGradient: "from-[#0a1820] via-[#0c1e28] to-[#060e14]",
  },
  {
    slug: "internal-control-framework",
    title: "Building an Effective Internal Control Framework: A Practical Guide",
    excerpt:
      "Internal controls are not bureaucracy — they are the infrastructure of organizational trust. This article presents a pragmatic approach to designing and implementing an internal control framework that actually works in practice.",
    category: "Corporate Governance",
    date: "2025-03-30",
    readingTime: 7,
    coverGradient: "from-[#0e1428] via-[#121830] to-[#080c18]",
  },
  {
    slug: "banking-relationship-management",
    title: "Managing Bank Relationships: What CFOs Need to Know",
    excerpt:
      "A strong banking relationship is a strategic asset. This insight explores how CFOs can build and maintain productive relationships with their banking partners — from facility negotiations to credit management and covenant compliance.",
    category: "Treasury & Banking",
    date: "2025-03-12",
    readingTime: 6,
    coverGradient: "from-[#0a1420] via-[#0c1828] to-[#060c14]",
  },
  {
    slug: "procurement-governance",
    title: "Procurement Governance: Reducing Risk Through Better Controls",
    excerpt:
      "Weak procurement governance is one of the most significant sources of financial and reputational risk for organizations. I outline the key governance mechanisms — procurement policies, approval frameworks, vendor evaluation — that CFOs should champion.",
    category: "Procurement",
    date: "2025-02-25",
    readingTime: 5,
    coverGradient: "from-[#141828] via-[#181c30] to-[#0a0e18]",
  },
  {
    slug: "finance-leadership-career",
    title: "Building a Career in Finance Leadership: Lessons from 22+ Years",
    excerpt:
      "Reflecting on over two decades of progressive finance leadership — from accounts management to CFO — I share the career principles, qualifications, and professional habits that have shaped my journey and advisory practice.",
    category: "Career & Professional Development",
    date: "2025-02-10",
    readingTime: 10,
    coverGradient: "from-[#0e1020] via-[#121428] to-[#080a14]",
  },
  {
    slug: "erp-mis-management-reporting",
    title: "ERP & MIS: Making Management Reporting Actually Useful",
    excerpt:
      "Too many organizations invest heavily in ERP systems but still produce management reports that don't support real decisions. This insight explores how CFOs can redesign MIS and reporting to deliver genuine decision intelligence.",
    category: "Business Management",
    date: "2025-01-20",
    readingTime: 7,
    coverGradient: "from-[#0a1428] via-[#0c1830] to-[#060c18]",
  },
  {
    slug: "leadership-finance-executive",
    title: "Leadership Lessons for Finance Executives: Earning the Seat at the Table",
    excerpt:
      "Technical expertise gets you into the finance function. Leadership capability earns you a seat at the strategic table. I explore the leadership competencies that distinguish finance executives who transform organizations from those who merely report on them.",
    category: "Leadership",
    date: "2025-01-05",
    readingTime: 8,
    coverGradient: "from-[#0e1820] via-[#121e28] to-[#080e14]",
  },
];
