import React from 'react';
import type { LeadershipProfile } from '@/data/leadership';
import { ArrowUpRight, Linkedin, UserRound } from 'lucide-react';

interface LeadershipPageProps {
  title: string;
  eyebrow: string;
  description: string;
  profiles: LeadershipProfile[];
  accent: 'blue' | 'rose';
}

export function LeadershipPage({ title, eyebrow, description, profiles, accent }: LeadershipPageProps) {
  const accentText = accent === 'blue' ? 'text-cerulean' : 'text-rose';
  const accentBorder = accent === 'blue' ? 'hover:border-cerulean/50' : 'hover:border-rose/50';
  const accentRing = accent === 'blue' ? 'border-cerulean/30' : 'border-rose/30';

  return (
    <div className="relative isolate overflow-hidden bg-jet text-silver">
      <div className={`pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full blur-[120px] ${accent === 'blue' ? 'bg-cerulean/10' : 'bg-rose/10'}`} />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <header className="mb-12 max-w-4xl space-y-4 md:mb-16">
          <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${accentText}`}>{eyebrow}</p>
          <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">{title}</h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">{description}</p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {profiles.map((profile, index) => (
            <article
              key={profile.id}
              className={`group flex h-full flex-col rounded-2xl border border-graphite bg-charcoal/80 p-5 shadow-glass transition-all duration-300 ${accentBorder} ${index === 4 ? 'lg:col-start-2 lg:col-span-2 lg:w-1/2 lg:justify-self-center' : ''}`}
            >
              <div className={`relative mb-5 aspect-[4/3] overflow-hidden rounded-xl border bg-[#102d35] ${accentRing}`}>
                {profile.photo ? (
                  <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-3 text-slate-400">
                    <UserRound className="h-10 w-10 opacity-80" aria-hidden="true" />
                    <span className="text-sm font-medium">Add profile photo</span>
                  </div>
                )}
                <span className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-jet/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-300">
                  Profile {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="flex flex-1 flex-col">
                <h2 className="font-display text-xl font-bold text-white">{profile.name}</h2>
                <p className={`mt-1 text-sm font-semibold ${accentText}`}>{profile.designation}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">{profile.biography}</p>
                <div className="mt-5 flex items-center justify-between border-t border-graphite pt-4">
                  <span className="text-xs text-silver/70">{accent === 'blue' ? 'Board of Directors' : 'Advisory Board'}</span>
                  {profile.linkedin ? (
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`View ${profile.name} on LinkedIn`} className={`inline-flex items-center gap-1 text-xs ${accentText} hover:text-white`}>
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className={`text-xs ${accentText}`}>LUMEA Group</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
