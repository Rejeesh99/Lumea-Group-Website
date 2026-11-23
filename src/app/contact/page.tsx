import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, MessageSquare, ShieldAlert, Clock } from 'lucide-react';
import { CONTACT_INFO } from '@/data/brands';
import { ContactForm } from '@/components/ui/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us — Multi-Brand Enquiries & Scoping',
  description: 'Connect with LUMEA Group in Kochi, Kerala. Direct enquiry routing for LumeaCyber, LumeaNursing, LumeaSkill, and LumeaGo.',
};

export default function ContactPage() {
  return (
    <div className="bg-jet text-silver py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-mono text-cerulean font-semibold">
          Communications & Scoping
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
          Start with a Conversation
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Tell us what your organisation or learning trajectory requires. Your enquiry is directly routed to our specialised brand coordinators in Kochi, Kerala.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Directory & Information (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-charcoal border border-graphite space-y-6 shadow-glass">
            <h2 className="text-xl font-bold text-white font-display">Direct Directory</h2>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cerulean shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold">Registered Headquarters</strong>
                  <span className="text-silver">{CONTACT_INFO.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cerulean shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold">Central Inquiries</strong>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-cerulean font-mono hover:underline">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cerulean shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold">Voice Desk</strong>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-white font-mono hover:text-cerulean">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-semibold">WhatsApp Desk</strong>
                  <a
                    href="https://wa.me/919037998981"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-mono hover:underline"
                  >
                    {CONTACT_INFO.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-graphite/60 text-xs text-silver space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <Clock className="w-4 h-4 text-cerulean" />
                <span>Operating Hours</span>
              </div>
              <p>Monday – Friday: 09:30 – 18:00 IST</p>
              <p>Saturday: 10:00 – 14:00 IST (By Appointment)</p>
            </div>
          </div>

          {/* Privacy & Defensive protocol */}
          <div className="p-6 rounded-2xl bg-charcoal/50 border border-graphite text-xs text-silver space-y-2">
            <h3 className="font-semibold text-white">Confidentiality Guarantee</h3>
            <p className="leading-relaxed">
              We uphold strict enterprise confidentiality standards. Initial scoping discussions are kept strictly confidential, and no technical assessments proceed without executed bilateral agreements.
            </p>
          </div>
        </div>

        {/* Right Column: Multi-brand Interactive Form (8 cols) */}
        <div className="lg:col-span-8">
          <Suspense fallback={<div className="p-12 text-center text-silver">Loading contact interface...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
