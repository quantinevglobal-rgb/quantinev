import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Quantinev | Innovation First. Enterprise Always.',
  description:
    'AI-powered software, custom development, cloud infrastructure, and deep SAP expertise. We build the technology that moves industries forward.',
  keywords: [
    'AI Software Development',
    'Custom Software Development',
    'Machine Learning',
    'Cloud & DevOps',
    'SAP Consulting',
    'Enterprise Technology',
    'S/4HANA',
  ],
  openGraph: {
    title: 'Quantinev | Innovation First. Enterprise Always.',
    description:
      'AI, custom software, cloud, and SAP expertise — under one roof. See what we build.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
