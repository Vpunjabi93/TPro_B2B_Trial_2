/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionsSection } from './components/SolutionsSection';
import { ProcessSection } from './components/ProcessSection';
import { EdgeSection } from './components/EdgeSection';
import { PartnersSection } from './components/PartnersSection';
import { ClientsSection } from './components/ClientsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA, Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionsSection />
        <ProcessSection />
        <EdgeSection />
        <PartnersSection />
        <ClientsSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
