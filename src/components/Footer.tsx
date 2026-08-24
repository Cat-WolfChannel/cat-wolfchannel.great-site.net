import React from 'react';
import { Sparkles, ArrowRight, Github, Youtube, Twitch, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { KI_PORTAL_URL, COMPANY_INFO, SOCIAL_LINKS } from '../data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              {COMPANY_INFO.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={KI_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950 border border-indigo-500/40 text-indigo-300 text-xs font-semibold hover:bg-indigo-900 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Cat-Wolfy Live</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={SOCIAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium hover:text-white hover:bg-slate-800 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-indigo-400" />
                <span>Discord</span>
              </a>

              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium hover:text-white hover:bg-slate-800 transition-colors"
              >
                <Youtube className="w-3.5 h-3.5 text-red-400" />
                <span>YouTube</span>
              </a>

              <a
                href={SOCIAL_LINKS.twitch}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium hover:text-white hover:bg-slate-800 transition-colors"
              >
                <Twitch className="w-3.5 h-3.5 text-purple-400" />
                <span>Twitch</span>
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">Über uns</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services & Bereiche</a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">Cat-Wolf Channel Group</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Projekte & Software</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Kontakt</a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs text-indigo-400 hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: KI & Platform */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">
              KI & Plattform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={KI_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 font-semibold hover:text-indigo-300 inline-flex items-center gap-1"
                >
                  <span>Cat-Wolfy</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={KI_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Cat-Wolfy KI Assistant
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">KI FAQ & Hilfe</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Tech Architecture</a>
              </li>
            </ul>
          </div>

          {/* Col 5: Community Channels */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">
              Community & Channels
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={SOCIAL_LINKS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-indigo-300 transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-xs text-white">Discord Server</span>
                    <span className="text-[11px] text-slate-500">discord.gg/rVcNPEh5vu</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-red-300 transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-red-950/80 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0">
                    <Youtube className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-xs text-white">YouTube Kanal</span>
                    <span className="text-[11px] text-slate-500">@cat-wolfchannel</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.twitch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-purple-300 transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors shrink-0">
                    <Twitch className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-xs text-white">Twitch Stream</span>
                    <span className="text-[11px] text-slate-500">catwolfchannelgroup</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-300 transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-xs text-white">Cat-Wolf WhatsApp</span>
                    <span className="text-[11px] text-slate-500">Offizieller Kanal</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.whatsappSandy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-300 transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-xs text-white">WhatsApp: Katzen</span>
                    <span className="text-[11px] text-slate-500">Kanal von Sandy (CEO)</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300">Cat-Wolf Channel</strong> &amp; <strong className="text-slate-300">Cat-Wolf Channel Group</strong>. Alle Rechte vorbehalten.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Entwickelt für High-End Content &amp; intelligente</span>
            <a href={KI_PORTAL_URL} target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-semibold hover:underline ml-1">
              KI
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

