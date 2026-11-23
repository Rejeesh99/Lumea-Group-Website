import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, HeartPulse, GraduationCap, Compass, ArrowRight, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { BRANDS } from '@/data/brands';
import { StatusBadge } from '@/components/ui/StatusBadge';

export const metadata: Metadata = {
  title: 'Our Brands — Connected Brand Architecture',
  description: 'Explore LUMEA Group’s four distinct operating brands: LumeaCyber, LumeaNursing, LumeaSkill, and LumeaGo. Securing the digital world, enabling human progress.',
};

export default function BrandsOverviewPage() {
  const brandIcons: Record<string, React.ReactNode> = {
    cyber: <Shield className="w-6 h-6 text-cerulean" />,
    nursing: <HeartPulse className="w-6 h-6 text-[#2DD4BF]" />,
    skill: <GraduationCap className="w-6 h-6 text-rose" />,
    go: <Compass className="w-6 h-6 text-[#F59E0B]" />
  };

  return (
    <div className="bg-jet text-silver py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
          Brand Architecture
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          Four Specialized Brands. One Shared Standard.
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          LUMEA Group unites four independent business verticals under a singular philosophy: &ldquo;Securing the digital world. Enabling human progress.&rdquo; Each brand maintains deep domain expertise while drawing on the technical and defensive strengths of the parent group.
        </p>
      </div>

      {/* Grid of the Four Brands */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.values(BRANDS).map((b) => (
          <div
            key={b.id}
            className="bg-charcoal/70 border border-graphite rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-graphite/80 transition-all duration-300 relative group overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{ backgroundColor: b.accentColor }}
            />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="py-2">
                  <img
                    src={b.logoWhiteUrl}
                    alt={b.name}
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </div>
                <span
                  className="text-xs uppercase px-2.5 py-1 rounded-full font-semibold border"
                  style={{
                    color: b.accentColor,
                    borderColor: `${b.accentColor}40`,
                    backgroundColor: `${b.accentColor}10`
                  }}
                >
                  {b.kicker}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed italic border-l-2 pl-3" style={{ borderColor: b.accentColor }}>
                &ldquo;{b.headline}&rdquo;
              </p>

              <p className="text-xs sm:text-sm text-silver leading-relaxed">
                {b.overview}
              </p>

              {/* Service Offering Highlights with Status Badges */}
              <div className="pt-2 space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-silver/80 block">
                  Key Scope & Operational Status:
                </span>
                <div className="space-y-1.5">
                  {b.services.slice(0, 3).map((s) => (
                    <div
                      key={s.id}
                      className="p-2.5 rounded-xl bg-jet/60 border border-graphite/40 flex items-center justify-between gap-2 text-xs"
                    >
                      <span className="text-slate-300 font-medium truncate">{s.name}</span>
                      <StatusBadge status={s.status} note={s.statusNote} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-graphite/60 flex items-center justify-between">
              <Link
                href={`/brands/${b.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                style={{ color: b.accentColor }}
              >
                <span>Visit {b.name} Dedicated Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/contact?brand=${b.id}`}
                className="text-xs text-silver hover:text-white"
              >
                Direct Enquiry
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Philosophy of Separation and Cohesion */}
      <div className="bg-charcoal/50 border border-graphite rounded-3xl p-8 sm:p-12 space-y-6">
        <h3 className="text-2xl font-bold text-white font-display">Why the Brands Remain Distinct</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-silver leading-relaxed">
          <div className="space-y-2">
            <h4 className="font-semibold text-white text-base">Uncompromised Domain Depth</h4>
            <p>
              Merging cybersecurity, healthcare education, and language coaching into a generic conglomerate dilutes professional trust. Each vertical operates with specialised pedagogical and technical rigor.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-white text-base">Shared Security Baseline</h4>
            <p>
              Every brand benefits directly from LumeaCyber&apos;s defensive engineering, data sanitisation, and privacy protocols, ensuring enterprise-grade protection for student and client data.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-white text-base">Human-Centred Synergy</h4>
            <p>
              Technology is deployed to create and protect opportunity. From clinical skills in nursing to international mobility through languages and ethical counselling, human progress remains our compass.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
