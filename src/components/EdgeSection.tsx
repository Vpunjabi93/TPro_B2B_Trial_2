import { motion } from 'motion/react';
import { University, Users, BarChart3, Settings, History, ArrowRight } from 'lucide-react';

export function EdgeSection() {
  const tiles = [
    {
      header: 'Institutional-Grade Partnerships.',
      text: '50+ academic partners including IIMs, IITs, XLRI, INSEAD, and NUS. Your employees learn from the best — and get the credentials to prove it.',
      icon: University
    },
    {
      header: 'Scale That Matches Yours',
      text: '10,000+ empanelled facilitators, 1,000+ in-house trainers, and pan-India delivery capability. We train at the scale enterprise demands.',
      icon: Users
    },
    {
      header: 'Programmes Designed for Impact, Not Activity.',
      text: 'Every learning journey is mapped to business KPIs — leadership pipeline goals, sales productivity, capability frameworks, or succession readiness.',
      icon: BarChart3
    },
    {
      header: 'End-to-End Delivery. You Don\'t Have to Manage',
      text: 'Dedicated account managers, programme success managers, and real-time learner dashboards. You focus on your business. We handle the rest.',
      icon: Settings,
      span: 'lg:col-span-2'
    },
    {
      header: 'Backed by 180 Years of the Times Group Legacy.',
      text: 'Credibility, reach, and trust that only a Times of India Group initiative can bring to enterprise learning.',
      icon: History,
      dark: true
    }
  ];

  return (
    <section id="why-timespro" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-label">The TimesPro Edge</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            One Partner. Every Learning Need. <br />
            <span className="text-timesred border-b-4 border-timesred pb-2">Measurable Impact.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((tile, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-[32px] border transition-all duration-300 hover:-translate-y-2 ${
                tile.dark 
                  ? 'bg-brand-dark text-white border-slate-800 shadow-2xl shadow-slate-900/20' 
                  : 'bg-brand-gray border-slate-100 hover:shadow-xl'
              } ${tile.span || ''}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${
                tile.dark ? 'bg-slate-800 text-white' : 'bg-red-50 text-timesred'
              }`}>
                <tile.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 leading-tight">
                {tile.header}
              </h3>
              <p className={`text-sm leading-relaxed ${tile.dark ? 'text-slate-400' : 'text-slate-600'}`}>
                {tile.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="#partners"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-timesred font-bold text-lg group"
          >
            See How We've Helped Organisations Like Yours
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
