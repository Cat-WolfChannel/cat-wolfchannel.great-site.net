import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { KiSpotlight } from './components/KiSpotlight';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TeamSection } from './components/TeamSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { KiButton } from './components/KiButton';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white flex flex-col">
      {/* Top Fixed Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Hero />
        <KiSpotlight />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <ProjectShowcase />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Fast-Access KI Button */}
      <KiButton variant="floating" />
    </div>
  );
}

