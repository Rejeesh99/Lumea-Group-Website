'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import Link from 'next/link';

export function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('lumea_cookie_consent');
      if (!consent) {
        setIsOpen(true);
      }
    } catch {
      // Ignore in private modes
    }
  }, []);

  const handleConsent = (choice: 'essential' | 'all') => {
    try {
      localStorage.setItem('lumea_cookie_consent', choice);
    } catch {}
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 p-5 rounded-2xl bg-charcoal/95 border border-graphite shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-cerulean/15 text-cerulean flex items-center justify-center shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h5 className="text-sm font-semibold text-white">Privacy & Essential Cookies</h5>
          <p className="text-xs text-silver mt-1 leading-relaxed">
            LUMEA Group uses strictly necessary cookies and anonymous telemetry to ensure system security and optimal performance. We respect your privacy boundaries.{' '}
            <Link href="/cookies" className="text-cerulean hover:underline">
              Review Cookie Policy
            </Link>.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <button
              onClick={() => handleConsent('all')}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cerulean text-jet hover:bg-cerulean-400 transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={() => handleConsent('essential')}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-graphite/60 text-slate-300 border border-graphite hover:border-slate-400 transition-colors"
            >
              Essential Only
            </button>
          </div>
        </div>
        <button
          onClick={() => handleConsent('essential')}
          className="text-silver hover:text-white transition-colors p-1"
          aria-label="Dismiss cookie notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
