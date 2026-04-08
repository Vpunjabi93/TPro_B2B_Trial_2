import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function PartnersSection() {
  const partners = [
    'IIM Calcutta', 'IIM Indore', 'IIM Lucknow', 'IIM Kozhikode', 
    'IIM Nagpur', 'IIM Kashipur', 'IIT Delhi', 'IIT Roorkee', 
    'IIT Guwahati', 'XLRI', 'SPJIMR', 'INSEAD', 'NUS'
  ];

  const stats = [
    { val: '50+', label: 'Academic Partners' },
    { val: '200+', label: 'Programmes' },
    { val: '100,000+', label: 'Learners Annually' },
    { val: '25+', label: 'Industries Served' },
    { val: '14+', label: 'Years of Experience' }
  ];

  return (
    <section id="partners" className="py-24 bg-brand-gray border-y border-slate-200">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-label">Our Academic Partners</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Learning Powered by India's — and the World's — Best Institutions
          </h2>
          <p className="text-slate-600 text-lg">
            We partner exclusively with institutions recognised for academic rigour, industry relevance, and leadership in their domains.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-20">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ opacity: 1 }}
              className="h-16 bg-white rounded-xl border border-slate-200 flex items-center justify-center p-4 text-center"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-[40px] shadow-xl border border-slate-100 p-10 md:p-16 grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center relative">
              {idx !== 0 && <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-slate-100" />}
              <div className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">{stat.val}</div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="#lead-form"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-timesred font-bold text-lg group"
          >
            Talk to Our Academic Partnerships Team
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
