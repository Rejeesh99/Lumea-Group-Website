'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Shield, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Phone, 
  Mail, 
  HeartPulse, 
  GraduationCap, 
  Compass, 
  Cpu, 
  Lock, 
  BookOpen 
} from 'lucide-react';
import { CONTACT_INFO } from '@/data/brands';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setBrandsOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  const brandsList = [
    {
      name: 'LumeaCyber',
      href: '/brands/lumeacyber',
      desc: 'Protect Your Digital World',
      mark: '/logos/lumea-cyber-mark.png',
      accent: 'border-l-[#00AEEF]',
      badge: 'Flagship'
    },
    {
      name: 'LumeaNursing',
      href: '/brands/lumeanursing',
      desc: 'Empowering those who care',
      mark: '/logos/lumea-nursing-mark.png',
      accent: 'border-l-[#2DD4BF]',
      badge: 'Healthcare'
    },
    {
      name: 'LumeaSkill',
      href: '/brands/lumeaskill',
      desc: "Language isn't a limit",
      mark: '/logos/lumea-skill-mark.png',
      accent: 'border-l-[#FF2E88]',
      badge: 'Languages'
    },
    {
      name: 'LumeaGo',
      href: '/brands/lumeago',
      desc: 'Study Beyond Borders',
      mark: '/logos/lumea-go-mark.png',
      accent: 'border-l-[#F59E0B]',
      badge: 'Study Abroad'
    }
  ];

  const solutionsList = [
    {
      name: 'Cybersecurity & Defence',
      href: '/solutions/cybersecurity',
      desc: 'Authorised risk assessments, defensive postures & awareness',
      icon: <Lock className="w-4 h-4 text-cerulean" />
    },
    {
      name: 'Software, AI & Digital',
      href: '/solutions/technology',
      desc: 'Cloud architectures, data sanitisation & applied AI',
      icon: <Cpu className="w-4 h-4 text-cerulean" />
    },
    {
      name: 'Learning & Human Progress',
      href: '/solutions/learning',
      desc: 'Clinical education tech, linguistic CEFR & global pathways',
      icon: <BookOpen className="w-4 h-4 text-cerulean" />
    }
  ];

  return (
    <>
      {/* Top Banner / Micro bar */}
      <div className="bg-jet border-b border-graphite/40 py-1.5 px-4 text-xs text-silver hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cerulean animate-pulse" />
              Securing the digital world. Enabling human progress.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-cerulean" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3 h-3 text-cerulean" />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <span className="text-silver/60">Kochi, Kerala</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-jet/90 backdrop-blur-md border-b border-graphite/80 py-3 shadow-glass'
            : 'bg-jet/60 backdrop-blur-sm border-b border-graphite/30 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cerulean rounded-lg p-1">
            <div className="relative h-10 w-auto flex items-center">
              {/* Official LUMEA Group white logo */}
              <img
                src="/logos/lumea-group-white.png"
                alt="LUMEA Group"
                className="h-9 w-auto object-contain hidden sm:block"
              />
              <div className="flex items-center gap-2 sm:hidden">
                <img
                  src="/logos/lumea-group-mark.png"
                  alt="LUMEA Group"
                  className="h-8 w-auto object-contain"
                />
                <span className="font-display font-extrabold text-lg tracking-wider text-white">LUMEA</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/' ? 'text-cerulean bg-charcoal/80' : 'text-slate-300 hover:text-white hover:bg-charcoal/40'
              }`}
            >
              Home
            </Link>

            {/* Brands Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setBrandsOpen(true)}
              onMouseLeave={() => setBrandsOpen(false)}
            >
              <button
                onClick={() => setBrandsOpen(!brandsOpen)}
                aria-expanded={brandsOpen}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith('/brands') ? 'text-cerulean bg-charcoal/80' : 'text-slate-300 hover:text-white hover:bg-charcoal/40'
                }`}
              >
                <span>Our Brands</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${brandsOpen ? 'rotate-180 text-cerulean' : 'text-silver'}`} />
              </button>

              {/* Brands Dropdown Menu */}
              {brandsOpen && (
                <div className="absolute top-full left-0 w-80 p-2 mt-1 rounded-2xl bg-charcoal border border-graphite shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-silver/60 px-3 py-1.5">
                    Operating Verticals
                  </div>
                  <div className="space-y-1">
                    {brandsList.map((b) => (
                      <Link
                        key={b.name}
                        href={b.href}
                        className={`flex items-start gap-3 p-2.5 rounded-xl transition-all border-l-2 ${b.accent} hover:bg-graphite/50 group`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-jet/80 border border-graphite p-1 flex items-center justify-center shrink-0 mt-0.5">
                          <img src={b.mark} alt={b.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-white group-hover:text-cerulean transition-colors">
                              {b.name}
                            </span>
                            <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-jet text-silver">
                              {b.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-silver leading-snug mt-0.5">{b.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="pt-2 mt-2 border-t border-graphite/40">
                    <Link
                      href="/brands"
                      className="flex items-center justify-between p-2 text-xs font-semibold text-cerulean hover:text-white transition-colors"
                    >
                      <span>Explore Brand Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                aria-expanded={solutionsOpen}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith('/solutions') ? 'text-cerulean bg-charcoal/80' : 'text-slate-300 hover:text-white hover:bg-charcoal/40'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-cerulean' : 'text-silver'}`} />
              </button>

              {/* Solutions Dropdown Menu */}
              {solutionsOpen && (
                <div className="absolute top-full left-0 w-80 p-2 mt-1 rounded-2xl bg-charcoal border border-graphite shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-silver/60 px-3 py-1.5">
                    Core Capabilities
                  </div>
                  <div className="space-y-1">
                    {solutionsList.map((s) => (
                      <Link
                        key={s.name}
                        href={s.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-graphite/50 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-jet/80 border border-graphite flex items-center justify-center shrink-0 mt-0.5">
                          {s.icon}
                        </div>
                        <div className="flex-1">
                          <span className="text-xs font-bold text-white group-hover:text-cerulean transition-colors block">
                            {s.name}
                          </span>
                          <p className="text-[11px] text-silver leading-snug mt-0.5">{s.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/industries"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/industries' ? 'text-cerulean bg-charcoal/80' : 'text-slate-300 hover:text-white hover:bg-charcoal/40'
              }`}
            >
              Who We Help
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/about' ? 'text-cerulean bg-charcoal/80' : 'text-slate-300 hover:text-white hover:bg-charcoal/40'
              }`}
            >
              About
            </Link>

            <Link
              href="/insights"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/insights' ? 'text-cerulean bg-charcoal/80' : 'text-slate-300 hover:text-white hover:bg-charcoal/40'
              }`}
            >
              Insights
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/contact' ? 'text-cerulean bg-charcoal/80' : 'text-slate-300 hover:text-white hover:bg-charcoal/40'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase bg-cerulean text-jet hover:bg-cerulean-400 transition-all shadow-glow-blue"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-cerulean text-jet"
            >
              Enquire
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-charcoal border border-graphite text-silver hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-30 bg-jet/98 backdrop-blur-xl border-t border-graphite lg:hidden overflow-y-auto p-6 space-y-6">
          <div className="space-y-1">
            <Link
              href="/"
              className="block p-3 rounded-xl text-base font-semibold text-white hover:bg-charcoal"
            >
              Home
            </Link>

            <div className="pt-2 pb-1 text-xs uppercase tracking-wider text-cerulean font-bold px-3">
              Our Brands
            </div>
            {brandsList.map((b) => (
              <Link
                key={b.name}
                href={b.href}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-charcoal text-slate-200"
              >
                <div className="w-8 h-8 rounded-lg bg-charcoal border border-graphite p-1 flex items-center justify-center">
                  <img src={b.mark} alt={b.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-white">{b.name}</span>
                  <span className="block text-xs text-silver">{b.desc}</span>
                </div>
              </Link>
            ))}

            <div className="pt-3 pb-1 text-xs uppercase tracking-wider text-cerulean font-bold px-3">
              Solutions
            </div>
            {solutionsList.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="block p-3 rounded-xl text-sm font-semibold text-slate-200 hover:bg-charcoal"
              >
                {s.name}
              </Link>
            ))}

            <div className="pt-3 border-t border-graphite/40 space-y-1">
              <Link
                href="/industries"
                className="block p-3 rounded-xl text-base font-semibold text-white hover:bg-charcoal"
              >
                Who We Help
              </Link>
              <Link
                href="/about"
                className="block p-3 rounded-xl text-base font-semibold text-white hover:bg-charcoal"
              >
                About LUMEA Group
              </Link>
              <Link
                href="/insights"
                className="block p-3 rounded-xl text-base font-semibold text-white hover:bg-charcoal"
              >
                Insights & Research
              </Link>
              <Link
                href="/contact"
                className="block p-3 rounded-xl text-base font-semibold text-white hover:bg-charcoal"
              >
                Contact & Enquiries
              </Link>
            </div>
          </div>

          {/* Mobile Direct Contacts */}
          <div className="p-4 rounded-2xl bg-charcoal border border-graphite space-y-3">
            <div className="text-xs uppercase tracking-wider text-silver font-semibold">Direct Communication</div>
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 text-sm text-white hover:text-cerulean">
              <Phone className="w-4 h-4 text-cerulean" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 text-sm text-white hover:text-cerulean">
              <Mail className="w-4 h-4 text-cerulean" />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <div className="text-xs text-silver">WhatsApp: {CONTACT_INFO.whatsapp}</div>
            <div className="text-xs text-silver">Location: {CONTACT_INFO.location}</div>
          </div>

          <div className="pt-2 pb-8">
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm bg-cerulean text-jet"
            >
              <span>Submit Initial Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
