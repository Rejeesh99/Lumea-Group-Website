'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BRANDS } from '@/data/brands';
import { StatusBadge } from './StatusBadge';
import { Shield, HeartPulse, GraduationCap, Compass, ArrowRight, ExternalLink } from 'lucide-react';

export function BrandOrbit() {
  const [selectedKey, setSelectedKey] = useState<'cyber' | 'nursing' | 'skill' | 'go'>('cyber');
  const activeBrand = BRANDS[selectedKey];

  const brandIcons: Record<string, React.ReactNode> = {
    cyber: <Shield className="w-5 h-5" />,
    nursing: <HeartPulse className="w-5 h-5" />,
    skill: <GraduationCap className="w-5 h-5" />,
    go: <Compass className="w-5 h-5" />
  };

  const routerGoals = [
    {
      id: 'cyber',
      label: 'Protect my organisation',
      sub: 'Risk discovery, defensive testing & workforce security',
      target: 'cyber' as const,
      color: '#00AEEF'
    },
    {
      id: 'skill',
      label: 'Build my skills & languages',
      sub: 'German CEFR, IELTS/OET coaching & digital competencies',
      target: 'skill' as const,
      color: '#FF2E88'
    },
    {
      id: 'nursing',
      label: 'Strengthen nursing education',
      sub: 'Clinical pedagogy, simulation models & professional CPD',
      target: 'nursing' as const,
      color: '#2DD4BF'
    },
    {
      id: 'go',
      label: 'Plan my studies abroad',
      sub: 'Ethical global education guidance for students & families',
      target: 'go' as const,
      color: '#F59E0B'
    }
  ];

  return (
    <div className="w-full space-y-12">
      {/* Upper Interactive Stage: Orbit & Live Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: The Orbit Visual Explorer */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-4">
            {/* Background subtle radial glow */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-500"
              style={{ backgroundColor: activeBrand.accentColor }}
            />

            {/* Orbit concentric rings */}
            <div className="absolute inset-4 rounded-full border border-dashed border-graphite/80 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-16 rounded-full border border-graphite/60" />
            <div className="absolute inset-28 rounded-full border border-dashed border-cerulean/20" />

            {/* Central Core: LUMEA Group */}
            <div className="relative z-10 w-36 h-36 rounded-full bg-charcoal border-2 border-graphite shadow-2xl flex flex-col items-center justify-center text-center p-3 group">
              <img
                src="/logos/lumea-group-mark.png"
                alt="LUMEA Group Core"
                className="w-11 h-11 object-contain mb-0.5 filter drop-shadow-[0_0_10px_rgba(0,174,239,0.3)] transition-transform group-hover:scale-110"
              />
              <span className="text-white font-extrabold tracking-widest text-xs font-display">LUMEA</span>
              <span className="text-[9px] uppercase tracking-wider text-cerulean font-semibold">Elevate Your Future</span>
            </div>

            {/* Interactive Orbit Nodes */}
            {/* Top Node: LumeaCyber */}
            <button
              onClick={() => setSelectedKey('cyber')}
              aria-pressed={selectedKey === 'cyber'}
              className={`absolute top-2 left-1/2 -translate-x-1/2 z-20 px-3.5 py-2.5 rounded-xl border text-left transition-all duration-300 min-w-[145px] flex items-center gap-2.5 ${
                selectedKey === 'cyber'
                  ? 'bg-charcoal border-[#00AEEF] shadow-[0_0_20px_rgba(0,174,239,0.35)] scale-105 ring-1 ring-[#00AEEF]'
                  : 'bg-charcoal/90 border-graphite hover:border-graphite/80 hover:scale-102 text-silver'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-jet/90 border border-graphite/60 p-1 flex items-center justify-center shrink-0">
                <img src="/logos/lumea-cyber-mark.png" alt="LumeaCyber" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white">LumeaCyber</span>
                <span className="block text-[10px] text-silver/80">Cyber & AI</span>
              </div>
            </button>

            {/* Right Node: LumeaNursing */}
            <button
              onClick={() => setSelectedKey('nursing')}
              aria-pressed={selectedKey === 'nursing'}
              className={`absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 sm:translate-x-0 z-20 px-3.5 py-2.5 rounded-xl border text-left transition-all duration-300 min-w-[145px] flex items-center gap-2.5 ${
                selectedKey === 'nursing'
                  ? 'bg-charcoal border-[#2DD4BF] shadow-[0_0_20px_rgba(45,212,191,0.35)] scale-105 ring-1 ring-[#2DD4BF]'
                  : 'bg-charcoal/90 border-graphite hover:border-graphite/80 hover:scale-102 text-silver'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-jet/90 border border-graphite/60 p-1 flex items-center justify-center shrink-0">
                <img src="/logos/lumea-nursing-mark.png" alt="LumeaNursing" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white">LumeaNursing</span>
                <span className="block text-[10px] text-silver/80">Health Edu</span>
              </div>
            </button>

            {/* Bottom Node: LumeaGo */}
            <button
              onClick={() => setSelectedKey('go')}
              aria-pressed={selectedKey === 'go'}
              className={`absolute bottom-2 left-1/2 -translate-x-1/2 z-20 px-3.5 py-2.5 rounded-xl border text-left transition-all duration-300 min-w-[145px] flex items-center gap-2.5 ${
                selectedKey === 'go'
                  ? 'bg-charcoal border-[#F59E0B] shadow-[0_0_20px_rgba(245,158,11,0.35)] scale-105 ring-1 ring-[#F59E0B]'
                  : 'bg-charcoal/90 border-graphite hover:border-graphite/80 hover:scale-102 text-silver'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-jet/90 border border-graphite/60 p-1 flex items-center justify-center shrink-0">
                <img src="/logos/lumea-go-mark.png" alt="LumeaGo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white">LumeaGo</span>
                <span className="block text-[10px] text-silver/80">Study Abroad</span>
              </div>
            </button>

            {/* Left Node: LumeaSkill */}
            <button
              onClick={() => setSelectedKey('skill')}
              aria-pressed={selectedKey === 'skill'}
              className={`absolute top-1/2 left-0 -translate-y-1/2 -translate-x-2 sm:translate-x-0 z-20 px-3.5 py-2.5 rounded-xl border text-left transition-all duration-300 min-w-[145px] flex items-center gap-2.5 ${
                selectedKey === 'skill'
                  ? 'bg-charcoal border-[#FF2E88] shadow-[0_0_20px_rgba(255,46,136,0.35)] scale-105 ring-1 ring-[#FF2E88]'
                  : 'bg-charcoal/90 border-graphite hover:border-graphite/80 hover:scale-102 text-silver'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-jet/90 border border-graphite/60 p-1 flex items-center justify-center shrink-0">
                <img src="/logos/lumea-skill-mark.png" alt="LumeaSkill" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white">LumeaSkill</span>
                <span className="block text-[10px] text-silver/80">Languages & Tech</span>
              </div>
            </button>
          </div>

          <p className="text-xs text-silver/70 mt-3 text-center">
            Click any brand node above or choose an objective below to examine its live scope.
          </p>
        </div>

        {/* Right: The Live Focus Detail Panel */}
        <div className="lg:col-span-6">
          <div className="bg-charcoal/80 border border-graphite/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all duration-300">
            {/* Top Accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-1 transition-colors duration-500"
              style={{ backgroundColor: activeBrand.accentColor }}
            />

            {/* Header info with official brand logo */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <span
                className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full border"
                style={{
                  color: activeBrand.accentColor,
                  borderColor: `${activeBrand.accentColor}40`,
                  backgroundColor: `${activeBrand.accentColor}10`
                }}
              >
                {activeBrand.kicker}
              </span>
              <span className="text-xs text-silver font-mono">{activeBrand.category}</span>
            </div>

            {/* Official Brand Logo */}
            <div className="py-2 mb-2 flex items-center">
              <img
                src={activeBrand.logoWhiteUrl}
                alt={activeBrand.name}
                className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
              />
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {activeBrand.lede}
            </p>

            {/* Services offerings preview with status */}
            <div className="space-y-2.5 mb-6">
              <div className="text-xs uppercase tracking-wider font-semibold text-silver/70 mb-2">
                Operational Scope & Status
              </div>
              {activeBrand.services.slice(0, 4).map((service) => (
                <div
                  key={service.id}
                  className="flex items-center justify-between gap-3 p-3 rounded-xl bg-jet/60 border border-graphite/50 text-xs sm:text-sm text-slate-200"
                >
                  <span className="font-medium truncate">{service.name}</span>
                  <StatusBadge status={service.status} note={service.statusNote} />
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={`/brands/${activeBrand.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-jet transition-all duration-200 hover:opacity-95 shadow-lg"
                style={{ backgroundColor: activeBrand.accentColor }}
              >
                <span>Explore {activeBrand.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/contact?brand=${activeBrand.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-graphite/60 border border-graphite hover:border-slate-400 transition-colors"
              >
                <span>Direct Enquiry</span>
                <ExternalLink className="w-3.5 h-3.5 text-silver" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Objective Router: "Not sure where to start?" */}
      <div className="pt-6 border-t border-graphite/50">
        <div className="mb-6">
          <span className="text-xs uppercase tracking-widest text-cerulean font-semibold">Discovery Pathways</span>
          <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">Not sure where to start?</h4>
          <p className="text-sm text-silver mt-1">Select the goal closest to your immediate priority to orient with the appropriate LUMEA brand.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {routerGoals.map((g) => {
            const isMatch = selectedKey === g.target;
            return (
              <button
                key={g.id}
                onClick={() => setSelectedKey(g.target)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 group flex flex-col justify-between ${
                  isMatch
                    ? 'bg-charcoal border-slate-300 ring-1 ring-slate-400 shadow-glass'
                    : 'bg-charcoal/40 border-graphite/60 hover:border-graphite hover:bg-charcoal/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full transition-transform group-hover:scale-125"
                      style={{ backgroundColor: g.color }}
                    />
                    <span className="text-[10px] font-mono uppercase text-silver">
                      {BRANDS[g.target].name}
                    </span>
                  </div>
                  <strong className="block text-white text-sm font-semibold mb-1 group-hover:text-cerulean transition-colors">
                    {g.label}
                  </strong>
                  <span className="block text-xs text-silver leading-relaxed">
                    {g.sub}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-1 text-[11px] font-medium" style={{ color: g.color }}>
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
