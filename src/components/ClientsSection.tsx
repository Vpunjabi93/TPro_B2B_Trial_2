import { motion } from 'motion/react';

export function ClientsSection() {
  const industries = ['BFSI', 'IT', 'Manufacturing', 'Pharma', 'Retail', 'Tech', 'FMCG', 'Consulting'];

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-slate-400 uppercase font-bold text-xs tracking-[0.2em] block mb-4">Our Clientele</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Trusted by India's Leading Organisations
          </h2>
          <p className="text-slate-600 text-lg">
            From Fortune 500s to fast-growing Indian enterprises — across BFSI, IT, Manufacturing, Pharma, and beyond.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {[...Array(10)].map((_, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ opacity: 0.8 }}
              className="h-20 bg-brand-gray border border-slate-100 rounded-2xl flex items-center justify-center p-6 grayscale"
            >
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {industries[idx % industries.length]} Logo
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
