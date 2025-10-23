'use client';

import { Mail, Phone } from 'lucide-react';
import Form from './component/form';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('contact.hero.title')}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t('contact.hero.description')}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Form />

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('contact.info.title')}</h2>
                <p className="text-gray-600 text-lg mb-8">
                  {t('contact.info.description')}
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('contact.info.email')}</h3>
                    <p className="text-gray-600">airosapropiedades@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('contact.info.phone')}</h3>
                    <p className="text-gray-600">+52 6242392710</p>
                    <p className="text-gray-600">+52 7713583929</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 mt-8">
                <h3 className="font-bold text-gray-900 mb-4 text-xl">{t('contact.hours.title')}</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>{t('contact.hours.monday')}</span>
                    <span className="font-semibold">{t('contact.hours.mondayTime')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.hours.saturday')}</span>
                    <span className="font-semibold">{t('contact.hours.saturdayTime')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.hours.sunday')}</span>
                    <span className="font-semibold">{t('contact.hours.sundayTime')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
