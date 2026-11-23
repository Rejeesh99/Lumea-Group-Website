import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, AlertTriangle, ArrowRight, CheckCircle2, Cpu, Terminal, Layers, FileCheck } from 'lucide-react';
import { BRANDS } from '@/data/brands';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Accordion } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'LumeaCyber — Cybersecurity, AI & Data Science',
  description: 'Understand your risk. Strengthen your defences. Build the skills to keep them strong. Authorised cybersecurity assessment, defensive engineering, and AI solutions.',
};

export default function LumeaCyberPage() {
  const brand = BRANDS.cyber;

  return (
    <div className="bg-jet text-silver">
      {/* Ambient background glow */}
      <div className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cerulean/15 blur-[120px] pointer-events-none" />

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal border border-cerulean/30 text-cerulean text-xs font-mono font-semibold">
            <Shield className="w-3.5 h-3.5" />
            <span>FLAGSHIP CYBER DEFENCE VERTICAL</span>
          </div>

          <div className="py-2">
            <img
              src={brand.logoWhiteUrl}
              alt="LumeaCyber"
              className="h-14 sm:h-16 w-auto mx-auto object-contain filter drop-shadow-[0_0_25px_rgba(0,174,239,0.35)]"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight font-display">
            Understand your risk.<br />
            <span className="text-cerulean">Strengthen your defences.</span><br />
            Build the skills to keep them strong.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {brand.lede}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact?brand=cyber"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-cerulean text-jet hover:bg-cerulean-400 transition-all shadow-glow-blue"
            >
              <span>Request Security Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-charcoal border border-graphite hover:border-slate-400 transition-colors"
            >
              <span>Explore Services & Scope</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mandatory Regulatory / Ethical Notice */}
      <section className="border-y border-graphite/60 bg-charcoal/50 py-6 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto p-4 rounded-2xl bg-jet/80 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-amber-200/90 leading-relaxed">
          <div className="w-10 h-10 rounded-xl bg-amber-950/60 text-amber-400 flex items-center justify-center shrink-0">
            <Lock className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <strong className="block text-amber-300 font-semibold text-sm">
              Strict Legal Authorization & Verification Protocol:
            </strong>
            <p>
              Security assessments, vulnerability discovery, and technical testing require bilateral nondisclosure agreements, verified proof of asset ownership, and formal written authorization. LumeaCyber never conducts unauthorised probing and does not guarantee absolute invulnerability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
            Capabilities & Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Cybersecurity, AI & Data Science Services
          </h2>
          <p className="text-sm text-silver">
            Clear distinction between actively available services, institutional programs, and planned technological platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brand.services.map((s) => (
            <div
              key={s.id}
              className="p-6 rounded-2xl bg-charcoal/70 border border-graphite hover:border-cerulean/40 transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-white font-display">{s.name}</h3>
                  <StatusBadge status={s.status} note={s.statusNote} className="shrink-0" />
                </div>
                <p className="text-xs sm:text-sm text-silver leading-relaxed">
                  {s.description}
                </p>
              </div>

              {s.statusNote && (
                <div className="p-2.5 rounded-lg bg-jet/60 border border-graphite/60 text-[11px] text-silver/80 italic">
                  Note: {s.statusNote}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Process (Discover → Understand → Propose → Deliver → Review) */}
      <section className="py-20 bg-charcoal/40 border-y border-graphite/60 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
              Methodical Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              The 5-Stage Defensive Engagement Process
            </h2>
            <p className="text-sm text-silver">
              How we engage with enterprise clients, ensure legal clearance, and deliver reproducible findings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {brand.engagementProcess?.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-jet/90 border border-graphite flex flex-col justify-between space-y-3 relative group hover:border-cerulean/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-cerulean/15 text-cerulean font-mono font-bold text-sm flex items-center justify-center">
                  0{step.step}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-display">{step.title}</h3>
                  <p className="text-xs text-silver mt-1.5 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
            Audiences Served
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Who LumeaCyber Protects & Enables
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brand.targetAudiences.map((aud, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-charcoal/60 border border-graphite space-y-4">
              <h3 className="text-xl font-bold text-white font-display">{aud.title}</h3>
              <p className="text-xs text-silver leading-relaxed">{aud.description}</p>
              <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-graphite/40">
                {aud.points.map((p, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cerulean shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-charcoal/30 border-t border-graphite/60 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
              Governance & Queries
            </span>
            <h2 className="text-3xl font-extrabold text-white font-display">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion items={brand.faqs} accentColor="#00AEEF" />
        </div>
      </section>

      {/* Brand CTA */}
      <section className="py-16 text-center border-t border-graphite/60 px-4">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Ready to review your security posture?
          </h3>
          <p className="text-xs sm:text-sm text-silver">
            Contact our technical team in Kochi for an initial confidential discussion.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?brand=cyber"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-cerulean text-jet hover:bg-cerulean-400 transition-all shadow-glow-blue"
            >
              <span>{brand.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
