import { motion } from 'motion/react';

export function ProcessSection() {
  const steps = [
    {
      title: 'Consult',
      text: 'We start by understanding your organisation\'s goals, workforce challenges, and learning gaps — not by pitching a product.'
    },
    {
      title: 'Design',
      text: 'Our instructional architects and L&D specialists co-create a learning solution aligned to your business context, culture, and target outcomes.'
    },
    {
      title: 'Deliver',
      text: 'Seamless execution across formats — classroom, virtual, blended, or hybrid — with dedicated programme management from our side.'
    },
    {
      title: 'Measure',
      text: 'Impact-first reporting with customised ROI frameworks, learner analytics, and progress dashboards to demonstrate transformation.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-brand-dark text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-slate-400 uppercase font-bold text-xs tracking-[0.2em] block mb-4">Our Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            A Structured Engagement. <br />
            <span className="text-timesred">From Day One to Measurable Outcomes.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-10 left-10 right-10 h-px bg-slate-800 z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative z-10 text-center"
            >
              <div className="w-20 h-20 mx-auto bg-slate-900 border-2 border-timesred rounded-full flex items-center justify-center text-2xl font-bold mb-8 shadow-[0_0_30px_rgba(226,26,34,0.2)]">
                {idx + 1}
              </div>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
