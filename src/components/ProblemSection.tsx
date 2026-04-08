import { motion } from 'motion/react';
import { UserCheck, GraduationCap, Target, ArrowRight } from 'lucide-react';

export function ProblemSection() {
  const tiles = [
    {
      label: 'For the CHRO',
      icon: UserCheck,
      heading: 'Your Leadership Pipeline Has Gaps You Can\'t Afford to Ignore',
      text: 'Only 1 in 5 organisations say they are truly effective at developing leaders across all levels. The pipeline gap isn\'t a future risk. It\'s a present reality.',
      stat: 'New Hiring Cost > Retention Cost',
      source: 'Global Leadership Training Research, 2024-25',
      color: 'border-timesred'
    },
    {
      label: 'For Head L&D',
      icon: GraduationCap,
      heading: 'Your L&D Programmes Are Running. But Are They Working?',
      text: 'Nearly half of all organisations are doubling down on leadership upskilling in 2025. The ones falling behind aren\'t spending less — they\'re designing wrong.',
      source: 'Harvard Business Publishing Global Leadership Development Study, 2025',
      color: 'border-blue-600'
    },
    {
      label: 'For BU Head / Functional Leader',
      icon: Target,
      heading: 'Your Teams Are Executing. But Are They Executing at the Level Your Strategy Demands?',
      text: 'Generic training doesn\'t show up in KPIs, project outcomes, or customer metrics. Every day your frontline and mid-level managers operate below their potential is a day your strategy moves slower than it should.',
      source: 'Quarterdeck Leadership Training Statistics, 2025',
      color: 'border-emerald-600'
    }
  ];

  return (
    <section id="the-gap" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            The Leadership Gap Is Real. <br />
            <span className="text-timesred">And It's Costing You.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiles.map((tile, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-brand-gray rounded-3xl p-8 border-t-8 ${tile.color} shadow-sm hover:shadow-xl transition-all flex flex-col`}
            >
              <div className="mb-6">
                <tile.icon className="w-10 h-10 text-slate-800" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 block">
                {tile.label}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-6 leading-tight">
                {tile.heading}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                {tile.text}
              </p>
              
              <div className="mt-auto">
                {tile.stat && (
                  <div className="bg-white p-4 rounded-2xl border border-slate-100 mb-4">
                    <p className="text-sm font-bold text-slate-900">{tile.stat}</p>
                  </div>
                )}
                <p className="text-[10px] text-slate-400 italic">
                  (Source: {tile.source})
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="#solutions"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-timesred font-bold text-lg group"
          >
            See How TimesPro Can Help
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
