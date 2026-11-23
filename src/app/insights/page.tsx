import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Shield, Cpu, HeartPulse, GraduationCap, Compass, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { RESEARCH_AREAS, RESEARCH_NOTE } from '@/data/insights';

export const metadata: Metadata = {
  title: 'Insights & Research — Authentic Operational Perspectives',
  description: 'Technical briefs, architectural analyses, and pedagogical perspectives from LUMEA Group across cybersecurity, applied AI, healthcare pedagogy, and global education.',
};

export default function InsightsPage() {
  return (
    <div className="bg-jet text-silver py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
          Applied Thought Leadership
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          Insights & Operational Research
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Applied research briefs, security advisories, and educational analyses reflecting our active focus areas across defensive cyber, clinical simulation, and international mobility.
        </p>
      </div>

      {/* Editorial Transparency Notice */}
      <div className="max-w-4xl mx-auto p-5 rounded-2xl bg-charcoal border border-graphite flex items-start gap-4 text-xs text-silver leading-relaxed shadow-glass">
        <AlertCircle className="w-5 h-5 text-cerulean shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="block text-white font-semibold text-sm">
            {RESEARCH_NOTE.headline}
          </strong>
          <p>{RESEARCH_NOTE.disclaimer}</p>
        </div>
      </div>

      {/* Research Grid */}
      <div className="space-y-8">
        {RESEARCH_AREAS.map((res) => (
          <article
            key={res.id}
            className="p-8 rounded-3xl bg-charcoal/70 border border-graphite hover:border-graphite/80 transition-colors space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-graphite/60">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-jet border border-graphite text-cerulean font-semibold">
                  {res.category}
                </span>
                <span className="text-xs text-silver font-mono">{res.readTime}</span>
              </div>
              <span className="text-xs font-mono text-silver/80">{res.date}</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {res.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {res.abstract}
              </p>
            </div>

            {/* Key Insights Callout */}
            <div className="p-5 rounded-2xl bg-jet/70 border border-graphite/60 space-y-2">
              <div className="text-[11px] uppercase tracking-wider font-semibold text-cerulean font-mono">
                Key Analytical Takeaways:
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {res.keyInsights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cerulean font-bold">•</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-silver">
              <span>Operating Context: <strong className="text-white">{res.focusVertical}</strong></span>
              <Link
                href={`/contact?brand=${res.focusVertical.toLowerCase().includes('cyber') ? 'cyber' : res.focusVertical.toLowerCase().includes('nursing') ? 'nursing' : 'skill'}`}
                className="text-cerulean font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>Discuss This Research Topic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
