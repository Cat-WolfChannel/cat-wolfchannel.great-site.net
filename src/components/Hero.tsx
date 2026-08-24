import React, { useState } from 'react';
import { ArrowRight, Sparkles, ExternalLink, ShieldCheck, Zap, Users, Maximize2, Eye } from 'lucide-react';
import { KiButton } from './KiButton';
import { COMPANY_INFO, KI_PORTAL_URL } from '../data/companyData';
import { ImageModal } from './ImageModal';
import mascotImg from '../assets/images/cat_wolf_mascot_1787001120536.jpg';

export const Hero: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 sm:pt-36 pb-20 flex flex-col justify-center overflow-hidden bg-slate-950"
    >
      {/* Sleek subtle background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 md:px-10 z-10 w-full">
        {/* Main 2-Column Responsive Hero: Optimized for both Mobile & Desktop (PC) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          
          {/* Text & Action Column (Left on PC, Flow order on mobile) */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Sleek Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-400/10 rounded-full border border-indigo-400/20">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span>Cat-Wolf Channel Group &middot; Official Space</span>
            </div>

            {/* Hero Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
              Willkommen beim{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200">
                Cat-Wolf Channel
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 sm:text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8 text-center lg:text-left">
              Das offizielle Portal der <strong className="text-white font-semibold">Cat-Wolf Channel Group</strong>. 
              Erlebe erstklassigen Content, unsere Community und den direkten Zugang zu unserem 
              integrierten KI-Assistenten <strong className="text-indigo-400 font-semibold">Cat-Wolfy</strong>.
            </p>

            {/* Mobile Mascot Visual Callout (Visible on small screens right between text and CTA) */}
            <div className="w-full max-w-sm mx-auto mb-8 block lg:hidden">
              <div
                onClick={() => setLightboxOpen(true)}
                className="relative rounded-3xl overflow-hidden border-2 border-indigo-500/40 bg-slate-900 shadow-2xl shadow-indigo-950/60 cursor-pointer group transition-all duration-300 active:scale-[0.98]"
              >
                <div className="aspect-[3/4] max-h-[380px] w-full overflow-hidden relative">
                  <img
                    src={mascotImg}
                    alt="Cat-Wolf Channel Offizielles Artwork - Wolf und Katze"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Mobile Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-left">
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Cat-Wolf Artwork</span>
                      </div>
                      <div className="text-[10px] text-slate-400">Tippen für Vollbild-Ansicht</div>
                    </div>
                    <div className="p-1.5 rounded-xl bg-indigo-600/30 text-indigo-300 border border-indigo-500/40">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto mb-10">
              <KiButton variant="hero" />

              <a
                id="hero-explore-button"
                href="#about"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-900 border border-slate-800 text-base font-medium transition-all text-center"
              >
                Vision & Team entdecken
              </a>
            </div>

            {/* Feature Highlights on Desktop/Tablet */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-xl text-left pt-6 border-t border-slate-800/80">
              <div className="p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/70">
                <div className="text-indigo-400 text-xs font-bold mb-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Offiziell
                </div>
                <div className="text-white text-xs font-medium">Cat-Wolf Group</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/70">
                <div className="text-indigo-400 text-xs font-bold mb-1 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> KI Powered
                </div>
                <div className="text-white text-xs font-medium">24/7 Live Portal</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/70">
                <div className="text-indigo-400 text-xs font-bold mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" /> Community
                </div>
                <div className="text-white text-xs font-medium">Creator Hub</div>
              </div>
            </div>
          </div>

          {/* Featured Mascot Card (Prominently featured on PC / Desktop) */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative group">
              {/* Subtle ambient glow behind card */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div
                onClick={() => setLightboxOpen(true)}
                className="relative rounded-3xl overflow-hidden border-2 border-indigo-500/30 hover:border-indigo-400 bg-slate-900/90 shadow-2xl shadow-indigo-950/80 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
              >
                {/* Artwork Aspect Frame */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={mascotImg}
                    alt="Cat-Wolf Channel Offizielles Artwork - Majestätischer Wolf und Katze"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Top Badge: Official Artwork */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md text-xs font-bold text-indigo-300 border border-indigo-500/40 flex items-center gap-1.5 shadow-lg">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Cat-Wolf Artwork</span>
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md text-xs font-medium text-slate-300 border border-slate-700/80 flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Klicken zum Vergrößern</span>
                    </span>
                  </div>

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-bold text-base">Das Cat-Wolf Symbol</h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Der stolze Wolf & die scharfsinnige Katze im Einklang
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Sleek 3-Card Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
          {/* Card 1 */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between hover:bg-slate-900/80 transition-all group">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                Media Creation
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Expert digital production, livestream entertainment and brand storytelling for the modern age.
              </p>
            </div>
            <div className="text-indigo-400 font-bold text-lg mt-8">01</div>
          </div>

          {/* Card 2 - Highlighted Gradient */}
          <div className="bg-gradient-to-br from-indigo-900/30 to-slate-900/60 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group">
            <div className="z-10">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                The Group
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our team, <strong className="text-white">Cat-Wolf Channel Group</strong>, consists of developers, designers, and visionaries.
              </p>
            </div>
            <div className="text-indigo-300/60 font-bold text-lg mt-8 z-10">02</div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Card 3 - AI Direct Link */}
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between hover:bg-slate-900/80 transition-all group">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                AI Innovation
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Access our intelligent automation tools and conversational model directly via our specialized portal.
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <span className="text-indigo-400 font-bold text-lg">03</span>
              <a
                href={KI_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 font-bold hover:text-indigo-300 hover:underline cursor-pointer flex items-center gap-1.5 text-sm"
              >
                <span>Cat-Wolfy öffnen</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Live Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto text-left">
          {COMPANY_INFO.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 transition-all hover:border-slate-700"
            >
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400">
                {stat.label}
              </div>
              <div className="text-[11px] text-indigo-400 font-semibold mt-1">
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Full-screen Artwork Modal */}
      <ImageModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={mascotImg}
        title="Cat-Wolf Channel Artwork"
        caption="Das offizielle Maskottchen-Artwork der Cat-Wolf Channel Group: Der majestätische Wolf und die scharfsinnige Katze als Symbol für Teamstärke, Agilität und kreative Innovation."
      />
    </section>
  );
};


