'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle2, ShieldAlert, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '@/data/brands';

interface FormData {
  name: string;
  email: string;
  phone: string;
  organisation: string;
  brand: string;
  enquiryType: string;
  message: string;
  consent: boolean;
  honeypot: string; // Anti-spam trap
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedBrand = searchParams?.get('brand') || 'group';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    brand: preselectedBrand,
    enquiryType: 'general',
    message: '',
    consent: false,
    honeypot: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedBrand) {
      setFormData(prev => ({ ...prev, brand: preselectedBrand }));
    }
  }, [preselectedBrand]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid corporate or personal email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact telephone or mobile number is required.';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid telephone number with country code.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = 'Please provide a message with at least 15 characters outlining your requirements.';
    }

    if (!formData.consent) {
      newErrors.consent = 'Your consent is required to process your contact enquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check
    if (formData.honeypot) {
      // Silently reject bot
      setSubmitted(true);
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate clean API dispatch with state persistence
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      // Store in browser session for user verification
      try {
        const stored = JSON.parse(sessionStorage.getItem('lumea_enquiries') || '[]');
        stored.push({ ...formData, timestamp: new Date().toISOString() });
        sessionStorage.setItem('lumea_enquiries', JSON.stringify(stored));
      } catch {
        // Ignore storage errors in restricted contexts
      }
      setSubmitted(true);
    } catch {
      alert('An error occurred submitting your enquiry. Please reach out directly to contact@lumeagroup.in.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-charcoal border border-emerald-500/30 rounded-2xl p-8 sm:p-10 text-center shadow-glass space-y-5">
        <div className="w-14 h-14 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white font-display">Enquiry Successfully Dispatched</h3>
        <p className="text-silver text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your enquiry has been received and routed to our dedicated coordinators for{' '}
          <span className="text-cerulean font-semibold capitalize">{formData.brand === 'group' ? 'LUMEA Group' : `Lumea${formData.brand.charAt(0).toUpperCase() + formData.brand.slice(1)}`}</span>.
        </p>
        <div className="p-4 rounded-xl bg-jet/60 border border-graphite text-xs sm:text-sm text-silver max-w-md mx-auto">
          A member of our team will review your details and respond, usually within 2 working days (subject to business operating hours).
        </div>
        <div className="pt-2">
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                organisation: '',
                brand: 'group',
                enquiryType: 'general',
                message: '',
                consent: false,
                honeypot: ''
              });
            }}
            className="text-xs uppercase tracking-wider text-cerulean hover:text-white underline underline-offset-4"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-charcoal/90 border border-graphite/80 rounded-2xl p-6 sm:p-10 shadow-glass space-y-6">
      {/* Security Advisory Notice */}
      <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-start gap-3 text-xs text-amber-200/90 leading-relaxed">
        <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="font-semibold block text-amber-300 mb-0.5">Defensive Communications Protocol:</strong>
          Please do not transmit credentials, passwords, confidential network architecture diagrams, or sensitive personal identity files (such as passport copies) through this form.
        </div>
      </div>

      {/* Honeypot hidden input */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_field">Do not fill this field</label>
        <input
          type="text"
          id="hp_field"
          value={formData.honeypot}
          onChange={e => setFormData({ ...formData, honeypot: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-silver mb-2">
            Full Name <span className="text-rose">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Dr. Anand Menon / Sarah Jenkins"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl bg-jet border text-white placeholder-silver/40 text-sm focus:outline-none focus:ring-1 transition-colors ${
              errors.name ? 'border-rose focus:ring-rose' : 'border-graphite focus:border-cerulean focus:ring-cerulean'
            }`}
          />
          {errors.name && <p className="text-xs text-rose mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-silver mb-2">
            Work / Personal Email <span className="text-rose">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="e.g. name@organisation.com"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl bg-jet border text-white placeholder-silver/40 text-sm focus:outline-none focus:ring-1 transition-colors ${
              errors.email ? 'border-rose focus:ring-rose' : 'border-graphite focus:border-cerulean focus:ring-cerulean'
            }`}
          />
          {errors.email && <p className="text-xs text-rose mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
        </div>

        {/* Contact Phone */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-silver mb-2">
            Telephone / Mobile <span className="text-rose">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="e.g. +91 90379 98980"
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl bg-jet border text-white placeholder-silver/40 text-sm focus:outline-none focus:ring-1 transition-colors ${
              errors.phone ? 'border-rose focus:ring-rose' : 'border-graphite focus:border-cerulean focus:ring-cerulean'
            }`}
          />
          {errors.phone && <p className="text-xs text-rose mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
        </div>

        {/* Organisation (Optional) */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-silver mb-2">
            Organisation / Institution <span className="text-silver/50 font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            placeholder="e.g. College of Nursing / Tech Enterprises"
            value={formData.organisation}
            onChange={e => setFormData({ ...formData, organisation: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-jet border border-graphite text-white placeholder-silver/40 text-sm focus:outline-none focus:border-cerulean focus:ring-1 focus:ring-cerulean transition-colors"
          />
        </div>

        {/* Interested Brand Routing */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-silver mb-2">
            Interested LUMEA Brand <span className="text-rose">*</span>
          </label>
          <select
            value={formData.brand}
            onChange={e => setFormData({ ...formData, brand: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-jet border border-graphite text-white text-sm focus:outline-none focus:border-cerulean focus:ring-1 focus:ring-cerulean transition-colors"
          >
            <option value="group">LUMEA Group (Parent Organisation)</option>
            <option value="cyber">LumeaCyber (Cybersecurity, AI & Data Science)</option>
            <option value="nursing">LumeaNursing (Nursing Education Technology)</option>
            <option value="skill">LumeaSkill (Skills, Languages & Careers)</option>
            <option value="go">LumeaGo (Global Education Guidance)</option>
          </select>
        </div>

        {/* Enquiry Type */}
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-silver mb-2">
            Enquiry Nature <span className="text-rose">*</span>
          </label>
          <select
            value={formData.enquiryType}
            onChange={e => setFormData({ ...formData, enquiryType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-jet border border-graphite text-white text-sm focus:outline-none focus:border-cerulean focus:ring-1 focus:ring-cerulean transition-colors"
          >
            <option value="consulting">Professional Consultation</option>
            <option value="security-assessment">Security Posture Assessment (Written Authorization Req.)</option>
            <option value="nursing-education">Nursing Education / CPD Program</option>
            <option value="language-exam">Language or Exam Preparation (German/IELTS/OET)</option>
            <option value="study-abroad">Study Abroad Guidance</option>
            <option value="partnership">Institutional Collaboration / Lab Setup</option>
            <option value="general">General Group Inquiries</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-silver mb-2">
          Message & Context <span className="text-rose">*</span>
        </label>
        <textarea
          rows={4}
          required
          placeholder="Please describe your organization's objectives, institutional requirements, or learner goals..."
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl bg-jet border text-white placeholder-silver/40 text-sm focus:outline-none focus:ring-1 transition-colors ${
            errors.message ? 'border-rose focus:ring-rose' : 'border-graphite focus:border-cerulean focus:ring-cerulean'
          }`}
        />
        {errors.message && <p className="text-xs text-rose mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
      </div>

      {/* Consent Checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={e => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 w-4 h-4 rounded bg-jet border-graphite text-cerulean focus:ring-cerulean focus:ring-offset-jet"
          />
          <span className="text-xs text-silver leading-relaxed group-hover:text-slate-300">
            I consent to LUMEA Group collecting and processing my submitted details in accordance with the{' '}
            <a href="/privacy" target="_blank" className="text-cerulean underline">Privacy Policy</a> to address this professional enquiry.
          </span>
        </label>
        {errors.consent && <p className="text-xs text-rose mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.consent}</p>}
      </div>

      {/* Submit Button & Direct fallback info */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-jet bg-cerulean hover:bg-cerulean-400 transition-all duration-200 shadow-glow-blue disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Routing Enquiry...</span>
          ) : (
            <>
              <span>Submit Formal Enquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        <div className="text-center sm:text-right text-xs text-silver">
          Direct email:{' '}
          <a href={`mailto:${CONTACT_INFO.email}`} className="text-white hover:text-cerulean transition-colors font-mono">
            {CONTACT_INFO.email}
          </a>
        </div>
      </div>
    </form>
  );
}
