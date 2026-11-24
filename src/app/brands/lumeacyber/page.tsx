import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, LockKeyhole, ArrowRight, CheckCircle2, BrainCircuit, GraduationCap, Search, Users, Database, Lightbulb } from 'lucide-react';
import { BRANDS } from '@/data/brands';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Accordion } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'LumeaCyber — Cybersecurity, AI & Data Science',
  description: 'Practical cybersecurity insight, responsible AI and data science, and hands-on learning for organisations, teams and institutions.',
};

export default function LumeaCyberPage() {
  const brand = BRANDS.cyber;
  return (
    <main className="bg-jet text-silver">
      <section className="relative mx-auto max-w-7xl overflow-hidden px-4 pb-20 pt-20 sm:px-6 md:pb-28 md:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[760px] -translate-x-1/2 bg-cerulean/10 blur-[130px]" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-7 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cerulean/30 bg-charcoal px-4 py-2 font-mono text-xs font-semibold text-cerulean">
            <ShieldCheck className="h-4 w-4" /> CYBERSECURITY · AI · DATA SCIENCE
          </div>
          <img src={brand.logoWhiteUrl} alt="LumeaCyber" className="mx-auto h-14 w-auto object-contain sm:h-16" />
          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
            Understand your digital risks.<br /><span className="text-cerulean">Make technology work smarter.</span>
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            LumeaCyber helps organisations understand their security exposure, apply artificial intelligence and data responsibly, and build practical cybersecurity skills through hands-on learning.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="/contact?brand=cyber" className="inline-flex items-center gap-2 rounded-full bg-cerulean px-7 py-3.5 text-sm font-semibold text-jet shadow-glow-blue transition hover:bg-cerulean-400">Talk to our team <ArrowRight className="h-4 w-4" /></Link>
            <a href="#capabilities" className="rounded-full border border-graphite bg-charcoal px-7 py-3.5 text-sm font-semibold text-white transition hover:border-cerulean/50">Explore our capabilities</a>
          </div>
        </div>
      </section>

      <section className="border-y border-graphite/60 bg-charcoal/45 px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cerulean">What is LumeaCyber?</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">Clarity for a changing digital world.</h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-slate-300 md:col-span-7 md:text-base">
            <p>LumeaCyber is LUMEA Group’s flagship brand, bringing together cybersecurity, artificial intelligence and data science. We work with organisations to make sense of their systems, information and exposure, while helping people develop skills they can apply in real situations.</p>
            <p>Our work starts with listening and understanding your context. We then agree a clear scope, explain the options and provide practical recommendations in language your team can use.</p>
          </div>
        </div>
      </section>

      <section id="capabilities" className="mx-auto max-w-7xl space-y-10 px-4 py-20 sm:px-6">
        <div className="max-w-3xl space-y-3">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cerulean">What we offer</span>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Expertise shaped around your needs.</h2>
          <p className="text-sm leading-relaxed text-silver">Engagements are shaped around your environment, priorities and objectives—not a one-size-fits-all product.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {icon: Search,title:'Cyber risk discovery',desc:'A structured review of important systems, information and people to help identify likely areas of exposure and decide what deserves attention first.'},
            {icon: ShieldCheck,title:'Authorised security assessment',desc:'Scoped vulnerability assessment and security testing, carried out only with written authorisation and explained through prioritised, practical findings.'},
            {icon: BrainCircuit,title:'AI and data science',desc:'Machine learning and data analysis applied to real operational questions, with privacy, security and explainability considered from the beginning.'},
            {icon: Users,title:'Security awareness',desc:'Practical sessions that help teams recognise phishing, social engineering and unsafe information handling, using situations relevant to their work.'},
            {icon: GraduationCap,title:'Cybersecurity learning',desc:'Hands-on learning pathways for individuals and teams covering networks, systems, security concepts and practical skills in guided environments.'},
            {icon: Lightbulb,title:'Institutional capability building',desc:'Collaboration with colleges and training providers to strengthen cybersecurity education with applied, industry-aware learning content.'},
          ].map((item) => <article key={item.title} className="rounded-2xl border border-graphite bg-charcoal/70 p-6 transition hover:border-cerulean/40">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cerulean/10 text-cerulean"><item.icon className="h-5 w-5" /></div>
            <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
            <p className="text-sm leading-relaxed text-silver">{item.desc}</p>
          </article>)}
        </div>
      </section>

      <section className="border-y border-graphite/60 bg-charcoal/40 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cerulean">Learning and future development</span>
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Building knowledge that people can use.</h2>
            <p className="text-sm leading-relaxed text-silver">We support practical skill development and institutional teaching. We are also exploring tools that may support assessment and learning; these are ideas in development, not currently released products.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-graphite bg-jet p-6"><h3 className="text-lg font-bold text-white">For individuals and teams</h3><p className="mt-2 text-sm leading-relaxed text-silver">Learning pathways that focus on doing, not just knowing—building familiarity with networks, systems, common risks and responsible digital practice.</p></div>
            <div className="rounded-2xl border border-graphite bg-jet p-6"><h3 className="text-lg font-bold text-white">For colleges and training providers</h3><p className="mt-2 text-sm leading-relaxed text-silver">Opportunities to strengthen cybersecurity teaching through applied activities and industry-aware content. Specific programmes and delivery arrangements can be discussed and confirmed with our team.</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-4 py-20 sm:px-6">
        <div className="max-w-3xl space-y-3"><span className="font-mono text-xs font-semibold uppercase tracking-widest text-cerulean">How we work</span><h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">A clear process, from first conversation to review.</h2><p className="text-sm leading-relaxed text-silver">Every organisation is different. We start by listening, then agree a scope you can see and question before any work begins.</p></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ['01','Discover','We learn about your organisation, objectives, systems and constraints.'],
            ['02','Understand','We identify the assets, concerns and gaps that matter most, and agree what is in and out of scope.'],
            ['03','Propose','You receive a written proposal with approach, timeline, responsibilities and limitations.'],
            ['04','Deliver','We carry out the agreed work with clear communication and careful handling of your information.'],
            ['05','Review','We walk through findings and priorities with your team and agree practical next steps.'],
          ].map(([n,title,desc])=><article key={n} className="rounded-2xl border border-graphite bg-charcoal/70 p-5"><span className="font-mono text-xs font-bold tracking-widest text-cerulean">STEP {n}</span><h3 className="mt-3 text-lg font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-relaxed text-silver">{desc}</p></article>)}
        </div>
      </section>

      <section className="border-y border-graphite/60 bg-charcoal/40 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="max-w-3xl space-y-3"><span className="font-mono text-xs font-semibold uppercase tracking-widest text-cerulean">Who we work with</span><h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Support for organisations, teams and learners.</h2></div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ['Businesses and organisations','Leaders, IT managers and teams who need a clearer view of digital risk and a practical plan.'],
              ['Teams working with AI and data','Organisations exploring AI and data science and wanting to consider security, privacy and responsible use from the outset.'],
              ['Learners and institutions','People starting or advancing in cybersecurity, and institutions looking to strengthen the way they teach it.'],
            ].map(([title,desc])=><article key={title} className="rounded-2xl border border-graphite bg-jet p-6"><h3 className="text-lg font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-relaxed text-silver">{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="max-w-3xl space-y-3"><span className="font-mono text-xs font-semibold uppercase tracking-widest text-cerulean">Our commitments</span><h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Responsible work. Clear communication.</h2></div>
        <ul className="mt-8 divide-y divide-graphite border-y border-graphite">
          {['Written scope and authorisation before any security testing.','Confidential handling of findings and client information.','Plain-language reporting with prioritised, practical recommendations.','Honest limits: no assessment can promise that an organisation is completely secure.'].map(x=><li key={x} className="flex gap-3 py-5 text-sm text-slate-300"><CheckCircle2 className="h-5 w-5 shrink-0 text-cerulean"/>{x}</li>)}
        </ul>
      </section>

      <section className="border-t border-graphite/60 bg-charcoal/30 px-4 py-20 sm:px-6"><div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center"><span className="font-mono text-xs font-semibold uppercase tracking-widest text-cerulean">Questions people ask</span><h2 className="mt-2 font-display text-3xl font-extrabold text-white">Frequently asked questions</h2></div>
        <Accordion items={brand.faqs} accentColor="#00AEEF" />
      </div></section>

      <section className="border-t border-graphite/60 px-4 py-16 text-center"><div className="mx-auto max-w-2xl space-y-5">
        <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">Let’s start with a conversation.</h2>
        <p className="text-sm leading-relaxed text-silver">Tell us what you are working on. We’ll listen, understand your needs and help identify a sensible next step.</p>
        <div className="flex flex-wrap justify-center gap-4"><Link href="/contact?brand=cyber" className="inline-flex items-center gap-2 rounded-full bg-cerulean px-7 py-3.5 text-sm font-semibold text-jet transition hover:bg-cerulean-400">Talk to LumeaCyber <ArrowRight className="h-4 w-4"/></Link><Link href="/brands" className="rounded-full border border-graphite bg-charcoal px-7 py-3.5 text-sm font-semibold text-white">Explore LUMEA Group</Link></div>
      </div></section>
    </main>
  );
}
