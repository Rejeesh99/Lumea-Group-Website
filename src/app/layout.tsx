import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/ui/CookieBanner';
import { BackToTop } from '@/components/ui/BackToTop';
import { LumeaChatbot } from '@/components/chatbot/LumeaChatbot';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lumeagroup.in'),
  title: {
    default: 'LUMEA Group — Securing the Digital World. Enabling Human Progress.',
    template: '%s | LUMEA Group'
  },
  description: 'An internationally ambitious, cybersecurity-led technology group uniting LumeaCyber, LumeaNursing, LumeaSkill, and LumeaGo across cybersecurity, AI, health pedagogy, and global education.',
  keywords: [
    'LUMEA Group',
    'LumeaCyber',
    'LumeaNursing',
    'LumeaSkill',
    'LumeaGo',
    'Cybersecurity Kochi',
    'AI and Data Science',
    'Nursing Education Technology',
    'German Language Learning',
    'OET Preparation',
    'Study Abroad Guidance Kochi'
  ],
  authors: [{ name: 'LUMEA Group Corporate Communications' }],
  creator: 'LUMEA Group',
  publisher: 'LUMEA Group',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.lumeagroup.in',
    siteName: 'LUMEA Group',
    title: 'LUMEA Group — Securing the Digital World. Enabling Human Progress.',
    description: 'A cybersecurity-led technology group bringing together cybersecurity, AI, healthcare pedagogy, languages, and global education.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LUMEA Group — Corporate Overview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUMEA Group',
    description: 'Securing the digital world. Enabling human progress.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LUMEA Group',
    url: 'https://www.lumeagroup.in',
    logo: 'https://www.lumeagroup.in/logo.png',
    description: 'Securing the digital world. Enabling human progress. A cybersecurity-led technology group comprising LumeaCyber, LumeaNursing, LumeaSkill, and LumeaGo.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kochi',
      addressRegion: 'Kerala',
      addressCountry: 'India'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-90379-98980',
        contactType: 'customer support',
        email: 'contact@lumeagroup.in',
        availableLanguage: ['English', 'Malayalam']
      }
    ],
    subOrganization: [
      {
        '@type': 'Organization',
        name: 'LumeaCyber',
        description: 'Cybersecurity, AI & Data Science'
      },
      {
        '@type': 'Organization',
        name: 'LumeaNursing',
        description: 'Nursing Education Technology'
      },
      {
        '@type': 'Organization',
        name: 'LumeaSkill',
        description: 'Skills, Languages & Careers'
      },
      {
        '@type': 'Organization',
        name: 'LumeaGo',
        description: 'Global Education Guidance'
      }
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-jet text-silver antialiased flex flex-col selection:bg-cerulean selection:text-jet">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <BackToTop />
        <LumeaChatbot />
      </body>
    </html>
  );
}
