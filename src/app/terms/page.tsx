import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldAlert, Scale, FileText } from 'lucide-react';
import { CONTACT_INFO } from '@/data/brands';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions governing the use of LUMEA Group web properties, security assessments, and educational services.',
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-jet text-silver py-16 md:py-24 px-4 sm:px-6 max-w-4xl mx-auto space-y-12">
      <div className="space-y-4">
        <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
          Legal Agreement
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          Terms of Service
        </h1>
        <p className="text-xs text-silver font-mono">
          Last Updated: November 2026 · LUMEA Group (Kochi, Kerala, India)
        </p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-slate-300">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">1. Acceptance of Terms</h2>
          <p>
            By accessing or utilizing the website and digital resources operated by LUMEA Group (together with its verticals LumeaCyber, LumeaNursing, LumeaSkill, and LumeaGo), you agree to be bound by these Terms of Service. If you do not agree to these terms, you must refrain from using our platforms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">2. Cybersecurity Testing & Legal Authorisation (LumeaCyber)</h2>
          <p>
            All defensive testing, vulnerability assessments, and simulated offensive drills provided by LumeaCyber are executed exclusively under formal, written, bilateral legal agreements with verified asset owners.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-silver">
            <li>No testing is conducted without an executed Non-Disclosure Agreement (NDA) and Statement of Work (SOW).</li>
            <li>LumeaCyber does not guarantee 100% invulnerability or promise complete immunity from cyber attacks.</li>
            <li>Visitors are strictly forbidden from attempting to penetrate, probe, or scan our own infrastructure without explicit written consent.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">3. Healthcare & Nursing Education Scope (LumeaNursing)</h2>
          <p>
            LumeaNursing provides supplementary digital courseware, clinical reasoning scenarios, and continuing professional development.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-silver">
            <li>LumeaNursing is not a statutory nursing registration council and does not confer legal licenses to practise nursing.</li>
            <li>Our modules do not replace accredited statutory degree programmes.</li>
            <li>We do not guarantee hospital employment, placements, or overseas migration.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">4. Language & Exam Training Scope (LumeaSkill)</h2>
          <p>
            LumeaSkill delivers training for languages (such as CEFR German) and standardized examinations (IELTS, OET).
          </p>
          <ul className="list-disc pl-5 space-y-1 text-silver">
            <li>Schedules, batch capacities, and intake calendars are subject to formal confirmation by administration.</li>
            <li>LumeaSkill does not claim unverified examination council partnerships or guarantee specific band scores or examination outcomes.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">5. Global Education Guidance Scope (LumeaGo)</h2>
          <p>
            LumeaGo provides student-first educational counselling and pre-departure advisory.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-silver">
            <li>We strictly never guarantee university admissions, student visa issuances, scholarships, or employment.</li>
            <li>Initial website enquiries never require submission of passport numbers or sensitive financial documents.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">6. Intellectual Property & Governing Law</h2>
          <p>
            All content, corporate trademarks, branding materials, visual designs, and software code on this website are the proprietary intellectual property of LUMEA Group. Unauthorized reproduction, scraping, or redistribution is prohibited.
          </p>
          <p>
            These terms are governed by and construed in accordance with the laws of India. Any legal dispute arising under these terms shall be subject to the exclusive jurisdiction of the competent courts in Kochi, Kerala, India.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">7. Contact & Notices</h2>
          <p>
            For formal legal inquiries or notices, please contact LUMEA Group Headquarters at:{' '}
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-cerulean font-mono underline">
              {CONTACT_INFO.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
