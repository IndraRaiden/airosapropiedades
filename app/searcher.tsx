'use client';

import { ChevronDown, Search } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

const Searcher = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 w-full max-w-4xl mx-auto relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* City Street */}
          <div className="p-2">
            <label className="block text-xs font-semibold text-gray-500 mb-1">{t('searcher.cityStreet')}</label>
            <div className="flex items-center justify-between text-gray-900 font-bold">
              <span>123Street</span>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          {/* Typology of rent */}
          <div className="p-2 sm:border-l sm:border-r border-gray-200">
            <label className="block text-xs font-semibold text-gray-500 mb-1">{t('searcher.typology')}</label>
            <div className="flex items-center justify-between text-gray-900 font-bold">
              <span>Villa</span>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          {/* Price */}
          <div className="p-2">
            <label className="block text-xs font-semibold text-gray-500 mb-1">{t('searcher.price')}</label>
            <div className="flex items-center justify-between text-gray-900 font-bold">
              <span>€ 950.000,00</span>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
        {/* Search Button */}
        <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-blue-700 transition-colors">
          <Search className="w-5 h-5" />
          <span>{t('searcher.search')}</span>
        </button>
      </div>
    </div>
  );
};

export default Searcher;
