import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Cookie, Settings } from 'lucide-react';
import { CONTACT_INFO } from '@/data/brands';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Detailed information on how LUMEA Group uses essential cookies and anonymized telemetry.',
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-jet text-silver py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto space-y-12">
      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
          Data Governance
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          Cookie Policy
        </h1>
        <p className="text-xs text-silver font-mono">
          Last Updated: November 2026 · LUMEA Group
        </p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">1. What Are Cookies?</h2>
          <p>
            Cookies are compact data files placed on your computer or mobile device when you browse websites. They are universally utilized to enhance site operation, security integrity, and session continuity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">2. How LUMEA Group Uses Cookies</h2>
          <p>
            We strictly adhere to a minimal-cookie architecture. We categorize cookies into:
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-charcoal border border-graphite space-y-1">
              <strong className="text-white block font-semibold">Strictly Essential Cookies</strong>
              <p className="text-xs text-silver">
                These cookies are strictly required for security validation, anti-spam form defense, session navigation, and preserving your selected cookie consent preference. They do not store personally identifiable profiles.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-charcoal border border-graphite space-y-1">
              <strong className="text-white block font-semibold">Anonymized Performance & Telemetry</strong>
              <p className="text-xs text-silver">
                Aggregated, privacy-sanitized metrics that help our engineering team identify broken hyperlinks, track load latency across mobile devices, and maintain Core Web Vitals.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">3. Third-Party Advertising Trackers</h2>
          <p>
            LUMEA Group does not deploy third-party advertising cookies, cross-site tracking pixels, or invasive behavioral retargeting scripts on our corporate web properties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">4. Managing Your Preferences</h2>
          <p>
            You can modify or revoke your cookie choices at any time through your browser settings or by clearing your browser cache. For further questions regarding our cookie implementation, contact us at{' '}
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-cerulean font-mono underline">
              {CONTACT_INFO.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
