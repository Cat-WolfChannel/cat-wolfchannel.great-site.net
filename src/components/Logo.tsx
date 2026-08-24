import React from 'react';
import mascotImg from '../assets/images/cat_wolf_mascot_1787001120536.jpg';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtext?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showSubtext = true }) => {
  const iconDimensions =
    size === 'sm'
      ? 'w-9 h-9'
      : size === 'lg'
      ? 'w-12 h-12'
      : 'w-10 h-10';

  const textTitleSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';

  return (
    <div className="flex items-center gap-3 group select-none">
      {/* Official Mascot Avatar Badge */}
      <div
        className={`relative ${iconDimensions} rounded-xl overflow-hidden border border-indigo-500/40 bg-slate-900 shadow-md shadow-indigo-500/20 transition-all duration-300 group-hover:scale-105 group-hover:border-indigo-400 shrink-0`}
      >
        <img
          src={mascotImg}
          alt="Cat-Wolf Official Logo"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-indigo-500/10 pointer-events-none group-hover:opacity-0 transition-opacity" />
        <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-indigo-400 border-2 border-slate-950" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-heading font-extrabold tracking-tight text-white ${textTitleSize}`}>
            Cat-Wolf
          </span>
          <span className={`font-heading font-light tracking-wide text-indigo-400 ${textTitleSize}`}>
            Channel
          </span>
        </div>
        {showSubtext && (
          <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase mt-0.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
            Group
          </span>
        )}
      </div>
    </div>
  );
};


