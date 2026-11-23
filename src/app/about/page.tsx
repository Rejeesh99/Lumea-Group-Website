import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Target, Lightbulb, Heart, Globe, ArrowRight, MapPin, Building, Award, CheckCircle2 } from 'lucide-react';
import { PHILOSOPHY_PILLARS, WHY_LUMEA_PRINCIPLES, CONTACT_INFO } from '@/data/brands';

export const metadata: Metadata = {
  title: 'About Us — Corporate Identity & Guiding Philosophy',
  description: 'Learn about LUMEA Group: an internationally ambitious, cybersecurity-led technology group based in Kochi, Kerala, uniting cybersecurity, AI, healthcare pedagogy, and global education.',
};

export default function AboutPage() {
  return (
    <div className="bg-jet text-silver py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
          Corporate Identity & Philosophy
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          About LUMEA Group
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          An internationally ambitious, cybersecurity-led technology group bringing together cybersecurity, AI, software engineering, and human-centred learning to protect what matters and prepare for what comes next.
        </p>
      </div>

      {/* Origin & Core Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
            Our Purpose
          </span>
          <h2 className="text-3xl font-bold text-white font-display">
            Securing the digital world. Enabling human progress.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Headquartered in Kochi, Kerala, India, LUMEA Group was established to bridge the gap between technological security and human potential. In modern corporate environments, technical defenses and human capabilities are too often treated as isolated concerns.
          </p>
          <p className="text-xs sm:text-sm text-silver leading-relaxed">
            We hold that true organizational resilience requires both: impenetrable digital boundaries backed by authorized vulnerability testing, paired with educated, confident human practitioners who understand risk and know how to seize global opportunities.
          </p>

          <blockquote className="p-5 rounded-2xl bg-charcoal/80 border-l-4 border-cerulean text-sm sm:text-base italic text-white font-medium">
            &ldquo;Technology should create opportunity and protect it.&rdquo;
          </blockquote>
        </div>

        <div className="lg:col-span-5 p-8 rounded-3xl bg-charcoal border border-graphite space-y-5 shadow-glass">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cerulean/15 text-cerulean flex items-center justify-center font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Corporate Factsheet</h3>
              <span className="text-xs text-silver font-mono">LUMEA GROUP PARENT</span>
            </div>
          </div>

          <div className="space-y-3 text-xs border-t border-graphite/60 pt-4">
            <div>
              <span className="text-silver/60 uppercase text-[10px] block">Global Headquarters</span>
              <span className="text-white font-medium">{CONTACT_INFO.location}</span>
            </div>
            <div>
              <span className="text-silver/60 uppercase text-[10px] block">Operating Brands</span>
              <span className="text-white font-medium">LumeaCyber · LumeaNursing · LumeaSkill · LumeaGo</span>
            </div>
            <div>
              <span className="text-silver/60 uppercase text-[10px] block">Primary Focus</span>
              <span className="text-white font-medium">Defensive Cyber, AI Engineering, Health Pedagogy & Education</span>
            </div>
            <div>
              <span className="text-silver/60 uppercase text-[10px] block">Direct Contact</span>
              <span className="text-cerulean font-mono">{CONTACT_INFO.email}</span>
            </div>
          </div>
        </div>
      </div>

      {/* The Four Pillars */}
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">Foundations</span>
          <h2 className="text-3xl font-bold text-white font-display">The Four Pillars of LUMEA</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHILOSOPHY_PILLARS.map((p, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-charcoal/60 border border-graphite space-y-3">
              <span className="text-xs font-mono font-bold" style={{ color: p.color }}>0{idx + 1}</span>
              <h3 className="text-xl font-bold text-white font-display">{p.title}</h3>
              <span className="text-xs font-semibold block" style={{ color: p.color }}>{p.subtitle}</span>
              <p className="text-xs text-silver leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Guiding Principles */}
      <div className="bg-charcoal/40 border border-graphite rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">Ethics & Standards</span>
          <h2 className="text-3xl font-bold text-white font-display">Our Operating Principles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_LUMEA_PRINCIPLES.map((pr) => (
            <div key={pr.id} className="p-6 rounded-2xl bg-jet/80 border border-graphite space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cerulean" />
                <span>{pr.title}</span>
              </h3>
              <p className="text-xs text-silver leading-relaxed">{pr.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Action */}
      <div className="text-center p-8 sm:p-12 rounded-3xl bg-charcoal border border-graphite max-w-3xl mx-auto space-y-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
          Partner with LUMEA Group
        </h3>
        <p className="text-xs sm:text-sm text-silver max-w-xl mx-auto">
          We welcome inquiries from enterprise clients, educational institutions, healthcare organizations, and prospective partners worldwide.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-cerulean text-jet hover:bg-cerulean-400 transition-all shadow-glow-blue"
          >
            <span>Reach Out to Our Headquarters</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
