import React, { useState } from 'react';
import { Sparkles, ExternalLink, Calendar, CheckCircle2, ArrowRight, Youtube, Twitch, MessageCircle } from 'lucide-react';
import { CHANNEL_PROJECTS, KI_PORTAL_URL } from '../data/companyData';
import { ChannelProject } from '../types';

export const ProjectShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');

  const categories = ['Alle', 'KI & Tech', 'Content Creation', 'Gaming & Streaming', 'Community'];

  const filteredProjects =
    selectedCategory === 'Alle'
      ? CHANNEL_PROJECTS
      : CHANNEL_PROJECTS.filter((p) => p.category === selectedCategory);

  const getActionDetails = (project: ChannelProject) => {
    if (!project.link) return null;
    if (project.id === 'p1') {
      return {
        label: 'Cat-Wolfy KI jetzt öffnen',
        icon: Sparkles,
        bgClass: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30',
      };
    }
    if (project.id === 'p2') {
      return {
        label: 'YouTube-Kanal aufrufen',
        icon: Youtube,
        bgClass: 'bg-red-600 hover:bg-red-500 text-white shadow-red-600/30',
      };
    }
    if (project.id === 'p3') {
      return {
        label: 'Twitch-Kanal besuchen',
        icon: Twitch,
        bgClass: 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-600/30',
      };
    }
    if (project.id === 'p4') {
      return {
        label: 'Discord Server beitreten',
        icon: MessageCircle,
        bgClass: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30',
      };
    }
    return {
      label: 'Mehr erfahren',
      icon: ExternalLink,
      bgClass: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30',
    };
  };

  return (
    <section id="projects" className="py-24 relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-400/10 rounded-full border border-indigo-400/20">
              Aktuelle Projekte & Releases
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              Highlight-Formate & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Software</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project: ChannelProject) => {
            const isKiProject = project.category === 'KI & Tech';
            const action = getActionDetails(project);

            return (
              <div
                key={project.id}
                className={`rounded-3xl overflow-hidden bg-slate-900/50 border transition-all flex flex-col justify-between group ${
                  isKiProject
                    ? 'border-indigo-500/40 shadow-xl shadow-indigo-950/20'
                    : 'border-slate-800 hover:bg-slate-900/80'
                }`}
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative h-60 overflow-hidden bg-slate-950">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-xs font-semibold text-indigo-300 border border-slate-700">
                        {project.category}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          project.status === 'Live'
                            ? 'bg-indigo-950/90 text-indigo-300 border border-indigo-500/40'
                            : 'bg-slate-900/90 text-slate-300 border border-slate-700'
                        }`}
                      >
                        ● {project.status}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 text-xs font-mono text-slate-400 flex items-center gap-1.5 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <h3 className="font-bold text-2xl text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {project.highlights.map((hl) => (
                        <div key={hl} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 sm:p-8 pt-0">
                  {action ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm shadow-lg transition-all ${action.bgClass}`}
                    >
                      <action.icon className="w-4 h-4" />
                      <span>{action.label}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="text-xs text-slate-400 flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                      <span>Produktion durch Cat-Wolf Channel Group</span>
                      <span className="text-indigo-400 font-semibold">Exklusiv</span>
                    </div>
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


