import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { SapSubService } from '@/components/sap/SapSubService';
import { SapCtaBanner } from '@/components/sap/SapCtaBanner';

export const metadata: Metadata = {
  title: 'SAP Ecosystem — Enterprise Services | Quantinev',
  description:
    'Deep SAP expertise — S/4HANA migrations, ABAP development, Basis administration, and SD/FICO consulting — fully integrated with modern AI and cloud.',
};

const sapServices = [
  {
    id: 's4hana',
    title: 'SAP S/4HANA Ecosystem',
    description:
      'Comprehensive S/4HANA services covering migration from ECC, greenfield implementations, and ongoing optimization to unlock the full potential of your SAP investment.',
    features: [
      'Brownfield and greenfield S/4HANA migration strategies',
      'System conversion and data migration planning',
      'Fiori UX implementation and role-based design',
      'Performance optimization and system health checks',
      'Integration with cloud platforms (AWS, Azure, GCP)',
    ],
  },
  {
    id: 'abap',
    title: 'SAP ABAP Development',
    description:
      'Custom ABAP development that extends and enhances your SAP environment — from reports and interfaces to complex workflow automation and BTP extensions.',
    features: [
      'Custom reports, forms, and enhancements (RICEFW)',
      'BADI/BTE implementations and user exits',
      'CDS views, AMDP, and RAP model development',
      'SAP BTP/Cloud Platform ABAP environment',
      'Legacy code optimization and modernization',
    ],
  },
  {
    id: 'basis',
    title: 'SAP Basis Administration',
    description:
      'Enterprise-grade Basis services ensuring your SAP systems run at peak performance with maximum uptime, security, and compliance.',
    features: [
      'System installation, patching, and upgrades',
      'Transport management and landscape design',
      'Performance monitoring and tuning',
      'Security hardening and audit compliance',
      'Disaster recovery and high-availability architecture',
    ],
  },
  {
    id: 'sd-fico',
    title: 'Functional Consulting — SD & FICO',
    description:
      'Deep process expertise in Sales & Distribution and Financial Accounting & Controlling, translating business requirements into optimized SAP configurations.',
    features: [
      'SD: Order-to-cash process design and optimization',
      'SD: Pricing, output, and partner determination config',
      'FICO: General ledger, AP/AR, and asset accounting',
      'FICO: Cost center, profit center, and internal orders',
      'Cross-module integration (SD-FICO-MM-PP)',
    ],
  },
];

export default function EnterpriseCorePage() {
  return (
    <>
      <PageHero
        label="SAP Ecosystem"
        title="SAP Expertise. Modernized."
        description="The deep SAP technicals your enterprise depends on — S/4HANA, ABAP, Basis, SD & FICO — delivered by architects with 10–20+ years of specialization, and integrated with modern AI and cloud."
        ctaText="Get SAP Consultation"
        ctaHref="/contact"
      />

      {sapServices.map((service, i) => (
        <SapSubService
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          features={service.features}
          index={i}
        />
      ))}

      <SapCtaBanner />
    </>
  );
}
