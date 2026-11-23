import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, CheckCircle2, ArrowRight, AlertTriangle, FileCode2, Terminal } from 'lucide-react';
import { GROUP_SOLUTIONS, BRANDS } from '@/data/brands';
import { StatusBadge } from '@/components/ui/StatusBadge';

export const metadata: Metadata = {
  title: 'Cybersecurity & Defence Solutions',
  description: 'Enterprise cybersecurity posture assessment, authorised defensive testing, risk discovery, and institutional capability building led by LumeaCyber.',
};

export default function CybersecuritySolutionPage() {
  const solution = GROUP_SOLUTIONS.find(s => s.id === 'cybersecurity')!;
  const cyberBrand = BRANDS.cyber;

  return (
    <div className="bg-jet text-silver py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
          Solution Vertical · {solution.brand}
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          Cybersecurity & Enterprise Defence
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          {solution.fullDesc}
        </p>
      </div>

      {/* Advisory Banner */}
      <div className="max-w-4xl mx-auto p-4 rounded-2xl bg-charcoal border border-amber-500/30 flex items-start gap-3 text-xs text-amber-200 leading-relaxed">
        <Lock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="block text-amber-300 font-semibold mb-0.5">Authorised Engagement Standard:</strong>
          All defensive posture reviews, security testing, and vulnerability discoveries are conducted strictly pursuant to signed bilateral non-disclosure agreements and formal written authorization. We do not claim unverified certifications or guarantee complete security.
        </div>
      </div>

      {/* Detailed Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-charcoal/70 border border-graphite space-y-4">
          <h2 className="text-2xl font-bold text-white font-display">Risk Discovery & Defensive Assessment</h2>
          <p className="text-sm text-silver leading-relaxed">
            Modern enterprise perimeters are dynamic and fluid. We evaluate cloud exposure, web applications, and network topologies to expose actionable attack surfaces before adversaries exploit them.
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cerulean shrink-0" />
              <span>Systematic vulnerability surface discovery</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cerulean shrink-0" />
              <span>Authorized ethical penetration testing</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cerulean shrink-0" />
              <span>Configuration hardening & boundary isolation</span>
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-charcoal/70 border border-graphite space-y-4">
          <h2 className="text-2xl font-bold text-white font-display">Human Defence & Security Awareness</h2>
          <p className="text-sm text-silver leading-relaxed">
            Technology firewalls fail when human trust is deceived. We deliver structured, realistic security awareness workshops that equip operational teams to identify sophisticated phishing, pretexting, and social engineering attempts.
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cerulean shrink-0" />
              <span>Scenario-based social engineering simulations</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cerulean shrink-0" />
              <span>Operational staff incident escalation drills</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cerulean shrink-0" />
              <span>Executive threat briefings & risk governance</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 5-Step Engagement Process */}
      <div className="bg-charcoal/40 border border-graphite rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">Governance</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">The Engagement Lifecycle</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {cyberBrand.engagementProcess?.map((step) => (
            <div key={step.step} className="p-4 rounded-xl bg-jet/80 border border-graphite space-y-2">
              <span className="text-xs font-mono font-bold text-cerulean">0{step.step}</span>
              <h3 className="text-sm font-bold text-white">{step.title}</h3>
              <p className="text-xs text-silver leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="text-center p-8 rounded-3xl bg-charcoal border border-graphite max-w-2xl mx-auto space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white font-display">Consult with LumeaCyber</h3>
        <p className="text-xs text-silver">Initiate a formal, confidential scoping call with our defensive cybersecurity team.</p>
        <Link
          href="/contact?brand=cyber"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold bg-cerulean text-jet hover:bg-cerulean-400 transition-all shadow-glow-blue"
        >
          <span>Schedule Scoping Session</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
