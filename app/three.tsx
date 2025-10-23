'use client';

import { Home, ArrowRight } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

const Three = () => {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 px-8 md:px-16 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Visual */}
          <div className="relative">
            <div className="relative h-96 bg-gradient-to-br from-blue-900 to-blue-600 rounded-3xl overflow-hidden shadow-2xl">
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-800/50 to-orange-600/30" />
              
              {/* House icon overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-8 border-4 border-white/30">
                  <Home className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* Placeholder for actual image */}
              {/* <img src="/cta-house.jpg" alt="Modern house" className="w-full h-full object-cover" /> */}
            </div>
          </div>

          {/* Right Side - CTA Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t('cta.title1')}
              <br />
              {t('cta.title2')}
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('cta.description')}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('cta.feature1.title')}</h4>
                  <p className="text-gray-600">{t('cta.feature1.description')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('cta.feature2.title')}</h4>
                  <p className="text-gray-600">{t('cta.feature2.description')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('cta.feature3.title')}</h4>
                  <p className="text-gray-600">{t('cta.feature3.description')}</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                {t('cta.button')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Three;
