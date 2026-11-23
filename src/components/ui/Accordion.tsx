'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '@/data/brands';

interface AccordionProps {
  items: FAQItem[];
  accentColor?: string;
}

export function Accordion({ items, accentColor = '#00AEEF' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3 w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-charcoal/90 border-graphite shadow-glass'
                : 'bg-charcoal/40 border-graphite/60 hover:border-graphite'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-5 text-left text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cerulean transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-base sm:text-lg pr-4 text-slate-100">
                {item.question}
              </span>
              <div
                className="w-8 h-8 rounded-full border border-graphite flex items-center justify-center shrink-0 transition-transform duration-200"
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  borderColor: isOpen ? accentColor : undefined
                }}
              >
                <ChevronDown
                  className="w-4 h-4 transition-colors"
                  style={{ color: isOpen ? accentColor : '#A7ADB8' }}
                />
              </div>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-silver text-sm sm:text-base leading-relaxed border-t border-graphite/40 pt-3">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
