import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Cpu, Database, Code, CheckCircle2, ArrowRight, Clock, ShieldCheck, Layers } from 'lucide-react';
import { GROUP_SOLUTIONS } from '@/data/brands';
import { StatusBadge } from '@/components/ui/StatusBadge';

export const metadata: Metadata = {
  title: 'Software, AI & Digital Systems',
  description: 'Defensive cloud software engineering, applied artificial intelligence, and sanitized data pipelines engineered for enterprise resilience.',
};

export default function TechnologySolutionPage() {
  const solution = GROUP_SOLUTIONS.find(s => s.id === 'technology')!;

  return (
    <div className="bg-jet text-silver py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
          Solution Vertical · {solution.brand}
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          Software, AI & Digital Systems
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          {solution.fullDesc}
        </p>
      </div>

      {/* Planned Feature Advisory */}
      <div className="max-w-4xl mx-auto p-4 rounded-2xl bg-charcoal border border-indigo-500/30 flex items-start gap-3 text-xs text-indigo-200 leading-relaxed">
        <Clock className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
        <div>
          <strong className="block text-indigo-300 font-semibold mb-0.5">Product Roadmap Status:</strong>
          Proprietary autonomous security tooling and integrated telemetry SaaS platforms are currently in our planned research and development pipeline. Consulting and applied AI engineering are actively available.
        </div>
      </div>

      {/* Core Technology Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-charcoal/70 border border-graphite space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="py-1">
              <img
                src="/logos/lumea-app-white.png"
                alt="LumeaApp — Crafted For Growth"
                className="h-10 w-auto object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white font-display">LumeaApp & Software Engineering</h2>
            <p className="text-xs sm:text-sm text-silver leading-relaxed">
              Crafted for growth. We engineer modern, scalable cloud software, responsive mobile experiences, and resilient digital architectures built to withstand real-world operational demands.
            </p>
          </div>
          <div className="pt-4 border-t border-graphite/40">
            <StatusBadge status="AVAILABLE" />
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-charcoal/70 border border-graphite space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white font-display">Data Sanitisation & Privacy</h2>
            <p className="text-xs sm:text-sm text-silver leading-relaxed">
              Architecting secure data pipelines that remove personally identifiable information (PII) before ingestion into machine learning workflows, preserving enterprise compliance.
            </p>
          </div>
          <div className="pt-4 border-t border-graphite/40">
            <StatusBadge status="AVAILABLE" />
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-charcoal/70 border border-graphite space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white font-display">Autonomous Security Tooling</h2>
            <p className="text-xs sm:text-sm text-silver leading-relaxed">
              Cloud-native threat correlation telemetry platforms and automated defensive remediation systems currently under active internal engineering.
            </p>
          </div>
          <div className="pt-4 border-t border-graphite/40">
            <StatusBadge status="PLANNED" note="Under active research & development." />
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="text-center p-8 rounded-3xl bg-charcoal border border-graphite max-w-2xl mx-auto space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white font-display">Build Resilient Digital Solutions</h3>
        <p className="text-xs text-silver">Discuss your digital platform or AI architecture requirements with our technical team in Kochi.</p>
        <Link
          href="/contact?brand=cyber"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold bg-cerulean text-jet hover:bg-cerulean-400 transition-all shadow-glow-blue"
        >
          <span>Initiate Technical Discussion</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
