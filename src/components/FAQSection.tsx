import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const faqs = [
    {
      q: 'Can programmes be fully customised to our organisation\'s context?',
      a: 'Yes. Every engagement begins with a thorough needs analysis — covering your business goals, workforce challenges, and capability gaps. The learning solution is built around your context, not adapted from a standard template.'
    },
    {
      q: 'What is the minimum team size for a corporate engagement?',
      a: 'We work with organisations of varying scales. Whether you\'re nominating a cohort of 15 or training 5,000 employees across locations, our delivery model is designed to scale with your requirement.'
    },
    {
      q: 'What delivery modes are available?',
      a: 'We offer instructor-led training (ILT), virtual instructor-led training (VILT), self-paced eLearning, blended formats, and hybrid delivery — depending on your workforce distribution and programme objectives.'
    },
    {
      q: 'How long does it take to design and launch a custom programme?',
      a: 'Timelines vary based on complexity, but our structured process — Consult, Design, Deliver, Measure — is built for speed without compromising quality. Most bespoke engagements are ready for delivery within a few weeks of finalising the brief.'
    },
    {
      q: 'How do you measure the impact of a learning programme?',
      a: 'We use customised ROI frameworks aligned to your business objectives — covering learner engagement, knowledge retention, behavioural change, and on-the-job impact. Kirkpatrick Level 1 through 4 assessments are available depending on programme scope.'
    },
    {
      q: 'Which academic institutions will our employees receive certification from?',
      a: 'Depending on the programme selected, certifications are issued by partnering institutions — IIMs, IITs, XLRI, SPJIMR, or global universities including INSEAD and NUS. All academic partnerships are exclusive and institutionally endorsed.'
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-slate-400 uppercase font-bold text-xs tracking-[0.2em] block mb-4">Frequently Asked Questions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Everything You Need to Know Before You Start</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between bg-brand-gray hover:bg-slate-50 transition-colors text-left"
              >
                <span className="font-bold text-slate-900 pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 pt-2 text-slate-600 leading-relaxed text-sm md:text-base bg-brand-gray">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
