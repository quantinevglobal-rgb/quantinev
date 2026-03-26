import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { ServiceBlock } from '@/components/services/ServiceBlock';
import { ServicesCta } from '@/components/services/ServicesCta';

export const metadata: Metadata = {
  title: 'Custom Software & AI Services | Quantinev',
  description:
    'Modern web & mobile development, AI/ML integration, and cloud-native DevOps solutions for enterprise clients.',
};

const serviceBlocks = [
  {
    id: 'web-mobile',
    label: 'Web & Mobile Development',
    title: 'Modern Applications Built for Scale',
    description:
      'We design and engineer high-performance web and mobile applications using React, Next.js, and cloud-native architectures that serve millions.',
    features: [
      {
        icon: 'Monitor',
        title: 'React & Next.js Development',
        text: 'Server-rendered, statically generated, and hybrid applications with blazing-fast performance.',
      },
      {
        icon: 'Smartphone',
        title: 'Mobile Applications',
        text: 'Cross-platform mobile apps with React Native, delivering native-quality experiences.',
      },
      {
        icon: 'Layers',
        title: 'Complex Frontend Architecture',
        text: 'Micro-frontends, design systems, and state management for enterprise-scale UIs.',
      },
      {
        icon: 'Server',
        title: 'API & Backend Development',
        text: 'RESTful and GraphQL APIs built with Node.js, Python, and Java for high throughput.',
      },
      {
        icon: 'GitBranch',
        title: 'Headless CMS Integration',
        text: 'Content-driven platforms with Sanity, Strapi, or Contentful for flexible content management.',
      },
      {
        icon: 'TestTube',
        title: 'Quality & Testing',
        text: 'Automated testing suites, CI/CD pipelines, and performance benchmarking.',
      },
    ],
  },
  {
    id: 'ai-integration',
    label: 'AI & ML Integration',
    title: 'Intelligent Systems for Enterprise',
    description:
      'We embed machine learning, large language models, and predictive analytics directly into your business workflows and custom applications.',
    features: [
      {
        icon: 'Brain',
        title: 'LLM & GPT Integration',
        text: 'Embed OpenAI, custom GPT models, and LangChain into enterprise workflows securely.',
      },
      {
        icon: 'BarChart3',
        title: 'Predictive Analytics',
        text: 'TensorFlow and PyTorch models for demand forecasting, risk analysis, and optimization.',
      },
      {
        icon: 'MessageSquare',
        title: 'Conversational AI',
        text: 'Intelligent chatbots and virtual assistants powered by NLP for customer and employee support.',
      },
      {
        icon: 'Workflow',
        title: 'Process Automation',
        text: 'AI-driven automation for document processing, data extraction, and decision support.',
      },
      {
        icon: 'Shield',
        title: 'Enterprise AI Security',
        text: 'Secure model deployment, data privacy compliance, and responsible AI governance.',
      },
      {
        icon: 'Database',
        title: 'Data Pipeline Engineering',
        text: 'ETL/ELT pipelines, data lakes, and real-time streaming for AI-ready data infrastructure.',
      },
    ],
  },
  {
    id: 'cloud-devops',
    label: 'Cloud & DevOps',
    title: 'Infrastructure That Scales With You',
    description:
      'Enterprise-grade cloud infrastructure, automation, and DevOps practices that ensure reliability, security, and cost-efficiency.',
    features: [
      {
        icon: 'Cloud',
        title: 'Multi-Cloud Architecture',
        text: 'AWS, Azure, and GCP solutions designed for high availability and compliance.',
      },
      {
        icon: 'Container',
        title: 'Containerization & Orchestration',
        text: 'Docker and Kubernetes for microservices, scaling, and zero-downtime deployments.',
      },
      {
        icon: 'RefreshCw',
        title: 'CI/CD Pipelines',
        text: 'Automated build, test, and deployment pipelines for rapid, reliable releases.',
      },
      {
        icon: 'Lock',
        title: 'Security & Compliance',
        text: 'Infrastructure-as-code, secrets management, and compliance automation.',
      },
      {
        icon: 'Activity',
        title: 'Monitoring & Observability',
        text: 'End-to-end monitoring with alerting, logging, and distributed tracing.',
      },
      {
        icon: 'DollarSign',
        title: 'Cost Optimization',
        text: 'FinOps practices, right-sizing, and reserved capacity management.',
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Custom Software & AI Solutions"
        description="Modern web development, AI/ML integration, and cloud-native DevOps — engineered for enterprise complexity and scale."
        ctaText="Discuss Your Project"
        ctaHref="/contact"
      />

      {serviceBlocks.map((block, i) => (
        <ServiceBlock
          key={block.id}
          id={block.id}
          label={block.label}
          title={block.title}
          description={block.description}
          features={block.features}
          index={i}
        />
      ))}

      <ServicesCta />
    </>
  );
}
