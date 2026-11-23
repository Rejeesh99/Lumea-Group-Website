import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import { CONTACT_INFO } from '@/data/brands';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Corporate privacy and data protection policy for LUMEA Group, LumeaCyber, LumeaNursing, LumeaSkill, and LumeaGo.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-jet text-silver py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto space-y-12">
      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
          Governance & Compliance
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          Privacy Policy
        </h1>
        <p className="text-xs text-silver font-mono">
          Last Updated: November 2026 · LUMEA Group (Kochi, Kerala, India)
        </p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">1. Commitment to Defensive Data Privacy</h2>
          <p>
            At LUMEA Group (comprising LumeaCyber, LumeaNursing, LumeaSkill, and LumeaGo), data privacy is not merely an administrative checkbox — it is a foundational tenet of our cybersecurity ethos. We are dedicated to collecting only the minimum data required to deliver our educational, consulting, and defensive services transparently.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">2. Information We Collect</h2>
          <p>When you interact with our website or submit an enquiry, we may collect:</p>
          <ul className="list-disc pl-5 space-y-1 text-silver">
            <li><strong>Identification Details:</strong> Name, professional or personal email address, contact telephone number, and organization name.</li>
            <li><strong>Service Inquiries:</strong> Selected brand of interest, service category, and specific inquiry messages provided voluntarily.</li>
            <li><strong>Technical Telemetry:</strong> Anonymized server logs including IP address, browser type, referring pages, and access timestamps solely for cybersecurity protection and performance verification.</li>
          </ul>
          <p className="p-3.5 rounded-xl bg-charcoal border border-graphite text-xs text-amber-200">
            <strong>Critical Policy Note:</strong> We strictly instruct all clients and website visitors not to transmit authentication credentials, passwords, network vulnerability details, or national identity documents (such as passports) through initial web contact forms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">3. Legal Basis & Purpose of Processing</h2>
          <p>We process your personal information under the following legitimate grounds:</p>
          <ul className="list-disc pl-5 space-y-1 text-silver">
            <li>To respond to your direct scoping queries and evaluate prospective educational or technical engagements.</li>
            <li>To execute formal contracts, nondisclosure agreements, and authorized statements of work.</li>
            <li>To ensure the defensive integrity, availability, and security of our digital platforms against malicious cyber activities.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">4. No Sale or Third-Party Monetization</h2>
          <p>
            LUMEA Group does not sell, lease, barter, or distribute your personal information to third-party advertisers, data brokers, or marketing networks. Information is accessed strictly on a need-to-know basis by authorized coordinators in Kochi, Kerala.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">5. Security & Data Retention</h2>
          <p>
            We implement industry-standard encryption in transit (TLS 1.3) and defensive boundary controls. Inquiry records are retained only for the duration necessary to satisfy the commercial, legal, and regulatory requirements of the engagement, after which they are securely sanitized.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">6. Your Rights & Data Inquiries</h2>
          <p>
            Under applicable data protection legislation (including the Digital Personal Data Protection Act and international standards), you have the right to request access to, correction of, or erasure of your personal details stored with us.
          </p>
          <p>
            To exercise your privacy rights, please contact our Data Governance Officer at:{' '}
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-cerulean font-mono underline">
              {CONTACT_INFO.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
