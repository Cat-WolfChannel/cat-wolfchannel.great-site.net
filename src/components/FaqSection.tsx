import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/companyData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-400/10 rounded-full border border-indigo-400/20">
            Häufige Fragen
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-3">
            Wissenswertes zu <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Cat-Wolf Channel</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Alles über unser Team, unsere Vision und das integrierte KI-Portal.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-slate-900/50 border border-slate-800 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-indigo-950 text-indigo-300' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

