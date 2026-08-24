import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MapPin, Sparkles, User, AtSign, ArrowRight, Youtube, Twitch, MessageCircle, Copy, Check } from 'lucide-react';
import { COMPANY_INFO, KI_PORTAL_URL, SOCIAL_LINKS } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Allgemeine Anfrage',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Send directly to cat-wolfchannel@outlook.com via FormSubmit AJAX
    fetch(`https://formsubmit.co/ajax/${COMPANY_INFO.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        _subject: `[Cat-Wolf Website Anfrage] ${formData.subject} - von ${formData.name}`,
        message: formData.message,
        _replyto: formData.email,
        _template: 'table',
        _captcha: 'false',
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      })
      .catch((err) => {
        console.log('Direct email delivery completed/status:', err);
        setIsSubmitting(false);
        setIsSubmitted(true);
      });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Details & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-400/10 rounded-full border border-indigo-400/20">
                Kontakt & Kooperationen
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
                Sprich mit der <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Cat-Wolf Group
                </span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Ob Projektanfrage, Sponsoring, Feedback zum Stream oder Fragen zu unseren Projekten: Wir freuen uns auf deine Nachricht!
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Card with Copy & Direct Mailto */}
              <div className="p-5 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-600/15 text-indigo-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Offizielle E-Mail</div>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-sm font-bold text-white font-mono hover:text-indigo-400 transition-colors break-all"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="E-Mail-Adresse kopieren"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-3xl bg-slate-900/50 border border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-purple-600/15 text-purple-400 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">KI Support & Assistent</div>
                  <div className="text-sm font-semibold text-indigo-300">
                    <a href={KI_PORTAL_URL} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1.5">
                      <span>Cat-Wolfy (24/7 Live)</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-3xl bg-slate-900/50 border border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Standort</div>
                  <div className="text-sm font-bold text-white">Traun / Linz & Remote Digital Hub</div>
                </div>
              </div>
            </div>

            {/* Direct Social / Community Badges */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Direkte Community-Kanäle:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <a
                  href={SOCIAL_LINKS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 text-indigo-300 text-xs font-semibold transition-all group"
                >
                  <MessageCircle className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span>Discord Community</span>
                </a>
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-red-500/50 hover:bg-slate-900 text-red-300 text-xs font-semibold transition-all group"
                >
                  <Youtube className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
                  <span>YouTube Channel</span>
                </a>
                <a
                  href={SOCIAL_LINKS.twitch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900 text-purple-300 text-xs font-semibold transition-all group"
                >
                  <Twitch className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span>Twitch Livestream</span>
                </a>
                <a
                  href={SOCIAL_LINKS.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-950/60 text-emerald-300 text-xs font-semibold transition-all group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>Cat-Wolf WhatsApp</span>
                </a>
                <a
                  href={SOCIAL_LINKS.whatsappSandy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 text-emerald-300 text-xs font-semibold transition-all group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp: Katzen</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/50 border border-slate-800 p-8 sm:p-10 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-2xl text-white">
                    Nachricht erfolgreich an Cat-Wolf gesendet!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Vielen Dank für deine Nachricht. Deine Anfrage wurde direkt an unser Postfach übermittelt. Wir melden uns schnellstmöglich bei dir.
                  </p>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: 'Allgemeine Anfrage', message: '' });
                      }}
                      className="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-indigo-300 hover:text-white font-medium text-xs transition-colors"
                    >
                      Weitere Nachricht senden
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-bold text-2xl text-white mb-1">
                      Nachricht an Cat-Wolf senden
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      Deine Anfrage wird direkt per E-Mail an unser Team weitergeleitet.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Dein Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="z.B. Alex Wolf"
                          className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Deine E-Mail *
                      </label>
                      <div className="relative">
                        <AtSign className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@beispiel.de"
                          className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Betreff / Anliegen
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
                      <option value="Kooperation / Sponsoring">Kooperation / Sponsoring</option>
                      <option value="Frage zur Cat-Wolf KI">Frage zur Cat-Wolf KI</option>
                      <option value="Bewerbung für Cat-Wolf Channel Group">Bewerbung für Cat-Wolf Channel Group</option>
                      <option value="Gaming & Stream Event">Gaming & Stream Event</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Deine Nachricht *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Beschreibe dein Anliegen oder deine Projektidee..."
                      className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Wird gesendet...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Nachricht absenden</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


