import React, { useState } from 'react';
import { Target, Compass, Flame, CheckCircle2, Shield, HeartHandshake, Maximize2, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ImageModal } from './ImageModal';
import bannerImg from '../assets/images/cat_wolf_banner_1787001133063.jpg';

export const AboutSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const values = [
    {
      icon: Target,
      title: 'Präzision & Agilität',
      desc: 'Schnelle Umsetzung neuer Trends, intuitive Medienkreation und agile Entwicklung innovativer digitaler Produkte.',
    },
    {
      icon: Shield,
      title: 'Stärke im Team',
      desc: 'Zusammenhalt und Synergie in der Cat-Wolf Channel Group. Als Team lösen wir jede Herausforderung mit geballter Kraft.',
    },
    {
      icon: Flame,
      title: 'Leidenschaft & Innovation',
      desc: 'Ständiger Drang, neue Technologien wie KI aktiv zu nutzen und echten Mehrwert für unsere Community zu schaffen.',
    },
    {
      icon: HeartHandshake,
      title: 'Community-First',
      desc: 'Direkter Dialog, Transparenz und Einbindung aller Fans und Partner in unsere fortlaufenden Projekte und Formate.',
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-400/10 rounded-full border border-indigo-400/20">
            Vision & Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Wo Content, Gaming und{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              KI-Zukunft
            </span>{' '}
            verschmelzen.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            {COMPANY_INFO.description}
          </p>
        </div>

        {/* 2-Column Story & Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Showcase Block with Official Banner */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={() => setModalOpen(true)}
              className="relative rounded-3xl overflow-hidden border border-indigo-500/30 hover:border-indigo-400 shadow-2xl bg-slate-900 cursor-pointer group transition-all duration-300"
            >
              <img
                src={bannerImg}
                alt="Cat-Wolf Channel Group Banner - Wolf und Katze in der Natur"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-indigo-400 font-semibold mb-0.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Cat-Wolf Universe</span>
                    </div>
                    <h4 className="font-bold text-white text-base">Cat-Wolf Channel Group</h4>
                  </div>
                  <div className="p-2 rounded-xl bg-indigo-600/30 text-indigo-300 border border-indigo-500/40">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -top-4 -right-4 bg-slate-900 border border-indigo-500/40 rounded-2xl p-4 shadow-xl backdrop-blur-xl hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">100% Eigenentwicklung</div>
                <div className="text-[11px] text-slate-400">Inklusive Cat-Wolf KI</div>
              </div>
            </div>
          </div>

          {/* Core Values Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 hover:bg-slate-900/80 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-4 group-hover:bg-indigo-600/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full-screen Lightbox */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={bannerImg}
        title="Cat-Wolf Universe Panorama"
        caption="Die visuelle Identität der Cat-Wolf Channel Group im Breitbildformat: Harmonie zwischen Natur und zukunftsweisender digitaler Innovation."
      />
    </section>
  );
};


