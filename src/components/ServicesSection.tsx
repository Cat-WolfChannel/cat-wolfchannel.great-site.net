import React from 'react';
import { Sparkles, Clapperboard, Gamepad2, Users2, ArrowUpRight, Check, ArrowRight } from 'lucide-react';
import { SERVICE_PILLARS, KI_PORTAL_URL } from '../data/companyData';

export const ServicesSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case 'Clapperboard':
        return <Clapperboard className="w-5 h-5 text-indigo-400" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-indigo-400" />;
      case 'Users2':
        return <Users2 className="w-5 h-5 text-indigo-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-400/10 rounded-full border border-indigo-400/20">
            Leistungen & Bereiche
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
            Was <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Cat-Wolf Channel</span> antreibt
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Vom exklusiven KI-System über High-End Videoproduktionen bis zu interaktivem Community-Gaming.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICE_PILLARS.map((service) => {
            const isKiService = service.id === 'ki-innovation';

            return (
              <div
                key={service.id}
                className={`relative rounded-3xl p-8 transition-all group flex flex-col justify-between ${
                  isKiService
                    ? 'bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-slate-900/60 border border-indigo-500/40 shadow-xl shadow-indigo-950/20'
                    : 'bg-slate-900/50 border border-slate-800 hover:bg-slate-900/80'
                }`}
              >
                {isKiService && (
                  <div className="absolute -top-3 right-6 px-3.5 py-1 rounded-full bg-indigo-600 text-white text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-indigo-200" />
                    <span>Live & Online</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getIcon(service.iconName)}
                    </div>
                    
                    <span className="text-xs font-mono font-medium text-indigo-300 px-3 py-1 rounded-full bg-slate-950 border border-slate-800">
                      {service.metrics}
                    </span>
                  </div>

                  <h3 className="font-bold text-2xl text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-800"
                      >
                        <Check className="w-3 h-3 text-indigo-400" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  {isKiService ? (
                    <a
                      href={KI_PORTAL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Cat-Wolfy jetzt aufrufen</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors"
                    >
                      <span>Mehr anfragen</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

