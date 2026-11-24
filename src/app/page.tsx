import React from 'react';
import Link from 'next/link';
import { 
  Shield, 
  ArrowRight, 
  ExternalLink, 
  Lock, 
  Cpu, 
  GraduationCap, 
  Compass, 
  HeartPulse, 
  CheckCircle2, 
  Layers, 
  Globe2, 
  Users, 
  ChevronRight, 
  FileText,
  AlertTriangle,
  Sparkles
} from 'lucide-react';
import { BRANDS, GROUP_SOLUTIONS, PHILOSOPHY_PILLARS, WHY_LUMEA_PRINCIPLES } from '@/data/brands';
import { AUDIENCE_PATHWAYS } from '@/data/audiences';
import { RESEARCH_AREAS, RESEARCH_NOTE } from '@/data/insights';
import { BrandOrbit } from '@/components/ui/BrandOrbit';
import { StatusBadge } from '@/components/ui/StatusBadge';

export default function HomePage() {
  const cyberBrand = BRANDS.cyber;

  return (
    <div className="relative bg-jet text-silver overflow-hidden">
      {/* Background Subtle Tech Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-cerulean/15 via-cerulean/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-rose/10 blur-[120px] pointer-events-none" />

      {/* SECTION 2 — HERO */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal/80 border border-graphite text-xs font-mono text-slate-300 shadow-glass">
            <span className="w-2 h-2 rounded-full bg-cerulean animate-ping" />
            <span className="text-cerulean font-semibold">LUMEA GROUP</span>
            <span className="text-silver/60">·</span>
            <span>Kochi, Kerala, India</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-display">
            Securing the digital world.<br />
            <span className="bg-gradient-to-r from-cerulean via-sky-300 to-rose bg-clip-text text-transparent">
              Enabling human progress.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A cybersecurity-led technology group bringing together cybersecurity, AI, software and learning to help organisations protect what matters and help people prepare for what comes next.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#brands-section"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-cerulean text-jet hover:bg-cerulean-400 transition-all duration-200 shadow-glow-blue"
            >
              <span>Explore Our Brands</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-charcoal/80 border border-graphite hover:border-slate-400 hover:bg-charcoal transition-all duration-200"
            >
              <span>Discover LUMEA</span>
              <ChevronRight className="w-4 h-4 text-silver" />
            </Link>
          </div>
        </div>

        {/* Hero Interactive Orbit Explorer Module */}
        <div className="mt-16 pt-8 border-t border-graphite/40">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] uppercase tracking-widest font-mono text-cerulean font-semibold">
              Interactive Brand Constellation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Four Distinct Brands, One Cohesive Orbit</h2>
            <p className="text-xs sm:text-sm text-silver mt-2">
              Explore how our four operating verticals connect under the parent group&apos;s security and human-progress architecture.
            </p>
          </div>
          <BrandOrbit />
        </div>
      </section>

      {/* SECTION 3 — GROUP INTRODUCTION */}
      <section className="py-20 md:py-28 bg-charcoal/50 border-y border-graphite/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-cerulean font-mono">
                The Connected Technology Group
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                How Security, Technology & Learning Work Together
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Most organisations treat cybersecurity as an emergency defensive barrier, digital software as an operational utility, and professional learning as a separate human-resource function.
              </p>
              <p className="text-silver text-sm sm:text-base leading-relaxed">
                At LUMEA Group, we recognise that these elements are fundamentally interdependent. Without robust cybersecurity, technological opportunity is perpetually vulnerable. Without human learning and clinical mastery, technology cannot deliver on its promise.
              </p>
              <div className="pt-2">
                <blockquote className="p-4 rounded-xl bg-jet/80 border-l-2 border-cerulean text-sm italic text-white">
                  &ldquo;Technology should create opportunity and protect it.&rdquo;
                </blockquote>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-charcoal/80 border border-graphite hover:border-cerulean/50 transition-colors space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-cerulean/15 text-cerulean flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Cybersecurity First</h3>
                <p className="text-xs sm:text-sm text-silver leading-relaxed">
                  Defensive architectural audits, authorized testing, and risk verification to ensure operational continuity for modern enterprise systems.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-charcoal/80 border border-graphite hover:border-cerulean/50 transition-colors space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Applied Intelligence</h3>
                <p className="text-xs sm:text-sm text-silver leading-relaxed">
                  Pragmatic AI deployments and sanitized data engineering designed to extract actionable insights without compromising corporate data privacy.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-charcoal/80 border border-graphite hover:border-rose/50 transition-colors space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-rose/15 text-rose flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Human Capability</h3>
                <p className="text-xs sm:text-sm text-silver leading-relaxed">
                  European CEFR language coaching, healthcare clinical training, and professional technical education to build resilient practitioners.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-charcoal/80 border border-graphite hover:border-amber-500/50 transition-colors space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Global Horizons</h3>
                <p className="text-xs sm:text-sm text-silver leading-relaxed">
                  Transparent, ethical study abroad counseling and pre-departure guidance that empowers students and families to navigate international futures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FOUR BRANDS DEEP DIVE */}
      <section id="brands-section" className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
            Group Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Four Operating Brands. One High Standard.
          </h2>
          <p className="text-sm sm:text-base text-silver">
            Each brand operates autonomously within its specialised domain while sharing the LUMEA Group philosophy of security, integrity, and human progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.values(BRANDS).map((brand) => (
            <div
              key={brand.id}
              className="bg-charcoal/70 border border-graphite rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-graphite/80 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Top ambient color edge */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300"
                style={{ backgroundColor: brand.accentColor }}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full border"
                    style={{
                      color: brand.accentColor,
                      borderColor: `${brand.accentColor}40`,
                      backgroundColor: `${brand.accentColor}10`
                    }}
                  >
                    {brand.kicker}
                  </span>
                  <span className="text-xs text-silver font-mono">{brand.category}</span>
                </div>

                <div className="py-2 mb-2">
                  <img
                    src={brand.logoWhiteUrl}
                    alt={brand.name}
                    className="h-10 sm:h-11 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                  />
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {brand.headline}
                </p>

                {/* Core focus pills */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] uppercase tracking-wider text-silver font-semibold">Core Focus Areas</div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {brand.coreFocus.slice(0, 3).map((focus, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: brand.accentColor }} />
                        <span>{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-graphite/60 flex items-center justify-between">
                <Link
                  href={`/brands/${brand.slug}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold transition-colors group-hover:underline"
                  style={{ color: brand.accentColor }}
                >
                  <span>Explore {brand.name} Landing Page</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={`/contact?brand=${brand.id}`}
                  className="text-xs text-silver hover:text-white"
                >
                  Direct Enquiry
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — FLAGSHIP BRAND: LUMEACYBER */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-jet via-charcoal to-jet border-y border-graphite/70 relative overflow-hidden">
        {/* Cerulean ambient cyber glow */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cerulean/10 blur-[130px] pointer-events-none -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cerulean/15 border border-cerulean/30 text-cerulean text-xs font-semibold uppercase tracking-wider font-mono">
                <Shield className="w-3.5 h-3.5" />
                <span>Flagship Operating Vertical</span>
              </div>

              <div className="py-2">
                <img
                  src={cyberBrand.logoWhiteUrl}
                  alt="LumeaCyber"
                  className="h-12 sm:h-14 w-auto object-contain filter drop-shadow-[0_0_20px_rgba(0,174,239,0.3)]"
                />
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
                Cybersecurity first.<br />
                <span className="text-cerulean">Intelligence throughout.</span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                As digital systems power mission-critical infrastructure, defensive vigilance is non-negotiable. LumeaCyber serves as the high-security technical foundation of LUMEA Group, delivering rigorous risk assessments, applied AI engineering, and institutional capability building.
              </p>

              {/* Written authorization advisory note */}
              <div className="p-4 rounded-xl bg-jet/90 border border-graphite space-y-1.5 text-xs text-silver">
                <div className="flex items-center gap-2 text-slate-200 font-semibold">
                  <Lock className="w-3.5 h-3.5 text-cerulean" />
                  <span>Strict Legal & Ethical Engagement Standard</span>
                </div>
                <p>
                  All security assessments, posture evaluations, and vulnerability testing are executed strictly under bilateral non-disclosure agreements and formal written authorization. We do not claim unverified certifications or promise absolute invulnerability.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/brands/lumeacyber"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-cerulean text-jet hover:bg-cerulean-400 transition-all shadow-glow-blue"
                >
                  <span>Explore LumeaCyber</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/solutions/cybersecurity"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-charcoal border border-graphite hover:border-slate-400 transition-colors"
                >
                  <span>Defensive Solutions</span>
                </Link>
              </div>
            </div>

            {/* Right: Technical Visual & Capability Stack */}
            <div className="lg:col-span-6">
              <div className="bg-jet/90 border border-cerulean/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-graphite">
                  <div className="flex items-center gap-2 font-mono text-xs text-cerulean">
                    <span className="w-2 h-2 rounded-full bg-cerulean animate-ping" />
                    <span>LUMEACYBER DEFENSIVE STACK</span>
                  </div>
                  <span className="text-[10px] uppercase font-mono text-silver px-2 py-0.5 rounded bg-charcoal">
                    v2.4 TELEMETRY
                  </span>
                </div>

                <div className="space-y-4">
                  {cyberBrand.services.slice(0, 4).map((s) => (
                    <div
                      key={s.id}
                      className="p-4 rounded-xl bg-charcoal/60 border border-graphite/60 flex items-start justify-between gap-3 hover:border-cerulean/40 transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-white flex items-center gap-2">
                          <span>{s.name}</span>
                        </div>
                        <p className="text-xs text-silver leading-relaxed">{s.description}</p>
                      </div>
                      <StatusBadge status={s.status} note={s.statusNote} className="shrink-0" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-graphite text-xs text-silver flex items-center justify-between">
                  <span>Engagement Framework:</span>
                  <span className="font-mono text-slate-300">Discover → Understand → Propose → Deliver → Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — SOLUTIONS */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
            Group Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Integrated Enterprise Solutions
          </h2>
          <p className="text-sm sm:text-base text-silver">
            Tailored technical interventions engineered across defensive security, intelligent systems, and human progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GROUP_SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="bg-charcoal/60 border border-graphite rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-cerulean/40 transition-colors group"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cerulean font-semibold px-2.5 py-1 rounded-full bg-cerulean/10 border border-cerulean/20">
                  {sol.brand}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cerulean transition-colors font-display">
                  {sol.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {sol.shortDesc}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-[11px] uppercase tracking-wider text-silver font-semibold">Key Capabilities:</div>
                  <ul className="space-y-1.5 text-xs text-silver">
                    {sol.keyCapabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cerulean shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-graphite/60">
                <Link
                  href={`/solutions/${sol.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cerulean hover:text-white transition-colors"
                >
                  <span>Explore Solution Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7 — WHO WE HELP (4 AUDIENCE PATHWAYS) */}
      <section className="py-20 md:py-28 bg-charcoal/40 border-y border-graphite/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
              Audience Pathways
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              Who We Help
            </h2>
            <p className="text-sm sm:text-base text-silver">
              We design specialized pathways to address the distinct goals of modern organisations, academic institutions, ambitious practitioners, and families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCE_PATHWAYS.map((aud) => (
              <div
                key={aud.id}
                className="p-6 rounded-2xl bg-charcoal border border-graphite hover:border-slate-400 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase text-cerulean tracking-wider">Pathway</span>
                  <h3 className="text-lg font-bold text-white font-display">{aud.title}</h3>
                  <p className="text-xs text-silver leading-relaxed">{aud.description}</p>

                  <div className="pt-2 space-y-1.5">
                    <span className="text-[10px] uppercase font-semibold text-silver/80">Key Solutions:</span>
                    <ul className="text-[11px] text-slate-300 space-y-1">
                      {aud.howWeHelp.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-cerulean">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-graphite/40">
                  <Link
                    href={`/industries#${aud.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cerulean hover:text-white transition-colors"
                  >
                    <span>{aud.actionCta}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — THE LUMEA PHILOSOPHY */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
            Core Tenets
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            The LUMEA Philosophy
          </h2>
          <p className="text-sm sm:text-base text-silver">
            Four foundational pillars governing every corporate decision, technical service, and educational syllabus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHILOSOPHY_PILLARS.map((pil, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-charcoal/60 border border-graphite hover:border-graphite/80 transition-colors space-y-3 relative overflow-hidden"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold font-mono text-sm"
                style={{ backgroundColor: `${pil.color}20`, color: pil.color }}
              >
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-white font-display">{pil.title}</h3>
              <div className="text-xs font-mono font-semibold" style={{ color: pil.color }}>
                {pil.subtitle}
              </div>
              <p className="text-xs text-silver leading-relaxed">{pil.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9 — WHY LUMEA */}
      <section className="py-20 md:py-28 bg-charcoal/40 border-y border-graphite/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
                Guiding Principles
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                Why Organisations & Learners Choose LUMEA
              </h2>
              <p className="text-sm text-silver leading-relaxed">
                In an era dominated by aggressive marketing claims and speculative tech, LUMEA Group prioritises technical truth, ethical boundaries, and transparent human-centred delivery.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-graphite/70 text-white border border-graphite hover:border-cerulean transition-colors"
                >
                  <span>Read Corporate Background</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {WHY_LUMEA_PRINCIPLES.map((principle) => (
                <div
                  key={principle.id}
                  className="p-5 rounded-xl bg-jet/80 border border-graphite hover:border-cerulean/40 transition-colors"
                >
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cerulean" />
                    <span>{principle.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-silver mt-1.5 leading-relaxed pl-3.5">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — INSIGHTS & RESEARCH */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
              Authentic Perspectives
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mt-1">
              Insights & Applied Research
            </h2>
            <p className="text-xs sm:text-sm text-silver mt-1 max-w-xl">
              Authentic technical briefs and pedagogical analysis reflecting our active focus areas across security, AI, and education.
            </p>
          </div>
          <Link
            href="/insights"
            className="text-xs font-semibold text-cerulean hover:underline inline-flex items-center gap-1 shrink-0"
          >
            <span>Explore All Insights</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESEARCH_AREAS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-charcoal/60 border border-graphite hover:border-cerulean/40 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-silver">
                  <span className="text-cerulean font-semibold">{item.category}</span>
                  <span>{item.readTime}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white hover:text-cerulean transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-silver leading-relaxed line-clamp-3">
                  {item.abstract}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-graphite/40 flex items-center justify-between text-xs">
                <span className="text-silver/70 font-mono text-[11px]">{item.focusVertical}</span>
                <Link href="/insights" className="text-cerulean hover:underline font-semibold text-xs">
                  Read Brief
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-charcoal/30 border border-graphite/40 text-[11px] text-silver leading-relaxed text-center max-w-3xl mx-auto">
          {RESEARCH_NOTE.disclaimer}
        </div>
      </section>

      {/* SECTION 11 — FINAL CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-t from-charcoal via-jet to-jet border-t border-graphite/70 text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-cerulean/10 border border-cerulean/30 text-cerulean flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Let&apos;s create something meaningful together.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Whether your organisation requires defensive cybersecurity assessment, institutional capability building, language coaching, or transparent global education guidance, our coordinators in Kochi are ready to assist.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-cerulean text-jet hover:bg-cerulean-400 transition-all shadow-glow-blue"
            >
              <span>Initiate Formal Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/brands"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-charcoal/80 border border-graphite hover:border-slate-400 transition-colors"
            >
              <span>Explore All Four Brands</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
