export type ServiceStatus = 'AVAILABLE' | 'OWNER_TO_CONFIRM' | 'PLANNED';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  status: ServiceStatus;
  statusNote?: string;
}

export interface EngagementStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BrandData {
  id: 'cyber' | 'nursing' | 'skill' | 'go';
  slug: string;
  name: string;
  fullName: string;
  category: string;
  kicker: string;
  tagline: string;
  officialTagline: string;
  logoUrl: string;
  logoWhiteUrl: string;
  markUrl: string;
  headline: string;
  lede: string;
  accentColor: string; // Tailwind class or hex
  glowColor: string;
  isFlagship?: boolean;
  coreFocus: string[];
  overview: string;
  services: ServiceItem[];
  engagementProcess?: EngagementStep[];
  targetAudiences: {
    title: string;
    description: string;
    points: string[];
  }[];
  faqs: FAQItem[];
  complianceNotes: string[];
  ctaText: string;
}

export const BRANDS: Record<string, BrandData> = {
  cyber: {
    id: 'cyber',
    slug: 'lumeacyber',
    name: 'LumeaCyber',
    fullName: 'LumeaCyber — Cybersecurity, AI & Data Science',
    category: 'Cybersecurity, AI & Data Science',
    kicker: 'Flagship Brand',
    tagline: 'Clearer security. Smarter use of technology.',
    officialTagline: 'Protect Your Digital World',
    logoUrl: '/logos/lumea-cyber-crop.png',
    logoWhiteUrl: '/logos/lumea-cyber-white.png',
    markUrl: '/logos/lumea-cyber-mark.png',
    headline: 'Understand your digital risks. Make technology work smarter.',
    lede: 'LumeaCyber helps organisations understand their security exposure, apply artificial intelligence and data responsibly, and build practical cybersecurity skills through hands-on learning.',
    accentColor: '#00AEEF',
    glowColor: 'rgba(0, 174, 239, 0.25)',
    isFlagship: true,
    coreFocus: [
      'Cyber Risk Discovery & Authorised Security Assessment',
      'Artificial Intelligence & Applied Data Science',
      'Hands-On Cybersecurity Learning',
      'Security Awareness & Institutional Capability Building'
    ],
    overview: 'LumeaCyber is the flagship brand of LUMEA Group. It brings together cybersecurity, artificial intelligence and data science, helping organisations understand digital risk, use data responsibly and develop practical skills through applied learning.',
    services: [
      {
        id: 'cyber-discovery',
        name: 'Cyber Risk Discovery',
        description: 'A structured conversation and review that maps important systems, information and people, helping identify likely areas of exposure and practical priorities.',
        status: 'AVAILABLE'
      },
      {
        id: 'cyber-testing',
        name: 'Vulnerability Assessment & Authorised Security Testing',
        description: 'Scoped vulnerability assessment and authorised security testing, reported in plain language with prioritised recommendations.',
        status: 'AVAILABLE',
        statusNote: 'Requires formal written legal authorization prior to initiation.'
      },
      {
        id: 'cyber-awareness',
        name: 'Security Awareness & Education',
        description: 'Practical sessions that help staff recognise phishing, social engineering and unsafe data handling, built around situations teams actually face.',
        status: 'AVAILABLE'
      },
      {
        id: 'cyber-ai',
        name: 'AI & Data Science',
        description: 'Applying machine learning and data analysis to real operational questions, with security, privacy and explainability considered from the start.',
        status: 'AVAILABLE'
      },
      {
        id: 'cyber-tooling',
        name: 'Security Assessment & Learning Tools',
        description: 'Software tools that may support assessment and learning. These concepts are being explored and are not released products.',
        status: 'PLANNED',
        statusNote: 'Planned exploration only; not currently available.'
      },
      {
        id: 'cyber-institutional',
        name: 'Institutional Cybersecurity Learning',
        description: 'Working with colleges and training providers to strengthen cybersecurity teaching with applied, industry-aware content.',
        status: 'OWNER_TO_CONFIRM',
        statusNote: 'Specific programmes and delivery arrangements require confirmation.'
      }
    ],
    engagementProcess: [
      { step: 1, title: 'Discover', description: 'We learn about your organisation, objectives, systems and constraints.' },
      { step: 2, title: 'Understand', description: 'We identify the assets, concerns and gaps that matter most, and agree what is in and out of scope.' },
      { step: 3, title: 'Propose', description: 'You receive a written proposal with approach, timeline, responsibilities and limitations.' },
      { step: 4, title: 'Deliver', description: 'We carry out the agreed work with clear communication and careful handling of your information.' },
      { step: 5, title: 'Review', description: 'We walk through findings and priorities with your team and agree practical next steps.' }
    ],
    targetAudiences: [
      {
        title: 'Businesses and organisations',
        description: 'Leaders, IT managers and teams who need a clearer view of digital risk and a practical plan.',
        points: ['Cyber risk discovery', 'Authorised security assessment', 'Data and privacy considerations', 'Practical recommendations']
      },
      {
        title: 'Teams working with AI and data',
        description: 'Organisations exploring AI and data science and wanting to consider security, privacy and responsible use from the outset.',
        points: ['Applied AI and data science', 'Responsible data use', 'Privacy-aware approaches', 'Practical project discussions']
      },
      {
        title: 'Learners and institutions',
        description: 'People starting or advancing in cybersecurity, and institutions looking to strengthen the way they teach it.',
        points: ['Practical cybersecurity learning', 'Networks and systems foundations', 'Guided learning environments', 'Industry-aware teaching content']
      }
    ],
    faqs: [
      {
        question: 'How do you keep security testing responsible?',
        answer: 'Any security testing must have a written scope and explicit authorisation before it begins. We handle findings and client information confidentially and explain results in plain language.'
      },
      {
        question: 'Will an assessment make our organisation completely secure?',
        answer: 'No assessment can promise that an organisation is completely secure. It can help identify specific issues, prioritise improvements and support better-informed decisions.'
      },
      {
        question: 'Can you help us explore an AI or data project?',
        answer: 'We can begin with a conversation about the operational question, available data, intended outcomes and relevant privacy or security considerations. The scope and feasibility can then be discussed.'
      },
      {
        question: 'Are your own software tools available now?',
        answer: 'Software tools for assessment and learning are ideas in exploration. They are planned concepts, not released products.'
      }
    ],
    complianceNotes: [
      'All security assessments and vulnerability discovery services require formal written legal authorisation.',
      'LumeaCyber does not guarantee 100% invulnerability or claim unverified external certifications.',
      'Automated security telemetry platforms and SaaS tooling are currently planned features.'
    ],
    ctaText: 'Talk to LumeaCyber'
  },

  nursing: {
    id: 'nursing',
    slug: 'lumeanursing',
    name: 'LumeaNursing',
    fullName: 'LumeaNursing — Nursing Education Technology',
    category: 'Nursing Education Technology',
    kicker: 'Healthcare Technology',
    tagline: 'Care powered by technology. Learning anchored in humanity.',
    officialTagline: 'Empowering those who care',
    logoUrl: '/logos/lumea-nursing-crop.png',
    logoWhiteUrl: '/logos/lumea-nursing-white.png',
    markUrl: '/logos/lumea-nursing-mark.png',
    headline: 'Better nursing education, built with care and supported by technology.',
    lede: 'Empowering nursing colleges, educators, practising clinicians, and ambitious nursing students with modern digital pedagogical tools, clinical skill support, and structured professional development.',
    accentColor: '#2DD4BF',
    glowColor: 'rgba(45, 212, 191, 0.25)',
    isFlagship: false,
    coreFocus: [
      'Nursing Curriculum Support & Digital Pedagogy',
      'Clinical Competency & Professional Development',
      'Simulation-Based Learning Methodologies',
      'Next-Generation Healthcare Technology Integration'
    ],
    overview: 'LumeaNursing bridges the gap between academic nursing fundamentals and real-world clinical demands. We provide supportive digital educational frameworks that enhance critical thinking, patient care protocols, and continuous medical education without replacing accredited clinical programmes.',
    services: [
      {
        id: 'nursing-edu-support',
        name: 'Nursing Education Support & Courseware',
        description: 'High-clarity modular learning resources, interactive case studies, and clinical judgment frameworks aligned with international nursing standards.',
        status: 'AVAILABLE'
      },
      {
        id: 'nursing-prof-dev',
        name: 'Continuing Professional Development (CPD)',
        description: 'Specialised workshops and digital upskilling modules for registered nurses focusing on acute care, patient communication, and modern ward practices.',
        status: 'AVAILABLE'
      },
      {
        id: 'nursing-simulations',
        name: 'Simulation-Based Clinical Training',
        description: 'Hands-on pedagogical workflows utilising physical simulators and guided clinical scenarios where facilities are established.',
        status: 'AVAILABLE',
        statusNote: 'Subject to regional partner facility availability.'
      },
      {
        id: 'nursing-ai-assisted',
        name: 'AI-Assisted Diagnostic & Triage Learning Modules',
        description: 'Interactive adaptive learning tools providing intelligent scenario feedback and clinical pathway analysis.',
        status: 'PLANNED',
        statusNote: 'Currently in curriculum validation and planned for phased release.'
      },
      {
        id: 'nursing-vr-sim',
        name: 'Virtual Reality (VR) Immersive Ward Simulations',
        description: 'Full 3D spatial simulation for emergency triage and sterile procedure practice.',
        status: 'PLANNED',
        statusNote: 'Planned technological evolution in partnership with simulation labs.'
      }
    ],
    targetAudiences: [
      {
        title: 'Nursing Students',
        description: 'Students seeking supplementary clinical reasoning support and foundational nursing mastery.',
        points: ['Pathophysiology case studies', 'Drug dosage calculation drills', 'Clinical OSCE preparation', 'Confidence building']
      },
      {
        title: 'Practising Registered Nurses',
        description: 'Healthcare professionals upgrading clinical knowledge, transition skills, or global best practices.',
        points: ['Critical care refreshers', 'Documentation & legal ethics', 'Patient communication', 'Continuous education']
      },
      {
        title: 'Nursing Colleges & Healthcare Institutions',
        description: 'Academic departments seeking modern digital supplementary aids and simulation pedagogies.',
        points: ['Faculty enablement', 'Digital question banks', 'Skill lab workflow enhancement', 'Institutional quality uplift']
      }
    ],
    faqs: [
      {
        question: 'Does LumeaNursing grant nursing licenses or replace degree programmes?',
        answer: 'No. LumeaNursing is an educational technology and supplemental learning initiative. We do not confer legal nursing registrations, replace accredited university degree programmes, or issue statutory nursing licenses.'
      },
      {
        question: 'Do you guarantee hospital or overseas employment?',
        answer: 'No. We do not provide employment guarantees. Our role is strictly pedagogical — building real-world competencies, clinical knowledge, and academic confidence that prepare nurses for their careers.'
      },
      {
        question: 'Are VR simulation modules currently accessible?',
        answer: 'VR simulation modules and AI-assisted triage tutors are in our planned development pipeline. Simulation training is currently offered via physical and scenario-based methods where partner facilities are equipped.'
      }
    ],
    complianceNotes: [
      'LumeaNursing does not replace accredited statutory nursing education programmes.',
      'We do not grant nursing registration, licensing, or legal authority to practise.',
      'We do not guarantee employment, placements, or hospital appointments.',
      'AI-assisted tutors and VR ward simulations are planned future enhancements.'
    ],
    ctaText: 'Connect with LumeaNursing'
  },

  skill: {
    id: 'skill',
    slug: 'lumeaskill',
    name: 'LumeaSkill',
    fullName: 'LumeaSkill — Skills, Languages & Careers',
    category: 'Skills, Languages & Careers',
    kicker: 'Empowerment & Capability',
    tagline: 'Skills that open doors. Languages that connect futures.',
    officialTagline: "Language isn't a limit",
    logoUrl: '/logos/lumea-skill-crop.png',
    logoWhiteUrl: '/logos/lumea-skill-white.png',
    markUrl: '/logos/lumea-skill-mark.png',
    headline: 'Skills and languages that open the next door.',
    lede: 'Comprehensive linguistic mastery, certified examination preparation, and practical digital skills engineered to bridge the talent divide between ambition and global career opportunities.',
    accentColor: '#FF2E88',
    glowColor: 'rgba(255, 46, 136, 0.25)',
    isFlagship: false,
    coreFocus: [
      'Linguistic Mastery & Global Communication',
      'Targeted International Examination Preparation',
      'Pragmatic Digital & Technical Skill Upgrading',
      'Professional Career Alignment & Employability Mentorship'
    ],
    overview: 'LumeaSkill operates at the vital intersection of human capability and global workforce mobility. By providing rigorous linguistic training, structured exam coaching, and contemporary tech skill development, we enable professionals and learners to unlock their full global potential.',
    services: [
      {
        id: 'skill-languages',
        name: 'Professional Language Instruction',
        description: 'Immersive communicative language courses designed for corporate, academic, and relocation environments.',
        status: 'AVAILABLE'
      },
      {
        id: 'skill-german',
        name: 'German Language (A1 – B2) Dedicated Curriculum',
        description: 'Structured CEFR-aligned German language mastery programmes tailored for European education and career pathways.',
        status: 'OWNER_TO_CONFIRM',
        statusNote: 'Requires administrator confirmation on current batch schedules.'
      },
      {
        id: 'skill-exam-prep',
        name: 'IELTS, OET & International Exam Preparation',
        description: 'Diagnostic assessments, mock band scoring, and strategic test preparation modules for international standardized exams.',
        status: 'OWNER_TO_CONFIRM',
        statusNote: 'Course schedules and batch capacities subject to institutional confirmation.'
      },
      {
        id: 'skill-practical-tech',
        name: 'Practical Technical & Digital Skill Development',
        description: 'Hands-on short courses in data fundamentals, secure software practices, and digital productivity tools.',
        status: 'AVAILABLE'
      },
      {
        id: 'skill-career-guidance',
        name: 'Career Trajectory Advisory & Resume Strategy',
        description: 'One-on-one professional profile optimization, international interview readiness, and portfolio mentorship.',
        status: 'AVAILABLE'
      },
      {
        id: 'skill-institutional',
        name: 'Institutional Campus Upskilling Programmes',
        description: 'Tailored training modules delivered in partnership with colleges to elevate student placement readiness.',
        status: 'AVAILABLE'
      }
    ],
    targetAudiences: [
      {
        title: 'Aspiring Global Professionals',
        description: 'Graduates and working individuals preparing for multinational careers or European opportunities.',
        points: ['Language fluency', 'International workplace etiquette', 'Technical portfolio building', 'Interview simulations']
      },
      {
        title: 'Healthcare Professionals (OET)',
        description: 'Nurses and medical staff preparing for healthcare-specific language benchmarks.',
        points: ['OET speaking & writing clinics', 'Clinical communication', 'Mock examinations', 'Personalized feedback']
      },
      {
        title: 'Colleges & Educational Academies',
        description: 'Institutions desiring turnkey value-add skill and communication modules for their student bodies.',
        points: ['Campus bootcamps', 'Diagnostic benchmarking', 'Custom faculty workshops', 'Placement readiness']
      }
    ],
    faqs: [
      {
        question: 'Do you guarantee test scores or specific exam bands?',
        answer: 'No. Language exam results depend fundamentally on the individual student’s dedication, baseline fluency, and practice. We provide structured training, diagnostic feedback, and proven strategies, but do not make false guarantees.'
      },
      {
        question: 'Are German language batches and OET coaching currently open for registration?',
        answer: 'Specific batch schedules and intake openings for German language (A1–B2) and IELTS/OET coaching are updated seasonally and subject to administrator confirmation. Please reach out to verify current batch availability.'
      },
      {
        question: 'Are classes delivered online or offline in Kochi?',
        answer: 'We provide hybrid options with structured virtual cohorts as well as physical sessions in Kochi, Kerala, depending on the course format.'
      }
    ],
    complianceNotes: [
      'German language curriculum and IELTS/OET coaching schedules are subject to administrator confirmation.',
      'LumeaSkill does not claim unverified exam body partnerships or guarantee examination scores.',
      'Course availability is subject to schedule confirmation.'
    ],
    ctaText: 'Enquire with LumeaSkill'
  },

  go: {
    id: 'go',
    slug: 'lumeago',
    name: 'LumeaGo',
    fullName: 'LumeaGo — Global Education Guidance',
    category: 'Global Education Guidance',
    kicker: 'Global Horizons',
    tagline: 'Transparent advice. Real preparation. Global futures.',
    officialTagline: 'Study Beyond Borders',
    logoUrl: '/logos/lumea-go-crop.png',
    logoWhiteUrl: '/logos/lumea-go-white.png',
    markUrl: '/logos/lumea-go-mark.png',
    headline: 'Study abroad with clearer information and better preparation.',
    lede: 'Ethical, transparent, and structured international education counselling helping students and families navigate overseas university selection, applications, and pre-departure readiness.',
    accentColor: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.25)',
    isFlagship: false,
    coreFocus: [
      'Ethical University & Course Selection Counselling',
      'End-to-End Application Guidance & Documentation',
      'Realistic Financial Planning & Pre-Departure Preparation',
      'Holistic Support for Students & Anxious Families'
    ],
    overview: 'LumeaGo cuts through the misinformation and aggressive sales tactics common in the overseas education industry. We provide honest, student-centric guidance rooted in realistic academic matching, transparent financial breakdowns, and thorough cultural and lifestyle preparation.',
    services: [
      {
        id: 'go-initial-guidance',
        name: 'Diagnostic Academic & Profile Assessment',
        description: 'In-depth profile analysis evaluating academic backgrounds, financial realities, and long-term career aspirations.',
        status: 'AVAILABLE'
      },
      {
        id: 'go-counselling',
        name: 'Destination & Institution Matching',
        description: 'Impartial exploration of reputable international universities across Europe, the UK, and other global hubs.',
        status: 'AVAILABLE'
      },
      {
        id: 'go-application',
        name: 'Application Mentorship & Statement Review',
        description: 'Guidance on structuring compelling Statements of Purpose (SOP), letters of recommendation, and portfolio dossiers.',
        status: 'AVAILABLE'
      },
      {
        id: 'go-predeparture',
        name: 'Pre-Departure Orientation & Next Steps Planning',
        description: 'Cultural acclimatisation briefings, accommodation guidance, healthcare setup advice, and airport arrival checklists.',
        status: 'AVAILABLE'
      },
      {
        id: 'go-specific-destinations',
        name: 'Target Country Bilateral Institutional MoUs',
        description: 'Direct tie-ups and priority admissions tracks with specific overseas colleges and universities.',
        status: 'OWNER_TO_CONFIRM',
        statusNote: 'Specific country destination partnerships are subject to formal verification.'
      }
    ],
    engagementProcess: [
      { step: 1, title: 'Enquire', description: 'Reach out with basic educational background and study aspirations. (No sensitive identity docs requested at this stage).' },
      { step: 2, title: 'Counselling', description: 'One-on-one session with an experienced advisor to assess academic fit, realistic budget, and timeline.' },
      { step: 3, title: 'Application', description: 'Meticulous document preparation, essay review, and submission to shortlisted accredited institutions.' },
      { step: 4, title: 'Next Steps', description: 'Offer acceptance guidance, genuine visa documentation guidance, and comprehensive pre-departure briefings.' }
    ],
    targetAudiences: [
      {
        title: 'Students & Aspiring Scholars',
        description: 'School leavers and graduates seeking reputable undergraduate or postgraduate study abroad.',
        points: ['Honest course matching', 'SOP and essay mentoring', 'Scholarship insight', 'Stress-free submission']
      },
      {
        title: 'Parents & Families',
        description: 'Families seeking transparent fee breakdowns, safety assurances, and realistic outcomes.',
        points: ['Clear budget planning', 'Accommodation safety overview', 'Regular status updates', 'Direct advisor communication']
      },
      {
        title: 'Partner Institutions & Schools',
        description: 'High schools and colleges wanting reputable, ethical study abroad orientation for their pupils.',
        points: ['On-campus career days', 'Global study workshops', 'Unbiased guidance sessions', 'Zero-commission bias']
      }
    ],
    faqs: [
      {
        question: 'Do you guarantee university admission or student visa approval?',
        answer: 'Never. Admission decisions rest exclusively with the universities, and visa decisions rest solely with government immigration authorities. LumeaGo offers ethical guidance and rigorous preparation, but any agency promising guaranteed visas or admissions is acting deceptively.'
      },
      {
        question: 'Do you require my passport or bank statements during initial enquiry?',
        answer: 'Absolutely not. In our initial enquiry and early counselling stages, we never ask for sensitive identification documents such as passport numbers, national ID cards, or personal financial statements.'
      },
      {
        question: 'Which countries do you cover for study abroad?',
        answer: 'We advise on premier educational destinations across Germany, European hubs, the United Kingdom, and select global regions. Exact institutional partnership status and country specialisations are subject to administrator confirmation.'
      }
    ],
    complianceNotes: [
      'LumeaGo strictly never guarantees university admission, visa grant, or scholarships.',
      'No passport or sensitive financial documents are collected during initial enquiries.',
      'Destination partnerships and institutional MoUs marked for confirmation remain unconfirmed until formally approved.'
    ],
    ctaText: 'Schedule Guidance Session'
  }
};

export const GROUP_SOLUTIONS = [
  {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    title: 'Cybersecurity & Digital Risk',
    brand: 'LumeaCyber',
    brandId: 'cyber',
    shortDesc: 'Cyber risk discovery, authorised security assessment, responsible data practices and practical security learning.',
    fullDesc: 'In an interconnected digital economy, organisations need a clear understanding of their digital risks. LUMEA Group supports cyber risk discovery, authorised assessment and practical security awareness to help teams make informed improvements.',
    keyCapabilities: [
      'Cyber risk discovery and assessment',
      'Authorised vulnerability assessment and security testing',
      'Security awareness and practical learning',
      'Institutional cybersecurity education support'
    ],
    complianceRequirement: 'Authorised security testing requires strict written mutual consent and verified asset ownership.'
  },
  {
    id: 'technology',
    slug: 'technology',
    title: 'Software, AI & Digital Systems',
    brand: 'Lumea Group & LumeaCyber',
    brandId: 'cyber',
    shortDesc: 'Modern cloud-ready software engineering, pragmatic AI integration, and data science solutions built for real-world reliability.',
    fullDesc: 'We build digital platforms and AI solutions that are resilient by design. From privacy-preserving machine learning models to enterprise digital infrastructure, we integrate cybersecurity into the very foundation of digital transformation.',
    keyCapabilities: [
      'Pragmatic Artificial Intelligence & Applied Data Science',
      'Defensive Software Architecture & Code Quality Engineering',
      'Automated Data Sanitisation & Privacy-Preserving Workflows',
      'Modern Scalable Enterprise Web & Cloud Architectures'
    ],
    complianceRequirement: 'Automated telemetry platforms and SaaS tools are currently in the planned product development roadmap.'
  },
  {
    id: 'learning',
    slug: 'learning',
    title: 'Learning & Human Progress',
    brand: 'LumeaNursing & LumeaSkill',
    brandId: 'nursing',
    shortDesc: 'Technology-enabled nursing education, professional language mastery, international exam preparation, and global study guidance.',
    fullDesc: 'Technology reaches its highest purpose when it enables human potential. Across healthcare, linguistics, and international education, LUMEA Group designs learning experiences that provide tangible skills and global mobility.',
    keyCapabilities: [
      'Healthcare & Nursing Education Technology Support',
      'International Language Instruction (German, English)',
      'Certified Examination Coaching (IELTS, OET)',
      'Ethical Global Education Guidance (LumeaGo)'
    ],
    complianceRequirement: 'Programs do not replace statutory accreditation, grant legal practice licenses, or guarantee exam/employment outcomes.'
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    title: 'Trust',
    subtitle: 'Responsible Digital Practice',
    description: 'We believe digital progress should be thoughtful and responsible. We help people understand risks, respect privacy and make informed technology decisions.',
    color: '#00AEEF'
  },
  {
    title: 'Technology',
    subtitle: 'Intelligent, Purpose-Built Systems',
    description: 'We harness modern software, artificial intelligence, and data science to simplify complexity, enhance decision-making, and create reliable infrastructure.',
    color: '#2DD4BF'
  },
  {
    title: 'Learning',
    subtitle: 'Human-Centred Capability Building',
    description: 'Tools are only as effective as the people who operate them. We build educational frameworks that foster critical thinking, clinical competence, and global fluency.',
    color: '#FF2E88'
  },
  {
    title: 'Opportunity',
    subtitle: 'Unlocking Global Horizons',
    description: 'Through transparent guidance, international education pathways, and career alignment, we empower individuals and institutions to participate in the global economy.',
    color: '#F59E0B'
  }
];

export const WHY_LUMEA_PRINCIPLES = [
  {
    id: 'connected-thinking',
    title: 'Connected Thinking',
    description: 'We do not view security, technology, and learning as disconnected silos. Security informs technology, technology enriches learning, and learning creates resilient people.'
  },
  {
    id: 'practical-outcomes',
    title: 'Practical Outcomes',
    description: 'We avoid theoretical hyperbole. Whether auditing a firewall or preparing a nurse for clinical transitions, our focus is measurable, real-world competence.'
  },
  {
    id: 'human-centred',
    title: 'Human-Centred Design',
    description: 'Behind every network packet and every educational syllabus is a human being. We design systems that respect cognitive limits, user privacy, and authentic care.'
  },
  {
    id: 'security-conscious',
    title: 'Security-Conscious Innovation',
    description: 'Innovation without security is vulnerability. We embed defensive thinking into our AI, software, and educational architectures from day one.'
  },
  {
    id: 'global-outlook',
    title: 'Global Outlook with Local Integrity',
    description: 'Headquartered in Kochi, Kerala, we maintain an international benchmark for our technical and educational services while upholding absolute transparency.'
  }
];

export const CONTACT_INFO = {
  email: 'contact@lumeagroup.in',
  phone: '+91 90379 98980',
  whatsapp: '+91 90379 98981',
  location: 'Kochi, Kerala, India',
  website: 'https://www.lumeagroup.in',
  tagline: 'Securing the digital world. Enabling human progress.',
  officialTagline: 'Elevate Your Future',
  logoUrl: '/logos/lumea-group-crop.png',
  logoWhiteUrl: '/logos/lumea-group-white.png',
  markUrl: '/logos/lumea-group-mark.png'
};
