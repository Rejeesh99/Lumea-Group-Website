import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, Languages, Award, ArrowRight, CheckCircle2, AlertCircle, Compass, Target } from 'lucide-react';
import { BRANDS } from '@/data/brands';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Accordion } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'LumeaSkill — Skills, Languages & Careers',
  description: 'Skills and languages that open the next door. German language CEFR training, IELTS/OET coaching, practical digital skills, and career guidance.',
};

export default function LumeaSkillPage() {
  const brand = BRANDS.skill;

  return (
    <div className="bg-jet text-silver">
      {/* Hero Section */}
      <div className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-rose/10 blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal border border-rose/30 text-rose text-xs font-mono font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>SKILLS, LANGUAGES & CAREERS</span>
          </div>

          <div className="py-2">
            <img
              src={brand.logoWhiteUrl}
              alt="LumeaSkill"
              className="h-14 sm:h-16 w-auto mx-auto object-contain filter drop-shadow-[0_0_25px_rgba(255,46,136,0.35)]"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight font-display">
            Skills and languages<br />
            <span className="text-rose">that open the next door.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {brand.lede}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact?brand=skill"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-rose text-white hover:bg-rose-600 transition-all shadow-glow-rose"
            >
              <span>Enquire About Learning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-charcoal border border-graphite hover:border-slate-400 transition-colors"
            >
              <span>View Course Scope</span>
            </a>
          </div>
        </div>
      </div>

      {/* Notice regarding Confirmation Requirements */}
      <section className="border-y border-graphite/60 bg-charcoal/50 py-6 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto p-4 rounded-2xl bg-jet/80 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-amber-200/90 leading-relaxed">
          <div className="w-10 h-10 rounded-xl bg-amber-950/60 text-amber-400 flex items-center justify-center shrink-0">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <strong className="block text-amber-300 font-semibold text-sm">
              Batch Schedules & Verification Notice:
            </strong>
            <p>
              German language batch intakes (A1–B2) and IELTS/OET coaching schedules require administrator confirmation before registration. LumeaSkill does not claim unverified test agency partnerships or guarantee specific examination band scores.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-rose font-semibold">
            Instructional Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Language Learning, Exam Prep & Careers
          </h2>
          <p className="text-sm text-silver">
            Structured programmes designed for tangible career progression and international readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brand.services.map((s) => (
            <div
              key={s.id}
              className="p-6 rounded-2xl bg-charcoal/70 border border-graphite hover:border-rose/40 transition-colors flex flex-col justify-between space-y-4"
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

      {/* Target Audiences */}
      <section className="py-20 bg-charcoal/40 border-y border-graphite/60 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-mono text-rose font-semibold">
              Learner Pathways
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Who We Equip & Mentor
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brand.targetAudiences.map((aud, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-jet/90 border border-graphite space-y-4">
                <h3 className="text-xl font-bold text-white font-display">{aud.title}</h3>
                <p className="text-xs text-silver leading-relaxed">{aud.description}</p>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-graphite/40">
                  {aud.points.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose shrink-0" />
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
          <span className="text-xs uppercase tracking-widest font-mono text-rose font-semibold">
            Questions & Schedules
          </span>
          <h2 className="text-3xl font-extrabold text-white font-display">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion items={brand.faqs} accentColor="#FF2E88" />
      </section>

      {/* Contact CTA */}
      <section className="py-16 text-center border-t border-graphite/60 px-4">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Ready to build your next capability?
          </h3>
          <p className="text-xs sm:text-sm text-silver">
            Speak to our academic counsellors in Kochi regarding upcoming batch schedules and diagnostic benchmarks.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?brand=skill"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-rose text-white hover:bg-rose-600 transition-all shadow-glow-rose"
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
