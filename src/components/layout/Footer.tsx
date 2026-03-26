import Link from 'next/link';
import { Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '@/lib/constants';

function FooterLinkGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-gray-400 hover:text-accent-blue transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="gradient-navy border-t border-white/10">
      <div className="container-max mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent-blue flex items-center justify-center">
                <span className="text-white font-bold text-lg">Q</span>
              </div>
              <span className="text-xl font-bold text-white">Quantinev</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {COMPANY_INFO.tagline}. AI-powered software, cloud infrastructure,
              and enterprise-grade solutions.
            </p>
            <div className="flex gap-3">
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent-blue hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent-blue hover:text-white transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <FooterLinkGroup
            title="Company"
            links={NAV_LINKS.map((l) => ({ label: l.label, href: l.href }))}
          />

          {/* Services */}
          <FooterLinkGroup
            title="Services"
            links={[
              { label: 'AI & Machine Learning', href: '/services#ai-ml' },
              { label: 'Custom Software', href: '/services#web-mobile' },
              { label: 'Cloud & DevOps', href: '/services#cloud-devops' },
              { label: 'SAP Ecosystem', href: '/enterprise-core' },
              { label: 'Industries', href: '/industries' },
            ]}
          />

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent-blue" />
                {COMPANY_INFO.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-accent-blue" />
                {COMPANY_INFO.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-accent-blue" />
                {COMPANY_INFO.email}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Quantinev. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
