export interface ResearchArea {
  id: string;
  category: string;
  title: string;
  abstract: string;
  date: string;
  readTime: string;
  focusVertical: string;
  status: 'PUBLISHED_BRIEF' | 'RESEARCH_THEME' | 'SECURITY_ADVISORY';
  keyInsights: string[];
}

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'defensive-security-posture',
    category: 'Cybersecurity & Defence',
    title: 'Defensive Architecture Principles for Emerging Digital Enterprises',
    abstract: 'An architectural exploration of the zero-trust paradigm, boundary isolation, and why human-vector awareness forms the bedrock of sustainable organizational resilience.',
    date: 'Quarterly Research Brief',
    readTime: '6 min read',
    focusVertical: 'LumeaCyber',
    status: 'PUBLISHED_BRIEF',
    keyInsights: [
      'Vulnerability assessments must be continuous rather than ceremonial annual checkpoints.',
      'Human-centric social engineering simulations yield higher risk reduction than perimeter firewalls alone.',
      'Defensive posture verification requires strict authorization, clear telemetry, and reproducible findings.'
    ]
  },
  {
    id: 'applied-ai-data-governance',
    category: 'Artificial Intelligence & Data',
    title: 'Pragmatic AI Implementation: Balancing Predictive Power with Data Privacy',
    abstract: 'Analyzing the operational considerations of deploying localized large language models, structured vector indexes, and sanitisation pipelines in regulated enterprise environments.',
    date: 'Technical Whitepaper',
    readTime: '8 min read',
    focusVertical: 'LumeaCyber & LUMEA Tech',
    status: 'PUBLISHED_BRIEF',
    keyInsights: [
      'Data sanitization pipelines must strip identifying metadata before model inference ingestion.',
      'Local inference instances protect enterprise intellectual property against third-party training leakage.',
      'AI safety relies heavily on traditional application security practices, including input sanitization and privilege boundaries.'
    ]
  },
  {
    id: 'healthcare-simulation-pedagogy',
    category: 'Healthcare & Pedagogy',
    title: 'Bridging Clinical Judgment: The Role of Digital Simulation in Modern Nursing Education',
    abstract: 'How digital case-study scaffolding and high-fidelity simulation protocols enhance clinical reasoning and medication calculation safety among early-career nurses.',
    date: 'Pedagogical Analysis',
    readTime: '7 min read',
    focusVertical: 'LumeaNursing',
    status: 'RESEARCH_THEME',
    keyInsights: [
      'Scenario-based simulation bridges the psychological gap between textbook pharmacology and emergency ward execution.',
      'Digital feedback loops allow nursing learners to rehearse critical escalation decisions without clinical risk.',
      'Technology in nursing is supplementary: it reinforces human bedside empathy and professional ethics.'
    ]
  },
  {
    id: 'linguistic-mobility-cefr',
    category: 'Linguistics & Global Mobility',
    title: 'Language Proficiency as an Economic Catalyst: The European CEFR Standard',
    abstract: 'Evaluating how structured German and English CEFR training facilitates seamless workforce integration, cultural assimilation, and sustainable international career trajectories.',
    date: 'Workforce Development Study',
    readTime: '5 min read',
    focusVertical: 'LumeaSkill',
    status: 'RESEARCH_THEME',
    keyInsights: [
      'Language learning for technical and healthcare disciplines demands specialized lexicon integration early in training.',
      'Continuous oral diagnostic assessments prevent exam plateauing in candidates preparing for OET and IELTS.',
      'Cultural context and conversational fluency are as vital to career longevity as grammatical accuracy.'
    ]
  },
  {
    id: 'ethical-international-guidance',
    category: 'Global Education Guidance',
    title: 'The Case for Transparent Student Counselling in International Higher Education',
    abstract: 'Addressing systemic misinformation in the overseas education recruitment sector through unbiased institutional matching, accurate cost modeling, and student-first ethical frameworks.',
    date: 'Industry Perspective',
    readTime: '6 min read',
    focusVertical: 'LumeaGo',
    status: 'SECURITY_ADVISORY',
    keyInsights: [
      'Counselling models must eliminate incentive misalignment to prioritize student academic fit.',
      'Transparent total-cost-of-living forecasting prevents international student financial distress.',
      'Pre-departure cultural orientation significantly reduces early academic withdrawal rates.'
    ]
  }
];

export const RESEARCH_NOTE = {
  headline: 'Authentic Research & Operational Principles',
  disclaimer: 'LUMEA Group publishes technical perspectives, pedagogical briefs, and operational principles derived from our active work across cybersecurity, healthcare technology, linguistics, and international education. We uphold strict transparency: our briefs reflect genuine methodologies and operational focus areas without exaggerating claims or inventing peer citations.'
};
