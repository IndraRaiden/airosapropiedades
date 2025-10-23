'use client';

import { Home, Bed, Bath } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

const Two = () => {
  const { t } = useLanguage();

  const properties = [
    {
      id: 1,
      image: '/property1.jpg',
      address: '123 Maple Street, Anytown, CA 12345',
      name: 'Ocean Breeze Villa',
      price: '€910,000.00',
      beds: 4,
      baths: 2,
    },
    {
      id: 2,
      image: '/property2.jpg',
      address: '456 Oak Avenue, New York, NY 10001',
      name: 'Jakson House',
      price: '€750,000.00',
      beds: 3,
      baths: 2,
    },
    {
      id: 3,
      image: '/property3.jpg',
      address: '789 Maple Lane, Los Angeles, 90001',
      name: 'Lakeside Cottage',
      price: '€540,000.00',
      beds: 3,
      baths: 1,
    },
  ];

  return (
    <section className="relative z-10 px-8 md:px-16 py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('mostViewed.title')}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t('mostViewed.description')}
          </p>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Property Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-orange-900/20 flex items-center justify-center">
                  <Home className="w-20 h-20 text-white/30" />
                </div>
                {/* Placeholder for actual image */}
                {/* <img src={property.image} alt={property.name} className="w-full h-full object-cover" /> */}
              </div>

              {/* Property Details */}
              <div className="p-6">
                {/* Address */}
                <p className="text-sm text-gray-500 mb-2">
                  {property.address}
                </p>

                {/* Property Stats */}
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Home className="w-4 h-4" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.baths}</span>
                  </div>
                </div>

                {/* Property Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {property.name}
                </h3>

                {/* Price */}
                <p className="text-2xl font-bold text-gray-900">
                  {property.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2">
          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors" />
          <button className="w-3 h-3 rounded-full bg-gray-800" />
          <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default Two;
