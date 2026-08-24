import React from 'react';
import { X, ZoomIn, Sparkles, Shield, Download } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title?: string;
  caption?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title = 'Offizielles Cat-Wolf Artwork',
  caption = 'Der majestätische Wolf & die treue Katze – das offizielle Symbol der Cat-Wolf Channel Group.',
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="artwork-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-950/60 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
            <h3 className="text-white font-bold text-base sm:text-lg">{title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Frame */}
        <div className="relative bg-slate-950 flex items-center justify-center max-h-[70vh] overflow-hidden p-2 sm:p-4">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[65vh] w-auto object-contain rounded-2xl shadow-2xl mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Footer info & actions */}
        <div className="p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl">{caption}</p>
            <div className="flex items-center gap-3 mt-2 text-xs text-indigo-400 font-medium">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> High Definition
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5" /> Cat-Wolf Channel Group
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors shrink-0"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
