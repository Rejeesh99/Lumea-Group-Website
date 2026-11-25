import React from 'react';
import Link from 'next/link';
import { Shield, Phone, Mail, MapPin, ArrowUpRight, MessageSquare, AlertTriangle } from 'lucide-react';
import { CONTACT_INFO, BRANDS } from '@/data/brands';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-jet border-t border-graphite/80 text-silver text-sm relative overflow-hidden">
      {/* Decorative top ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-24 bg-cerulean/5 blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-graphite/60">
          {/* Col 1: Group Identity & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <img
                src="/logos/lumea-group-white.png"
                alt="LUMEA Group"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              An internationally ambitious, cybersecurity-led technology group bringing together cybersecurity, AI, software engineering, and human-centred learning to protect what matters and prepare for what comes next.
            </p>

            <div className="p-3.5 rounded-xl bg-charcoal/70 border border-graphite text-xs text-slate-300 space-y-1">
              <div className="text-[10px] uppercase font-bold tracking-wider text-cerulean">Guiding Philosophy</div>
              <div className="font-medium text-white italic">&ldquo;Securing the digital world. Enabling human progress.&rdquo;</div>
              <div className="text-[11px] text-silver">&ldquo;Technology should create opportunity and protect it.&rdquo;</div>
            </div>

            <div className="pt-2 text-xs text-silver space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cerulean shrink-0" />
                <span>{CONTACT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cerulean shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-white hover:text-cerulean transition-colors font-mono">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cerulean shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-white hover:text-cerulean transition-colors font-mono">
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Four Operating Brands (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-3">Operating Brands</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/brands/lumeacyber" className="group flex items-center justify-between text-slate-300 hover:text-white">
                  <div>
                    <span className="font-semibold text-white group-hover:text-cerulean transition-colors">LumeaCyber</span>
                    <span className="block text-[11px] text-silver">Cybersecurity, AI & Data Science</span>
                  </div>
                  <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-cerulean/10 text-cerulean border border-cerulean/30">Flagship</span>
                </Link>
              </li>
              <li>
                <Link href="/brands/lumeanursing" className="group flex items-center justify-between text-slate-300 hover:text-white">
                  <div>
                    <span className="font-semibold text-white group-hover:text-[#2DD4BF] transition-colors">LumeaNursing</span>
                    <span className="block text-[11px] text-silver">Nursing Education Technology</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#2DD4BF]" />
                </Link>
              </li>
              <li>
                <Link href="/brands/lumeaskill" className="group flex items-center justify-between text-slate-300 hover:text-white">
                  <div>
                    <span className="font-semibold text-white group-hover:text-rose transition-colors">LumeaSkill</span>
                    <span className="block text-[11px] text-silver">Skills, Languages & Careers</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-rose" />
                </Link>
              </li>
              <li>
                <Link href="/brands/lumeago" className="group flex items-center justify-between text-slate-300 hover:text-white">
                  <div>
                    <span className="font-semibold text-white group-hover:text-[#F59E0B] transition-colors">LumeaGo</span>
                    <span className="block text-[11px] text-silver">Global Education Guidance</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#F59E0B]" />
                </Link>
              </li>
              <li className="pt-2 border-t border-graphite/40">
                <Link href="/brands" className="text-cerulean font-semibold hover:underline inline-flex items-center gap-1">
                  <span>View Brand Architecture</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions & Audiences (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-3">Solutions & Audiences</h4>
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-silver/60 font-semibold block mb-1">Solutions</span>
                <ul className="space-y-1.5 text-xs">
                  <li>
                    <Link href="/solutions/cybersecurity" className="hover:text-white transition-colors">
                      Cybersecurity & Digital Risk
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/technology" className="hover:text-white transition-colors">
                      Software, AI & Digital Systems
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/learning" className="hover:text-white transition-colors">
                      Learning & Human Progress
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-silver/60 font-semibold block mb-1">Who We Help</span>
                <ul className="space-y-1.5 text-xs">
                  <li>
                    <Link href="/industries#businesses" className="hover:text-white transition-colors">
                      Businesses & Organisations
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries#institutions" className="hover:text-white transition-colors">
                      Educational & Nursing Institutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries#professionals" className="hover:text-white transition-colors">
                      Learners & Professionals
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries#families" className="hover:text-white transition-colors">
                      Students & Families
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Col 4: Corporate & Action (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-3">Group Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About LUMEA
                </Link>
              </li>
              <li>
                <Link href="/directors" className="hover:text-cerulean transition-colors">
                  Directors
                </Link>
              </li>
              <li>
                <Link href="/advisors" className="hover:text-rose transition-colors">
                  Advisors
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Insights & Research
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Location
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/919037998981`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk</span>
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold bg-graphite/70 text-white border border-graphite hover:border-cerulean transition-colors"
              >
                <span>Make an Enquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Regulatory, Compliance & Ethics Disclaimers */}
        <div className="py-6 border-b border-graphite/40">
          <div className="p-4 rounded-xl bg-charcoal/40 border border-graphite/60 space-y-2 text-[11px] text-silver leading-relaxed">
            <div className="flex items-center gap-2 text-slate-300 font-semibold uppercase tracking-wider text-[10px]">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Corporate Governance & Regulatory Notice</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
              <p>• <strong>Cybersecurity Testing:</strong> Vulnerability assessments and testing are conducted strictly pursuant to executed bilateral nondisclosure agreements and written authorization. No guarantee of complete invulnerability is made.</p>
              <p>• <strong>Nursing Education:</strong> LumeaNursing provides supplementary digital educational resources. It does not replace statutory nursing education programs, confer registration, or guarantee employment.</p>
              <p>• <strong>Global Education Guidance:</strong> LumeaGo offers ethical counseling. We strictly never guarantee university admissions, visas, or scholarships. Initial enquiries never require passport documentation.</p>
              <p>• <strong>Language & Exam Prep:</strong> German language batches and IELTS/OET coaching schedules are subject to administrator confirmation. Exam outcomes depend on individual learner mastery.</p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-silver/80">
          <div>
            &copy; {currentYear} LUMEA Group. All rights reserved. Kochi, Kerala, India.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookie Preferences
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
