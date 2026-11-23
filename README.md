# LUMEA Group — Corporate Website

A production-ready corporate website for **LUMEA Group**, positioning the organization as an internationally ambitious, cybersecurity-led technology group based in Kochi, Kerala, India.

> **Guiding Philosophy:** *"Securing the digital world. Enabling human progress."*  
> **Supporting Philosophy:** *"Technology should create opportunity and protect it."*

---

## 1. Operating Brand Architecture

LUMEA Group connects four autonomous business verticals under one unified standard:

1. **LumeaCyber** — *Cybersecurity, AI & Data Science*  
   *Headline:* "Understand your risk. Strengthen your defences. Build the skills to keep them strong."  
   *Focus:* Risk posture discovery, authorized penetration testing, applied data science/AI, security awareness training, and institutional lab setup.  
   *Governance:* Security assessments strictly require prior written legal authorization. Tooling and automated telemetry platforms are planned features.
2. **LumeaNursing** — *Nursing Education Technology*  
   *Headline:* "Better nursing education, built with care and supported by technology."  
   *Focus:* Supplementary digital nursing pedagogy, clinical judgment case studies, and continuing professional development (CPD).  
   *Governance:* Does not replace accredited degree programs, grant nursing registrations, or guarantee employment. AI triage and VR simulations are planned.
3. **LumeaSkill** — *Skills, Languages & Careers*  
   *Headline:* "Skills and languages that open the next door."  
   *Focus:* CEFR-aligned German language mastery (A1–B2), IELTS/OET coaching, practical digital skills, and career trajectory mentorship.  
   *Governance:* German and exam preparation schedules require administrator confirmation before registration.
4. **LumeaGo** — *Global Education Guidance*  
   *Headline:* "Study abroad with clearer information and better preparation."  
   *Focus:* Ethical university matching, application dossier mentorship, and realistic pre-departure budgeting.  
   *Governance:* Never guarantees university admissions, visas, or scholarships. Initial inquiries never solicit passport numbers.

---

## 2. Brand Identity & Design System

- **Primary:** Jet Black (`#08090D`)
- **Secondary:** Cerulean Blue (`#00AEEF`)
- **Accent:** Neon Rose (`#FF2E88`)
- **Supporting Palette:**
  - Deep Charcoal: `#12151D`
  - Graphite: `#202630`
  - Pure White: `#FFFFFF`
  - Muted Silver: `#A7ADB8`
  - Medical Teal (Nursing): `#2DD4BF`
  - International Amber (Go): `#F59E0B`
- **Typography:** Modern editorial typography with high contrast, crisp hierarchy, dark glassmorphism, and subtle ambient glows.

---

## 3. Implemented Routes & Site Architecture

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Hero with interactive Brand Orbit explorer, group intro, flagship showcase, solutions, audience pathways, philosophy, and insights. |
| `/brands` | **Our Brands** | Overview of the four distinct verticals, rationale for separation, and unified standard. |
| `/brands/lumeacyber` | **LumeaCyber** | Dedicated cybersecurity & AI landing page with 5-stage engagement lifecycle. |
| `/brands/lumeanursing` | **LumeaNursing** | Dedicated healthcare education technology landing page. |
| `/brands/lumeaskill` | **LumeaSkill** | Dedicated language, exam prep, and capability development landing page. |
| `/brands/lumeago` | **LumeaGo** | Dedicated global education guidance landing page with 4-stage student journey. |
| `/solutions/cybersecurity` | **Cybersecurity & Defence** | In-depth defensive assessments and human awareness training. |
| `/solutions/technology` | **Software, AI & Digital** | Cloud-ready systems, applied AI, and sanitized data pipelines. |
| `/solutions/learning` | **Learning & Human Progress** | Healthcare pedagogy, linguistic mobility, and study abroad pathways. |
| `/industries` | **Who We Help** | 4 audience pathways: Businesses, Institutions, Professionals, Students/Families. |
| `/about` | **About LUMEA** | Corporate origin, principles, headquarters factsheet, and philosophy. |
| `/insights` | **Insights & Research** | 5 authentic research briefs and technical analyses with clear disclaimers. |
| `/contact` | **Contact & Enquiries** | Directory, physical location, and interactive multi-brand routing form. |
| `/privacy` | **Privacy Policy** | Minimal-collection policy compliant with DPDP Act & international standards. |
| `/cookies` | **Cookie Policy** | Transparent disclosure of essential security and telemetry cookies. |
| `/terms` | **Terms of Service** | Statutory disclaimers, written testing requirements, and jurisdiction in Kochi. |
| `/sitemap.xml` | **XML Sitemap** | Dynamic sitemap for all corporate routes. |
| `/robots.txt` | **Robots.txt** | Crawler guidance linking to the sitemap. |

---

## 4. Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **Animations:** CSS hardware-accelerated transitions & Framer Motion
- **SEO & Structured Data:** Schema.org JSON-LD (`Organization`, `PostalAddress`), OpenGraph, Twitter Cards, Semantic HTML5.

---

## 5. Local Development Instructions

### Prerequisites
Node.js 18+ (bundled in `.tools/node/bin`) and npm.

### Running Development Server
```bash
# Add bundled node to PATH (or use system node)
export PATH="./.tools/node/bin:$PATH"

# Install dependencies (if fresh clone)
npm install

# Start development server
npm run dev
```
Navigate to `http://localhost:3000`.

### Production Build & Serving
```bash
# Build production bundle
npm run build

# Start production server
npm run start -p 3000
```

---

## 6. Environment Variables & Integrations Requiring Backend Configuration

The contact form is production-ready with front-end validation, defensive honeypot anti-spam, and interactive feedback. To connect it to your live corporate CRM or mail transport:

1. Create a `.env.local` file:
   ```env
   # Email Dispatch Service (e.g., SendGrid, Resend, or AWS SES)
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USER=contact@lumeagroup.in
   SMTP_PASS=your_secure_password

   # Webhook / CRM Integration
   CRM_WEBHOOK_URL=https://api.crm.example.com/v1/leads

   # Production Domain
   NEXT_PUBLIC_SITE_URL=https://www.lumeagroup.in
   ```
2. Create an API route at `src/app/api/contact/route.ts` to dispatch inquiries to `contact@lumeagroup.in` or your CRM endpoint.

---

## 7. Quality Assurance & Compliance Summary

- **Service Status Categorization:** Every service offering across all 4 brands is explicitly tagged as `AVAILABLE`, `OWNER_TO_CONFIRM`, or `PLANNED`.
- **Defensive Security Standard:** Clear, prominent disclaimers state that security assessments require written legal authorization; no complete security is guaranteed.
- **Accreditation Clarity:** LumeaNursing explicitly notes it does not replace statutory degree programs or grant practice registration.
- **Ethical Study Abroad:** LumeaGo explicitly states it never promises admission or visas and never collects passport details on initial contact.
- **Zero Hallucination Policy:** No fabricated client logos, testimonials, certifications, or statistics are included.
