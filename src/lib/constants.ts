// ─── Navigation ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Services', href: '/services', megaMenu: true },
  { label: 'Industries', href: '/industries' },
  { label: 'SAP Ecosystem', href: '/enterprise-core' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Company', href: '/company' },
] as const;

export const SERVICES_MEGA_MENU = [
  {
    category: 'Custom Software',
    items: [
      { label: 'Web Applications', href: '/services#web-mobile', description: 'React, Next.js & full-stack platforms' },
      { label: 'Mobile Development', href: '/services#web-mobile', description: 'Cross-platform native experiences' },
      { label: 'API & Backend', href: '/services#web-mobile', description: 'High-throughput APIs & microservices' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    items: [
      { label: 'LLM & GPT Integration', href: '/services#ai-integration', description: 'Enterprise-ready AI workflows' },
      { label: 'Predictive Analytics', href: '/services#ai-integration', description: 'TensorFlow, PyTorch & custom models' },
      { label: 'Conversational AI', href: '/services#ai-integration', description: 'Intelligent chatbots & assistants' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { label: 'Multi-Cloud Architecture', href: '/services#cloud-devops', description: 'AWS, Azure & GCP solutions' },
      { label: 'CI/CD Pipelines', href: '/services#cloud-devops', description: 'Automated build, test & deploy' },
      { label: 'Security & Compliance', href: '/services#cloud-devops', description: 'Infrastructure-as-code & audits' },
    ],
  },
] as const;

// ─── Company ──────────────────────────────────────────────────
export const COMPANY_INFO = {
  name: 'Quantinev',
  tagline: 'Innovation First. Enterprise Always.',
  email: 'quantinev.global@gmail.com',
  phone: '+44 (7751) 988-524',
  address: 'United Kingdom',
  social: {
    linkedin: 'https://linkedin.com/company/quantinev',
    github: 'https://github.com/quantinev',
  },
} as const;

// ─── Service Pillars (Home — innovation-first order) ──────────
export const SERVICE_PILLARS = [
  {
    title: 'AI & Machine Learning',
    description:
      'From GPT-powered workflows to predictive analytics — we embed intelligence directly into your products and operations.',
    icon: 'Brain',
    href: '/services#ai-integration',
  },
  {
    title: 'Custom Software Development',
    description:
      'High-performance web and mobile applications built with React, Next.js, and cloud-native architectures.',
    icon: 'Code2',
    href: '/services#web-mobile',
  },
  {
    title: 'Cloud & DevOps',
    description:
      'AWS, Azure, and GCP infrastructure automation, CI/CD pipelines, and zero-downtime deployments.',
    icon: 'Cloud',
    href: '/services#cloud-devops',
  },
] as const;

// ─── Tech Stack ───────────────────────────────────────────────
export const TECH_STACK = {
  ai: [
    'OpenAI API',
    'LangChain',
    'TensorFlow',
    'PyTorch',
    'Predictive Analytics',
  ],
  frontend: ['React', 'Next.js', 'Angular', 'Vue.js', 'TypeScript'],
  backend: ['Node.js', 'Python', 'Java', 'AWS', 'Azure', 'GCP'],
  enterprise: [
    'SAP S/4HANA',
    'SAP ABAP',
    'SAP Basis',
    'SAP SD',
    'SAP FICO',
  ],
} as const;

// ─── Expert Panel ─────────────────────────────────────────────
export const EXPERT_PANEL = [
     {
    title: 'AI/ML Lead Architect',
    experience: '20+ Years',
    specialization: 'Designing and implementing AI/ML solutions for enterprise applications.',
  },
  {
    title: 'SAP Solution Architect',
    experience: '20+ Years',
    specialization: 'S/4HANA migrations and enterprise architecture.',
  },
  {
    title: 'Senior DevOps Expert',
    experience: '20+ Years',
    specialization: 'AWS/Azure infrastructure automation and security.',
  },
  {
    title: 'AWS Solutions Architect',
    experience: '10 Years',
    specialization: 'Cloud-native integration and scalability.',
  },
  {
    title: 'Senior Frontend Architect',
    experience: '10 Years',
    specialization: 'React, Next.js, and complex user interfaces.',
  },
  {
    title: 'SAP ABAP Lead Developer',
    experience: '10 Years',
    specialization: 'Custom development and process enhancement.',
  },
  {
    title: 'Full Stack AI Engineer',
    experience: '5 Years',
    specialization: 'Integrating AI models into web applications.',
  },
  {
    title: 'SAP FICO Consultant',
    experience: '5 Years',
    specialization: 'Financial process optimization.',
  },
] as const;

// ─── Leadership ───────────────────────────────────────────────
export const LEADERSHIP = [
  {
    name: 'Ishtiaq Ali',
    role: 'Founder',
    focus: 'Technology-Led Business Transformation',
    bio: 'Visionary behind Quantinev\'s mission to fuse enterprise depth with startup-speed innovation. Ishtiaq drives the strategic direction that turns complex technology challenges into competitive advantages.',
  },
  {
    name: 'M. Umair Ali',
    role: 'CTO',
    focus: 'Complex, High-Scale System Architecture',
    bio: 'Architect of Quantinev\'s technical vision. Umair designs the large-scale distributed systems, AI pipelines, and cloud architectures that power our clients\' most ambitious products.',
  },
] as const;

// ─── Industries ───────────────────────────────────────────────
export const INDUSTRIES = [
  {
    slug: 'fintech',
    title: 'Fintech',
    icon: 'Landmark',
    headline: 'Accelerating Financial Innovation',
    description:
      'From real-time payment platforms to AI-driven risk scoring — we build the digital infrastructure that powers modern finance.',
    highlights: [
      'Regulatory-compliant cloud architecture',
      'AI-powered fraud detection & risk analysis',
      'Real-time transaction processing platforms',
      'Open Banking API integrations',
      'SAP FICO optimization for financial institutions',
    ],
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    icon: 'HeartPulse',
    headline: 'Engineering Healthier Outcomes',
    description:
      'Secure, HIPAA-compliant platforms that connect patients, providers, and data for smarter care delivery.',
    highlights: [
      'HIPAA & GDPR-compliant infrastructure',
      'AI-assisted diagnostics & imaging analysis',
      'Telemedicine & patient portal platforms',
      'EHR/EMR integration & interoperability',
      'Predictive analytics for population health',
    ],
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    icon: 'Building2',
    headline: 'Digitizing Property & Space',
    description:
      'PropTech solutions that streamline property management, automate valuations, and elevate tenant experiences.',
    highlights: [
      'AI-driven property valuation models',
      'Smart building IoT integration',
      'Tenant & lease management platforms',
      'Virtual tour & 3D visualization tools',
      'Data-driven investment analytics',
    ],
  },
  {
    slug: 'logistics',
    title: 'Logistics',
    icon: 'Truck',
    headline: 'Optimizing the Supply Chain',
    description:
      'End-to-end visibility and AI-optimized routing for supply chains that need to move faster and smarter.',
    highlights: [
      'Real-time fleet tracking & route optimization',
      'AI-powered demand forecasting',
      'Warehouse automation & robotics integration',
      'SAP SD integration for order-to-delivery',
      'Cross-border compliance automation',
    ],
  },
  {
    slug: 'retail',
    title: 'Retail',
    icon: 'ShoppingCart',
    headline: 'Powering Modern Retail & POS',
    description:
      'Inventory management, POS systems, and AI-driven analytics for retail businesses — from mobile phone shops to multi-location chains.',
    highlights: [
      'Custom POS system development',
      'Mobile phone inventory & IMEI tracking',
      'Multi-location stock management',
      'AI-powered sales forecasting & demand planning',
      'Omnichannel e-commerce integration',
    ],
  },
  {
    slug: 'restaurant',
    title: 'Restaurant',
    icon: 'UtensilsCrossed',
    headline: 'Smart Restaurant Management',
    description:
      'End-to-end restaurant management systems — from table reservations and kitchen displays to delivery integration and real-time analytics.',
    highlights: [
      'Restaurant management system (RMS) development',
      'Digital menu & QR-based ordering platforms',
      'Kitchen display system (KDS) integration',
      'Delivery app & aggregator integration',
      'Real-time sales & inventory analytics dashboards',
    ],
  },
] as const;

// ─── Case Studies ─────────────────────────────────────────────
export const CASE_STUDIES = [
  {
    slug: 'fintech-ai-fraud-detection',
    title: 'AI-Powered Fraud Detection for a Global Payments Platform',
    client: 'Leading Fintech Enterprise',
    industry: 'Fintech',
    services: ['AI & Machine Learning', 'Cloud & DevOps'],
    challenge:
      'Processing 2M+ daily transactions with legacy rule-based fraud detection that missed sophisticated attack patterns.',
    solution:
      'Deployed a real-time ML pipeline using TensorFlow and LangChain that analyzes transaction patterns, reducing false positives by 60% and catching 94% of fraudulent transactions.',
    results: [
      '94% fraud detection accuracy',
      '60% reduction in false positives',
      '$12M annual savings in fraud losses',
      'Sub-200ms inference latency',
    ],
    techStack: ['TensorFlow', 'Python', 'AWS', 'React', 'Next.js'],
  },
  {
    slug: 's4hana-migration-manufacturing',
    title: 'SAP S/4HANA Migration for a Fortune 500 Manufacturer',
    client: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    services: ['Enterprise Core', 'Cloud & DevOps'],
    challenge:
      'Migrating a 15-year-old SAP ECC landscape to S/4HANA with zero business disruption across 23 global sites.',
    solution:
      'Executed a phased brownfield migration with custom ABAP modernization, Fiori UX rollout, and AWS cloud hosting — delivered on time and under budget.',
    results: [
      'Zero-downtime migration across 23 sites',
      '40% improvement in report generation speed',
      '3x faster month-end close',
      '$2.4M under budget',
    ],
    techStack: ['SAP S/4HANA', 'SAP ABAP', 'AWS', 'SAP Fiori'],
  },
  {
    slug: 'healthcare-telemedicine-platform',
    title: 'HIPAA-Compliant Telemedicine Platform',
    client: 'National Healthcare Provider',
    industry: 'Healthcare',
    services: ['Custom Software', 'Cloud & DevOps'],
    challenge:
      'Needed a scalable telemedicine platform supporting 50,000+ concurrent video sessions with full HIPAA compliance.',
    solution:
      'Built a Next.js + WebRTC platform on AWS with end-to-end encryption, auto-scaling infrastructure, and integrated EHR connectivity.',
    results: [
      '50K+ concurrent sessions supported',
      '99.97% uptime in first year',
      '4.8/5.0 patient satisfaction score',
      'Full HIPAA & SOC 2 compliance',
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'AWS', 'WebRTC'],
  },
  {
    slug: 'logistics-supply-chain-ai',
    title: 'AI-Optimized Supply Chain for Continental Logistics',
    client: 'Tier-1 Logistics Provider',
    industry: 'Logistics',
    services: ['AI & Machine Learning', 'Custom Software'],
    challenge:
      'Manual route planning across 8,000 daily shipments causing 18% over-budget fuel costs and frequent SLA misses.',
    solution:
      'Developed a PyTorch-based route optimization engine integrated with real-time GPS, weather, and traffic APIs — wrapped in a React dashboard for dispatchers.',
    results: [
      '22% reduction in fuel costs',
      '97% on-time delivery rate (up from 81%)',
      '3.2x faster route planning',
      'ROI achieved in 4 months',
    ],
    techStack: ['PyTorch', 'Python', 'React', 'Node.js', 'Azure'],
  },
] as const;
