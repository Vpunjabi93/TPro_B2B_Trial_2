import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function FinalCTA() {
  const stats = [
    '188 Years of Times Group Legacy',
    '50+ Academic Partners',
    '200+ Enterprise Clients',
    '100,000+ Learners Trained'
  ];

  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-timesred/5" />
      <div className="container-custom max-w-4xl relative z-10 text-center">
        <span className="section-label">Get Started</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
          Now You Know How Your Leadership Could Keep Up — <br />
          <span className="text-timesred">Let's Bring the Thought to Life.</span>
        </h2>
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          Tell us about your learning and development goals. Our enterprise team will map the right solution — whether it's a structured High Potential Development programme, an AI Transformation Academy rollout, a bespoke learning journey, or an Executive Education plan for your leadership cohort.
        </p>

        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-timesred hover:bg-timesred-dark text-white font-bold text-lg px-10 py-5 rounded-full shadow-2xl shadow-timesred/30 transition-all mb-6"
        >
          Request a Free Consultation
        </motion.a>
        <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
          No commitment required. Our enterprise team will reach out within 24 hours.
        </p>

        <div className="mt-20 pt-10 border-t border-slate-800 flex flex-wrap justify-center gap-x-10 gap-y-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-timesred" />
              {stat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-10 bg-slate-950 border-t border-slate-900 text-center">
      <div className="container-custom">
        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} TimesPro. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
