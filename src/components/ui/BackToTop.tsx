'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-charcoal/90 border border-graphite text-silver hover:text-white hover:border-cerulean hover:shadow-glow-blue flex items-center justify-center transition-all duration-300 shadow-xl backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cerulean"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
