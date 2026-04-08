import { motion } from 'motion/react';
import { PlayCircle } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      role: 'VP, Human Resources',
      company: 'Leading IT Enterprise',
      img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800'
    },
    {
      role: 'Chief Learning Officer',
      company: 'Global BFSI Corporation',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'
    },
    {
      role: 'Head of Sales Strategy',
      company: 'Top FMCG Brand',
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-gray border-t border-slate-200">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Client Speak</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What Our Enterprise Partners Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-video rounded-[32px] overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={t.img}
                alt={t.role}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors flex items-center justify-center">
                <PlayCircle className="w-16 h-16 text-white opacity-90 group-hover:scale-110 transition-transform drop-shadow-2xl" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-dark/90 to-transparent">
                <h4 className="text-white font-bold text-lg">{t.role}</h4>
                <p className="text-slate-300 text-sm">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
