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
type RobotMood = 'idle' | 'greeting' | 'listening' | 'thinking' | 'talking';

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


function LumiRobot({ compact = false, mood = 'idle' }: { compact?: boolean; mood?: RobotMood }) {
  const [gaze, setGaze] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const trackPointer = (event: PointerEvent) => {
      const x = (event.clientX / Math.max(window.innerWidth, 1) - 0.5) * 2;
      const y = (event.clientY / Math.max(window.innerHeight, 1) - 0.5) * 2;
      setGaze({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
    };
    window.addEventListener('pointermove', trackPointer, { passive: true });
    return () => window.removeEventListener('pointermove', trackPointer);
  }, []);

  const eyeX = gaze.x * 3;
  const eyeY = gaze.y * 2;
  const scale = compact ? 'scale(.78)' : 'scale(1)';
  const eyeColor = mood === 'thinking' ? '#A78BFA' : mood === 'talking' ? '#55F2D0' : mood === 'listening' ? '#FACC15' : '#67E8F9';

  return (
    <motion.div
      aria-hidden="true"
      className={compact ? "relative h-12 w-12 shrink-0" : "relative h-28 w-28"}
      style={{ perspective: 520 }}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ y: [0, -4, 0], rotateZ: [0, .8, 0, -.8, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transform: scale, transformStyle: "preserve-3d", rotateX: -gaze.y * 4, rotateY: gaze.x * 7 }}
      >
        {/* Antenna */}
        <motion.div className="absolute left-1/2 top-[1%] z-0 h-[13%] w-[3%] -translate-x-1/2 rounded-full bg-gradient-to-r from-slate-400 via-white to-slate-500" animate={{ rotateZ: [-3, 3, -3] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute left-[47%] top-[-1%] z-10 h-[9%] w-[9%] rounded-full border border-cyan-100/70 bg-cyan-300 shadow-[0_0_12px_4px_rgba(45,230,220,.55)]" animate={mood === 'thinking' ? { opacity: [0.5, 1, 0.5], scale: [1, 1.5, 1] } : { opacity: [.65, 1, .65], scale: [1, 1.14, 1] }} transition={{ duration: mood === 'thinking' ? .65 : 1.8, repeat: Infinity }} />

        {/* Legs */}
        <motion.div className="absolute bottom-[4%] left-[34%] z-0 h-[19%] w-[19%] origin-top rounded-b-xl rounded-t-md border border-white/70 bg-gradient-to-br from-white via-slate-200 to-slate-500 shadow-[inset_-5px_-3px_8px_rgba(30,60,75,.22),4px_5px_8px_rgba(0,0,0,.2)]" animate={{ rotateZ: [-2, 2, -2] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}>
          <div className="absolute -bottom-[12%] -left-[17%] h-[38%] w-[125%] rounded-[9px] border border-slate-300 bg-gradient-to-b from-slate-100 to-slate-500 shadow-md" />
        </motion.div>
        <motion.div className="absolute bottom-[4%] right-[29%] z-0 h-[19%] w-[19%] origin-top rounded-b-xl rounded-t-md border border-white/70 bg-gradient-to-br from-white via-slate-200 to-slate-500 shadow-[inset_-5px_-3px_8px_rgba(30,60,75,.22),4px_5px_8px_rgba(0,0,0,.2)]" animate={{ rotateZ: [2, -2, 2] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}>
          <div className="absolute -bottom-[12%] -left-[8%] h-[38%] w-[125%] rounded-[9px] border border-slate-300 bg-gradient-to-b from-slate-100 to-slate-500 shadow-md" />
        </motion.div>

        {/* Arms and shoulder joints */}
        <motion.div className="absolute left-[12%] top-[57%] z-20 h-[34%] w-[18%] origin-top rounded-full border border-slate-300 bg-gradient-to-r from-slate-500 via-white to-slate-300 shadow-[4px_5px_9px_rgba(0,0,0,.25)]" animate={{ rotateZ: [10, 18, 10] }} transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}>
          <span className="absolute -bottom-[8%] left-[5%] h-[27%] w-[90%] rounded-full bg-gradient-to-b from-slate-200 to-slate-500" />
        </motion.div>
        <motion.div className="absolute right-[12%] top-[57%] z-20 h-[34%] w-[18%] origin-top rounded-full border border-slate-300 bg-gradient-to-r from-slate-500 via-white to-slate-300 shadow-[4px_5px_9px_rgba(0,0,0,.25)]" animate={mood === 'greeting' ? { rotateZ: [-10, -48, 12, -42, 8, -10] } : { rotateZ: [-10, -18, -10] }} transition={{ duration: mood === 'greeting' ? 1.15 : 3.6, repeat: mood === 'greeting' ? 1 : Infinity, ease: "easeInOut" }}>
          <span className="absolute -bottom-[8%] left-[5%] h-[27%] w-[90%] rounded-full bg-gradient-to-b from-slate-200 to-slate-500" />
        </motion.div>
        <div className="absolute left-[17%] top-[57%] z-30 h-[18%] w-[18%] rounded-full border-[3px] border-slate-400 bg-gradient-to-br from-white to-slate-500 shadow-[0_0_0_2px_rgba(30,60,75,.25)]" />
        <div className="absolute right-[17%] top-[57%] z-30 h-[18%] w-[18%] rounded-full border-[3px] border-slate-400 bg-gradient-to-br from-white to-slate-500 shadow-[0_0_0_2px_rgba(30,60,75,.25)]" />

        {/* Torso */}
        <motion.div className="absolute bottom-[13%] left-[27%] z-10 h-[39%] w-[48%] overflow-hidden rounded-[25%] border border-white/80 bg-gradient-to-br from-white via-slate-200 to-slate-500 shadow-[inset_-8px_-5px_12px_rgba(35,65,80,.22),0_8px_14px_rgba(0,0,0,.22)]" animate={{ rotateZ: [0, .6, 0, -.6, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}>
          <div className="absolute left-[18%] right-[18%] top-[25%] h-[2px] rounded-full bg-slate-500/60" />
          <div className="absolute left-[30%] right-[30%] top-[43%] h-[5px] rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 shadow-[0_0_9px_2px_rgba(45,220,200,.7)]" />
          <div className="absolute left-[36%] right-[36%] top-[61%] h-[2px] rounded-full bg-slate-400/70" />
          <div className="absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-slate-500/25 to-transparent" />
        </motion.div>

        {/* Head: independent cursor-responsive movement */}
        <motion.div
          className="absolute left-[16%] top-[13%] z-40 h-[53%] w-[68%] rounded-[27%] border-2 border-white/90 bg-gradient-to-br from-white via-slate-200 to-slate-500 shadow-[inset_-8px_-6px_12px_rgba(35,65,80,.24),0_9px_18px_rgba(0,0,0,.28)]"
          animate={{ rotateZ: [0, 1.8, 0, -1.8, 0], y: [0, -1, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ rotateX: -gaze.y * 7, rotateY: gaze.x * 11, transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-[9%] overflow-hidden rounded-[23%] border border-cyan-100/40 bg-gradient-to-br from-[#102432] via-[#06131E] to-[#020910] shadow-[inset_0_0_16px_rgba(0,0,0,.9)]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,rgba(41,214,230,.16),transparent_65%)]" />
            <motion.div className="absolute left-[20%] top-[40%] h-[23%] w-[17%] rounded-full shadow-[0_0_9px_4px_rgba(92,255,155,.65)]" style={{ backgroundColor: eyeColor, boxShadow: `0 0 10px 4px ${eyeColor}88` }} animate={{ scaleY: [1, 1, .08, 1, 1] }} transition={{ duration: 4.8, repeat: Infinity, repeatDelay: 1.2, times: [0, .91, .94, .97, 1] }} style={{ x: eyeX, y: eyeY, transformOrigin: "center" }} />
            <motion.div className="absolute right-[20%] top-[40%] h-[23%] w-[17%] rounded-full shadow-[0_0_9px_4px_rgba(45,220,255,.65)]" style={{ backgroundColor: eyeColor, boxShadow: `0 0 10px 4px ${eyeColor}88` }} animate={{ scaleY: [1, 1, .08, 1, 1] }} transition={{ duration: 4.8, repeat: Infinity, repeatDelay: 1.2, times: [0, .91, .94, .97, 1] }} style={{ x: eyeX, y: eyeY, transformOrigin: "center" }} />
            <motion.div className="absolute bottom-[17%] left-1/2 h-[5%] w-[22%] -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_8px_2px_rgba(45,220,255,.6)]" animate={mood === 'talking' ? { scaleX: [1, .55, 1.25, .65, 1], scaleY: [1, 1.8, 1, 1.6, 1] } : mood === 'thinking' ? { scaleX: [.7, .7, .7], opacity: [.45, .8, .45] } : { scaleX: [1, .72, 1], scaleY: 1 }} transition={{ duration: mood === 'talking' ? .48 : 2.4, repeat: Infinity }} />
          </div>
          <div className="absolute -left-[8%] top-[34%] h-[30%] w-[12%] rounded-full border border-slate-300 bg-gradient-to-r from-slate-500 to-white shadow-md" />
          <div className="absolute -right-[8%] top-[34%] h-[30%] w-[12%] rounded-full border border-slate-300 bg-gradient-to-r from-white to-slate-500 shadow-md" />
          <div className="absolute -inset-[3px] -z-10 rounded-[29%] border border-cyan-300/60 shadow-[0_0_12px_2px_rgba(45,220,220,.35)]" />
        </motion.div>
      </motion.div>
      <div className="pointer-events-none absolute bottom-[1%] left-[20%] h-[8%] w-[60%] rounded-full bg-cyan-300/20 blur-md" />
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
  const [robotMood, setRobotMood] = useState<RobotMood>('idle');
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

  const openChat = () => {
    setIsOpen(true);
    setRobotMood('greeting');
    window.setTimeout(() => setRobotMood((mood) => mood === 'greeting' ? 'idle' : mood), 1500);
  };

  const selectAssistant = (id: AssistantId) => {
    setAssistantId(id);
    setAssistantMenuOpen(false);
    setMessages([]);
    setRobotMood('idle');
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
        onClick={openChat}
        aria-label={t.open}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className="fixed bottom-5 right-5 z-[70] group flex items-center gap-2.5 rounded-full border border-white/15 bg-[#101923]/95 p-2 pr-4 text-white shadow-[0_10px_36px_rgba(0,0,0,.32),0_0_24px_rgba(0,174,239,.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#37DCCB]/50 hover:shadow-[0_14px_42px_rgba(0,174,239,.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00AEEF]"
      >
        <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#45DCCB]/25 bg-gradient-to-br from-[#153746] to-[#10212D] text-[#43C5F5]">
          <LumiRobot compact mood={robotMood} />
          <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-[#101722] bg-emerald-400" />
        </span>
        <span className="text-left">
          <span className="block text-sm font-bold tracking-wide">Chat with LUMI</span>
          <span className="block text-[10px] text-slate-400">We’re here to help</span>
        </span>
        <ArrowRight className="ml-1 h-4 w-4 text-[#43DCCB] transition-transform group-hover:translate-x-0.5" />
      </button>

      {isOpen && (
        <motion.div initial={{ opacity: 0, y: 16, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: .98 }} transition={{ duration: .22, ease: "easeOut" }} className="fixed bottom-[5.25rem] right-3 z-[80] w-[min(380px,calc(100vw-1.5rem))] sm:bottom-24 sm:right-6">
          <section
            role="dialog"
            aria-modal="false"
            aria-label="LUMEA virtual assistant"
            className="flex h-[min(570px,calc(100dvh-112px))] w-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0D151D] text-slate-100 shadow-[0_24px_80px_rgba(0,0,0,.48),0_0_38px_rgba(0,174,239,.10)] ring-1 ring-black/20"
          >
            <header className="relative border-b border-white/[.08] bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,.12),transparent_48%),#111B25] px-4 pb-3 pt-4">
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
                  <button type="button" onClick={() => { setIsOpen(false); setRobotMood('idle'); }} aria-label={t.close} className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between gap-2">
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
                <div className="space-y-4">
                  <div className="flex justify-center pt-1">
                    <div className="relative flex h-[88px] w-[88px] items-center justify-center rounded-[26px] border border-[#42DCCB]/20 bg-[radial-gradient(circle,rgba(45,212,191,.14),rgba(0,174,239,.025)_72%)] shadow-[0_0_34px_rgba(45,212,191,.08)]">
                      <div className="absolute inset-2 rounded-[24px] border border-white/5" />
                      {assistantId === 'lumi' ? <LumiRobot mood={robotMood} /> : <AssistantIcon className="h-11 w-11" style={{ color: currentAssistant.accent }} />}
                      <span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-4 border-[#0B1018] bg-emerald-400" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-white">{assistantId === 'lumi' ? t.welcome : currentAssistant.label}</p>
                    <p className="mx-auto mt-2 max-w-[300px] text-sm leading-6 text-slate-400">{assistantId === 'lumi' ? t.intro : currentAssistant.description + '. ' + t.assistantIntro + ' ' + currentAssistant.name + '.'}</p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="px-1 text-[10px] font-bold uppercase tracking-[.16em] text-slate-500">{t.explore}</p>
                    {quickReplies.map((reply) => (
                      <button key={reply.id} type="button" onClick={() => selectAssistant(reply.id)} className="group flex w-full items-center justify-between rounded-xl border border-white/[.07] bg-white/[.025] px-3.5 py-2.5 text-left text-[13px] text-slate-200 transition hover:border-[#45DCCB]/30 hover:bg-[#45DCCB]/[.05]">
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

            <footer className="border-t border-white/[.08] bg-[#0D151D] px-4 pb-3 pt-3">
              <div className="mb-2 flex items-start gap-2 rounded-lg border border-white/[.06] bg-white/[.025] px-2.5 py-1.5">
                <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#45DCCB]" />
                <p className="text-[10px] leading-4 text-slate-400">{t.previewNote}</p>
              </div>
              {assistantId !== 'lumi' && (
                <button type="button" onClick={() => selectAssistant('lumi')} className="mb-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#43C5F5] hover:text-white">
                  <ArrowLeft className="h-3 w-3" /> {t.switchBack}
                </button>
              )}
              <form onSubmit={(event) => sendMessage(event)} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#17232D] p-1.5 pl-3 transition focus-within:border-[#45DCCB]/50 focus-within:shadow-[0_0_0_3px_rgba(45,212,191,.07)]">
                <input
                  value={input}
                  onChange={(event) => { setInput(event.target.value); setRobotMood(event.target.value ? 'listening' : 'idle'); }}
                  onFocus={() => setRobotMood('listening')}
                  onBlur={() => { if (!input.trim()) setRobotMood('idle'); }}
                  placeholder={t.placeholder}
                  aria-label={t.placeholder}
                  className="min-w-0 flex-1 bg-transparent py-2 text-sm text-white outline-none placeholder:text-slate-500"
                />
                <button type="submit" aria-label="Send message" disabled={!input.trim()} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#48E2CF] to-[#26B6D7] text-[#061018] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40">
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-2 text-center text-[9px] tracking-wide text-slate-600">LUMEA GROUP · VIRTUAL ASSISTANT</p>
            </footer>
          </section>
        </motion.div>
      )}
    </>
  );
}
