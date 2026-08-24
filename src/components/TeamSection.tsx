import React, { useState } from 'react';
import { Users, Award, Code2, Sparkles, ShieldAlert, CheckCircle, Maximize2, MessageCircle, ExternalLink } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/companyData';
import { ImageModal } from './ImageModal';

export const TeamSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; caption: string } | null>(null);

  return (
    <section id="team" className="py-24 relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-400/10 rounded-full border border-indigo-400/20">
              The Founders & Leadership
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Die <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Cat-Wolf Channel Group</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-3">
              Die Gründer und CEOs der Cat-Wolf Channel Group: Matthias & Sandy.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium self-start md:self-auto">
            <CheckCircle className="w-4 h-4 text-indigo-400" />
            <span>Offizielle Gruppen-Leitung</span>
          </div>
        </div>

        {/* Team Grid: 2 Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className={`rounded-3xl bg-slate-900/50 border transition-all flex flex-col justify-between group ${
                member.id === 'matthias'
                  ? 'border-indigo-500/50 shadow-xl shadow-indigo-950/40 hover:border-indigo-400 hover:bg-slate-900/80 p-7'
                  : 'border-amber-500/50 shadow-xl shadow-amber-950/40 hover:border-amber-400 hover:bg-slate-900/80 p-7'
              }`}
            >
              <div>
                {/* Member Avatar / Visual */}
                <div
                  className="relative mb-5 cursor-pointer"
                  onClick={() => setSelectedImage({
                    src: member.avatar,
                    title: `${member.name} (${member.role})`,
                    caption: member.bio,
                  })}
                >
                  <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute bottom-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 ${
                        member.id === 'matthias'
                          ? 'bg-indigo-950/95 border border-indigo-500/50 text-indigo-300'
                          : member.id === 'sandy'
                          ? 'bg-amber-950/95 border border-amber-500/50 text-amber-300'
                          : 'bg-slate-900/90 border border-slate-700 text-slate-300'
                      }`}>
                        {(member.id === 'matthias' || member.id === 'sandy') && (
                          <Sparkles className={`w-3 h-3 ${member.id === 'sandy' ? 'text-amber-400' : 'text-indigo-400'}`} />
                        )}
                        {member.badge}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg bg-slate-950/80 text-slate-300">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-xl text-white group-hover:text-indigo-300 transition-colors">
                    {member.name}
                  </h3>
                  {(member.id === 'matthias' || member.id === 'sandy') && (
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md border ${
                      member.id === 'sandy'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : 'bg-indigo-600/20 text-indigo-400 border-indigo-500/30'
                    }`}>
                      CEO
                    </span>
                  )}
                </div>
                <p className="text-xs font-semibold text-indigo-400 mb-3">
                  {member.role}
                </p>

                <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">
                  {member.bio}
                </p>

                {member.discordUrl && (
                  <div className="mb-4">
                    <a
                      href={member.discordUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5865F2]/15 hover:bg-[#5865F2]/25 border border-[#5865F2]/30 text-[#7983f5] hover:text-white text-xs font-semibold transition-all group/discord"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Discord Profil</span>
                      <ExternalLink className="w-3 h-3 opacity-70 group-hover/discord:opacity-100" />
                    </a>
                  </div>
                )}

                {member.whatsappChannelUrl && (
                  <div className="mb-4">
                    <a
                      href={member.whatsappChannelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 hover:text-white text-xs font-semibold transition-all group/whatsapp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp Kanal: Katzen</span>
                      <ExternalLink className="w-3 h-3 opacity-70 group-hover/whatsapp:opacity-100" />
                    </a>
                  </div>
                )}
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Kernkompetenzen:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2.5 py-1 rounded-full bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Group Banner Footer */}
        <div className="mt-12 rounded-3xl bg-slate-900/50 border border-slate-800 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">
                Möchtest du Teil der Cat-Wolf Channel Group werden?
              </h4>
              <p className="text-xs text-slate-400">
                Wir suchen laufend talentierte Creators, Moderatoren und KI-Enthusiasten.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-colors shrink-0"
          >
            Jetzt Bewerben / Anfragen
          </a>
        </div>
      </div>

      {/* Lightbox for Team Avatars */}
      {selectedImage && (
        <ImageModal
          isOpen={true}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          title={selectedImage.title}
          caption={selectedImage.caption}
        />
      )}
    </section>
  );
};

