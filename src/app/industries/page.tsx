import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, School, UserCheck, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { AUDIENCE_PATHWAYS } from '@/data/audiences';

export const metadata: Metadata = {
  title: 'Who We Help — Audience Pathways | LUMEA Group',
  description: 'Specialized technology, cybersecurity, healthcare, and educational pathways tailored for businesses, colleges, professionals, and students.',
};

export default function WhoWeHelpPage() {
  const icons: Record<string, React.ReactNode> = {
    businesses: <Building2 className="w-6 h-6 text-cerulean" />,
    institutions: <School className="w-6 h-6 text-[#2DD4BF]" />,
    professionals: <UserCheck className="w-6 h-6 text-rose" />,
    families: <HeartHandshake className="w-6 h-6 text-[#F59E0B]" />
  };

  return (
    <div className="bg-jet text-silver py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
          Tailored Client Pathways
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          Who We Help
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Whether you are an enterprise executive safeguarding digital perimeters, a nursing college elevating clinical simulation, a working professional building international linguistic fluency, or a family planning study abroad — LUMEA Group provides dedicated pathways.
        </p>
      </div>

      {/* Pathways List */}
      <div className="space-y-16">
        {AUDIENCE_PATHWAYS.map((path, idx) => (
          <section
            key={path.id}
            id={path.id}
            className="p-8 sm:p-12 rounded-3xl bg-charcoal/70 border border-graphite space-y-8 scroll-mt-24"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-graphite/60">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-jet border border-graphite flex items-center justify-center shrink-0 shadow-glass">
                  {icons[path.id]}
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">{path.title}</h2>
                  <span className="text-xs font-mono text-cerulean font-medium">{path.subtitle}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {path.relevantBrands.map(b => (
                  <span key={b} className="text-xs font-semibold px-3 py-1 rounded-full bg-jet border border-graphite text-slate-200">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {path.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Challenges */}
              <div className="space-y-3 p-6 rounded-2xl bg-jet/60 border border-graphite/50">
                <h3 className="text-sm uppercase tracking-wider font-bold text-rose">
                  Primary Challenges Addressed:
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-silver">
                  {path.keyChallenges.map((ch, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2">
                      <span className="text-rose font-bold">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How We Help */}
              <div className="space-y-3 p-6 rounded-2xl bg-jet/60 border border-graphite/50">
                <h3 className="text-sm uppercase tracking-wider font-bold text-cerulean">
                  How LUMEA Delivers Value:
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                  {path.howWeHelp.map((sol, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cerulean shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
              <Link
                href={`/contact?brand=${path.relevantBrands[0]?.toLowerCase().replace('lumea', '') || 'group'}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-cerulean text-jet hover:bg-cerulean-400 transition-all shadow-glow-blue"
              >
                <span>{path.actionCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs text-silver">
                Direct coordinator review in Kochi, Kerala
              </span>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
