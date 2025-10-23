'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <>
      <div className="relative w-full h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Modern house"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-transparent"></div>


        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-16 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              {t('hero.title1')}
              <br />
              {t('hero.title2')}
            </h1>
            <p className="text-lg text-white/80 mb-10 max-w-lg">
              {t('hero.description')}
            </p>
            <Link href="/properties" className="flex items-center gap-3 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border border-white/30 inline-flex">
              <span>{t('hero.searchButton')}</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default HeroSection;