import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-slate-200 py-4' 
          : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-brand-dark tracking-tight">
            Times<span className="text-timesred">Pro</span>
          </span>
          <div className="hidden sm:block h-6 w-px bg-slate-300 mx-2" />
          <span className="hidden sm:block text-sm font-medium text-slate-500 uppercase tracking-wider">
            Enterprise B2B
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['The Gap', 'Solutions', 'Process', 'Partners'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-slate-600 hover:text-timesred transition-colors"
            >
              {item}
            </a>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#lead-form"
            className="bg-timesred hover:bg-timesred-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-timesred/20 transition-colors"
          >
            Get Started
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
