import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Compass, Globe2, FileText, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Users, MapPin } from 'lucide-react';
import { BRANDS } from '@/data/brands';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Accordion } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'LumeaGo — Global Education Guidance',
  description: 'Study abroad with clearer information and better preparation. Ethical international university counselling, application support, and student-family guidance.',
};

export default function LumeaGoPage() {
  const brand = BRANDS.go;

  return (
    <div className="bg-jet text-silver">
      {/* Hero Section */}
      <div className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#F59E0B]/10 blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal border border-[#F59E0B]/30 text-[#F59E0B] text-xs font-mono font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>GLOBAL EDUCATION GUIDANCE</span>
          </div>

          <div className="py-2">
            <img
              src={brand.logoWhiteUrl}
              alt="LumeaGo"
              className="h-14 sm:h-16 w-auto mx-auto object-contain filter drop-shadow-[0_0_25px_rgba(245,158,11,0.35)]"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight font-display">
            Study abroad with<br />
            <span className="text-[#F59E0B]">clearer information</span> and better preparation.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {brand.lede}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact?brand=go"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-[#F59E0B] text-jet hover:bg-[#e0900a] transition-all shadow-lg"
            >
              <span>Schedule Guidance Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#journey"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-charcoal border border-graphite hover:border-slate-400 transition-colors"
            >
              <span>The 4-Step Guidance Journey</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mandatory Ethical & Privacy Disclaimer Notice */}
      <section className="border-y border-graphite/60 bg-charcoal/50 py-6 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto p-4 rounded-2xl bg-jet/80 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-amber-200/90 leading-relaxed">
          <div className="w-10 h-10 rounded-xl bg-amber-950/60 text-amber-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <strong className="block text-amber-300 font-semibold text-sm">
              Student-First Ethical Advisory Standards:
            </strong>
            <p>
              LumeaGo strictly never guarantees university admission, visa approvals, scholarships, or post-study employment. Furthermore, initial counselling enquiries never request passport details, national IDs, or sensitive bank records. Specific country institutional tie-ups marked for confirmation remain unconfirmed until formally validated.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-[#F59E0B] font-semibold">
            Guidance Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Ethical International Education Advisory
          </h2>
          <p className="text-sm text-silver">
            Transparent support designed to eliminate predatory sales tactics and promote genuine student academic fit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brand.services.map((s) => (
            <div
              key={s.id}
              className="p-6 rounded-2xl bg-charcoal/70 border border-graphite hover:border-[#F59E0B]/40 transition-colors flex flex-col justify-between space-y-4"
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

      {/* Student Guidance Journey: Enquire → Counselling → Application → Next Steps */}
      <section id="journey" className="py-20 bg-charcoal/40 border-y border-graphite/60 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-mono text-[#F59E0B] font-semibold">
              Transparent Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              The 4-Stage Student Guidance Journey
            </h2>
            <p className="text-sm text-silver">
              A structured, stress-free pathway from first conversation to international arrival.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {brand.engagementProcess?.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-jet/90 border border-graphite flex flex-col justify-between space-y-3 relative group hover:border-[#F59E0B]/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/15 text-[#F59E0B] font-mono font-bold text-sm flex items-center justify-center">
                  0{step.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">{step.title}</h3>
                  <p className="text-xs text-silver mt-2 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences: Students, Parents & Families, Partner Institutions */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-[#F59E0B] font-semibold">
            Stakeholder Alignment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Who We Guide & Support
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
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
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
            <span className="text-xs uppercase tracking-widest font-mono text-[#F59E0B] font-semibold">
              Clarity & Transparency
            </span>
            <h2 className="text-3xl font-extrabold text-white font-display">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion items={brand.faqs} accentColor="#F59E0B" />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 text-center border-t border-graphite/60 px-4">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Begin your international education journey
          </h3>
          <p className="text-xs sm:text-sm text-silver">
            Book an honest, profile-first counselling session with our advisors in Kochi.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?brand=go"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-[#F59E0B] text-jet hover:bg-[#e0900a] transition-all shadow-lg"
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
