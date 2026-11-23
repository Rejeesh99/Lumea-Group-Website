export interface AudiencePathway {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  relevantBrands: string[];
  keyChallenges: string[];
  howWeHelp: string[];
  actionCta: string;
}

export const AUDIENCE_PATHWAYS: AudiencePathway[] = [
  {
    id: 'businesses',
    title: 'Businesses & Organisations',
    subtitle: 'Enterprise Resilience, Cyber Defence & Pragmatic AI',
    description: 'We help enterprises, startups, and institutions identify security vulnerabilities, cultivate human security consciousness, and harness secure AI systems to safeguard customer trust.',
    relevantBrands: ['LumeaCyber'],
    keyChallenges: [
      'Rapidly evolving ransomware and phishing threats targeting staff',
      'Uncertainty regarding digital attack surfaces and cloud exposure',
      'Need for verified, authorised penetration testing without disruption',
      'Desire to adopt artificial intelligence safely without compromising data'
    ],
    howWeHelp: [
      'Authorised security assessment and risk surface discovery',
      'Tailored security awareness training for operational departments',
      'Defensive AI workflow design and data privacy consulting',
      'Executive risk briefing and proactive mitigation roadmaps'
    ],
    actionCta: 'Protect Your Organisation'
  },
  {
    id: 'institutions',
    title: 'Educational Institutions & Colleges',
    subtitle: 'Institutional Upgrading, Simulation Labs & Curriculum Support',
    description: 'We partner with universities, nursing colleges, and technical academies to enrich academic curriculums with modern cybersecurity labs, simulation models, and language coaching.',
    relevantBrands: ['LumeaCyber', 'LumeaNursing', 'LumeaSkill'],
    keyChallenges: [
      'Curriculums lagging behind real-world technological developments',
      'Lack of hands-on simulation environments for nursing and cybersecurity',
      'Need for accredited language benchmarks (IELTS/OET/German) for outgoing graduates',
      'Faculty development in contemporary digital pedagogies'
    ],
    howWeHelp: [
      'Design and architectural consulting for institutional cyber labs',
      'Simulation-based nursing education support and case frameworks',
      'Campus-wide linguistic and professional skill training cohorts',
      'Transparent international education orientation for student bodies'
    ],
    actionCta: 'Partner With LUMEA'
  },
  {
    id: 'professionals',
    title: 'Learners & Working Professionals',
    subtitle: 'High-Value Skills, Career Mobility & Specialised Fluency',
    description: 'We guide nurses, technical specialists, and ambitious graduates in acquiring certified linguistic fluency, clinical confidence, and practical defensive security skills.',
    relevantBrands: ['LumeaSkill', 'LumeaNursing', 'LumeaCyber'],
    keyChallenges: [
      'Bridging academic theory to high-demand industry competencies',
      'Overcoming language test hurdles (OET for healthcare, IELTS, German CEFR)',
      'Clinical transition friction for early-career nursing graduates',
      'Finding structured, mentor-led guidance without predatory fees'
    ],
    howWeHelp: [
      'Structured CEFR German and professional language instruction',
      'Diagnostic test preparation clinics for IELTS and OET exams',
      'Continuing professional development (CPD) for practising nurses',
      'Hands-on security and software engineering workshops'
    ],
    actionCta: 'Accelerate Your Skills'
  },
  {
    id: 'families',
    title: 'Students & Families',
    subtitle: 'Ethical, Transparent Global Education Guidance',
    description: 'We provide honest, student-first overseas education counselling that demystifies global university admissions, living costs, and cultural preparation without false promises.',
    relevantBrands: ['LumeaGo', 'LumeaSkill'],
    keyChallenges: [
      'Aggressive sales agencies pushing unsuitable universities for commissions',
      'Hidden fees, living cost surprises, and visa misinformation',
      'Anxiety regarding student safety, accommodation, and cultural transition',
      'Confusion over application dossiers, statements of purpose, and requirements'
    ],
    howWeHelp: [
      'Impartial, profile-matched course and university selection',
      'Transparent budgeting breakdowns with no hidden surprises',
      'Personalised application mentoring and statement of purpose review',
      'Comprehensive pre-departure briefings for students and parents'
    ],
    actionCta: 'Explore Study Abroad Guidance'
  }
];
