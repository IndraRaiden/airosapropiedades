'use client';

import { Home, Languages } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from './context/LanguageContext';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <header className="bg-[#1e2a47] text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Home className="w-7 h-7" />
          <span className="text-xl font-bold">{t('nav.brandName')}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <Link href="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
          <Link href="/contact" className="hover:text-white transition-colors">{t('nav.contacts')}</Link>
          <Link href="/properties" className="hover:text-white transition-colors">{t('nav.properties')}</Link>
        </nav>
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 bg-white/10 border border-transparent px-4 py-2 rounded-full hover:bg-white/20 transition-colors text-sm font-semibold"
          title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        >
          <Languages className="w-4 h-4" />
          <span className="uppercase">{language}</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
