'use client';

import { Home, Bed } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function PropertiesPage() {
  const { t } = useLanguage();

  // Sample properties data
  const properties = [
    {
      id: 1,
      name: "Modern Family Home",
      address: "123 Downtown District, City Center, CA 12345",
      price: "€450,000.00",
      beds: 4,
      baths: 3,
    },
    {
      id: 2,
      name: "Luxury Apartment",
      address: "456 City Center Avenue, Metropolitan Area, NY 10001",
      price: "€320,000.00",
      beds: 2,
      baths: 2,
    },
    {
      id: 3,
      name: "Spacious Villa",
      address: "789 Suburban Lane, Residential District, CA 90001",
      price: "€680,000.00",
      beds: 5,
      baths: 4,
    },
    {
      id: 4,
      name: "Cozy Cottage",
      address: "321 Oak Street, Countryside, TX 75001",
      price: "€280,000.00",
      beds: 2,
      baths: 1,
    },
    {
      id: 5,
      name: "Penthouse Suite",
      address: "555 Skyline Boulevard, Downtown, FL 33101",
      price: "€890,000.00",
      beds: 3,
      baths: 3,
    },
    {
      id: 6,
      name: "Beach House",
      address: "777 Ocean Drive, Coastal Area, CA 92037",
      price: "€1,200,000.00",
      beds: 4,
      baths: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('properties.hero.title')}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t('properties.hero.description')}
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">{t('properties.cta.title')}</h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('properties.cta.description')}
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            {t('properties.cta.button')}
          </button>
        </div>
      </section>
    </div>
  );
}
