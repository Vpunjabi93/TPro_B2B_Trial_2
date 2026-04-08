import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export function SolutionsSection() {
  const solutions = [
    {
      label: 'For: CHRO / Chief People Officer',
      name: 'High Potential Development & Enterprise Leadership Academy',
      tagline: 'Build the Leadership Pipeline Your Organisation Needs — Backed by Tier-1 Institutions and Industry Practitioners',
      stats: [
        { val: '60%', label: 'Measurable Growth' },
        { val: '70%', label: 'Stronger Team Management' },
        { val: '16%', label: 'Smoother Successions' }
      ],
      features: [
        'Structured High Potential Development tracks co-designed with IIMs, IITs, and premier institutions',
        'Industry practitioner and KOL-led programmes that bring real-world leadership context into the classroom',
        'AI Transformation Academy — organisation-wide AI readiness across leadership cohorts, functional teams, and enterprise-wide awareness tracks',
        'Enterprise Leadership Academy — integrated talent acceleration architecture with AI and digital readiness built in',
        'Bespoke Learning & OD Solutions — capability academies and learning journeys aligned to your transformation agenda'
      ],
      cta: 'Request Programme Details',
      theme: 'bg-brand-dark',
      accent: 'text-timesred'
    },
    {
      label: 'For: Head of Learning & Development',
      name: 'Bespoke Learning, LMS & Technology Training Solutions',
      tagline: 'One End-to-End Learning Partner — Content, Trainers, LMS, and Measurable Outcomes, All Under One Roof',
      stats: [
        { val: '84%', label: 'Immediate Job Application' },
        { val: '6,680', label: 'Batches Delivered' },
        { val: '4.7/5', label: 'Feedback Score' }
      ],
      features: [
        'High Potential Development programmes backed by IIMs, IITs, and industry practitioners — delivered at scale',
        'AI Transformation Academy — self-paced learning, expert webinars, and hands-on practice to build AI capability across your entire workforce',
        'Bespoke Learning & LMS Solutions — custom learning journeys, in-house LMS support, and 10,000+ hours of eLearning and ILT content',
        'Executive Education (Function-Specific) — curated catalogue in Leadership, Strategy, Tech & Analytics, and Finance to close capability gaps quickly',
        'Technology Training Solutions — OEM-aligned tech and cybersecurity training delivered via cloud labs and blended formats'
      ],
      cta: 'Request Learning Solutions Details',
      theme: 'bg-blue-900',
      accent: 'text-blue-400'
    },
    {
      label: 'For: Business Leader / Sponsor',
      name: 'Sales, Technology & Talent Solutions for Business Impact',
      tagline: 'Faster Execution. Lower Ramp-Up Time. Learning That Shows Up in Your KPIs.',
      stats: [
        { val: '82%', label: 'Career Growth Reported' },
        { val: '22%', label: 'Higher Responsibilities' },
        { val: '1.67L+', label: 'Learners Trained' }
      ],
      features: [
        'Sales Excellence Academy — structured capability-building ecosystem for sales teams designed to drive consistent revenue performance, not one-time training',
        'Technology & Cybersecurity Training — platform-specific, OEM-aligned training for tech stacks and risk controls',
        'Executive Education (Function-Specific) — Finance, Product Management, and Tech & Analytics to upskill teams with minimal business disruption',
        'Hire-Train-Deploy Talent Solutions — job-ready talent for project-based or rapid scale-up needs, without the ramp-up cost of conventional hiring'
      ],
      cta: 'Talk to Our Enterprise Team',
      theme: 'bg-emerald-900',
      accent: 'text-emerald-400'
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-brand-gray border-y border-slate-200">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-label">Our Solutions</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Enterprise Learning, Built Around Your People and Your Goals
          </h2>
          <p className="text-slate-600 text-lg">
            Whether you're building a leadership pipeline, scaling your learning ecosystem, or accelerating team performance — we have a solution designed for your specific need.
          </p>
        </div>

        <div className="space-y-16">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] shadow-xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row"
            >
              <div className={`lg:w-2/5 ${sol.theme} p-10 md:p-14 text-white flex flex-col`}>
                <span className={`text-xs font-bold uppercase tracking-widest ${sol.accent} mb-6`}>
                  {sol.label}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                  {sol.name}
                </h3>
                <p className="text-slate-300 text-sm md:text-base italic border-l-4 border-timesred pl-6 mb-10 leading-relaxed">
                  "{sol.tagline}"
                </p>
                
                <div className="mt-auto grid grid-cols-3 gap-4 bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                  {sol.stats.map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl font-bold mb-1">{s.val}</div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold leading-tight">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-3/5 p-10 md:p-14 flex flex-col">
                <ul className="space-y-6 mb-12">
                  {sol.features.map((f, i) => (
                    <li key={i} className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-timesred shrink-0" />
                      <span className="text-slate-700 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto pt-8 border-t border-slate-100">
                  <motion.a
                    href="#lead-form"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-timesred font-bold group"
                  >
                    {sol.cta}
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
