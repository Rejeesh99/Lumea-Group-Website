import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, HeartPulse, GraduationCap, Compass, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';
import { GROUP_SOLUTIONS, BRANDS } from '@/data/brands';
import { StatusBadge } from '@/components/ui/StatusBadge';

export const metadata: Metadata = {
  title: 'Learning & Development Solutions',
  description: 'Healthcare educational technology, professional language mastery, international exam coaching, and transparent global study guidance.',
};

export default function LearningSolutionPage() {
  const solution = GROUP_SOLUTIONS.find(s => s.id === 'learning')!;

  return (
    <div className="bg-jet text-silver py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
          Solution Vertical · {solution.brand}
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          Learning & Human Progress
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          {solution.fullDesc}
        </p>
      </div>

      {/* Advisory Banner */}
      <div className="max-w-4xl mx-auto p-4 rounded-2xl bg-charcoal border border-amber-500/30 flex items-start gap-3 text-xs text-amber-200 leading-relaxed">
        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="block text-amber-300 font-semibold mb-0.5">Academic & Ethical Standards:</strong>
          Our educational and language programmes provide supplemental training and preparation. They do not replace statutory accreditation, grant legal nursing licenses, or guarantee employment/admissions outcomes.
        </div>
      </div>

      {/* Triad of Human Progress Verticals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LumeaNursing */}
        <div className="p-8 rounded-3xl bg-charcoal/70 border border-graphite space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#2DD4BF]/15 text-[#2DD4BF] flex items-center justify-center">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white font-display">Healthcare & Nursing Tech</h2>
            <p className="text-xs sm:text-sm text-silver leading-relaxed">
              Curriculum support and clinical judgment case studies for nursing colleges, practising nurses, and students preparing for global transitions.
            </p>
          </div>
          <div className="pt-4 border-t border-graphite/40">
            <Link href="/brands/lumeanursing" className="text-xs font-semibold text-[#2DD4BF] hover:underline inline-flex items-center gap-1">
              <span>Explore LumeaNursing</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* LumeaSkill */}
        <div className="p-8 rounded-3xl bg-charcoal/70 border border-graphite space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose/15 text-rose flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white font-display">Languages & Exam Prep</h2>
            <p className="text-xs sm:text-sm text-silver leading-relaxed">
              CEFR-aligned German language mastery, diagnostic IELTS/OET coaching, and digital skills designed to bridge the global employability divide.
            </p>
          </div>
          <div className="pt-4 border-t border-graphite/40">
            <Link href="/brands/lumeaskill" className="text-xs font-semibold text-rose hover:underline inline-flex items-center gap-1">
              <span>Explore LumeaSkill</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* LumeaGo */}
        <div className="p-8 rounded-3xl bg-charcoal/70 border border-graphite space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/15 text-[#F59E0B] flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white font-display">Global Education Guidance</h2>
            <p className="text-xs sm:text-sm text-silver leading-relaxed">
              Ethical, student-centric study abroad advisory, institution matching, application mentoring, and realistic pre-departure preparation.
            </p>
          </div>
          <div className="pt-4 border-t border-graphite/40">
            <Link href="/brands/lumeago" className="text-xs font-semibold text-[#F59E0B] hover:underline inline-flex items-center gap-1">
              <span>Explore LumeaGo</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="text-center p-8 rounded-3xl bg-charcoal border border-graphite max-w-2xl mx-auto space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white font-display">Unlock Human Capability</h3>
        <p className="text-xs text-silver">Connect with our educational coordinators in Kochi to discuss learning programs or student guidance.</p>
        <Link
          href="/contact?brand=skill"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold bg-rose text-white hover:bg-rose-600 transition-all shadow-glow-rose"
        >
          <span>Enquire Regarding Learning</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
