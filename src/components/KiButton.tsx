import React from 'react';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { KI_PORTAL_URL } from '../data/companyData';

interface KiButtonProps {
  variant?: 'nav' | 'hero' | 'spotlight' | 'floating' | 'footer';
  className?: string;
}

export const KiButton: React.FC<KiButtonProps> = ({
  variant = 'nav',
  className = '',
}) => {
  if (variant === 'nav') {
    return (
      <a
        id="nav-ki-button"
        href={KI_PORTAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/30 text-sm font-semibold tracking-wide hover:scale-105 active:scale-95 ${className}`}
        title="Cat-Wolfy KI öffnen"
      >
        <span>Cat-Wolfy</span>
        <ArrowRight className="w-4 h-4" />
      </a>
    );
  }

  if (variant === 'hero') {
    return (
      <a
        id="hero-ki-main-button"
        href={KI_PORTAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full transition-all flex items-center justify-center gap-3 shadow-xl shadow-indigo-600/40 text-base sm:text-lg font-bold tracking-tight hover:scale-105 active:scale-95 group ${className}`}
      >
        <Sparkles className="w-5 h-5 text-indigo-200" />
        <span>Cat-Wolfy öffnen</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>
    );
  }

  if (variant === 'spotlight') {
    return (
      <a
        id="spotlight-ki-launch-button"
        href={KI_PORTAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-indigo-600/30 text-base sm:text-lg font-bold hover:scale-102 active:scale-98 group ${className}`}
      >
        <span>Cat-Wolfy öffnen</span>
        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </a>
    );
  }

  // Floating quick-access variant
  return (
    <a
      id="floating-ki-button"
      href={KI_PORTAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-indigo-600 text-white backdrop-blur-md border border-slate-800 hover:border-indigo-500 shadow-xl shadow-slate-950/60 hover:shadow-indigo-600/40 hover:scale-105 active:scale-95 transition-all duration-300 group ${className}`}
      title="Cat-Wolfy KI Schnellzugriff"
    >
      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
      <span className="font-heading font-bold text-sm tracking-wide text-indigo-300 group-hover:text-white">
        Cat-Wolfy
      </span>
      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
    </a>
  );
};

