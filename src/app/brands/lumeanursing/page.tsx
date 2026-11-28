import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { HeartPulse, Stethoscope, BookOpen, AlertCircle, ArrowRight, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import { BRANDS } from '@/data/brands';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Accordion } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'LumeaNursing — Nursing Education Technology',
  description: 'Better nursing education, built with care and supported by technology. Supplementary digital nursing curriculum support, clinical simulation methodologies, and CPD modules.',
};

export default function LumeaNursingPage() {
  const brand = BRANDS.nursing;

  return (
    <div className="bg-jet text-silver">
      {/* Hero Section */}
      <div className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#2DD4BF]/10 blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal border border-[#2DD4BF]/30 text-[#2DD4BF] text-xs font-mono font-semibold">
            <HeartPulse className="w-3.5 h-3.5" />
            <span>HEALTHCARE EDUCATION TECHNOLOGY</span>
          </div>

          <div className="py-2">
            <img
              src={brand.logoWhiteUrl}
              alt="LumeaNursing"
              className="h-14 sm:h-16 w-auto mx-auto object-contain filter drop-shadow-[0_0_25px_rgba(45,212,191,0.35)]"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight font-display">
            Better nursing education,<br />
            <span className="text-[#2DD4BF]">built with care</span> and supported by technology.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {brand.lede}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact?brand=nursing"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-[#2DD4BF] text-jet hover:bg-[#28bfaa] transition-all shadow-lg"
            >
              <span>Connect with LumeaNursing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-charcoal border border-graphite hover:border-slate-400 transition-colors"
            >
              <span>View Educational Scope</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mandatory Statutory & Regulatory Disclaimer */}
      <section className="border-y border-graphite/60 bg-charcoal/50 py-6 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto p-4 rounded-2xl bg-jet/80 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-amber-200/90 leading-relaxed">
          <div className="w-10 h-10 rounded-xl bg-amber-950/60 text-amber-400 flex items-center justify-center shrink-0">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <strong className="block text-amber-300 font-semibold text-sm">
              Academic & Professional Notice:
            </strong>
            <p>
              LumeaNursing provides supplementary digital educational resources and continuing professional development. We do not replace statutory nursing education programmes, grant legal nursing licenses or registration to practise, or guarantee hospital/overseas employment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-[#2DD4BF] font-semibold">
            Programmes & Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Nursing Education & Skill Development
          </h2>
          <p className="text-sm text-silver">
            Current curriculum support frameworks alongside our planned simulation technology roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brand.services.map((s) => (
            <div
              key={s.id}
              className="p-6 rounded-2xl bg-charcoal/70 border border-graphite hover:border-[#2DD4BF]/40 transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-white font-display">{s.name}</h3>
                  <StatusBadge status={s.status} note={s.statusNote} className="shrink-0" />
                </div>
                <p className="text-sm sm:text-base text-silver leading-relaxed">
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

      {/* Target Audiences */}
      <section className="py-20 bg-charcoal/40 border-y border-graphite/60 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-mono text-[#2DD4BF] font-semibold">
              Healthcare Pathways
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Supporting the Nursing Community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brand.targetAudiences.map((aud, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-jet/90 border border-graphite space-y-4">
                <h3 className="text-xl font-bold text-white font-display">{aud.title}</h3>
                <p className="text-sm text-silver leading-relaxed">{aud.description}</p>
                <ul className="space-y-1.5 text-sm text-slate-300 pt-2 border-t border-graphite/40">
                  {aud.points.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2DD4BF] shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest font-mono text-[#2DD4BF] font-semibold">
            Clarity & FAQs
          </span>
          <h2 className="text-3xl font-extrabold text-white font-display">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion items={brand.faqs} accentColor="#2DD4BF" />
      </section>

      {/* Contact CTA */}
      <section className="py-16 text-center border-t border-graphite/60 px-4">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Enhance your nursing curriculum or skills
          </h3>
          <p className="text-xs sm:text-sm text-silver">
            Connect with our academic advisors to discuss institutional partnerships or CPD training modules.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?brand=nursing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-[#2DD4BF] text-jet hover:bg-[#28bfaa] transition-all shadow-lg"
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
