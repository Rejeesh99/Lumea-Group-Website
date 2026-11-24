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

      {/* SECTION 2 — HOMEPAGE HERO */}
      <section className="relative mx-auto w-full max-w-7xl px-4 pt-14 pb-16 sm:px-6 md:pt-20 md:pb-24 lg:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="relative z-10 space-y-6 text-left lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-graphite bg-charcoal/80 px-4 py-2 text-xs text-slate-300 shadow-glass">
              <span className="h-2 w-2 rounded-full bg-cerulean" />
              <span className="font-mono font-semibold tracking-wider text-cerulean">LUMEA GROUP</span>
              <span className="text-silver/50">·</span>
              <span>Kochi, Kerala, India</span>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cerulean">Four brands. One shared purpose.</p>
              <h1 className="font-display text-5xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-6xl xl:text-7xl">
                Securing the<br className="hidden sm:block" /> digital world.
                <span className="mt-2 block bg-gradient-to-r from-cerulean via-sky-300 to-rose bg-clip-text text-transparent">
                  Enabling human progress.
                </span>
              </h1>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-cerulean to-rose" />
            </div>

            <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              We bring technology, AI, software and learning together—creating useful opportunities for organisations and people to move forward with confidence.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#brands-section"
                className="inline-flex items-center gap-2.5 rounded-full bg-cerulean px-6 py-3.5 text-sm font-semibold tracking-wide text-jet shadow-glow-blue transition-colors hover:bg-cerulean-400"
              >
                <span>Explore Our Brands</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-graphite bg-charcoal/70 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-cerulean/60"
              >
                <span>Get to know LUMEA</span>
                <ChevronRight className="h-4 w-4 text-cerulean" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-graphite/70 pt-5 text-xs text-silver">
              <span><strong className="text-white">4</strong> specialist brands</span>
              <span><strong className="text-white">1</strong> connected group</span>
              <span>Built around people and progress</span>
            </div>
          </div>

          {/* A clear, visual map of the four operating brands */}
          <div className="relative mx-auto flex w-full max-w-[590px] items-center justify-center lg:col-span-7">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(0,174,239,0.15),transparent_66%)]" />
            <div className="relative aspect-square w-full max-w-[540px]">
              <div className="absolute inset-[8%] rounded-full border border-dashed border-cerulean/25" />
              <div className="absolute inset-[20%] rounded-full border border-graphite/80" />
              <div className="absolute inset-[32%] rounded-full border border-dashed border-rose/25" />
              <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <path d="M250 250 L250 45 M250 250 L455 250 M250 250 L250 455 M250 250 L45 250" stroke="#00AEEF" strokeOpacity=".48" strokeWidth="1.5" fill="none" />
                <circle cx="250" cy="45" r="4" fill="#FF2E88" />
                <circle cx="455" cy="250" r="4" fill="#00AEEF" />
                <circle cx="250" cy="455" r="4" fill="#FF2E88" />
                <circle cx="45" cy="250" r="4" fill="#00AEEF" />
              </svg>

              <div className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-cerulean/50 bg-charcoal/95 p-3 text-center shadow-[0_0_55px_rgba(0,174,239,0.18)] sm:h-40 sm:w-40">
                <img src="/logos/lumea-group-mark.png" alt="LUMEA Group" className="mb-1 h-12 w-12 object-contain sm:h-14 sm:w-14" />
                <span className="font-display text-sm font-extrabold tracking-[0.2em] text-white sm:text-base">LUMEA</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-cerulean">Group</span>
              </div>

              <Link href="/brands/lumeacyber" className="absolute left-1/2 top-[1%] z-20 flex w-[158px] -translate-x-1/2 items-center gap-2.5 rounded-xl border border-cerulean/50 bg-charcoal/95 p-3 shadow-glass transition-transform hover:-translate-y-1 sm:w-[184px]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cerulean/10"><img src="/logos/lumea-cyber-mark.png" alt="" className="h-7 w-7 object-contain" /></span>
                <span><strong className="block text-xs text-white sm:text-sm">LumeaCyber</strong><small className="text-[10px] text-silver">Digital technology & AI</small></span>
              </Link>
              <Link href="/brands/lumeanursing" className="absolute right-[-1%] top-1/2 z-20 flex w-[158px] -translate-y-1/2 items-center gap-2.5 rounded-xl border border-teal-400/40 bg-charcoal/95 p-3 shadow-glass transition-transform hover:translate-x-1 sm:w-[184px]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-400/10"><img src="/logos/lumea-nursing-mark.png" alt="" className="h-7 w-7 object-contain" /></span>
                <span><strong className="block text-xs text-white sm:text-sm">LumeaNursing</strong><small className="text-[10px] text-silver">Nursing education</small></span>
              </Link>
              <Link href="/brands/lumeago" className="absolute bottom-[1%] left-1/2 z-20 flex w-[158px] -translate-x-1/2 items-center gap-2.5 rounded-xl border border-amber-400/40 bg-charcoal/95 p-3 shadow-glass transition-transform hover:translate-y-1 sm:w-[184px]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-400/10"><img src="/logos/lumea-go-mark.png" alt="" className="h-7 w-7 object-contain" /></span>
                <span><strong className="block text-xs text-white sm:text-sm">LumeaGo</strong><small className="text-[10px] text-silver">Global education</small></span>
              </Link>
              <Link href="/brands/lumeaskill" className="absolute left-[-1%] top-1/2 z-20 flex w-[158px] -translate-y-1/2 items-center gap-2.5 rounded-xl border border-rose/50 bg-charcoal/95 p-3 shadow-glass transition-transform hover:-translate-x-1 sm:w-[184px]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose/10"><img src="/logos/lumea-skill-mark.png" alt="" className="h-7 w-7 object-contain" /></span>
                <span><strong className="block text-xs text-white sm:text-sm">LumeaSkill</strong><small className="text-[10px] text-silver">Skills & languages</small></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE LUMEA GROUP */}
      <section className="relative border-y border-graphite/60 bg-charcoal/45 py-20 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-5 lg:col-span-5">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cerulean">A connected group of businesses</span>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Different expertise.<br /><span className="text-cerulean">One shared purpose.</span>
            </h2>
            <p className="text-base leading-relaxed text-slate-300">
              LUMEA brings together four specialist businesses across technology, professional learning, nursing education and global education guidance.
            </p>
            <p className="text-sm leading-relaxed text-silver">
              Each brand has its own expertise and community. Together, they create practical opportunities for organisations, learners, professionals and families.
            </p>
            <blockquote className="rounded-xl border-l-2 border-cerulean bg-jet/80 p-4 text-sm italic text-white">
              &ldquo;Technology should create opportunity. People bring it to life.&rdquo;
            </blockquote>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-cerulean transition-colors hover:text-white">
              Discover the LUMEA story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            <div className="space-y-2.5 rounded-2xl border border-graphite bg-charcoal/80 p-6 transition-colors hover:border-cerulean/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cerulean/15 text-cerulean"><Cpu className="h-5 w-5" /></div>
              <h3 className="text-lg font-bold text-white">Technology & AI</h3>
              <p className="text-sm leading-relaxed text-silver">Digital services, thoughtful technology adoption and applied intelligence that help organisations work with greater clarity.</p>
            </div>
            <div className="space-y-2.5 rounded-2xl border border-graphite bg-charcoal/80 p-6 transition-colors hover:border-rose/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose/15 text-rose"><GraduationCap className="h-5 w-5" /></div>
              <h3 className="text-lg font-bold text-white">Skills & Careers</h3>
              <p className="text-sm leading-relaxed text-silver">Language learning, professional development and practical skills that help people take their next step.</p>
            </div>
            <div className="space-y-2.5 rounded-2xl border border-graphite bg-charcoal/80 p-6 transition-colors hover:border-teal-400/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-400/15 text-teal-300"><HeartPulse className="h-5 w-5" /></div>
              <h3 className="text-lg font-bold text-white">Nursing Education</h3>
              <p className="text-sm leading-relaxed text-silver">Learning resources and educational support designed around the needs of nursing students and professionals.</p>
            </div>
            <div className="space-y-2.5 rounded-2xl border border-graphite bg-charcoal/80 p-6 transition-colors hover:border-amber-400/50">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/15 text-amber-300"><Globe2 className="h-5 w-5" /></div>
              <h3 className="text-lg font-bold text-white">Global Education</h3>
              <p className="text-sm leading-relaxed text-silver">Clear, personal guidance for students and families exploring international study opportunities.</p>
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
            Each brand operates autonomously within its specialised domain while sharing the LUMEA Group philosophy of integrity, innovation, and human progress.
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
            Connected services across technology, intelligent systems, professional learning, and human progress.
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
              Thoughtful perspectives and practical insights across technology, AI, professional learning, and education.
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
            Whether you are exploring technology services, professional development, nursing education, or global study guidance, our team in Kochi is ready to help.
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
