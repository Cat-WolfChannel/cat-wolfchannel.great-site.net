import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Users, Sparkles, FolderGit2, Mail, Info } from 'lucide-react';
import { Logo } from './Logo';
import { KiButton } from './KiButton';
import { KI_PORTAL_URL } from '../data/companyData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Vision', href: '#about', icon: Info },
    { label: 'Services', href: '#services', icon: Sparkles },
    { label: 'Team', href: '#team', icon: Users },
    { label: 'Projekte', href: '#projects', icon: FolderGit2 },
    { label: 'Kontakt', href: '#contact', icon: Mail },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-slate-950/60 py-4'
          : 'bg-slate-950/50 backdrop-blur-md border-b border-slate-800/80 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-xl">
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button: Sleek KI Button */}
        <div className="flex items-center space-x-4">
          <KiButton variant="nav" />

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Menü umschalten"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-200 hover:bg-slate-900 font-medium text-base transition-colors"
                >
                  <Icon className="w-4 h-4 text-indigo-400" />
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={KI_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-center shadow-lg shadow-indigo-600/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Cat-Wolfy öffnen</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

