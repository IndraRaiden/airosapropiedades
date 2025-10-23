'use client';

import { useState } from 'react';
import { MapPin, Home, DollarSign, Search } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

const Searcher = () => {
  const { t } = useLanguage();
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = () => {
    console.log('Search:', { location, propertyType, priceRange });
    // Add search logic here
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 w-full max-w-4xl mx-auto relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-4 items-end gap-4">
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Location */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-2">
              <MapPin className="w-4 h-4 inline mr-1" />
              {t('searcher.cityStreet')}
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder={t('searcher.locationPlaceholder')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900"
            />
          </div>
          
          {/* Type of Property */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-2">
              <Home className="w-4 h-4 inline mr-1" />
              {t('searcher.typology')}
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 bg-white"
            >
              <option value="">{t('searcher.selectType')}</option>
              <option value="apartment">{t('searcher.type.apartment')}</option>
              <option value="house">{t('searcher.type.house')}</option>
              <option value="terreno">{t('searcher.type.terreno')}</option>
            </select>
          </div>
          
          {/* Price Range */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-2">
              <DollarSign className="w-4 h-4 inline mr-1" />
              {t('searcher.price')}
            </label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 bg-white"
            >
              <option value="">{t('searcher.selectPrice')}</option>
              <option value="0-200000">{t('searcher.priceRange.0-200000')}</option>
              <option value="200000-400000">{t('searcher.priceRange.200000-400000')}</option>
              <option value="400000-600000">{t('searcher.priceRange.400000-600000')}</option>
              <option value="600000-800000">{t('searcher.priceRange.600000-800000')}</option>
              <option value="800000-1000000">{t('searcher.priceRange.800000-1000000')}</option>
              <option value="1000000+">{t('searcher.priceRange.1000000+')}</option>
            </select>
          </div>
        </div>
        
        {/* Search Button */}
        <button 
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-blue-700 transition-colors h-[50px]"
        >
          <Search className="w-5 h-5" />
          <span>{t('searcher.search')}</span>
        </button>
      </div>
    </div>
  );
};

export default Searcher;
