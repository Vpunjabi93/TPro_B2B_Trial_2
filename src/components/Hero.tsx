import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-brand-dark text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-timesred/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold uppercase tracking-widest text-slate-300 mb-8">
                Enterprise Learning Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8">
                Your Organisation Is Growing. <br />
                <span className="text-timesred">Is Your Leadership Keeping Up?</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                <strong className="text-white">89% of organisations face leadership shortages.</strong> 6 in 10 managers step into leadership roles with zero structured training. TimesPro partners with India's leading enterprises to build leadership pipelines, develop High Potential talent, and deliver learning programmes backed by IIMs, IITs, and global institutions — designed around your business, not someone else's curriculum.
              </p>
              <p className="text-xs text-slate-500 italic">
                (Sources: McKinsey Global Survey, 2023 | Quarterdeck Leadership Training Statistics, 2025)
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 text-slate-900"
              id="lead-form"
            >
              <h3 className="text-2xl font-bold mb-2">Request a Free Consultation</h3>
              <p className="text-sm text-slate-500 mb-8">Our enterprise team will reach out within 24 hours.</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-timesred focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Work Email</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-timesred focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Company Name</label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-timesred focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-timesred focus:border-transparent outline-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-timesred hover:bg-timesred-dark text-white font-bold py-4 rounded-xl shadow-xl shadow-timesred/20 transition-all mt-4"
                >
                  Request a Free Consultation
                </button>
              </form>

              <div className="mt-8 flex items-center justify-center gap-3 text-[11px] text-slate-400 text-center uppercase tracking-widest font-bold">
                <Shield className="w-4 h-4 text-timesred" />
                <span>Trusted by 200+ organisations globally</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
