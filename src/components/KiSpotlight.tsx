import React, { useState } from 'react';
import { Sparkles, Bot, ExternalLink, Copy, Check, Terminal, Cpu, Lightbulb, MessageSquare, ArrowRight } from 'lucide-react';
import { KI_PORTAL_URL } from '../data/companyData';

export const KiSpotlight: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(KI_PORTAL_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const kiHighlights = [
    {
      icon: MessageSquare,
      title: 'Interaktiver KI-Chat',
      desc: 'Direkte und präzise Konversationen mit dem speziell abgestimmten Cat-Wolfy KI Modell.',
    },
    {
      icon: Lightbulb,
      title: 'Kreative Content-Ideen',
      desc: 'Inspiration für Videos, Livestreams, Gaming-Formate und redaktionelle Beiträge in Sekunden.',
    },
    {
      icon: Terminal,
      title: 'Code & Scripting Support',
      desc: 'Unterstützung bei Programmierung, Skripten und Web-Tools durch maschinelles Lernen.',
    },
    {
      icon: Cpu,
      title: 'High-Speed Neural Engine',
      desc: 'Sofortige Antwortgenerierung optimiert für alle Endgeräte mit Cat-Wolfy.',
    },
  ];

  return (
    <section id="ki-portal" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-800">
      {/* Background Accent Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-400/10 rounded-full border border-indigo-400/20">
            Next-Gen AI Systems
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Cat-Wolfy <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">KI-Assistent</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Klicke auf den <strong className="text-white">Cat-Wolfy Knopf</strong>, um direkt zu{' '}
            <strong className="text-indigo-400">Cat-Wolfy</strong>{' '}
            zu gelangen.
          </p>
        </div>

        {/* Featured Showcase Box */}
        <div className="rounded-3xl bg-slate-900/50 border border-slate-800 p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Col: Features & Direct Link Action */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Cat-Wolfy KI Assistent
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Entwickelt & bereitgestellt von der Cat-Wolf Channel Group
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">
                Unser intelligenter KI-Begleiter Cat-Wolfy unterstützt dich bei allen Fragen, liefert kreativen Input für neue Projekte und steht rund um die Uhr als verlässlicher Partner zur Verfügung.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  id="ki-spotlight-direct-link"
                  href={KI_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-full transition-all flex items-center gap-2.5 shadow-lg shadow-indigo-600/30 font-semibold text-base hover:scale-105 active:scale-95"
                >
                  <span>Cat-Wolfy öffnen</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Copy Link Button */}
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-sm font-medium transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Link kopiert!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Link kopieren</span>
                    </>
                  )}
                </button>
              </div>

              {/* URL Display */}
              <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between overflow-x-auto">
                <span className="text-indigo-400 font-medium truncate">
                  Cat-Wolfy Live KI
                </span>
                <span className="text-slate-500 shrink-0 ml-2">Online</span>
              </div>
            </div>

            {/* Right Col: Feature Highlights Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {kiHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-indigo-500/40 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600/20 transition-colors mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-white text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

