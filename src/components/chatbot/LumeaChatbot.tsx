'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  ChevronDown,
  Globe2,
  GraduationCap,
  HeartPulse,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

type AssistantId = 'lumi' | 'cyber' | 'nurse' | 'skill' | 'go';
type Language = 'en' | 'ml' | 'hi';
type ChatMessage = { id: number; role: 'assistant' | 'user'; text: string };

const assistants: {
  id: AssistantId;
  name: string;
  label: string;
  description: string;
  accent: string;
  softAccent: string;
  icon: typeof Bot;
}[] = [
  { id: 'lumi', name: 'LUMI', label: 'LUMEA Group', description: 'Your guide to the LUMEA Group', accent: '#00AEEF', softAccent: 'rgba(0,174,239,.14)', icon: Sparkles },
  { id: 'cyber', name: 'CYBER', label: 'LUMEA Cyber', description: 'Cybersecurity information', accent: '#00AEEF', softAccent: 'rgba(0,174,239,.14)', icon: ShieldCheck },
  { id: 'nurse', name: 'NURSE', label: 'LUMEA Nursing', description: 'Nursing education information', accent: '#2DD4BF', softAccent: 'rgba(45,212,191,.14)', icon: HeartPulse },
  { id: 'skill', name: 'SKILL', label: 'LUMEASkill', description: 'Languages and professional skills', accent: '#FF2E88', softAccent: 'rgba(255,46,136,.14)', icon: GraduationCap },
  { id: 'go', name: 'GO', label: 'LUMEA Go', description: 'Global education guidance', accent: '#F59E0B', softAccent: 'rgba(245,158,11,.14)', icon: Globe2 },
];

const copy = {
  en: {
    online: 'Here to help',
    welcome: 'Hello! Welcome to LUMEA Group.',
    intro: "I’m LUMI, your virtual guide. What would you like to explore today?",
    explore: 'Explore our brands',
    group: 'About LUMEA Group',
    cyber: 'Cybersecurity',
    nurse: 'Nursing education',
    skill: 'Courses & skills',
    go: 'Study abroad',
    contact: 'Contact the team',
    placeholder: 'Type your message…',
    choose: 'Choose an assistant',
    language: 'Language',
    preview: 'Interface preview',
    previewNote: 'Sample replies only — AI answers are not connected yet.',
    fallback: 'Thanks for your message. This is the interface preview; the live knowledge base and AI responses will be connected in a later stage.',
    switchBack: 'Back to LUMI',
    assistantIntro: 'You are now exploring',
    suggestions: 'You can try one of these topics:',
    close: 'Close chatbot',
    open: 'Open LUMEA chatbot',
  },
  ml: {
    online: 'സഹായിക്കാൻ തയ്യാറാണ്',
    welcome: 'നമസ്കാരം! LUMEA Group-ലേക്ക് സ്വാഗതം.',
    intro: 'ഞാൻ LUMI, നിങ്ങളുടെ വെർച്വൽ സഹായി. ഇന്ന് എന്താണ് അറിയാൻ ആഗ്രഹിക്കുന്നത്?',
    explore: 'ഞങ്ങളുടെ ബ്രാൻഡുകൾ കാണുക',
    group: 'LUMEA Group-നെ കുറിച്ച്',
    cyber: 'സൈബർ സുരക്ഷ',
    nurse: 'നഴ്സിംഗ് വിദ്യാഭ്യാസം',
    skill: 'കോഴ്സുകളും നൈപുണ്യങ്ങളും',
    go: 'വിദേശ പഠനം',
    contact: 'ടീമുമായി ബന്ധപ്പെടുക',
    placeholder: 'നിങ്ങളുടെ സന്ദേശം എഴുതുക…',
    choose: 'ഒരു സഹായിയെ തിരഞ്ഞെടുക്കുക',
    language: 'ഭാഷ',
    preview: 'ഇന്റർഫേസ് പ്രിവ്യൂ',
    previewNote: 'ഇത് മാതൃകാ മറുപടികളാണ് — AI മറുപടികൾ ഇതുവരെ ബന്ധിപ്പിച്ചിട്ടില്ല.',
    fallback: 'നിങ്ങളുടെ സന്ദേശത്തിന് നന്ദി. ഇത് ഇന്റർഫേസ് പ്രിവ്യൂ ആണ്. യഥാർത്ഥ അറിവുശേഖരവും AI മറുപടികളും അടുത്ത ഘട്ടത്തിൽ ബന്ധിപ്പിക്കും.',
    switchBack: 'LUMI-യിലേക്ക് മടങ്ങുക',
    assistantIntro: 'നിങ്ങൾ ഇപ്പോൾ കാണുന്നത്',
    suggestions: 'ഇവയിൽ ഏതെങ്കിലും വിഷയം തിരഞ്ഞെടുക്കാം:',
    close: 'ചാറ്റ്ബോട്ട് അടയ്ക്കുക',
    open: 'LUMEA ചാറ്റ്ബോട്ട് തുറക്കുക',
  },
  hi: {
    online: 'मदद के लिए उपलब्ध',
    welcome: 'नमस्ते! LUMEA Group में आपका स्वागत है।',
    intro: 'मैं LUMI हूँ, आपका वर्चुअल गाइड। आज आप क्या जानना चाहेंगे?',
    explore: 'हमारे ब्रांड देखें',
    group: 'LUMEA Group के बारे में',
    cyber: 'साइबर सुरक्षा',
    nurse: 'नर्सिंग शिक्षा',
    skill: 'कोर्स और कौशल',
    go: 'विदेश में पढ़ाई',
    contact: 'टीम से संपर्क करें',
    placeholder: 'अपना संदेश लिखें…',
    choose: 'एक सहायक चुनें',
    language: 'भाषा',
    preview: 'इंटरफ़ेस प्रीव्यू',
    previewNote: 'ये केवल नमूना जवाब हैं — AI जवाब अभी कनेक्ट नहीं हैं।',
    fallback: 'आपके संदेश के लिए धन्यवाद। यह इंटरफ़ेस प्रीव्यू है। वास्तविक नॉलेज बेस और AI जवाब अगले चरण में जोड़े जाएंगे।',
    switchBack: 'LUMI पर वापस जाएँ',
    assistantIntro: 'आप अभी देख रहे हैं',
    suggestions: 'आप इनमें से कोई विषय चुन सकते हैं:',
    close: 'चैटबॉट बंद करें',
    open: 'LUMEA चैटबॉट खोलें',
  },
};


function LumiRobot({ compact = false }: { compact?: boolean }) {
  return (
    <motion.div
      aria-hidden="true"
      className={compact ? "relative h-12 w-12 shrink-0" : "relative h-32 w-32"}
      style={{ perspective: 900 }}
      animate={{ y: [0, -7, 0], rotateZ: [0, 1.5, 0, -1.5, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.06, rotateY: 12 }}
    >
      <motion.div className="absolute left-1/2 top-[5%] h-[13%] w-[5%] -translate-x-1/2 rounded-full bg-[#B8F3FF] shadow-[0_0_14px_#00AEEF]" animate={{ opacity: [0.55, 1, 0.55], scaleY: [1, 1.35, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />
      <div className="absolute left-1/2 top-[15%] h-[9%] w-[32%] -translate-x-1/2 rounded-t-full border-x-2 border-t-2 border-[#B9D9E7] bg-gradient-to-b from-[#EAFBFF] to-[#9CBBCB]" />
      <motion.div className="absolute left-1/2 top-[20%] h-[43%] w-[76%] -translate-x-1/2 rounded-[34%] border border-white/80 bg-gradient-to-br from-white via-[#D9EAF2] to-[#7896AA] shadow-[inset_-7px_-8px_13px_rgba(30,64,84,.25),inset_5px_5px_10px_white,0_9px_22px_rgba(0,174,239,.25)]" style={{ transformStyle: "preserve-3d" }} animate={{ rotateY: [0, 5, 0, -5, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
        <div className="absolute inset-[12%] overflow-hidden rounded-[30%] border border-[#8AA8B9] bg-gradient-to-br from-[#071522] via-[#102B3C] to-[#020810] shadow-[inset_0_0_18px_rgba(0,174,239,.28)]">
          <motion.span className="absolute left-[23%] top-[38%] h-[18%] w-[15%] rounded-full bg-[#8AF1FF] shadow-[0_0_10px_4px_rgba(0,174,239,.75)]" animate={{ scaleY: [1, .18, 1] }} transition={{ duration: 4.8, repeat: Infinity, times: [0, .08, .16], repeatDelay: 1.5 }} />
          <motion.span className="absolute right-[23%] top-[38%] h-[18%] w-[15%] rounded-full bg-[#8AF1FF] shadow-[0_0_10px_4px_rgba(0,174,239,.75)]" animate={{ scaleY: [1, .18, 1] }} transition={{ duration: 4.8, repeat: Infinity, times: [0, .08, .16], repeatDelay: 1.5 }} />
          <div className="absolute bottom-[17%] left-1/2 h-[2px] w-[18%] -translate-x-1/2 rounded-full bg-[#4DDDF8]/80" />
        </div>
        <span className="absolute -left-[5%] top-[42%] h-[22%] w-[11%] rounded-full border border-[#C9E8F2] bg-gradient-to-r from-[#7898AB] to-[#F4FCFF]" />
        <span className="absolute -right-[5%] top-[42%] h-[22%] w-[11%] rounded-full border border-[#C9E8F2] bg-gradient-to-l from-[#7898AB] to-[#F4FCFF]" />
      </motion.div>
      <div className="absolute left-1/2 top-[64%] h-[26%] w-[58%] -translate-x-1/2 rounded-[30%] border border-white/80 bg-gradient-to-br from-[#F8FDFF] via-[#C7DDE8] to-[#718DA1] shadow-[inset_-5px_-5px_9px_rgba(30,64,84,.2),0_7px_14px_rgba(0,174,239,.18)]">
        <div className="absolute left-1/2 top-[35%] -translate-x-1/2 text-[5px] font-black tracking-[.22em] text-[#168CB5]">LUMEA</div>
        <div className="absolute bottom-[20%] left-1/2 h-[3px] w-[25%] -translate-x-1/2 rounded-full bg-[#00AEEF]/70" />
      </div>
      <motion.span className="absolute left-[3%] top-[69%] h-[21%] w-[15%] rounded-full border border-white/70 bg-gradient-to-br from-[#F8FDFF] to-[#8AA7B8]" animate={{ rotate: [-8, 8, -8] }} transition={{ duration: 2.5, repeat: Infinity }} />
      <motion.span className="absolute right-[3%] top-[69%] h-[21%] w-[15%] rounded-full border border-white/70 bg-gradient-to-br from-[#F8FDFF] to-[#8AA7B8]" animate={{ rotate: [8, -8, 8] }} transition={{ duration: 2.5, repeat: Infinity }} />
      {!compact && <div className="absolute -bottom-[2%] left-1/2 h-3 w-[78%] -translate-x-1/2 rounded-[50%] bg-[#00AEEF]/25 blur-md" />}
    </motion.div>
  );
}

export function LumeaChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [assistantId, setAssistantId] = useState<AssistantId>('lumi');
  const [language, setLanguage] = useState<Language>('en');
  const [languageOpen, setLanguageOpen] = useState(false);
  const [assistantMenuOpen, setAssistantMenuOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const t = copy[language];
  const currentAssistant = assistants.find((assistant) => assistant.id === assistantId) || assistants[0];
  const AssistantIcon = currentAssistant.icon;

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const selectAssistant = (id: AssistantId) => {
    setAssistantId(id);
    setAssistantMenuOpen(false);
    setMessages([]);
  };

  const sendMessage = (event?: FormEvent, suggestedText?: string) => {
    event?.preventDefault();
    const text = (suggestedText ?? input).trim();
    if (!text) return;
    setMessages((current) => [
      ...current,
      { id: Date.now(), role: 'user', text },
      { id: Date.now() + 1, role: 'assistant', text: t.fallback },
    ]);
    setInput('');
  };

  const quickReplies = [
    { label: t.group, id: 'lumi' as AssistantId },
    { label: t.cyber, id: 'cyber' as AssistantId },
    { label: t.nurse, id: 'nurse' as AssistantId },
    { label: t.skill, id: 'skill' as AssistantId },
    { label: t.go, id: 'go' as AssistantId },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={t.open}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className="fixed bottom-5 right-5 z-[70] group flex items-center gap-3 rounded-full border border-[#00AEEF]/40 bg-[#101722] p-2.5 pr-4 text-white shadow-[0_12px_40px_rgba(0,174,239,.24)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF] hover:shadow-[0_16px_48px_rgba(0,174,239,.32)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00AEEF]"
      >
        <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#00AEEF]/15 text-[#43C5F5]">
          <LumiRobot compact />
          <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-[#101722] bg-emerald-400" />
        </span>
        <span className="text-left">
          <span className="block text-sm font-bold tracking-wide">Ask LUMI</span>
          <span className="block text-[10px] text-slate-400">LUMEA virtual assistant</span>
        </span>
        <MessageCircle className="ml-1 h-4 w-4 text-[#00AEEF] transition-transform group-hover:scale-110" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-4 z-[80] w-[min(410px,calc(100vw-2rem))] sm:bottom-24 sm:right-6">
          <section
            role="dialog"
            aria-modal="false"
            aria-label="LUMEA virtual assistant"
            className="flex h-[min(640px,calc(100dvh-140px))] w-full flex-col overflow-hidden rounded-[26px] border border-[#263342] bg-[#0B1018] text-slate-100 shadow-[0_20px_70px_rgba(0,0,0,.55)]"
          >
            <header className="relative border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(0,174,239,.18),transparent_48%),#111925] px-4 pb-4 pt-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border"
                    style={{ color: currentAssistant.accent, backgroundColor: currentAssistant.softAccent, borderColor: currentAssistant.accent + '55' }}
                  >
                    {assistantId === 'lumi' ? <LumiRobot compact /> : <AssistantIcon className="h-6 w-6" />}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h2 className="truncate text-base font-extrabold tracking-wide text-white">{currentAssistant.name}</h2>
                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-emerald-300">{t.online}</span>
                    </div>
                    <p className="mt-0.5 truncate text-xs text-slate-400">{currentAssistant.label}</p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => { setLanguageOpen(!languageOpen); setAssistantMenuOpen(false); }}
                      className="flex h-9 items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-2.5 text-xs font-semibold text-slate-200 hover:bg-white/10"
                      aria-label={t.language}
                      aria-expanded={languageOpen}
                    >
                      <Globe2 className="h-3.5 w-3.5 text-[#43C5F5]" />
                      {language.toUpperCase()}
                      <ChevronDown className="h-3 w-3" />
                    </button>
                    {languageOpen && (
                      <div className="absolute right-0 top-11 z-20 w-36 overflow-hidden rounded-xl border border-white/10 bg-[#17212E] p-1 shadow-xl">
                        {([{ id: 'en', label: 'English' }, { id: 'ml', label: 'മലയാളം' }, { id: 'hi', label: 'हिन्दी' }] as const).map((item) => (
                          <button key={item.id} type="button" onClick={() => { setLanguage(item.id); setLanguageOpen(false); }} className={'block w-full rounded-lg px-3 py-2 text-left text-xs hover:bg-white/10 ' + (language === item.id ? 'bg-white/10 text-white' : 'text-slate-300')}>
                            {item.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <button type="button" onClick={() => setIsOpen(false)} aria-label={t.close} className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-2">
                <button type="button" onClick={() => { setAssistantMenuOpen(!assistantMenuOpen); setLanguageOpen(false); }} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-[11px] font-semibold text-slate-200 hover:border-white/20 hover:bg-white/5">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: currentAssistant.accent }} />
                  {t.choose}
                  <ChevronDown className="h-3 w-3" />
                </button>
                <span className="text-[10px] text-slate-500">{t.preview}</span>
              </div>

              {assistantMenuOpen && (
                <div className="absolute left-4 right-4 top-[122px] z-20 grid grid-cols-2 gap-1.5 rounded-2xl border border-white/10 bg-[#17212E] p-2 shadow-2xl">
                  {assistants.map((assistant) => {
                    const Icon = assistant.icon;
                    return (
                      <button key={assistant.id} type="button" onClick={() => selectAssistant(assistant.id)} className="flex items-center gap-2 rounded-xl p-2.5 text-left hover:bg-white/10">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ color: assistant.accent, backgroundColor: assistant.softAccent }}>
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs font-bold text-white">{assistant.name}</span>
                          <span className="block truncate text-[10px] text-slate-400">{assistant.label}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </header>

            <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5">
              {messages.length === 0 ? (
                <div className="space-y-5">
                  <div className="flex justify-center pt-2">
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-[30px] border border-[#00AEEF]/25 bg-[radial-gradient(circle,rgba(0,174,239,.2),rgba(0,174,239,.03)_70%)] shadow-[0_0_50px_rgba(0,174,239,.1)]">
                      <div className="absolute inset-2 rounded-[24px] border border-white/5" />
                      {assistantId === 'lumi' ? <LumiRobot /> : <AssistantIcon className="h-11 w-11" style={{ color: currentAssistant.accent }} />}
                      <span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-4 border-[#0B1018] bg-emerald-400" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-white">{assistantId === 'lumi' ? t.welcome : currentAssistant.label}</p>
                    <p className="mx-auto mt-2 max-w-[300px] text-sm leading-6 text-slate-400">{assistantId === 'lumi' ? t.intro : currentAssistant.description + '. ' + t.assistantIntro + ' ' + currentAssistant.name + '.'}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="px-1 text-[10px] font-bold uppercase tracking-[.16em] text-slate-500">{t.explore}</p>
                    {quickReplies.map((reply) => (
                      <button key={reply.id} type="button" onClick={() => selectAssistant(reply.id)} className="group flex w-full items-center justify-between rounded-xl border border-white/[.08] bg-white/[.03] px-3.5 py-3 text-left text-sm text-slate-200 transition hover:border-[#00AEEF]/40 hover:bg-[#00AEEF]/[.07]">
                        <span>{reply.label}</span>
                        <ArrowRight className="h-4 w-4 text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-[#43C5F5]" />
                      </button>
                    ))}
                    <a href="/contact" className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-white/10 px-3.5 py-3 text-xs font-semibold text-slate-400 transition hover:border-white/20 hover:text-white">
                      {t.contact} <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={'flex ' + (message.role === 'user' ? 'justify-end' : 'justify-start')}>
                      <div className={'max-w-[88%] rounded-2xl px-3.5 py-3 text-sm leading-6 ' + (message.role === 'user' ? 'rounded-br-md bg-[#087EAD] text-white' : 'rounded-bl-md border border-white/10 bg-[#151F2C] text-slate-300')}>
                        {message.text}
                      </div>
                    </div>
                  ))}
                  <div ref={messageEndRef} />
                </div>
              )}
            </div>

            <footer className="border-t border-white/10 bg-[#0E151F] px-4 pb-4 pt-3">
              <div className="mb-2 flex items-start gap-2 rounded-lg border border-amber-300/10 bg-amber-300/[.05] px-2.5 py-2">
                <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-300" />
                <p className="text-[10px] leading-4 text-slate-400">{t.previewNote}</p>
              </div>
              {assistantId !== 'lumi' && (
                <button type="button" onClick={() => selectAssistant('lumi')} className="mb-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#43C5F5] hover:text-white">
                  <ArrowLeft className="h-3 w-3" /> {t.switchBack}
                </button>
              )}
              <form onSubmit={(event) => sendMessage(event)} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#17212E] p-1.5 pl-3 focus-within:border-[#00AEEF]/50">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={t.placeholder}
                  aria-label={t.placeholder}
                  className="min-w-0 flex-1 bg-transparent py-2 text-sm text-white outline-none placeholder:text-slate-500"
                />
                <button type="submit" aria-label="Send message" disabled={!input.trim()} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#00AEEF] text-[#061018] transition hover:bg-[#43C5F5] disabled:cursor-not-allowed disabled:opacity-40">
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-2 text-center text-[9px] tracking-wide text-slate-600">LUMEA GROUP · VIRTUAL ASSISTANT</p>
            </footer>
          </section>
        </div>
      )}
    </>
  );
}
