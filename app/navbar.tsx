'use client';

import { Languages, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './context/LanguageContext';
import { useState } from 'react';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#1e2a47] text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity" onClick={closeMenu}>
          <Image src="/naviico.png" alt="Logo" width={96} height={96} className="w-24 h-24 brightness-0 invert" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <Link href="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
          <Link href="/contact" className="hover:text-white transition-colors">{t('nav.contacts')}</Link>
          <Link href="/properties" className="hover:text-white transition-colors">{t('nav.properties')}</Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-white/10 border border-transparent px-4 py-2 rounded-full hover:bg-white/20 transition-colors text-sm font-semibold"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Languages className="w-4 h-4" />
            <span className="uppercase">{language}</span>
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#1e2a47] border-t border-white/10">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-2">
            <Link 
              href="/" 
              className="px-4 py-3 hover:bg-white/10 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              {t('nav.home')}
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-3 hover:bg-white/10 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              {t('nav.contacts')}
            </Link>
            <Link 
              href="/properties" 
              className="px-4 py-3 hover:bg-white/10 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              {t('nav.properties')}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
